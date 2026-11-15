import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared helpers (all animals are drawn in a 32x32 box, facing left) ----
type AnimalOpts = { style?: string; strokeWidth?: number };
type AnimalColors = { primary: string; secondary: string; stroke: string };

const kit = (opts: AnimalOpts, c: AnimalColors) => {
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  // Detailed animals use a finer line than the chunky tool icons.
  const t = o ? Math.max(1.2, sw * 0.75) : Math.max(0.9, sw * 0.55);
  return {
    o, d, s, t,
    /** Fill that disappears in outline mode. */
    fill: (v: string) => (o ? 'none' : v),
    /** Detail colour: literal in flat, secondary in duotone, none in outline. */
    alt: (lit: string) => (o ? 'none' : d ? c.secondary : lit),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${c.stroke}" stroke-width="${t}"`,
    /** A thick rounded tube (tail, snake, neck). Outlined in flat styles. */
    tube: (path: string, w: number, fillCol: string) =>
      o
        ? `<path d="${path}" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(1.4, t * 1.5)}" />`
        : `<path d="${path}" fill="none" stroke="${c.stroke}" stroke-width="${w + t * 2}" /><path d="${path}" fill="none" stroke="${fillCol}" stroke-width="${w}" />`,
  };
};

// ---- Bovines: ox, water buffalo, cow ----
type BovineCfg = {
  body: string; dark: string; hoof: string; muzzle: string; horn: string;
  hornPath: string; hornW: number; hump?: boolean; patches?: boolean; udder?: boolean;
};
const bovine = (opts: AnimalOpts, c: AnimalColors, g: BovineCfg): string => {
  const k = kit(opts, c);
  const legX = [9, 12, 20.5, 23.5];
  const legs = legX.map((x) =>
    `<rect x="${x}" y="17" width="2.8" height="10.5" rx="1" fill="${k.fill(g.body)}" ${k.st} />` +
    (k.o ? '' : `<rect x="${x}" y="25.3" width="2.8" height="2.2" rx="0.9" fill="${k.alt(g.hoof)}" ${k.st} />`)
  ).join('');
  return `<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        ${k.tube('M27 11.5 C29.5 13 29.5 17 28.6 20.5', 1.4, g.body)}
        <ellipse cx="28.6" cy="21.6" rx="1.2" ry="1.9" fill="${k.alt(g.dark)}" ${k.st} />
        <!-- Legs -->
        ${legs}
        ${g.udder ? `<ellipse cx="21.8" cy="21.3" rx="2" ry="1.4" fill="${k.alt('#FDA4AF')}" ${k.st} />` : ''}
        ${g.hump ? `<ellipse cx="13.5" cy="10" rx="4.6" ry="3.4" fill="${k.fill(g.body)}" ${k.st} />` : ''}
        <!-- Body -->
        <path d="M8.5 12 C8.5 10 11 9.5 15 9.5 H22 C25.5 9.5 27.2 11.5 27.2 15 C27.2 18.8 25.5 21 22 21 H13 C10 21 8.5 18.5 8.5 12 Z" fill="${k.fill(g.body)}" ${k.st} />
        ${g.patches ? `<g fill="${k.alt('#1E293B')}" stroke="none">
          <ellipse cx="14.5" cy="13" rx="2.8" ry="2" />
          <ellipse cx="22.5" cy="15.5" rx="2.4" ry="2.6" />
          <ellipse cx="18.5" cy="19" rx="1.6" ry="1.1" />
        </g>` : ''}
        <!-- Horn -->
        <path d="${g.hornPath}" fill="none" stroke="${k.o ? c.stroke : g.horn}" stroke-width="${g.hornW}" />
        <!-- Head -->
        <path d="M10.5 9.8 C8.5 9 6.5 9.5 5.3 11 L3 15.6 C2.4 17.4 3.2 19.4 5.2 19.8 C6.8 20.1 8.2 19.5 9.2 18 L11.5 13.5 Z" fill="${k.fill(g.body)}" ${k.st} />
        ${g.patches ? `<ellipse cx="7" cy="12.6" rx="1.8" ry="1.6" fill="${k.alt('#1E293B')}" />` : ''}
        <!-- Ear -->
        <ellipse cx="9.6" cy="10.8" rx="2.3" ry="1.1" transform="rotate(25 9.6 10.8)" fill="${k.fill(g.body)}" ${k.st} />
        <!-- Muzzle -->
        <ellipse cx="4.7" cy="18.3" rx="2" ry="1.5" fill="${k.alt(g.muzzle)}" ${k.st} />
        <circle cx="4.1" cy="18.4" r="0.45" fill="${k.o ? c.stroke : k.eye}" />
        <circle cx="6.5" cy="13.2" r="0.85" fill="${k.eye}" />
      </g>`;
};

