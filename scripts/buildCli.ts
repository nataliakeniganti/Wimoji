import { chmod, mkdir } from 'node:fs/promises';
import { build } from 'esbuild';

const outputPath = 'dist-cli/wimoji.js';

await mkdir('dist-cli', { recursive: true });
await build({
  entryPoints: ['src/cli.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node18',
  minify: true,
  outfile: outputPath,
  banner: { js: '#!/usr/bin/env node' },
});
await chmod(outputPath, 0o755);
