import glyphPathsJson from '../data/svgTextGlyphPaths.json';

// Precomputed Noto Sans and Noto Sans CJK outlines avoid runtime font loading.
type FontFamily = 'sans' | 'cjk' | 'devanagari';
type FontWeight = '700' | '900';

interface GlyphPath {
  d: string;
  advance: number;
}

interface GlyphPaths {
  sans: Record<FontWeight, Record<string, GlyphPath>>;
  cjk: { bold: Record<string, GlyphPath> };
  devanagari: { bold: Record<string, GlyphPath> };
}

const glyphPaths: GlyphPaths = glyphPathsJson;
const textElementPattern = /<text\b([^>]*)>([\s\S]*?)<\/text>/g;
const attributePattern = /([\w:-]+)="([^"]*)"/g;
const xmlEntityPattern = /&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi;

function decodeXmlText(text: string): string {
  return text.replace(xmlEntityPattern, (_, entity: string) => {
    if (entity.startsWith('#x')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    }
    if (entity.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    }

    return {
      amp: '&',
      lt: '<',
      gt: '>',
      quot: '"',
      apos: "'",
    }[entity.toLowerCase()]!;
  });
}

function escapeXmlAttribute(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;');
}

function parseNumber(attributes: Map<string, string>, name: string): number {
  const value = Number.parseFloat(attributes.get(name) ?? '');
  if (!Number.isFinite(value)) {
    throw new Error(`SVG text is missing a valid "${name}" attribute`);
  }
  return value;
}

function getGlyphPath(
  character: string,
  preferredFamily: FontFamily,
  weight: FontWeight
): GlyphPath {
  const families: FontFamily[] = [
    preferredFamily,
    ...(['sans', 'cjk', 'devanagari'] as const).filter(
      (family) => family !== preferredFamily
    ),
  ];

  for (const family of families) {
    const glyphs = family === 'sans' ? glyphPaths.sans[weight] : glyphPaths[family].bold;
    const glyph = glyphs[character];
    if (glyph) return glyph;
  }

  throw new Error(
    `No outlined glyph for U+${character.codePointAt(0)!.toString(16).toUpperCase()}`
  );
}

function formatNumber(value: number): string {
  return `${Number(value.toFixed(3))}`;
}

function convertTextElement(attributesText: string, rawText: string): string {
  const attributes = new Map(
    [...attributesText.matchAll(attributePattern)].map((match) => [match[1]!, match[2]!])
  );
  const text = [...decodeXmlText(rawText)];
  if (text.length === 0) return '';

  const x = parseNumber(attributes, 'x');
  const baseline = parseNumber(attributes, 'y');
  const fontSize = parseNumber(attributes, 'font-size');
  const letterSpacing = Number.parseFloat(attributes.get('letter-spacing') ?? '0');
  const anchor = attributes.get('text-anchor') ?? 'start';
  if (!Number.isFinite(letterSpacing) || !['start', 'middle', 'end'].includes(anchor)) {
    throw new Error('SVG text has unsupported spacing or anchor attributes');
  }

  const weight = Number.parseFloat(attributes.get('font-weight') ?? '700') >= 800 ? '900' : '700';
  const familyName = attributes.get('font-family')?.toLowerCase() ?? '';
  const preferredFamily: FontFamily = familyName.includes('devanagari')
    ? 'devanagari'
    : familyName.includes('cjk')
      ? 'cjk'
      : 'sans';
  const glyphs = text.map((character) => getGlyphPath(character, preferredFamily, weight));
  const scale = fontSize / 1000;
  const width = glyphs.reduce((sum, glyph) => sum + glyph.advance * scale, 0) +
    letterSpacing * (glyphs.length - 1);
  const startX = x - (anchor === 'middle' ? width / 2 : anchor === 'end' ? width : 0);
  const cursorSpacing = letterSpacing / scale;
  let cursor = 0;
  const paths = glyphs.map((glyph) => {
    const path = `<path d="${glyph.d}" transform="translate(${formatNumber(cursor)} 0)" />`;
    cursor += glyph.advance + cursorSpacing;
    return path;
  });
  const fill = escapeXmlAttribute(attributes.get('fill') ?? '#000000');

  return `<g fill="${fill}" stroke="none" transform="translate(${formatNumber(startX)} ${formatNumber(baseline)}) scale(${formatNumber(scale)} ${formatNumber(-scale)})">${paths.join('')}</g>`;
}

export function convertSvgTextToPaths(svg: string): string {
  return svg.replace(textElementPattern, (_, attributes: string, text: string) =>
    convertTextElement(attributes, text)
  );
}
