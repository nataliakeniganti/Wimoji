import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const transportVehiclesIcons: WimojiIconDef[] = [
  {
    id: 'rocket',
    char: '🚀',
    name: 'Rocket',
    unicodeHex: 'U+1F680',
    category: 'sports-travel',
    tags: ['rocket', 'space', 'launch', 'blastoff', 'orbit', 'nasa', 'speed', 'fly', 'ship', '🚀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', fillAccent: '#FBBF24', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(-45 16 16)">
          <!-- Fuselage -->
          <path d="M16 3c-4 5-5 13-5 18h10c0-5-1-13-5-18z" />
          <circle cx="16" cy="12" r="2.5" />
          <!-- Fins -->
          <path d="M11 16l-5 4v3l5-2" />
          <path d="M21 16l5 4v3l-5-2" />
          <!-- Flame exhaust -->
          <path d="M13 23l3 6 3-6" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-45 16 16)">
        <!-- Fire Exhaust Flame -->
        <polygon points="13,22 16,30 19,22" fill="${c.accent}" stroke="#D97706" stroke-width="0.8" />
        <polygon points="14.5,22 16,26.5 17.5,22" fill="#EF4444" />
        <!-- Left & Right Wing Fins -->
        <polygon points="11,15 5.5,19.5 5.5,22.5 11,21" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <polygon points="21,15 26.5,19.5 26.5,22.5 21,21" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <!-- Main Rocket Hull Body -->
        <path d="M16 2.5C12 7.5 11 16 11 21.5h10C21 16 20 7.5 16 2.5z" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Red Nose Cone Tip -->
        <path d="M16 2.5C14 5.5 13.5 8 13 10h6c-0.5-2-1-4.5-3-7.5z" fill="${c.primary}" />
        <!-- Porthole Window -->
        <circle cx="16" cy="13.5" r="2.8" fill="#38BDF8" stroke="#0284C7" stroke-width="1" />
        <circle cx="15.2" cy="12.7" r="0.8" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'helicopter',
    char: '🚁',
    name: 'Helicopter',
    unicodeHex: 'U+1F681',
    category: 'sports-travel',
    tags: ['helicopter', 'chopper', 'copters', 'rotor', 'aviation', 'fly', 'aircraft', 'pilot', 'sky', '🚁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#0F172A', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Main rotor blades -->
          <line x1="3" y1="6" x2="29" y2="6" />
          <line x1="16" y1="6" x2="16" y2="10" />
          <!-- Cabin -->
          <path d="M7 17c0-4 4-7 9-7h4c2 0 4 3 4 7s-2 6-6 6H12c-3 0-5-2-5-6z" />
          <line x1="16" y1="10" x2="16" y2="17" />
          <!-- Tail boom and rotor -->
          <line x1="7" y1="16" x2="2" y2="14" />
          <line x1="2" y1="11" x2="2" y2="17" />
          <!-- Landing skids -->
          <line x1="7" y1="27" x2="25" y2="27" />
          <line x1="11" y1="23" x2="11" y2="27" />
          <line x1="20" y1="23" x2="20" y2="27" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Main Top Rotor Blade -->
        <line x1="3" y1="5.5" x2="29" y2="5.5" stroke="#475569" stroke-width="2" stroke-linecap="round" />
        <line x1="16" y1="5.5" x2="16" y2="9.5" stroke="#0F172A" stroke-width="2.5" />
        <!-- Tail Boom & Tail Rotor -->
        <path d="M8 16.5l-6-2.5v-3" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <line x1="2" y1="10" x2="2" y2="16" stroke="#EF4444" stroke-width="2" stroke-linecap="round" />
        <!-- Landing Gear Skids -->
        <line x1="7" y1="27" x2="25" y2="27" stroke="#334155" stroke-width="2" stroke-linecap="round" />
        <line x1="11" y1="23" x2="11" y2="27" stroke="#334155" stroke-width="1.8" />
        <line x1="20" y1="23" x2="20" y2="27" stroke="#334155" stroke-width="1.8" />
        <!-- Cockpit & Cabin (Blue) -->
        <path d="M7 17.5c0-4.5 4-8 9-8h4.5c2.5 0 4.5 3 4.5 7s-2 6.5-6 6.5H12c-3 0-5-2-5-5.5z" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <!-- Curved Glass Windshield -->
        <path d="M17 10.5h3.5c2 0 3.5 2 3.5 5.5h-7v-5.5z" fill="#38BDF8" opacity="0.85" />
      </g>`;
    },
  },
  {
    id: 'steam-locomotive',
    char: '🚂',
    name: 'Steam Locomotive',
    unicodeHex: 'U+1F682',
    category: 'sports-travel',
    tags: ['steam locomotive', 'train', 'steam', 'engine', 'railway', 'tracks', 'choo choo', 'vintage', 'rail', '🚂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Boiler and Cab -->
          <rect x="3" y="11" width="16" height="10" rx="2" />
          <rect x="18" y="7" width="10" height="14" rx="1.5" />
          <!-- Chimney / Smokestack -->
          <polygon points="5,11 5,6 9,6 9,11" />
          <circle cx="7" cy="24" r="3" />
          <circle cx="14" cy="24" r="3" />
          <circle cx="22" cy="24" r="3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Steam Puffs -->
        <circle cx="7" cy="3" r="1.8" fill="#CBD5E1" opacity="0.7" />
        <circle cx="10" cy="2" r="1.5" fill="#CBD5E1" opacity="0.5" />
        <!-- Smokestack Funnel -->
        <polygon points="5.5,11 5,6 9.5,6 9,11" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.8" />
        <!-- Main Horizontal Boiler Barrel -->
        <rect x="3" y="11" width="16" height="10" rx="2" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Cowcatcher Pilot Grill on Front -->
        <polygon points="3,21 0.5,24 3,24" fill="#64748B" />
        <!-- Cab Driver Chamber -->
        <rect x="18" y="7" width="10.5" height="14" rx="1.5" fill="${c.secondary}" stroke="#991B1B" stroke-width="1.2" />
        <rect x="20" y="9" width="6" height="4.5" rx="0.5" fill="#38BDF8" />
        <!-- Drive Wheels -->
        <circle cx="7" cy="24" r="3.2" fill="#0F172A" stroke="#FBBF24" stroke-width="1" />
        <circle cx="14" cy="24" r="3.2" fill="#0F172A" stroke="#FBBF24" stroke-width="1" />
        <circle cx="23" cy="24" r="3.5" fill="#0F172A" stroke="#FBBF24" stroke-width="1.2" />
        <line x1="7" y1="24" x2="23" y2="24" stroke="#94A3B8" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'railway-car',
    char: '🚃',
    name: 'Railway Car',
    unicodeHex: 'U+1F683',
    category: 'sports-travel',
    tags: ['railway car', 'train', 'carriage', 'coach', 'transit', 'commute', 'tram', 'rail', 'passenger', '🚃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#F8FAFC', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="9" width="26" height="14" rx="2" />
          <rect x="6" y="12" width="4" height="4" rx="0.5" />
          <rect x="14" y="12" width="4" height="4" rx="0.5" />
          <rect x="22" y="12" width="4" height="4" rx="0.5" />
          <!-- Wheels -->
          <circle cx="8" cy="25" r="2.5" />
          <circle cx="24" cy="25" r="2.5" />
          <!-- Pantograph on top -->
          <path d="M12 9l4-4 4 4" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Top Pantograph Electric Link -->
        <path d="M11 9l5-4.5 5 4.5" stroke="#64748B" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- Carriage Body -->
        <rect x="3" y="9" width="26" height="14" rx="2.5" fill="${c.primary}" stroke="#15803D" stroke-width="1.2" />
        <!-- Windows Row -->
        <rect x="6" y="12" width="4.5" height="4.5" rx="0.8" fill="${c.secondary}" />
        <rect x="13.7" y="12" width="4.5" height="4.5" rx="0.8" fill="${c.secondary}" />
        <rect x="21.5" y="12" width="4.5" height="4.5" rx="0.8" fill="${c.secondary}" />
        <!-- Accent stripe along bottom -->
        <line x1="3" y1="19.5" x2="29" y2="19.5" stroke="#FBBF24" stroke-width="1.5" />
        <!-- Steel Track Wheels -->
        <circle cx="8" cy="25" r="2.5" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
        <circle cx="24" cy="25" r="2.5" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'high-speed-train',
    char: '🚄',
    name: 'High-Speed Train',
    unicodeHex: 'U+1F684',
    category: 'sports-travel',
    tags: ['high-speed train', 'shinkansen', 'bullet train', 'rail', 'fast', 'express', 'speed', 'transit', 'travel', '🚄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#3B82F6', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M29 20H3v-9c0-3 3-5 7-5h9c6 0 10 5 10 9v5z" />
          <line x1="3" y1="14" x2="25" y2="14" />
          <circle cx="9" cy="23" r="2" />
          <circle cx="23" cy="23" r="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Sleek Bullet Train Aerodynamic Profile -->
        <path d="M29 20H3v-8c0-3 2.5-5 6-5h10c6.5 0 10 5 10 8v5z" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1.2" />
        <!-- Blue Speed Streak -->
        <path d="M3 16h26v3.5H3z" fill="${c.secondary}" />
        <!-- Cockpit & Passenger Windows -->
        <path d="M21 9h4c2.5 0 4 2 4 4h-8V9z" fill="#0F172A" />
        <rect x="5" y="10" width="4" height="3" rx="0.5" fill="#38BDF8" />
        <rect x="11" y="10" width="4" height="3" rx="0.5" fill="#38BDF8" />
        <rect x="17" y="10" width="4" height="3" rx="0.5" fill="#38BDF8" />
        <!-- Wheels and Rails -->
        <circle cx="8" cy="22.5" r="2.2" fill="#0F172A" />
        <circle cx="23" cy="22.5" r="2.2" fill="#0F172A" />
        <line x1="1" y1="25" x2="31" y2="25" stroke="#64748B" stroke-width="1.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'bullet-train',
    char: '🚅',
    name: 'Bullet Train',
    unicodeHex: 'U+1F685',
    category: 'sports-travel',
    tags: ['bullet train', 'shinkansen', 'japan', 'speed', 'express', 'fast', 'railway', 'nose', 'transit', '🚅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#1D4ED8', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 21h25c1.5 0 3-2 3-5s-1.5-7-6-7H3v12z" />
          <line x1="3" y1="15" x2="28" y2="15" />
          <circle cx="9" cy="24" r="2" />
          <circle cx="21" cy="24" r="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Pointed Long Bullet Nose Aerodynamic Shape -->
        <path d="M3 21h24c2 0 4.5-2.5 4.5-5.5s-2.5-7.5-7.5-7.5H3v13z" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1.2" />
        <!-- Deep Blue Accent Stripe -->
        <path d="M3 15h28v4H3z" fill="${c.secondary}" />
        <!-- Pointed Dark Windshield -->
        <path d="M22 10.5h3c3 0 4.5 1.5 4.5 3h-7.5v-3z" fill="#0F172A" />
        <!-- Headlight on Nose -->
        <ellipse cx="29.5" cy="17" rx="1.2" ry="0.8" fill="#FBBF24" />
        <!-- Wheels and Ground Track -->
        <circle cx="8" cy="23.5" r="2.2" fill="#0F172A" />
        <circle cx="21" cy="23.5" r="2.2" fill="#0F172A" />
        <line x1="1" y1="26" x2="31" y2="26" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'train',
    char: '🚆',
    name: 'Train',
    unicodeHex: 'U+1F686',
    category: 'sports-travel',
    tags: ['train', 'oncoming train', 'locomotive', 'rail', 'subway', 'front', 'transit', 'commuter', 'tracks', '🚆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7 6c0-2 2-3 9-3s9 1 9 3v17c0 2-2 3-3 3H10c-2 0-3-1-3-3V6z" />
          <rect x="9" y="7" width="14" height="7" rx="1" />
          <circle cx="11" cy="20" r="1.5" />
          <circle cx="21" cy="20" r="1.5" />
          <line x1="5" y1="29" x2="27" y2="29" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Oncoming Front Train Cab Body -->
        <path d="M7 6c0-2 2-3 9-3s9 1 9 3v17c0 2-2 3-3 3H10c-2 0-3-1-3-3V6z" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <!-- Front Big Windshield Glass Window -->
        <rect x="9" y="7" width="14" height="7.5" rx="1.5" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <!-- Dual Twin Headlights -->
        <circle cx="11" cy="20" r="1.8" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <circle cx="21" cy="20" r="1.8" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <!-- Front Bumper Plate -->
        <rect x="10" y="24" width="12" height="2" rx="0.5" fill="#0F172A" />
        <!-- Track Rails in Perspective -->
        <line x1="8" y1="26" x2="4" y2="30" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
        <line x1="24" y1="26" x2="28" y2="30" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
        <line x1="6" y1="29" x2="26" y2="29" stroke="#94A3B8" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'metro',
    char: '🚇',
    name: 'Metro',
    unicodeHex: 'U+1F687',
    category: 'sports-travel',
    tags: ['metro', 'subway', 'underground', 'tube', 'transit', 'station', 'train', 'commute', 'urban', '🚇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="4" width="20" height="22" rx="3" />
          <rect x="8" y="7" width="16" height="8" rx="1" />
          <circle cx="10" cy="20" r="1.5" />
          <circle cx="22" cy="20" r="1.5" />
          <line x1="6" y1="29" x2="26" y2="29" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Metro Front Shell (Red Urban Subway) -->
        <rect x="6" y="4" width="20" height="21" rx="3.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Front Destination Board Window -->
        <rect x="8.5" y="7" width="15" height="8" rx="1.5" fill="#0F172A" />
        <rect x="11" y="8" width="10" height="2" rx="0.5" fill="#FBBF24" />
        <!-- White Front Panel Inserts -->
        <circle cx="10" cy="20" r="1.8" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.8" />
        <circle cx="22" cy="20" r="1.8" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.8" />
        <!-- Track Rails -->
        <line x1="4" y1="28" x2="28" y2="28" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
        <line x1="9" y1="25" x2="7" y2="28" stroke="#94A3B8" stroke-width="2" />
        <line x1="23" y1="25" x2="25" y2="28" stroke="#94A3B8" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'light-rail',
    char: '🚈',
    name: 'Light Rail',
    unicodeHex: 'U+1F688',
    category: 'sports-travel',
    tags: ['light rail', 'tram', 'train', 'transit', 'commuter', 'railway', 'green', 'urban', 'electric', '🚈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#0F172A', stroke: '#047857' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 5c0-2 2-3 8-3s8 1 8 3v19c0 2-2 3-3 3H11c-2 0-3-1-3-3V5z" />
          <rect x="10" y="6" width="12" height="7" rx="1" />
          <circle cx="11" cy="18" r="1.5" />
          <circle cx="21" cy="18" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Light Rail Front Profile (Emerald Green) -->
        <path d="M8 5.5c0-2 2-3 8-3s8 1 8 3v18.5c0 2-2 3-3 3H11c-2 0-3-1-3-3V5.5z" fill="${c.primary}" stroke="#047857" stroke-width="1.2" />
        <!-- Front Panoramic Windshield -->
        <rect x="10" y="6.5" width="12" height="8" rx="1.5" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <!-- Light Indicators -->
        <circle cx="11" cy="19" r="1.5" fill="#FEF08A" />
        <circle cx="21" cy="19" r="1.5" fill="#FEF08A" />
        <rect x="12" y="23" width="8" height="2" rx="0.5" fill="${c.secondary}" />
        <!-- Rails -->
        <line x1="5" y1="29" x2="27" y2="29" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'station',
    char: '🚉',
    name: 'Station',
    unicodeHex: 'U+1F689',
    category: 'objects-places',
    tags: ['station', 'train station', 'platform', 'railway', 'terminal', 'commute', 'transit', 'stop', 'track', '🚉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#94A3B8', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 10h12v15H3z" />
          <path d="M15 6h14v19H15z" />
          <line x1="2" y1="25" x2="30" y2="25" />
          <circle cx="9" cy="18" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Station Canopy Platform Terminal -->
        <rect x="14" y="6" width="15" height="19" rx="1.5" fill="#475569" stroke="#1E293B" stroke-width="1" />
        <rect x="16.5" y="9" width="4" height="6" rx="0.5" fill="#FEF08A" />
        <rect x="22.5" y="9" width="4" height="6" rx="0.5" fill="#FEF08A" />
        <rect x="18" y="18" width="7" height="7" fill="#0F172A" />
        <!-- Train Parked at Platform (Left) -->
        <rect x="3" y="10" width="12" height="15" rx="2" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <rect x="5" y="12" width="8" height="5" rx="1" fill="#38BDF8" />
        <circle cx="6.5" cy="20" r="1.2" fill="#FBBF24" />
        <circle cx="11.5" cy="20" r="1.2" fill="#FBBF24" />
        <!-- Ground Platform Edge Line -->
        <line x1="1" y1="25" x2="31" y2="25" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'tram',
    char: '🚊',
    name: 'Tram',
    unicodeHex: 'U+1F68A',
    category: 'sports-travel',
    tags: ['tram', 'streetcar', 'trolley', 'cable car', 'rail', 'transit', 'yellow', 'city', 'commute', '🚊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#0F172A', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="7" y="5" width="18" height="20" rx="3" />
          <rect x="9" y="8" width="14" height="7" rx="1" />
          <circle cx="11" cy="19" r="1.5" />
          <circle cx="21" cy="19" r="1.5" />
          <path d="M13 5l3-3 3 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Overhead Trolley Pole -->
        <path d="M12 5l4-3 4 3" stroke="#64748B" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- Yellow Tram Front -->
        <rect x="7" y="5" width="18" height="20" rx="3.5" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Front Large Glass -->
        <rect x="9.5" y="8" width="13" height="7.5" rx="1.5" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <!-- Headlights -->
        <circle cx="11.5" cy="19" r="1.8" fill="#FEF08A" stroke="#B45309" stroke-width="0.6" />
        <circle cx="20.5" cy="19" r="1.8" fill="#FEF08A" stroke="#B45309" stroke-width="0.6" />
        <!-- Front Grille -->
        <line x1="14" y1="19" x2="18" y2="19" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" />
        <!-- Street Tracks -->
        <line x1="5" y1="28" x2="27" y2="28" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'tram-car',
    char: '🚋',
    name: 'Tram Car',
    unicodeHex: 'U+1F68B',
    category: 'sports-travel',
    tags: ['tram car', 'streetcar', 'trolley', 'carriage', 'city', 'transport', 'vintage', 'rail', '🚋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FEF08A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="8" width="26" height="15" rx="2" />
          <rect x="6" y="11" width="5" height="5" rx="1" />
          <rect x="13.5" y="11" width="5" height="5" rx="1" />
          <rect x="21" y="11" width="5" height="5" rx="1" />
          <circle cx="8" cy="25" r="2.5" />
          <circle cx="24" cy="25" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Overhead Pole -->
        <line x1="16" y1="8" x2="20" y2="3" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
        <!-- Vintage Tram Body (Red & Cream) -->
        <rect x="3" y="8" width="26" height="15" rx="2.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <rect x="3" y="17" width="26" height="6" fill="#F8FAFC" />
        <!-- Windows -->
        <rect x="6" y="10.5" width="5" height="5" rx="1" fill="#38BDF8" />
        <rect x="13.5" y="10.5" width="5" height="5" rx="1" fill="#38BDF8" />
        <rect x="21" y="10.5" width="5" height="5" rx="1" fill="#38BDF8" />
        <!-- Wheels -->
        <circle cx="8" cy="25" r="2.5" fill="#0F172A" />
        <circle cx="24" cy="25" r="2.5" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'bus',
    char: '🚌',
    name: 'Bus',
    unicodeHex: 'U+1F68C',
    category: 'sports-travel',
    tags: ['bus', 'city bus', 'public transit', 'commute', 'coach', 'passengers', 'stop', 'road', 'wheels', '🚌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EAB308', fillSecondary: '#0F172A', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="8" width="26" height="15" rx="3" />
          <rect x="6" y="11" width="5" height="5" rx="1" />
          <rect x="13.5" y="11" width="5" height="5" rx="1" />
          <rect x="21" y="11" width="5" height="5" rx="1" />
          <circle cx="8" cy="24" r="2.5" />
          <circle cx="24" cy="24" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Yellow City Bus Body -->
        <rect x="3" y="8" width="26" height="15" rx="3" fill="${c.primary}" stroke="#A16207" stroke-width="1.2" />
        <!-- Black Side Trim Stripe -->
        <line x1="3" y1="18" x2="29" y2="18" stroke="#0F172A" stroke-width="1.2" />
        <!-- Windows -->
        <rect x="6" y="10.5" width="5" height="5" rx="1" fill="#38BDF8" />
        <rect x="13.5" y="10.5" width="5" height="5" rx="1" fill="#38BDF8" />
        <rect x="21" y="10.5" width="5" height="5" rx="1" fill="#38BDF8" />
        <!-- Headlight and Taillight -->
        <circle cx="28" cy="15" r="1" fill="#FDE047" />
        <circle cx="4" cy="15" r="1" fill="#EF4444" />
        <!-- Rubber Wheels -->
        <circle cx="8" cy="24" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <circle cx="24" cy="24" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'oncoming-bus',
    char: '🚍',
    name: 'Oncoming Bus',
    unicodeHex: 'U+1F68D',
    category: 'sports-travel',
    tags: ['oncoming bus', 'bus', 'front', 'public transit', 'commute', 'headlights', 'windshield', 'road', 'transit', '🚍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#0F172A', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="5" width="20" height="20" rx="4" />
          <rect x="8" y="8" width="16" height="8" rx="1" />
          <circle cx="10" cy="20" r="1.5" />
          <circle cx="22" cy="20" r="1.5" />
          <circle cx="9" cy="26" r="1.5" />
          <circle cx="23" cy="26" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bus Tires Underneath -->
        <rect x="7" y="22" width="3.5" height="5" rx="1" fill="${c.secondary}" />
        <rect x="21.5" y="22" width="3.5" height="5" rx="1" fill="${c.secondary}" />
        <!-- Bus Front Chassis (Blue) -->
        <rect x="5.5" y="5" width="21" height="19" rx="4" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <!-- Panoramic Windshield -->
        <rect x="8" y="8" width="16" height="8" rx="1.5" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <!-- Side mirrors -->
        <rect x="3.5" y="10" width="2" height="4" rx="0.5" fill="${c.primary}" />
        <rect x="26.5" y="10" width="2" height="4" rx="0.5" fill="${c.primary}" />
        <!-- Bright Headlights -->
        <circle cx="10" cy="19.5" r="1.8" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <circle cx="22" cy="19.5" r="1.8" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <!-- License Plate -->
        <rect x="13.5" y="20.5" width="5" height="2" rx="0.5" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'trolleybus',
    char: '🚎',
    name: 'Trolleybus',
    unicodeHex: 'U+1F68E',
    category: 'sports-travel',
    tags: ['trolleybus', 'bus', 'electric', 'trolley', 'overhead wires', 'transit', 'green', 'city', 'commute', '🚎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#0F172A', stroke: '#047857' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="16" y1="8" x2="22" y2="3" />
          <line x1="13" y1="8" x2="19" y2="3" />
          <rect x="3" y="8" width="26" height="15" rx="3" />
          <rect x="6" y="11" width="5" height="5" rx="1" />
          <rect x="13.5" y="11" width="5" height="5" rx="1" />
          <rect x="21" y="11" width="5" height="5" rx="1" />
          <circle cx="8" cy="24" r="2.5" />
          <circle cx="24" cy="24" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Dual Overhead Trolley Poles -->
        <line x1="15" y1="8" x2="22" y2="2.5" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />
        <line x1="12" y1="8" x2="19" y2="2.5" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />
        <!-- Electric Bus Body (Emerald) -->
        <rect x="3" y="8" width="26" height="15" rx="3" fill="${c.primary}" stroke="#047857" stroke-width="1.2" />
        <!-- Windows -->
        <rect x="6" y="11" width="5" height="5" rx="1" fill="#38BDF8" />
        <rect x="13.5" y="11" width="5" height="5" rx="1" fill="#38BDF8" />
        <rect x="21" y="11" width="5" height="5" rx="1" fill="#38BDF8" />
        <!-- Rubber Tires -->
        <circle cx="8" cy="24" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <circle cx="24" cy="24" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'bus-stop',
    char: '🚏',
    name: 'Bus Stop',
    unicodeHex: 'U+1F68F',
    category: 'objects-places',
    tags: ['bus stop', 'sign', 'platform', 'transit', 'station', 'schedule', 'post', 'public transit', 'map', '🚏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#EF4444', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="16" y1="12" x2="16" y2="29" />
          <circle cx="16" cy="9" r="6" />
          <rect x="12" y="16" width="8" height="5" rx="1" />
          <line x1="10" y1="29" x2="22" y2="29" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Steel Pole & Base -->
        <line x1="16" y1="12" x2="16" y2="29" stroke="#64748B" stroke-width="2.5" stroke-linecap="round" />
        <line x1="11" y1="29" x2="21" y2="29" stroke="#334155" stroke-width="2.5" stroke-linecap="round" />
        <!-- Round Bus Sign Disc (Blue) -->
        <circle cx="16" cy="9" r="6.5" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <!-- Little Bus Pictogram on Sign -->
        <rect x="13.5" y="7" width="5" height="4" rx="0.8" fill="#FFFFFF" />
        <circle cx="14.5" cy="11.5" r="0.8" fill="#0F172A" />
        <circle cx="17.5" cy="11.5" r="0.8" fill="#0F172A" />
        <!-- Schedule Timetable Board on Pole -->
        <rect x="12" y="16" width="8" height="5.5" rx="1" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.8" />
        <line x1="13.5" y1="18" x2="18.5" y2="18" stroke="#0F172A" stroke-width="0.8" />
        <line x1="13.5" y1="20" x2="17" y2="20" stroke="#0F172A" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'minibus',
    char: '🚐',
    name: 'Minibus',
    unicodeHex: 'U+1F690',
    category: 'sports-travel',
    tags: ['minibus', 'van', 'shuttle', 'transit', 'commute', 'passenger', 'tour', 'bus', 'wheels', '🚐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0F172A', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 20h24v-8l-4-4h-8l-4 4H4v8z" />
          <rect x="9" y="11" width="5" height="4" rx="0.5" />
          <rect x="16" y="11" width="5" height="4" rx="0.5" />
          <circle cx="9" cy="23" r="2.5" />
          <circle cx="23" cy="23" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Van Body -->
        <path d="M4 20h24v-8c0-1.5-1-3-2.5-3.5L21 6H8C5.5 6 4 8 4 10v10z" fill="${c.primary}" stroke="#0284C7" stroke-width="1.2" />
        <!-- Windows -->
        <path d="M20 8.5l3.5 2.5H19V8.5h1z" fill="#0F172A" />
        <rect x="13.5" y="8.5" width="4.5" height="4.5" rx="0.5" fill="#0F172A" />
        <rect x="8" y="8.5" width="4.5" height="4.5" rx="0.5" fill="#0F172A" />
        <!-- Front Headlight & Rear Light -->
        <circle cx="27.5" cy="15" r="1" fill="#FBBF24" />
        <circle cx="4.5" cy="15" r="1" fill="#EF4444" />
        <!-- Wheels -->
        <circle cx="9" cy="22.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <circle cx="23" cy="22.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'ambulance',
    char: '🚑',
    name: 'Ambulance',
    unicodeHex: 'U+1F691',
    category: 'sports-travel',
    tags: ['ambulance', 'emergency', 'medical', 'hospital', 'paramedic', 'siren', 'first aid', 'rescue', 'doctor', '🚑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#EF4444', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 20h24v-8l-4-4h-8l-4 4H4v8z" />
          <circle cx="9" cy="23" r="2.5" />
          <circle cx="23" cy="23" r="2.5" />
          <!-- Red cross -->
          <path d="M12 14h4M14 12v4" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Red Siren Flashing on Roof -->
        <circle cx="16" cy="4.5" r="1.5" fill="#EF4444" />
        <!-- White Ambulance Body -->
        <path d="M4 20h24v-8c0-1.5-1-3-2.5-3.5L21 6H7C5 6 4 7.5 4 10v10z" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1.2" />
        <!-- Red Emergency Cross Symbol on Door -->
        <rect x="12.5" y="11" width="3" height="7" rx="0.5" fill="${c.secondary}" />
        <rect x="10.5" y="13" width="7" height="3" rx="0.5" fill="${c.secondary}" />
        <!-- Windshield -->
        <path d="M20 8.5l3.5 2.5H19V8.5h1z" fill="#38BDF8" />
        <!-- Wheels -->
        <circle cx="9" cy="22.5" r="2.8" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
        <circle cx="23" cy="22.5" r="2.8" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'fire-engine',
    char: '🚒',
    name: 'Fire Engine',
    unicodeHex: 'U+1F692',
    category: 'sports-travel',
    tags: ['fire engine', 'fire truck', 'emergency', 'firefighter', 'ladder', 'hose', 'siren', 'rescue', 'hero', '🚒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#94A3B8', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 21h26v-9l-4-4H4v13z" />
          <line x1="7" y1="5" x2="21" y2="5" />
          <circle cx="9" cy="24" r="2.5" />
          <circle cx="23" cy="24" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Extension Ladder on Roof -->
        <line x1="6" y1="5" x2="22" y2="5" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <line x1="9" y1="4" x2="9" y2="6" stroke="#0F172A" stroke-width="1" />
        <line x1="14" y1="4" x2="14" y2="6" stroke="#0F172A" stroke-width="1" />
        <line x1="19" y1="4" x2="19" y2="6" stroke="#0F172A" stroke-width="1" />
        <!-- Red Fire Truck Body -->
        <path d="M3 21h26v-9c0-1.5-1-3-2.5-3.5L22 7H4c-1 0-1 1-1 2v12z" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- White Equipment Compartment Stripes -->
        <rect x="5" y="12" width="10" height="7" rx="0.5" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Windshield -->
        <path d="M21 9l4 2.5H20V9h1z" fill="#38BDF8" />
        <!-- Siren & Headlights -->
        <circle cx="21" cy="5.5" r="1.2" fill="#3B82F6" />
        <circle cx="28.5" cy="15" r="1" fill="#FBBF24" />
        <!-- Heavy Duty Wheels -->
        <circle cx="9" cy="23.5" r="3" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
        <circle cx="23" cy="23.5" r="3" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'small-airplane',
    char: '🛩',
    name: 'Small Airplane',
    unicodeHex: 'U+1F6E9',
    category: 'sports-travel',
    tags: ['small airplane', 'plane', 'airplane', 'flight', 'cessna', 'propeller', 'aviation', 'travel', 'pilot', 'monoplane', 'light aircraft', 'northeast', '🛩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E11D48', fillSecondary: '#F8FAFC', stroke: '#9F1239' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g transform="rotate(45 16 16)">
            <!-- Front Propeller Blades & Spinner -->
            <line x1="10" y1="3.5" x2="22" y2="3.5" />
            <circle cx="16" cy="3.5" r="1.5" />
            <!-- Airframe Body -->
            <path d="M16 4.5c-.8 0-1.5 1-1.5 3v3.5H3v3h11.5v10H8v2h16v-2h-6.5V14H29v-3H17.5V7.5c0-2-.7-3-1.5-3z" />
            <!-- Cockpit Glass -->
            <rect x="14.8" y="8" width="2.4" height="3" rx="0.8" />
            <!-- Wing Tip Accents -->
            <rect x="3" y="11" width="2.5" height="3" />
            <rect x="26.5" y="11" width="2.5" height="3" />
          </g>
        </g>`;
      }
      const propStroke = opts.style === 'color' ? '#64748B' : (opts.style === 'duotone' ? c.stroke : c.primary);
      const spinnerFill = opts.style === 'color' ? '#0F172A' : c.primary;
      const glassFill = opts.style === 'color' ? '#38BDF8' : (opts.style === 'duotone' ? c.secondary : c.primary);
      const wingTipFill = opts.style === 'color' ? '#F8FAFC' : (opts.style === 'duotone' ? c.secondary : c.primary);
      const strokeWidth = opts.style === 'silhouette' ? 0 : 1;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 16 16)">
        <!-- Front Propeller Blades & Spinner -->
        <line x1="10" y1="3.5" x2="22" y2="3.5" stroke="${propStroke}" stroke-width="1.8" stroke-linecap="round" />
        <circle cx="16" cy="3.5" r="1.5" fill="${spinnerFill}" />
        <!-- Airframe Body -->
        <path d="M16 4.5c-.8 0-1.5 1-1.5 3v3.5H3v3h11.5v10H8v2h16v-2h-6.5V14H29v-3H17.5V7.5c0-2-.7-3-1.5-3z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${strokeWidth}" />
        <!-- Cockpit Glass -->
        <rect x="14.8" y="8" width="2.4" height="3" rx="0.8" fill="${glassFill}" />
        <!-- Wing Tip Accents -->
        <rect x="3" y="11" width="2.5" height="3" fill="${wingTipFill}" />
        <rect x="26.5" y="11" width="2.5" height="3" fill="${wingTipFill}" />
      </g>`;
    },
  },
];
