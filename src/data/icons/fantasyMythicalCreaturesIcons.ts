import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const fantasyMythicalCreaturesIcons: WimojiIconDef[] = [
  // 41. Ogre (Japanese Oni) (U+1F479)
  {
    id: 'ogre',
    char: '👹',
    name: 'Ogre',
    unicodeHex: 'U+1F479',
    category: 'faces-hands',
    tags: ['ogre', 'oni', 'japanese', 'monster', 'red mask', 'horns', 'fangs', 'creature', 'demon', '👹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="17" r="10" />
          <polygon points="10,9 9,4 12,7" />
          <polygon points="22,9 23,4 20,7" />
          <circle cx="12" cy="15" r="2" />
          <circle cx="20" cy="15" r="2" />
          <path d="M11 23 H21" />
          <polygon points="13,23 14,21 15,23" />
          <polygon points="17,23 18,21 19,23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="10,9 9,4 12,7" fill="#FEF08A" stroke="#CA8A04" stroke-width="0.8" />
        <polygon points="22,9 23,4 20,7" fill="#FEF08A" stroke="#CA8A04" stroke-width="0.8" />
        <circle cx="16" cy="17" r="10" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Wild dark hair -->
        <path d="M8 10 C10 8 13 8 16 8 C19 8 22 8 24 10" stroke="#1E293B" stroke-width="2.5" />
        <!-- Fierce bulging eyes -->
        <circle cx="12" cy="15" r="2.2" fill="#FFFFFF" />
        <circle cx="12" cy="15" r="1" fill="#0F172A" />
        <circle cx="20" cy="15" r="2.2" fill="#FFFFFF" />
        <circle cx="20" cy="15" r="1" fill="#0F172A" />
        <!-- Big mouth with upward fangs -->
        <rect x="11" y="21.5" width="10" height="3" rx="1.5" fill="#1E293B" />
        <polygon points="13,24.5 14,21.5 15,24.5" fill="#FFFFFF" />
        <polygon points="17,24.5 18,21.5 19,24.5" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 42. Goblin (Japanese Tengu) (U+1F47A)
  {
    id: 'goblin',
    char: '👺',
    name: 'Goblin',
    unicodeHex: 'U+1F47A',
    category: 'faces-hands',
    tags: ['goblin', 'tengu', 'japanese', 'mask', 'long nose', 'red', 'creature', 'folklore', '👺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="17" r="10" />
          <circle cx="12" cy="14" r="1.5" />
          <circle cx="20" cy="14" r="1.5" />
          <!-- Very long nose -->
          <path d="M14 15 H9 C7 15 7 19 9 19 H14" />
          <path d="M12 23 C14 25 18 25 20 23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="17" r="10" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Thick bushy eyebrows and mustache -->
        <path d="M10 12 L14 13 M22 12 L18 13" stroke="#FFFFFF" stroke-width="1.8" />
        <circle cx="12" cy="15" r="1.2" fill="#0F172A" />
        <circle cx="20" cy="15" r="1.2" fill="#0F172A" />
        <!-- Famous long protruding nose -->
        <rect x="7" y="16" width="9" height="3.5" rx="1.7" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M12 23 C14 25 18 25 20 23" stroke="#1E293B" stroke-width="1.8" fill="none" />
      </g>`;
    },
  },

  // 43. Ghost (U+1F47B)
  {
    id: 'ghost',
    char: '👻',
    name: 'Ghost',
    unicodeHex: 'U+1F47B',
    category: 'faces-hands',
    tags: ['ghost', 'spooky', 'halloween', 'boo', 'haunt', 'spirit', 'white', 'tongue', 'specter', '👻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7 25 C5 22 5 18 7 14 C9 7 13 5 16 5 C19 5 23 7 25 14 C27 18 27 22 25 25 C23 27 21 24 19 26 C17 28 15 24 13 26 C11 28 9 24 7 25 Z" />
          <circle cx="13" cy="13" r="1.5" />
          <circle cx="19" cy="13" r="1.5" />
          <ellipse cx="16" cy="18" rx="2" ry="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Floating ghost body with wavy hem -->
        <path d="M7 24 C5 21 5 17 7 14 C9 7 13 5 16 5 C19 5 23 7 25 14 C27 17 27 21 25 24 C23 26 21 23 19 25 C17 27 15 23 13 25 C11 27 9 23 7 24 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Big black eyes with one winking slightly -->
        <ellipse cx="13" cy="13" rx="1.6" ry="2.2" fill="#1E293B" />
        <circle cx="13.5" cy="12.5" r="0.6" fill="#FFFFFF" />
        <circle cx="19" cy="13" r="1.8" fill="#1E293B" />
        <!-- Wide open mouth with sticking-out pink tongue -->
        <ellipse cx="16" cy="18" rx="2.5" ry="3.2" fill="#1E293B" />
        <ellipse cx="16" cy="19.5" rx="1.6" ry="1.6" fill="#F43F5E" />
      </g>`;
    },
  },

  // 44. Baby Angel (U+1F47C)
  {
    id: 'baby-angel',
    char: '👼',
    name: 'Baby Angel',
    unicodeHex: 'U+1F47C',
    category: 'faces-hands',
    tags: ['baby angel', 'angel', 'cherub', 'cupid', 'wings', 'halo', 'holy', 'heaven', 'cute', 'innocent', '👼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#F8FAFC', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="6" rx="6" ry="1.8" />
          <circle cx="16" cy="17" r="7.5" />
          <circle cx="13" cy="16" r="1" />
          <circle cx="19" cy="16" r="1" />
          <path d="M14 20 C15 21 17 21 18 20" />
          <!-- Wings -->
          <path d="M8 15 C5 11 3 13 5 18 C6 20 8 20 9 19" />
          <path d="M24 15 C27 11 29 13 27 18 C26 20 24 20 23 19" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Golden Halo -->
        <ellipse cx="16" cy="6" rx="6.5" ry="1.8" fill="none" stroke="#F59E0B" stroke-width="1.6" />
        <!-- Wings -->
        <path d="M9 15 C5 10 2 13 4 18 C5 21 8 20 9 19 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F8FAFC'}" stroke="#CBD5E1" stroke-width="0.8" />
        <path d="M23 15 C27 10 30 13 28 18 C27 21 24 20 23 19 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F8FAFC'}" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Cherub Face -->
        <circle cx="16" cy="17" r="7.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="13" cy="16" r="1" fill="#37474F" />
        <circle cx="19" cy="16" r="1" fill="#37474F" />
        <path d="M14 20.5 C15 21.5 17 21.5 18 20.5" stroke="#E11D48" stroke-width="1.4" fill="none" />
      </g>`;
    },
  },

  // 45. Alien (U+1F47D)
  {
    id: 'alien',
    char: '👽',
    name: 'Alien',
    unicodeHex: 'U+1F47D',
    category: 'faces-hands',
    tags: ['alien', 'extraterrestrial', 'ufo', 'space', 'martian', 'sci-fi', 'eyes', 'grey', '👽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 13 C8 6 11 5 16 5 C21 5 24 6 24 13 C24 20 19 27 16 27 C13 27 8 20 8 13 Z" />
          <ellipse cx="12" cy="15" rx="2.5" ry="4.5" transform="rotate(-25 12 15)" />
          <ellipse cx="20" cy="15" rx="2.5" ry="4.5" transform="rotate(25 20 15)" />
          <line x1="15" y1="23" x2="17" y2="23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 13 C8 6 11 5 16 5 C21 5 24 6 24 13 C24 20 19 27 16 27 C13 27 8 20 8 13 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Big oval black alien eyes tilted -->
        <ellipse cx="12" cy="15" rx="2.5" ry="4.5" transform="rotate(-25 12 15)" fill="#0F172A" />
        <circle cx="11.5" cy="14" r="0.8" fill="#FFFFFF" />
        <ellipse cx="20" cy="15" rx="2.5" ry="4.5" transform="rotate(25 20 15)" fill="#0F172A" />
        <circle cx="19.5" cy="14" r="0.8" fill="#FFFFFF" />
        <line x1="15" y1="23" x2="17" y2="23" stroke="#0F172A" stroke-width="1.2" />
      </g>`;
    },
  },

  // 46. Alien Monster (U+1F47E)
  {
    id: 'alien-monster',
    char: '👾',
    name: 'Alien Monster',
    unicodeHex: 'U+1F47E',
    category: 'faces-hands',
    tags: ['alien monster', 'space invader', '8-bit', 'retro', 'arcade', 'game', 'pixel', 'pixel art', 'purple', '👾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', stroke: '#7E22CE' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="square" stroke-linejoin="miter" fill="none">
          <path d="M8 6 H10 V8 H8 Z M22 6 H24 V8 H22 Z" />
          <path d="M10 8 H22 V14 H26 V22 H24 V26 H22 V22 H20 V26 H18 V22 H14 V26 H12 V22 H10 V26 H8 V22 H6 V14 H10 Z" />
          <rect x="11" y="13" width="2" height="2" />
          <rect x="19" y="13" width="2" height="2" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <!-- Top antennas -->
        <rect x="8" y="6" width="2" height="2" />
        <rect x="22" y="6" width="2" height="2" />
        <!-- Head / body pixel blocks -->
        <rect x="10" y="8" width="12" height="2" />
        <rect x="8" y="10" width="16" height="2" />
        <rect x="6" y="12" width="20" height="4" />
        <rect x="6" y="16" width="4" height="4" />
        <rect x="12" y="16" width="8" height="4" />
        <rect x="22" y="16" width="4" height="4" />
        <!-- Tentacle feet -->
        <rect x="6" y="20" width="2" height="4" />
        <rect x="10" y="20" width="2" height="2" />
        <rect x="20" y="20" width="2" height="2" />
        <rect x="24" y="20" width="2" height="4" />
        <!-- Pixel eyes cutout -->
        <rect x="10" y="13" width="2" height="2" fill="#FFFFFF" />
        <rect x="20" y="13" width="2" height="2" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 47. Angry Face with Horns / Imp Devil (U+1F47F)
  {
    id: 'angry-face-with-horns',
    char: '👿',
    name: 'Angry Face with Horns',
    unicodeHex: 'U+1F47F',
    category: 'faces-hands',
    tags: ['devil', 'imp', 'angry face with horns', 'demon', 'horns', 'frown', 'purple', 'evil', 'mad', 'fuming', '👿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#9333EA', fillSecondary: '#37474F', stroke: '#7E22CE' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sharp devil horns -->
          <path d="M8 12 L5 5 L11 8" />
          <path d="M24 12 L27 5 L21 8" />
          <circle cx="16" cy="17" r="11.5" />
          <!-- Angry slanted eyebrows -->
          <line x1="8.5" y1="11" x2="14" y2="13.5" stroke-width="${opts.strokeWidth + 0.5}" />
          <line x1="23.5" y1="11" x2="18" y2="13.5" stroke-width="${opts.strokeWidth + 0.5}" />
          <ellipse cx="11.5" cy="15" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="15" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <!-- Downcast frown arc -->
          <path d="M11 23.5 c1.4-3.2 3.8-4 5-4 s3.6.8 5 4" stroke-width="${opts.strokeWidth + 0.7}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Horns behind head -->
        <polygon points="8,12 5,4.5 11.5,8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <polygon points="24,12 27,4.5 20.5,8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Purple Face Base with inner highlight -->
        <circle cx="16" cy="17" r="11.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="16" cy="16" r="10" fill="#C084FC" opacity="0.25" />
        <!-- Angry furrowed eyebrows -->
        <line x1="8.5" y1="11.5" x2="14" y2="14" stroke="${opts.style === 'duotone' ? c.secondary : '#1E1B4B'}" stroke-width="2.2" />
        <line x1="23.5" y1="11.5" x2="18" y2="14" stroke="${opts.style === 'duotone' ? c.secondary : '#1E1B4B'}" stroke-width="2.2" />
        <!-- Expressive eyes with glints -->
        <ellipse cx="11.5" cy="15" rx="1.6" ry="2.2" fill="${opts.style === 'duotone' ? c.secondary : '#1E1B4B'}" />
        <ellipse cx="20.5" cy="15" rx="1.6" ry="2.2" fill="${opts.style === 'duotone' ? c.secondary : '#1E1B4B'}" />
        <circle cx="12" cy="14.2" r="0.6" fill="#FFFFFF" opacity="0.9" />
        <circle cx="21" cy="14.2" r="0.6" fill="#FFFFFF" opacity="0.9" />
        <!-- Downcast Frown Arc -->
        <path d="M11 23.5 c1.4-3.2 3.8-4 5-4 s3.6.8 5 4" stroke="${opts.style === 'duotone' ? c.secondary : '#1E1B4B'}" stroke-width="2.2" fill="none" />
      </g>`;
    },
  },

  // 48. Skull (U+1F480)
  {
    id: 'skull',
    char: '💀',
    name: 'Skull',
    unicodeHex: 'U+1F480',
    category: 'faces-hands',
    tags: ['skull', 'skeleton', 'death', 'dead', 'bones', 'danger', 'halloween', 'creepy', 'white', '💀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F1F5F9', fillSecondary: '#0F172A', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cranium dome & cheekbones -->
          <path d="M7 14 C7 7.5 11 5 16 5 C21 5 25 7.5 25 14 C25 18 22.5 19 21.5 21 V26 H10.5 V21 C9.5 19 7 18 7 14 Z" />
          <!-- Big hollow eye sockets -->
          <circle cx="12.5" cy="14" r="2.5" fill="${c.stroke}" />
          <circle cx="19.5" cy="14" r="2.5" fill="${c.stroke}" />
          <!-- Inverted heart nasal cavity -->
          <polygon points="16,17.5 15,19.5 17,19.5" fill="${c.stroke}" />
          <!-- Teeth separator lines -->
          <line x1="10.5" y1="23.5" x2="21.5" y2="23.5" />
          <line x1="13.5" y1="21" x2="13.5" y2="26" />
          <line x1="16" y1="21" x2="16" y2="26" />
          <line x1="18.5" y1="21" x2="18.5" y2="26" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Smooth vector Skull cranium & jaw based on wimoji skull foundation -->
        <path d="M7 14 C7 7.5 11 5 16 5 C21 5 25 7.5 25 14 C25 18 22.5 19 21.5 21 V26 H10.5 V21 C9.5 19 7 18 7 14 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Hollow dark eye sockets -->
        <circle cx="12.5" cy="14" r="2.5" fill="${opts.style === 'duotone' ? c.secondary : '#334155'}" />
        <circle cx="19.5" cy="14" r="2.5" fill="${opts.style === 'duotone' ? c.secondary : '#334155'}" />
        <!-- Inverted nasal cavity -->
        <polygon points="16,17.5 14.8,20 17.2,20" fill="${opts.style === 'duotone' ? c.secondary : '#334155'}" />
        <!-- Teeth dividing grid -->
        <line x1="10.5" y1="23.5" x2="21.5" y2="23.5" stroke="${opts.style === 'duotone' ? c.secondary : '#475569'}" stroke-width="0.8" />
        <line x1="13.5" y1="21" x2="13.5" y2="26" stroke="${opts.style === 'duotone' ? c.secondary : '#475569'}" stroke-width="0.8" />
        <line x1="16" y1="21" x2="16" y2="26" stroke="${opts.style === 'duotone' ? c.secondary : '#475569'}" stroke-width="0.8" />
        <line x1="18.5" y1="21" x2="18.5" y2="26" stroke="${opts.style === 'duotone' ? c.secondary : '#475569'}" stroke-width="0.8" />
      </g>`;
    },
  },
];
