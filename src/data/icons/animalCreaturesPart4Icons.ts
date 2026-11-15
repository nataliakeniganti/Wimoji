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
    // dark details (noses, patches, stripes): cut out white in silhouette
    dark: (v: string) => (o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : v),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${sc}" stroke-width="${t}"`,
    ln: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    // In outline mode, hide parts that sit behind the head so lines do not cross.
    behind: (id: string, cover: string, content: string) =>
      o
        ? `<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${cover}</mask><g mask="url(#${id})">${content}</g>`
        : content,
  };
};

const camel = (opts: AnimalOpts, c: AnimalColors, humps: 1 | 2) => {
  const k = kit(opts, c);
  const back =
    humps === 1
      ? 'C13.6 10.2 15 8.6 17 8.6 C19.4 8.6 20.2 12.4 22.6 13.4'
      : 'C13 10 15.4 7.6 16.8 12.6 C17.6 8 22 7.6 23.2 13.2';
  const bodyD = `M2.6 11 C2.6 8.6 4.4 6.4 7 6.4 C9 6.4 10.4 7.6 10.6 9.6 C10.8 11.4 12 12.4 13 13 ${back} C25.6 13.8 27.8 15.6 27.8 19 L27.2 22.4 L27.8 28 L25 28 L24 23.2 C21.4 24 17 24 14.6 23.2 L14.2 28 L11.4 28 L10.8 22 C10.6 19 9.2 17 8.4 15.4 C7.6 14 7.2 13.4 6.6 13.2 C5 13 3.4 12.6 2.6 11 Z`;
  const farLegs = `<path d="M16 22 H18.6 L18.2 28 H15.8 Z M21.2 22 H23.8 L24 28 H21.6 Z" fill="${k.alt('#B7791F')}" ${k.st} />`;
  return `
    <!-- Far legs -->
    ${k.behind(humps === 1 ? 'camel1-far' : 'camel2-far', `<path d="${bodyD}" fill="#000" />`, farLegs)}
    <!-- Tail -->
    <path d="M27.4 16.4 C29 17.6 29.4 20 28.6 22.6" fill="none" stroke="${k.s ? c.primary : c.stroke}" stroke-width="1.5" />
    <!-- Body, neck and head -->
    <path d="${bodyD}" fill="${k.fill(c.primary)}" ${k.st} />
    <!-- Eye, nostril, mouth -->
    <circle cx="6.2" cy="8.8" r="1" fill="${k.eye}" />
    <circle cx="3.4" cy="10" r="0.5" fill="${k.ln}" />
    <path d="M3.4 12 C4.6 12.4 5.8 12.2 6.8 11.6" fill="none" stroke="${k.ln}" stroke-width="0.9" />
    <!-- Knee marks -->
    <path d="M12 25 H14 M24.8 25 H26.4" fill="none" stroke="${k.o ? 'none' : k.s ? '#FFFFFF' : '#92400E'}" stroke-width="0.9" opacity="0.6" />
  `;
};

