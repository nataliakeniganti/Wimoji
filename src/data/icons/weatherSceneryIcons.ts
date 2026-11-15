import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const weatherSceneryIcons: WimojiIconDef[] = [
  {
    id: 'cyclone',
    char: '🌀',
    name: 'Cyclone',
    unicodeHex: 'U+1F300',
    category: 'weather',
    tags: ['cyclone', 'hurricane', 'twister', 'tornado', 'swirl', 'spiral', 'storm', 'wind'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" fill="none">
        <path d="M16 16c-3-1-4-4-2-7s7-3 10 1 2 9-2 12-11 1-13-4" />
        <path d="M16 16c2 1 3 3 1 5s-5 2-7-1-1-6 2-8 8-1 9 3" />
      </g>`;
    },
  },
  {
    id: 'foggy',
    char: '🌁',
    name: 'Foggy',
    unicodeHex: 'U+1F301',
    category: 'weather',
    tags: ['foggy', 'bridge', 'fog', 'mist', 'haze', 'golden gate', 'weather'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#EF4444', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <path d="M8 8v16M24 8v16" />
          <path d="M4 14c8 3 16 3 24 0" />
          <path d="M5 21h22M3 25h26M7 17h18" stroke-dasharray="2 2" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M8 8v16M24 8v16" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" />
        <path d="M4 14c8 3 16 3 24 0" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
        <path d="M5 20h22M3 24h26M6 28h20" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'closed-umbrella',
    char: '🌂',
    name: 'Closed Umbrella',
    unicodeHex: 'U+1F302',
    category: 'weather',
    tags: ['umbrella', 'closed', 'rain', 'weather', 'fold', 'purple'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#C4B5FD', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6 26l16-16 2 2-16 16z" />
          <path d="M22 10l4-4" />
          <path d="M6 26c-2 2-4 2-5 0s0-4 2-5" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M22 10l4-4" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
        <path d="M6 26L21 11l2 2L8 28z" fill="${c.primary}" />
        <path d="M6 26c-2 2-4 1.5-4-.5s1.5-2.5 3-3.5" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'night-with-stars',
    char: '🌃',
    name: 'Night with Stars',
    unicodeHex: 'U+1F303',
    category: 'weather',
    tags: ['night', 'stars', 'city', 'skyline', 'evening', 'dark', 'urban'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <path d="M6 28v-9h5v9M11 28v-14h6v14M17 28v-8h5v8M22 28v-11h4v11" />
          <circle cx="8" cy="8" r="0.8" fill="${c.stroke}" />
          <circle cx="15" cy="7" r="0.8" fill="${c.stroke}" />
          <circle cx="22" cy="9" r="0.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#0B132B" />
        <circle cx="8" cy="8" r="1" fill="${c.secondary}" />
        <circle cx="15" cy="7" r="1.2" fill="${c.secondary}" />
        <circle cx="23" cy="9" r="0.8" fill="${c.secondary}" />
        <path d="M6 28v-9h5v9M11 28v-15h6v15M17 28v-8h5v8M22 28v-11h4v11" fill="#334155" />
      </g>`;
    },
  },
  {
    id: 'sunrise-over-mountains',
    char: '🌄',
    name: 'Sunrise Over Mountains',
    unicodeHex: 'U+1F304',
    category: 'weather',
    tags: ['sunrise', 'mountains', 'morning', 'sun', 'dawn', 'nature', 'landscape'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#475569', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <circle cx="16" cy="13" r="4" />
          <path d="M4 25l7-8 6 6 5-5 6 7" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#FFEDD5" />
        <circle cx="16" cy="13" r="4.5" fill="${c.primary}" />
        <path d="M4 28l7-10 6 7 5-6 6 9H4z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'sunrise',
    char: '🌅',
    name: 'Sunrise',
    unicodeHex: 'U+1F305',
    category: 'weather',
    tags: ['sunrise', 'morning', 'dawn', 'sun', 'horizon', 'sea', 'ocean'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#3B82F6', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <path d="M10 18a6 6 0 0 1 12 0" />
          <path d="M16 6v3M8 10l2 2M24 10l-2 2" />
          <path d="M4 22h24M6 26h20" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M10 18a6 6 0 0 1 12 0H10z" fill="${c.primary}" />
        <path d="M16 6v3.5M8 10l2.5 2.5M24 10l-2.5 2.5" stroke="${c.primary}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
        <path d="M4 21h24M6 25h20" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
      </g>`;
    },
  },
{
    id: 'cityscape-at-dusk',
    char: '🌆',
    name: 'Cityscape at Dusk',
    unicodeHex: 'U+1F306',
    category: 'weather',
    tags: ['cityscape', 'dusk', 'evening', 'skyline', 'twilight', 'buildings', 'urban', 'orange', 'city lights', '🌆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#1E293B', fillAccent: '#FDE047', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <path d="M4 18h5v-6h5v8h5v-5h5v4h4" />
          <path d="M11 15v.01M12.5 15v.01M11 18v.01M12.5 18v.01M20.5 18v.01M22.5 18v.01" stroke-width="1.2" />
        </g>`;
      }
      return `${badge}<g>
        <clipPath id="wimoji-dusk-clip"><rect x="4" y="4" width="24" height="24" rx="6" /></clipPath>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />
        <g clip-path="url(#wimoji-dusk-clip)">
          <path d="M4 28V18h5v-6h5v8h5v-5h5v4h4v9z" fill="${c.secondary}" />
          <path d="M10.4 14h1.2v1.6h-1.2zM12.2 14h1.2v1.6h-1.2zM10.4 17.5h1.2v1.6h-1.2zM12.2 17.5h1.2v1.6h-1.2zM20.3 17h1.2v1.6h-1.2zM22.1 17h1.2v1.6h-1.2zM20.3 20.5h1.2v1.6h-1.2zM5.6 21h1.2v1.6H5.6zM15.6 23h1.2v1.6h-1.2z" fill="${c.accent}" />
        </g>
      </g>`;
    },
  },
  {
    id: 'sunset',
    char: '🌇',
    name: 'Sunset',
    unicodeHex: 'U+1F307',
    category: 'weather',
    tags: ['sunset', 'sun setting', 'dusk', 'evening', 'buildings', 'city skyline', 'skyline', 'orange', 'city', '🌇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#1E293B', fillAccent: '#FBBF24', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <!-- Sun peeking between the buildings -->
          <path d="M12.2 15A5.5 5.5 0 0 1 21.1 17" />
          <!-- Skyline -->
          <path d="M4 20h5v-5h5v7h5v-5h4v4h5" />
        </g>`;
      }
      return `${badge}<g>
        <clipPath id="wimoji-sunset-clip"><rect x="4" y="4" width="24" height="24" rx="6" /></clipPath>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />
        <g clip-path="url(#wimoji-sunset-clip)">
          <!-- Sun sinking behind the skyline -->
          <circle cx="16" cy="19" r="5.5" fill="${c.accent}" />
          <path d="M4 28V20h5v-5h5v7h5v-5h4v4h5v7z" fill="${c.secondary}" />
        </g>
      </g>`;
    },
  },

];
