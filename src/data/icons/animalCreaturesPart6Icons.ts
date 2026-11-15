import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared helpers (animals are drawn in a 32x32 box) ----
type AnimalOpts = { style?: string; strokeWidth?: number };
type AnimalColors = { primary: string; secondary: string; stroke: string };

const kit = (opts: AnimalOpts, c: AnimalColors) => {
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : Math.max(0.9, sw * 0.55);
  const sc = s ? c.primary : c.stroke;
  return {
    o, d, s, t, sc,
    fill: (v: string) => (o ? 'none' : s ? c.primary : v),
    alt: (lit: string) => (o ? 'none' : s ? c.primary : d ? c.secondary : lit),
    dark: (v: string) => (o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : v),
    cut: (lit: string) => (o ? 'none' : s ? '#FFFFFF' : d ? c.secondary : lit),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${sc}" stroke-width="${t}"`,
    ast: o ? `stroke="${sc}" stroke-width="${t}"` : 'stroke="none"',
    ln: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    tube: (path: string, w: number, fillCol: string) =>
      o
        ? `<path d="${path}" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(1.4, t * 1.45)}" />`
        : s
        ? `<path d="${path}" fill="none" stroke="${c.primary}" stroke-width="${w + t}" />`
        : `<path d="${path}" fill="none" stroke="${sc}" stroke-width="${w + t * 2}" /><path d="${path}" fill="none" stroke="${fillCol}" stroke-width="${w}" />`,
    behind: (id: string, cover: string, content: string) =>
      o
        ? `<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${cover}</mask><g mask="url(#${id})">${content}</g>`
        : content,
  };
};

const pair = (s: string) => `${s}<g transform="matrix(-1 0 0 1 32 0)">${s}</g>`;

const prep = (opts: AnimalOpts, base: { fillPrimary: string; fillSecondary: string; stroke: string }) => {
  const c = resolveColors(opts as any, base) as AnimalColors;
  const k = kit(opts, c);
  const hl = k.o || k.s ? 'none' : '#FFFFFF';
  const dot = (x: number, y: number, r = 1.1) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${k.eye}" /><circle cx="${x + r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.38}" fill="${hl}" />`;
  return { c, k, badge: getBadgeMarkup(opts as any), hl, dot };
};

