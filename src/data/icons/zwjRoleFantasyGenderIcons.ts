import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

type FigLayer = { d: string; fill: string; stroke?: string; skin?: boolean };
interface FigureSpec {
  id: string;
  layers: FigLayer[];
  features: (ink: string, o: boolean, s: boolean) => string;
}

type PersonLayer = { d: string; kind: 'shirt' | 'skin' | 'hair' | 'pants' | 'mark' | 'item'; w?: number; fill?: string };
type Pt = [number, number];

const figEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;
const figCircle = (cx: number, cy: number, r: number) => figEllipse(cx, cy, r, r);

function renderBustFigure(opts: WimojiStyleOptions, fig: FigureSpec, k = 1, tx = 0, ty = 0): string {
  const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#78350F', stroke: '#FFA000' });
  const badge = getBadgeMarkup(opts);
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
      return `<mask id="wimoji-${fig.id}-${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${later}</mask><g mask="url(#wimoji-${fig.id}-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');
  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
  return `${badge}<g transform="translate(${tx} ${ty}) scale(${k})" stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${fig.features(ink, o, s)}
      </g>`;
}

const figLine = (col: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" />`;
const figDots = (col: string, pts: Array<[number, number]>, r = 0.95) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" stroke="none" />`).join('');

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
const LONG_HAIR_BACK = 'M9 12.4 C7.4 6 11.4 3 16 3 C20.6 3 24.6 6 23 12.4 C22.6 16.4 23.4 20 25 22.6 C22 23 20.4 21.6 19.4 19.8 L12.6 19.8 C11.6 21.6 10 23 7 22.6 C8.6 20 9.4 16.4 9 12.4 Z';
const FRINGE = 'M9.8 11.8 C9.2 6.6 12 4 16 4 C20 4 22.8 6.6 22.2 11.8 C20.2 9.8 17.2 8.4 14.8 6.6 C13.6 9 11.6 10.8 9.8 11.8 Z';

const lipCol = (o: boolean, s: boolean, ink: string) => (o ? ink : s ? '#FFFFFF' : '#E11D48');
const faceFeatures = (ink: string, lips?: string, isMan = false) =>
  (isMan ? figLine(ink, 'M11.6 11.4 L14.4 11.1 M17.6 11.1 L20.4 11.4', 1.1) : '') +
  figDots(ink, [[13.4, 13.6], [18.6, 13.6]]) +
  figLine(lips ?? ink, 'M14.4 16.8 C15.2 17.8 16.8 17.8 17.6 16.8', lips ? 1.5 : 1.1);

// ---- Full-body / fantasy person renderer matching peopleFantasyExtendedIcons.ts ----
const personCircle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
const personEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;
const personHair = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 8.6;
  const v = ry / 9.2;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 17) * v).toFixed(2)}`;
  return `M${m(7.8, 16.4)} C${m(6.8, 9.6)} ${m(10.8, 5.4)} ${m(16, 5.4)} C${m(21.2, 5.4)} ${m(25.2, 9.6)} ${m(24.2, 16.4)} C${m(23, 13.6)} ${m(20.8, 11.8)} ${m(18.4, 10.4)} C${m(16, 13)} ${m(11.6, 14.6)} ${m(7.8, 16.4)} Z`;
};
const personLongHairBack = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 6.2;
  const v = ry / 6.6;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 12.2) * v).toFixed(2)}`;
  return `M${m(9, 12.4)} C${m(7.4, 6)} ${m(11.4, 3)} ${m(16, 3)} C${m(20.6, 3)} ${m(24.6, 6)} ${m(23, 12.4)} C${m(22.6, 16.4)} ${m(23.4, 20)} ${m(25, 22.6)} C${m(22, 23)} ${m(20.4, 21.6)} ${m(19.4, 19.8)} L${m(12.6, 19.8)} C${m(11.6, 21.6)} ${m(10, 23)} ${m(7, 22.6)} C${m(8.6, 20)} ${m(9.4, 16.4)} ${m(9, 12.4)} Z`;
};
const poly = (pts: Pt[]) => 'M' + pts.map((p) => `${p[0]} ${p[1]}`).join(' L');
const tube = (kind: PersonLayer['kind'], pts: Pt[], w: number, fill?: string): PersonLayer => ({ d: poly(pts), kind, w, fill });
const hand = (p: Pt, r = 1.6): PersonLayer => ({ d: personCircle(p[0], p[1], r), kind: 'skin' });
const shoe = (p: Pt, dir = 1): PersonLayer => ({ d: personEllipse(p[0] + dir * 0.9, p[1], 2.1, 1.1), kind: 'item', fill: '#5D4037' });
const armOf = (sh: Pt, el: Pt, hd: Pt): PersonLayer[] => [tube('skin', [el, hd], 2.6), tube('shirt', [sh, el], 3.4), hand(hd)];
const legOf = (hip: Pt, kn: Pt, ft: Pt, dir = 1): PersonLayer[] => [tube('pants', [hip, kn, ft], 3.6), shoe(ft, dir)];
const personEyes = (ink: string, pts: Array<[number, number]>, r = 0.9) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}" stroke="none" />`).join('');
const personLine = (ink: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${w}" />`;

function renderPersonLayers(
  opts: WimojiStyleOptions,
  layers: PersonLayer[],
  features: (ink: string, mouthFill: string, o?: boolean, s?: boolean, d?: boolean) => string,
  id: string,
  hairColor = '#78350F',
  paletteOverride?: { fillPrimary?: string; fillSecondary?: string; stroke?: string; skinColor?: string }
): string {
  const c = resolveColors(opts, {
    fillPrimary: paletteOverride?.fillPrimary ?? '#FB8C00',
    fillSecondary: paletteOverride?.fillSecondary ?? '#FFCA28',
    stroke: paletteOverride?.stroke ?? '#E65100',
  });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : 1.1;
  const skinDefault = paletteOverride?.skinColor ?? '#FFCA28';
  const colorOf = (k: PersonLayer['kind'], fill?: string) =>
    s
      ? c.primary
      : fill && !d
      ? fill
      : k === 'shirt'
      ? c.primary
      : k === 'skin'
      ? d
        ? c.secondary
        : skinDefault
      : k === 'pants'
      ? d
        ? c.secondary
        : '#455A64'
      : k === 'mark'
      ? d
        ? c.secondary
        : '#94A3B8'
      : k === 'item'
      ? d
        ? c.secondary
        : '#94A3B8'
      : d
      ? c.primary
      : hairColor;
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
      return `<mask id="wimoji-${id}-${i}" maskUnits="userSpaceOnUse" x="-8" y="-8" width="48" height="48"><rect x="-8" y="-8" width="48" height="48" fill="#fff" />${later}${hole}</mask><g mask="url(#wimoji-${id}-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');
  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
  const mouthFill = o ? 'none' : s ? '#FFFFFF' : '#7F1D1D';
  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${features(ink, mouthFill, o, s, d)}
      </g>`;
}

export const zwjRoleFantasyGenderIcons: WimojiIconDef[] = [
  // =========================================================================
  // 1–2. MAN & WOMAN POLICE OFFICER (👮‍♂️ 👮‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-police-officer`,
    char: g === 'man' ? '👮‍♂️' : '👮‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Police Officer`,
    unicodeHex: `U+1F46E U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['police officer', 'cop', 'law', 'officer', g, g === 'man' ? '👮‍♂️' : '👮‍♀️'],
    renderContent: (opts) =>
      renderBustFigure(opts, {
        id: `${g}-police`,
        layers: [
          ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: '#78350F' }] : []),
          ...figBase('#1A237E', undefined, g === 'man'),
          { d: 'M12.6 20.8 L16 25.6 L19.4 20.8 Z', fill: '#90CAF9' },
          { d: figEllipse(10.6, 26, 1.2, 1.2), fill: '#FFD54F' },
          ...(g === 'woman' ? [{ d: FRINGE, fill: '#78350F' }] : []),
          { d: 'M9.2 8.6 C9.6 2.4 22.4 2.4 22.8 8.6 Z', fill: '#1A237E' },
          { d: 'M8 9.6 C8 8.2 24 8.2 24 9.6 C24 11 8 11 8 9.6 Z', fill: '#0D1442' },
          { d: figEllipse(16, 5.6, 1.4, 1.4), fill: '#FFD54F' },
        ],
        features: (ink, o, s) => faceFeatures(ink, g === 'woman' ? lipCol(o, s, ink) : undefined, g === 'man'),
      }),
  })),

  // =========================================================================
  // 3–4. MAN & WOMAN DETECTIVE (🕵️‍♂️ 🕵️‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-detective`,
    char: g === 'man' ? '🕵️‍♂️' : '🕵️‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Detective`,
    unicodeHex: `U+1F575 U+FE0F U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['detective', 'sleuth', 'spy', 'inspector', g, g === 'man' ? '🕵️‍♂️' : '🕵️‍♀️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#0284C7', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const coat = o ? 'none' : s ? c.primary : c.primary;
      const glass = o ? 'none' : s ? '#FFFFFF' : d ? c.secondary : '#38BDF8';
      const ink = o ? c.stroke : s ? '#FFFFFF' : c.stroke;
      return `${badge}<g stroke="${o || !s ? c.stroke : '#FFFFFF'}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        ${g === 'woman' ? `<path d="M10.4 10.6 C9.6 13.6 9.8 16.4 11.4 17.6 H20.6 C22.2 16.4 22.4 13.6 21.6 10.6 Z" fill="${o ? 'none' : s ? c.primary : d ? c.secondary : '#78350F'}" stroke-width="${thin}" />` : ''}
        <path d="M8 28 C8 21 11 16 16 16 C21 16 24 21 24 28 Z" fill="${coat}" />
        <path d="M12 16 L14 21 L16 17 L18 21 L20 16" fill="none" stroke="${ink}" stroke-width="${thin}" />
        <line x1="16" y1="18" x2="16" y2="28" stroke="${ink}" stroke-width="${thin}" />
        <circle cx="16" cy="11.5" r="4.2" fill="${o ? 'none' : s ? c.primary : '#FBBF24'}" stroke-width="${thin}" />
        <rect x="13.5" y="10.8" width="5" height="1.5" rx="0.75" fill="${ink}" stroke="none" />
        ${g === 'woman' ? `<path d="M14.6 13.6 C15.4 14.3 16.6 14.3 17.4 13.6" fill="none" stroke="${o || s ? ink : '#E11D48'}" stroke-width="1.1" />` : ''}
        <path d="M6 10 C8 8.5 16 8 26 10" fill="none" stroke="${o ? c.stroke : s ? c.primary : c.stroke}" stroke-width="${sw * 1.2}" />
        <path d="M10.5 9 C11 4.5 13 3 16 3 C19 3 21 4.5 21.5 9 Z" fill="${o ? 'none' : s ? c.primary : d ? c.secondary : '#B45309'}" />
        <path d="M10.8 8 H21.2" stroke="${ink}" stroke-width="${thin}" />
        <circle cx="23" cy="19" r="4" fill="${glass}" opacity="${o ? 1 : 0.85}" stroke-width="${sw}" />
        <line x1="26" y1="22" x2="29" y2="26" stroke-width="${sw * 1.3}" />
        <line x1="21.5" y1="17.5" x2="23" y2="17.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
      </g>`;
    },
  })),

  // =========================================================================
  // 5–6. MAN & WOMAN GUARD (💂‍♂️ 💂‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-guard`,
    char: g === 'man' ? '💂‍♂️' : '💂‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Guard`,
    unicodeHex: `U+1F482 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['guard', 'royal guard', 'bearskin', 'buckingham', g, g === 'man' ? '💂‍♂️' : '💂‍♀️'],
    renderContent: (opts) =>
      renderBustFigure(
        opts,
        {
          id: `${g}-guard`,
          layers: [
            ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: '#78350F' }] : []),
            ...figBase('#D32F2F', '#B71C1C', g === 'man'),
            { d: 'M10.6 21.6 L13.4 21.2 L26.6 32 H22.6 Z', fill: '#FAFAFA', stroke: '#BDBDBD' },
            { d: figEllipse(16, 24.6, 0.75, 0.75), fill: '#FFD54F' },
            { d: figEllipse(16, 27.6, 0.75, 0.75), fill: '#FFD54F' },
            { d: figEllipse(16, 30.4, 0.75, 0.75), fill: '#FFD54F' },
            { d: 'M10.2 14.2 C11 18.8 14 19.8 16 19.8 C18 19.8 21 18.8 21.8 14.2 L21.2 14 C20.4 17.8 18 18.8 16 18.8 C14 18.8 11.6 17.8 10.8 14 Z', fill: '#FFD54F' },
            { d: 'M9.4 11.8 C8 2 10.4 -3.4 16 -3.4 C21.6 -3.4 24 2 22.6 11.8 C20.4 10.2 11.6 10.2 9.4 11.8 Z', fill: '#263238' },
          ],
          features: (ink, o, s) =>
            (g === 'man' ? figLine(ink, 'M11.6 12.2 L14.4 11.9 M17.6 11.9 L20.4 12.2', 1.1) : '') +
            figDots(ink, [[13.4, 14.2], [18.6, 14.2]]) +
            figLine(g === 'woman' ? lipCol(o, s, ink) : ink, 'M14.8 17 H17.2', g === 'woman' ? 1.4 : 1.1),
        },
        0.85,
        2.4,
        3.2
      ),
  })),

  // =========================================================================
  // 7–8. MAN & WOMAN CONSTRUCTION WORKER (👷‍♂️ 👷‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-construction-worker`,
    char: g === 'man' ? '👷‍♂️' : '👷‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Construction Worker`,
    unicodeHex: `U+1F477 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['construction worker', 'hard hat', 'builder', 'worker', g, g === 'man' ? '👷‍♂️' : '👷‍♀️'],
    renderContent: (opts) =>
      renderBustFigure(opts, {
        id: `${g}-worker`,
        layers: [
          ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: '#78350F' }] : []),
          ...figBase('#FF7043', undefined, g === 'man'),
          { d: 'M10.6 22.8 H12.8 V32 H10.6 Z', fill: '#FFF59D' },
          { d: 'M19.2 22.8 H21.4 V32 H19.2 Z', fill: '#FFF59D' },
          ...(g === 'woman' ? [{ d: FRINGE, fill: '#78350F' }] : []),
          { d: 'M8.8 10.2 C8.8 2.8 23.2 2.8 23.2 10.2 Z', fill: '#FFC107', stroke: '#F57F17' },
          { d: 'M7.4 10.2 H24.6 V11.8 H7.4 Z', fill: '#FFC107', stroke: '#F57F17' },
          { d: 'M14.6 3.6 H17.4 V10.2 H14.6 Z', fill: '#FFE082' },
        ],
        features: (ink, o, s) => faceFeatures(ink, g === 'woman' ? lipCol(o, s, ink) : undefined, g === 'man'),
      }),
  })),

  // =========================================================================
  // 9–10. MAN & WOMAN WEARING TURBAN (👳‍♂️ 👳‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-wearing-turban`,
    char: g === 'man' ? '👳‍♂️' : '👳‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Wearing Turban`,
    unicodeHex: `U+1F473 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['turban', 'wearing turban', 'headwear', g, g === 'man' ? '👳‍♂️' : '👳‍♀️'],
    renderContent: (opts) => {
      const wrap = 'M8 11.4 C6.6 4.2 11 2.4 16 2.4 C21 2.4 25.4 4.2 24 11.4 C21.8 10.2 19.2 9.4 16 9.4 C12.8 9.4 10.2 10.2 8 11.4 Z';
      return renderBustFigure(opts, {
        id: `${g}-turban`,
        layers: [
          ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: '#78350F' }] : []),
          ...figBase('#5C6BC0', undefined, g === 'man'),
          { d: wrap, fill: '#ECEFF1', stroke: '#B0BEC5' },
          { d: figEllipse(16, 7.2, 1.7, 1.7), fill: '#FFD54F' },
          { d: figEllipse(16, 7.2, 0.9, 0.9), fill: '#E53935' },
        ],
        features: (ink, o, s) =>
          faceFeatures(ink, g === 'woman' ? lipCol(o, s, ink) : undefined, g === 'man') +
          `<clipPath id="wimoji-${g}-turban-clip"><path d="${wrap}" /></clipPath><g clip-path="url(#wimoji-${g}-turban-clip)">` +
          figLine(o ? ink : s ? '#FFFFFF' : '#B0BEC5', 'M6.6 9.8 C10.6 7.4 17.4 4.6 25.4 5.4 M6.6 7.4 C11 5.2 17.6 3 25 2.4 M8.4 11.6 C12.4 9.6 18.4 7.6 25.6 8', 0.8) +
          '</g>',
      });
    },
  })),

  // =========================================================================
  // 11–12. MAN & WOMAN IN TUXEDO (🤵‍♂️ 🤵‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-in-tuxedo`,
    char: g === 'man' ? '🤵‍♂️' : '🤵‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} in Tuxedo`,
    unicodeHex: `U+1F935 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['tuxedo', 'groom', 'formal', 'suit', 'wedding', g, g === 'man' ? '🤵‍♂️' : '🤵‍♀️'],
    renderContent: (opts) =>
      renderBustFigure(opts, {
        id: `${g}-tuxedo`,
        layers: [
          ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: '#78350F' }] : []),
          ...figBase('#1E293B', '#0F172A', g === 'man'),
          { d: 'M13.2 20.8 L16 27.5 L18.8 20.8 Z', fill: '#FFFFFF', stroke: '#CBD5E1' },
          { d: 'M9.2 22 L14.5 28 L13 28.5 L8.2 22.5 Z', fill: '#0F172A' },
          { d: 'M22.8 22 L17.5 28 L19 28.5 L23.8 22.5 Z', fill: '#0F172A' },
          { d: 'M14 21.2 L16 22.2 L14 23.2 Z', fill: '#0F172A' },
          { d: 'M18 21.2 L16 22.2 L18 23.2 Z', fill: '#0F172A' },
          { d: figEllipse(16, 22.2, 0.6, 0.6), fill: '#0F172A' },
          { d: g === 'woman' ? FRINGE : SHORT_HAIR, fill: '#78350F' },
        ],
        features: (ink, o, s) => faceFeatures(ink, g === 'woman' ? lipCol(o, s, ink) : undefined, g === 'man'),
      }),
  })),

  // =========================================================================
  // 13–14. MAN & WOMAN WITH VEIL (👰‍♂️ 👰‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-with-veil`,
    char: g === 'man' ? '👰‍♂️' : '👰‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} with Veil`,
    unicodeHex: `U+1F470 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['veil', 'bride', 'wedding', 'marriage', g, g === 'man' ? '👰‍♂️' : '👰‍♀️'],
    renderContent: (opts) =>
      renderBustFigure(opts, {
        id: `${g}-veil`,
        layers: [
          { d: 'M16 3 C9 3 6.2 9 6.4 15 C6.6 20 5.4 24 3.4 29.6 L28.6 29.6 C26.6 24 25.4 20 25.6 15 C25.8 9 23 3 16 3 Z', fill: '#E8EAF6', stroke: '#B0BEC5' },
          ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: '#78350F' }] : []),
          ...figBase('#FFFFFF', '#B0BEC5', g === 'man'),
          { d: g === 'woman' ? FRINGE : SHORT_HAIR, fill: '#78350F' },
          { d: figEllipse(12.6, 5.6, 1.1, 1.1), fill: '#F48FB1' },
          { d: figEllipse(16, 4.6, 1.1, 1.1), fill: '#F48FB1' },
          { d: figEllipse(19.4, 5.6, 1.1, 1.1), fill: '#F48FB1' },
        ],
        features: (ink, o, s) => faceFeatures(ink, g === 'woman' ? lipCol(o, s, ink) : undefined, g === 'man'),
      }),
  })),

  // =========================================================================
  // 15–16. MAN & WOMAN SUPERHERO (🦸‍♂️ 🦸‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-superhero`,
    char: g === 'man' ? '🦸‍♂️' : '🦸‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Superhero`,
    unicodeHex: `U+1F9B8 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['superhero', 'hero', 'cape', 'mask', g, g === 'man' ? '🦸‍♂️' : '🦸‍♀️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#2563EB', stroke: '#E65100' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const longBack = 'M9.2 12.6 C7.8 6.4 11.4 3.4 16 3.4 C20.6 3.4 24.2 6.4 22.8 12.6 C22.4 16.4 23.2 19.6 24.6 22.0 L7.4 22.0 C8.8 19.6 9.6 16.4 9.2 12.6 Z';
      const neckD = 'M13.4 17.6 H18.6 V22 H13.4 Z';
      const capeD = 'M4.8 32 L1.8 23.8 C4.6 21.8 7.8 21.6 10.2 22.8 H21.8 C24.2 21.6 27.4 21.8 30.2 23.8 L27.2 32 Z';
      const suitD = 'M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z';
      const headD = 'M9.6 12.6 A6.4 6.8 0 1 0 22.4 12.6 A6.4 6.8 0 1 0 9.6 12.6 Z';
      const hairD =
        g === 'man'
          ? 'M9.6 11.8 C8.8 6.4 11.8 3.8 16 3.8 C20.2 3.8 23.2 6.4 22.4 11.8 C21.2 9.2 19 8.2 16 8.2 C13 8.2 10.8 9.2 9.6 11.8 Z'
          : 'M9.8 11.8 C9.2 6.6 12 4 16 4 C20 4 22.8 6.6 22.2 11.8 C20.2 9.8 17.2 8.4 14.8 6.6 C13.6 9 11.6 10.8 9.8 11.8 Z';
      const maskD = 'M10.2 12 C12.2 11.2 14.4 11.6 16 12.4 C17.6 11.6 19.8 11.2 21.8 12 L21.4 14.8 C19.6 15.6 17.6 15 16 14 C14.4 15 12.4 15.6 10.6 14.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${Math.max(1.1, sw * 0.65)}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${capeD}" />
          ${g === 'woman' ? `<path d="${longBack}" />` : ''}
          <path d="${suitD}" fill="#FFFFFF" />
          <polygon points="16,24.4 18.8,26.6 16,29.8 13.2,26.6" />
          <path d="${neckD}" fill="#FFFFFF" />
          <path d="${headD}" fill="#FFFFFF" />
          <path d="${maskD}" fill="#FFFFFF" />
          <path d="${hairD}" />
          <circle cx="13.2" cy="13.4" r="0.85" fill="${c.stroke}" stroke="none" />
          <circle cx="18.8" cy="13.4" r="0.85" fill="${c.stroke}" stroke="none" />
          <path d="M13.6 16.4 C14.8 17.8 17.2 17.8 18.4 16.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${capeD}" />
          ${g === 'woman' ? `<path d="${longBack}" />` : ''}
          <path d="${suitD}" stroke="#FFFFFF" stroke-width="0.9" />
          <polygon points="16,24.4 18.8,26.6 16,29.8 13.2,26.6" fill="#FFFFFF" />
          <path d="${neckD}" />
          <path d="${headD}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${maskD}" fill="#FFFFFF" />
          <circle cx="13.2" cy="13.4" r="0.9" fill="${c.primary}" />
          <circle cx="18.8" cy="13.4" r="0.9" fill="${c.primary}" />
          <path d="M13.6 16.4 C14.8 17.8 17.2 17.8 18.4 16.4" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const suitFill = isDuotone ? c.secondary : '#2563EB';
      const capeFill = isDuotone ? c.secondary : '#DC2626';
      const capeStroke = isDuotone ? c.stroke : '#991B1B';
      const emblemFill = isDuotone ? c.primary : '#FACC15';
      const hairFill = isDuotone ? c.secondary : '#78350F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${capeD}" fill="${capeFill}" stroke="${capeStroke}" stroke-width="1.1" />
        ${g === 'woman' ? `<path d="${longBack}" fill="${hairFill}" stroke="#E65100" stroke-width="1.0" />` : ''}
        <path d="${neckD}" fill="${c.primary}" stroke="#E65100" stroke-width="1.1" />
        <path d="${suitD}" fill="${suitFill}" stroke="${isDuotone ? c.stroke : '#1D4ED8'}" stroke-width="1.1" />
        <polygon points="16,24.4 18.8,26.6 16,29.8 13.2,26.6" fill="${emblemFill}" stroke="${isDuotone ? c.stroke : '#B45309'}" stroke-width="0.8" />
        <path d="${headD}" fill="${c.primary}" stroke="#E65100" stroke-width="1.1" />
        <path d="${maskD}" fill="${capeFill}" stroke="${capeStroke}" stroke-width="0.8" />
        <path d="${hairD}" fill="${hairFill}" stroke="#E65100" stroke-width="1.1" />
        <ellipse cx="13.2" cy="13.4" rx="1.2" ry="0.9" fill="#FFFFFF" />
        <ellipse cx="18.8" cy="13.4" rx="1.2" ry="0.9" fill="#FFFFFF" />
        <circle cx="13.2" cy="13.4" r="0.65" fill="#37474F" />
        <circle cx="18.8" cy="13.4" r="0.65" fill="#37474F" />
        <path d="M13.6 16.4 C14.8 17.8 17.2 17.8 18.4 16.4" fill="none" stroke="${g === 'woman' && !isDuotone ? '#E11D48' : '#37474F'}" stroke-width="1.4" />
      </g>`;
    },
  })),

  // =========================================================================
  // 17–18. MAN & WOMAN SUPERVILLAIN (🦹‍♂️ 🦹‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-supervillain`,
    char: g === 'man' ? '🦹‍♂️' : '🦹‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Supervillain`,
    unicodeHex: `U+1F9B9 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['supervillain', 'villain', 'cape', 'mask', g, g === 'man' ? '🦹‍♂️' : '🦹‍♀️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#7E22CE', stroke: '#E65100' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const longBack = 'M9.2 12.6 C7.8 6.4 11.4 3.4 16 3.4 C20.6 3.4 24.2 6.4 22.8 12.6 C22.4 16.4 23.2 19.6 24.6 22.0 L7.4 22.0 C8.8 19.6 9.6 16.4 9.2 12.6 Z';
      const neckD = 'M13.4 17.6 H18.6 V22 H13.4 Z';
      const collarCapeD = 'M4.4 32 L1.8 22.8 C4.8 19.2 8.2 18 10.6 19.6 L12.4 22.4 H19.6 L21.4 19.6 C23.8 18 27.2 19.2 30.2 22.8 L27.6 32 Z';
      const suitD = 'M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z';
      const headD = 'M9.6 12.6 A6.4 6.8 0 1 0 22.4 12.6 A6.4 6.8 0 1 0 9.6 12.6 Z';
      const hairD =
        g === 'man'
          ? 'M9.6 11.8 C8.8 6.4 11.8 3.8 16 3.8 C20.2 3.8 23.2 6.4 22.4 11.8 C21.2 9.2 19 8.2 16 8.2 C13 8.2 10.8 9.2 9.6 11.8 Z'
          : 'M9.8 11.8 C9.2 6.6 12 4 16 4 C20 4 22.8 6.6 22.2 11.8 C20.2 9.8 17.2 8.4 14.8 6.6 C13.6 9 11.6 10.8 9.8 11.8 Z';
      const maskD = 'M10 11.4 L16 12.8 L22 11.4 L21.2 14.8 L16 13.8 L10.8 14.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${Math.max(1.1, sw * 0.65)}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${collarCapeD}" />
          ${g === 'woman' ? `<path d="${longBack}" />` : ''}
          <path d="${suitD}" fill="#FFFFFF" />
          <path d="M12.4 22.4 L16 26.8 L19.6 22.4" />
          <path d="${neckD}" fill="#FFFFFF" />
          <path d="${headD}" fill="#FFFFFF" />
          <path d="${maskD}" fill="#FFFFFF" />
          <path d="${hairD}" />
          <circle cx="13.2" cy="13.4" r="0.85" fill="${c.stroke}" stroke="none" />
          <circle cx="18.8" cy="13.4" r="0.85" fill="${c.stroke}" stroke="none" />
          <path d="M13.6 17.2 C15 16.2 17.2 16 18.6 16.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${collarCapeD}" />
          ${g === 'woman' ? `<path d="${longBack}" />` : ''}
          <path d="${suitD}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${neckD}" />
          <path d="${headD}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${maskD}" fill="#FFFFFF" />
          <circle cx="13.2" cy="13.4" r="0.9" fill="${c.primary}" />
          <circle cx="18.8" cy="13.4" r="0.9" fill="${c.primary}" />
          <path d="M13.6 17.2 C15 16.2 17.2 16 18.6 16.8" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const suitFill = isDuotone ? c.secondary : '#334155';
      const capeFill = isDuotone ? c.secondary : '#7E22CE';
      const capeStroke = isDuotone ? c.stroke : '#4C1D95';
      const hairFill = isDuotone ? c.secondary : '#1E293B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${collarCapeD}" fill="${capeFill}" stroke="${capeStroke}" stroke-width="1.1" />
        ${g === 'woman' ? `<path d="${longBack}" fill="${hairFill}" stroke="#E65100" stroke-width="1.0" />` : ''}
        <path d="${neckD}" fill="${c.primary}" stroke="#E65100" stroke-width="1.1" />
        <path d="${suitD}" fill="${suitFill}" stroke="${isDuotone ? c.stroke : '#0F172A'}" stroke-width="1.1" />
        <path d="M12.4 22.4 L16 26.8 L19.6 22.4" fill="none" stroke="${capeStroke}" stroke-width="1.1" />
        <circle cx="16" cy="27.2" r="1.4" fill="${isDuotone ? c.primary : '#EF4444'}" stroke="${capeStroke}" stroke-width="0.7" />
        <path d="${headD}" fill="${c.primary}" stroke="#E65100" stroke-width="1.1" />
        <path d="${maskD}" fill="${capeFill}" stroke="${capeStroke}" stroke-width="0.8" />
        <path d="${hairD}" fill="${hairFill}" stroke="#E65100" stroke-width="1.1" />
        <ellipse cx="13.2" cy="13.3" rx="1.2" ry="0.85" fill="#FFFFFF" />
        <ellipse cx="18.8" cy="13.3" rx="1.2" ry="0.85" fill="#FFFFFF" />
        <circle cx="13.2" cy="13.3" r="0.6" fill="#37474F" />
        <circle cx="18.8" cy="13.3" r="0.6" fill="#37474F" />
        <path d="M13.6 17.2 C15 16.2 17.2 16 18.6 16.8" fill="none" stroke="${g === 'woman' && !isDuotone ? '#BE185D' : '#37474F'}" stroke-width="1.35" />
      </g>`;
    },
  })),

  // =========================================================================
  // 19–20. MAN & WOMAN MAGE (🧙‍♂️ 🧙‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-mage`,
    char: g === 'man' ? '🧙‍♂️' : '🧙‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Mage`,
    unicodeHex: `U+1F9D9 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['mage', g === 'man' ? 'wizard' : 'witch', 'sorcerer', 'magic', 'hat', g, g === 'man' ? '🧙‍♂️' : '🧙‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personLongHairBack(14.4, 14.6, 5.2, 5.4), kind: 'hair' as const }] : []),
        { d: 'M4.6 32 C4.6 24 8.6 20.6 14.4 20.6 C20.2 20.6 24 24 24 32 Z', kind: 'item', fill: g === 'man' ? '#4F46E5' : '#6D28D9' },
        { d: 'M19.6 24.6 C22.4 23 24.4 19 24.6 14.6', kind: 'item', w: 3.6, fill: g === 'man' ? '#4F46E5' : '#6D28D9' },
        { d: 'M25.6 9.8 L25.6 30.8', kind: 'item', w: 2.2, fill: '#78350F' },
        { d: personCircle(25.2, 14.2, 1.8), kind: 'skin' },
        { d: personCircle(25.6, 7.2, 2.7), kind: 'item', fill: '#38BDF8' },
        { d: personEllipse(14.4, 14.6, 5.2, 5.4), kind: 'skin' },
        ...(g === 'man'
          ? [{ d: 'M9.8 16.8 C9.8 21.8 12.2 25.4 14.4 26 C16.6 25.4 19 21.8 19 16.8 C17.4 18.2 15.8 18.6 14.4 18.6 C13 18.6 11.4 18.2 9.8 16.8 Z', kind: 'item' as const, fill: '#F1F5F9' }]
          : []),
        { d: 'M6.8 12.6 C10.6 10.6 18.2 10.6 22 12.6 C18.8 11.4 10 11.4 6.8 12.6 Z', kind: 'item', fill: g === 'man' ? '#4338CA' : '#5B21B6' },
        { d: 'M10 11.4 L13.4 2.4 L17.6 5 L18.8 11.4 Z', kind: 'item', fill: g === 'man' ? '#4F46E5' : '#6D28D9' },
        { d: 'M10.4 10.6 H18.4', kind: 'mark', w: 1.5, fill: '#FBBF24' },
      ];
      return renderPersonLayers(
        opts,
        layers,
        (ink, _mouth, o, s) =>
          personEyes(ink, [[12.4, 14.6], [16.4, 14.6]], 0.9) +
          personLine(ink, 'M11.2 13 L13.4 13.4 M17.6 13 L15.4 13.4', 0.9) +
          personLine(g === 'woman' ? lipCol(!!o, !!s, ink) : ink, 'M13 17.6 C14 18.4 14.8 18.4 15.8 17.6', g === 'woman' ? 1.3 : 0.9) +
          (!o && !s ? '<circle cx="24.8" cy="6.4" r="0.8" fill="#E0F2FE" stroke="none" />' : ''),
        `${g}-mage`,
        '#78350F'
      );
    },
  })),

  // =========================================================================
  // 21–22. MAN & WOMAN FAIRY (🧚‍♂️ 🧚‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-fairy`,
    char: g === 'man' ? '🧚‍♂️' : '🧚‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Fairy`,
    unicodeHex: `U+1F9DA U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['fairy', 'pixie', 'wings', 'magic', 'wand', g, g === 'man' ? '🧚‍♂️' : '🧚‍♀️'],
    renderContent: (opts) => {
      const tunicCol = g === 'man' ? '#0D9488' : '#EC4899';
      const layers: PersonLayer[] = [
        { d: 'M14 13.2 C9.6 6.2 4.6 7.4 5.4 12.8 C6 16.4 10.6 16.6 14 14.6 Z', kind: 'item', fill: '#BAE6FD' },
        { d: 'M18 13.2 C22.4 6.2 27.4 7.4 26.6 12.8 C26 16.4 21.4 16.6 18 14.6 Z', kind: 'item', fill: '#BAE6FD' },
        { d: 'M14.2 15.2 C10.4 16.4 8.2 19.6 9.8 22.2 C11.4 23.8 14 20.4 14.8 17.4 Z', kind: 'item', fill: '#E0F2FE' },
        { d: 'M17.8 15.2 C21.6 16.4 23.8 19.6 22.2 22.2 C20.6 23.8 18 20.4 17.2 17.4 Z', kind: 'item', fill: '#E0F2FE' },
        { d: 'M22.2 11.4 L26.4 5.6', kind: 'mark', w: 1.2, fill: '#B45309' },
        { d: 'M26.6 3.8 L27.3 5.2 L28.8 5.4 L27.7 6.4 L28 7.9 L26.6 7.1 L25.2 7.9 L25.5 6.4 L24.4 5.4 L25.9 5.2 Z', kind: 'item', fill: '#FDE047' },
        ...(g === 'woman' ? [{ d: personLongHairBack(16, 6.2, 3.5, 3.8), kind: 'hair' as const }] : []),
        ...legOf([14.4, 19.6], [13.2, 24.4], [11.6, 28.6], -1),
        ...legOf([17.4, 19.6], [18.8, 24], [17.4, 28.8], 1),
        ...armOf([13, 12.2], [10.4, 15.2], [8.6, 17.8]),
        ...armOf([19, 12.2], [21.2, 13.6], [22.4, 11.2]),
        tube('shirt', [[16, 11], [16, 19.8]], 6.4, tunicCol),
        { d: personEllipse(16, 6.2, 3.5, 3.8), kind: 'skin' },
        { d: personHair(16, 6.2, 3.5, 3.8), kind: 'hair' },
      ];
      return renderPersonLayers(
        opts,
        layers,
        (ink, _mouth, o, s) =>
          personEyes(ink, [[14.7, 6.5], [17.3, 6.5]], 0.75) +
          personLine(g === 'woman' ? lipCol(!!o, !!s, ink) : ink, 'M15 8.1 C15.6 8.8 16.4 8.8 17 8.1', g === 'woman' ? 1.1 : 0.8),
        `${g}-fairy`
      );
    },
  })),

  // =========================================================================
  // 23–24. MAN & WOMAN VAMPIRE (🧛‍♂️ 🧛‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-vampire`,
    char: g === 'man' ? '🧛‍♂️' : '🧛‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Vampire`,
    unicodeHex: `U+1F9DB U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['vampire', 'dracula', 'fangs', 'cape', 'halloween', g, g === 'man' ? '🧛‍♂️' : '🧛‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M7.2 22.8 L6.2 10.6 L12 14.8 H20 L25.8 10.6 L24.8 22.8 Z', kind: 'item', fill: '#DC2626' },
        ...(g === 'woman' ? [{ d: personLongHairBack(16, 13.8, 5.6, 5.8), kind: 'hair' as const }] : []),
        { d: 'M5.6 32 C5.6 24 10 20.6 16 20.6 C22 20.6 26.4 24 26.4 32 Z', kind: 'item', fill: '#1E293B' },
        { d: 'M13.2 21.2 L16 28.4 L18.8 21.2 Z', kind: 'item', fill: '#DC2626' },
        { d: personEllipse(16, 13.8, 5.6, 5.8), kind: 'skin' },
        { d: 'M10.4 13.2 C10 7.4 12.6 5.2 16 5.2 C19.4 5.2 22 7.4 21.6 13.2 C20.4 10.2 18 9.2 16 11.4 C14 9.2 11.6 10.2 10.4 13.2 Z', kind: 'hair' },
      ];
      return renderPersonLayers(
        opts,
        layers,
        (ink, mouthFill, o, s) =>
          personLine(ink, 'M12 12.2 L14.6 13 M20 12.2 L17.4 13', 1.1) +
          personEyes(ink, [[13.4, 14], [18.6, 14]], 0.9) +
          `<path d="M13 16.4 C14 18.6 18 18.6 19 16.4 Z" fill="${mouthFill}" stroke="${g === 'woman' && !o && !s ? '#E11D48' : ink}" stroke-width="0.9" />` +
          (!o && !s ? '<path d="M14.1 16.5 L14.5 17.8 L15 16.5 Z M17 16.5 L17.5 17.8 L17.9 16.5 Z" fill="#FFFFFF" stroke="none" />' : ''),
        `${g}-vamp`,
        '#1E293B'
      );
    },
  })),

  // =========================================================================
  // 25–26. MERMAN & MERMAID (🧜‍♂️ 🧜‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: g === 'man' ? 'merman' : 'mermaid',
    char: g === 'man' ? '🧜‍♂️' : '🧜‍♀️',
    name: g === 'man' ? 'Merman' : 'Mermaid',
    unicodeHex: `U+1F9DC U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['merperson', g === 'man' ? 'merman' : 'mermaid', 'trident', 'ocean', 'sea', g === 'man' ? '🧜‍♂️' : '🧜‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M24.6 5.6 L24.6 26.8', kind: 'mark', w: 1.5, fill: '#D97706' },
        { d: 'M22.2 4.6 V8 C22.2 9.4 27 9.4 27 8 V4.6 M24.6 3.8 V9.2', kind: 'mark', w: 1.3, fill: '#F59E0B' },
        ...(g === 'woman' ? [{ d: personLongHairBack(15.6, 5.8, 3.5, 3.8), kind: 'hair' as const }] : []),
        { d: 'M18 27.2 C21.2 28.4 23.6 30.8 25.4 30.2 C24.6 27.6 22.8 25.6 20 25.2 C22.4 24.4 24.8 22.6 25 20.4 C22.4 21 19.6 22.8 18 25.4 Z', kind: 'item', fill: '#0D9488' },
        { d: 'M13.2 17.4 C12.4 22.8 14.8 26.8 19.2 26.6 C20.4 25.4 19.4 23.8 17.8 23.4 C16.8 22 17.4 19.6 18 17.4 Z', kind: 'item', fill: '#14B8A6' },
        tube('skin', [[15.6, 10.6], [15.6, 17.6]], 5.6),
        ...(g === 'woman' ? [{ d: 'M12.6 13.8 C14 14.6 17.2 14.6 18.6 13.8 L18.2 16.4 H13 Z', kind: 'item' as const, fill: '#A855F7' }] : []),
        tube('skin', [[12.6, 11.4], [10.4, 15.2], [11.6, 18.2]], 2.5),
        hand([11.6, 18.2], 1.5),
        tube('skin', [[18.6, 11.4], [21.6, 14.2], [24.2, 13.8]], 2.5),
        hand([24.2, 13.8], 1.5),
        { d: personEllipse(15.6, 5.8, 3.5, 3.8), kind: 'skin' },
        { d: personHair(15.6, 5.8, 3.5, 3.8), kind: 'hair' },
      ];
      return renderPersonLayers(
        opts,
        layers,
        (ink, _m, o, s) =>
          personEyes(ink, [[14.3, 6.1], [16.9, 6.1]], 0.75) +
          personLine(g === 'woman' ? lipCol(!!o, !!s, ink) : ink, 'M14.6 7.7 C15.2 8.4 16.0 8.4 16.6 7.7', g === 'woman' ? 1.1 : 0.8),
        `${g}-mer`,
        g === 'woman' ? '#DC2626' : '#78350F'
      );
    },
  })),

  // =========================================================================
  // 27–28. MAN & WOMAN ELF (🧝‍♂️ 🧝‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-elf`,
    char: g === 'man' ? '🧝‍♂️' : '🧝‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Elf`,
    unicodeHex: `U+1F9DD U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['elf', 'fantasy', 'pointed ears', 'woodland', g, g === 'man' ? '🧝‍♂️' : '🧝‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personLongHairBack(16, 13.8, 5.6, 5.8), kind: 'hair' as const }] : []),
        { d: 'M5.6 32 C5.6 24 10 20.6 16 20.6 C22 20.6 26.4 24 26.4 32 Z', kind: 'item', fill: '#16A34A' },
        { d: 'M13.2 21 L16 24.8 L18.8 21', kind: 'mark', w: 1.4, fill: '#FBBF24' },
        { d: 'M10.8 12.4 L5.4 10.6 L9.8 15.8 Z', kind: 'skin' },
        { d: 'M21.2 12.4 L26.6 10.6 L22.2 15.8 Z', kind: 'skin' },
        { d: personEllipse(16, 13.8, 5.6, 5.8), kind: 'skin' },
        { d: personHair(16, 13.8, 5.6, 5.8), kind: 'hair' },
      ];
      return renderPersonLayers(
        opts,
        layers,
        (ink, _m, o, s) =>
          personEyes(ink, [[13.5, 14.2], [18.5, 14.2]], 0.9) +
          personLine(ink, 'M12.2 12.4 L14.4 12 M19.8 12.4 L17.6 12', 0.9) +
          personLine(g === 'woman' ? lipCol(!!o, !!s, ink) : ink, 'M14 17.2 C15.2 18.4 16.8 18.4 18 17.2', g === 'woman' ? 1.4 : 1.1),
        `${g}-elf`,
        '#B45309'
      );
    },
  })),

  // =========================================================================
  // 29–30. MAN & WOMAN GENIE (🧞‍♂️ 🧞‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-genie`,
    char: g === 'man' ? '🧞‍♂️' : '🧞‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Genie`,
    unicodeHex: `U+1F9DE U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['genie', 'lamp', 'magic', 'wish', 'djinn', g, g === 'man' ? '🧞‍♂️' : '🧞‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personLongHairBack(16, 6.2, 3.5, 3.8), kind: 'hair' as const }] : []),
        { d: 'M12.4 19.2 C13.2 22.8 18.8 23.6 18.2 26.8 C17.6 29.2 12.2 29.4 10.2 30.8 C15.2 31.2 21.8 30 22.2 25.8 C22.4 22.4 18.6 21 19 18.8 Z', kind: 'item', fill: '#38BDF8' },
        { d: 'M12.4 17.8 H19.2 V20 H12.4 Z', kind: 'item', fill: '#FBBF24' },
        { d: 'M11.6 10.8 H20.4 L19 18 H12.6 Z', kind: 'skin' },
        ...(g === 'woman' ? [{ d: 'M12.0 13.0 C14.0 14.2 18.0 14.2 20.0 13.0 L19.4 16.0 H12.6 Z', kind: 'item' as const, fill: '#EC4899' }] : []),
        tube('skin', [[11.6, 11.6], [10.4, 15], [17.8, 15.2]], 2.7),
        tube('skin', [[20.4, 11.6], [21.6, 15], [14.2, 15.6]], 2.7),
        { d: 'M13.6 14.4 L14.4 16.4 M17.6 14.2 L18.4 16.2', kind: 'mark', w: 1.4, fill: '#FBBF24' },
        { d: 'M16.2 2.4 C18.2 0.8 20.8 1.6 20.6 3.8 C19.4 3.2 18 3.2 16.8 4 Z', kind: 'hair' },
        { d: personEllipse(16, 6.2, 3.5, 3.8), kind: 'skin' },
        { d: personHair(16, 6.2, 3.5, 3.8), kind: 'hair' },
      ];
      return renderPersonLayers(
        opts,
        layers,
        (ink, _m, o, s) =>
          personEyes(ink, [[14.7, 6.5], [17.3, 6.5]], 0.75) +
          personLine(g === 'woman' ? lipCol(!!o, !!s, ink) : ink, 'M15 8.1 C15.6 8.8 16.4 8.8 17 8.1', g === 'woman' ? 1.1 : 0.8) +
          (g === 'man' ? personLine(ink, 'M15.4 9.6 L16 10.5 L16.6 9.6', 0.9) : ''),
        `${g}-genie`,
        '#1E293B',
        { fillPrimary: '#0284C7', fillSecondary: '#38BDF8', stroke: '#0369A1', skinColor: '#38BDF8' }
      );
    },
  })),

  // =========================================================================
  // 31–32. MAN & WOMAN ZOMBIE (🧟‍♂️ 🧟‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-zombie`,
    char: g === 'man' ? '🧟‍♂️' : '🧟‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Zombie`,
    unicodeHex: `U+1F9DF U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['zombie', 'undead', 'halloween', 'monster', g, g === 'man' ? '🧟‍♂️' : '🧟‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personLongHairBack(14.4, 13.2, 5.6, 5.8), kind: 'hair' as const }] : []),
        { d: 'M4.6 32 C4.6 24 8.6 20.6 14.4 20.6 C20.2 20.6 24 24 24 32 Z', kind: 'shirt' },
        { d: 'M19.4 24.4 L24.8 18.8', kind: 'shirt', w: 3.6 },
        { d: 'M24.8 18.8 L27.6 15.2', kind: 'skin', w: 2.6 },
        { d: 'M26.6 14 L29 12.2 M27.4 15.2 L29.8 14.2 M27 16.4 L29.2 16', kind: 'mark', w: 1.4, fill: '#84CC16' },
        { d: personEllipse(14.4, 13.2, 5.6, 5.8), kind: 'skin' },
        { d: 'M8.8 12.8 C8.2 8.4 10.8 5.8 14.4 5.8 C18 5.8 20.6 8.4 20 12.8 L18 10.2 L16.2 12.2 L14 9.6 L11.8 12 Z', kind: 'hair' },
      ];
      return renderPersonLayers(
        opts,
        layers,
        (ink, mouthFill, o, s) =>
          personLine(ink, 'M15.4 9.8 L18.2 9.4 M16.2 9 L16.4 10.4 M17.4 8.8 L17.6 10.2', 0.8) +
          (!o && !s
            ? '<circle cx="11.8" cy="13.4" r="1.4" fill="#FEF08A" stroke="#37474F" stroke-width="0.6" /><circle cx="16.8" cy="13.8" r="1.1" fill="#FEF08A" stroke="#37474F" stroke-width="0.6" />'
            : '') +
          personEyes(ink, [[11.8, 13.4], [16.8, 13.8]], 0.65) +
          `<path d="M11.6 16.8 C13 15.8 15.8 16 17.2 17.2 C16 18 12.8 18 11.6 16.8 Z" fill="${mouthFill}" stroke="${g === 'woman' && !o && !s ? '#9F1239' : ink}" stroke-width="0.9" />`,
        `${g}-zomb`,
        '#334155',
        { fillPrimary: '#FB8C00', fillSecondary: '#84CC16', stroke: '#3F6212', skinColor: '#84CC16' }
      );
    },
  })),
];
