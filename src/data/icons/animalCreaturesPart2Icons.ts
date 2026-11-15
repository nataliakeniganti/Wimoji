import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared helpers (animals are drawn in a 32x32 box, facing left) ----
type AnimalOpts = { style?: string; strokeWidth?: number };
type AnimalColors = { primary: string; secondary: string; stroke: string };

const kit = (opts: AnimalOpts, c: AnimalColors) => {
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : Math.max(0.9, sw * 0.55);
  return {
    o, d, s, t,
    fill: (v: string) => (o ? 'none' : v),
    alt: (lit: string) => (o ? 'none' : d ? c.secondary : lit),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${c.stroke}" stroke-width="${t}"`,
    tube: (path: string, w: number, fillCol: string) =>
      o
        ? `<path d="${path}" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(1.4, t * 1.5)}" />`
        : `<path d="${path}" fill="none" stroke="${c.stroke}" stroke-width="${w + t * 2}" /><path d="${path}" fill="none" stroke="${fillCol}" stroke-width="${w}" />`,
  };
};

export const animalCreaturesPart2Icons: WimojiIconDef[] = [
  // 21. Chicken (U+1F414)
  {
    id: 'chicken',
    char: '🐔',
    name: 'Chicken',
    unicodeHex: 'U+1F414',
    category: 'objects-places',
    tags: ['chicken', 'hen', 'bird', 'poultry', 'farm', 'animal', 'egg', '🐔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#EF4444', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const red = k.alt('#EF4444');
      const orange = k.alt('#F59E0B');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs -->
        <path d="M14 24 L13.6 28 M13.6 28 L11.6 28.6 M13.6 28 L15.4 28.8 M19 24.2 L19.4 28 M19.4 28 L17.6 28.8 M19.4 28 L21.2 28.6" fill="none" stroke="${k.o ? c.stroke : k.d ? c.secondary : '#F59E0B'}" stroke-width="1.4" />
        <!-- Tail feathers -->
        <path d="M23 17 C25.5 14.5 27 12 27.4 8.6 C29.6 12 29.4 17 26.4 21.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Plump body -->
        <ellipse cx="16.2" cy="18.6" rx="9" ry="6.6" transform="rotate(-6 16.2 18.6)" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Neck and head -->
        <ellipse cx="11" cy="14.4" rx="3.6" ry="4.4" transform="rotate(-12 11 14.4)" fill="${k.fill(c.primary)}" stroke="none" />
        <!-- Wing -->
        <path d="M13.4 17 C17 15.4 22 16.6 22.4 19.6 C20.6 23 15 22.8 13.4 17 Z" fill="${k.alt('#F1F5F9')}" ${k.st} stroke-width="0.8" />
        <path d="M16 18.6 C17.6 18.2 19.4 18.6 20.4 19.6" fill="none" ${k.st} stroke-width="0.6" />
        <!-- Comb, wattle, beak -->
        <g fill="${red}" ${k.st} stroke-width="0.7">
          <circle cx="8" cy="6.8" r="1.4" /><circle cx="10.2" cy="6" r="1.5" /><circle cx="12.2" cy="7" r="1.3" />
          <ellipse cx="7.2" cy="13.4" rx="1.1" ry="1.7" />
        </g>
        <circle cx="10" cy="10.4" r="3.6" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M6.9 9.6 L3.6 10.8 L6.9 12.2 Z" fill="${orange}" ${k.st} stroke-width="0.7" />
        <circle cx="8.9" cy="9.6" r="0.8" fill="${k.eye}" />
      </g>`;
    },
  },

  // 22. Dog (U+1F415)
  {
    id: 'dog',
    char: '🐕',
    name: 'Dog',
    unicodeHex: 'U+1F415',
    category: 'objects-places',
    tags: ['dog', 'puppy', 'pet', 'canine', 'animal', 'domestic', 'man best friend', '🐕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#92400E', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const dark = k.alt('#78350F');
      const legs = [9.8, 12.8, 21, 24].map((x) =>
        `<rect x="${x}" y="17" width="2.7" height="10.5" rx="1.2" fill="${k.fill(c.primary)}" ${k.st} />` +
        (k.o ? '' : `<ellipse cx="${x + 1.35}" cy="27" rx="1.9" ry="1" fill="${k.alt('#FDE68A')}" ${k.st} />`)
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        ${k.tube('M26.6 12.4 C29 11.6 29.6 8.6 28 6', 2.4, c.primary)}
        ${legs}
        <!-- Body -->
        <path d="M9 12.5 C9 10.3 12 10 16 10 H22 C25.4 10 27.2 11.6 27.2 14.4 C27.2 17.6 25.4 19 22 19 H12.5 C10 19 9 16.6 9 12.5 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Cream chest patch -->
        <path d="M9.4 15 C10.6 17.8 12.4 18.8 14.4 18.8 C14 16.8 12 15.4 9.4 15 Z" fill="${k.alt('#FDE68A')}" stroke="none" />
        <!-- Head and snout -->
        <ellipse cx="7.4" cy="11.4" rx="4.6" ry="4.1" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M5.6 12 C3.4 11.4 1.8 12.4 1.8 14 C1.8 15.6 3.2 16.2 5.4 16 C7 15.8 8 14.8 8 13.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="2.4" cy="13.4" r="1" fill="${k.o ? c.stroke : '#0F172A'}" />
        <path d="M3.6 15.6 C5 16.6 6.6 16.4 7.4 15.6" fill="none" ${k.st} stroke-width="0.7" />
        <!-- Tongue -->
        <path d="M5 16 C5 18.4 6.8 18.4 6.8 16 Z" fill="${k.alt('#FB7185')}" ${k.st} stroke-width="0.6" />
        <!-- Floppy ear -->
        <path d="M9.4 8.6 C12 8.4 13 11 12.2 14 C10.4 14.6 9 12.6 8.8 10.6 Z" fill="${dark}" ${k.st} stroke-width="0.8" />
        <circle cx="6.8" cy="10.4" r="0.85" fill="${k.eye}" />
        <!-- Collar -->
        <path d="M10.4 12.2 C11.4 13.6 11.6 15.6 11 17" fill="none" stroke="${k.o ? c.stroke : k.d ? c.secondary : '#EF4444'}" stroke-width="1.6" />
      </g>`;
    },
  },

  // 23. Pig (U+1F416)
  {
    id: 'pig',
    char: '🐖',
    name: 'Pig',
    unicodeHex: 'U+1F416',
    category: 'objects-places',
    tags: ['pig', 'sow', 'farm', 'animal', 'pork', 'pink', 'zodiac', 'oink', '🐖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDA4AF', fillSecondary: '#F43F5E', stroke: '#E11D48' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const snout = k.alt('#FB7185');
      const legs = [8.6, 12.4, 20.6, 24.2].map((x) =>
        `<rect x="${x}" y="20" width="3" height="7.5" rx="1.3" fill="${k.fill(c.primary)}" ${k.st} />` +
        (k.o ? '' : `<rect x="${x}" y="25.6" width="3" height="1.9" rx="0.8" fill="${k.alt('#BE123C')}" stroke="none" />`)
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Curly tail -->
        <path d="M26.6 14 C29.8 13.4 29.8 10.4 27.8 10.8 C26.2 11.2 26.8 13.2 28.6 12.6" fill="none" stroke="${c.stroke}" stroke-width="1.3" />
        ${legs}
        <!-- Body -->
        <ellipse cx="17" cy="16.6" rx="10.6" ry="6.8" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Head and snout -->
        <ellipse cx="8.4" cy="15.6" rx="5.4" ry="5.2" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="4" cy="17" rx="2.4" ry="3" fill="${snout}" ${k.st} />
        <circle cx="3.6" cy="16.2" r="0.5" fill="${k.o ? c.stroke : '#9F1239'}" />
        <circle cx="3.6" cy="18" r="0.5" fill="${k.o ? c.stroke : '#9F1239'}" />
        <!-- Ear -->
        <path d="M8 11.2 L10 7.2 L13 11.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M9.4 10.6 L10.2 8.8 L11.6 10.8 Z" fill="${snout}" stroke="none" />
        <circle cx="7.6" cy="13.4" r="0.85" fill="${k.eye}" />
      </g>`;
    },
  },

  // 24. Boar (U+1F417)
  {
    id: 'boar',
    char: '🐗',
    name: 'Boar',
    unicodeHex: 'U+1F417',
    category: 'objects-places',
    tags: ['boar', 'wild boar', 'pig', 'animal', 'zodiac', 'tusks', 'forest', '🐗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#FEF08A', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const tusk = k.alt('#FEF3C7');
      const dark = k.alt('#451A03');
      const legs = [8.8, 12.4, 21, 24.2].map((x) =>
        `<rect x="${x}" y="19.5" width="2.6" height="8" rx="1.1" fill="${k.fill(c.primary)}" ${k.st} />` +
        (k.o ? '' : `<rect x="${x}" y="25.8" width="2.6" height="1.7" rx="0.7" fill="${dark}" stroke="none" />`)
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        <path d="M27.2 13.6 C29 14.6 29.2 17 28.2 18.6" fill="none" stroke="${c.stroke}" stroke-width="1.3" />
        ${legs}
        <!-- Body, highest at the shoulders -->
        <path d="M7.5 15 C7.5 10 11 8.6 15 9.2 C20 9.8 27.6 10.2 27.6 16 C27.6 21 24 22 20 22 H13 C9.5 22 7.5 19 7.5 15 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Bristly mane -->
        <path d="M9.6 10.4 L10.4 6.8 L12.2 9.2 L13.6 6 L15.2 8.8 L17 6 L18.4 9 L20.4 6.8 L21.4 9.8 L23.6 8.4 L23.8 11 Z" fill="${dark === 'none' ? 'none' : (k.d ? c.secondary : '#451A03')}" ${k.st} stroke-width="0.7" />
        <!-- Head, snout, tusk -->
        <ellipse cx="8.6" cy="16" rx="5.2" ry="4.8" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="3.8" cy="17.8" rx="3" ry="2.4" fill="${k.alt('#92400E')}" ${k.st} />
        <circle cx="2.4" cy="17.2" r="0.5" fill="${k.o ? c.stroke : '#0F172A'}" />
        <circle cx="2.6" cy="18.8" r="0.5" fill="${k.o ? c.stroke : '#0F172A'}" />
        <path d="M5.6 19.2 C5 18 5.2 16.2 6.4 15.2 C6.8 16.6 6.6 18 6.4 19.4 Z" fill="${tusk}" ${k.st} stroke-width="0.7" />
        <!-- Ear and eye -->
        <path d="M9 12 L10.8 8.4 L13 12.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="7.4" cy="14.6" r="0.85" fill="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#FEF08A'}" />
      </g>`;
    },
  },

  // 25. Elephant (U+1F418)
  {
    id: 'elephant',
    char: '🐘',
    name: 'Elephant',
    unicodeHex: 'U+1F418',
    category: 'objects-places',
    tags: ['elephant', 'safari', 'trunk', 'animal', 'huge', 'africa', 'asia', 'tusks', 'grey', '🐘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#FDA4AF', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const legs = [11.4, 15.6, 21, 25].map((x) =>
        `<rect x="${x}" y="18" width="3.8" height="9.6" rx="1.6" fill="${k.fill(c.primary)}" ${k.st} />` +
        (k.o ? '' : `<path d="M${x + 0.6} 26.6 H${x + 3.2}" stroke="${k.alt('#F1F5F9')}" stroke-width="1" fill="none" />`)
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        <path d="M28 11.6 C29.8 13.6 29.8 17 28.8 19.4" fill="none" stroke="${c.stroke}" stroke-width="1.3" />
        ${legs}
        <!-- Body -->
        <path d="M10 12 C10 8.8 13.4 8.2 18 8.2 C24.6 8.2 28.4 10.2 28.4 15 C28.4 19.4 26 21.2 22 21.2 H14 C11.4 21.2 10 18.4 10 12 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Head -->
        <circle cx="9" cy="12.4" r="5.6" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Trunk -->
        ${k.tube('M5.2 14.6 C3 17 2.6 21 3.6 23.6 C4.2 25.2 6 24.8 5.6 23.2', 3.2, c.primary)}
        <!-- Ear -->
        <path d="M11 8.6 C15.6 8.4 17 14 14.2 18 C11.6 18.6 9.8 15.6 10.4 11.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M11.6 10.8 C14 11.4 14.6 14.6 13.2 16.2 C11.8 15.6 11.2 13 11.6 10.8 Z" fill="${k.alt(c.secondary)}" stroke="none" opacity="0.8" />
        <!-- Tusk and eye -->
        <path d="M6.6 17.4 C8.8 18 9.6 19.8 9 21.4" fill="none" stroke="${k.o ? c.stroke : '#FEF3C7'}" stroke-width="1.6" />
        <circle cx="7" cy="11.6" r="0.85" fill="${k.eye}" />
      </g>`;
    },
  },

  // 26. Octopus (U+1F419)
  {
    id: 'octopus',
    char: '🐙',
    name: 'Octopus',
    unicodeHex: 'U+1F419',
    category: 'objects-places',
    tags: ['octopus', 'tentacles', 'sea', 'ocean', 'creature', 'marine', 'mollusk', 'purple', '🐙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', fillSecondary: '#C084FC', stroke: '#6B21A8' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const arms = [
        'M9.5 17.5 C7 20 4.4 20.4 4 23.6 C3.8 25.6 6.2 26 6.4 24.4',
        'M12 18.5 C10.4 21.6 9.2 24 10.4 26.6 C11.2 28 13 27.4 12.6 25.8',
        'M16 18.8 C15.6 22 15.4 25 16.6 27.4 C17.4 28.6 19 27.8 18.4 26.2',
        'M20 18.5 C21.4 21.6 22.8 24 21.6 26.6 C20.8 28 19 27.4 19.6 25.8',
        'M22.5 17.5 C25 20 27.6 20.4 28 23.6 C28.2 25.6 25.8 26 25.6 24.4',
      ];
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${arms.map((a) => k.tube(a, 2.6, c.primary)).join('\n        ')}
        <!-- Head -->
        <path d="M6.8 14 C6.8 5.2 25.2 5.2 25.2 14 C25.2 17.4 23.6 19 21 19 H11 C8.4 19 6.8 17.4 6.8 14 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <g fill="${k.alt(c.secondary)}" stroke="none"><circle cx="13" cy="8.8" r="1.1" /><circle cx="17" cy="7.6" r="1.3" /><circle cx="20.2" cy="9.4" r="1" /></g>
        <!-- Eyes and smile -->
        <circle cx="12" cy="13" r="2.2" fill="${k.o ? 'none' : '#FFFFFF'}" ${k.st} stroke-width="0.7" />
        <circle cx="20" cy="13" r="2.2" fill="${k.o ? 'none' : '#FFFFFF'}" ${k.st} stroke-width="0.7" />
        <circle cx="12.3" cy="13.2" r="1.1" fill="${k.o ? c.stroke : '#0F172A'}" />
        <circle cx="20.3" cy="13.2" r="1.1" fill="${k.o ? c.stroke : '#0F172A'}" />
        <path d="M14.4 16.6 C15.4 17.6 16.6 17.6 17.6 16.6" fill="none" ${k.st} stroke-width="0.8" />
      </g>`;
    },
  },

  // 27. Spiral Shell (U+1F41A)
  {
    id: 'spiral-shell',
    char: '🐚',
    name: 'Spiral Shell',
    unicodeHex: 'U+1F41A',
    category: 'objects-places',
    tags: ['shell', 'spiral shell', 'seashell', 'beach', 'ocean', 'marine', 'snail', 'conch', '🐚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE68A', fillSecondary: '#FDA4AF', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Pointed apex -->
        <path d="M16 10.4 L20 4.4 L24 11.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M18 8 L20.8 9.6 M19.4 6 L22 7.8" fill="none" ${k.st} stroke-width="0.8" />
        <!-- Rounded body whorl -->
        <path d="M4.6 19 C4.6 12.4 10.4 8.8 16.4 9.8 C22.6 10.8 27.4 15.4 26.4 21 C25.4 26 19.4 28 13.6 27 C8.2 26 4.6 23.4 4.6 19 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Spiral ridge -->
        <path d="M16 18 C16 16.4 18.2 16.2 18.6 17.8 C19 20.2 16 21.6 13.8 20 C11 18 12.2 14 15.6 13.2 C19.6 12.4 23 15.6 22.4 19.6 C21.8 23.6 17.4 25.4 13.2 24" fill="none" stroke="${k.o ? c.stroke : k.alt('#F59E0B')}" stroke-width="1.1" />
        <!-- Glossy pink lip -->
        <path d="M6 22.6 C7.4 25.6 10.6 27 14 27 C11.8 25.4 9.6 23.8 8.4 20.8 Z" fill="${k.alt(c.secondary)}" ${k.st} stroke-width="0.8" />
      </g>`;
    },
  },

  // 28. Bug / Caterpillar (U+1F41B)
  {
    id: 'bug',
    char: '🐛',
    name: 'Bug',
    unicodeHex: 'U+1F41B',
    category: 'objects-places',
    tags: ['bug', 'caterpillar', 'insect', 'worm', 'green', 'nature', 'creature', '🐛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#BBF7D0', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const segs: [number, number, number][] = [[5.2, 22.4, 2.8], [9.4, 19.6, 3.3], [14.4, 18, 3.6], [19.6, 18.2, 3.8], [24.4, 20, 3.4]];
      const feet = segs.map(([x, y, r]) => `<path d="M${x - 0.8} ${y + r - 0.4} V${y + r + 1.8} M${x + 1} ${y + r - 0.4} V${y + r + 1.8}" fill="none" stroke="${c.stroke}" stroke-width="1.2" />`).join('');
      const body = segs.map(([x, y, r], i) =>
        `<circle cx="${x}" cy="${y}" r="${r}" fill="${k.fill(c.primary)}" ${k.st} />` +
        (k.o ? '' : `<circle cx="${x - r * 0.25}" cy="${y - r * 0.35}" r="${r * 0.35}" fill="${k.alt(c.secondary)}" stroke="none" opacity="0.8" />`)
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Antennae -->
        <path d="M22 9.4 C21.4 7.2 20.4 6.4 19.2 6.2 M26 8.8 C26.6 6.6 27.8 5.8 29 5.8" fill="none" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="19.2" cy="6.2" r="0.9" fill="${k.alt('#FDE68A')}" ${k.st} stroke-width="0.6" />
        <circle cx="29" cy="5.8" r="0.9" fill="${k.alt('#FDE68A')}" ${k.st} stroke-width="0.6" />
        ${feet}
        ${body}
        <!-- Head -->
        <circle cx="24.6" cy="14.2" r="5" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="23" cy="13.4" r="0.9" fill="${k.eye}" />
        <circle cx="27" cy="13.4" r="0.9" fill="${k.eye}" />
        <path d="M23.2 16.2 C24.2 17.2 25.8 17.2 26.8 16.2" fill="none" ${k.st} stroke-width="0.8" />
        <circle cx="22" cy="15.4" r="0.8" fill="${k.alt('#FDA4AF')}" stroke="none" />
        <circle cx="28" cy="15.4" r="0.8" fill="${k.alt('#FDA4AF')}" stroke="none" />
      </g>`;
    },
  },

  // 29. Ant (U+1F41C)
  {
    id: 'ant',
    char: '🐜',
    name: 'Ant',
    unicodeHex: 'U+1F41C',
    category: 'objects-places',
    tags: ['ant', 'insect', 'bug', 'worker', 'colony', 'six legs', 'tiny', 'animal', '🐜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#7C2D12', fillSecondary: '#FDBA74', stroke: '#431407' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs (three pairs) and antennae -->
        <g fill="none" stroke="${c.stroke}" stroke-width="1.3">
          <path d="M12.6 14.6 L10 10.6 L7.6 8.6 M14.6 14.4 L14.8 9.6 L13.2 6.8 M16.6 14.8 L19.4 10.4 L22.4 9" />
          <path d="M12.6 17.8 L10 21.8 L7.6 23.8 M14.6 18 L14.8 22.8 L13.2 25.6 M16.6 17.6 L19.4 22 L22.4 23.4" />
          <path d="M6 13.4 L3.4 9.4 L1.8 9.6 M7.6 13 L6.6 8.6 L4.6 7" />
        </g>
        <!-- Abdomen, thorax, head -->
        <ellipse cx="24" cy="16.2" rx="5.4" ry="4.2" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="14.6" cy="16.2" rx="3.2" ry="2.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="7.8" cy="16.2" r="3.2" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M18.4 16.2 H18.9" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Shine and face -->
        <ellipse cx="25" cy="14.4" rx="2.4" ry="1" fill="${k.alt(c.secondary)}" stroke="none" opacity="0.55" />
        <circle cx="6.4" cy="15.2" r="0.8" fill="${k.o ? c.stroke : '#FEF3C7'}" />
        <circle cx="6.4" cy="17.4" r="0.8" fill="${k.o ? c.stroke : '#FEF3C7'}" />
        <path d="M4.8 14.8 L3.6 15.8 L4.8 16.8 M4.8 16.8 L3.6 17.8" fill="none" stroke="${c.stroke}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 30. Honeybee (U+1F41D)
  {
    id: 'honeybee',
    char: '🐝',
    name: 'Honeybee',
    unicodeHex: 'U+1F41D',
    category: 'objects-places',
    tags: ['bee', 'honeybee', 'insect', 'honey', 'sting', 'stripes', 'buzz', 'yellow', 'animal', '🐝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#0F172A', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const dark = k.d ? c.secondary : '#1E293B';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wings -->
        <ellipse cx="15.4" cy="9.8" rx="2.9" ry="5.2" transform="rotate(-22 15.4 9.8)" fill="${k.alt('#E0F2FE')}" ${k.st} opacity="0.9" />
        <ellipse cx="20.4" cy="10.2" rx="2.7" ry="4.8" transform="rotate(14 20.4 10.2)" fill="${k.alt('#E0F2FE')}" ${k.st} opacity="0.9" />
        <!-- Legs -->
        <path d="M12.6 22.6 L11.4 26.2 M16.4 23.6 L16.2 27 M20.4 23 L21.6 26.4" fill="none" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Stinger -->
        <path d="M24.6 17.2 L29 18.2 L24.6 19.8 Z" fill="${k.fill(dark)}" ${k.st} stroke-width="0.7" />
        <!-- Striped abdomen -->
        <ellipse cx="17" cy="18.2" rx="8.2" ry="6" fill="${k.fill(c.primary)}" ${k.st} />
        <g stroke="${k.o ? c.stroke : dark}" stroke-width="2.2" stroke-linecap="butt" fill="none">
          <path d="M14 13 V23.4" />
          <path d="M18 12.4 V24" />
          <path d="M22 13.4 V23" />
        </g>
        <!-- Head, eye, antennae -->
        <path d="M8.2 14.6 C6.8 10.8 5.4 9.6 4.2 9.4 M10.6 14 C10.4 10.6 9.6 9 8.4 8.2" fill="none" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="4.2" cy="9.4" r="0.8" fill="${k.fill(dark)}" ${k.st} stroke-width="0.6" />
        <circle cx="8.4" cy="8.2" r="0.8" fill="${k.fill(dark)}" ${k.st} stroke-width="0.6" />
        <circle cx="8.8" cy="18" r="3.8" fill="${k.fill(dark)}" ${k.st} />
        <circle cx="7.6" cy="17" r="1.2" fill="${k.o ? c.stroke : '#FFFFFF'}" />
        <circle cx="7.4" cy="17.2" r="0.6" fill="${k.o ? c.stroke : '#0F172A'}" />
        <path d="M6.2 20.4 C7.2 21.4 8.6 21.4 9.4 20.6" fill="none" stroke="${k.o ? c.stroke : '#FDE68A'}" stroke-width="0.8" />
      </g>`;
    },
  },
];
