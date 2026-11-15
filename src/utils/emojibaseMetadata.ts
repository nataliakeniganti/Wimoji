import rawEmojiData from 'emojibase-data/en/data.json';
import rawShortcodes from 'emojibase-data/en/shortcodes/emojibase.json';
import rawGroups from 'emojibase-data/meta/groups.json';
import { Emoji } from 'emojibase';
import { WimojiEmojibaseCategory, WimojiIconDef } from '../types/wimoji';

export type EmojibaseGroupSlug = Exclude<WimojiEmojibaseCategory, 'all'>;

export interface EmojibaseMeta {
  hexcode: string;
  emoji: string;
  label: string;
  tags: string[];
  shortcodes: string[];
  emoticons: string[];
  version?: number;
  order?: number;
  groupName?: string;
  subgroupName?: string;
  groupId?: number;
  groupSlug?: EmojibaseGroupSlug;
}

export interface EmojibaseCoverageEntry {
  emoji: string;
  hexcode: string;
  label: string;
  version?: number;
  groupName: string;
  isZwj: boolean;
}

export interface EmojibaseCoverageSummary {
  totalStandard: number;
  matchedCount: number;
  nonFlagTotal: number;
  nonFlagMatched: number;
  singleCodepointNonFlagTotal: number;
  singleCodepointNonFlagMatched: number;
  missingNonZwj: EmojibaseCoverageEntry[];
  missingZwjCount: number;
}

function normalizeChar(ch: string): string {
  return ch.replace(/[\uFE0E\uFE0F]/g, '');
}

function normalizeShortcode(sc: string): string {
  return sc.replace(/^:+|:+$/g, '').toLowerCase();
}

function formatGroupSlug(slug?: string): string | undefined {
  if (!slug) return undefined;
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' & ');
}

const META_BY_CHAR = new Map<string, EmojibaseMeta>();
const META_BY_HEX = new Map<string, EmojibaseMeta>();

const emojiDataset = rawEmojiData as Emoji[];
const shortcodeDataset = rawShortcodes as Record<string, string | string[]>;
const groupMap = rawGroups.groups as Record<string, string>;
const subgroupMap = rawGroups.subgroups as Record<string, string>;

for (const entry of emojiDataset) {
  const scRaw = shortcodeDataset[entry.hexcode];
  const shortcodes = Array.isArray(scRaw) ? scRaw : scRaw ? [scRaw] : [];
  const emoticons = Array.isArray(entry.emoticon)
    ? entry.emoticon
    : entry.emoticon
      ? [entry.emoticon]
      : [];

  const groupSlug =
    entry.group !== undefined
      ? (groupMap[String(entry.group)] as EmojibaseGroupSlug | undefined)
      : undefined;

  const meta: EmojibaseMeta = {
    hexcode: entry.hexcode,
    emoji: entry.emoji,
    label: entry.label,
    tags: entry.tags ?? [],
    shortcodes,
    emoticons,
    version: entry.version,
    order: entry.order,
    groupId: entry.group,
    groupSlug,
    groupName: entry.group !== undefined ? formatGroupSlug(groupMap[String(entry.group)]) : undefined,
    subgroupName:
      entry.subgroup !== undefined ? formatGroupSlug(subgroupMap[String(entry.subgroup)]) : undefined,
  };

  META_BY_HEX.set(entry.hexcode.toUpperCase(), meta);
  if (entry.emoji) {
    META_BY_CHAR.set(entry.emoji, meta);
    const norm = normalizeChar(entry.emoji);
    if (!META_BY_CHAR.has(norm)) {
      META_BY_CHAR.set(norm, meta);
    }
  }
}

export function getEmojibaseMeta(icon: WimojiIconDef): EmojibaseMeta | null {
  const direct = META_BY_CHAR.get(icon.char);
  if (direct) return direct;

  const norm = META_BY_CHAR.get(normalizeChar(icon.char));
  if (norm) return norm;

  const hex = icon.unicodeHex.replace(/^U\+/i, '').toUpperCase();
  return META_BY_HEX.get(hex) ?? null;
}

