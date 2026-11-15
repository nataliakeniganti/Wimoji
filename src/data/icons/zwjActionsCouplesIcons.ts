import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// =============================================================================
// BUST FIGURE HELPERS (matching peopleCharactersIcons.ts & personalCareRomanceIcons.ts)
// =============================================================================
type FigLayer = { d: string; fill: string; stroke?: string; skin?: boolean };
interface Figure {
  id: string;
  layers: FigLayer[];
  features: (ink: string, o: boolean, s: boolean) => string;
}

const figEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const figQuad = (x0: number, y0: number, x1: number, y1: number, w: number) => {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * (w / 2);
  const ny = (dx / len) * (w / 2);
  const f = (n: number) => +n.toFixed(2);
  return `M${f(x0 + nx)} ${f(y0 + ny)} L${f(x1 + nx)} ${f(y1 + ny)} L${f(x1 - nx)} ${f(y1 - ny)} L${f(x0 - nx)} ${f(y0 - ny)} Z`;
};

function figInner(opts: WimojiStyleOptions, fig: Figure, k = 1, tx = 0, ty = 0): string {
  const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#78350F', stroke: '#FFA000' });
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
  return `<g transform="translate(${tx} ${ty}) scale(${k})" stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${fig.features(ink, o, s)}
      </g>`;
}

const renderFigure = (opts: WimojiStyleOptions, fig: Figure) => `${getBadgeMarkup(opts)}${figInner(opts, fig)}`;

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
const SWEPT_HAIR = 'M9.6 11.8 C8.8 6.4 11.8 3.6 16 3.6 C20.2 3.6 23.2 6.4 22.4 11.8 C21.2 9.4 19.4 8 17.4 6.8 C15.4 9.4 12 10.6 9.6 11.8 Z';
const LONG_HAIR_BACK = 'M9 12.4 C7.4 6 11.4 3 16 3 C20.6 3 24.6 6 23 12.4 C22.6 16.4 23.4 20 25 22.6 C22 23 20.4 21.6 19.4 19.8 L12.6 19.8 C11.6 21.6 10 23 7 22.6 C8.6 20 9.4 16.4 9 12.4 Z';
const FRINGE = 'M9.8 11.8 C9.2 6.6 12 4 16 4 C20 4 22.8 6.6 22.2 11.8 C20.2 9.8 17.2 8.4 14.8 6.6 C13.6 9 11.6 10.8 9.8 11.8 Z';
const lipCol = (o: boolean, s: boolean, ink: string) => (o ? ink : s ? '#FFFFFF' : '#E11D48');

const faceFeatures = (ink: string, lips?: string, isMan = false) =>
  (isMan ? figLine(ink, 'M11.6 11.4 L14.4 11.1 M17.6 11.1 L20.4 11.4', 1.1) : '') +
  (lips ? figLine(ink, 'M11.8 12.2 L11.0 11.8 M20.2 12.2 L21.0 11.8', 0.8) : '') +
  figDots(ink, [[13.4, 13.6], [18.6, 13.6]]) +
  figLine(lips ?? ink, 'M14.4 16.8 C15.2 17.8 16.8 17.8 17.6 16.8', lips ? 1.5 : 1.1);

const manFig = (shirt: string, id: string, shirtStroke?: string): Figure => ({
  id,
  layers: [...figBase(shirt, shirtStroke), { d: SHORT_HAIR, fill: '#6D4C41' }],
  features: (ink) => faceFeatures(ink, undefined, true),
});

const womanFig = (shirt: string, id: string, shirtStroke?: string): Figure => ({
  id,
  layers: [{ d: LONG_HAIR_BACK, fill: '#78350F' }, ...figBase(shirt, shirtStroke, false), { d: FRINGE, fill: '#78350F' }],
  features: (ink, o, s) => faceFeatures(ink, lipCol(o, s, ink), false),
});

// =============================================================================
// FULL-BODY PERSON HELPERS (matching peopleExtendedIcons.ts & peopleFantasyExtendedIcons.ts)
// =============================================================================
type PersonLayer = { d: string; kind: 'shirt' | 'skin' | 'hair' | 'pants' | 'mark' | 'item'; w?: number; fill?: string };
type Pt = [number, number];
type Gender = 'person' | 'man' | 'woman';

const personCircle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
const personEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const personHairNeutral = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 8.6;
  const v = ry / 9.2;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 17) * v).toFixed(2)}`;
  return `M${m(7.8, 16.4)} C${m(6.8, 9.6)} ${m(10.8, 5.4)} ${m(16, 5.4)} C${m(21.2, 5.4)} ${m(25.2, 9.6)} ${m(24.2, 16.4)} C${m(23, 13.6)} ${m(20.8, 11.8)} ${m(18.4, 10.4)} C${m(16, 13)} ${m(11.6, 14.6)} ${m(7.8, 16.4)} Z`;
};

const personHairShort = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 8.6;
  const v = ry / 9.2;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 17) * v).toFixed(2)}`;
  return `M${m(7.8, 15.8)} C${m(6.8, 9.2)} ${m(10.8, 5.2)} ${m(16, 5.2)} C${m(21.2, 5.2)} ${m(25.2, 9.2)} ${m(24.2, 15.8)} C${m(22.8, 12.6)} ${m(19.8, 11.0)} ${m(16, 11.0)} C${m(12.2, 11.0)} ${m(9.2, 12.6)} ${m(7.8, 15.8)} Z`;
};

