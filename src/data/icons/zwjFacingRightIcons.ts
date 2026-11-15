import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup } from './svgHelpers';
import { transportTransitIcons } from './transportTransitIcons';
import { peopleExtendedIcons } from './peopleExtendedIcons';
import { sportsRacingIcons } from './sportsRacingIcons';
import { zwjSportsGenderIcons } from './zwjSportsGenderIcons';
import { zwjActionsCouplesIcons } from './zwjActionsCouplesIcons';

const BASE_POSE_SOURCES: WimojiIconDef[] = [
  ...transportTransitIcons,
  ...peopleExtendedIcons,
  ...sportsRacingIcons,
  ...zwjSportsGenderIcons,
  ...zwjActionsCouplesIcons,
];

const BASE_POSE_BY_ID = new Map<string, WimojiIconDef>(
  BASE_POSE_SOURCES.map((icon) => [icon.id, icon])
);

const MIRROR_PREFIX = '<g transform="matrix(-1 0 0 1 32 0)">';

function buildFacingRightVariant(spec: {
  baseId: string;
  id: string;
  char: string;
  name: string;
  unicodeHex: string;
  extraTags: string[];
}): WimojiIconDef {
  const baseIcon = BASE_POSE_BY_ID.get(spec.baseId);
  if (!baseIcon) {
    throw new Error(`Missing base icon "${spec.baseId}" for "${spec.id}"`);
  }

  return {
    id: spec.id,
    char: spec.char,
    name: spec.name,
    unicodeHex: spec.unicodeHex,
    category: 'people-body',
    tags: [
      ...baseIcon.tags,
      'facing right',
      'rightwards',
      'direction',
      ...spec.extraTags,
      spec.char,
    ],
    renderContent: (opts) => {
      const badge = getBadgeMarkup(opts);
      const raw = baseIcon.renderContent({ ...opts, badgeShape: 'none' });
      const namespaced = raw
        .replace(/\bid="([^"]+)"/g, 'id="$1-right"')
        .replace(/url\(#([^)]+)\)/g, 'url(#$1-right)');

      if (namespaced.startsWith(MIRROR_PREFIX) && namespaced.endsWith('</g>')) {
        return `${badge}${namespaced.slice(MIRROR_PREFIX.length, -4)}`;
      }
      return `${badge}<g transform="matrix(-1 0 0 1 32 0)">${namespaced}</g>`;
    },
  };
}

export const zwjFacingRightIcons: WimojiIconDef[] = [
  // 1–3. Walking Facing Right (🚶‍➡️ 🚶‍♀️‍➡️ 🚶‍♂️‍➡️)
  buildFacingRightVariant({
    baseId: 'person-walking',
    id: 'person-walking-facing-right',
    char: '🚶‍➡️',
    name: 'Person Walking Facing Right',
    unicodeHex: 'U+1F6B6 U+200D U+27A1 U+FE0F',
    extraTags: ['person walking facing right', '🚶➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'woman-walking',
    id: 'woman-walking-facing-right',
    char: '🚶‍♀️‍➡️',
    name: 'Woman Walking Facing Right',
    unicodeHex: 'U+1F6B6 U+200D U+2640 U+FE0F U+200D U+27A1 U+FE0F',
    extraTags: ['woman walking facing right', '🚶♀️➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'man-walking',
    id: 'man-walking-facing-right',
    char: '🚶‍♂️‍➡️',
    name: 'Man Walking Facing Right',
    unicodeHex: 'U+1F6B6 U+200D U+2642 U+FE0F U+200D U+27A1 U+FE0F',
    extraTags: ['man walking facing right', '🚶♂️➡️'],
  }),

  // 4–6. Kneeling Facing Right (🧎‍➡️ 🧎‍♀️‍➡️ 🧎‍♂️‍➡️)
  buildFacingRightVariant({
    baseId: 'person-kneeling',
    id: 'person-kneeling-facing-right',
    char: '🧎‍➡️',
    name: 'Person Kneeling Facing Right',
    unicodeHex: 'U+1F9CE U+200D U+27A1 U+FE0F',
    extraTags: ['person kneeling facing right', '🧎➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'woman-kneeling',
    id: 'woman-kneeling-facing-right',
    char: '🧎‍♀️‍➡️',
    name: 'Woman Kneeling Facing Right',
    unicodeHex: 'U+1F9CE U+200D U+2640 U+FE0F U+200D U+27A1 U+FE0F',
    extraTags: ['woman kneeling facing right', '🧎♀️➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'man-kneeling',
    id: 'man-kneeling-facing-right',
    char: '🧎‍♂️‍➡️',
    name: 'Man Kneeling Facing Right',
    unicodeHex: 'U+1F9CE U+200D U+2642 U+FE0F U+200D U+27A1 U+FE0F',
    extraTags: ['man kneeling facing right', '🧎♂️➡️'],
  }),

  // 7–9. With White Cane Facing Right (🧑‍🦯‍➡️ 👨‍🦯‍➡️ 👩‍🦯‍➡️)
  buildFacingRightVariant({
    baseId: 'person-with-white-cane',
    id: 'person-with-white-cane-facing-right',
    char: '🧑‍🦯‍➡️',
    name: 'Person with White Cane Facing Right',
    unicodeHex: 'U+1F9D1 U+200D U+1F9AF U+200D U+27A1 U+FE0F',
    extraTags: ['person with white cane facing right', '🧑🦯➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'man-with-white-cane',
    id: 'man-with-white-cane-facing-right',
    char: '👨‍🦯‍➡️',
    name: 'Man with White Cane Facing Right',
    unicodeHex: 'U+1F468 U+200D U+1F9AF U+200D U+27A1 U+FE0F',
    extraTags: ['man with white cane facing right', '👨🦯➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'woman-with-white-cane',
    id: 'woman-with-white-cane-facing-right',
    char: '👩‍🦯‍➡️',
    name: 'Woman with White Cane Facing Right',
    unicodeHex: 'U+1F469 U+200D U+1F9AF U+200D U+27A1 U+FE0F',
    extraTags: ['woman with white cane facing right', '👩🦯➡️'],
  }),

  // 10–12. In Motorized Wheelchair Facing Right (🧑‍🦼‍➡️ 👨‍🦼‍➡️ 👩‍🦼‍➡️)
  buildFacingRightVariant({
    baseId: 'person-in-motorized-wheelchair',
    id: 'person-in-motorized-wheelchair-facing-right',
    char: '🧑‍🦼‍➡️',
    name: 'Person in Motorized Wheelchair Facing Right',
    unicodeHex: 'U+1F9D1 U+200D U+1F9BC U+200D U+27A1 U+FE0F',
    extraTags: ['person in motorized wheelchair facing right', '🧑🦼➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'man-in-motorized-wheelchair',
    id: 'man-in-motorized-wheelchair-facing-right',
    char: '👨‍🦼‍➡️',
    name: 'Man in Motorized Wheelchair Facing Right',
    unicodeHex: 'U+1F468 U+200D U+1F9BC U+200D U+27A1 U+FE0F',
    extraTags: ['man in motorized wheelchair facing right', '👨🦼➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'woman-in-motorized-wheelchair',
    id: 'woman-in-motorized-wheelchair-facing-right',
    char: '👩‍🦼‍➡️',
    name: 'Woman in Motorized Wheelchair Facing Right',
    unicodeHex: 'U+1F469 U+200D U+1F9BC U+200D U+27A1 U+FE0F',
    extraTags: ['woman in motorized wheelchair facing right', '👩🦼➡️'],
  }),

  // 13–15. In Manual Wheelchair Facing Right (🧑‍🦽‍➡️ 👨‍🦽‍➡️ 👩‍🦽‍➡️)
  buildFacingRightVariant({
    baseId: 'person-in-manual-wheelchair',
    id: 'person-in-manual-wheelchair-facing-right',
    char: '🧑‍🦽‍➡️',
    name: 'Person in Manual Wheelchair Facing Right',
    unicodeHex: 'U+1F9D1 U+200D U+1F9BD U+200D U+27A1 U+FE0F',
    extraTags: ['person in manual wheelchair facing right', '🧑🦽➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'man-in-manual-wheelchair',
    id: 'man-in-manual-wheelchair-facing-right',
    char: '👨‍🦽‍➡️',
    name: 'Man in Manual Wheelchair Facing Right',
    unicodeHex: 'U+1F468 U+200D U+1F9BD U+200D U+27A1 U+FE0F',
    extraTags: ['man in manual wheelchair facing right', '👨🦽➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'woman-in-manual-wheelchair',
    id: 'woman-in-manual-wheelchair-facing-right',
    char: '👩‍🦽‍➡️',
    name: 'Woman in Manual Wheelchair Facing Right',
    unicodeHex: 'U+1F469 U+200D U+1F9BD U+200D U+27A1 U+FE0F',
    extraTags: ['woman in manual wheelchair facing right', '👩🦽➡️'],
  }),

  // 16–18. Running Facing Right (🏃‍➡️ 🏃‍♀️‍➡️ 🏃‍♂️‍➡️)
  buildFacingRightVariant({
    baseId: 'person-running',
    id: 'person-running-facing-right',
    char: '🏃‍➡️',
    name: 'Person Running Facing Right',
    unicodeHex: 'U+1F3C3 U+200D U+27A1 U+FE0F',
    extraTags: ['person running facing right', '🏃➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'woman-running',
    id: 'woman-running-facing-right',
    char: '🏃‍♀️‍➡️',
    name: 'Woman Running Facing Right',
    unicodeHex: 'U+1F3C3 U+200D U+2640 U+FE0F U+200D U+27A1 U+FE0F',
    extraTags: ['woman running facing right', '🏃♀️➡️'],
  }),
  buildFacingRightVariant({
    baseId: 'man-running',
    id: 'man-running-facing-right',
    char: '🏃‍♂️‍➡️',
    name: 'Man Running Facing Right',
    unicodeHex: 'U+1F3C3 U+200D U+2642 U+FE0F U+200D U+27A1 U+FE0F',
    extraTags: ['man running facing right', '🏃♂️➡️'],
  }),
];