// ---- Big cats: tiger, leopard ----
type CatCfg = { body: string; mark: string; markType: 'stripes' | 'spots'; belly: string };
const bigCat = (opts: AnimalOpts, c: AnimalColors, g: CatCfg): string => {
  const k = kit(opts, c);
  const legX = [9.5, 12.5, 21, 24];
  const legs = legX.map((x) =>
    `<rect x="${x}" y="16" width="2.9" height="11.5" rx="1.3" fill="${k.fill(g.body)}" ${k.st} />` +
    (k.o ? '' : `<ellipse cx="${x + 1.45}" cy="27" rx="1.9" ry="1" fill="${k.alt(g.belly)}" ${k.st} />`)
  ).join('');
  const markings = g.markType === 'stripes'
    ? `<g fill="none" stroke="${k.alt('#1E293B')}" stroke-width="1.3">
          <path d="M13 9.8 L14 13.5 M16.5 9.6 L17.4 14.5 M20 9.8 L20.6 14.5 M23.3 10.6 L23.6 14" />
          <path d="M11.5 16.5 L12.8 18.8 M15 17.5 L16 18.8 M22 17 L22.6 18.7" />
        </g>`
    : `<g fill="${k.alt('#78350F')}" stroke="none">
          <circle cx="13.5" cy="12" r="1.1" /><circle cx="17" cy="11.2" r="1.1" /><circle cx="20.5" cy="11.8" r="1.1" />
          <circle cx="24" cy="13" r="1.1" /><circle cx="15" cy="15.5" r="1.1" /><circle cx="19" cy="15.8" r="1.1" />
          <circle cx="22.5" cy="16.5" r="1" /><circle cx="12" cy="15" r="0.9" />
        </g>`;
  return `<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        ${k.tube('M26.5 12.5 C29 12.2 29.6 9.2 28 6.4', 2.4, g.body)}
        ${k.o ? '' : `<path d="M28.5 7.2 L28 6.4" stroke="${k.alt('#1E293B')}" stroke-width="2.6" />`}
        ${legs}
        <!-- Body -->
        <path d="M8.5 12.5 C8.5 9.8 12 9.3 16 9.3 H22 C25.5 9.3 27.3 11 27.3 14 C27.3 17.2 25.3 18.8 22 18.8 H12.5 C10 18.8 8.5 16.5 8.5 12.5 Z" fill="${k.fill(g.body)}" ${k.st} />
        ${markings}
        <!-- Ears -->
        <circle cx="5.2" cy="8.4" r="1.7" fill="${k.fill(g.body)}" ${k.st} />
        <circle cx="10" cy="8.2" r="1.7" fill="${k.fill(g.body)}" ${k.st} />
        <!-- Head -->
        <ellipse cx="7.3" cy="12.8" rx="4.9" ry="4.4" fill="${k.fill(g.body)}" ${k.st} />
        <ellipse cx="4.6" cy="14.6" rx="2.4" ry="1.8" fill="${k.alt(g.belly)}" stroke="none" />
        <circle cx="2.8" cy="13.6" r="0.9" fill="${k.alt('#FB7185')}" />
        <circle cx="6.2" cy="11.5" r="0.85" fill="${k.eye}" />
        ${g.markType === 'stripes' ? `<path d="M7 8.8 V10.5 M9.2 9.3 L8.8 10.8" stroke="${k.alt('#1E293B')}" stroke-width="1" fill="none" />` : ''}
      </g>`;
};

// ---- Sheep: ram, ewe ----
const sheep = (opts: AnimalOpts, c: AnimalColors, ram: boolean): string => {
  const k = kit(opts, c);
  const puffs: [number, number, number][] = [[13.5, 15, 5], [18.5, 13.8, 5.2], [23.5, 16, 4.6], [22, 20, 4.2], [16.5, 19.5, 4.8], [12, 19, 3.6]];
  const cloud = 'M10 18.5 C7.5 16 9.5 11.5 13.5 11 C15 8.2 20.5 8 22.5 10.8 C26.5 10.6 29 14.5 27.5 18 C28.5 21.5 25 24.5 21.5 23.8 C19 25.5 14 25 12.5 22.5 C10 22.5 8.5 20.5 10 18.5 Z';
  const outline = k.o ? `<path d="${cloud}" fill="none" ${k.st} />` : puffs.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${k.fill(c.primary)}" ${k.st} />`).join('');
  const cover = k.o ? '' : puffs.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r - 0.5}" fill="${c.primary}" stroke="none" />`).join('');
  const face = ram ? '#D6B98C' : '#475569';
  const legs = [11.5, 14.5, 21, 24].map((x) =>
    `<rect x="${x}" y="21" width="2" height="6.5" rx="1" fill="${k.alt('#475569')}" ${k.st} />`).join('');
  return `<g stroke-linecap="round" stroke-linejoin="round">
        ${legs}
        ${outline}${cover}
        <!-- Head -->
        <path d="M10.5 11.5 C8 10 5 11 4.5 14 C4 16 4.5 18.5 6 20 C7.5 21.2 9.5 20 10.2 18.2 C11 16 11.2 13 10.5 11.5 Z" fill="${k.alt(face)}" ${k.st} />
        <ellipse cx="9.8" cy="11.8" rx="2.4" ry="1.2" transform="rotate(30 9.8 11.8)" fill="${k.alt(face)}" ${k.st} />
        ${ram
          ? `<path d="M11 10.5 C15.5 7.5 17.5 13.5 13 14.5 C10.5 15 9.5 12.5 11.2 11.7" fill="none" stroke="${k.o ? c.stroke : '#B45309'}" stroke-width="2" />`
          : `<ellipse cx="9" cy="9.4" rx="3.3" ry="2.1" fill="${k.fill(c.primary)}" ${k.st} />`}
        <circle cx="7" cy="14.2" r="0.85" fill="${k.o ? c.stroke : '#FFFFFF'}" />
        <circle cx="5.3" cy="17.6" r="0.7" fill="${k.o ? c.stroke : '#0F172A'}" />
      </g>`;
};

