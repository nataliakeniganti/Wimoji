import rawEmojiData from 'emojibase-data/en/data.json';
import rawGroups from 'emojibase-data/meta/groups.json';
import { Emoji } from 'emojibase';
import { WimojiIconDef, WimojiSkinTone, WimojiStyleOptions } from '../types/wimoji';

export interface SkinToneDef {
  id: WimojiSkinTone;
  toneIndex: 0 | 1 | 2 | 3 | 4 | 5;
  label: string;
  shortLabel: string;
  fitzpatrickType: string;
  modifierChar: string;
  modifierHex: string;
  swatchId: string;
  baseHex: string;
  shadeHex: string;
  outlineHex: string;
  description: string;
}

export const SKIN_TONE_DEFS: SkinToneDef[] = [
  {
    id: 'default',
    toneIndex: 0,
    label: 'Default (Yellow)',
    shortLabel: 'Default',
    fitzpatrickType: 'Unmodified',
    modifierChar: '',
    modifierHex: '',
    swatchId: '',
    baseHex: '#FFCA28',
    shadeHex: '#FFA000',
    outlineHex: '#78350F',
    description: 'Standard non-realistic Unicode yellow base tone',
  },
  {
    id: 'light',
    toneIndex: 1,
    label: 'Light Skin Tone',
    shortLabel: 'Light',
    fitzpatrickType: 'Type 1–2',
    modifierChar: '🏻',
    modifierHex: 'U+1F3FB',
    swatchId: 'light-skin-tone',
    baseHex: '#F7DECE',
    shadeHex: '#E0B59E',
    outlineHex: '#9C6B53',
    description: 'Pale to fair complexion with warm peach undertone',
  },
  {
    id: 'medium-light',
    toneIndex: 2,
    label: 'Medium-Light Skin Tone',
    shortLabel: 'Med-Light',
    fitzpatrickType: 'Type 3',
    modifierChar: '🏼',
    modifierHex: 'U+1F3FC',
    swatchId: 'medium-light-skin-tone',
    baseHex: '#F3D2A2',
    shadeHex: '#D4AA76',
    outlineHex: '#8C6239',
    description: 'Cream light to warm golden olive complexion',
  },
  {
    id: 'medium',
    toneIndex: 3,
    label: 'Medium Skin Tone',
    shortLabel: 'Medium',
    fitzpatrickType: 'Type 4',
    modifierChar: '🏽',
    modifierHex: 'U+1F3FD',
    swatchId: 'medium-skin-tone',
    baseHex: '#D5A070',
    shadeHex: '#B37D4D',
    outlineHex: '#6E4523',
    description: 'Moderate brown or olive-tan complexion',
  },
  {
    id: 'medium-dark',
    toneIndex: 4,
    label: 'Medium-Dark Skin Tone',
    shortLabel: 'Med-Dark',
    fitzpatrickType: 'Type 5',
    modifierChar: '🏾',
    modifierHex: 'U+1F3FE',
    swatchId: 'medium-dark-skin-tone',
    baseHex: '#A1653B',
    shadeHex: '#7A451F',
    outlineHex: '#4A260E',
    description: 'Rich medium-dark brown complexion',
  },
  {
    id: 'dark',
    toneIndex: 5,
    label: 'Dark Skin Tone',
    shortLabel: 'Dark',
    fitzpatrickType: 'Type 6',
    modifierChar: '🏿',
    modifierHex: 'U+1F3FF',
    swatchId: 'dark-skin-tone',
    baseHex: '#5C3E2F',
    shadeHex: '#382216',
    outlineHex: '#1F110A',
    description: 'Deep dark brown complexion',
  },
];

export const SKIN_TONE_MAP = new Map<WimojiSkinTone, SkinToneDef>(
  SKIN_TONE_DEFS.map((t) => [t.id, t])
);

