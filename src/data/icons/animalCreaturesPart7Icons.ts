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
  };
};

const prep = (opts: AnimalOpts, base: { fillPrimary: string; fillSecondary: string; stroke: string }) => {
  const c = resolveColors(opts as any, base) as AnimalColors;
  const k = kit(opts, c);
  const hl = k.o || k.s ? 'none' : '#FFFFFF';
  const dot = (x: number, y: number, r = 1.1) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${k.eye}" /><circle cx="${x + r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.38}" fill="${hl}" />`;
  return { c, k, badge: getBadgeMarkup(opts as any), hl, dot };
};

export const animalCreaturesPart7Icons: WimojiIconDef[] = [
  // 25. Kangaroo (U+1F998)
  {
    id: 'kangaroo',
    char: '🦘',
    name: 'Kangaroo',
    unicodeHex: 'U+1F998',
    category: 'objects-places',
    tags: ['kangaroo', 'australia', 'marsupial', 'joey', 'hop', 'outback', 'animal', '🦘'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#D97706', fillSecondary: '#FDE68A', stroke: '#92400E' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Balancing Tail -->
        ${k.tube('M19.8 22.8 C24.6 25.4 28.4 25.6 29.8 23.8', 2.4, c.primary)}
        <!-- Hind Leg & Large Foot -->
        <path d="M16.8 20.6 C18.8 21.8 18.8 25.4 16.4 26.8 L11.4 27.6 H17.8" fill="none" stroke="${k.sc}" stroke-width="${k.o ? k.t : 2.3}" />
        <!-- Short Front Arms -->
        <path d="M11.6 15.6 L8.2 17.6 L9 19" fill="none" stroke="${k.sc}" stroke-width="1.6" />
        <!-- Upright Body & Pouch -->
        <path d="M10.4 12 C11.4 13.4 12 16 12.2 19 C12.4 23.4 15.2 25.4 18.4 24.4 C21.2 23.4 21.4 19.6 19.6 16.4 C18 13.8 15 12.4 13.2 10.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M12.6 17.6 C14.6 18 16.4 19.8 16.4 22.6 C14.2 22.8 12.8 21 12.6 17.6 Z" fill="${k.cut('#FDE68A')}" stroke="none" />
        <!-- Tall Ears & Head -->
        <path d="M10.8 7.8 L11.8 3.6 L13.4 7.4 Z M13.4 7.8 L15.4 4.2 L15.4 8.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M12.4 7.6 C10.4 7.6 8 8.6 6.8 9.8 C6 10.6 6.8 12 8.4 11.8 C10.6 11.4 12.6 11.2 13.6 9.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="6.8" cy="10.2" r="0.65" fill="${k.dark('#0F172A')}" />
        ${dot(10.4, 8.8, 0.75)}
      </g>`;
    },
  },

  // 26. Llama (U+1F999)
  {
    id: 'llama',
    char: '🦙',
    name: 'Llama',
    unicodeHex: 'U+1F999',
    category: 'objects-places',
    tags: ['llama', 'alpaca', 'peru', 'andes', 'fluffy', 'wool', 'animal', '🦙'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#FEF3C7', fillSecondary: '#F59E0B', stroke: '#92400E' });
      const legs = [11.6, 14.4, 21.2, 24].map((x) =>
        `<rect x="${x}" y="21" width="2.2" height="7" rx="1" fill="${k.fill(c.primary)}" ${k.st} />`
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${legs}
        <!-- Fluffy Tail -->
        <circle cx="26.2" cy="17.2" r="2" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Tall Ears -->
        <path d="M10.4 7.4 L9.8 3.2 L12 6.8 Z M12.6 7.4 L13.8 3.4 L14.4 7.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Woolly Body & Long Neck -->
        <path d="M9.8 8.2 C9.8 6.4 14 6.4 14.4 8.8 L14.8 14.8 L22.6 14.6 C25.4 14.6 26.6 16.4 26.4 19.2 C26.2 21.6 24.4 22.4 21.6 22.4 H13.2 C10.8 22.4 9.8 20.6 9.8 17.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Face Muzzle -->
        <path d="M10 8.6 C7.6 8.4 5.8 9.4 5.8 11 C5.8 12.4 7.6 12.8 10 12.2 Z" fill="${k.alt('#FDE68A')}" ${k.st} />
        <circle cx="6.6" cy="10.4" r="0.65" fill="${k.dark('#0F172A')}" />
        ${dot(10.6, 9, 0.8)}
      </g>`;
    },
  },

  // 27. Peacock (U+1F99A)
  {
    id: 'peacock',
    char: '🦚',
    name: 'Peacock',
    unicodeHex: 'U+1F99A',
    category: 'objects-places',
    tags: ['peacock', 'bird', 'feathers', 'plume', 'colorful', 'proud', '🦚'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#0284C7', fillSecondary: '#22C55E', stroke: '#0F766E' });
      const fanD = 'M5.6 18.6 C3.4 12.8 6.6 6.2 12.8 4.4 C17.6 3 23.4 4.8 26.6 9.6 C28.6 12.8 28.4 16.6 26.8 19.6 Z';
      const eyespots = [
        [8.4, 11.8],
        [12, 8.2],
        [16.8, 6.8],
        [21.6, 8.8],
        [24.4, 13.2],
      ].map(([x, y]) =>
        `<circle cx="${x}" cy="${y}" r="1.8" fill="${k.s ? '#FFFFFF' : k.alt('#FACC15')}" ${k.o ? k.st : 'stroke="none"'} /><circle cx="${x}" cy="${y}" r="0.9" fill="${k.s ? c.primary : '#1D4ED8'}" />`
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Emerald Plume Fan -->
        <path d="${fanD}" fill="${k.alt('#16A34A')}" ${k.st} />
        ${eyespots}
        <!-- Legs -->
        <path d="M14.8 24.4 V28.4 M18.4 24.4 V28.4" fill="none" stroke="${k.o || k.s ? k.sc : '#F59E0B'}" stroke-width="1.5" />
        <!-- Royal Blue Body & Neck -->
        <path d="M12.4 19.8 C12.4 17 15.2 16.6 18.4 17.6 C21 18.4 21.8 21.2 19.6 23.4 C17.8 25 14 24.8 12.4 22.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M12.4 19.4 C11 16.8 10.6 13.2 11.4 10.4 C12 8.4 14.4 8.6 14.8 10.6 C15.2 12.6 14.4 15.4 14.8 18.4" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Crown Crest & Beak -->
        <path d="M12.6 8.4 L11.4 5.8 M13.4 8.4 L13.4 5.4 M14.2 8.6 L15.4 6" fill="none" stroke="${k.sc}" stroke-width="1" />
        <path d="M11.2 10.4 L8.6 11.4 L11.4 12.4 Z" fill="${k.alt('#FACC15')}" ${k.st} stroke-width="0.8" />
        ${dot(12.8, 10.2, 0.8)}
      </g>`;
    },
  },

  // 28. Hippopotamus (U+1F99B)
  {
    id: 'hippopotamus',
    char: '🦛',
    name: 'Hippopotamus',
    unicodeHex: 'U+1F99B',
    category: 'objects-places',
    tags: ['hippopotamus', 'hippo', 'river', 'africa', 'heavy', 'animal', '🦛'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#94A3B8', fillSecondary: '#E2E8F0', stroke: '#475569' });
      const legs = [10, 13.6, 20.4, 24].map((x) =>
        `<rect x="${x}" y="20.4" width="3" height="6.8" rx="1.2" fill="${k.fill(c.primary)}" ${k.st} />`
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${legs}
        <!-- Round Heavy Body -->
        <path d="M10.4 12.4 C13.4 10 21.8 10.2 25.4 13 C28 15 28.4 19.8 26.2 21.8 H10.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Small Ears -->
        <circle cx="11.2" cy="9.6" r="1.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="13.8" cy="9.8" r="1.4" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Head & Huge Rounded Snout -->
        <ellipse cx="11.6" cy="14" rx="4.4" ry="4" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M9.8 14 C6 13.4 3.4 15.2 3.4 17.8 C3.4 20.6 6 21.6 9.8 21.2 C12 20.8 13.2 19 13.2 16.6 Z" fill="${k.alt('#CBD5E1')}" ${k.st} />
        <circle cx="5.4" cy="16.4" r="0.8" fill="${k.dark('#0F172A')}" />
        <circle cx="7.8" cy="16.6" r="0.8" fill="${k.dark('#0F172A')}" />
        <path d="M4.6 19.4 C6.4 20.2 8.4 20 10.2 19.2" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        ${dot(10.6, 12.4, 0.9)}
      </g>`;
    },
  },

  // 29. Parrot (U+1F99C)
  {
    id: 'parrot',
    char: '🦜',
    name: 'Parrot',
    unicodeHex: 'U+1F99C',
    category: 'objects-places',
    tags: ['parrot', 'macaw', 'bird', 'tropical', 'colorful', 'pirate', '🦜'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#EF4444', fillSecondary: '#3B82F6', stroke: '#991B1B' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Tail Feathers -->
        <path d="M18 22.6 L22.2 29.2 L24.6 28.4 L20.4 21 Z" fill="${k.alt('#3B82F6')}" ${k.st} />
        <!-- Perching Feet -->
        <path d="M14.4 23.6 V26.6 M17.6 23.6 V26.6 M11 26.8 H20" fill="none" stroke="${k.sc}" stroke-width="1.5" />
        <!-- Scarlet Body & Head -->
        <path d="M11 9.6 C11 6 15.6 5.4 17.4 8.2 C19.4 11.4 20.4 17.4 19 22 C18 24.4 14 24.4 12.6 21.8 C11.2 19 10.6 14 11 9.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- White Cheek Patch -->
        <ellipse cx="13.4" cy="9.6" rx="1.9" ry="1.6" fill="${k.cut('#FFFFFF')}" stroke="none" />
        <!-- Hooked Curved Beak -->
        <path d="M11.2 8.4 C8 8.2 7.2 10.8 8.4 12.8 C9.4 11.8 10.2 11.6 11.4 11.6 Z" fill="${k.alt('#FACC15')}" ${k.st} />
        <!-- Multi-color Wing -->
        <path d="M15 13.4 C18.6 13.4 20.4 16.6 19.6 20.6 C17 20.6 14.8 18.4 14.4 15.4 Z" fill="${k.alt('#22C55E')}" ${k.st} />
        ${dot(13.2, 9.4, 0.85)}
      </g>`;
    },
  },

  // 30. Raccoon (U+1F99D)
  {
    id: 'raccoon',
    char: '🦝',
    name: 'Raccoon',
    unicodeHex: 'U+1F99D',
    category: 'objects-places',
    tags: ['raccoon', 'trash panda', 'bandit', 'mask', 'forest', 'animal', '🦝'],
    renderContent: (opts) => {
      const { c, k, badge, hl } = prep(opts, { fillPrimary: '#94A3B8', fillSecondary: '#1E293B', stroke: '#334155' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ears -->
        <path d="M6.8 12.6 L6.2 5.4 L12 8.6 Z M25.2 12.6 L25.8 5.4 L20 8.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Round Fluffy Head -->
        <path d="M16 7.4 C22.4 7.4 27.6 11.8 27.6 17.4 C27.6 22.8 22.2 26.6 16 26.6 C9.8 26.6 4.4 22.8 4.4 17.4 C4.4 11.8 9.6 7.4 16 7.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Bandit Eye Mask -->
        <path d="M6.2 15.4 C7.8 12.8 12.6 13 14.4 15.8 C13.4 19 9.2 19.6 6.4 17.6 Z" fill="${k.dark('#1E293B')}" />
        <path d="M25.8 15.4 C24.2 12.8 19.4 13 17.6 15.8 C18.6 19 22.8 19.6 25.6 17.6 Z" fill="${k.dark('#1E293B')}" />
        <!-- White Muzzle & Nose -->
        <ellipse cx="16" cy="21.6" rx="4.8" ry="3.4" fill="${k.cut('#F8FAFC')}" ${k.ast} />
        <ellipse cx="16" cy="20.6" rx="2" ry="1.4" fill="${k.dark('#0F172A')}" />
        <path d="M14.4 23 C15.2 23.6 16.8 23.6 17.6 23" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        <!-- Bright Eyes inside mask -->
        <circle cx="11" cy="15.8" r="1.2" fill="${k.o ? c.stroke : '#FFFFFF'}" />
        <circle cx="11" cy="15.8" r="0.65" fill="${k.o ? '#FFFFFF' : k.s ? c.primary : '#0F172A'}" />
        <circle cx="21" cy="15.8" r="1.2" fill="${k.o ? c.stroke : '#FFFFFF'}" />
        <circle cx="21" cy="15.8" r="0.65" fill="${k.o ? '#FFFFFF' : k.s ? c.primary : '#0F172A'}" />
        <circle cx="11.3" cy="15.4" r="0.3" fill="${hl}" />
        <circle cx="21.3" cy="15.4" r="0.3" fill="${hl}" />
      </g>`;
    },
  },

  // 31. Lobster (U+1F99E)
  {
    id: 'lobster',
    char: '🦞',
    name: 'Lobster',
    unicodeHex: 'U+1F99E',
    category: 'objects-places',
    tags: ['lobster', 'seafood', 'shellfish', 'claws', 'ocean', 'red', '🦞'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#DC2626', fillSecondary: '#FCA5A5', stroke: '#7F1D1D' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Antennae -->
        <path d="M14 9.2 C12.4 5.4 9.6 3.6 7.4 3.4 M18 9.2 C19.6 5.4 22.4 3.6 24.6 3.4" fill="none" stroke="${k.sc}" stroke-width="1" />
        <!-- Walking Legs -->
        <path d="M12.4 16 L8.6 17.2 M12.4 18.6 L8.8 20.4 M13 21.2 L9.8 23.2 M19.6 16 L23.4 17.2 M19.6 18.6 L23.2 20.4 M19 21.2 L22.2 23.2" fill="none" stroke="${k.sc}" stroke-width="1.3" />
        <!-- Large Claws -->
        <path d="M13 13 C10.4 11.4 8.6 9.6 8 7.8" fill="none" stroke="${k.sc}" stroke-width="1.8" />
        <path d="M7.6 8.6 C4.8 7.6 4.4 4.2 6.8 2.8 C7.6 4.6 7.6 5.8 8.4 6 C9 5 9 3.6 8.4 2.4 C11 3.4 11 7 8.8 8.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M19 13 C21.6 11.4 23.4 9.6 24 7.8" fill="none" stroke="${k.sc}" stroke-width="1.8" />
        <path d="M24.4 8.6 C27.2 7.6 27.6 4.2 25.2 2.8 C24.4 4.6 24.4 5.8 23.6 6 C23 5 23 3.6 23.6 2.4 C21 3.4 21 7 23.2 8.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Tail Fan -->
        <path d="M12.6 25 L10.4 28.4 L16 29.2 L21.6 28.4 L19.4 25 Z" fill="${k.alt('#F87171')}" ${k.st} />
        <!-- Segmented Torso -->
        <path d="M16 8.6 C18.8 8.6 20 12.6 19.6 18.4 L18.8 25.4 H13.2 L12.4 18.4 C12 12.6 13.2 8.6 16 8.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M12.8 18 H19.2 M13 21.4 H19 M13.4 24.2 H18.6" fill="none" stroke="${k.s ? '#FFFFFF' : k.sc}" stroke-width="0.9" />
        ${dot(14.4, 10.6, 0.75)}
        ${dot(17.6, 10.6, 0.75)}
      </g>`;
    },
  },

  // 32. Mosquito (U+1F99F)
  {
    id: 'mosquito',
    char: '🦟',
    name: 'Mosquito',
    unicodeHex: 'U+1F99F',
    category: 'objects-places',
    tags: ['mosquito', 'bug', 'insect', 'bite', 'pest', 'wings', '🦟'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#64748B', fillSecondary: '#CBD5E1', stroke: '#1E293B' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Slender Legs -->
        <path d="M12.4 15.8 L9.6 21.8 L7.6 24.8 M15 16.4 L14.4 23.8 L13.4 27 M17.6 16.2 L21.4 22.8 L24 26.4" fill="none" stroke="${k.sc}" stroke-width="1.2" />
        <!-- Translucent Wings -->
        <ellipse cx="19.6" cy="11.2" rx="5.8" ry="2" transform="rotate(-18 19.6 11.2)" fill="${k.alt('#E2E8F0')}" ${k.st} />
        <ellipse cx="20.2" cy="13.4" rx="5.2" ry="1.8" transform="rotate(-6 20.2 13.4)" fill="${k.alt('#E2E8F0')}" ${k.st} />
        <!-- Proboscis & Head -->
        <path d="M8.6 12.8 L3.2 14.6" fill="none" stroke="${k.sc}" stroke-width="1.1" />
        <path d="M9.6 10.6 L7.8 7.8 M10.6 10.4 L10.2 7.2" fill="none" stroke="${k.sc}" stroke-width="0.9" />
        <!-- Segmented Abdomen & Thorax -->
        <path d="M13 13.6 C16.4 13.6 22 15.4 26.8 18.8 C22.8 19.4 17.6 18 13.4 16.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="12.2" cy="14" r="2.2" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="9.6" cy="12.4" r="1.5" fill="${k.fill(c.primary)}" ${k.st} />
        ${dot(9.2, 11.8, 0.65)}
      </g>`;
    },
  },

  // 33. Microbe (U+1F9A0)
  {
    id: 'microbe',
    char: '🦠',
    name: 'Microbe',
    unicodeHex: 'U+1F9A0',
    category: 'objects-places',
    tags: ['microbe', 'bacteria', 'virus', 'germ', 'amoeba', 'science', 'biology', '🦠'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#4ADE80', fillSecondary: '#16A34A', stroke: '#15803D' });
      const blobD = 'M16 5.6 C19.4 5.4 21.8 7.4 23.6 9.8 C26 12.8 26.4 17.4 24.4 20.8 C22.2 24.6 17.4 26.6 13.4 25.4 C9.6 24.2 6.6 20.4 6.6 16.2 C6.6 11.8 8.8 8.4 12.2 6.6 C13.6 5.8 14.8 5.6 16 5.6 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Cilia / Spikes -->
        <path d="M16 5.4 V2.8 M21.4 7.6 L23.4 5.4 M25.4 13.4 L28.4 12.4 M25.2 19.6 L28 21.2 M20.2 24.6 L21.8 27.6 M13.4 25.4 L12.4 28.4 M8 21.4 L5.4 23.4 M6.6 15.2 L3.6 15.2 M8.4 9.6 L6 7.4" fill="none" stroke="${k.sc}" stroke-width="1.6" />
        <circle cx="16" cy="2.6" r="0.9" fill="${k.sc}" />
        <circle cx="28.6" cy="12.4" r="0.9" fill="${k.sc}" />
        <circle cx="28" cy="21.4" r="0.9" fill="${k.sc}" />
        <circle cx="5.2" cy="23.6" r="0.9" fill="${k.sc}" />
        <circle cx="5.8" cy="7.2" r="0.9" fill="${k.sc}" />
        <!-- Cell Body -->
        <path d="${blobD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Nucleus & Organelles -->
        <ellipse cx="14.2" cy="14.4" rx="3.4" ry="2.8" fill="${k.s ? '#FFFFFF' : k.alt('#16A34A')}" ${k.ast} />
        <circle cx="19.8" cy="18.8" r="1.6" fill="${k.s ? '#FFFFFF' : k.alt('#16A34A')}" />
        <circle cx="11.6" cy="20" r="1.1" fill="${k.s ? '#FFFFFF' : k.alt('#16A34A')}" />
        <circle cx="19.6" cy="11.4" r="1.1" fill="${k.s ? '#FFFFFF' : k.alt('#16A34A')}" />
      </g>`;
    },
  },

  // 34. Badger (U+1F9A1)
  {
    id: 'badger',
    char: '🦡',
    name: 'Badger',
    unicodeHex: 'U+1F9A1',
    category: 'objects-places',
    tags: ['badger', 'honey badger', 'woodland', 'striped', 'animal', '🦡'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#64748B', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const legs = [11.2, 14.4, 21.6, 24.4].map((x) =>
        `<rect x="${x}" y="21" width="2.4" height="5.8" rx="1" fill="${k.dark('#1E293B')}" ${k.st} />`
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${legs}
        <!-- Tail -->
        <path d="M25.6 16.4 C27.8 16.6 29 18.2 28.4 19.8 L25 19.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Stocky Body -->
        <path d="M10.4 14.2 C13.4 11.8 21.8 11.8 25.4 14.6 C27.6 16.4 27.6 20.4 25.2 21.8 H10.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M11 20 H25.4 V21.8 H11 Z" fill="${k.dark('#1E293B')}" stroke="none" />
        <!-- Striped Head -->
        <circle cx="11.6" cy="13.2" r="1.5" fill="${k.dark('#1E293B')}" ${k.st} />
        <path d="M11.8 13 C9.4 13.4 6.2 14.8 4.2 17.4 C3.4 18.4 4.4 20.6 7 20.6 L12.4 20.2 C14.2 18.4 14.2 14.6 11.8 13 Z" fill="${k.cut('#FFFFFF')}" ${k.st} />
        <path d="M6.4 16.4 L11.4 14.6 M7.4 18.8 L12.2 17.8" fill="none" stroke="${k.dark('#1E293B')}" stroke-width="1.6" />
        <circle cx="4.2" cy="18" r="1" fill="${k.dark('#0F172A')}" />
        ${dot(8.8, 16.4, 0.8)}
      </g>`;
    },
  },

  // 35. Swan (U+1F9A2)
  {
    id: 'swan',
    char: '🦢',
    name: 'Swan',
    unicodeHex: 'U+1F9A2',
    category: 'objects-places',
    tags: ['swan', 'bird', 'graceful', 'lake', 'white', 'feather', '🦢'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#F97316', stroke: '#94A3B8' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Graceful S-Neck, Wing & Body -->
        <path d="M9.4 7.8 C11.4 5.4 14.8 7 13.8 10.4 C13 13 12 15.6 13.8 17.2 C16.6 16.2 21.8 16.4 25.4 19.2 L28.4 18 C27.2 21.8 24.4 25.4 18.2 25.6 C12.4 25.8 9.2 22.8 9.8 18.4 C10.4 14.8 11.4 12.2 11 9.8 C10.8 8.8 10 8.6 9.4 7.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Folded Wing Curve -->
        <path d="M14.4 18.6 C18.8 17.8 23.2 19.4 25 22.2 C21.8 24 16.8 23.6 14 21" fill="none" stroke="${k.s ? '#FFFFFF' : k.sc}" stroke-width="1.1" />
        <!-- Orange Beak with Black Base Knob -->
        <path d="M9.4 7.6 L6 9.4 L9.6 9.8 Z" fill="${k.alt('#F97316')}" ${k.st} stroke-width="0.8" />
        <circle cx="9.6" cy="8.2" r="0.8" fill="${k.dark('#0F172A')}" />
        ${dot(11.4, 7.8, 0.7)}
      </g>`;
    },
  },

  // 36. Mammoth (U+1F9A3)
  {
    id: 'mammoth',
    char: '🦣',
    name: 'Mammoth',
    unicodeHex: 'U+1F9A3',
    category: 'objects-places',
    tags: ['mammoth', 'woolly mammoth', 'ice age', 'tusks', 'elephant', 'extinct', '🦣'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#78350F', fillSecondary: '#FEF3C7', stroke: '#451A03' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Shaggy Legs -->
        <rect x="11.2" y="20" width="3.4" height="7.4" rx="1.2" fill="${k.fill(c.primary)}" ${k.st} />
        <rect x="15.2" y="20" width="3.2" height="7.4" rx="1.2" fill="${k.fill(c.primary)}" ${k.st} />
        <rect x="21.4" y="20" width="3.4" height="7.4" rx="1.2" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Woolly Domed Body & Shaggy Skirt -->
        <path d="M11.6 12 C14.6 8.8 21.8 9.2 25.2 12.6 C27.6 15 27.8 20.2 25.6 22.6 L23.4 21.4 L21 22.8 L18.4 21.4 L16 22.8 L13.4 21.4 L11.4 22.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- High Domed Head & Trunk -->
        <path d="M12.4 7.6 C9.6 7.4 7.4 10 7.6 13.8 C7.8 18.4 6 22.6 4.4 24.4 C3.4 25.4 4.8 27 6.4 25.8 C8.4 24 9.6 20 10.2 16.4 L14.4 17.6 C16 14.4 15.6 9.6 12.4 7.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Long Curved Ivory Tusks -->
        <path d="M9.6 16 C6.4 18.4 3.4 18 2.4 14.4 C3.6 16.4 6 16.6 8.8 14.4 Z" fill="${k.cut('#FEF3C7')}" ${k.st} />
        ${dot(10.6, 11.4, 0.9)}
      </g>`;
    },
  },

  // 37. Dodo (U+1F9A4)
  {
    id: 'dodo',
    char: '🦤',
    name: 'Dodo',
    unicodeHex: 'U+1F9A4',
    category: 'objects-places',
    tags: ['dodo', 'bird', 'extinct', 'mauritius', 'flightless', '🦤'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#94A3B8', fillSecondary: '#F8FAFC', stroke: '#475569' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Thick Yellow Legs -->
        <path d="M14.4 23.6 V28 L12 28.6 M18.6 23.6 V28 L16.4 28.6" fill="none" stroke="${k.o || k.s ? k.sc : '#F59E0B'}" stroke-width="1.8" />
        <!-- Fluffy Tail Puff -->
        <circle cx="25.6" cy="16.4" r="2.6" fill="${k.cut('#F8FAFC')}" ${k.st} />
        <!-- Plump Body & Curved Neck -->
        <path d="M10.4 15.6 C10.4 12.4 14.2 12.8 18.6 14 C23.4 15.2 25.8 18 24.4 21.6 C23 24.8 17.6 25.4 13.4 23.6 C10.4 22.4 9.6 19 10.4 15.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M10.4 16.6 C9.6 13.8 9.2 10.6 10 8.2 C10.8 6 14.2 6.2 14.6 8.8 C15 11.2 13.8 13.4 14.2 16" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Tiny Flightless Wing -->
        <ellipse cx="17.8" cy="18.8" rx="3.4" ry="2.2" fill="${k.alt('#CBD5E1')}" ${k.st} />
        <!-- Large Hooked Bulbous Beak -->
        <path d="M9.8 8.4 C6.8 8 4.4 9.4 4.4 11.6 C4.4 13.4 6.2 13.8 7.2 12.4 C8.2 11.8 9.2 11.8 10.4 11.6 Z" fill="${k.alt('#FBBF24')}" ${k.st} />
        ${dot(11.6, 8.8, 0.85)}
      </g>`;
    },
  },

  // 38. Sloth (U+1F9A5)
  {
    id: 'sloth',
    char: '🦥',
    name: 'Sloth',
    unicodeHex: 'U+1F9A5',
    category: 'objects-places',
    tags: ['sloth', 'slow', 'lazy', 'hang', 'branch', 'sleepy', 'animal', '🦥'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#A16207', fillSecondary: '#FEF3C7', stroke: '#713F12' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tree Branch -->
        <path d="M2.8 10.4 L29.2 7.2" fill="none" stroke="${k.o || k.s ? k.sc : '#78350F'}" stroke-width="2.6" />
        <!-- Hanging Arms & Legs Clinging to Branch -->
        <path d="M11.6 16.8 L10.2 9.4 M17.6 16.4 L18.4 8.4 M22 18.8 L24 7.8" fill="none" stroke="${k.sc}" stroke-width="${k.o ? k.t : 3.2}" />
        <!-- Claws on Branch -->
        <path d="M9.6 8.4 L10.6 7 M17.8 7.4 L18.8 6 M23.4 6.8 L24.4 5.4" fill="none" stroke="${k.s ? '#FFFFFF' : '#F8FAFC'}" stroke-width="1.2" />
        <!-- Hanging Round Body -->
        <ellipse cx="18.6" cy="19.8" rx="6.2" ry="4.8" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Round Sloth Head -->
        <circle cx="11.4" cy="19.6" r="4.8" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="11.4" cy="20" rx="3.6" ry="3.2" fill="${k.cut('#FEF3C7')}" stroke="none" />
        <!-- Classic Sloth Eye Patches & Smile -->
        <ellipse cx="9.6" cy="19.4" rx="1.3" ry="0.9" transform="rotate(-24 9.6 19.4)" fill="${k.dark('#713F12')}" />
        <ellipse cx="13.2" cy="19.4" rx="1.3" ry="0.9" transform="rotate(24 13.2 19.4)" fill="${k.dark('#713F12')}" />
        <circle cx="9.6" cy="19.4" r="0.5" fill="${k.o ? c.stroke : '#FFFFFF'}" />
        <circle cx="13.2" cy="19.4" r="0.5" fill="${k.o ? c.stroke : '#FFFFFF'}" />
        <circle cx="11.4" cy="20.8" r="0.7" fill="${k.dark('#0F172A')}" />
        <path d="M10.4 22 C11 22.6 11.8 22.6 12.4 22" fill="none" stroke="${k.ln}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 39. Otter (U+1F9A6)
  {
    id: 'otter',
    char: '🦦',
    name: 'Otter',
    unicodeHex: 'U+1F9A6',
    category: 'objects-places',
    tags: ['otter', 'sea otter', 'river', 'cute', 'swim', 'shell', 'animal', '🦦'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#92400E', fillSecondary: '#FDE68A', stroke: '#451A03' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Tail -->
        ${k.tube('M20 24.4 C24.6 25.8 28.4 24.6 29.4 22.2', 2.6, c.primary)}
        <!-- Floating / Reclining Body -->
        <path d="M9.6 12 C9.6 9 13.6 8.4 16 10.6 C18.8 13.4 21.8 17.6 22.6 22.4 C23.2 25.4 20.6 27.2 17.2 26.8 C13.4 26.4 10.2 22.6 9.6 17.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Creamy Belly -->
        <ellipse cx="16.4" cy="21" rx="3.4" ry="4.4" transform="rotate(-18 16.4 21)" fill="${k.cut('#FDE68A')}" stroke="none" />
        <!-- Round Head & Ears -->
        <circle cx="8.6" cy="9.6" r="1.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="14.6" cy="8.4" r="1.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="11.8" cy="11.2" r="4.4" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="11.4" cy="12.6" rx="2.8" ry="2.2" fill="${k.cut('#FEF3C7')}" stroke="none" />
        <!-- Paws Resting on Belly -->
        <ellipse cx="13.4" cy="18.6" rx="1.6" ry="1.1" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="17.8" cy="17.6" rx="1.6" ry="1.1" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="11.2" cy="11.8" r="0.8" fill="${k.dark('#0F172A')}" />
        <path d="M10.2 13.4 C10.8 14 11.8 14 12.4 13.4" fill="none" stroke="${k.ln}" stroke-width="0.8" />
        ${dot(9.8, 10.2, 0.75)}
        ${dot(13.2, 9.8, 0.75)}
      </g>`;
    },
  },

  // 40. Orangutan (U+1F9A7) — built directly on the user's provided monkey SVG geometry
  {
    id: 'orangutan',
    char: '🦧',
    name: 'Orangutan',
    unicodeHex: 'U+1F9A7',
    category: 'objects-places',
    tags: ['orangutan', 'ape', 'primate', 'cheek pads', 'orange', 'jungle', 'animal', '🦧'],
    renderContent: (opts) => {
      const c = resolveColors(opts as any, { fillPrimary: '#EA580C', fillSecondary: '#FED7AA', stroke: '#9A3412' }) as AnimalColors;
      const badge = getBadgeMarkup(opts as any);
      const k = kit(opts, c);
      const skin = '#FED7AA';
      const flange = '#C2410C';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Feet (seated ape pose, NO tail) -->
        <ellipse cx="11.4" cy="27.2" rx="2.9" ry="1.5" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <ellipse cx="20.6" cy="27.2" rx="2.9" ry="1.5" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <!-- Shaggy Torso & Belly -->
        <ellipse cx="16" cy="21" rx="6.6" ry="6.2" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <ellipse cx="16" cy="22" rx="3.6" ry="4.2" fill="${k.cut(skin)}" stroke="none" />
        <!-- Long Shaggy Orangutan Arms -->
        <ellipse cx="8.8" cy="20.8" rx="2.2" ry="5.4" transform="rotate(14 8.8 20.8)" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <ellipse cx="23.2" cy="20.8" rx="2.2" ry="5.4" transform="rotate(-14 23.2 20.8)" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <!-- Distinctive Wide Orangutan Cheek Flanges (Cheek Pads) -->
        <ellipse cx="10.2" cy="11.2" rx="2.6" ry="3.8" fill="${k.alt(flange)}" stroke="${k.sc}" stroke-width="1.1" />
        <ellipse cx="21.8" cy="11.2" rx="2.6" ry="3.8" fill="${k.alt(flange)}" stroke="${k.sc}" stroke-width="1.1" />
        <!-- Head & Shaggy Crown -->
        <circle cx="16" cy="10.4" r="5.8" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <!-- Warm Tan Ape Face Mask & Muzzle -->
        <path d="M11.8 9.2 C11.8 7.6 14 7.8 16 9.4 C18 7.8 20.2 7.6 20.2 9.2 C20.2 12 18.6 13.2 16 13.2 C13.4 13.2 11.8 12 11.8 9.2 Z" fill="${k.cut(skin)}" stroke="none" />
        <ellipse cx="16" cy="13.1" rx="2.7" ry="1.9" fill="${k.cut(skin)}" stroke="${k.sc}" stroke-width="0.6" />
        <!-- Expressive Eyes, Nostrils & Smile -->
        <circle cx="13.9" cy="10" r="0.85" fill="${k.eye}" />
        <circle cx="18.1" cy="10" r="0.85" fill="${k.eye}" />
        <circle cx="15.2" cy="12.6" r="0.38" fill="${k.eye}" />
        <circle cx="16.8" cy="12.6" r="0.38" fill="${k.eye}" />
        <path d="M14.8 14.3 C15.6 14.9 16.4 14.9 17.2 14.3" fill="none" stroke="${k.ln}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 41. Skunk (U+1F9A8)
  {
    id: 'skunk',
    char: '🦨',
    name: 'Skunk',
    unicodeHex: 'U+1F9A8',
    category: 'objects-places',
    tags: ['skunk', 'stripe', 'smelly', 'woodland', 'black and white', 'animal', '🦨'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Big Fluffy Raised Tail with White Stripe -->
        <path d="M19.4 17 C20.6 10.6 24.4 5.4 28.4 6.6 C30.4 7.4 29.8 12.6 27 17 C25 20 22.8 21.8 20.4 21.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M21.6 16.4 C22.8 11.4 25.6 7.4 28 7.8 C28.2 10.6 26.8 14.4 23.8 17.8 Z" fill="${k.cut('#FFFFFF')}" stroke="none" />
        <!-- Feet -->
        <rect x="11.2" y="22.4" width="2.2" height="4.4" rx="1" fill="${k.fill(c.primary)}" ${k.st} />
        <rect x="18.6" y="22.4" width="2.2" height="4.4" rx="1" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body -->
        <path d="M10.4 16 C12.4 13.6 18.6 13.8 21.2 16.8 C22.8 18.8 22 23 19.6 23.6 H11.4 C9.6 23.6 9.2 18.6 10.4 16 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M10.4 16.4 C13.8 14.6 18.2 14.8 21.4 17.6 C19.4 17 14.6 17.2 11.4 18.4 Z" fill="${k.cut('#FFFFFF')}" stroke="none" />
        <!-- Head & White Face Blaze -->
        <circle cx="11" cy="13.4" r="1.3" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M11.4 13.2 C8.8 13.4 5.6 15.2 4.2 17.8 C3.6 18.8 4.6 20.6 7.2 20.6 L11.8 20 C13.6 18.4 13.4 14.8 11.4 13.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M5.4 17.6 L11 14.4" fill="none" stroke="${k.s || !k.o ? '#FFFFFF' : c.stroke}" stroke-width="1.6" />
        <circle cx="4.2" cy="18.2" r="0.8" fill="${k.dark('#0F172A')}" />
        ${dot(8.6, 16.8, 0.8)}
      </g>`;
    },
  },

  // 42. Flamingo (U+1F9A9)
  {
    id: 'flamingo',
    char: '🦩',
    name: 'Flamingo',
    unicodeHex: 'U+1F9A9',
    category: 'objects-places',
    tags: ['flamingo', 'pink', 'bird', 'tropical', 'stand', 'one leg', '🦩'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#FB7185', fillSecondary: '#F43F5E', stroke: '#BE123C' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Thin Standing Leg & Tucked Leg -->
        <path d="M16.4 19.6 V29 M14.2 29 H18.4" fill="none" stroke="${k.o || k.s ? k.sc : '#E11D48'}" stroke-width="1.4" />
        <path d="M18.4 19.4 L21 22.8 L16.6 23.6" fill="none" stroke="${k.o || k.s ? k.sc : '#E11D48'}" stroke-width="1.3" />
        <!-- Oval Body -->
        <ellipse cx="18.4" cy="16.8" rx="6" ry="3.8" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M16.2 15.2 C20 14.6 23 15.8 24 17.6 C21.4 19 17.4 18.8 15.4 17.2 Z" fill="${k.alt('#F43F5E')}" ${k.ast} />
        <!-- S-Shaped Neck & Head -->
        <path d="M13 16.6 C10.6 15.4 9.6 12.6 11.4 10 C12.8 8 12.6 5.8 10.6 5.2 C9 4.8 8.2 5.8 8.4 7" fill="none" stroke="${k.sc}" stroke-width="${k.o ? k.t : 2.6}" />
        <circle cx="9.8" cy="6.2" r="2.2" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Hooked Black-Tipped Beak -->
        <path d="M7.8 6 C6 6 5 7.4 5.4 9 C6.4 8.2 7.2 8 8 7.8 Z" fill="${k.dark('#1E293B')}" ${k.st} stroke-width="0.7" />
        ${dot(9.4, 5.8, 0.7)}
      </g>`;
    },
  },

  // 43. Oyster (U+1F9AA)
  {
    id: 'oyster',
    char: '🦪',
    name: 'Oyster',
    unicodeHex: 'U+1F9AA',
    category: 'objects-places',
    tags: ['oyster', 'pearl', 'shell', 'clam', 'seafood', 'ocean', '🦪'],
    renderContent: (opts) => {
      const { c, k, badge, hl } = prep(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#F8FAFC', stroke: '#475569' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Upper Open Shell Valve -->
        <path d="M6.4 16 C5.2 9.8 10.2 4.6 16 4.6 C21.8 4.6 26.8 9.8 25.6 16 C22.4 14 19.2 13.4 16 13.4 C12.8 13.4 9.6 14 6.4 16 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M16 5.6 V12.4 M11.4 6.8 L13.4 12.8 M20.6 6.8 L18.6 12.8" fill="none" stroke="${k.s ? '#FFFFFF' : k.sc}" stroke-width="0.9" />
        <!-- Lower Shell Bowl -->
        <path d="M4.6 17.8 C5.4 14 10.4 12.8 16 12.8 C21.6 12.8 26.6 14 27.4 17.8 C28.2 22.8 22.8 27.4 16 27.4 C9.2 27.4 3.8 22.8 4.6 17.8 Z" fill="${k.alt('#E2E8F0')}" ${k.st} />
        <ellipse cx="16" cy="19.6" rx="8.4" ry="4.6" fill="${k.cut('#F8FAFC')}" ${k.ast} />
        <!-- Glossy Pearl -->
        <circle cx="16" cy="18.8" r="3.4" fill="${k.s ? c.primary : '#FFFFFF'}" ${k.st} />
        <circle cx="14.8" cy="17.6" r="1" fill="${hl}" />
      </g>`;
    },
  },

  // 44. Beaver (U+1F9AB)
  {
    id: 'beaver',
    char: '🦫',
    name: 'Beaver',
    unicodeHex: 'U+1F9AB',
    category: 'objects-places',
    tags: ['beaver', 'dam', 'wood', 'teeth', 'tail', 'canada', 'animal', '🦫'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#92400E', fillSecondary: '#FDE68A', stroke: '#451A03' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wide Flat Cross-Hatched Paddle Tail -->
        <path d="M21 21.8 C24.6 21.4 29 22.6 29.6 24.8 C30 26.6 26.8 27.8 22.4 27 C20.4 26.6 19.6 24.2 21 21.8 Z" fill="${k.dark('#451A03')}" ${k.st} />
        <path d="M23.4 23 L26.4 26 M26.2 22.8 L28 25.4" fill="none" stroke="${k.s ? '#FFFFFF' : k.sc}" stroke-width="0.8" />
        <!-- Chubby Feet -->
        <ellipse cx="10.4" cy="26.4" rx="2.4" ry="1.1" fill="${k.dark('#451A03')}" ${k.st} />
        <ellipse cx="17.6" cy="26.4" rx="2.4" ry="1.1" fill="${k.dark('#451A03')}" ${k.st} />
        <!-- Chubby Body -->
        <ellipse cx="15.2" cy="19.6" rx="7" ry="6.2" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Head & Small Ear -->
        <circle cx="11.4" cy="8.4" r="1.5" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="9.6" cy="12.2" rx="5.2" ry="4.4" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Buck Teeth & Snout -->
        <rect x="6.4" y="15.4" width="1.5" height="2" rx="0.3" fill="${k.s || !k.o ? '#FFFFFF' : 'none'}" ${k.st} stroke-width="0.6" />
        <rect x="7.9" y="15.4" width="1.5" height="2" rx="0.3" fill="${k.s || !k.o ? '#FFFFFF' : 'none'}" ${k.st} stroke-width="0.6" />
        <ellipse cx="7.4" cy="13.8" rx="2.4" ry="1.8" fill="${k.cut('#FDE68A')}" stroke="none" />
        <circle cx="5.2" cy="13.2" r="0.9" fill="${k.dark('#0F172A')}" />
        ${dot(8.8, 11, 0.85)}
      </g>`;
    },
  },

  // 45. Bison (U+1F9AC)
  {
    id: 'bison',
    char: '🦬',
    name: 'Bison',
    unicodeHex: 'U+1F9AC',
    category: 'objects-places',
    tags: ['bison', 'buffalo', 'plains', 'horns', 'herd', 'america', 'animal', '🦬'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#78350F', fillSecondary: '#451A03', stroke: '#451A03' });
      const legs = [10, 13.4, 21.6, 24.6].map((x) =>
        `<rect x="${x}" y="20.6" width="2.4" height="6.8" rx="0.9" fill="${k.fill(c.primary)}" ${k.st} />`
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${legs}
        <!-- Tail -->
        <path d="M26.6 15.6 C28.6 16.4 29 19.4 28.4 21.8" fill="none" stroke="${k.sc}" stroke-width="1.3" />
        <!-- Hindquarters & Massive Shaggy Shoulder Hump -->
        <path d="M12.6 12.6 C16 11.4 22.8 11.8 26 14.4 C27.8 16 27.6 20 25.4 21.4 H12.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M6.4 10.6 C8.4 6.6 15 6.8 17.8 11.4 C19.2 14 18.6 19.6 16.4 22.2 L11.4 22.6 C7.6 22.2 5.4 19 5.4 14.8 Z" fill="${k.alt('#57260A')}" ${k.st} />
        <!-- Beard & Horns -->
        <path d="M7 20.6 L8.6 24.4 L10.6 21.4 Z" fill="${k.alt('#451A03')}" ${k.st} />
        <path d="M7.6 10.4 C6 8.4 6.2 6 8 5 C7.8 6.8 8.4 8 9.6 8.8 Z" fill="${k.cut('#CBD5E1')}" ${k.st} />
        <circle cx="5.2" cy="17.2" r="0.9" fill="${k.dark('#0F172A')}" />
        ${dot(8.2, 13.4, 0.85)}
      </g>`;
    },
  },

  // 46. Seal (U+1F9AD)
  {
    id: 'seal',
    char: '🦭',
    name: 'Seal',
    unicodeHex: 'U+1F9AD',
    category: 'objects-places',
    tags: ['seal', 'sea lion', 'ocean', 'arctic', 'flipper', 'cute', 'animal', '🦭'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#F8FAFC', stroke: '#64748B' });
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Rear Tail Flippers -->
        <path d="M24 22.2 L29 20.6 L28.2 23.6 L29.4 26 L23.8 25 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Smooth Teardrop Seal Body & Head -->
        <path d="M10.4 7.6 C13.8 7 16.2 9.4 16.6 12.8 C17.2 17 20.4 20.6 25 22.2 C25.8 24.4 23 26.2 18.6 26.2 C12.8 26.2 8.2 22.8 7.8 16.6 C7.4 12.2 8 8.2 10.4 7.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Front Flipper -->
        <path d="M14.2 19.6 C16 20.4 17.6 22.8 17.2 25.4 C15.2 25.4 13.4 23.2 13.2 20.6 Z" fill="${k.alt('#94A3B8')}" ${k.st} />
        <!-- Muzzle, Whiskers & Spots -->
        <circle cx="18.2" cy="19.6" r="1" fill="${k.dark('#64748B')}" />
        <circle cx="20.6" cy="21.4" r="0.85" fill="${k.dark('#64748B')}" />
        <ellipse cx="9.4" cy="12" rx="2.4" ry="1.8" fill="${k.cut('#F8FAFC')}" stroke="none" />
        <circle cx="8" cy="11.2" r="0.8" fill="${k.dark('#0F172A')}" />
        <path d="M6.2 11.4 L4 11 M6.2 12.4 L4.2 12.8 M11.4 11.6 L13.8 11.2 M11.4 12.6 L13.6 13" fill="none" stroke="${k.ln}" stroke-width="0.7" />
        ${dot(10.8, 9.6, 0.9)}
      </g>`;
    },
  },

  // 47. Guide Dog (U+1F9AE) — built directly on the user's provided dog SVG template
  {
    id: 'guide-dog',
    char: '🦮',
    name: 'Guide Dog',
    unicodeHex: 'U+1F9AE',
    category: 'objects-places',
    tags: ['guide dog', 'service dog', 'assistance dog', 'seeing eye dog', 'harness', 'accessibility', '🦮'],
    renderContent: (opts) => {
      const c = resolveColors(opts as any, { fillPrimary: '#D97706', fillSecondary: '#92400E', stroke: '#92400E' }) as AnimalColors;
      const badge = getBadgeMarkup(opts as any);
      const k = kit(opts, c);
      const dark = k.alt('#78350F');
      const harnessFill = k.o ? 'none' : k.s ? '#FFFFFF' : k.d ? c.secondary : '#FACC15';
      const harnessStroke = k.o ? c.stroke : k.s ? c.primary : '#B45309';
      const handleCol = k.o ? c.stroke : k.s ? c.primary : '#94A3B8';
      const legs = [9.8, 12.8, 21, 24].map((x) =>
        `<rect x="${x}" y="17" width="2.7" height="10.5" rx="1.2" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />` +
        (k.o ? '' : `<ellipse cx="${x + 1.35}" cy="27" rx="1.9" ry="1" fill="${k.cut('#FDE68A')}" stroke="${k.sc}" stroke-width="1.1" />`)
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Rigid Guide Harness Handle rising diagonally up-right -->
        <path d="M16 11 L24.6 3.6 C25.6 2.8 27 3.8 26.2 4.8 L18 12.4" fill="none" stroke="${k.s ? c.primary : '#475569'}" stroke-width="${k.o ? k.t : 2.6}" />
        ${k.o || k.s ? '' : '<path d="M16 11 L24.6 3.6 C25.6 2.8 27 3.8 26.2 4.8 L18 12.4" fill="none" stroke="#CBD5E1" stroke-width="1.3" />'}
        <path d="M23.4 4.6 L25.6 2.8 C26.4 2.2 27.4 3.2 26.8 4.2 L24.8 6" fill="none" stroke="${handleCol}" stroke-width="1.6" />
        <!-- Tail -->
        ${k.tube('M26.6 12.4 C29 11.6 29.6 8.6 28 6', 2.4, c.primary)}
        ${legs}
        <!-- Body -->
        <path d="M9 12.5 C9 10.3 12 10 16 10 H22 C25.4 10 27.2 11.6 27.2 14.4 C27.2 17.6 25.4 19 22 19 H12.5 C10 19 9 16.6 9 12.5 Z" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <!-- Cream chest patch -->
        <path d="M9.4 15 C10.6 17.8 12.4 18.8 14.4 18.8 C14 16.8 12 15.4 9.4 15 Z" fill="${k.cut('#FDE68A')}" stroke="none" />
        <!-- Yellow Guide Harness Chest Strap & Back Saddle -->
        <path d="M10 14.2 L14.4 15.6 L14.4 19 H18.2 V10 H14.4 V15.6" fill="${harnessFill}" stroke="${harnessStroke}" stroke-width="1" />
        <rect x="14.4" y="10" width="3.8" height="9" rx="0.8" fill="${harnessFill}" stroke="${harnessStroke}" stroke-width="1" />
        <!-- Head and snout -->
        <ellipse cx="7.4" cy="11.4" rx="4.6" ry="4.1" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <path d="M5.6 12 C3.4 11.4 1.8 12.4 1.8 14 C1.8 15.6 3.2 16.2 5.4 16 C7 15.8 8 14.8 8 13.6 Z" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="1.1" />
        <circle cx="2.4" cy="13.4" r="1" fill="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#0F172A'}" />
        <path d="M3.6 15.6 C5 16.6 6.6 16.4 7.4 15.6" fill="none" stroke="${k.sc}" stroke-width="0.7" />
        <!-- Tongue -->
        <path d="M5 16 C5 18.4 6.8 18.4 6.8 16 Z" fill="${k.alt('#FB7185')}" stroke="${k.sc}" stroke-width="0.6" />
        <!-- Floppy ear -->
        <path d="M9.4 8.6 C12 8.4 13 11 12.2 14 C10.4 14.6 9 12.6 8.8 10.6 Z" fill="${dark}" stroke="${k.sc}" stroke-width="0.8" />
        <circle cx="6.8" cy="10.4" r="0.85" fill="${k.eye}" />
        <!-- Collar -->
        <path d="M10.4 12.2 C11.4 13.6 11.6 15.6 11 17" fill="none" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : k.d ? c.secondary : '#EF4444'}" stroke-width="1.6" />
      </g>`;
    },
  },

  // 48. White Cane / Probing Cane (U+1F9AF)
  {
    id: 'white-cane',
    char: '🦯',
    name: 'White Cane',
    unicodeHex: 'U+1F9AF',
    category: 'objects-places',
    tags: ['white cane', 'probing cane', 'blind', 'mobility', 'accessibility', 'walking stick', '🦯'],
    renderContent: (opts) => {
      const c = resolveColors(opts as any, { fillPrimary: '#F8FAFC', fillSecondary: '#EF4444', stroke: '#475569' }) as AnimalColors;
      const badge = getBadgeMarkup(opts as any);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M27.2 4.8 L22.8 9.2" stroke-width="${Math.max(2.6, sw * 1.35)}" />
          <path d="M22.8 9.2 L7.6 24.4" stroke-width="${Math.max(1.8, sw * 0.9)}" />
          <circle cx="6" cy="26" r="2.1" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M27.2 4.8 L22.8 9.2" stroke-width="3.6" />
          <path d="M22.8 9.2 L7.6 24.4" stroke-width="2.2" />
          <circle cx="6" cy="26" r="2.2" fill="${c.primary}" stroke="none" />
        </g>`;
      }

      const redCol = isDuotone ? c.secondary : '#EF4444';
      const handleCol = isDuotone ? c.secondary : '#1E293B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wrist cord loop -->
        <path d="M26.6 5.4 C28.8 7.2 28.4 10 26.2 10.6 C24.6 11 23.4 9.8 23.8 8.4" fill="none" stroke="${handleCol}" stroke-width="0.9" />
        <!-- Shaft outline backing -->
        <path d="M23.2 8.8 L7.4 24.6" stroke="${c.stroke}" stroke-width="3.2" fill="none" />
        <!-- Crisp White Aluminum Shaft -->
        <path d="M23.2 8.8 L7.4 24.6" stroke="${c.primary}" stroke-width="2" fill="none" />
        <!-- Red Reflective Lower Band -->
        <path d="M12.2 19.8 L8.4 23.6" stroke="${redCol}" stroke-width="2.1" fill="none" />
        <!-- Black Ergonomic Grip Handle -->
        <path d="M27.4 4.6 L22.4 9.6" stroke="${handleCol}" stroke-width="3.4" fill="none" />
        <path d="M26.8 5.2 L23 9" stroke="#64748B" stroke-width="0.8" fill="none" opacity="0.55" />
        <!-- Rounded Marshmallow Rolling Tip -->
        <circle cx="5.8" cy="26.2" r="2.1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },
];
