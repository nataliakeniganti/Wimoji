#!/usr/bin/env python3
import argparse
from concurrent.futures import ProcessPoolExecutor
import os
from pathlib import Path
import sys
import xml.etree.ElementTree as ET

from picosvg.svg import SVG


def normalize_one(paths: tuple[str, str]) -> tuple[str, str | None]:
    source_name, destination_name = paths
    source = Path(source_name)
    destination = Path(destination_name)
    try:
        svg = SVG.parse(str(source)).topicosvg(drop_unsupported=True)
        content = svg.tostring(pretty_print=False)
        ET.fromstring(content)
    except Exception as error:
        return source.name, f"{type(error).__name__}: {error}"

    destination.write_text(content, encoding="utf-8")
    return source.name, None


def main() -> int:
    parser = argparse.ArgumentParser(description="Normalize SVG files for Nanoemoji.")
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--workers", type=int, default=min(4, os.cpu_count() or 1))
    args = parser.parse_args()
    if args.workers < 1:
        parser.error("--workers must be at least one")

    sources = sorted(args.source.glob("*.svg"))
    if not sources:
        parser.error(f"No SVG files found in {args.source}")

    args.destination.mkdir(parents=True, exist_ok=True)
    for existing in args.destination.glob("*.svg"):
        existing.unlink()

    jobs = [(str(source), str(args.destination / source.name)) for source in sources]
    with ProcessPoolExecutor(max_workers=args.workers) as executor:
        results = list(executor.map(normalize_one, jobs, chunksize=16))

    skipped = [(name, error) for name, error in results if error is not None]
    if skipped:
        details_path = args.destination / "skipped-files.txt"
        details_path.write_text(
            "".join(f"{name}: {error}\n" for name, error in skipped),
            encoding="utf-8",
        )
        for name, error in skipped[:20]:
            print(f"Skipping unsupported SVG {name}: {error}", file=sys.stderr)
        if len(skipped) > 20:
            print(
                f"Skipped {len(skipped) - 20} additional SVGs; see {details_path}",
                file=sys.stderr,
            )

    normalized_count = len(results) - len(skipped)
    if normalized_count == 0:
        print(f"No usable SVGs in {args.source}", file=sys.stderr)
        return 1

    print(
        f"Normalized {normalized_count}/{len(sources)} SVGs from {args.source}; "
        f"skipped {len(skipped)} unsupported inputs"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())