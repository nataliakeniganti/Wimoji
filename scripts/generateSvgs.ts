import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_STYLE_OPTIONS } from '../src/data/constants';
import { ALL_WIMOJI_ICONS } from '../src/data/wimojiIcons';
import { generateSvgString } from '../src/utils/svgGenerator';
import {
  getSkinnableInfo,
  isSkinnableIcon,
  SKIN_TONE_DEFS,
} from '../src/utils/skinTones';
import type { WimojiIconDef, WimojiSkinTone } from '../src/types/wimoji';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = join(projectRoot, 'generated-svgs');
const tones = SKIN_TONE_DEFS.filter((tone) => tone.id !== 'default');
const allTones = SKIN_TONE_DEFS.map((tone) => tone.id);
const outputPaths = new Set<string>();
let generatedCount = 0;

function getUnicodeHexFilename(icon: WimojiIconDef): string {
  const codePoints = [...icon.unicodeHex.matchAll(/U\+([\da-f]{1,6})/gi)].map(
    (match) => match[1]!.toLowerCase().padStart(4, '0')
  );
  const remaining = icon.unicodeHex.replace(/U\+[\da-f]{1,6}/gi, '').trim();

  if (codePoints.length === 0 || remaining) {
    throw new Error(`Invalid Unicode code points for icon "${icon.id}": ${icon.unicodeHex}`);
  }

  return `${codePoints.join('-')}.svg`;
}

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

await mkdir(outputRoot, { recursive: true });

for (const icon of ALL_WIMOJI_ICONS) {
  const filename = getUnicodeHexFilename(icon);
  await writeIconSvg(icon, `default/${filename}`, 'default');

  if (!isSkinnableIcon(icon)) continue;

  for (const tone of tones) {
    await writeIconSvg(icon, `skin-tones/${tone.id}/${filename}`, tone.id);
  }

  if (!getSkinnableInfo(icon)?.isMultiTone) continue;

  for (const leftTone of allTones) {
    for (const rightTone of allTones) {
      if (leftTone === rightTone) continue;
      await writeIconSvg(
        icon,
        `multi-skin-tones/${leftTone}-${rightTone}/${filename}`,
        leftTone,
        rightTone
      );
    }
  }
}

console.log(`Generated ${generatedCount} SVG files in ${outputRoot}`);
