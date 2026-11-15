import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Full-body & bust person helpers matching peopleCharactersIcons.ts / person-walking / person-raising-hand ----
type PersonLayer = { d: string; kind: 'shirt' | 'skin' | 'hair' | 'pants' | 'mark' | 'item'; w?: number; fill?: string };
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
const shoe = (p: Pt, dir = 1): PersonLayer => ({ d: personEllipse(p[0] + dir * 0.9, p[1], 2.1, 1.1), kind: 'item', fill: '#5D4037' });
const armOf = (sh: Pt, el: Pt, hd: Pt): PersonLayer[] => [tube('skin', [el, hd], 2.6), tube('shirt', [sh, el], 3.4), hand(hd)];
const legOf = (hip: Pt, kn: Pt, ft: Pt, dir = 1): PersonLayer[] => [tube('pants', [hip, kn, ft], 3.6), shoe(ft, dir)];
const headOf = (cx: number, cy: number, rx = 3.5, ry = 3.8): PersonLayer[] => [
  { d: personEllipse(cx, cy, rx, ry), kind: 'skin' },
  { d: personHair(cx, cy, rx, ry), kind: 'hair' },
];
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
  features: (ink: string, mouthFill: string) => string,
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
        ${features(ink, mouthFill)}
      </g>`;
};

// Flip a rendered figure left-to-right (the badge, if any, stays where it is)
const mirrorFigure = (svg: string) => {
  const i = svg.indexOf('<g stroke-linecap');
  return `${svg.slice(0, i)}<g transform="matrix(-1 0 0 1 32 0)">${svg.slice(i)}</g>`;
};

export const peopleExtendedIcons: WimojiIconDef[] = [
  // 1. Person Standing (U+1F9CD) — built directly on person-walking geometry
  {
    id: 'person-standing',
    char: '🧍',
    name: 'Person Standing',
    unicodeHex: 'U+1F9CD',
    category: 'faces-hands',
    tags: ['person standing', 'stand', 'standing', 'upright', 'person', 'figure', '🧍'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...armOf([12.2, 11.6], [10.6, 15.6], [10.4, 19.2]),
        ...armOf([19.8, 11.6], [21.4, 15.6], [21.6, 19.2]),
        ...legOf([14, 19], [14, 24.4], [13.8, 29], -1),
        ...legOf([18, 19], [18, 24.4], [18.2, 29], 1),
        tube('shirt', [[16, 10.6], [16, 19.2]], 6.8),
        ...headOf(16, 5.8, 3.5, 3.8),
      ];
      return renderPerson(opts, layers, (ink) => faceAt(ink, 16, 5.8, 0), 'stand');
    },
  },

  // 2. Person Kneeling (U+1F9CE) — built directly on person-walking geometry
  {
    id: 'person-kneeling',
    char: '🧎',
    name: 'Person Kneeling',
    unicodeHex: 'U+1F9CE',
    category: 'faces-hands',
    tags: ['person kneeling', 'kneel', 'kneeling', 'crouch', 'propose', 'pray', 'person', '🧎'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        ...armOf([12.4, 14.2], [14.8, 17.8], [16.8, 19.6]),
        ...legOf([12.2, 21.4], [12.4, 27.6], [7.2, 28.4], -1),
        ...legOf([14.4, 21.4], [20.4, 22], [20.4, 28.6], 1),
        tube('shirt', [[13.8, 13.6], [13.4, 21.4]], 6.4),
        ...armOf([14.2, 14.4], [17, 17.6], [19.4, 19.6]),
        ...headOf(14.4, 8.4, 3.5, 3.8),
      ];
      return mirrorFigure(renderPerson(opts, layers, (ink) => faceAt(ink, 14.4, 8.4, 1), 'kneel'));
    },
  },

  // 3. Deaf Person (U+1F9CF) — built directly on person-raising-hand geometry
  {
    id: 'deaf-person',
    char: '🧏',
    name: 'Deaf Person',
    unicodeHex: 'U+1F9CF',
    category: 'faces-hands',
    tags: ['deaf person', 'deaf', 'hard of hearing', 'sign language', 'asl', 'ear', 'accessibility', '🧏'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        { d: 'M4.6 32 C4.6 24 8.6 20.6 14.4 20.6 C20.2 20.6 24 24 24 32 Z', kind: 'shirt' },
        { d: personEllipse(19.8, 13.2, 1.5, 2.2), kind: 'skin' },
        { d: personEllipse(14.4, 12.4, 5.6, 5.8), kind: 'skin' },
        { d: personHair(14.4, 12.4, 5.6, 5.8), kind: 'hair' },
        { d: 'M19.4 25.4 C22.8 23.6 24.4 20 23.8 16.4', kind: 'shirt', w: 3.6 },
        { d: 'M21.4 16.6 L20.6 13.4 C20.4 12.4 21.8 12 22.2 13 L23 15.2 C24.6 15.2 25.4 16.4 24.8 17.8 C24.4 18.8 22.2 18.6 21.4 16.6 Z', kind: 'skin' },
        { d: 'M26 10.6 C27.6 12.2 27.6 15 26 16.6', kind: 'mark', w: 1.3 },
      ];
      return renderPerson(opts, layers, (ink, mouth) =>
        personEyes(ink, [[12, 12.8], [16.8, 12.8]]) +
        `<path d="M12.2 15.4 C13.2 17 15.6 17 16.6 15.4" fill="none" stroke="${ink}" stroke-width="1.2" />` +
        personLine(ink, 'M19.6 12.2 C20.4 12.4 20.4 13.8 19.6 14.2', 0.8) +
        (mouth ? '' : ''), 'deaf');
    },
  },

  // 4. Face with Monocle (U+1F9D0) — built directly on face-with-raised-eyebrow geometry
  {
    id: 'face-with-monocle',
    char: '🧐',
    name: 'Face with Monocle',
    unicodeHex: 'U+1F9D0',
    category: 'faces-hands',
    tags: ['face with monocle', 'monocle', 'inspect', 'skeptic', 'curious', 'detective', 'classy', 'scrutiny', '🧐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.5 7.5 C10.5 5.5 13.5 5.5 14.5 7.5 M17.5 12.5 C19.5 12 21.5 12 23.5 12.8" />
          <ellipse cx="11.5" cy="12" rx="2" ry="2.5" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14.2" rx="1.5" ry="1.2" fill="${c.stroke}" />
          <path d="M12 21 C14.5 20.2 17.5 20.2 20 21" />
          <circle cx="11.5" cy="12" r="4.2" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="M7.6 13.4 C6.8 18 7.8 23 10.2 26.8" stroke-width="${Math.max(1, sw * 0.55)}" stroke-dasharray="1.2 1.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.5 7.5 C10.5 5.5 13.5 5.5 14.5 7.5" stroke-width="1.6" />
            <path d="M17.5 12.5 C19.5 12 21.5 12 23.5 12.8" stroke-width="1.4" />
            <ellipse cx="11.5" cy="12" rx="2.1" ry="2.6" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="14.2" rx="1.6" ry="1.3" fill="#FFFFFF" stroke="none" />
            <path d="M12 21 C14.5 20.2 17.5 20.2 20 21" stroke-width="1.5" />
            <circle cx="11.5" cy="12" r="4.2" stroke-width="1.4" />
            <path d="M7.6 13.4 C6.8 18 7.8 23 10.2 26.8" stroke-width="1.1" stroke-dasharray="1.2 1.6" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const browColor = isDuotone ? c.secondary : '#78350F';
      const rimColor = isDuotone ? c.stroke : '#D97706';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="${isDuotone ? 0.15 : 0.3}" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <!-- Prominent raised left eyebrow -->
        <path d="M8.5 7.5 C10.5 5.5 13.5 5.5 14.5 7.5" stroke="${browColor}" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <!-- Lowered flat skeptical right eyebrow -->
        <path d="M17.5 12.5 C19.5 12 21.5 12 23.5 12.8" stroke="${browColor}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <!-- Big wide inquisitive left eye -->
        <ellipse cx="11.5" cy="12" rx="2.2" ry="2.7" fill="${featureColor}" />
        <ellipse cx="12" cy="11" rx="0.7" ry="0.7" fill="#FFFFFF" />
        <!-- Squinting skeptical right eye -->
        <ellipse cx="20.5" cy="14.2" rx="1.6" ry="1.3" fill="${featureColor}" />
        <ellipse cx="21" cy="13.8" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <!-- Skeptical flat mouth -->
        <path d="M12 21 C14.5 20.2 17.5 20.2 20 21" stroke="${browColor}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <!-- Gold Monocle Lens, Rim & Hanging Chain -->
        <circle cx="11.5" cy="12" r="4.2" fill="#E0F2FE" opacity="0.28" />
        <path d="M9.4 9.8 L11 8.8" stroke="#FFFFFF" stroke-width="1.1" stroke-linecap="round" opacity="0.75" />
        <circle cx="11.5" cy="12" r="4.2" fill="none" stroke="${rimColor}" stroke-width="1.4" />
        <path d="M7.6 13.4 C6.8 18 7.8 23 10.2 26.8" fill="none" stroke="${rimColor}" stroke-width="1.1" stroke-linecap="round" stroke-dasharray="1.2 1.6" />
      </g>`;
    },
  },
];
