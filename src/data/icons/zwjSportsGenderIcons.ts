import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// =============================================================================
// FULL-BODY PERSON HELPERS (matching sportsRacingIcons, sportsTravelIcons,
// transportTransitIcons, and peopleCharactersIcons)
// =============================================================================
type PersonLayer = { d: string; kind: 'shirt' | 'skin' | 'hair' | 'pants' | 'mark' | 'item'; w?: number; fill?: string };
type Pt = [number, number];
type Gender = 'man' | 'woman';

const personCircle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
const personEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const personHairShort = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 8.6;
  const v = ry / 9.2;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 17) * v).toFixed(2)}`;
  return `M${m(7.8, 15.8)} C${m(6.8, 9.2)} ${m(10.8, 5.2)} ${m(16, 5.2)} C${m(21.2, 5.2)} ${m(25.2, 9.2)} ${m(24.2, 15.8)} C${m(22.8, 12.6)} ${m(19.8, 11.0)} ${m(16, 11.0)} C${m(12.2, 11.0)} ${m(9.2, 12.6)} ${m(7.8, 15.8)} Z`;
};

const personHairNeutral = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 8.6;
  const v = ry / 9.2;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 17) * v).toFixed(2)}`;
  return `M${m(7.8, 16.4)} C${m(6.8, 9.6)} ${m(10.8, 5.4)} ${m(16, 5.4)} C${m(21.2, 5.4)} ${m(25.2, 9.6)} ${m(24.2, 16.4)} C${m(23, 13.6)} ${m(20.8, 11.8)} ${m(18.4, 10.4)} C${m(16, 13)} ${m(11.6, 14.6)} ${m(7.8, 16.4)} Z`;
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
const armOf = (sh: Pt, el: Pt, hd: Pt, shirtFill?: string): PersonLayer[] => [
  tube('skin', [el, hd], 2.6),
  tube('shirt', [sh, el], 3.4, shirtFill),
  hand(hd),
];
const legOf = (hip: Pt, kn: Pt, ft: Pt, dir = 1, kind: 'pants' | 'skin' = 'pants'): PersonLayer[] => [
  tube(kind, [hip, kn, ft], 3.6),
  shoe(ft, dir),
];

const headBackOf = (g: Gender, cx: number, cy: number, rx = 3.5, ry = 3.8): PersonLayer[] =>
  g === 'woman' ? [{ d: personHairLongBack(cx, cy, rx, ry), kind: 'hair' }] : [];

