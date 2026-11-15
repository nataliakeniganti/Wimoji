import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared helpers for full-body person emoji, drawn in a 32x32 box ----
type PersonLayer = { d: string; kind: 'shirt' | 'skin' | 'hair' | 'pants' | 'mark' | 'item'; w?: number; fill?: string };

const personCircle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
const personEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;
// Swept hair from the 🧑 head (centre 16,17, radii 8.6 x 9.2), scaled onto this head
const personHair = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 8.6;
  const v = ry / 9.2;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 17) * v).toFixed(2)}`;
  return `M${m(7.8, 16.4)} C${m(6.8, 9.6)} ${m(10.8, 5.4)} ${m(16, 5.4)} C${m(21.2, 5.4)} ${m(25.2, 9.6)} ${m(24.2, 16.4)} C${m(23, 13.6)} ${m(20.8, 11.8)} ${m(18.4, 10.4)} C${m(16, 13)} ${m(11.6, 14.6)} ${m(7.8, 16.4)} Z`;
};

const renderPerson = (
  opts: { style?: string; strokeWidth?: number },
  layers: PersonLayer[],
  features: (ink: string, mouthFill: string, o?: boolean, s?: boolean, d?: boolean, c?: any) => string,
  id: string,
  hairColor = '#78350F',
) => {
  const c = resolveColors(opts as any, { fillPrimary: '#FB8C00', fillSecondary: '#FFCA28', stroke: '#E65100' });
  const badge = getBadgeMarkup(opts as any);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : 1.1;
  const colorOf = (k: PersonLayer['kind'], fill?: string) =>
    s
      ? c.primary
      : fill && !d
      ? fill
      : k === 'shirt'
      ? c.primary
      : k === 'skin'
      ? d ? c.secondary : '#FFCA28'
      : k === 'pants'
      ? d ? c.secondary : '#455A64'
      : k === 'mark'
      ? d ? c.secondary : '#94A3B8'
      : k === 'item'
      ? d ? c.secondary : '#94A3B8'
      : d ? c.primary : hairColor;
  const cover = (l: PersonLayer) =>
    l.kind === 'mark'
      ? ''
      : l.w
      ? `<path d="${l.d}" fill="none" stroke="#000" stroke-width="${l.w + t}" />`
      : `<path d="${l.d}" fill="#000" stroke="#000" stroke-width="${t}" />`;
  const draw = (l: PersonLayer) => {
    if (l.kind === 'mark') {
      return `<path d="${l.d}" fill="none" stroke="${o ? c.stroke : colorOf('mark', l.fill)}" stroke-width="${l.w}" />`;
    }
    if (o) {
      return l.w
        ? `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${l.w + t}" />`
        : `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${t}" />`;
    }
    const col = colorOf(l.kind, l.fill);
    if (s) {
      return l.w
        ? `<path d="${l.d}" fill="none" stroke="#FFFFFF" stroke-width="${l.w + 1.6}" /><path d="${l.d}" fill="none" stroke="${col}" stroke-width="${l.w}" />`
        : `<path d="${l.d}" fill="${col}" stroke="#FFFFFF" stroke-width="0.9" />`;
    }
    return l.w
      ? `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${l.w + 2 * t}" /><path d="${l.d}" fill="none" stroke="${col}" stroke-width="${l.w}" />`
      : `<path d="${l.d}" fill="${col}" stroke="${c.stroke}" stroke-width="${t}" />`;
  };
  const body = layers
    .map((l, i) => {
      const later = layers.slice(i + 1).map(cover).join('');
      const hole = o && l.w ? `<path d="${l.d}" fill="none" stroke="#000" stroke-width="${Math.max(0.5, l.w - t)}" />` : '';
      if (!o || (!later && !hole)) return draw(l);
      return `<mask id="${id}-${i}" maskUnits="userSpaceOnUse" x="-8" y="-8" width="48" height="48"><rect x="-8" y="-8" width="48" height="48" fill="#fff" />${later}${hole}</mask><g mask="url(#${id}-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');
  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
  const mouthFill = o ? 'none' : s ? '#FFFFFF' : '#7F1D1D';
  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${features(ink, mouthFill, o, s, d, c)}
      </g>`;
};

const personEyes = (ink: string, pts: Array<[number, number]>, r = 0.9) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}" stroke="none" />`).join('');
const personLine = (ink: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${w}" />`;

// ---- Full-body building blocks: tube limbs, shoes, hands and a head with swept hair ----
type Pt = [number, number];
const poly = (pts: Pt[]) => 'M' + pts.map((p) => `${p[0]} ${p[1]}`).join(' L');
const tube = (kind: PersonLayer['kind'], pts: Pt[], w: number, fill?: string): PersonLayer => ({ d: poly(pts), kind, w, fill });
const hand = (p: Pt, r = 1.6): PersonLayer => ({ d: personCircle(p[0], p[1], r), kind: 'skin' });
const shoe = (p: Pt, dir = 1): PersonLayer => ({ d: personEllipse(p[0] + dir * 0.9, p[1], 2.1, 1.1), kind: 'item', fill: '#5D4037' });
// shoulder -> elbow (sleeve) -> hand (bare forearm)
const armOf = (sh: Pt, el: Pt, hd: Pt): PersonLayer[] => [
  tube('skin', [el, hd], 2.6),
  tube('shirt', [sh, el], 3.4),
  hand(hd),
];
// hip -> knee -> foot in long trousers with a shoe
const legOf = (hip: Pt, kn: Pt, ft: Pt, dir = 1): PersonLayer[] => [tube('pants', [hip, kn, ft], 3.6), shoe(ft, dir)];
const headOf = (cx: number, cy: number, rx = 3.5, ry = 3.8): PersonLayer[] => [
  { d: personEllipse(cx, cy, rx, ry), kind: 'skin' },
  { d: personHair(cx, cy, rx, ry), kind: 'hair' },
];
// Eyes and a smile on a head looking slightly towards dir (-1 left, 0 front, 1 right)
const faceAt = (ink: string, cx: number, cy: number, dir = 0, sc = 1) => {
  const ex = cx + dir * 0.9 * sc;
  return (
    personEyes(ink, [[ex - 1.3 * sc, cy + 0.3 * sc], [ex + 1.3 * sc, cy + 0.3 * sc]], 0.75 * sc) +
    personLine(ink, `M${ex - 1 * sc} ${cy + 1.9 * sc} C${ex - 0.4 * sc} ${cy + 2.6 * sc} ${ex + 0.4 * sc} ${cy + 2.6 * sc} ${ex + 1 * sc} ${cy + 1.9 * sc}`, 0.8)
  );
};

export const sportsRacingIcons: WimojiIconDef[] = [
  {
    id: 'basketball',
    char: '🏀',
    name: 'Basketball',
    unicodeHex: 'U+1F3C0',
    category: 'sports-travel',
    tags: ['basketball', 'ball', 'hoop', 'nba', 'dunk', 'court', 'sport', 'orange', 'game', '🏀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#0F172A', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <line x1="4" y1="16" x2="28" y2="16" />
          <line x1="16" y1="4" x2="16" y2="28" />
          <path d="M7 8c5 4 5 12 0 16" />
          <path d="M25 8c-5 4-5 12 0 16" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Orange Basketball Leather Sphere -->
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#9A3412" stroke-width="1.2" />
        <!-- Black Inset Rib Seams -->
        <line x1="3.5" y1="16" x2="28.5" y2="16" stroke="${c.secondary}" stroke-width="1.6" />
        <line x1="16" y1="3.5" x2="16" y2="28.5" stroke="${c.secondary}" stroke-width="1.6" />
        <path d="M7 8c5.5 4.5 5.5 11.5 0 16" stroke="${c.secondary}" stroke-width="1.6" fill="none" />
        <path d="M25 8c-5.5 4.5-5.5 11.5 0 16" stroke="${c.secondary}" stroke-width="1.6" fill="none" />
        <!-- Subtle highlights -->
        <ellipse cx="11" cy="10" rx="3.5" ry="1.5" transform="rotate(-30 11 10)" fill="#FED7AA" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'chequered-flag',
    char: '🏁',
    name: 'Chequered Flag',
    unicodeHex: 'U+1F3C1',
    category: 'sports-travel',
    tags: ['chequered flag', 'racing', 'finish line', 'race', 'flag', 'formula 1', 'grand prix', 'winner', 'finish', '🏁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#F8FAFC', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="5" y1="4" x2="5" y2="29" />
          <path d="M5 5c6-2 14 2 22 0v14c-8 2-16-2-22 0z" />
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="19" y1="6" x2="19" y2="20" />
          <line x1="5" y1="12" x2="27" y2="12" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Flagpole on Left -->
        <line x1="5" y1="4" x2="5" y2="29" stroke="#94A3B8" stroke-width="2.2" stroke-linecap="round" />
        <circle cx="5" cy="4" r="1.5" fill="#FBBF24" />
        <!-- Waving Flag Canvas Base (White) -->
        <path d="M5 5c6-2 14 2 22 0v14c-8 2-16-2-22 0V5z" fill="${c.secondary}" stroke="#0F172A" stroke-width="0.8" />
        <!-- Black Checkerboard Patches -->
        <path d="M5 5c3-1 7 0 10.5 0v7c-3.5 0-7.5-1-10.5 0V5z" fill="${c.primary}" />
        <path d="M21 6c2-0.5 4 0 6-1v7c-2 0.5-4 0-6 0.5V6z" fill="${c.primary}" />
        <path d="M10.5 12c3.5 0 7 1 10.5 0v7c-3.5 1-7 0-10.5 0v-7z" fill="${c.primary}" />
        <path d="M5 12c2.5 0 4 0.5 5.5 0.5v6.5c-2 0.5-3.5 0-5.5 0V12z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'snowboarder',
    char: '🏂',
    name: 'Snowboarder',
    unicodeHex: 'U+1F3C2',
    category: 'sports-travel',
    tags: ['snowboarder', 'snowboard', 'winter', 'snow', 'mountain', 'slope', 'sport', 'extreme', 'ride', '🏂'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M0 29.5 C6 28 12 30.4 18 29 S28 28 32 29 V32 H0 Z', kind: 'item', fill: '#E3F2FD' },
        tube('item', [[4, 27.4], [28, 22.4]], 2.8, '#29B6F6'),
        ...armOf([14.6, 11.8], [8.6, 14.2], [4.4, 11.6]),
        ...legOf([15, 17.6], [11.2, 21.4], [10, 25.2], 1),
        tube('shirt', [[15.6, 11], [15, 17.6]], 6.4),
        ...legOf([16, 17.6], [19, 20.6], [20.4, 23.2], 1),
        ...armOf([16.8, 11.8], [22.4, 12.4], [27, 9.4]),
        ...headOf(15.8, 6.4),
        { d: 'M12.3 5.6 C12.1 1.6 14.2 0.9 15.8 0.9 C17.4 0.9 19.5 1.6 19.3 5.6 C17.6 4.6 14 4.6 12.3 5.6 Z', kind: 'item', fill: '#1E88E5' },
        { d: personCircle(15.8, 0.7, 1.1), kind: 'item', fill: '#FFFFFF' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 15.8, 6.4, 1);
        },
        'snow',
      );
    },
  },
  {
    id: 'person-running',
    char: '🏃',
    name: 'Person Running',
    unicodeHex: 'U+1F3C3',
    category: 'sports-travel',
    tags: ['runner', 'running', 'jogging', 'sprint', 'marathon', 'athlete', 'exercise', 'fitness', 'sport', '🏃'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Facing left: back arm and leg trail to the right
        ...armOf([15.6, 11.8], [20.4, 13.8], [23.6, 17.6]),
        ...legOf([17.6, 19.2], [22, 24], [27.6, 22.4], 1),
        tube('shirt', [[14.2, 10.8], [17.4, 19.4]], 5.8),
        ...legOf([16.4, 19.4], [11.2, 21.8], [12.6, 28], -1),
        ...armOf([13.4, 11.8], [8.6, 14.6], [6.4, 10.6]),
        ...headOf(12.2, 5.8),
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 12.2, 5.8, -1);
        },
        'run',
      );
    },
  },
  {
    id: 'person-surfing',
    char: '🏄',
    name: 'Person Surfing',
    unicodeHex: 'U+1F3C4',
    category: 'sports-travel',
    tags: ['surfer', 'surfing', 'wave', 'surfboard', 'ocean', 'beach', 'summer', 'water sport', 'sea', '🏄'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        tube('item', [[2.6, 27.8], [29.4, 26]], 3, '#FFEE58'),
        ...armOf([14.6, 12.2], [8.8, 14], [5, 10.6]),
        ...legOf([14.4, 19.4], [11, 22.6], [9.6, 26.2], 1),
        tube('shirt', [[15.4, 11.4], [14.8, 19.4]], 6.4),
        ...legOf([15.8, 19.4], [19.2, 22.4], [21, 25.4], 1),
        ...armOf([16.6, 12.2], [22.8, 12.4], [27.6, 9]),
        ...headOf(15.6, 6.6),
        { d: 'M0 29.4 C4 27.6 8 31.4 12 29.4 S20 27.6 24 29.4 S29 31.4 32 29.4 V32 H0 Z', kind: 'item', fill: '#4FC3F7' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 15.6, 6.6, 0);
        },
        'surf',
      );
    },
  },
  {
    id: 'sports-medal',
    char: '🏅',
    name: 'Sports Medal',
    unicodeHex: 'U+1F3C5',
    category: 'sports-travel',
    tags: ['medal', 'sports medal', 'gold', 'winner', 'first place', 'champion', 'olympics', 'award', 'ribbon', '🏅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#EF4444', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="11,4 16,13 13,13 8,4" />
          <polygon points="21,4 16,13 19,13 24,4" />
          <circle cx="16" cy="21" r="7" />
          <circle cx="16" cy="21" r="4.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- V-shaped Ribbon (Red & Blue Stripes) -->
        <polygon points="8,4 16,15 13,15 6,4" fill="${c.secondary}" />
        <polygon points="24,4 16,15 19,15 26,4" fill="${c.secondary}" />
        <polygon points="10,4 16,14 13.5,14 8,4" fill="#3B82F6" />
        <polygon points="22,4 16,14 18.5,14 24,4" fill="#3B82F6" />
        <!-- Golden Medal Coin -->
        <circle cx="16" cy="21" r="7.5" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <circle cx="16" cy="21" r="5.2" fill="#FDE047" stroke="#D97706" stroke-width="0.8" />
        <!-- Embossed 1st Star/Olive wreath -->
        <circle cx="16" cy="21" r="1.5" fill="#D97706" />
      </g>`;
    },
  },
  {
    id: 'trophy',
    char: '🏆',
    name: 'Trophy',
    unicodeHex: 'U+1F3C6',
    category: 'sports-travel',
    tags: ['trophy', 'cup', 'gold', 'winner', 'first place', 'champion', 'championship', 'prize', 'award', 'victory', '🏆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#B45309', fillAccent: '#FEF08A', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 5h16v8c0 4-3.5 7-8 7s-8-3-8-7V5z" />
          <line x1="16" y1="20" x2="16" y2="25" />
          <rect x="10" y="25" width="12" height="4" rx="1" />
          <path d="M8 8H4c0 3 1.5 6 4 6" />
          <path d="M24 8h4c0 3-1.5 6-4 6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Handles on sides -->
        <path d="M8 8H4c0 3.5 2 6 4.5 6" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M24 8h4c0 3.5-2 6-4.5 6" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Cup Bowl -->
        <path d="M8 5h16v8c0 4.5-3.5 7.5-8 7.5s-8-3-8-7.5V5z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Cup interior opening -->
        <ellipse cx="16" cy="5" rx="8" ry="2" fill="${c.accent}" stroke="#B45309" stroke-width="0.8" />
        <!-- Gold Stem & Pedestal -->
        <line x1="16" y1="20.5" x2="16" y2="25" stroke="${c.primary}" stroke-width="3" stroke-linecap="round" />
        <!-- Dark Marble Base -->
        <rect x="9.5" y="25" width="13" height="4.5" rx="1.2" fill="#78350F" stroke="#451A03" stroke-width="1" />
        <!-- Gold plaque on base -->
        <rect x="12.5" y="26" width="7" height="2" fill="#FEF08A" />
      </g>`;
    },
  },
  {
    id: 'horse-racing',
    char: '🏇',
    name: 'Horse Racing',
    unicodeHex: 'U+1F3C7',
    category: 'sports-travel',
    tags: ['horse racing', 'jockey', 'horse', 'race', 'derby', 'equestrian', 'gallop', 'sport', '🏇'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        tube('item', [[7.6, 17.4], [3.6, 15.4], [2.4, 20.6]], 2.4, '#5D4037'),
        ...[
          [[10.4, 21.2], [6.6, 24.8], [3.4, 28.4]],
          [[12.4, 22], [10.4, 26.6], [10.6, 30]],
        ].map((pts) => tube('item', pts as Pt[], 2.2, '#8D5A2B')),
        { d: personEllipse(15.4, 19.2, 7.8, 4.2), kind: 'item', fill: '#8D5A2B' },
        ...[
          [[19.6, 22], [22.8, 26.6], [22.6, 30]],
          [[21.2, 21.2], [25.6, 24], [28.6, 22.4]],
        ].map((pts) => tube('item', pts as Pt[], 2.2, '#8D5A2B')),
        tube('item', [[20.6, 17], [24.6, 11.4]], 4.6, '#8D5A2B'),
        tube('item', [[24.6, 11.4], [29, 13.4]], 3.6, '#8D5A2B'),
        { d: 'M21.6 14 L22.6 9.4 L24 12.4 Z', kind: 'item', fill: '#5D4037' },
        ...legOf([13, 16], [16.8, 18.8], [15, 21.8], 1),
        tube('shirt', [[13, 16.2], [18, 10.8]], 5.2),
        ...armOf([18, 11.4], [21.4, 13.4], [24.2, 12.4]),
        ...headOf(20, 7.4, 3.1, 3.3),
        { d: 'M16.9 7 C16.7 3.6 18.6 3.2 20 3.2 C21.4 3.2 23.2 3.6 23.1 7 C21.6 6.2 18.4 6.2 16.9 7 Z', kind: 'item', fill: '#E53935' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 20, 7.8, 1, 0.8);
        },
        'horse',
      );
    },
  },
  {
    id: 'american-football',
    char: '🏈',
    name: 'American Football',
    unicodeHex: 'U+1F3C8',
    category: 'sports-travel',
    tags: ['american football', 'football', 'nfl', 'super bowl', 'pigskin', 'sport', 'touchdown', 'ball', 'game', '🏈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#FFFFFF', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="13" ry="8" transform="rotate(-45 16 16)" />
          <line x1="9" y1="9" x2="23" y2="23" />
          <line x1="14" y1="14" x2="16" y2="12" />
          <line x1="16" y1="16" x2="18" y2="14" />
          <line x1="18" y1="18" x2="20" y2="16" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-45 16 16)">
        <!-- Leather Pigskin Oval Body -->
        <ellipse cx="16" cy="16" rx="13.5" ry="8.5" fill="${c.primary}" stroke="#451A03" stroke-width="1.2" />
        <!-- White Stripes near Tips -->
        <path d="M6 11.5c1 3 1 6 0 9" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
        <path d="M26 11.5c-1 3-1 6 0 9" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
        <!-- White Seam and Laces -->
        <line x1="8" y1="16" x2="24" y2="16" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" />
        <line x1="12" y1="13.5" x2="12" y2="18.5" stroke="${c.secondary}" stroke-width="1.6" stroke-linecap="round" />
        <line x1="15" y1="13.5" x2="15" y2="18.5" stroke="${c.secondary}" stroke-width="1.6" stroke-linecap="round" />
        <line x1="18" y1="13.5" x2="18" y2="18.5" stroke="${c.secondary}" stroke-width="1.6" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'rugby-football',
    char: '🏉',
    name: 'Rugby Football',
    unicodeHex: 'U+1F3C9',
    category: 'sports-travel',
    tags: ['rugby', 'football', 'ball', 'six nations', 'sport', 'try', 'scrum', 'game', '🏉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#1D4ED8', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="13" ry="8" transform="rotate(-45 16 16)" />
          <path d="M8 8c5 3 13 3 16 0" />
          <path d="M8 24c5-3 13-3 16 0" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-45 16 16)">
        <!-- Oval Rugby Ball (White) -->
        <ellipse cx="16" cy="16" rx="13.5" ry="8.5" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1.2" />
        <!-- Blue Curved Gripping Panels -->
        <path d="M7 11c6 3 12 3 18 0" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M7 21c6-3 12-3 18 0" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <line x1="3.5" y1="16" x2="28.5" y2="16" stroke="#94A3B8" stroke-width="1" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'person-swimming',
    char: '🏊',
    name: 'Person Swimming',
    unicodeHex: 'U+1F3CA',
    category: 'sports-travel',
    tags: ['swimmer', 'swimming', 'pool', 'water', 'crawl', 'swim', 'sport', 'olympics', 'exercise', 'race', '🏊'],
    renderContent: (opts) => {
      // Front crawl: white cap and goggles, one arm sweeping over the water, body half submerged
      const layers: PersonLayer[] = [
        ...legOf([22.6, 18.6], [26.2, 19], [29, 17.8], 1),
        tube('shirt', [[11.6, 15.6], [23, 18.6]], 6.2),
        ...headOf(8.2, 14.4, 3.7, 3.9),
        { d: 'M4.3 14.2 C3.8 9 6.2 9 8.2 9 C10.2 9 12.6 9 12.1 14.2 C10.2 12.6 6.2 12.6 4.3 14.2 Z', kind: 'item', fill: '#F5F5F5' },
        { d: personCircle(6.4, 14.8, 1.4), kind: 'item', fill: '#29B6F6' },
        { d: personCircle(10, 14.8, 1.4), kind: 'item', fill: '#29B6F6' },
        ...armOf([14.2, 14.4], [21.4, 9.4], [27.8, 12.6]),
        { d: 'M1.4 21 C4.6 18.8 8.4 22.8 12.4 20.8 S20.4 18.8 24.4 20.8 S29 22.2 30.6 20.8 C31.4 24.6 29 28 24 28.6 C18 29.6 14 27.8 9 28.6 C4.6 29 1.6 26 1.4 21 Z', kind: 'item', fill: '#4FC3F7' },
        { d: 'M3.6 25.4 C6 23.8 9 26.8 12.4 25.4 M17 27.6 C20 26.2 23.4 29 27 27.4', kind: 'mark', w: 1.2, fill: '#E1F5FE' },
        
      ];
      return renderPerson(
        opts,
        layers,
        (ink) => personLine(ink, 'M7 17.6 C7.8 18.2 8.8 18.2 9.6 17.6', 0.7),
        'swim',
      );
    },
  },
  {
    id: 'weight-lifter',
    char: '🏋',
    name: 'Person Lifting Weights',
    unicodeHex: 'U+1F3CB',
    category: 'sports-travel',
    tags: ['weightlifter', 'lifting', 'barbell', 'weights', 'gym', 'workout', 'fitness', 'crossfit', 'strength', '🏋'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        tube('mark', [[2.6, 4], [29.4, 4]], 1.6, '#78909C'),
        tube('item', [[5, 0.6], [5, 7.4]], 2.8, '#455A64'),
        tube('item', [[27, 0.6], [27, 7.4]], 2.8, '#455A64'),
        tube('item', [[2.4, 2], [2.4, 6]], 1.8, '#90A4AE'),
        tube('item', [[29.6, 2], [29.6, 6]], 1.8, '#90A4AE'),
        ...legOf([13.4, 22], [10.4, 25.6], [9, 29.6], -1),
        ...legOf([18.6, 22], [21.6, 25.6], [23, 29.6], 1),
        tube('shirt', [[16, 14.4], [16, 22]], 7.2),
        ...armOf([12.2, 14.8], [9.8, 9.8], [8.4, 4.4]),
        ...armOf([19.8, 14.8], [22.2, 9.8], [23.6, 4.4]),
        ...headOf(16, 9.6),
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 16, 9.6, 0) + personLine(ink, 'M13.4 7.4 L14.8 7.8 M18.6 7.4 L17.2 7.8', 0.8);
        },
        'lift',
      );
    },
  },
  {
    id: 'person-golfing',
    char: '🏌',
    name: 'Person Golfing',
    unicodeHex: 'U+1F3CC',
    category: 'sports-travel',
    tags: ['golfer', 'golf', 'golfing', 'swing', 'club', 'course', 'green', 'sport', 'fairway', 'drive', '🏌'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M1 30.4 H31', kind: 'mark', w: 1.8, fill: '#66BB6A' },
        tube('mark', [[19.2, 19.8], [25, 29]], 1, '#78909C'),
        { d: personEllipse(25.6, 29.4, 1.6, 0.8), kind: 'item', fill: '#546E7A' },
        { d: personCircle(29, 29.2, 1.3), kind: 'item', fill: '#FFFFFF' },
        ...legOf([13.6, 20.6], [11.4, 25.4], [10.4, 29.6], -1),
        ...legOf([16.6, 20.6], [18.2, 25.4], [19.4, 29.6], 1),
        tube('shirt', [[14.4, 12.6], [15, 20.8]], 6.6),
        ...armOf([15.8, 13], [17.8, 16.6], [19.2, 19.8]),
        ...headOf(13.4, 7, 3.4, 3.7),
        { d: 'M9.8 6.2 C10 3 12.2 2.8 14.4 3 C16.4 3.2 17.4 4.6 17.6 6.2 L20 6.8 L17.4 7.4 C14 5.4 11.6 5.4 9.8 6.2 Z', kind: 'item', fill: '#43A047' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 13.4, 7.4, 1, 0.9);
        },
        'golf',
      );
    },
  },
  {
    id: 'motorcycle',
    char: '🏍',
    name: 'Motorcycle',
    unicodeHex: 'U+1F3CD',
    category: 'sports-travel',
    tags: ['motorcycle', 'motorbike', 'bike', 'racing', 'speed', 'moto', 'motocross', 'ride', 'vehicle', '🏍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#0F172A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Wheels -->
          <circle cx="7" cy="22" r="5" />
          <circle cx="25" cy="22" r="5" />
          <!-- Frame -->
          <path d="M7 22l6-4 4 4 8-1" />
          <path d="M13 18l3-7h3l3 8" />
          <line x1="20" y1="9" x2="23" y2="9" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Rear & Front Rubber Wheels -->
        <circle cx="7" cy="22" r="5.5" fill="${c.secondary}" stroke="#334155" stroke-width="1.2" />
        <circle cx="7" cy="22" r="2.8" fill="#94A3B8" />
        <circle cx="25" cy="22" r="5.5" fill="${c.secondary}" stroke="#334155" stroke-width="1.2" />
        <circle cx="25" cy="22" r="2.8" fill="#94A3B8" />
        <!-- Engine Block -->
        <rect x="13" y="18" width="6" height="5" rx="1" fill="#64748B" stroke="#334155" stroke-width="0.8" />
        <!-- Sport Bike Gas Tank & Fairing (Red) -->
        <path d="M9 19l4-5h5l4 3-2 5-6-1z" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <!-- Seat -->
        <path d="M10 15h4v2h-4z" fill="#0F172A" />
        <!-- Handlebars & Front Fork -->
        <line x1="25" y1="22" x2="20" y2="9" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" />
        <line x1="19" y1="9" x2="23" y2="9" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'racing-car',
    char: '🏎',
    name: 'Racing Car',
    unicodeHex: 'U+1F3CE',
    category: 'sports-travel',
    tags: ['racing car', 'racecar', 'f1', 'formula 1', 'grand prix', 'speed', 'motorsport', 'fast', 'auto', '🏎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#0F172A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Wheels -->
          <circle cx="8" cy="21" r="4" />
          <circle cx="24" cy="21" r="4" />
          <!-- Car Silhouette -->
          <path d="M3 21h2l2-4 9-2 5 2 4 4h3" />
          <!-- Rear wing spoiler -->
          <rect x="2" y="13" width="5" height="2" />
          <line x1="4" y1="15" x2="4" y2="21" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Front & Rear Racing Tires (Black slick rubber) -->
        <circle cx="7.5" cy="21.5" r="4.5" fill="${c.secondary}" stroke="#334155" stroke-width="1.2" />
        <circle cx="7.5" cy="21.5" r="2" fill="#FBBF24" />
        <circle cx="24.5" cy="21.5" r="4.5" fill="${c.secondary}" stroke="#334155" stroke-width="1.2" />
        <circle cx="24.5" cy="21.5" r="2" fill="#FBBF24" />
        <!-- Aerodynamic Cockpit & Body Chassis (Red) -->
        <path d="M3 21.5h3l2-4.5h8l5 2 4.5 2.5h3.5v2H3v-2z" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <!-- Driver Helmet in Cockpit -->
        <circle cx="15.5" cy="15" r="2.2" fill="#FEF08A" stroke="#D97706" stroke-width="0.6" />
        <!-- Rear Wing Downforce Spoiler -->
        <rect x="2" y="12" width="6" height="2.5" rx="0.5" fill="${c.primary}" stroke="#991B1B" stroke-width="0.8" />
        <line x1="4.5" y1="14.5" x2="4.5" y2="21.5" stroke="#0F172A" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'cricket',
    char: '🏏',
    name: 'Cricket Game',
    unicodeHex: 'U+1F3CF',
    category: 'sports-travel',
    tags: ['cricket', 'bat', 'ball', 'wicket', 'ipl', 'test', 'ashes', 'sport', 'game', '🏏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#DC2626', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g transform="rotate(-45 14 18)">
            <!-- Flat Bat Blade -->
            <rect x="11" y="9" width="6" height="18" rx="1.5" />
            <!-- Handle -->
            <line x1="14" y1="9" x2="14" y2="2" />
          </g>
          <!-- Ball -->
          <circle cx="24" cy="14" r="4" />
          <path d="M22 11c2 2 2 4 0 6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Red Leather Cricket Ball with Seam -->
        <circle cx="24" cy="14" r="4.5" fill="${c.secondary}" stroke="#991B1B" stroke-width="1" />
        <path d="M22 10.5c2.5 2 2.5 5 0 7" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.8" />
        <!-- Wooden Cricket Bat (Willow Blade & Cane Handle) -->
        <g transform="rotate(-45 13 18)">
          <!-- Handle Grip (Wrapped White) -->
          <line x1="13" y1="9" x2="13" y2="1.5" stroke="#F8FAFC" stroke-width="3" stroke-linecap="round" />
          <line x1="13" y1="9" x2="13" y2="1.5" stroke="#CBD5E1" stroke-width="0.8" stroke-dasharray="1 1" />
          <!-- Willow Flat Bat Blade -->
          <rect x="10" y="9" width="6" height="18.5" rx="1.5" fill="${c.primary}" stroke="#78350F" stroke-width="1.2" />
          <!-- Woodgrain highlight stripe -->
          <line x1="13" y1="10" x2="13" y2="26" stroke="#FEF3C7" stroke-width="1" opacity="0.6" />
        </g>
      </g>`;
    },
  },
];