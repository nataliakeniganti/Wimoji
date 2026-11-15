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
  const c = resolveColors(opts as any, { fillPrimary: '#FB8C00', fillSecondary: '#FFCA28', stroke: '#1E293B' });
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

export const transportSignsIcons: WimojiIconDef[] = [
  {
    id: 'prohibited',
    char: '🚫',
    name: 'Prohibited',
    unicodeHex: 'U+1F6AB',
    category: 'warnings',
    tags: ['prohibited', 'no entry', 'forbidden', 'banned', 'not allowed', 'stop', 'restricted', 'slash', '🚫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth * 1.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="11" fill="none" stroke="${c.primary}" stroke-width="3" />
        <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" stroke="${c.primary}" stroke-width="3" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'cigarette',
    char: '🚬',
    name: 'Cigarette',
    unicodeHex: 'U+1F6AC',
    category: 'objects-places',
    tags: ['cigarette', 'smoke', 'smoking', 'tobacco', 'nicotine', 'ash', 'cigar', '🚬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#D97706', fillAccent: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="17" width="22" height="6" rx="1" />
          <line x1="10" y1="17" x2="10" y2="23" />
          <!-- Smoke Curls -->
          <path d="M26 17c1-3-1-6 2-9s-1-4 1-5" />
          <path d="M28 20c2-2 1-5 3-7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Rising Smoke Trails -->
        <path d="M26 17c1-3-1-6 2-9s-1-4 1-5" stroke="#94A3B8" stroke-width="1.8" fill="none" />
        <path d="M28 20c2-2 1-5 3-7" stroke="#CBD5E1" stroke-width="1.5" fill="none" />
        <!-- Orange Amber Filter Tip -->
        <rect x="4" y="17" width="6" height="6" rx="1" fill="${c.secondary}" stroke="#B45309" stroke-width="0.8" />
        <!-- White Paper Roll Body -->
        <rect x="10" y="17" width="14" height="6" fill="${c.primary}" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Burning Red Ember & Grey Ash Tip -->
        <rect x="24" y="17" width="1.5" height="6" fill="${c.accent}" />
        <rect x="25.5" y="17" width="1.5" height="6" rx="0.5" fill="#64748B" />
      </g>`;
    },
  },
  {
    id: 'no-smoking',
    char: '🚭',
    name: 'No Smoking',
    unicodeHex: 'U+1F6AD',
    category: 'warnings',
    tags: ['no smoking', 'smoke-free', 'cigarette', 'banned', 'prohibited', 'health', 'sign', '🚭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#64748B', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cigarette -->
          <rect x="7" y="14" width="18" height="4" rx="0.5" />
          <line x1="11" y1="14" x2="11" y2="18" />
          <!-- Prohibition Circle and Slash -->
          <circle cx="16" cy="16" r="11" />
          <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Cigarette Silhouette Behind -->
        <rect x="7" y="14" width="4.5" height="4" rx="0.5" fill="#D97706" />
        <rect x="11.5" y="14" width="11" height="4" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="0.6" />
        <rect x="22.5" y="14" width="2" height="4" fill="#DC2626" />
        <!-- Red Prohibition Ring and Slash -->
        <circle cx="16" cy="16" r="11" fill="none" stroke="${c.primary}" stroke-width="2.8" />
        <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" stroke="${c.primary}" stroke-width="2.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'litter-in-bin-sign',
    char: '🚮',
    name: 'Litter in Bin Sign',
    unicodeHex: 'U+1F6AE',
    category: 'warnings',
    tags: ['litter in bin', 'trash', 'recycle', 'garbage', 'waste', 'clean', 'tidy', 'public', '🚮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <!-- Person Disposing Trash -->
          <circle cx="11" cy="9" r="2" />
          <path d="M11 11v6l3 6" />
          <path d="M11 17l-3 6" />
          <path d="M11 13l4-1 3 3" />
          <!-- Trash Bits -->
          <circle cx="19" cy="17" r="0.8" />
          <!-- Bin Receptacle -->
          <path d="M17 19h7l-1 7h-5z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Blue Square Badge -->
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- White Stick Figure Person & Bin -->
        <g stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="11" cy="9" r="2" fill="${c.secondary}" stroke="none" />
          <path d="M11 11.5v5.5l3 6" />
          <path d="M11 17l-3 6" />
          <path d="M11 13.5l4-1 3.5 3" />
          <!-- Trash Can Bin -->
          <path d="M17.5 19h6l-1 7.5h-4z" fill="${c.secondary}" stroke="none" />
          <circle cx="19" cy="17" r="1" fill="${c.secondary}" stroke="none" />
        </g>
      </g>`;
    },
  },
  {
    id: 'do-not-litter',
    char: '🚯',
    name: 'Do Not Litter',
    unicodeHex: 'U+1F6AF',
    category: 'warnings',
    tags: ['do not litter', 'no littering', 'trash', 'waste', 'prohibited', 'clean', 'keep clean', '🚯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Person & Trash -->
          <circle cx="11" cy="9" r="1.8" />
          <path d="M11 11v5l2 5" />
          <path d="M11 16l-2 5" />
          <path d="M11 13l4-1 3 3" />
          <circle cx="18" cy="18" r="0.8" />
          <circle cx="20" cy="20" r="0.8" />
          <!-- Prohibition -->
          <circle cx="16" cy="16" r="11" />
          <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Person Pictogram Dropping Trash -->
        <g stroke="#334155" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="11" cy="9" r="1.8" fill="#334155" stroke="none" />
          <path d="M11 11v5l2 5" />
          <path d="M11 16l-2 5" />
          <path d="M11 13l4-1 3 3" />
          <circle cx="18.5" cy="17.5" r="0.9" fill="#334155" stroke="none" />
          <circle cx="21" cy="19.5" r="0.9" fill="#334155" stroke="none" />
        </g>
        <!-- Red Prohibition Ring and Slash -->
        <circle cx="16" cy="16" r="11" fill="none" stroke="${c.primary}" stroke-width="2.8" />
        <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" stroke="${c.primary}" stroke-width="2.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'potable-water',
    char: '🚰',
    name: 'Potable Water',
    unicodeHex: 'U+1F6B0',
    category: 'warnings',
    tags: ['potable water', 'drinking water', 'tap', 'faucet', 'fresh', 'glass', 'drink', '🚰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', fillAccent: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const drop = 'M19 16.4c0 0-1.3 1.8-1.3 2.7a1.3 1.3 0 0 0 2.6 0c0-.9-1.3-2.7-1.3-2.7z';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <!-- Faucet -->
          <path d="M8 11h8a3 3 0 0 1 3 3v1.5" />
          <path d="M10 7.5h5M12.5 7.5V11" />
          <!-- Droplet -->
          <path d="${drop}" />
          <!-- Drinking glass -->
          <polygon points="15,22 23,22 21.8,26.8 16.2,26.8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- Faucet -->
        <path d="M8 11h8a3 3 0 0 1 3 3v1.5M10 7.5h5M12.5 7.5V11" stroke="${c.secondary}" stroke-width="2" fill="none" />
        <!-- Droplet -->
        <path d="${drop}" fill="${c.accent}" />
        <!-- Drinking glass with water -->
        <polygon points="16,24.2 22,24.2 21.5,26.2 16.5,26.2" fill="${c.accent}" stroke="none" />
        <polygon points="15,22 23,22 21.8,26.8 16.2,26.8" fill="none" stroke="${c.secondary}" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'non-potable-water',
    char: '🚱',
    name: 'Non-Potable Water',
    unicodeHex: 'U+1F6B1',
    category: 'warnings',
    tags: ['non potable water', 'do not drink', 'unsafe water', 'tap', 'faucet', 'prohibited', 'sign', '🚱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const drop = 'M19 16.4c0 0-1.3 1.8-1.3 2.7a1.3 1.3 0 0 0 2.6 0c0-.9-1.3-2.7-1.3-2.7z';
      const fit = 'translate(16 16) scale(0.8) translate(-15.75 -17.15)';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.3" />
          <g transform="${fit}">
            <path d="M8 11h8a3 3 0 0 1 3 3v1.5M10 7.5h5M12.5 7.5V11" />
            <path d="${drop}" />
            <polygon points="15,22 23,22 21.8,26.8 16.2,26.8" />
          </g>
          <line x1="7.3" y1="7.3" x2="24.7" y2="24.7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Faucet and glass, scaled to sit inside the ring -->
        <g transform="${fit}" fill="none" stroke="#475569" stroke-width="2">
          <path d="M8 11h8a3 3 0 0 1 3 3v1.5M10 7.5h5M12.5 7.5V11" />
          <path d="${drop}" fill="#38BDF8" stroke="none" />
          <polygon points="15,22 23,22 21.8,26.8 16.2,26.8" stroke-width="1.8" />
        </g>
        <!-- Red prohibition ring and slash -->
        <circle cx="16" cy="16" r="12.3" fill="none" stroke="${c.primary}" stroke-width="2.6" />
        <line x1="7.3" y1="7.3" x2="24.7" y2="24.7" stroke="${c.primary}" stroke-width="2.6" />
      </g>`;
    },
  },
  {
    id: 'no-bicycles',
    char: '🚳',
    name: 'No Bicycles',
    unicodeHex: 'U+1F6B3',
    category: 'warnings',
    tags: ['no bicycles', 'no bikes', 'banned', 'prohibited', 'cycling', 'sign', 'traffic', '🚳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Bike -->
          <circle cx="9" cy="19" r="3.5" />
          <circle cx="23" cy="19" r="3.5" />
          <polyline points="9,19 14,19 18,12 12,12 9,19" />
          <line x1="18" y1="12" x2="23" y2="19" />
          <!-- Prohibition -->
          <circle cx="16" cy="16" r="11" />
          <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bicycle Silhouette Behind -->
        <g stroke="#334155" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="9" cy="19" r="3.5" />
          <circle cx="23" cy="19" r="3.5" />
          <polyline points="9,19 14,19 18,13 12,13 9,19" />
          <line x1="18" y1="13" x2="23" y2="19" />
          <line x1="18" y1="13" x2="19" y2="10" />
        </g>
        <!-- Red Prohibition Ring and Slash -->
        <circle cx="16" cy="16" r="11" fill="none" stroke="${c.primary}" stroke-width="2.8" />
        <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" stroke="${c.primary}" stroke-width="2.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'no-pedestrians',
    char: '🚷',
    name: 'No Pedestrians',
    unicodeHex: 'U+1F6B7',
    category: 'warnings',
    tags: ['no pedestrians', 'no walking', 'prohibited', 'restricted', 'pedestrian', 'danger', 'sign', '🚷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="9" r="2" />
          <path d="M16 11v5l3 5" />
          <path d="M16 16l-3 5" />
          <path d="M16 13l3 2" />
          <path d="M16 13l-3 2" />
          <circle cx="16" cy="16" r="11" />
          <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Walking Figure Behind -->
        <g stroke="#334155" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="9" r="2" fill="#334155" stroke="none" />
          <path d="M16 11v5l3 5" />
          <path d="M16 16l-3 5" />
          <path d="M16 13l3 2" />
          <path d="M16 13l-3 2" />
        </g>
        <!-- Red Prohibition Ring and Slash -->
        <circle cx="16" cy="16" r="11" fill="none" stroke="${c.primary}" stroke-width="2.8" />
        <line x1="8.2" y1="8.2" x2="23.8" y2="23.8" stroke="${c.primary}" stroke-width="2.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'children-crossing',
    char: '🚸',
    name: 'Children Crossing',
    unicodeHex: 'U+1F6B8',
    category: 'warnings',
    tags: ['children crossing', 'school zone', 'caution', 'warning', 'pedestrian', 'kids', 'road sign', '🚸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#1E293B', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Diamond Caution Sign -->
          <polygon points="16,2 30,16 16,30 2,16" />
          <!-- Adult Stick Figure -->
          <circle cx="13" cy="10" r="1.5" />
          <path d="M13 12v5l2 5" />
          <path d="M13 17l-2 5" />
          <path d="M13 14l4 2" />
          <!-- Child Stick Figure -->
          <circle cx="20" cy="14" r="1.2" />
          <path d="M20 15.5v3.5l1.5 3" />
          <path d="M20 19l-1.5 3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Amber / Yellow Warning Diamond -->
        <polygon points="16,2 30,16 16,30 2,16" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Black Silhouettes of Adult & Child Walking Hand-in-Hand -->
        <circle cx="13" cy="10" r="1.8" fill="${c.secondary}" />
        <path d="M13 12v5l2 5" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
        <path d="M13 17l-2 5" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
        <path d="M13 14.5l4 2.5" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
        <circle cx="20" cy="14" r="1.3" fill="${c.secondary}" />
        <path d="M20 15.5v3.5l1.5 3" stroke="${c.secondary}" stroke-width="1.5" fill="none" />
        <path d="M20 19l-1.5 3" stroke="${c.secondary}" stroke-width="1.5" fill="none" />
      </g>`;
    },
  },
  {
    id: 'mens-room',
    char: '🚹',
    name: "Men's Room",
    unicodeHex: 'U+1F6B9',
    category: 'warnings',
    tags: ['mens room', 'male', 'man', 'restroom', 'bathroom', 'toilet', 'sign', 'blue', '🚹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <circle cx="16" cy="9" r="2.2" />
          <path d="M12 13h8v6h-2v6h-4v-6h-2z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Blue Square Badge -->
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- White Male Stick Figure Silhouette -->
        <circle cx="16" cy="8.5" r="2.5" fill="${c.secondary}" />
        <path d="M12.5 12.5h7c0.8 0 1.5 0.7 1.5 1.5v4.5c0 0.6-0.4 1-1 1h-1v5.5c0 0.6-0.4 1-1 1h-2c-0.6 0-1-0.4-1-1V19.5h-1c-0.6 0-1-0.4-1-1V14c0-0.8 0.7-1.5 1.5-1.5z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'womens-room',
    char: '🚺',
    name: "Women's Room",
    unicodeHex: 'U+1F6BA',
    category: 'warnings',
    tags: ['womens room', 'female', 'woman', 'restroom', 'bathroom', 'toilet', 'sign', 'dress', '🚺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DB2777', fillSecondary: '#F8FAFC', stroke: '#9D174D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <circle cx="16" cy="9" r="2.2" />
          <polygon points="14,13 18,13 21,21 11,21" />
          <line x1="14" y1="21" x2="14" y2="26" />
          <line x1="18" y1="21" x2="18" y2="26" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Pink/Purple Square Badge -->
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- White Female Dress Silhouette -->
        <circle cx="16" cy="8.5" r="2.5" fill="${c.secondary}" />
        <path d="M14 12.5h4c0.8 0 1.4 0.5 1.6 1.2l2.2 7c0.2 0.8-0.4 1.5-1.2 1.5H11.4c-0.8 0-1.4-0.7-1.2-1.5l2.2-7c0.2-0.7 0.8-1.2 1.6-1.2z" fill="${c.secondary}" />
        <rect x="13.2" y="22.2" width="2" height="4" rx="0.5" fill="${c.secondary}" />
        <rect x="16.8" y="22.2" width="2" height="4" rx="0.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'restroom',
    char: '🚻',
    name: 'Restroom',
    unicodeHex: 'U+1F6BB',
    category: 'warnings',
    tags: ['restroom', 'wc', 'toilet', 'washroom', 'unisex', 'public', 'bathroom', 'sign', '🚻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <!-- Male Figure -->
          <circle cx="10" cy="8" r="1.8" />
          <path d="M7 12h6v5h-1.5v6h-3v-6H7z" />
          <!-- Divider -->
          <line x1="16" y1="6" x2="16" y2="26" />
          <!-- Female Figure -->
          <circle cx="22" cy="8" r="1.8" />
          <polygon points="20.5,12 23.5,12 25.5,19 18.5,19" />
          <line x1="20.5" y1="19" x2="20.5" y2="23" />
          <line x1="23.5" y1="19" x2="23.5" y2="23" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- Divider Line -->
        <line x1="16" y1="6" x2="16" y2="26" stroke="${c.secondary}" stroke-width="1" stroke-linecap="round" opacity="0.6" />
        <!-- Male Figure on Left -->
        <circle cx="10" cy="8.5" r="1.8" fill="${c.secondary}" />
        <path d="M7.5 12h5c0.5 0 1 0.5 1 1v4h-1v5.5h-1.8V17h-1.4v5.5H7.5V13c0-0.5 0.5-1 1-1z" fill="${c.secondary}" />
        <!-- Female Figure on Right -->
        <circle cx="22" cy="8.5" r="1.8" fill="${c.secondary}" />
        <polygon points="20.5,12 23.5,12 25.5,19 18.5,19" fill="${c.secondary}" />
        <rect x="19.8" y="19" width="1.5" height="3.5" rx="0.3" fill="${c.secondary}" />
        <rect x="22.7" y="19" width="1.5" height="3.5" rx="0.3" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'baby-symbol',
    char: '🚼',
    name: 'Baby Symbol',
    unicodeHex: 'U+1F6BC',
    category: 'warnings',
    tags: ['baby symbol', 'infant', 'child', 'nursery', 'changing room', 'stroller', 'diaper', 'sign', '🚼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <circle cx="12" cy="11" r="2.5" />
          <path d="M14 13l4 3 4-2" />
          <path d="M18 16v5l-3 3" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- Crawling Infant Silhouette -->
        <g stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="11.5" cy="11" r="2.8" fill="${c.secondary}" stroke="none" />
          <path d="M13.5 13.5l4 3.5 4-2" />
          <path d="M17.5 17v4.5l-3.5 2.5" />
          <path d="M14 15l2 3" />
        </g>
      </g>`;
    },
  },
  {
    id: 'toilet',
    char: '🚽',
    name: 'Toilet',
    unicodeHex: 'U+1F6BD',
    category: 'objects-places',
    tags: ['toilet', 'commode', 'restroom', 'bathroom', 'flush', 'plumbing', 'porcelain', 'wc', '🚽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#64748B', fillAccent: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Water Tank -->
          <rect x="6" y="5" width="7" height="11" rx="1.5" />
          <circle cx="9.5" cy="7.5" r="0.8" />
          <!-- Seat Bowl -->
          <path d="M13 14h11c1.5 0 3 1.5 3 4s-3 6-7 6h-7" />
          <!-- Pedestal Base -->
          <path d="M13 24v4h7v-4" />
          <line x1="11" y1="28" x2="22" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ceramic Water Cistern Tank -->
        <rect x="6" y="5" width="7.5" height="11" rx="1.8" fill="${c.primary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Chrome Flush Push Button -->
        <circle cx="9.7" cy="7.5" r="1.2" fill="#E2E8F0" stroke="#64748B" stroke-width="0.8" />
        <!-- Toilet Base Pedestal -->
        <path d="M13 23v4.5h6.5V23" fill="${c.primary}" stroke="#94A3B8" stroke-width="1" />
        <line x1="11" y1="27.5" x2="21.5" y2="27.5" stroke="#64748B" stroke-width="1.5" />
        <!-- Toilet Seat & Oval Bowl -->
        <path d="M13 14h10.5c2 0 3.5 1.8 3.5 4.5s-3 5.5-7 5.5h-7V14z" fill="${c.primary}" stroke="#94A3B8" stroke-width="1.2" />
        <ellipse cx="19" cy="16.5" rx="5.5" ry="2" fill="${c.accent}" opacity="0.7" />
      </g>`;
    },
  },
  {
    id: 'water-closet',
    char: '🚾',
    name: 'Water Closet',
    unicodeHex: 'U+1F6BE',
    category: 'warnings',
    tags: ['water closet', 'wc', 'toilet', 'restroom', 'bathroom', 'sign', 'blue', 'badge', '🚾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="20.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="11.5">WC</text>
      </g>`;
    },
  },
  {
    id: 'shower',
    char: '🚿',
    name: 'Shower',
    unicodeHex: 'U+1F6BF',
    category: 'objects-places',
    tags: ['shower', 'bath', 'water', 'wash', 'clean', 'hygiene', 'bathroom', 'spray', 'droplets', '🚿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const pipe = 'M6 28V8a4 4 0 0 1 4-4h10v3.5';
      const head = 'M14 7.5h12l-2.2 3.5h-7.6z';
      const drops = 'M15 15.5l-.8 3M20 15.5v3M25 15.5l.8 3M17.5 21.5l-.8 3M22.5 21.5l.8 3M15 27l-.5 1.5M20 27v1.5M25 27l.5 1.5';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${pipe}" />
          <path d="${head}" />
          <path d="${drops}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wall pipe and arm -->
        <path d="${pipe}" stroke="${c.primary}" stroke-width="2.5" fill="none" />
        <!-- Shower head -->
        <path d="${head}" fill="${c.primary}" stroke="#334155" stroke-width="1" />
        <!-- Spray -->
        <path d="${drops}" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
      </g>`;
    },
  },
  {
    id: 'person-taking-bath',
    char: '🛀',
    name: 'Person Taking Bath',
    unicodeHex: 'U+1F6C0',
    category: 'objects-places',
    tags: ['person taking bath', 'bath', 'bather', 'tub', 'relax', 'wash', 'clean', 'hotel', 'spa', '🛀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', fillAccent: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      // Bather (head, shoulders, raised knee), clipped at the tub rim so the tub itself stays exactly as before
      const layers: PersonLayer[] = [
        { d: 'M6.2 18 C6.4 13.8 8.2 12.8 11 12.8 C13.8 12.8 15.6 13.8 15.8 18 Z', kind: 'skin' },
        tube('skin', [[14.6, 14.4], [17.8, 16.6]], 2.4),
        { d: 'M18.2 18 C18.6 13.4 24.6 13.4 25 18 Z', kind: 'skin' },
        ...headOf(11, 9, 3.4, 3.7),
      ];
      const person = renderPerson(opts, layers, (ink) => faceAt(ink, 11, 9.2, 0.6, 0.9), 'bath')
        .replace(/^.*?<g stroke-linecap/s, '<g stroke-linecap');
      const clip = '<clipPath id="bath-clip"><rect x="0" y="0" width="32" height="17" /></clipPath>';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Shower Pipe -->
          <path d="M26 17V6c0-1.5-1-2.5-2.5-2.5h-4" />
          ${clip}<g clip-path="url(#bath-clip)">${person}</g>
          <!-- Bathtub Hull -->
          <path d="M4 17h24v4c0 4-3 7-7 7H11c-4 0-7-3-7-7v-4z" />
          <!-- Bubbles -->
          <circle cx="16" cy="14" r="1" />
          <circle cx="19" cy="13" r="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Shower Fixture Tube on Right -->
        <path d="M26 18V6c0-1.8-1.5-3-3.2-3h-4" stroke="#94A3B8" stroke-width="2" fill="none" />
        <polygon points="18.8,3 17,5 19.5,7 21,5" fill="#64748B" />
        ${clip}<g clip-path="url(#bath-clip)">${person}</g>
        <!-- Bathtub Hull -->
        <path d="M4 17h24v4c0 4.5-3.5 7.5-7.5 7.5h-9C7.5 28.5 4 25 4 21v-4z" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Suds & Water Bubbles -->
        <ellipse cx="16" cy="17" rx="9" ry="2" fill="${c.accent}" opacity="0.8" />
        <circle cx="16" cy="14" r="1.3" fill="#BAE6FD" />
        <circle cx="19.5" cy="13.5" r="1.8" fill="#BAE6FD" />
      </g>`;
    },
  },
  {
    id: 'bathtub',
    char: '🛁',
    name: 'Bathtub',
    unicodeHex: 'U+1F6C1',
    category: 'objects-places',
    tags: ['bathtub', 'tub', 'clawfoot', 'bathroom', 'wash', 'clean', 'hygiene', 'hotel', '🛁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#64748B', fillAccent: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Bathtub Basin -->
          <path d="M3 15h26v4c0 5-4 8-9 8H12c-5 0-9-3-9-8v-4z" />
          <!-- Claw Feet -->
          <line x1="8" y1="27" x2="6" y2="30" />
          <line x1="24" y1="27" x2="26" y2="30" />
          <!-- Mixer Tap & Shower Head -->
          <path d="M6 15V8c0-1.5 1.5-2.5 3-2.5h2" />
          <line x1="11" y1="5.5" x2="13" y2="8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Chrome Shower Head & Mixer Faucet -->
        <path d="M6 15V7.5C6 5.5 7.5 4 9.5 4h2.5" stroke="${c.secondary}" stroke-width="2" fill="none" />
        <polygon points="12,4 14,7 16,5.5 14,2.5" fill="#475569" />
        <!-- Clawfoot Legs -->
        <path d="M8 26.5l-2.5 3.5h2" stroke="#475569" stroke-width="1.8" fill="none" />
        <path d="M24 26.5l2.5 3.5h-2" stroke="#475569" stroke-width="1.8" fill="none" />
        <!-- Bathtub Porcelain Basin -->
        <path d="M3 15h26v4c0 5-4 8.5-9 8.5H12c-5 0-9-3.5-9-8.5v-4z" fill="${c.primary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Water Fill Rim -->
        <ellipse cx="16" cy="16.5" rx="10.5" ry="2" fill="${c.accent}" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'passport-control',
    char: '🛂',
    name: 'Passport Control',
    unicodeHex: 'U+1F6C2',
    category: 'warnings',
    tags: ['passport control', 'border officer', 'stop', 'passport', 'immigration', 'border', 'travel', 'airport', '🛂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const glyph = 'M16.8 25C16.8 24.9 18.6 22.9 20.7 20.4L24.5 16L24.5 20.4L24.5 24.7L24.4 24.9L24.2 25.1L20.5 25.1C17.4 25.1 16.8 25.1 16.8 25ZM15.4 21.5L15.4 18.6L11.9 18.5L8.4 18.5L8.1 18.3C7.3 17.7 7.4 16.7 8.2 16.1L8.4 16L15.5 16L22.6 16L22.4 16.2C22.3 16.3 20.7 18.1 18.9 20.3C17.1 22.4 15.6 24.2 15.5 24.3C15.4 24.4 15.4 24 15.4 21.5ZM19 15.1C17.5 14.6 16.5 13.1 16.7 11.7L16.8 11.3L20 11.3L23.2 11.3L23.2 11.7C23.5 13.9 21.1 15.9 19 15.1ZM7.7 14.4L7.6 14.2L7.6 11.3L7.6 8.4L7.7 8.3C8 8 12.3 8 12.6 8.3C12.7 8.5 12.7 8.5 12.7 11.4L12.7 14.2L12.5 14.4L12.4 14.6L10.1 14.6L7.9 14.6L7.7 14.4ZM10.8 11.8C11.3 11.6 11.5 10.9 11.4 10.4C11.1 9.4 9.9 9.1 9.2 9.8C8.2 10.8 9.5 12.5 10.8 11.8ZM14.2 10.6C13.8 10.3 14.2 10 15.5 9.4L16.7 8.9L16.7 8.1C16.7 6.9 16.8 6.8 18.8 7.3C20.9 7.8 22.5 8.1 23.7 8.1C24.5 8.1 24.5 8.2 24.5 9.4C24.5 10.3 24.5 10.3 24.3 10.5L24.1 10.7L19.2 10.7C15.5 10.7 14.2 10.7 14.2 10.6Z';
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="6" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" /><path d="${glyph}" fill="${c.stroke}" fill-rule="evenodd" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" /><path d="${glyph}" fill="${c.secondary}" fill-rule="evenodd" />`;
    },
  },
  {
    id: 'customs',
    char: '🛃',
    name: 'Customs',
    unicodeHex: 'U+1F6C3',
    category: 'warnings',
    tags: ['customs', 'border officer', 'open suitcase', 'border', 'inspection', 'airport', 'luggage', 'baggage', 'travel', '🛃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const glyph = 'M47.00 230.88C38.84 227.63 36.00 221.74 36.00 208.05L36.00 197.00L27.75 196.94C11.27 196.82 6.28 194.87 2.25 186.98C-1.17 180.29 -1.28 106.27 2.12 99.25C5.90 91.44 10.24 89.50 23.92 89.50L35.50 89.50L35.76 143.25L36.02 197.00L89.61 197.00L143.21 197.00L142.85 208.75C142.43 222.62 140.75 226.49 133.65 229.93C129.53 231.92 127.85 232.00 89.43 231.94C65.48 231.90 48.50 231.48 47.00 230.88ZM161.00 214.50L161.00 197.00L205.50 197.00L250.00 197.00L250.00 214.50L250.00 232.00L205.50 232.00L161.00 232.00L161.00 214.50ZM172.00 178.41C172.00 178.09 187.99 157.84 207.54 133.41C242.07 90.27 243.18 89.00 246.54 89.00L250.00 89.00L250.00 134.00L250.00 179.00L211.00 179.00C189.55 179.00 172.00 178.74 172.00 178.41ZM97.30 173.04C92.62 170.19 90.61 166.54 90.69 161.05C90.79 154.44 91.02 154.10 115.35 124.51C136.59 98.68 141.36 93.93 149.00 90.96C153.08 89.37 221.47 88.21 220.86 89.74C220.66 90.23 207.22 106.98 191.00 126.98L161.50 163.34L161.00 137.10L160.50 110.85L139.50 137.67C127.95 152.42 116.96 166.20 115.08 168.31C108.95 175.15 103.25 176.67 97.30 173.04ZM194.51 68.98C184.00 63.60 178.60 54.56 179.17 43.30L179.54 36.00L170.27 36.00C165.17 36.00 161.00 35.78 161.00 35.51C161.00 35.24 163.74 31.17 167.08 26.47L173.16 17.92L168.33 10.94C165.67 7.10 162.88 3.07 162.13 1.98C160.77 0.02 161.09 -0.00 196.38 -0.00L232.00 0.00L231.99 24.25C231.99 50.75 231.53 53.84 226.68 60.20C219.20 70.00 204.39 74.04 194.51 68.98Z';
      const place = 'translate(7 7.65) scale(0.0723)';
      if (opts.style === 'outline') {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" />
          <path transform="${place}" d="${glyph}" fill="${c.stroke}" fill-rule="evenodd" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- White customs symbol: officer with cap at a counter -->
        <path transform="${place}" d="${glyph}" fill="${c.secondary}" fill-rule="evenodd" />
      </g>`;
    },
  },
  {
    id: 'baggage-claim',
    char: '🛄',
    name: 'Baggage Claim',
    unicodeHex: 'U+1F6C4',
    category: 'warnings',
    tags: ['baggage claim', 'luggage', 'suitcase', 'airport', 'carousel', 'arrival', 'terminal', 'travel', '🛄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <!-- Suitcase -->
          <rect x="8" y="11" width="16" height="12" rx="2" />
          <path d="M13 11V8h6v3" />
          <line x1="8" y1="17" x2="24" y2="17" />
          <!-- Conveyor Rollers -->
          <circle cx="11" cy="25.5" r="1" />
          <circle cx="16" cy="25.5" r="1" />
          <circle cx="21" cy="25.5" r="1" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- Suitcase Handle -->
        <path d="M13 11V8c0-0.6 0.5-1 1-1h4c0.6 0 1 0.4 1 1v3" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
        <!-- Suitcase Body -->
        <rect x="8" y="11" width="16" height="11.5" rx="2.5" fill="${c.secondary}" />
        <line x1="8" y1="16.5" x2="24" y2="16.5" stroke="#94A3B8" stroke-width="1" />
        <!-- Conveyor Carousel Rollers -->
        <circle cx="10.5" cy="25" r="1.3" fill="${c.secondary}" />
        <circle cx="16" cy="25" r="1.3" fill="${c.secondary}" />
        <circle cx="21.5" cy="25" r="1.3" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'left-luggage',
    char: '🛅',
    name: 'Left Luggage',
    unicodeHex: 'U+1F6C5',
    category: 'warnings',
    tags: ['left luggage', 'baggage storage', 'locker', 'key', 'storage', 'suitcase', 'terminal', 'station', '🛅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', fillAccent: '#FBBF24', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <!-- Suitcase -->
          <rect x="7" y="14" width="13" height="10" rx="1.5" />
          <path d="M11 14v-2h5v2" />
          <!-- Key Symbol -->
          <circle cx="22" cy="11" r="2.5" />
          <line x1="22" y1="13.5" x2="22" y2="21" />
          <line x1="22" y1="17" x2="24" y2="17" />
          <line x1="22" y1="20" x2="24" y2="20" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- Suitcase on Left -->
        <path d="M10.5 14v-2c0-0.5 0.5-1 1-1h4c0.5 0 1 0.5 1 1v2" stroke="${c.secondary}" stroke-width="1.5" fill="none" />
        <rect x="6.5" y="14" width="13.5" height="10.5" rx="2" fill="${c.secondary}" />
        <line x1="6.5" y1="19" x2="20" y2="19" stroke="#94A3B8" stroke-width="1" />
        <!-- Locker Storage Key on Right -->
        <g stroke="${c.accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="22" cy="11" r="2.5" fill="${c.accent}" stroke="none" />
          <circle cx="22" cy="11" r="1.2" fill="${c.primary}" stroke="none" />
          <line x1="22" y1="13.5" x2="22" y2="21.5" />
          <line x1="22" y1="17.5" x2="24.5" y2="17.5" />
          <line x1="22" y1="20.5" x2="24.5" y2="20.5" />
        </g>
      </g>`;
    },
  },
  {
    id: 'stop-sign',
    char: '🛑',
    name: 'Stop Sign',
    unicodeHex: 'U+1F6D1',
    category: 'warnings',
    tags: ['stop sign', 'stop', 'octagonal', 'red sign', 'halt', 'traffic', 'danger', 'road sign', '🛑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#F8FAFC', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="10,3 22,3 29,10 29,22 22,29 10,29 3,22 3,10" />
          <!-- Inner Border -->
          <polygon points="11,5 21,5 27,11 27,21 21,27 11,27 5,21 5,11" />
          <!-- Text STOP -->
          <path d="M8 15h3v2H8v2h3" />
          <line x1="13" y1="15" x2="17" y2="15" />
          <line x1="15" y1="15" x2="15" y2="19" />
          <rect x="18" y="15" width="3" height="4" rx="0.5" />
          <path d="M22 15h3v2h-3v2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Red Octagon -->
        <polygon points="10,3 22,3 29,10 29,22 22,29 10,29 3,22 3,10" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- White Inner Octagonal Border -->
        <polygon points="10.8,5.2 21.2,5.2 27,11 27,21 21.2,26.8 10.8,26.8 5,21 5,11" fill="none" stroke="${c.secondary}" stroke-width="1.2" />
        <!-- STOP Lettering -->
        <g stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- S -->
          <path d="M10.5 13.5h-2c-0.6 0-1 0.4-1 1v0.5c0 0.5 0.4 1 1 1h1c0.6 0 1 0.5 1 1V19c0 0.6-0.4 1-1 1h-2" />
          <!-- T -->
          <line x1="12" y1="13.5" x2="16" y2="13.5" />
          <line x1="14" y1="13.5" x2="14" y2="20" />
          <!-- O -->
          <rect x="17.5" y="13.5" width="3" height="6.5" rx="1" />
          <!-- P -->
          <path d="M22 20v-6.5h2.5c0.8 0 1.5 0.7 1.5 1.5s-0.7 1.5-1.5 1.5H22" />
        </g>
      </g>`;
    },
  },
  {
    id: 'shopping-cart',
    char: '🛒',
    name: 'Shopping Cart',
    unicodeHex: 'U+1F6D2',
    category: 'objects-places',
    tags: ['shopping cart', 'trolley', 'cart', 'supermarket', 'store', 'buy', 'purchase', 'ecommerce', '🛒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="10" cy="26" r="2" />
          <circle cx="23" cy="26" r="2" />
          <path d="M3 6h4l3 14h14l3-10H8" />
          <line x1="12" y1="14" x2="22" y2="14" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wheels with Hubcaps -->
        <circle cx="10" cy="25.5" r="2.2" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <circle cx="23" cy="25.5" r="2.2" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Metal Chassis & Basket Frame -->
        <g stroke="${c.primary}" stroke-width="2.2" fill="none">
          <path d="M3 6h4.5l3.5 14h13.5l3-10.5H9" />
          <!-- Inner Basket Wire Grid -->
          <line x1="11" y1="14" x2="24" y2="14" stroke-width="1.4" />
          <line x1="15" y1="10" x2="16.5" y2="19" stroke-width="1.4" />
          <line x1="20" y1="10" x2="21" y2="19" stroke-width="1.4" />
        </g>
      </g>`;
    },
  },
  {
    id: 'motorway',
    char: '🛣',
    name: 'Motorway',
    unicodeHex: 'U+1F6E3',
    category: 'objects-places',
    tags: ['motorway', 'highway', 'freeway', 'road', 'interstate', 'drive', 'asphalt', 'navigation', '🛣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#10B981', fillAccent: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Road Perspective -->
          <polygon points="13,8 19,8 28,29 4,29" />
          <!-- Dashed Center Line -->
          <line x1="16" y1="9" x2="16" y2="13" />
          <line x1="16" y1="16" x2="16" y2="21" />
          <line x1="16" y1="24" x2="16" y2="29" />
          <!-- Overhead Gantry Sign -->
          <rect x="7" y="3" width="18" height="5" rx="0.5" />
          <line x1="9" y1="8" x2="9" y2="11" />
          <line x1="23" y1="8" x2="23" y2="11" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Green Verge Grass Background -->
        <rect x="2" y="7" width="28" height="23" fill="#D1FAE5" />
        <!-- Asphalt Road Surface in Perspective -->
        <polygon points="12,8 20,8 29,29 3,29" fill="${c.primary}" stroke="#1E293B" stroke-width="1" />
        <!-- Dashed Yellow/White Center Divider -->
        <g stroke="${c.accent}" stroke-width="1.8" stroke-linecap="round">
          <line x1="16" y1="9" x2="16" y2="12" />
          <line x1="16" y1="15" x2="16" y2="20" stroke-width="2.2" />
          <line x1="16" y1="23.5" x2="16" y2="29" stroke-width="2.6" />
        </g>
        <!-- Overhead Green Highway Sign Gantry -->
        <line x1="8" y1="7" x2="8" y2="11.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
        <line x1="24" y1="7" x2="24" y2="11.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
        <rect x="6.5" y="3" width="19" height="5.5" rx="1" fill="${c.secondary}" stroke="#065F46" stroke-width="0.8" />
        <rect x="8" y="4.5" width="16" height="2.5" fill="#34D399" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'railway-track',
    char: '🛤',
    name: 'Railway Track',
    unicodeHex: 'U+1F6E4',
    category: 'objects-places',
    tags: ['railway track', 'train tracks', 'rails', 'sleepers', 'ties', 'railroad', 'transit', '🛤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#78350F', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Steel Rails -->
          <line x1="12" y1="4" x2="4" y2="28" />
          <line x1="20" y1="4" x2="28" y2="28" />
          <!-- Cross Ties (Sleepers) -->
          <line x1="11" y1="6" x2="21" y2="6" />
          <line x1="10" y1="11" x2="22" y2="11" />
          <line x1="9" y1="16" x2="23" y2="16" />
          <line x1="7" y1="21" x2="25" y2="21" />
          <line x1="5" y1="26" x2="27" y2="26" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ballast Ground Fill -->
        <polygon points="11,3 21,3 29,29 3,29" fill="#E2E8F0" />
        <!-- Wooden Cross Ties (Sleepers) in Perspective -->
        <g stroke="${c.secondary}" stroke-width="2.5">
          <line x1="11" y1="6" x2="21" y2="6" stroke-width="1.8" />
          <line x1="10" y1="11" x2="22" y2="11" stroke-width="2.2" />
          <line x1="8.5" y1="16" x2="23.5" y2="16" stroke-width="2.6" />
          <line x1="7" y1="21.5" x2="25" y2="21.5" stroke-width="3" />
          <line x1="5" y1="27" x2="27" y2="27" stroke-width="3.4" />
        </g>
        <!-- Twin Steel Rails Converging to Horizon -->
        <line x1="12.5" y1="4" x2="4.5" y2="28.5" stroke="${c.primary}" stroke-width="2.2" />
        <line x1="19.5" y1="4" x2="27.5" y2="28.5" stroke="${c.primary}" stroke-width="2.2" />
      </g>`;
    },
  },
  {
    id: 'triangle-with-rounded-corners',
    char: '🛆',
    name: 'Triangle with Rounded Corners',
    unicodeHex: 'U+1F6C6',
    category: 'warnings',
    tags: ['triangle with rounded corners', 'triangle', 'caution', 'warning', 'sign', 'rounded triangle', 'amber', '🛆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#0F172A', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4.5L28 25.5a2.5 2.5 0 0 1-2.2 3.7H6.2a2.5 2.5 0 0 1-2.2-3.7L16 4.5z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 4.5L28 25.5a2.5 2.5 0 0 1-2.2 3.7H6.2a2.5 2.5 0 0 1-2.2-3.7L16 4.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M16 11v7" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <circle cx="16" cy="22.5" r="1.3" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'prohibited-sign',
    char: '🛇',
    name: 'Prohibited Sign',
    unicodeHex: 'U+1F6C7',
    category: 'warnings',
    tags: ['prohibited sign', 'prohibited', 'no', 'forbidden', 'ban', 'circle slash', 'circle backslash', 'not allowed', 'warning', '🛇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth * 1.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <line x1="7.5" y1="7.5" x2="24.5" y2="24.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="12" fill="${c.secondary}" stroke="${c.primary}" stroke-width="3" />
        <line x1="7.5" y1="7.5" x2="24.5" y2="24.5" stroke="${c.primary}" stroke-width="3" />
      </g>`;
    },
  },
  {
    id: 'circled-information-source',
    char: '🛈',
    name: 'Circled Information Source',
    unicodeHex: 'U+1F6C8',
    category: 'warnings',
    tags: ['circled information source', 'information', 'info', 'i', 'help', 'sign', 'blue', 'guide', '🛈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="10" r="1.3" fill="${c.stroke}" />
          <path d="M14.5 14.5h2.5v7h1.5v1.8h-5v-1.8h1v-5.2h-1z" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="12" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="10" r="1.6" fill="${c.secondary}" />
        <path d="M14.5 14.5h2.5v7h1.5v1.8h-5v-1.8h1v-5.2h-1z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'boys-symbol',
    char: '🛉',
    name: 'Boys Symbol',
    unicodeHex: 'U+1F6C9',
    category: 'warnings',
    tags: ['boys symbol', 'boy', 'boys', 'male', 'child', 'blue', 'sign', 'restroom', '🛉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <circle cx="16" cy="8.5" r="2.2" />
          <path d="M12.5 12.5h7c0.8 0 1.5 0.7 1.5 1.5v4.5c0 0.6-0.4 1-1 1h-1v5.5c0 0.6-0.4 1-1 1h-2c-0.6 0-1-0.4-1-1V19.5h-1c-0.6 0-1-0.4-1-1V14c0-0.8 0.7-1.5 1.5-1.5z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Blue Square Badge -->
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- White Male Stick Figure Silhouette -->
        <circle cx="16" cy="8.5" r="2.5" fill="${c.secondary}" />
        <path d="M12.5 12.5h7c0.8 0 1.5 0.7 1.5 1.5v4.5c0 0.6-0.4 1-1 1h-1v5.5c0 0.6-0.4 1-1 1h-2c-0.6 0-1-0.4-1-1V19.5h-1c-0.6 0-1-0.4-1-1V14c0-0.8 0.7-1.5 1.5-1.5z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'girls-symbol',
    char: '🛊',
    name: 'Girls Symbol',
    unicodeHex: 'U+1F6CA',
    category: 'warnings',
    tags: ['girls symbol', 'girl', 'girls', 'female', 'child', 'dress', 'pink', 'sign', 'restroom', '🛊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DB2777', fillSecondary: '#F8FAFC', stroke: '#9D174D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <circle cx="16" cy="8.5" r="2.2" />
          <polygon points="14,12.5 18,12.5 21,20.5 11,20.5" />
          <line x1="14" y1="21" x2="14" y2="26" />
          <line x1="18" y1="21" x2="18" y2="26" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Pink/Purple Square Badge -->
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- White Female Dress Silhouette -->
        <circle cx="16" cy="8.5" r="2.5" fill="${c.secondary}" />
        <path d="M14 12.5h4c0.8 0 1.4 0.5 1.6 1.2l2.2 7c0.2 0.8-0.4 1.5-1.2 1.5H11.4c-0.8 0-1.4-0.7-1.2-1.5l2.2-7c0.2-0.7 0.8-1.2 1.6-1.2z" fill="${c.secondary}" />
        <rect x="13.2" y="22.2" width="2" height="4" rx="0.5" fill="${c.secondary}" />
        <rect x="16.8" y="22.2" width="2" height="4" rx="0.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'hindu-temple',
    char: '🛕',
    name: 'Hindu Temple',
    unicodeHex: 'U+1F6D5',
    category: 'objects-places',
    tags: ['hindu temple', 'mandir', 'temple', 'hinduism', 'shikhara', 'religion', 'worship', 'prayer', 'building', '🛕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#FDE047', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 2v4m0 0h4l-1.5 2 1.5 2h-4" />
          <path d="M16 8c-3 4-4 8-4 12h8c0-4-1-8-4-12z" />
          <path d="M6 20h20v8H6z" />
          <path d="M13 28v-5h6v5" />
          <line x1="4" y1="28" x2="28" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Steps Base -->
        <rect x="3" y="27" width="26" height="2.5" rx="0.5" fill="#B45309" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Mandapa Base Wall -->
        <rect x="5.5" y="19" width="21" height="8.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Main Sanctum Shikhara Tower -->
        <path d="M16 6.5C13.5 10.5 12 15 11.5 19h9c-.5-4-2-8.5-4.5-12.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M16 9c-1.5 3-2.5 6.5-2.8 10h5.6c-.3-3.5-1.3-7-2.8-10z" fill="#F97316" />
        <!-- Shikhara Horizontal Ribs (Amalaka) -->
        <line x1="13.2" y1="12" x2="18.8" y2="12" stroke="${c.secondary}" stroke-width="1" />
        <line x1="12.2" y1="15.5" x2="19.8" y2="15.5" stroke="${c.secondary}" stroke-width="1" />
        <!-- Kalasha Finial -->
        <circle cx="16" cy="5.5" r="1.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.7" />
        <!-- Saffron Sacred Flag -->
        <line x1="16" y1="5.5" x2="16" y2="2" stroke="${c.stroke}" stroke-width="1" />
        <polygon points="16,2 21,3.5 16,5" fill="#EF4444" />
        <!-- Arched Entrance Sanctum -->
        <path d="M13.5 27.5v-4.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v4.5z" fill="#451A03" stroke="${c.stroke}" stroke-width="0.7" />
        <!-- Flanking Pillar Accents -->
        <rect x="7" y="20.5" width="2" height="6.5" fill="${c.secondary}" />
        <rect x="23" y="20.5" width="2" height="6.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'hut',
    char: '🛖',
    name: 'Hut',
    unicodeHex: 'U+1F6D6',
    category: 'objects-places',
    tags: ['hut', 'roundhouse', 'shelter', 'cabin', 'bungalow', 'thatch', 'straw', 'adobe', 'building', '🛖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#92400E', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,3 28,15 4,15" />
          <path d="M6 15v13h20V15" />
          <path d="M13 28v-7h6v7" />
          <line x1="3" y1="28" x2="29" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ground Base -->
        <line x1="3" y1="28" x2="29" y2="28" stroke="#15803D" stroke-width="1.8" />
        <!-- Mud/Timber Walls -->
        <rect x="6.5" y="15" width="19" height="13" rx="1" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Doorway -->
        <path d="M13 28v-7.5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5V28z" fill="#291507" stroke="${c.stroke}" stroke-width="0.7" />
        <!-- Round Window -->
        <circle cx="9.5" cy="19.5" r="1.5" fill="#FEF08A" stroke="${c.stroke}" stroke-width="0.7" />
        <!-- Thatched Conical Straw Roof -->
        <polygon points="16,3 29,15.5 3,15.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Straw Ridges / Texture -->
        <line x1="16" y1="4" x2="9" y2="15" stroke="#FDE68A" stroke-width="1.2" />
        <line x1="16" y1="4" x2="16" y2="15" stroke="#FDE68A" stroke-width="1.2" />
        <line x1="16" y1="4" x2="23" y2="15" stroke="#FDE68A" stroke-width="1.2" />
        <circle cx="16" cy="3.5" r="1.2" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'elevator',
    char: '🛗',
    name: 'Elevator',
    unicodeHex: 'U+1F6D7',
    category: 'warnings',
    tags: ['elevator', 'lift', 'up down', 'arrows', 'passengers', 'accessibility', 'accessible', 'sign', 'boys', 'girls', '🛗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#F8FAFC', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="5" />
          <polygon points="12,5.5 9,9 15,9" />
          <polygon points="20,9 17,5.5 23,5.5" />
          <circle cx="10" cy="12.5" r="1.4" />
          <path d="M7.8 15h4.4v4h-1v5h-2.4v-5h-1z" />
          <circle cx="22" cy="12.5" r="1.4" />
          <polygon points="20.5,15 23.5,15 25.5,21 18.5,21" />
          <line x1="20.5" y1="21.5" x2="20.5" y2="24.5" />
          <line x1="23.5" y1="21.5" x2="23.5" y2="24.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Blue Elevator Badge -->
        <rect x="3" y="3" width="26" height="26" rx="5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0" />
        <!-- Direction Arrows (Up & Down) -->
        <polygon points="12,5.5 8.5,9 15.5,9" fill="${c.secondary}" />
        <polygon points="20,9 16.5,5.5 23.5,5.5" fill="${c.secondary}" />
        <!-- Boy Stick Figure Silhouette Base -->
        <circle cx="10" cy="12.5" r="1.6" fill="${c.secondary}" />
        <path d="M7.8 15h4.4c.5 0 .9.4.9.9v2.8c0 .4-.3.6-.6.6h-.6v4.2c0 .4-.3.6-.6.6h-1.3c-.4 0-.6-.3-.6-.6V19.3h-.6c-.4 0-.6-.3-.6-.6v-2.8c0-.5.4-.9.9-.9z" fill="${c.secondary}" />
        <!-- Girl Dress Silhouette Base -->
        <circle cx="22" cy="12.5" r="1.6" fill="${c.secondary}" />
        <path d="M20.7 15h2.6c.5 0 .9.3 1 .8l1.4 4.5c.1.5-.3 1-.8 1h-4.8c-.5 0-.9-.5-.8-1l1.4-4.5c.1-.5.5-.8 1-.8z" fill="${c.secondary}" />
        <rect x="20.2" y="21.3" width="1.3" height="2.8" rx="0.3" fill="${c.secondary}" />
        <rect x="22.5" y="21.3" width="1.3" height="2.8" rx="0.3" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'landslide',
    char: '🛘',
    name: 'Landslide',
    unicodeHex: 'U+1F6D8',
    category: 'weather',
    tags: ['landslide', 'rockfall', 'mudslide', 'falling rocks', 'mountain', 'cliff', 'rocks', 'boulders', 'collapse', 'nature', 'disaster', 'geology', 'hazard', '🛘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#854D0E', fillSecondary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Mountain Cliff Slope -->
          <path d="M3 28L4 16 7 9l3-3 3 2 7 8 8 10 3 2H3z" />
          <path d="M7 9l3 9-2 10" />
          <!-- Falling Boulders -->
          <polygon points="19,11 23,10.5 24.5,13.5 22.5,16 18.5,14" />
          <polygon points="23,17 26.5,16.5 28,19.5 26,22.5 22,21" />
          <polygon points="16.5,23 19.5,22 20.5,25 18,26.5" />
          <!-- Small debris -->
          <circle cx="27" cy="14" r="1" />
          <circle cx="21" cy="20" r="1" />
          <!-- Baseline -->
          <line x1="2" y1="28" x2="30" y2="28" />
        </g>`;
      }
      const vegFill = opts.style === 'color' ? '#15803D' : (opts.style === 'duotone' ? c.secondary : c.primary);
      const rockFill = opts.style === 'color' ? '#64748B' : (opts.style === 'duotone' ? c.secondary : c.primary);
      const debrisFill = opts.style === 'color' ? '#334155' : (opts.style === 'duotone' ? c.stroke : c.primary);
      const dustStroke = opts.style === 'color' ? '#CBD5E1' : (opts.style === 'duotone' ? c.secondary : 'none');

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Mountain Cliff Slope & Exposed Earth -->
        <polygon points="3,28 4,16 7,9 10,6 13,8 14,14 16,21 21,28" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
        <polygon points="10,6 13,8 20,16 28,26 28,28 17,28 12,19" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
        <!-- Ridge Vegetation -->
        <polygon points="4,16 7,9 10,6 12,7 9,13 4,17" fill="${vegFill}" />
        <!-- Craggy Fracture Lines -->
        <line x1="7" y1="12" x2="10" y2="18" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
        <line x1="10" y1="18" x2="8" y2="23" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
        <line x1="12" y1="14" x2="15" y2="20" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
        <!-- Tumbling Boulders & Rocks -->
        <polygon points="19,11 23,10.5 24.5,13.5 22.5,16 18.5,14" fill="${rockFill}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.9}" />
        <polygon points="23,17 26.5,16.5 28,19.5 26,22.5 22,21" fill="${rockFill}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.9}" />
        <polygon points="16.5,23 19.5,22 20.5,25 18,26.5" fill="${rockFill}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
        <!-- Debris Stones -->
        <polygon points="15,9.5 17,9 17.5,11 15.5,11.5" fill="${debrisFill}" />
        <circle cx="27" cy="14" r="1.1" fill="${debrisFill}" />
        <circle cx="21" cy="20" r="1.2" fill="${debrisFill}" />
        <circle cx="26" cy="25" r="1.2" fill="${debrisFill}" />
        <!-- Dust Motion Streaks -->
        <line x1="16" y1="8" x2="18" y2="10" stroke="${dustStroke}" stroke-width="0.8" stroke-dasharray="1 1" />
        <line x1="22" y1="8.5" x2="25" y2="11.5" stroke="${dustStroke}" stroke-width="0.8" stroke-dasharray="1 1" />
        <line x1="13" y1="16" x2="15" y2="18.5" stroke="${dustStroke}" stroke-width="0.8" stroke-dasharray="1 1" />
        <!-- Ground Baseline -->
        <line x1="2" y1="28" x2="30" y2="28" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.5}" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'lighthouse',
    char: '🛙',
    name: 'Lighthouse',
    unicodeHex: 'U+1F6D9',
    category: 'objects-places',
    tags: ['lighthouse', 'beacon', 'tower', 'coast', 'ocean', 'sea', 'light beam', 'shore', 'marine', 'navigation', '🛙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 28L14 8h4l2 20z" />
          <rect x="13" y="4" width="6" height="4" rx="1" />
          <polygon points="16,1 19,4 13,4" />
          <path d="M4 28c3-1.5 6-1.5 9 0s6 1.5 9 0 6-1.5 9 0" />
          <line x1="19" y1="6" x2="28" y2="3" />
          <line x1="13" y1="6" x2="4" y2="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ocean Waves at Base -->
        <path d="M2 28.5c3-1 6-1 9 0s6 1 9 0 6-1 9 0v2.5H2z" fill="#0284C7" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Light Beams Sweeping Across Sky -->
        <polygon points="16,6 30,2 30,11" fill="#FEF08A" opacity="0.45" />
        <polygon points="16,6 2,2 2,11" fill="#FEF08A" opacity="0.45" />
        <!-- Lighthouse Tapering Tower -->
        <polygon points="12,28.5 14,8.5 18,8.5 20,28.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Red Stripes -->
        <polygon points="12.5,24 13,20 19,20 19.5,24" fill="${c.primary}" />
        <polygon points="13.4,16 13.8,12 18.2,12 18.6,16" fill="${c.primary}" />
        <!-- Lantern Room with Glowing Beacon -->
        <rect x="13.5" y="4.5" width="5" height="4" rx="0.5" fill="#FBBF24" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Dome Roof Finial -->
        <path d="M13 4.5c0-1.8 1.3-3 3-3s3 1.2 3 3z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="16" cy="1" r="0.6" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'wireless',
    char: '🛜',
    name: 'Wireless',
    unicodeHex: 'U+1F6DC',
    category: 'symbols',
    tags: ['wireless', 'wifi', 'wi-fi', 'signal', 'internet', 'network', 'connection', 'broadcast', 'waves', '🛜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 2.5;
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${color}" stroke-width="${strokeW}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Base Dot -->
        <circle cx="16" cy="25" r="1.5" fill="${color}" stroke="none" />
        <!-- Inner Signal Wave -->
        <path d="M11.5 20.5a6.5 6.5 0 0 1 9 0" />
        <!-- Middle Signal Wave -->
        <path d="M7 15a13 13 0 0 1 18 0" />
        <!-- Outer Signal Wave -->
        <path d="M3 9.5a19 19 0 0 1 26 0" />
      </g>`;
    },
  },
  {
    id: 'playground-slide',
    char: '🛝',
    name: 'Playground Slide',
    unicodeHex: 'U+1F6DD',
    category: 'sports-travel',
    tags: ['playground slide', 'slide', 'playground', 'park', 'kids', 'fun', 'recreation', 'play', '🛝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#0284C7', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="6" y1="28" x2="6" y2="7" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="6" y1="17" x2="10" y2="17" />
          <line x1="6" y1="22" x2="10" y2="22" />
          <line x1="10" y1="28" x2="10" y2="7" />
          <path d="M10 7h4c2 0 3 1.5 4 4l5 11c.8 1.8 2.2 2.5 4 2.5h2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Blue Ladder Legs & Rungs -->
        <line x1="6" y1="28.5" x2="6" y2="7.5" stroke="${c.secondary}" stroke-width="1.8" />
        <line x1="10" y1="28.5" x2="10" y2="7.5" stroke="${c.secondary}" stroke-width="1.8" />
        <line x1="6" y1="13" x2="10" y2="13" stroke="${c.secondary}" stroke-width="1.5" />
        <line x1="6" y1="18" x2="10" y2="18" stroke="${c.secondary}" stroke-width="1.5" />
        <line x1="6" y1="23" x2="10" y2="23" stroke="${c.secondary}" stroke-width="1.5" />
        <!-- Slide Support Leg -->
        <line x1="20" y1="19" x2="20" y2="28.5" stroke="#64748B" stroke-width="1.6" />
        <!-- Red Slide Chute Swoop -->
        <path d="M9 7.5h5c2.2 0 3.5 1.5 4.5 4.2l4.8 10.5c.8 1.8 2 2.5 3.7 2.5h2" stroke="${c.primary}" stroke-width="3" fill="none" />
        <path d="M9 6h5c2.2 0 3.5 1.5 4.5 4.2l4.8 10.5c.8 1.8 2 2.5 3.7 2.5h2" stroke="#FCA5A5" stroke-width="1" fill="none" />
        <!-- Ground Baseline -->
        <line x1="3" y1="28.5" x2="29" y2="28.5" stroke="#16A34A" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'wheel',
    char: '🛞',
    name: 'Wheel',
    unicodeHex: 'U+1F6DE',
    category: 'tools',
    tags: ['wheel', 'tire', 'tyre', 'rubber', 'rim', 'car wheel', 'automotive', 'spin', '🛞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="13" />
          <circle cx="16" cy="16" r="8" />
          <circle cx="16" cy="16" r="3" />
          <line x1="16" y1="8" x2="16" y2="13" />
          <line x1="16" y1="19" x2="16" y2="24" />
          <line x1="8" y1="16" x2="13" y2="16" />
          <line x1="19" y1="16" x2="24" y2="16" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Outer Rubber Tire -->
        <circle cx="16" cy="16" r="13.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Tread Notches -->
        <circle cx="16" cy="16" r="13.5" stroke="#334155" stroke-width="1.2" stroke-dasharray="3 3" fill="none" />
        <!-- Alloy Rim -->
        <circle cx="16" cy="16" r="8.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- 5 Alloy Spokes -->
        <path d="M16 16L16 8.5M16 16L23.1 11.3M16 16L20.4 22.8M16 16L11.6 22.8M16 16L8.9 11.3" stroke="${c.primary}" stroke-width="2.2" />
        <!-- Center Hub -->
        <circle cx="16" cy="16" r="3.2" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="16" cy="16" r="1.2" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'up-pointing-military-airplane',
    char: '🛦',
    name: 'Up-Pointing Military Airplane',
    unicodeHex: 'U+1F6E6',
    category: 'transport-maps',
    tags: ['up pointing military airplane', 'military airplane', 'fighter jet', 'jet', 'military', 'air force', 'supersonic', 'plane', '🛦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 2.5L14 10l-10 7 1.5 2 8.5-3v6l-3 2.5v1.5l5-1.5 5 1.5v-1.5l-3-2.5v-6l8.5 3 1.5-2-10-7z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Jet Fighter Airframe -->
        <path d="M16 2.5L14 10l-10 7 1.5 2 8.5-3v6l-3 2.5v1.5l5-1.5 5 1.5v-1.5l-3-2.5v-6l8.5 3 1.5-2-10-7z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Canopy Glass -->
        <ellipse cx="16" cy="10" rx="1.5" ry="3.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.6" />
        <!-- Engine Afterburners -->
        <rect x="14" y="27" width="1.5" height="1.8" fill="#F97316" />
        <rect x="16.5" y="27" width="1.5" height="1.8" fill="#F97316" />
      </g>`;
    },
  },
  {
    id: 'up-pointing-airplane',
    char: '🛧',
    name: 'Up-Pointing Airplane',
    unicodeHex: 'U+1F6E7',
    category: 'transport-maps',
    tags: ['up pointing airplane', 'airplane', 'aeroplane', 'plane', 'commercial airplane', 'flight', 'airport', 'aviation', 'travel', '🛧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#F8FAFC', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 2.5c-1.5 0-2.5 2-2.5 5.5v7l-10.5 4v2.5l10.5-2.5v5.5l-3 2v1.5l5.5-1 5.5 1V27l-3-2V19l10.5 2.5v-2.5l-10.5-4V8c0-3.5-1-5.5-2.5-5.5z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Commercial Passenger Jet Fuselage & Swept Wings -->
        <path d="M16 2.5c-1.5 0-2.5 2-2.5 5.5v7l-10.5 4v2.5l10.5-2.5v5.5l-3 2v1.5l5.5-1 5.5 1V27l-3-2V19l10.5 2.5v-2.5l-10.5-4V8c0-3.5-1-5.5-2.5-5.5z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Cockpit Windshield -->
        <ellipse cx="16" cy="6" rx="1.8" ry="1.2" fill="${c.primary}" />
        <!-- Wing Jet Turbines -->
        <rect x="8" y="16.5" width="2" height="3" rx="0.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.6" />
        <rect x="22" y="16.5" width="2" height="3" rx="0.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'up-pointing-small-airplane',
    char: '🛨',
    name: 'Up-Pointing Small Airplane',
    unicodeHex: 'U+1F6E8',
    category: 'transport-maps',
    tags: ['up pointing small airplane', 'small airplane', 'cessna', 'propeller', 'airfield', 'light aircraft', 'monoplane', 'plane', '🛨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E11D48', fillSecondary: '#F8FAFC', stroke: '#9F1239' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Front Propeller Blades & Spinner -->
          <line x1="10" y1="3.5" x2="22" y2="3.5" />
          <circle cx="16" cy="3.5" r="1.5" />
          <!-- Airframe Body -->
          <path d="M16 4.5c-.8 0-1.5 1-1.5 3v3.5H3v3h11.5v10H8v2h16v-2h-6.5V14H29v-3H17.5V7.5c0-2-.7-3-1.5-3z" />
          <!-- Cockpit Glass -->
          <rect x="14.8" y="8" width="2.4" height="3" rx="0.8" />
          <!-- Wing Tip Accents -->
          <rect x="3" y="11" width="2.5" height="3" />
          <rect x="26.5" y="11" width="2.5" height="3" />
        </g>`;
      }
      const propStroke = opts.style === 'color' ? '#64748B' : (opts.style === 'duotone' ? c.stroke : c.primary);
      const spinnerFill = opts.style === 'color' ? '#0F172A' : c.primary;
      const glassFill = opts.style === 'color' ? '#38BDF8' : (opts.style === 'duotone' ? c.secondary : c.primary);
      const wingTipFill = opts.style === 'color' ? '#F8FAFC' : (opts.style === 'duotone' ? c.secondary : c.primary);
      const strokeWidth = opts.style === 'silhouette' ? 0 : 1;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Front Propeller Blades & Spinner -->
        <line x1="10" y1="3.5" x2="22" y2="3.5" stroke="${propStroke}" stroke-width="1.8" stroke-linecap="round" />
        <circle cx="16" cy="3.5" r="1.5" fill="${spinnerFill}" />
        <!-- Airframe Body -->
        <path d="M16 4.5c-.8 0-1.5 1-1.5 3v3.5H3v3h11.5v10H8v2h16v-2h-6.5V14H29v-3H17.5V7.5c0-2-.7-3-1.5-3z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${strokeWidth}" />
        <!-- Cockpit Glass -->
        <rect x="14.8" y="8" width="2.4" height="3" rx="0.8" fill="${glassFill}" />
        <!-- Wing Tip Accents -->
        <rect x="3" y="11" width="2.5" height="3" fill="${wingTipFill}" />
        <rect x="26.5" y="11" width="2.5" height="3" fill="${wingTipFill}" />
      </g>`;
    },
  },
  {
    id: 'northeast-pointing-airplane',
    char: '🛪',
    name: 'Northeast-Pointing Airplane',
    unicodeHex: 'U+1F6EA',
    category: 'transport-maps',
    tags: ['northeast pointing airplane', 'airplane', 'plane', 'takeoff', 'departure', 'flight', 'northeast', 'travel', '🛪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#F8FAFC', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g transform="rotate(45 16 16)">
            <path d="M16 2.5c-1.5 0-2.5 2-2.5 5.5v7l-10.5 4v2.5l10.5-2.5v5.5l-3 2v1.5l5.5-1 5.5 1V27l-3-2V19l10.5 2.5v-2.5l-10.5-4V8c0-3.5-1-5.5-2.5-5.5z" />
          </g>
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 16 16)">
        <path d="M16 2.5c-1.5 0-2.5 2-2.5 5.5v7l-10.5 4v2.5l10.5-2.5v5.5l-3 2v1.5l5.5-1 5.5 1V27l-3-2V19l10.5 2.5v-2.5l-10.5-4V8c0-3.5-1-5.5-2.5-5.5z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <ellipse cx="16" cy="6" rx="1.8" ry="1.2" fill="${c.primary}" />
        <rect x="8" y="16.5" width="2" height="3" rx="0.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.6" />
        <rect x="22" y="16.5" width="2" height="3" rx="0.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'auto-rickshaw',
    char: '🛺',
    name: 'Auto Rickshaw',
    unicodeHex: 'U+1F6FA',
    category: 'transport-maps',
    tags: ['auto rickshaw', 'tuk tuk', 'rickshaw', 'three wheeler', 'tuktuk', 'taxi', 'transport', 'vehicle', '🛺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#15803D', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="7" cy="24" r="3" />
          <circle cx="23" cy="24" r="3" />
          <path d="M7 21l3-10h7l6 5v5h-3" />
          <path d="M13 21h7v-7h-7z" />
          <path d="M10 11l-4 7h4" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wheels -->
        <circle cx="7.5" cy="23.5" r="3.2" fill="#1E293B" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="7.5" cy="23.5" r="1.3" fill="#94A3B8" />
        <circle cx="23.5" cy="23.5" r="3.2" fill="#1E293B" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="23.5" cy="23.5" r="1.3" fill="#94A3B8" />
        <!-- Rickshaw Lower Body (Green) -->
        <path d="M6 21l3-2h17v4.5h-2.5v-1.5h-5.5v1.5H9.5V22H6z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Upper Body / Cabin (Yellow) -->
        <path d="M9 13.5l1.5-4h9.5c2 0 4 1.5 5 4v5.5H18v-4h-5v4H9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Canvas Canopy Top (Dark Green) -->
        <path d="M9.5 9.5c0-.8 1-1.5 2-1.5h9c1.5 0 3 .8 3.5 2z" fill="#14532D" />
        <!-- Front Windshield -->
        <polygon points="10.5,10 8.5,15 12,15 12,10" fill="#38BDF8" stroke="${c.stroke}" stroke-width="0.6" />
        <!-- Headlight -->
        <circle cx="5" cy="18" r="1.2" fill="#FEF08A" stroke="${c.stroke}" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'pickup-truck',
    char: '🛻',
    name: 'Pickup Truck',
    unicodeHex: 'U+1F6FB',
    category: 'transport-maps',
    tags: ['pickup truck', 'pickup', 'truck', 'vehicle', 'ute', 'cargo', 'flatbed', 'transport', 'automobile', '🛻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="8" cy="23" r="3" />
          <circle cx="23" cy="23" r="3" />
          <path d="M3 18h2l3-6h7l2 6h11v5h-2m-6 0H11m-6 0H3z" />
          <path d="M9 13.5h5v4.5H7.5z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Heavy Duty Wheels -->
        <circle cx="8.5" cy="23" r="3.5" fill="#0F172A" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="8.5" cy="23" r="1.6" fill="${c.secondary}" />
        <circle cx="23.5" cy="23" r="3.5" fill="#0F172A" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="23.5" cy="23" r="1.6" fill="${c.secondary}" />
        <!-- Truck Cab & Open Bed Body -->
        <path d="M2.5 18h2.5l2.8-6.5c.3-.8 1-1.5 2-1.5h6.7c.8 0 1.5.5 1.8 1.2l1.7 6.8h8c.6 0 1 .4 1 1v4h-2.2c-.3-1.8-1.8-3.2-3.8-3.2s-3.5 1.4-3.8 3.2h-6.4c-.3-1.8-1.8-3.2-3.8-3.2S5.5 21.2 5.2 23H2.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Driver Windshield & Window -->
        <polygon points="9.5,11.5 15.5,11.5 14.5,17 7.5,17" fill="#38BDF8" stroke="${c.stroke}" stroke-width="0.6" />
        <!-- Headlight & Taillight -->
        <rect x="2.5" y="18.5" width="1.5" height="2" rx="0.5" fill="#FEF08A" />
        <rect x="27.5" y="18.5" width="1.5" height="2" rx="0.5" fill="#EF4444" />
      </g>`;
    },
  },
  {
    id: 'roller-skate',
    char: '🛼',
    name: 'Roller Skate',
    unicodeHex: 'U+1F6FC',
    category: 'sports-travel',
    tags: ['roller skate', 'skate', 'roller derby', 'skating', 'quad skate', 'retro', 'wheels', 'sports', '🛼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="8" cy="26" r="2.5" />
          <circle cx="21" cy="26" r="2.5" />
          <path d="M5 23h18" />
          <path d="M7 23V8c0-1.5 1-2.5 2.5-2.5h3c1 0 1.5 1 2 2l2 6h4c2 0 3 1.5 3 3.5v6H5z" />
          <circle cx="25" cy="22" r="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Quad Wheels -->
        <circle cx="8" cy="26" r="2.8" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="8" cy="26" r="1" fill="#FFFFFF" />
        <circle cx="20.5" cy="26" r="2.8" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="20.5" cy="26" r="1" fill="#FFFFFF" />
        <!-- Front Toe Stopper -->
        <circle cx="25" cy="23" r="1.6" fill="#475569" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Skate Baseplate Chassis -->
        <rect x="5.5" y="21.5" width="18" height="2" rx="0.5" fill="#94A3B8" stroke="${c.stroke}" stroke-width="0.7" />
        <!-- Retro High-Top Boot -->
        <path d="M6.5 21.5V7.5c0-1.2 1-2 2.2-2h3c1 0 1.8.8 2.2 2l2 6.5h4.5c2 0 3.2 1.2 3.2 3v4.5H6.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Laces & Eyelets -->
        <line x1="12" y1="9" x2="14.5" y2="10.5" stroke="#FFFFFF" stroke-width="1.2" />
        <line x1="13" y1="12" x2="16" y2="13.5" stroke="#FFFFFF" stroke-width="1.2" />
        <line x1="14.5" y1="15" x2="18" y2="16.5" stroke="#FFFFFF" stroke-width="1.2" />
        <!-- Heel Counter Accent -->
        <path d="M6.5 16v5.5h4c0-2-1.5-5.5-4-5.5z" fill="#DB2777" />
      </g>`;
    },
  },
  {
    id: 'oil-drum',
    char: '🛢️',
    name: 'Oil Drum',
    unicodeHex: 'U+1F6E2',
    category: 'transport-maps',
    tags: ['oil drum', 'barrel', 'drum', 'oil', 'fuel', 'industrial', 'petroleum', '🛢', '🛢️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#B91C1C', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 6.5V25.5C8 27.2 11.6 28.5 16 28.5S24 27.2 24 25.5V6.5" />
          <ellipse cx="16" cy="6.5" rx="8" ry="2.8" />
          <path d="M7.4 12.6c2.2 1.5 15 1.5 17.2 0" />
          <path d="M7.4 19.6c2.2 1.5 15 1.5 17.2 0" />
          <ellipse cx="13.2" cy="6.4" rx="1.2" ry="0.6" />
        </g>`;
      }
      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 6.5V25.5C8 27.2 11.6 28.5 16 28.5S24 27.2 24 25.5V6.5Z" />
          <ellipse cx="16" cy="6.5" rx="8" ry="2.8" />
          <path d="M7.5 12.5c2.2 1.4 14.8 1.4 17 0" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
          <path d="M7.5 19.5c2.2 1.4 14.8 1.4 17 0" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }
      const shade = opts.style === 'duotone' ? c.secondary : '#B91C1C';
      const rim = opts.style === 'duotone' ? c.secondary : '#94A3B8';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Drum cylindrical body -->
        <path d="M8 6.5V25.5C8 27.2 11.6 28.5 16 28.5S24 27.2 24 25.5V6.5Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Right cylinder highlight/shadow -->
        <path d="M18 7.5V28.2C21.5 27.8 24 26.7 24 25.5V6.5C22.4 7.3 20.3 7.5 18 7.5Z" fill="${shade}" opacity="0.55" />
        <!-- Raised structural ribs -->
        <path d="M7.2 12.5c2.2 1.5 15.4 1.5 17.6 0" fill="none" stroke="${c.stroke}" stroke-width="2.4" />
        <path d="M7.2 12.5c2.2 1.5 15.4 1.5 17.6 0" fill="none" stroke="${rim}" stroke-width="1.2" />
        <path d="M7.2 19.6c2.2 1.5 15.4 1.5 17.6 0" fill="none" stroke="${c.stroke}" stroke-width="2.4" />
        <path d="M7.2 19.6c2.2 1.5 15.4 1.5 17.6 0" fill="none" stroke="${rim}" stroke-width="1.2" />
        <!-- Top lid & bung plugs -->
        <ellipse cx="16" cy="6.5" rx="8" ry="2.8" fill="${rim}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="13" cy="6.3" rx="1.2" ry="0.55" fill="#475569" />
        <ellipse cx="19" cy="6.7" rx="0.8" ry="0.4" fill="#475569" />
      </g>`;
    },
  },
];