import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const communicationMediaIcons: WimojiIconDef[] = [
  // 1. Fax Machine (U+1F4E0)
  {
    id: 'fax-machine',
    char: '📠',
    name: 'Fax Machine',
    unicodeHex: 'U+1F4E0',
    category: 'objects-places',
    tags: ['fax machine', 'fax', 'printer', 'office', 'phone', 'telecom', 'paper', 'communication', 'retro', '📠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#475569', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Paper feeding in from top -->
          <path d="M10 9 V4 C10 3.5 10.5 3 11 3 H21 C21.5 3 22 3.5 22 4 V9" />
          <line x1="12" y1="5.5" x2="20" y2="5.5" />
          <!-- Machine body -->
          <rect x="4" y="9" width="24" height="17" rx="2.5" />
          <!-- Phone handset on left -->
          <rect x="5.5" y="11" width="4" height="13" rx="1.5" />
          <!-- Screen and keypad -->
          <rect x="12" y="12" width="13" height="4" rx="1" />
          <line x1="13" y1="19" x2="15" y2="19" />
          <line x1="17.5" y1="19" x2="19.5" y2="19" />
          <line x1="22" y1="19" x2="24" y2="19" />
          <line x1="13" y1="22" x2="15" y2="22" />
          <line x1="17.5" y1="22" x2="19.5" y2="22" />
          <line x1="22" y1="22" x2="24" y2="22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Feeding document paper -->
        <path d="M10 9 V4 C10 3.5 10.5 3 11 3 H21 C21.5 3 22 3.5 22 4 V9 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="13" y1="5.5" x2="19" y2="5.5" stroke="#94A3B8" stroke-width="1" />
        <!-- Fax console body -->
        <rect x="4" y="9" width="24" height="17" rx="2.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Handset on left -->
        <rect x="5.5" y="11" width="4.5" height="13" rx="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- LCD screen -->
        <rect x="12" y="12" width="13" height="4" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#BBF7D0'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="14" y1="14" x2="21" y2="14" stroke="#15803D" stroke-width="1" />
        <!-- Keypad buttons -->
        <g stroke="${c.stroke}" stroke-width="1.2">
          <line x1="13" y1="19" x2="15" y2="19" />
          <line x1="17.5" y1="19" x2="19.5" y2="19" />
          <line x1="22" y1="19" x2="24" y2="19" />
          <line x1="13" y1="22" x2="15" y2="22" />
          <line x1="17.5" y1="22" x2="19.5" y2="22" />
          <line x1="22" y1="22" x2="24" y2="22" />
        </g>
      </g>`;
    },
  },

  // 2. Satellite Antenna (U+1F4E1)
  {
    id: 'satellite-antenna',
    char: '📡',
    name: 'Satellite Antenna',
    unicodeHex: 'U+1F4E1',
    category: 'objects-places',
    tags: ['satellite antenna', 'satellite', 'dish', 'broadcast', 'antenna', 'radar', 'space', 'communication', 'signals', '📡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E2E8F0', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Stand legs -->
          <path d="M5 28 L11 20 M17 28 L11 20 M11 20 L15 15" />
          <!-- Dish bowl tilted 45 deg -->
          <path d="M7 11 C11 4 21 7 24 18" />
          <!-- LNB feed arm and receiver horn -->
          <line x1="15" y1="15" x2="23" y2="8" />
          <circle cx="23" cy="8" r="1.5" />
          <!-- Radiating signal waves -->
          <path d="M23 4 C26 5 28 8 28 11" stroke-width="${thin}" />
          <path d="M26 2 C30 4 31 8 31 13" stroke-width="${thin}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Stand mount -->
        <path d="M5 28 L11 20 M17 28 L11 20 M11 20 L15 15" stroke="${c.stroke}" stroke-width="${sw}" fill="none" />
        <!-- Curved parabolic satellite dish -->
        <path d="M7 11 C11 4 21 7 24 18 C20 17 12 14 7 11 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Feed arm and LNB horn -->
        <line x1="14" y1="13.5" x2="23" y2="8" stroke="${c.stroke}" stroke-width="${sw}" />
        <circle cx="23" cy="8" r="2" fill="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Emitted signal waves -->
        <path d="M23 4 C26 5 28 8 28 11" fill="none" stroke="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" stroke-width="${thin + 0.3}" />
        <path d="M26 2 C30 4 31 8 31 13" fill="none" stroke="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" stroke-width="${thin + 0.3}" />
      </g>`;
    },
  },

  // 3. Loudspeaker (U+1F4E2)
  {
    id: 'loudspeaker',
    char: '📢',
    name: 'Loudspeaker',
    unicodeHex: 'U+1F4E2',
    category: 'objects-places',
    tags: ['loudspeaker', 'pa', 'horn', 'audio', 'sound', 'announcement', 'broadcast', 'alert', 'shout', '📢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#334155', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Back driver box -->
          <rect x="4" y="11" width="6" height="10" rx="1.5" />
          <!-- Flared bell horn -->
          <path d="M10 13 L22 6 V26 L10 19 Z" />
          <ellipse cx="22" cy="16" rx="2" ry="10" />
          <!-- Sound waves -->
          <path d="M25 11 C27 13 27 19 25 21" stroke-width="${thin}" />
          <path d="M28 8 C31 11 31 21 28 24" stroke-width="${thin}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back acoustic driver housing -->
        <rect x="4" y="11" width="6" height="10" rx="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#334155'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Flared metal horn -->
        <path d="M10 13 L22 6 V26 L10 19 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Horn opening oval rim -->
        <ellipse cx="22" cy="16" rx="2.2" ry="10" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Dynamic sound bursts -->
        <path d="M26 12 C28 13.5 28 18.5 26 20" fill="none" stroke="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke-width="${thin + 0.5}" />
        <path d="M29 9 C32 11.5 32 20.5 29 23" fill="none" stroke="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke-width="${thin + 0.5}" />
      </g>`;
    },
  },

  // 4. Megaphone (U+1F4E3)
  {
    id: 'megaphone',
    char: '📣',
    name: 'Megaphone',
    unicodeHex: 'U+1F4E3',
    category: 'objects-places',
    tags: ['megaphone', 'cheering', 'shout', 'announcement', 'voice', 'sound', 'cheerleader', 'rally', 'protest', '📣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#DC2626', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cone body tilted slightly -->
          <path d="M7 13 L21 7 V23 L7 17 Z" />
          <ellipse cx="21" cy="15" rx="2" ry="8" />
          <!-- Mouthpiece -->
          <rect x="4" y="12.5" width="3" height="5" rx="1" />
          <!-- Handle -->
          <path d="M11 18 L10 26 H13 L14 19" />
          <!-- Sound sparkles -->
          <line x1="25" y1="8" x2="28" y2="6" stroke-width="${thin}" />
          <line x1="26" y1="15" x2="29" y2="15" stroke-width="${thin}" />
          <line x1="25" y1="22" x2="28" y2="24" stroke-width="${thin}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Grip handle -->
        <path d="M11 18 L9.5 26.5 H12.5 L14 19 Z" fill="#64748B" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Mouthpiece -->
        <rect x="4" y="12.5" width="3" height="5" rx="1" fill="#475569" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Red megaphone cone -->
        <path d="M7 13 L21 7 V23 L7 17 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- White decorative racing stripe -->
        <path d="M12 11.5 L15 10 V20 L12 18.5 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Wide bell rim -->
        <ellipse cx="21" cy="15" rx="2" ry="8" fill="${opts.style === 'duotone' ? c.secondary : '#B91C1C'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Cheering spark sound accents -->
        <line x1="25" y1="8" x2="28" y2="6" stroke="#F59E0B" stroke-width="${thin + 0.5}" />
        <line x1="26" y1="15" x2="29.5" y2="15" stroke="#F59E0B" stroke-width="${thin + 0.5}" />
        <line x1="25" y1="22" x2="28" y2="24" stroke="#F59E0B" stroke-width="${thin + 0.5}" />
      </g>`;
    },
  },

  // 5. Outbox Tray (U+1F4E4)
  {
    id: 'outbox-tray',
    char: '📤',
    name: 'Outbox Tray',
    unicodeHex: 'U+1F4E4',
    category: 'objects-places',
    tags: ['outbox tray', 'outbox', 'tray', 'send', 'sent', 'upload', 'mail', 'box', 'document', '📤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#3B82F6', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const tray = 'M4 17 L7 27 H25 L28 17 H22 L20.5 20 H11.5 L10 17 Z';
      const arrow = 'M16 14 V3 M11 8 L16 3 L21 8';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Upward arrow -->
          <path d="${arrow}" />
          <!-- Outbox tray -->
          <path d="${tray}" />
          <!-- Paper sheets -->
          <line x1="8" y1="22" x2="24" y2="22" stroke-dasharray="1 2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Upward sending arrow -->
        <path d="${arrow}" stroke="${c.secondary}" stroke-width="${sw + 1}" fill="none" />
        <!-- Paper sheets inside tray -->
        <rect x="7" y="18" width="18" height="6" rx="1" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}" />
        <!-- Front tray container with center finger notch -->
        <path d="${tray}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 6. Inbox Tray (U+1F4E5)
  {
    id: 'inbox-tray',
    char: '📥',
    name: 'Inbox Tray',
    unicodeHex: 'U+1F4E5',
    category: 'objects-places',
    tags: ['inbox tray', 'inbox', 'tray', 'receive', 'download', 'incoming', 'mail', 'box', 'document', '📥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const tray = 'M4 17 L7 27 H25 L28 17 H22 L20.5 20 H11.5 L10 17 Z';
      const arrow = 'M16 3 V14 M11 9 L16 14 L21 9';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Downward arrow -->
          <path d="${arrow}" />
          <!-- Inbox tray -->
          <path d="${tray}" />
          <line x1="8" y1="22" x2="24" y2="22" stroke-dasharray="1 2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Downward receiving arrow -->
        <path d="${arrow}" stroke="${c.secondary}" stroke-width="${sw + 1}" fill="none" />
        <!-- Paper inside tray -->
        <rect x="7" y="18" width="18" height="6" rx="1" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}" />
        <!-- Tray with notch -->
        <path d="${tray}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 7. Package (U+1F4E6)
  {
    id: 'package',
    char: '📦',
    name: 'Package',
    unicodeHex: 'U+1F4E6',
    category: 'objects-places',
    tags: ['package', 'box', 'parcel', 'cardboard', 'delivery', 'shipping', 'mail', 'postal', 'order', '📦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#B45309', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Isometric box top -->
          <path d="M16 3 L27 9 L16 15 L5 9 Z" />
          <!-- Left side -->
          <path d="M5 9 V22 L16 28 V15 Z" />
          <!-- Right side -->
          <path d="M16 15 V28 L27 22 V9 Z" />
          <!-- Packing tape band -->
          <path d="M13 13.5 L24 7.5 M8 10.5 L19 16.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Isometric left carton face -->
        <path d="M5 9 V22 L16 28 V15 Z" fill="${opts.style === 'duotone' ? c.secondary : '#B45309'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Right carton face -->
        <path d="M16 15 V28 L27 22 V9 Z" fill="${opts.style === 'duotone' ? c.secondary : '#92400E'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Top carton face (illuminated) -->
        <path d="M16 3 L27 9 L16 15 L5 9 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Clear / yellow packing tape -->
        <path d="M14 4.5 L25 10.5 L23.5 11.5 L12.5 5.5 Z" fill="#FDE047" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M16 15 L19.5 17 V24 L16 22 Z" fill="#FDE047" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- White shipping barcode label on front -->
        <rect x="7" y="14" width="6" height="5" rx="0.5" transform="skewY(27)" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 8. Postbox (U+1F4EE)
  {
    id: 'postbox',
    char: '📮',
    name: 'Postbox',
    unicodeHex: 'U+1F4EE',
    category: 'objects-places',
    tags: ['postbox', 'mailbox', 'red postbox', 'mail', 'postal', 'letters', 'japan post', 'pillar', 'drop', '📮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#B91C1C', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cylindrical pillar postbox -->
          <rect x="8" y="10" width="16" height="18" rx="2" />
          <path d="M6 10 C6 5.5 10.5 4 16 4 C21.5 4 26 5.5 26 10 Z" />
          <!-- Mail letter slot -->
          <rect x="11" y="12" width="10" height="3" rx="1" />
          <!-- Postal mark 〒 -->
          <path d="M12 18 H20 M12 21 H20 M16 21 V26" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Postbox body pillar -->
        <rect x="8" y="10" width="16" height="18" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Domed red roof cap -->
        <path d="M6 10 C6 5.5 10.5 4 16 4 C21.5 4 26 5.5 26 10 Z" fill="${opts.style === 'duotone' ? c.secondary : '#B91C1C'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Dark mail insertion slot -->
        <rect x="11" y="12" width="10" height="3" rx="1" fill="#1E293B" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Japanese postal emblem 〒 in crisp white -->
        <g stroke="#FFFFFF" stroke-width="${sw}" fill="none">
          <path d="M12 18 H20" />
          <path d="M12 21 H20" />
          <path d="M16 21 V26" />
        </g>
      </g>`;
    },
  },

  // 9. Postal Horn (U+1F4EF)
  {
    id: 'postal-horn',
    char: '📯',
    name: 'Postal Horn',
    unicodeHex: 'U+1F4EF',
    category: 'objects-places',
    tags: ['postal horn', 'post horn', 'horn', 'brass', 'music', 'mail', 'postal', 'instrument', 'tassel', '📯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Circular coiled horn body -->
          <circle cx="16" cy="15" r="7" />
          <circle cx="16" cy="15" r="4.5" />
          <!-- Mouthpiece -->
          <path d="M9 15 H4 V13 H9" />
          <!-- Flared bell -->
          <path d="M23 15 L28 10 V20 L23 15 Z" />
          <!-- Hanging cord with tassels -->
          <path d="M13 19 C13 24 19 24 19 19" />
          <line x1="14" y1="23" x2="13" y2="28" stroke-width="${thin}" />
          <line x1="18" y1="23" x2="19" y2="28" stroke-width="${thin}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Hanging tassel cord -->
        <path d="M13 18 C13 24 19 24 19 18" stroke="#16A34A" stroke-width="${sw}" fill="none" />
        <path d="M14 23 L13 28.5" stroke="#DC2626" stroke-width="${sw + 0.5}" />
        <path d="M18 23 L19 28.5" stroke="#DC2626" stroke-width="${sw + 0.5}" />
        <!-- Coiled gold brass tube -->
        <path d="M16 8 A7 7 0 1 1 15.9 8 Z M16 10.5 A4.5 4.5 0 1 0 16.1 10.5 Z" fill="${c.primary}" fill-rule="evenodd" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Mouthpiece pipe -->
        <path d="M9 16.5 H4 V13.5 H9" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Wide bell flare -->
        <path d="M22.5 15 L28 10 V20 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <ellipse cx="28" cy="15" rx="1.5" ry="5" fill="#FEF08A" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 10. Newspaper (U+1F4F0)
  {
    id: 'newspaper',
    char: '📰',
    name: 'Newspaper',
    unicodeHex: 'U+1F4F0',
    category: 'objects-places',
    tags: ['newspaper', 'news', 'press', 'journalism', 'article', 'paper', 'daily', 'headline', 'gazette', '📰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#E2E8F0', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Folded broadsheet paper -->
          <rect x="4" y="5" width="24" height="22" rx="2" />
          <!-- Masthead banner -->
          <rect x="7" y="8" width="18" height="4" rx="0.5" />
          <!-- Photo box -->
          <rect x="7" y="14" width="8" height="6" rx="0.5" />
          <!-- Columns -->
          <line x1="17" y1="14" x2="25" y2="14" />
          <line x1="17" y1="17" x2="25" y2="17" />
          <line x1="17" y1="20" x2="23" y2="20" />
          <line x1="7" y1="23" x2="25" y2="23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Newspaper page -->
        <rect x="4" y="5" width="24" height="22" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Bold masthead header -->
        <rect x="7" y="8" width="18" height="3.5" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#0F172A'}" />
        <!-- Front-page photograph box -->
        <rect x="7" y="13.5" width="8" height="6.5" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#93C5FD'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Column text lines -->
        <line x1="17" y1="14" x2="25" y2="14" stroke="#64748B" stroke-width="${thin}" />
        <line x1="17" y1="17" x2="25" y2="17" stroke="#64748B" stroke-width="${thin}" />
        <line x1="17" y1="20" x2="23" y2="20" stroke="#64748B" stroke-width="${thin}" />
        <line x1="7" y1="23" x2="25" y2="23" stroke="#94A3B8" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 11. Video Camera (U+1F4F9)
  {
    id: 'video-camera',
    char: '📹',
    name: 'Video Camera',
    unicodeHex: 'U+1F4F9',
    category: 'objects-places',
    tags: ['video camera', 'camcorder', 'video', 'movie', 'film', 'record', 'cinema', 'footage', 'tape', '📹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Camera main body -->
          <rect x="4" y="10" width="16" height="13" rx="2.5" />
          <!-- Viewfinder eyepiece at top -->
          <rect x="7" y="6" width="7" height="4" rx="1" />
          <!-- Forward zoom lens on right -->
          <path d="M20 13 L27 8 V25 L20 20 Z" />
          <!-- Record LED -->
          <circle cx="16" cy="13" r="1" />
          <!-- Side cassette tape door / screen lines -->
          <line x1="7" y1="17" x2="13" y2="17" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top viewfinder -->
        <rect x="6" y="6.5" width="8" height="4" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Main camcorder body -->
        <rect x="4" y="10" width="16" height="13" rx="2.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Flip screen / side panel -->
        <rect x="7" y="13.5" width="7" height="6.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#475569'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Red recording tally lamp -->
        <circle cx="16.5" cy="13" r="1.2" fill="#EF4444" />
        <!-- Flaring lens cone -->
        <path d="M20 13 L27 8 V25 L20 20 Z" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Front lens glass element -->
        <ellipse cx="27" cy="16.5" rx="1.5" ry="7.5" fill="#38BDF8" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 12. Television (U+1F4FA)
  {
    id: 'television',
    char: '📺',
    name: 'Television',
    unicodeHex: 'U+1F4FA',
    category: 'objects-places',
    tags: ['television', 'tv', 'screen', 'broadcast', 'crt', 'retro', 'video', 'show', 'channel', '📺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#38BDF8', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- V-antenna rabbit ears -->
          <path d="M9 3 L16 8 L23 3" />
          <!-- TV cabinet -->
          <rect x="3" y="8" width="26" height="19" rx="3" />
          <!-- CRT Screen -->
          <rect x="6" y="11" width="16" height="13" rx="2" />
          <!-- Control knobs -->
          <circle cx="25.5" cy="13.5" r="1.5" />
          <circle cx="25.5" cy="18.5" r="1.5" />
          <!-- Speaker grille slots -->
          <line x1="24" y1="22.5" x2="27" y2="22.5" />
          <!-- Legs -->
          <path d="M7 27 L6 30 M25 27 L26 30" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Antenna rabbit ears -->
        <path d="M9 3 L16 8 L23 3" stroke="#64748B" stroke-width="${sw}" fill="none" />
        <!-- Angled legs -->
        <path d="M7 27 L5.5 30.5 M25 27 L26.5 30.5" stroke="${c.stroke}" stroke-width="${sw + 0.5}" />
        <!-- TV wooden / retro cabinet -->
        <rect x="3" y="8" width="26" height="19" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- CRT glowing blue screen -->
        <rect x="6" y="11" width="16" height="13" rx="2" fill="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Specular reflection arc on screen -->
        ${opts.style === 'silhouette' ? '' : '<path d="M8 13 C12 13 15 15 17 18" stroke="#FFFFFF" stroke-width="1.2" opacity="0.75" fill="none" />'}
        <!-- Rotary channel dials -->
        <circle cx="25.5" cy="13.5" r="1.5" fill="#FBBF24" stroke="${c.stroke}" stroke-width="${thin}" />
        <circle cx="25.5" cy="18.5" r="1.5" fill="#FBBF24" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Speaker vent lines -->
        <line x1="24" y1="22.5" x2="27" y2="22.5" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 14. Videocassette (U+1F4FC)
  {
    id: 'videocassette',
    char: '📼',
    name: 'Videocassette',
    unicodeHex: 'U+1F4FC',
    category: 'objects-places',
    tags: ['videocassette', 'vhs', 'tape', 'video', 'movie', 'retro', 'cassette', 'recording', 'rewind', '📼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#E2E8F0', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- VHS shell -->
          <rect x="3" y="7" width="26" height="18" rx="2.5" />
          <!-- Writable title label -->
          <rect x="6" y="9.5" width="20" height="4.5" rx="1" />
          <!-- Dual tape reel windows -->
          <circle cx="10" cy="18.5" r="3.5" />
          <circle cx="10" cy="18.5" r="1.5" />
          <circle cx="22" cy="18.5" r="3.5" />
          <circle cx="22" cy="18.5" r="1.5" />
          <rect x="13.5" y="17" width="5" height="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Black VHS cassette plastic shell -->
        <rect x="3" y="7" width="26" height="18" rx="2.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- White paper label with red/blue line -->
        <rect x="6" y="9.5" width="20" height="4.5" rx="1" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="8" y1="11.5" x2="24" y2="11.5" stroke="#EF4444" stroke-width="1" />
        <!-- Clear viewing window spanning the reels -->
        <rect x="6.5" y="15" width="19" height="7" rx="1.5" fill="#334155" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Left white magnetic tape spool -->
        <circle cx="10" cy="18.5" r="3.5" fill="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <circle cx="10" cy="18.5" r="1.2" fill="${c.primary}" />
        <!-- Right white magnetic tape spool -->
        <circle cx="22" cy="18.5" r="3.5" fill="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <circle cx="22" cy="18.5" r="1.2" fill="${c.primary}" />
      </g>`;
    },
  },

  // 15. Prayer Beads (U+1F4FF)
  {
    id: 'prayer-beads',
    char: '📿',
    name: 'Prayer Beads',
    unicodeHex: 'U+1F4FF',
    category: 'objects-places',
    tags: ['prayer beads', 'dhikr', 'rosary', 'tasbih', 'mala', 'spiritual', 'meditation', 'religion', 'faith', 'beads', 'tassel', '📿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#F59E0B', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      // Oval bead ring centers around cx=16, cy=13, rx=10, ry=8.5
      // 12 bead positions around the loop
      const beadPositions = [
        [16, 4.5], [21, 6], [25, 9.5], [26, 14], [24, 18], [20.5, 21],
        [16, 22], [11.5, 21], [8, 18], [6, 14], [7, 9.5], [11, 6]
      ];
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Thread loop -->
          <ellipse cx="16" cy="13" rx="9" ry="8" />
          <!-- Beads -->
          ${beadPositions.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" />`).join('\n          ')}
          <!-- Tassel cord and fringe -->
          <path d="M16 22 V25" />
          <circle cx="16" cy="25" r="1.2" />
          <path d="M16 25 L14 30 M16 25 L16 30 M16 25 L18 30" stroke-width="${thin}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Thread guide loop beneath beads -->
        <ellipse cx="16" cy="13" rx="9" ry="8" stroke="${c.stroke}" stroke-width="1" fill="none" />
        <!-- Glossy prayer beads -->
        ${beadPositions.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />`).join('\n        ')}
        <!-- Knot & tassel attachment -->
        <circle cx="16" cy="24" r="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Golden fringe tassel skirts -->
        <path d="M14.5 25.5 L13 30.5 H19 L17.5 25.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="16" y1="26" x2="16" y2="30.5" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },
];