export const animalCreaturesPart6Icons: WimojiIconDef[] = [
  // 1. Crab (U+1F980)
  {
    id: 'crab',
    char: '🦀',
    name: 'Crab',
    unicodeHex: 'U+1F980',
    category: 'objects-places',
    tags: ['crab', 'crustacean', 'ocean', 'sea', 'beach', 'cancer', 'claws', 'shellfish', '🦀'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#EF4444', fillSecondary: '#FCA5A5', stroke: '#991B1B' });
      const legs = pair(`
        <path d="M8.6 18.6 C5.8 18 4 19.6 3.2 22.4 M8.8 20.8 C6 21.4 4.4 23.4 4.4 26 M10.2 22.8 C8 24.4 7.2 26.8 7.8 28.8" fill="none" stroke="${k.o || k.s ? k.sc : k.sc}" stroke-width="${k.o ? k.t : 2.1}" />
      `);
      const claws = pair(`
        <path d="M9.4 15.6 C7 13.8 6 11.4 6.6 9.4" fill="none" stroke="${k.sc}" stroke-width="${k.o ? k.t : 2.2}" />
        <path d="M6.4 10.6 C3.4 9.6 2.8 5.2 5.4 3.4 C6.4 5.4 6.6 6.8 7.4 7.4 C8.2 6.2 8.4 4.4 7.6 2.8 C10.4 4 10.6 8.4 8 10.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
      `);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${legs}
        ${claws}
        <!-- Eyestalks -->
        ${pair(`<path d="M12.6 14.4 L11.8 11.4" fill="none" stroke="${k.sc}" stroke-width="1.5" />
        <circle cx="11.6" cy="10.6" r="1.5" fill="${k.o ? 'none' : k.s ? c.primary : '#FFFFFF'}" ${k.st} stroke-width="0.9" />`)}
        <!-- Shell -->
        <ellipse cx="16" cy="19.2" rx="8.6" ry="5.6" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M10.4 19.4 C12.4 22.8 19.6 22.8 21.6 19.4 C19.4 21.6 12.6 21.6 10.4 19.4 Z" fill="${k.alt('#FCA5A5')}" stroke="none" />
        ${dot(11.6, 10.6, 0.8)}
        ${dot(20.4, 10.6, 0.8)}
        <path d="M13.6 19.8 C15 21 17 21 18.4 19.8" fill="none" stroke="${k.ln}" stroke-width="1" />
      </g>`;
    },
  },

  // 2. Lion (U+1F981)
  {
    id: 'lion',
    char: '🦁',
    name: 'Lion',
    unicodeHex: 'U+1F981',
    category: 'objects-places',
    tags: ['lion', 'lion face', 'king', 'jungle', 'mane', 'cat', 'leo', 'safari', '🦁'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#F59E0B', fillSecondary: '#B45309', stroke: '#78350F' });
      const maneD = 'M16 3.2 L19.2 5 L22.8 4.4 L24.6 7.6 L28 9.2 L27.4 12.8 L29.4 16 L27.4 19.2 L28 22.8 L24.6 24.4 L22.8 27.6 L19.2 27 L16 28.8 L12.8 27 L9.2 27.6 L7.4 24.4 L4 22.8 L4.6 19.2 L2.6 16 L4.6 12.8 L4 9.2 L7.4 7.6 L9.2 4.4 L12.8 5 Z';
      const faceD = 'M16 7.8 C20.8 7.8 23.8 11.4 23.8 16 C23.8 20.6 20.6 24 16 24 C11.4 24 8.2 20.6 8.2 16 C8.2 11.4 11.2 7.8 16 7.8 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Scalloped Mane -->
        <path d="${maneD}" fill="${k.alt('#B45309')}" ${k.st} />
        <!-- Ears -->
        ${pair(`<circle cx="9.6" cy="9.4" r="2.5" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="9.6" cy="9.4" r="1.1" fill="${k.cut('#FDE68A')}" stroke="none" />`)}
        <!-- Face -->
        <path d="${faceD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Snout & Cheek Fluff -->
        <ellipse cx="16" cy="19.6" rx="4.4" ry="3.2" fill="${k.cut('#FEF3C7')}" ${k.ast} />
        <path d="M14.2 17.6 H17.8 L16 19.6 Z" fill="${k.dark('#78350F')}" />
        <path d="M16 19.6 V21.2 M14 21.2 C14.8 22 15.6 21.8 16 21.2 C16.4 21.8 17.2 22 18 21.2" fill="none" stroke="${k.ln}" stroke-width="1" />
        ${dot(12.2, 14.2, 1.25)}
        ${dot(19.8, 14.2, 1.25)}
      </g>`;
    },
  },

  // 3. Scorpion (U+1F982)
  {
    id: 'scorpion',
    char: '🦂',
    name: 'Scorpion',
    unicodeHex: 'U+1F982',
    category: 'objects-places',
    tags: ['scorpion', 'scorpio', 'arachnid', 'desert', 'sting', 'pincers', 'zodiac', '🦂'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#B45309', fillSecondary: '#F59E0B', stroke: '#78350F' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs -->
        <path d="M13 18 L9.4 15.6 L7.6 17.4 M13.4 20.6 L9 19.8 L7.4 22.2 M14.2 23.2 L10.2 24 L9.4 26.8" fill="none" stroke="${k.sc}" stroke-width="1.5" />
        <path d="M18.8 19 L22.2 17.2 L23.6 19.2 M19 21.6 L22.8 21 L24 23.6 M18.6 24.2 L22 25 L22.6 27.6" fill="none" stroke="${k.sc}" stroke-width="1.5" />
        <!-- Segmented Tail & Stinger -->
        <path d="M17.2 25.6 C21.8 27 26.8 24.2 27.6 18.4 C28.2 13.4 26.2 7.8 21.8 6 C19.8 5.2 18.4 6.6 19.4 8.2" fill="none" stroke="${k.sc}" stroke-width="${k.o ? k.t : 3.2}" />
        ${k.o ? '' : `<path d="M17.2 25.6 C21.8 27 26.8 24.2 27.6 18.4 C28.2 13.4 26.2 7.8 21.8 6" fill="none" stroke="${k.fill(c.primary)}" stroke-width="1.8" />`}
        <!-- Stinger barb -->
        <path d="M21.4 6.2 C19.6 5.2 17.4 6.2 17.2 8.2 C18.8 7.8 20.2 7.4 21.4 6.2 Z" fill="${k.dark('#451A03')}" ${k.st} stroke-width="0.8" />
        <!-- Segmented Body -->
        <ellipse cx="16" cy="20.8" rx="3.4" ry="5.6" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M13.2 18.6 H18.8 M12.8 21.2 H19.2 M13.4 23.8 H18.6" fill="none" stroke="${k.s ? '#FFFFFF' : k.sc}" stroke-width="0.85" />
        <!-- Pincers -->
        <path d="M13.6 16.4 C11 13.6 9.8 11.4 9.8 8.8" fill="none" stroke="${k.sc}" stroke-width="2" />
        <path d="M18.4 16.4 C20.4 13.6 21.2 11.6 20.6 9.4" fill="none" stroke="${k.sc}" stroke-width="2" />
        <path d="M9.6 9.8 C6.8 8.6 6.4 5 8.8 3.6 C9.6 5.4 9.6 6.8 10.4 7 C11.2 6 11.2 4.6 10.6 3.2 C13 4.2 12.8 8 10.4 9.6 Z" fill="${k.alt('#F59E0B')}" ${k.st} />
        <path d="M20.4 10 C18.2 8.6 18.2 5 20.4 3.8 C21 5.2 21 6.4 21.6 6.6 C22.2 5.8 22.4 4.6 21.8 3.4 C24 4.4 23.8 8.2 21.4 9.8 Z" fill="${k.alt('#F59E0B')}" ${k.st} />
        <circle cx="14.8" cy="16.4" r="0.7" fill="${k.eye}" />
        <circle cx="17.2" cy="16.4" r="0.7" fill="${k.eye}" />
      </g>`;
    },
  },

  // 4. Turkey (U+1F983)
  {
    id: 'turkey',
    char: '🦃',
    name: 'Turkey',
    unicodeHex: 'U+1F983',
    category: 'objects-places',
    tags: ['turkey', 'thanksgiving', 'bird', 'gobble', 'feathers', 'autumn', 'poultry', '🦃'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#78350F', fillSecondary: '#EA580C', stroke: '#451A03' });
      const fanD = 'M4.4 19.6 C2.6 14 5.2 7.2 10.8 4.8 C15.2 3 21.2 4.4 24.4 9.2 C26.6 12.4 27 16.4 25.8 20 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Fan Tail Feathers -->
        <path d="${fanD}" fill="${k.alt('#EA580C')}" ${k.st} />
        <path d="M7.6 17.6 L6.2 8.8 M11.4 15.8 L11.4 5.4 M15.6 15.2 L17.6 5.2 M19.2 16.2 L23.2 8.8" fill="none" stroke="${k.s ? '#FFFFFF' : k.o ? c.stroke : '#FACC15'}" stroke-width="1.2" />
        <!-- Legs -->
        <path d="M15 24.2 V28.4 M14.8 28.4 L12.4 29 M14.8 28.4 L16.4 29.2 M19.6 24.2 V28.4 M19.6 28.4 L17.6 29 M19.6 28.4 L21.4 29" fill="none" stroke="${k.o || k.s ? k.sc : '#F59E0B'}" stroke-width="1.6" />
        <!-- Plump Body -->
        <ellipse cx="17.2" cy="19.6" rx="7.6" ry="5.6" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Wing -->
        <path d="M15.4 16.4 C19.8 16.4 22.8 18.6 22.4 21.6 C19.4 23 15.6 21.6 14.4 18.8 Z" fill="${k.alt('#B45309')}" ${k.st} />
        <!-- Neck & Head -->
        <path d="M12.2 18.8 C10.6 16.8 10 13.4 11 10.6 C11.8 8.4 14.6 8.4 15.4 10.6 C16 12.6 15 15.6 15.4 18.4" fill="${k.alt('#60A5FA')}" ${k.st} />
        <!-- Red Wattle & Snood -->
        <path d="M10.8 11.4 C8.8 11.8 8.6 14.6 10.2 15.4 C11.4 14.8 11.6 13 11.2 11.8 Z" fill="${k.alt('#EF4444')}" ${k.ast} />
        <!-- Beak -->
        <path d="M10.4 11.2 L7.4 12.4 L10.6 13.4 Z" fill="${k.alt('#FACC15')}" ${k.st} stroke-width="0.9" />
        ${dot(12.8, 11, 0.9)}
      </g>`;
    },
  },

  // 5. Unicorn (U+1F984)
  {
    id: 'unicorn',
    char: '🦄',
    name: 'Unicorn',
    unicodeHex: 'U+1F984',
    category: 'objects-places',
    tags: ['unicorn', 'magic', 'fantasy', 'horn', 'rainbow', 'horse', 'mythical', '🦄'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#F472B6', stroke: '#94A3B8' });
      const headD = 'M15.8 9.2 C20.4 9.2 24.4 12.2 25.2 17.8 L22.6 26.8 H13.8 L11.4 22.8 L7.4 22.4 C5.4 22 4.6 19.8 6 18 L11.2 12 C12.4 10.4 14 9.2 15.8 9.2 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Colorful Flowing Mane behind/side -->
        <path d="M19.8 10.4 C24.6 11.2 27.6 15 26.6 20.2 C25.4 19.6 24.4 19.8 23.6 20.8 C25.4 21.8 25.6 24.4 24 26.2 L20.8 24.8 Z" fill="${k.alt('#A855F7')}" ${k.st} />
        <!-- Horn (Spiral Gold) -->
        <path d="M11.6 11.4 L6.4 3.4 L14.4 9.6 Z" fill="${k.alt('#FACC15')}" ${k.st} />
        ${k.o ? '' : `<path d="M9.6 8.2 L11.8 7.2 M8 5.8 L9.8 5" fill="none" stroke="${k.sc}" stroke-width="0.8" />`}
        <!-- Ear -->
        <path d="M15.2 9.4 L17.6 5.4 L18.8 10 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Head -->
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Pink Forelock & Cheek/Muzzle -->
        <path d="M12.4 10.8 C14.6 9 18 9.4 19.4 12 C17 12.2 14.6 11.8 12.4 10.8 Z" fill="${k.alt('#F472B6')}" ${k.ast} />
        <path d="M7.4 22.4 C5.4 22 4.6 19.8 6 18 L9 18.6 C9.8 20.2 9.2 22 7.4 22.4 Z" fill="${k.alt('#FBCFE8')}" stroke="none" />
        <circle cx="7.4" cy="19.6" r="0.65" fill="${k.eye}" />
        ${dot(13.8, 15.4, 1.2)}
      </g>`;
    },
  },

  // 6. Eagle (U+1F985)
  {
    id: 'eagle',
    char: '🦅',
    name: 'Eagle',
    unicodeHex: 'U+1F985',
    category: 'objects-places',
    tags: ['eagle', 'bald eagle', 'bird', 'raptor', 'wings', 'freedom', 'fly', 'predator', '🦅'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#78350F', fillSecondary: '#F8FAFC', stroke: '#451A03' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Broad Outstretched Wings -->
        <path d="M15.4 13.4 C11 7.4 5.2 4.2 2.2 5.4 C3.2 8.2 4.8 10 6.2 10.8 C3.8 11 3 12.8 4.4 14.6 C6.2 14.6 7.4 14.8 8.4 15.6 C6.6 16.4 6.6 18.2 8.2 19.2 L15 17.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M17.4 13.4 C21.8 7.4 27.6 4.2 30.2 5.4 C29.2 8.2 27.6 10 26.2 10.8 C28.6 11 29.4 12.8 28 14.6 C26.2 14.6 25 14.8 24 15.6 C25.8 16.4 25.8 18.2 24.2 19.2 L17.6 17.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Tail -->
        <path d="M13.6 21.8 L12 27.8 L16 28.6 L20 27.8 L18.4 21.8 Z" fill="${k.alt('#F8FAFC')}" ${k.st} />
        <!-- Talons -->
        <path d="M13.6 22.8 L12 26.2 M18.4 22.8 L20 26.2" fill="none" stroke="${k.o || k.s ? k.sc : '#F59E0B'}" stroke-width="1.6" />
        <!-- Body -->
        <ellipse cx="16" cy="18.2" rx="4.2" ry="5.6" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- White Head -->
        <path d="M12.6 12.8 C12.4 9.2 14.6 7.6 17 7.8 C19.2 8 20 10.4 19.2 12.8 Z" fill="${k.alt('#FFFFFF')}" ${k.st} />
        <!-- Hooked Yellow Beak -->
        <path d="M12.8 10 C10.4 9.8 9.2 11 9.6 12.6 C10.6 11.8 11.6 11.8 12.8 11.8 Z" fill="${k.alt('#FACC15')}" ${k.st} />
        ${dot(14.8, 10.4, 0.85)}
      </g>`;
    },
  },

  // 7. Duck (U+1F986)
  {
    id: 'duck',
    char: '🦆',
    name: 'Duck',
    unicodeHex: 'U+1F986',
    category: 'objects-places',
    tags: ['duck', 'mallard', 'bird', 'quack', 'pond', 'waterfowl', '🦆'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#94A3B8', fillSecondary: '#16A34A', stroke: '#475569' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Orange Legs -->
        <path d="M14.4 23.6 V27.8 L11.8 28.4 M18.8 23.6 V27.8 L16.2 28.4" fill="none" stroke="${k.o || k.s ? k.sc : '#F97316'}" stroke-width="1.6" />
        <!-- Body -->
        <path d="M9.6 17.6 C9.6 14.8 13 14.4 17.6 14.8 C22.2 15.2 26.2 15.6 28.6 13.8 C27.8 17.8 25.4 22.8 18.8 23.8 C12.8 24.4 9.6 21.4 9.6 17.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Wing -->
        <path d="M14.4 16.4 C19.2 16 22.8 17.6 23.8 19.6 C20.6 21.4 15.8 21 13.8 18.6 Z" fill="${k.alt('#78350F')}" ${k.st} />
        <!-- Neck Ring & Green Mallard Head -->
        <path d="M9.8 16 C9.6 13.2 9.4 10.6 9.8 8.6 C10.4 6.2 13.8 6 14.8 8.2 C15.6 10.2 14 13.4 13.8 16 Z" fill="${k.alt('#16A34A')}" ${k.st} />
        <path d="M9.8 15.2 H14" fill="none" stroke="${k.s ? '#FFFFFF' : '#FFFFFF'}" stroke-width="1.3" />
        <!-- Flat Yellow Bill -->
        <path d="M10 9.6 C7.4 9.4 4.8 10.4 4.8 11.8 C4.8 12.6 7.8 12.6 10.2 11.8 Z" fill="${k.alt('#FACC15')}" ${k.st} />
        ${dot(11.6, 9, 0.85)}
      </g>`;
    },
  },

  // 8. Bat (U+1F987)
  {
    id: 'bat',
    char: '🦇',
    name: 'Bat',
    unicodeHex: 'U+1F987',
    category: 'objects-places',
    tags: ['bat', 'vampire', 'halloween', 'night', 'wings', 'cave', 'spooky', '🦇'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#475569', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const wingsD = 'M16 14.8 C11.4 10.6 5.8 9.2 2 11.6 C3.4 14.4 3.4 17 2.4 19.4 C5.4 18.4 7.8 19 9 21.2 C10.8 19.6 12.6 20 13.6 21.8 L16 20.2 L18.4 21.8 C19.4 20 21.2 19.6 23 21.2 C24.2 19 26.6 18.4 29.6 19.4 C28.6 17 28.6 14.4 30 11.6 C26.2 9.2 20.6 10.6 16 14.8 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Scalloped Wings -->
        <path d="${wingsD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Feet -->
        <path d="M14.4 22.8 L13.8 25.4 M17.6 22.8 L18.2 25.4" fill="none" stroke="${k.sc}" stroke-width="1.3" />
        <!-- Torso -->
        <ellipse cx="16" cy="18.8" rx="3.4" ry="4.4" fill="${k.alt('#334155')}" ${k.st} />
        <!-- Pointy Ears & Head -->
        <path d="M12.6 13.2 L11.4 8.2 L14.6 10.8 C15.6 10.4 16.4 10.4 17.4 10.8 L20.6 8.2 L19.4 13.2 C19.8 15 18.4 16.8 16 16.8 C13.6 16.8 12.2 15 12.6 13.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Glowing Eyes & Fangs -->
        <circle cx="14.4" cy="13.4" r="0.85" fill="${k.o ? c.stroke : '#FEF08A'}" />
        <circle cx="17.6" cy="13.4" r="0.85" fill="${k.o ? c.stroke : '#FEF08A'}" />
        <path d="M14.4 15.4 L14.8 16.6 L15.4 15.6 M17.6 15.4 L17.2 16.6 L16.6 15.6" fill="none" stroke="${k.s || !k.o ? '#FFFFFF' : c.stroke}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 9. Shark (U+1F988)
  {
    id: 'shark',
    char: '🦈',
    name: 'Shark',
    unicodeHex: 'U+1F988',
    category: 'objects-places',
    tags: ['shark', 'great white', 'ocean', 'jaws', 'fin', 'predator', 'fish', 'sea', '🦈'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#64748B', fillSecondary: '#E2E8F0', stroke: '#334155' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Dorsal & Tail Fins -->
        <path d="M13.6 12.2 C14.4 8.2 16.6 5.6 18.8 5.2 C18 8.4 18.4 10.6 19.2 12.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M23.8 16.4 L29.4 11.4 C28.2 14.8 27.6 16.8 27.6 18.4 L29.4 23.6 L23.8 19.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Torpedo Body -->
        <path d="M2.6 17.8 C5.6 12.8 13.4 11.4 20.6 14 C23.2 15 24.8 16.4 25.4 17.8 C23.8 20.2 19.6 22 14 22 C8.4 22 4.4 20.4 2.6 17.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- White Underbelly -->
        <path d="M4.2 18.6 C7.4 21 17 21.8 23.4 18.6 C19.6 21.2 10.6 22.4 4.2 18.6 Z" fill="${k.cut('#F8FAFC')}" stroke="none" />
        <!-- Pectoral Fin -->
        <path d="M12.6 19.4 C13.6 22.8 15.8 25 18 25.6 C16.8 22.6 16.2 20.6 15.6 19.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Gill Slits & Toothy Mouth -->
        <path d="M12.4 15.4 V17.6 M13.8 15.4 V17.6 M15.2 15.4 V17.6" fill="none" stroke="${k.s ? '#FFFFFF' : k.sc}" stroke-width="0.9" />
        <path d="M4.8 18.4 L9.2 18.8 L6.2 19.8" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        ${dot(8.2, 15.6, 0.9)}
      </g>`;
    },
  },

  // 10. Owl (U+1F989)
  {
    id: 'owl',
    char: '🦉',
    name: 'Owl',
    unicodeHex: 'U+1F989',
    category: 'objects-places',
    tags: ['owl', 'bird', 'wise', 'hoot', 'night', 'feathers', 'nocturnal', '🦉'],
    renderContent: (opts) => {
      const { c, k, badge, hl } = prep(opts, { fillPrimary: '#92400E', fillSecondary: '#FDE68A', stroke: '#451A03' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Claws -->
        <path d="M12.8 26.8 L12 29 M12.8 26.8 L13.8 29 M19.2 26.8 L18.2 29 M19.2 26.8 L20 29" fill="none" stroke="${k.o || k.s ? k.sc : '#F59E0B'}" stroke-width="1.5" />
        <!-- Plump Body & Ear Tufts -->
        <path d="M8.8 5.4 L11.8 8 C14.4 7.4 17.6 7.4 20.2 8 L23.2 5.4 L22.6 10.6 C24.4 13.4 24.6 18.4 22.8 22.8 C21.2 26 18.8 27.2 16 27.2 C13.2 27.2 10.8 26 9.2 22.8 C7.4 18.4 7.6 13.4 9.4 10.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Wings -->
        ${pair(`<path d="M8.4 15.4 C7.2 18.4 8 22.4 10.4 24 C11 21 11 18 10.2 15.8 Z" fill="${k.alt('#78350F')}" ${k.st} />`)}
        <!-- Cream Belly with Feathers -->
        <ellipse cx="16" cy="21" rx="4.4" ry="4.6" fill="${k.cut('#FEF3C7')}" ${k.ast} />
        <path d="M14.2 19.8 C14.8 20.4 15.4 20.4 16 19.8 C16.6 20.4 17.2 20.4 17.8 19.8 M13.8 22.2 C14.6 22.8 15.4 22.8 16 22.2 C16.6 22.8 17.4 22.8 18.2 22.2" fill="none" stroke="${k.s ? c.primary : k.sc}" stroke-width="0.9" />
        <!-- Large Facial Discs & Eyes -->
        ${pair(`<circle cx="12.6" cy="12.4" r="3" fill="${k.cut('#FDE68A')}" ${k.o ? k.st : `stroke="${k.sc}" stroke-width="0.8"`} />
        <circle cx="12.6" cy="12.4" r="1.4" fill="${k.o ? c.stroke : k.s ? c.primary : '#0F172A'}" />
        <circle cx="13.1" cy="11.9" r="0.45" fill="${hl}" />`)}
        <!-- Orange Beak -->
        <path d="M15 13.2 H17 L16 15.6 Z" fill="${k.alt('#F59E0B')}" ${k.st} stroke-width="0.8" />
      </g>`;
    },
  },

  // 11. Fox (U+1F98A)
  {
    id: 'fox',
    char: '🦊',
    name: 'Fox',
    unicodeHex: 'U+1F98A',
    category: 'objects-places',
    tags: ['fox', 'fox face', 'orange', 'cunning', 'woodland', 'wildlife', 'animal', '🦊'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#EA580C', fillSecondary: '#F8FAFC', stroke: '#9A3412' });
      const headD = 'M16 7.4 C21.2 7.4 26.8 11.6 27.6 17.6 C25.2 21.8 20.4 26.4 16 27 C11.6 26.4 6.8 21.8 4.4 17.6 C5.2 11.6 10.8 7.4 16 7.4 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Pointy Ears -->
        ${pair(`<path d="M6.2 13.4 L5.4 4.2 L12.4 8.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M7.2 11.4 L6.8 6.4 L10.8 9 Z" fill="${k.dark('#1E293B')}" stroke="none" />`)}
        <!-- Face -->
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- White Cheeks -->
        ${pair(`<path d="M4.8 17.8 C7.8 17.8 12.4 20.4 15.4 26.4 C11.2 25.8 7 21.8 4.8 17.8 Z" fill="${k.cut('#FFFFFF')}" ${k.ast} />`)}
        <!-- Eyes & Black Nose -->
        ${dot(11.4, 15.4, 1.35)}
        ${dot(20.6, 15.4, 1.35)}
        <ellipse cx="16" cy="24.2" rx="2.1" ry="1.5" fill="${k.dark('#0F172A')}" />
      </g>`;
    },
  },

  // 12. Butterfly (U+1F98B)
  {
    id: 'butterfly',
    char: '🦋',
    name: 'Butterfly',
    unicodeHex: 'U+1F98B',
    category: 'objects-places',
    tags: ['butterfly', 'monarch', 'blue morpho', 'wings', 'insect', 'nature', 'spring', '🦋'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#38BDF8', fillSecondary: '#1E293B', stroke: '#0369A1' });
      const wings = pair(`
        <path d="M15.2 14.6 C12.4 7.8 5.2 4.2 3.2 8 C1.6 11.2 4.8 15.8 10.2 17 C6.4 17.8 4.8 21.8 7 24.8 C9 27.6 13.4 25.2 15.2 20.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="8.6" cy="11.4" r="2.2" fill="${k.cut('#BAE6FD')}" stroke="none" />
        <circle cx="10.2" cy="21.4" r="1.5" fill="${k.cut('#BAE6FD')}" stroke="none" />
      `);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${wings}
        <!-- Antennae -->
        ${pair(`<path d="M15 9.8 C13.8 6.4 11.4 4.8 9.8 5" fill="none" stroke="${k.sc}" stroke-width="1.2" />
        <circle cx="9.6" cy="5" r="0.8" fill="${k.sc}" />`)}
        <!-- Body -->
        <ellipse cx="16" cy="17.6" rx="1.6" ry="7.4" fill="${k.dark('#1E293B')}" ${k.st} stroke-width="0.9" />
        <circle cx="16" cy="10.2" r="1.8" fill="${k.dark('#1E293B')}" ${k.st} stroke-width="0.9" />
      </g>`;
    },
  },

  // 13. Deer (U+1F98C)
  {
    id: 'deer',
    char: '🦌',
    name: 'Deer',
    unicodeHex: 'U+1F98C',
    category: 'objects-places',
    tags: ['deer', 'stag', 'buck', 'antlers', 'reindeer', 'forest', 'wildlife', '🦌'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#D97706', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const antlers = pair(`
        <path d="M13 11.2 C11.4 8 8.4 6.4 6.2 3 M9.4 7.6 L9.8 3.6 M11.4 9.2 L13.4 5.2 M7.8 5.4 L4.4 6.2" fill="none" stroke="${k.o || k.s ? k.sc : '#78350F'}" stroke-width="${k.o ? k.t : 1.7}" />
      `);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${antlers}
        <!-- Ears -->
        ${pair(`<path d="M11 13.6 C8.4 11.6 6 12.2 5.4 14.6 C7 16 9.4 15.8 11.2 14.8 Z" fill="${k.fill(c.primary)}" ${k.st} />`)}
        <!-- Neck & Face -->
        <path d="M12.4 21.8 L11.4 29 H20.6 L19.6 21.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M16 10.6 C19.8 10.6 21.6 13.4 21 17.2 L19.2 23.4 C18.4 25.4 13.6 25.4 12.8 23.4 L11 17.2 C10.4 13.4 12.2 10.6 16 10.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="16" cy="22.4" rx="2.6" ry="2" fill="${k.cut('#FEF3C7')}" stroke="none" />
        <ellipse cx="16" cy="22.8" rx="1.6" ry="1.1" fill="${k.dark('#0F172A')}" />
        ${dot(13.2, 16.4, 1.1)}
        ${dot(18.8, 16.4, 1.1)}
      </g>`;
    },
  },

  // 14. Gorilla (U+1F98D)
  {
    id: 'gorilla',
    char: '🦍',
    name: 'Gorilla',
    unicodeHex: 'U+1F98D',
    category: 'objects-places',
    tags: ['gorilla', 'ape', 'silverback', 'jungle', 'primate', 'king kong', 'animal', '🦍'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#334155', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back & Silverback Saddle -->
        <path d="M9.4 14 C12.4 9.6 19.6 8.4 24.4 11.4 C28 13.8 28.6 18.8 26.8 22.8 L26.4 28.2 H22.4 L22 22.4 H14.8 L13.4 28.2 H9.2 L9.4 22.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M14.4 11 C18.6 9.8 23.4 11.2 26 14.8 C23.2 16 18.6 16.2 14.4 14.2 Z" fill="${k.alt('#94A3B8')}" stroke="none" />
        <!-- Thick Knuckle-walking Front Arm -->
        <path d="M9.4 14.4 C6.8 16.6 6 21.8 6.4 28.2 H10.6 L11.4 20.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Gorilla Head -->
        <circle cx="9.6" cy="11.4" r="5" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M6.4 11.4 C6.4 9.6 8.6 9.6 10.8 11.2 C12 12.2 11.8 14.8 9.2 15.2 C7 15.4 5.8 13.6 6.4 11.4 Z" fill="${k.alt('#64748B')}" stroke="none" />
        ${dot(8.2, 10.6, 0.85)}
        <path d="M7.2 14 C8.2 14.4 9.4 14.4 10.4 14" fill="none" stroke="${k.ln}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 15. Lizard (U+1F98E)
  {
    id: 'lizard',
    char: '🦎',
    name: 'Lizard',
    unicodeHex: 'U+1F98E',
    category: 'objects-places',
    tags: ['lizard', 'gecko', 'reptile', 'iguana', 'chameleon', 'green', 'animal', '🦎'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#22C55E', fillSecondary: '#BBF7D0', stroke: '#15803D' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Curving Tail -->
        ${k.tube('M18.6 19.6 C24.6 22.8 29.8 19.4 27.8 14.8 C26.8 12.6 24.4 13.4 25.4 15.4', 2.4, c.primary)}
        <!-- Legs -->
        <path d="M10.4 14 L7.2 10.8 L5.6 12 M11.6 17.6 L8.6 20.8 L7 20 M17.4 18.2 L16.2 22.8 L14.4 22.6 M19 16.4 L22.2 19.8 L23.8 18.6" fill="none" stroke="${k.sc}" stroke-width="1.8" />
        <!-- Slender Body & Head -->
        <path d="M7.4 7.6 C9.6 5.6 13.6 6.8 14 9.8 L19.6 16.8 C20.6 18 19.6 20.4 17.8 20.6 C16 20.8 14.2 19.4 12.8 17.4 L9.2 12 C7.2 10.6 6.2 8.8 7.4 7.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="13.4" cy="14" r="1" fill="${k.cut('#BBF7D0')}" stroke="none" />
        <circle cx="15.8" cy="16.8" r="1.1" fill="${k.cut('#BBF7D0')}" stroke="none" />
        ${dot(9.4, 8.8, 0.9)}
      </g>`;
    },
  },

  // 16. Rhinoceros (U+1F98F)
  {
    id: 'rhinoceros',
    char: '🦏',
    name: 'Rhinoceros',
    unicodeHex: 'U+1F98F',
    category: 'objects-places',
    tags: ['rhinoceros', 'rhino', 'horn', 'safari', 'africa', 'wildlife', 'animal', '🦏'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#94A3B8', fillSecondary: '#CBD5E1', stroke: '#475569' });
      const legs = [11, 14.2, 20.6, 23.8].map((x) =>
        `<rect x="${x}" y="19.8" width="2.8" height="7.6" rx="1" fill="${k.fill(c.primary)}" ${k.st} />`
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Horns -->
        <path d="M4.2 17.6 C3.2 13.4 4.2 9.4 6.6 8.2 C6.4 11.4 7 14 8.2 15.8 Z" fill="${k.cut('#F1F5F9')}" ${k.st} />
        <path d="M7.6 15.6 C7.6 13.4 8.2 11.6 9.6 11 C9.6 12.6 9.8 13.8 10.4 14.8 Z" fill="${k.cut('#F1F5F9')}" ${k.st} />
        ${legs}
        <!-- Heavy Armored Body -->
        <path d="M10.4 12.6 C13 10.6 22 10.4 25.8 12.8 C28.2 14.4 28.6 18.8 27 21.4 H10.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Fold lines -->
        <path d="M15.4 12 C14.8 15.4 15.2 19 16 21 M22.4 12.2 C21.8 15.4 22.2 19 23 21" fill="none" stroke="${k.s ? '#FFFFFF' : k.sc}" stroke-width="0.9" />
        <!-- Head & Ear -->
        <path d="M11 10.8 L12.4 7.6 L13.8 10.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M12.4 12.2 C10 12.4 7.2 14.4 4.4 17.4 C3.6 18.6 4.4 20.6 6.4 20.6 L12.4 20.2 C14 18.4 14 14.6 12.4 12.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        ${dot(9.4, 15.4, 0.9)}
      </g>`;
    },
  },

  // 17. Shrimp (U+1F990)
  {
    id: 'shrimp',
    char: '🦐',
    name: 'Shrimp',
    unicodeHex: 'U+1F990',
    category: 'objects-places',
    tags: ['shrimp', 'prawn', 'seafood', 'shellfish', 'ocean', 'crustacean', '🦐'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#FB7185', fillSecondary: '#FDBA74', stroke: '#E11D48' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Whisker Antennae -->
        <path d="M9.6 10.4 C15.4 6 24.4 6 28.2 9.4 M9.4 11.4 C15 8.8 22.8 9.2 26.8 11.8" fill="none" stroke="${k.sc}" stroke-width="1" />
        <!-- Tiny Legs -->
        <path d="M12.4 15.6 L14.4 17.6 M13 18.2 L15.4 19.6 M14.8 20.6 L17.2 21.4" fill="none" stroke="${k.sc}" stroke-width="1.1" />
        <!-- Tail Fan -->
        <path d="M22.4 23.6 L27 25.4 L25.4 27.6 L21.8 25.4 Z" fill="${k.alt('#FDBA74')}" ${k.st} />
        <!-- Curved Segmented Body -->
        <path d="M9.4 10 C6 11.6 5.2 15.4 8.6 16.4 C11.4 17.4 14.4 19.2 15.8 22.6 C17 25.2 20.4 26.2 22.8 24.6 C24 23.6 22.8 21.2 20.4 20.8 C19.4 17 17.4 13.4 14.2 11.2 C12.4 10 10.8 9.6 9.4 10 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Shell Segment Lines -->
        <path d="M13 11.6 C11.6 13.2 11.2 14.8 11.6 16.4 M16.2 13.6 C14.6 15 14 16.8 14.4 18.8 M19 16.4 C17.4 17.4 16.6 19.2 17 21.4" fill="none" stroke="${k.s ? '#FFFFFF' : k.sc}" stroke-width="0.9" />
        ${dot(9.4, 12.8, 0.85)}
      </g>`;
    },
  },

  // 18. Squid (U+1F991)
  {
    id: 'squid',
    char: '🦑',
    name: 'Squid',
    unicodeHex: 'U+1F991',
    category: 'objects-places',
    tags: ['squid', 'calamari', 'ocean', 'tentacles', 'sea', 'cephalopod', '🦑'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#FB923C', fillSecondary: '#FED7AA', stroke: '#C2410C' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Trailing Tentacles -->
        <path d="M12.4 19.2 C10.4 22.4 9.2 25.6 10.8 28.4 M14.6 19.6 C13.6 23.2 13.6 26.4 14.6 28.8 M17.4 19.6 C18.4 23.2 18.4 26.4 17.4 28.8 M19.6 19.2 C21.6 22.4 22.8 25.6 21.2 28.4" fill="none" stroke="${k.sc}" stroke-width="${k.o ? k.t : 2.1}" />
        <!-- Mantle Fins -->
        <path d="M11 8.4 L16 3.2 L21 8.4 L16 11.4 Z" fill="${k.alt('#F97316')}" ${k.st} />
        <!-- Torpedo Mantle & Head -->
        <path d="M16 4.4 C19 4.4 20.6 9.8 20.2 16.6 C20 18.8 18.6 20 16 20 C13.4 20 12 18.8 11.8 16.6 C11.4 9.8 13 4.4 16 4.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="16" cy="11.4" rx="2.2" ry="3.6" fill="${k.cut('#FED7AA')}" stroke="none" />
        ${dot(13.6, 17, 1)}
        ${dot(18.4, 17, 1)}
      </g>`;
    },
  },

  // 19. Giraffe (U+1F992)
  {
    id: 'giraffe',
    char: '🦒',
    name: 'Giraffe',
    unicodeHex: 'U+1F992',
    category: 'objects-places',
    tags: ['giraffe', 'tall', 'spots', 'safari', 'neck', 'africa', 'animal', '🦒'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#FACC15', fillSecondary: '#B45309', stroke: '#A16207' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Thin Legs -->
        <path d="M14.4 21 V29 M17.2 21.6 V29 M22.6 21.6 V29 M25.2 21 V29" fill="none" stroke="${k.sc}" stroke-width="${k.o ? k.t : 2.1}" />
        <!-- Tail -->
        <path d="M26 17.6 C28.2 18.6 28.6 21.8 27.4 24.4" fill="none" stroke="${k.sc}" stroke-width="1.3" />
        <!-- Body & Very Long Neck -->
        <path d="M11.8 6.4 L14.4 6.4 L17.6 16.6 L23.8 16.2 C25.8 16.2 26.8 17.6 26.6 19.8 C26.4 21.6 24.6 22.4 21.6 22.4 H15.6 C13.4 22.4 12.6 20.4 12.6 17.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Ossicones & Ear -->
        <path d="M12.4 5.2 L12.4 2.6 M14.2 5.4 L14.6 2.8" fill="none" stroke="${k.sc}" stroke-width="1.2" />
        <circle cx="12.4" cy="2.6" r="0.8" fill="${k.dark('#92400E')}" />
        <circle cx="14.6" cy="2.8" r="0.8" fill="${k.dark('#92400E')}" />
        <path d="M14.4 6 L16.8 5 L15.4 7.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Head -->
        <path d="M14 5.6 C11.4 4.8 8.4 6.2 7.2 7.8 C6.4 8.8 7.2 10.2 8.8 10 C11 9.8 13.4 9.2 14.6 7.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Giraffe Spots -->
        <circle cx="14.6" cy="11.6" r="1.2" fill="${k.dark('#B45309')}" />
        <circle cx="15.8" cy="15.2" r="1.3" fill="${k.dark('#B45309')}" />
        <circle cx="19.6" cy="19" r="1.5" fill="${k.dark('#B45309')}" />
        <circle cx="23.4" cy="18.8" r="1.3" fill="${k.dark('#B45309')}" />
        ${dot(11.6, 6.8, 0.75)}
      </g>`;
    },
  },

  // 20. Zebra (U+1F993)
  {
    id: 'zebra',
    char: '🦓',
    name: 'Zebra',
    unicodeHex: 'U+1F993',
    category: 'objects-places',
    tags: ['zebra', 'stripes', 'safari', 'horse', 'black and white', 'africa', 'animal', '🦓'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#1E293B', stroke: '#334155' });
      const legs = [11.2, 14.2, 21.4, 24.4].map((x) =>
        `<rect x="${x}" y="19.8" width="2.2" height="8.2" rx="0.9" fill="${k.fill(c.primary)}" ${k.st} />`
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Spiky Mane -->
        <path d="M11.6 7.6 L14.4 5.4 L16 8.4 L18.4 12 L15 14.8 Z" fill="${k.dark('#1E293B')}" ${k.st} />
        ${legs}
        <!-- Tail -->
        <path d="M26.2 15.6 C28.4 16.4 29 19.6 28 22.6" fill="none" stroke="${k.sc}" stroke-width="1.5" />
        <!-- Body -->
        <path d="M10.4 12.6 L12.4 7.8 L15.6 13.8 L23.6 13.6 C26 13.6 27 15.6 26.8 18.2 C26.6 20.4 24.8 21.4 22 21.4 H12.6 C10.4 21.4 9.6 18.6 10.4 12.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Zebra Stripes -->
        <path d="M13 14.6 L14.4 19.2 M16.4 14 L16.8 20.4 M19.4 14 L19.8 20.4 M22.4 14.2 L23.4 20" fill="none" stroke="${k.dark('#1E293B')}" stroke-width="1.6" />
        <!-- Head & Ear -->
        <path d="M12.6 7 L14 4 L15.2 7 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M14.2 7.2 C11.4 6.2 7.2 8.2 5.4 10.6 C4.4 12 5.6 13.8 7.6 13.4 L13.8 11.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M9.4 8.4 L10.2 11.4 M11.6 7.8 L12.4 10.8" fill="none" stroke="${k.dark('#1E293B')}" stroke-width="1.3" />
        ${dot(10.6, 8.8, 0.8)}
      </g>`;
    },
  },

  // 21. Hedgehog (U+1F994)
  {
    id: 'hedgehog',
    char: '🦔',
    name: 'Hedgehog',
    unicodeHex: 'U+1F994',
    category: 'objects-places',
    tags: ['hedgehog', 'spiky', 'porcupine', 'cute', 'woodland', 'animal', '🦔'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#92400E', fillSecondary: '#FDE68A', stroke: '#451A03' });
      const spinesD = 'M11.8 12.2 L12.4 8.2 L15.4 10.2 L17.6 6.8 L19.8 9.8 L23 7.6 L23.8 11.2 L27.4 10.6 L26.4 14.2 L29.4 15.6 L27 18.6 L28.8 21.6 L25 22.8 L24.6 25.4 L11.4 25.4 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Little Feet -->
        <ellipse cx="10.4" cy="25.6" rx="2" ry="1.1" fill="${k.alt('#FDE68A')}" ${k.st} />
        <ellipse cx="19.6" cy="25.6" rx="2" ry="1.1" fill="${k.alt('#FDE68A')}" ${k.st} />
        <!-- Spiky Back Mantle -->
        <path d="${spinesD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Tan Face & Nose -->
        <path d="M12.2 12.4 C9.6 13.4 6.8 16.4 4.2 19.6 C3.4 20.6 4.2 22.4 6.2 23.4 C8.8 24.6 12.6 24.8 14.8 23.6 C16 20.4 15.2 14.8 12.2 12.4 Z" fill="${k.alt('#FDE68A')}" ${k.st} />
        <!-- Round Ear -->
        <circle cx="12.2" cy="14.2" r="2" fill="${k.alt('#FDE68A')}" ${k.st} />
        <circle cx="4.4" cy="20.4" r="1.2" fill="${k.dark('#0F172A')}" />
        ${dot(9.2, 17.6, 1.05)}
      </g>`;
    },
  },

  // 22. Sauropod (U+1F995)
  {
    id: 'sauropod',
    char: '🦕',
    name: 'Sauropod',
    unicodeHex: 'U+1F995',
    category: 'objects-places',
    tags: ['sauropod', 'dinosaur', 'brontosaurus', 'diplodocus', 'dino', 'jurassic', '🦕'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#38BDF8', fillSecondary: '#BAE6FD', stroke: '#0369A1' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Neck, Body, Tail & 4 Legs -->
        <path d="M5.6 8.4 C4.6 7 6 5.2 8.2 5.4 C10.4 5.6 11.4 7.6 11 10.6 L11.4 16.6 C14.6 14.4 20.4 14.8 23.4 18 C25.6 20.4 28 21.8 30 22 C27.2 23.8 23.6 23.8 21.6 22.4 L21.4 27.6 H18.2 V22.4 H13.8 V27.6 H10.6 L10.2 20.4 C9 18.6 8.6 15.4 8.6 11.2 C7.2 10.6 6.2 9.8 5.6 8.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Belly Shading & Spots -->
        <circle cx="16.2" cy="18.2" r="1.3" fill="${k.cut('#BAE6FD')}" stroke="none" />
        <circle cx="19.6" cy="19.2" r="1" fill="${k.cut('#BAE6FD')}" stroke="none" />
        ${dot(7.8, 7.2, 0.85)}
        <path d="M5.4 8.6 C6.6 9.2 7.8 9.2 8.6 8.8" fill="none" stroke="${k.ln}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 23. T-Rex (U+1F996)
  {
    id: 't-rex',
    char: '🦖',
    name: 'T-Rex',
    unicodeHex: 'U+1F996',
    category: 'objects-places',
    tags: ['t-rex', 'tyrannosaurus', 'dinosaur', 'dino', 'jurassic', 'teeth', 'reptile', '🦖'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#22C55E', fillSecondary: '#BBF7D0', stroke: '#15803D' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tiny T-Rex Arm -->
        <path d="M12.4 16.2 L8.8 16.6 L8.4 18" fill="none" stroke="${k.sc}" stroke-width="1.6" />
        <!-- Muscular Body, Big Head & Tail -->
        <path d="M6.4 6.4 C9.4 4.8 14.6 5.4 16.2 8.8 C16.6 10.2 16 11.8 15.4 12.8 L19.8 16.8 C22.6 19.2 26.6 20.4 29.6 20 C27.2 22.8 23.2 23.8 19.6 22.8 L18.4 27.6 H14.8 L15.4 22.4 C12.8 22 11.2 19.8 11.4 16.2 L12 12.6 L6.8 12.2 C5.6 12 5.4 10.8 6.8 10.4 L10.2 10.2 L5.8 9.2 C4.8 8.6 5 7 6.4 6.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Back Scales -->
        <path d="M16.2 9.4 L18.2 10 L17.4 12 M18.6 12.6 L20.6 13.4 L19.8 15.2" fill="none" stroke="${k.sc}" stroke-width="1" />
        <!-- Tooth -->
        <path d="M7.6 10.2 L8.2 11.4 L8.8 10.2" fill="none" stroke="${k.s || !k.o ? '#FFFFFF' : c.stroke}" stroke-width="0.7" />
        ${dot(11.4, 7.6, 0.9)}
      </g>`;
    },
  },

  // 24. Cricket (U+1F997)
  {
    id: 'cricket-insect',
    char: '🦗',
    name: 'Cricket',
    unicodeHex: 'U+1F997',
    category: 'objects-places',
    tags: ['cricket', 'grasshopper', 'insect', 'bug', 'chirp', 'nature', '🦗'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#65A30D', fillSecondary: '#BEF264', stroke: '#3F6212' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Antennae -->
        <path d="M7.4 13.6 C4.4 10.4 3.4 7.6 3.6 5.2 M8.4 13.2 C6.4 9.6 6.2 6.8 7 4.4" fill="none" stroke="${k.sc}" stroke-width="0.95" />
        <!-- Front & Middle Legs -->
        <path d="M9.6 18.8 L7.4 22.8 L6 23.6 M13 19.2 L12.4 23.4 L11.4 24.4" fill="none" stroke="${k.sc}" stroke-width="1.3" />
        <!-- Folded Jumping Hind Leg -->
        <path d="M17.4 18.4 L23 11.4 L25.8 24.2 L28.4 24.4" fill="none" stroke="${k.sc}" stroke-width="2" />
        <!-- Abdomen & Wings -->
        <path d="M10.4 15.2 C14.6 14 21.8 15.4 26.8 19.6 C22.8 21.2 16 20.6 11.2 18.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M14.4 15.2 C18.6 14.8 22.6 16.4 25.2 19 C21.8 19 17.6 18 14.4 16.6 Z" fill="${k.alt('#BEF264')}" ${k.ast} />
        <!-- Head -->
        <ellipse cx="9" cy="16" rx="2.6" ry="2.2" fill="${k.fill(c.primary)}" ${k.st} />
        ${dot(8.2, 15.2, 0.85)}
      </g>`;
    },
  },
];
