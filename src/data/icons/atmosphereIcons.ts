import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const atmosphereIcons: WimojiIconDef[] = [
  {
    id: 'thermometer',
    char: '🌡',
    name: 'Thermometer',
    unicodeHex: 'U+1F321',
    category: 'weather',
    tags: ['thermometer', 'temperature', 'hot', 'cold', 'weather', 'climate', 'heat'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#E2E8F0', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M14 19V7a2 2 0 0 1 4 0v12a5 5 0 1 1-4 0z" />
          <path d="M16 11v7" />
          <circle cx="16" cy="22" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M14 19V7a2 2 0 0 1 4 0v12a5 5 0 1 1-4 0z" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <path d="M16 12v7" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="16" cy="22" r="3" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'sun-behind-small-cloud',
    char: '🌤',
    name: 'Sun Behind Small Cloud',
    unicodeHex: 'U+1F324',
    category: 'weather',
    tags: ['sun', 'small cloud', 'mostly sunny', 'weather', 'sky', 'warm'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#BAE6FD', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <circle cx="14" cy="13" r="5" />
          <path d="M14 5v2.5M7 8l1.8 1.8M21 8l-1.8 1.8M5 14h2.5M23 14h-2" />
          <path d="M12 24h12a4 4 0 0 0 1-7.9 5.5 5.5 0 0 0-8.5-1.5A3.5 3.5 0 0 0 12 24z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Sun with prominent rays -->
        <circle cx="14" cy="13" r="5.5" fill="${c.primary}" />
        <path d="M14 4v3M6.5 6.5l2.2 2.2M21.5 6.5l-2.2 2.2M4 13h3M24 13h-2" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" />
        <!-- Small cloud in front -->
        <path d="M11 25h13a4 4 0 0 0 1-7.9 5.5 5.5 0 0 0-8.5-1.5A3.5 3.5 0 0 0 11 25z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'sun-behind-large-cloud',
    char: '🌥',
    name: 'Sun Behind Large Cloud',
    unicodeHex: 'U+1F325',
    category: 'weather',
    tags: ['sun', 'large cloud', 'mostly cloudy', 'overcast', 'weather', 'sky'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sun Arc & Prominent Radiant Rays Behind Cloud -->
          <path d="M6 12 A5.5 5.5 0 1 1 16.5 11" />
          <path d="M11 2.5v3M5.5 5.5l2.2 2.2M16.5 5.5l-2.2 2.2M3 11h3" />
          <!-- Large Cloud in front -->
          <path d="M6 25h19a5 5 0 0 0 1-9.9A7.5 7.5 0 0 0 10 14a5 5 0 0 0-4 11z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Sun Behind Cloud -->
        <circle cx="12" cy="11" r="5.5" fill="${c.primary}" />
        <path d="M12 2.5v3M5.5 5.5l2.2 2.2M18.5 5.5l-2.2 2.2M3.5 11h3" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" />
        <!-- Large cloud taking main focus -->
        <path d="M6 25h19a5 5 0 0 0 1-9.9A7.5 7.5 0 0 0 10 14a5 5 0 0 0-4 11z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'sun-behind-rain-cloud',
    char: '🌦',
    name: 'Sun Behind Rain Cloud',
    unicodeHex: 'U+1F326',
    category: 'weather',
    tags: ['sun', 'rain', 'cloud', 'shower', 'weather', 'sprinkle'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#94A3B8', fillAccent: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sun Arc & Radiant Rays behind -->
          <path d="M7 10 A4.5 4.5 0 1 1 16.5 10" />
          <path d="M11.5 2.5v2.5M6 5l1.8 1.8M17 5l-1.8 1.8M3.5 10h2.5" />
          <!-- Cloud in front -->
          <path d="M6.5 20h17a4.5 4.5 0 0 0 .8-8.9A6.5 6.5 0 0 0 10.5 12 4 4 0 0 0 6.5 20z" />
          <!-- True Droplets -->
          <path d="M8.5 22.5c-.7 1.1-1.3 2-1.3 2.7a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.7z" />
          <path d="M14.5 22.5c-.7 1.1-1.3 2-1.3 2.7a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.7z" />
          <path d="M20.5 22.5c-.7 1.1-1.3 2-1.3 2.7a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.7z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Sun -->
        <circle cx="12" cy="10" r="4.5" fill="${c.primary}" />
        <path d="M12 2.5v2.5M6 5l1.8 1.8M18 5l-1.8 1.8" stroke="${c.primary}" stroke-width="1.8" />
        <!-- Cloud -->
        <path d="M6.5 20h17a4.5 4.5 0 0 0 .8-8.9A6.5 6.5 0 0 0 10.5 12 4 4 0 0 0 6.5 20z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Rain Drops in clear Sky Blue with blue stroke (never black) -->
        <path d="M8.5 22.5c-.7 1.1-1.3 2-1.3 2.7a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.7z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <path d="M14.5 22.5c-.7 1.1-1.3 2-1.3 2.7a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.7z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <path d="M20.5 22.5c-.7 1.1-1.3 2-1.3 2.7a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.7z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'cloud-with-rain',
    char: '🌧',
    name: 'Cloud with Rain',
    unicodeHex: 'U+1F327',
    category: 'weather',
    tags: ['cloud', 'rain', 'drops', 'shower', 'weather', 'rainy', 'wet'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#38BDF8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7 19h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 10a4.5 4.5 0 0 0-3 9z" />
          <!-- Clear Droplets -->
          <path d="M8.5 22c-.7 1.2-1.3 2.1-1.3 2.8a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.8z" />
          <path d="M13.5 23c-.7 1.2-1.3 2.1-1.3 2.8a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.8z" />
          <path d="M18.5 22c-.7 1.2-1.3 2.1-1.3 2.8a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.8z" />
          <path d="M23.5 23c-.7 1.2-1.3 2.1-1.3 2.8a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.8z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 19h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 10a4.5 4.5 0 0 0-3 9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M8.5 22c-.7 1.2-1.3 2.1-1.3 2.8a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.8z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <path d="M13.5 23c-.7 1.2-1.3 2.1-1.3 2.8a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.8z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <path d="M18.5 22c-.7 1.2-1.3 2.1-1.3 2.8a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.8z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <path d="M23.5 23c-.7 1.2-1.3 2.1-1.3 2.8a1.3 1.3 0 0 0 2.6 0c0-.7-.6-1.6-1.3-2.8z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'cloud-with-snow',
    char: '🌨',
    name: 'Cloud with Snow',
    unicodeHex: 'U+1F328',
    category: 'weather',
    tags: ['cloud', 'snow', 'flurries', 'cold', 'winter', 'weather'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#E0F2FE', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7 18h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 9a4.5 4.5 0 0 0-3 9z" />
          <!-- Falling Snowflake Asterisks (not black dots) -->
          <path d="M9 21v4 M7 23h4 M7.5 21.5l3 3 M10.5 21.5l-3 3" />
          <path d="M15 23v4 M13 25h4 M13.5 23.5l3 3 M16.5 23.5l-3 3" />
          <path d="M21 21v4 M19 23h4 M19.5 21.5l3 3 M22.5 21.5l-3 3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 18h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 9a4.5 4.5 0 0 0-3 9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M9 21v4 M7 23h4 M7.5 21.5l3 3 M10.5 21.5l-3 3" stroke="#BAE6FD" stroke-width="1.3" />
        <path d="M15 23v4 M13 25h4 M13.5 23.5l3 3 M16.5 23.5l-3 3" stroke="#BAE6FD" stroke-width="1.3" />
        <path d="M21 21v4 M19 23h4 M19.5 21.5l3 3 M22.5 21.5l-3 3" stroke="#BAE6FD" stroke-width="1.3" />
      </g>`;
    },
  },
  {
    id: 'cloud-with-lightning',
    char: '🌩',
    name: 'Cloud with Lightning',
    unicodeHex: 'U+1F329',
    category: 'weather',
    tags: ['cloud', 'lightning', 'thunder', 'storm', 'weather', 'tempest'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#F59E0B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cloud contour cleanly open at lightning strike -->
          <path d="M7 18h5 M18 18h7a5 5 0 0 0 1-9.9A7 7 0 0 0 10 9a4.5 4.5 0 0 0-3 9z" />
          <!-- Sharp Bold Lightning Bolt -->
          <polygon points="15.5,13 11.5,20 15.5,20 13,28 19.5,19.5 15.5,19.5 18,13" fill="${c.stroke}" stroke="${c.stroke}" stroke-width="0.8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 18h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 9a4.5 4.5 0 0 0-3 9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <polygon points="15.5,13 11.5,20 15.5,20 13,28 19.5,19.5 15.5,19.5 18,13" fill="#FBBF24" stroke="#D97706" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'tornado',
    char: '🌪',
    name: 'Tornado',
    unicodeHex: 'U+1F32A',
    category: 'weather',
    tags: ['tornado', 'twister', 'cyclone', 'whirlwind', 'storm', 'weather'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" fill="none">
        <path d="M5 6h22M7 10h18M9 14h14M11 18h10M13 22h6M15 26h2" />
      </g>`;
    },
  },
  {
    id: 'fog',
    char: '🌫',
    name: 'Fog',
    unicodeHex: 'U+1F32B',
    category: 'weather',
    tags: ['fog', 'mist', 'haze', 'weather', 'cloudy', 'grey'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="round" fill="none">
        <path d="M5 9h22M3 14h26M6 19h20M4 24h24" />
      </g>`;
    },
  },
  {
    id: 'wind-face',
    char: '🌬',
    name: 'Wind Face',
    unicodeHex: 'U+1F32C',
    category: 'weather',
    tags: ['wind', 'blow', 'breeze', 'face', 'cloud', 'gust', 'weather'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BAE6FD', stroke: '#38BDF8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
        <path d="M6 10c0-3 3-5 6-5s6 2 6 5c0 2-1 4-3 5h-9" />
        <circle cx="11" cy="9" r="1" fill="${c.stroke}" />
        <path d="M12 18c0 3 2 5 5 5s5-2 5-5-2-4-4-4" />
        <!-- Wind gust curls -->
        <path d="M14 15h9c3 0 4-2 3-3" stroke-width="${opts.strokeWidth + 0.5}" />
        <path d="M15 18h10c3 0 4 2 3 3" stroke-width="${opts.strokeWidth + 0.5}" />
      </g>`;
    },
  },
];
