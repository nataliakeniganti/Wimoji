import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared helpers for head-and-shoulders (with body) people emoji, drawn in a 32x32 box ----
type FigLayer = { d: string; fill: string; stroke?: string; skin?: boolean };
type Figure = { layers: FigLayer[]; features: (ink: string, o: boolean, s: boolean) => string; id: string };

const figEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const figInner = (opts: { style?: string; strokeWidth?: number }, fig: Figure, k = 1, tx = 0, ty = 0) => {
  const c = resolveColors(opts as any, { fillPrimary: '#FFCA28', fillSecondary: '#78350F', stroke: '#FFA000' });
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = (o ? Math.max(1.2, sw * 0.75) : 0.9) / k;
  const sep = 0.9 / k;
  const fillOf = (l: FigLayer) => (s || l.skin ? c.primary : d ? c.secondary : l.fill);
  const cover = (l: FigLayer) => `<path d="${l.d}" fill="#000" stroke="#000" stroke-width="${t}" />`;
  const draw = (l: FigLayer) => {
    if (o) return `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (s) return `<path d="${l.d}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="${sep}" />`;
    if (l.skin) return `<path d="${l.d}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (d) return `<path d="${l.d}" fill="${c.secondary}" stroke="#FFFFFF" stroke-width="${0.6 / k}" />`;
    return `<path d="${l.d}" fill="${fillOf(l)}" stroke="${l.stroke ?? 'none'}" stroke-width="${0.7 / k}" />`;
  };
  const body = fig.layers
    .map((l, i) => {
      const later = fig.layers.slice(i + 1).map(cover).join('');
      if (!o || !later) return draw(l);
      return `<mask id="${fig.id}-${i}" maskUnits="userSpaceOnUse" x="-16" y="-16" width="64" height="64"><rect x="-16" y="-16" width="64" height="64" fill="#fff" />${later}</mask><g mask="url(#${fig.id}-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');
  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
  return `<g transform="translate(${tx} ${ty}) scale(${k})" stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${fig.features(ink, o, s)}
      </g>`;
};
const renderFigure = (opts: { style?: string; strokeWidth?: number }, fig: Figure) =>
  `${getBadgeMarkup(opts as any)}${figInner(opts, fig)}`;

const figLine = (col: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" />`;
const figDots = (col: string, pts: Array<[number, number]>, r = 0.95) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" stroke="none" />`).join('');

// Bust base: neck, shoulders (clothing), ears and head
const figBase = (shirt: string, shirtStroke?: string, ears = true): FigLayer[] => [
  { d: 'M13.6 17.6 H18.4 V22 H13.6 Z', fill: '', skin: true },
  { d: 'M4.8 32 C4.8 24.4 9.8 20.8 16 20.8 C22.2 20.8 27.2 24.4 27.2 32 Z', fill: shirt, stroke: shirtStroke },
  ...(ears
    ? ([
        { d: figEllipse(9.9, 13.4, 1.1, 1.7), fill: '', skin: true },
        { d: figEllipse(22.1, 13.4, 1.1, 1.7), fill: '', skin: true },
      ] as FigLayer[])
    : []),
  { d: figEllipse(16, 12.2, 6.2, 6.6), fill: '', skin: true },
];
const SHORT_HAIR = 'M9.6 11.8 C8.8 6.4 11.8 3.6 16 3.6 C20.2 3.6 23.2 6.4 22.4 11.8 C21.2 9.6 19 8.4 16 8.4 C13 8.4 10.8 9.6 9.6 11.8 Z';
const SWEPT_HAIR = 'M9.6 11.8 C8.8 6.4 11.8 3.6 16 3.6 C20.2 3.6 23.2 6.4 22.4 11.8 C21.2 9.4 19.4 8 17.4 6.8 C15.4 9.4 12 10.6 9.6 11.8 Z';
const LONG_HAIR_BACK = 'M9 12.4 C7.4 6 11.4 3 16 3 C20.6 3 24.6 6 23 12.4 C22.6 16.4 23.4 20 25 22.6 C22 23 20.4 21.6 19.4 19.8 L12.6 19.8 C11.6 21.6 10 23 7 22.6 C8.6 20 9.4 16.4 9 12.4 Z';
const FRINGE = 'M9.8 11.8 C9.2 6.6 12 4 16 4 C20 4 22.8 6.6 22.2 11.8 C20.2 9.8 17.2 8.4 14.8 6.6 C13.6 9 11.6 10.8 9.8 11.8 Z';
const faceFeatures = (ink: string, lips?: string) =>
  figDots(ink, [[13.4, 13.6], [18.6, 13.6]]) + figLine(lips ?? ink, 'M14.4 16.8 C15.2 17.8 16.8 17.8 17.6 16.8', lips ? 1.5 : 1.1);
const lipCol = (o: boolean, s: boolean, ink: string) => (o ? ink : s ? '#FFFFFF' : '#E11D48');

const manFig = (shirt: string, id: string, shirtStroke?: string): Figure => ({
  id,
  layers: [...figBase(shirt, shirtStroke), { d: SHORT_HAIR, fill: '#78350F' }],
  features: (ink) => faceFeatures(ink),
});
const womanFig = (shirt: string, id: string, shirtStroke?: string): Figure => ({
  id,
  layers: [{ d: LONG_HAIR_BACK, fill: '#78350F' }, ...figBase(shirt, shirtStroke, false), { d: FRINGE, fill: '#78350F' }],
  features: (ink, o, s) => faceFeatures(ink, lipCol(o, s, ink)),
});
const kidFig = (shirt: string, id: string): Figure => ({
  id,
  layers: [...figBase(shirt), { d: SWEPT_HAIR, fill: '#8D5A2B' }],
  features: (ink) => faceFeatures(ink),
});

const figQuad = (x0: number, y0: number, x1: number, y1: number, w: number) => {
  const f = (n: number) => +n.toFixed(2);
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * (w / 2);
  const ny = (dx / len) * (w / 2);
  return `M${f(x0 + nx)} ${f(y0 + ny)} L${f(x1 + nx)} ${f(y1 + ny)} L${f(x1 - nx)} ${f(y1 - ny)} L${f(x0 - nx)} ${f(y0 - ny)} Z`;
};

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

export const personalCareRomanceIcons: WimojiIconDef[] = [
  // 49. Person Tipping Hand (U+1F481)
  {
    id: 'person-tipping-hand',
    char: '💁',
    name: 'Person Tipping Hand',
    unicodeHex: 'U+1F481',
    category: 'faces-hands',
    tags: ['person tipping hand', 'information desk', 'sassy', 'tipping hand', 'hair flip', 'help', 'service', '💁'],
    renderContent: (opts) => {
      // Raised, upturned hand at shoulder height, a wink and a sassy smile
      return renderFigure(opts, {
        id: 'tip',
        layers: [
          ...figBase('#FB8C00', '#E65100'),
          { d: figQuad(23.2, 23.2, 28, 27.6, 2.8), fill: '#FB8C00', stroke: '#E65100' },
          { d: figQuad(28, 27.6, 28.6, 19.4, 2.6), fill: '#FB8C00', stroke: '#E65100' },
          { d: figEllipse(28.6, 17, 1.9, 2.6), fill: '', skin: true },
          { d: SWEPT_HAIR, fill: '#78350F' },
        ],
        features: (ink) =>
          figDots(ink, [[13.4, 13.6]]) +
          figLine(ink, 'M17.6 13.8 C18.2 12.8 19 12.8 19.6 13.8', 1.1) +
          figLine(ink, 'M14.4 16.8 C15.4 17.8 17 17.8 18 16.4', 1.1),
      });
    },
  },

  // 50. Guard (U+1F482)
  {
    id: 'guard',
    char: '💂',
    name: 'Guard',
    unicodeHex: 'U+1F482',
    category: 'faces-hands',
    tags: ['guard', 'bearskin', 'buckingham', 'british', 'royal guard', 'beefeater', 'hat', 'soldier', 'ceremony', '💂'],
    renderContent: (opts) => {
      // Royal guard: tall black bearskin, red tunic with white crossbelt and gold buttons
      return `${getBadgeMarkup(opts as any)}${figInner(
        opts,
        {
          id: 'guard',
          layers: [
            ...figBase('#D32F2F', '#B71C1C'),
            { d: 'M10.6 21.6 L13.4 21.2 L26.6 32 H22.6 Z', fill: '#FAFAFA', stroke: '#BDBDBD' },
            { d: figEllipse(16, 24.6, 0.75, 0.75), fill: '#FFD54F' },
            { d: figEllipse(16, 27.6, 0.75, 0.75), fill: '#FFD54F' },
            { d: figEllipse(16, 30.4, 0.75, 0.75), fill: '#FFD54F' },
            { d: 'M10.2 14.2 C11 18.8 14 19.8 16 19.8 C18 19.8 21 18.8 21.8 14.2 L21.2 14 C20.4 17.8 18 18.8 16 18.8 C14 18.8 11.6 17.8 10.8 14 Z', fill: '#FFD54F' },
            { d: 'M9.4 11.8 C8 2 10.4 -3.4 16 -3.4 C21.6 -3.4 24 2 22.6 11.8 C20.4 10.2 11.6 10.2 9.4 11.8 Z', fill: '#263238' },
          ],
          features: (ink) => figDots(ink, [[13.4, 14.2], [18.6, 14.2]]) + figLine(ink, 'M14.8 17 H17.2', 1.1),
        },
        0.85,
        2.4,
        3.2,
      )}`;
    },
  },

  // 51. Woman Dancing (U+1F483)
  {
    id: 'woman-dancing',
    char: '💃',
    name: 'Woman Dancing',
    unicodeHex: 'U+1F483',
    category: 'faces-hands',
    tags: ['woman dancing', 'dancer', 'flamenco', 'salsa', 'tango', 'party', 'dress', 'red dress', 'dance', '💃'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // raised arm
        ...armOf([12, 11.8], [8, 7.6], [9.4, 2.6]).map((l) => (l.kind === 'shirt' ? { ...l, kind: 'skin' as const } : l)),
        // legs peeking from the skirt
        tube('skin', [[15.4, 26], [17.6, 29.6]], 2.4),
        tube('skin', [[19.8, 25.4], [23, 28.4]], 2.4),
        { d: personEllipse(18.4, 30.2, 1.8, 1), kind: 'item', fill: '#B71C1C' },
        { d: personEllipse(23.8, 29, 1.8, 1), kind: 'item', fill: '#B71C1C' },
        // flared flamenco skirt and fitted bodice
        { d: 'M11.2 15.4 C9.4 20 4.4 23.4 2.6 28.2 C7.6 27 12.6 29.4 17.2 27.8 C22.4 29.2 27 27.6 29.6 25 C25.6 22.4 21 20 18.2 15.4 Z', kind: 'shirt', fill: '#E53935' },
        { d: 'M5.4 26 C9 24.8 12.6 26.4 16.6 25.2 M17.4 24.2 C21 24.6 24.6 23.6 27.4 22.6', kind: 'mark', w: 1, fill: '#FFCDD2' },
        tube('shirt', [[14.6, 11.4], [14.6, 15.8]], 5.4, '#E53935'),
        // other hand on the skirt
        ...armOf([17.2, 12], [21.4, 14.2], [24.4, 18]).map((l) => (l.kind === 'shirt' ? { ...l, kind: 'skin' as const } : l)),
        // long dark hair, head and rose
        { d: 'M10.4 6 C9 12 10.2 16 12 17.4 C12.2 13 12.2 10 12.6 7.4 Z', kind: 'item', fill: '#212121' },
        ...headOf(14.6, 6.2, 3.5, 3.8),
        { d: personHair(14.6, 6.2, 3.5, 3.8), kind: 'item', fill: '#212121' },
        { d: personCircle(19, 3.8, 1.9), kind: 'item', fill: '#E53935' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 14.6, 6.2, 1, 1) + personLine(o || s ? ink : '#7F0000', 'M18.2 3.8 C18.4 2.8 19.8 2.8 19.8 3.8 C19.8 4.5 18.8 4.6 18.6 3.9', 0.5);
        },
        'dance',
      );
    },
  },

  // 52. Lipstick (U+1F484)
  {
    id: 'lipstick',
    char: '💄',
    name: 'Lipstick',
    unicodeHex: 'U+1F484',
    category: 'objects-places',
    tags: ['lipstick', 'makeup', 'cosmetics', 'beauty', 'red', 'lips', 'glamour', '💄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E11D48', fillSecondary: '#FBBF24', stroke: '#9F1239' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Black/Gold Base tube -->
          <rect x="11" y="18" width="10" height="11" rx="1.5" />
          <!-- Inner gold elevator sleeve -->
          <rect x="12" y="13" width="8" height="5" />
          <!-- Angled red lipstick bullet -->
          <path d="M12 13 V8 L18 4 V13 Z" />
          <line x1="11" y1="21" x2="21" y2="21" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Angled red lipstick bullet -->
        <path d="M12.5 13.5 V8 L18 4.5 V13.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Specular shine on lipstick bevel -->
        <path d="M13.5 8.5 L17 5.5 V12.5 L13.5 12.5 Z" fill="#FB7185" opacity="0.6" />
        <!-- Golden metallic elevator sleeve -->
        <rect x="12" y="13" width="8" height="5.5" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke="#D97706" stroke-width="0.8" />
        <!-- Dark modern casing base -->
        <rect x="11" y="18.5" width="10" height="10.5" rx="1.5" fill="${opts.style === 'duotone' ? c.primary : '#0F172A'}" stroke="#334155" stroke-width="0.8" />
        <rect x="11" y="20.5" width="10" height="2" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" />
        <line x1="13.5" y1="22" x2="13.5" y2="27" stroke="#475569" stroke-width="1" />
      </g>`;
    },
  },

  // 53. Nail Polish (U+1F485) - Based on Wimoji raised-hand foundation
  {
    id: 'nail-polish',
    char: '💅',
    name: 'Nail Polish',
    unicodeHex: 'U+1F485',
    category: 'faces-hands',
    tags: ['nail polish', 'manicure', 'nails', 'beauty', 'cosmetics', 'care', 'hand', 'glamour', '💅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F43F5E', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Hand fingers from authentic wimoji raised hand -->
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
          <!-- Painted fingernail caps -->
          <ellipse cx="12.5" cy="7" rx="1.1" ry="1.4" fill="${c.stroke}" />
          <ellipse cx="15.5" cy="5.2" rx="1.1" ry="1.4" fill="${c.stroke}" />
          <ellipse cx="18.5" cy="6.2" rx="1.1" ry="1.4" fill="${c.stroke}" />
          <ellipse cx="21.5" cy="9.2" rx="1.1" ry="1.4" fill="${c.stroke}" />
          <!-- Nail polish applicator wand & brush -->
          <line x1="28" y1="3" x2="22" y2="8" stroke-width="${opts.strokeWidth + 0.5}" />
          <line x1="22" y1="8" x2="19" y2="10.5" stroke-width="${opts.strokeWidth}" />
          <ellipse cx="18.5" cy="11" rx="1" ry="1.5" fill="${c.stroke}" transform="rotate(-35 18.5 11)" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Hand Base from authentic Wimoji raised-hand -->
        <g stroke="${c.stroke}" stroke-width="1.8" fill="${c.primary}">
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        </g>
        <!-- Vibrant Painted Fingernails -->
        <ellipse cx="12.5" cy="7" rx="1.1" ry="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#F43F5E'}" />
        <ellipse cx="15.5" cy="5.2" rx="1.1" ry="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#F43F5E'}" />
        <ellipse cx="18.5" cy="6.2" rx="1.1" ry="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#F43F5E'}" />
        <ellipse cx="21.5" cy="9.2" rx="1.1" ry="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#F43F5E'}" />
        <circle cx="12.3" cy="6.5" r="0.4" fill="#FFFFFF" opacity="0.8" />
        <circle cx="15.3" cy="4.7" r="0.4" fill="#FFFFFF" opacity="0.8" />
        <circle cx="18.3" cy="5.7" r="0.4" fill="#FFFFFF" opacity="0.8" />
        <circle cx="21.3" cy="8.7" r="0.4" fill="#FFFFFF" opacity="0.8" />
        <!-- Nail Polish Applicator Brush -->
        <line x1="28.5" y1="2.5" x2="23" y2="7.5" stroke="#0F172A" stroke-width="2.6" stroke-linecap="round" />
        <line x1="23" y1="7.5" x2="20" y2="10" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" />
        <!-- Lacquer Brush Head with drop of glossy nail polish -->
        <path d="M20.5 9.5 L18 11.5 C17.5 12 18 13 19 12.5 L21 10.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F43F5E'}" />
        <!-- Sparkle glint -->
        <polygon points="15.5,1 16,2.2 17.2,2.7 16,3.2 15.5,4.4 15,3.2 13.8,2.7 15,2.2" fill="#FDE047" />
      </g>`;
    },
  },

  // 54. Person Getting Massage (U+1F486)
  {
    id: 'person-getting-massage',
    char: '💆',
    name: 'Person Getting Massage',
    unicodeHex: 'U+1F486',
    category: 'faces-hands',
    tags: ['massage', 'spa', 'relaxation', 'head massage', 'salon', 'wellness', 'therapy', '💆'],
    renderContent: (opts) => {
      // Relaxed face with closed eyes, hands at the temples, spa-green towel
      return renderFigure(opts, {
        id: 'massage',
        layers: [
          ...figBase('#26A69A', '#00796B'),
          { d: figQuad(6.2, 14.6, 3.2, 24, 2.4), fill: '', skin: true },
          { d: figQuad(25.8, 14.6, 28.8, 24, 2.4), fill: '', skin: true },
          { d: figEllipse(8.2, 11.8, 1.9, 2.7), fill: '', skin: true },
          { d: figEllipse(23.8, 11.8, 1.9, 2.7), fill: '', skin: true },
          { d: SWEPT_HAIR, fill: '#78350F' },
          { d: 'M27.4 1.6 L28.3 3.8 L30.5 4.7 L28.3 5.6 L27.4 7.8 L26.5 5.6 L24.3 4.7 L26.5 3.8 Z', fill: '#FFD54F' },
        ],
        features: (ink) =>
          figLine(ink, 'M11.8 14 C12.6 12.8 14 12.8 14.8 14', 1.1) +
          figLine(ink, 'M17.2 14 C18 12.8 19.4 12.8 20.2 14', 1.1) +
          figLine(ink, 'M14.4 16.8 C15.4 17.8 16.8 17.8 17.8 16.8', 1.1),
      });
    },
  },

  // 55. Person Getting Haircut (U+1F487)
  {
    id: 'person-getting-haircut',
    char: '💇',
    name: 'Person Getting Haircut',
    unicodeHex: 'U+1F487',
    category: 'faces-hands',
    tags: ['haircut', 'barber', 'salon', 'scissors', 'hair', 'hairdresser', 'styling', '💇'],
    renderContent: (opts) => {
      // Blue salon cape and a pair of scissors snipping beside the head
      return `${getBadgeMarkup(opts as any)}${figInner(
        opts,
        {
          id: 'cut',
          layers: [
            ...figBase('#1E88E5', '#0D47A1'),
            { d: SWEPT_HAIR, fill: '#78350F' },
            { d: figQuad(30.4, 11.6, 22.8, 7.2, 1.2), fill: '#B0BEC5', stroke: '#78909C' },
            { d: figQuad(30.4, 6.4, 22.8, 10.8, 1.2), fill: '#CFD8DC', stroke: '#78909C' },
            { d: figEllipse(30.4, 12.4, 1.3, 1.3), fill: '#EF5350' },
            { d: figEllipse(30.4, 5.6, 1.3, 1.3), fill: '#EF5350' },
            { d: figEllipse(26.6, 9, 0.6, 0.6), fill: '#37474F' },
          ],
          features: (ink) => faceFeatures(ink),
        },
        0.94,
        -1.4,
        1,
      )}`;
    },
  },

  // 56. Barber Pole (U+1F488)
  {
    id: 'barber-pole',
    char: '💈',
    name: 'Barber Pole',
    unicodeHex: 'U+1F488',
    category: 'objects-places',
    tags: ['barber pole', 'haircut', 'barbershop', 'stripes', 'spiral', 'salon', 'pole', '💈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#3B82F6', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top globe and finial -->
          <circle cx="16" cy="4" r="2.5" />
          <path d="M12 7 H20" />
          <!-- Cylinder pole -->
          <rect x="12" y="7" width="8" height="18" rx="1" />
          <!-- Diagonal helix barber stripes -->
          <line x1="12" y1="10" x2="20" y2="14" />
          <line x1="12" y1="14" x2="20" y2="18" />
          <line x1="12" y1="18" x2="20" y2="22" />
          <!-- Bottom wall bracket & cap -->
          <path d="M11 25 H21 V28 H11 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top golden sphere finial -->
        <circle cx="16" cy="4" r="2.5" fill="#FBBF24" stroke="#D97706" stroke-width="0.8" />
        <rect x="11" y="6" width="10" height="2" rx="0.5" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <!-- Cylinder background -->
        <rect x="12" y="7" width="8" height="18" rx="1" fill="#FFFFFF" />
        <!-- Barber spiral stripes (Red, White, Blue) -->
        <polygon points="12,7 16,7 20,9.5 20,7" fill="${opts.style === 'duotone' ? c.secondary : '#3B82F6'}" />
        <polygon points="12,7.5 12,10.5 20,15 20,12" fill="${c.primary}" />
        <polygon points="12,12 12,15 20,19.5 20,16.5" fill="${opts.style === 'duotone' ? c.secondary : '#3B82F6'}" />
        <polygon points="12,16.5 12,19.5 20,24 20,21" fill="${c.primary}" />
        <polygon points="12,21 12,24 17,25 12,25" fill="${opts.style === 'duotone' ? c.secondary : '#3B82F6'}" />
        <!-- Outer glass cylinder border and specular shine -->
        <rect x="12" y="7" width="8" height="18" rx="1" fill="none" stroke="#64748B" stroke-width="0.8" />
        <line x1="13.5" y1="8" x2="13.5" y2="24" stroke="#FFFFFF" stroke-width="1" opacity="0.6" />
        <!-- Bottom golden mount bracket -->
        <path d="M11 25 H21 V27.5 H11 Z" fill="#FBBF24" stroke="#D97706" stroke-width="0.8" />
        <rect x="14" y="27.5" width="4" height="2" fill="#94A3B8" />
      </g>`;
    },
  },

  // 57. Syringe (U+1F489)
  {
    id: 'syringe',
    char: '💉',
    name: 'Syringe',
    unicodeHex: 'U+1F489',
    category: 'objects-places',
    tags: ['syringe', 'medicine', 'needle', 'vaccine', 'shot', 'injection', 'doctor', 'hospital', 'blood', '💉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#38BDF8', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Syringe barrel at 45 deg angle -->
          <path d="M10 20 L20 10 L23 13 L13 23 Z" />
          <!-- Needle -->
          <line x1="21.5" y1="11.5" x2="28" y2="5" />
          <!-- Plunger rod & flange -->
          <line x1="11.5" y1="21.5" x2="7" y2="26" />
          <line x1="5" y1="24" x2="9" y2="28" />
          <!-- Measurement scale ticks -->
          <line x1="13" y1="15" x2="15" y2="17" />
          <line x1="16" y1="12" x2="18" y2="14" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Needle shaft -->
        <line x1="21.5" y1="11.5" x2="28" y2="5" stroke="#94A3B8" stroke-width="1.4" />
        <!-- Droplet of medicine at needle tip -->
        <circle cx="28.5" cy="4.5" r="0.9" fill="${c.primary}" />
        <!-- Plunger shaft & push flange at bottom left -->
        <line x1="11.5" y1="21.5" x2="6.5" y2="26.5" stroke="#64748B" stroke-width="2" />
        <line x1="4.5" y1="24.5" x2="8.5" y2="28.5" stroke="#475569" stroke-width="2.5" />
        <!-- Clear medical barrel -->
        <polygon points="10,19 19,10 22.5,13.5 13.5,22.5" fill="#E2E8F0" stroke="#64748B" stroke-width="0.8" />
        <!-- Red vaccine liquid filling chamber -->
        <polygon points="13,16 19,10 22.5,13.5 16.5,19.5" fill="${c.primary}" opacity="0.9" />
        <!-- Measurement volume tick marks -->
        <line x1="12.5" y1="16.5" x2="14.5" y2="18.5" stroke="#FFFFFF" stroke-width="1" />
        <line x1="15.5" y1="13.5" x2="17.5" y2="15.5" stroke="#FFFFFF" stroke-width="1" />
        <line x1="18.5" y1="10.5" x2="20.5" y2="12.5" stroke="#FFFFFF" stroke-width="1" />
      </g>`;
    },
  },

  // 58. Pill (U+1F48A)
  {
    id: 'pill',
    char: '💊',
    name: 'Pill',
    unicodeHex: 'U+1F48A',
    category: 'objects-places',
    tags: ['pill', 'capsule', 'medicine', 'drug', 'pharmacy', 'health', 'tablet', 'cure', '💊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#38BDF8', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- 45-degree angled capsule shell -->
          <g transform="rotate(-45 16 16)">
            <rect x="11.5" y="6" width="9" height="20" rx="4.5" />
            <line x1="11.5" y1="16" x2="20.5" y2="16" />
          </g>
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <g transform="rotate(-45 16 16)">
          <!-- Top half (Crimson Red) -->
          <path d="M11.5 16 V10.5 A4.5 4.5 0 0 1 20.5 10.5 V16 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
          <!-- Bottom half (Bright Cyan / Medical White) -->
          <path d="M11.5 16 V21.5 A4.5 4.5 0 0 0 20.5 21.5 V16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F8FAFC'}" stroke="#64748B" stroke-width="0.8" />
          <!-- Center seam ring -->
          <line x1="11.5" y1="16" x2="20.5" y2="16" stroke="#334155" stroke-width="0.8" />
          <!-- Pill gloss highlight streak -->
          <path d="M13.5 9 V22" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity="0.6" />
        </g>
      </g>`;
    },
  },

  // 59. Kiss Mark (U+1F48B)
  {
    id: 'kiss-mark',
    char: '💋',
    name: 'Kiss Mark',
    unicodeHex: 'U+1F48B',
    category: 'faces-hands',
    tags: ['kiss mark', 'lips', 'lipstick', 'kiss', 'love', 'romance', 'passion', 'red lips', '💋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E11D48', fillSecondary: '#BE123C', stroke: '#9F1239' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Upper Lip Cupid's bow -->
          <path d="M5 14 C9 10 13 11 16 13 C19 11 23 10 27 14 C23 16 19 15 16 15 C13 15 9 16 5 14 Z" />
          <!-- Lower Lip -->
          <path d="M8 17 C12 17 14 17 16 17 C18 17 20 17 24 17 C22 23 18 25 16 25 C14 25 10 23 8 17 Z" />
          <!-- Center mouth slit -->
          <path d="M8 15.5 C12 16.5 20 16.5 24 15.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Upper lip with Cupid's bow -->
        <path d="M5 14 C9 10 13 11 16 13 C19 11 23 10 27 14 C23 16.5 19 15 16 15 C13 15 9 16.5 5 14 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Full pout lower lip -->
        <path d="M7.5 16.5 C11 16.5 14 16.8 16 16.8 C18 16.8 21 16.5 24.5 16.5 C22.5 22.5 19 25 16 25 C13 25 9.5 22.5 7.5 16.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Textured kiss imprint lines -->
        <path d="M10 18.5 C10.5 21 11.5 22 12.5 23" stroke="${opts.style === 'duotone' ? c.secondary : '#BE123C'}" stroke-width="0.8" />
        <path d="M15 18 C15.5 21 15.5 23 16 23.5" stroke="${opts.style === 'duotone' ? c.secondary : '#BE123C'}" stroke-width="0.8" />
        <path d="M19.5 18.5 C19 21 18.5 22 17.5 23" stroke="${opts.style === 'duotone' ? c.secondary : '#BE123C'}" stroke-width="0.8" />
        <!-- Gloss glints on lips -->
        <ellipse cx="16" cy="20.5" rx="3" ry="1.2" fill="#FDA4AF" opacity="0.6" />
        <path d="M10 12.5 C12 11.5 14 12 15 13" stroke="#FDA4AF" stroke-width="0.8" fill="none" opacity="0.8" />
      </g>`;
    },
  },

  // 60. Love Letter (U+1F48C)
  {
    id: 'love-letter',
    char: '💌',
    name: 'Love Letter',
    unicodeHex: 'U+1F48C',
    category: 'objects-places',
    tags: ['love letter', 'heart', 'envelope', 'mail', 'romance', 'valentine', 'letter', 'sealed', '💌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#E11D48', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Envelope rectangle -->
          <rect x="4" y="8" width="24" height="17" rx="2" />
          <!-- Flap folds -->
          <path d="M4 10 L16 18 L28 10" />
          <path d="M4 25 L11 18" />
          <path d="M28 25 L21 18" />
          <!-- Red heart wax seal / postage stamp -->
          <path d="M16 15.5 C15 14 13.5 14.5 13.5 16 C13.5 17.5 16 19.5 16 19.5 C16 19.5 18.5 17.5 18.5 16 C18.5 14.5 17 14 16 15.5 Z" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Warm ivory envelope body -->
        <rect x="4" y="8" width="24" height="17" rx="2" fill="${c.primary}" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Bottom corner folds -->
        <path d="M4 24.5 L12 17.5" stroke="#E2E8F0" stroke-width="1.2" />
        <path d="M28 24.5 L20 17.5" stroke="#E2E8F0" stroke-width="1.2" />
        <!-- Top V-flap fold -->
        <polygon points="4,9 16,18 28,9" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Romantic Crimson Heart Stamp / Seal -->
        <path d="M16 15.5 C14.5 13.8 12.8 14.5 12.8 16.2 C12.8 18 16 20.5 16 20.5 C16 20.5 19.2 18 19.2 16.2 C19.2 14.5 17.5 13.8 16 15.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#E11D48'}" stroke="#9F1239" stroke-width="0.6" />
        <circle cx="14.8" cy="15.8" r="0.5" fill="#FFFFFF" opacity="0.8" />
        <!-- Small love hearts floating -->
        <path d="M23 5 C22.2 4.2 21.3 4.6 21.3 5.4 C21.3 6.3 23 7.5 23 7.5 C23 7.5 24.7 6.3 24.7 5.4 C24.7 4.6 23.8 4.2 23 5 Z" fill="#FB7185" />
      </g>`;
    },
  },

  // 61. Ring (U+1F48D)
  {
    id: 'ring',
    char: '💍',
    name: 'Ring',
    unicodeHex: 'U+1F48D',
    category: 'objects-places',
    tags: ['ring', 'diamond', 'jewelry', 'wedding', 'engagement', 'marriage', 'gold', 'gem', 'sparkle', '💍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#38BDF8', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Circular Ring Band -->
          <circle cx="16" cy="19" r="8" />
          <circle cx="16" cy="19" r="5.5" />
          <!-- Diamond gemstone top setting -->
          <polygon points="13,8 19,8 21,11 11,11" />
          <polygon points="11,11 16,15 21,11" />
          <!-- Sparkle lines -->
          <line x1="16" y1="3" x2="16" y2="5" />
          <line x1="22" y1="5" x2="24" y2="7" />
          <line x1="10" y1="5" x2="8" y2="7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Gold ring band -->
        <circle cx="16" cy="19" r="8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="16" cy="19" r="5.2" fill="#0F172A" />
        <!-- Shiny band reflection highlight -->
        <path d="M10 19 C10 15 12 13 16 13" stroke="#FDE047" stroke-width="1.5" fill="none" opacity="0.8" />
        <!-- Prongs holding diamond -->
        <line x1="12" y1="12" x2="13" y2="9" stroke="#CBD5E1" stroke-width="1.2" />
        <line x1="20" y1="12" x2="19" y2="9" stroke="#CBD5E1" stroke-width="1.2" />
        <!-- Brilliant cut Diamond on top -->
        <polygon points="13.5,8 18.5,8 21,11 11,11" fill="${opts.style === 'duotone' ? c.secondary : '#BAE6FD'}" stroke="#0284C7" stroke-width="0.6" />
        <polygon points="11,11 16,14.5 21,11" fill="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" stroke="#0284C7" stroke-width="0.6" />
        <polygon points="13.5,8 18.5,8 16,11" fill="#E0F2FE" />
        <!-- Diamond sparkle stars -->
        <polygon points="22.5,4 23.2,5.2 24.5,5.5 23.2,5.8 22.5,7 21.8,5.8 20.5,5.5 21.8,5.2" fill="#FDE047" />
      </g>`;
    },
  },

  // 62. Gem Stone (U+1F48E)
  {
    id: 'gem-stone',
    char: '💎',
    name: 'Gem Stone',
    unicodeHex: 'U+1F48E',
    category: 'objects-places',
    tags: ['gem stone', 'diamond', 'jewel', 'crystal', 'facet', 'sparkle', 'precious', 'blue', '💎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0284C7', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Diamond silhouette -->
          <polygon points="9,9 23,9 28,15 16,27 4,15" />
          <!-- Crown & Pavilion Facets -->
          <line x1="4" y1="15" x2="28" y2="15" />
          <line x1="9" y1="9" x2="12" y2="15" />
          <line x1="23" y1="9" x2="20" y2="15" />
          <line x1="16" y1="9" x2="12" y2="15" />
          <line x1="16" y1="9" x2="20" y2="15" />
          <line x1="12" y1="15" x2="16" y2="27" />
          <line x1="20" y1="15" x2="16" y2="27" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Brilliant cut Diamond Facets -->
        <!-- Outer girdle contour -->
        <polygon points="9,9 23,9 28,15 16,27 4,15" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Table facet -->
        <polygon points="12,9 20,9 22,12 10,12" fill="#E0F2FE" />
        <!-- Crown side triangles -->
        <polygon points="9,9 12,9 10,12 4,15" fill="#BAE6FD" />
        <polygon points="20,9 23,9 28,15 22,12" fill="#7DD3FC" />
        <!-- Crown center triangles -->
        <polygon points="10,12 22,12 16,15" fill="#38BDF8" />
        <polygon points="4,15 10,12 16,15" fill="#7DD3FC" />
        <polygon points="28,15 22,12 16,15" fill="#0284C7" />
        <!-- Pavilion facets (converging to bottom point 16, 27) -->
        <polygon points="4,15 16,15 16,27" fill="${opts.style === 'duotone' ? c.secondary : '#0284C7'}" stroke="${c.stroke}" stroke-width="0.6" />
        <polygon points="16,15 28,15 16,27" fill="${opts.style === 'duotone' ? c.secondary : '#0369A1'}" stroke="${c.stroke}" stroke-width="0.6" />
        <!-- Facet lines -->
        <line x1="4" y1="15" x2="28" y2="15" stroke="#FFFFFF" stroke-width="0.8" opacity="0.6" />
        <!-- Shimmering twinkle stars -->
        <polygon points="23,5 23.8,6.5 25.5,7 23.8,7.5 23,9 22.2,7.5 20.5,7 22.2,6.5" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 63. Kiss (U+1F48F)
  {
    id: 'kiss',
    char: '💏',
    name: 'Kiss',
    unicodeHex: 'U+1F48F',
    category: 'faces-hands',
    tags: ['kiss', 'couple', 'love', 'romance', 'lovers', 'affection', 'sweethearts', 'heart', 'blush', '💏'],
    renderContent: (opts) => {
      // Two people leaning in for a kiss under a heart
      const c = resolveColors(opts, { fillPrimary: '#E53935', fillSecondary: '#BE123C', stroke: '#E53935' });
      const face = (side: number) => (ink: string, o: boolean, s: boolean) =>
        figLine(ink, 'M11.4 13.8 C12.2 12.6 13.6 12.6 14.4 13.8', 1.1) +
        figLine(ink, 'M17.6 13.8 C18.4 12.6 19.8 12.6 20.6 13.8', 1.1) +
        `<ellipse cx="${16 + side * 3.6}" cy="17.2" rx="1.5" ry="1" fill="${o || s ? ink : '#E11D48'}" stroke="none" />`;
      const narrow = (f: Figure, shirt: string): Figure => ({
        ...f,
        layers: f.layers.map((l) => (l.fill === shirt ? { ...l, d: 'M8 32 C8 24.4 11.4 20.8 16 20.8 C20.6 20.8 24 24.4 24 32 Z' } : l)),
      });
      const left: Figure = { ...narrow(manFig('#1976D2', 'kissL', '#0D47A1'), '#1976D2'), features: face(1) };
      const right: Figure = { ...narrow(womanFig('#EC407A', 'kissR', '#AD1457'), '#EC407A'), features: face(-1) };
      const heart = 'M16 11.2 C11 7.6 9.6 4.4 12.2 2.8 C13.8 1.9 15.4 2.6 16 4 C16.6 2.6 18.2 1.9 19.8 2.8 C22.4 4.4 21 7.6 16 11.2 Z';
      const heartMarkup =
        opts.style === 'outline'
          ? `<path d="${heart}" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(1.2, (opts.strokeWidth ?? 2) * 0.75)}" stroke-linejoin="round" />`
          : `<path d="${heart}" fill="${opts.style === 'duotone' ? c.secondary : c.primary}" stroke="none" />`;
      return `${getBadgeMarkup(opts as any)}${heartMarkup}
      <g transform="rotate(10 10.6 24)">${figInner(opts, left, 0.62, 0.68, 11.7)}</g>
      <g transform="rotate(-10 21.4 24)">${figInner(opts, right, 0.62, 11.48, 11.7)}</g>`;
    },
  },
];