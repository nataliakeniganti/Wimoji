import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

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
  };
};

export const insectsNatureBirdsExtendedIcons: WimojiIconDef[] = [
  // 1. Fly (U+1FAB0)
  {
    id: 'fly',
    char: '🪰',
    name: 'Fly',
    unicodeHex: 'U+1FAB0',
    category: 'objects-places',
    tags: ['fly', 'housefly', 'insect', 'bug', 'wings', '🪰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#BAE6FD', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 14 L6.4 12 M10.6 18 L5.4 18 M11.4 21.8 L7 25 M21 14 L25.6 12 M21.4 18 L26.6 18 M20.6 21.8 L25 25" fill="none" stroke="${c.stroke}" stroke-width="1.2" />
        <ellipse cx="16" cy="20" rx="4.4" ry="6.2" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="16" cy="14.2" rx="3.4" ry="3.2" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="16" cy="9.6" r="2.8" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="13.8" cy="9" r="1.2" fill="${k.o ? 'none' : k.d ? c.secondary : '#DC2626'}" ${k.st} stroke-width="0.6" />
        <circle cx="18.2" cy="9" r="1.2" fill="${k.o ? 'none' : k.d ? c.secondary : '#DC2626'}" ${k.st} stroke-width="0.6" />
        <ellipse cx="10.6" cy="18.6" rx="3.2" ry="6.4" transform="rotate(28 10.6 18.6)" fill="${k.alt('#E0F2FE')}" ${k.st} opacity="${k.o || k.s ? 1 : 0.85}" />
        <ellipse cx="21.4" cy="18.6" rx="3.2" ry="6.4" transform="rotate(-28 21.4 18.6)" fill="${k.alt('#E0F2FE')}" ${k.st} opacity="${k.o || k.s ? 1 : 0.85}" />
      </g>`;
    },
  },

  // 2. Worm (U+1FAB1)
  {
    id: 'worm',
    char: '🪱',
    name: 'Worm',
    unicodeHex: 'U+1FAB1',
    category: 'objects-places',
    tags: ['worm', 'earthworm', 'garden', 'soil', 'bug', '🪱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F472B6', fillSecondary: '#FBCFE8', stroke: '#9D174D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const wormCurve = 'M7.4 11.4 C11 7.6 14 14.8 13.6 19.6 C13.2 24.4 17.6 25.4 20.4 21.2 C22.8 17.4 26 20.6 27.6 23.6';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${wormCurve}" stroke-width="5.2" />
          <path d="${wormCurve}" stroke="#FFFFFF" stroke-width="2.8" />
          <circle cx="8" cy="10.4" r="0.6" fill="${c.stroke}" stroke="none" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="none" stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${wormCurve}" stroke-width="5" />
          <circle cx="7.4" cy="10.6" r="0.7" fill="#FFFFFF" stroke="none" />
        </g>`;
      }

      const pink = c.primary;
      const band = isDuotone ? c.secondary : '#FBCFE8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="${wormCurve}" stroke="${c.stroke}" stroke-width="6.4" />
        <path d="${wormCurve}" stroke="${pink}" stroke-width="4.4" />
        <path d="M13.5 18.8 C13.5 20.4 13.8 21.8 14.6 22.8" stroke="${band}" stroke-width="4.4" />
        <circle cx="7.2" cy="10.4" r="0.7" fill="#1E293B" stroke="none" />
      </g>`;
    },
  },

  // 3. Beetle (U+1FAB2)
  {
    id: 'beetle',
    char: '🪲',
    name: 'Beetle',
    unicodeHex: 'U+1FAB2',
    category: 'objects-places',
    tags: ['beetle', 'scarab', 'bug', 'insect', 'green', '🪲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#4ADE80', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <g fill="none" stroke="${c.stroke}" stroke-width="1.3">
          <path d="M10 13.4 L5.4 11 M9.2 18.2 L4.6 18.4 M10 23 L6 25.8 M22 13.4 L26.6 11 M22.8 18.2 L27.4 18.4 M22 23 L26 25.8" />
          <path d="M13.8 7.8 L11.4 4.2 M18.2 7.8 L20.6 4.2" />
        </g>
        <circle cx="16" cy="10.2" r="3.4" fill="${k.alt('#15803D')}" ${k.st} />
        <ellipse cx="16" cy="18.6" rx="6.8" ry="8.2" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M10.2 14.2 H21.8 M16 14.2 V26.8" fill="none" stroke="${k.o || k.s ? (k.s ? '#FFFFFF' : c.stroke) : '#14532D'}" stroke-width="1.1" />
      </g>`;
    },
  },

  // 4. Cockroach (U+1FAB3)
  {
    id: 'cockroach',
    char: '🪳',
    name: 'Cockroach',
    unicodeHex: 'U+1FAB3',
    category: 'objects-places',
    tags: ['cockroach', 'roach', 'bug', 'insect', 'pest', '🪳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', fillSecondary: '#B45309', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <g fill="none" stroke="${c.stroke}" stroke-width="1.2">
          <path d="M10.4 14.4 L5.6 11.4 M9.6 18.8 L4.6 19.6 M10.6 23.4 L6.4 27 M21.6 14.4 L26.4 11.4 M22.4 18.8 L27.4 19.6 M21.4 23.4 L25.6 27" />
          <path d="M14.2 8.2 C12.4 5.2 9.4 4.2 7.6 4.6 M17.8 8.2 C19.6 5.2 22.6 4.2 24.4 4.6" />
        </g>
        <ellipse cx="16" cy="19.2" rx="5.8" ry="8" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M11.6 13.6 C11.6 9.8 13.6 7.8 16 7.8 C18.4 7.8 20.4 9.8 20.4 13.6 Z" fill="${k.alt('#78350F')}" ${k.st} />
        <path d="M16 13.6 V27" fill="none" stroke="${k.s ? '#FFFFFF' : c.stroke}" stroke-width="1" />
      </g>`;
    },
  },

  // 5. Feather (U+1FAB6)
  {
    id: 'feather',
    char: '🪶',
    name: 'Feather',
    unicodeHex: 'U+1FAB6',
    category: 'objects-places',
    tags: ['feather', 'quill', 'bird', 'light', 'plume', '🪶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0EA5E9', fillSecondary: '#BAE6FD', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M25.6 4.8 C19.4 5 13 9.2 10.6 16.4 L14.4 16.8 L9.8 20.8 C15 21.8 21.8 17.6 25.6 4.8 Z" />
          <path d="M5.4 27 L21.4 10" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M25.6 4.8 C19.4 5 13 9.2 10.6 16.4 L14.4 16.8 L9.8 20.8 C15 21.8 21.8 17.6 25.6 4.8 Z" />
          <path d="M5.4 27 L21.4 10" stroke="#FFFFFF" stroke-width="1.3" />
        </g>`;
      }

      const vane = c.primary;
      const shaft = isDuotone ? c.secondary : '#E0F2FE';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M25.6 4.8 C19.4 5 13 9.2 10.6 16.4 L14.4 16.8 L9.8 20.8 C15 21.8 21.8 17.6 25.6 4.8 Z" fill="${vane}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M5.4 27 L21.8 9.6" stroke="${shaft}" stroke-width="1.6" />
      </g>`;
    },
  },

  // 6. Coral (U+1FAB8)
  {
    id: 'coral',
    char: '🪸',
    name: 'Coral',
    unicodeHex: 'U+1FAB8',
    category: 'objects-places',
    tags: ['coral', 'reef', 'ocean', 'sea', 'marine', '🪸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FB7185', fillSecondary: '#FDA4AF', stroke: '#9F1239' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';

      const coralPath =
        'M14 27 V20.4 L9.2 16.6 C7.6 15.2 6.8 12.6 7.8 10.6 C8.4 9.6 9.8 10.2 9.6 11.4 L9.4 13.8 L12.4 16.2 V10.2 C12.4 8.2 10.8 6.8 11 5.2 C11.2 4 12.8 4 13 5.2 L13.4 9 L15 11.4 V7.4 C15 5.8 17.2 5.8 17.2 7.4 V13.6 L19.8 11 L20.4 7.6 C20.6 6.4 22.4 6.6 22.2 7.8 L21.6 11.8 L18.4 15.8 V19.6 L22.4 16.8 C23.6 16 24.8 17.2 23.6 18.4 L18.4 22.4 V27 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${coralPath}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${coralPath}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${coralPath}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
      </g>`;
    },
  },

  // 7. Empty Nest (U+1FAB9)
  {
    id: 'empty-nest',
    char: '🪹',
    name: 'Empty Nest',
    unicodeHex: 'U+1FAB9',
    category: 'objects-places',
    tags: ['empty nest', 'nest', 'twigs', 'bird nest', 'branch', '🪹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#78350F', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="14" rx="11" ry="4.4" />
          <path d="M5 14 C5.4 22.2 10 26 16 26 C22 26 26.6 22.2 27 14" />
          <path d="M7.4 19.6 L13.4 22 M12.2 21.4 L19.6 22.2 M18.4 21.2 L24.6 18.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 14 C5 22.4 9.8 26.2 16 26.2 C22.2 26.2 27 22.4 27 14 Z" />
          <ellipse cx="16" cy="14" rx="9" ry="3.2" fill="#FFFFFF" />
        </g>`;
      }

      const outer = c.primary;
      const inner = isDuotone ? c.secondary : '#78350F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 14 C5 22.4 9.8 26.2 16 26.2 C22.2 26.2 27 22.4 27 14 Z" fill="${outer}" stroke="${c.stroke}" stroke-width="1.2" />
        <ellipse cx="16" cy="14" rx="11" ry="4.2" fill="${inner}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M7 18.6 L13.8 21.6 M11.6 21.8 L20.4 22.2 M18.6 21 L25 18" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },

  // 8. Nest with Eggs (U+1FABA)
  {
    id: 'nest-with-eggs',
    char: '🪺',
    name: 'Nest with Eggs',
    unicodeHex: 'U+1FABA',
    category: 'objects-places',
    tags: ['nest with eggs', 'eggs', 'bird nest', 'spring', 'robin', '🪺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#7DD3FC', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="12.4" cy="12" rx="2.6" ry="3.6" />
          <ellipse cx="16.4" cy="11.4" rx="2.6" ry="3.6" />
          <ellipse cx="20" cy="12.6" rx="2.5" ry="3.4" />
          <path d="M5 14.6 C8.4 17.2 23.6 17.2 27 14.6 C26.6 22.4 22 26.2 16 26.2 C10 26.2 5.4 22.4 5 14.6 Z" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="12.4" cy="12" rx="2.7" ry="3.7" />
          <ellipse cx="16.4" cy="11.4" rx="2.7" ry="3.7" />
          <ellipse cx="20" cy="12.6" rx="2.6" ry="3.5" />
          <path d="M5 14.6 C8.4 17.2 23.6 17.2 27 14.6 C26.6 22.4 22 26.2 16 26.2 C10 26.2 5.4 22.4 5 14.6 Z" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const outer = c.primary;
      const egg = isDuotone ? c.secondary : '#7DD3FC';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="16" cy="14" rx="10.6" ry="3.8" fill="#78350F" stroke="${c.stroke}" stroke-width="1" />
        <!-- Three robin-blue eggs -->
        <ellipse cx="12.2" cy="12" rx="2.6" ry="3.6" fill="${egg}" stroke="#0369A1" stroke-width="0.9" />
        <ellipse cx="19.8" cy="12.4" rx="2.6" ry="3.5" fill="${egg}" stroke="#0369A1" stroke-width="0.9" />
        <ellipse cx="16" cy="11.2" rx="2.7" ry="3.8" fill="#BAE6FD" stroke="#0369A1" stroke-width="0.9" />
        <!-- Front woven twig cup -->
        <path d="M5 14.6 C8.6 17.6 23.4 17.6 27 14.6 C26.6 22.4 22 26.2 16 26.2 C10 26.2 5.4 22.4 5 14.6 Z" fill="${outer}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M7.2 19 L14 21.8 M11.8 22.2 L20.4 22.6 M18.8 21.2 L24.8 18.6" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },

  // 9. Jellyfish (U+1FABC)
  {
    id: 'jellyfish',
    char: '🪼',
    name: 'Jellyfish',
    unicodeHex: 'U+1FABC',
    category: 'objects-places',
    tags: ['jellyfish', 'ocean', 'sea', 'marine', 'tentacles', '🪼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#FBCFE8', stroke: '#831843' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6.4 15 C6.4 8.6 10.6 5 16 5 C21.4 5 25.6 8.6 25.6 15 C22.4 16.4 9.6 16.4 6.4 15 Z" />
          <path d="M10.4 16 C9.4 20.4 11.4 23.6 9.8 27 M14.2 16.2 C13.4 20.8 15 24 14 27.6 M18.2 16.2 C19 20.6 17.4 24 18.4 27.6 M22 16 C23 20.4 21 23.6 22.4 27" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6.4 15 C6.4 8.6 10.6 5 16 5 C21.4 5 25.6 8.6 25.6 15 C22.4 16.4 9.6 16.4 6.4 15 Z" />
          <path d="M10.4 16 C9.4 20.4 11.4 23.6 9.8 27 M14.2 16.2 C13.4 20.8 15 24 14 27.6 M18.2 16.2 C19 20.6 17.4 24 18.4 27.6 M22 16 C23 20.4 21 23.6 22.4 27" fill="none" stroke="${c.primary}" stroke-width="1.8" />
        </g>`;
      }

      const bell = c.primary;
      const tentacle = isDuotone ? c.secondary : '#F472B6';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.4 16 C9.4 20.4 11.4 23.6 9.8 27 M14.2 16.2 C13.4 20.8 15 24 14 27.6 M18.2 16.2 C19 20.6 17.4 24 18.4 27.6 M22 16 C23 20.4 21 23.6 22.4 27" fill="none" stroke="${tentacle}" stroke-width="1.8" />
        <path d="M6.4 15 C6.4 8.6 10.6 5 16 5 C21.4 5 25.6 8.6 25.6 15 C22.4 16.6 9.6 16.6 6.4 15 Z" fill="${bell}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="12.6" cy="10.4" r="1.4" fill="#FBCFE8" opacity="0.8" />
        <circle cx="19" cy="11.2" r="1" fill="#FBCFE8" opacity="0.8" />
      </g>`;
    },
  },

  // 10. Wing (U+1FABD)
  {
    id: 'wing',
    char: '🪽',
    name: 'Wing',
    unicodeHex: 'U+1FABD',
    category: 'objects-places',
    tags: ['wing', 'angel', 'bird wing', 'flight', 'feather', '🪽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#CBD5E1', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const wingPath =
        'M6 8.6 C13 6.2 21.8 6.8 27 11.4 C24 13.6 19.6 13.4 15.8 13.2 C19.8 14.4 23.6 15.6 25 18 C21.2 19.2 16.8 18 13.4 17.2 C17 18.8 20.4 20.6 21 22.8 C15 24 8.4 20.4 6 14.4 C5.2 12.2 5.2 9.8 6 8.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${wingPath}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${wingPath}" />
        </g>`;
      }

      const shade = isDuotone ? c.secondary : '#E2E8F0';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${wingPath}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M9.6 13.4 C13.8 12 18.4 12.2 23 12.4 M9.4 16.4 C13.2 16 17.6 16.4 21 17.2" fill="none" stroke="${shade}" stroke-width="1.2" />
      </g>`;
    },
  },

  // 11. Leafless Tree (U+1FABE)
  {
    id: 'leafless-tree',
    char: '🪾',
    name: 'Leafless Tree',
    unicodeHex: 'U+1FABE',
    category: 'objects-places',
    tags: ['leafless tree', 'bare tree', 'winter', 'dead tree', 'branches', 'nature', '🪾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#B45309', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12.4 27.4 L14.4 20.6 V15.4 L9.2 10.6 M12 13 L10.8 7.2 M17.6 15.4 V20.6 L19.6 27.4 M17.6 15.4 L23 10.2 M16 14 V6.4 M16 10.4 L19.8 6.8" />
          <path d="M10.4 27.4 H21.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11.4 27.4 C13.2 24.4 13.8 20.6 13.8 16.2 L7.4 10.4 L8.8 9 L12.2 12 L10.8 6.4 L12.4 6 L14.4 12.8 L15.2 5.4 H17 L17.4 11.4 L21.2 6.8 L22.6 8 L18.4 13.2 L24.2 9.4 L25.2 11 L18.2 16.4 C18.2 20.6 18.8 24.4 20.6 27.4 Z" />
        </g>`;
      }

      const bark = c.primary;
      const highlight = isDuotone ? c.secondary : '#B45309';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Gnarled trunk, roots & bare winter branches -->
        <path d="M11 27.4 C13 24.4 13.8 20.6 13.8 16.4 L7.4 10.4 L8.8 9 L12.2 12 L10.6 6.4 L12.4 5.8 L14.4 12.8 L15.2 5.2 H17 L17.4 11.4 L21 6.6 L22.4 7.8 L18.4 13.2 L24.2 9.4 L25.2 11 L18.2 16.4 C18.2 20.6 19 24.4 21 27.4 Z" fill="${bark}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M15.6 14 V24.4" stroke="${highlight}" stroke-width="1.2" opacity="0.7" />
      </g>`;
    },
  },

  // 12. Goose (U+1FABF)
  {
    id: 'goose',
    char: '🪿',
    name: 'Goose',
    unicodeHex: 'U+1FABF',
    category: 'objects-places',
    tags: ['goose', 'bird', 'honk', 'duck', 'waterfowl', 'white', '🪿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#F59E0B', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Orange webbed legs -->
        <path d="M16.2 23.4 L15.6 27.6 H13.2 M19.6 23.4 L20.2 27.6 H17.8" fill="none" stroke="${k.o ? c.stroke : k.d ? c.secondary : '#EA580C'}" stroke-width="1.4" />
        <!-- Plump white goose body & long upright neck -->
        <path d="M12.2 17.2 C10.4 13.4 9.6 8.4 11.2 6 C12.4 4.4 15 4.8 15.2 7 C15.2 9.2 13.8 11.8 14.6 15.2 C18 14.2 23.4 14.6 26.8 17.6 L29.4 17.2 L26.4 21 C23.6 23.6 16.6 24.4 13.6 22.6 C12.4 21.8 12.4 19.2 12.2 17.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Wing detail -->
        <path d="M15.8 17.4 C19.4 16.2 23.8 17.4 25 20 C21 21.8 16.8 20.6 15.8 17.4 Z" fill="${k.alt('#E2E8F0')}" ${k.st} stroke-width="0.9" />
        <!-- Orange beak & eye -->
        <path d="M10.4 6.2 L6.4 7.4 L10.6 8.8 Z" fill="${k.alt('#F97316')}" ${k.st} stroke-width="0.8" />
        <circle cx="12.4" cy="6.6" r="0.8" fill="${k.eye}" />
      </g>`;
    },
  },

  // 13. Black Bird (U+1F426 U+200D U+2B1B) — built directly on authentic bird template
  {
    id: 'black-bird',
    char: '🐦‍⬛',
    name: 'Black Bird',
    unicodeHex: 'U+1F426 U+200D U+2B1B',
    category: 'objects-places',
    tags: ['black bird', 'crow', 'raven', 'blackbird', 'bird', 'avian', 'wildlife', '🐦‍⬛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#475569', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const wing = k.alt('#334155');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs -->
        <path d="M14.6 23 L14.2 27.4 M14.2 27.4 L12.4 28.2 M14.2 27.4 L16 28.2 M18.4 23.4 L18.8 27.4 M18.8 27.4 L17 28.2 M18.8 27.4 L20.6 28" fill="none" stroke="${k.o ? c.stroke : k.d ? c.secondary : '#F59E0B'}" stroke-width="1.2" />
        <!-- Tail feathers -->
        <path d="M22.2 17.4 L30 20.2 L29.2 22.8 L21 21.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body -->
        <ellipse cx="16.4" cy="17.4" rx="8.8" ry="6.2" transform="rotate(10 16.4 17.4)" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Subtle slate belly -->
        <path d="M9.4 18.4 C11 22.4 17 23.8 21 21.6 C16 21.8 12 20.8 9.4 18.4 Z" fill="${k.alt('#64748B')}" stroke="none" opacity="0.55" />
        <!-- Wing -->
        <path d="M13 15.4 C17.4 13.4 23.4 15.4 24 19.4 C19 21.4 13.6 20 13 15.4 Z" fill="${wing}" stroke="${k.s ? '#FFFFFF' : c.stroke}" stroke-width="0.9" />
        <path d="M16 17.4 L21.4 18 M15.6 19 L20 19.6" fill="none" stroke="${k.s ? '#FFFFFF' : '#94A3B8'}" stroke-width="0.65" opacity="0.7" />
        <!-- Head, crest, beak, eye -->
        <path d="M8.4 7.4 C8.6 5.6 10.4 5.2 11 6.6 C11.4 5.4 13 5.8 12.6 7.4" fill="none" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="10.4" cy="11.8" r="4.8" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M6.2 10.6 L2.6 12.2 L6.4 13.6 Z" fill="${k.alt('#F59E0B')}" ${k.st} stroke-width="0.7" />
        <circle cx="9" cy="10.6" r="1.4" fill="${k.o ? 'none' : '#FFFFFF'}" ${k.st} stroke-width="0.6" />
        <circle cx="8.8" cy="10.7" r="0.75" fill="${k.o ? c.stroke : '#0F172A'}" />
      </g>`;
    },
  },
];