export function getSkinToneDef(tone?: WimojiSkinTone): SkinToneDef {
  return SKIN_TONE_MAP.get(tone ?? 'default') ?? SKIN_TONE_DEFS[0];
}

export interface SkinnableVariantMeta {
  emoji: string;
  unicodeHex: string;
  rawHex: string;
  label?: string;
}

export interface SkinnableEmojiInfo {
  subgroupSlug: string;
  subgroupLabel: string;
  isMultiTone: boolean;
  variants: Record<1 | 2 | 3 | 4 | 5, SkinnableVariantMeta>;
  multiVariants?: Record<string, SkinnableVariantMeta>;
}

function normalizeChar(ch: string): string {
  return ch.replace(/[\uFE0E\uFE0F]/g, '');
}

function formatHexcode(hex: string): string {
  return hex
    .split('-')
    .map((part) => `U+${part.toUpperCase()}`)
    .join(' ');
}

const subgroupMap = rawGroups.subgroups as Record<string, string>;
const SKINNABLE_META_BY_CHAR = new Map<string, SkinnableEmojiInfo>();

for (const entry of rawEmojiData as Emoji[]) {
  if (!entry.skins || entry.skins.length === 0) continue;

  const variants: Partial<Record<1 | 2 | 3 | 4 | 5, SkinnableVariantMeta>> = {};
  const multiVariants: Record<string, SkinnableVariantMeta> = {};
  let hasDualPairs = false;

  for (const skin of entry.skins as Array<Emoji & { tone?: number | number[] }>) {
    if (!skin.emoji || !skin.hexcode) continue;
    const meta: SkinnableVariantMeta = {
      emoji: skin.emoji,
      unicodeHex: formatHexcode(skin.hexcode),
      rawHex: skin.hexcode.toLowerCase(),
      label: skin.label,
    };

    if (typeof skin.tone === 'number' && skin.tone >= 1 && skin.tone <= 5) {
      const toneNum = skin.tone as 1 | 2 | 3 | 4 | 5;
      if (!variants[toneNum]) {
        variants[toneNum] = meta;
      }
      multiVariants[`${toneNum}-${toneNum}`] = meta;
    } else if (Array.isArray(skin.tone) && skin.tone.length === 2) {
      const [leftNum, rightNum] = skin.tone;
      if (leftNum >= 1 && leftNum <= 5 && rightNum >= 1 && rightNum <= 5) {
        hasDualPairs = true;
        multiVariants[`${leftNum}-${rightNum}`] = meta;
      }
    }
  }

  if (!variants[1]) continue;

  const subgroupSlug =
    entry.subgroup !== undefined ? subgroupMap[String(entry.subgroup)] ?? 'other' : 'other';

  const subgroupLabel = subgroupSlug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');

  const info: SkinnableEmojiInfo = {
    subgroupSlug,
    subgroupLabel,
    isMultiTone: hasDualPairs,
    variants: variants as Record<1 | 2 | 3 | 4 | 5, SkinnableVariantMeta>,
    ...(hasDualPairs ? { multiVariants } : {}),
  };

  if (entry.emoji) {
    SKINNABLE_META_BY_CHAR.set(entry.emoji, info);
    const norm = normalizeChar(entry.emoji);
    if (!SKINNABLE_META_BY_CHAR.has(norm)) {
      SKINNABLE_META_BY_CHAR.set(norm, info);
    }
  }
}

export function getSkinnableInfo(icon: WimojiIconDef): SkinnableEmojiInfo | null {
  return (
    SKINNABLE_META_BY_CHAR.get(icon.char) ??
    SKINNABLE_META_BY_CHAR.get(normalizeChar(icon.char)) ??
    null
  );
}

export function isSkinnableIcon(icon: WimojiIconDef): boolean {
  return getSkinnableInfo(icon) !== null;
}

export function isMultiToneIcon(icon: WimojiIconDef): boolean {
  return getSkinnableInfo(icon)?.isMultiTone ?? false;
}

