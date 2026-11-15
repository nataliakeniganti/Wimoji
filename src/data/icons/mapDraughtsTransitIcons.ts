import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const mapDraughtsTransitIcons: WimojiIconDef[] = [
  {
    id: 'white-draughts-man',
    char: '⛀',
    name: 'White Draughts Man',
    unicodeHex: 'U+26C0',
    category: 'shapes-suits',
    tags: ['checkers', 'draughts', 'man', 'game', 'piece', 'stone', 'white', '⛀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="7.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="16" cy="16" r="7.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'white-draughts-king',
    char: '⛁',
    name: 'White Draughts King',
    unicodeHex: 'U+26C1',
    category: 'shapes-suits',
    tags: ['checkers', 'draughts', 'king', 'crowned', 'game', 'piece', 'white', '⛁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="7.5" />
          <polygon points="16,11 18,17 14,17" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="16" cy="16" r="7.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M12 18l1.5-5 2.5 3 2.5-3 1.5 5H12z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'black-draughts-man',
    char: '⛂',
    name: 'Black Draughts Man',
    unicodeHex: 'U+26C2',
    category: 'shapes-suits',
    tags: ['checkers', 'draughts', 'man', 'game', 'piece', 'stone', 'black', 'dark', '⛂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="7.5" fill="none" stroke="#FFFFFF" stroke-width="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11" fill="${c.primary}" />
        <circle cx="16" cy="16" r="7.5" fill="${c.primary}" stroke="#475569" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'black-draughts-king',
    char: '⛃',
    name: 'Black Draughts King',
    unicodeHex: 'U+26C3',
    category: 'shapes-suits',
    tags: ['checkers', 'draughts', 'king', 'crowned', 'game', 'piece', 'black', 'dark', '⛃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="7.5" fill="none" stroke="#FFFFFF" stroke-width="1.5" />
          <polygon points="16,11 18,17 14,17" fill="#FFFFFF" stroke="none" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11" fill="${c.primary}" />
        <circle cx="16" cy="16" r="7.5" fill="${c.primary}" stroke="#475569" stroke-width="1.5" />
        <path d="M12 18l1.5-5 2.5 3 2.5-3 1.5 5H12z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'turned-white-shogi-piece',
    char: '⛉',
    name: 'Turned White Shogi Piece',
    unicodeHex: 'U+26C9',
    category: 'shapes-suits',
    tags: ['turned white shogi piece', 'white shogi piece', 'shogi', 'piece', 'japanese chess', 'game', 'board', 'turned', 'upside down', 'white', '⛉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,28 7,21 9,3 23,3 25,21" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,28 7,21 9,3 23,3 25,21" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'turned-black-shogi-piece',
    char: '⛊',
    name: 'Turned Black Shogi Piece',
    unicodeHex: 'U+26CA',
    category: 'shapes-suits',
    tags: ['turned black shogi piece', 'black shogi piece', 'shogi', 'piece', 'japanese chess', 'game', 'board', 'turned', 'upside down', 'black', '⛊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <polygon points="16,28 7,21 9,3 23,3 25,21" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,28 7,21 9,3 23,3 25,21" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'white-diamond-in-square',
    char: '⛋',
    name: 'White Diamond in Square',
    unicodeHex: 'U+26CB',
    category: 'shapes-suits',
    tags: ['diamond', 'square', 'hov', 'carpool', 'lane', 'geometric', 'shape', '⛋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="3" />
          <polygon points="16,8 24,16 16,24 8,16" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="3" fill="${c.stroke}" />
        <polygon points="16,8 24,16 16,24 8,16" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'crossing-lanes',
    char: '⛌',
    name: 'Crossing Lanes',
    unicodeHex: 'U+26CC',
    category: 'warnings',
    tags: ['crossing', 'intersection', 'crossroad', 'traffic', 'lanes', 'road', 'sign', '⛌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="7" y1="7" x2="25" y2="25" />
        <line x1="25" y1="7" x2="7" y2="25" />
      </g>`;
    },
  },
  {
    id: 'disabled-car',
    char: '⛍',
    name: 'Disabled Car',
    unicodeHex: 'U+26CD',
    category: 'sports-travel',
    tags: ['car', 'breakdown', 'disabled', 'traffic', 'accident', 'tow', 'vehicle', '⛍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 18l3-7h11l4 7v5H5v-5z" />
          <circle cx="9" cy="23" r="2.5" />
          <circle cx="19" cy="23" r="2.5" />
          <line x1="13" y1="5" x2="19" y2="11" />
          <line x1="19" y1="5" x2="13" y2="11" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 18l3-7h11l4 7v5H5v-5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="9" cy="23" r="2.8" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="19" cy="23" r="2.8" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <line x1="13" y1="5" x2="19" y2="11" stroke="#EF4444" stroke-width="2.5" />
        <line x1="19" y1="5" x2="13" y2="11" stroke="#EF4444" stroke-width="2.5" />
      </g>`;
    },
  },
  {
    id: 'car-sliding',
    char: '⛐',
    name: 'Car Sliding',
    unicodeHex: 'U+26D0',
    category: 'warnings',
    tags: ['slippery', 'car sliding', 'skid', 'ice', 'snow', 'traffic', 'hazard', 'road', '⛐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tilted Car -->
          <g transform="rotate(-15 16 14)">
            <path d="M7 16l3-6h8l3 6v4H7v-4z" />
            <circle cx="10" cy="20" r="2" />
            <circle cx="18" cy="20" r="2" />
          </g>
          <!-- Skid Marks -->
          <path d="M6 26c4-3 7-1 11-4s7-1 10-3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <g transform="rotate(-15 16 14)">
          <path d="M7 16l3-6h8l3 6v4H7v-4z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
          <circle cx="10" cy="20" r="2.2" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
          <circle cx="18" cy="20" r="2.2" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        </g>
        <path d="M6 26c4-3 7-1 11-4s7-1 10-3" stroke="${c.stroke}" stroke-width="2" fill="none" />
      </g>`;
    },
  },
  {
    id: 'circled-crossing-lanes',
    char: '⛒',
    name: 'Circled Crossing Lanes',
    unicodeHex: 'U+26D2',
    category: 'warnings',
    tags: ['crossing', 'prohibited', 'no entry', 'circle x', 'danger', 'stop', '⛒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <line x1="9" y1="9" x2="23" y2="23" />
          <line x1="23" y1="9" x2="9" y2="23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <line x1="9" y1="9" x2="23" y2="23" stroke="#FFFFFF" stroke-width="3" />
        <line x1="23" y1="9" x2="9" y2="23" stroke="#FFFFFF" stroke-width="3" />
      </g>`;
    },
  },
  {
    id: 'alternate-one-way-left',
    char: '⛕',
    name: 'Alternate One-Way Left Way Traffic',
    unicodeHex: 'U+26D5',
    category: 'warnings',
    tags: ['alternate one-way left way traffic', 'single-lane alternating traffic', 'alternate one-way', 'traffic', 'sign', 'road', 'arrows', '⛕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#29B6E8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const width = opts.style === 'outline' ? opts.strokeWidth : 2.6;
      return `${badge}<g stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Two-way vertical arrow -->
        <path d="M13.5 3.5V30.3" />
        <path d="M10.2 6.8L13.5 3.5L16.8 6.8" />
        <path d="M10.2 27L13.5 30.3L16.8 27" />
        <!-- Branch up -->
        <path d="M14 13.6C20 13.4 24 11 24 4.5" />
        <path d="M20.4 6.8L24 3.5L27.3 7.4" />
        <!-- Branch down -->
        <path d="M14 19H21C26 19 27.2 22.2 25.8 25.4L23.6 28.8" />
        <path d="M21 25.8L23.6 29L27.3 25.8" />
      </g>`;
    },
  },
  {
    id: 'black-two-way-left-way-traffic',
    char: '⛖',
    name: 'Black Two-Way Left Way Traffic',
    unicodeHex: 'U+26D6',
    category: 'warnings',
    tags: ['black two-way left way traffic', 'two-way traffic', 'oncoming traffic', 'warning sign', 'road sign', 'traffic', 'arrows', '⛖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4.5 27.5,16 16,27.5 4.5,16" />
          <path d="M11.5 21.5V13" />
          <path d="M9 13.5L11.5 10L14 13.5" />
          <path d="M20.5 10.5v8.5" />
          <path d="M18 18.5L20.5 22L23 18.5" />
        </g>`;
      }
      if (opts.style === 'silhouette') {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <path fill="${c.primary}" fill-rule="evenodd" d="M16 4.5L27.5 16L16 27.5L4.5 16Z M10.25 21.5v-7.5H8l3.5-4.5 3.5 4.5h-2.25v7.5z M19.25 10.5v7.5H17l3.5 4.5 3.5-4.5h-2.25v-7.5z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,4.5 27.5,16 16,27.5 4.5,16" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
        <path d="M10.25 21.5v-7.5H8l3.5-4.5 3.5 4.5h-2.25v7.5z" fill="${c.stroke}" />
        <path d="M19.25 10.5v7.5H17l3.5 4.5 3.5-4.5h-2.25v-7.5z" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'white-two-way-left-way-traffic',
    char: '⛗',
    name: 'White Two-Way Left Way Traffic',
    unicodeHex: 'U+26D7',
    category: 'warnings',
    tags: ['white two-way left way traffic', 'two-way traffic', 'oncoming traffic', 'warning sign', 'road sign', 'traffic', 'arrows', '⛗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4.5 27.5,16 16,27.5 4.5,16" />
          <path d="M11.5 21.5V13" />
          <path d="M9 13.5L11.5 10L14 13.5" />
          <path d="M20.5 10.5v8.5" />
          <path d="M18 18.5L20.5 22L23 18.5" />
        </g>`;
      }
      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.stroke}" stroke-linecap="round" stroke-linejoin="round">
          <path fill-rule="evenodd" d="M16 4.5L27.5 16L16 27.5L4.5 16Z M16 6.6L25.4 16L16 25.4L6.6 16Z" />
          <path d="M10.25 21.5v-7.5H8l3.5-4.5 3.5 4.5h-2.25v7.5z" />
          <path d="M19.25 10.5v7.5H17l3.5 4.5 3.5-4.5h-2.25v-7.5z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,4.5 27.5,16 16,27.5 4.5,16" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
        <path d="M10.25 21.5v-7.5H8l3.5-4.5 3.5 4.5h-2.25v7.5z" fill="${c.stroke}" />
        <path d="M19.25 10.5v7.5H17l3.5 4.5 3.5-4.5h-2.25v-7.5z" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'black-left-lane-merge',
    char: '⛘',
    name: 'Black Left Lane Merge',
    unicodeHex: 'U+26D8',
    category: 'warnings',
    tags: ['black left lane merge', 'left lane merge', 'lane merge', 'traffic', 'sign', 'road', 'merge', 'warning', '⛘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4.5 27.5,16 16,27.5 4.5,16" />
          <path d="M19 22V10" />
          <path d="M16.5 13.5L19 10L21.5 13.5" />
          <path d="M11.5 22v-3.5c0-3 2.5-4.5 5.5-5.5" />
        </g>`;
      }
      if (opts.style === 'silhouette') {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <path fill="${c.primary}" fill-rule="evenodd" d="M16 4.5L27.5 16L16 27.5L4.5 16Z M17.5 22v-9.5h-2l3.5-4.5 3.5 4.5h-2V22z M11 22v-3.5c0-2.8 2.2-4.2 4.8-5.2l.8 1.8c-2 .8-3.6 1.8-3.6 3.4V22z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,4.5 27.5,16 16,27.5 4.5,16" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
        <path d="M17.5 22v-9.5h-2l3.5-4.5 3.5 4.5h-2V22z" fill="${c.stroke}" />
        <path d="M10 22v-3.5c0-3.5 2.8-5.2 6.5-6.5l.8 2.2c-2.8.9-4.8 2-4.8 4.3V22z" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'white-left-lane-merge',
    char: '⛙',
    name: 'White Left Lane Merge',
    unicodeHex: 'U+26D9',
    category: 'warnings',
    tags: ['white left lane merge', 'left lane merge', 'lane merge', 'traffic', 'sign', 'road', 'hollow', 'white', '⛙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4.5 27.5,16 16,27.5 4.5,16" />
          <path d="M19 22V10" />
          <path d="M16.5 13.5L19 10L21.5 13.5" />
          <path d="M11.5 22v-3.5c0-3 2.5-4.5 5.5-5.5" stroke-dasharray="2,2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,4.5 27.5,16 16,27.5 4.5,16" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
        <path d="M19 22V10" stroke="${c.stroke}" stroke-width="2" stroke-linecap="round" />
        <path d="M16.5 13.5L19 10L21.5 13.5" stroke="${c.stroke}" stroke-width="2" fill="none" />
        <path d="M11.5 22v-3.5c0-3 2.5-4.5 5.5-5.5" stroke="${c.stroke}" stroke-width="2" stroke-dasharray="2,2" fill="none" />
      </g>`;
    },
  },
  {
    id: 'drive-slow-sign',
    char: '⛚',
    name: 'Drive Slow Sign',
    unicodeHex: 'U+26DA',
    category: 'warnings',
    tags: ['drive slow sign', 'drive slow', 'slow', 'caution', 'warning sign', 'traffic', 'road', 'japanese traffic sign', '⛚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="4.5,6.5 27.5,6.5 16,26.5" />
          <polygon points="8,8.5 24,8.5 16,22.5" />
          <line x1="16" y1="11" x2="16" y2="17" />
          <circle cx="16" cy="19.5" r="0.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="4.5,6.5 27.5,6.5 16,26.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <polygon points="8,8.5 24,8.5 16,22.5" fill="${c.secondary}" />
        <line x1="16" y1="11" x2="16" y2="17" stroke="${c.primary}" stroke-width="2.2" />
        <circle cx="16" cy="19.5" r="1.1" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'heavy-white-down-pointing-triangle',
    char: '⛛',
    name: 'Heavy White Down-Pointing Triangle',
    unicodeHex: 'U+26DB',
    category: 'warnings',
    tags: ['heavy white down-pointing triangle', 'down triangle', 'triangle', 'drive slow', 'inverted triangle', 'white', '⛛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="4.5,6.5 27.5,6.5 16,26.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="4.5,6.5 27.5,6.5 16,26.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="2.6" />
      </g>`;
    },
  },
  {
    id: 'left-closed-entry',
    char: '⛜',
    name: 'Left Closed Entry',
    unicodeHex: 'U+26DC',
    category: 'warnings',
    tags: ['left closed entry', 'entry closed', 'closed ramp', 'road', 'traffic', 'sign', 'barrier', '⛜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" />
          <path d="M19 22V9" />
          <path d="M16.5 12L19 8.5L21.5 12" />
          <path d="M12 22V15" />
          <line x1="9.5" y1="13.5" x2="14.5" y2="13.5" stroke-width="${opts.strokeWidth + 0.8}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <path d="M18 22v-9.5h-2l3-4 3 4h-2V22z" fill="${c.stroke}" />
        <path d="M11 22v-7h2v7z" fill="${c.stroke}" />
        <rect x="8.5" y="13" width="7" height="2.5" rx="0.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'squared-saltire',
    char: '⛝',
    name: 'Squared Saltire',
    unicodeHex: 'U+26DD',
    category: 'warnings',
    tags: ['squared saltire', 'closed entry', 'saltire', 'square', 'cross', 'x', 'barrier', 'forbidden', '⛝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" />
          <line x1="9" y1="9" x2="23" y2="23" stroke-width="${opts.strokeWidth + 0.6}" />
          <line x1="23" y1="9" x2="9" y2="23" stroke-width="${opts.strokeWidth + 0.6}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="9.5" y1="9.5" x2="22.5" y2="22.5" stroke="${c.secondary}" stroke-width="3" />
        <line x1="22.5" y1="9.5" x2="9.5" y2="22.5" stroke="${c.secondary}" stroke-width="3" />
      </g>`;
    },
  },
  {
    id: 'falling-diagonal-white-circle-black-square',
    char: '⛞',
    name: 'Falling Diagonal in White Circle in Black Square',
    unicodeHex: 'U+26DE',
    category: 'warnings',
    tags: ['falling diagonal in white circle in black square', 'closed to large vehicles', 'no trucks', 'restriction', 'sign', 'diagonal', '⛞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#FFFFFF', fillAccent: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" />
          <circle cx="16" cy="16" r="8" />
          <line x1="10.5" y1="10.5" x2="21.5" y2="21.5" stroke-width="${opts.strokeWidth + 0.5}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" fill="${c.primary}" />
        <circle cx="16" cy="16" r="8.5" fill="${c.secondary}" />
        <line x1="10" y1="10" x2="22" y2="22" stroke="${c.accent}" stroke-width="2.6" />
      </g>`;
    },
  },
  {
    id: 'black-truck',
    char: '⛟',
    name: 'Black Truck',
    unicodeHex: 'U+26DF',
    category: 'transport-maps',
    tags: ['black truck', 'truck', 'lorry', 'cargo', 'delivery', 'vehicle', 'transport', 'closed to large vehicles', '⛟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 10h14v11H4z" />
          <path d="M18 13h5l3 4v4h-8z" />
          <circle cx="9" cy="22" r="2.5" />
          <circle cx="21" cy="22" r="2.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 10h14v11H4z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M18 13h5.5l3 3.8v4.2h-8.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M19 14.5h3.5l2 2.5h-5.5z" fill="${c.secondary}" opacity="0.8" />
        <circle cx="9" cy="22" r="2.8" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.4" />
        <circle cx="21.5" cy="22" r="2.8" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'restricted-left-entry-1',
    char: '⛠',
    name: 'Restricted Left Entry-1',
    unicodeHex: 'U+26E0',
    category: 'warnings',
    tags: ['restricted left entry-1', 'restricted left entry', 'lane restriction', 'traffic', 'sign', 'road', '⛠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" />
          <line x1="16" y1="5" x2="16" y2="27" stroke-dasharray="2,2" />
          <path d="M21.5 22V10" />
          <path d="M19 13.5L21.5 10L24 13.5" />
          <line x1="7" y1="12" x2="13" y2="18" />
          <line x1="7" y1="16" x2="13" y2="22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <line x1="16" y1="5" x2="16" y2="27" stroke="${c.stroke}" stroke-width="1.2" stroke-dasharray="2,2" opacity="0.6" />
        <path d="M20.5 22v-8.5h-2l3-4 3 4h-2V22z" fill="${c.stroke}" />
        <line x1="7" y1="12" x2="13" y2="18" stroke="${c.stroke}" stroke-width="2" />
        <line x1="7" y1="16" x2="13" y2="22" stroke="${c.stroke}" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'restricted-left-entry-2',
    char: '⛡',
    name: 'Restricted Left Entry-2',
    unicodeHex: 'U+26E1',
    category: 'warnings',
    tags: ['restricted left entry-2', 'restricted left entry', 'lane merge', 'traffic', 'sign', 'road', 'shift', '⛡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" />
          <path d="M10 22v-4c0-3 3-5 7-6V9" />
          <path d="M14.5 12.5L17 9L19.5 12.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4.5" y="4.5" width="23" height="23" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <path d="M9 22v-4c0-3.5 3.5-5.5 7-6.5V9.5h-2l3-4.5 3 4.5h-2v2.5c0 2-2 3.5-5 4.5V22z" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'astronomical-symbol-for-uranus',
    char: '⛢',
    name: 'Astronomical Symbol for Uranus',
    unicodeHex: 'U+26E2',
    category: 'symbols',
    tags: ['astronomical symbol for uranus', 'uranus', 'astronomy', 'planet', 'celestial', 'lalande', 'symbol', '⛢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="19.5" r="6" />
        <circle cx="16" cy="19.5" r="1.5" fill="${stroke}" stroke="none" />
        <line x1="16" y1="13.5" x2="16" y2="5" />
        <path d="M12.5 8.5L16 5L19.5 8.5" />
      </g>`;
    },
  },
  {
    id: 'heavy-circle-with-stroke-and-two-dots-above',
    char: '⛣',
    name: 'Heavy Circle with Stroke and Two Dots Above',
    unicodeHex: 'U+26E3',
    category: 'symbols',
    tags: ['heavy circle with stroke and two dots above', 'public office', 'government', 'japanese map symbol', '官公署', 'map', 'symbol', '⛣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${color}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.4}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="17" r="7" />
        <line x1="16" y1="6" x2="16" y2="27" />
        <circle cx="11" cy="7" r="1.6" fill="${color}" stroke="none" />
        <circle cx="21" cy="7" r="1.6" fill="${color}" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'black-cross-on-shield',
    char: '⛨',
    name: 'Black Cross on Shield',
    unicodeHex: 'U+26E8',
    category: 'symbols',
    tags: ['black cross on shield', 'hospital', 'clinic', 'first aid', 'rescue', 'medical', 'japanese map symbol', '救護所', 'shield', 'cross', '⛨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4l9 3.5v7.5c0 6.5-4.5 11-9 13-4.5-2-9-6.5-9-13V7.5L16 4z" />
          <path d="M14 9h4v4h4v4h-4v4h-4v-4h-4v-4h4z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 4l9 3.5v7.5c0 6.5-4.5 11-9 13-4.5-2-9-6.5-9-13V7.5L16 4z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.5" />
        <path d="M14 9.5h4v3.5h3.5v4H18v3.5h-4v-3.5h-3.5v-4H14z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'japanese-castle-symbol',
    char: '⛫',
    name: 'Castle',
    unicodeHex: 'U+26EB',
    category: 'symbols',
    tags: ['castle', 'japanese castle', 'castle ruins', 'shiro', 'shiroato', 'japanese map symbol', '城跡', 'historic', 'fortress', 'landmark', '⛫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const width = opts.style === 'outline' ? opts.strokeWidth : 2.6;
      const cap = opts.style === 'outline' ? opts.strokeLinecap : 'square';
      const join = opts.style === 'outline' ? opts.strokeLinejoin : 'miter';
      return `${badge}<g stroke="${color}" stroke-width="${width}" stroke-linecap="${cap}" stroke-linejoin="${join}" fill="none">
        <path d="M5.5 26.5V12h5.5V5h10v7h5.5v14.5" />
      </g>`;
    },
  },
  {
    id: 'historic-site',
    char: '⛬',
    name: 'Historic Site',
    unicodeHex: 'U+26EC',
    category: 'symbols',
    tags: ['historic site', 'landmark', 'shiseki', 'cultural property', 'dots', 'triangle', 'japanese map symbol', '史跡', 'monument', '⛬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const fill = opts.style === 'outline' ? 'none' : color;
      return `${badge}<g stroke="${color}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 1}" fill="${fill}">
        <circle cx="16" cy="8.5" r="3.2" />
        <circle cx="9.5" cy="21.5" r="3.2" />
        <circle cx="22.5" cy="21.5" r="3.2" />
      </g>`;
    },
  },
  {
    id: 'square-four-corners',
    char: '⛶',
    name: 'Square Four Corners',
    unicodeHex: 'U+26F6',
    category: 'symbols',
    tags: ['square four corners', 'self-defense force', 'boundary', 'intersection', 'corners', 'brackets', 'square', 'japanese map symbol', '自衛隊', '⛶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M7 13V7h6" />
        <path d="M19 7h6v6" />
        <path d="M25 19v6h-6" />
        <path d="M13 25H7v-6" />
      </g>`;
    },
  },
  {
    id: 'japanese-bank-symbol',
    char: '⛻',
    name: 'Japanese Bank Symbol',
    unicodeHex: 'U+26FB',
    category: 'symbols',
    tags: ['japanese bank symbol', 'bank', 'fundo', 'balance weight', 'ginko', 'japanese map symbol', '銀行', '分銅', 'finance', 'money', '⛻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const d = 'M5 8.5 A 17 17 0 0 1 27 8.5 A 7.9 7.9 0 0 0 27 23.5 A 17 17 0 0 1 5 23.5 A 7.9 7.9 0 0 0 5 8.5 Z';
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 2.4;
      const strokeColor = opts.style === 'outline' ? c.stroke : (opts.style === 'silhouette' ? 'none' : c.primary);
      const fill = (opts.style === 'outline' || opts.style === 'color') ? 'none' : c.primary;
      const fillOpacity = opts.style === 'duotone' ? ` fill-opacity="${c.duotoneOpacity || '0.25'}"` : '';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${d}" fill="${fill}"${fillOpacity} stroke="${strokeColor}" stroke-width="${strokeW}" />
      </g>`;
    },
  },
  {
    id: 'headstone-graveyard-symbol',
    char: '⛼',
    name: 'Headstone Graveyard Symbol',
    unicodeHex: 'U+26FC',
    category: 'symbols',
    tags: ['headstone graveyard symbol', 'graveyard', 'cemetery', 'crescent moon', 'night', 'cross', 'headstone', 'tombstone', 'japanese map symbol', 'arib', '墓地', '⛼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0C4A6E', fillSecondary: '#064E3B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="5" />
          <path d="M8 5.5a3 3 0 1 0 3.2 3.5A2.4 2.4 0 0 1 8 5.5z" />
          <line x1="3" y1="18" x2="29" y2="18" opacity="0.6" />
          <!-- Left headstone with cross -->
          <path d="M9 10.5v3.5M7.5 12h3" />
          <rect x="5.5" y="14" width="6.5" height="11" rx="0.8" />
          <rect x="7" y="16" width="3.5" height="7" rx="0.5" />
          <!-- Center distant headstone -->
          <rect x="14" y="16.5" width="3.5" height="5" rx="0.5" />
          <!-- Right background headstone -->
          <rect x="19" y="11" width="5.5" height="5.5" rx="0.5" />
          <!-- Right foreground stepped headstone -->
          <path d="M21.5 15v-1.5h4V15H27v10h-7V15z" />
          <rect x="21.5" y="17" width="4" height="6.5" rx="0.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="26" height="26" rx="5" fill="${c.primary}" />
          <!-- Moon -->
          <path d="M8 5.5a3 3 0 1 0 3.2 3.5A2.4 2.4 0 0 1 8 5.5z" fill="#FFFFFF" />
          <!-- Distant & foreground headstones -->
          <rect x="19" y="11" width="5.5" height="5.5" rx="0.5" fill="#000000" opacity="0.35" />
          <rect x="14" y="16" width="3.5" height="5.5" rx="0.5" fill="#000000" opacity="0.5" />
          <rect x="5.5" y="14" width="6.5" height="11.5" rx="0.8" fill="#000000" opacity="0.7" />
          <path d="M8.75 10.5h1v3.5h-1zM7.25 11.75h4v1h-4z" fill="#000000" opacity="0.7" />
          <path d="M21.5 15v-1.5h4V15H27v10.5h-7V15z" fill="#000000" opacity="0.7" />
        </g>`;
      }

      if (opts.style === 'duotone') {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="26" height="26" rx="5" fill="${c.primary}" opacity="${c.duotoneOpacity}" />
          <path d="M3 18h26v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" fill="${c.primary}" />
          <path d="M8 5.5a3 3 0 1 0 3.2 3.5A2.4 2.4 0 0 1 8 5.5z" fill="#FFFFFF" />
          <rect x="19" y="11" width="5.5" height="5.5" rx="0.5" fill="${c.stroke}" opacity="0.4" />
          <rect x="14" y="16" width="3.5" height="5.5" rx="0.5" fill="${c.stroke}" opacity="0.6" />
          <rect x="5.5" y="14" width="6.5" height="11.5" rx="0.8" fill="${c.stroke}" />
          <path d="M8.75 10.5h1v3.5h-1zM7.25 11.75h4v1h-4z" fill="${c.stroke}" />
          <path d="M21.5 15v-1.5h4V15H27v10.5h-7V15z" fill="${c.stroke}" />
          <rect x="3" y="3" width="26" height="26" rx="5" fill="none" stroke="${c.stroke}" stroke-width="1.2" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Sky & Ground Badge -->
        <rect x="3" y="3" width="26" height="26" rx="5" fill="#0C4A6E" />
        <path d="M3 18h26v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" fill="#064E3B" />
        <!-- Crescent Moon & Stars in Night Sky -->
        <path d="M8 5.5a3 3 0 1 0 3.2 3.5A2.4 2.4 0 0 1 8 5.5z" fill="#F0FDFA" />
        <circle cx="16" cy="6.5" r="0.4" fill="#F0FDFA" opacity="0.8" />
        <circle cx="25" cy="8.5" r="0.4" fill="#F0FDFA" opacity="0.8" />
        <!-- Distant tombstone right -->
        <rect x="19" y="11" width="5.5" height="5.5" rx="0.5" fill="#064E3B" stroke="#022C22" stroke-width="0.8" />
        <!-- Distant tombstone center -->
        <rect x="14" y="16" width="3.5" height="5.5" rx="0.5" fill="#042F2E" stroke="#022C22" stroke-width="0.8" />
        <!-- Left foreground tombstone with cross -->
        <rect x="5.5" y="14" width="6.5" height="11.5" rx="0.8" fill="#134E4A" stroke="#042F2E" stroke-width="1" />
        <rect x="7" y="16" width="3.5" height="7.5" rx="0.5" fill="#042F2E" />
        <!-- Cross on top of left tombstone -->
        <path d="M8.75 10.5h1v3.5h-1zM7.25 11.75h4v1h-4z" fill="#134E4A" stroke="#042F2E" stroke-width="0.8" />
        <!-- Right foreground stepped tombstone -->
        <path d="M21.5 15v-1.5h4V15H27v10.5h-7V15z" fill="#134E4A" stroke="#042F2E" stroke-width="1" />
        <rect x="21.5" y="17" width="4" height="6.5" rx="0.5" fill="#042F2E" />
        <!-- Tile Border -->
        <rect x="3" y="3" width="26" height="26" rx="5" fill="none" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'pentagram',
    char: '⛤',
    name: 'Pentagram',
    unicodeHex: 'U+26E4',
    category: 'symbols',
    tags: ['pentagram', 'pentalpha', 'pentangle', 'star', 'five-pointed star', 'morocco', 'pagan', 'magic', '⛤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 1.8;
      return `${badge}<g stroke="${color}" stroke-width="${strokeW}" stroke-linejoin="round" stroke-linecap="round" fill="none">
        <path d="M16 3.5 L23.5 27 L4.5 12.5 L27.5 12.5 L8.5 27 Z" />
      </g>`;
    },
  },
  {
    id: 'right-handed-interlaced-pentagram',
    char: '⛥',
    name: 'Right-Handed Interlaced Pentagram',
    unicodeHex: 'U+26E5',
    category: 'symbols',
    tags: ['right-handed interlaced pentagram', 'interlaced pentagram', 'pentagram', 'star', 'morocco', 'knot', '⛥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 1.8;
      return `${badge}<g stroke="${color}" stroke-width="${strokeW}" stroke-linejoin="round" stroke-linecap="round" fill="none">
        <path d="M16 3.5 L23.5 27 M22.5 24 L4.5 12.5 M7.5 12.5 L27.5 12.5 M25 14 L8.5 27 M10 24.5 L16 3.5" />
      </g>`;
    },
  },
  {
    id: 'left-handed-interlaced-pentagram',
    char: '⛦',
    name: 'Left-Handed Interlaced Pentagram',
    unicodeHex: 'U+26E6',
    category: 'symbols',
    tags: ['left-handed interlaced pentagram', 'interlaced pentagram', 'pentagram', 'star', 'ethiopia', 'knot', '⛦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 1.8;
      return `${badge}<g stroke="${color}" stroke-width="${strokeW}" stroke-linejoin="round" stroke-linecap="round" fill="none">
        <path d="M16 3.5 L8.5 27 M9.5 24 L27.5 12.5 M24.5 12.5 L4.5 12.5 M7 14 L23.5 27 M22 24.5 L16 3.5" />
      </g>`;
    },
  },
  {
    id: 'inverted-pentagram',
    char: '⛧',
    name: 'Inverted Pentagram',
    unicodeHex: 'U+26E7',
    category: 'symbols',
    tags: ['inverted pentagram', 'pentagram', 'down star', 'esoteric', 'symbol', 'star', '⛧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 1.8;
      return `${badge}<g stroke="${color}" stroke-width="${strokeW}" stroke-linejoin="round" stroke-linecap="round" fill="none">
        <path d="M16 28.5 L8.5 5 L27.5 19.5 L4.5 19.5 L23.5 5 Z" />
      </g>`;
    },
  },
  {
    id: 'gear-without-hub',
    char: '⛭',
    name: 'Gear Without Hub',
    unicodeHex: 'U+26ED',
    category: 'symbols',
    tags: ['gear without hub', 'factory', 'industrial', 'cogwheel', 'gear', 'japanese map symbol', '工場', '⛭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 2.2;
      return `${badge}<g stroke="${color}" stroke-width="${strokeW}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="16" r="6" />
        <line x1="16" y1="10" x2="16" y2="3.5" />
        <line x1="16" y1="22" x2="16" y2="28.5" />
        <line x1="10" y1="16" x2="3.5" y2="16" />
        <line x1="22" y1="16" x2="28.5" y2="16" />
        <line x1="11.8" y1="11.8" x2="7.2" y2="7.2" />
        <line x1="20.2" y1="11.8" x2="24.8" y2="7.2" />
        <line x1="20.2" y1="20.2" x2="24.8" y2="24.8" />
        <line x1="11.8" y1="20.2" x2="7.2" y2="24.8" />
      </g>`;
    },
  },
  {
    id: 'gear-with-handles',
    char: '⛮',
    name: 'Gear With Handles',
    unicodeHex: 'U+26EE',
    category: 'symbols',
    tags: ['gear with handles', 'power plant', 'substation', 'cogwheel', 'handles', 'japanese map symbol', '発電所', '⛮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 2;
      return `${badge}<g stroke="${color}" stroke-width="${strokeW}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="16" r="6" />
        <line x1="16" y1="10" x2="16" y2="4" />
        <line x1="13.5" y1="4" x2="18.5" y2="4" />
        <line x1="16" y1="22" x2="16" y2="28" />
        <line x1="13.5" y1="28" x2="18.5" y2="28" />
        <line x1="10" y1="16" x2="4" y2="16" />
        <line x1="4" y1="13.5" x2="4" y2="18.5" />
        <line x1="22" y1="16" x2="28" y2="16" />
        <line x1="28" y1="13.5" x2="28" y2="18.5" />
      </g>`;
    },
  },
  {
    id: 'map-symbol-for-lighthouse',
    char: '⛯',
    name: 'Map Symbol for Lighthouse',
    unicodeHex: 'U+26EF',
    category: 'symbols',
    tags: ['map symbol for lighthouse', 'lighthouse', 'beacon', 'light', 'lantern', 'japanese map symbol', '灯台', '⛯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const color = opts.style === 'outline' ? c.stroke : c.primary;
      const strokeW = opts.style === 'outline' ? opts.strokeWidth : 2;
      return `${badge}<g stroke="${color}" stroke-width="${strokeW}" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="4.5" fill="${opts.style === 'outline' ? 'none' : color}" />
        <line x1="16" y1="10.5" x2="16" y2="3.5" />
        <line x1="16" y1="21.5" x2="16" y2="28.5" />
        <line x1="10.5" y1="16" x2="3.5" y2="16" />
        <line x1="21.5" y1="16" x2="28.5" y2="16" />
        <line x1="12.5" y1="12.5" x2="7.5" y2="7.5" />
        <line x1="19.5" y1="12.5" x2="24.5" y2="7.5" />
        <line x1="19.5" y1="19.5" x2="24.5" y2="24.5" />
        <line x1="12.5" y1="19.5" x2="7.5" y2="24.5" />
      </g>`;
    },
  },
  {
    id: 'cup-on-black-square',
    char: '⛾',
    name: 'Cup on Black Square',
    unicodeHex: 'U+26FE',
    category: 'symbols',
    tags: ['cup on black square', 'tea house', 'cafe', 'drive-in', 'coffee', 'teacup', 'japanese map symbol', '喫茶店', '⛾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="3.5" />
          <path d="M10 13h10v5a5 5 0 0 1-10 0z" />
          <path d="M20 14h2.5a2 2 0 0 1 0 4H20" />
          <line x1="8.5" y1="23.5" x2="21.5" y2="23.5" />
          <path d="M13 10.5c0-1.5 1-2 1-3M17 10.5c0-1.5 1-2 1-3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="3.5" fill="${c.primary}" />
        <path d="M10 13h10v5a5 5 0 0 1-10 0z" fill="${c.secondary}" />
        <path d="M20 14h2.5a2 2 0 0 1 0 4H20" stroke="${c.secondary}" stroke-width="1.6" fill="none" />
        <line x1="8.5" y1="23.5" x2="21.5" y2="23.5" stroke="${c.secondary}" stroke-width="2" />
        <path d="M13 10.5c0-1.5 1-2 1-3M17 10.5c0-1.5 1-2 1-3" stroke="${c.secondary}" stroke-width="1.2" fill="none" opacity="0.85" />
      </g>`;
    },
  },
  {
    id: 'white-flag-with-horizontal-middle-black-stripe',
    char: '⛿',
    name: 'White Flag with Horizontal Middle Black Stripe',
    unicodeHex: 'U+26FF',
    category: 'symbols',
    tags: ['white flag with horizontal middle black stripe', 'flag', 'sdf', 'japanese map symbol', '陸上自衛隊', '自衛隊', 'military', '⛿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="6" y1="4" x2="6" y2="28" stroke-width="2" />
          <rect x="6" y="6" width="19" height="13" />
          <line x1="6" y1="12.5" x2="25" y2="12.5" stroke-width="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="6" y1="4" x2="6" y2="28" stroke="${c.stroke}" stroke-width="2" />
        <circle cx="6" cy="4" r="1.2" fill="${c.stroke}" />
        <rect x="6" y="6" width="19" height="13" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="6" y="10.5" width="19" height="4" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'black-safety-scissors',
    char: '✀',
    name: 'Black Safety Scissors',
    unicodeHex: 'U+2700',
    category: 'tools',
    tags: ['black safety scissors', 'safety scissors', 'scissors', 'cut', 'craft', 'school', 'round tips', 'dingbats', '✀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="9.5" cy="22.5" r="3.5" />
          <circle cx="16" cy="24" r="3.5" />
          <path d="M12 20L17 15L25 7a2 2 0 0 1 2.8 2.8L19 16" />
          <path d="M17 15L23 21a2 2 0 0 0 2.8-2.8L17 12" />
          <circle cx="17" cy="15" r="1" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9.5" cy="22.5" r="3.5" fill="none" stroke="${c.primary}" stroke-width="2.2" />
        <circle cx="16" cy="24" r="3.5" fill="none" stroke="${c.primary}" stroke-width="2.2" />
        <path d="M12 20L17 15L25 7a2 2 0 0 1 2.8 2.8L19 16z" fill="${c.primary}" />
        <path d="M17 15L23 21a2 2 0 0 0 2.8-2.8L17 12z" fill="${c.primary}" />
        <circle cx="17" cy="15" r="1.2" fill="#FFFFFF" />
      </g>`;
    },
  },
];
