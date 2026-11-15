import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const plantFlowerIcons: WimojiIconDef[] = [
  {
    id: 'chestnut',
    char: '🌰',
    name: 'Chestnut',
    unicodeHex: 'U+1F330',
    category: 'objects-places',
    tags: ['chestnut', 'nut', 'acorn', 'autumn', 'food', 'plant'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#D97706', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4c-6 3-11 9-11 15 0 6 5 9 11 9s11-3 11-9c0-6-5-12-11-15z" />
          <path d="M5 21c3-2 7-3 11-3s8 1 11 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Nut upper body -->
        <path d="M16 4c-6 3-11 9-11 15 0 6 5 9 11 9s11-3 11-9c0-6-5-12-11-15z" fill="${c.primary}" stroke="#451A03" stroke-width="1.2" />
        <!-- Nut light base -->
        <path d="M5 19c3-2 7-3 11-3s8 1 11 3c0 5-5 9-11 9s-11-4-11-9z" fill="${c.secondary}" />
        <!-- Nut tip highlight -->
        <circle cx="16" cy="4" r="0.8" fill="#FDE68A" />
        <ellipse cx="12" cy="11" rx="2" ry="4" transform="rotate(-25 12 11)" fill="#FFFFFF" opacity="0.2" />
      </g>`;
    },
  },
  {
    id: 'seedling',
    char: '🌱',
    name: 'Seedling',
    unicodeHex: 'U+1F331',
    category: 'weather',
    tags: ['seedling', 'plant', 'sprout', 'growth', 'nature', 'spring', 'leaf'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#78350F', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 26V13" />
          <path d="M16 13c-4-4-9-4-11 1 0 5 6 6 11-1z" />
          <path d="M16 17c4-3 9-3 11 1 0 5-6 6-11-1z" />
          <path d="M7 26h18" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Soil mound -->
        <ellipse cx="16" cy="26" rx="9" ry="2.5" fill="${c.secondary}" />
        <!-- Stem -->
        <path d="M16 26v-13" stroke="#16A34A" stroke-width="2.2" stroke-linecap="round" />
        <!-- Left Leaf -->
        <path d="M16 13c-4-4-9-4-11 1 0 5 6 6 11-1z" fill="${c.primary}" stroke="#15803D" stroke-width="1" />
        <!-- Right Leaf -->
        <path d="M16 17c4-3 9-3 11 1 0 5-6 6-11-1z" fill="#4ADE80" stroke="#15803D" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'evergreen-tree',
    char: '🌲',
    name: 'Evergreen Tree',
    unicodeHex: 'U+1F332',
    category: 'weather',
    tags: ['evergreen', 'tree', 'pine', 'fir', 'christmas', 'nature', 'forest'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#78350F', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 3l-6 6h3l-5 6h3l-6 8h22l-6-8h3l-5-6h3z" />
          <path d="M14 23v6h4v-6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Trunk -->
        <rect x="14" y="23" width="4" height="6" rx="1" fill="${c.secondary}" />
        <!-- Tier 3 (Bottom) -->
        <polygon points="16,13 5,23 27,23" fill="#15803D" stroke="#14532D" stroke-width="1" />
        <!-- Tier 2 (Middle) -->
        <polygon points="16,8 8,16 24,16" fill="${c.primary}" stroke="#14532D" stroke-width="1" />
        <!-- Tier 1 (Top) -->
        <polygon points="16,3 10,10 22,10" fill="#22C55E" stroke="#14532D" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'deciduous-tree',
    char: '🌳',
    name: 'Deciduous Tree',
    unicodeHex: 'U+1F333',
    category: 'weather',
    tags: ['deciduous', 'tree', 'oak', 'nature', 'park', 'forest', 'green'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#78350F', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M14 19v8h4v-8" />
          <path d="M11 20c-3 0-5-3-5-6 0-3 2-5 5-5 0-3 3-5 5-5s5 2 5 5c3 0 5 2 5 5 0 3-2 6-5 6z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Trunk with branches -->
        <path d="M13 17l3 3v7h4v-7l3-3" stroke="${c.secondary}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Foliage puffs -->
        <circle cx="16" cy="9" r="6" fill="${c.primary}" />
        <circle cx="11" cy="14" r="5.5" fill="#16A34A" />
        <circle cx="21" cy="14" r="5.5" fill="#16A34A" />
        <circle cx="16" cy="15" r="5" fill="#22C55E" />
        <ellipse cx="14" cy="8" rx="2" ry="1.2" fill="#86EFAC" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'palm-tree',
    char: '🌴',
    name: 'Palm Tree',
    unicodeHex: 'U+1F334',
    category: 'weather',
    tags: ['palm', 'tree', 'tropical', 'beach', 'island', 'summer', 'vacation'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#A16207', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M13 28c3-7 3-12 2-17" />
          <path d="M15 11c-4-4-9-3-11 2 4 1 8 0 11-2z" />
          <path d="M15 11c-1-5 2-8 7-7-1 4-3 7-7 7z" />
          <path d="M15 11c4-3 8-1 12 3-4 1-8 0-12-3z" />
          <path d="M15 11c2 4 1 8-2 11-1-4-1-8 2-11z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Curved trunk with rings -->
        <path d="M13 28c3-7 3-12 2-17" stroke="${c.secondary}" stroke-width="2.8" stroke-linecap="round" fill="none" />
        <!-- Tropical fronds -->
        <path d="M15 11c-4-4-9-3-11 2 4 1 8 0 11-2z" fill="${c.primary}" />
        <path d="M15 11c-1-5 2-8 7-7-1 4-3 7-7 7z" fill="#22C55E" />
        <path d="M15 11c4-3 8-1 12 3-4 1-8 0-12-3z" fill="#15803D" />
        <path d="M15 11c2 4 1 8-2 11-1-4-1-8 2-11z" fill="${c.primary}" />
        <!-- Coconuts -->
        <circle cx="14" cy="12" r="1.3" fill="#78350F" />
        <circle cx="16.5" cy="12.5" r="1.3" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'cactus',
    char: '🌵',
    name: 'Cactus',
    unicodeHex: 'U+1F335',
    category: 'weather',
    tags: ['cactus', 'desert', 'plant', 'succulent', 'prickly', 'nature', 'southwest'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#D97706', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 28V6a3 3 0 0 0-6 0v22" />
          <path d="M13 14H8a2 2 0 0 1-2-2V9a2 2 0 0 1 4 0v2" />
          <path d="M16 17h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-4 0v3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Sand patch -->
        <ellipse cx="16" cy="27" rx="8" ry="2" fill="${c.secondary}" opacity="0.6" />
        <!-- Left arm -->
        <path d="M14 15H9a2 2 0 0 1-2-2v-3a1.5 1.5 0 0 1 3 0v2h4" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Right arm -->
        <path d="M16 18h5a2 2 0 0 0 2-2v-4a1.5 1.5 0 0 0-3 0v3h-4" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Main trunk -->
        <rect x="13.5" y="4" width="5" height="23" rx="2.5" fill="${c.primary}" stroke="#14532D" stroke-width="1" />
        <!-- Needle dots -->
        <circle cx="16" cy="8" r="0.6" fill="#86EFAC" />
        <circle cx="16" cy="14" r="0.6" fill="#86EFAC" />
        <circle cx="16" cy="20" r="0.6" fill="#86EFAC" />
      </g>`;
    },
  },
  {
    id: 'hot-pepper',
    char: '🌶',
    name: 'Hot Pepper',
    unicodeHex: 'U+1F336',
    category: 'objects-places',
    tags: ['pepper', 'chili', 'hot', 'spicy', 'red', 'vegetable', 'mexican'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#16A34A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M19 5c2-2 4-2 6-1" />
          <path d="M19 5c-3 3-9 9-9 16 0 4 3 6 4 6 1 0 1-3 3-6s7-9 6-13z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Pepper body -->
        <path d="M19 6c-3 3-9 8.5-9 15.5 0 3.5 2.5 5.5 3.5 5.5 1 0 1-2.5 2.5-5.5s7-8.5 6.5-12.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Shiny highlight -->
        <path d="M13 13c-1.5 3-1.5 6 0 9" stroke="#FCA5A5" stroke-width="1" stroke-linecap="round" fill="none" />
        <!-- Green calyx & stem -->
        <path d="M19 6c2-2 4-2 6-1" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <polygon points="17,6 20,4 23,6 20,8" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'tulip',
    char: '🌷',
    name: 'Tulip',
    unicodeHex: 'U+1F337',
    category: 'weather',
    tags: ['tulip', 'flower', 'pink', 'spring', 'nature', 'bloom', 'garden'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F43F5E', fillSecondary: '#16A34A', stroke: '#BE123C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 15v13M16 23c-4-2-7-1-9 2M16 20c4-2 7-1 9 2" />
          <path d="M16 4c-5 0-7 5-7 9 0 4 3 6 7 6s7-2 7-6c0-4-2-9-7-9z" />
          <path d="M12 9c2 3 4 3 4 0s2-3 4 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem -->
        <path d="M16 15v13" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <!-- Leaves -->
        <path d="M16 23c-4-2-7-1-9 2" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M16 20c4-2 7-1 9 2" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Tulip petals -->
        <path d="M16 4c-5 0-7 5-7 9 0 4 3 6 7 6s7-2 7-6c0-4-2-9-7-9z" fill="${c.primary}" stroke="#BE123C" stroke-width="1" />
        <path d="M12 7c2 4 4 4 4 0s2-4 4 0c0 4-2 9-4 9s-4-5-4-9z" fill="#FB7185" />
      </g>`;
    },
  },
  {
    id: 'cherry-blossom',
    char: '🌸',
    name: 'Cherry Blossom',
    unicodeHex: 'U+1F338',
    category: 'weather',
    tags: ['cherry blossom', 'sakura', 'flower', 'pink', 'spring', 'japan', 'nature'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBCFE8', fillSecondary: '#DB2777', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="3" />
          <path d="M16 13C14 7 18 7 16 3M19 15c6-2 6 2 10 0M18 18c4 4 2 7 6 9M14 18c-4 4-2 7-6 9M13 15c-6-2-6 2-10 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- 5 Petals -->
        ${[0, 72, 144, 216, 288].map(deg => `
          <g transform="rotate(${deg} 16 16)">
            <path d="M16 13c-2.5-3-2.5-6.5 0-9 2.5 2.5 2.5 6 0 9z" fill="${c.primary}" stroke="#F472B6" stroke-width="0.8" />
            <path d="M15.2 4.2L16 5.5l.8-1.3" stroke="#F472B6" stroke-width="0.8" stroke-linecap="round" fill="none" />
          </g>
        `).join('')}
        <!-- Center pistil -->
        <circle cx="16" cy="16" r="3.2" fill="${c.secondary}" />
        <circle cx="16" cy="16" r="1.5" fill="#FBBF24" />
      </g>`;
    },
  },
  {
    id: 'rose',
    char: '🌹',
    name: 'Rose',
    unicodeHex: 'U+1F339',
    category: 'weather',
    tags: ['rose', 'flower', 'red', 'love', 'romance', 'valentine', 'bloom'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#16A34A', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 16v12M16 22c-3-1-5 1-6 3M16 19c3-1 5 1 6 3" />
          <circle cx="16" cy="11" r="7" />
          <path d="M13 10c1-2 4-2 5 0s-1 3-2 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem & leaf -->
        <path d="M16 16v12" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <path d="M16 22c-3-1-5 1-6 3" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M16 19c3-1 5 1 6 3" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- Rose Blossom Petals -->
        <circle cx="16" cy="11" r="7.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <path d="M12 9c2-3 6-3 8 0s-2 6-4 6-4-3-4-6z" fill="#EF4444" />
        <path d="M14 9c1-1.5 3-1.5 4 0s-1 2.5-2 2.5" stroke="#B91C1C" stroke-width="1.5" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'hibiscus',
    char: '🌺',
    name: 'Hibiscus',
    unicodeHex: 'U+1F33A',
    category: 'weather',
    tags: ['hibiscus', 'flower', 'tropical', 'pink', 'hawaii', 'bloom', 'summer'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#FBBF24', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="4" />
          <path d="M16 12C14 7 18 7 16 3M19 14c5-3 7 1 9 3M18 18c3 5 0 7 3 10M14 18c-3 5 0 7-3 10M13 14c-5-3-7 1-9 3" />
          <path d="M16 16l6-6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- 5 Rounded Petals -->
        ${[0, 72, 144, 216, 288].map(deg => `
          <ellipse cx="16" cy="8.5" rx="4.5" ry="5.5" transform="rotate(${deg} 16 16)" fill="${c.primary}" stroke="#BE185D" stroke-width="0.8" />
        `).join('')}
        <!-- Darker center -->
        <circle cx="16" cy="16" r="4" fill="#BE185D" />
        <!-- Long yellow stamen -->
        <path d="M16 16l6-7" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <circle cx="22.5" cy="8.5" r="1.5" fill="#F59E0B" />
      </g>`;
    },
  },
  {
    id: 'sunflower',
    char: '🌻',
    name: 'Sunflower',
    unicodeHex: 'U+1F33B',
    category: 'weather',
    tags: ['sunflower', 'flower', 'yellow', 'summer', 'sun', 'nature', 'bloom'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#78350F', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="6" />
          <path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Golden petals around circumference -->
        ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => `
          <ellipse cx="16" cy="6" rx="2" ry="4" transform="rotate(${deg} 16 16)" fill="${c.primary}" stroke="#D97706" stroke-width="0.6" />
        `).join('')}
        <!-- Rich seed center -->
        <circle cx="16" cy="16" r="6.2" fill="${c.secondary}" stroke="#451A03" stroke-width="1" />
        <circle cx="16" cy="16" r="4.5" fill="#92400E" opacity="0.6" />
        <circle cx="16" cy="16" r="2.5" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'blossom',
    char: '🌼',
    name: 'Blossom',
    unicodeHex: 'U+1F33C',
    category: 'weather',
    tags: ['blossom', 'flower', 'yellow', 'daisy', 'bloom', 'spring', 'nature'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FEF08A', fillSecondary: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="4" />
          <path d="M16 4a4 4 0 0 0 0 8M16 20a4 4 0 0 0 0 8M4 16a4 4 0 0 0 8 0M20 16a4 4 0 0 0 8 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- 8 radiating rounded petals -->
        ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => `
          <circle cx="16" cy="8.5" r="4" transform="rotate(${deg} 16 16)" fill="${c.primary}" stroke="#FBBF24" stroke-width="0.8" />
        `).join('')}
        <!-- Golden Center -->
        <circle cx="16" cy="16" r="4.5" fill="${c.secondary}" stroke="#D97706" stroke-width="1" />
        <circle cx="14.8" cy="14.8" r="1.2" fill="#FFFFFF" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'ear-of-corn',
    char: '🌽',
    name: 'Ear of Corn',
    unicodeHex: 'U+1F33D',
    category: 'objects-places',
    tags: ['corn', 'maize', 'ear of corn', 'vegetable', 'farm', 'harvest', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#16A34A', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 4c4-2 8 0 8 5l-2 15c-3 3-8 3-10 0z" />
          <path d="M10 24c-3-5-2-12 1-16M18 24c3-5 2-12-1-16" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-30 16 16)">
        <!-- Golden Corn Cob -->
        <rect x="12" y="4" width="8" height="20" rx="4" fill="${c.primary}" stroke="#D97706" stroke-width="1" />
        <!-- Kernel Grid Lines -->
        <path d="M16 4v20M12 9h8M12 14h8M12 19h8" stroke="#D97706" stroke-width="1" />
        <!-- Husk Leaves -->
        <path d="M9 24c-2-7 1-13 4-16 0 7 2 13 5 17z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
        <path d="M23 24c2-7-1-13-4-16 0 7-2 13-5 17z" fill="#22C55E" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'sheaf-of-rice',
    char: '🌾',
    name: 'Sheaf of Rice',
    unicodeHex: 'U+1F33E',
    category: 'weather',
    tags: ['rice', 'sheaf of rice', 'grain', 'wheat', 'harvest', 'cereal', 'nature'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#16A34A', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M10 28c4-8 8-15 14-22" />
          <path d="M24 6l-3 4M21 9l-4 3M17 13l-3 4M14 18l-3 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bending stem -->
        <path d="M10 28c3-8 7-15 13-22" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Grains pairs -->
        ${[
          { x: 22, y: 7 }, { x: 19, y: 11 }, { x: 16, y: 15 }, { x: 13, y: 19 }, { x: 11, y: 23 }
        ].map((pt, i) => `
          <ellipse cx="${pt.x}" cy="${pt.y}" rx="2" ry="3.5" transform="rotate(${25 + i * 8} ${pt.x} ${pt.y})" fill="${c.primary}" stroke="#B45309" stroke-width="0.8" />
          <ellipse cx="${pt.x + 2.5}" cy="${pt.y - 1}" rx="2" ry="3.5" transform="rotate(${-15 + i * 8} ${pt.x + 2.5} ${pt.y - 1})" fill="#FDE047" stroke="#B45309" stroke-width="0.8" />
        `).join('')}
      </g>`;
    },
  },
  {
    id: 'herb',
    char: '🌿',
    name: 'Herb',
    unicodeHex: 'U+1F33F',
    category: 'weather',
    tags: ['herb', 'leaf', 'plant', 'mint', 'basil', 'green', 'cooking'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 27c6-7 10-13 14-20" />
          <path d="M22 7c-3-2-6 0-6 3s3 5 6 3z" />
          <path d="M18 13c-4-2-7 0-6 4s4 4 6 2z" />
          <path d="M19 14c3-2 6 0 6 3s-3 4-6 2z" />
          <path d="M14 20c-4-2-6 1-5 4s4 3 6 1z" />
          <path d="M15 21c3-2 6 0 5 4s-4 3-6 1z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem -->
        <path d="M8 27c6-7 10-13 14-20" stroke="#15803D" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Top Leaf -->
        <path d="M22 7c-3-2-6 0-6 3s3 5 6 3z" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <!-- Paired leaves -->
        <path d="M18 13c-4-2-7 0-6 4s4 4 6 2z" fill="#4ADE80" stroke="#15803D" stroke-width="0.8" />
        <path d="M19 14c3-2 6 0 6 3s-3 4-6 2z" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <path d="M14 20c-4-2-6 1-5 4s4 3 6 1z" fill="#4ADE80" stroke="#15803D" stroke-width="0.8" />
        <path d="M15 21c3-2 6 0 5 4s-4 3-6 1z" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'four-leaf-clover',
    char: '🍀',
    name: 'Four Leaf Clover',
    unicodeHex: 'U+1F340',
    category: 'weather',
    tags: ['clover', 'four leaf clover', 'lucky', 'luck', 'irish', 'nature', 'plant'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 16v9c0 2 2 3 4 3" />
          <path d="M16 16c-3-5-8-5-8 0s5 3 8 0z" />
          <path d="M16 16c-5-3-5-8 0-8s3 5 0 8z" />
          <path d="M16 16c3-5 8-5 8 0s-5 3-8 0z" />
          <path d="M16 16c-5 3-5 8 0 8s3-5 0-8z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem -->
        <path d="M16 16v9c0 2 2 3 4 3" stroke="#15803D" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- 4 Heart leaflets -->
        ${[0, 90, 180, 270].map(deg => `
          <g transform="rotate(${deg} 16 16)">
            <path d="M16 16c-3-5-8-5-8 0s5 4 8 0z" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
            <path d="M16 16c3-5 8-5 8 0s-5 4-8 0z" fill="#4ADE80" stroke="#15803D" stroke-width="0.8" />
          </g>
        `).join('')}
      </g>`;
    },
  },
  {
    id: 'maple-leaf',
    char: '🍁',
    name: 'Maple Leaf',
    unicodeHex: 'U+1F341',
    category: 'weather',
    tags: ['maple', 'leaf', 'autumn', 'fall', 'canada', 'orange', 'red'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', stroke: '#9A3412' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 28v-6" />
          <path d="M16 22c-2-3-6-3-9-1 1-3 1-6-2-8 3 0 5-2 5-5 2 2 4 1 6-2 2 3 4 4 6 2 0 3 2 5 5 5-3 2-3 5-2 8-3-2-7-2-9 1z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem -->
        <path d="M16 28v-7" stroke="#7C2D12" stroke-width="2.2" stroke-linecap="round" />
        <!-- 5-Pointed Maple Leaf -->
        <path d="M16 21c-2-3-6-3-9-1 1-3 1-6-2-8 3 0 5-2 5-5 2 2 4 1 6-2 2 3 4 4 6 2 0 3 2 5 5 5-3 2-3 5-2 8-3-2-7-2-9 1z" fill="${c.primary}" stroke="#9A3412" stroke-width="1" />
        <!-- Leaf Veins -->
        <path d="M16 21V10M16 17L10 13M16 17l6-4" stroke="#DC2626" stroke-width="1.2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'fallen-leaf',
    char: '🍂',
    name: 'Fallen Leaf',
    unicodeHex: 'U+1F342',
    category: 'weather',
    tags: ['fallen leaf', 'leaves', 'autumn', 'fall', 'season', 'nature', 'brown'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#B45309', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7 25c7-2 13-7 17-14-3 5-7 9-14 11z" />
          <path d="M10 17c4-2 9-5 13-11-2 4-5 8-10 10z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Lower Leaf -->
        <path d="M6 26c8-2 14-8 18-15-4 5-9 10-16 12z" fill="${c.secondary}" stroke="#78350F" stroke-width="1" />
        <!-- Upper Leaf -->
        <path d="M11 20c6-3 12-8 16-15-3 5-8 10-14 12z" fill="${c.primary}" stroke="#78350F" stroke-width="1" />
        <path d="M13 18l10-10" stroke="#FDE68A" stroke-width="1" opacity="0.6" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'leaf-fluttering-in-wind',
    char: '🍃',
    name: 'Leaf Fluttering in Wind',
    unicodeHex: 'U+1F343',
    category: 'weather',
    tags: ['leaf in wind', 'fluttering', 'breeze', 'wind', 'nature', 'green', 'spring'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#38BDF8', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M18 10c-5 0-9 4-9 9s6 7 11 4c4-2 5-8 2-11z" />
          <path d="M11 17c5 0 9-3 12-7" />
          <path d="M4 14c4-2 7-1 9 1M4 22c6-1 10-4 13-9" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wind curves -->
        <path d="M4 12c5-2 9-1 12 1" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.8" />
        <path d="M3 21c7-1 12-4 15-10" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.8" />
        <!-- Green fluttering leaf -->
        <path d="M20 9c-5 0-10 4-10 10s6 7 11 4c4-2 5-8 2-12z" fill="${c.primary}" stroke="#15803D" stroke-width="1" />
        <path d="M12 17c4 0 8-3 11-7" stroke="#86EFAC" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'mushroom',
    char: '🍄',
    name: 'Mushroom',
    unicodeHex: 'U+1F344',
    category: 'weather',
    tags: ['mushroom', 'toadstool', 'fungus', 'nature', 'forest', 'red', 'autumn'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FEF08A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M13 18v7c0 2 2 3 3 3s3-1 3-3v-7" />
          <path d="M4 18c0-8 6-13 12-13s12 5 12 13H4z" />
          <circle cx="16" cy="11" r="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem -->
        <path d="M13 17v7c0 2 1.5 3 3 3s3-1 3-3v-7z" fill="${c.secondary}" stroke="#D97706" stroke-width="1" />
        <!-- Red Toadstool Cap -->
        <path d="M4 18c0-8 5.5-13 12-13s12 5 12 13H4z" fill="${c.primary}" stroke="#B91C1C" stroke-width="1.2" />
        <!-- White Spots -->
        <circle cx="16" cy="10" r="2.2" fill="#FFFFFF" />
        <circle cx="9" cy="14" r="1.6" fill="#FFFFFF" />
        <circle cx="23" cy="14" r="1.6" fill="#FFFFFF" />
        <circle cx="15" cy="16" r="1.2" fill="#FFFFFF" />
      </g>`;
    },
  },
];
