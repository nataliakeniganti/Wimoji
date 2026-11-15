import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

type PersonLayer = { d: string; kind: 'shirt' | 'skin' | 'hair' | 'pants' | 'mark' | 'item'; w?: number; fill?: string; stroke?: string };
type Pt = [number, number];

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

const poly = (pts: Pt[]) => 'M' + pts.map((p) => `${p[0]} ${p[1]}`).join(' L');
const tube = (kind: PersonLayer['kind'], pts: Pt[], w: number, fill?: string): PersonLayer => ({ d: poly(pts), kind, w, fill });
const hand = (p: Pt, r = 1.6): PersonLayer => ({ d: personCircle(p[0], p[1], r), kind: 'skin' });
const personEyes = (ink: string, pts: Array<[number, number]>, r = 0.9) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}" stroke="none" />`).join('');
const personLine = (ink: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${w}" />`;
const faceAt = (ink: string, cx: number, cy: number, dir = 0, sc = 1) => {
  const ex = cx + dir * 0.9 * sc;
  return (
    personEyes(ink, [[ex - 1.3 * sc, cy + 0.3 * sc], [ex + 1.3 * sc, cy + 0.3 * sc]], 0.75 * sc) +
    personLine(ink, `M${ex - 1 * sc} ${cy + 1.9 * sc} C${ex - 0.4 * sc} ${cy + 2.6 * sc} ${ex + 0.4 * sc} ${cy + 2.6 * sc} ${ex + 1 * sc} ${cy + 1.9 * sc}`, 0.8)
  );
};

const renderPerson = (
  opts: { style?: string; strokeWidth?: number },
  layers: PersonLayer[],
  features: (ink: string, mouthFill: string, o?: boolean, s?: boolean, d?: boolean) => string,
  id: string,
  hairColor = '#78350F',
  paletteOverride?: { fillPrimary?: string; fillSecondary?: string; stroke?: string; skinColor?: string },
) => {
  const c = resolveColors(opts as any, {
    fillPrimary: paletteOverride?.fillPrimary ?? '#FB8C00',
    fillSecondary: paletteOverride?.fillSecondary ?? '#FFCA28',
    stroke: paletteOverride?.stroke ?? '#E65100',
  });
  const badge = getBadgeMarkup(opts as any);
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
      ? d ? c.secondary : skinDefault
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
      : `<path d="${l.d}" fill="${col}" stroke="${l.stroke ?? c.stroke}" stroke-width="${t}" />`;
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
        ${features(ink, mouthFill, o, s, d)}
      </g>`;
};

// ---- Head-and-shoulders figure renderer matching prince/princess in peopleCharactersIcons.ts ----
type FigLayer = { d: string; fill: string; stroke?: string; skin?: boolean };
const figEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const renderFigure = (
  opts: { style?: string; strokeWidth?: number },
  layers: FigLayer[],
  features: (ink: string, o: boolean, s: boolean) => string,
  id: string,
) => {
  const c = resolveColors(opts as any, { fillPrimary: '#FFCA28', fillSecondary: '#78350F', stroke: '#FFA000' });
  const badge = getBadgeMarkup(opts as any);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : 0.9;
  const cover = (l: FigLayer) => `<path d="${l.d}" fill="#000" stroke="#000" stroke-width="${t}" />`;
  const draw = (l: FigLayer) => {
    if (o) return `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (s) return `<path d="${l.d}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />`;
    if (l.skin) return `<path d="${l.d}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (d) return `<path d="${l.d}" fill="${c.secondary}" stroke="#FFFFFF" stroke-width="0.6" />`;
    return `<path d="${l.d}" fill="${l.fill}" stroke="${l.stroke ?? 'none'}" stroke-width="0.7" />`;
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

export const pregnantCrownCreatureIcons: WimojiIconDef[] = [
  // 1. Pregnant Man (U+1FAC3) — built directly on pregnant-woman + man SVGs
  {
    id: 'pregnant-man',
    char: '🫃',
    name: 'Pregnant Man',
    unicodeHex: 'U+1FAC3',
    category: 'faces-hands',
    tags: ['pregnant man', 'pregnant', 'expecting', 'baby bump', 'man', 'father', 'dad', '🫃'],
    renderContent: (opts) => {
      const shirt = '#1E88E5';
      const layers: PersonLayer[] = [
        // Neck & blue shirt shoulders matching pregnant-woman geometry
        { d: 'M13.4 14.6 H18.6 V20.4 H13.4 Z', kind: 'skin' },
        { d: 'M6.6 36 C5.8 25.4 9.4 19.6 16 19.6 C22.6 19.6 26.2 25.4 25.4 36 Z', kind: 'shirt', fill: shirt },
        // Rounded baby bump & highlight crease
        { d: personEllipse(18.4, 28, 7.8, 6.6), kind: 'shirt', fill: shirt },
        { d: 'M12.6 24.6 C14.4 23.8 17 23.6 19.4 24', kind: 'mark', w: 0.6, fill: '#42A5F5' },
        // Cradling arms & hands from pregnant-woman
        tube('shirt', [[9.4, 22.8], [8.4, 27.6], [13.4, 30.6]], 3.6, shirt),
        hand([15.2, 30.6], 1.8),
        tube('shirt', [[23, 22.8], [25.2, 25.4], [21.2, 24.4]], 3.4, shirt),
        hand([19.2, 24.2], 1.9),
        // Man ears, head & short parted-brow man hair scaled from man SVG onto (16, 10)
        { d: personEllipse(10.8, 10.6, 0.95, 1.4), kind: 'skin' },
        { d: personEllipse(21.2, 10.6, 0.95, 1.4), kind: 'skin' },
        { d: personEllipse(16, 10, 5.4, 5.8), kind: 'skin' },
        { d: 'M10.6 9.0 C9.9 4.7 12.6 2.5 16 2.5 C19.4 2.5 22.1 4.7 21.4 9.0 C20.8 6.8 19.1 5.9 16 5.9 C12.9 5.9 11.2 6.8 10.6 9.0 Z', kind: 'hair' },
      ];
      const svg = renderPerson(
        opts,
        layers,
        (ink) =>
          // Man eyebrows, eyes & warm smile scaled onto (16, 10)
          personLine(ink, 'M12.8 8.4 L15.1 8.1 M16.9 8.1 L19.2 8.4', 0.9) +
          personEyes(ink, [[14.05, 10.65], [17.95, 10.65]], 1.05) +
          personLine(ink, 'M14.5 13.05 C15.4 14.1 16.6 14.1 17.5 13.05', 0.85),
        'preg-man',
        '#78350F',
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: '#E65100' },
      );
      const i = svg.indexOf('<g stroke-linecap');
      return `${svg.slice(0, i)}<g transform="translate(1.6 1.2) scale(0.9)">${svg.slice(i)}</g>`;
    },
  },

  // 2. Pregnant Person (U+1FAC4) — built directly on pregnant-woman + person SVGs
  {
    id: 'pregnant-person',
    char: '🫄',
    name: 'Pregnant Person',
    unicodeHex: 'U+1FAC4',
    category: 'faces-hands',
    tags: ['pregnant person', 'pregnant', 'expecting', 'baby bump', 'gender neutral', 'parent', '🫄'],
    renderContent: (opts) => {
      const shirt = '#FB8C00';
      const layers: PersonLayer[] = [
        // Neck & orange shirt shoulders matching pregnant-woman geometry
        { d: 'M13.4 14.6 H18.6 V20.4 H13.4 Z', kind: 'skin' },
        { d: 'M6.6 36 C5.8 25.4 9.4 19.6 16 19.6 C22.6 19.6 26.2 25.4 25.4 36 Z', kind: 'shirt', fill: shirt },
        // Rounded baby bump & subtle fabric fold
        { d: personEllipse(18.4, 28, 7.8, 6.6), kind: 'shirt', fill: shirt },
        { d: 'M12.6 24.6 C14.4 23.8 17 23.6 19.4 24', kind: 'mark', w: 0.6, fill: '#FFB74D' },
        // Cradling arms & hands from pregnant-woman
        tube('shirt', [[9.4, 22.8], [8.4, 27.6], [13.4, 30.6]], 3.6, shirt),
        hand([15.2, 30.6], 1.8),
        tube('shirt', [[23, 22.8], [25.2, 25.4], [21.2, 24.4]], 3.4, shirt),
        hand([19.2, 24.2], 1.9),
        // Gender-neutral person ears, head & swept person hair
        { d: personEllipse(10.8, 10.6, 0.95, 1.4), kind: 'skin' },
        { d: personEllipse(21.2, 10.6, 0.95, 1.4), kind: 'skin' },
        { d: personEllipse(16, 10, 5.4, 5.8), kind: 'skin' },
        { d: personHair(16, 10, 5.4, 5.8), kind: 'hair' },
      ];
      const svg = renderPerson(
        opts,
        layers,
        (ink) => faceAt(ink, 16, 10.2, 0, 1.5),
        'preg-person',
        '#78350F',
        { fillPrimary: shirt, fillSecondary: '#FFCA28', stroke: '#E65100' },
      );
      const i = svg.indexOf('<g stroke-linecap');
      return `${svg.slice(0, i)}<g transform="translate(1.6 1.2) scale(0.9)">${svg.slice(i)}</g>`;
    },
  },

  // 3. Person with Crown (U+1FAC5) — built directly on prince + person SVGs
  {
    id: 'person-with-crown',
    char: '🫅',
    name: 'Person with Crown',
    unicodeHex: 'U+1FAC5',
    category: 'faces-hands',
    tags: ['person with crown', 'royalty', 'monarch', 'royal', 'crown', 'gender neutral', 'ruler', '🫅'],
    renderContent: (opts) => {
      const layers: FigLayer[] = [
        // Neck & orange gender-neutral tunic from prince proportions
        { d: 'M13.6 17.6 H18.4 V22 H13.6 Z', fill: '', skin: true },
        { d: 'M4.8 32 C4.8 24.4 9.8 20.8 16 20.8 C22.2 20.8 27.2 24.4 27.2 32 Z', fill: '#FB8C00', stroke: '#E65100' },
        // Regal gold V-collar
        { d: 'M13.6 20.8 L16 25 L18.4 20.8 Z', fill: '#FFD54F', stroke: '#F9A825' },
        // Ears & head matching prince/person
        { d: figEllipse(9.9, 13.4, 1.1, 1.7), fill: '', skin: true },
        { d: figEllipse(22.1, 13.4, 1.1, 1.7), fill: '', skin: true },
        { d: figEllipse(16, 12.2, 6.2, 6.6), fill: '', skin: true },
        // Gender-neutral swept person hair scaled onto (16, 12.2, 6.2, 6.6)
        { d: 'M9.6 11.8 C8.8 6.4 11.8 3.6 16 3.6 C20.2 3.6 23.2 6.4 22.4 11.8 C21.2 9.4 19.4 8 17.4 6.8 C15.4 9.4 12 10.6 9.6 11.8 Z', fill: '#78350F' },
        // Royal gold crown with ruby center jewel from prince SVG
        {
          d: 'M10.4 6.2 L11.2 1.4 L13.8 3.8 L16 0.6 L18.2 3.8 L20.8 1.4 L21.6 6.2 Z',
          fill: '#FFD54F',
          stroke: '#F9A825',
        },
        { d: figEllipse(16, 4.4, 0.9, 0.9), fill: '#E53935' },
      ];
      return renderFigure(
        opts,
        layers,
        (ink) =>
          `<circle cx="13.4" cy="13.6" r="0.95" fill="${ink}" stroke="none" /><circle cx="18.6" cy="13.6" r="0.95" fill="${ink}" stroke="none" />` +
          `<path d="M14.4 16.8 C15.2 17.8 16.8 17.8 17.6 16.8" fill="none" stroke="${ink}" stroke-width="1.1" />`,
        'crown-person',
      );
    },
  },

  // 4. Hairy Creature (U+1FAC8) — built directly on person-walking SVG pose
  {
    id: 'hairy-creature',
    char: '🫈',
    name: 'Hairy Creature',
    unicodeHex: 'U+1FAC8',
    category: 'faces-hands',
    tags: ['hairy creature', 'bigfoot', 'sasquatch', 'yeti', 'cryptid', 'monster', 'walking', '🫈'],
    renderContent: (opts) => {
      const fur = '#78350F';
      const furMid = '#92400E';
      const furEdge = '#451A03';
      const skin = '#F59E0B';
      // Striding Bigfoot / Sasquatch silhouette matching person-walking limb angles:
      // Back arm: (15.4, 11.6) -> (13.2, 15.6) -> (11.8, 19)
      // Left leg: (15, 19) -> (13, 24.4) -> (10.2, 28.6)
      // Torso: (16.2, 10.6) -> (15.4, 19.2)
      // Right leg: (16, 19) -> (19, 24) -> (20.8, 29.2)
      // Front arm: (17, 11.6) -> (19, 15.6) -> (20.6, 18.8)
      // Head: (16.6, 5.8)
      const layers: PersonLayer[] = [
        // Back furry arm & hand
        tube('hair', [[15.4, 11.6], [13.2, 15.6], [11.6, 19]], 4.2, fur),
        { d: personCircle(11.4, 19.2, 1.7), kind: 'skin', fill: skin },
        // Striding left leg & big bare foot
        tube('hair', [[15, 19], [13, 24.4], [10.2, 28.4]], 4.4, fur),
        { d: personEllipse(8.8, 28.8, 2.7, 1.2), kind: 'skin', fill: skin },
        // Broad shaggy torso with fur tufts along flank
        tube('hair', [[16.2, 10.2], [15.4, 19.2]], 8, fur),
        { d: 'M12.2 12 L10.8 13.4 L12.2 14.8 L11 16.4 L12.4 17.8 L15.4 19.8 L18.8 18 L19.8 16 L18.8 14.4 L19.8 12.6 Z', kind: 'hair', fill: furMid },
        // Lighter chest fur patch
        { d: personEllipse(16.2, 14.6, 2.4, 2.8), kind: 'item', fill: '#B45309' },
        // Striding right leg & big bare foot
        tube('hair', [[16, 19], [19, 24], [20.8, 29]], 4.4, fur),
        { d: personEllipse(22.2, 29.2, 2.7, 1.2), kind: 'skin', fill: skin },
        // Swinging front furry arm & hand
        tube('hair', [[17, 11.6], [19, 15.6], [20.6, 18.8]], 4.2, fur),
        { d: personCircle(20.8, 19, 1.7), kind: 'skin', fill: skin },
        // Tufted Bigfoot head + lighter face mask
        { d: 'M12.2 6 C11.8 3 13.8 1 16.6 1 C19.4 1 21.4 3 21 6 C21.6 7.4 20.6 9.6 18.8 10.2 H14.4 C12.6 9.6 11.6 7.4 12.2 6 Z', kind: 'hair', fill: fur },
        { d: personEllipse(17, 6.4, 2.9, 2.7), kind: 'skin', fill: skin },
        // Shaggy brow ridge fur tuft over eyes
        { d: 'M13.6 4.8 C15 3.4 18.2 3.4 19.8 4.8 C18.4 4.4 15.2 4.4 13.6 4.8 Z', kind: 'hair', fill: fur },
      ];
      return renderPerson(
        opts,
        layers,
        (ink) =>
          personEyes(ink, [[16.1, 6.1], [18.7, 6.1]], 0.72) +
          personLine(ink, 'M16.4 7.7 C17 8.4 17.9 8.4 18.5 7.7', 0.8),
        'yeti',
        fur,
        { fillPrimary: fur, fillSecondary: skin, stroke: furEdge, skinColor: skin },
      );
    },
  },
];