export function matchesEmojibaseQuery(
  icon: WimojiIconDef,
  q: string,
  qNorm: string
): boolean {
  const meta = getEmojibaseMeta(icon);
  if (!meta) return false;

  if (meta.label.toLowerCase().includes(q)) return true;
  if (meta.hexcode.toLowerCase().includes(q.replace(/^u\+/i, ''))) return true;
  if (meta.tags.some((t) => t.toLowerCase().includes(q))) return true;

  const qSc = normalizeShortcode(q);
  if (qSc && meta.shortcodes.some((sc) => sc.toLowerCase().includes(qSc))) {
    return true;
  }

  if (meta.emoticons.some((em) => em.toLowerCase() === q || em.toLowerCase() === qNorm)) {
    return true;
  }

  return false;
}

export function getEmojibaseCoverage(icons: WimojiIconDef[]): EmojibaseCoverageSummary {
  const charSet = new Set<string>();
  for (const icon of icons) {
    charSet.add(icon.char);
    charSet.add(normalizeChar(icon.char));
  }

  let matchedCount = 0;
  let nonFlagTotal = 0;
  let nonFlagMatched = 0;
  let singleCodepointNonFlagTotal = 0;
  let singleCodepointNonFlagMatched = 0;
  let missingZwjCount = 0;
  const missingNonZwj: EmojibaseCoverageEntry[] = [];

  for (const entry of emojiDataset) {
    const ch = entry.emoji;
    const isMatched = charSet.has(ch) || charSet.has(normalizeChar(ch));
    const isFlag = entry.group === 9;
    const isZwj = entry.hexcode.includes('-');

    if (isMatched) matchedCount++;

    if (!isFlag) {
      nonFlagTotal++;
      if (isMatched) nonFlagMatched++;

      if (!isZwj) {
        singleCodepointNonFlagTotal++;
        if (isMatched) singleCodepointNonFlagMatched++;
      }

      if (!isMatched) {
        if (isZwj) {
          missingZwjCount++;
        } else {
          missingNonZwj.push({
            emoji: ch,
            hexcode: entry.hexcode,
            label: entry.label,
            version: entry.version,
            groupName:
              entry.group !== undefined
                ? formatGroupSlug(groupMap[String(entry.group)]) ?? 'Other'
                : 'Other',
            isZwj: false,
          });
        }
      }
    }
  }

  return {
    totalStandard: emojiDataset.length,
    matchedCount,
    nonFlagTotal,
    nonFlagMatched,
    singleCodepointNonFlagTotal,
    singleCodepointNonFlagMatched,
    missingNonZwj,
    missingZwjCount,
  };
}

export const EMOJIBASE_GROUP_ORDER: EmojibaseGroupSlug[] = [
  'smileys-emotion',
  'people-body',
  'component',
  'animals-nature',
  'food-drink',
  'travel-places',
  'activities',
  'objects',
  'symbols',
  'flags',
];

const GROUP_RANK: Record<EmojibaseGroupSlug, number> = {
  'smileys-emotion': 0,
  'people-body': 1,
  component: 2,
  'animals-nature': 3,
  'food-drink': 4,
  'travel-places': 5,
  activities: 6,
  objects: 7,
  symbols: 8,
  flags: 9,
};

const ACTIVITY_IDS = new Set([
  'black-rosette',
  'white-shogi-piece',
  'black-shogi-piece',
  'turned-white-shogi-piece',
  'turned-black-shogi-piece',
  'white-chess-king',
  'white-chess-queen',
  'white-chess-rook',
  'white-chess-bishop',
  'white-chess-knight',
  'white-chess-pawn',
  'black-chess-king',
  'black-chess-queen',
  'black-chess-rook',
  'black-chess-bishop',
  'black-chess-knight',
  'white-heart-suit',
  'white-diamond-suit',
  'white-spade-suit',
  'white-club-suit',
  'die-face-1',
  'die-face-2',
  'die-face-3',
  'die-face-4',
  'die-face-5',
  'die-face-6',
  'white-draughts-man',
  'white-draughts-king',
  'black-draughts-man',
  'black-draughts-king',
]);

