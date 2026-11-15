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
    o, d, s, t,
    // main body fill
    fill: (v: string) => (o ? 'none' : s ? c.primary : v),
    // light/secondary accent areas (inner ears, muzzle, belly...)
    alt: (lit: string) => (o ? 'none' : s ? c.primary : d ? c.secondary : lit),
    // dark details (patches, stripes): cut out white in silhouette
    dark: (v: string) => (o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : v),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${sc}" stroke-width="${t}"`,
    // stroke attributes for accent shapes (only outlined in outline mode)
    ast: o ? `stroke="${sc}" stroke-width="${t}"` : 'stroke="none"',
    ln: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    // In outline mode, hide parts that sit behind the head so lines do not cross.
    behind: (id: string, cover: string, content: string) =>
      o
        ? `<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${cover}</mask><g mask="url(#${id})">${content}</g>`
        : content,
  };
};

const pair = (s: string) => `${s}<g transform="matrix(-1 0 0 1 32 0)">${s}</g>`;

const prep = (opts: AnimalOpts, base: { fillPrimary: string; fillSecondary: string; stroke: string }, silStroke = false) => {
  const c0 = resolveColors(opts as any, base) as AnimalColors;
  const c: AnimalColors = silStroke && opts.style === 'silhouette' ? { ...c0, primary: c0.stroke } : c0;
  const k = kit(opts, c);
  const hl = k.o || k.s ? 'none' : '#FFFFFF';
  const dot = (x: number, y: number, r = 1.3) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${k.eye}" /><circle cx="${x + r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.38}" fill="${hl}" />`;
  return { c, k, badge: getBadgeMarkup(opts as any), hl, dot };
};

