import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

type Layer = {
  d: string;
  kind: 'leotard' | 'tutu' | 'skin' | 'hair' | 'shoe' | 'mark';
  w?: number;
  fill?: string;
};

const circlePath = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;

const ellipsePath = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const personHair = (cx: number, cy: number, rx: number, ry: number) => {
  const u = rx / 8.6;
  const v = ry / 9.2;
  const m = (x: number, y: number) => `${(cx + (x - 16) * u).toFixed(2)} ${(cy + (y - 17) * v).toFixed(2)}`;
  return `M${m(7.8, 16.4)} C${m(6.8, 9.6)} ${m(10.8, 5.4)} ${m(16, 5.4)} C${m(21.2, 5.4)} ${m(25.2, 9.6)} ${m(24.2, 16.4)} C${m(23, 13.6)} ${m(20.8, 11.8)} ${m(18.4, 10.4)} C${m(16, 13)} ${m(11.6, 14.6)} ${m(7.8, 16.4)} Z`;
};

function renderBalletDancer(opts: WimojiStyleOptions): string {
  const c = resolveColors(opts, {
    fillPrimary: '#1E293B',
    fillSecondary: '#FFCA28',
    stroke: '#E65100',
  });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.15, sw * 0.65) : 1.0;

  const layers: Layer[] = [
    // Back arm raised in arabesque
    { d: 'M14.6 12.2 Q18.2 10.8 21.8 7.8', kind: 'skin', w: 2.4 },
    { d: circlePath(22.0, 7.6, 1.35), kind: 'skin' },

    // Extended back leg in arabesque + black ballet shoe
    { d: 'M16.2 18.0 Q21.8 16.8 26.8 14.0', kind: 'skin', w: 2.7 },
    { d: 'M26.2 13.3 L29.6 12.2 C30.2 12.5 30.1 13.3 29.4 13.8 L26.7 15.0 Z', kind: 'shoe' },

    // Standing leg en pointe + black ballet shoe
    { d: 'M14.0 18.6 L14.2 27.4', kind: 'skin', w: 2.8 },
    { d: 'M12.9 27.0 H15.5 L14.8 30.2 C14.5 30.8 13.9 30.8 13.6 30.2 Z', kind: 'shoe' },

    // Gender-neutral athletic dance top / tunic (straight shoulders, non-femalized cut)
    { d: 'M10.4 11.4 C11.2 10.4 15.0 10.4 15.6 11.4 L16.4 17.2 L11.4 17.6 Z', kind: 'leotard' },

    // Black tutu skirt with subtle slate pleats & waist seam
    { d: 'M7.4 18.4 C9.4 15.2 19.6 14.4 23.0 17.0 C20.8 19.8 11.2 20.6 7.4 18.4 Z', kind: 'tutu' },
    { d: 'M11.6 16.4 Q14.0 16.0 16.2 16.4 M10.4 18.2 C12.4 17.0 15.2 16.8 17.4 17.6 M15.4 16.4 C17.6 16.0 19.8 16.4 21.2 17.2', kind: 'mark', w: 0.75, fill: '#64748B' },

    // Front arm gracefully curved forward
    { d: 'M11.4 12.4 Q7.8 11.2 4.8 8.4', kind: 'skin', w: 2.4 },
    { d: circlePath(4.6, 8.2, 1.35), kind: 'skin' },

    // Neck, ear, oval gender-neutral Wimoji head & swept short hair (no bun)
    { d: 'M11.2 9.4 L12.2 11.6 L13.8 11.0 L12.8 8.8 Z', kind: 'skin' },
    { d: ellipsePath(14.8, 7.4, 0.85, 1.25), kind: 'skin' },
    { d: ellipsePath(11.8, 6.8, 3.5, 3.7), kind: 'skin' },
    { d: personHair(11.8, 6.8, 3.5, 3.7), kind: 'hair' },
  ];

  const colorOf = (kind: Layer['kind'], fill?: string) => {
    if (s) return c.primary;
    if (d) {
      if (kind === 'leotard' || kind === 'hair' || kind === 'tutu' || kind === 'shoe') return c.primary;
      return c.secondary;
    }
    switch (kind) {
      case 'leotard':
      case 'tutu':
      case 'shoe':
        return '#1E293B';
      case 'skin':
        return '#FFCA28';
      case 'hair':
        return '#78350F';
      case 'mark':
        return fill || '#64748B';
    }
  };

  const cover = (l: Layer) =>
    l.kind === 'mark'
      ? ''
      : l.w
      ? `<path d="${l.d}" fill="none" stroke="#000" stroke-width="${l.w + t}" />`
      : `<path d="${l.d}" fill="#000" stroke="#000" stroke-width="${t}" />`;

  const draw = (l: Layer) => {
    if (l.kind === 'mark') {
      return `<path d="${l.d}" fill="none" stroke="${o ? c.stroke : s ? '#FFFFFF' : colorOf('mark', l.fill)}" stroke-width="${l.w}" />`;
    }
    if (o) {
      return l.w
        ? `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${l.w + t}" />`
        : `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${t}" />`;
    }
    const col = colorOf(l.kind, l.fill);
    if (s) {
      return l.w
        ? `<path d="${l.d}" fill="none" stroke="#FFFFFF" stroke-width="${l.w + 1.4}" /><path d="${l.d}" fill="none" stroke="${col}" stroke-width="${l.w}" />`
        : `<path d="${l.d}" fill="${col}" stroke="#FFFFFF" stroke-width="0.85" />`;
    }
    const strokeCol = l.kind === 'leotard' || l.kind === 'tutu' || l.kind === 'shoe' ? (d ? c.stroke : '#0F172A') : c.stroke;
    return l.w
      ? `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${l.w + 2 * t}" /><path d="${l.d}" fill="none" stroke="${col}" stroke-width="${l.w}" />`
      : `<path d="${l.d}" fill="${col}" stroke="${strokeCol}" stroke-width="${t}" />`;
  };

  const body = layers
    .map((l, i) => {
      const later = layers.slice(i + 1).map(cover).join('');
      const hole = o && l.w ? `<path d="${l.d}" fill="none" stroke="#000" stroke-width="${Math.max(0.5, l.w - t)}" />` : '';
      if (!o || (!later && !hole)) return draw(l);
      return `<mask id="wimoji-ballet-${i}" maskUnits="userSpaceOnUse" x="-4" y="-4" width="40" height="40"><rect x="-4" y="-4" width="40" height="40" fill="#fff" />${later}${hole}</mask><g mask="url(#wimoji-ballet-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');

  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';

  const features = `
    <circle cx="9.8" cy="7.1" r="0.65" fill="${ink}" stroke="none" />
    <circle cx="12.2" cy="7.1" r="0.65" fill="${ink}" stroke="none" />
    <path d="M10.1 8.6 C10.6 9.3 11.4 9.3 11.9 8.6" fill="none" stroke="${ink}" stroke-width="0.9" />
    <!-- Subtle black ballet ribbon wrap at ankle -->
    ${!o ? `<path d="M13.3 25.4 L15.1 26.2 M15.1 25.4 L13.3 26.2" fill="none" stroke="${s ? '#FFFFFF' : d ? c.stroke : '#0F172A'}" stroke-width="0.65" />` : ''}
  `;

  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${features}
      </g>`;
}

export const balletIcons: WimojiIconDef[] = [
  // Ballet Dancer (U+1F9D1 U+200D U+1FA70)
  {
    id: 'ballet-dancer',
    char: '🧑‍🩰',
    name: 'Ballet Dancer',
    unicodeHex: 'U+1F9D1 U+200D U+1FA70',
    category: 'people-body',
    tags: ['ballet dancer', 'ballet', 'dancer', 'dance', 'pointe', 'tutu', 'performer', 'person', 'gender neutral', '🧑‍🩰'],
    renderContent: renderBalletDancer,
  },
];