const personHairLongBack = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 8.6;
  const v = ry / 9.2;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 17) * v).toFixed(2)}`;
  return `M${m(6.8, 16.8)} C${m(5.0, 9.0)} ${m(10.0, 4.4)} ${m(16, 4.4)} C${m(22.0, 4.4)} ${m(27.0, 9.0)} ${m(25.2, 16.8)} C${m(24.8, 22.0)} ${m(25.8, 26.8)} ${m(27.4, 30.2)} C${m(24.0, 30.6)} ${m(22.0, 29.0)} ${m(20.6, 26.8)} H${m(11.4, 26.8)} C${m(10.0, 29.0)} ${m(8.0, 30.6)} ${m(4.6, 30.2)} C${m(6.2, 26.8)} ${m(7.2, 22.0)} ${m(6.8, 16.8)} Z`;
};

const poly = (pts: Pt[]) => 'M' + pts.map((p) => `${p[0]} ${p[1]}`).join(' L');
const tube = (kind: PersonLayer['kind'], pts: Pt[], w: number, fill?: string): PersonLayer => ({ d: poly(pts), kind, w, fill });
const hand = (p: Pt, r = 1.6): PersonLayer => ({ d: personCircle(p[0], p[1], r), kind: 'skin' });
const shoe = (p: Pt, dir = 1): PersonLayer => ({ d: personEllipse(p[0] + dir * 0.9, p[1], 2.1, 1.1), kind: 'item', fill: '#5D4037' });
const armOf = (sh: Pt, el: Pt, hd: Pt): PersonLayer[] => [tube('skin', [el, hd], 2.6), tube('shirt', [sh, el], 3.4), hand(hd)];
const legOf = (hip: Pt, kn: Pt, ft: Pt, dir = 1, kind: 'pants' | 'skin' = 'pants'): PersonLayer[] => [
  tube(kind, [hip, kn, ft], 3.6),
  shoe(ft, dir),
];
const headBackOf = (g: Gender, cx: number, cy: number, rx = 3.5, ry = 3.8): PersonLayer[] =>
  g === 'woman' ? [{ d: personHairLongBack(cx, cy, rx, ry), kind: 'hair' }] : [];
const headOfGender = (g: Gender, cx: number, cy: number, rx = 3.5, ry = 3.8): PersonLayer[] => [
  { d: personEllipse(cx, cy, rx, ry), kind: 'skin' },
  {
    d:
      g === 'man'
        ? personHairShort(cx, cy, rx, ry)
        : g === 'woman'
        ? personHairNeutral(cx, cy, rx, ry)
        : personHairNeutral(cx, cy, rx, ry),
    kind: 'hair',
  },
];

const personEyes = (ink: string, pts: Array<[number, number]>, r = 0.9) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}" stroke="none" />`).join('');
const personLine = (ink: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${w}" />`;
const faceAt = (ink: string, cx: number, cy: number, dir = 0, sc = 1, mouthCol?: string) => {
  const ex = cx + dir * 0.9 * sc;
  return (
    personEyes(ink, [[ex - 1.3 * sc, cy + 0.3 * sc], [ex + 1.3 * sc, cy + 0.3 * sc]], 0.75 * sc) +
    personLine(mouthCol ?? ink, `M${ex - 1 * sc} ${cy + 1.9 * sc} C${ex - 0.4 * sc} ${cy + 2.6 * sc} ${ex + 0.4 * sc} ${cy + 2.6 * sc} ${ex + 1 * sc} ${cy + 1.9 * sc}`, mouthCol ? 1.0 : 0.8)
  );
};

const renderPerson = (
  opts: WimojiStyleOptions,
  layers: PersonLayer[],
  features: (ink: string, mouthFill: string, o: boolean, s: boolean, d: boolean) => string,
  id: string,
  hairColor = '#78350F',
  defaults?: { fillPrimary?: string; fillSecondary?: string; stroke?: string },
  skipBadge = false
) => {
  const c = resolveColors(opts, {
    fillPrimary: defaults?.fillPrimary ?? '#FB8C00',
    fillSecondary: defaults?.fillSecondary ?? '#FFCA28',
    stroke: defaults?.stroke ?? '#E65100',
  });
  const badge = skipBadge ? '' : getBadgeMarkup(opts);
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
      ? d
        ? c.secondary
        : '#FFCA28'
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
};

// Bunny-ear dancer builder matching peopleCharactersIcons.ts
const bunnyDancer = (cx: number, dir: number, gender: 'man' | 'woman'): FigLayer[] => {
  const f = (n: number) => +n.toFixed(2);
  const dark = '#263238';
  const hairCol = gender === 'man' ? '#5D4037' : '#78350F';
  const arm = (sg: number): FigLayer[] => [
    { d: figQuad(cx + sg * 2.8, 13.6, cx + sg * 6.4, 17.2, 1.9), fill: '', skin: true },
    { d: figQuad(cx + sg * 6.4, 17.2, cx + sg * 3.4, 20.8, 1.9), fill: '', skin: true },
  ];
  return [
    ...(gender === 'woman'
      ? [
          {
            d: `M${f(cx - 4.2)} 8.6 C${f(cx - 4.8)} 11.8 ${f(cx - 4.8)} 14.4 ${f(cx - 3.6)} 15.8 H${f(cx + 3.6)} C${f(cx + 4.8)} 14.4 ${f(cx + 4.8)} 11.8 ${f(cx + 4.2)} 8.6 Z`,
            fill: hairCol,
          },
        ]
      : []),
    { d: figEllipse(cx - 1.9, 3.8, 1.25, 2.9), fill: dark },
    { d: figEllipse(cx + 1.9, 3.8, 1.25, 2.9), fill: dark },
    ...arm(-1),
    ...arm(1),
    { d: figQuad(cx - dir * 1.2, 20.4, cx - dir * 1.6, 29.4, 2.7), fill: '', skin: true },
    { d: figQuad(cx + dir * 1.2, 21, cx + dir * 3.9, 25.4, 2.6), fill: '', skin: true },
    { d: figQuad(cx + dir * 3.9, 25.4, cx + dir * 2.4, 29.4, 2.5), fill: '', skin: true },
    { d: `M${f(cx - 1)} 10 H${f(cx + 1)} V13 H${f(cx - 1)} Z`, fill: '', skin: true },
    {
      d: `M${f(cx - 3.4)} 12.4 C${f(cx - 2)} 13.4 ${f(cx + 2)} 13.4 ${f(cx + 3.4)} 12.4 L${f(cx + 3.3)} 21.6 C${f(cx + 1.6)} 22.6 ${f(cx - 1.6)} 22.6 ${f(cx - 3.3)} 21.6 Z`,
      fill: dark,
    },
    { d: figEllipse(cx, 8.2, 3.7, 3.9), fill: '', skin: true },
    ...(gender === 'man'
      ? [
          {
            d: `M${f(cx - 3.6)} 7.2 C${f(cx - 3.6)} 4.4 ${f(cx + 3.6)} 4.4 ${f(cx + 3.6)} 7.2 C${f(cx + 2.2)} 6.0 ${f(cx - 2.2)} 6.0 ${f(cx - 3.6)} 7.2 Z`,
            fill: hairCol,
          },
        ]
      : [
          {
            d: `M${f(cx - 3.6)} 7.4 C${f(cx - 3.6)} 4.2 ${f(cx + 3.6)} 4.2 ${f(cx + 3.6)} 7.4 C${f(cx + 1.8)} 5.6 ${f(cx - 1.2)} 6.4 ${f(cx - 3.6)} 7.4 Z`,
            fill: hairCol,
          },
        ]),
    {
      d: `M${f(cx - 3.6)} 6.8 C${f(cx - 2.2)} 4.4 ${f(cx + 2.2)} 4.4 ${f(cx + 3.6)} 6.8 L${f(cx + 3.3)} 7.6 C${f(cx + 2)} 5.8 ${f(cx - 2)} 5.8 ${f(cx - 3.3)} 7.6 Z`,
      fill: dark,
    },
  ];
};

const bunnyFace = (cx: number, ink: string, lips?: string) =>
  figDots(ink, [[cx - 1.4, 9.6], [cx + 1.4, 9.6]], 0.7) +
  figLine(lips ?? ink, `M${cx - 1.1} 11 C${cx - 0.4} 11.7 ${cx + 0.4} 11.7 ${cx + 1.1} 11`, lips ? 0.9 : 0.7);

// Walker helper matching peopleCharactersIcons.ts
const walker = (cx: number, kind: Gender, shirt: string, dir: number): FigLayer[] => {
  const f = (n: number) => +n.toFixed(2);
  const hair = kind === 'man' ? '#5D3A1A' : '#78350F';
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
  out.push({ d: figQuad(cx - dir * 3.6, 11.6, xo, 18.2, 2.2), fill: shirt });
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
    d:
      kind === 'person'
        ? `M${f(cx - 3.7)} 6.2 C${f(cx - 4.1)} 2.6 ${f(cx - 2)} 1.8 ${f(cx)} 1.8 C${f(cx + 2)} 1.8 ${f(cx + 4.1)} 2.6 ${f(cx + 3.7)} 6.2 C${f(cx + 2.6)} 4.8 ${f(cx + 1.4)} 4.0 ${f(cx + 0.5)} 3.4 C${f(cx - 0.6)} 4.6 ${f(cx - 2.2)} 5.4 ${f(cx - 3.7)} 6.2 Z`
        : `M${f(cx - 3.7)} 6 C${f(cx - 4.1)} 2.6 ${f(cx - 2)} 1.8 ${f(cx)} 1.8 C${f(cx + 2)} 1.8 ${f(cx + 4.1)} 2.6 ${f(cx + 3.7)} 6 C${f(cx + 2.8)} 4.4 ${f(cx + 1.4)} 3.8 ${f(cx)} 3.8 C${f(cx - 1.4)} 3.8 ${f(cx - 2.8)} 4.4 ${f(cx - 3.7)} 6 Z`,
    fill: hair,
  });
  out.push({ d: figQuad(cx + dir * 3.6, 11.6, 16, 17.8, 2.2), fill: shirt });
  return out;
};

