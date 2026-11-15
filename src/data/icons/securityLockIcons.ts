import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const securityLockIcons: WimojiIconDef[] = [
  {
    id: 'magnifying-glass-tilted-left',
    char: '🔍',
    name: 'Magnifying Glass Tilted Left',
    unicodeHex: 'U+1F50D',
    category: 'tools',
    tags: ['search', 'magnifier', 'glass', 'find', 'zoom', 'lens', 'left', '🔍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="13" cy="13" r="8" />
          <line x1="18.5" y1="18.5" x2="27" y2="27" stroke-width="${opts.strokeWidth + 1}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="18.5" y1="18.5" x2="27" y2="27" stroke="${c.secondary}" stroke-width="4.5" />
        <circle cx="13" cy="13" r="8" fill="${c.primary}" fill-opacity="0.3" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="13" cy="13" r="6" fill="${c.primary}" fill-opacity="0.1" />
        <path d="M9 10a4 4 0 0 1 4-4" stroke="#FFFFFF" stroke-width="1.2" fill="none" opacity="0.8" />
      </g>`;
    },
  },
  {
    id: 'magnifying-glass-tilted-right',
    char: '🔎',
    name: 'Magnifying Glass Tilted Right',
    unicodeHex: 'U+1F50E',
    category: 'tools',
    tags: ['search', 'magnifier', 'glass', 'find', 'zoom', 'lens', 'right', '🔎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="19" cy="13" r="8" />
          <line x1="13.5" y1="18.5" x2="5" y2="27" stroke-width="${opts.strokeWidth + 1}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="13.5" y1="18.5" x2="5" y2="27" stroke="${c.secondary}" stroke-width="4.5" />
        <circle cx="19" cy="13" r="8" fill="${c.primary}" fill-opacity="0.3" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="19" cy="13" r="6" fill="${c.primary}" fill-opacity="0.1" />
        <path d="M15 10a4 4 0 0 1 4-4" stroke="#FFFFFF" stroke-width="1.2" fill="none" opacity="0.8" />
      </g>`;
    },
  },
  {
    id: 'locked-with-pen',
    char: '🔏',
    name: 'Locked with Pen',
    unicodeHex: 'U+1F50F',
    category: 'tools',
    tags: ['lock', 'locked', 'padlock', 'pen', 'security', 'privacy', 'secret', 'sign', '🔏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M11 12V8a5 5 0 0 1 10 0v4" />
          <rect x="7" y="12" width="18" height="15" rx="3" />
          <circle cx="16" cy="19.5" r="1.5" />
          <line x1="21" y1="17" x2="27" y2="11" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 12V8a5 5 0 0 1 10 0v4" fill="none" stroke="${c.secondary}" stroke-width="2.5" />
        <rect x="7" y="12" width="18" height="15" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="18.5" r="1.5" fill="${c.stroke}" />
        <line x1="16" y1="19.5" x2="16" y2="22.5" stroke="${c.stroke}" stroke-width="1.5" />
        <path d="M21 16l6-6 2 2-6 6z" fill="#3B82F6" stroke="${c.stroke}" stroke-width="0.8" />
        <polygon points="21,16 20,18 22,17" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'locked-with-key',
    char: '🔐',
    name: 'Locked with Key',
    unicodeHex: 'U+1F510',
    category: 'tools',
    tags: ['lock', 'locked', 'key', 'security', 'safe', 'padlock', 'password', '🔐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M11 12V8a5 5 0 0 1 10 0v4" />
          <rect x="6" y="12" width="17" height="14" rx="2.5" />
          <circle cx="24" cy="20" r="3" />
          <path d="M24 23v5 M24 26h2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 12V8a5 5 0 0 1 10 0v4" fill="none" stroke="${c.secondary}" stroke-width="2.5" />
        <rect x="6" y="12" width="17" height="14" rx="2.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="14.5" cy="18" r="1.5" fill="${c.stroke}" />
        <line x1="14.5" y1="19" x2="14.5" y2="21.5" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="23" cy="20" r="3.2" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="1" />
        <path d="M23 23.2v5 M23 26h2.5" stroke="${c.stroke}" stroke-width="1.4" fill="none" />
      </g>`;
    },
  },
  {
    id: 'key',
    char: '🔑',
    name: 'Key',
    unicodeHex: 'U+1F511',
    category: 'tools',
    tags: ['key', 'lock', 'unlock', 'access', 'password', 'gold', 'security', '🔑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#D97706', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="11" cy="11" r="6" />
          <circle cx="11" cy="11" r="2.5" />
          <line x1="15.5" y1="15.5" x2="26" y2="26" />
          <line x1="22" y1="22" x2="25" y2="19" />
          <line x1="25" y1="25" x2="28" y2="22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="15" y1="15" x2="26" y2="26" stroke="${c.primary}" stroke-width="3" />
        <line x1="22" y1="22" x2="25" y2="19" stroke="${c.primary}" stroke-width="2.5" />
        <line x1="25" y1="25" x2="28" y2="22" stroke="${c.primary}" stroke-width="2.5" />
        <circle cx="11" cy="11" r="6.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="11" cy="11" r="2.5" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'locked',
    char: '🔒',
    name: 'Locked',
    unicodeHex: 'U+1F512',
    category: 'tools',
    tags: ['lock', 'padlock', 'closed', 'secure', 'security', 'privacy', 'safe', '🔒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M10 13V8a6 6 0 0 1 12 0v5" />
          <rect x="6" y="13" width="20" height="15" rx="3" />
          <circle cx="16" cy="20.5" r="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 13V8a6 6 0 0 1 12 0v5" fill="none" stroke="${c.secondary}" stroke-width="3" />
        <rect x="6" y="13" width="20" height="15" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="19.5" r="1.8" fill="${c.stroke}" />
        <line x1="16" y1="20.5" x2="16" y2="24" stroke="${c.stroke}" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'unlocked',
    char: '🔓',
    name: 'Unlocked',
    unicodeHex: 'U+1F513',
    category: 'tools',
    tags: ['unlock', 'open', 'padlock', 'security', 'access', 'privacy', 'unlocked', '🔓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M10 13V7a6 6 0 0 1 12 0" />
          <rect x="6" y="13" width="20" height="15" rx="3" />
          <circle cx="16" cy="20.5" r="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 13V7a6 6 0 0 1 12 0" fill="none" stroke="${c.secondary}" stroke-width="3" />
        <rect x="6" y="13" width="20" height="15" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="19.5" r="1.8" fill="${c.stroke}" />
        <line x1="16" y1="20.5" x2="16" y2="24" stroke="${c.stroke}" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'bell',
    char: '🔔',
    name: 'Bell',
    unicodeHex: 'U+1F514',
    category: 'tools',
    tags: ['bell', 'alarm', 'notification', 'sound', 'alert', 'ring', 'chime', '🔔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#D97706', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4a2 2 0 0 0-2 2v1c-4 2-5 6-5 13h14c0-7-1-11-5-13V6a2 2 0 0 0-2-2z" />
          <path d="M13.5 24a2.5 2.5 0 0 0 5 0" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M13.5 24a2.5 2.5 0 0 0 5 0" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M16 4a2 2 0 0 0-2 2v1c-4 2-5 6-5 13h14c0-7-1-11-5-13V6a2 2 0 0 0-2-2z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="8" y1="20" x2="24" y2="20" stroke="${c.secondary}" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'bell-with-slash',
    char: '🔕',
    name: 'Bell with Slash',
    unicodeHex: 'U+1F515',
    category: 'tools',
    tags: ['bell', 'muted', 'silent', 'no sound', 'quiet', 'off', 'notification', '🔕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4a2 2 0 0 0-2 2v1c-4 2-5 6-5 13h14c0-7-1-11-5-13V6a2 2 0 0 0-2-2z" />
          <path d="M13.5 24a2.5 2.5 0 0 0 5 0" />
          <line x1="5" y1="5" x2="27" y2="27" stroke="${opts.style === 'outline' ? c.stroke : '#EF4444'}" stroke-width="${opts.strokeWidth + 0.5}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M13.5 24a2.5 2.5 0 0 0 5 0" fill="#94A3B8" stroke="${c.stroke}" stroke-width="1" />
        <path d="M16 4a2 2 0 0 0-2 2v1c-4 2-5 6-5 13h14c0-7-1-11-5-13V6a2 2 0 0 0-2-2z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="4" y1="4" x2="28" y2="28" stroke="#EF4444" stroke-width="2.5" />
      </g>`;
    },
  },
];
