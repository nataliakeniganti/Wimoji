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

// Bicycle with a rider, drawn through a transform so the same bike can be tilted for mountain biking
const cyclistLayers = (t: (p: Pt) => Pt, crouch: number, helmet = '#1E88E5'): PersonLayer[] => {
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
  return [
    ...wheel(6, 23),
    ...wheel(26, 23),
    frame([[6, 23], [12.6, 23], [11.2, 15.2], [6, 23]]),
    frame([[11.2, 15.2], [21, 14.8], [12.6, 23]]),
    frame([[21, 14.8], [26, 23]]),
    tube('mark', [P(10.8, 14.4), P(11.4, 15.8)], 2.2, '#263238'),
    tube('mark', [P(20.6, 14.8), P(22, 11.8), P(24, 12.2)], 1.5, '#263238'),
    ...legOf(hipP, P(17.8, 16.2), P(15.2, 21.6), 1),
    ...legOf(hipP, P(10.4, 19.8), P(11.4, 25.2), -1),
    tube('shirt', [hipP, P(18.2, 8.8 - crouch * 0.4)], 5.4),
    ...armOf(P(17.6, 9.6 - crouch * 0.4), P(20.8, 12.6), P(22.8, 12.6)),
    ...headOf(...P(20.6, 5.6 - crouch * 0.4), 3.2, 3.5),
    { d: (() => { const h = P(20.6, 5.6 - crouch * 0.4); return `M${h[0] - 3.4} ${h[1] - 0.6} C${h[0] - 3.4} ${h[1] - 4.4} ${h[0] - 1.6} ${h[1] - 4.6} ${h[0]} ${h[1] - 4.6} C${h[0] + 1.6} ${h[1] - 4.6} ${h[0] + 3.4} ${h[1] - 4.4} ${h[0] + 3.4} ${h[1] - 0.6} C${h[0] + 1.6} ${h[1] - 2.2} ${h[0] - 1.6} ${h[1] - 2.2} ${h[0] - 3.4} ${h[1] - 0.6} Z`; })(), kind: 'item', fill: helmet },
  ];
};