const walkerFace = (cx: number, ink: string, lips?: string) =>
  figDots(ink, [[cx - 1.3, 6.6], [cx + 1.3, 6.6]], 0.55) + figLine(lips ?? ink, `M${cx - 1} 8.3 Q${cx} 9.1 ${cx + 1} 8.3`, 0.7);

// Kiss couple builder matching personalCareRomanceIcons.ts
function buildKissCouple(
  id: string,
  char: string,
  name: string,
  unicodeHex: string,
  left: ['man' | 'woman', string, string],
  right: ['man' | 'woman', string, string],
  extraTags: string[]
): WimojiIconDef {
  return {
    id,
    char,
    name,
    unicodeHex,
    category: 'people-body',
    tags: ['kiss', 'couple', 'love', 'romance', 'affection', 'heart', ...extraTags, char],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E53935', fillSecondary: '#BE123C', stroke: '#E53935' });
      const face = (side: number, kind: 'man' | 'woman') => (ink: string, o: boolean, s: boolean) =>
        figLine(ink, 'M11.4 13.8 C12.2 12.6 13.6 12.6 14.4 13.8', 1.1) +
        figLine(ink, 'M17.6 13.8 C18.4 12.6 19.8 12.6 20.6 13.8', 1.1) +
        `<ellipse cx="${16 + side * 3.6}" cy="17.2" rx="1.5" ry="1" fill="${o || s ? ink : kind === 'woman' ? '#E11D48' : '#BE123C'}" stroke="none" />`;
      const narrow = (f: Figure, shirt: string): Figure => ({
        ...f,
        layers: f.layers.map((l) => (l.fill === shirt ? { ...l, d: 'M8 32 C8 24.4 11.4 20.8 16 20.8 C20.6 20.8 24 24.4 24 32 Z' } : l)),
      });
      const leftRaw = left[0] === 'man' ? manFig(left[1], `${id}-L`, left[2]) : womanFig(left[1], `${id}-L`, left[2]);
      const rightRaw = right[0] === 'man' ? manFig(right[1], `${id}-R`, right[2]) : womanFig(right[1], `${id}-R`, right[2]);
      const leftFig: Figure = { ...narrow(leftRaw, left[1]), features: face(1, left[0]) };
      const rightFig: Figure = { ...narrow(rightRaw, right[1]), features: face(-1, right[0]) };
      const heart = 'M16 11.2 C11 7.6 9.6 4.4 12.2 2.8 C13.8 1.9 15.4 2.6 16 4 C16.6 2.6 18.2 1.9 19.8 2.8 C22.4 4.4 21 7.6 16 11.2 Z';
      const heartMarkup =
        opts.style === 'outline'
          ? `<path d="${heart}" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(1.2, (opts.strokeWidth ?? 2) * 0.75)}" stroke-linejoin="round" />`
          : `<path d="${heart}" fill="${opts.style === 'duotone' ? c.secondary : c.primary}" stroke="none" />`;
      return `${getBadgeMarkup(opts)}${heartMarkup}
      <g transform="rotate(10 10.6 24)">${figInner(opts, leftFig, 0.62, 0.68, 11.7)}</g>
      <g transform="rotate(-10 21.4 24)">${figInner(opts, rightFig, 0.62, 11.48, 11.7)}</g>`;
    },
  };
}

// Couple-with-heart builder matching weddingHeartsIcons.ts
function buildCoupleWithHeart(
  id: string,
  char: string,
  name: string,
  unicodeHex: string,
  left: ['man' | 'woman', string, string],
  right: ['man' | 'woman', string, string],
  extraTags: string[]
): WimojiIconDef {
  return {
    id,
    char,
    name,
    unicodeHex,
    category: 'people-body',
    tags: ['couple with heart', 'love', 'couple', 'partners', 'romance', 'heart', ...extraTags, char],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#EF4444', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const sw = opts.strokeWidth ?? 2;

      const hairLeft =
        left[0] === 'woman'
          ? 'M5.6 19 C5.2 14.5 7.8 13.6 10.5 13.6 C13.2 13.6 15.8 14.5 15.4 19 C15.2 21.8 15.6 23.6 15.8 25 H5.2 C5.4 23.6 5.8 21.8 5.6 19 Z'
          : '';
      const hairRight =
        right[0] === 'woman'
          ? 'M16.6 19 C16.2 14.5 18.8 13.6 21.5 13.6 C24.2 13.6 26.8 14.5 26.4 19 C26.2 21.8 26.6 23.6 26.8 25 H16.2 C16.4 23.6 16.8 21.8 16.6 19 Z'
          : '';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 13.5 s-5-3.2-5-7 a2.7 2.7 0 0 1 5-1.5 2.7 2.7 0 0 1 5 1.5 c0 3.8-5 7-5 7 z" fill="${c.stroke}" />
          ${hairLeft ? `<path d="${hairLeft}" />` : ''}
          <circle cx="10.5" cy="19" r="4.5" />
          <path d="M6.5 19 C6.5 14.5 8.5 14 11.5 14" />
          <circle cx="9" cy="19" r="0.8" fill="${c.stroke}" />
          <circle cx="12" cy="19" r="0.8" fill="${c.stroke}" />
          <path d="M9.5 21 C10.2 21.8 11.5 21.8 12 21" />
          <path d="M5 28 C5 24 8 23 11 23 C13 23 14.5 24 15.5 26" />
          ${hairRight ? `<path d="${hairRight}" />` : ''}
          <circle cx="21.5" cy="19" r="4.5" />
          <path d="M25.5 19 C25.5 14.5 23.5 14 20.5 14" />
          <circle cx="20" cy="19" r="0.8" fill="${c.stroke}" />
          <circle cx="23" cy="19" r="0.8" fill="${c.stroke}" />
          <path d="M20 21 C20.5 21.8 21.8 21.8 22.5 21" />
          <path d="M27 28 C27 24 24 23 21 23 C19 23 17.5 24 16.5 26" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 13.5 s-5-3.2-5-7 a2.7 2.7 0 0 1 5-1.5 2.7 2.7 0 0 1 5 1.5 c0 3.8-5 7-5 7 z" />
          ${hairLeft ? `<path d="${hairLeft}" />` : ''}
          <path d="M5 28 C5 24 8 23 11 23 C13.5 23 15 24.5 15.8 27 Z" />
          <circle cx="10.5" cy="19" r="4.5" />
          <circle cx="9.2" cy="19" r="0.7" fill="#FFFFFF" stroke="none" />
          <circle cx="12.2" cy="19" r="0.7" fill="#FFFFFF" stroke="none" />
          <path d="M9.8 21.2 C10.4 21.8 11.4 21.8 11.8 21.2" stroke="#FFFFFF" stroke-width="1" fill="none" />
          ${hairRight ? `<path d="${hairRight}" />` : ''}
          <path d="M27 28 C27 24 24 23 21 23 C18.5 23 17 24.5 16.2 27 Z" />
          <circle cx="21.5" cy="19" r="4.5" />
          <circle cx="19.8" cy="19" r="0.7" fill="#FFFFFF" stroke="none" />
          <circle cx="22.8" cy="19" r="0.7" fill="#FFFFFF" stroke="none" />
          <path d="M20.2 21.2 C20.8 21.8 21.8 21.8 22.4 21.2" stroke="#FFFFFF" stroke-width="1" fill="none" />
        </g>`;
      }

      const lShirt = d ? c.secondary : left[1];
      const lStroke = d ? c.stroke : left[2];
      const rShirt = d ? c.secondary : right[1];
      const rStroke = d ? c.stroke : right[2];
      const lHair = d ? c.secondary : left[0] === 'woman' ? '#78350F' : '#475569';
      const rHair = d ? c.secondary : right[0] === 'woman' ? '#78350F' : '#5D4037';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 13.5 s-5-3.2-5-7 a2.7 2.7 0 0 1 5-1.5 2.7 2.7 0 0 1 5 1.5 c0 3.8-5 7-5 7 z" fill="${d ? c.secondary : '#EF4444'}" stroke="#991B1B" stroke-width="0.6" />
        ${hairLeft ? `<path d="${hairLeft}" fill="${lHair}" />` : ''}
        <path d="M5 28 C5 24 8 23 11 23 C13.5 23 15 24.5 15.8 27 Z" fill="${lShirt}" stroke="${lStroke}" stroke-width="0.6" />
        ${hairRight ? `<path d="${hairRight}" fill="${rHair}" />` : ''}
        <path d="M27 28 C27 24 24 23 21 23 C18.5 23 17 24.5 16.2 27 Z" fill="${rShirt}" stroke="${rStroke}" stroke-width="0.6" />
        <circle cx="10.5" cy="19" r="4.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M6.5 19 C6.5 14.5 8.5 14 11.5 14 C13.5 14 14.5 15 15 16.5 C13.5 15.5 10.5 15.5 8.5 17 Z" fill="${lHair}" />
        <circle cx="9.2" cy="19" r="0.7" fill="#1E293B" />
        <circle cx="12.2" cy="19" r="0.7" fill="#1E293B" />
        <path d="M9.8 21.2 C10.4 21.8 11.4 21.8 11.8 21.2" stroke="${left[0] === 'woman' ? '#E11D48' : '#37474F'}" stroke-width="1" fill="none" />
        <circle cx="8.5" cy="20.2" r="0.8" fill="#FDA4AF" />
        <circle cx="21.5" cy="19" r="4.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M25.5 19 C25.5 14 22.5 13.5 19.5 14 C18.5 14.5 18 15.5 17.5 17 C19 15.5 22 15.5 24.5 17.5 Z" fill="${rHair}" />
        <circle cx="19.8" cy="19" r="0.7" fill="#1E293B" />
        <circle cx="22.8" cy="19" r="0.7" fill="#1E293B" />
        <path d="M20.2 21.2 C20.8 21.8 21.8 21.8 22.4 21.2" stroke="${right[0] === 'woman' ? '#E11D48' : '#37474F'}" stroke-width="1" fill="none" />
        <circle cx="23.5" cy="20.2" r="0.8" fill="#FDA4AF" />
      </g>`;
    },
  };
}

