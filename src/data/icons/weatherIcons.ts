import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const weatherIcons: WimojiIconDef[] = [
  {
    id: 'sun',
    char: '☀',
    name: 'Sun',
    unicodeHex: 'U+2600',
    category: 'weather',
    tags: ['sun', 'sunny', 'weather', 'warm', 'bright', 'summer', 'day'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#FCD34D',
        stroke: '#B45309',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="6" />
          <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M16 4v3.5M16 24.5v3.5M4 16h3.5M24.5 16h3.5M7.5 7.5l2.5 2.5M22 22l2.5 2.5M7.5 24.5l2.5-2.5M22 10l2.5-2.5" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <circle cx="16" cy="16" r="6.5" fill="${c.primary}" />
        <circle cx="14.5" cy="14.5" r="2.5" fill="${c.secondary}" opacity="${c.duotoneOpacity}" />
      </g>`;
    },
  },
  {
    id: 'cloud',
    char: '☁',
    name: 'Cloud',
    unicodeHex: 'U+2601',
    category: 'weather',
    tags: ['cloud', 'weather', 'overcast', 'sky', 'cumulus'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#93C5FD',
        fillSecondary: '#DBEAFE',
        stroke: '#3B82F6',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M9 23h14a6 6 0 0 0 1-11.9A8 8 0 0 0 8.5 13 5.5 5.5 0 0 0 9 23z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none" />`;
      }
      return `${badge}<g>
        <path d="M9 23h14a6 6 0 0 0 1-11.9A8 8 0 0 0 8.5 13 5.5 5.5 0 0 0 9 23z" fill="${c.primary}" />
        <path d="M11 16a6 6 0 0 1 8-4 5 5 0 0 1 3 3" stroke="${c.secondary}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none" opacity="${c.duotoneOpacity}" />
      </g>`;
    },
  },
  {
    id: 'sun-behind-cloud',
    char: '⛅',
    name: 'Sun Behind Cloud',
    unicodeHex: 'U+26C5',
    category: 'weather',
    tags: ['partly cloudy', 'sun', 'cloud', 'weather', 'morning', 'sky'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#93C5FD',
        stroke: '#1E293B',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M12 7a5 5 0 0 1 4.9 4" />
          <path d="M12 4v2M7 9l1.5 1.5M17 9l-1.5 1.5M19 6l-1 2" />
          <path d="M7 24h15a5 5 0 0 0 1-9.9A6.5 6.5 0 0 0 10.5 16 4.5 4.5 0 0 0 7 24z" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="13" cy="11" r="5" fill="${c.primary}" />
        <path d="M13 3v2.5M7 6l1.8 1.8M19 6l-1.8 1.8" stroke="${c.primary}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
        <path d="M7 25h16a5 5 0 0 0 .8-9.9A6.5 6.5 0 0 0 10.5 17 4.5 4.5 0 0 0 7 25z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'cloud-lightning-rain',
    char: '⛈',
    name: 'Thunder Cloud and Rain',
    unicodeHex: 'U+26C8',
    category: 'weather',
    tags: ['storm', 'thunder', 'lightning', 'rain', 'tempest', 'weather'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#64748B',
        fillSecondary: '#EAB308',
        fillAccent: '#38BDF8',
        stroke: '#334155',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M7 17h17a5 5 0 0 0 1-9.9A7 7 0 0 0 9.5 9 4.5 4.5 0 0 0 7 17z" />
          <path d="M15 17l-3 6h4l-2 5 6-7h-4l2-4" />
          <path d="M9 21l-1 3M24 21l-1 3" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M7 17h17a5 5 0 0 0 1-9.9A7 7 0 0 0 9.5 9 4.5 4.5 0 0 0 7 17z" fill="${c.primary}" />
        <path d="M16 16l-3.5 6.5h3.5L14 28l6-7.5h-4l3-4.5z" fill="${c.secondary}" />
        <path d="M9 22l-1.5 3M23 21l-1.5 3" stroke="${c.accent}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'umbrella',
    char: '☂',
    name: 'Umbrella',
    unicodeHex: 'U+2602',
    category: 'weather',
    tags: ['umbrella', 'rain', 'weather', 'shelter', 'accessory'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#8B5CF6',
        fillSecondary: '#C4B5FD',
        stroke: '#6D28D9',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M16 5v3" />
          <path d="M4 17c0-6.6 5.4-12 12-12s12 5.4 12 12c-2-2-4-2-6 0-2-2-4-2-6 0-2-2-4-2-6 0-2-2-4-2-6 0z" />
          <path d="M16 17v7a2.5 2.5 0 0 1-5 0" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M16 4v3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
        <path d="M4 17c0-6.6 5.4-12 12-12s12 5.4 12 12c-2-1.8-4-1.8-6 0-2-1.8-4-1.8-6 0-2-1.8-4-1.8-6 0-2-1.8-4-1.8-6 0z" fill="${c.primary}" />
        <path d="M16 17v7a2.5 2.5 0 0 1-5 0" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'umbrella-with-rain',
    char: '☔',
    name: 'Umbrella with Rain Drops',
    unicodeHex: 'U+2614',
    category: 'weather',
    tags: ['umbrella', 'rain', 'drops', 'weather', 'storm', 'wet'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#3B82F6',
        fillSecondary: '#60A5FA',
        fillAccent: '#93C5FD',
        stroke: '#1D4ED8',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M16 5v3M5 18c0-6 4.9-11 11-11s11 5 11 11c-1.8-1.5-3.6-1.5-5.5 0-1.8-1.5-3.6-1.5-5.5 0-1.8-1.5-3.6-1.5-5.5 0-1.8-1.5-3.6-1.5-5.5 0z" />
          <path d="M16 18v6a2.5 2.5 0 0 1-5 0" />
          <path d="M6 8l-1.5 2.5M10 5l-1.5 2.5M26 8l-1.5 2.5" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M16 5v3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
        <path d="M5 18c0-6 4.9-11 11-11s11 5 11 11c-1.8-1.5-3.6-1.5-5.5 0-1.8-1.5-3.6-1.5-5.5 0-1.8-1.5-3.6-1.5-5.5 0-1.8-1.5-3.6-1.5-5.5 0z" fill="${c.primary}" />
        <path d="M16 18v6a2.5 2.5 0 0 1-5 0" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none" />
        <circle cx="7" cy="8" r="1.2" fill="${c.accent}" />
        <circle cx="25" cy="7" r="1.2" fill="${c.accent}" />
        <circle cx="28" cy="13" r="1.2" fill="${c.accent}" />
      </g>`;
    },
  },
  {
    id: 'snowman',
    char: '☃',
    name: 'Snowman',
    unicodeHex: 'U+2603',
    category: 'weather',
    tags: ['snowman', 'winter', 'snow', 'cold', 'december', 'holiday'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#E2E8F0',
        fillSecondary: '#EF4444',
        fillAccent: '#0F172A',
        stroke: '#475569',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="11" r="5" />
          <circle cx="16" cy="22" r="7" />
          <path d="M9 13l-4-2M23 13l4-2M13 10h.01M19 10h.01M16 12l2 1" />
          <path d="M13 6h6v2h-6z" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="22" r="7" fill="${c.primary}" />
        <circle cx="16" cy="11" r="5" fill="${c.primary}" />
        <path d="M9 14l-4-2M23 14l4-2" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
        <rect x="13" y="5" width="6" height="3" rx="0.5" fill="${c.accent || '#0F172A'}" />
        <path d="M14 14c1 1 3 1 4 0" stroke="${c.secondary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <circle cx="14.5" cy="10" r="0.8" fill="${c.stroke}" />
        <circle cx="17.5" cy="10" r="0.8" fill="${c.stroke}" />
        <circle cx="16" cy="19" r="0.9" fill="${c.secondary}" />
        <circle cx="16" cy="22" r="0.9" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'snowman-no-snow',
    char: '⛄',
    name: 'Snowman Without Snow',
    unicodeHex: 'U+26C4',
    category: 'weather',
    tags: ['snowman', 'winter', 'frosty', 'cold', 'scarf'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F1F5F9',
        fillSecondary: '#DC2626',
        stroke: '#334155',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="11" r="5" />
          <circle cx="16" cy="22" r="7.5" />
          <path d="M13 14h6" />
          <path d="M17 14v4" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="22" r="7.5" fill="${c.primary}" />
        <circle cx="16" cy="11" r="5" fill="${c.primary}" />
        <path d="M12 14h8l-1 4h-2" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <circle cx="14.5" cy="10" r="0.8" fill="${c.stroke}" />
        <circle cx="17.5" cy="10" r="0.8" fill="${c.stroke}" />
        <circle cx="16" cy="20" r="0.8" fill="${c.stroke}" />
        <circle cx="16" cy="23" r="0.8" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'comet',
    char: '☄',
    name: 'Comet',
    unicodeHex: 'U+2604',
    category: 'weather',
    tags: ['comet', 'meteor', 'asteroid', 'space', 'shooting star', 'sky'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#38BDF8',
        fillSecondary: '#F59E0B',
        stroke: '#0284C7',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="22" cy="10" r="4.5" />
          <path d="M18 11L6 20M19 14l-11 9M18 8L7 16" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M18 8L5 18M19 11L4 23M20 14L8 27" stroke="${c.secondary}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" opacity="0.8" />
        <circle cx="21.5" cy="10.5" r="5" fill="${c.primary}" />
        <circle cx="20" cy="9" r="2" fill="#FFFFFF" opacity="0.8" />
      </g>`;
    },
  },
  {
    id: 'meteor',
    char: '🪋',
    name: 'Meteor',
    unicodeHex: 'U+1FA8B',
    category: 'weather',
    tags: ['meteor', 'meteorite', 'fireball', 'shooting star', 'space rock', 'asteroid', 'flame', 'space', 'sky', 'bolide', 'astronomy', '🪋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EA580C',
        fillSecondary: '#F59E0B',
        stroke: '#C2410C',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="21.5" cy="10.5" r="4.5" />
          <path d="M18 8L5 18M19 11L4 23M20 14L8 27" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Fiery Flame Trails -->
        <path d="M18 8L5 18M19 11L4 23M20 14L8 27" stroke="${c.secondary}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" opacity="0.85" />
        <!-- Burning Space Rock / Meteorite Head -->
        <circle cx="21.5" cy="10.5" r="5" fill="${c.primary}" />
        <circle cx="20" cy="9" r="2" fill="${opts.style === 'silhouette' ? c.primary : '#FEF08A'}" opacity="0.9" />
      </g>`;
    },
  },
  {
    id: 'shamrock',
    char: '☘',
    name: 'Shamrock',
    unicodeHex: 'U+2618',
    category: 'weather',
    tags: ['shamrock', 'clover', 'plant', 'nature', 'irish', 'lucky', 'green'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#10B981',
        fillSecondary: '#059669',
        stroke: '#047857',
      });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="9.5" r="4" />
          <circle cx="10.5" cy="17" r="4" />
          <circle cx="21.5" cy="17" r="4" />
          <path d="M16 16v10c0 1-1 2-2 2" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M16 16c0 5-1 9-3 11" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none" />
        <circle cx="16" cy="9.5" r="4.5" fill="${c.primary}" />
        <circle cx="10.5" cy="16.5" r="4.5" fill="${c.primary}" />
        <circle cx="21.5" cy="16.5" r="4.5" fill="${c.primary}" />
        <circle cx="16" cy="15" r="2.5" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'hot-springs',
    char: '♨',
    name: 'Hot Springs',
    unicodeHex: 'U+2668',
    category: 'weather',
    tags: ['hot springs', 'onsen', 'thermal', 'steam', 'warm', 'spa', 'relax'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#F87171',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);
      const stroke = c.stroke === 'none' ? c.primary : c.stroke;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <ellipse cx="16" cy="24" rx="10" ry="3" />
        <path d="M11 18c0-3 2-4 2-7s-2-4-2-7" />
        <path d="M16 18c0-3 2-4 2-7s-2-4-2-7" />
        <path d="M21 18c0-3 2-4 2-7s-2-4-2-7" />
      </g>`;
    },
  },
];