const TRAVEL_PLACE_IDS = new Set([
  'shibuya-109',
  'japanese-castle-symbol',
  'historic-site',
  'japanese-bank-symbol',
  'headstone-graveyard-symbol',
  'map-symbol-for-lighthouse',
  'cup-on-black-square',
  'disabled-car',
  'black-truck',
  'up-pointing-military-airplane',
  'up-pointing-airplane',
  'up-pointing-small-airplane',
  'northeast-pointing-airplane',
]);

const OBJECT_IDS = new Set([
  '1fa91-200d-27a1',
  'keyboard-jacks',
  'beamed-ascending-notes',
  'beamed-descending-notes',
  'old-personal-computer',
  'portable-stereo',
  'white-telephone',
  'squared-key',
  'black-safety-scissors',
  'stock-chart',
  'gear-without-hub',
  'gear-with-handles',
]);

const FLAG_IDS = new Set([
  'white-flag',
  'black-flag',
  'white-pennant',
  'black-pennant',
  'white-flag-with-horizontal-middle-black-stripe',
]);

const SMILEY_IDS = new Set([
  'black-smiling-face',
  'heart-tip-left',
  'right-speech-bubble',
  'two-speech-bubbles',
  'three-speech-bubbles',
  'left-thought-bubble',
  'right-thought-bubble',
  'left-anger-bubble',
  'mood-bubble',
  'lightning-mood-bubble',
  'lightning-mood',
]);

const PEOPLE_BODY_IDS = new Set([
  'black-left-pointing-index',
  'black-right-pointing-index',
  'white-left-pointing-index',
  'white-right-pointing-index',
  'white-down-pointing-index',
]);

const ANIMAL_NATURE_IDS = new Set([
  'bouquet-of-flowers',
  'flower-symbol',
  'hedera-leaf',
]);

export function resolveEmojibaseCategory(icon: WimojiIconDef): EmojibaseGroupSlug {
  const meta = getEmojibaseMeta(icon);
  if (meta) {
    if (meta.groupSlug) return meta.groupSlug;
    // Regional indicator letters (U+1F1E6–U+1F1FF) have group === undefined in emojibase-data
    return 'flags';
  }

  if (SMILEY_IDS.has(icon.id)) return 'smileys-emotion';
  if (PEOPLE_BODY_IDS.has(icon.id)) return 'people-body';
  if (ANIMAL_NATURE_IDS.has(icon.id)) return 'animals-nature';
  if (TRAVEL_PLACE_IDS.has(icon.id)) return 'travel-places';
  if (ACTIVITY_IDS.has(icon.id)) return 'activities';
  if (OBJECT_IDS.has(icon.id)) return 'objects';
  if (FLAG_IDS.has(icon.id)) return 'flags';

  const legacy = icon.category as string;
  if (legacy === 'weather' || legacy === 'transport-maps' || legacy === 'sports-travel') {
    return 'travel-places';
  }
  if (legacy === 'tools') return 'objects';
  if (legacy === 'regional') return 'flags';
  if (legacy === 'faces-hands') return 'people-body';

  return 'symbols';
}

export function sortAndCategorizeWithEmojibase(icons: WimojiIconDef[]): WimojiIconDef[] {
  const decorated = icons.map((icon, index) => {
    const category = resolveEmojibaseCategory(icon);
    const meta = getEmojibaseMeta(icon);
    const groupRank = GROUP_RANK[category];
    const hasOrder = meta?.order !== undefined;
    const order = meta?.order ?? (icon.char.codePointAt(0) ?? 0x10ffff) + 1_000_000;

    return {
      icon: {
        ...icon,
        category,
      },
      groupRank,
      hasOrder,
      order,
      index,
    };
  });

  decorated.sort((a, b) => {
    if (a.groupRank !== b.groupRank) return a.groupRank - b.groupRank;
    if (a.hasOrder !== b.hasOrder) return a.hasOrder ? -1 : 1;
    if (a.order !== b.order) return a.order - b.order;
    return a.index - b.index;
  });

  return decorated.map((item) => item.icon);
}