// ---- Mouse / rat ----
const rodent = (opts: AnimalOpts, c: AnimalColors, g: { body: string; ear: number; tail: string; tailW: number }): string => {
  const k = kit(opts, c);
  return `<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        <path d="${g.tail}" fill="none" stroke="${k.o ? c.stroke : k.d ? c.primary : '#F9A8D4'}" stroke-width="${g.tailW}" />
        <!-- Feet -->
        <ellipse cx="10" cy="25.3" rx="2.4" ry="1.1" fill="${k.alt('#FDA4AF')}" ${k.st} />
        <ellipse cx="20.5" cy="25.3" rx="2.8" ry="1.1" fill="${k.alt('#FDA4AF')}" ${k.st} />
        <!-- Body -->
        <path d="M3.8 19.6 C5.2 15.8 9.5 13.2 14.5 13.2 C21 13.2 25.5 16.5 25.5 20.5 C25.5 23.6 21.5 25.2 16 25.2 C10 25.2 4.4 23.8 3.8 19.6 Z" fill="${k.fill(g.body)}" ${k.st} />
        <!-- Haunch -->
        <path d="M17 24.5 C16.5 20 21 17.5 23.5 19.5" fill="none" ${k.st} opacity="0.55" />
        <!-- Ear -->
        <circle cx="11.6" cy="13.4" r="${g.ear}" fill="${k.fill(g.body)}" ${k.st} />
        <circle cx="11.6" cy="13.4" r="${g.ear - 1.2}" fill="${k.alt('#FDA4AF')}" stroke="none" />
        <!-- Face -->
        <circle cx="4" cy="19.5" r="1.05" fill="${k.alt('#FB7185')}" ${k.st} />
        <circle cx="7.6" cy="17.6" r="0.9" fill="${k.eye}" />
        <path d="M5.2 19 L1.8 17.6 M5.2 20.2 L1.8 21.6" fill="none" ${k.st} stroke-width="${Math.max(0.6, k.t * 0.6)}" />
      </g>`;
};

