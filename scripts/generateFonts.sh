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

prepare_output() {
  local name=$1
  local output_dir="$font_root/$name"
  mkdir -p "$output_dir"
  find "$output_dir" -maxdepth 1 -type f -name '*.ttf' -delete
  printf '%s/%s.ttf\n' "$output_dir" "$name"
}

build_font() {
  local name=$1
  local family=$2
  local format=$3
  local build_dir=$4
  local input_kind=$5
  local output_file
  local -a inputs

  output_file=$(prepare_output "$name")
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

build_font Wimoji-outline-glyf "Wimoji Outline" glyf "$outline_build_dir" outline
build_font Wimoji-color-glyf_colr_0 "Wimoji Color COLR0" glyf_colr_0 "$vector_build_dir" color
build_font Wimoji-color-glyf_colr_1 "Wimoji Color COLR1" glyf_colr_1 "$vector_build_dir" color
build_font Wimoji-color-picosvgz "Wimoji Color picosvgz" picosvgz "$vector_build_dir" color
build_font Wimoji-color-untouchedsvgz "Wimoji Color untouchedsvgz" untouchedsvgz "$untouched_build_dir" untouched

build_font Wimoji-color-cbdt "Wimoji Color CBDT" cbdt "$bitmap_build_dir" bitmap
build_font Wimoji-color-sbix "Wimoji Color sbix" sbix "$bitmap_build_dir" bitmap

for version in 0 1; do
  base_name="Wimoji-color-glyf_colr_${version}"
  combined_name="Wimoji-color-colr${version}_svg"
  base_font="$font_root/$base_name/$base_name.ttf"
  output_file=$(prepare_output "$combined_name")
  echo "Adding SVG glyphs to $base_name"
  maximum_color \
    --colr_version="$version" \
    --output_file="$output_file" \
    --build_dir="$work_dir/build-colr${version}-svg" \
    "$base_font"
done

python scripts/validateFonts.py \
  --font-root "$font_root" \
  --outline-count "${#outline_svgs[@]}" \
  --color-count "${#color_svgs[@]}" \
  --raw-color-count "${#raw_color_svgs[@]}"