// Motorized & Manual Wheelchair Rider builders
function buildMotorizedWheelchairRider(g: Gender): WimojiIconDef {
  const id = g === 'person' ? 'person-in-motorized-wheelchair' : `${g}-in-motorized-wheelchair`;
  const char = g === 'person' ? '🧑‍🦼' : g === 'man' ? '👨‍🦼' : '👩‍🦼';
  const name = g === 'person' ? 'Person in Motorized Wheelchair' : `${g === 'man' ? 'Man' : 'Woman'} in Motorized Wheelchair`;
  const hexHead = g === 'man' ? 'U+1F468' : g === 'woman' ? 'U+1F469' : 'U+1F9D1';
  const shirt = g === 'woman' ? '#9333EA' : g === 'man' ? '#1976D2' : '#FB8C00';
  const hairCol = g === 'man' ? '#5D4037' : '#78350F';
  return {
    id,
    char,
    name,
    unicodeHex: `${hexHead} U+200D U+1F9BC`,
    category: 'people-body',
    tags: ['motorized wheelchair', 'power wheelchair', 'accessibility', 'disability', g, name.toLowerCase(), char],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const s = opts.style === 'silhouette';
      const d = opts.style === 'duotone';

      // Seated person layers
      const personLayers: PersonLayer[] = [
        ...headBackOf(g, 19.6, 7.2, 3.1, 3.3),
        // Bent legs down to footrest
        tube(g === 'woman' ? 'skin' : 'pants', [[16.4, 17.4], [11.2, 17.8], [9.2, 23.6]], 3.0),
        shoe([9.2, 23.6], -1),
        // Torso upright against backrest
        tube('shirt', [[18.6, 11.4], [17.8, 17.8]], 5.2, shirt),
        // Arm reaching forward to joystick
        tube('shirt', [[17.8, 12.2], [14.6, 14.8]], 2.8, shirt),
        tube('skin', [[14.6, 14.8], [12.0, 14.4]], 2.2),
        hand([12.0, 14.4], 1.3),
        ...headOfGender(g, 19.6, 7.2, 3.1, 3.3),
      ];

      const personSvg = renderPerson(
        opts,
        personLayers,
        (ink, _m, isO, isS) => faceAt(ink, 19.6, 7.2, -1, 0.85, g === 'woman' && !isO && !isS ? '#E11D48' : undefined),
        id,
        hairCol,
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: '#334155' },
        true
      );

      // Chair frame, red battery motor, and wheels rendered cleanly around rider
      const chassis = o ? 'none' : s ? c.primary : '#EF4444';
      const seat = o ? 'none' : s ? c.primary : d ? c.secondary : '#334155';
      const metal = o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : '#94A3B8';
      const chairStroke = o || !s ? c.stroke : '#FFFFFF';

      const chairBack = o
        ? `<g stroke="${chairStroke}" stroke-width="${sw * 0.85}" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M22.2 6.8 V18.6 H11.4 L8.4 25.2 H5.6" />
          </g>`
        : `<g stroke-linecap="round" stroke-linejoin="round">
            <path d="M22.2 6.8 V18.6" stroke="${seat}" stroke-width="2.8" fill="none" />
            <path d="M22.2 6.8 V18.6" stroke="${chairStroke}" stroke-width="0.9" fill="none" />
            <path d="M11.6 19.2 L8.6 25.2 H5.6" stroke="${metal}" stroke-width="1.8" fill="none" />
          </g>`;

      const chairFront = o
        ? `<g stroke="${chairStroke}" stroke-width="${sw * 0.85}" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M12.2 14.8 H19.6" />
            <rect x="11.4" y="18.6" width="11.2" height="5.0" rx="1.4" />
            <circle cx="19.0" cy="25.0" r="4.2" />
            <circle cx="19.0" cy="25.0" r="1.2" />
            <circle cx="9.2" cy="26.6" r="2.0" />
          </g>`
        : `<g stroke-linecap="round" stroke-linejoin="round">
            <path d="M12.2 14.8 H19.6" stroke="${metal}" stroke-width="1.4" fill="none" />
            <rect x="11.4" y="18.6" width="11.2" height="5.0" rx="1.3" fill="${chassis}" stroke="${chairStroke}" stroke-width="1" />
            <circle cx="9.2" cy="26.6" r="2.0" fill="${seat}" stroke="${chairStroke}" stroke-width="0.9" />
            <circle cx="19.0" cy="25.0" r="4.2" fill="${seat}" stroke="${chairStroke}" stroke-width="1" />
            <circle cx="19.0" cy="25.0" r="2.1" fill="${metal}" stroke="${chairStroke}" stroke-width="0.7" />
          </g>`;

      return `${badge}${chairBack}${personSvg}${chairFront}`;
    },
  };
}

