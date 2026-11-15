import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Full-body & bust person helpers matching peopleCharactersIcons.ts / person-standing / person-raising-hand ----
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
  features: (ink: string, mouthFill: string, o?: boolean, s?: boolean, d?: boolean, c?: any) => string,
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

export const peopleFantasyExtendedIcons: WimojiIconDef[] = [
  // 1. Person Climbing (U+1F9D7) — built directly on person-walking geometry
  {
    id: 'person-climbing',
    char: '🧗',
    name: 'Person Climbing',
    unicodeHex: 'U+1F9D7',
    category: 'sports-travel',
    tags: ['person climbing', 'climber', 'rock climbing', 'bouldering', 'cliff', 'mountain', 'sport', '🧗'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Steep rock cliff on right side + rock holds
        { d: 'M18.6 31 L20.4 21.8 L22.2 13 L24.8 3 H30.5 V31 Z', kind: 'item', fill: '#94A3B8' },
        { d: 'M23 7.6 L27.6 5.8 M21.4 16 L26.4 14.4 M20 24.4 L25.4 23', kind: 'mark', w: 1, fill: '#64748B' },
        // Climbing rope anchored down
        { d: 'M11.6 17.6 C8.4 21.4 7.8 26.8 9.2 31', kind: 'mark', w: 1.2, fill: '#DC2626' },
        // Far arm reaching high to upper rock hold
        ...armOf([13.2, 11.4], [17.4, 7.6], [22.2, 5.4]),
        // Raised bent leg stepping onto high foothold
        ...legOf([13, 18.8], [18.4, 18.4], [19.4, 23.2], 1),
        // Trailing lower leg braced on lower ledge
        ...legOf([11.8, 19.2], [11.2, 24.8], [14.2, 29], 1),
        // Tilted climber torso
        tube('shirt', [[13.2, 11], [12.4, 19.2]], 6.4),
        // Near arm reaching out to mid rock hold
        ...armOf([12.8, 12], [16.8, 12.6], [20.6, 11]),
        // Head looking up toward rock
        ...headOf(12.2, 6.4, 3.4, 3.7),
      ];
      return renderPerson(opts, layers, (ink) => faceAt(ink, 12.2, 6.4, 1), 'climb');
    },
  },

  // 2. Woman with Headscarf (U+1F9D5) — built on person-raising-hand bust & woman face
  {
    id: 'woman-with-headscarf',
    char: '🧕',
    name: 'Woman with Headscarf',
    unicodeHex: 'U+1F9D5',
    category: 'faces-hands',
    tags: ['woman with headscarf', 'hijab', 'headscarf', 'veil', 'woman', 'person', 'purple', '🧕'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Purple clothes shoulders matching person-raising-hand bust
        { d: 'M5.6 32 C5.6 24.2 10 21 16 21 C22 21 26.4 24.2 26.4 32 Z', kind: 'shirt' },
        // Outer purple hijab / headscarf framing head & draping smoothly over chest
        { d: 'M8.2 15.2 C7.2 8.2 11 4.4 16 4.4 C21 4.4 24.8 8.2 23.8 15.2 C23.4 20 23.8 23.2 22.6 25.8 C20.4 27.6 18.2 28.4 16 28.4 C13.8 28.4 11.6 27.6 9.4 25.8 C8.2 23.2 8.6 20 8.2 15.2 Z', kind: 'item', fill: '#9333EA' },
        // Face inside hijab opening
        { d: personEllipse(16, 14.4, 5.4, 5.8), kind: 'skin' },
        // Front purple hijab wrap fold around crown
        { d: 'M10.4 12.2 C11.4 8.6 14 7.6 16 7.6 C18 7.6 20.6 8.6 21.6 12.2 C19.4 9.8 17.6 9 16 9 C14.4 9 12.6 9.8 10.4 12.2 Z', kind: 'item', fill: '#A855F7' },
        // Scarf drape fold line across chest
        { d: 'M11.4 21.4 C14.2 23.4 17.8 23.4 20.6 21.4', kind: 'mark', w: 1.1, fill: '#581C87' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _mouth, o, s, d) =>
          personEyes(ink, [[13.6, 14.4], [18.4, 14.4]], 0.9) +
          personLine(ink, 'M12 12.8 L11 12.3 M20 12.8 L21 12.3', 0.8) +
          `<path d="M14 17.4 C15 18.8 17 18.8 18 17.4" fill="none" stroke="${o || s || d ? ink : '#E11D48'}" stroke-width="1.35" />`,
        'hijab',
        '#581C87',
        { fillPrimary: '#7C3AED', fillSecondary: '#C084FC', stroke: '#4C1D95' },
      );
    },
  },

  // 3. Person in Steamy Room (U+1F9D6) — built directly on person-raising-hand geometry
  {
    id: 'person-in-steamy-room',
    char: '🧖',
    name: 'Person in Steamy Room',
    unicodeHex: 'U+1F9D6',
    category: 'faces-hands',
    tags: ['person in steamy room', 'sauna', 'steam room', 'spa', 'towel', 'relax', '🧖'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Bare warm shoulders
        { d: 'M5.6 32 C5.6 25.4 9.8 22.4 16 22.4 C22.2 22.4 26.4 25.4 26.4 32 Z', kind: 'skin' },
        // Bath towel wrapped neatly across chest
        { d: 'M7 32 L7.8 26.2 C10.8 27.6 21.2 27.6 24.2 26.2 L25 32 Z', kind: 'item', fill: '#F8FAFC' },
        // Head
        { d: personEllipse(16, 13.8, 5.6, 5.8), kind: 'skin' },
        // Swept hair + white spa towel wrap on top
        { d: personHair(16, 13.8, 5.6, 5.8), kind: 'hair' },
        { d: 'M10.4 10.6 C10.6 6.2 13 4.6 16 4.6 C19 4.6 21.4 6.2 21.6 10.6 C18.8 9.2 13.2 9.2 10.4 10.6 Z', kind: 'item', fill: '#F8FAFC' },
        // Rising steam wisps in front/sides
        { d: 'M6 19.6 C4.4 17.2 7.2 14.6 5.6 12 C4.2 9.8 6.4 7.6 5.6 5.8', kind: 'mark', w: 1.4, fill: '#CBD5E1' },
        { d: 'M26 20.6 C27.6 18 24.8 15.4 26.4 12.8 C27.6 10.6 25.6 8.2 26.4 6.2', kind: 'mark', w: 1.4, fill: '#CBD5E1' },
        { d: 'M11.4 25.2 C10 23.4 12 21.8 11 20', kind: 'mark', w: 1.2, fill: '#CBD5E1' },
        { d: 'M20.8 25.4 C22.2 23.6 20.2 22 21.2 20.2', kind: 'mark', w: 1.2, fill: '#CBD5E1' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _mouth, o, s) =>
          // Serene relaxed closed eyes & gentle smile + rosy sauna cheeks
          (!o && !s
            ? '<ellipse cx="12.2" cy="15.8" rx="1.2" ry="0.7" fill="#FB7185" opacity="0.45" stroke="none" /><ellipse cx="19.8" cy="15.8" rx="1.2" ry="0.7" fill="#FB7185" opacity="0.45" stroke="none" />'
            : '') +
          personLine(ink, 'M12.4 14 C13.2 15 14.2 15 14.8 14 M17.2 14 C17.8 15 18.8 15 19.6 14', 1.1) +
          personLine(ink, 'M14 17.2 C15 18.4 17 18.4 18 17.2', 1.1),
        'steam',
      );
    },
  },

  // 4. Mage (U+1F9D9) — built directly on person-raising-hand geometry
  {
    id: 'mage',
    char: '🧙',
    name: 'Mage',
    unicodeHex: 'U+1F9D9',
    category: 'faces-hands',
    tags: ['mage', 'wizard', 'sorcerer', 'witch', 'magic', 'staff', 'hat', '🧙'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Wizard robe torso matching person-raising-hand bust
        { d: 'M4.6 32 C4.6 24 8.6 20.6 14.4 20.6 C20.2 20.6 24 24 24 32 Z', kind: 'item', fill: '#4F46E5' },
        // Raised robe sleeve & arm holding staff
        { d: 'M19.6 24.6 C22.4 23 24.4 19 24.6 14.6', kind: 'item', w: 3.6, fill: '#4F46E5' },
        // Wooden wizard staff
        { d: 'M25.6 9.8 L25.6 30.8', kind: 'item', w: 2.2, fill: '#78350F' },
        // Hand gripping staff
        { d: personCircle(25.2, 14.2, 1.8), kind: 'skin' },
        // Glowing crystal orb atop staff
        { d: personCircle(25.6, 7.2, 2.7), kind: 'item', fill: '#38BDF8' },
        // Head
        { d: personEllipse(14.4, 14.6, 5.2, 5.4), kind: 'skin' },
        // Long white wizard beard
        { d: 'M9.8 16.8 C9.8 21.8 12.2 25.4 14.4 26 C16.6 25.4 19 21.8 19 16.8 C17.4 18.2 15.8 18.6 14.4 18.6 C13 18.6 11.4 18.2 9.8 16.8 Z', kind: 'item', fill: '#F1F5F9' },
        // Pointed wide-brimmed wizard hat + golden band
        { d: 'M6.8 12.6 C10.6 10.6 18.2 10.6 22 12.6 C18.8 11.4 10 11.4 6.8 12.6 Z', kind: 'item', fill: '#4338CA' },
        { d: 'M10 11.4 L13.4 2.4 L17.6 5 L18.8 11.4 Z', kind: 'item', fill: '#4F46E5' },
        { d: 'M10.4 10.6 H18.4', kind: 'mark', w: 1.5, fill: '#FBBF24' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, _mouth, o, s) =>
          personEyes(ink, [[12.4, 14.6], [16.4, 14.6]], 0.9) +
          personLine(ink, 'M11.2 13 L13.4 13.4 M17.6 13 L15.4 13.4', 0.9) +
          personLine(ink, 'M13 17.6 C14 18.4 14.8 18.4 15.8 17.6', 0.9) +
          (!o && !s ? '<circle cx="24.8" cy="6.4" r="0.8" fill="#E0F2FE" stroke="none" />' : ''),
        'mage',
      );
    },
  },

  // 5. Vampire (U+1F9DB) — built directly on person-raising-hand geometry
  {
    id: 'vampire',
    char: '🧛',
    name: 'Vampire',
    unicodeHex: 'U+1F9DB',
    category: 'faces-hands',
    tags: ['vampire', 'dracula', 'fangs', 'cape', 'halloween', 'monster', '🧛'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // High pointed Dracula collar behind head
        { d: 'M7.2 22.8 L6.2 10.6 L12 14.8 H20 L25.8 10.6 L24.8 22.8 Z', kind: 'item', fill: '#DC2626' },
        // Dark cloak shoulders
        { d: 'M5.6 32 C5.6 24 10 20.6 16 20.6 C22 20.6 26.4 24 26.4 32 Z', kind: 'item', fill: '#1E293B' },
        // Crimson inner shirt V
        { d: 'M13.2 21.2 L16 28.4 L18.8 21.2 Z', kind: 'item', fill: '#DC2626' },
        // Head
        { d: personEllipse(16, 13.8, 5.6, 5.8), kind: 'skin' },
        // Widow's peak slicked-back hair
        { d: 'M10.4 13.2 C10 7.4 12.6 5.2 16 5.2 C19.4 5.2 22 7.4 21.6 13.2 C20.4 10.2 18 9.2 16 11.4 C14 9.2 11.6 10.2 10.4 13.2 Z', kind: 'hair' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s) =>
          personLine(ink, 'M12 12.2 L14.6 13 M20 12.2 L17.4 13', 1.1) +
          personEyes(ink, [[13.4, 14], [18.6, 14]], 0.9) +
          `<path d="M13 16.4 C14 18.6 18 18.6 19 16.4 Z" fill="${mouthFill}" stroke="${ink}" stroke-width="0.9" />` +
          (!o && !s
            ? '<path d="M14.1 16.5 L14.5 17.8 L15 16.5 Z M17 16.5 L17.5 17.8 L17.9 16.5 Z" fill="#FFFFFF" stroke="none" />'
            : ''),
        'vamp',
        '#1E293B',
      );
    },
  },

  // 6. Elf (U+1F9DD) — built directly on person-raising-hand geometry
  {
    id: 'elf',
    char: '🧝',
    name: 'Elf',
    unicodeHex: 'U+1F9DD',
    category: 'faces-hands',
    tags: ['elf', 'fantasy', 'pointed ears', 'woodland', 'fairy tale', '🧝'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Forest green tunic torso
        { d: 'M5.6 32 C5.6 24 10 20.6 16 20.6 C22 20.6 26.4 24 26.4 32 Z', kind: 'item', fill: '#16A34A' },
        // Tunic V-collar trim
        { d: 'M13.2 21 L16 24.8 L18.8 21', kind: 'mark', w: 1.4, fill: '#FBBF24' },
        // Pointed left & right elf ears
        { d: 'M10.8 12.4 L5.4 10.6 L9.8 15.8 Z', kind: 'skin' },
        { d: 'M21.2 12.4 L26.6 10.6 L22.2 15.8 Z', kind: 'skin' },
        // Head
        { d: personEllipse(16, 13.8, 5.6, 5.8), kind: 'skin' },
        // Swept golden-chestnut hair
        { d: personHair(16, 13.8, 5.6, 5.8), kind: 'hair' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink) =>
          personEyes(ink, [[13.5, 14.2], [18.5, 14.2]], 0.9) +
          personLine(ink, 'M12.2 12.4 L14.4 12 M19.8 12.4 L17.6 12', 0.9) +
          personLine(ink, 'M14 17.2 C15.2 18.4 16.8 18.4 18 17.2', 1.1),
        'elf',
        '#B45309',
      );
    },
  },

  // 7. Zombie (U+1F9DF) — built directly on person-raising-hand geometry
  {
    id: 'zombie',
    char: '🧟',
    name: 'Zombie',
    unicodeHex: 'U+1F9DF',
    category: 'faces-hands',
    tags: ['zombie', 'undead', 'halloween', 'monster', 'walking dead', '🧟'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Tattered shirt matching person-raising-hand bust
        { d: 'M4.6 32 C4.6 24 8.6 20.6 14.4 20.6 C20.2 20.6 24 24 24 32 Z', kind: 'shirt' },
        // Stiff outstretched zombie arm raised forward
        { d: 'M19.4 24.4 L24.8 18.8', kind: 'shirt', w: 3.6 },
        { d: 'M24.8 18.8 L27.6 15.2', kind: 'skin', w: 2.6 },
        { d: 'M26.6 14 L29 12.2 M27.4 15.2 L29.8 14.2 M27 16.4 L29.2 16', kind: 'mark', w: 1.4, fill: '#84CC16' },
        // Undead green head
        { d: personEllipse(14.4, 13.2, 5.6, 5.8), kind: 'skin' },
        // Messy dark hair
        { d: 'M8.8 12.8 C8.2 8.4 10.8 5.8 14.4 5.8 C18 5.8 20.6 8.4 20 12.8 L18 10.2 L16.2 12.2 L14 9.6 L11.8 12 Z', kind: 'hair' },
      ];
      return renderPerson(
        opts,
        layers,
        (ink, mouthFill, o, s) =>
          // Forehead stitch scar
          personLine(ink, 'M15.4 9.8 L18.2 9.4 M16.2 9 L16.4 10.4 M17.4 8.8 L17.6 10.2', 0.8) +
          // Mismatched eerie zombie eyes
          (!o && !s
            ? '<circle cx="11.8" cy="13.4" r="1.4" fill="#FEF08A" stroke="#37474F" stroke-width="0.6" /><circle cx="16.8" cy="13.8" r="1.1" fill="#FEF08A" stroke="#37474F" stroke-width="0.6" />'
            : '') +
          personEyes(ink, [[11.8, 13.4], [16.8, 13.8]], 0.65) +
          `<path d="M11.6 16.8 C13 15.8 15.8 16 17.2 17.2 C16 18 12.8 18 11.6 16.8 Z" fill="${mouthFill}" stroke="${ink}" stroke-width="0.9" />`,
        'zomb',
        '#334155',
        { fillPrimary: '#FB8C00', fillSecondary: '#84CC16', stroke: '#3F6212', skinColor: '#84CC16' },
      );
    },
  },

  // 8. Person in Lotus Position (U+1F9D8) — built directly on person-standing geometry
  {
    id: 'person-in-lotus-position',
    char: '🧘',
    name: 'Person in Lotus Position',
    unicodeHex: 'U+1F9D8',
    category: 'faces-hands',
    tags: ['person in lotus position', 'meditation', 'yoga', 'zen', 'mindfulness', 'calm', '🧘'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Crossed legs & bare feet tucked in lotus posture
        { d: 'M14 21.8 C10.4 21.4 7.6 24.4 8.4 27.6 C10.4 29.2 16 28.6 18.8 27', kind: 'pants', w: 3.6 },
        { d: 'M18 21.8 C21.6 21.4 24.4 24.4 23.6 27.6 C21.6 29.2 16 28.6 13.2 27', kind: 'pants', w: 3.6 },
        { d: personEllipse(12.2, 27.4, 1.9, 1.1), kind: 'skin' },
        { d: personEllipse(19.8, 27.4, 1.9, 1.1), kind: 'skin' },
        // Arms resting gently out to knees
        ...armOf([12.6, 13.8], [9.8, 19], [7.8, 23.4]),
        ...armOf([19.4, 13.8], [22.2, 19], [24.2, 23.4]),
        // Upright shirt torso matching person-standing
        tube('shirt', [[16, 12.8], [16, 21.8]], 6.8),
        // Head matching person-standing
        ...headOf(16, 7.6, 3.5, 3.8),
      ];
      return renderPerson(
        opts,
        layers,
        (ink) =>
          // Peaceful closed eyes & serene smile
          personLine(ink, 'M13.9 7.8 C14.3 8.4 14.9 8.4 15.3 7.8 M16.7 7.8 C17.1 8.4 17.7 8.4 18.1 7.8', 0.85) +
          personLine(ink, 'M15 9.6 C15.6 10.3 16.4 10.3 17 9.6', 0.8),
        'lotus',
      );
    },
  },

  // 9. Fairy (U+1F9DA) — built directly on person-standing geometry
  {
    id: 'fairy',
    char: '🧚',
    name: 'Fairy',
    unicodeHex: 'U+1F9DA',
    category: 'faces-hands',
    tags: ['fairy', 'pixie', 'wings', 'magic', 'wand', 'fantasy', '🧚'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Translucent iridescent upper & lower fairy wings behind shoulders
        { d: 'M14 13.2 C9.6 6.2 4.6 7.4 5.4 12.8 C6 16.4 10.6 16.6 14 14.6 Z', kind: 'item', fill: '#BAE6FD' },
        { d: 'M18 13.2 C22.4 6.2 27.4 7.4 26.6 12.8 C26 16.4 21.4 16.6 18 14.6 Z', kind: 'item', fill: '#BAE6FD' },
        { d: 'M14.2 15.2 C10.4 16.4 8.2 19.6 9.8 22.2 C11.4 23.8 14 20.4 14.8 17.4 Z', kind: 'item', fill: '#E0F2FE' },
        { d: 'M17.8 15.2 C21.6 16.4 23.8 19.6 22.2 22.2 C20.6 23.8 18 20.4 17.2 17.4 Z', kind: 'item', fill: '#E0F2FE' },
        // Magic wand raised in right hand
        { d: 'M22.2 11.4 L26.4 5.6', kind: 'mark', w: 1.2, fill: '#B45309' },
        { d: 'M26.6 3.8 L27.3 5.2 L28.8 5.4 L27.7 6.4 L28 7.9 L26.6 7.1 L25.2 7.9 L25.5 6.4 L24.4 5.4 L25.9 5.2 Z', kind: 'item', fill: '#FDE047' },
        // Floating legs & pointed pixie slippers
        ...legOf([14.4, 19.6], [13.2, 24.4], [11.6, 28.6], -1),
        ...legOf([17.4, 19.6], [18.8, 24], [17.4, 28.8], 1),
        // Left arm out for balance, right arm lifting wand
        ...armOf([13, 12.2], [10.4, 15.2], [8.6, 17.8]),
        ...armOf([19, 12.2], [21.2, 13.6], [22.4, 11.2]),
        // Tunic torso
        tube('shirt', [[16, 11], [16, 19.8]], 6.4, '#EC4899'),
        // Head matching person-standing
        ...headOf(16, 6.2, 3.5, 3.8),
      ];
      return renderPerson(opts, layers, (ink) => faceAt(ink, 16, 6.2, 0), 'fairy');
    },
  },

  // 10. Merperson (U+1F9DC) — built directly on person-standing upper geometry
  {
    id: 'merperson',
    char: '🧜',
    name: 'Merperson',
    unicodeHex: 'U+1F9DC',
    category: 'faces-hands',
    tags: ['merperson', 'mermaid', 'merman', 'trident', 'ocean', 'sea', '🧜'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Golden trident held upright on the right
        { d: 'M24.6 5.6 L24.6 26.8', kind: 'mark', w: 1.5, fill: '#D97706' },
        { d: 'M22.2 4.6 V8 C22.2 9.4 27 9.4 27 8 V4.6 M24.6 3.8 V9.2', kind: 'mark', w: 1.3, fill: '#F59E0B' },
        // Forked shimmering mermaid tail fin
        { d: 'M18 27.2 C21.2 28.4 23.6 30.8 25.4 30.2 C24.6 27.6 22.8 25.6 20 25.2 C22.4 24.4 24.8 22.6 25 20.4 C22.4 21 19.6 22.8 18 25.4 Z', kind: 'item', fill: '#0D9488' },
        // Curved scaly teal mermaid tail from waist down
        { d: 'M13.2 17.4 C12.4 22.8 14.8 26.8 19.2 26.6 C20.4 25.4 19.4 23.8 17.8 23.4 C16.8 22 17.4 19.6 18 17.4 Z', kind: 'item', fill: '#14B8A6' },
        // Bare upper torso & shoulder vest/chest matching person-standing proportions
        tube('skin', [[15.6, 10.6], [15.6, 17.6]], 5.6),
        { d: 'M12.6 13.8 C14 14.6 17.2 14.6 18.6 13.8 L18.2 17.6 H13 Z', kind: 'shirt' },
        // Arms: left resting near hip, right holding trident
        tube('skin', [[12.6, 11.4], [10.4, 15.2], [11.6, 18.2]], 2.5),
        hand([11.6, 18.2], 1.5),
        tube('skin', [[18.6, 11.4], [21.6, 14.2], [24.2, 13.8]], 2.5),
        hand([24.2, 13.8], 1.5),
        // Head matching person-standing
        ...headOf(15.6, 5.8, 3.5, 3.8),
      ];
      return renderPerson(opts, layers, (ink) => faceAt(ink, 15.6, 5.8, 0), 'mer');
    },
  },

  // 11. Genie (U+1F9DE) — built directly on person-standing upper geometry
  {
    id: 'genie',
    char: '🧞',
    name: 'Genie',
    unicodeHex: 'U+1F9DE',
    category: 'faces-hands',
    tags: ['genie', 'lamp', 'magic', 'wish', 'djinn', 'smoke', '🧞'],
    renderContent: (opts) => {
      const layers: PersonLayer[] = [
        // Swirling smoky lower genie tail emerging from bottom
        { d: 'M12.4 19.2 C13.2 22.8 18.8 23.6 18.2 26.8 C17.6 29.2 12.2 29.4 10.2 30.8 C15.2 31.2 21.8 30 22.2 25.8 C22.4 22.4 18.6 21 19 18.8 Z', kind: 'item', fill: '#38BDF8' },
        // Gold waist sash
        { d: 'M12.4 17.8 H19.2 V20 H12.4 Z', kind: 'item', fill: '#FBBF24' },
        // Muscular cerulean torso
        { d: 'M11.6 10.8 H20.4 L19 18 H12.6 Z', kind: 'skin' },
        // Crossed genie arms on chest with gold wrist cuffs
        tube('skin', [[11.6, 11.6], [10.4, 15], [17.8, 15.2]], 2.7),
        tube('skin', [[20.4, 11.6], [21.6, 15], [14.2, 15.6]], 2.7),
        { d: 'M13.6 14.4 L14.4 16.4 M17.6 14.2 L18.4 16.2', kind: 'mark', w: 1.4, fill: '#FBBF24' },
        // Topknot ponytail
        { d: 'M16.2 2.4 C18.2 0.8 20.8 1.6 20.6 3.8 C19.4 3.2 18 3.2 16.8 4 Z', kind: 'hair' },
        // Head matching person-standing
        ...headOf(16, 6.2, 3.5, 3.8),
      ];
      return renderPerson(
        opts,
        layers,
        (ink) =>
          faceAt(ink, 16, 6.2, 0) +
          personLine(ink, 'M15.4 9.6 L16 10.5 L16.6 9.6', 0.9),
        'genie',
        '#1E293B',
        { fillPrimary: '#0284C7', fillSecondary: '#38BDF8', stroke: '#0369A1', skinColor: '#38BDF8' },
      );
    },
  },
];
