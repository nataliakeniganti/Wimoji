import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { DEFAULT_STYLE_OPTIONS } from './data/constants';
import { ALL_WIMOJI_ICONS, ICONS_BY_CHAR } from './data/wimojiIcons';
import type { WimojiStyle } from './types/wimoji';
import { generateSvgString } from './utils/svgGenerator';

const styles = ['color', 'outline', 'duotone', 'silhouette'] as const;
const variationSelectors = /[\uFE0E\uFE0F]/g;
const unicodeSequencePattern = /^(?:U\+)?[\da-f]{1,6}(?:[\s,+-]+(?:U\+)?[\da-f]{1,6})*$/i;

interface GetOptions {
  query: string;
  output?: string;
  style: WimojiStyle;
  size: number;
}

function printHelp(): void {
  process.stdout.write(
    `Wimoji CLI

Usage:
  wimoji get <emoji|name|id|unicode> [options]

Options:
  -o, --output <file>  Write SVG to a file instead of stdout
  --style <style>      color, outline, duotone, or silhouette (default: color)
  --size <pixels>      SVG width and height (default: 32)
  -h, --help           Show this help
`
  );
}

function parseGetOptions(args: string[]): GetOptions {
  let query: string | undefined;
  let output: string | undefined;
  let style: WimojiStyle = 'color';
  let size = DEFAULT_STYLE_OPTIONS.size;

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]!;
    if (argument === '-o' || argument === '--output') {
      output = args[index + 1];
      if (!output || output.startsWith('-')) {
        throw new Error(`Missing output filename.\n\n${usage()}`);
      }
      index += 1;
      continue;
    }

    if (argument === '--style') {
      const value = args[index + 1];
      if (!value || !styles.includes(value as WimojiStyle)) {
        throw new Error(`Invalid style. Choose one of: ${styles.join(', ')}.`);
      }
      style = value as WimojiStyle;
      index += 1;
      continue;
    }

    if (argument === '--size') {
      const value = Number(args[index + 1]);
      if (!Number.isSafeInteger(value) || value <= 0) {
        throw new Error('Size must be a positive integer.');
      }
      size = value;
      index += 1;
      continue;
    }

    if (argument.startsWith('-')) {
      throw new Error(`Unknown option "${argument}".\n\n${usage()}`);
    }
    if (query !== undefined) {
      throw new Error(`Expected one emoji, name, ID, or Unicode query.\n\n${usage()}`);
    }
    query = argument;
  }

  if (!query?.trim()) {
    throw new Error(`Missing emoji, name, ID, or Unicode query.\n\n${usage()}`);
  }

  return { query: query.trim(), output, style, size };
}

function usage(): string {
  return 'Usage: wimoji get <emoji|name|id|unicode> [--output <file>] [--style <style>] [--size <pixels>]';
}

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function normalizeUnicode(value: string): string {
  return value.toUpperCase().replace(/U\+/g, '').replace(/[^0-9A-F]/g, '');
}

function getUniqueMatch(query: string, matches: typeof ALL_WIMOJI_ICONS): (typeof ALL_WIMOJI_ICONS)[number] {
  if (matches.length === 1) return matches[0]!;
  if (matches.length > 1) {
    const candidates = matches.map((icon) => `${icon.name} (${icon.id})`).join('\n  ');
    throw new Error(`Multiple icons match "${query}". Use a more specific name or ID:\n  ${candidates}`);
  }
  throw new Error(`No Wimoji icon found for "${query}". Try an emoji, icon name, ID, or Unicode value.`);
}

function findIcon(query: string): (typeof ALL_WIMOJI_ICONS)[number] {
  const exactCharacter = ICONS_BY_CHAR.get(query) ?? ICONS_BY_CHAR.get(query.replace(variationSelectors, ''));
  if (exactCharacter) return exactCharacter;

  if (unicodeSequencePattern.test(query)) {
    const unicode = normalizeUnicode(query);
    const matches = ALL_WIMOJI_ICONS.filter((icon) => normalizeUnicode(icon.unicodeHex) === unicode);
    return getUniqueMatch(query, matches);
  }

  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    throw new Error(`No Wimoji icon found for "${query}". Try an emoji, icon name, ID, or Unicode value.`);
  }
  const exactMatches = ALL_WIMOJI_ICONS.filter(
    (icon) =>
      normalizeText(icon.id) === normalizedQuery ||
      normalizeText(icon.name) === normalizedQuery
  );
  if (exactMatches.length > 0) return getUniqueMatch(query, exactMatches);

  const tagMatches = ALL_WIMOJI_ICONS.filter((icon) =>
    icon.tags.some((tag) => normalizeText(tag) === normalizedQuery)
  );
  return getUniqueMatch(query, tagMatches);
}

async function main(args: string[]): Promise<void> {
  const [command, ...commandArgs] = args;
  if (!command || command === '--help' || command === '-h' || command === 'help') {
    printHelp();
    return;
  }
  if (command !== 'get') {
    throw new Error(`Unknown command "${command}".\n\n${usage()}`);
  }
  if (commandArgs.includes('--help') || commandArgs.includes('-h')) {
    printHelp();
    return;
  }

  const options = parseGetOptions(commandArgs);
  const icon = findIcon(options.query);
  const svg = generateSvgString(
    icon,
    { ...DEFAULT_STYLE_OPTIONS, style: options.style, size: options.size },
    options.size
  );

  if (!options.output) {
    process.stdout.write(svg);
    return;
  }

  const outputPath = resolve(options.output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, svg, 'utf8');
  process.stdout.write(`Wrote ${outputPath}\n`);
}

main(process.argv.slice(2)).catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
