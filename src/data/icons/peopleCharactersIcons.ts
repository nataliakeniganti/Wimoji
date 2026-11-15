import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';
import { renderFamilySymbol } from './familySymbolIcons';

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

// ---- Shared helpers for the head-only people emoji, drawn in a 32x32 box ----
type HeadLayer = { d: string; kind: 'skin' | 'hair' | 'pink' };

const headEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const renderHead = (
  opts: { style?: string; strokeWidth?: number },
  layers: HeadLayer[],
  features: (ink: string, o: boolean, s: boolean) => string,
  id: string,
  hairColor = '#78350F',
  keepHairInDuotone = false,
) => {
  const c = resolveColors(opts as any, { fillPrimary: '#FFCA28', fillSecondary: '#78350F', stroke: '#FFA000' });
  const badge = getBadgeMarkup(opts as any);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : 0.9;
  const colorOf = (k: HeadLayer['kind']) =>
    s ? c.primary : k === 'skin' ? c.primary : k === 'pink' ? (d ? c.secondary : '#F472B6') : d && !keepHairInDuotone ? c.secondary : hairColor;
  const cover = (l: HeadLayer) => `<path d="${l.d}" fill="#000" stroke="#000" stroke-width="${t}" />`;
  const draw = (l: HeadLayer) => {
    if (o) return `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (s) return `<path d="${l.d}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />`;
    return `<path d="${l.d}" fill="${colorOf(l.kind)}" stroke="${l.kind === 'skin' ? c.stroke : 'none'}" stroke-width="${t}" />`;
  };
  const body = layers
    .map((l, i) => {
      const later = layers.slice(i + 1).map(cover).join('');
      if (!o || !later) return draw(l);
      return `<mask id="${id}-${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${later}</mask><g mask="url(#${id}-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');
  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${features(ink, o, s)}
      </g>`;
};

const headEyes = (ink: string, pts: Array<[number, number]>, r = 1.1) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}" stroke="none" />`).join('');
const headLine = (ink: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${w}" />`;
const headBase = (cx: number, cy: number, rx: number, ry: number, ears = true): HeadLayer[] => [
  ...(ears
    ? ([
        { d: headEllipse(cx - rx + 0.6, cy + 1, 1.5, 2.2), kind: 'skin' },
        { d: headEllipse(cx + rx - 0.6, cy + 1, 1.5, 2.2), kind: 'skin' },
      ] as HeadLayer[])
    : []),
  { d: headEllipse(cx, cy, rx, ry), kind: 'skin' },
];
const headCheeks = (o: boolean, s: boolean, y: number, dx = 6.4) =>
  o || s
    ? ''
    : `<ellipse cx="${16 - dx}" cy="${y}" rx="1.7" ry="1.1" fill="#F87171" opacity="0.45" /><ellipse cx="${16 + dx}" cy="${y}" rx="1.7" ry="1.1" fill="#F87171" opacity="0.45" />`;

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
      return `<mask id="${fig.id}-${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${later}</mask><g mask="url(#${fig.id}-${i})">${draw(l)}</g>`;
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

// Full-body figure walking hand in hand: cx = horizontal centre, dir = +1 if the partner is on the right
const walker = (cx: number, kind: 'man' | 'woman', shirt: string, dir: number): FigLayer[] => {
  const f = (n: number) => +n.toFixed(2);
  const quad = (x0: number, y0: number, x1: number, y1: number, w: number) => {
    const dx = x1 - x0;
    const dy = y1 - y0;
    const len = Math.hypot(dx, dy) || 1;
    const nx = (-dy / len) * (w / 2);
    const ny = (dx / len) * (w / 2);
    return `M${f(x0 + nx)} ${f(y0 + ny)} L${f(x1 + nx)} ${f(y1 + ny)} L${f(x1 - nx)} ${f(y1 - ny)} L${f(x0 - nx)} ${f(y0 - ny)} Z`;
  };
  const hair = kind === 'woman' ? '#78350F' : '#5D3A1A';
  const out: FigLayer[] = [];
  if (kind === 'woman') {
    out.push({
      d: `M${cx - 3.9} 6.4 C${cx - 4.6} 2.6 ${cx - 2} 1.6 ${cx} 1.6 C${cx + 2} 1.6 ${cx + 4.6} 2.6 ${cx + 3.9} 6.4 C${cx + 3.8} 8.6 ${cx + 4.2} 10 ${cx + 4.6} 11.4 L${cx - 4.6} 11.4 C${cx - 4.2} 10 ${cx - 3.8} 8.6 ${cx - 3.9} 6.4 Z`,
      fill: hair,
    });
    out.push({ d: `M${cx - 2.6} 20 H${cx - 0.8} V28.4 H${cx - 2.6} Z`, fill: '', skin: true });
    out.push({ d: `M${cx + 0.8} 20 H${cx + 2.6} V28.4 H${cx + 0.8} Z`, fill: '', skin: true });
  } else {
    out.push({ d: `M${cx - 3.8} 18.4 H${cx - 0.2} V28.6 H${cx - 3.8} Z`, fill: '#37474F' });
    out.push({ d: `M${cx + 0.2} 18.4 H${cx + 3.8} V28.6 H${cx + 0.2} Z`, fill: '#37474F' });
  }
  out.push({ d: figEllipse(cx - 1.8, 29.6, 2.2, 1), fill: '#5D4037' });
  out.push({ d: figEllipse(cx + 1.8, 29.6, 2.2, 1), fill: '#5D4037' });
  out.push({ d: `M${cx - 1} 9.4 H${cx + 1} V11 H${cx - 1} Z`, fill: '', skin: true });
  const xo = cx - dir * 5.2;
  out.push({ d: quad(cx - dir * 3.6, 11.6, xo, 18.2, 2.2), fill: shirt });
  out.push({ d: figEllipse(xo, 19, 1.2, 1.2), fill: '', skin: true });
  out.push({
    d:
      kind === 'woman'
        ? `M${cx - 3.4} 11.8 C${cx - 3.4} 10.4 ${cx - 1.8} 10 ${cx} 10 C${cx + 1.8} 10 ${cx + 3.4} 10.4 ${cx + 3.4} 11.8 L${cx + 2.8} 15 L${cx + 5} 21.4 L${cx - 5} 21.4 L${cx - 2.8} 15 Z`
        : `M${cx - 3.8} 11.8 C${cx - 3.8} 10.4 ${cx - 2} 10 ${cx} 10 C${cx + 2} 10 ${cx + 3.8} 10.4 ${cx + 3.8} 11.8 L${cx + 3.6} 19 L${cx - 3.6} 19 Z`,
    fill: shirt,
  });
  out.push({ d: figEllipse(cx, 6.4, 3.5, 3.7), fill: '', skin: true });
  out.push({
    d: `M${cx - 3.7} 6 C${cx - 4.1} 2.6 ${cx - 2} 1.8 ${cx} 1.8 C${cx + 2} 1.8 ${cx + 4.1} 2.6 ${cx + 3.7} 6 C${cx + 2.8} 4.4 ${cx + 1.4} 3.8 ${cx} 3.8 C${cx - 1.4} 3.8 ${cx - 2.8} 4.4 ${cx - 3.7} 6 Z`,
    fill: hair,
  });
  // Inner arm reaching to the joined hands in the middle
  out.push({ d: quad(cx + dir * 3.6, 11.6, 16, 17.8, 2.2), fill: shirt });
  return out;
};
const walkerFace = (cx: number, ink: string, lips?: string) =>
  figDots(ink, [[cx - 1.3, 6.6], [cx + 1.3, 6.6]], 0.55) + figLine(lips ?? ink, `M${cx - 1} 8.3 Q${cx} 9.1 ${cx + 1} 8.3`, 0.7);
const couple = (id: string, a: ['man' | 'woman', string], b: ['man' | 'woman', string]): Figure => ({
  id,
  layers: [
    ...walker(9, a[0], a[1], 1),
    ...walker(23, b[0], b[1], -1),
    { d: figEllipse(16, 18.2, 1.6, 1.6), fill: '', skin: true },
  ],
  features: (ink, o, s) =>
    walkerFace(9, ink, a[0] === 'woman' ? lipCol(o, s, ink) : undefined) + walkerFace(23, ink, b[0] === 'woman' ? lipCol(o, s, ink) : undefined),
});

// Bunny-ear dancer: bare legs, black leotard, hands on hips, ear headband
const bunnyDancer = (cx: number, dir: number): FigLayer[] => {
  const f = (n: number) => +n.toFixed(2);
  const quad = (x0: number, y0: number, x1: number, y1: number, w: number) => {
    const dx = x1 - x0;
    const dy = y1 - y0;
    const len = Math.hypot(dx, dy) || 1;
    const nx = (-dy / len) * (w / 2);
    const ny = (dx / len) * (w / 2);
    return `M${f(x0 + nx)} ${f(y0 + ny)} L${f(x1 + nx)} ${f(y1 + ny)} L${f(x1 - nx)} ${f(y1 - ny)} L${f(x0 - nx)} ${f(y0 - ny)} Z`;
  };
  const dark = '#263238';
  const arm = (sg: number): FigLayer[] => [
    { d: quad(cx + sg * 2.8, 13.6, cx + sg * 6.4, 17.2, 1.9), fill: '', skin: true },
    { d: quad(cx + sg * 6.4, 17.2, cx + sg * 3.4, 20.8, 1.9), fill: '', skin: true },
  ];
  return [
    { d: figEllipse(cx - 1.9, 3.8, 1.25, 2.9), fill: dark },
    { d: figEllipse(cx + 1.9, 3.8, 1.25, 2.9), fill: dark },
    ...arm(-1),
    ...arm(1),
    // Standing leg
    { d: quad(cx - dir * 1.2, 20.4, cx - dir * 1.6, 29.4, 2.7), fill: '', skin: true },
    // Dancing leg: knee kicked out to the side, shin angled back down
    { d: quad(cx + dir * 1.2, 21, cx + dir * 3.9, 25.4, 2.6), fill: '', skin: true },
    { d: quad(cx + dir * 3.9, 25.4, cx + dir * 2.4, 29.4, 2.5), fill: '', skin: true },
    { d: `M${f(cx - 1)} 10 H${f(cx + 1)} V13 H${f(cx - 1)} Z`, fill: '', skin: true },
    { d: `M${f(cx - 3.4)} 12.4 C${f(cx - 2)} 13.4 ${f(cx + 2)} 13.4 ${f(cx + 3.4)} 12.4 L${f(cx + 3.3)} 21.6 C${f(cx + 1.6)} 22.6 ${f(cx - 1.6)} 22.6 ${f(cx - 3.3)} 21.6 Z`, fill: dark },
    { d: figEllipse(cx, 8.2, 3.7, 3.9), fill: '', skin: true },
    { d: `M${f(cx - 3.6)} 6.8 C${f(cx - 2.2)} 4.4 ${f(cx + 2.2)} 4.4 ${f(cx + 3.6)} 6.8 L${f(cx + 3.3)} 7.6 C${f(cx + 2)} 5.8 ${f(cx - 2)} 5.8 ${f(cx - 3.3)} 7.6 Z`, fill: dark },
  ];
};
const bunnyFace = (cx: number, ink: string) =>
  figDots(ink, [[cx - 1.4, 9.6], [cx + 1.4, 9.6]], 0.7) + figLine(ink, `M${cx - 1.1} 11 C${cx - 0.4} 11.7 ${cx + 0.4} 11.7 ${cx + 1.1} 11`, 0.7);

export const peopleCharactersIcons: WimojiIconDef[] = [
  // 20. Bust in Silhouette (U+1F464)
  {
    id: 'bust-in-silhouette',
    char: '👤',
    name: 'Bust in Silhouette',
    unicodeHex: 'U+1F464',
    category: 'faces-hands',
    tags: ['bust in silhouette', 'user', 'person', 'profile', 'account', 'avatar', 'shadow', 'silhouette', '👤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="11" r="5" />
          <path d="M6 26 C6 20 10 18 16 18 C22 18 26 20 26 26 Z" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <circle cx="16" cy="11" r="5" />
        <path d="M6 26 C6 20 10 18 16 18 C22 18 26 20 26 26 Z" />
      </g>`;
    },
  },

  // 21. Busts in Silhouette (U+1F465)
  {
    id: 'busts-in-silhouette',
    char: '👥',
    name: 'Busts in Silhouette',
    unicodeHex: 'U+1F465',
    category: 'faces-hands',
    tags: ['busts in silhouette', 'users', 'people', 'group', 'team', 'accounts', 'avatars', 'community', '👥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Back bust -->
          <circle cx="21" cy="10" r="4" />
          <path d="M16 17 C19 16 23 16 27 19 C28 20 29 22 29 24" />
          <!-- Front bust -->
          <circle cx="12" cy="12" r="4.5" />
          <path d="M4 26 C4 20.5 7.5 19 12 19 C16.5 19 20 20.5 20 26 Z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Back figure -->
        <circle cx="21" cy="10" r="4" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" />
        <path d="M15 25 C15 20 18 17 22 17 C26 17 29 20 29 25 Z" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" />
        <!-- Front figure -->
        <circle cx="12" cy="12" r="4.5" fill="${c.primary}" />
        <path d="M4 26 C4 20.5 7.5 19 12 19 C16.5 19 20 20.5 20 26 Z" fill="${c.primary}" />
      </g>`;
    },
  },

  // 22. Boy (U+1F466)
  {
    id: 'boy',
    char: '👦',
    name: 'Boy',
    unicodeHex: 'U+1F466',
    category: 'faces-hands',
    tags: ['boy', 'child', 'kid', 'young', 'male', 'person', 'son', '👦'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17.4, 8.2, 8.9),
        { d: 'M7.6 16 C6.6 9.4 10.4 5.6 16 5.6 C21.6 5.6 25.4 9.4 24.4 16 C23.4 13 21 11.4 17 11 C13 11.4 9.6 13 7.6 16 Z', kind: 'hair' },
        { d: 'M13.8 6 C12.8 3.8 14.8 2.8 16.6 3.8 C15.6 4.4 15.8 5.2 16.6 6 Z', kind: 'hair' },
      ];
      return renderHead(opts, layers, (ink, o, s) =>
        headEyes(ink, [[12.8, 18.4], [19.2, 18.4]], 1.2) + headCheeks(o, s, 21.6) + headLine(ink, 'M13.8 22.6 C15 24 17 24 18.2 22.6', 1.3), 'boy');
    },
  },

  // 23. Girl (U+1F467)
  {
    id: 'girl',
    char: '👧',
    name: 'Girl',
    unicodeHex: 'U+1F467',
    category: 'faces-hands',
    tags: ['girl', 'child', 'kid', 'young', 'female', 'person', 'daughter', 'pigtails', '👧'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        { d: headEllipse(5.4, 15.2, 2.4, 3.8), kind: 'hair' },
        { d: headEllipse(26.6, 15.2, 2.4, 3.8), kind: 'hair' },
        ...headBase(16, 17.4, 8.2, 8.8, false),
        { d: 'M7.6 17 C6.6 9.6 10.4 5.6 16 5.6 C21.6 5.6 25.4 9.6 24.4 17 C23.2 13.8 20 12.2 16 12.2 C12 12.2 8.8 13.8 7.6 17 Z', kind: 'hair' },
        { d: headEllipse(6.8, 10.8, 1.5, 1.5), kind: 'pink' },
        { d: headEllipse(25.2, 10.8, 1.5, 1.5), kind: 'pink' },
      ];
      return renderHead(opts, layers, (ink, o, s) =>
        headEyes(ink, [[12.8, 18.6], [19.2, 18.6]], 1.2) + headCheeks(o, s, 21.8) + headLine(ink, 'M13.8 22.8 C15 24.2 17 24.2 18.2 22.8', 1.3), 'girl');
    },
  },

  // 24. Man (U+1F468)
  {
    id: 'man',
    char: '👨',
    name: 'Man',
    unicodeHex: 'U+1F468',
    category: 'faces-hands',
    tags: ['man', 'male', 'adult', 'person', 'guy', 'father', 'moustache', '👨'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17.2, 8.8, 9.4),
        { d: 'M7.2 15.6 C6 8.6 10.4 5 16 5 C21.6 5 26 8.6 24.8 15.6 C23.8 12 21 10.6 16 10.6 C11 10.6 8.2 12 7.2 15.6 Z', kind: 'hair' },
      ];
      return renderHead(opts, layers, (ink) =>
        headLine(ink, 'M10.8 14.6 L14.6 14.2 M17.4 14.2 L21.2 14.6', 1.4) +
        headEyes(ink, [[12.8, 17.6], [19.2, 17.6]]) + headLine(ink, 'M13.6 23 C14.8 24.4 17.2 24.4 18.4 23', 1.3), 'man');
    },
  },

  // 25. Woman (U+1F469)
  {
    id: 'woman',
    char: '👩',
    name: 'Woman',
    unicodeHex: 'U+1F469',
    category: 'faces-hands',
    tags: ['woman', 'female', 'adult', 'person', 'lady', 'mother', 'hair', '👩'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        { d: 'M6.2 17 C4.8 9 9.8 4.2 16 4.2 C22.2 4.2 27.2 9 25.8 17 C25.4 22 26.2 26 28.2 29 C24.4 29.4 22.4 28.2 21.2 26.4 L10.8 26.4 C9.6 28.2 7.6 29.4 3.8 29 C5.8 26 6.6 22 6.2 17 Z', kind: 'hair' },
        ...headBase(16, 17.4, 8, 8.8, false),
        { d: 'M7.8 16.6 C7.2 10 11 6.2 16 6.2 C21 6.2 24.8 10 24.2 16.6 C21.8 14.4 18.4 12.2 14.6 9.8 C13.4 12.6 10.6 15 7.8 16.6 Z', kind: 'hair' },
      ];
      return renderHead(opts, layers, (ink, o, s) =>
        headEyes(ink, [[12.8, 18.6], [19.2, 18.6]], 1.1) +
        headLine(ink, 'M11 17.2 L9.8 16.6 M21 17.2 L22.2 16.6', 0.8) +
        headLine(o ? ink : s ? '#FFFFFF' : '#E11D48', 'M13.8 22.8 C15 24.4 17 24.4 18.2 22.8', 1.6), 'woman');
    },
  },

  // 26. Family (U+1F46A) — Identical symbol-version design to 🧑‍🧑‍🧒
  {
    id: 'family',
    char: '👪',
    name: 'Family',
    unicodeHex: 'U+1F46A',
    category: 'faces-hands',
    tags: ['family', 'parents', 'adult', 'person', 'child', 'gender neutral', 'symbol', 'home', 'love', '👪'],
    renderContent: (opts) => renderFamilySymbol(opts, 'family', ['adult', 'adult', 'child']),
  },

  // 27. Woman and Man Holding Hands (U+1F46B)
  {
    id: 'woman-and-man-holding-hands',
    char: '👫',
    name: 'Woman and Man Holding Hands',
    unicodeHex: 'U+1F46B',
    category: 'faces-hands',
    tags: ['couple', 'woman and man holding hands', 'love', 'date', 'relationship', 'holding hands', '👫'],
    renderContent: (opts) => {
      return renderFigure(opts, couple('couple-mw', ['man', '#1976D2'], ['woman', '#EC407A']));
    },
  },

  // 28. Men Holding Hands (U+1F46C)
  {
    id: 'men-holding-hands',
    char: '👬',
    name: 'Men Holding Hands',
    unicodeHex: 'U+1F46C',
    category: 'faces-hands',
    tags: ['men holding hands', 'couple', 'twins', 'brothers', 'friends', 'love', 'holding hands', '👬'],
    renderContent: (opts) => {
      return renderFigure(opts, couple('couple-mm', ['man', '#1976D2'], ['man', '#00897B']));
    },
  },

  // 29. Women Holding Hands (U+1F46D)
  {
    id: 'women-holding-hands',
    char: '👭',
    name: 'Women Holding Hands',
    unicodeHex: 'U+1F46D',
    category: 'faces-hands',
    tags: ['women holding hands', 'couple', 'sisters', 'friends', 'love', 'holding hands', '👭'],
    renderContent: (opts) => {
      return renderFigure(opts, couple('couple-ww', ['woman', '#EC407A'], ['woman', '#8E24AA']));
    },
  },

  // 30. Police Officer (U+1F46E)
  {
    id: 'police-officer',
    char: '👮',
    name: 'Police Officer',
    unicodeHex: 'U+1F46E',
    category: 'faces-hands',
    tags: ['police officer', 'cop', 'law', 'officer', 'security', 'police cap', 'badge', 'arrest', '👮'],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'police',
        layers: [
          ...figBase('#1A237E'),
          { d: 'M12.6 20.8 L16 25.6 L19.4 20.8 Z', fill: '#90CAF9' },
          { d: figEllipse(10.6, 26, 1.2, 1.2), fill: '#FFD54F' },
          { d: 'M9.2 8.6 C9.6 2.4 22.4 2.4 22.8 8.6 Z', fill: '#1A237E' },
          { d: 'M8 9.6 C8 8.2 24 8.2 24 9.6 C24 11 8 11 8 9.6 Z', fill: '#0D1442' },
          { d: figEllipse(16, 5.6, 1.4, 1.4), fill: '#FFD54F' },
        ],
        features: (ink) => faceFeatures(ink),
      });
    },
  },

  // 31. People with Bunny Ears (U+1F46F)
  {
    id: 'people-with-bunny-ears',
    char: '👯',
    name: 'People with Bunny Ears',
    unicodeHex: 'U+1F46F',
    category: 'faces-hands',
    tags: ['dancing people wearing bunny ears', 'people with bunny ears', 'bunny girls', 'dancers', 'party', 'celebrate', 'leotard', 'costume', '👯'],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'bunny',
        layers: [...bunnyDancer(9.6, -1), ...bunnyDancer(22.4, 1)],
        features: (ink) => bunnyFace(9.6, ink) + bunnyFace(22.4, ink),
      });
    },
  },

  // 32. Person with Veil (U+1F470)
  {
    id: 'person-with-veil',
    char: '👰',
    name: 'Person with Veil',
    unicodeHex: 'U+1F470',
    category: 'faces-hands',
    tags: ['bride', 'person with veil', 'wedding', 'marriage', 'veil', 'white', 'groom', 'matrimony', '👰'],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'veil',
        layers: [
          { d: 'M16 3 C9 3 6.2 9 6.4 15 C6.6 20 5.4 24 3.4 29.6 L28.6 29.6 C26.6 24 25.4 20 25.6 15 C25.8 9 23 3 16 3 Z', fill: '#E8EAF6', stroke: '#B0BEC5' },
          ...figBase('#FFFFFF', '#B0BEC5', false),
          { d: FRINGE, fill: '#78350F' },
          { d: figEllipse(12.6, 5.6, 1.1, 1.1), fill: '#F48FB1' },
          { d: figEllipse(16, 4.6, 1.1, 1.1), fill: '#F48FB1' },
          { d: figEllipse(19.4, 5.6, 1.1, 1.1), fill: '#F48FB1' },
        ],
        features: (ink, o, s) => faceFeatures(ink, lipCol(o, s, ink)),
      });
    },
  },

  // 33. Person: Blond Hair (U+1F471)
  {
    id: 'person-blond-hair',
    char: '👱',
    name: 'Person: Blond Hair',
    unicodeHex: 'U+1F471',
    category: 'faces-hands',
    tags: ['blond', 'person: blond hair', 'blonde', 'yellow hair', 'fair hair', 'person', '👱'],
    renderContent: (opts) => {
      // Head only (no neck or body), enlarged and centred
      return `${getBadgeMarkup(opts as any)}${figInner(
        opts,
        {
          id: 'blond',
          layers: [...figBase('#FB8C00', '#E65100').slice(2), { d: SWEPT_HAIR, fill: '#E8B100' }],
          features: (ink) => faceFeatures(ink),
        },
        1.6,
        -9.6,
        -1.92,
      )}`;
    },
  },

  // 34. Person with Skullcap (U+1F472)
  {
    id: 'person-with-skullcap',
    char: '👲',
    name: 'Person with Skullcap',
    unicodeHex: 'U+1F472',
    category: 'faces-hands',
    tags: ['skullcap', 'person with skullcap', 'gua pi mao', 'chinese', 'traditional', 'hat', 'cap', '👲'],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'skullcap',
        layers: [
          ...figBase('#C62828'),
          { d: figEllipse(16, 25.2, 0.9, 0.9), fill: '#FFD54F' },
          { d: figEllipse(16, 28.4, 0.9, 0.9), fill: '#FFD54F' },
          { d: 'M9.6 10.8 C9 5.4 12.2 3.8 16 3.8 C19.8 3.8 23 5.4 22.4 10.8 C20 9.6 12 9.6 9.6 10.8 Z', fill: '#263238' },
          { d: figEllipse(16, 3.6, 1.4, 1.4), fill: '#C62828' },
        ],
        features: (ink, o, s) =>
          faceFeatures(ink) + figLine(o ? ink : s ? '#FFFFFF' : '#607D8B', 'M16 5 V9.8 M12.6 5.6 C12.2 7 12.2 8.6 12.4 9.9 M19.4 5.6 C19.8 7 19.8 8.6 19.6 9.9', 0.7),
      });
    },
  },

  // 35. Person Wearing Turban (U+1F473)
  {
    id: 'person-wearing-turban',
    char: '👳',
    name: 'Person Wearing Turban',
    unicodeHex: 'U+1F473',
    category: 'faces-hands',
    tags: ['turban', 'person wearing turban', 'sikh', 'pagri', 'headwear', 'cloth', '👳'],
    renderContent: (opts) => {
      const wrap = 'M8 11.4 C6.6 4.2 11 2.4 16 2.4 C21 2.4 25.4 4.2 24 11.4 C21.8 10.2 19.2 9.4 16 9.4 C12.8 9.4 10.2 10.2 8 11.4 Z';
      return renderFigure(opts, {
        id: 'turban',
        layers: [
          ...figBase('#5C6BC0'),
          { d: wrap, fill: '#ECEFF1', stroke: '#B0BEC5' },
          { d: figEllipse(16, 7.2, 1.7, 1.7), fill: '#FFD54F' },
          { d: figEllipse(16, 7.2, 0.9, 0.9), fill: '#E53935' },
        ],
        features: (ink, o, s) =>
          faceFeatures(ink) +
          `<clipPath id="turban-clip"><path d="${wrap}" /></clipPath><g clip-path="url(#turban-clip)">` +
          figLine(o ? ink : s ? '#FFFFFF' : '#B0BEC5', 'M6.6 9.8 C10.6 7.4 17.4 4.6 25.4 5.4 M6.6 7.4 C11 5.2 17.6 3 25 2.4 M8.4 11.6 C12.4 9.6 18.4 7.6 25.6 8', 0.8) +
          '</g>',
      });
    },
  },

  // 36. Old Man (U+1F474)
  {
    id: 'old-man',
    char: '👴',
    name: 'Old Man',
    unicodeHex: 'U+1F474',
    category: 'faces-hands',
    tags: ['old man', 'grandpa', 'grandfather', 'elderly', 'senior', 'bald', 'wrinkles', '👴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="10" />
          <path d="M12 10 H20" />
          <path d="M13 12 H19" />
          <circle cx="12" cy="16" r="1" />
          <circle cx="20" cy="16" r="1" />
          <path d="M13 21 C14 20 18 20 19 21" />
          <!-- White hair on sides -->
          <path d="M6 16 C6 13 8 13 8 16" />
          <path d="M26 16 C26 13 24 13 24 16" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="10" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Forehead wrinkles -->
        <line x1="12" y1="9.5" x2="20" y2="9.5" stroke="#D97706" stroke-width="0.8" />
        <line x1="13" y1="11.5" x2="19" y2="11.5" stroke="#D97706" stroke-width="0.8" />
        <!-- Side white hair tufts -->
        <ellipse cx="6.5" cy="16" rx="1.5" ry="3" fill="#E2E8F0" />
        <ellipse cx="25.5" cy="16" rx="1.5" ry="3" fill="#E2E8F0" />
        <circle cx="12" cy="16" r="1" fill="#37474F" />
        <circle cx="20" cy="16" r="1" fill="#37474F" />
        <path d="M13 21 C14.5 22.5 17.5 22.5 19 21" stroke="#37474F" stroke-width="1.4" fill="none" />
      </g>`;
    },
  },

  // 37. Old Woman (U+1F475)
  {
    id: 'old-woman',
    char: '👵',
    name: 'Old Woman',
    unicodeHex: 'U+1F475',
    category: 'faces-hands',
    tags: ['old woman', 'grandma', 'grandmother', 'elderly', 'senior', 'grey hair', 'bun', '👵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#CBD5E1', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="6" r="2.5" />
          <circle cx="16" cy="17" r="9" />
          <circle cx="12.5" cy="17" r="1" />
          <circle cx="19.5" cy="17" r="1" />
          <path d="M13.5 22 C14.5 23 17.5 23 18.5 22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Grey hair bun on top -->
        <circle cx="16" cy="6.5" r="3" fill="${opts.style === 'duotone' ? c.secondary : '#CBD5E1'}" />
        <circle cx="16" cy="17" r="9" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Parted grey hair -->
        <path d="M7 16 C8 9 12 7 16 7 C20 7 24 9 25 16 C22 12 19 12 16 12 C13 12 10 12 7 16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#CBD5E1'}" />
        <circle cx="12.5" cy="17" r="1" fill="#37474F" />
        <circle cx="19.5" cy="17" r="1" fill="#37474F" />
        <path d="M13.5 22 C14.5 23 17.5 23 18.5 22" stroke="#37474F" stroke-width="1.4" fill="none" />
      </g>`;
    },
  },

  // 38. Baby (U+1F476)
  {
    id: 'baby',
    char: '👶',
    name: 'Baby',
    unicodeHex: 'U+1F476',
    category: 'faces-hands',
    tags: ['baby', 'infant', 'child', 'toddler', 'cute', 'newborn', 'curl', 'pacifier', '👶'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17.8, 9.4, 9.2),
        { d: 'M15 8.6 C12.6 6.8 13.6 3.8 16.4 4.2 C18.4 4.5 18.8 6.6 17.2 7.4 C16.6 6.4 15.4 6.2 15 7.2 C15.4 7.8 16.4 8.4 17.6 8.8 C16.6 9.2 15.8 9.2 15 8.6 Z', kind: 'hair' },
      ];
      return renderHead(opts, layers, (ink, o, s) =>
        headEyes(ink, [[12.2, 18.6], [19.8, 18.6]], 1.4) +
        (o || s ? '' : '<circle cx="11.7" cy="18.1" r="0.5" fill="#FFFFFF" /><circle cx="19.3" cy="18.1" r="0.5" fill="#FFFFFF" />') +
        headCheeks(o, s, 22, 7) + headLine(ink, 'M14.8 23 C15.6 24 16.4 24 17.2 23', 1.2), 'baby', '#8D5A2B');
    },
  },

  // 39. Construction Worker (U+1F477)
  {
    id: 'construction-worker',
    char: '👷',
    name: 'Construction Worker',
    unicodeHex: 'U+1F477',
    category: 'faces-hands',
    tags: ['construction worker', 'hard hat', 'helmet', 'builder', 'worker', 'laborer', 'job', '👷'],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'worker',
        layers: [
          ...figBase('#FF7043'),
          { d: 'M10.6 22.8 H12.8 V32 H10.6 Z', fill: '#FFF59D' },
          { d: 'M19.2 22.8 H21.4 V32 H19.2 Z', fill: '#FFF59D' },
          { d: 'M8.8 10.2 C8.8 2.8 23.2 2.8 23.2 10.2 Z', fill: '#FFC107', stroke: '#F57F17' },
          { d: 'M7.4 10.2 H24.6 V11.8 H7.4 Z', fill: '#FFC107', stroke: '#F57F17' },
          { d: 'M14.6 3.6 H17.4 V10.2 H14.6 Z', fill: '#FFE082' },
        ],
        features: (ink) => faceFeatures(ink),
      });
    },
  },

  // 40. Princess (U+1F478)
  {
    id: 'princess',
    char: '👸',
    name: 'Princess',
    unicodeHex: 'U+1F478',
    category: 'faces-hands',
    tags: ['princess', 'royalty', 'crown', 'tiara', 'fairy tale', 'queen', 'blonde', 'royal', '👸'],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'princess',
        layers: [
          { d: LONG_HAIR_BACK, fill: '#C68642' },
          ...figBase('#F06292', undefined, false),
          { d: FRINGE, fill: '#C68642' },
          { d: 'M10.4 6.2 L11.2 1.4 L13.8 3.8 L16 0.6 L18.2 3.8 L20.8 1.4 L21.6 6.2 Z', fill: '#FFD54F', stroke: '#F9A825' },
          { d: figEllipse(16, 4.4, 0.9, 0.9), fill: '#E53935' },
        ],
        features: (ink, o, s) => faceFeatures(ink, lipCol(o, s, ink)),
      });
    },
  },

  // 41. Man Dancing (U+1F57A)
  {
    id: 'man-dancing',
    char: '🕺',
    name: 'Man Dancing',
    unicodeHex: 'U+1F57A',
    category: 'faces-hands',
    tags: ['man dancing', 'dancer', 'dance', 'disco', 'party', 'club', 'groove', 'music', 'guy', '🕺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#EC4899', stroke: '#5B21B6' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const skin = o ? 'none' : (d ? c.secondary : '#FBBF24');
      const shirt = o ? 'none' : c.primary;
      const pants = o ? 'none' : (d ? c.secondary : '#7C3AED');

      return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Head -->
        <circle cx="16" cy="5" r="2.8" fill="${skin}" stroke-width="${thin}" />
        <!-- Disco pose arms -->
        <!-- Right arm pointing high up-right -->
        <path d="M17 9 L23 6 L27 3" fill="none" />
        <!-- Left arm bent downward to hip -->
        <path d="M15 9 L10 11 L7 16" fill="none" />
        <!-- Torso with open collar disco shirt -->
        <path d="M13 8.5 H19 L20 16 H12 Z" fill="${shirt}" />
        <!-- V-neck chest opening -->
        <path d="M14.5 8.5 L16 12 L17.5 8.5" fill="${skin}" stroke-width="${thin * 0.8}" />
        <!-- Flared bell-bottom dancing legs -->
        <path d="M13.5 16 L10 27 H7 L9.5 16" fill="${pants}" />
        <path d="M18.5 16 L22 27 H25 L21 16" fill="${pants}" />
        <!-- Dancing shoes -->
        <path d="M6 28 H10.5" stroke-width="${sw * 1.2}" />
        <path d="M21.5 28 H26" stroke-width="${sw * 1.2}" />
      </g>`;
    },
  },

  // 42. Person in Suit Levitating (U+1F574)
  {
    id: 'person-in-suit-levitating',
    char: '🕴️',
    name: 'Person in Suit Levitating',
    unicodeHex: 'U+1F574',
    category: 'faces-hands',
    tags: ['person in suit levitating', 'levitating', 'suit', 'floating', 'ska', '2 tone', 'walt jabsco', 'businessman', 'magic', '🕴️', '🕴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const suit = o ? 'none' : c.primary;
      const shirt = o ? 'none' : '#F8FAFC';
      const shadow = o ? 'none' : (d ? c.secondary : '#64748B');

      return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Floating shadow on floor beneath levitating feet -->
        <ellipse cx="16" cy="29" rx="6.5" ry="1.5" fill="${shadow}" stroke="${o ? c.stroke : 'none'}" opacity="${o ? 1 : 0.45}" />
        <!-- Black fedora hat -->
        <path d="M10 6.5 H22" stroke-width="${sw * 1.2}" />
        <path d="M12 6.5 V3 C12 2.5 13.5 2 16 2 C18.5 2 20 2.5 20 3 V6.5 Z" fill="${suit}" />
        <!-- Face with dark sunglasses -->
        <circle cx="16" cy="7.8" r="2.2" fill="${o ? 'none' : (d ? c.secondary : '#FBBF24')}" stroke-width="${thin}" />
        <rect x="14" y="7.2" width="4" height="1.2" rx="0.5" fill="${c.stroke}" stroke="none" />
        <!-- Suit jacket & white shirt with tie -->
        <path d="M11.5 10 H20.5 L21.5 17 H10.5 Z" fill="${suit}" />
        <polygon points="14.5,10 16,14 17.5,10" fill="${shirt}" stroke="none" />
        <line x1="16" y1="11" x2="16" y2="15.5" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Levitating arms slightly out at sides -->
        <path d="M11 10 L8 14 L8.5 16.5" fill="none" />
        <path d="M21 10 L24 14 L23.5 16.5" fill="none" />
        <!-- Levitating legs with feet pointed down -->
        <path d="M13 17 L12.5 24 L14 26" fill="none" />
        <path d="M19 17 L19.5 24 L18 26" fill="none" />
      </g>`;
    },
  },

  // 43. Detective (U+1F575)
  {
    id: 'detective',
    char: '🕵️',
    name: 'Detective',
    unicodeHex: 'U+1F575',
    category: 'faces-hands',
    tags: ['detective', 'sleuth', 'spy', 'investigator', 'inspector', 'magnifying glass', 'agent', 'mystery', 'trench coat', '🕵️', '🕵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#0284C7', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const coat = o ? 'none' : c.primary;
      const glass = o ? 'none' : (d ? c.secondary : '#38BDF8');

      return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Trench coat bust with popped collar -->
        <path d="M8 28 C8 21 11 16 16 16 C21 16 24 21 24 28 Z" fill="${coat}" />
        <!-- Coat lapels -->
        <path d="M12 16 L14 21 L16 17 L18 21 L20 16" fill="none" stroke-width="${thin}" />
        <line x1="16" y1="18" x2="16" y2="28" stroke-width="${thin}" />
        <!-- Face partially in shadow -->
        <circle cx="16" cy="11.5" r="4.2" fill="${o ? 'none' : '#FBBF24'}" stroke-width="${thin}" />
        <!-- Shaded mystery eyes -->
        <rect x="13.5" y="11" width="5" height="1.6" rx="0.8" fill="${c.stroke}" stroke="none" />
        <!-- Classic fedora hat with wide curled brim -->
        <path d="M6 10 C8 8.5 16 8 26 10" fill="none" stroke-width="${sw * 1.2}" />
        <path d="M10.5 9 C11 4.5 13 3 16 3 C19 3 21 4.5 21.5 9 Z" fill="${o ? 'none' : (d ? c.secondary : '#B45309')}" />
        <!-- Hat band -->
        <path d="M10.8 8 H21.2" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Magnifying glass inspecting clues -->
        <circle cx="23" cy="19" r="4" fill="${glass}" opacity="${o ? 1 : 0.8}" stroke-width="${sw}" />
        <line x1="26" y1="22" x2="29" y2="26" stroke-width="${sw * 1.3}" />
        <line x1="21.5" y1="17.5" x2="23" y2="17.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
      </g>`;
    },
  },

  // 44. Person Gesturing NO (U+1F645)
  {
    id: 'person-gesturing-no',
    char: '🙅',
    name: 'Person Gesturing NO',
    unicodeHex: 'U+1F645',
    category: 'faces-hands',
    tags: ['person gesturing no', 'no', 'gesture', 'forbidden', 'prohibited', 'crossed arms', 'stop', 'reject', 'deny', 'x', '🙅'],
    renderContent: (opts) => {
      // Arms crossed in an X in front of the chest, hands flaring out past the shoulders
      const f = (n: number) => +n.toFixed(2);
      const quad = (x0: number, y0: number, x1: number, y1: number, w: number) => {
        const dx = x1 - x0;
        const dy = y1 - y0;
        const len = Math.hypot(dx, dy) || 1;
        const nx = (-dy / len) * (w / 2);
        const ny = (dx / len) * (w / 2);
        return `M${f(x0 + nx)} ${f(y0 + ny)} L${f(x1 + nx)} ${f(y1 + ny)} L${f(x1 - nx)} ${f(y1 - ny)} L${f(x0 - nx)} ${f(y0 - ny)} Z`;
      };
      const palm = (cx: number, cy: number, deg: number) => {
        const a = (deg * Math.PI) / 180;
        const rx = 3.2;
        const ry = 1.9;
        const p0 = `${f(cx - rx * Math.cos(a))} ${f(cy - rx * Math.sin(a))}`;
        const p1 = `${f(cx + rx * Math.cos(a))} ${f(cy + rx * Math.sin(a))}`;
        return `M${p0} A${rx} ${ry} ${deg} 1 0 ${p1} A${rx} ${ry} ${deg} 1 0 ${p0} Z`;
      };
      const base = figBase('#FB8C00', '#E65100');
      const layers: FigLayer[] = [
        base[0],
        base[1],
        { d: quad(25, 32, 5.6, 13.6, 4), fill: '#FB8C00', stroke: '#E65100' },
        { d: quad(7, 32, 26.4, 13.6, 4), fill: '#FB8C00', stroke: '#E65100' },
        { d: palm(4.2, 12, 45), fill: '', skin: true },
        { d: palm(27.8, 12, -45), fill: '', skin: true },
        base[2],
        base[3],
        base[4],
        { d: SWEPT_HAIR, fill: '#78350F' },
      ];
      return renderFigure(opts, {
        id: 'no',
        layers,
        features: (ink) =>
          figDots(ink, [[13.4, 13.6], [18.6, 13.6]]) + figLine(ink, 'M14.4 17.2 C15.2 17.8 16.8 17.8 17.6 17.2', 1.1),
      });
    },
  },

  // 45. Person Gesturing OK (U+1F646)
  {
    id: 'person-gesturing-ok',
    char: '🙆',
    name: 'Person Gesturing OK',
    unicodeHex: 'U+1F646',
    category: 'faces-hands',
    tags: ['person gesturing ok', 'ok', 'gesture', 'circle', 'hands on head', 'agree', 'approve', 'yes', 'fine', '🙆'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M7 32 C7 26.6 10 24 16 24 C22 24 25 26.6 25 32 Z', kind: 'shirt' },
        { d: 'M9 27 C3.8 21.4 5 10.4 12.8 6.4', kind: 'shirt', w: 3.2 },
        { d: 'M23 27 C28.2 21.4 27 10.4 19.2 6.4', kind: 'shirt', w: 3.2 },
        { d: 'M12 5.6 C12 3.2 20 3.2 20 5.6 C20 7.8 12 7.8 12 5.6 Z', kind: 'skin' },
        { d: personEllipse(16, 17.6, 5.3, 5.6), kind: 'skin' },
        { d: personHair(16, 17.6, 5.3, 5.6), kind: 'hair' },
      ];
      return renderPerson(opts, layers, (ink, mouth) =>
        personLine(ink, 'M11.8 18.2 C12.2 16.8 14 16.8 14.4 18.2 M17.6 18.2 C18 16.8 19.8 16.8 20.2 18.2', 1.2) +
        `<path d="M13.4 20.2 C14 23.2 18 23.2 18.6 20.2 Z" fill="${mouth}" stroke="${ink}" stroke-width="0.9" />` +
        personLine(ink, 'M14.2 5.2 H17.8', 0.9), 'ok');
    },
  },

  // 46. Person Bowing (U+1F647)
  {
    id: 'person-bowing',
    char: '🙇',
    name: 'Person Bowing',
    unicodeHex: 'U+1F647',
    category: 'faces-hands',
    tags: ['person bowing', 'bow', 'apology', 'sorry', 'respect', 'gratitude', 'dogeza', 'humble', 'bowing', '🙇'],
    renderContent: (opts) => {
      // Front view: person bowing low, head tipped forward, hands flat on the floor
      const layers: PersonLayer[] = [
        { d: 'M6.6 5 L9.6 7.6', kind: 'mark', w: 1.8 },
        { d: 'M16 2.2 V5.6', kind: 'mark', w: 1.8 },
        { d: 'M25.4 5 L22.4 7.6', kind: 'mark', w: 1.8 },
        { d: 'M2.8 27.4 C2.8 17.4 8.4 12 16 12 C23.6 12 29.2 17.4 29.2 27.4 Z', kind: 'shirt' },
        { d: 'M6.4 19 C4.8 22.6 6.2 26 9.4 27.6', kind: 'shirt', w: 3.4 },
        { d: 'M25.6 19 C27.2 22.6 25.8 26 22.6 27.6', kind: 'shirt', w: 3.4 },
        { d: 'M6.8 28.4 C7.4 26.8 11.4 26.8 13.4 28.2 C13.8 29.4 12.4 30.2 10 30.2 C8 30.2 6.6 29.6 6.8 28.4 Z', kind: 'skin' },
        { d: 'M25.2 28.4 C24.6 26.8 20.6 26.8 18.6 28.2 C18.2 29.4 19.6 30.2 22 30.2 C24 30.2 25.4 29.6 25.2 28.4 Z', kind: 'skin' },
        { d: personEllipse(16, 18.4, 6.4, 6.6), kind: 'skin' },
        { d: personHair(16, 18.4, 6.4, 6.6), kind: 'hair' },
      ];
      return renderPerson(opts, layers, (ink) =>
        personEyes(ink, [[13.1, 19.4], [18.9, 19.4]], 0.85) +
        personLine(ink, 'M14.2 22.6 C15.2 23.4 16.8 23.4 17.8 22.6', 1), 'bow');
    },
  },

  // 47. Person Raising Hand (U+1F64B)
  {
    id: 'person-raising-hand',
    char: '🙋',
    name: 'Person Raising Hand',
    unicodeHex: 'U+1F64B',
    category: 'faces-hands',
    tags: ['person raising hand', 'raising hand', 'hand', 'question', 'volunteer', 'student', 'answer', 'greeting', 'hello', '🙋'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M4.6 32 C4.6 24 8.6 20.6 14.4 20.6 C20.2 20.6 24 24 24 32 Z', kind: 'shirt' },
        { d: 'M19.6 24.6 C23.2 22.6 25.6 16.4 25 9', kind: 'shirt', w: 3.8 },
        { d: 'M22.6 8.6 V4 C22.6 2.4 27.6 2.4 27.6 4 V8.6 C27.6 10 22.6 10 22.6 8.6 Z', kind: 'skin' },
        { d: personEllipse(14.4, 12.4, 5.6, 5.8), kind: 'skin' },
        { d: personHair(14.4, 12.4, 5.6, 5.8), kind: 'hair' },
      ];
      return renderPerson(opts, layers, (ink, mouth) =>
        personEyes(ink, [[12, 12.8], [16.8, 12.8]]) +
        `<path d="M11.8 15.2 C12.4 17.8 16.4 17.8 17 15.2 Z" fill="${mouth}" stroke="${ink}" stroke-width="0.9" />` +
        personLine(ink, 'M24.3 3.6 V6 M25.9 3.6 V6', 0.8), 'hand');
    },
  },

  // 48. Person Frowning (U+1F64D)
  {
    id: 'person-frowning',
    char: '🙍',
    name: 'Person Frowning',
    unicodeHex: 'U+1F64D',
    category: 'faces-hands',
    tags: ['person frowning', 'frown', 'sad', 'disappointed', 'unhappy', 'sorrow', 'downcast', 'frowning', '🙍'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M13.4 17.6 H18.6 V22 H13.4 Z', kind: 'skin' },
        { d: 'M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z', kind: 'shirt' },
        { d: personEllipse(16, 12.6, 6.4, 6.8), kind: 'skin' },
        { d: personHair(16, 12.6, 6.4, 6.8), kind: 'hair' },
      ];
      return renderPerson(opts, layers, (ink, mouth) =>
        personLine(ink, 'M11.2 11.6 L14.4 10.4 M20.8 11.6 L17.6 10.4', 1.2) +
        personEyes(ink, [[13.2, 13.6], [18.8, 13.6]]) +
        personLine(ink, 'M13.4 17.4 C14.6 16 17.4 16 18.6 17.4', 1.3), 'bust');
    },
  },

  // 49. Person Pouting (U+1F64E)
  {
    id: 'person-pouting',
    char: '🙎',
    name: 'Person Pouting',
    unicodeHex: 'U+1F64E',
    category: 'faces-hands',
    tags: ['person pouting', 'pout', 'sulking', 'mad', 'huff', 'stubborn', 'displeased', 'moody', 'pouting', '🙎'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M13.4 17.6 H18.6 V22 H13.4 Z', kind: 'skin' },
        { d: 'M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z', kind: 'shirt' },
        { d: personEllipse(16, 12.6, 6.4, 6.8), kind: 'skin' },
        { d: personHair(16, 12.6, 6.4, 6.8), kind: 'hair' },
      ];
      return renderPerson(opts, layers, (ink, mouth) =>
        personLine(ink, 'M11 10.4 L14.8 12 M21 10.4 L17.2 12', 1.2) +
        personEyes(ink, [[13.2, 14], [18.8, 14]]) +
        `<ellipse cx="16" cy="17.2" rx="1.6" ry="1.1" fill="${mouth}" stroke="${ink}" stroke-width="0.8" />` + `<circle cx="11.4" cy="16.2" r="1.3" fill="${ink === '#FFFFFF' ? 'none' : ink === '#37474F' ? '#F87171' : 'none'}" stroke="none" opacity="0.6" /><circle cx="20.6" cy="16.2" r="1.3" fill="${ink === '#FFFFFF' ? 'none' : ink === '#37474F' ? '#F87171' : 'none'}" stroke="none" opacity="0.6" />`, 'bust');
    },
  },

  // 50. Pregnant Woman (U+1F930)
  {
    id: 'pregnant-woman',
    char: '🤰',
    name: 'Pregnant Woman',
    unicodeHex: 'U+1F930',
    category: 'faces-hands',
    tags: [
      'pregnant woman',
      'pregnant',
      'pregnancy',
      'baby bump',
      'maternity',
      'mother',
      'mom',
      'expecting',
      'woman',
      '🤰',
    ],
    renderContent: (opts) => {
      // Brown bob haircut, purple top, round bump with one hand on top and one underneath
      const top = '#8E24AA';
      const layers: PersonLayer[] = [
        { d: 'M10.2 10.6 C9.8 5.8 12.4 3.8 16 3.8 C19.6 3.8 22.2 5.8 21.8 10.6 C21.8 13 22.4 14.8 23.6 16 L8.4 16 C9.6 14.8 10.2 13 10.2 10.6 Z', kind: 'hair' },
        { d: 'M13.4 14.6 H18.6 V20.4 H13.4 Z', kind: 'skin' },
        { d: 'M6.6 36 C5.8 25.4 9.4 19.6 16 19.6 C22.6 19.6 26.2 25.4 25.4 36 Z', kind: 'shirt', fill: top },
        // Soft bust line under the chest, then a rounder bump that sticks out in front
        { d: 'M10.4 23.2 C13.2 25.4 18.8 25.4 21.6 23.2', kind: 'mark', w: 0.7, fill: '#6A1B9A' },
        { d: personEllipse(18.4, 28, 7.8, 6.6), kind: 'shirt', fill: top },
        { d: 'M12.6 24.6 C14.4 23.8 17 23.6 19.4 24', kind: 'mark', w: 0.6, fill: '#AB47BC' },
        tube('shirt', [[9.4, 22.8], [8.4, 27.6], [13.4, 30.6]], 3.6, top),
        hand([15.2, 30.6], 1.8),
        tube('shirt', [[23, 22.8], [25.2, 25.4], [21.2, 24.4]], 3.4, top),
        hand([19.2, 24.2], 1.9),
        { d: personEllipse(16, 10, 5.4, 5.8), kind: 'skin' },
        { d: personHair(16, 10, 5.4, 5.8), kind: 'hair' },
      ];
      const svg = renderPerson(
        opts,
        layers,
        (ink, mouthFill) => faceAt(ink, 16, 10.2, 0, 1.5) + '',
        'pregnant',
      );
      // Scale the figure down a little so more of the bump shows
      const i = svg.indexOf('<g stroke-linecap');
      return `${svg.slice(0, i)}<g transform="translate(1.6 1.2) scale(0.9)">${svg.slice(i)}</g>`;
    },
  },

  // 51. Breastfeeding (U+1F931)
  {
    id: 'breastfeeding',
    char: '🤱',
    name: 'Breastfeeding',
    unicodeHex: 'U+1F931',
    category: 'faces-hands',
    tags: [
      'breastfeeding',
      'nursing',
      'baby',
      'infant',
      'mother',
      'mom',
      'newborn',
      'feeding',
      'lactation',
      'woman',
      '🤱',
    ],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'breastfeeding',
        layers: [
          { d: LONG_HAIR_BACK, fill: '#78350F' },
          { d: 'M13.6 17.6 H18.4 V22 H13.6 Z', fill: '', skin: true },
          { d: 'M4.8 32 C4.8 24.4 9.8 20.8 16 20.8 C22.2 20.8 27.2 24.4 27.2 32 Z', fill: '#EC407A', stroke: '#AD1457' },
          { d: figEllipse(16, 12.2, 6.2, 6.6), fill: '', skin: true },
          { d: FRINGE, fill: '#78350F' },
          // Swaddled infant blanket resting on mother's chest
          {
            d: 'M10 25.5 C9 23 11 21 15 22.5 C19 24 23 26 23.5 29 C24 32 18 32.5 13 31 C10 30 9.5 27 10 25.5 Z',
            fill: '#90CAF9',
            stroke: '#1E88E5',
          },
          // Baby head nestled against mom
          { d: figEllipse(12.5, 23.2, 2.3, 2.3), fill: '', skin: true },
          // Mother's hand supporting baby
          { d: figEllipse(18.5, 27.5, 2.2, 1.4), fill: '', skin: true },
        ],
        features: (ink, o, s) =>
          // Mother's face looking downward with gentle warmth
          figDots(ink, [[13.4, 14], [18.6, 14]], 0.9) +
          figLine(lipCol(o, s, ink), 'M14.4 17.2 C15.2 18.2 16.8 18.2 17.6 17.2', 1.4) +
          // Baby's peaceful sleeping eye
          figLine(ink, 'M11.6 23.2 C12.2 23.9 13.2 23.9 13.8 23.2', 0.8) +
          // Swaddle blanket fold
          `<path d="M13 25.5 C16 27 19 28 22 28.5" fill="none" stroke="${o ? ink : '#1976D2'}" stroke-width="0.8" />`,
      });
    },
  },

  // 52. Prince (U+1F934)
  {
    id: 'prince',
    char: '🤴',
    name: 'Prince',
    unicodeHex: 'U+1F934',
    category: 'faces-hands',
    tags: ['prince', 'royalty', 'crown', 'tiara', 'royal', 'noble', 'boy', 'man', 'king', '🤴'],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'prince',
        layers: [
          ...figBase('#1E88E5', '#1565C0', true),
          // Regal gold collar
          { d: 'M13.6 20.8 L16 25 L18.4 20.8 Z', fill: '#FFD54F', stroke: '#F9A825' },
          // Short hair
          { d: SHORT_HAIR, fill: '#78350F' },
          // Royal gold crown with jewels
          {
            d: 'M10.4 6.2 L11.2 1.4 L13.8 3.8 L16 0.6 L18.2 3.8 L20.8 1.4 L21.6 6.2 Z',
            fill: '#FFD54F',
            stroke: '#F9A825',
          },
          // Ruby jewel in crown center
          { d: figEllipse(16, 4.4, 0.9, 0.9), fill: '#E53935' },
        ],
        features: (ink) => faceFeatures(ink),
      });
    },
  },

  // 53. Person in Tuxedo (U+1F935)
  {
    id: 'person-in-tuxedo',
    char: '🤵',
    name: 'Person in Tuxedo',
    unicodeHex: 'U+1F935',
    category: 'faces-hands',
    tags: [
      'person in tuxedo',
      'man in tuxedo',
      'tuxedo',
      'groom',
      'formal',
      'suit',
      'black tie',
      'wedding',
      'elegant',
      '🤵',
    ],
    renderContent: (opts) => {
      return renderFigure(opts, {
        id: 'tuxedo',
        layers: [
          ...figBase('#1E293B', '#0F172A'),
          // Crisp white dress shirt V-triangle
          { d: 'M13.2 20.8 L16 27.5 L18.8 20.8 Z', fill: '#FFFFFF', stroke: '#CBD5E1' },
          // Tuxedo satin lapels
          { d: 'M9.2 22 L14.5 28 L13 28.5 L8.2 22.5 Z', fill: '#0F172A' },
          { d: 'M22.8 22 L17.5 28 L19 28.5 L23.8 22.5 Z', fill: '#0F172A' },
          // Classic black bow tie
          { d: 'M14 21.2 L16 22.2 L14 23.2 Z', fill: '#0F172A' },
          { d: 'M18 21.2 L16 22.2 L18 23.2 Z', fill: '#0F172A' },
          { d: figEllipse(16, 22.2, 0.6, 0.6), fill: '#0F172A' },
          // Swept hair
          { d: SWEPT_HAIR, fill: '#78350F' },
        ],
        features: (ink) => faceFeatures(ink),
      });
    },
  },

  // 54. Mrs. Claus (U+1F936)
  {
    id: 'mrs-claus',
    char: '🤶',
    name: 'Mrs. Claus',
    unicodeHex: 'U+1F936',
    category: 'faces-hands',
    tags: [
      'mrs claus',
      'mrs. claus',
      'mother christmas',
      'christmas',
      'santa',
      'holiday',
      'winter',
      'grandma',
      'elderly',
      'glasses',
      'hat',
      '🤶',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#CBD5E1', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const stroke = o ? c.stroke : '#DC2626';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Grey hair bun at top -->
          <circle cx="16" cy="5" r="2.8" />
          <!-- Santa hat -->
          <path d="M8 10 C9 4 13 2 17 2 C21 2 26 4 26 8 L25 10 H8 Z" />
          <!-- Hat trim & pompom -->
          <rect x="7" y="9" width="18" height="3" rx="1.5" />
          <circle cx="26" cy="11" r="2.2" />
          <!-- Face -->
          <ellipse cx="16" cy="16.5" rx="6.5" ry="6.2" />
          <!-- Round spectacles -->
          <circle cx="13" cy="15.8" r="1.8" />
          <circle cx="19" cy="15.8" r="1.8" />
          <line x1="14.8" y1="15.8" x2="17.2" y2="15.8" />
          <circle cx="13" cy="15.8" r="0.7" fill="${c.stroke}" />
          <circle cx="19" cy="15.8" r="0.7" fill="${c.stroke}" />
          <!-- Smile -->
          <path d="M13.6 20 C14.6 21.2 17.4 21.2 18.4 20" />
          <!-- Shoulders -->
          <path d="M8 32 C8 26.5 12 24.5 16 24.5 C20 24.5 24 26.5 24 32 Z" />
        </g>`;
      }

      const hatRed = opts.style === 'silhouette' ? c.primary : c.primary;
      const trimWhite = opts.style === 'silhouette' ? c.primary : (d ? c.secondary : '#FFFFFF');
      const hairGrey = opts.style === 'silhouette' ? c.primary : (d ? c.secondary : '#CBD5E1');
      const skinFace = opts.style === 'silhouette' ? c.primary : (d ? c.secondary : '#FFCA28');

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Red holiday gown shoulders -->
        <path d="M8 32 C8 26 11.5 24 16 24 C20.5 24 24 26 24 32 Z" fill="${hatRed}" stroke="${stroke}" stroke-width="0.8" />
        <path d="M13.8 24 L16 27 L18.2 24 Z" fill="${trimWhite}" />
        <!-- Grey hair bun peeking at top behind hat -->
        <circle cx="16" cy="4.8" r="2.8" fill="${hairGrey}" />
        <!-- Red Santa Hat -->
        <path d="M8 10 C9 4 13 2 17 2 C21 2 26 4 26 8 L25 10 H8 Z" fill="${hatRed}" stroke="${stroke}" stroke-width="0.8" />
        <!-- Hat Fluffy White Trim -->
        <rect x="7" y="9" width="18" height="3" rx="1.5" fill="${trimWhite}" stroke="#E2E8F0" stroke-width="0.6" />
        <!-- Pompom Ball -->
        <circle cx="26" cy="11" r="2.2" fill="${trimWhite}" stroke="#E2E8F0" stroke-width="0.6" />
        <!-- Cheerful Grandmother Face -->
        <ellipse cx="16" cy="16.5" rx="6.5" ry="6.2" fill="${skinFace}" stroke="#FFA000" stroke-width="0.8" />
        <!-- Soft grey curls framing cheeks -->
        <path d="M9.8 11.2 C9 15 9.5 19 11.2 21 M22.2 11.2 C23 15 22.5 19 20.8 21" fill="none" stroke="${hairGrey}" stroke-width="2" />
        <!-- Rosy Cheeks -->
        <circle cx="11.5" cy="17.8" r="1.4" fill="#F472B6" opacity="0.65" />
        <circle cx="20.5" cy="17.8" r="1.4" fill="#F472B6" opacity="0.65" />
        <!-- Round wireframe spectacles -->
        <circle cx="13" cy="15.8" r="1.8" fill="none" stroke="#475569" stroke-width="0.75" />
        <circle cx="19" cy="15.8" r="1.8" fill="none" stroke="#475569" stroke-width="0.75" />
        <line x1="14.8" y1="15.8" x2="17.2" y2="15.8" stroke="#475569" stroke-width="0.75" />
        <!-- Friendly smiling eyes inside glasses -->
        <circle cx="13" cy="15.8" r="0.75" fill="#37474F" />
        <circle cx="19" cy="15.8" r="0.75" fill="#37474F" />
        <!-- Sweet grandmotherly smile -->
        <path d="M13.6 20 C14.6 21.2 17.4 21.2 18.4 20" fill="none" stroke="#E11D48" stroke-width="1.3" />
      </g>`;
    },
  },

  // 55. Person Shrugging (U+1F937)
  {
    id: 'person-shrugging',
    char: '🤷',
    name: 'Person Shrugging',
    unicodeHex: 'U+1F937',
    category: 'faces-hands',
    tags: [
      'person shrugging',
      'shrug',
      'doubt',
      'ignorance',
      'indifference',
      'dunno',
      'who knows',
      'whatever',
      'confused',
      '🤷',
    ],
    renderContent: (opts) => {
      // Upper body: raised shoulders, elbows out, open palms up
      const layers: PersonLayer[] = [
        tube('skin', [[4.6, 25.4], [3.8, 19.6]], 2.8),
        tube('shirt', [[9.2, 23], [4.8, 27.4]], 4),
        hand([3.7, 18], 2),
        tube('skin', [[27.4, 25.4], [28.2, 19.6]], 2.8),
        tube('shirt', [[22.8, 23], [27.2, 27.4]], 4),
        hand([28.3, 18], 2),
        { d: 'M5.6 32 C5.6 24.4 9.6 20.2 16 20.2 C22.4 20.2 26.4 24.4 26.4 32 Z', kind: 'shirt' },
        { d: 'M13.2 17.4 H18.8 V21.4 H13.2 Z', kind: 'skin' },
        ...headOf(16, 11.4, 5.8, 6.2),
      ];
      return renderPerson(
        opts,
        layers,
        (ink) =>
          faceAt(ink, 16, 11.8, 0, 1.6) +
          personLine(ink, 'M11 7.4 L14.2 6.6 M21 7.4 L17.8 6.6', 1.1) +
          personLine(ink, 'M2.6 14.8 V16.4 M3.8 14.4 V16.2 M5 14.8 V16.4', 0.7) +
          personLine(ink, 'M27 14.8 V16.4 M28.2 14.4 V16.2 M29.4 14.8 V16.4', 0.7),
        'shrug',
      );
    },
  },

  // 56. Person Cartwheeling (U+1F938)
  {
    id: 'person-cartwheeling',
    char: '🤸',
    name: 'Person Cartwheeling',
    unicodeHex: 'U+1F938',
    category: 'sports-travel',
    tags: [
      'person cartwheeling',
      'cartwheel',
      'gymnastics',
      'acrobatics',
      'flip',
      'sport',
      'gymnast',
      'athlete',
      'movement',
      '🤸',
    ],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Motion rotation guide arc
        { d: 'M4 14 C3 8 7 4 11 3', kind: 'mark', w: 1 },
        // Left arm planted on the floor
        { d: 'M12 18 L9.5 24', kind: 'shirt', w: 3.2 },
        { d: 'M9.5 24 L8 28.5', kind: 'skin', w: 2.8 },
        { d: 'M6 29.5 H10', kind: 'skin', w: 2 },
        // Right arm reaching toward floor
        { d: 'M17 17 L15.5 23.5', kind: 'shirt', w: 3.2 },
        { d: 'M15.5 23.5 L14.5 28.5', kind: 'skin', w: 2.8 },
        { d: 'M12.5 29.5 H16.5', kind: 'skin', w: 2 },
        // Angled orange shirt torso
        { d: 'M11 19.5 L18 18.5 L21.5 12.5 L15 13 Z', kind: 'shirt' },
        // Left leg in split (back leg)
        { d: 'M15.5 13 L10 8 L5 6.5', kind: 'pants', w: 3.4 },
        { d: 'M5 6.5 L3.5 6 C3.2 6.5 4 8 5.5 7.5 Z', kind: 'skin' },
        // Right leg in split (front leg)
        { d: 'M21 12 L25 8 L28.5 5', kind: 'pants', w: 3.4 },
        { d: 'M28.5 5 L30 4.5 C30.6 5.5 29.5 7 28 6.5 Z', kind: 'skin' },
        // Inverted / tilted head
        { d: personEllipse(10.5, 14, 4.8, 5.2), kind: 'skin' },
        { d: personHair(10.5, 14, 4.8, 5.2), kind: 'hair' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink) =>
          // Cheerful cartwheel face
          personEyes(ink, [[9, 14.5], [12.5, 14]], 0.85) +
          personLine(ink, 'M9 16 C10.5 17.5 12.5 17 13.5 15.5', 1.1),
        'cartwheel',
      );
    },
  },

  // 57. Person Juggling (U+1F939)
  {
    id: 'person-juggling',
    char: '🤹',
    name: 'Person Juggling',
    unicodeHex: 'U+1F939',
    category: 'sports-travel',
    tags: [
      'person juggling',
      'juggler',
      'juggling',
      'balls',
      'circus',
      'balance',
      'multitask',
      'performer',
      'skill',
      'entertainment',
      '🤹',
    ],
    renderContent: (opts) => {
      // Upper body juggling three balls
      const layers: PersonLayer[] = [
        { d: 'M5.4 20 C4.6 4 11 1.6 16 1.6 C21 1.6 27.4 4 26.6 20', kind: 'mark', w: 0.9 },
        tube('skin', [[6.4, 28], [5.6, 22.4]], 2.8),
        tube('shirt', [[10, 25], [6.8, 29]], 4),
        hand([5.4, 20.8], 1.9),
        tube('skin', [[25.6, 28], [26.4, 22.4]], 2.8),
        tube('shirt', [[22, 25], [25.2, 29]], 4),
        hand([26.6, 20.8], 1.9),
        { d: 'M6.4 32 C6.4 25.6 10 22 16 22 C22 22 25.6 25.6 25.6 32 Z', kind: 'shirt' },
        ...headOf(16, 14.4, 5.2, 5.6),
        { d: personCircle(6, 11, 2.3), kind: 'item', fill: '#EF4444' },
        { d: personCircle(16, 3.8, 2.3), kind: 'item', fill: '#3B82F6' },
        { d: personCircle(26, 11, 2.3), kind: 'item', fill: '#10B981' },
      ];
      return renderPerson(opts, layers, (ink) => faceAt(ink, 16, 14.8, 0, 1.5), 'juggling');
    },
  },

  // 58. Person Fencing (U+1F93A)
  {
    id: 'person-fencing',
    char: '🤺',
    name: 'Person Fencing',
    unicodeHex: 'U+1F93A',
    category: 'sports-travel',
    tags: [
      'person fencing',
      'fencer',
      'fencing',
      'sword',
      'foil',
      'epee',
      'sabre',
      'sport',
      'duel',
      'athlete',
      'olympics',
      '🤺',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const stroke = o ? c.stroke : '#334155';
      const suit = o ? 'none' : s ? c.primary : d ? c.primary : '#F8FAFC';
      const maskFill = o ? 'none' : s ? c.primary : d ? c.secondary : '#334155';
      const bibFill = o ? 'none' : s ? c.primary : d ? c.primary : '#FFFFFF';
      const bladeCol = o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : '#94A3B8';
      const guardCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#CBD5E1';
      const skinCol = o ? 'none' : s ? c.primary : d ? c.secondary : '#FFCA28';

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Floor piste guide line -->
        <path d="M2 29.5 H30" fill="none" stroke="${o ? c.stroke : '#E2E8F0'}" stroke-width="${Math.max(1, sw * 0.6)}" />
        <!-- Trailing back arm raised gracefully in en garde -->
        <path d="M19 14.5 C22.5 13.5 24 10 23.5 7" fill="none" stroke="${stroke}" stroke-width="${Math.max(2.2, sw)}" />
        <path d="M19 14.5 C22.5 13.5 24 10 23.5 7" fill="none" stroke="${suit}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        <circle cx="23.5" cy="6.2" r="1.1" fill="${skinCol}" stroke="${stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" />
        <!-- Trailing back leg extended in lunge -->
        <path d="M18.5 21 L22.5 25 L26.5 29" fill="none" stroke="${stroke}" stroke-width="${Math.max(3.2, sw * 1.2)}" />
        <path d="M18.5 21 L22.5 25 L26.5 29" fill="none" stroke="${suit}" stroke-width="${Math.max(2.2, sw * 0.8)}" />
        <path d="M25 29.5 H28.5" stroke-width="${Math.max(1.5, sw * 0.7)}" />
        <!-- Lead front leg bent in deep lunge -->
        <path d="M15 21 L11.5 24.5 L8.5 29" fill="none" stroke="${stroke}" stroke-width="${Math.max(3.2, sw * 1.2)}" />
        <path d="M15 21 L11.5 24.5 L8.5 29" fill="none" stroke="${suit}" stroke-width="${Math.max(2.2, sw * 0.8)}" />
        <path d="M7 29.5 H10.5" stroke-width="${Math.max(1.5, sw * 0.7)}" />
        <!-- White fencing jacket torso -->
        <path d="M14 13.5 L20 13 L19.2 21.5 L14.5 21.5 Z" fill="${suit}" stroke="${stroke}" stroke-width="${Math.max(1, sw * 0.6)}" />
        <path d="M14 17.5 H19.5" fill="none" stroke="${o ? c.stroke : '#E2E8F0'}" stroke-width="${Math.max(0.8, sw * 0.5)}" />
        <!-- Lead sword arm extending forward holding foil -->
        <path d="M14 14.8 L8.5 14.8" fill="none" stroke="${stroke}" stroke-width="${Math.max(2.6, sw)}" />
        <path d="M14 14.8 L8.5 14.8" fill="none" stroke="${suit}" stroke-width="${Math.max(1.6, sw * 0.7)}" />
        <!-- Foil bell guard (coquille) -->
        <ellipse cx="7.5" cy="14.8" rx="1" ry="2.2" fill="${guardCol}" stroke="${stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" />
        <!-- Fencing foil blade pointing forward to the left -->
        <line x1="6.5" y1="14.8" x2="1" y2="14.8" fill="none" stroke="${bladeCol}" stroke-width="${Math.max(1.1, sw * 0.6)}" />
        <circle cx="1" cy="14.8" r="0.8" fill="${bladeCol}" stroke="${stroke}" stroke-width="${Math.max(0.6, sw * 0.4)}" />
        <!-- Protective fencing mask -->
        <ellipse cx="17" cy="9.5" rx="3.4" ry="4.2" fill="${maskFill}" stroke="${stroke}" stroke-width="${Math.max(1, sw * 0.6)}" />
        <!-- Canvas bib collar under mask -->
        <path d="M14.2 12 C15.4 13.8 18.6 13.8 19.8 12 Z" fill="${bibFill}" stroke="${stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" />
        <!-- Mask mesh grid lines -->
        ${o ? '' : `<line x1="17" y1="6" x2="17" y2="12.5" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="0.8 0.8" opacity="0.6" /><line x1="14.5" y1="9.5" x2="19.5" y2="9.5" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="0.8 0.8" opacity="0.6" />`}
      </g>`;
    },
  },

  // 59. People Wrestling (U+1F93C)
  {
    id: 'people-wrestling',
    char: '🤼',
    name: 'People Wrestling',
    unicodeHex: 'U+1F93C',
    category: 'sports-travel',
    tags: [
      'people wrestling',
      'wrestlers',
      'wrestling',
      'grappling',
      'clinch',
      'singlet',
      'sport',
      'match',
      'athlete',
      'olympics',
      'combat',
      '🤼',
    ],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...legOf([7.8, 20.6], [5.2, 24.8], [3.8, 29.2], -1),
        ...legOf([10.4, 20.6], [11.4, 25], [9.8, 29.2], 1),
        ...legOf([24.2, 20.6], [26.8, 24.8], [28.2, 29.2], 1),
        ...legOf([21.6, 20.6], [20.6, 25], [22.2, 29.2], -1),
        tube('shirt', [[11.4, 12.8], [8.8, 20.8]], 6.4, '#E53935'),
        tube('pants', [[20.6, 12.8], [23.2, 20.8]], 6.4, '#1E88E5'),
        tube('skin', [[12.4, 13.4], [15.8, 15.6], [20.4, 14]], 2.4),
        tube('skin', [[19.6, 14.2], [16.2, 17.2], [11.6, 15]], 2.4),
        ...headOf(12.6, 7.8, 3.5, 3.8),
        ...headOf(19.4, 7.8, 3.5, 3.8),
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return (
            personEyes(ink, [[11.4, 8.2], [13.6, 8.2]], 0.7) +
            personLine(ink, 'M11.8 10.2 H13.2', 0.8) +
            personEyes(ink, [[18.4, 8.2], [20.6, 8.2]], 0.7) +
            personLine(ink, 'M18.8 10.2 H20.2', 0.8)
          );
        },
        'wrestle',
      );
    },
  },
  // 60. Person Playing Water Polo (U+1F93D)
  {
    id: 'person-playing-water-polo',
    char: '🤽',
    name: 'Person Playing Water Polo',
    unicodeHex: 'U+1F93D',
    category: 'sports-travel',
    tags: ['person playing water polo', 'water polo', 'swim cap', 'pool', 'ball', 'throw', 'sport', 'athlete', 'swimming', 'team', '🤽'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        tube('shirt', [[13.8, 17.8], [13.4, 24]], 6.2),
        ...armOf([11, 17.8], [6.8, 20.4], [3.6, 19]),
        ...armOf([16.6, 17.8], [21.6, 14], [23.4, 8.6]),
        ...headOf(14, 12.2, 3.5, 3.8),
        { d: 'M10.2 12.4 C9.8 7.4 12 7.8 14 7.8 C16 7.8 18.2 7.4 17.8 12.4 C16.4 11.2 11.6 11.2 10.2 12.4 Z', kind: 'item', fill: '#1E88E5' },
        { d: personCircle(24.2, 5.6, 2.7), kind: 'item', fill: '#FDD835' },
        { d: 'M0 20.6 C4 18.8 8 22.4 12 20.6 S20 18.8 24 20.6 S29 22.4 32 20.6 V32 H0 Z', kind: 'item', fill: '#4FC3F7' },
        { d: 'M3 25.6 C6 24.2 9 27 12 25.6 M18 28 C21 26.6 24 29.4 27 28', kind: 'mark', w: 1.2, fill: '#E1F5FE' },
        { d: personCircle(29.4, 11.4, 0.8), kind: 'item', fill: '#4FC3F7' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 14, 12.2, 1) + personLine(ink, 'M22.6 4.4 C23.4 5.4 25 5.6 25.8 4.6 M24.2 3 V8.2', 0.5);
        },
        'polo',
      );
    }
  },

  // 61. Person Playing Handball (U+1F93E)
  {
    id: 'person-playing-handball',
    char: '🤾',
    name: 'Person Playing Handball',
    unicodeHex: 'U+1F93E',
    category: 'sports-travel',
    tags: ['person playing handball', 'handball', 'throw', 'jump', 'ball', 'team', 'sport', 'athlete', 'goal', '🤾'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...legOf([13.6, 19.8], [10.8, 24.8], [8.2, 29.2], -1),
        ...armOf([15.4, 12.2], [10.6, 10.8], [8.8, 6]),
        tube('shirt', [[15.8, 11.4], [14.4, 19.6]], 6.4),
        ...legOf([15.4, 19.8], [21, 20.8], [20.6, 26.6], 1),
        ...armOf([17.2, 12.2], [21.6, 13], [25.4, 10.8]),
        ...headOf(17.2, 6.4),
        { d: personCircle(8.4, 3.8, 2.6), kind: 'item', fill: '#42A5F5' },
        { d: 'M6.4 2.4 C7.6 3.4 7.6 4.6 6.6 5.6', kind: 'mark', w: 0.6, fill: '#FFFFFF' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s, d, c) => {
          return faceAt(ink, 17.2, 6.4, 1);
        },
        'handball',
      );
    }
  },

  // 62. Ninja (U+1F977)
  {
    id: 'ninja',
    char: '🥷',
    name: 'Ninja',
    unicodeHex: 'U+1F977',
    category: 'faces-hands',
    tags: [
      'ninja',
      'shinobi',
      'stealth',
      'fighter',
      'mask',
      'hood',
      'martial arts',
      'sword',
      'katana',
      'shadow',
      'warrior',
      'assassin',
      '🥷',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#1E293B',
        fillSecondary: '#FFCA28',
        stroke: '#0F172A',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Katana behind shoulder -->
          <path d="M21.5 17.5 L27 8.5" stroke-width="${Math.max(1.8, sw)}" />
          <path d="M19.6 16.4 L23.4 18.6" stroke-width="${Math.max(1.8, sw)}" />
          <circle cx="27" cy="8.5" r="1.1" stroke-width="${Math.max(1, sw * 0.75)}" />
          <!-- Headband trailing ribbons -->
          <path d="M9.6 9 C7.5 9.4 5.8 11.4 4.8 14.5 M9.6 9.8 C7.8 11.2 6.8 13.6 6.2 16.8" stroke-width="${Math.max(1.1, sw * 0.7)}" />
          <!-- Neck & Torso -->
          <path d="M13.4 17.6 H18.6 V22 H13.4 Z" />
          <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" />
          <path d="M11.5 20.8 L16 26.5 M20.5 20.8 L14.5 27.5" stroke-width="${Math.max(1, sw * 0.6)}" />
          <!-- Head base -->
          <path d="M9.6 12.6 A6.4 6.8 0 1 0 22.4 12.6 A6.4 6.8 0 1 0 9.6 12.6 Z" />
          <!-- Eye slit visor curves -->
          <path d="M9.6 11.2 C11.4 10.4 13.6 10 16 10 C18.4 10 20.6 10.4 22.4 11.2" stroke-width="${Math.max(1.1, sw * 0.7)}" />
          <path d="M9.6 14.4 C11.5 15.2 13.6 15.6 16 15.6 C18.4 15.6 20.5 15.2 22.4 14.4" stroke-width="${Math.max(1.1, sw * 0.7)}" />
          <!-- Forehead metal plate -->
          <rect x="13.2" y="6.6" width="5.6" height="2.6" rx="0.6" stroke-width="${Math.max(0.9, sw * 0.6)}" />
          <!-- Eyebrows -->
          <path d="M11.2 11.6 L14.4 10.4 M20.8 11.6 L17.6 10.4" stroke-width="${Math.max(1.2, sw * 0.75)}" />
          <!-- Eyes -->
          <circle cx="13.2" cy="13.6" r="0.9" fill="${c.stroke}" />
          <circle cx="18.8" cy="13.6" r="0.9" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Katana behind shoulder -->
          <path d="M21 18 L26.5 9 L27.7 9.8 L22.2 18.8 Z" />
          <path d="M19.4 16.2 L23.6 18.6" stroke="${c.primary}" stroke-width="2.2" stroke-linecap="round" />
          <circle cx="27" cy="8.5" r="1.3" />
          <!-- Trailing ribbons -->
          <path d="M9.6 9 C7.5 9.4 5.8 11.4 4.8 14.5 M9.6 9.8 C7.8 11.2 6.8 13.6 6.2 16.8" fill="none" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" />
          <!-- Neck & Torso -->
          <path d="M13.4 17.6 H18.6 V22 H13.4 Z" />
          <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" />
          <!-- Head shape -->
          <path d="M9.6 12.6 A6.4 6.8 0 1 0 22.4 12.6 A6.4 6.8 0 1 0 9.6 12.6 Z" />
          <!-- Visor eye slit cut-out -->
          <path d="M10.2 11.2 C11.8 10.4 13.8 10.2 16 10.2 C18.2 10.2 20.2 10.4 21.8 11.2 C22.4 12 22.4 13.8 21.8 14.6 C20.2 15.4 18.2 15.6 16 15.6 C13.8 15.6 11.8 15.4 10.2 14.6 C9.6 13.8 9.6 12 10.2 11.2 Z" fill="#FFFFFF" opacity="0.9" />
          <!-- Eyebrows inside slit -->
          <path d="M11.2 11.6 L14.4 10.4 M20.8 11.6 L17.6 10.4" fill="none" stroke="${c.primary}" stroke-width="1.3" stroke-linecap="round" />
          <!-- Eyes -->
          <circle cx="13.2" cy="13.6" r="0.9" fill="${c.primary}" />
          <circle cx="18.8" cy="13.6" r="0.9" fill="${c.primary}" />
          <!-- Forehead plate notch -->
          <rect x="13.4" y="6.8" width="5.2" height="2.2" rx="0.5" fill="#FFFFFF" opacity="0.3" />
        </g>`;
      }

      const suitFill = isDuotone ? c.primary : '#1E293B';
      const suitStroke = isDuotone ? c.stroke : '#0F172A';
      const skinFill = isDuotone ? c.secondary : '#FFCA28';
      const skinStroke = isDuotone ? c.stroke : '#FFA000';
      const headbandFill = isDuotone ? c.secondary : '#DC2626';
      const headbandStroke = isDuotone ? c.stroke : '#991B1B';
      const metalFill = isDuotone ? c.secondary : '#E2E8F0';
      const metalStroke = isDuotone ? c.stroke : '#64748B';
      const ink = isDuotone ? c.stroke : '#37474F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Katana Sword on Back -->
        <path d="M21.5 17.5 L27 8.5" fill="none" stroke="${suitFill}" stroke-width="2.4" />
        <path d="M22.2 16.2 L23.4 16.9 M23.7 13.7 L24.9 14.4 M25.2 11.2 L26.4 11.9" fill="none" stroke="${headbandFill}" stroke-width="0.8" />
        <path d="M19.6 16.4 L23.4 18.6" fill="none" stroke="${metalFill}" stroke-width="1.8" />
        <circle cx="27" cy="8.5" r="1.1" fill="${metalFill}" stroke="${metalStroke}" stroke-width="0.7" />

        <!-- Headband Trailing Ribbons -->
        <path d="M9.6 9 C7.5 9.4 5.8 11.4 4.8 14.5" fill="none" stroke="${headbandFill}" stroke-width="1.3" />
        <path d="M9.6 9.8 C7.8 11.2 6.8 13.6 6.2 16.8" fill="none" stroke="${headbandFill}" stroke-width="1.1" />

        <!-- Neck Gaiter -->
        <path d="M13.4 17.6 H18.6 V22 H13.4 Z" fill="${suitFill}" stroke="${suitStroke}" stroke-width="1.1" />

        <!-- Shinobi Torso / Tunic -->
        <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" fill="${suitFill}" stroke="${suitStroke}" stroke-width="1.1" />
        <!-- Gi Cross-Over Lapels -->
        <path d="M11.5 20.8 L16 26.5 M20.5 20.8 L14.5 27.5" fill="none" stroke="${suitStroke}" stroke-width="1.2" />
        <!-- Waist Sash -->
        <path d="M5.5 30.5 C9 29.5 16 29 26.5 30.5" fill="none" stroke="${headbandFill}" stroke-width="1.5" />

        <!-- Head Base (Skin Layer) -->
        <path d="M9.6 12.6 A6.4 6.8 0 1 0 22.4 12.6 A6.4 6.8 0 1 0 9.6 12.6 Z" fill="${skinFill}" stroke="${skinStroke}" stroke-width="1.1" />

        <!-- Ninja Hood (Top Cowl) -->
        <path d="M9.6 12.6 C9 6 12 3.8 16 3.8 C20 3.8 23 6 22.4 12.6 C20.8 11.2 18.6 10.4 16 10.4 C13.4 10.4 11.2 11.2 9.6 12.6 Z" fill="${suitFill}" stroke="${suitStroke}" stroke-width="1.1" />

        <!-- Ninja Face Mask (Lower Half covering chin, mouth & nose) -->
        <path d="M9.6 14.4 C11.5 15.2 13.6 15.6 16 15.6 C18.4 15.6 20.5 15.2 22.4 14.4 C22.6 17.4 21 20.4 16 20.6 C11 20.4 9.4 17.4 9.6 14.4 Z" fill="${suitFill}" stroke="${suitStroke}" stroke-width="1.1" />
        <path d="M16 15.6 V18" fill="none" stroke="${suitStroke}" stroke-width="0.9" />

        <!-- Forehead Band & Metal Plate -->
        <path d="M9.8 9.2 C11.6 7.8 13.6 7.2 16 7.2 C18.4 7.2 20.4 7.8 22.2 9.2 L22 7.6 C20.3 6.4 18.2 5.8 16 5.8 C13.8 5.8 11.7 6.4 10 7.6 Z" fill="${headbandFill}" stroke="${headbandStroke}" stroke-width="0.7" />
        <rect x="13.2" y="6.6" width="5.6" height="2.6" rx="0.6" fill="${metalFill}" stroke="${metalStroke}" stroke-width="0.7" />
        <line x1="14.8" y1="7.9" x2="17.2" y2="7.9" stroke="${metalStroke}" stroke-width="0.7" />
        <circle cx="13.7" cy="7.9" r="0.25" fill="${metalStroke}" />
        <circle cx="18.3" cy="7.9" r="0.25" fill="${metalStroke}" />

        <!-- Eyebrows (from person-frowning) -->
        <path d="M11.2 11.6 L14.4 10.4 M20.8 11.6 L17.6 10.4" fill="none" stroke="${ink}" stroke-width="1.2" />

        <!-- Eyes (from person-frowning) -->
        <circle cx="13.2" cy="13.6" r="0.9" fill="${ink}" stroke="none" />
        <circle cx="18.8" cy="13.6" r="0.9" fill="${ink}" stroke="none" />
        <!-- Determined Eye Glints -->
        <circle cx="13.5" cy="13.3" r="0.3" fill="#FFFFFF" stroke="none" />
        <circle cx="19.1" cy="13.3" r="0.3" fill="#FFFFFF" stroke="none" />
      </g>`;
    },
  },
];