function buildManualWheelchairRider(g: Gender): WimojiIconDef {
  const id = g === 'person' ? 'person-in-manual-wheelchair' : `${g}-in-manual-wheelchair`;
  const char = g === 'person' ? '🧑‍🦽' : g === 'man' ? '👨‍🦽' : '👩‍🦽';
  const name = g === 'person' ? 'Person in Manual Wheelchair' : `${g === 'man' ? 'Man' : 'Woman'} in Manual Wheelchair`;
  const hexHead = g === 'man' ? 'U+1F468' : g === 'woman' ? 'U+1F469' : 'U+1F9D1';
  const shirt = g === 'woman' ? '#EC407A' : g === 'man' ? '#0284C7' : '#FB8C00';
  const hairCol = g === 'man' ? '#5D4037' : '#78350F';
  return {
    id,
    char,
    name,
    unicodeHex: `${hexHead} U+200D U+1F9BD`,
    category: 'people-body',
    tags: ['manual wheelchair', 'wheelchair', 'accessibility', 'mobility', g, name.toLowerCase(), char],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const s = opts.style === 'silhouette';
      const d = opts.style === 'duotone';

      const personLayers: PersonLayer[] = [
        ...headBackOf(g, 19.6, 7.2, 3.1, 3.3),
        tube(g === 'woman' ? 'skin' : 'pants', [[16.6, 17.6], [11.2, 18.0], [9.2, 23.8]], 3.0),
        shoe([9.2, 23.8], -1),
        tube('shirt', [[19.0, 11.4], [18.0, 18.0]], 5.2, shirt),
        tube('shirt', [[18.0, 12.6], [15.4, 16.4]], 2.8, shirt),
        tube('skin', [[15.4, 16.4], [14.8, 19.4]], 2.2),
        hand([14.8, 19.4], 1.3),
        ...headOfGender(g, 19.6, 7.2, 3.1, 3.3),
      ];

      const personSvg = renderPerson(
        opts,
        personLayers,
        (ink, _m, isO, isS) => faceAt(ink, 19.6, 7.2, -1, 0.85, g === 'woman' && !isO && !isS ? '#E11D48' : undefined),
        id,
        hairCol,
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: '#334155' },
        true
      );

      const accent = o ? c.stroke : s ? c.primary : '#0284C7';
      const tire = o ? c.stroke : s ? c.primary : d ? c.secondary : '#1E293B';
      const metal = o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : '#94A3B8';
      const chairStroke = o || !s ? c.stroke : '#FFFFFF';

      const chairBack = o
        ? `<g stroke="${chairStroke}" stroke-width="${sw * 0.85}" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M24.6 8.2 H22.0 V18.6 H11.4 L8.6 25.4 H5.8" />
          </g>`
        : `<g stroke-linecap="round" stroke-linejoin="round">
            <path d="M24.6 8.2 H22.0 V18.6 H11.4 L8.6 25.4 H5.8" stroke="${metal}" stroke-width="1.8" fill="none" />
            <path d="M21.6 10.0 V18.4 H11.6" stroke="${accent}" stroke-width="2.4" fill="none" />
          </g>`;

      const chairFront = o
        ? `<g stroke="${chairStroke}" stroke-width="${sw * 0.85}" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <circle cx="19.0" cy="22.8" r="5.2" />
            <circle cx="19.0" cy="22.8" r="1.2" />
            <circle cx="8.6" cy="26.4" r="1.9" />
          </g>`
        : `<g stroke-linecap="round" stroke-linejoin="round">
            <circle cx="8.6" cy="26.4" r="1.9" fill="${tire}" stroke="${chairStroke}" stroke-width="0.9" />
            <path d="M19.0 17.8 V27.8 M14.0 22.8 H24.0 M15.5 19.3 L22.5 26.3 M15.5 26.3 L22.5 19.3" stroke="${metal}" stroke-width="0.85" fill="none" />
            <circle cx="19.0" cy="22.8" r="5.2" fill="none" stroke="${tire}" stroke-width="1.9" />
            <circle cx="19.0" cy="22.8" r="3.7" fill="none" stroke="#CBD5E1" stroke-width="0.75" />
            <circle cx="19.0" cy="22.8" r="1.2" fill="${accent}" stroke="${chairStroke}" stroke-width="0.7" />
          </g>`;

      return `${badge}${chairBack}${personSvg}${chairFront}`;
    },
  };
}

// White Cane Walker builder
function buildWhiteCaneWalker(g: Gender): WimojiIconDef {
  const id = g === 'person' ? 'person-with-white-cane' : `${g}-with-white-cane`;
  const char = g === 'person' ? '🧑‍🦯' : g === 'man' ? '👨‍🦯' : '👩‍🦯';
  const name = g === 'person' ? 'Person with White Cane' : `${g === 'man' ? 'Man' : 'Woman'} with White Cane`;
  const hexHead = g === 'man' ? 'U+1F468' : g === 'woman' ? 'U+1F469' : 'U+1F9D1';
  const shirt = g === 'woman' ? '#8E24AA' : g === 'man' ? '#1976D2' : '#FB8C00';
  const hairCol = g === 'man' ? '#5D4037' : '#78350F';

  return {
    id,
    char,
    name,
    unicodeHex: `${hexHead} U+200D U+1F9AF`,
    category: 'people-body',
    tags: ['white cane', 'probing cane', 'blind', 'accessibility', g, name.toLowerCase(), char],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const s = opts.style === 'silhouette';
      const d = opts.style === 'duotone';

      const legKind: 'pants' | 'skin' = g === 'woman' ? 'skin' : 'pants';
      const layers: PersonLayer[] = [
        ...headBackOf(g, 13.0, 5.8, 3.4, 3.6),
        // Back arm swinging slightly behind
        ...armOf([12.2, 11.4], [9.4, 15.0], [7.8, 18.2]),
        // Back leg striding
        ...legOf([12.6, 19.0], [10.4, 24.0], [8.8, 28.8], 1, legKind),
        // Front leg striding forward
        ...legOf([14.2, 19.0], [16.2, 24.0], [17.4, 29.0], 1, legKind),
        // Torso (flared dress for woman, shirt for person/man)
        ...(g === 'woman'
          ? [{ d: 'M10.8 10.6 C10.8 9.8 15.4 9.8 15.4 10.6 L17.6 22.0 H9.4 Z', kind: 'shirt' as const, fill: shirt }]
          : [tube('shirt', [[13.2, 10.8], [13.4, 19.0]], 6.0, shirt)]),
        // Front arm reaching forward holding white cane handle
        ...armOf([14.2, 11.4], [17.2, 14.4], [19.4, 16.2]),
        ...headOfGender(g, 13.0, 5.8, 3.4, 3.6),
      ];

      const personSvg = renderPerson(
        opts,
        layers,
        (ink, _m, isO, isS) => faceAt(ink, 13.0, 5.8, 1, 0.95, g === 'woman' && !isO && !isS ? '#E11D48' : undefined),
        id,
        hairCol,
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: '#E65100' },
        true
      );

      // White cane extending diagonally forward from hand (19.4, 16.2) to ground (27.4, 28.4)
      const caneStroke = o || !s ? c.stroke : '#FFFFFF';
      const shaftCol = o ? 'none' : s ? c.primary : '#F8FAFC';
      const redCol = o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : '#EF4444';
      const caneMarkup = o
        ? `<g stroke="${caneStroke}" stroke-width="${Math.max(1.4, sw * 0.75)}" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M19.4 16.2 L26.8 27.6" />
            <circle cx="27.4" cy="28.4" r="1.4" />
          </g>`
        : `<g stroke-linecap="round" stroke-linejoin="round">
            <path d="M19.4 16.2 L26.8 27.6" stroke="${caneStroke}" stroke-width="2.6" fill="none" />
            <path d="M19.4 16.2 L26.8 27.6" stroke="${shaftCol}" stroke-width="1.5" fill="none" />
            <path d="M24.2 23.6 L26.4 27.0" stroke="${redCol}" stroke-width="1.6" fill="none" />
            <circle cx="27.4" cy="28.4" r="1.35" fill="${shaftCol}" stroke="${caneStroke}" stroke-width="0.8" />
          </g>`;

      return `${badge}<g transform="matrix(-1 0 0 1 32 0)">${personSvg}${caneMarkup}</g>`;
    },
  };
}

