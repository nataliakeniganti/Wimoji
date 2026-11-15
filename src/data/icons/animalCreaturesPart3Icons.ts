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
  return {
    o, d, s, t,
    fill: (v: string) => (o ? 'none' : v),
    alt: (lit: string) => (o ? 'none' : d ? c.secondary : lit),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${c.stroke}" stroke-width="${t}"`,
  };
};

export const animalCreaturesPart3Icons: WimojiIconDef[] = [
  // 31. Lady Beetle (U+1F41E)
  {
    id: 'lady-beetle',
    char: '🐞',
    name: 'Lady Beetle',
    unicodeHex: 'U+1F41E',
    category: 'objects-places',
    tags: ['ladybug', 'ladybird', 'lady beetle', 'insect', 'bug', 'red', 'spots', 'lucky', '🐞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#0F172A', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const ink = k.d ? c.secondary : '#1E293B';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs and antennae -->
        <g fill="none" stroke="${k.o ? c.stroke : ink}" stroke-width="1.3">
          <path d="M8.6 15 L5 13 M8 19.4 L4.4 19.8 M9 23.6 L5.6 26 M23.4 15 L27 13 M24 19.4 L27.6 19.8 M23 23.6 L26.4 26" />
          <path d="M14.4 8.4 L12 4.4 M17.6 8.4 L20 4.4" />
        </g>
        <!-- Shell -->
        <circle cx="16" cy="18.4" r="8.8" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Spots -->
        <g fill="${k.o ? c.stroke : ink}" stroke="none">
          <circle cx="11.6" cy="15.6" r="1.7" /><circle cx="20.4" cy="15.6" r="1.7" />
          <circle cx="10.8" cy="21.6" r="1.5" /><circle cx="21.2" cy="21.6" r="1.5" />
          <circle cx="14.2" cy="25" r="1" /><circle cx="17.8" cy="25" r="1" />
        </g>
        <!-- Wing split and gloss -->
        <path d="M16 10.4 V27.2" fill="none" stroke="${k.o ? c.stroke : ink}" stroke-width="1.3" />
        <path d="M10.4 12.4 C9 13.2 8.4 14.2 8.2 15.4" fill="none" stroke="${k.o ? 'none' : '#FFFFFF'}" stroke-width="1" opacity="0.7" />
        <!-- Head -->
        <path d="M11.6 10.4 C11.6 6.6 20.4 6.6 20.4 10.4 C18.6 11.6 13.4 11.6 11.6 10.4 Z" fill="${k.fill(ink)}" ${k.st} />
        <ellipse cx="14.2" cy="9.2" rx="1" ry="0.7" fill="${k.o ? c.stroke : '#FFFFFF'}" stroke="none" />
        <ellipse cx="17.8" cy="9.2" rx="1" ry="0.7" fill="${k.o ? c.stroke : '#FFFFFF'}" stroke="none" />
      </g>`;
    },
  },

  // 32. Fish (U+1F41F)
  {
    id: 'fish',
    char: '🐟',
    name: 'Fish',
    unicodeHex: 'U+1F41F',
    category: 'objects-places',
    tags: ['fish', 'sea', 'ocean', 'swim', 'water', 'seafood', 'marine', 'pisces', 'blue', '🐟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#BAE6FD', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const fin = k.alt('#0EA5E9');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Forked tail -->
        <path d="M22.5 16 L29 10.4 C28 13.2 28 18.8 29 21.6 Z" fill="${fin}" ${k.st} />
        <!-- Dorsal and pelvic fins -->
        <path d="M10.6 10.8 C12.6 6.8 17 6.8 18.8 11.6 Z" fill="${fin}" ${k.st} />
        <path d="M12.6 20.8 L14.4 24.4 L17.6 20.8 Z" fill="${fin}" ${k.st} />
        <!-- Body -->
        <path d="M3.4 16 C6 11 12 9.6 18 11.6 C21 12.6 22.6 14.2 23.6 16 C22.6 17.8 21 19.6 18 20.6 C12 22.6 6 21 3.4 16 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Pale belly -->
        <path d="M6 18.2 C10 21.2 16 21.4 20.6 18.6" fill="none" stroke="${k.alt(c.secondary)}" stroke-width="1.6" />
        <!-- Gill, pectoral fin, scales -->
        <path d="M10 12.6 C11.2 14.6 11.2 17.8 10 19.8" fill="none" ${k.st} stroke-width="0.9" />
        <path d="M13 17.4 C15 17 17 17.6 17.6 18.8 C15.6 19.2 13.6 18.8 13 17.4 Z" fill="${fin}" ${k.st} stroke-width="0.7" />
        <path d="M18 14.2 L19.6 15.6 M18 17.2 L19.6 16 M15.4 13.6 L16.8 15" fill="none" ${k.st} stroke-width="0.6" opacity="0.7" />
        <circle cx="6.8" cy="14.8" r="1.5" fill="${k.o ? 'none' : '#FFFFFF'}" ${k.st} stroke-width="0.6" />
        <circle cx="6.6" cy="14.8" r="0.8" fill="${k.o ? c.stroke : '#0F172A'}" />
      </g>`;
    },
  },

  // 33. Tropical Fish (U+1F420)
  {
    id: 'tropical-fish',
    char: '🐠',
    name: 'Tropical Fish',
    unicodeHex: 'U+1F420',
    category: 'objects-places',
    tags: ['tropical fish', 'fish', 'aquarium', 'reef', 'yellow', 'blue', 'stripes', 'ocean', '🐠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#0284C7', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const fin = k.alt('#FBBF24');
      const stripe = k.o ? c.stroke : k.d ? c.secondary : '#0284C7';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        <path d="M21.4 16 L28.8 10.4 C27.6 13.6 27.6 18.4 28.8 21.6 Z" fill="${fin}" ${k.st} />
        <!-- Dorsal and anal fins -->
        <path d="M8 10.4 C10 3.8 17.4 4 20 11.4 Z" fill="${fin}" ${k.st} />
        <path d="M10 21.8 C12 27.4 17.4 27.4 19 21 Z" fill="${fin}" ${k.st} />
        <!-- Body -->
        <ellipse cx="13.6" cy="16" rx="8.6" ry="7.4" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Stripes -->
        <g fill="none" stroke="${stripe}" stroke-width="2.4" stroke-linecap="butt">
          <path d="M10.4 9.6 C9.2 13 9.2 19 10.4 22.4" />
          <path d="M16.4 9 C15 13 15 19 16.4 23" />
        </g>
        <!-- Pectoral fin, mouth, eye -->
        <path d="M11.6 16.6 C13 15.8 14.6 16.6 14.6 18.4 C12.8 18.6 11.8 17.8 11.6 16.6 Z" fill="${fin}" ${k.st} stroke-width="0.7" />
        <path d="M5.2 17.6 C5.8 18 6.6 18 7.2 17.6" fill="none" ${k.st} stroke-width="0.7" />
        <circle cx="7.8" cy="13.6" r="1.7" fill="${k.o ? 'none' : '#FFFFFF'}" ${k.st} stroke-width="0.7" />
        <circle cx="7.6" cy="13.7" r="0.9" fill="${k.o ? c.stroke : '#0F172A'}" />
      </g>`;
    },
  },

  // 34. Blowfish (U+1F421)
  {
    id: 'blowfish',
    char: '🐡',
    name: 'Blowfish',
    unicodeHex: 'U+1F421',
    category: 'objects-places',
    tags: ['blowfish', 'pufferfish', 'fugu', 'fish', 'spikes', 'ocean', 'spiky', '🐡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#F59E0B', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const cx = 15, cy = 16, r = 8;
      const spikes = [-125, -100, -75, -50, 52, 78, 104, 130].map((deg) => {
        const a = (deg * Math.PI) / 180;
        const w = 0.2;
        const p = (rr: number, da: number) => `${(cx + rr * Math.cos(a + da)).toFixed(1)},${(cy + rr * Math.sin(a + da)).toFixed(1)}`;
        return `<polygon points="${p(r - 0.6, -w)} ${p(r + 3.4, 0)} ${p(r - 0.6, w)}" fill="${k.alt('#F59E0B')}" ${k.st} stroke-width="0.7" />`;
      }).join('\n        ');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        <path d="M22.4 16 L28.6 11.4 C27.6 14.4 27.6 17.6 28.6 20.6 Z" fill="${k.alt('#F59E0B')}" ${k.st} />
        <!-- Spikes -->
        ${spikes}
        <!-- Inflated body -->
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M8.4 19.6 C11.4 24 18.6 24.4 22 19.6" fill="none" stroke="${k.alt('#FEF9C3')}" stroke-width="2.2" />
        <!-- Fin -->
        <path d="M15.4 17 C17.4 16.4 19.4 17.4 19.4 19.4 C17 19.8 15.6 18.8 15.4 17 Z" fill="${k.alt('#F59E0B')}" ${k.st} stroke-width="0.7" />
        <!-- Face -->
        <circle cx="10.4" cy="13.2" r="2.2" fill="${k.o ? 'none' : '#FFFFFF'}" ${k.st} stroke-width="0.7" />
        <circle cx="10.2" cy="13.3" r="1.1" fill="${k.o ? c.stroke : '#0F172A'}" />
        <ellipse cx="7" cy="17.6" rx="1.3" ry="1.1" fill="${k.alt('#FB7185')}" ${k.st} stroke-width="0.6" />
        <circle cx="9.2" cy="18.8" r="1" fill="${k.alt('#FDA4AF')}" stroke="none" opacity="0.8" />
      </g>`;
    },
  },

  // 35. Turtle (U+1F422)
  {
    id: 'turtle',
    char: '🐢',
    name: 'Turtle',
    unicodeHex: 'U+1F422',
    category: 'objects-places',
    tags: ['turtle', 'tortoise', 'reptile', 'shell', 'slow', 'green', 'animal', '🐢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#15803D', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const skin = k.fill(c.primary);
      const shell = k.alt('#15803D');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail, legs -->
        <path d="M25.4 21 L29.2 22.4 L25.4 23.8 Z" fill="${skin}" ${k.st} />
        <ellipse cx="10.4" cy="24.6" rx="2.6" ry="2.2" fill="${skin}" ${k.st} />
        <ellipse cx="22" cy="24.6" rx="2.6" ry="2.2" fill="${skin}" ${k.st} />
        <!-- Neck and head -->
        <ellipse cx="7.6" cy="19.6" rx="3.2" ry="2.6" fill="${skin}" ${k.st} />
        <circle cx="4.8" cy="18.2" r="3" fill="${skin}" ${k.st} />
        <circle cx="3.8" cy="17.4" r="0.8" fill="${k.eye}" />
        <path d="M2.6 19.6 C3.4 20.2 4.4 20.2 5.2 19.8" fill="none" ${k.st} stroke-width="0.7" />
        <!-- Shell dome -->
        <path d="M7 21 C7 10.8 25 10.8 25 21 Z" fill="${shell}" ${k.st} />
        <!-- Scutes -->
        <g fill="none" ${k.st} stroke-width="0.8" opacity="0.85">
          <path d="M13.2 17 L14.6 14.6 H17.4 L18.8 17 L17.4 19.4 H14.6 Z" />
          <path d="M14.6 14.6 L12.6 13.2 M17.4 14.6 L19.4 13.2 M13.2 17 L8.6 17.4 M18.8 17 L23.4 17.4 M14.6 19.4 L13 21 M17.4 19.4 L19 21" />
        </g>
        <!-- Pale shell rim -->
        <rect x="6" y="20.4" width="20" height="3" rx="1.5" fill="${k.alt('#FDE68A')}" ${k.st} />
      </g>`;
    },
  },

  // 36. Hatching Chick (U+1F423)
  {
    id: 'hatching-chick',
    char: '🐣',
    name: 'Hatching Chick',
    unicodeHex: 'U+1F423',
    category: 'objects-places',
    tags: ['hatching chick', 'baby chick', 'egg', 'born', 'spring', 'easter', 'chick', 'cute', '🐣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#F8FAFC', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const shell = k.d ? c.secondary : '#F8FAFC';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Head tuft -->
        <path d="M14.4 6.6 C13.6 4.8 15.2 4.2 16 5.8 C16.4 4.2 18.2 4.6 17.6 6.6" fill="none" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Wing tips -->
        <ellipse cx="8.8" cy="15.4" rx="1.8" ry="2.8" transform="rotate(-28 8.8 15.4)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="23.2" cy="15.4" rx="1.8" ry="2.8" transform="rotate(28 23.2 15.4)" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Chick head -->
        <circle cx="16" cy="12.6" r="6.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="13.2" cy="11.6" r="0.95" fill="${k.eye}" />
        <circle cx="18.8" cy="11.6" r="0.95" fill="${k.eye}" />
        <path d="M14.2 13 H17.8 L16 15.4 Z" fill="${k.alt('#F97316')}" ${k.st} stroke-width="0.6" />
        <circle cx="11.4" cy="13.8" r="1" fill="${k.alt('#FDA4AF')}" stroke="none" opacity="0.85" />
        <circle cx="20.6" cy="13.8" r="1" fill="${k.alt('#FDA4AF')}" stroke="none" opacity="0.85" />
        <!-- Broken eggshell -->
        <path d="M6.4 19.4 L9.6 16 L12.8 19.4 L16 15.8 L19.2 19.4 L22.4 16 L25.6 19.4 C25.6 24.8 21.6 28.2 16 28.2 C10.4 28.2 6.4 24.8 6.4 19.4 Z" fill="${k.fill(shell)}" stroke="${k.o ? c.stroke : '#94A3B8'}" stroke-width="${k.t}" />
        <path d="M10 23.4 C10.8 25 12.2 26 13.8 26.4" fill="none" stroke="${k.o ? 'none' : '#E2E8F0'}" stroke-width="1.2" />
      </g>`;
    },
  },

  // 37. Baby Chick (U+1F424)
  {
    id: 'baby-chick',
    char: '🐤',
    name: 'Baby Chick',
    unicodeHex: 'U+1F424',
    category: 'objects-places',
    tags: ['baby chick', 'chick', 'bird', 'yellow', 'cute', 'animal', 'poultry', '🐤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#F59E0B', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const orange = k.alt('#F97316');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs -->
        <path d="M15 25.8 L14.6 28.6 M14.6 28.6 L12.8 29 M14.6 28.6 L16.2 29 M19.8 25.8 L20.2 28.6 M20.2 28.6 L18.4 29 M20.2 28.6 L21.8 29" fill="none" stroke="${k.o ? c.stroke : k.d ? c.secondary : '#F97316'}" stroke-width="1.2" />
        <!-- Tail tuft -->
        <path d="M24.4 17 L28.4 14.6 L26.6 20 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body -->
        <ellipse cx="16.6" cy="19.6" rx="8.8" ry="6.8" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Wing -->
        <path d="M14 18.6 C17 17 21.6 18.2 22 21 C20 23.4 15.4 22.6 14 18.6 Z" fill="${k.alt(c.secondary)}" ${k.st} stroke-width="0.7" opacity="0.85" />
        <!-- Head -->
        <path d="M9.4 7.6 C9 5.8 10.6 5.4 11.2 6.8 C11.8 5.4 13.4 5.8 12.8 7.6" fill="none" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="11.2" cy="13" r="5.8" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M5.8 12.6 L2.6 14 L5.8 15.6 Z" fill="${orange}" ${k.st} stroke-width="0.7" />
        <circle cx="9.4" cy="11.8" r="0.95" fill="${k.eye}" />
        <circle cx="8.2" cy="15" r="1.1" fill="${k.alt('#FDA4AF')}" stroke="none" opacity="0.85" />
      </g>`;
    },
  },

  // 38. Front-Facing Baby Chick (U+1F425)
  {
    id: 'front-facing-baby-chick',
    char: '🐥',
    name: 'Front-Facing Baby Chick',
    unicodeHex: 'U+1F425',
    category: 'objects-places',
    tags: ['baby chick', 'chick', 'front facing', 'bird', 'yellow', 'cute', 'animal', '🐥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#F59E0B', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Feet -->
        <ellipse cx="12.4" cy="27.4" rx="2.6" ry="1.1" fill="${k.alt('#F97316')}" ${k.st} stroke-width="0.7" />
        <ellipse cx="19.6" cy="27.4" rx="2.6" ry="1.1" fill="${k.alt('#F97316')}" ${k.st} stroke-width="0.7" />
        <!-- Round body -->
        <ellipse cx="16" cy="17" rx="10" ry="9.6" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Wings -->
        <ellipse cx="6.8" cy="19.6" rx="2" ry="3.6" transform="rotate(14 6.8 19.6)" fill="${k.alt(c.secondary)}" ${k.st} stroke-width="0.7" />
        <ellipse cx="25.2" cy="19.6" rx="2" ry="3.6" transform="rotate(-14 25.2 19.6)" fill="${k.alt(c.secondary)}" ${k.st} stroke-width="0.7" />
        <!-- Head tuft -->
        <path d="M13.6 8.2 C12.6 5.8 14.6 5 15.4 7 C16 5 18 5.4 17.8 8" fill="none" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Face -->
        <circle cx="12" cy="14.6" r="1.1" fill="${k.eye}" />
        <circle cx="20" cy="14.6" r="1.1" fill="${k.eye}" />
        <path d="M13.8 16.8 H18.2 L16 19.4 Z" fill="${k.alt('#F97316')}" ${k.st} stroke-width="0.7" />
        <circle cx="9.4" cy="17.6" r="1.3" fill="${k.alt('#FDA4AF')}" stroke="none" opacity="0.85" />
        <circle cx="22.6" cy="17.6" r="1.3" fill="${k.alt('#FDA4AF')}" stroke="none" opacity="0.85" />
      </g>`;
    },
  },

  // 39. Bird (U+1F426)
  {
    id: 'bird',
    char: '🐦',
    name: 'Bird',
    unicodeHex: 'U+1F426',
    category: 'objects-places',
    tags: ['bird', 'bluebird', 'robin', 'fly', 'avian', 'wildlife', 'animal', 'tweet', '🐦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#38BDF8', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const wing = k.alt('#0EA5E9');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs -->
        <path d="M14.6 23 L14.2 27.4 M14.2 27.4 L12.4 28.2 M14.2 27.4 L16 28.2 M18.4 23.4 L18.8 27.4 M18.8 27.4 L17 28.2 M18.8 27.4 L20.6 28" fill="none" stroke="${k.o ? c.stroke : k.d ? c.secondary : '#F59E0B'}" stroke-width="1.2" />
        <!-- Tail feathers -->
        <path d="M22.2 17.4 L30 20.2 L29.2 22.8 L21 21.4 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body -->
        <ellipse cx="16.4" cy="17.4" rx="8.8" ry="6.2" transform="rotate(10 16.4 17.4)" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Pale belly -->
        <path d="M9.4 18.4 C11 22.4 17 23.8 21 21.6 C16 21.8 12 20.8 9.4 18.4 Z" fill="${k.alt('#E0F2FE')}" stroke="none" />
        <!-- Wing -->
        <path d="M13 15.4 C17.4 13.4 23.4 15.4 24 19.4 C19 21.4 13.6 20 13 15.4 Z" fill="${wing}" ${k.st} stroke-width="0.8" />
        <path d="M16 17.4 L21.4 18 M15.6 19 L20 19.6" fill="none" ${k.st} stroke-width="0.6" opacity="0.7" />
        <!-- Head, crest, beak, eye -->
        <path d="M8.4 7.4 C8.6 5.6 10.4 5.2 11 6.6 C11.4 5.4 13 5.8 12.6 7.4" fill="none" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="10.4" cy="11.8" r="4.8" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M6.2 10.6 L2.6 12.2 L6.4 13.6 Z" fill="${k.alt('#F59E0B')}" ${k.st} stroke-width="0.7" />
        <circle cx="9" cy="10.6" r="1.4" fill="${k.o ? 'none' : '#FFFFFF'}" ${k.st} stroke-width="0.6" />
        <circle cx="8.8" cy="10.7" r="0.75" fill="${k.o ? c.stroke : '#0F172A'}" />
      </g>`;
    },
  },

  // 40. Penguin (U+1F427)
  {
    id: 'penguin',
    char: '🐧',
    name: 'Penguin',
    unicodeHex: 'U+1F427',
    category: 'objects-places',
    tags: ['penguin', 'bird', 'antarctica', 'cold', 'ice', 'waddle', 'animal', 'tuxedo', '🐧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#020617' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const white = k.d ? c.secondary : '#F8FAFC';
      const orange = k.alt('#F97316');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Feet -->
        <ellipse cx="12.4" cy="27.6" rx="3.2" ry="1.3" fill="${orange}" ${k.st} stroke-width="0.8" />
        <ellipse cx="19.6" cy="27.6" rx="3.2" ry="1.3" fill="${orange}" ${k.st} stroke-width="0.8" />
        <!-- Flippers -->
        <ellipse cx="7.2" cy="17.6" rx="2.1" ry="5.8" transform="rotate(14 7.2 17.6)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="24.8" cy="17.6" rx="2.1" ry="5.8" transform="rotate(-14 24.8 17.6)" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body -->
        <ellipse cx="16" cy="16.6" rx="8.4" ry="10.4" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- White belly and face -->
        <ellipse cx="16" cy="19.4" rx="5.4" ry="7.4" fill="${k.alt(white)}" ${k.o ? k.st : 'stroke="none"'} />
        <circle cx="13.2" cy="11.4" r="2.8" fill="${k.alt(white)}" stroke="none" />
        <circle cx="18.8" cy="11.4" r="2.8" fill="${k.alt(white)}" stroke="none" />
        <!-- Eyes and beak -->
        <circle cx="13.4" cy="11.4" r="1" fill="${k.o ? c.stroke : '#0F172A'}" />
        <circle cx="18.6" cy="11.4" r="1" fill="${k.o ? c.stroke : '#0F172A'}" />
        <circle cx="13.7" cy="11" r="0.3" fill="${k.o ? 'none' : '#FFFFFF'}" stroke="none" />
        <circle cx="18.9" cy="11" r="0.3" fill="${k.o ? 'none' : '#FFFFFF'}" stroke="none" />
        <path d="M14 13.2 H18 L16 16 Z" fill="${orange}" ${k.st} stroke-width="0.7" />
      </g>`;
    },
  },
];
