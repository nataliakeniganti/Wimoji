import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

type Gender = 'man' | 'woman';

type PersonLayer = {
  d: string;
  kind: 'shirt' | 'skin' | 'hair' | 'pants' | 'mark' | 'item';
  w?: number;
  fill?: string;
};

type FigLayer = {
  d: string;
  fill: string;
  stroke?: string;
  skin?: boolean;
};

interface Figure {
  id: string;
  layers: FigLayer[];
  features: (ink: string, o: boolean, s: boolean) => string;
}

const f = (n: number) => +n.toFixed(2);

const figEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const figQuad = (x0: number, y0: number, x1: number, y1: number, w: number) => {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * (w / 2);
  const ny = (dx / len) * (w / 2);
  return `M${f(x0 + nx)} ${f(y0 + ny)} L${f(x1 + nx)} ${f(y1 + ny)} L${f(x1 - nx)} ${f(y1 - ny)} L${f(x0 - nx)} ${f(y0 - ny)} Z`;
};

const figLine = (col: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" />`;
const figDots = (col: string, pts: Array<[number, number]>, r = 0.95) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" stroke="none" />`).join('');

const SHORT_HAIR =
  'M9.6 11.8 C8.8 6.4 11.8 3.6 16 3.6 C20.2 3.6 23.2 6.4 22.4 11.8 C21.2 9.6 19 8.4 16 8.4 C13 8.4 10.8 9.6 9.6 11.8 Z';
const LONG_HAIR_BACK =
  'M9 12.4 C7.4 6 11.4 3 16 3 C20.6 3 24.6 6 23 12.4 C22.6 16.4 23.4 20 25 22.6 C22 23 20.4 21.6 19.4 19.8 L12.6 19.8 C11.6 21.6 10 23 7 22.6 C8.6 20 9.4 16.4 9 12.4 Z';
const FRINGE =
  'M9.8 11.8 C9.2 6.6 12 4 16 4 C20 4 22.8 6.6 22.2 11.8 C20.2 9.8 17.2 8.4 14.8 6.6 C13.6 9 11.6 10.8 9.8 11.8 Z';

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
  return `M${m(6.8, 16.8)} C${m(5.0, 9.0)} ${m(10.0, 4.4)} ${m(16, 4.4)} C${m(22.0, 4.4)} ${m(27.0, 9.0)} ${m(25.2, 16.8)} C${m(24.8, 21.8)} ${m(25.8, 25.4)} ${m(27.0, 28.0)} C${m(23.8, 28.4)} ${m(22.0, 26.8)} ${m(20.6, 25.0)} H${m(11.4, 25.0)} C${m(10.0, 26.8)} ${m(8.2, 28.4)} ${m(5.0, 28.0)} C${m(6.2, 25.4)} ${m(7.2, 21.8)} ${m(6.8, 16.8)} Z`;
};