export const animalCreaturesPart5Icons: WimojiIconDef[] = [
  // 51. Dragon Face (U+1F432)
  {
    id: 'dragon-face',
    char: '🐲',
    name: 'Dragon Face',
    unicodeHex: 'U+1F432',
    category: 'objects-places',
    tags: ['dragon face', 'dragon', 'mythical', 'creature', 'chinese', 'green', 'horns', 'fangs', '🐲'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#5BBF3A', fillSecondary: '#E6F58A', stroke: '#2F7A1C' });
      const headD = 'M16 6.8 C23.4 6.8 27.6 11 27.6 16.6 C27.6 19 26.8 21 25.6 22.6 L25 27 C23.4 29.4 19.6 30 16 30 C12.4 30 8.6 29.4 7 27 L6.4 22.6 C5.2 21 4.4 19 4.4 16.6 C4.4 11 8.6 6.8 16 6.8 Z';
      const whisker = k.o ? c.stroke : k.s ? c.primary : k.d ? c.secondary : '#EAD83A';
      const behind = pair(`
        <path d="M10.4 10.4 C7.6 7.6 7 4.2 8.8 1.2 C11.6 3.6 13.2 6.6 14 9.6 Z" fill="${k.alt('#E2B77A')}" ${k.st} />
        <path d="M6.6 11.2 L2.8 9.2 L4.4 12.4 L1.8 14.2 L4.8 15.4 L3.2 18.4 L6 18.4 Z" fill="${k.alt('#C8E04A')}" ${k.st} />
        <path d="M7.4 23.2 C4.6 21.8 2 23 1.8 25.6 C1.6 28 4.8 28.2 4.6 26 C4.4 24.8 3.4 24.8 3.4 25.6" fill="none" stroke="${whisker}" stroke-width="1.5" />`);
      const brow = k.s ? '#FFFFFF' : c.stroke;
      const sclera = k.o ? 'none' : '#FFFFFF';
      const pupil = k.o ? c.stroke : k.s ? c.primary : '#0F172A';
      const tan = k.alt('#C89B6A');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('dragon-back', `<path d="${headD}" fill="#000" />`, behind)}
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Snout -->
        <ellipse cx="16" cy="22.4" rx="7.4" ry="3.8" fill="${tan}" ${k.ast} />
        ${pair(`<ellipse cx="12.4" cy="22.2" rx="1.9" ry="1.5" fill="${k.eye}" transform="rotate(-12 12.4 22.2)" />`)}
        <!-- Open mouth with fangs -->
        <path d="M11 25.4 C12.4 29.4 19.6 29.4 21 25.4 C19 26.2 13 26.2 11 25.4 Z" fill="${k.o ? 'none' : k.s ? '#FFFFFF' : '#DC2626'}" ${k.o ? k.st : 'stroke="none"'} />
        <path d="M12.4 25.8 L13 27.4 L13.8 26 Z M19.6 25.8 L19 27.4 L18.2 26 Z" fill="${k.o ? 'none' : '#FFFFFF'}" stroke="${k.o ? c.stroke : 'none'}" stroke-width="0.7" />
        <!-- Eyes -->
        ${pair(`<path d="M6.6 12.2 C8.4 10.6 12 10.8 14 12.6" fill="none" stroke="${brow}" stroke-width="1.5" />
        <circle cx="10.8" cy="15.8" r="3" fill="${sclera}" ${k.o ? k.st : `stroke="${c.stroke}" stroke-width="0.7"`} />
        <circle cx="11.4" cy="15.8" r="1.6" fill="${pupil}" />
        <circle cx="11.9" cy="15.2" r="0.5" fill="${k.o || k.s ? 'none' : '#FFFFFF'}" />`)}
        <!-- Forehead tuft -->
        <path d="M14.4 8.4 L16 5.8 L17.6 8.4 Z" fill="${k.alt('#C8E04A')}" ${k.ast} />
      </g>`;
    },
  },

  // 52. Spouting Whale (U+1F433)
  {
    id: 'spouting-whale',
    char: '🐳',
    name: 'Spouting Whale',
    unicodeHex: 'U+1F433',
    category: 'objects-places',
    tags: ['spouting whale', 'whale', 'ocean', 'blowhole', 'water spout', 'cute', 'blue', 'sea', '🐳'],
    renderContent: (opts) => {
      const { c, k, badge, hl } = prep(opts, { fillPrimary: '#3B82F6', fillSecondary: '#BFDBFE', stroke: '#1D4ED8' });
      const bodyD = 'M2.8 20.4 C2.8 14.8 7.6 12 13.6 12 C19 12 23 14.6 25 18.4 C25.4 16.4 25.2 14.6 24 13.2 C26 13.2 27.4 13.8 28.4 14.8 C29.4 13.8 30.6 13.2 32 13.2 C30.6 14.2 29.8 15.8 29.8 17.8 C29.8 20 28 21.6 26.2 22.8 C24.2 26 19.4 27.6 14 27.6 C7.4 27.6 2.8 25 2.8 20.4 Z';
      const water = k.o ? c.stroke : k.s ? c.primary : k.d ? c.secondary : '#60A5FA';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="translate(0.4 0.8) scale(0.95)">
        <!-- Spout: fountain arcs with droplets -->
        <path d="M13.4 11.8 V6.2 M13.4 7.6 C13.4 4.4 10.4 2.8 7.8 3.6 M13.4 7.6 C13.4 4.4 16.4 2.8 19 3.6" fill="none" stroke="${water}" stroke-width="1.7" />
        <circle cx="7" cy="6.2" r="0.9" fill="${water}" />
        <circle cx="19.8" cy="6.2" r="0.9" fill="${water}" />
        <circle cx="10.2" cy="1.9" r="0.7" fill="${water}" />
        <circle cx="16.6" cy="1.9" r="0.7" fill="${water}" />
        <!-- Body -->
        <path d="${bodyD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Belly -->
        <path d="M3.8 22 C6.4 25.4 22 26.8 25.4 21.4 C24 25.4 19.6 26.8 14 26.8 C8.6 26.8 5 25 3.8 22 Z" fill="${k.alt('#E0F2FE')}" ${k.ast} />
        <!-- Eye and smile -->
        <circle cx="8.4" cy="18" r="1.2" fill="${k.eye}" />
        <circle cx="8.8" cy="17.6" r="0.45" fill="${hl}" />
        <path d="M4.6 21 C6 22 7.6 22 8.8 21.2" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        <!-- Flipper -->
        <path d="M13 21 C15 21.4 16.8 23 17.2 24.8 C15 25 13 23.6 12.2 21.6 Z" fill="${k.alt('#2563EB')}" ${k.ast} />
      </g>`;
    },
  },

  // 53. Horse Face (U+1F434)
  {
    id: 'horse-face',
    char: '🐴',
    name: 'Horse Face',
    unicodeHex: 'U+1F434',
    category: 'objects-places',
    tags: ['horse face', 'horse', 'equine', 'stallion', 'mane', 'animal', 'cute', 'farm', '🐴'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#B7791F', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const headD = 'M9 9.4 C9 7.2 11.4 6.4 16 6.4 C20.6 6.4 23 7.2 23 9.4 C24 15.4 22.8 20 21.8 23.6 C21.2 27 19 28.6 16 28.6 C13 28.6 10.8 27 10.2 23.6 C9.2 20 8 15.4 9 9.4 Z';
      const ears = pair(`
        <path d="M9.6 10.4 L7.4 3.2 L13.4 7.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M9.8 9 L8.8 5.8 L11.4 7.6 Z" fill="${k.alt('#FDA4AF')}" ${k.ast} />`);
      const mane = k.o ? 'none' : k.dark('#5B2E0F');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('horse-ears', `<path d="${headD}" fill="#000" />`, ears)}
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Forelock -->
        <path d="M12 6.8 C12.2 10 14.4 12.2 16 14 C17.6 12.2 19.8 10 20 6.8 C18 8.2 14 8.2 12 6.8 Z" fill="${mane}" ${k.o ? k.st : 'stroke="none"'} />
        <!-- Muzzle -->
        <ellipse cx="16" cy="24.6" rx="4.8" ry="3.4" fill="${k.alt('#F5D0A9')}" ${k.ast} />
        <ellipse cx="14.2" cy="24.6" rx="0.8" ry="1.2" fill="${k.eye}" transform="rotate(-20 14.2 24.6)" />
        <ellipse cx="17.8" cy="24.6" rx="0.8" ry="1.2" fill="${k.eye}" transform="rotate(20 17.8 24.6)" />
        <!-- Eyes -->
        ${dot(12, 16.4, 1.3)}${dot(20, 16.4, 1.3)}
      </g>`;
    },
  },

  // 54. Monkey Face (U+1F435)
  {
    id: 'monkey-face',
    char: '🐵',
    name: 'Monkey Face',
    unicodeHex: 'U+1F435',
    category: 'objects-places',
    tags: ['monkey face', 'monkey', 'primate', 'animal', 'jungle', 'cute', 'ears', '🐵'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#B45309', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const ears = pair(`
        <circle cx="5.4" cy="16.6" r="3.8" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="5.6" cy="16.6" r="2" fill="${k.alt('#FDE3B4')}" ${k.ast} />`);
      const faceD = 'M16 14.6 C14.6 11.8 10.4 11.8 9.6 15.2 C8.8 18.8 9.6 22.2 11.6 24.4 C13 26 19 26 20.4 24.4 C22.4 22.2 23.2 18.8 22.4 15.2 C21.6 11.8 17.4 11.8 16 14.6 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('monkey-ears', `<circle cx="16" cy="16.6" r="10.6" fill="#000" />`, ears)}
        <circle cx="16" cy="16.6" r="10.6" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="${faceD}" fill="${k.alt('#FDE3B4')}" ${k.ast} />
        ${dot(12.6, 16.6, 1.2)}${dot(19.4, 16.6, 1.2)}
        <circle cx="15" cy="20.4" r="0.45" fill="${k.eye}" /><circle cx="17" cy="20.4" r="0.45" fill="${k.eye}" />
        <path d="M12.8 22.6 C14.4 24.4 17.6 24.4 19.2 22.6" fill="none" stroke="${k.ln}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 55. Dog Face (U+1F436)
  {
    id: 'dog-face',
    char: '🐶',
    name: 'Dog Face',
    unicodeHex: 'U+1F436',
    category: 'objects-places',
    tags: ['dog face', 'dog', 'puppy', 'pet', 'canine', 'cute', 'animal', 'floppy ears', '🐶'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#E3A857', fillSecondary: '#8B4A1C', stroke: '#8A5A1F' });
      const headD = 'M7.4 14 C7.4 9.6 11 7.6 16 7.6 C21 7.6 24.6 9.6 24.6 14 C24.6 20 21.4 26.6 16 26.6 C10.6 26.6 7.4 20 7.4 14 Z';
      const ear = `<path d="M8.6 9.6 C5.4 8.8 3.2 11.2 3.6 15.6 C4 19.2 6 20.6 8.2 19.4 C9.2 16 9.2 12.6 8.6 9.6 Z" fill="${k.alt('#8B4A1C')}" ${k.ast} />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Muzzle -->
        <ellipse cx="16" cy="20.8" rx="5" ry="4" fill="${k.alt('#FFF7ED')}" ${k.ast} />
        <!-- Floppy ears -->
        ${k.s ? '' : ''}${pair(`<path d="M8.6 9.6 C5.4 8.8 3.2 11.2 3.6 15.6 C4 19.2 6 20.6 8.2 19.4 C9.2 16 9.2 12.6 8.6 9.6 Z" fill="${k.alt('#8B4A1C')}" ${k.o || k.s ? k.st : 'stroke="' + c.stroke + '" stroke-width="' + k.t + '"'} />`)}
        <!-- Eyes, nose, mouth -->
        ${dot(12.2, 14.2, 1.3)}${dot(19.8, 14.2, 1.3)}
        <ellipse cx="16" cy="18.6" rx="2.3" ry="1.6" fill="${k.eye}" />
        <path d="M16 20.2 V21.6 M13.4 21.8 C14.6 23 15.6 22.6 16 21.6 C16.4 22.6 17.4 23 18.6 21.8" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        <path d="M14.8 22.8 C14.8 25.6 17.2 25.6 17.2 22.8 Z" fill="${k.o ? 'none' : k.s ? c.primary : '#F472B6'}" ${k.o ? k.st : k.s ? `stroke="#FFFFFF" stroke-width="0.7"` : 'stroke="none"'} />
      </g>`;
    },
  },

  // 56. Pig Face (U+1F437)
  {
    id: 'pig-face',
    char: '🐷',
    name: 'Pig Face',
    unicodeHex: 'U+1F437',
    category: 'objects-places',
    tags: ['pig face', 'pig', 'piggy', 'snout', 'pink', 'cute', 'animal', 'farm', 'oink', '🐷'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#FBA7B8', fillSecondary: '#F472A0', stroke: '#C73E63' });
      const headD = 'M16 7.8 C22.8 7.8 27.2 12 27.2 17.4 C27.2 23.2 22.6 27 16 27 C9.4 27 4.8 23.2 4.8 17.4 C4.8 12 9.2 7.8 16 7.8 Z';
      const ears = pair(`
        <path d="M7.8 12.6 C6.2 9.6 6.4 6.6 7.8 4.8 C10.4 5.4 12.8 7.4 14 9.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M8.8 10.4 C8.2 8.8 8.4 7.6 9 6.8 C10.4 7.2 11.6 8.2 12.2 9.4 Z" fill="${k.alt('#F472A0')}" ${k.ast} />`);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('pig-ears', `<path d="${headD}" fill="#000" />`, ears)}
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="16" cy="20.2" rx="5" ry="3.8" fill="${k.alt('#F9A0B3')}" ${k.o ? k.st : k.d ? 'stroke="none"' : `stroke="${c.stroke}" stroke-width="${k.t}"`} />
        <ellipse cx="14.1" cy="20.2" rx="0.85" ry="1.3" fill="${k.eye}" />
        <ellipse cx="17.9" cy="20.2" rx="0.85" ry="1.3" fill="${k.eye}" />
        ${dot(11, 15, 1.3)}${dot(21, 15, 1.3)}
      </g>`;
    },
  },

  // 57. Frog (U+1F438)
  {
    id: 'frog',
    char: '🐸',
    name: 'Frog',
    unicodeHex: 'U+1F438',
    category: 'objects-places',
    tags: ['frog', 'toad', 'amphibian', 'green', 'ribbit', 'cute', 'animal', 'pond', '🐸'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#4ADE80', fillSecondary: '#BBF7D0', stroke: '#15803D' });
      const headD = 'M16 10.4 C24 10.4 28.6 14.4 28.6 19.2 C28.6 24.6 23.2 27.6 16 27.6 C8.8 27.6 3.4 24.6 3.4 19.2 C3.4 14.4 8 10.4 16 10.4 Z';
      const sclera = k.o ? 'none' : k.s ? '#FFFFFF' : '#FFFFFF';
      const pupil = k.o ? c.stroke : k.s ? c.primary : '#0F172A';
      const bumps = pair(`<circle cx="10.4" cy="10.2" r="4.6" fill="${k.fill(c.primary)}" ${k.st} />`);
      const bumpCover = `<circle cx="10.4" cy="10.2" r="4.6" fill="#000" /><circle cx="21.6" cy="10.2" r="4.6" fill="#000" />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('frog-head', bumpCover, `<path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />`)}
        ${bumps}
        ${pair(`<circle cx="10.4" cy="10.2" r="3" fill="${sclera}" ${k.o ? k.st : 'stroke="none"'} /><circle cx="10.8" cy="10.4" r="1.5" fill="${pupil}" />`)}
        <circle cx="14.6" cy="17" r="0.5" fill="${k.eye}" /><circle cx="17.4" cy="17" r="0.5" fill="${k.eye}" />
        <path d="M7.8 20.2 C11.4 25.2 20.6 25.2 24.2 20.2" fill="none" stroke="${k.ln}" stroke-width="1.1" />
        ${pair(`<ellipse cx="7.8" cy="21.6" rx="2" ry="1.3" fill="${k.alt('#FDA4AF')}" ${k.ast} />`)}
      </g>`;
    },
  },

  // 58. Hamster (U+1F439)
  {
    id: 'hamster',
    char: '🐹',
    name: 'Hamster',
    unicodeHex: 'U+1F439',
    category: 'objects-places',
    tags: ['hamster', 'rodent', 'pet', 'cheeks', 'cute', 'animal', 'fluffy', '🐹'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#F4A340', fillSecondary: '#FDA4AF', stroke: '#B45309' });
      const headD = 'M16 8 C23.2 8 28 12.4 28 18 C28 23.6 22.8 27.4 16 27.4 C9.2 27.4 4 23.6 4 18 C4 12.4 8.8 8 16 8 Z';
      const ears = pair(`<circle cx="8.6" cy="9.6" r="3.6" fill="${k.fill(c.primary)}" ${k.st} /><circle cx="8.8" cy="9.8" r="1.9" fill="${k.alt('#FDA4AF')}" ${k.ast} />`);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('hamster-ears', `<path d="${headD}" fill="#000" />`, ears)}
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Light cheeks / muzzle -->
        <path d="M16 17.8 C12 16.8 6.4 19.4 7.2 23 C8.4 26 12.4 27 16 27 C19.6 27 23.6 26 24.8 23 C25.6 19.4 20 16.8 16 17.8 Z" fill="${k.alt('#FFF7ED')}" ${k.ast} />
        ${pair(`<ellipse cx="8.8" cy="21" rx="1.7" ry="1.2" fill="${k.d ? c.stroke : k.o ? 'none' : k.s ? '#FFFFFF' : '#FDA4AF'}" stroke="none" opacity="${k.d ? 0.4 : 1}" />`)}
        ${dot(11.2, 16, 1.3)}${dot(20.8, 16, 1.3)}
        <path d="M14.8 19.2 H17.2 L16 20.4 Z" fill="${k.s ? '#FFFFFF' : k.o ? c.stroke : '#F472B6'}" stroke="none" />
        <path d="M16 20.4 V21.4 M13.6 21.8 C14.6 22.8 15.6 22.6 16 21.4 C16.4 22.6 17.4 22.8 18.4 21.8" fill="none" stroke="${k.ln}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 59. Wolf (U+1F43A)
  {
    id: 'wolf',
    char: '🐺',
    name: 'Wolf',
    unicodeHex: 'U+1F43A',
    category: 'objects-places',
    tags: ['wolf', 'canine', 'howl', 'wild', 'predator', 'grey', 'animal', 'forest', '🐺'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#8391A5', fillSecondary: '#E2E8F0', stroke: '#475569' });
      const headD = 'M5.8 3.8 L12 8.8 C14 8.2 18 8.2 20 8.8 L26.2 3.8 C27.4 9.6 27 14 25.8 17.6 C24.8 22.6 20.2 27.6 16 28.8 C11.8 27.6 7.2 22.6 6.2 17.6 C5 14 4.6 9.6 5.8 3.8 Z';
      const muzzleD = 'M16 15.4 C13 15.4 9.4 18.8 9.6 22.4 C10.4 25.8 13.4 28 16 28.4 C18.6 28 21.6 25.8 22.4 22.4 C22.6 18.8 19 15.4 16 15.4 Z';
      const sclera = k.o ? 'none' : k.s ? '#FFFFFF' : '#FDE047';
      const pupil = k.o ? c.stroke : k.s ? c.primary : '#0F172A';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        ${pair(`<path d="M7.2 7 L10.8 9.6 C9.4 10.4 8.4 11.8 8 13.4 C7.4 11.4 7.2 9.2 7.2 7 Z" fill="${k.alt('#4B5563')}" ${k.ast} />`)}
        <path d="${muzzleD}" fill="${k.alt('#E2E8F0')}" ${k.ast} />
        ${pair(`<path d="M9.2 15.6 C10.4 14.4 12.6 14.6 13.8 16.4 C12.4 17.4 10.4 17.2 9.2 15.6 Z" fill="${sclera}" ${k.o ? k.st : 'stroke="none"'} /><circle cx="11.8" cy="15.9" r="0.8" fill="${pupil}" />`)}
        <path d="M13.6 20 H18.4 C18.2 21.8 17.2 22.8 16 23.2 C14.8 22.8 13.8 21.8 13.6 20 Z" fill="${k.eye}" />
        <path d="M16 23.2 V24.6 M13.4 25.2 C14.6 26 15.6 25.6 16 24.6 C16.4 25.6 17.4 26 18.6 25.2" fill="none" stroke="${k.ln}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 60. Bear (U+1F43B)
  {
    id: 'bear',
    char: '🐻',
    name: 'Bear',
    unicodeHex: 'U+1F43B',
    category: 'objects-places',
    tags: ['bear', 'grizzly', 'brown bear', 'teddy', 'wild', 'forest', 'animal', '🐻'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#B0682B', fillSecondary: '#F3C99A', stroke: '#6B3410' });
      const ears = pair(`<circle cx="7.8" cy="8.8" r="3.8" fill="${k.fill(c.primary)}" ${k.st} /><circle cx="7.8" cy="8.8" r="2" fill="${k.alt('#F3C99A')}" ${k.ast} />`);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('bear-ears', `<circle cx="16" cy="17.4" r="10.2" fill="#000" />`, ears)}
        <circle cx="16" cy="17.4" r="10.2" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="16" cy="21.4" rx="4.9" ry="3.8" fill="${k.alt('#F3C99A')}" ${k.ast} />
        ${dot(11.4, 15.2, 1.3)}${dot(20.6, 15.2, 1.3)}
        <ellipse cx="16" cy="19.4" rx="2.1" ry="1.5" fill="${k.eye}" />
        <path d="M16 20.8 V22.4 M13.8 22.8 C14.8 23.8 15.6 23.6 16 22.4 C16.4 23.6 17.2 23.8 18.2 22.8" fill="none" stroke="${k.ln}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 61. Panda (U+1F43C)
  {
    id: 'panda',
    char: '🐼',
    name: 'Panda',
    unicodeHex: 'U+1F43C',
    category: 'objects-places',
    tags: ['panda', 'giant panda', 'bear', 'bamboo', 'china', 'cute', 'animal', 'black and white', '🐼'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#1E293B', stroke: '#334155' }, true);
      const patch = k.o ? 'none' : k.s ? '#FFFFFF' : k.d ? c.secondary : '#1E293B';
      const patchSt = k.o ? k.st : 'stroke="none"';
      const ears = pair(`<circle cx="7.8" cy="8.6" r="3.8" fill="${patch}" ${patchSt} />`);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('panda-ears', `<circle cx="16" cy="17.4" r="10.2" fill="#000" />`, ears)}
        <circle cx="16" cy="17.4" r="10.2" fill="${k.fill(c.primary)}" ${k.st} />
        ${pair(`<ellipse cx="11.2" cy="16" rx="2.6" ry="3.3" transform="rotate(-20 11.2 16)" fill="${patch}" ${patchSt} />
        <circle cx="11.5" cy="15.8" r="1" fill="${k.o ? c.stroke : k.s ? c.primary : '#FFFFFF'}" />`)}
        <ellipse cx="16" cy="19.8" rx="1.9" ry="1.3" fill="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#1E293B'}" />
        <path d="M16 21 V22.2 M13.8 22.6 C14.8 23.8 15.6 23.4 16 22.2 C16.4 23.4 17.2 23.8 18.2 22.6" fill="none" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#1E293B'}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 62. Pig Nose (U+1F43D)
  {
    id: 'pig-nose',
    char: '🐽',
    name: 'Pig Nose',
    unicodeHex: 'U+1F43D',
    category: 'objects-places',
    tags: ['pig nose', 'snout', 'oink', 'pink', 'nostrils', 'animal', 'cute', '🐽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDA4AF', fillSecondary: '#E11D48', stroke: '#E11D48' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="10" ry="7.5" />
          <ellipse cx="12.5" cy="16" rx="2" ry="3" />
          <ellipse cx="19.5" cy="16" rx="2" ry="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="16" cy="16" rx="10" ry="7.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="12.5" cy="16" rx="2" ry="3" fill="${opts.style === 'duotone' ? c.secondary : '#E11D48'}" />
        <ellipse cx="19.5" cy="16" rx="2" ry="3" fill="${opts.style === 'duotone' ? c.secondary : '#E11D48'}" />
      </g>`;
    },
  },

  // 63. Paw Prints (U+1F43E)
  {
    id: 'paw-prints',
    char: '🐾',
    name: 'Paw Prints',
    unicodeHex: 'U+1F43E',
    category: 'objects-places',
    tags: ['paw prints', 'feet', 'tracks', 'dog', 'cat', 'animal', 'pet', 'footprint', 'claws', '🐾'],
    renderContent: (opts) => {
      const { c, k, badge } = prep(opts, { fillPrimary: '#8B5A2B', fillSecondary: '#D9A066', stroke: '#5B3A1A' });
      const toeFill = k.o ? 'none' : k.s ? c.primary : k.d ? c.secondary : '#8B5A2B';
      const sw = k.o ? `stroke="${c.stroke}" stroke-width="${k.t}"` : 'stroke="none"';
      const paw = (x: number, y: number, rot: number) => `<g transform="translate(${x} ${y}) rotate(${rot})">
        <path d="M0 1.2 C-3.6 1.2 -5.8 3.6 -5.8 5.8 C-5.8 8.2 -3 8.8 0 8 C3 8.8 5.8 8.2 5.8 5.8 C5.8 3.6 3.6 1.2 0 1.2 Z" fill="${k.fill(c.primary)}" ${sw} />
        <ellipse cx="-5.6" cy="-2" rx="1.7" ry="2.3" transform="rotate(-25 -5.6 -2)" fill="${toeFill}" ${sw} />
        <ellipse cx="-2" cy="-5.4" rx="1.7" ry="2.4" transform="rotate(-8 -2 -5.4)" fill="${toeFill}" ${sw} />
        <ellipse cx="2" cy="-5.4" rx="1.7" ry="2.4" transform="rotate(8 2 -5.4)" fill="${toeFill}" ${sw} />
        <ellipse cx="5.6" cy="-2" rx="1.7" ry="2.3" transform="rotate(25 5.6 -2)" fill="${toeFill}" ${sw} />
      </g>`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${paw(10.4, 21, -18)}
        ${paw(21.6, 11, 18)}
      </g>`;
    },
  },

  // 64. Chipmunk (U+1F43F)
  {
    id: 'chipmunk',
    char: '🐿',
    name: 'Chipmunk',
    unicodeHex: 'U+1F43F',
    category: 'objects-places',
    tags: ['chipmunk', 'squirrel', 'rodent', 'nuts', 'acorn', 'animal', 'bushy tail', 'forest', '🐿'],
    renderContent: (opts) => {
      const { c, k, badge, dot } = prep(opts, { fillPrimary: '#D97706', fillSecondary: '#FEF3C7', stroke: '#92400E' });
      const stripe = k.o ? c.stroke : k.s ? '#FFFFFF' : k.d ? c.secondary : '#78350F';
      const tailD = 'M19 25.6 C26.6 26.8 29.4 19.6 27.8 13.6 C26.6 9 22 6.4 19.8 8.6 C22.2 9.8 23 12 22.2 14.6 C21.4 17.4 19 19 16.6 20 Z';
      const bodyD = 'M12.6 12.6 C8.8 14.6 8.4 20.8 10.8 25.2 C12.8 28.6 19 28.6 20.4 25.2 C21.6 21.6 20.4 15.6 17 12.8 C15.6 11.8 13.8 11.8 12.6 12.6 Z';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('chip-tail', `<path d="${bodyD}" fill="#000" />`, `<path d="${tailD}" fill="${k.fill(c.primary)}" ${k.st} /><path d="M24.4 9.6 C25.4 12 25.6 14.4 25 16.6 M26.6 16.4 C26.8 19 25.6 21.6 23 23.4" fill="none" stroke="${stripe}" stroke-width="1.1" />`)}
        <path d="${bodyD}" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="13.4" cy="21.6" rx="3" ry="5" fill="${k.alt('#FEF3C7')}" ${k.ast} />
        <path d="M17.2 14.4 C18.8 17.4 19.2 21 18.4 24" fill="none" stroke="${stripe}" stroke-width="1.2" />
        <!-- Head -->
        <circle cx="11" cy="10.4" r="5" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="14" cy="6.2" r="1.9" fill="${k.fill(c.primary)}" ${k.st} />
        ${dot(8.8, 9.6, 1)}
        <circle cx="6.4" cy="11.2" r="0.85" fill="${k.eye}" />
        <path d="M7.4 13 C8.4 13.6 9.4 13.6 10.2 13" fill="none" stroke="${k.ln}" stroke-width="0.8" />
        <!-- Acorn held in paws -->
        <path d="M6.6 19 C6.6 17.2 10.8 17.2 10.8 19 Z" fill="${k.o ? 'none' : k.s ? '#FFFFFF' : k.d ? c.stroke : '#78350F'}" ${k.o ? k.st : 'stroke="none"'} />
        <path d="M6.8 19 H10.6 C10.6 21.8 9.2 23 8.7 23 C8.2 23 6.8 21.8 6.8 19 Z" fill="${k.o ? 'none' : k.s ? '#FFFFFF' : '#D6A15A'}" ${k.o ? k.st : 'stroke="none"'} />
        <circle cx="11.4" cy="18.8" r="1.2" fill="${k.fill(c.primary)}" ${k.st} />
      </g>`;
    },
  },
];