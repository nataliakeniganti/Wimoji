import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const transportCarsMapIcons: WimojiIconDef[] = [
  {
    id: 'police-car',
    char: '🚓',
    name: 'Police Car',
    unicodeHex: 'U+1F693',
    category: 'sports-travel',
    tags: ['police car', 'cop', 'patrol', 'emergency', 'siren', 'law', 'officer', 'automobile', 'car', '🚓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#3B82F6', fillAccent: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 19h24v-6l-5-5H9l-5 5v6z" />
          <line x1="14" y1="5" x2="18" y2="5" />
          <circle cx="8" cy="22" r="2.5" />
          <circle cx="24" cy="22" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Blue & Red Emergency Lightbar on Roof -->
        <rect x="13.5" y="4.5" width="2.5" height="2" rx="0.5" fill="${c.accent}" />
        <rect x="16" y="4.5" width="2.5" height="2" rx="0.5" fill="${c.secondary}" />
        <!-- Black Patrol Cruiser Body -->
        <path d="M4 19h24v-5.5c0-1-0.8-2-1.8-2.5L21 7H10L5.8 11C4.8 11.5 4 12.5 4 13.5V19z" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- White Door Center Panel -->
        <rect x="11" y="11" width="9" height="7" fill="#F8FAFC" />
        <!-- Windows -->
        <path d="M10.5 8h4.5v3h-6z" fill="#38BDF8" />
        <path d="M16 8h4.5l2.5 3H16z" fill="#38BDF8" />
        <!-- Gold Police Star Starlet on Door -->
        <circle cx="15.5" cy="14.5" r="1.5" fill="#FBBF24" />
        <!-- Wheels -->
        <circle cx="8" cy="21.5" r="2.8" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
        <circle cx="24" cy="21.5" r="2.8" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'oncoming-police-car',
    char: '🚔',
    name: 'Oncoming Police Car',
    unicodeHex: 'U+1F694',
    category: 'sports-travel',
    tags: ['oncoming police car', 'police', 'cop', 'front', 'patrol', 'siren', 'emergency', 'law', 'officer', '🚔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6 21V13l3-6h14l3 6v8H6z" />
          <rect x="9" y="9" width="14" height="6" rx="1" />
          <circle cx="9" cy="18" r="1.5" />
          <circle cx="23" cy="18" r="1.5" />
          <rect x="13" y="4" width="6" height="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Flashing Beacon on Roof -->
        <rect x="12" y="3.5" width="4" height="2" rx="0.5" fill="#EF4444" />
        <rect x="16" y="3.5" width="4" height="2" rx="0.5" fill="${c.secondary}" />
        <!-- Front Tires -->
        <rect x="6.5" y="19" width="3" height="5" rx="1" fill="#0F172A" />
        <rect x="22.5" y="19" width="3" height="5" rx="1" fill="#0F172A" />
        <!-- Oncoming Police Cruiser Front -->
        <path d="M5.5 21v-8l3-6h15l3 6v8H5.5z" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Windshield -->
        <path d="M8.5 8h15l2 5h-19l2-5z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <!-- Headlights -->
        <circle cx="9" cy="17.5" r="1.8" fill="#FEF08A" stroke="#CA8A04" stroke-width="0.6" />
        <circle cx="23" cy="17.5" r="1.8" fill="#FEF08A" stroke="#CA8A04" stroke-width="0.6" />
        <!-- Front Grille & Bull Bar -->
        <rect x="12" y="16.5" width="8" height="3.5" rx="0.5" fill="#64748B" />
      </g>`;
    },
  },
  {
    id: 'taxi',
    char: '🚕',
    name: 'Taxi',
    unicodeHex: 'U+1F695',
    category: 'sports-travel',
    tags: ['taxi', 'cab', 'yellow cab', 'uber', 'ride', 'commute', 'car', 'transport', 'wheels', 'fare', '🚕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#0F172A', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 19h24v-6l-5-5H9l-5 5v6z" />
          <rect x="14" y="5" width="4" height="2" />
          <circle cx="8" cy="22" r="2.5" />
          <circle cx="24" cy="22" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Checker TAXI Sign on Roof -->
        <rect x="13.5" y="4.5" width="5" height="2.5" rx="0.8" fill="#0F172A" />
        <rect x="14.5" y="5" width="3" height="1.5" fill="#FBBF24" />
        <!-- Yellow Taxi Cab Body -->
        <path d="M4 19h24v-5.5c0-1-0.8-2-1.8-2.5L21 7H10L5.8 11C4.8 11.5 4 12.5 4 13.5V19z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Checkerboard Stripe on Side -->
        <line x1="4" y1="15" x2="28" y2="15" stroke="#0F172A" stroke-width="1.5" stroke-dasharray="2 2" />
        <!-- Windows -->
        <path d="M10.5 8h4.5v3h-6z" fill="#0F172A" />
        <path d="M16 8h4.5l2.5 3H16z" fill="#0F172A" />
        <!-- Headlight and Taillight -->
        <circle cx="27.5" cy="14" r="1" fill="#FEF08A" />
        <circle cx="4.5" cy="14" r="1" fill="#EF4444" />
        <!-- Wheels -->
        <circle cx="8" cy="21.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <circle cx="24" cy="21.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'oncoming-taxi',
    char: '🚖',
    name: 'Oncoming Taxi',
    unicodeHex: 'U+1F696',
    category: 'sports-travel',
    tags: ['oncoming taxi', 'taxi', 'cab', 'front', 'yellow cab', 'ride', 'fare', 'transport', 'car', '🚖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#0F172A', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6 21V13l3-6h14l3 6v8H6z" />
          <rect x="9" y="9" width="14" height="6" rx="1" />
          <circle cx="9" cy="18" r="1.5" />
          <circle cx="23" cy="18" r="1.5" />
          <rect x="13" y="4" width="6" height="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Roof Sign -->
        <rect x="12" y="3.5" width="8" height="2.5" rx="0.8" fill="#0F172A" />
        <rect x="13" y="4" width="6" height="1.5" rx="0.4" fill="#FEF08A" />
        <!-- Front Tires -->
        <rect x="6.5" y="19" width="3" height="5" rx="1" fill="${c.secondary}" />
        <rect x="22.5" y="19" width="3" height="5" rx="1" fill="${c.secondary}" />
        <!-- Oncoming Taxi Front (Yellow) -->
        <path d="M5.5 21v-8l3-6h15l3 6v8H5.5z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Windshield -->
        <path d="M8.5 8h15l2 5h-19l2-5z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <!-- Headlights -->
        <circle cx="9" cy="17.5" r="1.8" fill="#FEF08A" stroke="#B45309" stroke-width="0.6" />
        <circle cx="23" cy="17.5" r="1.8" fill="#FEF08A" stroke="#B45309" stroke-width="0.6" />
        <!-- Front Grille -->
        <line x1="12" y1="18" x2="20" y2="18" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'automobile',
    char: '🚗',
    name: 'Automobile',
    unicodeHex: 'U+1F697',
    category: 'sports-travel',
    tags: ['car', 'automobile', 'red car', 'vehicle', 'drive', 'trip', 'travel', 'sedan', 'wheels', '🚗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#0F172A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 19h24v-6l-5-5H9l-5 5v6z" />
          <circle cx="8" cy="22" r="2.5" />
          <circle cx="24" cy="22" r="2.5" />
          <path d="M10.5 9h4.5v3h-6z" />
          <path d="M16 9h4.5l2.5 3H16z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Red Car Body -->
        <path d="M4 19h24v-5.5c0-1-0.8-2-1.8-2.5L21 7H10L5.8 11C4.8 11.5 4 12.5 4 13.5V19z" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Windows -->
        <path d="M10.5 8h4.5v3h-6z" fill="#38BDF8" />
        <path d="M16 8h4.5l2.5 3H16z" fill="#38BDF8" />
        <!-- Headlight and Taillight -->
        <circle cx="27.5" cy="14" r="1" fill="#FEF08A" />
        <circle cx="4.5" cy="14" r="1" fill="#FEF08A" opacity="0.8" />
        <!-- Wheels -->
        <circle cx="8" cy="21.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <circle cx="24" cy="21.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'oncoming-automobile',
    char: '🚘',
    name: 'Oncoming Automobile',
    unicodeHex: 'U+1F698',
    category: 'sports-travel',
    tags: ['oncoming car', 'automobile', 'car', 'front', 'drive', 'vehicle', 'headlights', 'traffic', 'road', '🚘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#0F172A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6 21V13l3-6h14l3 6v8H6z" />
          <path d="M8.5 8h15l2 5h-19l2-5z" />
          <circle cx="9" cy="18" r="1.5" />
          <circle cx="23" cy="18" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Front Tires -->
        <rect x="6.5" y="19" width="3" height="5" rx="1" fill="${c.secondary}" />
        <rect x="22.5" y="19" width="3" height="5" rx="1" fill="${c.secondary}" />
        <!-- Red Car Front Body -->
        <path d="M5.5 21v-8l3-6h15l3 6v8H5.5z" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Front Windshield -->
        <path d="M8.5 8h15l2 5h-19l2-5z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <!-- Twin Headlights -->
        <circle cx="9" cy="17.5" r="1.8" fill="#FEF08A" stroke="#CA8A04" stroke-width="0.6" />
        <circle cx="23" cy="17.5" r="1.8" fill="#FEF08A" stroke="#CA8A04" stroke-width="0.6" />
        <!-- Front Grille -->
        <line x1="12" y1="18" x2="20" y2="18" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'sport-utility-vehicle',
    char: '🚙',
    name: 'Sport Utility Vehicle',
    unicodeHex: 'U+1F699',
    category: 'sports-travel',
    tags: ['suv', 'sport utility vehicle', 'jeep', '4x4', 'offroad', 'blue car', 'recreational', 'adventure', '🚙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#0F172A', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 20h24v-7l-4-5h-8l-2 3H4v9z" />
          <circle cx="9" cy="23" r="2.8" />
          <circle cx="23" cy="23" r="2.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Blue SUV Chassis -->
        <path d="M4 20h24v-6.5c0-1-0.8-2-1.8-2.5L22 7H11L8.5 11H4v9z" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <!-- Windows -->
        <path d="M12 8.5h4.5v3h-6z" fill="#0F172A" />
        <path d="M17.5 8.5h4l2.5 3h-6.5z" fill="#0F172A" />
        <!-- Roof Rack -->
        <line x1="11" y1="5.5" x2="21" y2="5.5" stroke="#64748B" stroke-width="1.8" stroke-linecap="round" />
        <!-- Big Off-road Wheels -->
        <circle cx="9" cy="22.5" r="3.2" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <circle cx="23" cy="22.5" r="3.2" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'delivery-truck',
    char: '🚚',
    name: 'Delivery Truck',
    unicodeHex: 'U+1F69A',
    category: 'sports-travel',
    tags: ['delivery truck', 'truck', 'lorry', 'shipping', 'cargo', 'package', 'transport', 'freight', 'haul', '🚚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0F172A', fillAccent: '#F8FAFC', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="7" width="16" height="14" rx="1.5" />
          <path d="M19 13h5l4 4v4H19v-8z" />
          <circle cx="8" cy="24" r="2.5" />
          <circle cx="23" cy="24" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Cargo Container Box (White/Silver) -->
        <rect x="3" y="7" width="16" height="14" rx="1.5" fill="${c.accent}" stroke="#CBD5E1" stroke-width="1.2" />
        <line x1="11" y1="7" x2="11" y2="21" stroke="#E2E8F0" stroke-width="1" />
        <!-- Driver Cab (Sky Blue) -->
        <path d="M19 12h5l4 4.5v4.5H19V12z" fill="${c.primary}" stroke="#0284C7" stroke-width="1.2" />
        <!-- Cab Window -->
        <path d="M20 13.5h3.5l2.5 3h-6z" fill="#0F172A" />
        <!-- Wheels -->
        <circle cx="7" cy="23.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <circle cx="15" cy="23.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <circle cx="24" cy="23.5" r="2.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'articulated-lorry',
    char: '🚛',
    name: 'Articulated Lorry',
    unicodeHex: 'U+1F69B',
    category: 'sports-travel',
    tags: ['articulated lorry', 'semi truck', '18 wheeler', 'freight', 'transport', 'shipping', 'big rig', 'highway', '🚛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#94A3B8', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="7" width="17" height="14" rx="1" />
          <path d="M20 12h4l4 4v5h-8v-9z" />
          <circle cx="6" cy="24" r="2.2" />
          <circle cx="11" cy="24" r="2.2" />
          <circle cx="24" cy="24" r="2.2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Big Trailer Cargo (Silver) -->
        <rect x="3" y="7" width="17" height="14" rx="1" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Tractor Cab Unit (Red) -->
        <path d="M20 11.5h4.5l4 4.5v5H20v-9.5z" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <path d="M21 13h3l2.5 3H21z" fill="#0F172A" />
        <!-- Exhaust Stack on Cab -->
        <line x1="20.5" y1="7" x2="20.5" y2="12" stroke="#64748B" stroke-width="1.8" />
        <!-- Wheels -->
        <circle cx="6" cy="23.5" r="2.6" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
        <circle cx="12" cy="23.5" r="2.6" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
        <circle cx="24" cy="23.5" r="2.6" fill="#0F172A" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'tractor',
    char: '🚜',
    name: 'Tractor',
    unicodeHex: 'U+1F69C',
    category: 'sports-travel',
    tags: ['tractor', 'farm', 'agriculture', 'field', 'harvest', 'crop', 'countryside', 'machinery', 'vehicle', '🚜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#0F172A', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="9" cy="21" r="5" />
          <circle cx="24" cy="23" r="3" />
          <path d="M9 16v-8h6v8h9v5h-7" />
          <line x1="20" y1="8" x2="20" y2="16" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Farm Tractor Body (Green) -->
        <rect x="14" y="15" width="10" height="6" rx="1" fill="${c.primary}" stroke="#15803D" stroke-width="1.2" />
        <rect x="8" y="8" width="7" height="9" rx="1" fill="${c.primary}" stroke="#15803D" stroke-width="1.2" />
        <rect x="9.5" y="9.5" width="4" height="4" rx="0.5" fill="#38BDF8" />
        <!-- Exhaust Pipe -->
        <line x1="21" y1="7" x2="21" y2="15" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />
        <!-- Huge Rear Mud Wheel (Left) -->
        <circle cx="9" cy="21" r="5.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.5" />
        <circle cx="9" cy="21" r="2.8" fill="#FBBF24" />
        <!-- Smaller Front Wheel (Right) -->
        <circle cx="24" cy="23" r="3.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <circle cx="24" cy="23" r="1.5" fill="#FBBF24" />
      </g>`;
    },
  },
  {
    id: 'ship',
    char: '🚢',
    name: 'Ship',
    unicodeHex: 'U+1F6A2',
    category: 'sports-travel',
    tags: ['ship', 'cruise', 'vessel', 'boat', 'ocean', 'passenger', 'sea', 'voyage', 'travel', 'marine', '🚢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#EF4444', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 22l3 5h18l3-5H4z" />
          <rect x="8" y="15" width="16" height="7" rx="1" />
          <rect x="11" y="9" width="10" height="6" rx="1" />
          <line x1="14" y1="9" x2="14" y2="5" />
          <line x1="18" y1="9" x2="18" y2="5" />
          <path d="M2 28c4-2 8 2 12 0s8-2 12 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Funnels / Smokestacks (Red & Black) -->
        <rect x="13.5" y="4.5" width="2.5" height="4.5" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.8" />
        <rect x="13.5" y="4.5" width="2.5" height="1.5" fill="#0F172A" />
        <rect x="17.5" y="4.5" width="2.5" height="4.5" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.8" />
        <rect x="17.5" y="4.5" width="2.5" height="1.5" fill="#0F172A" />
        <!-- Superstructure Decks (White) -->
        <rect x="11" y="9" width="10.5" height="6.5" rx="1" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="0.8" />
        <rect x="8" y="15" width="16" height="7" rx="1" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Porthole Windows -->
        <circle cx="11" cy="18" r="1" fill="#0F172A" />
        <circle cx="16" cy="18" r="1" fill="#0F172A" />
        <circle cx="21" cy="18" r="1" fill="#0F172A" />
        <!-- Ship Hull (Navy Blue) -->
        <polygon points="3.5,21.5 6.5,27 25.5,27 28.5,21.5" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <!-- Ocean Waves -->
        <path d="M2 28c4-2 8 2 12 0s8-2 12 0" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'speedboat',
    char: '🚤',
    name: 'Speedboat',
    unicodeHex: 'U+1F6A4',
    category: 'sports-travel',
    tags: ['speedboat', 'boat', 'speed', 'water', 'motorboat', 'lake', 'sea', 'fast', 'ocean', 'ride', '🚤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 22l3 4h18l4-4L25 15H11L4 22z" />
          <path d="M12 15l2-5h7l2 5" />
          <path d="M2 27c4-1 8 1 12 0s8-1 12 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Windshield -->
        <polygon points="12.5,15 15,9.5 21.5,9.5 23.5,15" fill="#38BDF8" stroke="#0284C7" stroke-width="0.8" />
        <!-- Steering / Cockpit -->
        <rect x="15" y="12" width="5" height="3" fill="#0F172A" />
        <!-- Speedboat Hull (Sporty Red) -->
        <polygon points="4,21.5 6.5,25.5 24.5,25.5 28.5,21.5 25,15 11,15" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Hull Deck Top (White) -->
        <polygon points="11,15 25,15 28.5,21.5 25,21.5" fill="${c.secondary}" />
        <!-- Water Spray Wake -->
        <path d="M2 27c4-1.5 8 1.5 12 0s8-1.5 14 0" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'horizontal-traffic-light',
    char: '🚥',
    name: 'Horizontal Traffic Light',
    unicodeHex: 'U+1F6A5',
    category: 'warnings',
    tags: ['horizontal traffic light', 'traffic light', 'stop', 'go', 'signal', 'intersection', 'red', 'yellow', 'green', 'road', '🚥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="10" width="26" height="12" rx="6" />
          <circle cx="8" cy="16" r="3" />
          <circle cx="16" cy="16" r="3" />
          <circle cx="24" cy="16" r="3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Horizontal Housing Shell -->
        <rect x="3" y="10" width="26" height="12" rx="6" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Red Light (Left) -->
        <circle cx="8" cy="16" r="3.2" fill="#EF4444" stroke="#991B1B" stroke-width="0.8" />
        <!-- Amber Light (Center) -->
        <circle cx="16" cy="16" r="3.2" fill="#FBBF24" stroke="#D97706" stroke-width="0.8" />
        <!-- Green Light (Right) -->
        <circle cx="24" cy="16" r="3.2" fill="#22C55E" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'vertical-traffic-light',
    char: '🚦',
    name: 'Vertical Traffic Light',
    unicodeHex: 'U+1F6A6',
    category: 'warnings',
    tags: ['traffic light', 'vertical traffic light', 'stop', 'go', 'signal', 'intersection', 'red', 'yellow', 'green', 'traffic', '🚦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="10" y="3" width="12" height="26" rx="6" />
          <circle cx="16" cy="8" r="3" />
          <circle cx="16" cy="16" r="3" />
          <circle cx="16" cy="24" r="3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Vertical Housing Shell -->
        <rect x="10" y="3" width="12" height="26" rx="6" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Red Light (Top) -->
        <circle cx="16" cy="8" r="3.2" fill="#EF4444" stroke="#991B1B" stroke-width="0.8" />
        <!-- Amber Light (Middle) -->
        <circle cx="16" cy="16" r="3.2" fill="#FBBF24" stroke="#D97706" stroke-width="0.8" />
        <!-- Green Light (Bottom) -->
        <circle cx="16" cy="24" r="3.2" fill="#22C55E" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'construction',
    char: '🚧',
    name: 'Construction Sign',
    unicodeHex: 'U+1F6A7',
    category: 'warnings',
    tags: ['construction', 'barrier', 'roadwork', 'warning', 'hazard', 'work', 'caution', 'block', 'traffic', '🚧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#0F172A', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="9" width="26" height="12" rx="1.5" />
          <line x1="8" y1="21" x2="6" y2="29" />
          <line x1="24" y1="21" x2="26" y2="29" />
          <line x1="7" y1="9" x2="13" y2="21" />
          <line x1="15" y1="9" x2="21" y2="21" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Support Legs -->
        <line x1="8" y1="21" x2="5.5" y2="29" stroke="#64748B" stroke-width="2.5" stroke-linecap="round" />
        <line x1="24" y1="21" x2="26.5" y2="29" stroke="#64748B" stroke-width="2.5" stroke-linecap="round" />
        <!-- Barrier Board (Yellow & Black Stripes) -->
        <rect x="3" y="9" width="26" height="12" rx="1.5" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <polygon points="7,9 11,9 15,21 11,21" fill="${c.secondary}" />
        <polygon points="17,9 21,9 25,21 21,21" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'police-car-light',
    char: '🚨',
    name: 'Police Car Light',
    unicodeHex: 'U+1F6A8',
    category: 'warnings',
    tags: ['siren', 'police car light', 'emergency', 'beacon', 'flashing', 'alarm', 'alert', 'red light', 'warning', '🚨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#334155', fillAccent: '#FEF08A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M9 22h14v-8c0-4-3-7-7-7s-7 3-7 7v8z" />
          <rect x="6" y="22" width="20" height="5" rx="1" />
          <line x1="16" y1="2" x2="16" y2="5" />
          <line x1="5" y1="9" x2="8" y2="11" />
          <line x1="27" y1="9" x2="24" y2="11" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Light Flash Rays -->
        <line x1="16" y1="1.5" x2="16" y2="4.5" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="4.5" y1="8" x2="7.5" y2="10.5" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="27.5" y1="8" x2="24.5" y2="10.5" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <!-- Red Flashing Siren Dome -->
        <path d="M8.5 22h15v-8c0-4.5-3.5-7.5-7.5-7.5s-7.5 3-7.5 7.5v8z" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Light Reflection Highlight -->
        <path d="M12 9c2-1.5 6-1.5 8 0" stroke="#FCA5A5" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <!-- Chrome/Dark Metal Mounting Base -->
        <rect x="6" y="22" width="20" height="5" rx="1.5" fill="${c.secondary}" stroke="#0F172A" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'triangular-flag',
    char: '🚩',
    name: 'Triangular Flag',
    unicodeHex: 'U+1F6A9',
    category: 'objects-places',
    tags: ['triangular flag', 'flag', 'red flag', 'post', 'pennant', 'pin', 'marker', 'golf', 'map', 'point', '🚩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#64748B', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="7" y1="4" x2="7" y2="29" />
          <polygon points="7,5 26,12 7,19" />
          <line x1="4" y1="29" x2="10" y2="29" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Steel Pole & Base -->
        <line x1="7" y1="4" x2="7" y2="29" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="7" cy="4" r="1.5" fill="#FBBF24" />
        <line x1="3.5" y1="29" x2="10.5" y2="29" stroke="#334155" stroke-width="2.5" stroke-linecap="round" />
        <!-- Red Triangular Pennant Flag -->
        <polygon points="7,5 27,12 7,19" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'door',
    char: '🚪',
    name: 'Door',
    unicodeHex: 'U+1F6AA',
    category: 'objects-places',
    tags: ['door', 'entrance', 'exit', 'entry', 'room', 'home', 'knob', 'wood', 'doorway', 'open', '🚪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#78350F', fillAccent: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="7" y="3" width="18" height="26" rx="1.5" />
          <circle cx="21" cy="17" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Door Frame (Dark Wood) -->
        <rect x="6" y="2.5" width="20" height="27" rx="1.8" fill="${c.secondary}" stroke="#451A03" stroke-width="1" />
        <!-- Wooden Door Panel -->
        <rect x="7.5" y="4" width="17" height="24" rx="1" fill="${c.primary}" stroke="#451A03" stroke-width="0.8" />
        <!-- Recessed Door Molding Panels -->
        <rect x="9.5" y="6" width="13" height="8" rx="0.5" fill="#92400E" />
        <rect x="9.5" y="16.5" width="13" height="9.5" rx="0.5" fill="#92400E" />
        <!-- Golden Door Knob -->
        <circle cx="21" cy="17" r="1.6" fill="${c.accent}" stroke="#D97706" stroke-width="0.6" />
      </g>`;
    },
  },
];
