import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const warningSignIcons: WimojiIconDef[] = [
  {
    id: 'warning',
    char: '⚠',
    name: 'Warning',
    unicodeHex: 'U+26A0',
    category: 'warnings',
    tags: ['warning', 'alert', 'danger', 'caution', 'triangle', 'exclamation'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#1E293B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M16 4l13 22H3L16 4z" />
          <path d="M16 12v6M16 22h.01" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M16 4l13.5 22.5H2.5L16 4z" fill="${c.primary}" />
        <path d="M16 12v6" stroke="${c.secondary}" stroke-width="2.6" stroke-linecap="round" />
        <circle cx="16" cy="22" r="1.3" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'high-voltage',
    char: '⚡',
    name: 'High Voltage',
    unicodeHex: 'U+26A1',
    category: 'warnings',
    tags: ['lightning', 'voltage', 'electric', 'power', 'energy', 'zap', 'fast'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M17 3L6 17h8l-2 12 14-15h-9l4-11z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none" />`;
      }
      return `${badge}<g>
        <path d="M17 3L6 17h8l-2 12 14-15h-9l4-11z" fill="${c.primary}" />
        <path d="M17 3l-7 10h6l-1 5 7-7h-5z" fill="${c.secondary}" opacity="${c.duotoneOpacity}" />
      </g>`;
    },
  },
  {
    id: 'no-entry',
    char: '⛔',
    name: 'No Entry',
    unicodeHex: 'U+26D4',
    category: 'warnings',
    tags: ['no entry', 'forbidden', 'stop', 'restricted', 'barrier', 'red'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M8 16h16" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" />
        <rect x="7" y="14" width="18" height="4" rx="2" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'radioactive',
    char: '☢',
    name: 'Radioactive',
    unicodeHex: 'U+2622',
    category: 'warnings',
    tags: ['radioactive', 'nuclear', 'radiation', 'hazard', 'atomic', 'danger'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#1E293B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.secondary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" fill="none">
        <circle cx="16" cy="16" r="12.5" fill="${opts.style === 'color' ? c.primary : 'none'}" />
        <circle cx="16" cy="16" r="3" fill="${c.secondary}" />
        <path d="M16 11V5M11.5 18.5L6.5 21.5M20.5 18.5L25.5 21.5" stroke-width="4" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'biohazard',
    char: '☣',
    name: 'Biohazard',
    unicodeHex: 'U+2623',
    category: 'warnings',
    tags: ['biohazard', 'biological', 'virus', 'toxic', 'danger', 'hazard'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#1E293B', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.3}" stroke-linecap="round" fill="none">
        <circle cx="16" cy="12" r="5" />
        <circle cx="11.5" cy="20" r="5" />
        <circle cx="20.5" cy="20" r="5" />
        <circle cx="16" cy="16" r="2" fill="${stroke}" />
      </g>`;
    },
  },
  {
    id: 'wheelchair',
    char: '♿',
    name: 'Wheelchair Symbol',
    unicodeHex: 'U+267F',
    category: 'warnings',
    tags: ['wheelchair', 'accessible', 'disability', 'handicapped', 'blue', 'sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#FFFFFF' : c.primary);
      const bg = opts.style === 'color' ? `<rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />` : '';

      return `${badge}${bg}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="17" cy="9.5" r="1.5" fill="${stroke}" />
        <path d="M12 14h5v6h5" />
        <path d="M12.5 19a5 5 0 1 0 4.5 4.8" />
      </g>`;
    },
  },
  {
    id: 'recycling',
    char: '♻',
    name: 'Recycling Symbol',
    unicodeHex: 'U+267B',
    category: 'warnings',
    tags: ['recycling', 'recycle', 'eco', 'green', 'environment', 'sustainable'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#047857' });
      const badge = getBadgeMarkup(opts);
      const arrow = 'M24.05 16.76L28.34 24.2L20.32 24.2L20.32 25.8L16.93 22.5L20.32 19.2L20.32 20.8L22.46 20.8L21.11 18.46Z';
      const rot = (deg: number) => `transform="rotate(${deg} 16 17.07)"`;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${arrow}" />
          <path d="${arrow}" ${rot(120)} />
          <path d="${arrow}" ${rot(240)} />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}" stroke="${c.primary}" stroke-width="0.6" stroke-linejoin="round">
        <path d="${arrow}" />
        <path d="${arrow}" ${rot(120)} />
        <path d="${arrow}" ${rot(240)} />
      </g>`;
    },
  },
  {
    id: 'infinity',
    char: '♾',
    name: 'Infinity',
    unicodeHex: 'U+267E',
    category: 'warnings',
    tags: ['infinity', 'forever', 'endless', 'loop', 'math', 'limitless'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<path d="M11 11c-2.8 0-5 2.2-5 5s2.2 5 5 5c3.2 0 5.2-3.2 6.5-5 1.3-1.8 3.3-5 6.5-5 2.8 0 5 2.2 5 5s-2.2 5-5 5c-3.2 0-5.2-3.2-6.5-5-1.3-1.8-3.3-5-6.5-5z" stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
    },
  },
  {
    id: 'circled-m',
    char: 'Ⓜ',
    name: 'Circled M',
    unicodeHex: 'U+24C2',
    category: 'warnings',
    tags: ['metro', 'subway', 'm', 'transit', 'circle', 'transport'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#FFFFFF' : c.primary);
      const bg = opts.style === 'color' ? `<circle cx="16" cy="16" r="12" fill="${c.primary}" />` : `<circle cx="16" cy="16" r="12" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;

      return `${badge}${bg}<path d="M10 21V11l6 7 6-7v10" stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
    },
  },
  {
    id: 'copyright',
    char: '©',
    name: 'Copyright',
    unicodeHex: 'U+00A9',
    category: 'warnings',
    tags: ['copyright', 'legal', 'law', 'ip', 'protection', 'rights'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
        <circle cx="16" cy="16" r="12" />
        <path d="M19 12.5a5 5 0 1 0 0 7" />
      </g>`;
    },
  },
  {
    id: 'registered',
    char: '®',
    name: 'Registered',
    unicodeHex: 'U+00AE',
    category: 'warnings',
    tags: ['registered', 'trademark', 'brand', 'legal', 'circle r'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="16" r="12" />
        <path d="M13 21V11h4a3 3 0 0 1 0 6h-4" />
        <path d="M16 17l4 4" />
      </g>`;
    },
  },
  {
    id: 'trademark',
    char: '™',
    name: 'Trade Mark',
    unicodeHex: 'U+2122',
    category: 'warnings',
    tags: ['trademark', 'tm', 'brand', 'service', 'legal'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M6 12h8M10 12v10" />
        <path d="M16 22V12l4 5 4-5v10" />
      </g>`;
    },
  },
  {
    id: 'double-exclamation',
    char: '‼',
    name: 'Double Exclamation Mark',
    unicodeHex: 'U+203C',
    category: 'warnings',
    tags: ['exclamation', 'double', 'surprise', 'alert', 'loud', 'shock'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const fill = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g fill="${fill}">
        <rect x="10.5" y="7" width="3" height="12" rx="1.5" />
        <circle cx="12" cy="24" r="1.8" />
        <rect x="18.5" y="7" width="3" height="12" rx="1.5" />
        <circle cx="20" cy="24" r="1.8" />
      </g>`;
    },
  },
  {
    id: 'exclamation-question',
    char: '⁉',
    name: 'Exclamation Question Mark',
    unicodeHex: 'U+2049',
    category: 'warnings',
    tags: ['interrobang', 'exclamation', 'question', 'doubt', 'surprise', 'wtf'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M10 7v11M10 24h.01" />
        <path d="M17 10c0-2 2-3 4-3s4 1.5 4 3.5c0 3-4 3.5-4 6.5M21 24h.01" />
      </g>`;
    },
  },
  {
    id: 'keycap',
    char: '⃣',
    name: 'Keycap Symbol',
    unicodeHex: 'U+20E3',
    category: 'warnings',
    tags: ['keycap', 'box', 'button', 'input', 'symbol', 'blank', 'empty', 'combining', 'enclosing'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const rectFill = opts.style === 'color' ? c.primary : (opts.style === 'duotone' ? c.secondary : (opts.style === 'silhouette' ? c.primary : 'none'));
      return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="${rectFill}" />
      </g>`;
    },
  },
  {
    id: 'transgender-symbol',
    char: '⚧',
    name: 'Transgender Symbol',
    unicodeHex: 'U+26A7',
    category: 'warnings',
    tags: ['transgender', 'gender', 'pride', 'identity', 'symbol', 'equality'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#F472B6', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="18" r="5.5" />
        <path d="M16 23.5v5M13.5 26.5h5" />
        <path d="M20 14l6-6M20 8h6v6" />
        <path d="M12 14L6 8M12 8H6v6M8 12l3-3" />
      </g>`;
    },
  },
  {
    id: 'skull-and-crossbones',
    char: '☠',
    name: 'Skull and Crossbones',
    unicodeHex: 'U+2620',
    category: 'warnings',
    tags: ['skull', 'crossbones', 'death', 'danger', 'poison', 'pirate', 'deadly'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F1F5F9', fillSecondary: '#0F172A', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <circle cx="16" cy="12" r="6" />
          <path d="M13 18h6v3h-6z" />
          <path d="M7 7l18 18M25 7L7 25" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M6 6l20 20M26 6L6 26" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <circle cx="16" cy="12" r="6.5" fill="${c.primary}" />
        <rect x="13.5" y="16.5" width="5" height="4" rx="1" fill="${c.primary}" />
        <circle cx="14" cy="12" r="1.2" fill="${c.stroke}" />
        <circle cx="18" cy="12" r="1.2" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'no-mobile-phones',
    char: '📵',
    name: 'No Mobile Phones',
    unicodeHex: 'U+1F4F5',
    category: 'warnings',
    tags: ['no mobile phones', 'phone', 'cellphone', 'prohibited', 'forbidden', 'quiet', 'silent', 'no calling', '📵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#1E293B', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <line x1="7.5" y1="7.5" x2="24.5" y2="24.5" />
          <rect x="12" y="9" width="8" height="14" rx="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="12" y="9" width="8" height="14" rx="1.5" fill="${c.secondary}" stroke="#334155" stroke-width="1" />
        <rect x="13.5" y="11" width="5" height="9" rx="0.5" fill="#38BDF8" opacity="0.7" />
        <circle cx="16" cy="21.5" r="0.6" fill="#FFFFFF" />
        <circle cx="16" cy="16" r="12" fill="none" stroke="${c.primary}" stroke-width="2.8" />
        <line x1="7.5" y1="7.5" x2="24.5" y2="24.5" stroke="${c.primary}" stroke-width="2.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'underage-18',
    char: '🔞',
    name: 'No One Under Eighteen',
    unicodeHex: 'U+1F51E',
    category: 'warnings',
    tags: ['underage', '18', 'no one under eighteen', 'adult', 'prohibited', 'age limit', 'restricted', 'rating', '🔞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      const textFill = opts.style === 'outline' ? c.stroke : '#1E293B';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="12" fill="${opts.style === 'outline' ? 'none' : '#FFFFFF'}" stroke="${stroke}" stroke-width="2.8" />
        <line x1="7.5" y1="7.5" x2="24.5" y2="24.5" stroke="${stroke}" stroke-width="2.8" />
        <!-- 1 -->
        <path d="M10.5 13l2-1.5v7" stroke="${textFill}" stroke-width="2" fill="none" />
        <!-- 8 -->
        <circle cx="18" cy="13.2" r="2.2" stroke="${textFill}" stroke-width="1.8" fill="none" />
        <circle cx="18" cy="17.2" r="2.5" stroke="${textFill}" stroke-width="1.8" fill="none" />
      </g>`;
    },
  },
  {
    id: 'safety-vest',
    char: '🦺',
    name: 'Safety Vest',
    unicodeHex: 'U+1F9BA',
    category: 'warnings',
    tags: ['safety vest', 'vest', 'high vis', 'reflective', 'construction', 'worker', 'caution', 'hazard', 'safety', '🦺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FACC15', fillSecondary: '#E2E8F0', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 5l5 7v16H5V11l3-6z M24 5l-5 7v16h8V11l-3-6z" />
          <line x1="5" y1="20" x2="13" y2="20" />
          <line x1="19" y1="20" x2="27" y2="20" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Vest Body (High Vis Yellow) -->
        <path d="M8 5l5 7v16H5V11l3-6z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M24 5l-5 7v16h8V11l-3-6z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Silver Reflective Bands -->
        <rect x="5" y="18" width="8" height="3" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <rect x="19" y="18" width="8" height="3" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Front Closure Buckle -->
        <line x1="13" y1="20" x2="19" y2="20" stroke="#1E293B" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'fire-extinguisher',
    char: '🧯',
    name: 'Fire Extinguisher',
    unicodeHex: 'U+1F9EF',
    category: 'warnings',
    tags: ['fire extinguisher', 'fire', 'extinguisher', 'safety', 'emergency', 'flame', 'foam', 'hazard', 'red', '🧯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#1E293B', fillAccent: '#FBBF24', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="11" y="11" width="10" height="17" rx="4" />
          <line x1="16" y1="11" x2="16" y2="7" />
          <path d="M12 6h8" />
          <path d="M13 7c-3 0-5 3-5 7v9" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Red Pressure Cylinder -->
        <rect x="11" y="11" width="10" height="17" rx="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="13.5" y="15" width="5" height="7" rx="0.5" fill="#FFFFFF" opacity="0.9" />
        <!-- Discharge Hose -->
        <path d="M13 7.5c-3.5 0-5.5 3-5.5 7v10" stroke="${c.secondary}" stroke-width="2" fill="none" />
        <!-- Nozzle Horn Tip -->
        <rect x="6.5" y="23" width="2" height="3" rx="0.5" fill="${c.secondary}" />
        <!-- Metal Valve, Gauge & Squeeze Trigger -->
        <rect x="14.5" y="6.5" width="3" height="4.5" fill="#64748B" />
        <circle cx="18" cy="8.5" r="1.5" fill="${c.accent}" stroke="#B45309" stroke-width="0.6" />
        <path d="M12 6h8" stroke="${c.secondary}" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'ring-buoy',
    char: '🛟',
    name: 'Ring Buoy',
    unicodeHex: 'U+1F6DF',
    category: 'warnings',
    tags: ['ring buoy', 'lifebuoy', 'life preserver', 'safety', 'marine', 'rescue', 'water', 'lifesaver', 'swimming', '🛟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#F8FAFC', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="5" />
          <line x1="16" y1="5" x2="16" y2="11" />
          <line x1="16" y1="21" x2="16" y2="27" />
          <line x1="5" y1="16" x2="11" y2="16" />
          <line x1="21" y1="16" x2="27" y2="16" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main Torus Body (Orange) -->
        <circle cx="16" cy="16" r="11" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- White Quadrant Straps -->
        <path d="M16 5a11 11 0 0 1 7.8 3.2L20.2 11.8A6 6 0 0 0 16 10z" fill="${c.secondary}" />
        <path d="M16 27a11 11 0 0 1-7.8-3.2l3.6-3.6A6 6 0 0 0 16 22z" fill="${c.secondary}" />
        <path d="M5 16a11 11 0 0 1 3.2-7.8l3.6 3.6A6 6 0 0 0 10 16z" fill="${c.secondary}" />
        <path d="M27 16a11 11 0 0 1-3.2 7.8l-3.6-3.6A6 6 0 0 0 22 16z" fill="${c.secondary}" />
        <!-- Center Cutout Hole -->
        <circle cx="16" cy="16" r="5" fill="${opts.style === 'color' ? '#18181B' : '#0F172A'}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Grab Rope Straps -->
        <circle cx="16" cy="16" r="13" stroke="#CBD5E1" stroke-width="1.2" stroke-dasharray="2 3" fill="none" />
      </g>`;
    },
  },
  {
    id: 'shield',
    char: '🛡',
    name: 'Shield',
    unicodeHex: 'U+1F6E1',
    category: 'warnings',
    tags: ['shield', 'security', 'protection', 'defense', 'safety', 'guard', 'armor', 'safe', 'secure', '🛡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#94A3B8', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4l9 3.5v7.5c0 6.5-4.5 11-9 13-4.5-2-9-6.5-9-13V7.5L16 4z" />
          <path d="M16 4v24" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Heraldic Shield Body -->
        <path d="M16 4l9 3.5v7.5c0 6.5-4.5 11-9 13-4.5-2-9-6.5-9-13V7.5L16 4z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Steel Highlights on Left Flank -->
        <path d="M16 4v24c-4.5-2-9-6.5-9-13V7.5L16 4z" fill="${c.secondary}" opacity="0.35" />
        <!-- Emblem Cross / Rivet -->
        <circle cx="16" cy="15" r="2" fill="#FEF08A" stroke="#CA8A04" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'safety-pin',
    char: '🧷',
    name: 'Safety Pin',
    unicodeHex: 'U+1F9F7',
    category: 'warnings',
    tags: ['safety pin', 'pin', 'fastener', 'clip', 'needle', 'cloth', 'diaper', 'secure', 'attach', '🧷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#CBD5E1', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="8" cy="24" r="3" />
          <line x1="10" y1="22" x2="22" y2="10" />
          <line x1="6" y1="22" x2="19" y2="9" />
          <rect x="18" y="5" width="8" height="5" rx="2" transform="rotate(-45 22 7.5)" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Coiled Spring at Bottom -->
        <circle cx="8" cy="24" r="3" fill="none" stroke="${c.stroke}" stroke-width="2.2" />
        <!-- Back Pin Shaft -->
        <line x1="10" y1="22" x2="23" y2="9" stroke="${c.primary}" stroke-width="2.2" />
        <!-- Front Needle Shaft -->
        <line x1="6.5" y1="22" x2="20" y2="8.5" stroke="${c.secondary}" stroke-width="1.8" />
        <!-- Clasp Head Cap -->
        <g transform="rotate(-45 22 8)">
          <rect x="17.5" y="5.5" width="9" height="5.5" rx="2.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
          <circle cx="19.5" cy="8.2" r="1" fill="#FFFFFF" />
        </g>
      </g>`;
    },
  },
  {
    id: 'information-sign',
    char: 'ℹ',
    name: 'Information',
    unicodeHex: 'U+2139',
    category: 'warnings',
    tags: ['information', 'info', 'sign', 'help', 'details', 'notice', 'guide', 'blue', 'i', 'ℹ'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', stroke: '#1E40AF' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <circle cx="16" cy="10" r="1.5" />
          <path d="M14 15h2v6h2" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="16" cy="10" r="1.6" fill="#FFFFFF" />
        <path d="M14.5 15.5h2.2v5.5h2.2" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
];
