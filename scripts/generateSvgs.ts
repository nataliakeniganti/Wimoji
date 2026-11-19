import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_STYLE_OPTIONS } from '../src/data/constants';
import { ALL_WIMOJI_ICONS } from '../src/data/wimojiIcons';
import { generateSvgString } from '../src/utils/svgGenerator';
import {
  SKIN_TONE_DEFS,
  withDualSkinToneIcon,
  withSkinToneIcon,
} from '../src/utils/skinTones';
import type { WimojiIconDef, WimojiSkinTone } from '../src/types/wimoji';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputRoots = {
  color: join(projectRoot, 'color/svg'),
  outline: join(projectRoot, 'outline/svg'),
} as const;
const sequenceRoot = join(projectRoot, '.unicode-sequences');
const sequenceFiles = [
  join(sequenceRoot, 'emoji-sequences.txt'),
  join(sequenceRoot, 'emoji-zwj-sequences.txt'),
];
const skinToneByCodePoint = new Map<string, WimojiSkinTone>(
  SKIN_TONE_DEFS.filter((tone) => tone.modifierHex).map((tone) => [
    tone.modifierHex.replace(/^U\+/i, '').toLowerCase().padStart(4, '0'),
    tone.id,
  ])
);
const outputPaths = {
  color: new Set<string>(),
  outline: new Set<string>(),
};
const generatedCounts = { color: 0, outline: 0 };
let matchedSequenceCount = 0;
let unmatchedSequenceCount = 0;
let unsupportedSequenceCount = 0;

function normalizeCodePoint(codePoint: string): string {
  return codePoint.toLowerCase().padStart(4, '0');
}

function getUnicodeHexFilename(icon: WimojiIconDef): string {
  const codePoints = [...icon.unicodeHex.matchAll(/U\+([\da-f]{1,6})/gi)].map((match) =>
    normalizeCodePoint(match[1]!)
  );
  const remaining = icon.unicodeHex.replace(/U\+[\da-f]{1,6}/gi, '').trim();

  if (codePoints.length === 0 || remaining) {
    throw new Error(`Invalid Unicode code points for icon "${icon.id}": ${icon.unicodeHex}`);
  }
  return `${codePoints.join('-')}.svg`;
}

function getSequenceFileName(codePoints: string[]): string {
  return `${codePoints.map(normalizeCodePoint).join('-')}.svg`;
}

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function getIconUnicodeKey(icon: WimojiIconDef): string {
  return [...icon.unicodeHex.matchAll(/U\+([\da-f]{1,6})/gi)]
    .map((match) => normalizeCodePoint(match[1]!))
    .filter((codePoint) => codePoint !== 'fe0e' && codePoint !== 'fe0f')
    .join('-');
}

const iconsByUnicode = new Map(ALL_WIMOJI_ICONS.map((icon) => [getIconUnicodeKey(icon), icon]));
const iconsByName = new Map(ALL_WIMOJI_ICONS.map((icon) => [normalizeName(icon.name), icon]));

function makeSvgXmlWellFormed(svg: string): string {
  const escaped = svg.replace(
    /&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[\da-fA-F]+);)/g,
    '&amp;'
  );

  return escaped.replace(/<[^>]+>/g, (tag) => {
    const seen = new Set<string>();
    const attributes = [...tag.matchAll(/\s+([^\s=]+)="[^"]*"/g)];

    return attributes.reverse().reduce((normalized, attribute) => {
      const name = attribute[1]!;
      if (seen.has(name)) {
        const index = attribute.index!;
        return normalized.slice(0, index) + normalized.slice(index + attribute[0].length);
      }
      seen.add(name);
      return normalized;
    }, tag);
  });
}

async function writeIconSvg(
  icon: WimojiIconDef,
  relativePath: string,
  skinTone: WimojiSkinTone,
  rightSkinTone?: WimojiSkinTone
): Promise<void> {
  for (const style of ['color', 'outline'] as const) {
    if (outputPaths[style].has(relativePath)) {
      throw new Error(`Duplicate generated ${style} SVG path: ${relativePath}`);
    }
    outputPaths[style].add(relativePath);

    const outputPath = join(outputRoots[style], relativePath);
    await mkdir(dirname(outputPath), { recursive: true });
    const svg = generateSvgString(icon, {
      ...DEFAULT_STYLE_OPTIONS,
      style,
      ...(style === 'outline'
        ? {
            primaryColor: '#000000',
            secondaryColor: '#000000',
            accentColor: '#000000',
            strokeColor: '#000000',
            badgeBg: '#000000',
          }
        : {}),
      skinTone,
      ...(rightSkinTone ? { rightSkinTone } : {}),
    });
    const normalizedSvg = makeSvgXmlWellFormed(svg);
    await writeFile(
      outputPath,
      style === 'outline'
        ? removeSvgOpacity(recolorSvgToBlack(normalizedSvg))
        : normalizedSvg,
      'utf8'
    );
    generatedCounts[style] += 1;
  }
}