// Flip a rendered figure left-to-right (the badge, if any, stays where it is)
const mirrorFigure = (svg: string) => {
  const i = svg.indexOf('<g stroke-linecap');
  return `${svg.slice(0, i)}<g transform="matrix(-1 0 0 1 32 0)">${svg.slice(i)}</g>`;
};

export const zwjActionsCouplesIcons: WimojiIconDef[] = [
  // =========================================================================
  // 1–2. MAN & WOMAN GETTING MASSAGE (💆‍♂️ 💆‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-getting-massage`,
    char: g === 'man' ? '💆‍♂️' : '💆‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Getting Massage`,
    unicodeHex: `U+1F486 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['massage', 'spa', 'relaxation', 'wellness', g, g === 'man' ? '💆‍♂️' : '💆‍♀️'],
    renderContent: (opts) =>
      renderFigure(opts, {
        id: `${g}-massage`,
        layers: [
          ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: '#78350F' }] : []),
          ...figBase('#26A69A', '#00796B', g === 'man'),
          { d: figQuad(6.2, 14.6, 3.2, 24, 2.4), fill: '', skin: true },
          { d: figQuad(25.8, 14.6, 28.8, 24, 2.4), fill: '', skin: true },
          { d: figEllipse(8.2, 11.8, 1.9, 2.7), fill: '', skin: true },
          { d: figEllipse(23.8, 11.8, 1.9, 2.7), fill: '', skin: true },
          { d: g === 'man' ? SHORT_HAIR : FRINGE, fill: g === 'man' ? '#6D4C41' : '#78350F' },
          { d: 'M27.4 1.6 L28.3 3.8 L30.5 4.7 L28.3 5.6 L27.4 7.8 L26.5 5.6 L24.3 4.7 L26.5 3.8 Z', fill: '#FFD54F' },
        ],
        features: (ink, o, s) =>
          (g === 'man' ? figLine(ink, 'M11.6 11.6 L14.4 11.3 M17.6 11.3 L20.4 11.6', 1.1) : '') +
          figLine(ink, 'M11.8 14 C12.6 12.8 14 12.8 14.8 14', 1.1) +
          figLine(ink, 'M17.2 14 C18 12.8 19.4 12.8 20.2 14', 1.1) +
          figLine(g === 'woman' ? lipCol(o, s, ink) : ink, 'M14.4 16.8 C15.4 17.8 16.8 17.8 17.8 16.8', g === 'woman' ? 1.45 : 1.1),
      }),
  })),

  // =========================================================================
  // 3–4. MAN & WOMAN GETTING HAIRCUT (💇‍♂️ 💇‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-getting-haircut`,
    char: g === 'man' ? '💇‍♂️' : '💇‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Getting Haircut`,
    unicodeHex: `U+1F487 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['haircut', 'barber', 'salon', 'scissors', 'hair', g, g === 'man' ? '💇‍♂️' : '💇‍♀️'],
    renderContent: (opts) =>
      `${getBadgeMarkup(opts)}${figInner(
        opts,
        {
          id: `${g}-haircut`,
          layers: [
            ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: '#78350F' }] : []),
            ...figBase('#1E88E5', '#0D47A1', g === 'man'),
            { d: g === 'man' ? SHORT_HAIR : FRINGE, fill: g === 'man' ? '#6D4C41' : '#78350F' },
            { d: figQuad(30.4, 11.6, 22.8, 7.2, 1.2), fill: '#B0BEC5', stroke: '#78909C' },
            { d: figQuad(30.4, 6.4, 22.8, 10.8, 1.2), fill: '#CFD8DC', stroke: '#78909C' },
            { d: figEllipse(30.4, 12.4, 1.3, 1.3), fill: '#EF5350' },
            { d: figEllipse(30.4, 5.6, 1.3, 1.3), fill: '#EF5350' },
            { d: figEllipse(26.6, 9, 0.6, 0.6), fill: '#37474F' },
          ],
          features: (ink, o, s) => faceFeatures(ink, g === 'woman' ? lipCol(o, s, ink) : undefined, g === 'man'),
        },
        0.94,
        -1.4,
        1
      )}`,
  })),

  // =========================================================================
  // 5–6. MAN & WOMAN STANDING (🧍‍♂️ 🧍‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-standing`,
    char: g === 'man' ? '🧍‍♂️' : '🧍‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Standing`,
    unicodeHex: `U+1F9CD U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['standing', 'stand', 'upright', g, g === 'man' ? '🧍‍♂️' : '🧍‍♀️'],
    renderContent: (opts) => {
      const shirt = g === 'woman' ? '#EC407A' : '#1976D2';
      const layers: PersonLayer[] = [
        ...headBackOf(g, 16, 5.8, 3.5, 3.8),
        ...armOf([12.2, 11.6], [10.6, 15.6], [10.4, 19.2]),
        ...armOf([19.8, 11.6], [21.4, 15.6], [21.6, 19.2]),
        ...legOf([14, 19], [14, 24.4], [13.8, 29], -1, g === 'woman' ? 'skin' : 'pants'),
        ...legOf([18, 19], [18, 24.4], [18.2, 29], 1, g === 'woman' ? 'skin' : 'pants'),
        ...(g === 'woman'
          ? [{ d: 'M12.6 10.6 H19.4 L21.4 22.0 H10.6 Z', kind: 'shirt' as const, fill: shirt }]
          : [tube('shirt', [[16, 10.6], [16, 19.2]], 6.8, shirt)]),
        ...headOfGender(g, 16, 5.8, 3.5, 3.8),
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) => faceAt(ink, 16, 5.8, 0, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined),
        `${g}-stand`,
        g === 'man' ? '#5D4037' : '#78350F',
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: g === 'woman' ? '#9D174D' : '#1E3A8A' }
      );
    },
  })),

  // =========================================================================
  // 7–8. MAN & WOMAN KNEELING (🧎‍♂️ 🧎‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-kneeling`,
    char: g === 'man' ? '🧎‍♂️' : '🧎‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Kneeling`,
    unicodeHex: `U+1F9CE U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['kneeling', 'kneel', 'crouch', g, g === 'man' ? '🧎‍♂️' : '🧎‍♀️'],
    renderContent: (opts) => {
      const shirt = g === 'woman' ? '#EC407A' : '#1976D2';
      const layers: PersonLayer[] = [
        ...headBackOf(g, 14.4, 8.4, 3.5, 3.8),
        ...armOf([12.4, 14.2], [14.8, 17.8], [16.8, 19.6]),
        ...legOf([12.2, 21.4], [12.4, 27.6], [7.2, 28.4], -1, g === 'woman' ? 'skin' : 'pants'),
        ...legOf([14.4, 21.4], [20.4, 22], [20.4, 28.6], 1, g === 'woman' ? 'skin' : 'pants'),
        tube('shirt', [[13.8, 13.6], [13.4, 21.4]], 6.4, shirt),
        ...armOf([14.2, 14.4], [17, 17.6], [19.4, 19.6]),
        ...headOfGender(g, 14.4, 8.4, 3.5, 3.8),
      ];
      return mirrorFigure(
        renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => faceAt(ink, 14.4, 8.4, 1, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined),
          `${g}-kneel`,
          g === 'man' ? '#5D4037' : '#78350F',
          { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: g === 'woman' ? '#9D174D' : '#1E3A8A' }
        )
      );
    },
  })),

  // =========================================================================
  // 9–11. PERSON / MAN / WOMAN WITH WHITE CANE (🧑‍🦯 👨‍🦯 👩‍🦯)
  // =========================================================================
  buildWhiteCaneWalker('person'),
  buildWhiteCaneWalker('man'),
  buildWhiteCaneWalker('woman'),

  // =========================================================================
  // 12–14. PERSON / MAN / WOMAN IN MOTORIZED WHEELCHAIR (🧑‍🦼 👨‍🦼 👩‍🦼)
  // =========================================================================
  buildMotorizedWheelchairRider('person'),
  buildMotorizedWheelchairRider('man'),
  buildMotorizedWheelchairRider('woman'),

  // =========================================================================
  // 15–17. PERSON / MAN / WOMAN IN MANUAL WHEELCHAIR (🧑‍🦽 👨‍🦽 👩‍🦽)
  // =========================================================================
  buildManualWheelchairRider('person'),
  buildManualWheelchairRider('man'),
  buildManualWheelchairRider('woman'),

  // =========================================================================
  // 18–19. MAN & WOMAN RUNNING (🏃‍♂️ 🏃‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-running`,
    char: g === 'man' ? '🏃‍♂️' : '🏃‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Running`,
    unicodeHex: `U+1F3C3 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['running', 'runner', 'jogging', 'sprint', 'athlete', g, g === 'man' ? '🏃‍♂️' : '🏃‍♀️'],
    renderContent: (opts) => {
      const shirt = g === 'woman' ? '#EC407A' : '#1976D2';
      const layers: PersonLayer[] = [
        ...(g === 'woman'
          ? [{ d: 'M15.2 4.6 C19.2 4.2 21.8 6.4 22.8 9.2 C20.2 8.8 17.6 7.8 15.2 6.8 Z', kind: 'hair' as const }]
          : []),
        ...armOf([15.6, 11.8], [20.4, 13.8], [23.6, 17.6]),
        ...legOf([17.6, 19.2], [22, 24], [27.6, 22.4], 1, g === 'woman' ? 'skin' : 'pants'),
        tube('shirt', [[14.2, 10.8], [17.4, 19.4]], 5.8, shirt),
        ...legOf([16.4, 19.4], [11.2, 21.8], [12.6, 28], -1, g === 'woman' ? 'skin' : 'pants'),
        ...armOf([13.4, 11.8], [8.6, 14.6], [6.4, 10.6]),
        ...headOfGender(g, 12.2, 5.8),
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) => faceAt(ink, 12.2, 5.8, -1, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined),
        `${g}-run`,
        g === 'man' ? '#5D4037' : '#78350F',
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: g === 'woman' ? '#9D174D' : '#1E3A8A' }
      );
    },
  })),

  // =========================================================================
  // 20–21. MEN & WOMEN WITH BUNNY EARS (👯‍♂️ 👯‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: g === 'man' ? 'men-with-bunny-ears' : 'women-with-bunny-ears',
    char: g === 'man' ? '👯‍♂️' : '👯‍♀️',
    name: g === 'man' ? 'Men with Bunny Ears' : 'Women with Bunny Ears',
    unicodeHex: `U+1F46F U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['bunny ears', 'dancers', 'party', 'celebrate', g === 'man' ? 'men' : 'women', g === 'man' ? '👯‍♂️' : '👯‍♀️'],
    renderContent: (opts) =>
      renderFigure(opts, {
        id: `${g}-bunny`,
        layers: [...bunnyDancer(9.6, -1, g), ...bunnyDancer(22.4, 1, g)],
        features: (ink, o, s) => {
          const lips = g === 'woman' ? lipCol(o, s, ink) : undefined;
          return bunnyFace(9.6, ink, lips) + bunnyFace(22.4, ink, lips);
        },
      }),
  })),

  // =========================================================================
  // 22–23. MAN & WOMAN IN STEAMY ROOM (🧖‍♂️ 🧖‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-in-steamy-room`,
    char: g === 'man' ? '🧖‍♂️' : '🧖‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} in Steamy Room`,
    unicodeHex: `U+1F9D6 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['sauna', 'steam room', 'spa', 'towel', 'relax', g, g === 'man' ? '🧖‍♂️' : '🧖‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personHairLongBack(16, 13.8, 5.6, 5.8), kind: 'hair' as const }] : []),
        { d: 'M5.6 32 C5.6 25.4 9.8 22.4 16 22.4 C22.2 22.4 26.4 25.4 26.4 32 Z', kind: 'skin' },
        ...(g === 'woman'
          ? [{ d: 'M7 32 L7.8 26.2 C10.8 27.6 21.2 27.6 24.2 26.2 L25 32 Z', kind: 'item' as const, fill: '#F8FAFC' }]
          : []),
        { d: personEllipse(16, 13.8, 5.6, 5.8), kind: 'skin' },
        { d: g === 'man' ? personHairShort(16, 13.8, 5.6, 5.8) : personHairNeutral(16, 13.8, 5.6, 5.8), kind: 'hair' },
        ...(g === 'woman'
          ? [{ d: 'M10.4 10.6 C10.6 6.2 13 4.6 16 4.6 C19 4.6 21.4 6.2 21.6 10.6 C18.8 9.2 13.2 9.2 10.4 10.6 Z', kind: 'item' as const, fill: '#F8FAFC' }]
          : []),
        { d: 'M6 19.6 C4.4 17.2 7.2 14.6 5.6 12 C4.2 9.8 6.4 7.6 5.6 5.8', kind: 'mark', w: 1.4, fill: '#CBD5E1' },
        { d: 'M26 20.6 C27.6 18 24.8 15.4 26.4 12.8 C27.6 10.6 25.6 8.2 26.4 6.2', kind: 'mark', w: 1.4, fill: '#CBD5E1' },
        { d: 'M11.4 25.2 C10 23.4 12 21.8 11 20', kind: 'mark', w: 1.2, fill: '#CBD5E1' },
        { d: 'M20.8 25.4 C22.2 23.6 20.2 22 21.2 20.2', kind: 'mark', w: 1.2, fill: '#CBD5E1' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) =>
          (!o && !s
            ? '<ellipse cx="12.2" cy="15.8" rx="1.2" ry="0.7" fill="#FB7185" opacity="0.45" stroke="none" /><ellipse cx="19.8" cy="15.8" rx="1.2" ry="0.7" fill="#FB7185" opacity="0.45" stroke="none" />'
            : '') +
          personLine(ink, 'M12.4 14 C13.2 15 14.2 15 14.8 14 M17.2 14 C17.8 15 18.8 15 19.6 14', 1.1) +
          personLine(g === 'woman' && !o && !s ? '#E11D48' : ink, 'M14 17.2 C15 18.4 17 18.4 18 17.2', g === 'woman' ? 1.3 : 1.1),
        `${g}-steam`,
        g === 'man' ? '#5D4037' : '#78350F'
      );
    },
  })),

  // =========================================================================
  // 24–25. MAN & WOMAN CLIMBING (🧗‍♂️ 🧗‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-climbing`,
    char: g === 'man' ? '🧗‍♂️' : '🧗‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Climbing`,
    unicodeHex: `U+1F9D7 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['climbing', 'climber', 'rock climbing', 'bouldering', g, g === 'man' ? '🧗‍♂️' : '🧗‍♀️'],
    renderContent: (opts) => {
      const shirt = g === 'woman' ? '#EC407A' : '#1976D2';
      const layers: PersonLayer[] = [
        { d: 'M18.6 31 L20.4 21.8 L22.2 13 L24.8 3 H30.5 V31 Z', kind: 'item', fill: '#94A3B8' },
        { d: 'M23 7.6 L27.6 5.8 M21.4 16 L26.4 14.4 M20 24.4 L25.4 23', kind: 'mark', w: 1, fill: '#64748B' },
        { d: 'M11.6 17.6 C8.4 21.4 7.8 26.8 9.2 31', kind: 'mark', w: 1.2, fill: '#DC2626' },
        ...(g === 'woman'
          ? [{ d: 'M9.2 5.4 C6.4 5.2 4.6 7.4 4.2 10.2 C6.4 9.6 8.2 8.2 9.4 6.8 Z', kind: 'hair' as const }]
          : []),
        ...armOf([13.2, 11.4], [17.4, 7.6], [22.2, 5.4]),
        ...legOf([13, 18.8], [18.4, 18.4], [19.4, 23.2], 1),
        ...legOf([11.8, 19.2], [11.2, 24.8], [14.2, 29], 1),
        tube('shirt', [[13.2, 11], [12.4, 19.2]], 6.4, shirt),
        ...armOf([12.8, 12], [16.8, 12.6], [20.6, 11]),
        ...headOfGender(g, 12.2, 6.4, 3.4, 3.7),
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) => faceAt(ink, 12.2, 6.4, 1, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined),
        `${g}-climb`,
        g === 'man' ? '#5D4037' : '#78350F',
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: g === 'woman' ? '#9D174D' : '#1E3A8A' }
      );
    },
  })),

  // =========================================================================
  // 26–27. MAN & WOMAN IN LOTUS POSITION (🧘‍♂️ 🧘‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-in-lotus-position`,
    char: g === 'man' ? '🧘‍♂️' : '🧘‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} in Lotus Position`,
    unicodeHex: `U+1F9D8 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: ['meditation', 'yoga', 'lotus position', 'zen', 'calm', g, g === 'man' ? '🧘‍♂️' : '🧘‍♀️'],
    renderContent: (opts) => {
      const shirt = g === 'woman' ? '#9333EA' : '#0284C7';
      const layers: PersonLayer[] = [
        ...headBackOf(g, 16, 7.6, 3.5, 3.8),
        { d: 'M14 21.8 C10.4 21.4 7.6 24.4 8.4 27.6 C10.4 29.2 16 28.6 18.8 27', kind: 'pants', w: 3.6 },
        { d: 'M18 21.8 C21.6 21.4 24.4 24.4 23.6 27.6 C21.6 29.2 16 28.6 13.2 27', kind: 'pants', w: 3.6 },
        { d: personEllipse(12.2, 27.4, 1.9, 1.1), kind: 'skin' },
        { d: personEllipse(19.8, 27.4, 1.9, 1.1), kind: 'skin' },
        ...armOf([12.6, 13.8], [9.8, 19], [7.8, 23.4]),
        ...armOf([19.4, 13.8], [22.2, 19], [24.2, 23.4]),
        tube('shirt', [[16, 12.8], [16, 21.8]], 6.8, shirt),
        ...headOfGender(g, 16, 7.6, 3.5, 3.8),
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) =>
          personLine(ink, 'M13.9 7.8 C14.3 8.4 14.9 8.4 15.3 7.8 M16.7 7.8 C17.1 8.4 17.7 8.4 18.1 7.8', 0.85) +
          personLine(g === 'woman' && !o && !s ? '#E11D48' : ink, 'M15 9.6 C15.6 10.3 16.4 10.3 17 9.6', g === 'woman' ? 1.0 : 0.8),
        `${g}-lotus`,
        g === 'man' ? '#5D4037' : '#78350F',
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: g === 'woman' ? '#581C87' : '#0369A1' }
      );
    },
  })),

  // =========================================================================
  // 28. PEOPLE HOLDING HANDS (🧑‍🤝‍🧑)
  // =========================================================================
  {
    id: 'people-holding-hands',
    char: '🧑‍🤝‍🧑',
    name: 'People Holding Hands',
    unicodeHex: 'U+1F9D1 U+200D U+1F91D U+200D U+1F9D1',
    category: 'people-body',
    tags: ['people holding hands', 'friends', 'couple', 'partners', 'holding hands', '🧑‍🤝‍🧑'],
    renderContent: (opts) =>
      renderFigure(opts, {
        id: 'couple-pp',
        layers: [
          ...walker(9, 'person', '#FB8C00', 1),
          ...walker(23, 'person', '#00897B', -1),
          { d: figEllipse(16, 18.2, 1.6, 1.6), fill: '', skin: true },
        ],
        features: (ink) => walkerFace(9, ink) + walkerFace(23, ink),
      }),
  },

  // =========================================================================
  // 29–31. KISS COUPLES (👩‍❤️‍💋‍👨 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👩)
  // =========================================================================
  buildKissCouple(
    'kiss-woman-man',
    '👩‍❤️‍💋‍👨',
    'Kiss: Woman, Man',
    'U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468',
    ['woman', '#EC407A', '#AD1457'],
    ['man', '#1976D2', '#0D47A1'],
    ['woman', 'man', 'heterosexual']
  ),
  buildKissCouple(
    'kiss-man-man',
    '👨‍❤️‍💋‍👨',
    'Kiss: Man, Man',
    'U+1F468 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468',
    ['man', '#1976D2', '#0D47A1'],
    ['man', '#00897B', '#004D40'],
    ['man', 'gay', 'lgbtq']
  ),
  buildKissCouple(
    'kiss-woman-woman',
    '👩‍❤️‍💋‍👩',
    'Kiss: Woman, Woman',
    'U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F469',
    ['woman', '#EC407A', '#AD1457'],
    ['woman', '#8E24AA', '#4A148C'],
    ['woman', 'lesbian', 'lgbtq']
  ),

  // =========================================================================
  // 32–34. COUPLES WITH HEART (👩‍❤️‍👨 👨‍❤️‍👨 👩‍❤️‍👩)
  // =========================================================================
  buildCoupleWithHeart(
    'couple-with-heart-woman-man',
    '👩‍❤️‍👨',
    'Couple with Heart: Woman, Man',
    'U+1F469 U+200D U+2764 U+FE0F U+200D U+1F468',
    ['woman', '#EC4899', '#BE185D'],
    ['man', '#3B82F6', '#1D4ED8'],
    ['woman', 'man']
  ),
  buildCoupleWithHeart(
    'couple-with-heart-man-man',
    '👨‍❤️‍👨',
    'Couple with Heart: Man, Man',
    'U+1F468 U+200D U+2764 U+FE0F U+200D U+1F468',
    ['man', '#3B82F6', '#1D4ED8'],
    ['man', '#0D9488', '#115E59'],
    ['man', 'gay', 'lgbtq']
  ),
  buildCoupleWithHeart(
    'couple-with-heart-woman-woman',
    '👩‍❤️‍👩',
    'Couple with Heart: Woman, Woman',
    'U+1F469 U+200D U+2764 U+FE0F U+200D U+1F469',
    ['woman', '#EC4899', '#BE185D'],
    ['woman', '#9333EA', '#6B21A8'],
    ['woman', 'lesbian', 'lgbtq']
  ),
];