export function getSkinnableIcons(allIcons: WimojiIconDef[]): WimojiIconDef[] {
  return allIcons.filter((icon) => isSkinnableIcon(icon));
}

export function getMultiToneIcons(allIcons: WimojiIconDef[]): WimojiIconDef[] {
  return allIcons.filter((icon) => isMultiToneIcon(icon));
}

const SKIN_BASE_FILL_HEX_RE =
  /#(FFCA28|FBBF24|FACC15|FFD54F|FDE047|FFCC4D|FCD34D|FDE68A|F59E0B|FDBA74|FFE082|FFF176)\b/gi;

/**
 * Applies a Unicode Fitzpatrick skin-tone palette to a Wimoji SVG inner markup string.
 * Preserves hair (fill="#78350F"), clothing, accessories, and non-color styles.
 */
export function applySkinToneToSvg(
  svgInner: string,
  skinTone?: WimojiSkinTone,
  style: WimojiStyleOptions['style'] = 'color'
): string {
  const cleaned = svgInner.replace(/\sdata-skin-side="(?:left|right)"/g, '');
  if (!skinTone || skinTone === 'default' || style !== 'color') {
    return cleaned;
  }

  const def = getSkinToneDef(skinTone);

  return cleaned
    .replace(SKIN_BASE_FILL_HEX_RE, def.baseHex)
    // FB8C00 is also used as the orange sleeve/clothing color on gender-neutral
    // people. Keep that stroke intact when recoloring skin; skin outlines use
    // the other palette colors below.
    .replace(/stroke="#(FFA000|D97706|B45309)"/gi, `stroke="${def.shadeHex}"`)
    .replace(/fill="#(FFA000)"/gi, `fill="${def.shadeHex}"`)
    .replace(/stroke="#(78350F|E65100)"/gi, `stroke="${def.outlineHex}"`);
}

function colorHandshakeDualTone(
  svgInner: string,
  leftTone: WimojiSkinTone,
  rightTone: WimojiSkinTone
): string {
  return svgInner.replace(
    /<path\b[^>]*data-skin-side="(left|right)"[^>]*\/>/g,
    (path, side: 'left' | 'right') => {
      const tone = side === 'left' ? leftTone : rightTone;
      const stripped = path.replace(/\sdata-skin-side="(?:left|right)"/, '');
      if (tone === 'default') {
        return stripped;
      }
      const def = getSkinToneDef(tone);
      const withFill = /fill="none"/i.test(stripped)
        ? stripped
        : stripped.replace(/fill="[^"]*"/, `fill="${def.baseHex}"`);
      return withFill.replace(/stroke="[^"]*"/, `stroke="${def.shadeHex}"`);
    }
  );
}

function colorWrestlersDualTone(
  svgInner: string,
  leftTone: WimojiSkinTone,
  rightTone: WimojiSkinTone,
  style: WimojiStyleOptions['style']
): string {
  return svgInner
    .replace(/<path d="M(7\.8 20\.6|10\.4 20\.6|12\.4 13\.4|9\.1 7\.8)[^"]*"[^>]*\/>/g, (tag) =>
      applySkinToneToSvg(tag, leftTone, style)
    )
    .replace(/<path d="M(24\.2 20\.6|21\.6 20\.6|19\.6 14\.2|15\.89\d* 7\.8|15\.9 7\.8)[^"]*"[^>]*\/>/g, (tag) =>
      applySkinToneToSvg(tag, rightTone, style)
    );
}

