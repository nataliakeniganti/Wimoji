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
  const sc = s ? c.primary : c.stroke;
  return {
    o, d, s, t, sc,
    fill: (v: string) => (o ? 'none' : s ? c.primary : v),
    alt: (lit: string) => (o ? 'none' : s ? c.primary : d ? c.secondary : lit),
    dark: (v: string) => (o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : v),
    cut: (lit: string) => (o ? 'none' : s ? '#FFFFFF' : d ? c.secondary : lit),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${sc}" stroke-width="${t}"`,
    ln: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
  };
};

export const wildlifeExtendedPart2Icons: WimojiIconDef[] = [
  // 1. Monarch Butterfly (U+1FACC)
  {
    id: 'monarch-butterfly',
    char: '🫌',
    name: 'Monarch Butterfly',
    unicodeHex: 'U+1FACC',
    category: 'objects-places',
    tags: ['monarch butterfly', 'butterfly', 'monarch', 'insect', 'orange', 'wings', 'migration', '🫌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#FDBA74', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const wingL = 'M15 13.4 C11 6.4 3.4 4.8 3.2 9.8 C3 14 7.6 16.4 13.4 16.6 Z';
      const wingR = 'M17 13.4 C21 6.4 28.6 4.8 28.8 9.8 C29 14 24.4 16.4 18.6 16.6 Z';
      const hindL = 'M14.4 16.6 C8.6 16.8 5.2 20.6 7.4 24.8 C9.2 27.6 13.8 25.4 15.2 20.6 Z';
      const hindR = 'M17.6 16.6 C23.4 16.8 26.8 20.6 24.6 24.8 C22.8 27.6 18.2 25.4 16.8 20.6 Z';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Upper Forewings & Lower Hindwings -->
        <path d="${wingL}" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="${k.o ? k.t : 1.7}" />
        <path d="${wingR}" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="${k.o ? k.t : 1.7}" />
        <path d="${hindL}" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="${k.o ? k.t : 1.7}" />
        <path d="${hindR}" fill="${k.fill(c.primary)}" stroke="${k.sc}" stroke-width="${k.o ? k.t : 1.7}" />
        <!-- Monarch black wing veins -->
        <path d="M14 14.4 L6.4 9.6 M13.4 15.4 L5.2 12.6 M14 18.4 L8.6 22.8 M13.4 17.4 L7.8 19.6" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        <path d="M18 14.4 L25.6 9.6 M18.6 15.4 L26.8 12.6 M18 18.4 L23.4 22.8 M18.6 17.4 L24.2 19.6" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        ${
          !k.o && !k.s
            ? `<circle cx="4.8" cy="8.2" r="0.65" fill="#FFFFFF" />
               <circle cx="4.4" cy="10.8" r="0.6" fill="#FFFFFF" />
               <circle cx="27.2" cy="8.2" r="0.65" fill="#FFFFFF" />
               <circle cx="27.6" cy="10.8" r="0.6" fill="#FFFFFF" />
               <circle cx="8" cy="23.8" r="0.6" fill="#FFFFFF" />
               <circle cx="24" cy="23.8" r="0.6" fill="#FFFFFF" />`
            : ''
        }
        <!-- Antennae & Slender Black Body -->
        <path d="M15.2 9.4 C14 7 12.4 5.4 11 5.2 M16.8 9.4 C18 7 19.6 5.4 21 5.2" fill="none" stroke="${k.sc}" stroke-width="1.1" />
        <ellipse cx="16" cy="17.2" rx="1.4" ry="7.2" fill="${k.dark('#0F172A')}" ${k.st} />
      </g>`;
    },
  },

  // 2. Orca (U+1FACD)
  {
    id: 'orca',
    char: '🫍',
    name: 'Orca',
    unicodeHex: 'U+1FACD',
    category: 'objects-places',
    tags: ['orca', 'killer whale', 'whale', 'ocean', 'sea', 'marine', 'dolphin', '🫍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const bodyD =
        'M4.2 17.4 C6.4 12.8 11.4 10.6 15.8 11 L15.4 5.2 C18.2 6.8 19.2 9.4 18.8 11.6 C22.8 12.6 25.4 16.2 26.2 21.4 L29.6 22.8 L27.6 24.4 L29 27 L24.6 25.4 C21.8 25 18.4 22.4 15.6 21.2 C11.4 21.8 6.4 20.6 4.2 17.4 Z';
      const bellyD =
        'M6.2 18.2 C9.2 20.8 13.8 21.2 17.4 19.8 C19.8 19 22 20.6 23.8 22.4 C20.4 22.8 17.6 21.2 15.4 21 C11.4 21.6 7.8 20.4 6.2 18.2 Z';
      const eyePatchD = 'M8.4 14.4 C9.6 13.6 11.6 13.8 12.2 14.8 C11.6 16 9.4 16.2 8.4 14.4 Z';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main sleek Orca silhouette -->
        <path d="${bodyD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Pectoral flipper -->
        <path d="M12.6 19.8 C13 22.8 14.8 24.6 16.4 24.4 C16.6 22.4 15.2 20.6 14 19.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Iconic white Orca belly patch & eye patch -->
        <path d="${bellyD}" fill="${k.cut('#F8FAFC')}" stroke="none" />
        <path d="${eyePatchD}" fill="${k.cut('#F8FAFC')}" ${k.o ? k.st : 'stroke="none"'} />
        <circle cx="7.4" cy="15.8" r="0.65" fill="${k.o ? c.stroke : '#FFFFFF'}" />
      </g>`;
    },
  },

  // 3. Moose (U+1FACE)
  {
    id: 'moose',
    char: '🫎',
    name: 'Moose',
    unicodeHex: 'U+1FACE',
    category: 'objects-places',
    tags: ['moose', 'elk', 'antlers', 'forest', 'wildlife', 'canada', 'deer', '🫎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#FDE68A', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const antlerL =
        'M12.4 12.2 C9.2 11.6 4.8 10.2 3.8 7.4 C3.4 6.2 4.8 5.2 5.4 6.4 L6 8.2 L6.4 5.2 C6.6 4 8.2 4 8.2 5.4 L8.4 8 L9.6 5.2 C10.2 4.2 11.6 4.8 11.2 6 L10.6 8.8 C11.4 9.6 12.4 10.4 13.2 11.2 Z';
      const antlerR =
        'M19.6 12.2 C22.8 11.6 27.2 10.2 28.2 7.4 C28.6 6.2 27.2 5.2 26.6 6.4 L26 8.2 L25.6 5.2 C25.4 4 23.8 4 23.8 5.4 L23.6 8 L22.4 5.2 C21.8 4.2 20.4 4.8 20.8 6 L21.4 8.8 C20.6 9.6 19.6 10.4 18.8 11.2 Z';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wide Palmate Antlers -->
        <path d="${antlerL}" fill="${k.alt('#FDE68A')}" ${k.st} />
        <path d="${antlerR}" fill="${k.alt('#FDE68A')}" ${k.st} />
        <!-- Ears -->
        <path d="M10.4 13.4 C8.2 12.8 7 14 7.8 15.6 C8.6 16.4 10.2 15.8 11.4 14.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M21.6 13.4 C23.8 12.8 25 14 24.2 15.6 C23.4 16.4 21.8 15.8 20.6 14.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Throat Bell / Dewlap -->
        <path d="M14.2 24.2 C14 27 15 28.6 16 28.6 C17 28.6 18 27 17.8 24.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Moose Head -->
        <path d="M11 14.4 C11 11.4 13.2 10 16 10 C18.8 10 21 11.4 21 14.4 L20.4 19.8 H11.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Broad Bulbous Moose Muzzle -->
        <path d="M10.4 19.6 C9.6 22.8 11.6 25.4 16 25.4 C20.4 25.4 22.4 22.8 21.6 19.6 C20.8 17.4 11.2 17.4 10.4 19.6 Z" fill="${k.alt('#B45309')}" ${k.st} />
        <!-- Nostrils & Mouth -->
        <circle cx="13.4" cy="21.4" r="0.85" fill="${k.eye}" />
        <circle cx="18.6" cy="21.4" r="0.85" fill="${k.eye}" />
        <path d="M14 23.4 C15.2 24.2 16.8 24.2 18 23.4" fill="none" stroke="${k.ln}" stroke-width="1" />
        <!-- Eyes -->
        <circle cx="13.2" cy="15.2" r="1.05" fill="${k.eye}" />
        <circle cx="18.8" cy="15.2" r="1.05" fill="${k.eye}" />
      </g>`;
    },
  },

  // 4. Donkey (U+1FACF)
  {
    id: 'donkey',
    char: '🫏',
    name: 'Donkey',
    unicodeHex: 'U+1FACF',
    category: 'objects-places',
    tags: ['donkey', 'mule', 'burro', 'farm', 'animal', 'ears', 'stubborn', '🫏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#E2E8F0', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tufted Tail -->
        <path d="M23.4 16.8 C25.8 17.4 26.8 20.4 26 23.2" fill="none" stroke="${k.sc}" stroke-width="1.5" />
        <ellipse cx="25.8" cy="23.8" rx="1.1" ry="1.6" fill="${k.dark('#1E293B')}" />
        <!-- Four Legs & Dark Hooves -->
        <path d="M12.4 20.6 V27.4 M15 20.6 V27.4 M20.2 20.6 V27.4 M22.8 20.6 V27.4" fill="none" stroke="${k.sc}" stroke-width="${k.o ? k.t : 2.3}" />
        <path d="M11.6 27.6 H13.2 M14.2 27.6 H15.8 M19.4 27.6 H21 M22 27.6 H23.6" fill="none" stroke="${k.dark('#0F172A')}" stroke-width="1.6" />
        <!-- Grey Donkey Body -->
        <path d="M11.2 15.6 C14 14.4 21.6 14.6 23.8 16.6 C25 18 24.6 21 22.6 21.4 H12.4 C10.6 21.2 10.2 17.6 11.2 15.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Spiky Dark Mane -->
        <path d="M11.6 8.4 L14.4 10 L13.8 12.2 L16 13.8 L14.4 15.4 L11.4 13.4 Z" fill="${k.dark('#1E293B')}" ${k.st} />
        <!-- Long Upright Ears -->
        <path d="M10.4 8.2 L9.2 3.2 L12.2 6.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M12.2 8.2 L13.4 3.4 L14.2 7.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Neck, Head & Cream Muzzle -->
        <path d="M9.8 16.4 L10.2 9 C10.4 7.4 12.8 7.2 13.6 8.8 L15.4 15.2 L11.4 17.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M10.4 9.6 L6.2 11.8 C5.4 12.6 5.8 14.4 7.4 14.6 L11.2 14 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M7.6 11.1 L6.2 11.8 C5.4 12.6 5.8 14.4 7.4 14.6 L8.6 14.3 C8.8 13 8.4 11.8 7.6 11.1 Z" fill="${k.cut('#F1F5F9')}" ${k.o ? k.st : 'stroke="none"'} />
        <!-- Eye -->
        <circle cx="9.8" cy="10.6" r="0.85" fill="${k.eye}" />
      </g>`;
    },
  },
];