export const animalCreaturesIcons: WimojiIconDef[] = [
  // 1. Rat (U+1F400)
  {
    id: 'rat',
    char: '🐀',
    name: 'Rat',
    unicodeHex: 'U+1F400',
    category: 'objects-places',
    tags: ['rat', 'mouse', 'rodent', 'animal', 'chinese zodiac', 'tail', 'grey', '🐀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#F472B6', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${rodent(opts, c, { body: c.primary, ear: 3, tail: 'M25 21.5 C29.5 21.5 30.5 16 28.5 12.5 C27.6 11 25.8 11.4 26.2 13', tailW: 1.5 })}`;
    },
  },

  // 2. Mouse (U+1F401)
  {
    id: 'mouse-animal',
    char: '🐁',
    name: 'Mouse',
    unicodeHex: 'U+1F401',
    category: 'objects-places',
    tags: ['mouse', 'white mouse', 'rodent', 'animal', 'pet', 'small', '🐁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F1F5F9', fillSecondary: '#FDA4AF', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${rodent(opts, c, { body: c.primary, ear: 3.8, tail: 'M25 22 C28.5 23 30.5 20 29 16.5 C28.2 14.5 26 14.5 26.4 16.5', tailW: 1.2 })}`;
    },
  },

  // 3. Ox (U+1F402)
  {
    id: 'ox',
    char: '🐂',
    name: 'Ox',
    unicodeHex: 'U+1F402',
    category: 'objects-places',
    tags: ['ox', 'bull', 'cattle', 'animal', 'taurus', 'horns', 'farm', 'zodiac', '🐂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#9A3412', fillSecondary: '#FDE047', stroke: '#7C2D12' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${bovine(opts, c, { body: c.primary, dark: '#431407', hoof: '#431407', muzzle: '#FDBA74', horn: opts.style === 'duotone' ? c.secondary : '#FDE68A', hornPath: 'M8.2 10.2 C5.8 9.6 4.4 7.4 5 4.6', hornW: 1.9, hump: true })}`;
    },
  },

  // 4. Water Buffalo (U+1F403)
  {
    id: 'water-buffalo',
    char: '🐃',
    name: 'Water Buffalo',
    unicodeHex: 'U+1F403',
    category: 'objects-places',
    tags: ['water buffalo', 'buffalo', 'ox', 'animal', 'horns', 'bovine', 'asia', '🐃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${bovine(opts, c, { body: c.primary, dark: '#0F172A', hoof: '#0F172A', muzzle: '#94A3B8', horn: opts.style === 'duotone' ? c.secondary : '#CBD5E1', hornPath: 'M9.5 10 C10.8 6.2 14.5 5 17.5 7', hornW: 2.3 })}`;
    },
  },

  // 5. Cow (U+1F404)
  {
    id: 'cow',
    char: '🐄',
    name: 'Cow',
    unicodeHex: 'U+1F404',
    category: 'objects-places',
    tags: ['cow', 'dairy', 'milk', 'farm', 'animal', 'bovine', 'pasture', 'spots', '🐄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#0F172A', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${bovine(opts, c, { body: c.primary, dark: '#1E293B', hoof: '#64748B', muzzle: '#FDA4AF', horn: '#FDE68A', hornPath: 'M8.4 10 C8 8.4 6.8 7.9 6 8.5', hornW: 1.6, patches: true, udder: true })}`;
    },
  },

  // 6. Tiger (U+1F405)
  {
    id: 'tiger',
    char: '🐅',
    name: 'Tiger',
    unicodeHex: 'U+1F405',
    category: 'objects-places',
    tags: ['tiger', 'wild', 'cat', 'stripes', 'predator', 'jungle', 'feline', 'animal', '🐅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#0F172A', stroke: '#9A3412' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${bigCat(opts, c, { body: c.primary, mark: '#1E293B', markType: 'stripes', belly: '#FFF7ED' })}`;
    },
  },

  // 7. Leopard (U+1F406)
  {
    id: 'leopard',
    char: '🐆',
    name: 'Leopard',
    unicodeHex: 'U+1F406',
    category: 'objects-places',
    tags: ['leopard', 'cheetah', 'jaguar', 'spots', 'cat', 'wild', 'safari', 'animal', '🐆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#78350F', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${bigCat(opts, c, { body: c.primary, mark: '#78350F', markType: 'spots', belly: '#FEF3C7' })}`;
    },
  },

  // 8. Rabbit (U+1F407)
  {
    id: 'rabbit-animal',
    char: '🐇',
    name: 'Rabbit',
    unicodeHex: 'U+1F407',
    category: 'objects-places',
    tags: ['rabbit', 'bunny', 'hare', 'animal', 'cute', 'easter', 'ears', 'white', '🐇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#FDA4AF', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Cotton tail -->
        <circle cx="25.2" cy="21.5" r="2.6" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body -->
        <ellipse cx="16.5" cy="21" rx="8.3" ry="5.8" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Haunch -->
        <path d="M14 26 C13 21 18 18.5 22 21.5" fill="none" ${k.st} opacity="0.6" />
        <ellipse cx="19.5" cy="25.8" rx="3.6" ry="1.2" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Far ear, near ear -->
        <ellipse cx="12.6" cy="8" rx="1.7" ry="5.2" transform="rotate(14 12.6 8)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="9.4" cy="7.6" rx="1.8" ry="5.4" transform="rotate(-6 9.4 7.6)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="9.4" cy="7.8" rx="0.8" ry="3.8" transform="rotate(-6 9.4 7.8)" fill="${k.alt('#FDA4AF')}" />
        <!-- Head -->
        <circle cx="8.6" cy="16" r="4.2" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="6.9" cy="15.1" r="0.9" fill="${k.eye}" />
        <circle cx="4.6" cy="17.1" r="0.9" fill="${k.alt('#FB7185')}" />
        <path d="M4.8 18 L2.4 18.6 M5 16.8 L2.6 16.2" fill="none" ${k.st} stroke-width="0.6" />
        <!-- Front paw -->
        <ellipse cx="9.2" cy="26.2" rx="2.8" ry="1.2" fill="${k.fill(c.primary)}" ${k.st} />
      </g>`;
    },
  },

  // 9. Cat (U+1F408)
  {
    id: 'cat-animal',
    char: '🐈',
    name: 'Cat',
    unicodeHex: 'U+1F408',
    category: 'objects-places',
    tags: ['cat', 'feline', 'pet', 'kitten', 'meow', 'animal', 'domestic', '🐈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FFFFFF', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Curled tail -->
        ${k.tube('M23.5 25.5 C29 26 30.5 19.5 27.2 15.5', 2.6, c.primary)}
        <!-- Seated body -->
        <path d="M11 15.2 C7.5 18.5 7.8 25 12 27 H22 C25.8 26.5 26 21 23.2 17.5 C21 14.8 15 13 11 15.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <g fill="none" stroke="${k.alt('#B45309')}" stroke-width="1.2">
          <path d="M19 15.8 L21 18.5 M22.2 17.2 L23.5 19.6 M23.4 21 L25 22.5" />
        </g>
        <path d="M13 27 C12.5 24 15 22.5 17 23.5" fill="none" ${k.st} opacity="0.55" />
        <!-- Ears -->
        <path d="M6.4 8.8 L6.6 3.8 L10 6.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M10.2 6.4 L13.6 3.8 L14 8.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M7.4 7.2 L7.5 5.4 L8.8 6.5 Z M11.5 6.3 L12.8 5.4 L12.9 7.2 Z" fill="${k.alt('#FDA4AF')}" stroke="none" />
        <!-- Head -->
        <ellipse cx="10.2" cy="11.2" rx="4.6" ry="4.1" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="8" cy="10.6" r="0.85" fill="${k.eye}" />
        <circle cx="12.4" cy="10.6" r="0.85" fill="${k.eye}" />
        <path d="M9.3 12.3 H11.1 L10.2 13.3 Z" fill="${k.alt('#FB7185')}" stroke="none" />
        <path d="M6.8 12.6 L3.8 12 M6.8 13.4 L3.8 14 M13.6 12.6 L16.6 12 M13.6 13.4 L16.6 14" fill="none" ${k.st} stroke-width="0.6" />
      </g>`;
    },
  },

  // 10. Dragon (U+1F409)
  {
    id: 'dragon',
    char: '🐉',
    name: 'Dragon',
    unicodeHex: 'U+1F409',
    category: 'objects-places',
    tags: ['dragon', 'mythical', 'creature', 'chinese', 'zodiac', 'reptile', 'serpent', 'green', '🐉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#EF4444', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const gold = k.o ? c.stroke : k.d ? c.secondary : '#FBBF24';
      const red = k.o ? c.stroke : k.d ? c.secondary : '#EF4444';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs with claws -->
        <path d="M14.5 22.5 L13 27 M21 23.8 L22 27.8" fill="none" stroke="${c.stroke}" stroke-width="2" />
        <path d="M11.8 27.2 H14.4 M21 28 H23.6" fill="none" stroke="${gold}" stroke-width="1.2" />
        <!-- Serpentine body -->
        ${k.tube('M11 10.5 C17 8.5 20.5 12 16 15 C11 18 7.5 19.5 11.5 22.5 C15 25 22 25.5 24.5 21 C27 17 24.5 13 28.5 8.5', 3.4, c.primary)}
        <!-- Dorsal spines -->
        <path d="M16 8.6 L16.8 6.6 L18.4 8.4 M22.5 12.6 L24.6 12.4 L23.8 14.4" fill="none" stroke="${red}" stroke-width="1.2" />
        <!-- Tail tuft -->
        <path d="M28.5 8.5 L30.5 5.5 L29 9.8 L31 9" fill="${red}" stroke="${c.stroke}" stroke-width="${k.t * 0.7}" />
        <!-- Whiskers and horn -->
        <path d="M3.8 9.6 C1.6 10 1.2 12.6 2.6 14 M5 10.8 C3.6 12.6 4 14.4 5.4 15" fill="none" stroke="${gold}" stroke-width="0.9" />
        <path d="M9 6.4 L10.6 3 L11.6 7" fill="${gold}" stroke="${c.stroke}" stroke-width="${k.t * 0.7}" />
        <!-- Head -->
        <path d="M11.8 8.2 C10 5.8 5.8 5.6 4.2 8 L3 10.4 C3.2 11.7 7 12.7 12 11.8 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M3.4 10.6 C6 11.5 9 11.5 11.4 10.8" fill="none" ${k.st} stroke-width="${k.t * 0.7}" />
        <circle cx="4.4" cy="9" r="0.5" fill="${k.eye}" />
        <circle cx="8" cy="8.2" r="1" fill="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#FEF08A'}" />
        <circle cx="8.2" cy="8.2" r="0.45" fill="${k.o ? c.stroke : '#0F172A'}" />
      </g>`;
    },
  },

  // 11. Crocodile (U+1F40A)
  {
    id: 'crocodile',
    char: '🐊',
    name: 'Crocodile',
    unicodeHex: 'U+1F40A',
    category: 'objects-places',
    tags: ['crocodile', 'alligator', 'reptile', 'swamp', 'teeth', 'green', 'animal', '🐊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#15803D', fillSecondary: '#86EFAC', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Legs -->
        <path d="M10.5 19 L8.5 24.5 L12.8 24.5 L13.5 19.5 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M21 19.5 L20 24.5 L24.4 24.5 L24 19 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body, long snout and tapering tail -->
        <path d="M1.8 16.2 L8 13.6 C8.8 11.6 11.4 11.5 12.2 13.2 L20 13 C25 13.4 28 15.4 30.5 18 C27 18.4 24.4 19.8 22 20.6 L11.5 20.6 C8 20.6 6 18.8 1.8 17.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Belly -->
        <path d="M6 19 C10 21 20 21 24 19.6" fill="none" stroke="${k.alt(c.secondary)}" stroke-width="1.2" />
        <!-- Mouth line with teeth -->
        <path d="M2.2 16.9 L8.4 17.1" fill="none" ${k.st} stroke-width="${k.t * 0.8}" />
        <path d="M3.4 16.9 L4.1 18.2 L4.8 17 M5.8 17 L6.5 18.2 L7.2 17.1" fill="${k.alt('#FFFFFF')}" ${k.st} stroke-width="0.5" />
        <!-- Back scutes -->
        <path d="M13.5 13 L14.5 11.6 L15.6 13 M16.8 13 L17.8 11.6 L18.9 13 M20.1 13.1 L21.2 11.8 L22.3 13.4" fill="${k.alt('#166534')}" ${k.st} stroke-width="0.6" />
        <!-- Eye -->
        <circle cx="10" cy="12.6" r="1" fill="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#FEF08A'}" />
        <circle cx="10" cy="12.6" r="0.45" fill="${k.o ? c.stroke : '#0F172A'}" />
        <circle cx="3.2" cy="15.3" r="0.4" fill="${k.o ? c.stroke : k.eye}" />
      </g>`;
    },
  },

  // 12. Whale (U+1F40B)
  {
    id: 'whale',
    char: '🐋',
    name: 'Whale',
    unicodeHex: 'U+1F40B',
    category: 'objects-places',
    tags: ['whale', 'ocean', 'mammal', 'sea', 'huge', 'blue whale', 'animal', 'water', '🐋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#E0F2FE', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="translate(0 -1.4)">
        <!-- Tail flukes -->
        <path d="M23.5 18.5 C25 16 25.8 14 25.2 11.8 C24 12.6 22.6 12.2 22 10.4 C23.6 9.4 25.4 9.2 26.6 10 C27.6 9.2 29.2 9.2 30.6 10.2 C29.6 11.8 28.2 12.4 27 12 C26.8 14.6 26.2 16.8 25 19.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body -->
        <path d="M2.8 18.2 C2.8 13 8.5 10.5 14.5 11.3 C19.5 12 23 14.8 25 19 C22.5 24 16.5 26 11 25 C6 24.1 2.8 21.8 2.8 18.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Pale throat grooves -->
        <path d="M4.2 21.2 C8 24.2 16 24.6 22.4 21.2" fill="none" stroke="${k.alt(c.secondary)}" stroke-width="2.2" />
        <path d="M7 21.6 L10 22.9 M11 22.4 L14 23.2 M15 22.7 L18 22.6" fill="none" ${k.st} stroke-width="0.6" />
        <!-- Flipper and eye -->
        <path d="M11 19 C13 20.5 15.5 21 17.5 20.5 C15.5 19.4 13.4 18.6 11 19 Z" fill="${k.alt('#0369A1')}" ${k.st} stroke-width="0.7" />
        <circle cx="6.8" cy="16.6" r="0.9" fill="${k.eye}" />
      </g>`;
    },
  },

  // 13. Snail (U+1F40C)
  {
    id: 'snail',
    char: '🐌',
    name: 'Snail',
    unicodeHex: 'U+1F40C',
    category: 'objects-places',
    tags: ['snail', 'slow', 'shell', 'spiral', 'slug', 'garden', 'mollusk', 'animal', '🐌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#FDE68A', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const skin = k.d ? c.secondary : '#FDE68A';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Eye stalks -->
        <path d="M26.6 14 L25.2 8.8 M28.6 14.4 L30 9.6" fill="none" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="25.1" cy="8.4" r="1.1" fill="${k.alt(skin)}" ${k.st} stroke-width="0.7" />
        <circle cx="30.1" cy="9.2" r="1.1" fill="${k.alt(skin)}" ${k.st} stroke-width="0.7" />
        <!-- Soft body -->
        ${k.tube('M8 24.2 H25.5 C28.4 24.2 29.4 21.6 28.4 19 C27.8 17.4 27.6 16 27.6 14.6', 4, skin)}
        <circle cx="28.2" cy="19" r="0" />
        <!-- Shell -->
        <circle cx="13.5" cy="16.5" r="7.4" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M13.5 16.5 C13.5 15 15.6 14.8 15.9 16.4 C16.2 18.6 12.8 19.6 11.2 17.8 C9.2 15.5 11 12 14.2 11.6 C17.6 11.2 19.8 14 19.5 17" fill="none" stroke="${k.o ? c.stroke : k.alt('#FEF3C7')}" stroke-width="1.3" />
        <circle cx="26.2" cy="18.2" r="0.7" fill="${k.eye}" />
      </g>`;
    },
  },

  // 14. Snake (U+1F40D)
  {
    id: 'snake',
    char: '🐍',
    name: 'Snake',
    unicodeHex: 'U+1F40D',
    category: 'objects-places',
    tags: ['snake', 'serpent', 'reptile', 'slither', 'cobra', 'viper', 'green', 'animal', '🐍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#EF4444', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const body = 'M4.5 26 C4.5 21 14 23.5 18 21 C24 17.2 9.5 16 11.5 12 C13.5 8.2 20.5 10.5 23 8.2';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.tube(body, 3.4, c.primary)}
        ${k.o ? '' : `<path d="${body}" fill="none" stroke="${k.alt('#BBF7D0')}" stroke-width="1" stroke-dasharray="1.2 2.4" />`}
        <!-- Forked tongue -->
        <path d="M27.8 5.4 L30.2 4.2 M29.2 4.7 L30.4 6.2 M29.2 4.7 L30.6 3.2" fill="none" stroke="${k.o ? c.stroke : k.d ? c.secondary : '#EF4444'}" stroke-width="0.9" />
        <!-- Head -->
        <ellipse cx="25.5" cy="6.8" rx="3.6" ry="2.6" transform="rotate(-30 25.5 6.8)" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="25.4" cy="5.8" r="0.8" fill="${k.eye}" />
      </g>`;
    },
  },

  // 15. Horse (U+1F40E)
  {
    id: 'horse',
    char: '🐎',
    name: 'Horse',
    unicodeHex: 'U+1F40E',
    category: 'objects-places',
    tags: ['horse', 'stallion', 'equestrian', 'racing', 'gallop', 'animal', 'farm', 'wild', '🐎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', fillSecondary: '#451A03', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const dark = k.d ? c.secondary : '#451A03';
      const legs = [11.5, 14.6, 21.8, 24.8].map((x) =>
        `<rect x="${x}" y="18.5" width="2.2" height="10" rx="1" fill="${k.fill(c.primary)}" ${k.st} />` +
        (k.o ? '' : `<rect x="${x}" y="26.4" width="2.2" height="2.1" rx="0.8" fill="${dark}" stroke="none" />`)
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail -->
        <path d="M27 13 C30.8 14.5 30.8 20 28 25" fill="none" stroke="${k.o ? c.stroke : dark}" stroke-width="2.6" />
        ${legs}
        <!-- Head, neck and body -->
        <path d="M10 5 L5 10 C3.6 11.2 3.6 12.8 5 13.6 C6.2 14.2 7.4 13.8 8.6 12.4 C9.5 14 10 15.5 10.3 17.5 C10.8 20 12 21 14 21 H24 C26.5 21 28 18.5 27.5 15.5 C27 12.5 25 11.5 22 11.5 H16 C14.5 11.3 12.5 8 10 5 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Mane -->
        <path d="M10.2 5.2 C11.8 8 13.8 10.4 16 11.4" fill="none" stroke="${k.o ? c.stroke : dark}" stroke-width="1.9" />
        <!-- Ear, eye, nostril -->
        <path d="M9.4 5.6 L10 2.8 L11.6 5.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="6.8" cy="10.6" r="0.8" fill="${k.eye}" />
        <circle cx="4.2" cy="12.6" r="0.5" fill="${k.o ? c.stroke : dark}" />
      </g>`;
    },
  },

  // 16. Ram (U+1F40F)
  {
    id: 'ram',
    char: '🐏',
    name: 'Ram',
    unicodeHex: 'U+1F40F',
    category: 'objects-places',
    tags: ['ram', 'sheep', 'horns', 'aries', 'zodiac', 'male sheep', 'animal', 'farm', '🐏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#F59E0B', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${sheep(opts, c, true)}`;
    },
  },

  // 17. Goat (U+1F410)
  {
    id: 'goat',
    char: '🐐',
    name: 'Goat',
    unicodeHex: 'U+1F410',
    category: 'objects-places',
    tags: ['goat', 'capricorn', 'horns', 'beard', 'farm', 'animal', 'mountain', '🐐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F1F5F9', fillSecondary: '#94A3B8', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const legs = [10.2, 13.2, 21.8, 24.6].map((x) =>
        `<rect x="${x}" y="17" width="2" height="10.5" rx="0.9" fill="${k.fill(c.primary)}" ${k.st} />` +
        (k.o ? '' : `<rect x="${x}" y="25.5" width="2" height="2" rx="0.7" fill="${k.alt('#475569')}" stroke="none" />`)
      ).join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Short upright tail -->
        <path d="M26.8 11.5 L28.6 8.6 L28.2 12.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        ${legs}
        <!-- Body -->
        <path d="M9 11.5 C9 9.6 12 9.3 15.5 9.3 H22 C25.4 9.3 27 11 27 13.8 C27 17.2 25 18.8 22 18.8 H13 C10.4 18.8 9 16.4 9 11.5 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Swept-back horn -->
        <path d="M7.6 8.6 C8.6 5 12 3.2 14.6 4.4" fill="none" stroke="${k.o ? c.stroke : k.d ? c.secondary : '#94A3B8'}" stroke-width="1.8" />
        <!-- Head and neck -->
        <path d="M10.2 8.8 L7.4 8 C5.8 7.8 4.8 8.8 4.4 10.2 L3.2 14.2 C3 15.4 3.8 16.2 4.9 16 L7.2 15.3 L10.8 14 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Beard -->
        <path d="M4.8 16 L5.4 19.8 L7 16 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Ear, eye, nose -->
        <ellipse cx="9.2" cy="9.8" rx="2.3" ry="1" transform="rotate(20 9.2 9.8)" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="6.2" cy="11.4" r="0.8" fill="${k.eye}" />
        <circle cx="3.9" cy="14.2" r="0.5" fill="${k.o ? c.stroke : k.eye}" />
      </g>`;
    },
  },

  // 18. Ewe / Sheep (U+1F411)
  {
    id: 'ewe',
    char: '🐑',
    name: 'Ewe',
    unicodeHex: 'U+1F411',
    category: 'objects-places',
    tags: ['sheep', 'ewe', 'wool', 'fluffy', 'farm', 'animal', 'lamb', 'fleece', '🐑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#94A3B8', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}${sheep(opts, c, false)}`;
    },
  },

  // 19. Monkey (U+1F412)
  {
    id: 'monkey',
    char: '🐒',
    name: 'Monkey',
    unicodeHex: 'U+1F412',
    category: 'objects-places',
    tags: ['monkey', 'primate', 'animal', 'zoo', 'jungle', 'climb', 'tail', '🐒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const skin = '#FDE68A';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Curling tail -->
        ${k.tube('M22 25 C28.5 26.5 30.5 20 27.5 17 C26.4 15.9 24.6 16.8 25.6 18.4', 2, c.primary)}
        <!-- Feet -->
        <ellipse cx="11.6" cy="27" rx="2.8" ry="1.5" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="20.4" cy="27" rx="2.8" ry="1.5" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Body and belly -->
        <ellipse cx="16" cy="21" rx="6.4" ry="6.2" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="16" cy="22" rx="3.6" ry="4.2" fill="${k.alt(skin)}" stroke="none" />
        <!-- Arms -->
        <ellipse cx="9.4" cy="20.6" rx="2" ry="4.6" transform="rotate(14 9.4 20.6)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="22.6" cy="20.6" rx="2" ry="4.6" transform="rotate(-14 22.6 20.6)" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Ears -->
        <circle cx="9.8" cy="10.6" r="2.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="22.2" cy="10.6" r="2.4" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="9.8" cy="10.6" r="1.2" fill="${k.alt(skin)}" stroke="none" />
        <circle cx="22.2" cy="10.6" r="1.2" fill="${k.alt(skin)}" stroke="none" />
        <!-- Head and face -->
        <circle cx="16" cy="10.2" r="5.8" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M11.8 9.2 C11.8 7.6 14 7.8 16 9.4 C18 7.8 20.2 7.6 20.2 9.2 C20.2 12 18.6 13.2 16 13.2 C13.4 13.2 11.8 12 11.8 9.2 Z" fill="${k.alt(skin)}" stroke="none" />
        <ellipse cx="16" cy="13" rx="2.6" ry="1.9" fill="${k.alt(skin)}" ${k.st} stroke-width="0.6" />
        <circle cx="13.9" cy="10" r="0.8" fill="${k.eye}" />
        <circle cx="18.1" cy="10" r="0.8" fill="${k.eye}" />
        <circle cx="15.2" cy="12.6" r="0.35" fill="${k.o ? c.stroke : k.eye}" />
        <circle cx="16.8" cy="12.6" r="0.35" fill="${k.o ? c.stroke : k.eye}" />
        <path d="M14.8 14.2 C15.6 14.8 16.4 14.8 17.2 14.2" fill="none" ${k.st} stroke-width="0.6" />
      </g>`;
    },
  },

  // 20. Rooster (U+1F413)
  {
    id: 'rooster',
    char: '🐓',
    name: 'Rooster',
    unicodeHex: 'U+1F413',
    category: 'objects-places',
    tags: ['rooster', 'cockerel', 'chicken', 'bird', 'farm', 'morning', 'zodiac', 'animal', '🐓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const k = kit(opts, c);
      const red = k.d ? c.secondary : '#EF4444';
      const yellow = k.d ? c.secondary : '#FACC15';
      const plume = (path: string, col: string) => k.tube(path, 2.4, k.d ? c.secondary : col);
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tail plumes -->
        ${plume('M21 16 C24.4 14 25.2 9.4 23.8 5.4', '#16A34A')}
        ${plume('M22 18 C26 17 27.8 12.8 27.2 8.8', '#0EA5E9')}
        ${plume('M22.4 20 C26 20.5 28.6 17.4 28.6 14', '#EA580C')}
        <!-- Legs -->
        <path d="M14 23.5 L13.4 28 M13.4 28 L11.4 28.6 M13.4 28 L15.2 28.8 M18 23.8 L18.6 28 M18.6 28 L16.8 28.8 M18.6 28 L20.4 28.4" fill="none" stroke="${k.o ? c.stroke : yellow === c.secondary ? yellow : '#CA8A04'}" stroke-width="1.3" />
        <!-- Body and neck -->
        <ellipse cx="16.4" cy="18.4" rx="8" ry="5.8" transform="rotate(-12 16.4 18.4)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="11.6" cy="13.6" rx="3" ry="4.8" transform="rotate(-18 11.6 13.6)" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="11.2" cy="14.8" rx="2.4" ry="3.6" transform="rotate(-18 11.2 14.8)" fill="${k.fill(c.primary)}" stroke="none" />
        <!-- Wing -->
        <path d="M13 17.2 C16 15.6 20.6 16.6 21 19.4 C19 22.4 14.6 22.2 13 17.2 Z" fill="${k.alt('#D97706')}" ${k.st} stroke-width="0.7" />
        <!-- Comb, wattle, beak -->
        <g fill="${k.alt(red)}" ${k.st} stroke-width="0.7">
          <circle cx="7.4" cy="6" r="1.4" /><circle cx="9.6" cy="5.2" r="1.5" /><circle cx="11.6" cy="6.2" r="1.3" />
          <ellipse cx="6.9" cy="12.6" rx="1.1" ry="1.7" />
        </g>
        <!-- Head -->
        <circle cx="9.4" cy="9.4" r="3.3" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M6.4 8.6 L3.2 10 L6.4 11.2 Z" fill="${k.alt(yellow)}" ${k.st} stroke-width="0.7" />
        <circle cx="8.4" cy="8.8" r="0.8" fill="${k.eye}" />
      </g>`;
    },
  },
];