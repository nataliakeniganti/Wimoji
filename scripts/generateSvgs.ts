import { mkdir, readFile, writeFile } from 'node:fs/promises';
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
const outputRoot = join(projectRoot, 'generated-svgs');
const sequenceFiles = [
  join(outputRoot, 'unicode/emoji-sequences.txt'),
  join(outputRoot, 'unicode/emoji-zwj-sequences.txt'),
];
const skinToneByCodePoint = new Map<string, WimojiSkinTone>(
  SKIN_TONE_DEFS.filter((tone) => tone.modifierHex).map((tone) => [
    tone.modifierHex.replace(/^U\+/i, '').toLowerCase().padStart(4, '0'),
    tone.id,
  ])
);
const outputPaths = new Set<string>();
let generatedCount = 0;
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
  if (outputPaths.has(relativePath)) {
    throw new Error(`Duplicate generated SVG path: ${relativePath}`);
  }
  outputPaths.add(relativePath);

  const outputPath = join(outputRoot, relativePath);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    makeSvgXmlWellFormed(
      generateSvgString(icon, {
        ...DEFAULT_STYLE_OPTIONS,
        skinTone,
        ...(rightSkinTone ? { rightSkinTone } : {}),
      })
    ),
    'utf8'
  );
  generatedCount += 1;
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
          `skin-tones/${tones[0]}/${filename}`,
          tones[0]!
        );
      } else {
        await writeIconSvg(
          withDualSkinToneIcon(baseIcon, tones[0]!, tones[1]!),
          `multi-skin-tones/${tones[0]}-${tones[1]}/${filename}`,
          tones[0]!,
          tones[1]!
        );
      }
    }
  }
}

await mkdir(outputRoot, { recursive: true });

for (const icon of ALL_WIMOJI_ICONS) {
  const filename = getUnicodeHexFilename(icon);
  await writeIconSvg(icon, `default/${filename}`, 'default');
}

await generateSkinToneSequences();

console.log(
  `Generated ${generatedCount} SVG files (${matchedSequenceCount} Unicode skin-tone sequences matched, ${unmatchedSequenceCount} unmatched, ${unsupportedSequenceCount} with more than two modifiers unsupported) in ${outputRoot}`
);
