# Wimoji

[![Deploy website](https://github.com/nataliakeniganti/Wimoji/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/nataliakeniganti/Wimoji/actions/workflows/deploy-pages.yml)
[![Generate SVGs](https://github.com/nataliakeniganti/Wimoji/actions/workflows/generate-svgs.yml/badge.svg)](https://github.com/nataliakeniganti/Wimoji/actions/workflows/generate-svgs.yml)
[![Generate PNGs](https://github.com/nataliakeniganti/Wimoji/actions/workflows/generate-pngs.yml/badge.svg)](https://github.com/nataliakeniganti/Wimoji/actions/workflows/generate-pngs.yml)
[![Generate Fonts](https://github.com/nataliakeniganti/Wimoji/actions/workflows/generate-fonts.yml/badge.svg)](https://github.com/nataliakeniganti/Wimoji/actions/workflows/generate-fonts.yml)
[![Latest release](https://img.shields.io/github/v/release/nataliakeniganti/Wimoji.svg?style=flat)](https://github.com/nataliakeniganti/Wimoji/releases)
[![npm](https://img.shields.io/npm/v/wimoji.svg?style=flat)](https://www.npmjs.com/package/wimoji)
[![Fonts](https://img.shields.io/badge/fonts-9%20formats-2b6cb0.svg?style=flat)](font/)
[![Artwork](https://img.shields.io/badge/artwork-CC%20BY%204.0-8a2be2.svg?style=flat)](color/)
[![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-lightgrey.svg)](LICENSE)
[![Node.js >=18](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Built with Bun](https://img.shields.io/badge/built%20with-Bun-000000?logo=bun&logoColor=white)](https://bun.sh/)
[![Started](https://img.shields.io/badge/started-4%20Oct%202026-d4a000.svg?style=flat)](HISTORY.md)
[![Last commit](https://img.shields.io/github/last-commit/nataliakeniganti/Wimoji.svg?style=flat)](https://github.com/nataliakeniganti/Wimoji/commits/main)

Wimoji is an open vector emoji and icon library with a browser-based studio for finding, customizing, and exporting SVG artwork.

## Announcement

[Wimoji 1.0 is coming soon](https://milanszulc.blogspot.com/2026/11/wimoji-100-is-coming-soon-on-november.html).

## Features

- Search and browse icons by category, name, Unicode value, or tags.
- Preview color, outline, duotone, and silhouette styles.
- Customize palettes, stroke settings, badges, and skin tones.
- Inspect and copy SVG markup, or export selected icons as a ZIP.
- Generate PNG assets at 64×64, 128×128, 256×256, and 512×512.
- Convert SVG text to vector paths using precomputed Noto Sans, Noto Sans CJK SC, and Noto Serif Devanagari glyph outlines. The resulting SVGs do not depend on fonts at render time.

## CLI

The CLI requires Node.js 18 or newer.

After the package is published to npm, install it in a project:

```sh
npm install wimoji
npx wimoji get "🎉" --output party-popper.svg
```

`get` accepts an emoji, icon name or ID, or Unicode code point. Without `--output`, the SVG is written to standard output:

```sh
npx wimoji get "🎉" > party-popper.svg
```

Use `--style color|outline|duotone|silhouette` and `--size <pixels>` to customize the SVG. Run `npx wimoji --help` for usage.

## Development

Requires [Bun](https://bun.sh/).

```sh
bun install
bun run dev
```

The Vite development server runs at `http://localhost:3000`.

Useful scripts:

| Command | Description |
| --- | --- |
| `bun run lint` | Type-check the TypeScript project |
| `bun run build` | Create the production build in `dist/` |
| `npm run build:cli` | Bundle the CLI for npm |
| `npm pack` | Build and create the npm package tarball |
| `bun run preview` | Preview the production build |
| `bun run generate:svgs` | Generate SVG assets in `color/svg/` |

## Generated assets

The SVG generator reads Unicode 18.0.0 emoji sequence files from `.unicode-sequences/`. It writes full-color SVGs to `color/svg/` and monochrome black outline SVGs without opacity attributes to `outline/svg/`. To run it locally:

```sh
mkdir -p .unicode-sequences
curl --fail --location --retry 3 \
  https://unicode.org/Public/18.0.0/emoji/emoji-sequences.txt \
  --output .unicode-sequences/emoji-sequences.txt
curl --fail --location --retry 3 \
  https://unicode.org/Public/18.0.0/emoji/emoji-zwj-sequences.txt \
  --output .unicode-sequences/emoji-zwj-sequences.txt
bun run generate:svgs
```

The **Generate SVGs** GitHub Actions workflow runs for relevant changes on `main` or by manual dispatch, then commits updated SVGs to both `color/svg/` and `outline/svg/`.

The **Generate PNGs** workflow runs after successful SVG generation, when SVG assets are pushed directly, or by manual dispatch. It writes color PNGs into `color/png/` and black outline PNGs into `outline/png/`, each with `64x64/`, `128x128/`, `256x256/`, and `512x512/` size directories, then commits changes to `main`.

The **Generate Fonts** workflow runs after PNG generation or by manual dispatch. It writes validated OpenType fonts into `font/`: outline glyf, CBDT, COLR0+SVG, COLR1+SVG, glyf COLR0, glyf COLR1, picosvgz, sbix, and untouchedsvgz. The two COLR0 variants are split into separately installable font shards to stay below the OpenType 16-bit layer-index limit. Unsupported SVG elements are normalized out for vector fonts; any SVGs that cannot be normalized are reported and skipped. CBDT and sbix rasterize the SVG sources at 128 pixels and share the rendered bitmap cache.

## Website deployment

The **Deploy website** GitHub Actions workflow builds the Vite app and publishes
the `dist/` output to GitHub Pages whenever `main` is updated or the workflow is
manually dispatched. In the repository's **Settings → Pages**, set the build
and deployment source to **GitHub Actions**; publishing the repository root
with the legacy Jekyll source will serve uncompiled TypeScript and leave the
app blank.

## Releases

The **Create release** GitHub Actions workflow creates a GitHub Release when a
`v*` tag is pushed. The tag must match the version in `package.json`, and the
release notes are taken from the matching section in [`CHANGELOG.md`](CHANGELOG.md).
See [`HISTORY.md`](HISTORY.md) for a brief project timeline.

## License

Unless otherwise noted, Wimoji's original code and artwork are licensed under
[CC BY 4.0](LICENSE). Third-party materials, including font-derived glyph
outlines, remain subject to their respective licenses.

## Text-to-path fonts

Outlined glyph data is stored in [`src/data/svgTextGlyphPaths.json`](src/data/svgTextGlyphPaths.json) and applied by [`src/utils/svgTextToPath.ts`](src/utils/svgTextToPath.ts). The glyphs are based on:

- [Noto Sans](https://raw.githubusercontent.com/google/fonts/main/ofl/notosans/NotoSans%5Bwdth,wght%5D.ttf) for Latin and default text.
- [Noto Sans CJK SC](https://github.com/googlefonts/noto-cjk/raw/main/Sans/Variable/TTF/NotoSansCJKsc-VF.ttf) for CJK text.
- [Noto Serif Devanagari](https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io/fonts/NotoSerifDevanagari/unhinted/variable-ttf/NotoSerifDevanagari%5Bwdth,wght%5D.ttf) for Devanagari text.
