import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export type FamilyMemberRole = 'adult' | 'man' | 'woman' | 'child' | 'boy' | 'girl';

interface PlacedMember {
  role: FamilyMemberRole;
  cx: number;
  baseY: number;
  scale: number;
}

function getMemberShapes(role: FamilyMemberRole): { headCy: number; headR: number; bodyPath: string } {
  switch (role) {
    case 'man':
      return {
        headCy: -14.1,
        headR: 2.3,
        // Broad rounded shoulders tapering slightly inward toward base
        bodyPath:
          'M-2.7 0 C-3.05 0 -3.2 -0.25 -3.25 -0.65 L-3.65 -8.3 C-3.72 -9.95 -2.55 -11.05 0 -11.05 C2.55 -11.05 3.72 -9.95 3.65 -8.3 L3.25 -0.65 C3.2 -0.25 3.05 0 2.7 0 Z',
      };
    case 'woman':
      return {
        headCy: -14.1,
        headR: 2.3,
        // Trim rounded shoulders flaring cleanly outward into an A-line dress hem
        bodyPath:
          'M-3.95 0 C-4.2 0 -4.3 -0.25 -4.2 -0.65 L-2.6 -8.4 C-2.32 -10.05 -1.45 -11.05 0 -11.05 C1.45 -11.05 2.32 -10.05 2.6 -8.4 L4.2 -0.65 C4.3 -0.25 4.2 0 3.95 0 Z',
      };
    case 'adult':
      return {
        headCy: -14.1,
        headR: 2.3,
        // Balanced neutral rounded-arch figure
        bodyPath:
          'M-3.0 0 C-3.3 0 -3.45 -0.25 -3.45 -0.65 L-3.3 -8.2 C-3.25 -10.0 -2.1 -11.05 0 -11.05 C2.1 -11.05 3.25 -10.0 3.3 -8.2 L3.45 -0.65 C3.45 -0.25 3.3 0 3.0 0 Z',
      };
    case 'boy':
      return {
        headCy: -9.55,
        headR: 1.78,
        // Compact broad-shouldered boy silhouette
        bodyPath:
          'M-1.95 0 C-2.25 0 -2.38 -0.2 -2.42 -0.5 L-2.75 -5.3 C-2.8 -6.55 -1.9 -7.35 0 -7.35 C1.9 -7.35 2.8 -6.55 2.75 -5.3 L2.42 -0.5 C2.38 -0.2 2.25 0 1.95 0 Z',
      };
    case 'girl':
      return {
        headCy: -9.55,
        headR: 1.78,
        // Compact flared A-line dress girl silhouette
        bodyPath:
          'M-3.05 0 C-3.25 0 -3.35 -0.2 -3.25 -0.55 L-1.98 -5.45 C-1.75 -6.65 -1.1 -7.35 0 -7.35 C1.1 -7.35 1.75 -6.65 1.98 -5.45 L3.25 -0.55 C3.35 -0.2 3.25 0 3.05 0 Z',
      };
    case 'child':
      return {
        headCy: -9.55,
        headR: 1.78,
        // Compact neutral child silhouette
        bodyPath:
          'M-2.25 0 C-2.5 0 -2.62 -0.2 -2.62 -0.5 L-2.5 -5.35 C-2.46 -6.6 -1.55 -7.35 0 -7.35 C1.55 -7.35 2.46 -6.6 2.5 -5.35 L2.62 -0.5 C2.62 -0.2 2.5 0 2.25 0 Z',
      };
  }
}

function renderPlacedMember(
  m: PlacedMember,
  fill: string,
  stroke: string,
  strokeWidth: number
): string {
  const shapes = getMemberShapes(m.role);
  return `<g transform="translate(${m.cx.toFixed(2)} ${m.baseY.toFixed(2)}) scale(${m.scale.toFixed(3)})" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth.toFixed(2)}" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="0" cy="${shapes.headCy}" r="${shapes.headR}" />
    <path d="${shapes.bodyPath}" />
  </g>`;
}