export const transportTransitIcons: WimojiIconDef[] = [
  {
    id: 'monorail',
    char: '🚝',
    name: 'Monorail',
    unicodeHex: 'U+1F69D',
    category: 'sports-travel',
    tags: ['monorail', 'train', 'transit', 'rail', 'elevated', 'beam', 'public transit', 'commute', '🚝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#94A3B8', fillAccent: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Monorail Beam -->
          <line x1="2" y1="23" x2="30" y2="23" />
          <line x1="16" y1="23" x2="16" y2="29" />
          <!-- Monorail Cab Body -->
          <path d="M4 22V12c0-3 3-5 7-5h9c5 0 8 3 8 7v8c0 1-1 1-2 1h-2v-3H8v3H6c-1 0-2 0-2-1z" />
          <!-- Windows -->
          <rect x="7" y="10" width="4" height="4" rx="1" />
          <rect x="13" y="10" width="4" height="4" rx="1" />
          <path d="M19 10h4c2 0 3 1 3 3v1h-7v-4z" />
          <!-- Headlight -->
          <circle cx="26" cy="18" r="1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Concrete Elevated Beam & Pylon Pillar -->
        <rect x="14.5" y="22" width="3" height="7" rx="0.5" fill="${c.secondary}" />
        <rect x="2" y="21" width="28" height="3" rx="1" fill="${c.secondary}" stroke="#64748B" stroke-width="0.8" />
        <!-- Streamlined Train Body -->
        <path d="M4 21V12c0-3.5 3-5 7-5h9c5 0 8 3 8 7.5v6.5c0 1-0.8 1.5-1.8 1.5h-2.2v-3.5H8V22.5H5.8C4.8 22.5 4 22 4 21z" fill="${c.primary}" stroke="#1E3A8A" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Accent Stripe -->
        <path d="M4 16h24v2H4z" fill="#FBBF24" />
        <!-- Panoramic Glass Windows -->
        <rect x="7" y="10" width="4.5" height="4" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <rect x="13" y="10" width="4.5" height="4" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <path d="M19 10h4c2.2 0 3.2 1.2 3.2 3.2v0.8H19V10z" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <!-- Bright Headlight -->
        <circle cx="26" cy="19.5" r="1.3" fill="#FEF08A" stroke="#EAB308" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'mountain-railway',
    char: '🚞',
    name: 'Mountain Railway',
    unicodeHex: 'U+1F69E',
    category: 'sports-travel',
    tags: ['mountain railway', 'funicular', 'incline', 'cog railway', 'train', 'alpine', 'slope', '🚞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#64748B', fillAccent: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Angled Mountain Slope & Track -->
          <line x1="2" y1="28" x2="30" y2="12" />
          <line x1="7" y1="27" x2="5" y2="24" />
          <line x1="14" y1="23" x2="12" y2="20" />
          <line x1="21" y1="19" x2="19" y2="16" />
          <line x1="28" y1="15" x2="26" y2="12" />
          <!-- Tilted Train Car -->
          <g transform="rotate(-28 16 16)">
            <rect x="7" y="11" width="18" height="10" rx="2" />
            <rect x="10" y="13" width="5" height="4" rx="0.5" />
            <rect x="17" y="13" width="5" height="4" rx="0.5" />
            <circle cx="11" cy="22" r="1.5" />
            <circle cx="21" cy="22" r="1.5" />
          </g>
        </g>`;
      }
      return `${badge}<g>
        <!-- Mountain Hillside Background -->
        <polygon points="2,30 30,14 30,30 2,30" fill="#E2E8F0" />
        <!-- Cog Railway Track -->
        <line x1="2" y1="27" x2="30" y2="11" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" />
        <line x1="7" y1="26" x2="5" y2="23" stroke="#334155" stroke-width="1.5" />
        <line x1="14" y1="22" x2="12" y2="19" stroke="#334155" stroke-width="1.5" />
        <line x1="21" y1="18" x2="19" y2="15" stroke="#334155" stroke-width="1.5" />
        <line x1="28" y1="14" x2="26" y2="11" stroke="#334155" stroke-width="1.5" />
        <!-- Tilted Funicular Coach -->
        <g transform="rotate(-28 16 16)">
          <!-- Wheels -->
          <circle cx="10" cy="22.5" r="1.8" fill="#1E293B" stroke="#64748B" stroke-width="0.8" />
          <circle cx="22" cy="22.5" r="1.8" fill="#1E293B" stroke="#64748B" stroke-width="0.8" />
          <!-- Cabin Body -->
          <rect x="6" y="11" width="20" height="11" rx="2.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
          <!-- Windows -->
          <rect x="9" y="13.5" width="5" height="4.5" rx="0.6" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
          <rect x="18" y="13.5" width="5" height="4.5" rx="0.6" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
          <circle cx="24.5" cy="18" r="1" fill="#FEF08A" />
        </g>
      </g>`;
    },
  },
  {
    id: 'suspension-railway',
    char: '🚟',
    name: 'Suspension Railway',
    unicodeHex: 'U+1F69F',
    category: 'sports-travel',
    tags: ['suspension railway', 'wuppertal', 'hanging train', 'overhead', 'monorail', 'transit', '🚟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#475569', fillAccent: '#E0F2FE', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Overhead Track & Support -->
          <line x1="2" y1="5" x2="30" y2="5" />
          <!-- Suspension Bogie Arms -->
          <line x1="10" y1="5" x2="10" y2="13" />
          <line x1="22" y1="5" x2="22" y2="13" />
          <!-- Suspended Passenger Car -->
          <rect x="5" y="13" width="22" height="13" rx="2" />
          <!-- Windows -->
          <rect x="8" y="16" width="4" height="5" rx="0.5" />
          <rect x="14" y="16" width="4" height="5" rx="0.5" />
          <rect x="20" y="16" width="4" height="5" rx="0.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Overhead Steel Rail Beam & Girders -->
        <rect x="2" y="3.5" width="28" height="3" rx="0.5" fill="${c.secondary}" stroke="#334155" stroke-width="0.8" />
        <!-- Bogies & Hanger Struts -->
        <circle cx="10" cy="5" r="1.8" fill="#1E293B" />
        <circle cx="22" cy="5" r="1.8" fill="#1E293B" />
        <rect x="9" y="5" width="2" height="9" rx="0.5" fill="${c.secondary}" />
        <rect x="21" y="5" width="2" height="9" rx="0.5" fill="${c.secondary}" />
        <!-- Suspended Carriage Body -->
        <rect x="5" y="13" width="22" height="13" rx="2.5" fill="${c.primary}" stroke="#0369A1" stroke-width="1.2" />
        <!-- Bottom Trim Stripe -->
        <rect x="5" y="23" width="22" height="2" fill="#FBBF24" />
        <!-- Windows -->
        <rect x="8" y="15.5" width="4.5" height="5.5" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <rect x="13.7" y="15.5" width="4.5" height="5.5" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <rect x="19.5" y="15.5" width="4.5" height="5.5" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'mountain-cableway',
    char: '🚠',
    name: 'Mountain Cableway',
    unicodeHex: 'U+1F6A0',
    category: 'sports-travel',
    tags: ['mountain cableway', 'gondola', 'cable car', 'ski lift', 'alpine', 'mountain', 'aerial', '🚠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E11D48', fillSecondary: '#475569', fillAccent: '#BAE6FD', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Diagonal Main Cable -->
          <line x1="2" y1="6" x2="30" y2="14" />
          <!-- Trolley Wheel & Hanger -->
          <circle cx="16" cy="10" r="1.5" />
          <path d="M16 10v6l-2 3" />
          <!-- Gondola Cabin -->
          <rect x="8" y="17" width="16" height="12" rx="3" />
          <rect x="11" y="19" width="10" height="5" rx="1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Mountain Silhouette in Background -->
        <polygon points="2,30 10,18 19,25 28,14 30,30" fill="#E2E8F0" />
        <!-- Diagonal Heavy Cable Line -->
        <line x1="2" y1="6" x2="30" y2="14" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <!-- Roller Trolley & Hanger Arm -->
        <circle cx="16" cy="10" r="2" fill="#1E293B" />
        <path d="M16 10v6l-2 3" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Gondola Cabin Body -->
        <rect x="8" y="17" width="16" height="12" rx="3.5" fill="${c.primary}" stroke="#9F1239" stroke-width="1.2" />
        <!-- Panoramic Windows -->
        <rect x="10.5" y="19.5" width="11" height="5.5" rx="1" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <line x1="16" y1="19.5" x2="16" y2="25" stroke="#0284C7" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'aerial-tramway',
    char: '🚡',
    name: 'Aerial Tramway',
    unicodeHex: 'U+1F6A1',
    category: 'sports-travel',
    tags: ['aerial tramway', 'ropeway', 'cable car', 'tram', 'sky tram', 'alpine', 'transit', '🚡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#475569', fillAccent: '#E0F2FE', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="2" y1="6" x2="30" y2="6" />
          <circle cx="13" cy="6" r="1.5" />
          <circle cx="19" cy="6" r="1.5" />
          <path d="M16 6v7" />
          <rect x="6" y="13" width="20" height="14" rx="2" />
          <rect x="9" y="16" width="6" height="6" rx="0.5" />
          <rect x="17" y="16" width="6" height="6" rx="0.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Horizontal Cable -->
        <line x1="2" y1="5.5" x2="30" y2="5.5" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <!-- Double Trolley Wheels & Hanger -->
        <circle cx="13" cy="5.5" r="2" fill="#1E293B" />
        <circle cx="19" cy="5.5" r="2" fill="#1E293B" />
        <polygon points="12,5.5 20,5.5 17,13.5 15,13.5" fill="${c.secondary}" />
        <!-- Large Tram Cabin -->
        <rect x="5.5" y="13.5" width="21" height="14" rx="3" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Cabin Windows -->
        <rect x="8.5" y="16.5" width="6.5" height="6.5" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <rect x="17" y="16.5" width="6.5" height="6.5" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <!-- Floor Skid Beam -->
        <line x1="7.5" y1="28.5" x2="24.5" y2="28.5" stroke="#334155" stroke-width="1.5" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'rowboat',
    char: '🚣',
    name: 'Person Rowing Boat',
    unicodeHex: 'U+1F6A3',
    category: 'sports-travel',
    tags: ['rowboat', 'rowing', 'boat', 'oar', 'water', 'lake', 'river', 'paddle', 'athlete', '🚣'],
    renderContent: (opts) => {
      // Rower seated in a long boat, both hands on an oar whose blade dips into the water
      const layers: PersonLayer[] = [
        tube('shirt', [[15.4, 16], [13.8, 9.8]], 5),
        ...headOf(13.4, 6.2, 3.1, 3.4),
        { d: 'M2.6 17.4 H29.4 C28.6 22.8 22.6 25.4 16 25.4 C9.4 25.4 3.4 22.8 2.6 17.4 Z', kind: 'item', fill: '#B45309' },
        { d: 'M3 18.4 H29', kind: 'mark', w: 1, fill: '#FBBF24' },
        { d: 'M1.6 28.4 C4.6 26.8 7.6 29.6 10.6 28.4 S16.6 26.8 19.6 28.4 S25.6 29.6 30.4 27.6', kind: 'mark', w: 1.8, fill: '#0284C7' },
        tube('item', [[22.8, 10.2], [9.6, 26.4]], 1.5, '#92400E'),
        tube('item', [[10.6, 25.2], [8.4, 28]], 3.2, '#92400E'),
        ...armOf([14.4, 10.8], [18.4, 13.6], [21.6, 11.8]),
      ];
      return renderPerson(opts, layers, (ink) => faceAt(ink, 13.4, 6.3, 1, 0.9), 'row');
    },
  },
  {
    id: 'bicycle',
    char: '🚲',
    name: 'Bicycle',
    unicodeHex: 'U+1F6B2',
    category: 'sports-travel',
    tags: ['bicycle', 'bike', 'cycle', 'cycling', 'commute', 'wheels', 'transport', 'pedal', '🚲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#1E293B', fillAccent: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Wheels -->
          <circle cx="7" cy="21" r="5" />
          <circle cx="25" cy="21" r="5" />
          <!-- Frame Triangle -->
          <polyline points="7,21 13,21 18,12 10,12 7,21" />
          <line x1="13" y1="21" x2="11" y2="9" />
          <line x1="18" y1="12" x2="25" y2="21" />
          <line x1="18" y1="12" x2="20" y2="8" />
          <line x1="18" y1="8" x2="22" y2="8" />
          <!-- Saddle -->
          <line x1="9" y1="9" x2="13" y2="9" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wheels with Spokes & Rims -->
        <circle cx="7" cy="21" r="5.2" fill="none" stroke="${c.secondary}" stroke-width="2.2" />
        <circle cx="7" cy="21" r="1.5" fill="#94A3B8" />
        <circle cx="25" cy="21" r="5.2" fill="none" stroke="${c.secondary}" stroke-width="2.2" />
        <circle cx="25" cy="21" r="1.5" fill="#94A3B8" />
        <!-- Bicycle Diamond Frame (Primary Accent) -->
        <g stroke="${c.primary}" stroke-width="2.2" fill="none">
          <polyline points="7,21 13.5,21 18,12.5 10.5,12.5 7,21" />
          <line x1="13.5" y1="21" x2="11" y2="9.5" />
          <line x1="18" y1="12.5" x2="25" y2="21" />
          <line x1="18" y1="12.5" x2="20" y2="8" />
        </g>
        <!-- Saddle (Dark Leather) -->
        <path d="M9 9.5h4.5c0.8 0 1.2-0.5 0.8-1H9.2C8.6 8.5 8.4 9.5 9 9.5z" fill="#0F172A" />
        <!-- Handlebar Grip -->
        <path d="M18 8h4.5l1.5 2" stroke="#0F172A" stroke-width="1.8" fill="none" />
      </g>`;
    },
  },
  {
    id: 'person-biking',
    char: '🚴',
    name: 'Person Biking',
    unicodeHex: 'U+1F6B4',
    category: 'sports-travel',
    tags: ['person biking', 'cyclist', 'bicyclist', 'race', 'cycling', 'bicycle', 'sport', 'athlete', '🚴'],
    renderContent: (opts) => {
      // Facing left
      const mir = (p: Pt): Pt => [+(32 - p[0]).toFixed(2), p[1]];
      const head = mir([20.9, 5.9]);
      return renderPerson(opts, cyclistLayers(mir, 0), (ink) => faceAt(ink, head[0], head[1], -1, 0.8), 'bike');
    },
  },
  {
    id: 'person-mountain-biking',
    char: '🚵',
    name: 'Person Mountain Biking',
    unicodeHex: 'U+1F6B5',
    category: 'sports-travel',
    tags: ['mountain biking', 'mountain bike', 'mtb', 'offroad', 'trail', 'cyclist', 'uphill', 'athlete', '🚵'],
    renderContent: (opts) => {
      // Facing left, crouched on a knobby-tyred bike with mountains behind
      const tilt = (p: Pt): Pt => {
        const a = (7 * Math.PI) / 180;
        const x = p[0] - 16;
        const y = p[1] - 16;
        return [+(32 - (16 + x * Math.cos(a) - y * Math.sin(a)) - 0.4).toFixed(2), +(16 + x * Math.sin(a) + y * Math.cos(a) + 0.2).toFixed(2)];
      };
      const layers: PersonLayer[] = [
        ...(opts.style === 'silhouette'
          ? []
          : ([
              { d: 'M0 22 L8 9 L13.4 17 L20.4 4.6 L32 22 V32 H0 Z', kind: 'item', fill: '#BCAAA4' },
              { d: 'M20.4 4.6 L16.8 10.6 L19 10 L20.6 12.6 L22.4 9.8 L24.4 11 Z', kind: 'item', fill: '#EFEBE9' },
            ] as PersonLayer[])),
        { d: 'M0 30.6 C8 29.4 20 31.6 32 29.4', kind: 'mark', w: 1.6, fill: '#8D6E63' },
        ...cyclistLayers(tilt, 1.4, '#263238'),
      ];
      const head = tilt([20.6, 5.6 - 0.56]);
      return renderPerson(opts, layers, (ink) => faceAt(ink, head[0], head[1] + 0.3, -1, 0.8), 'mtb');
    },
  },
  {
    id: 'person-walking',
    char: '🚶',
    name: 'Person Walking',
    unicodeHex: 'U+1F6B6',
    category: 'sports-travel',
    tags: ['person walking', 'pedestrian', 'walk', 'stroll', 'commute', 'foot', 'step', 'stride', '🚶'],
    renderContent: (opts) => {
      // Facing left
      const layers: PersonLayer[] = [
        ...armOf([15.4, 11.6], [13.2, 15.6], [11.8, 19]),
        ...legOf([15, 19], [13, 24.4], [10.2, 28.6], -1),
        tube('shirt', [[16.2, 10.6], [15.4, 19.2]], 6.4),
        ...legOf([16, 19], [19, 24], [20.8, 29.2], 1),
        ...armOf([17, 11.6], [19, 15.6], [20.6, 18.8]),
        ...headOf(16.6, 5.8, 3.5, 3.8),
      ];
      return mirrorFigure(renderPerson(opts, layers, (ink) => faceAt(ink, 16.6, 5.8, 1), 'walk'));
    },
  },
  {
    id: 'kick-scooter',
    char: '🛴',
    name: 'Kick Scooter',
    unicodeHex: 'U+1F6F4',
    category: 'sports-travel',
    tags: ['kick scooter', 'scooter', 'push scooter', 'skate', 'wheels', 'ride', 'commute', '🛴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="7" cy="25" r="3" />
          <circle cx="25" cy="25" r="3" />
          <line x1="7" y1="25" x2="23" y2="25" />
          <line x1="23" y1="25" x2="21" y2="7" />
          <line x1="17" y1="7" x2="25" y2="7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wheels -->
        <circle cx="7" cy="25" r="3.2" fill="${c.secondary}" stroke="#64748B" stroke-width="1.2" />
        <circle cx="7" cy="25" r="1" fill="#E2E8F0" />
        <circle cx="25" cy="25" r="3.2" fill="${c.secondary}" stroke="#64748B" stroke-width="1.2" />
        <circle cx="25" cy="25" r="1" fill="#E2E8F0" />
        <!-- Low Foot Deck Plate -->
        <line x1="8" y1="25" x2="23" y2="25" stroke="${c.primary}" stroke-width="3" />
        <!-- Upright Steering Stem -->
        <line x1="23" y1="25" x2="21" y2="7" stroke="${c.primary}" stroke-width="2.5" />
        <!-- Handlebar Grips -->
        <line x1="17" y1="7" x2="25" y2="7" stroke="#1E293B" stroke-width="2.5" />
      </g>`;
    },
  },
  {
    id: 'motor-scooter',
    char: '🛵',
    name: 'Motor Scooter',
    unicodeHex: 'U+1F6F5',
    category: 'sports-travel',
    tags: ['motor scooter', 'moped', 'vespa', 'scooter', 'motorcycle', 'ride', 'delivery', '🛵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1E293B', fillAccent: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="8" cy="23" r="4" />
          <circle cx="24" cy="23" r="4" />
          <path d="M8 23h5l3-4h4l4 4" />
          <path d="M16 19l4-10" />
          <line x1="18" y1="8" x2="22" y2="8" />
          <path d="M7 19c2-4 6-4 8-1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wheels with Hubcaps -->
        <circle cx="8" cy="23" r="4.2" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <circle cx="8" cy="23" r="1.5" fill="#E2E8F0" />
        <circle cx="24" cy="23" r="4.2" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <circle cx="24" cy="23" r="1.5" fill="#E2E8F0" />
        <!-- Rear Cowl & Leather Saddle -->
        <path d="M6 21c0-4 4-6 9-6v5l-5 3z" fill="${c.primary}" stroke="#1D4ED8" stroke-width="1" />
        <path d="M8 15c2-2 6-2 8 0z" fill="#0F172A" />
        <!-- Step-Through Floorboard -->
        <rect x="13" y="21" width="5" height="2" rx="0.5" fill="#334155" />
        <!-- Front Fairing Leg Shield -->
        <path d="M18 21l3-11h2l-2 11z" fill="${c.primary}" stroke="#1D4ED8" stroke-width="1" />
        <!-- Chrome Handlebar & Headlight -->
        <line x1="19" y1="9" x2="23" y2="9" stroke="#64748B" stroke-width="2" />
        <circle cx="23" cy="10" r="1.8" fill="${c.accent}" stroke="#D97706" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'canoe',
    char: '🛶',
    name: 'Canoe',
    unicodeHex: 'U+1F6F6',
    category: 'sports-travel',
    tags: ['canoe', 'boat', 'kayak', 'paddle', 'water', 'lake', 'stream', 'outdoors', '🛶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#9A3412', fillAccent: '#38BDF8', stroke: '#7C2D12' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 16c4 8 22 8 26 0-3 3-23 3-26 0z" />
          <line x1="8" y1="8" x2="24" y2="24" />
          <ellipse cx="23" cy="23" rx="2" ry="3" transform="rotate(-45 23 23)" />
          <path d="M2 28c3-1 6-1 9 0s6 1 9 0 6-1 9 0" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Water Wake -->
        <path d="M2 28c3-1.5 6-1.5 9 0s6 1.5 9 0 6-1.5 9 0" stroke="${c.accent}" stroke-width="2" fill="none" />
        <!-- Curved Canoe Hull -->
        <path d="M3 16c4 8.5 22 8.5 26 0-3 3.5-23 3.5-26 0z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <ellipse cx="16" cy="18" rx="8" ry="1.5" fill="${c.secondary}" />
        <!-- Single Canoe Paddle -->
        <line x1="9" y1="9" x2="23" y2="23" stroke="#78350F" stroke-width="1.8" />
        <path d="M21 21l3 3c0.8 0.8 1.5 0.5 2-0.2s0-1.8-0.8-2.6l-3-3z" fill="#9A3412" />
      </g>`;
    },
  },
  {
    id: 'sled',
    char: '🛷',
    name: 'Sled',
    unicodeHex: 'U+1F6F7',
    category: 'sports-travel',
    tags: ['sled', 'sledge', 'toboggan', 'snow', 'winter', 'sliding', 'ice', '🛷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Runners -->
          <path d="M4 25c-2 0-3-2-2-4 1-2 4-2 6-2h18" />
          <line x1="10" y1="19" x2="10" y2="14" />
          <line x1="22" y1="19" x2="22" y2="14" />
          <!-- Sled Seat Plank -->
          <rect x="7" y="11" width="19" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Snow Surface -->
        <path d="M2 28c5 0 9-1 14 0s7 1 14 0" stroke="#E2E8F0" stroke-width="2" fill="none" />
        <!-- Steel Runners with Curved Front Tip -->
        <path d="M4 25c-2.5 0-3.5-2.5-2-4.5 1.5-2 4.5-2 6.5-2h17.5" stroke="${c.secondary}" stroke-width="2.2" fill="none" />
        <!-- Vertical Strut Supports -->
        <line x1="11" y1="18.5" x2="11" y2="13.5" stroke="${c.secondary}" stroke-width="2" />
        <line x1="21" y1="18.5" x2="21" y2="13.5" stroke="${c.secondary}" stroke-width="2" />
        <!-- Red Wooden Slat Seat Deck -->
        <rect x="7" y="11" width="19" height="3.5" rx="1.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <!-- Pull Rope -->
        <path d="M3 21l3-7" stroke="#F59E0B" stroke-width="1.2" stroke-dasharray="1.5,1.5" />
      </g>`;
    },
  },
  {
    id: 'flying-saucer',
    char: '🛸',
    name: 'Flying Saucer',
    unicodeHex: 'U+1F6F8',
    category: 'sports-travel',
    tags: ['flying saucer', 'ufo', 'alien', 'spaceship', 'sci-fi', 'space', 'extraterrestrial', '🛸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#38BDF8', fillAccent: '#A855F7', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Glass Cockpit Dome -->
          <path d="M11 15c0-4 2-7 5-7s5 3 5 7" />
          <!-- Saucer Disc Rim -->
          <ellipse cx="16" cy="17" rx="12" ry="4" />
          <!-- Sensor Lights -->
          <circle cx="8" cy="17" r="1" />
          <circle cx="16" cy="19" r="1" />
          <circle cx="24" cy="17" r="1" />
          <!-- Beam -->
          <line x1="11" y1="21" x2="6" y2="28" />
          <line x1="21" y1="21" x2="26" y2="28" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Tractor Beam Light Cone -->
        <polygon points="12,19 20,19 26,29 6,29" fill="${c.accent}" opacity="0.35" />
        <!-- Transparent Glass Cockpit Dome -->
        <path d="M11.5 15.5c0-3.5 2-6.5 4.5-6.5s4.5 3 4.5 6.5" fill="${c.secondary}" stroke="#0284C7" stroke-width="1" />
        <!-- Metallic Saucer Rim (Lower & Upper) -->
        <ellipse cx="16" cy="18" rx="13" ry="4.5" fill="${c.primary}" stroke="#334155" stroke-width="1.2" />
        <ellipse cx="16" cy="16.5" rx="10" ry="2.5" fill="#94A3B8" />
        <!-- Sensor Running Lights -->
        <circle cx="7" cy="18" r="1.3" fill="#FBBF24" />
        <circle cx="11.5" cy="19.5" r="1.3" fill="#34D399" />
        <circle cx="16" cy="20" r="1.3" fill="#F43F5E" />
        <circle cx="20.5" cy="19.5" r="1.3" fill="#34D399" />
        <circle cx="25" cy="18" r="1.3" fill="#FBBF24" />
      </g>`;
    },
  },
  {
    id: 'skateboard',
    char: '🛹',
    name: 'Skateboard',
    unicodeHex: 'U+1F6F9',
    category: 'sports-travel',
    tags: ['skateboard', 'skate', 'deck', 'board', 'kickflip', 'wheels', 'skater', 'extreme', '🛹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#E2E8F0', fillAccent: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Curved Wooden Deck -->
          <path d="M4 14c1-2 4-1 6 1l12 6c2 1 5 1 6-1" />
          <!-- Wheels & Trucks -->
          <circle cx="9" cy="22" r="2.5" />
          <circle cx="23" cy="25" r="2.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Front & Rear Polyurethane Wheels -->
        <circle cx="9" cy="22.5" r="2.8" fill="${c.accent}" stroke="#991B1B" stroke-width="0.8" />
        <circle cx="23" cy="25" r="2.8" fill="${c.accent}" stroke="#991B1B" stroke-width="0.8" />
        <!-- Metal Trucks -->
        <rect x="8" y="19" width="3" height="3" fill="#64748B" />
        <rect x="22" y="21.5" width="3" height="3" fill="#64748B" />
        <!-- Skateboard Deck with Grip Tape -->
        <path d="M3.5 13.5c1.2-2.5 4.5-1.5 7 1l11 6c2.5 1.5 5.5 1.2 7-1" stroke="${c.primary}" stroke-width="4.2" fill="none" />
        <!-- Wooden Core Underside Stripe -->
        <path d="M3.5 14.5c1.2-2.5 4.5-1.5 7 1l11 6c2.5 1.5 5.5 1.2 7-1" stroke="#F59E0B" stroke-width="1.2" fill="none" />
      </g>`;
    },
  },
  {
    id: 'passenger-ship',
    char: '🛳',
    name: 'Passenger Ship',
    unicodeHex: 'U+1F6F3',
    category: 'sports-travel',
    tags: ['passenger ship', 'cruise', 'cruise ship', 'liner', 'ocean', 'vacation', 'ferry', '🛳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', fillAccent: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Naval Hull -->
          <path d="M3 21l3 4h20l3-4H3z" />
          <!-- Multi-tier Stateroom Decks -->
          <rect x="7" y="15" width="18" height="6" />
          <rect x="10" y="10" width="12" height="5" />
          <!-- Smokestacks -->
          <line x1="13" y1="10" x2="13" y2="7" />
          <line x1="19" y1="10" x2="19" y2="7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ocean Waves -->
        <path d="M2 26c3-1 6-1 9 0s6 1 9 0 6-1 9 0" stroke="#0284C7" stroke-width="2" fill="none" />
        <!-- Smokestacks (Red with Black Tip) -->
        <rect x="12" y="7" width="2.5" height="4" fill="${c.accent}" />
        <rect x="12" y="7" width="2.5" height="1" fill="#0F172A" />
        <rect x="17.5" y="7" width="2.5" height="4" fill="${c.accent}" />
        <rect x="17.5" y="7" width="2.5" height="1" fill="#0F172A" />
        <!-- Upper Observation Bridge & Decks -->
        <rect x="9" y="11" width="14" height="4.5" rx="1" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Middle Stateroom Cabin Deck -->
        <rect x="6.5" y="15.5" width="19" height="5" rx="1" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Porthole Window Rows -->
        <circle cx="10" cy="18" r="0.8" fill="#0284C7" />
        <circle cx="13" cy="18" r="0.8" fill="#0284C7" />
        <circle cx="16" cy="18" r="0.8" fill="#0284C7" />
        <circle cx="19" cy="18" r="0.8" fill="#0284C7" />
        <circle cx="22" cy="18" r="0.8" fill="#0284C7" />
        <!-- Heavy Navy Hull -->
        <path d="M3 20.5l3.5 5h19l3.5-5H3z" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'airplane-departure',
    char: '🛫',
    name: 'Airplane Departure',
    unicodeHex: 'U+1F6EB',
    category: 'sports-travel',
    tags: ['airplane departure', 'takeoff', 'flight', 'airport', 'plane', 'travel', 'ascend', '🛫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#0284C7', fillAccent: '#94A3B8', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const sw = opts.strokeWidth ?? 2;
      const bodyFill = isOutline ? 'none' : isSilhouette ? c.stroke : c.primary;
      const bodyStroke = isSilhouette ? 'none' : c.stroke;
      const detail = isOutline ? 'none' : isSilhouette ? '#FFFFFF' : c.secondary;
      const nacelleStroke = isSilhouette ? 'none' : c.stroke;
      const runway = isSilhouette ? c.stroke : isOutline ? c.stroke : c.accent;
      const k = 0.66;
      const lw = (isOutline ? Math.min(sw, 1.6) : 1.1) / k;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Airport ground: asphalt runway with centreline and edge marks -->
        <rect x="2" y="23" width="28" height="7" rx="1.8" fill="${isOutline ? 'none' : isSilhouette ? c.stroke : '#475569'}" stroke="${isOutline ? c.stroke : 'none'}" stroke-width="${isOutline ? Math.min(sw, 1.6) : 0}" />
        <line x1="5" y1="26.5" x2="27" y2="26.5" stroke="${isOutline ? c.stroke : '#F8FAFC'}" stroke-width="${isOutline ? 1.2 : 1.1}" stroke-dasharray="3 2.6" />
        ${isOutline ? '' : `<path d="M4.5 24.4h2M25.5 24.4h2M4.5 28.6h2M25.5 28.6h2" stroke="${isSilhouette ? '#FFFFFF' : '#FBBF24'}" stroke-width="0.9" fill="none" />`}
        <!-- Jet climbing away from the runway (nose up-right) -->
        <g transform="translate(16 12.5) rotate(62) scale(${k}) translate(-16 -16)">
          <!-- Rear engine pods -->
          <rect x="7.6" y="15.8" width="2.8" height="4.4" rx="1.2" fill="${isOutline ? 'none' : detail}" stroke="${nacelleStroke}" stroke-width="${lw * 0.6}" />
          <rect x="21.6" y="15.8" width="2.8" height="4.4" rx="1.2" fill="${isOutline ? 'none' : detail}" stroke="${nacelleStroke}" stroke-width="${lw * 0.6}" />
          <!-- Fuselage and swept wings -->
          <path d="M16 2.5c-1.5 0-2.5 2-2.5 5.5v7l-10.5 4v2.5l10.5-2.5v5.5l-3 2v1.5l5.5-1 5.5 1V27l-3-2V19l10.5 2.5v-2.5l-10.5-4V8c0-3.5-1-5.5-2.5-5.5z" fill="${bodyFill}" stroke="${bodyStroke}" stroke-width="${lw}" />
          <!-- Cockpit windshield -->
          <ellipse cx="16" cy="6.2" rx="1.8" ry="1.3" fill="${detail}" ${isOutline ? `stroke="${c.stroke}" stroke-width="${lw * 0.6}"` : ''} />
        </g>
      </g>`;
    },
  },
  {
    id: 'airplane-arrival',
    char: '🛬',
    name: 'Airplane Arrival',
    unicodeHex: 'U+1F6EC',
    category: 'sports-travel',
    tags: ['airplane arrival', 'landing', 'touchdown', 'flight', 'airport', 'plane', 'travel', '🛬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#0284C7', fillAccent: '#94A3B8', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const sw = opts.strokeWidth ?? 2;
      const bodyFill = isOutline ? 'none' : isSilhouette ? c.stroke : c.primary;
      const bodyStroke = isSilhouette ? 'none' : c.stroke;
      const detail = isOutline ? 'none' : isSilhouette ? '#FFFFFF' : c.secondary;
      const nacelleStroke = isSilhouette ? 'none' : c.stroke;
      const runway = isSilhouette ? c.stroke : isOutline ? c.stroke : c.accent;
      const k = 0.66;
      const lw = (isOutline ? Math.min(sw, 1.6) : 1.1) / k;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Airport ground: asphalt runway with centreline and edge marks -->
        <rect x="2" y="23" width="28" height="7" rx="1.8" fill="${isOutline ? 'none' : isSilhouette ? c.stroke : '#475569'}" stroke="${isOutline ? c.stroke : 'none'}" stroke-width="${isOutline ? Math.min(sw, 1.6) : 0}" />
        <line x1="5" y1="26.5" x2="27" y2="26.5" stroke="${isOutline ? c.stroke : '#F8FAFC'}" stroke-width="${isOutline ? 1.2 : 1.1}" stroke-dasharray="3 2.6" />
        ${isOutline ? '' : `<path d="M4.5 24.4h2M25.5 24.4h2M4.5 28.6h2M25.5 28.6h2" stroke="${isSilhouette ? '#FFFFFF' : '#FBBF24'}" stroke-width="0.9" fill="none" />`}
        <!-- Jet descending toward the runway (nose down-right) -->
        <g transform="translate(15 12) rotate(118) scale(${k}) translate(-16 -16)">
          <!-- Rear engine pods -->
          <rect x="7.6" y="15.8" width="2.8" height="4.4" rx="1.2" fill="${isOutline ? 'none' : detail}" stroke="${nacelleStroke}" stroke-width="${lw * 0.6}" />
          <rect x="21.6" y="15.8" width="2.8" height="4.4" rx="1.2" fill="${isOutline ? 'none' : detail}" stroke="${nacelleStroke}" stroke-width="${lw * 0.6}" />
          <!-- Fuselage and swept wings -->
          <path d="M16 2.5c-1.5 0-2.5 2-2.5 5.5v7l-10.5 4v2.5l10.5-2.5v5.5l-3 2v1.5l5.5-1 5.5 1V27l-3-2V19l10.5 2.5v-2.5l-10.5-4V8c0-3.5-1-5.5-2.5-5.5z" fill="${bodyFill}" stroke="${bodyStroke}" stroke-width="${lw}" />
          <!-- Cockpit windshield -->
          <ellipse cx="16" cy="6.2" rx="1.8" ry="1.3" fill="${detail}" ${isOutline ? `stroke="${c.stroke}" stroke-width="${lw * 0.6}"` : ''} />
        </g>
      </g>`;
    },
  },
  {
    id: 'satellite',
    char: '🛰',
    name: 'Satellite',
    unicodeHex: 'U+1F6F0',
    category: 'objects-places',
    tags: ['satellite', 'space', 'orbit', 'telecom', 'gps', 'iss', 'solar', 'transmission', '🛰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#E2E8F0', fillAccent: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g transform="rotate(-35 16 16)">
            <!-- Central Module Body -->
            <rect x="13" y="11" width="6" height="10" rx="1" />
            <!-- Solar Panels -->
            <rect x="3" y="13" width="8" height="6" />
            <rect x="21" y="13" width="8" height="6" />
            <!-- Antenna -->
            <line x1="16" y1="11" x2="16" y2="6" />
            <circle cx="16" cy="5" r="1.5" />
          </g>
        </g>`;
      }
      return `${badge}<g>
        <g transform="rotate(-35 16 16)">
          <!-- Solar Array Wings (Deep Blue with Grid Lines) -->
          <rect x="2.5" y="12.5" width="8.5" height="7" rx="0.5" fill="${c.primary}" stroke="#1E3A8A" stroke-width="0.8" />
          <line x1="6.8" y1="12.5" x2="6.8" y2="19.5" stroke="#93C5FD" stroke-width="0.6" />
          <line x1="2.5" y1="16" x2="11" y2="16" stroke="#93C5FD" stroke-width="0.6" />
          <rect x="21" y="12.5" width="8.5" height="7" rx="0.5" fill="${c.primary}" stroke="#1E3A8A" stroke-width="0.8" />
          <line x1="25.2" y1="12.5" x2="25.2" y2="19.5" stroke="#93C5FD" stroke-width="0.6" />
          <line x1="21" y1="16" x2="29.5" y2="16" stroke="#93C5FD" stroke-width="0.6" />
          <!-- Central Satellite Chassis (Gold / Metallic) -->
          <rect x="12.5" y="10.5" width="7" height="11" rx="1.5" fill="${c.accent}" stroke="#D97706" stroke-width="1" />
          <!-- Communications Dish & Feeder Horn -->
          <line x1="16" y1="10.5" x2="16" y2="5" stroke="#64748B" stroke-width="1.2" />
          <circle cx="16" cy="4.5" r="1.8" fill="#EF4444" />
        </g>
      </g>`;
    },
  },
  {
    id: 'motor-boat',
    char: '🛥',
    name: 'Motor Boat',
    unicodeHex: 'U+1F6E5',
    category: 'sports-travel',
    tags: ['motor boat', 'speed', 'speedboat', 'yacht', 'water', 'lake', 'sea', 'ocean', 'cruise', '🛥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#F8FAFC', fillAccent: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Hull -->
          <path d="M4 22l3 3h16l5-8H11l-7 5z" />
          <!-- Windshield & Cabin -->
          <path d="M12 17l4-5h6v5" />
          <!-- Water Wake -->
          <path d="M2 28c3-1 6-1 9 0s6 1 9 0 6-1 9 0" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Frothy White/Blue Wake Spray -->
        <path d="M2 28c3-1.5 6-1.5 9 0s6 1.5 9 0 6-1.5 9 0" stroke="${c.accent}" stroke-width="2" fill="none" />
        <!-- White Upper Deck & Tinted Cockpit Screen -->
        <path d="M11 17.5l4.5-5.5h7.5v5.5H11z" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <polygon points="12.5,17 16,13 20,13 18,17" fill="${c.accent}" />
        <!-- Streamlined Blue V-Hull -->
        <path d="M4 21.5l3.5 4h15.5l5.5-8.5H11.5l-7.5 4.5z" fill="${c.primary}" stroke="#1E3A8A" stroke-width="1.2" />
      </g>`;
    },
  },
];