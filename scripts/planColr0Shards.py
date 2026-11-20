#!/usr/bin/env python3
import argparse
from pathlib import Path
import sys
import xml.etree.ElementTree as ET


MAX_LAYERS_PER_FONT = 10_000


def count_paths(svg_path: Path) -> int:
    root = ET.parse(svg_path).getroot()
    return sum(element.tag.rsplit("}", 1)[-1] == "path" for element in root.iter())


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Split SVG font sources below the COLR v0 layer-index limit."
    )
    parser.add_argument("source_dir", type=Path)
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--max-layers", type=int, default=MAX_LAYERS_PER_FONT)
    args = parser.parse_args()
    if args.max_layers < 1:
        parser.error("--max-layers must be at least one")

    sources = sorted(args.source_dir.glob("*.svg"))
    if not sources:
        parser.error(f"No SVG files found in {args.source_dir}")

    shards: list[list[Path]] = [[]]
    shard_layers = 0
    for source in sources:
        try:
            path_count = count_paths(source)
        except (ET.ParseError, OSError) as error:
            print(f"Could not inspect {source}: {error}", file=sys.stderr)
            return 1
        if path_count > args.max_layers:
            print(
                f"{source} has {path_count} paths, exceeding the per-font "
                f"limit of {args.max_layers}",
                file=sys.stderr,
            )
            return 1
        if shard_layers and shard_layers + path_count > args.max_layers:
            shards.append([])
            shard_layers = 0
        shards[-1].append(source)
        shard_layers += path_count

    args.manifest.parent.mkdir(parents=True, exist_ok=True)
    with args.manifest.open("w", encoding="utf-8") as manifest:
        for shard_index, shard in enumerate(shards, start=1):
            for source in shard:
                manifest.write(f"{shard_index:03d}\t{source.resolve()}\n")

    print(
        f"Planned {len(sources)} SVGs across {len(shards)} COLR0 font shards "
        f"(maximum {args.max_layers} paths per shard)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