export const animalCreaturesPart4Icons: WimojiIconDef[] = [
  // 41. Koala (U+1F428)
  {
    id: 'koala',
    char: '🐨',
    name: 'Koala',
    unicodeHex: 'U+1F428',
    category: 'objects-places',
    tags: ['koala', 'marsupial', 'australia', 'eucalyptus', 'bear', 'cute', 'animal', 'grey', '🐨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A8B3C2', fillSecondary: '#E2E8F0', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const head = (a: string) => `<ellipse cx="16" cy="17.4" rx="10.6" ry="9.4" ${a} />`;
      const ears = `
        <circle cx="6.4" cy="10" r="5.6" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="6.4" cy="10" r="3.2" fill="${k.alt('#F1F5F9')}" ${k.o ? k.st : 'stroke="none"'} />
        <circle cx="25.6" cy="10" r="5.6" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="25.6" cy="10" r="3.2" fill="${k.alt('#F1F5F9')}" ${k.o ? k.st : 'stroke="none"'} />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('koala-ears', head('fill="#000"'), ears)}
        <!-- Head -->
        ${head(`fill="${k.fill(c.primary)}" ${k.st}`)}
        <!-- Cheek fur -->
        <path d="M6.6 20 C7.6 22.6 10 24.4 12 25" fill="none" stroke="${k.o ? 'none' : k.s ? '#FFFFFF' : '#CBD5E1'}" stroke-width="1" opacity="0.8" />
        <!-- Eyes -->
        <circle cx="11" cy="15" r="1.3" fill="${k.eye}" />
        <circle cx="21" cy="15" r="1.3" fill="${k.eye}" />
        <!-- Big koala nose -->
        <path d="M12.6 15.8 C12.6 14 14 13.4 16 13.4 C18 13.4 19.4 14 19.4 15.8 C19.4 18.6 17.8 21 16 21 C14.2 21 12.6 18.6 12.6 15.8 Z" fill="${k.dark('#1E293B')}" ${k.o ? k.st : 'stroke="none"'} />
        <path d="M14.4 15 C14.8 14.6 15.4 14.5 15.8 14.6" fill="none" stroke="${k.o || k.s ? 'none' : '#64748B'}" stroke-width="0.9" />
        <!-- Mouth -->
        <path d="M16 21 V22.4 M13.8 23.4 C14.8 24.2 15.6 23.8 16 22.4 C16.4 23.8 17.2 24.2 18.2 23.4" fill="none" stroke="${k.ln}" stroke-width="1" />
      </g>`;
    },
  },

  // 42. Poodle (U+1F429)
  {
    id: 'poodle',
    char: '🐩',
    name: 'Poodle',
    unicodeHex: 'U+1F429',
    category: 'objects-places',
    tags: ['poodle', 'dog', 'curly', 'pet', 'fancy', 'animal', 'canine', 'groomed', '🐩'],
    renderContent: (opts) => {
      const c0 = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#E2E8F0', stroke: '#94A3B8' });
      const c = opts.style === 'silhouette' ? { ...c0, primary: c0.stroke } : c0;
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const w = k.fill(c.primary);
      const shade = k.alt('#E8EDF4');
      const lg = k.s ? c.primary : c.stroke;
      const leg = (x: number) => `<path d="M${x} 22 V26.4" fill="none" stroke="${lg}" stroke-width="1.7" />`;
      const foot = (x: number) => `<circle cx="${x}" cy="27.4" r="2" fill="${w}" ${k.st} />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail pom -->
        <path d="M24.4 15.4 L27 11.6" fill="none" stroke="${lg}" stroke-width="1.5" />
        <circle cx="27.4" cy="9.8" r="2.8" fill="${w}" ${k.st} />
        <!-- Legs with pom feet -->
        ${leg(11.4)}${leg(21.6)}
        ${foot(11.4)}${foot(21.6)}
        <!-- Fluffy body -->
        <path d="M10.5 22.6 C7 22.6 6.4 17.8 9.6 16.8 C10 13.8 14 13 15.6 14.6 C17.4 12.8 21 13.2 21.8 15.2 C25 14.8 27 18.2 25.2 20.8 C26.2 23 23.4 24.2 21 23 C19 24.2 16 24 14.6 23 C13 23.8 11.4 23.6 10.5 22.6 Z" fill="${w}" ${k.st} />
        <!-- Head with top-knot and long muzzle -->
        <path d="M2.6 12.6 C2.6 11.2 3.8 10.6 5.4 10.6 C4.4 8.2 6.2 5.2 8.8 5.2 C11.4 5.2 12.8 8 11.8 10.2 C13.8 11 14.2 14.4 13 16.4 C12.4 17.8 10.6 18.4 9 17.8 C8 16.4 7.4 15.6 6.4 15.4 C4 15.4 2.6 14.2 2.6 12.6 Z" fill="${w}" ${k.st} />
        <!-- Floppy ear -->
        <path d="M10.6 10.6 C13.4 10.6 14.4 14.6 12.6 17 C11 17.4 9.6 16.4 9.4 14 C9.2 12.6 9.6 11.4 10.6 10.6 Z" fill="${shade}" ${k.st} />
        <!-- Eye and nose -->
        <circle cx="7.2" cy="11.6" r="0.9" fill="${k.eye}" />
        <circle cx="2.9" cy="12.6" r="1.1" fill="${k.dark('#1E293B')}" stroke="none" />
      </g>`;
    },
  },

  // 43. Dromedary Camel (U+1F42A)
  {
    id: 'dromedary-camel',
    char: '🐪',
    name: 'Dromedary Camel',
    unicodeHex: 'U+1F42A',
    category: 'objects-places',
    tags: ['dromedary camel', 'camel', 'one hump', 'desert', 'animal', 'sand', 'middle east', '🐪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D9A05B', fillSecondary: '#F3D9A8', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">${camel(opts, c, 1)}</g>`;
    },
  },

  // 44. Bactrian Camel (U+1F42B)
  {
    id: 'bactrian-camel',
    char: '🐫',
    name: 'Two-Hump Camel',
    unicodeHex: 'U+1F42B',
    category: 'objects-places',
    tags: ['two-hump camel', 'bactrian camel', 'camel', 'humps', 'desert', 'animal', 'asia', '🐫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#C98A4B', fillSecondary: '#F3D9A8', stroke: '#7C2D12' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">${camel(opts, c, 2)}</g>`;
    },
  },

  // 45. Dolphin (U+1F42C)
  {
    id: 'dolphin',
    char: '🐬',
    name: 'Dolphin',
    unicodeHex: 'U+1F42C',
    category: 'objects-places',
    tags: ['dolphin', 'sea', 'ocean', 'swim', 'smart', 'marine', 'mammal', 'blue', 'water', '🐬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0EA5E9', fillSecondary: '#BAE6FD', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const fin = k.fill('#0284C7');
      const waveCol = k.o ? c.stroke : k.s ? c.primary : '#38BDF8';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Waves -->
        <path d="M3 28.4 C5.4 27 7.6 27 10 28.4 S14.6 29.8 17 28.4 S21.6 27 24 28.4 S27.6 29.6 29 28.4" fill="none" stroke="${waveCol}" stroke-width="1.8" />
        <!-- Body with tail flukes -->
        <path d="M2.6 13.2 C4 12.4 6 12.4 7.6 11.8 C9 8.4 13 6.2 17.2 7 C22.2 8 25 12 26 16.4 L29.2 13.4 C28.6 16 28.2 17 27.6 17.8 C28.4 18.8 29 20 29.2 21.6 C27 21.4 25.4 20.4 24.4 19.2 C21.6 20.6 17 20.4 13.6 18 C11.4 16.4 9.4 15.4 7.4 15.4 C5.4 15.4 3.4 14.8 2.6 13.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Pectoral fin -->
        <path d="M12.6 16.6 C13 19.4 14.6 21.6 17.2 22.6 C16.6 20.6 16.6 19 17.4 17.6 Z" fill="${fin}" ${k.st} />
        <!-- Lighter belly -->
        <path d="M7.4 15.4 C9.4 15.4 11.4 16.4 13.6 18 C17 20.4 21.6 20.6 24.4 19.2 C21.4 18.4 16.8 18 13.4 15.6 C11 14 9 14 7.4 15.4 Z" fill="${k.alt('#BAE6FD')}" ${k.o ? 'stroke="none"' : 'stroke="none"'} />
        <!-- Dorsal fin -->
        <path d="M13.2 8.4 C14 5.2 16.4 3.6 19.4 3.6 C18.2 5.2 18 6.8 18.8 8.6 Z" fill="${fin}" ${k.st} />
        <!-- Eye and smile -->
        <circle cx="8.6" cy="12.8" r="0.9" fill="${k.eye}" />
        <path d="M3 14 C5 14.6 7 14.8 8.6 14.4" fill="none" stroke="${k.ln}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 46. Mouse Face (U+1F42D)
  {
    id: 'mouse-face',
    char: '🐭',
    name: 'Mouse Face',
    unicodeHex: 'U+1F42D',
    category: 'objects-places',
    tags: ['mouse face', 'mouse', 'rodent', 'cute', 'ears', 'whiskers', 'animal', '🐭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A8B3C2', fillSecondary: '#FDA4AF', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const pink = k.alt('#FDA4AF');
      const headD = 'M6.6 17.4 C6.6 11.4 10.6 8.8 16 8.8 C21.4 8.8 25.4 11.4 25.4 17.4 C25.4 22 21 26.2 16 27 C11 26.2 6.6 22 6.6 17.4 Z';
      const ears = `
        <circle cx="8" cy="9" r="5.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="8" cy="9" r="3.2" fill="${pink}" ${k.o ? k.st : 'stroke="none"'} />
        <circle cx="24" cy="9" r="5.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="24" cy="9" r="3.2" fill="${pink}" ${k.o ? k.st : 'stroke="none"'} />`;
      const wh = k.o ? c.stroke : k.s ? '#FFFFFF' : c.stroke;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('mouse-ears', `<path d="${headD}" fill="#000" />`, ears)}
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Muzzle -->
        <ellipse cx="16" cy="21.6" rx="4.6" ry="3.4" fill="${k.alt('#F1F5F9')}" ${k.o ? k.st : 'stroke="none"'} />
        <!-- Eyes -->
        <circle cx="11.6" cy="16" r="1.4" fill="${k.eye}" />
        <circle cx="20.4" cy="16" r="1.4" fill="${k.eye}" />
        <circle cx="12.1" cy="15.5" r="0.45" fill="${k.o || k.s ? 'none' : '#FFFFFF'}" />
        <circle cx="20.9" cy="15.5" r="0.45" fill="${k.o || k.s ? 'none' : '#FFFFFF'}" />
        <!-- Nose and mouth -->
        <ellipse cx="16" cy="19.8" rx="1.7" ry="1.3" fill="${k.s ? '#FFFFFF' : k.o ? c.stroke : k.d ? c.secondary : '#F472B6'}" stroke="none" />
        <path d="M16 21 V22.2 M14 23 C14.8 23.8 15.6 23.6 16 22.2 C16.4 23.6 17.2 23.8 18 23" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        <!-- Whiskers -->
        <path d="M11 20.6 L4.4 19.2 M11 22.4 L4.8 23.6 M21 20.6 L27.6 19.2 M21 22.4 L27.2 23.6" fill="none" stroke="${k.s ? c.primary : wh}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 47. Cow Face (U+1F42E)
  {
    id: 'cow-face',
    char: '🐮',
    name: 'Cow Face',
    unicodeHex: 'U+1F42E',
    category: 'objects-places',
    tags: ['cow face', 'cow', 'dairy', 'milk', 'farm', 'animal', 'cute', 'horns', 'snout', '🐮'],
    renderContent: (opts) => {
      const c0 = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#FDA4AF', stroke: '#475569' });
      const c = opts.style === 'silhouette' ? { ...c0, primary: c0.stroke } : c0;
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const body = k.fill(c.primary);
      const headD = 'M8.6 10.2 C8.6 8 11.8 7.2 16 7.2 C20.2 7.2 23.4 8 23.4 10.2 L24.2 18 C24.4 23.4 21.4 27.4 16 27.4 C10.6 27.4 7.6 23.4 7.8 18 Z';
      const side = `
        <path d="M10.2 9 C9.2 6 7.8 4.6 5.8 4.8 C6 6.8 7 8.4 8.8 9.8 Z" fill="${k.alt('#FDE68A')}" ${k.st} />
        <path d="M21.8 9 C22.8 6 24.2 4.6 26.2 4.8 C26 6.8 25 8.4 23.2 9.8 Z" fill="${k.alt('#FDE68A')}" ${k.st} />
        <ellipse cx="4.6" cy="12.4" rx="3.8" ry="2.2" transform="rotate(-22 4.6 12.4)" fill="${body}" ${k.st} />
        <ellipse cx="4.8" cy="12.4" rx="2" ry="1" transform="rotate(-22 4.8 12.4)" fill="${k.alt('#FDA4AF')}" stroke="none" />
        <ellipse cx="27.4" cy="12.4" rx="3.8" ry="2.2" transform="rotate(22 27.4 12.4)" fill="${body}" ${k.st} />
        <ellipse cx="27.2" cy="12.4" rx="2" ry="1" transform="rotate(22 27.2 12.4)" fill="${k.alt('#FDA4AF')}" stroke="none" />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('cow-side', `<path d="${headD}" fill="#000" />`, side)}
        <path d="${headD}" fill="${body}" ${k.st} />
        <!-- Patch -->
        <path d="M8.2 10.4 C10 8.4 13 8.4 14 10.4 C14.6 12.4 12.6 14 10.4 13.6 C8.6 13.2 7.8 12 8.2 10.4 Z" fill="${k.dark('#334155')}" ${k.o ? k.st : 'stroke="none"'} />
        <!-- Eyes -->
        <circle cx="11.8" cy="15.2" r="1.2" fill="${k.eye}" />
        <circle cx="20.2" cy="15.2" r="1.2" fill="${k.eye}" />
        <!-- Muzzle -->
        <ellipse cx="16" cy="22" rx="6.4" ry="4.4" fill="${k.alt('#FDA4AF')}" ${k.o ? k.st : k.s ? '' : `stroke="#F472B6" stroke-width="0.8"`} />
        <ellipse cx="13.6" cy="22" rx="0.9" ry="1.4" fill="${k.s ? '#FFFFFF' : k.o ? c.stroke : '#9F1239'}" stroke="none" />
        <ellipse cx="18.4" cy="22" rx="0.9" ry="1.4" fill="${k.s ? '#FFFFFF' : k.o ? c.stroke : '#9F1239'}" stroke="none" />
      </g>`;
    },
  },

  // 48. Tiger Face (U+1F42F)
  {
    id: 'tiger-face',
    char: '🐯',
    name: 'Tiger Face',
    unicodeHex: 'U+1F42F',
    category: 'objects-places',
    tags: ['tiger face', 'tiger', 'cat', 'stripes', 'cute', 'predator', 'feline', 'animal', '🐯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#FEF3C7', stroke: '#9A3412' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const cream = k.alt('#FFF7E6');
      const headD = 'M5.2 15.6 C5.2 10.8 9.6 8.2 16 8.2 C22.4 8.2 26.8 10.8 26.8 15.6 C28 17.2 27.8 20.4 25.8 22.2 C24 25.6 20.4 27.4 16 27.4 C11.6 27.4 8 25.6 6.2 22.2 C4.2 20.4 4 17.2 5.2 15.6 Z';
      const ears = `
        <circle cx="7.6" cy="9" r="4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="7.6" cy="9.2" r="2" fill="${cream}" ${k.o ? k.st : 'stroke="none"'} />
        <circle cx="24.4" cy="9" r="4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="24.4" cy="9.2" r="2" fill="${cream}" ${k.o ? k.st : 'stroke="none"'} />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('tiger-ears', `<path d="${headD}" fill="#000" />`, ears)}
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Cheek and muzzle -->
        <path d="M16 19.4 C12.4 17.6 8.4 19.6 9.2 22.6 C10 25.2 13.6 26.2 16 25.2 C18.4 26.2 22 25.2 22.8 22.6 C23.6 19.6 19.6 17.6 16 19.4 Z" fill="${cream}" ${k.o ? k.st : 'stroke="none"'} />
        <!-- Forehead stripes -->
        <g fill="none" stroke="${k.dark('#1C1917')}" stroke-width="1.5">
          <path d="M16 9.2 V13.4 M12.6 9.8 L13.8 12.8 M19.4 9.8 L18.2 12.8" />
          <path d="M5.4 16.6 L8.8 17.2 M5.8 20 L9 19.6 M26.6 16.6 L23.2 17.2 M26.2 20 L23 19.6" />
        </g>
        <!-- Eyes -->
        <circle cx="11.6" cy="15.8" r="1.3" fill="${k.eye}" />
        <circle cx="20.4" cy="15.8" r="1.3" fill="${k.eye}" />
        <!-- Nose and mouth -->
        <path d="M14.4 19.6 H17.6 L16 21.4 Z" fill="${k.s ? '#FFFFFF' : k.o ? c.stroke : k.d ? c.stroke : '#BE185D'}" stroke="none" />
        <path d="M16 21.4 V22.6 M13.6 23.2 C14.6 24 15.6 23.8 16 22.6 C16.4 23.8 17.4 24 18.4 23.2" fill="none" stroke="${k.ln}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 49. Rabbit Face (U+1F430)
  {
    id: 'rabbit-face',
    char: '🐰',
    name: 'Rabbit Face',
    unicodeHex: 'U+1F430',
    category: 'objects-places',
    tags: ['rabbit face', 'bunny', 'hare', 'cute', 'ears', 'pet', 'animal', 'easter', '🐰'],
    renderContent: (opts) => {
      const c0 = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#FDA4AF', stroke: '#94A3B8' });
      const c = opts.style === 'silhouette' ? { ...c0, primary: c0.stroke } : c0;
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const headD = 'M6.6 19.4 C6.6 14.8 10.6 12.6 16 12.6 C21.4 12.6 25.4 14.8 25.4 19.4 C25.4 24 21.4 27.4 16 27.4 C10.6 27.4 6.6 24 6.6 19.4 Z';
      const ears = `
        <ellipse cx="11.2" cy="8.4" rx="3.2" ry="7" transform="rotate(-8 11.2 8.4)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="11.2" cy="8.8" rx="1.6" ry="4.6" transform="rotate(-8 11.2 8.8)" fill="${k.alt('#FDA4AF')}" ${k.o ? k.st : 'stroke="none"'} />
        <ellipse cx="20.8" cy="8.4" rx="3.2" ry="7" transform="rotate(8 20.8 8.4)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="20.8" cy="8.8" rx="1.6" ry="4.6" transform="rotate(8 20.8 8.8)" fill="${k.alt('#FDA4AF')}" ${k.o ? k.st : 'stroke="none"'} />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('rabbit-ears', `<path d="${headD}" fill="#000" />`, ears)}
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Blush -->
        <circle cx="9.8" cy="21.4" r="1.9" fill="${k.o ? 'none' : k.s ? '#FFFFFF' : '#FDA4AF'}" opacity="${k.s ? 0 : 0.6}" stroke="none" />
        <circle cx="22.2" cy="21.4" r="1.9" fill="${k.o ? 'none' : k.s ? '#FFFFFF' : '#FDA4AF'}" opacity="${k.s ? 0 : 0.6}" stroke="none" />
        <!-- Eyes -->
        <circle cx="12" cy="18.2" r="1.4" fill="${k.eye}" />
        <circle cx="20" cy="18.2" r="1.4" fill="${k.eye}" />
        <circle cx="12.5" cy="17.7" r="0.45" fill="${k.o || k.s ? 'none' : '#FFFFFF'}" />
        <circle cx="20.5" cy="17.7" r="0.45" fill="${k.o || k.s ? 'none' : '#FFFFFF'}" />
        <!-- Nose, mouth, teeth -->
        <path d="M14.6 20.6 H17.4 L16 22 Z" fill="${k.s ? '#FFFFFF' : k.o ? c.stroke : '#F472B6'}" stroke="none" />
        <path d="M16 22 V23.2 M13.8 23.4 C14.8 24.2 15.6 24 16 23.2 C16.4 24 17.2 24.2 18.2 23.4" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        <rect x="15.1" y="24" width="1.8" height="2" rx="0.4" fill="${k.o ? 'none' : '#FFFFFF'}" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : c.stroke}" stroke-width="0.6" />
      </g>`;
    },
  },

  // 50. Cat Face (U+1F431)
  {
    id: 'cat-face',
    char: '🐱',
    name: 'Cat Face',
    unicodeHex: 'U+1F431',
    category: 'objects-places',
    tags: ['cat face', 'cat', 'kitten', 'pet', 'feline', 'meow', 'cute', 'animal', '🐱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FDA4AF', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const headD = 'M5.6 18.4 C5.6 13 10 10.4 16 10.4 C22 10.4 26.4 13 26.4 18.4 C26.4 23.6 22 27.4 16 27.4 C10 27.4 5.6 23.6 5.6 18.4 Z';
      const ears = `
        <path d="M5.8 17 C4.8 12.4 4.8 8.2 6 5.4 C8.6 6 11.6 8 14 11 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M7 14 C6.6 11.6 6.6 9.6 7 8 C8.4 8.6 10 9.6 11.4 11.2 Z" fill="${k.alt('#FDA4AF')}" ${k.o ? k.st : 'stroke="none"'} />
        <path d="M26.2 17 C27.2 12.4 27.2 8.2 26 5.4 C23.4 6 20.4 8 18 11 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M25 14 C25.4 11.6 25.4 9.6 25 8 C23.6 8.6 22 9.6 20.6 11.2 Z" fill="${k.alt('#FDA4AF')}" ${k.o ? k.st : 'stroke="none"'} />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('cat-ears', `<path d="${headD}" fill="#000" />`, ears)}
        <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Forehead stripes -->
        <g fill="none" stroke="${k.dark('#B45309')}" stroke-width="1.3">
          <path d="M16 11.2 V14.2 M12.8 11.8 L13.6 14 M19.2 11.8 L18.4 14" />
        </g>
        <!-- Muzzle -->
        <ellipse cx="16" cy="22.4" rx="4.8" ry="3.4" fill="${k.alt('#FEF3C7')}" ${k.o ? k.st : 'stroke="none"'} />
        <!-- Eyes -->
        <ellipse cx="11.4" cy="17.6" rx="1.5" ry="1.8" fill="${k.eye}" />
        <ellipse cx="20.6" cy="17.6" rx="1.5" ry="1.8" fill="${k.eye}" />
        <circle cx="11.9" cy="16.9" r="0.55" fill="${k.o || k.s ? 'none' : '#FFFFFF'}" />
        <circle cx="21.1" cy="16.9" r="0.55" fill="${k.o || k.s ? 'none' : '#FFFFFF'}" />
        <!-- Nose and mouth -->
        <path d="M14.6 20.4 H17.4 L16 22 Z" fill="${k.s ? '#FFFFFF' : k.o ? c.stroke : '#F472B6'}" stroke="none" />
        <path d="M16 22 V23 M13.6 23.4 C14.6 24.2 15.6 24 16 23 C16.4 24 17.4 24.2 18.4 23.4" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        <!-- Whiskers -->
        <path d="M10.6 21.6 L4 20.4 M10.8 23.4 L4.6 24.6 M21.4 21.6 L28 20.4 M21.2 23.4 L27.4 24.6" fill="none" stroke="${k.s ? c.primary : c.stroke}" stroke-width="0.9" />
      </g>`;
    },
  },
];
