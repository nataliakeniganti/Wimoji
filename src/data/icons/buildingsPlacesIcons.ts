import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const buildingsPlacesIcons: WimojiIconDef[] = [
  {
    id: 'house',
    char: '🏠',
    name: 'House',
    unicodeHex: 'U+1F3E0',
    category: 'objects-places',
    tags: ['house', 'home', 'residence', 'building', 'cottage', 'roof', 'door', 'architecture', 'suburb', '🏠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', fillAccent: '#F59E0B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4 4,14 28,14" />
          <rect x="6" y="14" width="20" height="13" />
          <rect x="13" y="19" width="6" height="8" />
          <rect x="8" y="16" width="3" height="3" />
          <rect x="21" y="16" width="3" height="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Chimney -->
        <rect x="21" y="6" width="3" height="6" fill="#78350F" />
        <!-- Red Gabled Roof -->
        <polygon points="16,4 3,14.5 29,14.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- House Wall Body -->
        <rect x="6" y="14.5" width="20" height="12.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <!-- Front Windows -->
        <rect x="8" y="16.5" width="3.5" height="3.5" rx="0.5" fill="#38BDF8" />
        <rect x="20.5" y="16.5" width="3.5" height="3.5" rx="0.5" fill="#38BDF8" />
        <!-- Wooden Door with Knob -->
        <rect x="13" y="19.5" width="6" height="7.5" fill="${c.accent}" stroke="#B45309" stroke-width="0.8" />
        <circle cx="17.5" cy="23.5" r="0.6" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'house-with-garden',
    char: '🏡',
    name: 'House with Garden',
    unicodeHex: 'U+1F3E1',
    category: 'objects-places',
    tags: ['house with garden', 'home', 'yard', 'tree', 'garden', 'suburb', 'cottage', 'lawn', 'nature', '🏡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#16A34A', fillAccent: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- House -->
          <polygon points="13,6 4,14 22,14" />
          <rect x="6" y="14" width="14" height="13" />
          <rect x="11" y="20" width="4" height="7" />
          <!-- Garden Tree -->
          <circle cx="25" cy="15" r="4.5" />
          <line x1="25" y1="19.5" x2="25" y2="27" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Garden Tree on Right -->
        <rect x="24" y="19" width="2" height="8" fill="#78350F" />
        <circle cx="25" cy="14" r="5" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
        <!-- House Roof -->
        <polygon points="13,6 3.5,14.5 22.5,14.5" fill="${c.primary}" stroke="#1D4ED8" stroke-width="1.2" />
        <!-- House Body -->
        <rect x="5.5" y="14.5" width="15" height="12.5" fill="${c.accent}" stroke="#94A3B8" stroke-width="1" />
        <!-- Window & Front Door -->
        <rect x="7.5" y="16.5" width="3" height="3" rx="0.5" fill="#38BDF8" />
        <rect x="11.5" y="19.5" width="4" height="7.5" fill="#D97706" stroke="#92400E" stroke-width="0.8" />
        <!-- Grass Verge Lawn -->
        <rect x="2" y="26.5" width="28" height="1.5" rx="0.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'office-building',
    char: '🏢',
    name: 'Office Building',
    unicodeHex: 'U+1F3E2',
    category: 'objects-places',
    tags: ['office building', 'skyscraper', 'work', 'corporate', 'business', 'company', 'city', 'downtown', '🏢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1E293B', fillAccent: '#93C5FD', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="4" width="20" height="24" rx="1" />
          <line x1="10" y1="8" x2="13" y2="8" />
          <line x1="19" y1="8" x2="22" y2="8" />
          <line x1="10" y1="13" x2="13" y2="13" />
          <line x1="19" y1="13" x2="22" y2="13" />
          <line x1="10" y1="18" x2="13" y2="18" />
          <line x1="19" y1="18" x2="22" y2="18" />
          <rect x="13" y="22" width="6" height="6" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="4" width="20" height="24" rx="1.5" fill="${c.secondary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Window Rows (Lit Cyan/Blue) -->
        <g fill="${c.accent}">
          <rect x="9" y="7" width="3.5" height="3" rx="0.4" />
          <rect x="14.25" y="7" width="3.5" height="3" rx="0.4" />
          <rect x="19.5" y="7" width="3.5" height="3" rx="0.4" />
          <rect x="9" y="12" width="3.5" height="3" rx="0.4" />
          <rect x="14.25" y="12" width="3.5" height="3" rx="0.4" />
          <rect x="19.5" y="12" width="3.5" height="3" rx="0.4" />
          <rect x="9" y="17" width="3.5" height="3" rx="0.4" />
          <rect x="14.25" y="17" width="3.5" height="3" rx="0.4" />
          <rect x="19.5" y="17" width="3.5" height="3" rx="0.4" />
        </g>
        <!-- Glass Revolving Doorway -->
        <rect x="12" y="22" width="8" height="6" fill="${c.primary}" stroke="#0F172A" stroke-width="0.8" />
        <line x1="16" y1="22" x2="16" y2="28" stroke="#FFFFFF" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'japanese-post-office',
    char: '🏣',
    name: 'Japanese Post Office',
    unicodeHex: 'U+1F3E3',
    category: 'objects-places',
    tags: ['japanese post office', 'post office', 'japan', 'mail', 'postal mark', 'letters', 'package', '🏣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="6" width="22" height="22" rx="1.5" />
          <!-- Japanese Postal Mark 〒 -->
          <line x1="11" y1="10" x2="21" y2="10" />
          <line x1="11" y1="13" x2="21" y2="13" />
          <line x1="16" y1="13" x2="16" y2="18" />
          <!-- Windows & Door -->
          <rect x="8" y="20" width="4" height="4" />
          <rect x="14" y="20" width="4" height="8" />
          <rect x="20" y="20" width="4" height="4" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="6" width="22" height="22" rx="1.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Japanese Postal Mark Emblem (Red 〒) -->
        <g stroke="${c.primary}" stroke-width="2">
          <line x1="11" y1="10" x2="21" y2="10" />
          <line x1="11" y1="13" x2="21" y2="13" />
          <line x1="16" y1="13" x2="16" y2="18" />
        </g>
        <!-- Windows and Entrance -->
        <rect x="8" y="20" width="4" height="4" rx="0.5" fill="#38BDF8" />
        <rect x="20" y="20" width="4" height="4" rx="0.5" fill="#38BDF8" />
        <rect x="14" y="20" width="4" height="8" fill="#334155" />
      </g>`;
    },
  },
  {
    id: 'post-office',
    char: '🏤',
    name: 'Post Office',
    unicodeHex: 'U+1F3E4',
    category: 'objects-places',
    tags: ['post office', 'mail', 'postal', 'horn', 'letters', 'parcel', 'stamp', 'courier', '🏤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#E2E8F0', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4 4,11 28,11" />
          <rect x="6" y="11" width="20" height="17" />
          <!-- Post Horn -->
          <circle cx="16" cy="16" r="2.5" />
          <path d="M16 13.5h3v5" />
          <!-- Door -->
          <rect x="13" y="21" width="6" height="7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,4 3,11.5 29,11.5" fill="#DC2626" stroke="#991B1B" stroke-width="1.2" />
        <rect x="5.5" y="11.5" width="21" height="16.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <!-- Golden Post Horn Emblem -->
        <circle cx="16" cy="16.5" r="2.8" fill="none" stroke="${c.primary}" stroke-width="1.5" />
        <path d="M16 13.7h3.5v5" stroke="${c.primary}" stroke-width="1.5" fill="none" />
        <polygon points="19.5,18 21.5,19.5 19.5,21" fill="${c.primary}" stroke="none" />
        <!-- Entrance Door -->
        <rect x="13" y="21.5" width="6" height="6.5" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'hospital',
    char: '🏥',
    name: 'Hospital',
    unicodeHex: 'U+1F3E5',
    category: 'objects-places',
    tags: ['hospital', 'doctor', 'medical', 'clinic', 'health', 'cross', 'ambulance', 'emergency', '🏥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="23" rx="1.5" />
          <!-- Red Cross -->
          <path d="M14 9h4v8h-4z" />
          <path d="M12 11h8v4h-8z" />
          <!-- Windows & Door -->
          <rect x="8" y="18" width="4" height="4" />
          <rect x="20" y="18" width="4" height="4" />
          <rect x="14" y="22" width="4" height="6" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="23" rx="1.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Prominent Red Medical Cross Emblem -->
        <rect x="14.25" y="8" width="3.5" height="9" fill="${c.primary}" />
        <rect x="11.5" y="10.75" width="9" height="3.5" fill="${c.primary}" />
        <!-- Emergency Glass Entrance -->
        <rect x="8" y="19" width="3.5" height="3.5" rx="0.5" fill="#38BDF8" />
        <rect x="20.5" y="19" width="3.5" height="3.5" rx="0.5" fill="#38BDF8" />
        <rect x="13.5" y="21" width="5" height="7" fill="#0284C7" />
        <line x1="16" y1="21" x2="16" y2="28" stroke="#FFFFFF" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'bank',
    char: '🏦',
    name: 'Bank',
    unicodeHex: 'U+1F3E6',
    category: 'objects-places',
    tags: ['bank', 'money', 'finance', 'dollar', 'columns', 'building', 'loan', 'vault', 'cash', '🏦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#E2E8F0', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4 4,11 28,11" />
          <rect x="5" y="11" width="22" height="2.5" />
          <line x1="8" y1="13.5" x2="8" y2="24" />
          <line x1="13" y1="13.5" x2="13" y2="24" />
          <line x1="19" y1="13.5" x2="19" y2="24" />
          <line x1="24" y1="13.5" x2="24" y2="24" />
          <rect x="4" y="24" width="24" height="4" />
          <!-- Dollar Sign -->
          <path d="M16 6.5v3" />
          <path d="M17 7.5h-1.5c-0.5 0-1 0.3-1 0.7s0.5 0.7 1 0.7h1c0.5 0 1 0.3 1 0.7s-0.5 0.7-1 0.7h-1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,4 3.5,11 28.5,11" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Dollar Sign in Pediment -->
        <g stroke="${c.primary}" stroke-width="1.4" fill="none">
          <line x1="16" y1="6" x2="16" y2="9.5" />
          <path d="M17.2 7h-1.8c-0.4 0-0.8 0.3-0.8 0.6s0.4 0.6 0.8 0.6h1.2c0.4 0 0.8 0.3 0.8 0.6s-0.4 0.6-0.8 0.6h-1.8" />
        </g>
        <rect x="4.5" y="11" width="23" height="2.5" fill="#94A3B8" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Classical Columns -->
        <rect x="7" y="13.5" width="2.5" height="10.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <rect x="12" y="13.5" width="2.5" height="10.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <rect x="17.5" y="13.5" width="2.5" height="10.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <rect x="22.5" y="13.5" width="2.5" height="10.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Stepped Base -->
        <rect x="3" y="24" width="26" height="4" rx="0.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'atm-sign',
    char: '🏧',
    name: 'ATM Sign',
    unicodeHex: 'U+1F3E7',
    category: 'objects-places',
    tags: ['atm sign', 'atm', 'cash', 'money', 'bank', 'automatic teller machine', 'currency', 'withdraw', '🏧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="4" />
          <!-- A -->
          <polygon points="9,11 6,22 12,22" />
          <line x1="7.5" y1="18" x2="10.5" y2="18" />
          <!-- T -->
          <line x1="14" y1="11" x2="18" y2="11" />
          <line x1="16" y1="11" x2="16" y2="22" />
          <!-- M -->
          <polyline points="20,22 20,11 23,17 26,11 26,22" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="3" y="3" width="26" height="26" rx="5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Bold White ATM Text -->
        <g stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="9,11 6.5,22 11.5,22" />
          <line x1="7.8" y1="18" x2="10.2" y2="18" />
          <line x1="13.5" y1="11" x2="18.5" y2="11" />
          <line x1="16" y1="11" x2="16" y2="22" />
          <polyline points="20,22 20,11 23,17 26,11 26,22" />
        </g>
      </g>`;
    },
  },
  {
    id: 'hotel',
    char: '🏨',
    name: 'Hotel',
    unicodeHex: 'U+1F3E8',
    category: 'objects-places',
    tags: ['hotel', 'resort', 'motel', 'stay', 'vacation', 'lodging', 'room', 'travel', 'h', '🏨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#64748B', fillAccent: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="5" width="20" height="23" rx="1.5" />
          <!-- H Sign -->
          <line x1="13" y1="8" x2="13" y2="13" />
          <line x1="19" y1="8" x2="19" y2="13" />
          <line x1="13" y1="10.5" x2="19" y2="10.5" />
          <!-- Windows & Canopy -->
          <rect x="9" y="16" width="3.5" height="3" />
          <rect x="19.5" y="16" width="3.5" height="3" />
          <rect x="12" y="22" width="8" height="6" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="5" width="20" height="23" rx="1.8" fill="${c.secondary}" stroke="#334155" stroke-width="1.2" />
        <!-- Hotel H Sign Badge -->
        <rect x="11" y="7" width="10" height="7" rx="1" fill="${c.primary}" />
        <g stroke="#FFFFFF" stroke-width="1.8">
          <line x1="13.5" y1="8.5" x2="13.5" y2="12.5" />
          <line x1="18.5" y1="8.5" x2="18.5" y2="12.5" />
          <line x1="13.5" y1="10.5" x2="18.5" y2="10.5" />
        </g>
        <!-- Windows -->
        <rect x="9" y="16" width="3.5" height="3" rx="0.4" fill="#38BDF8" />
        <rect x="14.25" y="16" width="3.5" height="3" rx="0.4" fill="#38BDF8" />
        <rect x="19.5" y="16" width="3.5" height="3" rx="0.4" fill="#38BDF8" />
        <!-- Canopy Entrance -->
        <rect x="11.5" y="22" width="9" height="6" fill="#1E293B" />
        <polygon points="10,22 22,22 20.5,23.5 11.5,23.5" fill="${c.accent}" stroke="#D97706" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'love-hotel',
    char: '🏩',
    name: 'Love Hotel',
    unicodeHex: 'U+1F3E9',
    category: 'objects-places',
    tags: ['love hotel', 'hotel', 'heart', 'romance', 'pink', 'couple', 'vacation', 'lodging', '🏩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#FDF2F8', stroke: '#DB2777' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="6" width="20" height="22" rx="1.5" />
          <!-- Heart on Top -->
          <path d="M16 14s-3.5-2.5-3.5-5a2 2 0 0 1 3.5-1 2 2 0 0 1 3.5 1c0 2.5-3.5 5-3.5 5z" />
          <rect x="9" y="17" width="3.5" height="3" />
          <rect x="19.5" y="17" width="3.5" height="3" />
          <rect x="13" y="22" width="6" height="6" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="6" width="20" height="22" rx="1.8" fill="${c.secondary}" stroke="#F472B6" stroke-width="1.2" />
        <!-- Pink/Red Heart Emblem -->
        <path d="M16 14.5s-4-2.8-4-5.5a2.2 2.2 0 0 1 4-1.2 2.2 2.2 0 0 1 4 1.2c0 2.7-4 5.5-4 5.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Windows -->
        <rect x="9" y="17" width="3.5" height="3" rx="0.4" fill="#F472B6" />
        <rect x="19.5" y="17" width="3.5" height="3" rx="0.4" fill="#F472B6" />
        <rect x="13" y="22" width="6" height="6" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'convenience-store',
    char: '🏪',
    name: 'Convenience Store',
    unicodeHex: 'U+1F3EA',
    category: 'objects-places',
    tags: ['convenience store', 'store', 'shop', '24/7', 'market', 'kiosk', 'groceries', 'snack', '🏪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#F8FAFC', fillAccent: '#EA580C', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="9" width="24" height="19" rx="1" />
          <rect x="4" y="9" width="24" height="5" />
          <rect x="6" y="17" width="7" height="8" />
          <rect x="19" y="17" width="7" height="8" />
          <line x1="16" y1="17" x2="16" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="9" width="24" height="19" rx="1.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Striped Convenience Store Awning (Green, Orange) -->
        <rect x="4" y="9" width="24" height="5.5" fill="${c.primary}" />
        <rect x="4" y="12" width="24" height="2" fill="${c.accent}" />
        <!-- Large Glass Display Windows -->
        <rect x="6.5" y="17" width="6.5" height="8" rx="0.5" fill="#38BDF8" opacity="0.6" />
        <rect x="19" y="17" width="6.5" height="8" rx="0.5" fill="#38BDF8" opacity="0.6" />
        <!-- Glass Sliding Doors -->
        <rect x="14" y="17" width="4" height="11" fill="#0284C7" opacity="0.8" />
        <line x1="16" y1="17" x2="16" y2="28" stroke="#FFFFFF" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'school',
    char: '🏫',
    name: 'School',
    unicodeHex: 'U+1F3EB',
    category: 'objects-places',
    tags: ['school', 'education', 'classroom', 'student', 'study', 'learn', 'bell', 'clock tower', 'campus', '🏫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="13" width="24" height="15" rx="1" />
          <!-- Central Clock Tower -->
          <polygon points="16,3 12,8 20,8" />
          <rect x="13" y="8" width="6" height="5" />
          <circle cx="16" cy="10.5" r="1.5" />
          <!-- Windows & Door -->
          <rect x="7" y="16" width="3" height="3" />
          <rect x="22" y="16" width="3" height="3" />
          <rect x="14" y="21" width="4" height="7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- School Clock Tower on Roof -->
        <polygon points="16,3 12,8 20,8" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <rect x="13" y="8" width="6" height="5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <circle cx="16" cy="10.5" r="1.6" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <line x1="16" y1="9.6" x2="16" y2="10.5" stroke="#0F172A" stroke-width="0.5" />
        <line x1="16" y1="10.5" x2="16.8" y2="10.5" stroke="#0F172A" stroke-width="0.5" />
        <!-- Brick Schoolhouse Building -->
        <rect x="4" y="13" width="24" height="15" rx="1.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Classroom Windows -->
        <rect x="7" y="16" width="3.5" height="3.5" rx="0.5" fill="#38BDF8" />
        <rect x="21.5" y="16" width="3.5" height="3.5" rx="0.5" fill="#38BDF8" />
        <rect x="7" y="21.5" width="3.5" height="3.5" rx="0.5" fill="#38BDF8" />
        <rect x="21.5" y="21.5" width="3.5" height="3.5" rx="0.5" fill="#38BDF8" />
        <!-- Wooden Double Doors -->
        <rect x="13.5" y="21" width="5" height="7" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'department-store',
    char: '🏬',
    name: 'Department Store',
    unicodeHex: 'U+1F3EC',
    category: 'objects-places',
    tags: ['department store', 'mall', 'shopping', 'store', 'retail', 'plaza', 'center', 'commercial', 'fashion', '🏬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#64748B', fillAccent: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="6" width="24" height="22" rx="1.5" />
          <rect x="8" y="10" width="16" height="4" rx="0.5" />
          <rect x="8" y="16" width="16" height="4" rx="0.5" />
          <rect x="12" y="22" width="8" height="6" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="6" width="24" height="22" rx="1.8" fill="${c.secondary}" stroke="#334155" stroke-width="1.2" />
        <!-- Multi-floor Panoramic Window Ribbons -->
        <rect x="7" y="9.5" width="18" height="4.5" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.8" />
        <rect x="7" y="15.5" width="18" height="4.5" rx="0.8" fill="${c.accent}" stroke="#0284C7" stroke-width="0.8" />
        <!-- Grand Mall Glass Atrium Entrance -->
        <rect x="11.5" y="22" width="9" height="6" fill="${c.primary}" stroke="#1E40AF" stroke-width="0.8" />
        <line x1="16" y1="22" x2="16" y2="28" stroke="#FFFFFF" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'shibuya-109',
    char: '\uE50A',
    name: 'Shibuya 109',
    unicodeHex: 'U+E50A',
    category: 'objects-places',
    tags: [
      'shibuya 109',
      'shibuya',
      '109',
      'boutique 109',
      'boutique',
      'department store',
      'tokyo',
      'japan',
      'fashion',
      'mall',
      'shopping',
      'building',
      'landmark',
      'softbank',
      'carrier',
      '\uE50A',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F8FAFC',
        fillSecondary: '#EF4444',
        fillAccent: '#38BDF8',
        stroke: '#475569',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Flanking boutique wings -->
          <rect x="4" y="11" width="7" height="17" />
          <rect x="21" y="11" width="7" height="17" />
          <!-- Wing windows -->
          <line x1="6" y1="14.5" x2="9" y2="14.5" />
          <line x1="6" y1="18.5" x2="9" y2="18.5" />
          <line x1="6" y1="22.5" x2="9" y2="22.5" />
          <line x1="23" y1="14.5" x2="26" y2="14.5" />
          <line x1="23" y1="18.5" x2="26" y2="18.5" />
          <line x1="23" y1="22.5" x2="26" y2="22.5" />
          <!-- Tower cylinder -->
          <rect x="10.5" y="4" width="11" height="24" rx="2" />
          <!-- 109 Sign box -->
          <rect x="11.5" y="5.5" width="9" height="5" rx="1.2" />
          <!-- 1 0 9 text/lines -->
          <path d="M12.8 7.2 L13.6 6.5 V9.2" />
          <ellipse cx="16" cy="7.8" rx="0.9" ry="1.3" />
          <ellipse cx="18.5" cy="7.4" rx="0.8" ry="0.8" />
          <path d="M19.3 7.4 V8.6 C19.3 9.2 18.5 9.4 17.8 9.1" />
          <!-- Tower window ribbons -->
          <line x1="12" y1="13" x2="20" y2="13" />
          <line x1="12" y1="17" x2="20" y2="17" />
          <line x1="12" y1="21" x2="20" y2="21" />
          <!-- Entrance & ground -->
          <rect x="13.5" y="25" width="5" height="3" />
          <line x1="2" y1="28" x2="30" y2="28" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <!-- Flanking wings -->
          <rect x="4" y="11" width="7" height="17" />
          <rect x="21" y="11" width="7" height="17" />
          <!-- Tower cylinder -->
          <rect x="10.5" y="4" width="11" height="24" rx="2" />
          <!-- 109 Sign cutout -->
          <rect x="11.5" y="5.5" width="9" height="5" rx="1.2" fill="#FFFFFF" />
          <!-- Negative space windows -->
          <line x1="12" y1="13.5" x2="20" y2="13.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
          <line x1="12" y1="17.5" x2="20" y2="17.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
          <line x1="12" y1="21.5" x2="20" y2="21.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
          <rect x="13.5" y="25" width="5" height="3" fill="#FFFFFF" />
          <rect x="2" y="28" width="28" height="1.5" rx="0.5" />
        </g>`;
      }

      const towerColor = opts.style === 'duotone' ? c.primary : '#F8FAFC';
      const wingColor = opts.style === 'duotone' ? c.primary : '#E2E8F0';
      const signColor = opts.style === 'duotone' ? c.secondary : '#EF4444';
      const glassColor = opts.style === 'duotone' ? c.secondary : '#38BDF8';
      const strokeColor = opts.style === 'duotone' ? c.stroke : '#475569';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Flanking Boutique Wings -->
        <rect x="4" y="11" width="7" height="17" fill="${wingColor}" stroke="${strokeColor}" stroke-width="0.8" />
        <rect x="21" y="11" width="7" height="17" fill="${wingColor}" stroke="${strokeColor}" stroke-width="0.8" />
        <!-- Wing boutique display windows -->
        <rect x="5.5" y="13.5" width="4" height="2.2" rx="0.4" fill="${glassColor}" />
        <rect x="5.5" y="17.5" width="4" height="2.2" rx="0.4" fill="${glassColor}" />
        <rect x="5.5" y="21.5" width="4" height="2.2" rx="0.4" fill="${glassColor}" />
        <rect x="22.5" y="13.5" width="4" height="2.2" rx="0.4" fill="${glassColor}" />
        <rect x="22.5" y="17.5" width="4" height="2.2" rx="0.4" fill="${glassColor}" />
        <rect x="22.5" y="21.5" width="4" height="2.2" rx="0.4" fill="${glassColor}" />
        <!-- Central Shibuya 109 Cylindrical Tower -->
        <rect x="10.5" y="4" width="11" height="24" rx="2" fill="${towerColor}" stroke="${strokeColor}" stroke-width="0.9" />
        <!-- Cylinder gradient depth shading -->
        <rect x="10.5" y="4" width="2" height="24" rx="0.8" fill="#CBD5E1" opacity="0.45" />
        <rect x="19.5" y="4" width="2" height="24" rx="0.8" fill="#CBD5E1" opacity="0.45" />
        <!-- Iconic Red 109 Cylinder Crown Sign -->
        <rect x="11.2" y="5" width="9.6" height="5.5" rx="1.5" fill="${signColor}" stroke="#DC2626" stroke-width="0.6" />
        <!-- 1 0 9 Vector Numerals -->
        <path d="M12.6 7 L13.4 6.3 V9.2" stroke="#FFFFFF" stroke-width="0.8" fill="none" />
        <line x1="12.3" y1="9.2" x2="14.2" y2="9.2" stroke="#FFFFFF" stroke-width="0.7" />
        <ellipse cx="16" cy="7.7" rx="1" ry="1.5" fill="none" stroke="#FFFFFF" stroke-width="0.8" />
        <ellipse cx="18.5" cy="7.2" rx="0.9" ry="0.9" fill="none" stroke="#FFFFFF" stroke-width="0.7" />
        <path d="M19.4 7.2 V8.6 C19.4 9.3 18.5 9.4 17.8 9.1" stroke="#FFFFFF" stroke-width="0.7" fill="none" />
        <!-- Curved Panoramic Window Bands -->
        <rect x="11.5" y="12" width="9" height="2.5" rx="0.8" fill="${glassColor}" stroke="#0284C7" stroke-width="0.6" />
        <rect x="11.5" y="16" width="9" height="2.5" rx="0.8" fill="${glassColor}" stroke="#0284C7" stroke-width="0.6" />
        <rect x="11.5" y="20" width="9" height="2.5" rx="0.8" fill="${glassColor}" stroke="#0284C7" stroke-width="0.6" />
        <!-- Ground Entrance & Canopy -->
        <rect x="8.5" y="24" width="15" height="1.8" rx="0.5" fill="#94A3B8" />
        <rect x="13.5" y="25.5" width="5" height="2.5" fill="#2563EB" />
        <line x1="16" y1="25.5" x2="16" y2="28" stroke="#FFFFFF" stroke-width="0.6" />
        <!-- Sidewalk baseline -->
        <line x1="2" y1="28" x2="30" y2="28" stroke="${strokeColor}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'factory',
    char: '🏭',
    name: 'Factory',
    unicodeHex: 'U+1F3ED',
    category: 'objects-places',
    tags: ['factory', 'industry', 'manufacturing', 'chimney', 'smoke', 'plant', 'assembly', 'production', '🏭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sawtooth Roof -->
          <polygon points="4,15 9,9 9,15 14,9 14,15 19,9 19,15 28,15 28,28 4,28" />
          <!-- Chimneys & Smoke -->
          <line x1="22" y1="15" x2="22" y2="6" />
          <line x1="26" y1="15" x2="26" y2="8" />
          <circle cx="22" cy="4" r="1.5" />
          <circle cx="26" cy="6" r="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Smoke Puffs (Light Grey) -->
        <circle cx="22" cy="4" r="2" fill="#E2E8F0" />
        <circle cx="26" cy="5.5" r="1.5" fill="#E2E8F0" />
        <!-- Industrial Twin Chimneys -->
        <rect x="21" y="6" width="3" height="9" fill="#475569" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="25" y="7.5" width="2.5" height="7.5" fill="#475569" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Sawtooth Roof Factory Building -->
        <polygon points="4,15 9,9 9,15 14,9 14,15 19,9 19,15 28,15 28,28 4,28" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Industrial Windows -->
        <rect x="6" y="19" width="3" height="4" rx="0.4" fill="#FEF08A" />
        <rect x="11" y="19" width="3" height="4" rx="0.4" fill="#FEF08A" />
        <rect x="16" y="19" width="3" height="4" rx="0.4" fill="#FEF08A" />
        <!-- Cargo Roll-Up Bay Door -->
        <rect x="21" y="21" width="5" height="7" fill="#334155" />
      </g>`;
    },
  },
  {
    id: 'red-paper-lantern',
    char: '🏮',
    name: 'Red Paper Lantern',
    unicodeHex: 'U+1F3EE',
    category: 'objects-places',
    tags: ['red paper lantern', 'lantern', 'izakaya', 'japan', 'lamp', 'light', 'festival', 'bar', 'oriental', '🏮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="16" y1="2" x2="16" y2="6" />
          <ellipse cx="16" cy="16" rx="9" ry="10" />
          <rect x="11" y="5" width="10" height="2" />
          <rect x="11" y="25" width="10" height="2" />
          <line x1="16" y1="27" x2="16" y2="30" />
          <!-- Ribs -->
          <line x1="7.5" y1="13" x2="24.5" y2="13" />
          <line x1="7" y1="16" x2="25" y2="16" />
          <line x1="7.5" y1="19" x2="24.5" y2="19" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Hanging Wire Loop -->
        <line x1="16" y1="2" x2="16" y2="5.5" stroke="#1E293B" stroke-width="1.5" />
        <!-- Red Paper Oval Lantern Body -->
        <ellipse cx="16" cy="16" rx="9.5" ry="10.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Golden Top & Bottom Caps -->
        <rect x="11" y="5" width="10" height="2.5" rx="0.5" fill="#1E293B" stroke="#0F172A" stroke-width="0.8" />
        <rect x="11" y="24.5" width="10" height="2.5" rx="0.5" fill="#1E293B" stroke="#0F172A" stroke-width="0.8" />
        <!-- Bottom Gold Tassel -->
        <line x1="16" y1="27" x2="16" y2="31" stroke="${c.secondary}" stroke-width="2.5" />
        <!-- Paper Rib Lines -->
        <path d="M7.2 13h17.6M6.8 16h18.4M7.2 19h17.6" stroke="#991B1B" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'japanese-castle',
    char: '🏯',
    name: 'Japanese Castle',
    unicodeHex: 'U+1F3EF',
    category: 'objects-places',
    tags: ['japanese castle', 'castle', 'japan', 'shiro', 'pagoda', 'temple', 'historic', 'fortress', 'culture', '🏯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tier 1 Top Roof -->
          <path d="M16 4l-7 4h14z" />
          <rect x="11" y="8" width="10" height="4" />
          <!-- Tier 2 Mid Roof -->
          <path d="M16 11l-10 4h20z" />
          <rect x="9" y="15" width="14" height="4" />
          <!-- Tier 3 Lower Roof -->
          <path d="M16 18l-13 4h26z" />
          <!-- Stone Foundation Wall -->
          <polygon points="5,22 7,28 25,28 27,22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Sloped Stone Rampart Base -->
        <polygon points="5,22 7,28 25,28 27,22" fill="#64748B" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Tier 3 Bottom Level -->
        <rect x="7.5" y="18" width="17" height="4" fill="${c.secondary}" />
        <path d="M16 17.5l-13 4.5h26z" fill="${c.primary}" stroke="#0F172A" stroke-width="1" />
        <!-- Tier 2 Middle Level -->
        <rect x="9.5" y="14" width="13" height="4" fill="${c.secondary}" />
        <path d="M16 10.5l-10 4.5h20z" fill="${c.primary}" stroke="#0F172A" stroke-width="1" />
        <!-- Tier 1 Top Roof Pagoda -->
        <rect x="11.5" y="7.5" width="9" height="3.5" fill="${c.secondary}" />
        <path d="M16 3.5l-7 4.5h14z" fill="${c.primary}" stroke="#0F172A" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'castle',
    char: '🏰',
    name: 'European Castle',
    unicodeHex: 'U+1F3F0',
    category: 'objects-places',
    tags: ['castle', 'european castle', 'fairytale', 'fortress', 'palace', 'medieval', 'stone', 'tower', 'fantasy', '🏰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Main Keep & Towers -->
          <rect x="4" y="10" width="7" height="18" />
          <rect x="21" y="10" width="7" height="18" />
          <rect x="11" y="14" width="10" height="14" />
          <!-- Battlements -->
          <path d="M4 10V8h2v2h3V8h2v2" />
          <path d="M21 10V8h2v2h3V8h2v2" />
          <!-- Flags -->
          <line x1="7" y1="8" x2="7" y2="4" />
          <polygon points="7,4 11,5.5 7,7" />
          <line x1="25" y1="8" x2="25" y2="4" />
          <polygon points="25,4 29,5.5 25,7" />
          <!-- Gate Arch -->
          <path d="M13 28v-5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5v5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Red Pennant Flags on Turret Peaks -->
        <line x1="7.5" y1="8" x2="7.5" y2="3.5" stroke="#1E293B" stroke-width="1.2" />
        <polygon points="7.5,3.5 12,5 7.5,6.5" fill="${c.secondary}" />
        <line x1="24.5" y1="8" x2="24.5" y2="3.5" stroke="#1E293B" stroke-width="1.2" />
        <polygon points="24.5,3.5 29,5 24.5,6.5" fill="${c.secondary}" />
        <!-- Stone Towers & Center Wall -->
        <rect x="4" y="9.5" width="7" height="18.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="21" y="9.5" width="7" height="18.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="11" y="14" width="10" height="14" fill="#475569" stroke="${c.stroke}" stroke-width="1" />
        <!-- Crenellations (Crest Battlements) -->
        <path d="M4 9.5V7.5h2v2h3v-2h2v2M21 9.5V7.5h2v2h3v-2h2v2" stroke="${c.stroke}" stroke-width="1.2" fill="${c.primary}" />
        <!-- Portcullis Gateway Arch -->
        <path d="M13 28v-5.5c0-1.6 1.3-3 3-3s3 1.4 3 3V28z" fill="#0F172A" />
      </g>`;
    },
  },
];
