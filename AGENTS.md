# Instructions for coding agents

## Project overview

Wimoji is a React and TypeScript application for browsing, customizing, and
exporting vector emoji. It also provides an npm CLI for retrieving SVG icons.
The web app is built with Vite, Tailwind CSS, and Bun-managed dependencies.

## Repository map

- `src/App.tsx` owns the main application state and switches between the main
  views.
- `src/components/` contains the UI views, controls, cards, and dialogs.
- `src/data/icons/` contains hand-maintained icon definitions, grouped by
  subject. `src/data/wimojiIcons.ts` combines these definitions into the
  catalog; `src/data/constants.ts` contains shared defaults and categories.
- `src/types/wimoji.ts` defines the icon, category, skin-tone, and styling
  contracts.
- `src/utils/` contains shared filtering, skin-tone, SVG generation, export,
  and text-to-path logic.
- `src/cli.ts` and `scripts/buildCli.ts` implement and bundle the CLI.
- `scripts/generateSvgs.ts` generates the Unicode-named SVG catalog in
  `color/svg/`. GitHub Actions generates raster PNGs under `color/png/`.
- `index.html` is the Vite entry document; `vite.config.ts` configures the app
  build and development server.

## Development

Use the repository's Bun lockfile and scripts:

```sh
bun install --frozen-lockfile
bun run dev
```

The development server listens on port 3000. Validate code changes with:

```sh
bun run lint
bun run build
```

`lint` runs the TypeScript compiler with no output; `build` creates the
production bundle in `dist/`. There is no test script configured in
`package.json`. Run the narrowest applicable checks, and report any check that
cannot be run.

Other useful commands:

- `bun run build:cli` bundles the command-line app into `dist-cli/`.
- `bun run generate:svgs` rebuilds `color/svg/` and requires the Unicode
  sequence inputs described in `README.md`.
- `bun run preview` serves the production build locally.

## Making changes

- Keep changes focused and follow existing React, TypeScript, and Tailwind
  patterns. Prefer shared types, utilities, and components over duplicated
  behavior.
- Keep view-specific rendering in `src/components/`; keep shared app state and
  view navigation in `src/App.tsx`.
- When adding an icon, define it in the appropriate `src/data/icons/` module
  using `WimojiIconDef`, then register that module in `src/data/wimojiIcons.ts`.
  Preserve unique IDs and valid Unicode values, and make its `renderContent`
  honor the supplied `WimojiStyleOptions`.
- Keep generated files in sync only through their generator. Do not hand-edit
  files under `color/svg/` or `color/png/`; the SVG generator clears and
  recreates `color/svg/`.
- Keep the production asset base path relative so the built app works when
  served from a subdirectory.
- Use semantic HTML and accessible names for interactive controls. Preserve
  existing keyboard behavior and responsive layouts when changing UI.
- Treat credentials and `.env` values as sensitive. Never commit secrets; use
  `.env.example` only as a placeholder/template.
- Preserve third-party license notices. The project license does not relicense
  third-party fonts, font-derived glyph data, or other bundled material.
- Do not commit generated build output, dependency directories, or local
  environment files.

## Documentation and reporting

Update `README.md` when changing documented commands, features, or generated
asset workflows. In your final summary, describe the change and list validation
commands run, including any limitations or failures.