function computeLayout(members: FamilyMemberRole[]): {
  back: PlacedMember[];
  front: PlacedMember[];
} {
  const isChildRole = (r: FamilyMemberRole) => r === 'child' || r === 'boy' || r === 'girl';
  const adults = members.filter((r) => !isChildRole(r));
  const children = members.filter((r) => isChildRole(r));

  if (adults.length === 1 && children.length === 1) {
    // 2 members: tall adult on left, child on right, aligned cleanly without overlap
    return {
      back: [],
      front: [
        { role: adults[0], cx: 11.4, baseY: 24.4, scale: 1.0 },
        { role: children[0], cx: 20.8, baseY: 24.4, scale: 1.02 },
      ],
    };
  }

  if (adults.length === 2 && children.length === 1) {
    // 3 members (2 adults + 1 child): flanking adults behind, child centered forward
    return {
      back: [
        { role: adults[0], cx: 10.2, baseY: 22.8, scale: 0.96 },
        { role: adults[1], cx: 21.8, baseY: 22.8, scale: 0.96 },
      ],
      front: [{ role: children[0], cx: 16.0, baseY: 25.8, scale: 1.0 }],
    };
  }

  if (adults.length === 1 && children.length === 2) {
    // 3 members (1 adult + 2 children): tall adult centered behind, two children flanking in front
    return {
      back: [{ role: adults[0], cx: 16.0, baseY: 22.8, scale: 0.96 }],
      front: [
        { role: children[0], cx: 9.8, baseY: 25.6, scale: 0.98 },
        { role: children[1], cx: 22.2, baseY: 25.6, scale: 0.98 },
      ],
    };
  }

  // 4 members (2 adults + 2 children): adults behind, children paired in front
  return {
    back: [
      { role: adults[0], cx: 10.2, baseY: 21.3, scale: 0.9 },
      { role: adults[1], cx: 21.8, baseY: 21.3, scale: 0.9 },
    ],
    front: [
      { role: children[0], cx: 11.7, baseY: 26.0, scale: 0.94 },
      { role: children[1], cx: 20.3, baseY: 26.0, scale: 0.94 },
    ],
  };
}

/**
 * Renders the Unicode 15.1 symbol-version family icon inside a rounded-square tile
 * across all 4 Wimoji styles: color, duotone, outline, and silhouette.
 */
export function renderFamilySymbol(
  opts: WimojiStyleOptions,
  iconId: string,
  members: FamilyMemberRole[]
): string {
  const c = resolveColors(opts, {
    fillPrimary: '#3B82F6',
    fillSecondary: '#FFFFFF',
    stroke: '#1D4ED8',
  });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';

  const { back, front } = computeLayout(members);
  const maskId = `wimoji-fam-mask-${iconId}`;

  if (o) {
    const innerSw = Math.max(0.95, sw * 0.56);
    if (back.length === 0) {
      return `${badge}<g fill="none">
        <rect x="3" y="3" width="26" height="26" rx="5.5" stroke="${c.stroke}" stroke-width="${sw}" />
        ${front.map((m) => renderPlacedMember(m, 'none', c.stroke, innerSw)).join('')}
      </g>`;
    }

    const maskCutouts = front
      .map((m) => renderPlacedMember(m, '#000000', '#000000', 2.0 / m.scale))
      .join('');

    return `${badge}<defs>
        <mask id="${maskId}">
          <rect x="0" y="0" width="32" height="32" fill="#FFFFFF" />
          ${maskCutouts}
        </mask>
      </defs>
      <g>
        <rect x="3" y="3" width="26" height="26" rx="5.5" fill="none" stroke="${c.stroke}" stroke-width="${sw}" />
        <g mask="url(#${maskId})">
          ${back.map((m) => renderPlacedMember(m, 'none', c.stroke, innerSw)).join('')}
        </g>
        ${front.map((m) => renderPlacedMember(m, 'none', c.stroke, innerSw)).join('')}
      </g>`;
  }

  if (s) {
    return `${badge}<g>
      <rect x="3" y="3" width="26" height="26" rx="5.5" fill="${c.primary}" />
      ${back.map((m) => renderPlacedMember(m, '#FFFFFF', 'none', 0)).join('')}
      ${
        back.length > 0
          ? front.map((m) => renderPlacedMember(m, c.primary, c.primary, 1.85 / m.scale)).join('')
          : ''
      }
      ${front.map((m) => renderPlacedMember(m, '#FFFFFF', 'none', 0)).join('')}
    </g>`;
  }

  if (d) {
    const sepStroke = 0.85;
    return `${badge}<g>
      <rect x="3" y="3" width="26" height="26" rx="5.5" fill="${c.primary}" fill-opacity="0.22" stroke="${c.stroke}" stroke-width="1.3" />
      ${back.map((m) => renderPlacedMember(m, c.secondary, c.stroke, sepStroke / m.scale)).join('')}
      ${front.map((m) => renderPlacedMember(m, c.secondary, c.stroke, sepStroke / m.scale)).join('')}
    </g>`;
  }

  // Vibrant / Full Color: Cobalt symbol tile with crisp white silhouettes
  const tileBg = c.primary;
  const figFill = c.secondary || '#FFFFFF';

  return `${badge}<g>
    <rect x="3" y="3" width="26" height="26" rx="5.5" fill="${tileBg}" stroke="${c.stroke}" stroke-width="1.1" />
    ${back.map((m) => renderPlacedMember(m, figFill, 'none', 0)).join('')}
    ${
      back.length > 0
        ? front.map((m) => renderPlacedMember(m, tileBg, tileBg, 1.85 / m.scale)).join('')
        : ''
    }
    ${front.map((m) => renderPlacedMember(m, figFill, 'none', 0)).join('')}
  </g>`;
}

