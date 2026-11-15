import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const recyclingDiceIcons: WimojiIconDef[] = [
  {
    id: 'universal-recycling-symbol',
    char: '♲',
    name: 'Universal Recycling Symbol',
    unicodeHex: 'U+2672',
    category: 'symbols',
    tags: ['recycle', 'recycling', 'arrows', 'green', 'eco', 'environment', 'reuse', '♲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h6l2-3.5" />
        <path d="M23 16l-3.5 6 3 5 4-7" />
        <path d="M12 24H5l3.5-6h7" />
      </g>`;
    },
  },
  {
    id: 'recycling-symbol-pete',
    char: '♳',
    name: 'Recycling Symbol for Type-1 Plastics',
    unicodeHex: 'U+2673',
    category: 'warnings',
    tags: ['recycle', 'pete', 'pet', 'plastic', '1', 'eco', 'type-1', '♳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h6l2-3.5" />
        <path d="M23 16l-3.5 6 3 5 4-7" />
        <path d="M12 24H5l3.5-6h7" />
        <!-- Digit 1 -->
        <path d="M15 15l1-1v6 M14 20h4" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'recycling-symbol-hdpe',
    char: '♴',
    name: 'Recycling Symbol for Type-2 Plastics',
    unicodeHex: 'U+2674',
    category: 'warnings',
    tags: ['recycle', 'hdpe', 'plastic', '2', 'eco', 'type-2', '♴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h6l2-3.5" />
        <path d="M23 16l-3.5 6 3 5 4-7" />
        <path d="M12 24H5l3.5-6h7" />
        <!-- Digit 2 -->
        <path d="M14 15.5a1.8 1.8 0 0 1 3.2.8c0 1.2-1.8 2-3.2 2.7h3.8" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'recycling-symbol-pvc',
    char: '♵',
    name: 'Recycling Symbol for Type-3 Plastics',
    unicodeHex: 'U+2675',
    category: 'warnings',
    tags: ['recycle', 'pvc', 'plastic', '3', 'eco', 'type-3', '♵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h6l2-3.5" />
        <path d="M23 16l-3.5 6 3 5 4-7" />
        <path d="M12 24H5l3.5-6h7" />
        <!-- Digit 3 -->
        <path d="M14 15a1.5 1.5 0 0 1 2.5 0c0 .8-.8 1.2-1.3 1.2 1 0 1.5.5 1.5 1.4a1.5 1.5 0 0 1-2.7.4" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'recycling-symbol-ldpe',
    char: '♶',
    name: 'Recycling Symbol for Type-4 Plastics',
    unicodeHex: 'U+2676',
    category: 'warnings',
    tags: ['recycle', 'ldpe', 'plastic', '4', 'eco', 'type-4', '♶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h6l2-3.5" />
        <path d="M23 16l-3.5 6 3 5 4-7" />
        <path d="M12 24H5l3.5-6h7" />
        <!-- Digit 4 -->
        <path d="M17 19.5v-5l-3.5 3.5h4.5" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'recycling-symbol-pp',
    char: '♷',
    name: 'Recycling Symbol for Type-5 Plastics',
    unicodeHex: 'U+2677',
    category: 'warnings',
    tags: ['recycle', 'pp', 'polypropylene', 'plastic', '5', 'eco', 'type-5', '♷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h6l2-3.5" />
        <path d="M23 16l-3.5 6 3 5 4-7" />
        <path d="M12 24H5l3.5-6h7" />
        <!-- Digit 5 -->
        <path d="M17.5 15h-3.2v2a1.8 1.8 0 0 1 2.5 0 1.6 1.6 0 0 1-2.8 1.4" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'recycling-symbol-ps',
    char: '♸',
    name: 'Recycling Symbol for Type-6 Plastics',
    unicodeHex: 'U+2678',
    category: 'warnings',
    tags: ['recycle', 'ps', 'polystyrene', 'plastic', '6', 'eco', 'type-6', '♸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h6l2-3.5" />
        <path d="M23 16l-3.5 6 3 5 4-7" />
        <path d="M12 24H5l3.5-6h7" />
        <!-- Digit 6 -->
        <path d="M17 15c-2 0-3 1.5-3 3.5a1.8 1.8 0 1 1 3.5.5c0 1.2-.8 2-2 2" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'recycling-symbol-other',
    char: '♹',
    name: 'Recycling Symbol for Type-7 Plastics',
    unicodeHex: 'U+2679',
    category: 'warnings',
    tags: ['recycle', 'other', 'plastic', '7', 'eco', 'type-7', '♹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h6l2-3.5" />
        <path d="M23 16l-3.5 6 3 5 4-7" />
        <path d="M12 24H5l3.5-6h7" />
        <!-- Digit 7 -->
        <path d="M14 15h4l-2.5 5.5" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'recycling-generic-material',
    char: '♺',
    name: 'Recycling Generic Material',
    unicodeHex: 'U+267A',
    category: 'warnings',
    tags: ['recycle', 'generic', 'material', 'eco', 'reuse', 'environment', '♺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 5l-3 5h5l2-2.5" />
        <path d="M22 16l-2.5 5 2.5 4 3.5-5.5" />
        <path d="M12 23H6l3-5h6" />
      </g>`;
    },
  },
  {
    id: 'paper-recycling-symbol',
    char: '♼',
    name: 'Paper Recycling Symbol',
    unicodeHex: 'U+267C',
    category: 'warnings',
    tags: ['recycle', 'paper', 'cardboard', 'eco', 'reuse', '♼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4l-4 7h7" />
        <path d="M23 16l-3.5 6 3 5" />
        <path d="M12 24H5l3.5-6" />
      </g>`;
    },
  },
  {
    id: 'partially-recycled-paper-symbol',
    char: '♽',
    name: 'Partially Recycled Paper Symbol',
    unicodeHex: 'U+267D',
    category: 'warnings',
    tags: ['recycle', 'partially recycled', 'paper', 'circle', 'eco', '♽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 1.8}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8l-3 5h5" />
        <path d="M21 16l-2.5 4 2 3.5" />
        <path d="M13 21H8l2.5-4" />
      </g>`;
    },
  },
  {
    id: 'die-face-1',
    char: '⚀',
    name: 'Die Face-1',
    unicodeHex: 'U+2680',
    category: 'shapes-suits',
    tags: ['dice', 'die', 'game', 'one', 'dot', 'cube', 'roll', 'random', '⚀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="4" />
          <circle cx="16" cy="16" r="2.5" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="16" cy="16" r="2.8" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'die-face-2',
    char: '⚁',
    name: 'Die Face-2',
    unicodeHex: 'U+2681',
    category: 'shapes-suits',
    tags: ['dice', 'die', 'game', 'two', 'dots', 'cube', 'roll', '⚁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="4" />
          <circle cx="11" cy="11" r="2" fill="${c.stroke}" />
          <circle cx="21" cy="21" r="2" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="11" cy="11" r="2" fill="${c.secondary}" />
        <circle cx="21" cy="21" r="2" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'die-face-3',
    char: '⚂',
    name: 'Die Face-3',
    unicodeHex: 'U+2682',
    category: 'shapes-suits',
    tags: ['dice', 'die', 'game', 'three', 'dots', 'cube', 'roll', '⚂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="4" />
          <circle cx="11" cy="11" r="1.8" fill="${c.stroke}" />
          <circle cx="16" cy="16" r="1.8" fill="${c.stroke}" />
          <circle cx="21" cy="21" r="1.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="11" cy="11" r="2" fill="${c.secondary}" />
        <circle cx="16" cy="16" r="2" fill="${c.secondary}" />
        <circle cx="21" cy="21" r="2" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'die-face-4',
    char: '⚃',
    name: 'Die Face-4',
    unicodeHex: 'U+2683',
    category: 'shapes-suits',
    tags: ['dice', 'die', 'game', 'four', 'dots', 'cube', 'roll', '⚃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="4" />
          <circle cx="11" cy="11" r="1.8" fill="${c.stroke}" />
          <circle cx="21" cy="11" r="1.8" fill="${c.stroke}" />
          <circle cx="11" cy="21" r="1.8" fill="${c.stroke}" />
          <circle cx="21" cy="21" r="1.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="11" cy="11" r="2" fill="${c.secondary}" />
        <circle cx="21" cy="11" r="2" fill="${c.secondary}" />
        <circle cx="11" cy="21" r="2" fill="${c.secondary}" />
        <circle cx="21" cy="21" r="2" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'die-face-5',
    char: '⚄',
    name: 'Die Face-5',
    unicodeHex: 'U+2684',
    category: 'shapes-suits',
    tags: ['dice', 'die', 'game', 'five', 'dots', 'cube', 'roll', '⚄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="4" />
          <circle cx="11" cy="11" r="1.8" fill="${c.stroke}" />
          <circle cx="21" cy="11" r="1.8" fill="${c.stroke}" />
          <circle cx="16" cy="16" r="1.8" fill="${c.stroke}" />
          <circle cx="11" cy="21" r="1.8" fill="${c.stroke}" />
          <circle cx="21" cy="21" r="1.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="11" cy="11" r="2" fill="${c.secondary}" />
        <circle cx="21" cy="11" r="2" fill="${c.secondary}" />
        <circle cx="16" cy="16" r="2" fill="${c.secondary}" />
        <circle cx="11" cy="21" r="2" fill="${c.secondary}" />
        <circle cx="21" cy="21" r="2" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'die-face-6',
    char: '⚅',
    name: 'Die Face-6',
    unicodeHex: 'U+2685',
    category: 'shapes-suits',
    tags: ['dice', 'die', 'game', 'six', 'dots', 'cube', 'roll', '⚅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="4" />
          <circle cx="11" cy="10" r="1.8" fill="${c.stroke}" />
          <circle cx="21" cy="10" r="1.8" fill="${c.stroke}" />
          <circle cx="11" cy="16" r="1.8" fill="${c.stroke}" />
          <circle cx="21" cy="16" r="1.8" fill="${c.stroke}" />
          <circle cx="11" cy="22" r="1.8" fill="${c.stroke}" />
          <circle cx="21" cy="22" r="1.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="11" cy="10" r="1.8" fill="${c.secondary}" />
        <circle cx="21" cy="10" r="1.8" fill="${c.secondary}" />
        <circle cx="11" cy="16" r="1.8" fill="${c.secondary}" />
        <circle cx="21" cy="16" r="1.8" fill="${c.secondary}" />
        <circle cx="11" cy="22" r="1.8" fill="${c.secondary}" />
        <circle cx="21" cy="22" r="1.8" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'white-circle-with-dot-inside',
    char: '⚆',
    name: 'White Circle with Dot Inside',
    unicodeHex: 'U+2686',
    category: 'shapes-suits',
    tags: ['circle', 'dot', 'target', 'go stone', 'board game', 'bullseye', '⚆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="2.5" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="16" cy="16" r="3" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'white-circle-with-two-dots',
    char: '⚇',
    name: 'White Circle with Two Dots',
    unicodeHex: 'U+2687',
    category: 'shapes-suits',
    tags: ['circle', 'two dots', 'eyes', 'go stone', 'board game', '⚇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <circle cx="12" cy="16" r="1.8" fill="${c.stroke}" />
          <circle cx="20" cy="16" r="1.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="12" cy="16" r="2" fill="${c.stroke}" />
        <circle cx="20" cy="16" r="2" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'black-circle-with-white-dot',
    char: '⚈',
    name: 'Black Circle with White Dot',
    unicodeHex: 'U+2688',
    category: 'shapes-suits',
    tags: ['circle', 'black circle', 'dot', 'go stone', 'board game', '⚈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" stroke="none" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11.5" fill="${c.primary}" />
        <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'black-circle-with-two-white-dots',
    char: '⚉',
    name: 'Black Circle with Two White Dots',
    unicodeHex: 'U+2689',
    category: 'shapes-suits',
    tags: ['circle', 'black circle', 'two dots', 'go stone', 'board game', '⚉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <circle cx="16" cy="16" r="11" />
          <circle cx="12" cy="16" r="1.8" fill="#FFFFFF" stroke="none" />
          <circle cx="20" cy="16" r="1.8" fill="#FFFFFF" stroke="none" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11.5" fill="${c.primary}" />
        <circle cx="12" cy="16" r="1.8" fill="#FFFFFF" />
        <circle cx="20" cy="16" r="1.8" fill="#FFFFFF" />
      </g>`;
    },
  },
];
