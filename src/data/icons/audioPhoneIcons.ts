import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const audioPhoneIcons: WimojiIconDef[] = [
  {
    id: 'muted-speaker',
    char: '🔇',
    name: 'Muted Speaker',
    unicodeHex: 'U+1F507',
    category: 'time-media',
    tags: ['speaker', 'mute', 'silent', 'no sound', 'quiet', 'off', 'volume', 'audio', '🔇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="5,12 10,12 16,7 16,25 10,20 5,20" />
          <line x1="21" y1="13" x2="27" y2="19" />
          <line x1="27" y1="13" x2="21" y2="19" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5,12 10,12 16,7 16,25 10,20 5,20" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="21" y1="13" x2="27" y2="19" stroke="${c.secondary}" stroke-width="2.2" />
        <line x1="27" y1="13" x2="21" y2="19" stroke="${c.secondary}" stroke-width="2.2" />
      </g>`;
    },
  },
  {
    id: 'speaker-low-volume',
    char: '🔈',
    name: 'Speaker Low Volume',
    unicodeHex: 'U+1F508',
    category: 'time-media',
    tags: ['speaker', 'volume', 'low', 'quiet', 'sound', 'audio', 'music', '🔈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="7,12 12,12 18,7 18,25 12,20 7,20" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="7,12 12,12 18,7 18,25 12,20 7,20" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'speaker-medium-volume',
    char: '🔉',
    name: 'Speaker Medium Volume',
    unicodeHex: 'U+1F509',
    category: 'time-media',
    tags: ['speaker', 'volume', 'medium', 'sound', 'audio', 'music', 'wave', '🔉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="5,12 10,12 16,7 16,25 10,20 5,20" />
          <path d="M20 12a5 5 0 0 1 0 8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5,12 10,12 16,7 16,25 10,20 5,20" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M20 12a5 5 0 0 1 0 8" fill="none" stroke="${c.secondary}" stroke-width="2.2" />
      </g>`;
    },
  },
  {
    id: 'speaker-high-volume',
    char: '🔊',
    name: 'Speaker High Volume',
    unicodeHex: 'U+1F50A',
    category: 'time-media',
    tags: ['speaker', 'volume', 'loud', 'high', 'sound', 'audio', 'music', 'broadcast', '🔊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="4,12 9,12 15,7 15,25 9,20 4,20" />
          <path d="M19 12a5 5 0 0 1 0 8" />
          <path d="M22 9a9 9 0 0 1 0 14" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="4,12 9,12 15,7 15,25 9,20 4,20" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M19 12a5 5 0 0 1 0 8" fill="none" stroke="${c.secondary}" stroke-width="2" />
        <path d="M22.5 9a9 9 0 0 1 0 14" fill="none" stroke="${c.secondary}" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'antenna-bars',
    char: '📶',
    name: 'Antenna Bars',
    unicodeHex: 'U+1F4F6',
    category: 'time-media',
    tags: ['signal', 'cellular', 'bars', 'network', 'phone', 'wifi', 'reception', 'antenna', '📶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#334155', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="21" width="3" height="6" rx="1" />
          <rect x="11" y="16" width="3" height="11" rx="1" />
          <rect x="17" y="11" width="3" height="16" rx="1" />
          <rect x="23" y="6" width="3" height="21" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="21" width="3.5" height="6" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="11" y="16" width="3.5" height="11" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="17" y="11" width="3.5" height="16" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="23" y="6" width="3.5" height="21" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'mobile-phone',
    char: '📱',
    name: 'Mobile Phone',
    unicodeHex: 'U+1F4F1',
    category: 'time-media',
    tags: ['phone', 'mobile', 'cell', 'smartphone', 'device', 'call', 'screen', '📱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="8" y="4" width="16" height="24" rx="3.5" />
          <line x1="14" y1="7" x2="18" y2="7" />
          <circle cx="16" cy="24" r="1.2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="8" y="4" width="16" height="24" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="10" y="8" width="12" height="14" rx="1" fill="${c.secondary}" opacity="0.35" />
        <line x1="14" y1="6" x2="18" y2="6" stroke="#94A3B8" stroke-width="1" />
        <circle cx="16" cy="24.5" r="1.2" fill="#94A3B8" />
      </g>`;
    },
  },
  {
    id: 'mobile-phone-with-arrow',
    char: '📲',
    name: 'Mobile Phone with Arrow',
    unicodeHex: 'U+1F4F2',
    category: 'time-media',
    tags: ['phone', 'call', 'incoming', 'arrow', 'receive', 'mobile', 'smartphone', '📲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="4" width="15" height="24" rx="3" />
          <path d="M26 12l-6 4 6 4 M20 16h8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="4" width="15" height="24" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="8" y="8" width="11" height="14" rx="1" fill="#38BDF8" opacity="0.3" />
        <path d="M26 12l-5 4 5 4 M21 16h6" stroke="${c.secondary}" stroke-width="2.2" fill="none" />
      </g>`;
    },
  },
  {
    id: 'vibration-mode',
    char: '📳',
    name: 'Vibration Mode',
    unicodeHex: 'U+1F4F3',
    category: 'time-media',
    tags: ['vibrate', 'vibration', 'phone', 'mobile', 'silent', 'shake', 'haptic', '📳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="10" y="5" width="12" height="22" rx="2.5" />
          <path d="M6 10l-2 2 2 2-2 2 2 2 M26 10l2 2-2 2 2 2-2 2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="10" y="5" width="12" height="22" rx="2.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="12" y="8.5" width="8" height="13" rx="1" fill="#38BDF8" opacity="0.3" />
        <path d="M6 10l-2 2 2 2-2 2 2 2 M26 10l2 2-2 2 2 2-2 2" stroke="${c.secondary}" stroke-width="1.8" fill="none" />
      </g>`;
    },
  },
  {
    id: 'mobile-phone-off',
    char: '📴',
    name: 'Mobile Phone Off',
    unicodeHex: 'U+1F4F4',
    category: 'time-media',
    tags: ['phone', 'off', 'power', 'disabled', 'shutdown', 'quiet', 'silent', '📴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <rect x="10" y="7" width="12" height="18" rx="2" />
          <circle cx="16" cy="22" r="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="10" y="7" width="12" height="18" rx="2" fill="#1E293B" stroke="#FFFFFF" stroke-width="1" />
        <circle cx="16" cy="21.5" r="1" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'right-speech-bubble',
    char: '🗩',
    name: 'Right Speech Bubble',
    unicodeHex: 'U+1F5E9',
    category: 'time-media',
    tags: ['speech', 'bubble', 'talk', 'chat', 'message', 'balloon', 'right', 'dialog', '🗩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0284C7', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 7h22a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H20l-5 4v-4H5a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 7h22a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H20l-5 4v-4H5a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="8" y1="12" x2="24" y2="12" stroke="#FFFFFF" stroke-width="1.4" opacity="0.8" />
        <line x1="8" y1="16" x2="18" y2="16" stroke="#FFFFFF" stroke-width="1.4" opacity="0.8" />
      </g>`;
    },
  },
  {
    id: 'white-telephone',
    char: '☏',
    name: 'White Telephone',
    unicodeHex: 'U+260F',
    category: 'time-media',
    tags: ['phone', 'telephone', 'landline', 'call', 'vintage', 'handset', 'receiver', '☏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F1F5F9', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6 10c0-2 2-4 5-4h10c3 0 5 2 5 4v2c0 2-2 3-4 3l-3-2H13l-3 2c-2 0-4-1-4-3v-2z" />
          <path d="M8 15h16l2 11H6l2-11z" />
          <circle cx="16" cy="20.5" r="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Body -->
        <path d="M8 15h16l2 11H6l2-11z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Rotary Dial -->
        <circle cx="16" cy="20.5" r="3.2" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="16" cy="20.5" r="1.2" fill="${c.secondary}" />
        <!-- Handset -->
        <path d="M6 10c0-2 2-4 5-4h10c3 0 5 2 5 4v2c0 2-2 3-4 3l-3-2H13l-3 2c-2 0-4-1-4-3v-2z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
];