const headOfGender = (g: Gender, cx: number, cy: number, rx = 3.5, ry = 3.8): PersonLayer[] => [
  { d: personEllipse(cx, cy, rx, ry), kind: 'skin' },
  { d: g === 'man' ? personHairShort(cx, cy, rx, ry) : personHairNeutral(cx, cy, rx, ry), kind: 'hair' },
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

// Flip a rendered figure left-to-right (the badge, if any, stays where it is)
const mirrorFigure = (svg: string) => {
  const i = svg.indexOf('<g stroke-linecap');
  return `${svg.slice(0, i)}<g transform="matrix(-1 0 0 1 32 0)">${svg.slice(i)}</g>`;
};

const renderPerson = (
  opts: WimojiStyleOptions,
  layers: PersonLayer[],
  features: (ink: string, mouthFill: string, o: boolean, s: boolean, d: boolean) => string,
  id: string,
  hairColor = '#78350F',
  defaults?: { fillPrimary?: string; fillSecondary?: string; stroke?: string }
) => {
  const c = resolveColors(opts, {
    fillPrimary: defaults?.fillPrimary ?? '#FB8C00',
    fillSecondary: defaults?.fillSecondary ?? '#FFCA28',
    stroke: defaults?.stroke ?? '#E65100',
  });
  const badge = getBadgeMarkup(opts);
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

const themeFor = (g: Gender) =>
  g === 'woman'
    ? { shirt: '#EC407A', stroke: '#9D174D', hair: '#78350F' }
    : { shirt: '#1976D2', stroke: '#1E3A8A', hair: '#5D4037' };

// Bicycle with gendered rider (matching transportTransitIcons.ts cyclistLayers)
const cyclistLayers = (t: (p: Pt) => Pt, crouch: number, g: Gender, helmet = '#1E88E5'): PersonLayer[] => {
  const P = (x: number, y: number): Pt => t([x, y]);
  const wheel = (x: number, y: number): PersonLayer[] => {
    const c = P(x, y);
    return [
      { d: personCircle(c[0], c[1], 4.6), kind: 'mark', w: 1.8, fill: '#455A64' },
      { d: personCircle(c[0], c[1], 0.9), kind: 'mark', w: 1.2, fill: '#90A4AE' },
    ];
  };
  const frame = (pts: number[][]): PersonLayer => tube('mark', pts.map((p) => P(p[0], p[1])), 1.7, '#E53935');
  const hipP = P(11.6, 14.6 - crouch);
  const headCenter = P(20.6, 5.6 - crouch * 0.4);
  const tailTip = P(15.2, 6.8 - crouch * 0.4);
  return [
    ...wheel(6, 23),
    ...wheel(26, 23),
    frame([[6, 23], [12.6, 23], [11.2, 15.2], [6, 23]]),
    frame([[11.2, 15.2], [21, 14.8], [12.6, 23]]),
    frame([[21, 14.8], [26, 23]]),
    tube('mark', [P(10.8, 14.4), P(11.4, 15.8)], 2.2, '#263238'),
    tube('mark', [P(20.6, 14.8), P(22, 11.8), P(24, 12.2)], 1.5, '#263238'),
    ...legOf(hipP, P(17.8, 16.2), P(15.2, 21.6), 1, g === 'woman' ? 'skin' : 'pants'),
    ...legOf(hipP, P(10.4, 19.8), P(11.4, 25.2), -1, g === 'woman' ? 'skin' : 'pants'),
    ...(g === 'woman'
      ? [
          {
            d: `M${headCenter[0] + 2.4} ${headCenter[1] - 0.8} C${tailTip[0] + 5} ${tailTip[1] - 1.5} ${tailTip[0] + 2} ${tailTip[1] + 2} ${tailTip[0] + 1.2} ${tailTip[1] + 3.4} C${tailTip[0] + 3.4} ${tailTip[1] + 1.8} ${headCenter[0] + 1.4} ${headCenter[1] + 0.8} ${headCenter[0] + 2.4} ${headCenter[1] - 0.8} Z`,
            kind: 'hair' as const,
          },
        ]
      : []),
    tube('shirt', [hipP, P(18.2, 8.8 - crouch * 0.4)], 5.4),
    ...armOf(P(17.6, 9.6 - crouch * 0.4), P(20.8, 12.6), P(22.8, 12.6)),
    ...headOfGender(g, headCenter[0], headCenter[1], 3.2, 3.5),
    {
      d: `M${headCenter[0] - 3.4} ${headCenter[1] - 0.6} C${headCenter[0] - 3.4} ${headCenter[1] - 4.4} ${headCenter[0] - 1.6} ${headCenter[1] - 4.6} ${headCenter[0]} ${headCenter[1] - 4.6} C${headCenter[0] + 1.6} ${headCenter[1] - 4.6} ${headCenter[0] + 3.4} ${headCenter[1] - 4.4} ${headCenter[0] + 3.4} ${headCenter[1] - 0.6} C${headCenter[0] + 1.6} ${headCenter[1] - 2.2} ${headCenter[0] - 1.6} ${headCenter[1] - 2.2} ${headCenter[0] - 3.4} ${headCenter[1] - 0.6} Z`,
      kind: 'item',
      fill: helmet,
    },
  ];
};

export const zwjSportsGenderIcons: WimojiIconDef[] = [
  // =========================================================================
  // 1–2. MAN & WOMAN WALKING (🚶‍♂️ 🚶‍♀️) — mirrored to face left like 🚶
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-walking`,
      char: g === 'man' ? '🚶‍♂️' : '🚶‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Walking`,
      unicodeHex: `U+1F6B6 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['walking', 'pedestrian', 'walk', 'stroll', g, g === 'man' ? '🚶‍♂️' : '🚶‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          ...headBackOf(g, 16.6, 5.8, 3.5, 3.8),
          ...armOf([15.4, 11.6], [13.2, 15.6], [11.8, 19]),
          ...legOf([15, 19], [13, 24.4], [10.2, 28.6], -1, g === 'woman' ? 'skin' : 'pants'),
          ...(g === 'woman'
            ? [{ d: 'M13.6 10.6 H18.8 L20.4 21.6 H12.4 Z', kind: 'shirt' as const }]
            : [tube('shirt', [[16.2, 10.6], [15.4, 19.2]], 6.4)]),
          ...legOf([16, 19], [19, 24], [20.8, 29.2], 1, g === 'woman' ? 'skin' : 'pants'),
          ...armOf([17, 11.6], [19, 15.6], [20.6, 18.8]),
          ...headOfGender(g, 16.6, 5.8, 3.5, 3.8),
        ];
        return mirrorFigure(
          renderPerson(
            opts,
            layers,
            (ink, _m, o, s) => faceAt(ink, 16.6, 5.8, 1, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined),
            `${g}-walk`,
            th.hair,
            { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
          )
        );
      },
    };
  }),

  // =========================================================================
  // 3–4. MAN & WOMAN GOLFING (🏌️‍♂️ 🏌️‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-golfing`,
      char: g === 'man' ? '🏌️‍♂️' : '🏌️‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Golfing`,
      unicodeHex: `U+1F3CC U+FE0F U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['golfer', 'golf', 'golfing', 'swing', 'club', g, g === 'man' ? '🏌️‍♂️' : '🏌️‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          { d: 'M1 30.4 H31', kind: 'mark', w: 1.8, fill: '#66BB6A' },
          tube('mark', [[19.2, 19.8], [25, 29]], 1, '#78909C'),
          { d: personEllipse(25.6, 29.4, 1.6, 0.8), kind: 'item', fill: '#546E7A' },
          { d: personCircle(29, 29.2, 1.3), kind: 'item', fill: '#FFFFFF' },
          ...(g === 'woman'
            ? [{ d: 'M10.4 5.8 C7.8 5.6 6.2 7.8 5.8 10.6 C8 10 9.6 8.6 10.6 7.2 Z', kind: 'hair' as const }]
            : []),
          ...legOf([13.6, 20.6], [11.4, 25.4], [10.4, 29.6], -1, g === 'woman' ? 'skin' : 'pants'),
          ...legOf([16.6, 20.6], [18.2, 25.4], [19.4, 29.6], 1, g === 'woman' ? 'skin' : 'pants'),
          ...(g === 'woman'
            ? [{ d: 'M11.6 12.2 H17.4 L19.4 22.0 H10.6 Z', kind: 'shirt' as const }]
            : [tube('shirt', [[14.4, 12.6], [15, 20.8]], 6.6)]),
          ...armOf([15.8, 13], [17.8, 16.6], [19.2, 19.8]),
          ...headOfGender(g, 13.4, 7, 3.4, 3.7),
          {
            d: 'M9.8 6.2 C10 3 12.2 2.8 14.4 3 C16.4 3.2 17.4 4.6 17.6 6.2 L20 6.8 L17.4 7.4 C14 5.4 11.6 5.4 9.8 6.2 Z',
            kind: 'item',
            fill: g === 'woman' ? '#F43F5E' : '#43A047',
          },
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => faceAt(ink, 13.4, 7.4, 1, 0.9, g === 'woman' && !o && !s ? '#E11D48' : undefined),
          `${g}-golf`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 5–6. MAN & WOMAN SURFING (🏄‍♂️ 🏄‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-surfing`,
      char: g === 'man' ? '🏄‍♂️' : '🏄‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Surfing`,
      unicodeHex: `U+1F3C4 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['surfer', 'surfing', 'wave', 'surfboard', 'ocean', g, g === 'man' ? '🏄‍♂️' : '🏄‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          tube('item', [[2.6, 27.8], [29.4, 26]], 3, '#FFEE58'),
          ...headBackOf(g, 15.6, 6.6, 3.5, 3.8),
          ...armOf([14.6, 12.2], [8.8, 14], [5, 10.6]),
          ...legOf([14.4, 19.4], [11, 22.6], [9.6, 26.2], 1, g === 'woman' ? 'skin' : 'pants'),
          tube('shirt', [[15.4, 11.4], [14.8, 19.4]], 6.4),
          ...legOf([15.8, 19.4], [19.2, 22.4], [21, 25.4], 1, g === 'woman' ? 'skin' : 'pants'),
          ...armOf([16.6, 12.2], [22.8, 12.4], [27.6, 9]),
          ...headOfGender(g, 15.6, 6.6),
          { d: 'M0 29.4 C4 27.6 8 31.4 12 29.4 S20 27.6 24 29.4 S29 31.4 32 29.4 V32 H0 Z', kind: 'item', fill: '#4FC3F7' },
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => faceAt(ink, 15.6, 6.6, 0, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined),
          `${g}-surf`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 7–8. MAN & WOMAN ROWING BOAT (🚣‍♂️ 🚣‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-rowing-boat`,
      char: g === 'man' ? '🚣‍♂️' : '🚣‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Rowing Boat`,
      unicodeHex: `U+1F6A3 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['rowboat', 'rowing', 'boat', 'oar', 'paddle', g, g === 'man' ? '🚣‍♂️' : '🚣‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          ...headBackOf(g, 13.4, 6.2, 3.1, 3.4),
          tube('shirt', [[15.4, 16], [13.8, 9.8]], 5),
          ...headOfGender(g, 13.4, 6.2, 3.1, 3.4),
          { d: 'M2.6 17.4 H29.4 C28.6 22.8 22.6 25.4 16 25.4 C9.4 25.4 3.4 22.8 2.6 17.4 Z', kind: 'item', fill: '#B45309' },
          { d: 'M3 18.4 H29', kind: 'mark', w: 1, fill: '#FBBF24' },
          { d: 'M1.6 28.4 C4.6 26.8 7.6 29.6 10.6 28.4 S16.6 26.8 19.6 28.4 S25.6 29.6 30.4 27.6', kind: 'mark', w: 1.8, fill: '#0284C7' },
          tube('item', [[22.8, 10.2], [9.6, 26.4]], 1.5, '#92400E'),
          tube('item', [[10.6, 25.2], [8.4, 28]], 3.2, '#92400E'),
          ...armOf([14.4, 10.8], [18.4, 13.6], [21.6, 11.8]),
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => faceAt(ink, 13.4, 6.3, 1, 0.9, g === 'woman' && !o && !s ? '#E11D48' : undefined),
          `${g}-row`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 9–10. MAN & WOMAN SWIMMING (🏊‍♂️ 🏊‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-swimming`,
      char: g === 'man' ? '🏊‍♂️' : '🏊‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Swimming`,
      unicodeHex: `U+1F3CA U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['swimmer', 'swimming', 'pool', 'water', 'crawl', g, g === 'man' ? '🏊‍♂️' : '🏊‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          ...legOf([22.6, 18.6], [26.2, 19], [29, 17.8], 1, 'skin'),
          tube('shirt', [[11.6, 15.6], [23, 18.6]], 6.2),
          ...(g === 'woman'
            ? [{ d: 'M11.6 12.6 C14.6 11.8 16.4 13.6 17.2 15.4 C14.8 15.2 13.0 14.4 11.6 13.8 Z', kind: 'hair' as const }]
            : []),
          ...headOfGender(g, 8.2, 14.4, 3.7, 3.9),
          {
            d: 'M4.3 14.2 C3.8 9 6.2 9 8.2 9 C10.2 9 12.6 9 12.1 14.2 C10.2 12.6 6.2 12.6 4.3 14.2 Z',
            kind: 'item',
            fill: g === 'woman' ? '#F472B6' : '#F5F5F5',
          },
          { d: personCircle(6.4, 14.8, 1.4), kind: 'item', fill: '#29B6F6' },
          { d: personCircle(10, 14.8, 1.4), kind: 'item', fill: '#29B6F6' },
          ...armOf([14.2, 14.4], [21.4, 9.4], [27.8, 12.6]),
          {
            d: 'M1.4 21 C4.6 18.8 8.4 22.8 12.4 20.8 S20.4 18.8 24.4 20.8 S29 22.2 30.6 20.8 C31.4 24.6 29 28 24 28.6 C18 29.6 14 27.8 9 28.6 C4.6 29 1.6 26 1.4 21 Z',
            kind: 'item',
            fill: '#4FC3F7',
          },
          { d: 'M3.6 25.4 C6 23.8 9 26.8 12.4 25.4 M17 27.6 C20 26.2 23.4 29 27 27.4', kind: 'mark', w: 1.2, fill: '#E1F5FE' },
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => personLine(g === 'woman' && !o && !s ? '#E11D48' : ink, 'M7 17.6 C7.8 18.2 8.8 18.2 9.6 17.6', g === 'woman' ? 0.9 : 0.7),
          `${g}-swim`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 11–12. MAN & WOMAN BOUNCING BALL (⛹️‍♂️ ⛹️‍♀️) — mirrored like ⛹️
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-bouncing-ball`,
      char: g === 'man' ? '⛹️‍♂️' : '⛹️‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Bouncing Ball`,
      unicodeHex: `U+26F9 U+FE0F U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['basketball', 'dribble', 'ball', 'bounce', 'player', g, g === 'man' ? '⛹️‍♂️' : '⛹️‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          { d: personEllipse(22.4, 30.2, 3, 0.8), kind: 'item', fill: '#CFD8DC' },
          ...(g === 'woman'
            ? [{ d: 'M11.6 4.8 C8.8 4.4 7.0 6.6 6.4 9.4 C8.6 8.8 10.6 7.4 11.8 6.2 Z', kind: 'hair' as const }]
            : []),
          ...legOf([13.6, 19.6], [10.6, 24.6], [8, 29.2], -1, g === 'woman' ? 'skin' : 'pants'),
          ...armOf([12.6, 12.4], [8.4, 15], [6.4, 11.6]),
          tube('shirt', [[14.6, 11.4], [14, 19.8]], 6.4),
          ...legOf([15, 19.8], [18.4, 24.2], [17.6, 29.2], 1, g === 'woman' ? 'skin' : 'pants'),
          ...armOf([16.4, 12.4], [20.4, 15.6], [21.6, 20]),
          ...headOfGender(g, 14.8, 6, 3.5, 3.8),
          { d: personCircle(22.4, 24.6, 3.4), kind: 'item', fill: '#F97316' },
          { d: 'M19 24.6 H25.8 M22.4 21.2 V28 M20 22.2 C21.4 23.6 21.4 25.6 20 27 M24.8 22.2 C23.4 23.6 23.4 25.6 24.8 27', kind: 'mark', w: 0.5, fill: '#7C2D12' },
        ];
        return mirrorFigure(
          renderPerson(
            opts,
            layers,
            (ink, _m, o, s) => faceAt(ink, 14.8, 6, 1, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined),
            `${g}-bounce`,
            th.hair,
            { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
          )
        );
      },
    };
  }),

  // =========================================================================
  // 13–14. MAN & WOMAN LIFTING WEIGHTS (🏋️‍♂️ 🏋️‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-lifting-weights`,
      char: g === 'man' ? '🏋️‍♂️' : '🏋️‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Lifting Weights`,
      unicodeHex: `U+1F3CB U+FE0F U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['weightlifter', 'lifting', 'barbell', 'weights', 'gym', g, g === 'man' ? '🏋️‍♂️' : '🏋️‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          tube('mark', [[2.6, 4], [29.4, 4]], 1.6, '#78909C'),
          tube('item', [[5, 0.6], [5, 7.4]], 2.8, '#455A64'),
          tube('item', [[27, 0.6], [27, 7.4]], 2.8, '#455A64'),
          tube('item', [[2.4, 2], [2.4, 6]], 1.8, '#90A4AE'),
          tube('item', [[29.6, 2], [29.6, 6]], 1.8, '#90A4AE'),
          ...headBackOf(g, 16, 9.6, 3.5, 3.8),
          ...legOf([13.4, 22], [10.4, 25.6], [9, 29.6], -1, g === 'woman' ? 'skin' : 'pants'),
          ...legOf([18.6, 22], [21.6, 25.6], [23, 29.6], 1, g === 'woman' ? 'skin' : 'pants'),
          tube('shirt', [[16, 14.4], [16, 22]], 7.2),
          ...armOf([12.2, 14.8], [9.8, 9.8], [8.4, 4.4]),
          ...armOf([19.8, 14.8], [22.2, 9.8], [23.6, 4.4]),
          ...headOfGender(g, 16, 9.6),
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) =>
            faceAt(ink, 16, 9.6, 0, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined) +
            personLine(ink, 'M13.4 7.4 L14.8 7.8 M18.6 7.4 L17.2 7.8', 0.8),
          `${g}-lift`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 15–16. MAN & WOMAN BIKING (🚴‍♂️ 🚴‍♀️) — facing left like 🚴
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    const mir = (p: Pt): Pt => [+(32 - p[0]).toFixed(2), p[1]];
    const head = mir([20.9, 5.9]);
    return {
      id: `${g}-biking`,
      char: g === 'man' ? '🚴‍♂️' : '🚴‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Biking`,
      unicodeHex: `U+1F6B4 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['biking', 'cyclist', 'bicycle', 'cycling', 'race', g, g === 'man' ? '🚴‍♂️' : '🚴‍♀️'],
      renderContent: (opts) =>
        renderPerson(
          opts,
          cyclistLayers(mir, 0, g, g === 'woman' ? '#EC407A' : '#1E88E5'),
          (ink, _m, o, s) => faceAt(ink, head[0], head[1], -1, 0.8, g === 'woman' && !o && !s ? '#E11D48' : undefined),
          `${g}-bike`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        ),
    };
  }),

  // =========================================================================
  // 17–18. MAN & WOMAN MOUNTAIN BIKING (🚵‍♂️ 🚵‍♀️) — facing left with mountains
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    const tilt = (p: Pt): Pt => {
      const a = (7 * Math.PI) / 180;
      const x = p[0] - 16;
      const y = p[1] - 16;
      return [
        +(32 - (16 + x * Math.cos(a) - y * Math.sin(a)) - 0.4).toFixed(2),
        +(16 + x * Math.sin(a) + y * Math.cos(a) + 0.2).toFixed(2),
      ];
    };
    const head = tilt([20.6, 5.6 - 0.56]);
    return {
      id: `${g}-mountain-biking`,
      char: g === 'man' ? '🚵‍♂️' : '🚵‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Mountain Biking`,
      unicodeHex: `U+1F6B5 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['mountain biking', 'mountain bike', 'mtb', 'trail', 'cyclist', g, g === 'man' ? '🚵‍♂️' : '🚵‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          ...(opts.style === 'silhouette'
            ? []
            : ([
                { d: 'M0 22 L8 9 L13.4 17 L20.4 4.6 L32 22 V32 H0 Z', kind: 'item', fill: '#BCAAA4' },
                { d: 'M20.4 4.6 L16.8 10.6 L19 10 L20.6 12.6 L22.4 9.8 L24.4 11 Z', kind: 'item', fill: '#EFEBE9' },
              ] as PersonLayer[])),
          { d: 'M0 30.6 C8 29.4 20 31.6 32 29.4', kind: 'mark', w: 1.6, fill: '#8D6E63' },
          ...cyclistLayers(tilt, 1.4, g, g === 'woman' ? '#EC407A' : '#263238'),
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => faceAt(ink, head[0], head[1] + 0.3, -1, 0.8, g === 'woman' && !o && !s ? '#E11D48' : undefined),
          `${g}-mtb`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 19–20. MAN & WOMAN CARTWHEELING (🤸‍♂️ 🤸‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-cartwheeling`,
      char: g === 'man' ? '🤸‍♂️' : '🤸‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Cartwheeling`,
      unicodeHex: `U+1F938 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['cartwheel', 'gymnastics', 'acrobatics', 'flip', g, g === 'man' ? '🤸‍♂️' : '🤸‍♀️'],
      renderContent: (opts) => {
        const legKind: 'pants' | 'skin' = g === 'woman' ? 'skin' : 'pants';
        const layers: PersonLayer[] = [
          { d: 'M4 14 C3 8 7 4 11 3', kind: 'mark', w: 1 },
          ...(g === 'woman'
            ? [{ d: 'M7.2 16.2 C5.4 18.6 5.6 21.8 7.8 23.4 C8.2 21.2 8.8 18.8 9.2 17.2 Z', kind: 'hair' as const }]
            : []),
          { d: 'M12 18 L9.5 24', kind: 'shirt', w: 3.2 },
          { d: 'M9.5 24 L8 28.5', kind: 'skin', w: 2.8 },
          { d: 'M6 29.5 H10', kind: 'skin', w: 2 },
          { d: 'M17 17 L15.5 23.5', kind: 'shirt', w: 3.2 },
          { d: 'M15.5 23.5 L14.5 28.5', kind: 'skin', w: 2.8 },
          { d: 'M12.5 29.5 H16.5', kind: 'skin', w: 2 },
          { d: 'M11 19.5 L18 18.5 L21.5 12.5 L15 13 Z', kind: 'shirt' },
          { d: 'M15.5 13 L10 8 L5 6.5', kind: legKind, w: 3.4 },
          { d: 'M5 6.5 L3.5 6 C3.2 6.5 4 8 5.5 7.5 Z', kind: 'skin' },
          { d: 'M21 12 L25 8 L28.5 5', kind: legKind, w: 3.4 },
          { d: 'M28.5 5 L30 4.5 C30.6 5.5 29.5 7 28 6.5 Z', kind: 'skin' },
          { d: personEllipse(10.5, 14, 4.8, 5.2), kind: 'skin' },
          { d: g === 'man' ? personHairShort(10.5, 14, 4.8, 5.2) : personHairNeutral(10.5, 14, 4.8, 5.2), kind: 'hair' },
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) =>
            personEyes(ink, [[9, 14.5], [12.5, 14]], 0.85) +
            personLine(g === 'woman' && !o && !s ? '#E11D48' : ink, 'M9 16 C10.5 17.5 12.5 17 13.5 15.5', g === 'woman' ? 1.3 : 1.1),
          `${g}-cartwheel`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 21–22. MEN & WOMEN WRESTLING (🤼‍♂️ 🤼‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: g === 'man' ? 'men-wrestling' : 'women-wrestling',
      char: g === 'man' ? '🤼‍♂️' : '🤼‍♀️',
      name: g === 'man' ? 'Men Wrestling' : 'Women Wrestling',
      unicodeHex: `U+1F93C U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['wrestling', 'wrestlers', 'grappling', 'singlet', g === 'man' ? 'men' : 'women', g === 'man' ? '🤼‍♂️' : '🤼‍♀️'],
      renderContent: (opts) => {
        const legKind: 'pants' | 'skin' = g === 'woman' ? 'skin' : 'pants';
        const layers: PersonLayer[] = [
          ...(g === 'woman'
            ? [
                { d: 'M9.8 5.8 C6.8 5.6 5.4 7.8 5.2 10.6 C7.4 10 8.8 8.6 9.8 7.4 Z', kind: 'hair' as const },
                { d: 'M22.2 5.8 C25.2 5.6 26.6 7.8 26.8 10.6 C24.6 10 23.2 8.6 22.2 7.4 Z', kind: 'hair' as const },
              ]
            : []),
          ...legOf([7.8, 20.6], [5.2, 24.8], [3.8, 29.2], -1, legKind),
          ...legOf([10.4, 20.6], [11.4, 25], [9.8, 29.2], 1, legKind),
          ...legOf([24.2, 20.6], [26.8, 24.8], [28.2, 29.2], 1, legKind),
          ...legOf([21.6, 20.6], [20.6, 25], [22.2, 29.2], -1, legKind),
          tube('shirt', [[11.4, 12.8], [8.8, 20.8]], 6.4, g === 'woman' ? '#EC407A' : '#E53935'),
          tube('pants', [[20.6, 12.8], [23.2, 20.8]], 6.4, g === 'woman' ? '#8E24AA' : '#1E88E5'),
          tube('skin', [[12.4, 13.4], [15.8, 15.6], [20.4, 14]], 2.4),
          tube('skin', [[19.6, 14.2], [16.2, 17.2], [11.6, 15]], 2.4),
          ...headOfGender(g, 12.6, 7.8, 3.5, 3.8),
          ...headOfGender(g, 19.4, 7.8, 3.5, 3.8),
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => {
            const mCol = g === 'woman' && !o && !s ? '#E11D48' : ink;
            return (
              personEyes(ink, [[11.4, 8.2], [13.6, 8.2]], 0.7) +
              personLine(mCol, 'M11.8 10.2 H13.2', g === 'woman' ? 1.0 : 0.8) +
              personEyes(ink, [[18.4, 8.2], [20.6, 8.2]], 0.7) +
              personLine(mCol, 'M18.8 10.2 H20.2', g === 'woman' ? 1.0 : 0.8)
            );
          },
          `${g}-wrestle`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 23–24. MAN & WOMAN PLAYING WATER POLO (🤽‍♂️ 🤽‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-playing-water-polo`,
      char: g === 'man' ? '🤽‍♂️' : '🤽‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Playing Water Polo`,
      unicodeHex: `U+1F93D U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['water polo', 'pool', 'ball', 'throw', 'swim cap', g, g === 'man' ? '🤽‍♂️' : '🤽‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          tube('shirt', [[13.8, 17.8], [13.4, 24]], 6.2),
          ...armOf([11, 17.8], [6.8, 20.4], [3.6, 19]),
          ...armOf([16.6, 17.8], [21.6, 14], [23.4, 8.6]),
          ...(g === 'woman'
            ? [{ d: 'M10.4 10.4 C7.8 10.2 6.4 12.2 6.0 14.8 C8.2 14.2 9.6 13.0 10.6 11.8 Z', kind: 'hair' as const }]
            : []),
          ...headOfGender(g, 14, 12.2, 3.5, 3.8),
          {
            d: 'M10.2 12.4 C9.8 7.4 12 7.8 14 7.8 C16 7.8 18.2 7.4 17.8 12.4 C16.4 11.2 11.6 11.2 10.2 12.4 Z',
            kind: 'item',
            fill: g === 'woman' ? '#EC407A' : '#1E88E5',
          },
          { d: personCircle(24.2, 5.6, 2.7), kind: 'item', fill: '#FDD835' },
          { d: 'M0 20.6 C4 18.8 8 22.4 12 20.6 S20 18.8 24 20.6 S29 22.4 32 20.6 V32 H0 Z', kind: 'item', fill: '#4FC3F7' },
          { d: 'M3 25.6 C6 24.2 9 27 12 25.6 M18 28 C21 26.6 24 29.4 27 28', kind: 'mark', w: 1.2, fill: '#E1F5FE' },
          { d: personCircle(29.4, 11.4, 0.8), kind: 'item', fill: '#4FC3F7' },
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) =>
            faceAt(ink, 14, 12.2, 1, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined) +
            personLine(ink, 'M22.6 4.4 C23.4 5.4 25 5.6 25.8 4.6 M24.2 3 V8.2', 0.5),
          `${g}-polo`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 25–26. MAN & WOMAN PLAYING HANDBALL (🤾‍♂️ 🤾‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-playing-handball`,
      char: g === 'man' ? '🤾‍♂️' : '🤾‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Playing Handball`,
      unicodeHex: `U+1F93E U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['handball', 'throw', 'jump', 'ball', 'athlete', g, g === 'man' ? '🤾‍♂️' : '🤾‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          ...(g === 'woman'
            ? [{ d: 'M20.2 5.0 C23.0 4.6 24.8 6.8 25.4 9.6 C23.2 9.0 21.4 7.8 20.0 6.4 Z', kind: 'hair' as const }]
            : []),
          ...legOf([13.6, 19.8], [10.8, 24.8], [8.2, 29.2], -1, g === 'woman' ? 'skin' : 'pants'),
          ...armOf([15.4, 12.2], [10.6, 10.8], [8.8, 6]),
          tube('shirt', [[15.8, 11.4], [14.4, 19.6]], 6.4),
          ...legOf([15.4, 19.8], [21, 20.8], [20.6, 26.6], 1, g === 'woman' ? 'skin' : 'pants'),
          ...armOf([17.2, 12.2], [21.6, 13], [25.4, 10.8]),
          ...headOfGender(g, 17.2, 6.4),
          { d: personCircle(8.4, 3.8, 2.6), kind: 'item', fill: '#42A5F5' },
          { d: 'M6.4 2.4 C7.6 3.4 7.6 4.6 6.6 5.6', kind: 'mark', w: 0.6, fill: '#FFFFFF' },
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => faceAt(ink, 17.2, 6.4, 1, 1, g === 'woman' && !o && !s ? '#E11D48' : undefined),
          `${g}-handball`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),

  // =========================================================================
  // 27–28. MAN & WOMAN JUGGLING (🤹‍♂️ 🤹‍♀️)
  // =========================================================================
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => {
    const th = themeFor(g);
    return {
      id: `${g}-juggling`,
      char: g === 'man' ? '🤹‍♂️' : '🤹‍♀️',
      name: `${g === 'man' ? 'Man' : 'Woman'} Juggling`,
      unicodeHex: `U+1F939 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
      category: 'people-body',
      tags: ['juggling', 'juggler', 'balls', 'circus', 'performer', g, g === 'man' ? '🤹‍♂️' : '🤹‍♀️'],
      renderContent: (opts) => {
        const layers: PersonLayer[] = [
          { d: 'M5.4 20 C4.6 4 11 1.6 16 1.6 C21 1.6 27.4 4 26.6 20', kind: 'mark', w: 0.9 },
          ...headBackOf(g, 16, 14.4, 5.2, 5.6),
          tube('skin', [[6.4, 28], [5.6, 22.4]], 2.8),
          tube('shirt', [[10, 25], [6.8, 29]], 4),
          hand([5.4, 20.8], 1.9),
          tube('skin', [[25.6, 28], [26.4, 22.4]], 2.8),
          tube('shirt', [[22, 25], [25.2, 29]], 4),
          hand([26.6, 20.8], 1.9),
          { d: 'M6.4 32 C6.4 25.6 10 22 16 22 C22 22 25.6 25.6 25.6 32 Z', kind: 'shirt' },
          ...headOfGender(g, 16, 14.4, 5.2, 5.6),
          { d: personCircle(6, 11, 2.3), kind: 'item', fill: '#EF4444' },
          { d: personCircle(16, 3.8, 2.3), kind: 'item', fill: '#3B82F6' },
          { d: personCircle(26, 11, 2.3), kind: 'item', fill: '#10B981' },
        ];
        return renderPerson(
          opts,
          layers,
          (ink, _m, o, s) => faceAt(ink, 16, 14.8, 0, 1.5, g === 'woman' && !o && !s ? '#E11D48' : undefined),
          `${g}-juggling`,
          th.hair,
          { fillPrimary: th.shirt, fillSecondary: '#FFCA28', stroke: th.stroke }
        );
      },
    };
  }),
];
