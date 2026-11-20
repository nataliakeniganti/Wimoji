#!/usr/bin/env bash
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
cd "$repo_root"

font_root=${FONT_ROOT:-font}
work_dir=${FONT_WORK_DIR:-"${RUNNER_TEMP:-/tmp}/wimoji-fonts"}
color_svg_dir="$work_dir/color"
outline_svg_dir="$work_dir/outline"
bitmap_build_dir="$work_dir/build-color-bitmaps"
vector_build_dir="$work_dir/build-color-vectors"
outline_build_dir="$work_dir/build-outline"
untouched_build_dir="$work_dir/build-untouched-svg"
colr0_manifest="$work_dir/colr0-shards.tsv"
declare -a colr0_shard_ids=()

mapfile -d '' -t color_svgs < <(find "$color_svg_dir" -maxdepth 1 -type f -name '*.svg' -print0 | sort -z)
mapfile -d '' -t outline_svgs < <(find "$outline_svg_dir" -maxdepth 1 -type f -name '*.svg' -print0 | sort -z)
mapfile -d '' -t raw_color_svgs < <(find color/svg -maxdepth 1 -type f -name '*.svg' -print0 | sort -z)

if ((${#color_svgs[@]} == 0 || ${#outline_svgs[@]} == 0)); then
  echo "Normalized color and outline SVG inputs are required" >&2
  exit 1
fi
if ((${#raw_color_svgs[@]} == 0)); then
  echo "Color SVG inputs are required" >&2
  exit 1
fi

clear_output_dir() {
  local name=$1
  local output_dir="$font_root/$name"
  mkdir -p "$output_dir"
  find "$output_dir" -maxdepth 1 -type f -name '*.ttf' -delete
}

build_font() {
  local name=$1
  local family=$2
  local format=$3
  local build_dir=$4
  local input_kind=$5
  local output_file
  local -a inputs

  clear_output_dir "$name"
  output_file="$font_root/$name/$name.ttf"
  case "$input_kind" in
    color)
      inputs=("${color_svgs[@]}")
      ;;
    outline)
      inputs=("${outline_svgs[@]}")
      ;;
    untouched)
      inputs=("${raw_color_svgs[@]}")
      ;;
    bitmap)
      inputs=("${raw_color_svgs[@]}")
      ;;
    *)
      echo "Unknown font input kind: $input_kind" >&2
      return 1
      ;;
  esac

  echo "Building $name from ${#inputs[@]} source files"
  nanoemoji \
    --family="$family" \
    --color_format="$format" \
    --output_file="$output_file" \
    --build_dir="$build_dir" \
    --nouse_pngquant \
    --nouse_zopflipng \
    "${inputs[@]}"
}

build_colr0_shards() {
  local name=$1
  local family=$2
  local output_file
  local shard
  local shard_count
  local -a inputs

  python scripts/planColr0Shards.py "$color_svg_dir" "$colr0_manifest"
  mapfile -t colr0_shard_ids < <(cut -f1 "$colr0_manifest" | sort -u)
  shard_count=${#colr0_shard_ids[@]}
  clear_output_dir "$name"

  for shard in "${colr0_shard_ids[@]}"; do
    mapfile -t inputs < <(
      awk -F '\t' -v shard="$shard" '$1 == shard { print $2 }' "$colr0_manifest"
    )
    output_file="$font_root/$name/$name-$shard.ttf"
    echo "Building $name shard $shard/$shard_count from ${#inputs[@]} SVGs"
    nanoemoji \
      --family="$family $shard" \
      --color_format=glyf_colr_0 \
      --output_file="$output_file" \
      --build_dir="$vector_build_dir" \
      --nouse_pngquant \
      --nouse_zopflipng \
      "${inputs[@]}"
  done
}

build_font Wimoji-outline-glyf "Wimoji Outline" glyf "$outline_build_dir" outline
build_colr0_shards Wimoji-color-glyf_colr_0 "Wimoji Color COLR0"
build_font Wimoji-color-glyf_colr_1 "Wimoji Color COLR1" glyf_colr_1 "$vector_build_dir" color
build_font Wimoji-color-picosvgz "Wimoji Color picosvgz" picosvgz "$vector_build_dir" color
build_font Wimoji-color-untouchedsvgz "Wimoji Color untouchedsvgz" untouchedsvgz "$untouched_build_dir" untouched

build_font Wimoji-color-cbdt "Wimoji Color CBDT" cbdt "$bitmap_build_dir" bitmap
build_font Wimoji-color-sbix "Wimoji Color sbix" sbix "$bitmap_build_dir" bitmap

for version in 0 1; do
  base_name="Wimoji-color-glyf_colr_${version}"
  combined_name="Wimoji-color-colr${version}_svg"
  clear_output_dir "$combined_name"
  if [[ "$version" == 0 ]]; then
    for shard in "${colr0_shard_ids[@]}"; do
      base_font="$font_root/$base_name/$base_name-$shard.ttf"
      output_file="$font_root/$combined_name/$combined_name-$shard.ttf"
      echo "Adding SVG glyphs to $base_name shard $shard"
      maximum_color \
        --colr_version="$version" \
        --output_file="$output_file" \
        --build_dir="$work_dir/build-colr${version}-svg-$shard" \
        "$base_font"
    done
  else
    base_font="$font_root/$base_name/$base_name.ttf"
    output_file="$font_root/$combined_name/$combined_name.ttf"
    echo "Adding SVG glyphs to $base_name"
    maximum_color \
      --colr_version="$version" \
      --output_file="$output_file" \
      --build_dir="$work_dir/build-colr${version}-svg" \
      "$base_font"
  fi
done

python scripts/validateFonts.py \
  --font-root "$font_root" \
  --outline-count "${#outline_svgs[@]}" \
  --color-count "${#color_svgs[@]}" \
  --raw-color-count "${#raw_color_svgs[@]}"