const personEyes = (ink: string, pts: Array<[number, number]>, r = 0.9) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}" stroke="none" />`).join('');
const personLine = (ink: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${w}" />`;

const shirtPalette = (g: Gender) =>
  g === 'man'
    ? { fill: '#1976D2', stroke: '#1E3A8A', hair: '#6D4C41' }
    : { fill: '#EC407A', stroke: '#9D174D', hair: '#78350F' };

function figInner(opts: WimojiStyleOptions, fig: Figure): string {
  const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#78350F', stroke: '#FFA000' });
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : 0.95;
  const sep = 0.9;
  const fillOf = (l: FigLayer) => (s || l.skin ? c.primary : d ? c.secondary : l.fill);
  const cover = (l: FigLayer) => `<path d="${l.d}" fill="#000" stroke="#000" stroke-width="${t}" />`;
  const draw = (l: FigLayer) => {
    if (o) return `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (s) return `<path d="${l.d}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="${sep}" />`;
    if (l.skin) return `<path d="${l.d}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (d) return `<path d="${l.d}" fill="${c.secondary}" stroke="#FFFFFF" stroke-width="0.6" />`;
    return `<path d="${l.d}" fill="${fillOf(l)}" stroke="${l.stroke ?? 'none'}" stroke-width="0.75" />`;
  };
  const body = fig.layers
    .map((l, i) => {
      const later = fig.layers.slice(i + 1).map(cover).join('');
      if (!o || !later) return draw(l);
      return `<mask id="wimoji-${fig.id}-${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${later}</mask><g mask="url(#wimoji-${fig.id}-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');
  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
  return `<g stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${fig.features(ink, o, s)}
      </g>`;
}

const renderFigure = (opts: WimojiStyleOptions, fig: Figure) => `${getBadgeMarkup(opts)}${figInner(opts, fig)}`;

const figBase = (shirt: string, shirtStroke: string, ears = true): FigLayer[] => [
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

const renderPerson = (
  opts: WimojiStyleOptions,
  layers: PersonLayer[],
  features: (ink: string, mouthFill: string, o: boolean, s: boolean, d: boolean) => string,
  id: string,
  g: Gender
) => {
  const pal = shirtPalette(g);
  const c = resolveColors(opts, {
    fillPrimary: pal.fill,
    fillSecondary: '#FFCA28',
    stroke: pal.stroke,
  });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : 1.05;

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
      : pal.hair;

  const strokeOf = (k: PersonLayer['kind']) =>
    s ? '#FFFFFF' : o ? c.stroke : k === 'skin' ? '#FFA000' : c.stroke;

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
    const st = strokeOf(l.kind);
    if (s) {
      return l.w
        ? `<path d="${l.d}" fill="none" stroke="#FFFFFF" stroke-width="${l.w + 1.6}" /><path d="${l.d}" fill="none" stroke="${col}" stroke-width="${l.w}" />`
        : `<path d="${l.d}" fill="${col}" stroke="#FFFFFF" stroke-width="0.9" />`;
    }
    return l.w
      ? `<path d="${l.d}" fill="none" stroke="${st}" stroke-width="${l.w + 2 * t}" /><path d="${l.d}" fill="none" stroke="${col}" stroke-width="${l.w}" />`
      : `<path d="${l.d}" fill="${col}" stroke="${l.kind === 'hair' ? 'none' : st}" stroke-width="${t}" />`;
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

const lashLine = (g: Gender, ink: string, lx = 11.2, ly = 13.0, rx = 20.8, ry = 13.0) =>
  g === 'woman'
    ? personLine(ink, `M${lx} ${ly} L${lx - 0.8} ${ly - 0.5} M${rx} ${ry} L${rx + 0.8} ${ry - 0.5}`, 0.8)
    : '';

const mouthColOf = (g: Gender, ink: string, o: boolean, s: boolean) =>
  o ? ink : s ? '#FFFFFF' : g === 'woman' ? '#E11D48' : ink;

export const zwjPersonGesturesIcons: WimojiIconDef[] = [
  // 1–2. MAN & WOMAN FROWNING (🙍‍♂️ 🙍‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-frowning`,
    char: g === 'man' ? '🙍‍♂️' : '🙍‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Frowning`,
    unicodeHex: `U+1F64D U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'frowning', 'frown', 'sad', 'disappointed', 'unhappy', g === 'man' ? '🙍‍♂️' : '🙍‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personHairLongBack(16, 12.6, 6.4, 6.8), kind: 'hair' as const }] : []),
        { d: 'M13.4 17.6 H18.6 V22 H13.4 Z', kind: 'skin' },
        { d: 'M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z', kind: 'shirt' },
        { d: personEllipse(16, 12.6, 6.4, 6.8), kind: 'skin' },
        {
          d: g === 'man' ? personHairShort(16, 12.6, 6.4, 6.8) : personHairNeutral(16, 12.6, 6.4, 6.8),
          kind: 'hair',
        },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) =>
          personLine(ink, 'M11.2 11.6 L14.4 10.4 M20.8 11.6 L17.6 10.4', 1.2) +
          lashLine(g, ink, 11.6, 13.4, 20.4, 13.4) +
          personEyes(ink, [[13.2, 13.6], [18.8, 13.6]]) +
          personLine(mouthColOf(g, ink, o, s), 'M13.4 17.4 C14.6 16 17.4 16 18.6 17.4', g === 'woman' ? 1.5 : 1.3),
        `${g}-frowning`,
        g
      );
    },
  })),

  // 3–4. MAN & WOMAN POUTING (🙎‍♂️ 🙎‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-pouting`,
    char: g === 'man' ? '🙎‍♂️' : '🙎‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Pouting`,
    unicodeHex: `U+1F64E U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'pouting', 'pout', 'sulking', 'mad', 'huff', g === 'man' ? '🙎‍♂️' : '🙎‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personHairLongBack(16, 12.6, 6.4, 6.8), kind: 'hair' as const }] : []),
        { d: 'M13.4 17.6 H18.6 V22 H13.4 Z', kind: 'skin' },
        { d: 'M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z', kind: 'shirt' },
        { d: personEllipse(16, 12.6, 6.4, 6.8), kind: 'skin' },
        {
          d: g === 'man' ? personHairShort(16, 12.6, 6.4, 6.8) : personHairNeutral(16, 12.6, 6.4, 6.8),
          kind: 'hair',
        },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouth, o, s) =>
          personLine(ink, 'M11 10.4 L14.8 12 M21 10.4 L17.2 12', 1.2) +
          lashLine(g, ink, 11.6, 13.8, 20.4, 13.8) +
          personEyes(ink, [[13.2, 14], [18.8, 14]]) +
          `<ellipse cx="16" cy="17.2" rx="1.6" ry="1.1" fill="${o || s ? mouth : g === 'woman' ? '#E11D48' : mouth}" stroke="${ink}" stroke-width="0.8" />` +
          (!o && !s ? '<circle cx="11.4" cy="16.2" r="1.2" fill="#F87171" opacity="0.55" /><circle cx="20.6" cy="16.2" r="1.2" fill="#F87171" opacity="0.55" />' : ''),
        `${g}-pouting`,
        g
      );
    },
  })),

  // 5–6. MAN & WOMAN GESTURING NO (🙅‍♂️ 🙅‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-gesturing-no`,
    char: g === 'man' ? '🙅‍♂️' : '🙅‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Gesturing NO`,
    unicodeHex: `U+1F645 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'gesturing no', 'no', 'stop', 'crossed arms', 'forbidden', g === 'man' ? '🙅‍♂️' : '🙅‍♀️'],
    renderContent: (opts) => {
      const pal = shirtPalette(g);
      const palm = (cx: number, cy: number, deg: number) => {
        const a = (deg * Math.PI) / 180;
        const rx = 3.2;
        const ry = 1.9;
        const p0 = `${f(cx - rx * Math.cos(a))} ${f(cy - rx * Math.sin(a))}`;
        const p1 = `${f(cx + rx * Math.cos(a))} ${f(cy + rx * Math.sin(a))}`;
        return `M${p0} A${rx} ${ry} ${deg} 1 0 ${p1} A${rx} ${ry} ${deg} 1 0 ${p0} Z`;
      };
      const base = figBase(pal.fill, pal.stroke, g === 'man');
      const layers: FigLayer[] = [
        ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: pal.hair }] : []),
        base[0],
        base[1],
        { d: figQuad(25, 32, 5.6, 13.6, 4), fill: pal.fill, stroke: pal.stroke },
        { d: figQuad(7, 32, 26.4, 13.6, 4), fill: pal.fill, stroke: pal.stroke },
        { d: palm(4.2, 12, 45), fill: '', skin: true },
        { d: palm(27.8, 12, -45), fill: '', skin: true },
        ...base.slice(2),
        { d: g === 'man' ? SHORT_HAIR : FRINGE, fill: pal.hair },
      ];
      return renderFigure(opts, {
        id: `${g}-gesturing-no`,
        layers,
        features: (ink, o, s) =>
          (g === 'man' ? figLine(ink, 'M11.6 11.4 L14.4 11.1 M17.6 11.1 L20.4 11.4', 1.05) : '') +
          (g === 'woman' ? figLine(ink, 'M11.8 12.4 L11.0 12.0 M20.2 12.4 L21.0 12.0', 0.8) : '') +
          figDots(ink, [[13.4, 13.6], [18.6, 13.6]]) +
          figLine(mouthColOf(g, ink, o, s), 'M14.4 17.2 C15.2 17.8 16.8 17.8 17.6 17.2', g === 'woman' ? 1.4 : 1.1),
      });
    },
  })),

  // 7–8. MAN & WOMAN GESTURING OK (🙆‍♂️ 🙆‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-gesturing-ok`,
    char: g === 'man' ? '🙆‍♂️' : '🙆‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Gesturing OK`,
    unicodeHex: `U+1F646 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'gesturing ok', 'ok', 'yes', 'agree', 'approve', g === 'man' ? '🙆‍♂️' : '🙆‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personHairLongBack(16, 17.6, 5.3, 5.6), kind: 'hair' as const }] : []),
        { d: 'M7 32 C7 26.6 10 24 16 24 C22 24 25 26.6 25 32 Z', kind: 'shirt' },
        { d: 'M9 27 C3.8 21.4 5 10.4 12.8 6.4', kind: 'shirt', w: 3.2 },
        { d: 'M23 27 C28.2 21.4 27 10.4 19.2 6.4', kind: 'shirt', w: 3.2 },
        { d: 'M12 5.6 C12 3.2 20 3.2 20 5.6 C20 7.8 12 7.8 12 5.6 Z', kind: 'skin' },
        { d: personEllipse(16, 17.6, 5.3, 5.6), kind: 'skin' },
        {
          d: g === 'man' ? personHairShort(16, 17.6, 5.3, 5.6) : personHairNeutral(16, 17.6, 5.3, 5.6),
          kind: 'hair',
        },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouth, o, s) =>
          (g === 'man' ? personLine(ink, 'M11.6 15.8 L14.2 15.5 M17.8 15.5 L20.4 15.8', 0.95) : '') +
          personLine(ink, 'M11.8 18.2 C12.2 16.8 14 16.8 14.4 18.2 M17.6 18.2 C18 16.8 19.8 16.8 20.2 18.2', 1.2) +
          `<path d="M13.4 20.2 C14 23.2 18 23.2 18.6 20.2 Z" fill="${!o && !s && g === 'woman' ? '#E11D48' : mouth}" stroke="${ink}" stroke-width="0.9" />` +
          personLine(ink, 'M14.2 5.2 H17.8', 0.9),
        `${g}-gesturing-ok`,
        g
      );
    },
  })),

  // 9–10. MAN & WOMAN TIPPING HAND (💁‍♂️ 💁‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-tipping-hand`,
    char: g === 'man' ? '💁‍♂️' : '💁‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Tipping Hand`,
    unicodeHex: `U+1F481 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'tipping hand', 'information desk', 'sassy', 'help', g === 'man' ? '💁‍♂️' : '💁‍♀️'],
    renderContent: (opts) => {
      const pal = shirtPalette(g);
      const base = figBase(pal.fill, pal.stroke, g === 'man');
      const layers: FigLayer[] = [
        ...(g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: pal.hair }] : []),
        ...base,
        { d: figQuad(23.2, 23.2, 28, 27.6, 2.8), fill: pal.fill, stroke: pal.stroke },
        { d: figQuad(28, 27.6, 28.6, 19.4, 2.6), fill: pal.fill, stroke: pal.stroke },
        { d: figEllipse(28.6, 17, 1.9, 2.6), fill: '', skin: true },
        { d: g === 'man' ? SHORT_HAIR : FRINGE, fill: pal.hair },
      ];
      return renderFigure(opts, {
        id: `${g}-tipping-hand`,
        layers,
        features: (ink, o, s) =>
          (g === 'man' ? figLine(ink, 'M11.6 11.4 L14.4 11.1 M17.6 11.1 L20.4 11.4', 1.05) : '') +
          (g === 'woman' ? figLine(ink, 'M11.8 12.4 L11.0 12.0', 0.8) : '') +
          figDots(ink, [[13.4, 13.6]]) +
          figLine(ink, 'M17.6 13.8 C18.2 12.8 19 12.8 19.6 13.8', 1.1) +
          figLine(mouthColOf(g, ink, o, s), 'M14.4 16.8 C15.4 17.8 17 17.8 18 16.4', g === 'woman' ? 1.4 : 1.1),
      });
    },
  })),

  // 11–12. MAN & WOMAN RAISING HAND (🙋‍♂️ 🙋‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-raising-hand`,
    char: g === 'man' ? '🙋‍♂️' : '🙋‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Raising Hand`,
    unicodeHex: `U+1F64B U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'raising hand', 'hand', 'question', 'volunteer', 'hello', g === 'man' ? '🙋‍♂️' : '🙋‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personHairLongBack(14.4, 12.4, 5.6, 5.8), kind: 'hair' as const }] : []),
        { d: 'M4.6 32 C4.6 24 8.6 20.6 14.4 20.6 C20.2 20.6 24 24 24 32 Z', kind: 'shirt' },
        { d: 'M19.6 24.6 C23.2 22.6 25.6 16.4 25 9', kind: 'shirt', w: 3.8 },
        { d: 'M22.6 8.6 V4 C22.6 2.4 27.6 2.4 27.6 4 V8.6 C27.6 10 22.6 10 22.6 8.6 Z', kind: 'skin' },
        { d: personEllipse(14.4, 12.4, 5.6, 5.8), kind: 'skin' },
        {
          d: g === 'man' ? personHairShort(14.4, 12.4, 5.6, 5.8) : personHairNeutral(14.4, 12.4, 5.6, 5.8),
          kind: 'hair',
        },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouth, o, s) =>
          (g === 'man' ? personLine(ink, 'M10.4 10.8 L12.8 10.5 M16.0 10.5 L18.4 10.8', 0.95) : '') +
          lashLine(g, ink, 10.6, 12.5, 18.2, 12.5) +
          personEyes(ink, [[12, 12.8], [16.8, 12.8]]) +
          `<path d="M11.8 15.2 C12.4 17.8 16.4 17.8 17 15.2 Z" fill="${!o && !s && g === 'woman' ? '#E11D48' : mouth}" stroke="${ink}" stroke-width="0.9" />` +
          personLine(ink, 'M24.3 3.6 V6 M25.9 3.6 V6', 0.8),
        `${g}-raising-hand`,
        g
      );
    },
  })),

  // 13–14. DEAF MAN & DEAF WOMAN (🧏‍♂️ 🧏‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-deaf`,
    char: g === 'man' ? '🧏‍♂️' : '🧏‍♀️',
    name: g === 'man' ? 'Deaf Man' : 'Deaf Woman',
    unicodeHex: `U+1F9CF U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'deaf', 'hard of hearing', 'sign language', 'asl', 'accessibility', g === 'man' ? '🧏‍♂️' : '🧏‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personHairLongBack(14.4, 12.4, 5.6, 5.8), kind: 'hair' as const }] : []),
        { d: 'M4.6 32 C4.6 24 8.6 20.6 14.4 20.6 C20.2 20.6 24 24 24 32 Z', kind: 'shirt' },
        { d: personEllipse(19.8, 13.2, 1.5, 2.2), kind: 'skin' },
        { d: personEllipse(14.4, 12.4, 5.6, 5.8), kind: 'skin' },
        {
          d: g === 'man' ? personHairShort(14.4, 12.4, 5.6, 5.8) : personHairNeutral(14.4, 12.4, 5.6, 5.8),
          kind: 'hair',
        },
        { d: 'M19.4 25.4 C22.8 23.6 24.4 20 23.8 16.4', kind: 'shirt', w: 3.6 },
        { d: 'M21.4 16.6 L20.6 13.4 C20.4 12.4 21.8 12 22.2 13 L23 15.2 C24.6 15.2 25.4 16.4 24.8 17.8 C24.4 18.8 22.2 18.6 21.4 16.6 Z', kind: 'skin' },
        { d: 'M26 10.6 C27.6 12.2 27.6 15 26 16.6', kind: 'mark', w: 1.3 },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) =>
          (g === 'man' ? personLine(ink, 'M10.4 10.8 L12.8 10.5 M16.0 10.5 L18.4 10.8', 0.95) : '') +
          lashLine(g, ink, 10.6, 12.5, 18.2, 12.5) +
          personEyes(ink, [[12, 12.8], [16.8, 12.8]]) +
          `<path d="M12.2 15.4 C13.2 17 15.6 17 16.6 15.4" fill="none" stroke="${mouthColOf(g, ink, o, s)}" stroke-width="${g === 'woman' ? 1.45 : 1.2}" />` +
          personLine(ink, 'M19.6 12.2 C20.4 12.4 20.4 13.8 19.6 14.2', 0.8),
        `${g}-deaf`,
        g
      );
    },
  })),

  // 15–16. MAN & WOMAN BOWING (🙇‍♂️ 🙇‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-bowing`,
    char: g === 'man' ? '🙇‍♂️' : '🙇‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Bowing`,
    unicodeHex: `U+1F647 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'bowing', 'bow', 'apology', 'sorry', 'respect', g === 'man' ? '🙇‍♂️' : '🙇‍♀️'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M6.6 5 L9.6 7.6', kind: 'mark', w: 1.8 },
        { d: 'M16 2.2 V5.6', kind: 'mark', w: 1.8 },
        { d: 'M25.4 5 L22.4 7.6', kind: 'mark', w: 1.8 },
        ...(g === 'woman' ? [{ d: personHairLongBack(16, 18.4, 6.4, 6.6), kind: 'hair' as const }] : []),
        { d: 'M2.8 27.4 C2.8 17.4 8.4 12 16 12 C23.6 12 29.2 17.4 29.2 27.4 Z', kind: 'shirt' },
        { d: 'M6.4 19 C4.8 22.6 6.2 26 9.4 27.6', kind: 'shirt', w: 3.4 },
        { d: 'M25.6 19 C27.2 22.6 25.8 26 22.6 27.6', kind: 'shirt', w: 3.4 },
        { d: 'M6.8 28.4 C7.4 26.8 11.4 26.8 13.4 28.2 C13.8 29.4 12.4 30.2 10 30.2 C8 30.2 6.6 29.6 6.8 28.4 Z', kind: 'skin' },
        { d: 'M25.2 28.4 C24.6 26.8 20.6 26.8 18.6 28.2 C18.2 29.4 19.6 30.2 22 30.2 C24 30.2 25.4 29.6 25.2 28.4 Z', kind: 'skin' },
        { d: personEllipse(16, 18.4, 6.4, 6.6), kind: 'skin' },
        {
          d: g === 'man' ? personHairShort(16, 18.4, 6.4, 6.6) : personHairNeutral(16, 18.4, 6.4, 6.6),
          kind: 'hair',
        },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) =>
          (g === 'man' ? personLine(ink, 'M11.6 17.6 L14.4 17.3 M17.6 17.3 L20.4 17.6', 0.95) : '') +
          lashLine(g, ink, 11.6, 19.1, 20.4, 19.1) +
          personEyes(ink, [[13.1, 19.4], [18.9, 19.4]], 0.85) +
          personLine(mouthColOf(g, ink, o, s), 'M14.2 22.6 C15.2 23.4 16.8 23.4 17.8 22.6', g === 'woman' ? 1.3 : 1.0),
        `${g}-bowing`,
        g
      );
    },
  })),

  // 17–18. MAN & WOMAN FACEPALMING (🤦‍♂️ 🤦‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-facepalming`,
    char: g === 'man' ? '🤦‍♂️' : '🤦‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Facepalming`,
    unicodeHex: `U+1F926 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'facepalming', 'facepalm', 'smh', 'disbelief', 'frustrated', g === 'man' ? '🤦‍♂️' : '🤦‍♀️'],
    renderContent: (opts) => {
      const pal = shirtPalette(g);
      const c = resolveColors(opts, { fillPrimary: pal.fill, fillSecondary: '#FFCA28', stroke: pal.stroke });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const t = o ? Math.max(1.2, sw * 0.75) : 1.05;

      const shirtColor = c.primary;
      const skinColor = s ? c.primary : d ? c.secondary : '#FFCA28';
      const hairColor = s ? c.primary : d ? c.primary : pal.hair;
      const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
      const strokeCol = o ? c.stroke : s ? '#FFFFFF' : c.stroke;
      const skinStroke = o ? c.stroke : s ? '#FFFFFF' : '#FFA000';
      const hairPath = g === 'man' ? personHairShort(16, 12.6, 6.4, 6.8) : personHairNeutral(16, 12.6, 6.4, 6.8);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${g === 'woman' ? `<path d="${personHairLongBack(16, 12.6, 6.4, 6.8)}" />` : ''}
          <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" />
          <path d="M13.4 17.6 H18.6 V22 H13.4 Z" />
          <ellipse cx="16" cy="12.6" rx="6.4" ry="6.8" />
          <path d="${hairPath}" />
          <path d="M11.5 12.8 L13.8 13.8 L11.5 14.8" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M13.2 17.6 C14.4 16.5 17.6 16.5 18.8 17.6" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M25 32 C25 25 23 20 18.8 15.6" stroke-width="${sw + 1.2}" />
          <path d="M14.6 8.5 C14.6 7.4 16.2 7.4 16.2 8.5 V14 C16.2 15 14.6 15 14.6 14 Z" />
          <path d="M16.4 7.8 C16.4 6.7 18 6.7 18 7.8 V14.5 C18 15.5 16.4 15.5 16.4 14.5 Z" />
          <path d="M18.2 8.2 C18.2 7.1 19.8 7.1 19.8 8.2 V15 C19.8 16 18.2 16 18.2 15 Z" />
          <path d="M20 9.5 C20 8.5 21.6 8.5 21.6 9.5 V15.5 C21.6 18.5 19 20 17 19.5" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          ${g === 'woman' ? `<path d="${personHairLongBack(16, 12.6, 6.4, 6.8)}" fill="${hairColor}" stroke="#FFFFFF" stroke-width="0.9" />` : ''}
          <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" fill="${shirtColor}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="M13.4 17.6 H18.6 V22 H13.4 Z" fill="${skinColor}" stroke="#FFFFFF" stroke-width="0.9" />
          <ellipse cx="16" cy="12.6" rx="6.4" ry="6.8" fill="${skinColor}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${hairPath}" fill="${hairColor}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="M11.5 12.8 L13.8 13.8 L11.5 14.8" fill="none" stroke="${ink}" stroke-width="1.2" />
          <path d="M13.2 17.6 C14.4 16.5 17.6 16.5 18.8 17.6" fill="none" stroke="${ink}" stroke-width="1.3" />
          <path d="M25 32 C25 25 23 20 18.8 15.6" fill="none" stroke="#FFFFFF" stroke-width="4.6" />
          <path d="M25 32 C25 25 23 20 18.8 15.6" fill="none" stroke="${shirtColor}" stroke-width="3.4" />
          <path d="M14.6 8.5 V13.8 C14.6 18.5 18 19.5 21.6 16 V9.5 C21.6 8.5 20 8.5 20 9.5 V14.5 C20 14.5 18.5 14 18.2 8.2 C18.2 7.1 16.4 7.1 16.4 8 V13.5 C16.4 13.5 15.5 13 14.6 8.5 Z" fill="${skinColor}" stroke="#FFFFFF" stroke-width="1" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${g === 'woman' ? `<path d="${personHairLongBack(16, 12.6, 6.4, 6.8)}" fill="${hairColor}" />` : ''}
        <path d="M13.4 17.6 H18.6 V22 H13.4 Z" fill="${skinColor}" stroke="${skinStroke}" stroke-width="${t}" />
        <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" fill="${shirtColor}" stroke="${strokeCol}" stroke-width="${t}" />
        <ellipse cx="16" cy="12.6" rx="6.4" ry="6.8" fill="${skinColor}" stroke="${skinStroke}" stroke-width="${t}" />
        <path d="${hairPath}" fill="${hairColor}" />
        <path d="M10.8 11.2 L14 10.4" fill="none" stroke="${ink}" stroke-width="1.2" />
        <path d="M11.5 13 L13.8 14 L11.5 15" fill="none" stroke="${ink}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.2 17.6 C14.4 16.4 17.6 16.4 18.8 17.6" fill="none" stroke="${mouthColOf(g, ink, o, s)}" stroke-width="${g === 'woman' ? 1.5 : 1.3}" />
        <path d="M25 32 C25 25 23 20 18.8 15.6" fill="none" stroke="${strokeCol}" stroke-width="${3.4 + 2 * t}" />
        <path d="M25 32 C25 25 23 20 18.8 15.6" fill="none" stroke="${shirtColor}" stroke-width="3.4" />
        <g stroke="${skinStroke}" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round" fill="${skinColor}">
          <path d="M14.6 8.5 C14.6 7.4 16.2 7.4 16.2 8.5 V14.2 a1 1 0 0 1 -1.6 0 Z" />
          <path d="M16.4 7.8 C16.4 6.7 18 6.7 18 7.8 V14.8 a1 1 0 0 1 -1.6 0 Z" />
          <path d="M18.2 8.2 C18.2 7.1 19.8 7.1 19.8 8.2 V15.2 a1 1 0 0 1 -1.6 0 Z" />
          <path d="M20 9.5 C20 8.5 21.6 8.5 21.6 9.5 V15 C21.6 18.6 19.5 20.2 16.8 19.2 C15.4 18.7 15 17.2 16.2 15.6 L18.8 15.6" />
        </g>
      </g>`;
    },
  })),

  // 19–20. MAN & WOMAN SHRUGGING (🤷‍♂️ 🤷‍♀️)
  ...(['man', 'woman'] as const).map((g): WimojiIconDef => ({
    id: `${g}-shrugging`,
    char: g === 'man' ? '🤷‍♂️' : '🤷‍♀️',
    name: `${g === 'man' ? 'Man' : 'Woman'} Shrugging`,
    unicodeHex: `U+1F937 U+200D ${g === 'man' ? 'U+2642' : 'U+2640'} U+FE0F`,
    category: 'people-body',
    tags: [g, 'shrugging', 'shrug', 'dunno', 'doubt', 'confused', 'whatever', g === 'man' ? '🤷‍♂️' : '🤷‍♀️'],
    renderContent: (opts) => {
      const circle = (cx: number, cy: number, r: number) =>
        `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
      const layers: PersonLayer[] = [
        ...(g === 'woman' ? [{ d: personHairLongBack(16, 11.4, 5.8, 6.2), kind: 'hair' as const }] : []),
        { d: 'M4.6 25.4 L3.8 19.6', kind: 'skin', w: 2.8 },
        { d: 'M9.2 23 L4.8 27.4', kind: 'shirt', w: 4 },
        { d: circle(3.7, 18, 2), kind: 'skin' },
        { d: 'M27.4 25.4 L28.2 19.6', kind: 'skin', w: 2.8 },
        { d: 'M22.8 23 L27.2 27.4', kind: 'shirt', w: 4 },
        { d: circle(28.3, 18, 2), kind: 'skin' },
        { d: 'M5.6 32 C5.6 24.4 9.6 20.2 16 20.2 C22.4 20.2 26.4 24.4 26.4 32 Z', kind: 'shirt' },
        { d: 'M13.2 17.4 H18.8 V21.4 H13.2 Z', kind: 'skin' },
        { d: personEllipse(16, 11.4, 5.8, 6.2), kind: 'skin' },
        {
          d: g === 'man' ? personHairShort(16, 11.4, 5.8, 6.2) : personHairNeutral(16, 11.4, 5.8, 6.2),
          kind: 'hair',
        },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _m, o, s) =>
          personEyes(ink, [[13.9, 12.28], [18.1, 12.28]], 1.15) +
          personLine(mouthColOf(g, ink, o, s), 'M14.4 14.84 C15.36 15.96 16.64 15.96 17.6 14.84', g === 'woman' ? 1.15 : 0.9) +
          personLine(ink, 'M11 7.4 L14.2 6.6 M21 7.4 L17.8 6.6', 1.1) +
          lashLine(g, ink, 11.6, 12.1, 20.4, 12.1) +
          personLine(ink, 'M2.6 14.8 V16.4 M3.8 14.4 V16.2 M5 14.8 V16.4', 0.7) +
          personLine(ink, 'M27 14.8 V16.4 M28.2 14.4 V16.2 M29.4 14.8 V16.4', 0.7),
        `${g}-shrugging`,
        g
      );
    },
  })),
];