function colorHoldingHandsDualTone(
  svgInner: string,
  leftTone: WimojiSkinTone,
  rightTone: WimojiSkinTone,
  style: WimojiStyleOptions['style']
): string {
  const rightMarkerRe = /(?=<path d="M(?:19\.1 6\.4|19\.2 18\.4)\b)/;
  const rightIdx = svgInner.search(rightMarkerRe);
  if (rightIdx === -1) {
    return applySkinToneToSvg(svgInner, leftTone, style);
  }

  const leftChunk = svgInner.slice(0, rightIdx);
  const afterLeft = svgInner.slice(rightIdx);

  const claspRe = /<path d="M14\.4 18\.2[^"]*"[^>]*\/>/;
  const claspMatch = afterLeft.match(claspRe);

  if (!claspMatch || claspMatch.index === undefined) {
    return applySkinToneToSvg(leftChunk, leftTone, style) + applySkinToneToSvg(afterLeft, rightTone, style);
  }

  const rightChunk = afterLeft.slice(0, claspMatch.index);
  const trailingChunk = afterLeft.slice(claspMatch.index + claspMatch[0].length);

  const leftDef = getSkinToneDef(leftTone);
  const rightDef = getSkinToneDef(rightTone);
  const dualClasp =
    `<path d="M16 16.6 A1.6 1.6 0 0 0 16 19.8 Z" fill="${leftDef.baseHex}" stroke="${leftDef.shadeHex}" stroke-width="0.9" />` +
    `<path d="M16 16.6 A1.6 1.6 0 0 1 16 19.8 Z" fill="${rightDef.baseHex}" stroke="${rightDef.shadeHex}" stroke-width="0.9" />`;

  return (
    applySkinToneToSvg(leftChunk, leftTone, style) +
    applySkinToneToSvg(rightChunk, rightTone, style) +
    dualClasp +
    trailingChunk
  );
}

/**
 * Applies independent left and right Unicode Fitzpatrick skin tones to two-person / two-hand emojis
 * (handshake, bunny ears, wrestlers, holding hands, kiss, couple with heart).
 */