function recolorSvgToBlack(svg: string): string {
  const paintAttributes = /(\s)(fill|stroke|stop-color|flood-color|lighting-color)="([^"]*)"/g;
  const paintStyleAttribute = /\bstyle="([^"]*)"/g;
  const paintStyle = /(^|;)(\s*(?:fill|stroke|stop-color|flood-color|lighting-color)\s*:\s*)([^;]*)/g;
  const recolor = (paint: string) =>
    /^(?:none|transparent|url\()/i.test(paint.trim()) ? paint : '#000000';
  const masks: string[] = [];
  const withoutMasks = svg.replace(/<mask\b[\s\S]*?<\/mask>/g, (mask) => {
    const index = masks.push(mask) - 1;
    return `WIMOJI_MASK_BLOCK_${index}`;
  });

  return withoutMasks
    .replace(paintAttributes, (_match, whitespace: string, attribute: string, paint: string) =>
      `${whitespace}${attribute}="${recolor(paint)}"`
    )
    .replace(paintStyleAttribute, (_match, style: string) =>
      `style="${style.replace(
        paintStyle,
        (_styleMatch, separator: string, property: string, paint: string) =>
          `${separator}${property}${recolor(paint)}`
      )}"`
    )
    .replace(/WIMOJI_MASK_BLOCK_(\d+)/g, (_match, index: string) => masks[Number(index)]!);
}

function removeSvgOpacity(svg: string): string {
  const opacityAttributes = /\s(?:opacity|fill-opacity|stroke-opacity|stop-opacity|flood-opacity)="[^"]*"/g;
  const opacityStyle = /(^|;)\s*(?:opacity|fill-opacity|stroke-opacity|stop-opacity|flood-opacity)\s*:\s*[^;]*/g;
  const styleAttributes = /\sstyle="([^"]*)"/g;

  return svg
    .replace(opacityAttributes, '')
    .replace(styleAttributes, (_match, style: string) => {
      const remaining = style
        .replace(opacityStyle, '$1')
        .replace(/^\s*;+|;+\s*$/g, '')
        .trim();
      return remaining ? ` style="${remaining}"` : '';
    });
}

async function generateSkinToneSequences(): Promise<void> {
  const processedSequences = new Set<string>();

  for (const sequenceFile of sequenceFiles) {
    const contents = await readFile(sequenceFile, 'utf8');

    for (const line of contents.split(/\r?\n/)) {
      const data = line.split('#', 1)[0]?.trim();
      if (!data) continue;

      const [codePointField, , description] = data.split(';').map((field) => field.trim());
      if (!codePointField || !description) continue;

      const codePoints = codePointField.split(/\s+/).map(normalizeCodePoint);
      const sequenceKey = codePoints.join('-');
      if (processedSequences.has(sequenceKey)) continue;
      processedSequences.add(sequenceKey);

      const tones = codePoints.flatMap((codePoint) => {
        const tone = skinToneByCodePoint.get(codePoint);
        return tone ? [tone] : [];
      });
      if (tones.length === 0) continue;
      if (tones.length > 2) {
        unsupportedSequenceCount += 1;
        continue;
      }

      const baseCodePoints = codePoints
        .filter((codePoint) => !skinToneByCodePoint.has(codePoint))
        .filter((codePoint) => codePoint !== 'fe0e' && codePoint !== 'fe0f');
      const baseIcon =
        iconsByUnicode.get(baseCodePoints.join('-')) ??
        iconsByName.get(normalizeName(description.split(':', 1)[0]!));
      if (!baseIcon) {
        unmatchedSequenceCount += 1;
        continue;
      }

      matchedSequenceCount += 1;
      const filename = getSequenceFileName(codePoints);
      if (tones.length === 1) {
        await writeIconSvg(
          withSkinToneIcon(baseIcon, tones[0]!),
          filename,
          tones[0]!
        );
      } else {
        await writeIconSvg(
          withDualSkinToneIcon(baseIcon, tones[0]!, tones[1]!),
          filename,
          tones[0]!,
          tones[1]!
        );
      }
    }
  }
}

for (const outputRoot of Object.values(outputRoots)) {
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });
}

for (const icon of ALL_WIMOJI_ICONS) {
  const filename = getUnicodeHexFilename(icon);
  await writeIconSvg(icon, filename, 'default');
}

await generateSkinToneSequences();

console.log(
  `Generated ${generatedCounts.color} color SVGs in ${outputRoots.color} and ${generatedCounts.outline} black outline SVGs in ${outputRoots.outline} (${matchedSequenceCount} Unicode skin-tone sequences matched, ${unmatchedSequenceCount} unmatched, ${unsupportedSequenceCount} with more than two modifiers unsupported)`
);
