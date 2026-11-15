import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const planetToolsHouseholdIcons: WimojiIconDef[] = [
  // 1. Ringed Planet (U+1FA90)
  {
    id: 'ringed-planet',
    char: '🪐',
    name: 'Ringed Planet',
    unicodeHex: 'U+1FA90',
    category: 'weather',
    tags: ['ringed planet', 'saturn', 'space', 'planet', 'astronomy', '🪐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FDE68A', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="8.2" />
          <path d="M9.6 10.6 C4.4 10.6 2.8 13.8 6.4 17.6 C10.6 22 19 25.4 25.2 24 C29.4 23 28.6 18.8 23.8 14.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="16" cy="16" r="8.2" />
          <path d="M5.2 12.6 C2.6 15.2 5.4 20 12.2 22.8 C19.4 25.8 26.8 25.4 28.2 22.4" fill="none" stroke="#FFFFFF" stroke-width="3.2" />
          <path d="M5.2 12.6 C2.6 15.2 5.4 20 12.2 22.8 C19.4 25.8 26.8 25.4 28.2 22.4" fill="none" stroke="${c.primary}" stroke-width="1.8" />
        </g>`;
      }

      const planet = c.primary;
      const band = isDuotone ? c.secondary : '#FBBF24';
      const ring = isDuotone ? c.secondary : '#FDE68A';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back ring half -->
        <path d="M7.6 12.4 C4.2 11.4 3.4 12.8 5.2 15.2" fill="none" stroke="${c.stroke}" stroke-width="3.4" />
        <path d="M7.6 12.4 C4.2 11.4 3.4 12.8 5.2 15.2" fill="none" stroke="${ring}" stroke-width="2" />
        <path d="M26.8 18.4 C29 20.6 28.4 22.6 25.4 23" fill="none" stroke="${c.stroke}" stroke-width="3.4" />
        <path d="M26.8 18.4 C29 20.6 28.4 22.6 25.4 23" fill="none" stroke="${ring}" stroke-width="2" />
        <!-- Planet globe -->
        <circle cx="16" cy="16" r="8.2" fill="${planet}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M9.6 11.8 C13.4 10.6 18.6 11.2 22.8 13" fill="none" stroke="${band}" stroke-width="1.8" />
        <path d="M8.8 15.8 C13 14.6 19.2 15.4 23.6 17.4" fill="none" stroke="#D97706" stroke-width="1.4" opacity="0.7" />
        <!-- Front crossing planetary ring -->
        <path d="M5.2 15.2 C7.8 19.4 17.8 24.4 25.4 23" fill="none" stroke="${c.stroke}" stroke-width="3.6" />
        <path d="M5.2 15.2 C7.8 19.4 17.8 24.4 25.4 23" fill="none" stroke="${ring}" stroke-width="2.1" />
      </g>`;
    },
  },

  // 2. Razor (U+1FA92)
  {
    id: 'razor',
    char: '🪒',
    name: 'Razor',
    unicodeHex: 'U+1FA92',
    category: 'objects-places',
    tags: ['razor', 'shave', 'blade', 'grooming', 'barber', '🪒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0EA5E9', fillSecondary: '#CBD5E1', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="8" y="4.5" width="16" height="5.4" rx="1.4" />
          <path d="M10.4 7.2 H21.6" />
          <path d="M14.2 9.9 V25.8 C14.2 27 15 27.8 16 27.8 C17 27.8 17.8 27 17.8 25.8 V9.9" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <rect x="8" y="4.5" width="16" height="5.6" rx="1.4" />
          <path d="M14 9.9 H18 V25.8 C18 27 17.1 27.8 16 27.8 C14.9 27.8 14 27 14 25.8 Z" />
          <path d="M10.4 7.2 H21.6" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const handle = c.primary;
      const metal = isDuotone ? c.secondary : '#CBD5E1';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Neck & ergonomic handle -->
        <path d="M14.2 9.8 H17.8 V25.6 C17.8 27 17 27.8 16 27.8 C15 27.8 14.2 27 14.2 25.6 Z" fill="${handle}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M15 17 H17 M15 20 H17 M15 23 H17" stroke="#0369A1" stroke-width="1" />
        <!-- Swivel razor head & twin blades -->
        <rect x="8" y="4.5" width="16" height="5.6" rx="1.4" fill="${metal}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M10 6.5 H22 M10 8.2 H22" stroke="#475569" stroke-width="1" />
      </g>`;
    },
  },

  // 3. Diya Lamp (U+1FA94)
  {
    id: 'diya-lamp',
    char: '🪔',
    name: 'Diya Lamp',
    unicodeHex: 'U+1FA94',
    category: 'objects-places',
    tags: ['diya lamp', 'diwali', 'oil lamp', 'flame', 'festival', '🪔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#FDE047', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M23.8 14.6 C25.6 11.4 25.2 8 23.2 5.4 C21 8.2 21 11.6 22.8 14.6" />
          <path d="M5.4 17.6 C7.4 23.6 12 26.2 16 26.2 C20.4 26.2 24.4 22.8 26.6 17.2 C21.2 18.6 11 18.6 5.4 17.6 Z" />
          <path d="M12.4 26 H19.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M23.4 5 C25.8 8 25.8 12.2 23.2 15.2 C20.8 12.2 20.8 8 23.4 5 Z" />
          <path d="M5.2 17.2 C10.8 18.6 21.2 18.6 26.8 16.8 C24.6 22.8 20.4 26.2 16 26.2 C11.4 26.2 7.2 23 5.2 17.2 Z" />
          <rect x="11.6" y="25.6" width="8.8" height="2" rx="1" />
        </g>`;
      }

      const clay = c.primary;
      const flame = isDuotone ? c.secondary : '#F97316';
      const core = isDuotone ? c.secondary : '#FEF08A';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Flame -->
        <path d="M23.4 4.8 C26.2 8 26 12.4 23.4 15.6 C20.6 12.4 20.6 8 23.4 4.8 Z" fill="${flame}" stroke="#C2410C" stroke-width="0.9" />
        <path d="M23.4 8.6 C24.6 10.6 24.6 13 23.4 14.8 C22.2 13 22.2 10.6 23.4 8.6 Z" fill="${core}" />
        <!-- Clay bowl & spout -->
        <ellipse cx="16" cy="17.4" rx="10.4" ry="2.4" fill="#FDE68A" stroke="${c.stroke}" stroke-width="1" />
        <path d="M5.4 17.6 C7.4 23.4 11.8 26 16 26 C20.4 26 24.4 22.6 26.8 17.2 C21.8 19.6 10.4 19.6 5.4 17.6 Z" fill="${clay}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M11.6 26.2 H20.4" stroke="${c.stroke}" stroke-width="2" />
      </g>`;
    },
  },

  // 4. Banjo (U+1FA95)
  {
    id: 'banjo',
    char: '🪕',
    name: 'Banjo',
    unicodeHex: 'U+1FA95',
    category: 'objects-places',
    tags: ['banjo', 'music', 'instrument', 'strings', 'folk', 'country', '🪕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#B45309', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="11.6" cy="20.4" r="6.8" />
          <path d="M16.4 15.6 L25.6 6.4 L27.6 4.4" />
          <path d="M9.6 22.4 L12.4 19.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11.6" cy="20.4" r="7" />
          <path d="M16 16 L26 6" stroke="${c.primary}" stroke-width="2.6" />
          <circle cx="11.6" cy="20.4" r="2.2" fill="#FFFFFF" />
        </g>`;
      }

      const drum = c.primary;
      const wood = isDuotone ? c.secondary : '#B45309';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Neck & headstock -->
        <path d="M15.8 16.2 L26.4 5.6" stroke="${c.stroke}" stroke-width="3.2" />
        <path d="M15.8 16.2 L26.4 5.6" stroke="${wood}" stroke-width="1.8" />
        <!-- Circular wooden rim & drumhead -->
        <circle cx="11.6" cy="20.4" r="7" fill="${wood}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="11.6" cy="20.4" r="5.3" fill="${drum}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Strings & bridge -->
        <path d="M8.8 23.2 L12.6 19.4" stroke="${c.stroke}" stroke-width="1.6" />
        <path d="M10.4 21.6 L25.8 6.2" stroke="#64748B" stroke-width="0.8" />
      </g>`;
    },
  },

  // 5. Accordion (U+1FA97)
  {
    id: 'accordion',
    char: '🪗',
    name: 'Accordion',
    unicodeHex: 'U+1FA97',
    category: 'objects-places',
    tags: ['accordion', 'music', 'instrument', 'folk', 'squeezebox', '🪗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="7" width="6" height="18" rx="1.2" />
          <rect x="21.5" y="7" width="6" height="18" rx="1.2" />
          <path d="M10.5 8.5 H21.5 M10.5 23.5 H21.5" />
          <path d="M13.2 8.5 V23.5 M16 8.5 V23.5 M18.8 8.5 V23.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <rect x="4.5" y="7" width="6" height="18" rx="1.2" />
          <rect x="21.5" y="7" width="6" height="18" rx="1.2" />
          <rect x="11" y="8.6" width="10" height="14.8" />
          <path d="M13.6 8.6 V23.4 M16 8.6 V23.4 M18.4 8.6 V23.4" stroke="#FFFFFF" stroke-width="1.1" />
        </g>`;
      }

      const red = c.primary;
      const keys = isDuotone ? c.secondary : '#F8FAFC';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Pleated bellows -->
        <rect x="10.4" y="8.4" width="11.2" height="15.2" fill="#334155" stroke="${c.stroke}" stroke-width="1" />
        <path d="M12.6 8.4 V23.6 M15 8.4 V23.6 M17.4 8.4 V23.6 M19.8 8.4 V23.6" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Left & right lacquered casings -->
        <rect x="4.5" y="7" width="6.2" height="18" rx="1.4" fill="${red}" stroke="${c.stroke}" stroke-width="1.1" />
        <rect x="21.3" y="7" width="6.2" height="18" rx="1.4" fill="${red}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- White piano keys & bass buttons -->
        <rect x="21.8" y="9" width="2.6" height="14" rx="0.5" fill="${keys}" stroke="${c.stroke}" stroke-width="0.7" />
        <circle cx="7.4" cy="11.5" r="0.9" fill="${keys}" />
        <circle cx="7.4" cy="16" r="0.9" fill="${keys}" />
        <circle cx="7.4" cy="20.5" r="0.9" fill="${keys}" />
      </g>`;
    },
  },

  // 6. Long Drum (U+1FA98)
  {
    id: 'long-drum',
    char: '🪘',
    name: 'Long Drum',
    unicodeHex: 'U+1FA98',
    category: 'objects-places',
    tags: ['long drum', 'conga', 'djembe', 'percussion', 'music', '🪘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="7.2" rx="6.4" ry="2.4" />
          <path d="M9.6 7.2 L11.4 25.4 C11.6 26.6 13.5 27.4 16 27.4 C18.5 27.4 20.4 26.6 20.6 25.4 L22.4 7.2" />
          <path d="M10.8 11.4 L13.4 15.6 L16 11.6 L18.6 15.6 L21.2 11.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="7.2" rx="6.6" ry="2.5" />
          <path d="M9.6 7.4 L11.4 25.4 C11.6 26.6 13.5 27.4 16 27.4 C18.5 27.4 20.4 26.6 20.6 25.4 L22.4 7.4 Z" />
          <path d="M10.8 11.4 L13.4 15.6 L16 11.6 L18.6 15.6 L21.2 11.4" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const wood = c.primary;
      const head = isDuotone ? c.secondary : '#FEF3C7';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M9.6 7.4 L11.4 25.4 C11.6 26.6 13.5 27.4 16 27.4 C18.5 27.4 20.4 26.6 20.6 25.4 L22.4 7.4 Z" fill="${wood}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M10.6 11.2 L13.4 15.8 L16 11.4 L18.6 15.8 L21.4 11.2" fill="none" stroke="#F59E0B" stroke-width="1.2" />
        <ellipse cx="16" cy="7.2" rx="6.5" ry="2.4" fill="${head}" stroke="${c.stroke}" stroke-width="1.1" />
      </g>`;
    },
  },

  // 7. Coin (U+1FA99)
  {
    id: 'coin',
    char: '🪙',
    name: 'Coin',
    unicodeHex: 'U+1FA99',
    category: 'objects-places',
    tags: ['coin', 'gold coin', 'money', 'currency', 'treasure', '🪙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FDE047', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="15" cy="16" rx="9.2" ry="10.8" />
          <path d="M15 5.2 H17.4 C22.5 5.2 26.6 10 26.6 16 C26.6 22 22.5 26.8 17.4 26.8 H15" />
          <ellipse cx="15" cy="16" rx="5.8" ry="7.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="17" cy="16" rx="9.2" ry="10.8" />
          <ellipse cx="14.6" cy="16" rx="9.2" ry="10.8" stroke="#FFFFFF" stroke-width="1.2" />
          <ellipse cx="14.6" cy="16" rx="5.4" ry="6.8" fill="none" stroke="#FFFFFF" stroke-width="1.3" />
        </g>`;
      }

      const rim = c.primary;
      const face = isDuotone ? c.secondary : '#FDE047';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- 3D coin thickness rim -->
        <ellipse cx="17.2" cy="16" rx="9.2" ry="10.8" fill="#D97706" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Front gold face -->
        <ellipse cx="14.8" cy="16" rx="9.2" ry="10.8" fill="${face}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="14.8" cy="16" rx="6" ry="7.2" fill="${rim}" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M14.8 11.4 V20.6" stroke="#FEF3C7" stroke-width="1.8" />
      </g>`;
    },
  },

  // 8. Carpentry Saw (U+1FA9A)
  {
    id: 'carpentry-saw',
    char: '🪚',
    name: 'Carpentry Saw',
    unicodeHex: 'U+1FA9A',
    category: 'tools',
    tags: ['carpentry saw', 'saw', 'hand saw', 'tool', 'woodworking', '🪚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#B45309', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M21 5.2 L26.8 11 L24 13.8 L18.2 8 Z" />
          <path d="M18.2 8 L4.4 21.8 L7.4 23 L8 25.2 L10.2 24.4 L11.4 26.2 L24 13.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M21 5.2 L27.2 11.4 L11.4 26.4 L10.2 24.4 L8 25.2 L7.2 23 L4.4 21.8 Z" />
          <rect x="21" y="7.6" width="2.8" height="2.4" transform="rotate(45 22.4 8.8)" fill="#FFFFFF" />
        </g>`;
      }

      const steel = c.primary;
      const handle = isDuotone ? c.secondary : '#B45309';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Serrated steel saw blade -->
        <path d="M18.2 8.2 L4.4 21.8 L7 22.8 L7.8 25 L10 24.2 L11.2 26.4 L24 13.6 Z" fill="${steel}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Wooden handle with cutout grip -->
        <path d="M21 4.8 L27.2 11 L23.8 14.4 L17.6 8.2 Z" fill="${handle}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="22.4" cy="9.4" r="1.3" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 9. Screwdriver (U+1FA9B)
  {
    id: 'screwdriver',
    char: '🪛',
    name: 'Screwdriver',
    unicodeHex: 'U+1FA9B',
    category: 'tools',
    tags: ['screwdriver', 'tool', 'repair', 'hardware', 'driver', '🪛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#CBD5E1', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16.4 13.4 L24.6 5.2 C25.6 4.2 27.2 4.4 27.8 5.4 C28.4 6.4 27.8 7.8 26.8 8.8 L18.6 17 Z" />
          <path d="M16.4 15.6 L6.2 25.8 L4.6 27.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16.2 13.4 L24.6 5 C25.6 4 27.2 4.2 27.8 5.2 C28.4 6.2 27.8 7.8 26.8 8.8 L18.4 17.2 Z" />
          <path d="M16.4 15.6 L5.2 26.8" stroke="${c.primary}" stroke-width="2.2" />
        </g>`;
      }

      const grip = c.primary;
      const shaft = isDuotone ? c.secondary : '#CBD5E1';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Steel shaft & flat tip -->
        <path d="M16.4 15.6 L5.2 26.8" stroke="${c.stroke}" stroke-width="2.6" />
        <path d="M16.4 15.6 L5.2 26.8" stroke="${shaft}" stroke-width="1.3" />
        <!-- Fluted crimson handle -->
        <path d="M16.2 13.4 L24.6 5 C25.6 4 27.2 4.2 27.8 5.2 C28.4 6.2 27.8 7.8 26.8 8.8 L18.4 17.2 Z" fill="${grip}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M19.8 11.4 L24 7.2" stroke="#FCA5A5" stroke-width="1.1" />
      </g>`;
    },
  },

  // 10. Ladder (U+1FA9C)
  {
    id: 'ladder',
    char: '🪜',
    name: 'Ladder',
    unicodeHex: 'U+1FA9C',
    category: 'tools',
    tags: ['ladder', 'climb', 'steps', 'tool', 'wood', '🪜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M13.6 4 L8.2 28 M23.8 4 L18.4 28" />
          <path d="M12.6 8.8 H22.6 M11.4 14 H21.4 M10.2 19.2 H20.2 M9 24.4 H19" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="none" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13.6 4 L8.2 28 M23.8 4 L18.4 28" />
          <path d="M12.6 8.8 H22.6 M11.4 14 H21.4 M10.2 19.2 H20.2 M9 24.4 H19" stroke-width="2.2" />
        </g>`;
      }

      const rail = c.primary;
      const rung = isDuotone ? c.secondary : '#F59E0B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Horizontal wooden rungs -->
        <path d="M12.6 8.8 H22.6 M11.4 14 H21.4 M10.2 19.2 H20.2 M9 24.4 H19" stroke="${c.stroke}" stroke-width="2.8" />
        <path d="M12.6 8.8 H22.6 M11.4 14 H21.4 M10.2 19.2 H20.2 M9 24.4 H19" stroke="${rung}" stroke-width="1.4" />
        <!-- Slanted side rails -->
        <path d="M13.6 4 L8.2 28 M23.8 4 L18.4 28" stroke="${c.stroke}" stroke-width="3.2" />
        <path d="M13.6 4 L8.2 28 M23.8 4 L18.4 28" stroke="${rail}" stroke-width="1.8" />
      </g>`;
    },
  },

  // 11. Hook (U+1FA9D)
  {
    id: 'hook',
    char: '🪝',
    name: 'Hook',
    unicodeHex: 'U+1FA9D',
    category: 'tools',
    tags: ['hook', 'fishing hook', 'metal', 'catch', 'tool', '🪝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#CBD5E1', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="18" cy="6.2" r="2.2" />
          <path d="M18 8.4 V20.6 C18 24.4 14.8 27.2 11.2 27.2 C7.8 27.2 5.6 24.6 5.6 21 C5.6 18.4 7.2 16.4 9.2 15.2 L10.2 18.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="none" stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="6.2" r="2.2" stroke-width="2" />
          <path d="M18 8.4 V20.6 C18 24.4 14.8 27.2 11.2 27.2 C7.8 27.2 5.6 24.6 5.6 21 C5.6 18.2 7.4 16 9.4 15 L10.4 18.2" stroke-width="3" />
        </g>`;
      }

      const metal = c.primary;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="18" cy="6.2" r="2.2" stroke="${c.stroke}" stroke-width="2.4" />
        <circle cx="18" cy="6.2" r="2.2" stroke="${metal}" stroke-width="1.2" />
        <path d="M18 8.4 V20.6 C18 24.4 14.8 27.2 11.2 27.2 C7.8 27.2 5.6 24.6 5.6 21 C5.6 18.2 7.4 16 9.4 15 L10.4 18.2" stroke="${c.stroke}" stroke-width="3.6" />
        <path d="M18 8.4 V20.6 C18 24.4 14.8 27.2 11.2 27.2 C7.8 27.2 5.6 24.6 5.6 21 C5.6 18.2 7.4 16 9.4 15 L10.4 18.2" stroke="${metal}" stroke-width="2" />
      </g>`;
    },
  },

  // 12. Mirror (U+1FA9E)
  {
    id: 'mirror',
    char: '🪞',
    name: 'Mirror',
    unicodeHex: 'U+1FA9E',
    category: 'objects-places',
    tags: ['mirror', 'reflection', 'vanity', 'glass', 'frame', '🪞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E0F2FE', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="8.6" ry="11.6" />
          <ellipse cx="16" cy="16" rx="6.2" ry="9" />
          <path d="M13.2 12 L15.8 9.4 M12.6 16.4 L18.2 10.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="8.8" ry="11.8" />
          <ellipse cx="16" cy="16" rx="6" ry="8.8" fill="#FFFFFF" />
          <path d="M13 12.4 L16.2 9.2 M12.4 16.8 L18.4 10.8" stroke="${c.primary}" stroke-width="1.3" stroke-linecap="round" />
        </g>`;
      }

      const glass = c.primary;
      const frame = isDuotone ? c.secondary : '#F59E0B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="16" cy="16" rx="8.8" ry="11.8" fill="${frame}" stroke="${c.stroke}" stroke-width="1.2" />
        <ellipse cx="16" cy="16" rx="6.2" ry="9" fill="${glass}" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M12.6 12.8 L16.4 9 M12.2 17.6 L18.6 11.2" stroke="#FFFFFF" stroke-width="1.6" opacity="0.9" />
      </g>`;
    },
  },

  // 13. Window (U+1FA9F)
  {
    id: 'window',
    char: '🪟',
    name: 'Window',
    unicodeHex: 'U+1FA9F',
    category: 'objects-places',
    tags: ['window', 'glass', 'sky', 'house', 'pane', 'view', '🪟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#7DD3FC', fillSecondary: '#B45309', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="4.5" width="20" height="22" rx="1.4" />
          <path d="M16 4.5 V26.5 M6 15.5 H26 M4.5 26.5 H27.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <rect x="6" y="4.5" width="20" height="22" rx="1.4" />
          <path d="M16 4.5 V26.5 M6 15.5 H26" stroke="#FFFFFF" stroke-width="1.8" />
          <rect x="4.5" y="25.2" width="23" height="2.4" rx="1" />
        </g>`;
      }

      const sky = c.primary;
      const frame = isDuotone ? c.secondary : '#B45309';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Glass sky panes -->
        <rect x="6.8" y="5.4" width="18.4" height="20.4" fill="${sky}" />
        <!-- Fluffy cloud inside view -->
        <path d="M9.4 13.4 C9.4 12.2 10.6 11.4 11.8 11.8 C12.4 10.6 14.2 10.8 14.6 12 C15.4 12 16 12.6 15.8 13.4 Z" fill="#FFFFFF" opacity="0.85" />
        <!-- Wooden frame, muntin crossbars & sill -->
        <path d="M6 4.5 H26 V26 H6 Z M8.2 6.8 V14.6 H15 V6.8 Z M17 6.8 V14.6 H23.8 V6.8 Z M8.2 16.6 V24 H15 V16.6 Z M17 16.6 V24 H23.8 V16.6 Z" fill="${frame}" fill-rule="evenodd" stroke="${c.stroke}" stroke-width="1" />
        <rect x="4.5" y="25.2" width="23" height="2.6" rx="1" fill="#D97706" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },

  // 14. Plunger (U+1FAA0)
  {
    id: 'plunger',
    char: '🪠',
    name: 'Plunger',
    unicodeHex: 'U+1FAA0',
    category: 'tools',
    tags: ['plunger', 'plumber', 'bathroom', 'unclog', 'tool', '🪠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#D97706', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4.5 V18.5" />
          <path d="M10.4 23 C10.4 19.8 12.8 18.2 16 18.2 C19.2 18.2 21.6 19.8 21.6 23 L23.4 26.8 H8.6 Z" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 4.5 V18.5" stroke="${c.primary}" stroke-width="2.6" />
          <path d="M10.4 23 C10.4 19.8 12.8 18.2 16 18.2 C19.2 18.2 21.6 19.8 21.6 23 L23.4 26.8 H8.6 Z" />
        </g>`;
      }

      const cup = c.primary;
      const handle = isDuotone ? c.secondary : '#D97706';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 4.6 V18.6" stroke="#78350F" stroke-width="3.2" />
        <path d="M16 4.6 V18.6" stroke="${handle}" stroke-width="1.8" />
        <path d="M10.2 23 C10.2 19.6 12.6 18 16 18 C19.4 18 21.8 19.6 21.8 23 L23.4 26.8 H8.6 Z" fill="${cup}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M8.6 26.8 H23.4" stroke="${c.stroke}" stroke-width="1.8" />
      </g>`;
    },
  },

  // 15. Sewing Needle (U+1FAA1)
  {
    id: 'sewing-needle',
    char: '🪡',
    name: 'Sewing Needle',
    unicodeHex: 'U+1FAA1',
    category: 'objects-places',
    tags: ['sewing needle', 'needle', 'thread', 'stitch', 'tailor', '🪡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#EF4444', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M25.6 5.2 L5.4 25.4" />
          <ellipse cx="23" cy="7.8" rx="2.4" ry="1" transform="rotate(-45 23 7.8)" />
          <path d="M23 7.8 C20.4 4.2 14.4 5.2 15.8 9.6 C17.2 14 26.4 15 24.4 21.4 C23 25 18.2 26.6 14 25" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="none" stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M25.6 5.2 L5.4 25.4" stroke-width="2.6" />
          <path d="M23 7.8 C20.4 4.2 14.4 5.2 15.8 9.6 C17.2 14 26.4 15 24.4 21.4 C23 25 18.2 26.6 14 25" stroke-width="1.5" />
        </g>`;
      }

      const steel = c.primary;
      const thread = isDuotone ? c.secondary : '#EF4444';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Looping crimson thread -->
        <path d="M23 7.8 C20.4 4.2 14.4 5.2 15.8 9.6 C17.2 14 26.4 15 24.4 21.4 C23 25 18.2 26.6 14 25" fill="none" stroke="${thread}" stroke-width="1.6" />
        <!-- Sharp steel sewing needle -->
        <path d="M25.8 5 L5.2 25.6" stroke="${c.stroke}" stroke-width="2.8" />
        <path d="M25.8 5 L5.2 25.6" stroke="${steel}" stroke-width="1.5" />
        <ellipse cx="23.2" cy="7.6" rx="1.8" ry="0.6" transform="rotate(-45 23.2 7.6)" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="0.6" />
      </g>`;
    },
  },

  // 16. Knot (U+1FAA2)
  {
    id: 'knot',
    char: '🪢',
    name: 'Knot',
    unicodeHex: 'U+1FAA2',
    category: 'objects-places',
    tags: ['knot', 'rope', 'tie', 'cord', 'sailing', 'scout', '🪢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4.8 18.6 C9.6 18.6 11.4 11.4 16 11.4 C20.6 11.4 21.4 19.2 15.6 19.6 C10.4 20 11 10.6 16.6 10.6 C22 10.6 22.8 18.6 27.2 18.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="none" stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4.8 19 C9.6 19 11.4 11.4 16 11.4 C20.6 11.4 21.4 19.2 15.6 19.6 C10.4 20 11 10.6 16.6 10.6 C22 10.6 22.8 19 27.2 19" stroke-width="3.8" />
        </g>`;
      }

      const rope = c.primary;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Back loop -->
        <path d="M4.8 19 C9.4 19 11.4 11.2 16.2 11.2 C21.2 11.2 21.2 19.6 15.8 19.8" stroke="${c.stroke}" stroke-width="4.4" />
        <path d="M4.8 19 C9.4 19 11.4 11.2 16.2 11.2 C21.2 11.2 21.2 19.6 15.8 19.8" stroke="${rope}" stroke-width="2.6" />
        <!-- Crossing overhand rope loop -->
        <path d="M15.8 19.8 C10.8 19.8 11.2 10.6 16.6 10.6 C22 10.6 22.8 19 27.2 19" stroke="${c.stroke}" stroke-width="4.4" />
        <path d="M15.8 19.8 C10.8 19.8 11.2 10.6 16.6 10.6 C22 10.6 22.8 19 27.2 19" stroke="#F59E0B" stroke-width="2.6" />
      </g>`;
    },
  },

  // 17. Bucket (U+1FAA3)
  {
    id: 'bucket',
    char: '🪣',
    name: 'Bucket',
    unicodeHex: 'U+1FAA3',
    category: 'objects-places',
    tags: ['bucket', 'pail', 'water', 'cleaning', 'beach', '🪣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7.6 12.2 C7.6 5.6 24.4 5.6 24.4 12.2" />
          <ellipse cx="16" cy="12.2" rx="8.4" ry="2.6" />
          <path d="M7.6 12.2 L9.8 25.4 C10 26.6 12.6 27.4 16 27.4 C19.4 27.4 22 26.6 22.2 25.4 L24.4 12.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7.6 12.2 C7.6 5.6 24.4 5.6 24.4 12.2" fill="none" stroke="${c.primary}" stroke-width="2" />
          <path d="M7.6 12.2 L9.8 25.4 C10 26.6 12.6 27.4 16 27.4 C19.4 27.4 22 26.6 22.2 25.4 L24.4 12.2 Z" />
          <ellipse cx="16" cy="12.2" rx="8.4" ry="2.6" fill="#FFFFFF" stroke="${c.primary}" stroke-width="1.2" />
        </g>`;
      }

      const pail = c.primary;
      const metal = isDuotone ? c.secondary : '#94A3B8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Curved metal wire handle -->
        <path d="M7.6 12.2 C7.6 5.4 24.4 5.4 24.4 12.2" fill="none" stroke="${metal}" stroke-width="1.8" />
        <!-- Tapered bucket body -->
        <path d="M7.6 12.2 L9.8 25.4 C10 26.6 12.6 27.4 16 27.4 C19.4 27.4 22 26.6 22.2 25.4 L24.4 12.2 Z" fill="${pail}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Top rim & water interior -->
        <ellipse cx="16" cy="12.2" rx="8.4" ry="2.6" fill="#38BDF8" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="16" cy="12.6" rx="6.6" ry="1.6" fill="#0369A1" />
      </g>`;
    },
  },

  // 18. Mouse Trap (U+1FAA4)
  {
    id: 'mouse-trap',
    char: '🪤',
    name: 'Mouse Trap',
    unicodeHex: 'U+1FAA4',
    category: 'objects-places',
    tags: ['mouse trap', 'trap', 'cheese', 'pest', 'catch', '🪤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#FACC15', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 19 L17.6 11 L27 16.4 L14.4 24.4 Z" />
          <path d="M12.4 14.4 C14.6 10.6 19 9.8 21.8 13.4" />
          <path d="M10.4 18.4 L14.2 16 L14.4 19.6 Z" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 19 L17.6 11 L27 16.4 L14.4 24.4 Z" />
          <path d="M12.4 14.4 C14.6 10.6 19 9.8 21.8 13.4" fill="none" stroke="${c.primary}" stroke-width="1.8" />
          <path d="M10.4 18.4 L14.2 16 L14.4 19.6 Z" fill="#FFFFFF" />
        </g>`;
      }

      const wood = c.primary;
      const cheese = isDuotone ? c.secondary : '#FACC15';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wooden baseboard -->
        <path d="M5 19.2 V21.4 L14.4 26.6 L27 18.6 V16.4 Z" fill="#92400E" stroke="${c.stroke}" stroke-width="1" />
        <path d="M5 19 L17.6 11 L27 16.4 L14.4 24.4 Z" fill="${wood}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Metal snap bar -->
        <path d="M13.4 15.2 L16.2 10.2 L22.2 13.6 L19.4 18" fill="none" stroke="#64748B" stroke-width="1.6" />
        <!-- Bait cheese wedge -->
        <path d="M10.4 18.2 L14.4 15.8 L14.6 19.6 Z" fill="${cheese}" stroke="${c.stroke}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 19. Toothbrush (U+1FAA5)
  {
    id: 'toothbrush',
    char: '🪥',
    name: 'Toothbrush',
    unicodeHex: 'U+1FAA5',
    category: 'objects-places',
    tags: ['toothbrush', 'teeth', 'dental', 'hygiene', 'brush', '🪥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0EA5E9', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5.4 24.4 L25.6 4.2 L27.6 6.2 L7.4 26.4 Z" />
          <path d="M18.6 11.2 L16 8.6 L20.4 4.2 L23 6.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5.2 24.6 L25.4 4.4 L27.6 6.6 L7.4 26.8 Z" />
          <path d="M18.6 11.2 L15.8 8.4 L20.2 4 L23 6.8 Z" />
        </g>`;
      }

      const handle = c.primary;
      const bristles = isDuotone ? c.secondary : '#F8FAFC';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Bristles + mint toothpaste dab -->
        <path d="M18.8 11.4 L15.8 8.4 L20.4 3.8 L23.4 6.8 Z" fill="${bristles}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M17.2 7 C18.2 5.2 20.6 4.2 21.8 5.4" fill="none" stroke="#34D399" stroke-width="1.8" />
        <!-- Ergonomic sky-blue handle -->
        <path d="M5.2 24.6 L25.4 4.4 L27.6 6.6 L7.4 26.8 C6.4 27.6 4.4 25.6 5.2 24.6 Z" fill="${handle}" stroke="${c.stroke}" stroke-width="1.1" />
      </g>`;
    },
  },

  // 20. Headstone (U+1FAA6)
  {
    id: 'headstone',
    char: '🪦',
    name: 'Headstone',
    unicodeHex: 'U+1FAA6',
    category: 'objects-places',
    tags: ['headstone', 'tombstone', 'grave', 'rip', 'cemetery', 'halloween', '🪦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8.5 24.6 V13 C8.5 8.8 11.8 5.5 16 5.5 C20.2 5.5 23.5 8.8 23.5 13 V24.6" />
          <rect x="6" y="24.6" width="20" height="3.2" rx="0.8" />
          <path d="M12.4 13 H19.6 M13.4 17 H18.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M8.5 24.6 V13 C8.5 8.8 11.8 5.5 16 5.5 C20.2 5.5 23.5 8.8 23.5 13 V24.6 Z" />
          <rect x="6" y="24.6" width="20" height="3.4" rx="0.8" />
          <path d="M12.4 13 H19.6 M13.4 17 H18.6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
        </g>`;
      }

      const stone = c.primary;
      const base = isDuotone ? c.secondary : '#64748B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M8.5 24.6 V13 C8.5 8.8 11.8 5.5 16 5.5 C20.2 5.5 23.5 8.8 23.5 13 V24.6 Z" fill="${stone}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M12.4 13 H19.6 M13.4 17 H18.6" stroke="${base}" stroke-width="1.6" />
        <rect x="6" y="24.6" width="20" height="3.4" rx="0.8" fill="${base}" stroke="${c.stroke}" stroke-width="1.1" />
      </g>`;
    },
  },

  // 21. Placard (U+1FAA7)
  {
    id: 'placard',
    char: '🪧',
    name: 'Placard',
    unicodeHex: 'U+1FAA7',
    category: 'objects-places',
    tags: ['placard', 'sign', 'protest', 'picket sign', 'board', '🪧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#B45309', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="5" width="20" height="14" rx="1.5" />
          <path d="M16 19 V28 M10 10 H22 M10 14 H18" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 19 V28" stroke="${c.primary}" stroke-width="2.6" />
          <rect x="6" y="5" width="20" height="14" rx="1.5" />
          <path d="M10 10 H22 M10 14 H18" stroke="#FFFFFF" stroke-width="1.4" />
        </g>`;
      }

      const board = c.primary;
      const post = isDuotone ? c.secondary : '#B45309';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 19 V28" stroke="#78350F" stroke-width="3.2" />
        <path d="M16 19 V28" stroke="${post}" stroke-width="1.8" />
        <rect x="6" y="5" width="20" height="14" rx="1.5" fill="${board}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M9.6 10 H22.4 M9.6 14 H18.4" stroke="#64748B" stroke-width="1.6" />
      </g>`;
    },
  },

  // 22. Rock (U+1FAA8)
  {
    id: 'rock',
    char: '🪨',
    name: 'Rock',
    unicodeHex: 'U+1FAA8',
    category: 'objects-places',
    tags: ['rock', 'stone', 'boulder', 'pebble', 'mineral', '🪨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const rockPath = 'M4.8 22.4 L7.6 12.2 L14.8 7 L23.4 9.6 L27.4 17.8 L24.4 24.8 L9.2 25.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${rockPath}" />
          <path d="M14.8 7 L16.2 15.6 L27.4 17.8 M16.2 15.6 L9.2 25.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${rockPath}" />
          <path d="M14.8 7 L16.2 15.6 L27.4 17.8 M16.2 15.6 L9.2 25.4" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const top = c.primary;
      const shadow = isDuotone ? c.secondary : '#64748B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${rockPath}" fill="${top}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M16.2 15.6 L27.4 17.8 L24.4 24.8 L9.2 25.4 Z" fill="${shadow}" opacity="0.65" />
        <path d="M14.8 7 L16.2 15.6 L27.4 17.8 M16.2 15.6 L9.2 25.4" fill="none" stroke="${c.stroke}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 23. Mirror Ball (U+1FAA9)
  {
    id: 'mirror-ball',
    char: '🪩',
    name: 'Mirror Ball',
    unicodeHex: 'U+1FAA9',
    category: 'objects-places',
    tags: ['mirror ball', 'disco ball', 'party', 'dance', 'disco', 'sparkle', '🪩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#38BDF8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 3.5 V7" />
          <circle cx="16" cy="17.2" r="10.2" />
          <path d="M6.4 14 H25.6 M6.4 20.4 H25.6 M16 7 V27.4" />
          <ellipse cx="16" cy="17.2" rx="5" ry="10.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 3.5 V7" stroke="${c.primary}" stroke-width="1.8" />
          <circle cx="16" cy="17.2" r="10.2" />
          <g stroke="#FFFFFF" stroke-width="1" fill="none">
            <path d="M6.4 14 H25.6 M6.4 20.4 H25.6 M16 7 V27.4" />
            <ellipse cx="16" cy="17.2" rx="5" ry="10.2" />
          </g>
        </g>`;
      }

      const sphere = c.primary;
      const glint = isDuotone ? c.secondary : '#E0F2FE';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 3.4 V7" stroke="${c.stroke}" stroke-width="1.5" />
        <circle cx="16" cy="17.2" r="10.2" fill="${sphere}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Sparkly mirror facet highlights -->
        <rect x="11.2" y="10.4" width="3.2" height="3.2" fill="#FFFFFF" />
        <rect x="16.4" y="14" width="3.8" height="3.4" fill="${glint}" />
        <rect x="8.8" y="14.2" width="2.8" height="3.2" fill="${glint}" />
        <path d="M6.4 14 H25.6 M6.4 20.4 H25.6 M16 7 V27.4" stroke="${c.stroke}" stroke-width="0.9" fill="none" />
        <ellipse cx="16" cy="17.2" rx="5" ry="10.2" stroke="${c.stroke}" stroke-width="0.9" fill="none" />
        <!-- Glitter star -->
        <path d="M26 5.6 L26.5 7 L28 7.5 L26.5 8 L26 9.4 L25.5 8 L24 7.5 L25.5 7 Z" fill="#FDE047" />
      </g>`;
    },
  },

  // 24. Identification Card (U+1FAAA)
  {
    id: 'identification-card',
    char: '🪪',
    name: 'Identification Card',
    unicodeHex: 'U+1FAAA',
    category: 'objects-places',
    tags: ['identification card', 'id card', 'badge', 'driver license', 'passport', '🪪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#38BDF8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="7" width="24" height="18" rx="2" />
          <circle cx="10.6" cy="14" r="2.2" />
          <path d="M7.4 20.6 C7.4 18.6 13.8 18.6 13.8 20.6" />
          <path d="M16.8 13 H24.4 M16.8 16.6 H24.4 M16.8 20.2 H21.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <rect x="4" y="7" width="24" height="18" rx="2" />
          <circle cx="10.6" cy="14" r="2.2" fill="#FFFFFF" />
          <path d="M7.4 20.8 C7.4 18.6 13.8 18.6 13.8 20.8 Z" fill="#FFFFFF" />
          <path d="M16.8 13 H24.4 M16.8 16.6 H24.4 M16.8 20.2 H21.6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
        </g>`;
      }

      const card = c.primary;
      const header = isDuotone ? c.secondary : '#0284C7';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="7" width="24" height="18" rx="2" fill="${card}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M4 9 C4 7.9 4.9 7 6 7 H26 C27.1 7 28 7.9 28 9 V10.6 H4 Z" fill="${header}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Photo portrait box -->
        <rect x="6.4" y="12.2" width="8.2" height="9.8" rx="1" fill="#E0F2FE" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="10.5" cy="15.2" r="1.7" fill="#334155" />
        <path d="M7.8 20.8 C7.8 18.6 13.2 18.6 13.2 20.8 Z" fill="#334155" />
        <!-- Card text lines -->
        <path d="M17 14 H24.8 M17 17.4 H24.8 M17 20.8 H21.8" stroke="#64748B" stroke-width="1.5" />
      </g>`;
    },
  },

  // 25. Hamsa (U+1FAAC)
  {
    id: 'hamsa',
    char: '🪬',
    name: 'Hamsa',
    unicodeHex: 'U+1FAAC',
    category: 'symbols',
    tags: ['hamsa', 'hand', 'protection', 'amulet', 'talisman', 'charm', '🪬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#38BDF8', stroke: '#1E3A8A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const handPath =
        'M16 4 C17.2 4 18 4.8 18 6 V12.4 L19.4 7 C19.8 5.8 21.4 6.2 21 7.4 L19.8 13.4 L22.8 11.4 C24 10.6 25.2 12 24 13.2 L21.4 17.4 V22.4 C21.4 25.6 19 27.6 16 27.6 C13 27.6 10.6 25.6 10.6 22.4 V17.4 L8 13.2 C6.8 12 8 10.6 9.2 11.4 L12.2 13.4 L11 7.4 C10.6 6.2 12.2 5.8 12.6 7 L14 12.4 V6 C14 4.8 14.8 4 16 4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${handPath}" />
          <path d="M12.2 19.6 C14.4 17 17.6 17 19.8 19.6 C17.6 22.2 14.4 22.2 12.2 19.6 Z" />
          <circle cx="16" cy="19.6" r="1.2" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${handPath}" />
          <path d="M12.2 19.6 C14.4 17 17.6 17 19.8 19.6 C17.6 22.2 14.4 22.2 12.2 19.6 Z" fill="#FFFFFF" />
          <circle cx="16" cy="19.6" r="1.3" fill="${c.primary}" />
        </g>`;
      }

      const hand = c.primary;
      const iris = isDuotone ? c.secondary : '#38BDF8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${handPath}" fill="${hand}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Central protective eye -->
        <path d="M12.2 19.6 C14.4 17 17.6 17 19.8 19.6 C17.6 22.2 14.4 22.2 12.2 19.6 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="16" cy="19.6" r="1.8" fill="${iris}" />
        <circle cx="16" cy="19.6" r="0.9" fill="#0F172A" />
      </g>`;
    },
  },
];