export function applyDualSkinToneToSvg(
  iconId: string,
  svgInner: string,
  leftTone: WimojiSkinTone = 'default',
  rightTone: WimojiSkinTone = 'default',
  style: WimojiStyleOptions['style'] = 'color'
): string {
  if (style !== 'color') {
    return svgInner;
  }
  if (leftTone === rightTone) {
    return applySkinToneToSvg(svgInner, leftTone, style);
  }

  // Handshake paths carry explicit side markers; handle them directly so
  // mixed pairs do not depend on the icon id suffix or generic color matching.
  if (svgInner.includes('data-skin-side=')) {
    return colorHandshakeDualTone(svgInner, leftTone, rightTone);
  }

  const baseId = iconId.replace(
    /-(default|light|medium-light|medium|medium-dark|dark)(-(default|light|medium-light|medium|medium-dark|dark))?$/,
    ''
  );

  if (baseId === 'handshake') {
    return colorHandshakeDualTone(svgInner, leftTone, rightTone);
  }

  if (
    baseId === 'kiss' ||
    baseId === 'kiss-woman-man' ||
    baseId === 'kiss-man-man' ||
    baseId === 'kiss-woman-woman'
  ) {
    const splitMarker = '<g transform="rotate(-10 21.4 24)">';
    const idx = svgInner.indexOf(splitMarker);
    if (idx !== -1) {
      return (
        applySkinToneToSvg(svgInner.slice(0, idx), leftTone, style) +
        applySkinToneToSvg(svgInner.slice(idx), rightTone, style)
      );
    }
  }

  if (
    baseId === 'couple-with-heart' ||
    baseId === 'couple-with-heart-woman-man' ||
    baseId === 'couple-with-heart-man-man' ||
    baseId === 'couple-with-heart-woman-woman'
  ) {
    const splitMarker = '<circle cx="21.5"';
    const idx = svgInner.indexOf(splitMarker);
    if (idx !== -1) {
      return (
        applySkinToneToSvg(svgInner.slice(0, idx), leftTone, style) +
        applySkinToneToSvg(svgInner.slice(idx), rightTone, style)
      );
    }
  }

  if (
    baseId === 'people-with-bunny-ears' ||
    baseId === 'men-with-bunny-ears' ||
    baseId === 'women-with-bunny-ears'
  ) {
    const idx = svgInner.search(/(?=<path d="M(?:18\.2 8\.6|19\.25 3\.8)\b)/);
    if (idx !== -1) {
      return (
        applySkinToneToSvg(svgInner.slice(0, idx), leftTone, style) +
        applySkinToneToSvg(svgInner.slice(idx), rightTone, style)
      );
    }
  }

  if (
    baseId === 'people-holding-hands' ||
    baseId === 'women-holding-hands' ||
    baseId === 'woman-and-man-holding-hands' ||
    baseId === 'men-holding-hands'
  ) {
    return colorHoldingHandsDualTone(svgInner, leftTone, rightTone, style);
  }

  if (
    baseId === 'people-wrestling' ||
    baseId === 'men-wrestling' ||
    baseId === 'women-wrestling'
  ) {
    return colorWrestlersDualTone(svgInner, leftTone, rightTone, style);
  }

  return applySkinToneToSvg(svgInner, leftTone, style);
}

/**
 * Returns a modified WimojiIconDef bound to a specific Fitzpatrick skin tone.
 */
export function withSkinToneIcon(icon: WimojiIconDef, tone: WimojiSkinTone): WimojiIconDef {
  if (tone === 'default') {
    return {
      ...icon,
      fixedSkinTone: 'default',
      fixedRightSkinTone: undefined,
    };
  }

  const def = getSkinToneDef(tone);
  const info = getSkinnableInfo(icon);
  const variant =
    info && def.toneIndex >= 1 && def.toneIndex <= 5
      ? info.variants[def.toneIndex as 1 | 2 | 3 | 4 | 5]
      : undefined;

  return {
    ...icon,
    id: `${icon.id}-${tone}`,
    char: variant?.emoji ?? `${icon.char}${def.modifierChar}`,
    name: `${icon.name}: ${def.label}`,
    unicodeHex: variant?.unicodeHex ?? `${icon.unicodeHex} ${def.modifierHex}`,
    tags: [...icon.tags, def.label.toLowerCase(), def.fitzpatrickType.toLowerCase()],
    fixedSkinTone: tone,
    fixedRightSkinTone: undefined,
  };
}

/**
 * Returns a modified WimojiIconDef bound to independent left & right Fitzpatrick skin tones
 * for multi-person and two-hand emojis.
 */
export function withDualSkinToneIcon(
  icon: WimojiIconDef,
  leftTone: WimojiSkinTone,
  rightTone: WimojiSkinTone
): WimojiIconDef {
  if (leftTone === rightTone) {
    return withSkinToneIcon(icon, leftTone);
  }

  const leftDef = getSkinToneDef(leftTone);
  const rightDef = getSkinToneDef(rightTone);
  const info = getSkinnableInfo(icon);

  const hasOfficialUnicodePair =
    leftDef.toneIndex >= 1 &&
    leftDef.toneIndex <= 5 &&
    rightDef.toneIndex >= 1 &&
    rightDef.toneIndex <= 5;

  const variant = hasOfficialUnicodePair
    ? info?.multiVariants?.[`${leftDef.toneIndex}-${rightDef.toneIndex}`]
    : undefined;

  return {
    ...icon,
    id: `${icon.id}-${leftTone}-${rightTone}`,
    char: variant?.emoji ?? icon.char,
    name: `${icon.name}: ${leftDef.shortLabel} & ${rightDef.shortLabel}`,
    unicodeHex:
      variant?.unicodeHex ??
      `${icon.unicodeHex} (${leftDef.modifierHex || 'Base'} / ${rightDef.modifierHex || 'Base'})`,
    tags: [
      ...icon.tags,
      'multi-skintone',
      leftDef.label.toLowerCase(),
      rightDef.label.toLowerCase(),
    ],
    fixedSkinTone: leftTone,
    fixedRightSkinTone: rightTone,
  };
}
