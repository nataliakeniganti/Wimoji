#!/usr/bin/env python3
import argparse
from pathlib import Path
import sys

from fontTools.ttLib import TTFont


FONT_SPECS = {
    "Wimoji-outline-glyf": (("glyf",), None, "outline"),
    "Wimoji-color-cbdt": (("CBDT", "CBLC"), None, "bitmap"),
    "Wimoji-color-colr0_svg": (("COLR", "SVG "), 0, "color"),
    "Wimoji-color-colr1_svg": (("COLR", "SVG "), 1, "color"),
    "Wimoji-color-glyf_colr_0": (("glyf", "COLR"), 0, "color"),
    "Wimoji-color-glyf_colr_1": (("glyf", "COLR"), 1, "color"),
    "Wimoji-color-picosvgz": (("SVG ",), None, "color"),
    "Wimoji-color-sbix": (("sbix",), None, "bitmap"),
    "Wimoji-color-untouchedsvgz": (("SVG ",), None, "raw-color"),
}
SHARDED_FONTS = {"Wimoji-color-colr0_svg", "Wimoji-color-glyf_colr_0"}


def font_paths(font_root: Path, name: str) -> list[Path]:
    font_dir = font_root / name
    if name in SHARDED_FONTS:
        return sorted(font_dir.glob(f"{name}-*.ttf"))
    return [font_dir / f"{name}.ttf"]


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate generated Wimoji fonts.")
    parser.add_argument("--font-root", type=Path, default=Path("font"))
    parser.add_argument("--outline-count", type=int, required=True)
    parser.add_argument("--color-count", type=int, required=True)
    parser.add_argument("--raw-color-count", type=int, required=True)
    args = parser.parse_args()
    expected_counts = {
        "outline": args.outline_count,
        "color": args.color_count,
        "raw-color": args.raw_color_count,
        "bitmap": args.raw_color_count,
    }

    errors = []
    for name, (required_tables, colr_version, count_kind) in FONT_SPECS.items():
        paths = font_paths(args.font_root, name)
        if not paths or any(
            not path.is_file() or path.stat().st_size == 0 for path in paths
        ):
            errors.append(
                f"{args.font_root / name} is missing font files or contains an empty font"
            )
            continue

        font_errors = []
        total_glyphs = 0
        for font_path in paths:
            try:
                font = TTFont(font_path)
                try:
                    missing_tables = [
                        table for table in required_tables if table not in font
                    ]
                    if missing_tables:
                        font_errors.append(
                            f"{font_path} is missing tables: {', '.join(missing_tables)}"
                        )
                    elif colr_version is not None and font["COLR"].version != colr_version:
                        font_errors.append(
                            f"{font_path} has COLR version {font['COLR'].version}, "
                            f"expected {colr_version}"
                        )
                    if not font.getBestCmap():
                        font_errors.append(f"{font_path} has no Unicode character map")
                    total_glyphs += len(font.getGlyphOrder())
                finally:
                    font.close()
            except Exception as error:
                font_errors.append(
                    f"Could not validate {font_path}: {type(error).__name__}: {error}"
                )
        minimum_glyphs = expected_counts[count_kind] + 2
        if total_glyphs < minimum_glyphs:
            font_errors.append(
                f"{args.font_root / name} has {total_glyphs} total glyphs across "
                f"{len(paths)} fonts; expected at least {minimum_glyphs}"
            )
        if font_errors:
            errors.extend(font_errors)
        else:
            print(
                f"Validated {args.font_root / name} ({len(paths)} font(s))"
            )

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print(f"Validated all {len(FONT_SPECS)} generated font variants")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())