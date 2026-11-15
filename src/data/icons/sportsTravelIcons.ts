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

// Flip a rendered figure left-to-right (the badge, if any, stays where it is)
const mirrorFigure = (svg: string) => {
  const i = svg.indexOf('<g stroke-linecap');
  return `${svg.slice(0, i)}<g transform="matrix(-1 0 0 1 32 0)">${svg.slice(i)}</g>`;
};

export const sportsTravelIcons: WimojiIconDef[] = [
  {
    id: 'soccer-ball',
    char: '⚽',
    name: 'Soccer Ball',
    unicodeHex: 'U+26BD',
    category: 'sports-travel',
    tags: ['soccer', 'football', 'ball', 'sport', 'fifa', 'kick', 'goal'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M16 11l4 3-1.5 5h-5L12 14z" />
          <path d="M16 11V4M20 14l7-2M18.5 19l4 7M13.5 19l-4 7M12 14l-7-2" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M16 11l4.5 3.5-1.5 5h-6L8.5 14.5z" fill="${c.secondary}" />
        <path d="M16 11V4M20.5 14.5L27 12M19 19.5l4 7M13 19.5l-4 7M8.5 14.5L5 12" stroke="${c.secondary}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'baseball',
    char: '⚾',
    name: 'Baseball',
    unicodeHex: 'U+26BE',
    category: 'sports-travel',
    tags: ['baseball', 'ball', 'mlb', 'pitch', 'bat', 'sport', 'strike'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const stitch = opts.style === 'outline' ? c.stroke : c.secondary;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M10 5c3 3 3 19 0 22" />
          <path d="M22 5c-3 3-3 19 0 22" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1" />
        <path d="M9 5c4 4 4 18 0 22" stroke="${stitch}" stroke-width="${opts.strokeWidth}" stroke-dasharray="2 2" fill="none" />
        <path d="M23 5c-4 4-4 18 0 22" stroke="${stitch}" stroke-width="${opts.strokeWidth}" stroke-dasharray="2 2" fill="none" />
      </g>`;
    },
  },
  {
    id: 'flag-in-hole',
    char: '⛳',
    name: 'Flag in Hole',
    unicodeHex: 'U+26F3',
    category: 'sports-travel',
    tags: ['golf', 'flag', 'hole', 'green', 'sport', 'course', 'putt'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#10B981', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <ellipse cx="14" cy="26" rx="8" ry="3" />
          <path d="M14 26V5" />
          <path d="M14 5l9 4-9 4z" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="14" cy="26" rx="8" ry="3" fill="${c.secondary}" />
        <ellipse cx="14" cy="26" rx="3.5" ry="1.5" fill="#0F172A" />
        <path d="M14 26V5" stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" />
        <path d="M14 5l10 4-10 4z" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'skier',
    char: '⛷',
    name: 'Skier',
    unicodeHex: 'U+26F7',
    category: 'sports-travel',
    tags: ['ski', 'skier', 'snow', 'winter', 'mountain', 'slope', 'sport'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M0 28.4 L32 18.6 V32 H0 Z', kind: 'item', fill: '#E3F2FD' },
        tube('mark', [[26.6, 14.6], [22.4, 27]], 1, '#78909C'),
        tube('item', [[2.6, 27.4], [25.4, 21.6]], 2.2, '#1E88E5'),
        ...legOf([13.6, 15.4], [18.6, 19.4], [16.6, 23.6], 1),
        ...legOf([14.6, 15.4], [19.8, 20], [11.4, 24.6], -1),
        tube('shirt', [[13.8, 15.6], [18.8, 10.4]], 5.6),
        ...armOf([18.4, 11.2], [22, 14.6], [26.2, 14.6]),
        ...headOf(21.4, 6.8, 3.2, 3.5),
        { d: 'M18.4 5.8 C18.4 3.2 20 2.8 21.4 2.8 C22.8 2.8 24.4 3.2 24.4 5.8 C23 5 19.8 5 18.4 5.8 Z', kind: 'item', fill: '#E53935' },
        { d: 'M22 6 H25 V7.6 H22 Z', kind: 'item', fill: '#37474F' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return personLine(ink, 'M21.2 9.4 C22 10 23 10 23.8 9.4', 0.8);
        },
        'skier',
      );
    },
  },
  {
    id: 'ice-skate',
    char: '⛸',
    name: 'Ice Skate',
    unicodeHex: 'U+26F8',
    category: 'sports-travel',
    tags: ['ice skate', 'skating', 'blade', 'winter', 'ice', 'figure skating'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F1F5F9', fillSecondary: '#94A3B8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 8v10c0 2 2 4 4 4h9v-5l-4-4v-5z" />
          <path d="M5 28h22M9 22v6M21 22v6" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M9 8v10c0 2 2 3.5 4 3.5h8v-5l-4-3.5V8z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M4 27h24" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <path d="M9 22v5M21 22v5" stroke="${c.secondary}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'person-bouncing-ball',
    char: '⛹',
    name: 'Person Bouncing Ball',
    unicodeHex: 'U+26F9',
    category: 'sports-travel',
    tags: ['basketball', 'dribble', 'ball', 'athlete', 'sport', 'bounce', 'player'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: personEllipse(22.4, 30.2, 3, 0.8), kind: 'mark', fill: '#CFD8DC' },
        ...legOf([13.6, 19.6], [10.6, 24.6], [8, 29.2], -1),
        ...armOf([12.6, 12.4], [8.4, 15], [6.4, 11.6]),
        tube('shirt', [[14.6, 11.4], [14, 19.8]], 6.4),
        ...legOf([15, 19.8], [18.4, 24.2], [17.6, 29.2], 1),
        ...armOf([16.4, 12.4], [20.4, 15.6], [21.6, 20]),
        ...headOf(14.8, 6, 3.5, 3.8),
        { d: personCircle(22.4, 24.6, 3.4), kind: 'item', fill: '#F97316' },
        { d: 'M19 24.6 H25.8 M22.4 21.2 V28 M20 22.2 C21.4 23.6 21.4 25.6 20 27 M24.8 22.2 C23.4 23.6 23.4 25.6 24.8 27', kind: 'mark', w: 0.5, fill: '#7C2D12' },
      ];
      return mirrorFigure(renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 14.8, 6, 1);
        },
        'bounce',
      ));
    },
  },
  {
    id: 'sailboat',
    char: '⛵',
    name: 'Sailboat',
    unicodeHex: 'U+26F5',
    category: 'sports-travel',
    tags: ['sailboat', 'yacht', 'boat', 'sea', 'ocean', 'sailing', 'travel'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F59E0B', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M15 5v16" />
          <path d="M15 5l9 14H15z" />
          <path d="M13 9l-6 10h6z" />
          <path d="M5 24l3 3h16l3-3z" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M15 4v17" stroke="#1E293B" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
        <path d="M15 4l10 15H15z" fill="${c.primary}" />
        <path d="M13 8L6 19h7z" fill="${c.secondary}" />
        <path d="M4 23l3.5 4.5h17L28 23z" fill="#334155" />
      </g>`;
    },
  },
  {
    id: 'ferry',
    char: '⛴',
    name: 'Ferry',
    unicodeHex: 'U+26F4',
    category: 'sports-travel',
    tags: ['ferry', 'ship', 'boat', 'passenger', 'cruise', 'transit', 'water'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#EF4444', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 22l3 5h18l3-5H4z" />
          <rect x="8" y="14" width="16" height="8" rx="1" />
          <rect x="12" y="9" width="8" height="5" rx="1" />
          <path d="M16 6v3" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="12" y="9" width="8" height="5" rx="1" fill="#64748B" />
        <rect x="8" y="14" width="16" height="8" rx="1.5" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1" />
        <circle cx="11" cy="17" r="1" fill="${c.stroke}" />
        <circle cx="16" cy="17" r="1" fill="${c.stroke}" />
        <circle cx="21" cy="17" r="1" fill="${c.stroke}" />
        <path d="M4 22l3 5h18l3-5H4z" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'airplane',
    char: '✈',
    name: 'Airplane',
    unicodeHex: 'U+2708',
    category: 'sports-travel',
    tags: ['airplane', 'flight', 'fly', 'plane', 'travel', 'airport', 'holiday', 'trip', 'commercial airplane', 'aviation', 'sideways', '✈', '✈️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#F8FAFC', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g transform="rotate(90 16 16)">
            <!-- Commercial Passenger Jet Fuselage & Swept Wings -->
            <path d="M16 2.5c-1.5 0-2.5 2-2.5 5.5v7l-10.5 4v2.5l10.5-2.5v5.5l-3 2v1.5l5.5-1 5.5 1V27l-3-2V19l10.5 2.5v-2.5l-10.5-4V8c0-3.5-1-5.5-2.5-5.5z" />
            <!-- Cockpit Windshield -->
            <ellipse cx="16" cy="6" rx="1.8" ry="1.2" />
            <!-- Wing Jet Turbines -->
            <rect x="8" y="16.5" width="2" height="3" rx="0.8" />
            <rect x="22" y="16.5" width="2" height="3" rx="0.8" />
          </g>
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="rotate(90 16 16)">
        <!-- Commercial Passenger Jet Fuselage & Swept Wings -->
        <path d="M16 2.5c-1.5 0-2.5 2-2.5 5.5v7l-10.5 4v2.5l10.5-2.5v5.5l-3 2v1.5l5.5-1 5.5 1V27l-3-2V19l10.5 2.5v-2.5l-10.5-4V8c0-3.5-1-5.5-2.5-5.5z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Cockpit Windshield -->
        <ellipse cx="16" cy="6" rx="1.8" ry="1.2" fill="${c.primary}" />
        <!-- Wing Jet Turbines -->
        <rect x="8" y="16.5" width="2" height="3" rx="0.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.6" />
        <rect x="22" y="16.5" width="2" height="3" rx="0.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'tent',
    char: '⛺',
    name: 'Tent',
    unicodeHex: 'U+26FA',
    category: 'sports-travel',
    tags: ['tent', 'camping', 'camp', 'outdoors', 'nature', 'hike', 'shelter'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#10B981', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 5L4 25h24L16 5z" />
          <path d="M16 5v20" />
          <path d="M12 25l4-8 4 8" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M16 5L4 25h24L16 5z" fill="${c.primary}" />
        <path d="M16 5L12 25h8L16 5z" fill="${c.secondary}" />
        <path d="M16 16v9" stroke="#0F172A" stroke-width="${opts.strokeWidth}" />
      </g>`;
    },
  },
  {
    id: 'mountain',
    char: '⛰',
    name: 'Mountain',
    unicodeHex: 'U+26F0',
    category: 'sports-travel',
    tags: ['mountain', 'peak', 'hike', 'climb', 'nature', 'alps', 'snowcap'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#F8FAFC', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 26L13 8l10 18" />
          <path d="M17 18l5-9 7 17" />
          <path d="M10 14l3 3 3-3" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M17 17l6-9 8 18H17z" fill="#475569" />
        <path d="M2 26L13 8l11 18H2z" fill="${c.primary}" />
        <path d="M13 8l-3.5 6 3 2 3-2z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'umbrella-on-ground',
    char: '⛱',
    name: 'Umbrella on Ground',
    unicodeHex: 'U+26F1',
    category: 'sports-travel',
    tags: ['beach umbrella', 'sunshade', 'summer', 'vacation', 'resort', 'sand', 'holiday'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F43F5E', fillSecondary: '#FBBF24', stroke: '#BE123C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 6v21" />
          <path d="M6 16c0-6 4.5-10 10-10s10 4 10 10H6z" />
          <path d="M11 27c2-1 8-1 10 0" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M16 6v21" stroke="#334155" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
        <path d="M6 16c0-6 4.5-10 10-10s10 4 10 10H6z" fill="${c.primary}" />
        <path d="M11 16c0-6 2.5-10 5-10s5 4 5 10H11z" fill="${c.secondary}" />
        <ellipse cx="16" cy="27" rx="7" ry="2" fill="#FDE68A" />
      </g>`;
    },
  },
  {
    id: 'fountain',
    char: '⛲',
    name: 'Fountain',
    unicodeHex: 'U+26F2',
    category: 'sports-travel',
    tags: ['fountain', 'water', 'park', 'spray', 'plaza', 'fount'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#64748B', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="25" rx="10" ry="3" />
          <path d="M14 24v-6h4v6" />
          <ellipse cx="16" cy="18" rx="6" ry="2" />
          <path d="M16 18c0-8-5-8-5-14" />
          <path d="M16 18c0-8 5-8 5-14" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="25" rx="11" ry="3.5" fill="${c.secondary}" />
        <rect x="14" y="17" width="4" height="8" fill="#475569" />
        <ellipse cx="16" cy="17" rx="7" ry="2.5" fill="${c.secondary}" />
        <path d="M16 17c0-6-6-7-6-13" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none" />
        <path d="M16 17c0-6 6-7 6-13" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
];