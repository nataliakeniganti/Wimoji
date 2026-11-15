import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const natureCelestialIcons: WimojiIconDef[] = [
  {
    id: 'rainbow',
    char: '🌈',
    name: 'Rainbow',
    unicodeHex: 'U+1F308',
    category: 'weather',
    tags: ['rainbow', 'nature', 'sky', 'colors', 'pride', 'weather', 'hope'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <path d="M4 26a12 12 0 0 1 24 0" />
          <path d="M7 26a9 9 0 0 1 18 0" />
          <path d="M10 26a6 6 0 0 1 12 0" />
          <path d="M13 26a3 3 0 0 1 6 0" />
        </g>`;
      }
      return `${badge}<g fill="none" stroke-linecap="round">
        <path d="M4 26a12 12 0 0 1 24 0" stroke="#EF4444" stroke-width="2.6" />
        <path d="M6.6 26a9.4 9.4 0 0 1 18.8 0" stroke="#F97316" stroke-width="2.6" />
        <path d="M9.2 26a6.8 6.8 0 0 1 13.6 0" stroke="#FBBF24" stroke-width="2.6" />
        <path d="M11.8 26a4.2 4.2 0 0 1 8.4 0" stroke="#10B981" stroke-width="2.6" />
        <path d="M14.4 26a1.6 1.6 0 0 1 3.2 0" stroke="#3B82F6" stroke-width="2.6" />
      </g>`;
    },
  },
  {
    id: 'bridge-at-night',
    char: '🌉',
    name: 'Bridge at Night',
    unicodeHex: 'U+1F309',
    category: 'weather',
    tags: ['bridge', 'night', 'suspension', 'city', 'evening', 'skyline', 'water'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <path d="M10 8v16M22 8v16M4 14c6 6 12 6 18 0M10 14c6 6 12 6 18 0M4 20h24" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#0B132B" />
        <circle cx="8" cy="8" r="1.5" fill="${c.secondary}" />
        <circle cx="16" cy="7" r="0.8" fill="${c.secondary}" />
        <path d="M10 9v15M22 9v15" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round" />
        <path d="M4 14c6 5 12 5 18 0M10 14c6 5 12 5 18 0" stroke="#94A3B8" stroke-width="1.2" fill="none" />
        <path d="M4 20h24" stroke="#F59E0B" stroke-width="2" />
        <path d="M4 24h24v4H4z" fill="#1D4ED8" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'water-wave',
    char: '🌊',
    name: 'Water Wave',
    unicodeHex: 'U+1F30A',
    category: 'weather',
    tags: ['wave', 'water', 'ocean', 'sea', 'surf', 'tsunami', 'nature', 'blue'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0284C7', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M4 24c4 0 7-3 9-7 2-4 5-8 9-8 2 0 4 1 5 3-1 2-3 3-5 3-3 0-5 3-7 6-2 3-5 3-7 3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none" />`;
      }
      return `${badge}<g>
        <path d="M4 26c4 0 7-3 9-7 2-4 5-8 9-8 3 0 5 2 6 5-1.5 1-3.5 1.5-5 1.5-4 0-6 4-8 7-2 3-5 3-7 3-1 0-3-.5-4-1.5z" fill="${c.primary}" />
        <path d="M22 11c1-1 3-1 5 1-1.5 2-3 3-5 3s-3-2 0-4z" fill="#F8FAFC" />
        <path d="M4 27c5 0 8-2 11-5s5-4 9-4c3 0 5 1 5 3" stroke="#BAE6FD" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'volcano',
    char: '🌋',
    name: 'Volcano',
    unicodeHex: 'U+1F30B',
    category: 'weather',
    tags: ['volcano', 'eruption', 'lava', 'mountain', 'nature', 'magma', 'fire'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78716C', fillSecondary: '#EF4444', stroke: '#57534E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 27l7-13h8l7 13H5z" />
          <path d="M12 14c1-2 2-3 4-3s3 1 4 3" />
          <path d="M14 8l-2-4M18 8l2-4M16 6V3" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M4 28L12 13h8l8 15H4z" fill="${c.primary}" />
        <path d="M12 13h8l-2 5h-4z" fill="${c.secondary}" />
        <path d="M13 18v5M16 18v7M19 18v4" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" />
        <path d="M13 9L11 4M19 9l2-4M16 8V3" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
        <circle cx="16" cy="4" r="1.5" fill="#EF4444" />
      </g>`;
    },
  },
  {
    id: 'milky-way',
    char: '🌌',
    name: 'Milky Way',
    unicodeHex: 'U+1F30C',
    category: 'weather',
    tags: ['milky way', 'galaxy', 'space', 'stars', 'cosmos', 'universe', 'astronomy'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#F59E0B', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <path d="M6 22c4-2 9-5 13-9s5-7 7-7" stroke-linecap="round" />
          <circle cx="10" cy="10" r="1" fill="${c.stroke}" />
          <circle cx="20" cy="20" r="1" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#0B132B" />
        <path d="M5 24c5-3 10-6 14-11s4-7 8-8" stroke="${c.primary}" stroke-width="6" stroke-linecap="round" opacity="0.6" fill="none" />
        <path d="M5 24c5-3 10-6 14-11s4-7 8-8" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" opacity="0.8" fill="none" />
        <circle cx="9" cy="9" r="1" fill="${c.secondary}" />
        <circle cx="23" cy="19" r="1" fill="${c.secondary}" />
        <circle cx="14" cy="18" r="0.8" fill="#FFFFFF" />
        <circle cx="21" cy="8" r="0.8" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'globe-europe-africa',
    char: '🌍',
    name: 'Globe Europe-Africa',
    unicodeHex: 'U+1F30D',
    category: 'weather',
    tags: ['globe', 'earth', 'world', 'planet', 'europe', 'africa', 'geography'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#3B82F6', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M14 9c2-2 4-2 5 0s-1 3-2 4c2 2 3 5 1 8-2 2-5 1-6-2s0-5 2-6z" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.secondary}" />
        <path d="M14 8c2-2 4-1 5 1s0 3-1 4c2 2 3 5 1 7-2 2-4 1-5-1s0-4 1-6c-1-1-1-3-1-5z" fill="${c.primary}" />
        <circle cx="21" cy="9" r="2" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'globe-americas',
    char: '🌎',
    name: 'Globe Americas',
    unicodeHex: 'U+1F30E',
    category: 'weather',
    tags: ['globe', 'earth', 'world', 'planet', 'americas', 'usa', 'geography'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#3B82F6', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M10 8c3-1 6 0 7 3-1 3-3 4-2 6s3 2 2 5-4 4-6 2c-1-2 0-5 1-7-1-3-3-4-2-7z" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.secondary}" />
        <path d="M11 8c3-1 5 0 6 3-1 3-2 4-1 6s2 2 1 5-3 4-5 2c-1-2 0-5 1-7-1-3-2-4-2-7z" fill="${c.primary}" />
        <path d="M16 20c2 0 4 2 3 4s-4 3-5 1 1-4 2-5z" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'globe-asia-australia',
    char: '🌏',
    name: 'Globe Asia-Australia',
    unicodeHex: 'U+1F30F',
    category: 'weather',
    tags: ['globe', 'earth', 'world', 'planet', 'asia', 'australia', 'geography'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#3B82F6', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M11 9c4-1 8 1 9 4s-2 5-4 5-3-2-4-4c-2 0-3 2-2 4s3 3 2 5" />
          <circle cx="21" cy="22" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.secondary}" />
        <path d="M11 9c4-1 8 1 9 4s-2 5-4 5-3-2-4-4c-2 0-3 2-2 4s3 3 2 5" fill="${c.primary}" />
        <circle cx="21" cy="22" r="2.5" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'globe-with-meridians',
    char: '🌐',
    name: 'Globe with Meridians',
    unicodeHex: 'U+1F310',
    category: 'weather',
    tags: ['globe', 'meridians', 'web', 'internet', 'network', 'world', 'global'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.3}" stroke-linecap="round" fill="none">
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16h24" />
        <path d="M6 10h20M6 22h20" />
        <ellipse cx="16" cy="16" rx="6" ry="12" />
      </g>`;
    },
  },
];