interface FamilyEntryConfig {
  id: string;
  char: string;
  name: string;
  unicodeHex: string;
  members: FamilyMemberRole[];
  tags: string[];
}

const FAMILY_CONFIGS: FamilyEntryConfig[] = [
  // Man, Woman + Children (5)
  {
    id: 'family-man-woman-boy',
    char: '👨‍👩‍👦',
    name: 'Family: Man, Woman, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F469 U+200D U+1F466',
    members: ['man', 'woman', 'boy'],
    tags: ['family', 'man', 'woman', 'boy', 'child', 'parents', 'symbol', '👨‍👩‍👦'],
  },
  {
    id: 'family-man-woman-girl',
    char: '👨‍👩‍👧',
    name: 'Family: Man, Woman, Girl',
    unicodeHex: 'U+1F468 U+200D U+1F469 U+200D U+1F467',
    members: ['man', 'woman', 'girl'],
    tags: ['family', 'man', 'woman', 'girl', 'child', 'parents', 'symbol', '👨‍👩‍👧'],
  },
  {
    id: 'family-man-woman-girl-boy',
    char: '👨‍👩‍👧‍👦',
    name: 'Family: Man, Woman, Girl, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466',
    members: ['man', 'woman', 'girl', 'boy'],
    tags: ['family', 'man', 'woman', 'girl', 'boy', 'children', 'symbol', '👨‍👩‍👧‍👦'],
  },
  {
    id: 'family-man-woman-boy-boy',
    char: '👨‍👩‍👦‍👦',
    name: 'Family: Man, Woman, Boy, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466',
    members: ['man', 'woman', 'boy', 'boy'],
    tags: ['family', 'man', 'woman', 'boy', 'boys', 'children', 'symbol', '👨‍👩‍👦‍👦'],
  },
  {
    id: 'family-man-woman-girl-girl',
    char: '👨‍👩‍👧‍👧',
    name: 'Family: Man, Woman, Girl, Girl',
    unicodeHex: 'U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467',
    members: ['man', 'woman', 'girl', 'girl'],
    tags: ['family', 'man', 'woman', 'girl', 'girls', 'children', 'symbol', '👨‍👩‍👧‍👧'],
  },

  // Man, Man + Children (5)
  {
    id: 'family-man-man-boy',
    char: '👨‍👨‍👦',
    name: 'Family: Man, Man, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F468 U+200D U+1F466',
    members: ['man', 'man', 'boy'],
    tags: ['family', 'man', 'boy', 'child', 'dads', 'parents', 'symbol', '👨‍👨‍👦'],
  },
  {
    id: 'family-man-man-girl',
    char: '👨‍👨‍👧',
    name: 'Family: Man, Man, Girl',
    unicodeHex: 'U+1F468 U+200D U+1F468 U+200D U+1F467',
    members: ['man', 'man', 'girl'],
    tags: ['family', 'man', 'girl', 'child', 'dads', 'parents', 'symbol', '👨‍👨‍👧'],
  },
  {
    id: 'family-man-man-girl-boy',
    char: '👨‍👨‍👧‍👦',
    name: 'Family: Man, Man, Girl, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F466',
    members: ['man', 'man', 'girl', 'boy'],
    tags: ['family', 'man', 'girl', 'boy', 'children', 'dads', 'symbol', '👨‍👨‍👧‍👦'],
  },
  {
    id: 'family-man-man-boy-boy',
    char: '👨‍👨‍👦‍👦',
    name: 'Family: Man, Man, Boy, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F468 U+200D U+1F466 U+200D U+1F466',
    members: ['man', 'man', 'boy', 'boy'],
    tags: ['family', 'man', 'boy', 'boys', 'children', 'dads', 'symbol', '👨‍👨‍👦‍👦'],
  },
  {
    id: 'family-man-man-girl-girl',
    char: '👨‍👨‍👧‍👧',
    name: 'Family: Man, Man, Girl, Girl',
    unicodeHex: 'U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F467',
    members: ['man', 'man', 'girl', 'girl'],
    tags: ['family', 'man', 'girl', 'girls', 'children', 'dads', 'symbol', '👨‍👨‍👧‍👧'],
  },

  // Woman, Woman + Children (5)
  {
    id: 'family-woman-woman-boy',
    char: '👩‍👩‍👦',
    name: 'Family: Woman, Woman, Boy',
    unicodeHex: 'U+1F469 U+200D U+1F469 U+200D U+1F466',
    members: ['woman', 'woman', 'boy'],
    tags: ['family', 'woman', 'boy', 'child', 'moms', 'parents', 'symbol', '👩‍👩‍👦'],
  },
  {
    id: 'family-woman-woman-girl',
    char: '👩‍👩‍👧',
    name: 'Family: Woman, Woman, Girl',
    unicodeHex: 'U+1F469 U+200D U+1F469 U+200D U+1F467',
    members: ['woman', 'woman', 'girl'],
    tags: ['family', 'woman', 'girl', 'child', 'moms', 'parents', 'symbol', '👩‍👩‍👧'],
  },
  {
    id: 'family-woman-woman-girl-boy',
    char: '👩‍👩‍👧‍👦',
    name: 'Family: Woman, Woman, Girl, Boy',
    unicodeHex: 'U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466',
    members: ['woman', 'woman', 'girl', 'boy'],
    tags: ['family', 'woman', 'girl', 'boy', 'children', 'moms', 'symbol', '👩‍👩‍👧‍👦'],
  },
  {
    id: 'family-woman-woman-boy-boy',
    char: '👩‍👩‍👦‍👦',
    name: 'Family: Woman, Woman, Boy, Boy',
    unicodeHex: 'U+1F469 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466',
    members: ['woman', 'woman', 'boy', 'boy'],
    tags: ['family', 'woman', 'boy', 'boys', 'children', 'moms', 'symbol', '👩‍👩‍👦‍👦'],
  },
  {
    id: 'family-woman-woman-girl-girl',
    char: '👩‍👩‍👧‍👧',
    name: 'Family: Woman, Woman, Girl, Girl',
    unicodeHex: 'U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467',
    members: ['woman', 'woman', 'girl', 'girl'],
    tags: ['family', 'woman', 'girl', 'girls', 'children', 'moms', 'symbol', '👩‍👩‍👧‍👧'],
  },

  // Man + Children (5)
  {
    id: 'family-man-boy',
    char: '👨‍👦',
    name: 'Family: Man, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F466',
    members: ['man', 'boy'],
    tags: ['family', 'man', 'boy', 'father', 'son', 'single parent', 'symbol', '👨‍👦'],
  },
  {
    id: 'family-man-boy-boy',
    char: '👨‍👦‍👦',
    name: 'Family: Man, Boy, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F466 U+200D U+1F466',
    members: ['man', 'boy', 'boy'],
    tags: ['family', 'man', 'boy', 'boys', 'father', 'single parent', 'symbol', '👨‍👦‍👦'],
  },
  {
    id: 'family-man-girl',
    char: '👨‍👧',
    name: 'Family: Man, Girl',
    unicodeHex: 'U+1F468 U+200D U+1F467',
    members: ['man', 'girl'],
    tags: ['family', 'man', 'girl', 'father', 'daughter', 'single parent', 'symbol', '👨‍👧'],
  },
  {
    id: 'family-man-girl-boy',
    char: '👨‍👧‍👦',
    name: 'Family: Man, Girl, Boy',
    unicodeHex: 'U+1F468 U+200D U+1F467 U+200D U+1F466',
    members: ['man', 'girl', 'boy'],
    tags: ['family', 'man', 'girl', 'boy', 'father', 'single parent', 'symbol', '👨‍👧‍👦'],
  },
  {
    id: 'family-man-girl-girl',
    char: '👨‍👧‍👧',
    name: 'Family: Man, Girl, Girl',
    unicodeHex: 'U+1F468 U+200D U+1F467 U+200D U+1F467',
    members: ['man', 'girl', 'girl'],
    tags: ['family', 'man', 'girl', 'girls', 'father', 'single parent', 'symbol', '👨‍👧‍👧'],
  },

  // Woman + Children (5)
  {
    id: 'family-woman-boy',
    char: '👩‍👦',
    name: 'Family: Woman, Boy',
    unicodeHex: 'U+1F469 U+200D U+1F466',
    members: ['woman', 'boy'],
    tags: ['family', 'woman', 'boy', 'mother', 'son', 'single parent', 'symbol', '👩‍👦'],
  },
  {
    id: 'family-woman-boy-boy',
    char: '👩‍👦‍👦',
    name: 'Family: Woman, Boy, Boy',
    unicodeHex: 'U+1F469 U+200D U+1F466 U+200D U+1F466',
    members: ['woman', 'boy', 'boy'],
    tags: ['family', 'woman', 'boy', 'boys', 'mother', 'single parent', 'symbol', '👩‍👦‍👦'],
  },
  {
    id: 'family-woman-girl',
    char: '👩‍👧',
    name: 'Family: Woman, Girl',
    unicodeHex: 'U+1F469 U+200D U+1F467',
    members: ['woman', 'girl'],
    tags: ['family', 'woman', 'girl', 'mother', 'daughter', 'single parent', 'symbol', '👩‍👧'],
  },
  {
    id: 'family-woman-girl-boy',
    char: '👩‍👧‍👦',
    name: 'Family: Woman, Girl, Boy',
    unicodeHex: 'U+1F469 U+200D U+1F467 U+200D U+1F466',
    members: ['woman', 'girl', 'boy'],
    tags: ['family', 'woman', 'girl', 'boy', 'mother', 'single parent', 'symbol', '👩‍👧‍👦'],
  },
  {
    id: 'family-woman-girl-girl',
    char: '👩‍👧‍👧',
    name: 'Family: Woman, Girl, Girl',
    unicodeHex: 'U+1F469 U+200D U+1F467 U+200D U+1F467',
    members: ['woman', 'girl', 'girl'],
    tags: ['family', 'woman', 'girl', 'girls', 'mother', 'single parent', 'symbol', '👩‍👧‍👧'],
  },
];

export const familySymbolIcons: WimojiIconDef[] = FAMILY_CONFIGS.map((cfg) => ({
  id: cfg.id,
  char: cfg.char,
  name: cfg.name,
  unicodeHex: cfg.unicodeHex,
  category: 'people-body',
  tags: cfg.tags,
  renderContent: (opts) => renderFamilySymbol(opts, cfg.id, cfg.members),
}));
