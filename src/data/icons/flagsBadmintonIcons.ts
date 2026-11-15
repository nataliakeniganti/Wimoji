import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const flagsBadmintonIcons: WimojiIconDef[] = [
  {
    id: 'white-pennant',
    char: '🏱',
    name: 'White Pennant',
    unicodeHex: 'U+1F3F1',
    category: 'symbols',
    tags: ['white pennant', 'pennant', 'flag', 'triangle', 'white', 'banner', 'marker', 'pole', '🏱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="8" y1="4" x2="8" y2="28" />
          <polygon points="8,5 26,12 8,19" />
          <line x1="5" y1="28" x2="11" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="8" y1="4" x2="8" y2="28" stroke="${c.secondary}" stroke-width="2.5" />
        <circle cx="8" cy="4" r="1.5" fill="#FBBF24" />
        <line x1="5" y1="28" x2="11" y2="28" stroke="${c.secondary}" stroke-width="2.5" />
        <polygon points="8,5.5 26,12 8,18.5" fill="${c.primary}" stroke="#94A3B8" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'black-pennant',
    char: '🏲',
    name: 'Black Pennant',
    unicodeHex: 'U+1F3F2',
    category: 'symbols',
    tags: ['black pennant', 'pennant', 'flag', 'triangle', 'black', 'banner', 'marker', 'pole', '🏲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="8" y1="4" x2="8" y2="28" />
          <polygon points="8,5 26,12 8,19" />
          <line x1="5" y1="28" x2="11" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="8" y1="4" x2="8" y2="28" stroke="${c.secondary}" stroke-width="2.5" />
        <circle cx="8" cy="4" r="1.5" fill="#FBBF24" />
        <line x1="5" y1="28" x2="11" y2="28" stroke="${c.secondary}" stroke-width="2.5" />
        <polygon points="8,5.5 26,12 8,18.5" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'waving-white-flag',
    char: '🏳',
    name: 'Waving White Flag',
    unicodeHex: 'U+1F3F3',
    category: 'symbols',
    tags: ['waving white flag', 'white flag', 'surrender', 'peace', 'truce', 'flagpole', 'waving', '🏳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="7" y1="4" x2="7" y2="28" />
          <path d="M7 6c5-2 10 2 18 0v11c-8 2-13-2-18 0" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="4" x2="7" y2="28" stroke="${c.secondary}" stroke-width="2.5" />
        <circle cx="7" cy="4" r="1.5" fill="#FBBF24" />
        <!-- Waving Flag Cloth Body -->
        <path d="M7 6c5-2 10 2 18 0v11c-8 2-13-2-18 0V6z" fill="${c.primary}" stroke="#94A3B8" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'waving-black-flag',
    char: '🏴',
    name: 'Waving Black Flag',
    unicodeHex: 'U+1F3F4',
    category: 'symbols',
    tags: ['waving black flag', 'black flag', 'pirate', 'rebel', 'flagpole', 'waving', 'banner', '🏴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="7" y1="4" x2="7" y2="28" />
          <path d="M7 6c5-2 10 2 18 0v11c-8 2-13-2-18 0" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="4" x2="7" y2="28" stroke="${c.secondary}" stroke-width="2.5" />
        <circle cx="7" cy="4" r="1.5" fill="#FBBF24" />
        <path d="M7 6c5-2 10 2 18 0v11c-8 2-13-2-18 0V6z" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'rosette',
    char: '🏵',
    name: 'Rosette',
    unicodeHex: 'U+1F3F5',
    category: 'symbols',
    tags: ['rosette', 'flower', 'ribbon', 'award', 'decoration', 'medal', 'ornament', 'celebration', '🏵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="10" />
          <circle cx="16" cy="16" r="4.5" />
          <!-- Petals -->
          <circle cx="16" cy="7.5" r="2.5" />
          <circle cx="22" cy="10" r="2.5" />
          <circle cx="24.5" cy="16" r="2.5" />
          <circle cx="22" cy="22" r="2.5" />
          <circle cx="16" cy="24.5" r="2.5" />
          <circle cx="10" cy="22" r="2.5" />
          <circle cx="7.5" cy="16" r="2.5" />
          <circle cx="10" cy="10" r="2.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- 8 Outer Scalloped Petals (Golden Amber) -->
        <g fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8">
          <circle cx="16" cy="8" r="3.2" />
          <circle cx="21.7" cy="10.3" r="3.2" />
          <circle cx="24" cy="16" r="3.2" />
          <circle cx="21.7" cy="21.7" r="3.2" />
          <circle cx="16" cy="24" r="3.2" />
          <circle cx="10.3" cy="21.7" r="3.2" />
          <circle cx="8" cy="16" r="3.2" />
          <circle cx="10.3" cy="10.3" r="3.2" />
        </g>
        <!-- Center Button Core (Red / Accent) -->
        <circle cx="16" cy="16" r="5" fill="${c.secondary}" stroke="#991B1B" stroke-width="1" />
        <circle cx="16" cy="16" r="2" fill="#FEF08A" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'black-rosette',
    char: '🏶',
    name: 'Black Rosette',
    unicodeHex: 'U+1F3F6',
    category: 'symbols',
    tags: ['black rosette', 'rosette', 'black', 'award', 'decoration', 'ribbon', 'mourning', 'symbol', '🏶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#475569', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="10" />
          <circle cx="16" cy="16" r="4.5" />
          <circle cx="16" cy="7.5" r="2.5" />
          <circle cx="24.5" cy="16" r="2.5" />
          <circle cx="16" cy="24.5" r="2.5" />
          <circle cx="7.5" cy="16" r="2.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <g fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8">
          <circle cx="16" cy="8" r="3.2" />
          <circle cx="21.7" cy="10.3" r="3.2" />
          <circle cx="24" cy="16" r="3.2" />
          <circle cx="21.7" cy="21.7" r="3.2" />
          <circle cx="16" cy="24" r="3.2" />
          <circle cx="10.3" cy="21.7" r="3.2" />
          <circle cx="8" cy="16" r="3.2" />
          <circle cx="10.3" cy="10.3" r="3.2" />
        </g>
        <circle cx="16" cy="16" r="5" fill="${c.secondary}" stroke="#0F172A" stroke-width="1" />
        <circle cx="16" cy="16" r="2" fill="#94A3B8" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'label',
    char: '🏷',
    name: 'Label',
    unicodeHex: 'U+1F3F7',
    category: 'tools',
    tags: ['label', 'tag', 'price tag', 'ticket', 'sale', 'luggage tag', 'string', 'badge', '🏷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#1E293B', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g transform="rotate(-45 16 16)">
            <polygon points="16,4 24,10 24,28 8,28 8,10" />
            <circle cx="16" cy="9" r="2" />
          </g>
          <!-- String Loop -->
          <path d="M7 7c2-3 5-4 7-2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tied String Cord -->
        <path d="M6 7c2-3 6-4 8-1" stroke="#D97706" stroke-width="1.5" fill="none" />
        <!-- Angled Hanging Price Tag -->
        <g transform="rotate(-45 16 16)">
          <polygon points="16,4 24,10.5 24,28 8,28 8,10.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
          <!-- Hole Eyelet -->
          <circle cx="16" cy="9.5" r="2.2" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1" />
        </g>
      </g>`;
    },
  },
  {
    id: 'badminton',
    char: '🏸',
    name: 'Badminton',
    unicodeHex: 'U+1F3F8',
    category: 'sports-travel',
    tags: ['badminton', 'shuttlecock', 'birdie', 'racket', 'sport', 'athlete', 'court', 'game', '🏸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#F8FAFC', fillAccent: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Racket -->
          <ellipse cx="11" cy="11" rx="6" ry="7" transform="rotate(-45 11 11)" />
          <line x1="16" y1="16" x2="27" y2="27" />
          <!-- Shuttlecock / Birdie -->
          <polygon points="21,7 27,9 25,15" />
          <circle cx="21" cy="15" r="2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Badminton Racket -->
        <line x1="15.5" y1="15.5" x2="27" y2="27" stroke="${c.primary}" stroke-width="2.5" />
        <line x1="22" y1="22" x2="27" y2="27" stroke="#FBBF24" stroke-width="3" />
        <ellipse cx="11" cy="11" rx="6.5" ry="7.5" transform="rotate(-45 11 11)" fill="none" stroke="${c.primary}" stroke-width="2" />
        <!-- String Mesh Grid -->
        <g stroke="#93C5FD" stroke-width="0.7">
          <line x1="7" y1="8" x2="15" y2="16" />
          <line x1="9" y1="6" x2="17" y2="14" />
          <line x1="6" y1="13" x2="14" y2="5" />
          <line x1="8" y1="15" x2="16" y2="7" />
        </g>
        <!-- Feather Shuttlecock Birdie -->
        <polygon points="20,5 28,8 24,14" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <circle cx="19.5" cy="13.5" r="2.2" fill="${c.accent}" stroke="#991B1B" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'bow-and-arrow',
    char: '🏹',
    name: 'Bow and Arrow',
    unicodeHex: 'U+1F3F9',
    category: 'sports-travel',
    tags: ['bow and arrow', 'archery', 'bow', 'arrow', 'target', 'sport', 'quiver', 'aim', 'hunt', 'archer', '🏹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#64748B', fillAccent: '#EF4444', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Wooden Bow Curve -->
          <path d="M6 7c10 2 15 7 17 17" />
          <!-- Bowstring -->
          <line x1="6" y1="7" x2="15" y2="15" />
          <line x1="15" y1="15" x2="23" y2="24" />
          <!-- Nocked Arrow -->
          <line x1="9" y1="21" x2="26" y2="4" />
          <polyline points="21,4 26,4 26,9" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Recurve Wooden Bow Staff -->
        <path d="M5.5 6.5c10.5 2 16 7.5 18 18" stroke="${c.primary}" stroke-width="3" fill="none" />
        <!-- Taut Bowstring (Drawn to Arrow Nock) -->
        <line x1="5.5" y1="6.5" x2="14.5" y2="15.5" stroke="#E2E8F0" stroke-width="1.2" />
        <line x1="14.5" y1="15.5" x2="23.5" y2="24.5" stroke="#E2E8F0" stroke-width="1.2" />
        <!-- Nocked Steel Arrow Shaft -->
        <line x1="10" y1="20" x2="26" y2="4" stroke="${c.secondary}" stroke-width="2" />
        <!-- Arrowhead -->
        <polygon points="23,4 27,3 26,7" fill="${c.secondary}" stroke="#334155" stroke-width="0.8" />
        <!-- Feather Fletching -->
        <path d="M9 21l3-1M11 23l-1-3" stroke="${c.accent}" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'amphora',
    char: '🏺',
    name: 'Amphora',
    unicodeHex: 'U+1F3FA',
    category: 'objects-places',
    tags: ['amphora', 'vase', 'pottery', 'greek', 'ancient', 'urn', 'ceramic', 'clay', 'terracotta', 'antiquity', '🏺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#C2410C', stroke: '#9A3412' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="4" rx="4" ry="1.5" />
          <path d="M12 4v4c-4 3-5 7-3 12l2 6h10l2-6c2-5 1-9-3-12V4" />
          <!-- Handles -->
          <path d="M10 8c-3 1-4 4-2 7 1 2 2 3 3 3" />
          <path d="M22 8c3 1 4 4 2 7-1 2-2 3-3 3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Twin Loop Handles -->
        <path d="M10 8c-3.5 1-4.5 4.5-2.5 8 1 2 2 2.5 3.5 2.5" stroke="${c.secondary}" stroke-width="2.2" fill="none" />
        <path d="M22 8c3.5 1 4.5 4.5 2.5 8-1 2-2 2.5-3.5 2.5" stroke="${c.secondary}" stroke-width="2.2" fill="none" />
        <!-- Terracotta Clay Vessel Body -->
        <path d="M12 4v4c-4.5 3.5-5 7.5-3 12.5l2 5.5h10l2-5.5c2-5 1.5-9-3-12.5V4z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Rim Lip -->
        <ellipse cx="16" cy="4" rx="4.5" ry="1.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Decorative Classical Greek Pattern Band -->
        <line x1="10" y1="14" x2="22" y2="14" stroke="#78350F" stroke-width="1" />
        <line x1="11" y1="16" x2="21" y2="16" stroke="#78350F" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'light-skin-tone',
    char: '🏻',
    name: 'Light Skin Tone',
    unicodeHex: 'U+1F3FB',
    category: 'faces-hands',
    tags: ['light skin tone', 'fitzpatrick', 'skin tone', 'type 1-2', 'modifier', 'fair', 'swatch', '🏻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F7DECE', stroke: '#E0B59E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="6" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#F7DECE" stroke="#E0B59E" stroke-width="1.5" />
        <circle cx="16" cy="16" r="5" fill="#FFFFFF" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'medium-light-skin-tone',
    char: '🏼',
    name: 'Medium-Light Skin Tone',
    unicodeHex: 'U+1F3FC',
    category: 'faces-hands',
    tags: ['medium light skin tone', 'fitzpatrick', 'skin tone', 'type 3', 'modifier', 'swatch', '🏼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F3D2A2', stroke: '#D4AA76' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="6" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#F3D2A2" stroke="#D4AA76" stroke-width="1.5" />
        <circle cx="16" cy="16" r="5" fill="#FFFFFF" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'medium-skin-tone',
    char: '🏽',
    name: 'Medium Skin Tone',
    unicodeHex: 'U+1F3FD',
    category: 'faces-hands',
    tags: ['medium skin tone', 'fitzpatrick', 'skin tone', 'type 4', 'modifier', 'tan', 'swatch', '🏽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D5A070', stroke: '#B37D4D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="6" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#D5A070" stroke="#B37D4D" stroke-width="1.5" />
        <circle cx="16" cy="16" r="5" fill="#FFFFFF" opacity="0.3" />
      </g>`;
    },
  },
  {
    id: 'medium-dark-skin-tone',
    char: '🏾',
    name: 'Medium-Dark Skin Tone',
    unicodeHex: 'U+1F3FE',
    category: 'faces-hands',
    tags: ['medium dark skin tone', 'fitzpatrick', 'skin tone', 'type 5', 'modifier', 'brown', 'swatch', '🏾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A1653B', stroke: '#7A451F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="6" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#A1653B" stroke="#7A451F" stroke-width="1.5" />
        <circle cx="16" cy="16" r="5" fill="#FFFFFF" opacity="0.25" />
      </g>`;
    },
  },
  {
    id: 'dark-skin-tone',
    char: '🏿',
    name: 'Dark Skin Tone',
    unicodeHex: 'U+1F3FF',
    category: 'faces-hands',
    tags: ['dark skin tone', 'fitzpatrick', 'skin tone', 'type 6', 'modifier', 'deep', 'swatch', '🏿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#5C3E2F', stroke: '#382216' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="6" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#5C3E2F" stroke="#382216" stroke-width="1.5" />
        <circle cx="16" cy="16" r="5" fill="#FFFFFF" opacity="0.2" />
      </g>`;
    },
  },
];
