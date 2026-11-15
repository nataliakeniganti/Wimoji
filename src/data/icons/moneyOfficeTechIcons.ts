import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

type RenderOpts = Parameters<WimojiIconDef['renderContent']>[0];

// Shared drawing for the upright closed-book icons (red, green, blue and orange)
const renderClosedBook = (
  opts: RenderOpts,
  palette: { cover: string; spine: string; stroke: string },
): string => {
  const c = resolveColors(opts, { fillPrimary: palette.cover, fillSecondary: palette.spine, stroke: palette.stroke });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const thin = Math.max(1, sw * 0.7);
  if (opts.style === 'outline') {
    return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Page block peeking out on the right and bottom -->
      <path d="M23.5 5.5 H26.5 V29.5 H8.5 V26.5" />
      <!-- Cover and spine -->
      <rect x="5.5" y="2.5" width="18" height="24" rx="2" />
      <line x1="9.5" y1="2.5" x2="9.5" y2="26.5" />
      <!-- Title label -->
      <rect x="12.5" y="7.5" width="8" height="6" />
      <line x1="12.5" y1="17.5" x2="20.5" y2="17.5" />
      <line x1="12.5" y1="21" x2="17.5" y2="21" />
    </g>`;
  }
  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
    <!-- Page block peeking out on the right and bottom -->
    <rect x="8.5" y="5.5" width="18" height="24" rx="1.5" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="${thin}" />
    <path d="M23.5 11 H26.5 M23.5 17 H26.5 M23.5 23 H26.5" stroke="#CBD5E1" stroke-width="0.8" />
    <!-- Cover -->
    <rect x="5.5" y="2.5" width="18" height="24" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
    <!-- Spine -->
    <path d="M9.5 2.5 H7.5 C6.4 2.5 5.5 3.4 5.5 4.5 V24.5 C5.5 25.6 6.4 26.5 7.5 26.5 H9.5 Z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${sw}" />
    <!-- Title label -->
    <rect x="12.5" y="7.5" width="8" height="6" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${thin}" />
    <line x1="12.5" y1="17.5" x2="20.5" y2="17.5" stroke="#FFFFFF" stroke-width="${thin}" opacity="0.85" />
    <line x1="12.5" y1="21" x2="17.5" y2="21" stroke="#FFFFFF" stroke-width="${thin}" opacity="0.85" />
  </g>`;
};

// Shared drawing for the four mailbox icons: door open or closed, flag raised or lowered
const renderMailbox = (
  opts: RenderOpts,
  state: { open: boolean; letters: boolean; flagUp: boolean },
): string => {
  const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1E3A8A', stroke: '#1D4ED8' });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const tx = state.flagUp ? '-0.4 -0.7' : '-0.4 -1.7';
  const body = 'M4 22 V14 C4 8.5 8.5 5.5 14 5.5 C19.5 5.5 24 8.5 24 14 V22 Z';
  const door = 'M7.5 22 V14.5 C7.5 11.5 10.5 9 14 9 C17.5 9 20.5 11.5 20.5 14.5 V22 Z';
  const flagOutline = state.flagUp ? 'M26.5 17 V4 M26.5 4 H30 V8 H26.5' : 'M26.5 13 V21 M26.5 15.5 H30 V19.5 H26.5';
  const flagPole = state.flagUp ? 'M26.5 17 V4' : 'M26.5 13 V21';
  const flagY = state.flagUp ? 3.5 : 15;
  if (opts.style === 'outline') {
    return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(${tx})">
      <!-- Post -->
      <path d="M12 25 V30 M16 25 V30" />
      <!-- Arched mailbox body, base and door -->
      <path d="${body}" />
      <path d="M2.5 22 H25.5 V25 H2.5 Z" />
      <path d="${door}" />
      ${state.open
        ? state.letters
          ? '<!-- Letter poking out --><rect x="10.5" y="14" width="7" height="5" rx="0.8" />'
          : ''
        : '<!-- Mail slot and handle --><rect x="10.5" y="12" width="7" height="2" rx="1" /><circle cx="14" cy="18" r="0.6" />'}
      <!-- Flag -->
      <path d="${flagOutline}" />
    </g>`;
  }
  return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="translate(${tx})">
    <!-- Post -->
    <rect x="11" y="25" width="6" height="5" fill="#A8A29E" />
    <!-- Flag -->
    <path d="${flagPole}" stroke="#78716C" stroke-width="${sw}" fill="none" />
    <rect x="26.5" y="${flagY}" width="4" height="4.5" rx="0.6" fill="#EF4444" />
    <!-- Arched mailbox body and base -->
    <path d="${body}" fill="${c.primary}" />
    <rect x="2.5" y="21.5" width="23" height="3.5" rx="1.2" fill="${c.secondary}" />
    ${state.open
      ? `<!-- Open doorway -->
    <path d="${door}" fill="${c.secondary}" />${state.letters
      ? `
    <!-- Letters poking out -->
    <rect x="9.5" y="13" width="7" height="5.5" rx="0.8" fill="#FFFFFF" transform="rotate(-8 13 15.75)" />
    <rect x="11.5" y="14.5" width="7" height="5.5" rx="0.8" fill="#E2E8F0" />
    <path d="M11.5 15.2 L15 17.6 L18.5 15.2" stroke="#94A3B8" stroke-width="0.9" fill="none" />`
      : ''}`
      : `<!-- Closed door with mail slot and handle -->
    <path d="${door}" fill="#60A5FA" />
    <rect x="10.5" y="12" width="7" height="2" rx="1" fill="${c.secondary}" />
    <circle cx="14" cy="18" r="1.1" fill="#FFFFFF" />`}
  </g>`;
};

export const moneyOfficeTechIcons: WimojiIconDef[] = [
  // 1. Money Bag (U+1F4B0)
  {
    id: 'money-bag',
    char: '💰',
    name: 'Money Bag',
    unicodeHex: 'U+1F4B0',
    category: 'objects-places',
    tags: ['money bag', 'dollar', 'cash', 'wealth', 'rich', 'fortune', 'sack', 'gold', 'savings', '💰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#CA8A04', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Ruffled top gather -->
          <path d="M12 9 C11 5 13 4 16 5 C19 4 21 5 20 9" />
          <!-- Rope tie -->
          <path d="M10 9 C13 10 19 10 22 9" />
          <!-- Plump bag body -->
          <path d="M10 9 C6 13 4 20 6 25 C8 28 24 28 26 25 C28 20 26 13 22 9 Z" />
          <!-- Dollar symbol -->
          <path d="M16 13 V23 M13.5 16 C14 14.5 17.5 14 18 16 C18.5 18 13.5 18 14 20 C14.5 22 18 21.5 18.5 20" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ruffled pleated opening top -->
        <path d="M11 9.5 C10 5.5 12.5 4 16 4.5 C19.5 4 22 5.5 21 9.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#FEF08A'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Rounded sack belly -->
        <path d="M10 9.5 C6 13.5 4 20 6 25 C8 28.5 24 28.5 26 25 C28 20 26 13.5 22 9.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Tied rope collar band -->
        <path d="M10 9.5 C13 10.5 19 10.5 22 9.5" stroke="${opts.style === 'duotone' ? c.secondary : '#B45309'}" stroke-width="${sw + 0.5}" fill="none" />
        <!-- Dollar sign insignia on sack front -->
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#15803D'}" stroke-width="${sw}" fill="none">
          <path d="M16 13 V23" />
          <path d="M18 15.5 C17.5 14.2 14.8 14.2 14.2 15.6 C13.6 17 18.4 17.5 17.8 19.2 C17.2 20.8 14.5 20.6 14 19.5" />
        </g>
      </g>`;
    },
  },

  // 2. Currency Exchange (U+1F4B1)
  {
    id: 'currency-exchange',
    char: '💱',
    name: 'Currency Exchange',
    unicodeHex: 'U+1F4B1',
    category: 'symbols',
    tags: ['currency exchange', 'money', 'exchange', 'currency', 'forex', 'yen', 'dollar', 'convert', 'trade', '💱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1D4ED8', stroke: '#1E3A8A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="5" />
          <!-- Dollar symbol top-left -->
          <path d="M10 7 V15 M12 9 C11.5 8 9.5 8 9 9 C8.5 10 11.5 10.5 11 12 C10.5 13 8.5 13 8 12" />
          <!-- Yen symbol bottom-right -->
          <path d="M20 17 L22.5 21 L25 17 M22.5 21 V25 M20.5 22.5 H24.5" />
          <!-- Reciprocal curved exchange arrows -->
          <path d="M18 9 C22 9 24 11 24 14" />
          <polyline points="22,12 24,14 26,12" />
          <path d="M14 23 C10 23 8 21 8 18" />
          <polyline points="10,20 8,18 6,20" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="26" height="26" rx="5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Dollar symbol in gold/white -->
        <g stroke="${opts.style === 'silhouette' ? c.primary : '#FFFFFF'}" stroke-width="${sw}" fill="none">
          <path d="M10 7 V15" />
          <path d="M12.5 9 C12 8 9.5 8 9 9 C8.5 10 12 10.5 11.5 12 C11 13 8.5 13 8 12" />
        </g>
        <!-- Yen symbol in gold/white -->
        <g stroke="${opts.style === 'silhouette' ? c.primary : '#FFFFFF'}" stroke-width="${sw}" fill="none">
          <path d="M19.5 17 L22 20.5 L24.5 17" />
          <path d="M22 20.5 V25" />
          <path d="M20 22 H24" />
        </g>
        <!-- Exchange arrows -->
        <path d="M16 9 C21 9 24 11.5 24 14" stroke="${opts.style === 'duotone' ? c.secondary : '#93C5FD'}" stroke-width="${Math.max(1.2, sw * 0.8)}" fill="none" />
        <polyline points="22.5,12 24,14 25.5,12" stroke="${opts.style === 'duotone' ? c.secondary : '#93C5FD'}" stroke-width="${Math.max(1.2, sw * 0.8)}" fill="none" />
        <path d="M16 23 C11 23 8 20.5 8 18" stroke="${opts.style === 'duotone' ? c.secondary : '#93C5FD'}" stroke-width="${Math.max(1.2, sw * 0.8)}" fill="none" />
        <polyline points="9.5,20 8,18 6.5,20" stroke="${opts.style === 'duotone' ? c.secondary : '#93C5FD'}" stroke-width="${Math.max(1.2, sw * 0.8)}" fill="none" />
      </g>`;
    },
  },

  // 3. Heavy Dollar Sign (U+1F4B2)
  {
    id: 'heavy-dollar-sign',
    char: '💲',
    name: 'Heavy Dollar Sign',
    unicodeHex: 'U+1F4B2',
    category: 'symbols',
    tags: ['heavy dollar sign', 'dollar', 'currency', 'money', 'usd', 'cash', 'price', 'cost', '💲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#16A34A', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Heavy vertical bar -->
          <path d="M16 3 V29" stroke-width="${sw + 1}" />
          <!-- Thick S-curve -->
          <path d="M22 10 C21 6.5 17.5 6 16 6 C12 6 9.5 8.5 9.5 12 C9.5 17 22.5 15.5 22.5 20.5 C22.5 24.5 19.5 26 16 26 C13 26 9.5 24.5 9 21" stroke-width="${sw + 1.2}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 3 V29" stroke="${c.stroke}" stroke-width="${sw + 1.5}" fill="none" />
        <path d="M22.5 10 C21.5 6.5 18 6 16 6 C12 6 9 8.5 9 12 C9 17 23 15.5 23 20.5 C23 24.5 19.5 26 16 26 C12.5 26 9 24.5 8.5 21" stroke="${c.stroke}" stroke-width="${sw + 1.8}" fill="none" />
        <path d="M16 4 V28" stroke="${c.primary}" stroke-width="${sw}" fill="none" />
        <path d="M22 10 C21 7 18 6.5 16 6.5 C12.5 6.5 9.5 9 9.5 12 C9.5 16.5 22.5 15.5 22.5 20.5 C22.5 24 19 25.5 16 25.5 C13 25.5 9.5 24 9 21" stroke="${c.primary}" stroke-width="${sw + 0.8}" fill="none" />
      </g>`;
    },
  },

  // 4. Credit Card (U+1F4B3)
  {
    id: 'credit-card',
    char: '💳',
    name: 'Credit Card',
    unicodeHex: 'U+1F4B3',
    category: 'objects-places',
    tags: ['credit card', 'payment', 'money', 'bank', 'visa', 'mastercard', 'purchase', 'card', 'checkout', '💳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0284C7', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="6" width="26" height="20" rx="3" />
          <line x1="3" y1="11" x2="29" y2="11" />
          <!-- Chip -->
          <rect x="6" y="15" width="5" height="4" rx="1" />
          <!-- Number dots -->
          <line x1="14" y1="17" x2="25" y2="17" stroke-dasharray="1 2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="6" width="26" height="20" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Magnetic dark strip -->
        <rect x="3" y="10" width="26" height="4" fill="${opts.style === 'duotone' ? c.secondary : '#0F172A'}" stroke="${c.stroke}" stroke-width="${sw * 0.5}" />
        <!-- Gold EMV Chip -->
        <rect x="6" y="16" width="5" height="4" rx="1" fill="#FBBF24" stroke="#B45309" stroke-width="0.8" />
        <!-- Hologram badge -->
        <circle cx="24" cy="20" r="2.5" fill="#F472B6" opacity="0.85" />
        <circle cx="21.5" cy="20" r="2.5" fill="#FBBF24" opacity="0.85" />
      </g>`;
    },
  },

  // 5. Yen Banknote (U+1F4B4)
  {
    id: 'yen-banknote',
    char: '💴',
    name: 'Yen Banknote',
    unicodeHex: 'U+1F4B4',
    category: 'objects-places',
    tags: ['yen banknote', 'money', 'japanese yen', 'cash', 'currency', 'japan', 'bill', 'jpy', '💴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE68A', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="7" width="26" height="18" rx="2" />
          <circle cx="16" cy="16" r="4.5" />
          <path d="M14 14 L16 16.5 L18 14 M16 16.5 V19 M14.5 17.5 H17.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="7" width="26" height="18" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Inner decorative border -->
        <rect x="5.5" y="9.5" width="21" height="13" rx="1" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" stroke-dasharray="1 1" />
        <!-- Center portrait circle -->
        <circle cx="16" cy="16" r="4.5" fill="${opts.style === 'duotone' ? c.secondary : '#FEF3C7'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.6)}" />
        <!-- Yen symbol ¥ -->
        <path d="M14 13.5 L16 16 L18 13.5 M16 16 V18.5 M14.5 17 H17.5" stroke="${c.stroke}" stroke-width="${sw}" fill="none" />
      </g>`;
    },
  },

  // 6. Dollar Banknote (U+1F4B5)
  {
    id: 'dollar-banknote',
    char: '💵',
    name: 'Dollar Banknote',
    unicodeHex: 'U+1F4B5',
    category: 'objects-places',
    tags: ['dollar banknote', 'money', 'usd', 'cash', 'bill', 'currency', 'buck', 'greenback', '💵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#86EFAC', fillSecondary: '#22C55E', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="7" width="26" height="18" rx="2" />
          <ellipse cx="16" cy="16" rx="5" ry="4" />
          <path d="M16 13 V19 M17.5 14.5 C17 13.8 15 13.8 14.5 14.5 C14 15.5 18 15.5 17.5 16.5 C17 17.5 15 17.5 14.5 17" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="7" width="26" height="18" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Inner decorative frame -->
        <rect x="5.5" y="9.5" width="21" height="13" rx="1" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" />
        <!-- Center Washington medallion -->
        <ellipse cx="16" cy="16" rx="5" ry="4" fill="${opts.style === 'duotone' ? c.secondary : '#DCFCE7'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.6)}" />
        <!-- Dollar sign in center -->
        <g stroke="${c.stroke}" stroke-width="${sw}" fill="none">
          <path d="M16 13.5 V18.5" />
          <path d="M17.5 14.5 C17 14 15 14 14.8 14.6 C14.5 15.3 17.5 15.5 17.2 16.3 C16.8 17.2 15 17.2 14.5 16.8" />
        </g>
        <circle cx="7" cy="11" r="1" fill="${c.stroke}" />
        <circle cx="25" cy="21" r="1" fill="${c.stroke}" />
      </g>`;
    },
  },

  // 7. Euro Banknote (U+1F4B6)
  {
    id: 'euro-banknote',
    char: '💶',
    name: 'Euro Banknote',
    unicodeHex: 'U+1F4B6',
    category: 'objects-places',
    tags: ['euro banknote', 'money', 'currency', 'cash', 'bill', 'europe', 'eur', '💶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#93C5FD', fillSecondary: '#3B82F6', stroke: '#1E3A8A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="7" width="26" height="18" rx="2" />
          <circle cx="16" cy="16" r="4.5" />
          <path d="M17.5 14 C15 14 14.5 15 14.5 16 C14.5 17 15 18 17.5 18 M13.5 15.3 H16.5 M13.5 16.7 H16.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="7" width="26" height="18" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <rect x="5.5" y="9.5" width="21" height="13" rx="1" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" stroke-dasharray="2 1" />
        <!-- Center Euro emblem medallion -->
        <circle cx="16" cy="16" r="4.5" fill="${opts.style === 'duotone' ? c.secondary : '#DBEAFE'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.6)}" />
        <!-- Euro symbol € -->
        <g stroke="${c.stroke}" stroke-width="${sw}" fill="none">
          <path d="M17.5 14 C15.5 14 14.5 15 14.5 16 C14.5 17 15.5 18 17.5 18" />
          <path d="M13.5 15.3 H16.5" />
          <path d="M13.5 16.7 H16.5" />
        </g>
      </g>`;
    },
  },

  // 8. Pound Banknote (U+1F4B7)
  {
    id: 'pound-banknote',
    char: '💷',
    name: 'Pound Banknote',
    unicodeHex: 'U+1F4B7',
    category: 'objects-places',
    tags: ['pound banknote', 'money', 'british pound', 'currency', 'cash', 'bill', 'uk', 'gbp', '💷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D8B4FE', fillSecondary: '#A855F7', stroke: '#581C87' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="7" width="26" height="18" rx="2" />
          <circle cx="16" cy="16" r="4.5" />
          <path d="M17 14 C16 13.5 15 14 15 15 V18 H18 M14 16.5 H17" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="7" width="26" height="18" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <rect x="5.5" y="9.5" width="21" height="13" rx="1" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" stroke-dasharray="2 1" />
        <!-- Center oval -->
        <circle cx="16" cy="16" r="4.5" fill="${opts.style === 'duotone' ? c.secondary : '#F3E8FF'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.6)}" />
        <!-- British Pound symbol £ -->
        <g stroke="${c.stroke}" stroke-width="${sw}" fill="none">
          <path d="M17.2 14 C16.2 13.5 15 14 15 15.2 V18.2 H18" />
          <path d="M14 16.5 H17" />
        </g>
      </g>`;
    },
  },

  // 9. Money with Wings (U+1F4B8)
  {
    id: 'money-with-wings',
    char: '💸',
    name: 'Money with Wings',
    unicodeHex: 'U+1F4B8',
    category: 'objects-places',
    tags: ['money with wings', 'flying money', 'spending', 'wealth', 'waste', 'loss', 'cash', 'dollar', 'wings', '💸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#86EFAC', fillSecondary: '#22C55E', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Banknote body -->
          <rect x="8" y="11" width="16" height="10" rx="1.5" transform="rotate(-10 16 16)" />
          <circle cx="16" cy="16" r="2.5" />
          <!-- Left flapping wing -->
          <path d="M9 13 C4 11 2 6 5 4 C8 3 10 7 10 11" />
          <!-- Right flapping wing -->
          <path d="M23 11 C28 9 30 4 27 2 C24 1 22 5 22 9" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Left feather wing -->
        <path d="M9 14 C3 11 2 5 6 3 C9 2 11 7 10 12 Z" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="${sw}" />
        <path d="M6 7 C8 8 10 10 10 12" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}" fill="none" />
        <!-- Right feather wing -->
        <path d="M23 12 C29 9 30 3 26 2 C23 1 21 6 22 10 Z" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="${sw}" />
        <path d="M26 6 C24 7 22 9 22 11" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}" fill="none" />
        <!-- Banknote in flight -->
        <rect x="8" y="11" width="16" height="10" rx="1.5" transform="rotate(-10 16 16)" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <circle cx="16" cy="16" r="2.5" fill="${opts.style === 'duotone' ? c.secondary : '#DCFCE7'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
      </g>`;
    },
  },

  // 10. Chart Increasing with Yen (U+1F4B9)
  {
    id: 'chart-increasing-with-yen',
    char: '💹',
    name: 'Chart Increasing with Yen',
    unicodeHex: 'U+1F4B9',
    category: 'symbols',
    tags: ['chart increasing with yen', 'chart', 'yen', 'market', 'growth', 'stocks', 'economy', 'graph', 'bull market', '💹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#16A34A', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="5" />
          <!-- Upward surge line -->
          <path d="M6 22 L12 17 L17 20 L25 10" stroke-width="${sw + 0.5}" />
          <polyline points="21,10 25,10 25,14" stroke-width="${sw + 0.5}" />
          <!-- Yen symbol -->
          <path d="M8 8 L10.5 12 L13 8 M10.5 12 V15 M9 13.5 H12" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="26" height="26" rx="5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Yen symbol in top corner -->
        <g stroke="${opts.style === 'silhouette' ? c.primary : '#FFFFFF'}" stroke-width="${sw}" fill="none">
          <path d="M8 7 L10.5 11 L13 7" />
          <path d="M10.5 11 V14" />
          <path d="M9 12.5 H12" />
        </g>
        <!-- Dynamic growth arrow in white/gold -->
        <path d="M6 23 L13 17 L18 20 L25 10" stroke="${opts.style === 'silhouette' ? c.primary : '#FFFFFF'}" stroke-width="${sw + 1}" fill="none" />
        <polyline points="20.5,10 25,10 25,14.5" stroke="${opts.style === 'silhouette' ? c.primary : '#FFFFFF'}" stroke-width="${sw + 1}" fill="none" />
      </g>`;
    },
  },

  // 11. Seat (U+1F4BA)
  {
    id: 'seat',
    char: '💺',
    name: 'Seat',
    unicodeHex: 'U+1F4BA',
    category: 'objects-places',
    tags: ['seat', 'chair', 'airplane seat', 'passenger', 'travel', 'flight', 'comfort', 'transit', '💺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0284C7', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Backrest -->
          <path d="M10 5 C10 3.5 12 3 16 3 C20 3 22 3.5 22 5 V19 C22 21 20 22 16 22 C12 22 10 21 10 19 Z" />
          <!-- Seat cushion -->
          <path d="M7 19 H25 C26 19 27 20 27 21 C27 23 25 24 23 24 H9 C7 24 5 23 5 21 C5 20 6 19 7 19 Z" />
          <!-- Seat base support -->
          <path d="M11 24 V29 M21 24 V29 M9 29 H23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Seat base frame -->
        <path d="M11 24 V29 M21 24 V29 M9 29 H23" stroke="${c.stroke}" stroke-width="${sw}" fill="none" />
        <!-- Padded backrest -->
        <rect x="10" y="4" width="12" height="17" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- White headrest cover / antimacassar -->
        <rect x="12" y="5" width="8" height="5" rx="1.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}" />
        <!-- Bottom seat cushion -->
        <path d="M6 18 C6 18 10 17.5 16 17.5 C22 17.5 26 18 26 18 C27 18 28 19 28 20.5 C28 22.5 26 24 23 24 H9 C6 24 4 22.5 4 20.5 C4 19 5 18 6 18 Z" fill="${opts.style === 'duotone' ? c.secondary : c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Armrest edges -->
        <path d="M6 18 V15 C6 14.5 7 14 8 14" stroke="${c.stroke}" stroke-width="${sw}" fill="none" />
        <path d="M26 18 V15 C26 14.5 25 14 24 14" stroke="${c.stroke}" stroke-width="${sw}" fill="none" />
      </g>`;
    },
  },

  // 12. Laptop (U+1F4BB)
  {
    id: 'laptop',
    char: '💻',
    name: 'Laptop',
    unicodeHex: 'U+1F4BB',
    category: 'objects-places',
    tags: ['laptop', 'computer', 'pc', 'macbook', 'tech', 'screen', 'keyboard', 'device', 'work', 'code', '💻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Screen display lid -->
          <rect x="6" y="5" width="20" height="15" rx="2" />
          <rect x="8" y="7" width="16" height="11" />
          <!-- Keyboard base tray -->
          <path d="M2 24 L5 20 H27 L30 24 C30 25 29 26 28 26 H4 C3 26 2 25 2 24 Z" />
          <!-- Touchpad notch -->
          <line x1="13.5" y1="24.5" x2="18.5" y2="24.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Display frame lid -->
        <rect x="6" y="5" width="20" height="15" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Screen interior (glowing sky blue) -->
        <rect x="8" y="7" width="16" height="11" fill="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}" />
        <!-- Code editor / app lines on screen -->
        <line x1="10" y1="10" x2="16" y2="10" stroke="#FFFFFF" stroke-width="1.2" />
        <line x1="10" y1="13" x2="20" y2="13" stroke="#FFFFFF" stroke-width="1.2" />
        <line x1="10" y1="15.5" x2="14" y2="15.5" stroke="#FFFFFF" stroke-width="1.2" />
        <!-- Laptop keyboard base -->
        <path d="M2 23 L5.5 20 H26.5 L30 23 C30.5 24 29.5 25.5 28 25.5 H4 C2.5 25.5 1.5 24 2 23 Z" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Trackpad slot -->
        <rect x="13" y="22.5" width="6" height="2" rx="0.5" fill="#F1F5F9" stroke="${c.stroke}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 13. Briefcase (U+1F4BC)
  {
    id: 'briefcase',
    char: '💼',
    name: 'Briefcase',
    unicodeHex: 'U+1F4BC',
    category: 'objects-places',
    tags: ['briefcase', 'work', 'business', 'office', 'job', 'leather', 'bag', 'portfolio', 'lawyer', '💼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#92400E', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Handle -->
          <path d="M12 9 V5 C12 4 13 3 14 3 H18 C19 3 20 4 20 5 V9" />
          <!-- Case body -->
          <rect x="3" y="9" width="26" height="18" rx="3" />
          <!-- Flap seam line -->
          <path d="M3 16 H29" />
          <!-- Locks -->
          <rect x="7" y="14" width="3" height="4" rx="0.5" />
          <rect x="22" y="14" width="3" height="4" rx="0.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top arched handle -->
        <path d="M12 9 V5 C12 3.8 13.2 3 14.5 3 H17.5 C18.8 3 20 3.8 20 5 V9" stroke="${c.stroke}" stroke-width="${sw + 0.5}" fill="none" />
        <!-- Case leather body -->
        <rect x="3" y="9" width="26" height="18" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Upper flap fold -->
        <path d="M3 9 H29 V16 C24 18 8 18 3 16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#92400E'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Dual gold buckle clasps -->
        <rect x="8" y="14.5" width="3.5" height="4.5" rx="1" fill="#FBBF24" stroke="#78350F" stroke-width="0.8" />
        <rect x="20.5" y="14.5" width="3.5" height="4.5" rx="1" fill="#FBBF24" stroke="#78350F" stroke-width="0.8" />
      </g>`;
    },
  },

  // 14. Minidisc (U+1F4BD)
  {
    id: 'minidisc',
    char: '💽',
    name: 'Minidisc',
    unicodeHex: 'U+1F4BD',
    category: 'objects-places',
    tags: ['minidisc', 'md', 'audio', 'retro', 'music', 'data', 'disc', 'cartridge', 'storage', '💽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E2E8F0', fillSecondary: '#38BDF8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="2" />
          <circle cx="16" cy="16" r="8" />
          <circle cx="16" cy="16" r="3" />
          <rect x="11" y="4" width="10" height="7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Square plastic cartridge casing -->
        <rect x="4" y="4" width="24" height="24" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Circular optical disc visible inside -->
        <circle cx="16" cy="16" r="8.5" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke="${c.stroke}" stroke-width="${sw * 0.8}" />
        <circle cx="16" cy="16" r="3" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <!-- Sliding metal shutter at top edge -->
        <rect x="11" y="4" width="10" height="8" rx="0.5" fill="#64748B" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <line x1="14" y1="6" x2="18" y2="6" stroke="#CBD5E1" stroke-width="1" />
      </g>`;
    },
  },

  // 15. Floppy Disk (U+1F4BE)
  {
    id: 'floppy-disk',
    char: '💾',
    name: 'Floppy Disk',
    unicodeHex: 'U+1F4BE',
    category: 'objects-places',
    tags: ['floppy disk', 'save', 'disk', 'retro', 'storage', 'computer', '3.5 inch', 'drive', '💾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1D4ED8', stroke: '#1E3A8A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- 3.5" Disk with notched corner -->
          <path d="M4 6 C4 4.8 4.8 4 6 4 H23 L28 9 V26 C28 27.2 27.2 28 26 28 H6 C4.8 28 4 27.2 4 26 Z" />
          <!-- Metal shutter -->
          <rect x="8" y="4" width="13" height="9" />
          <line x1="12" y1="6" x2="12" y2="10" />
          <!-- Label -->
          <rect x="8" y="17" width="16" height="11" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Blue plastic body -->
        <path d="M4 6 C4 4.8 4.8 4 6 4 H23 L28 9 V26 C28 27.2 27.2 28 26 28 H6 C4.8 28 4 27.2 4 26 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Silver sliding shutter -->
        <rect x="8" y="4" width="13" height="9" fill="${opts.style === 'duotone' ? c.secondary : '#CBD5E1'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <rect x="11" y="6" width="3" height="5" fill="#475569" />
        <!-- White paper writable label -->
        <rect x="8" y="17" width="16" height="11" rx="1" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <line x1="11" y1="20" x2="21" y2="20" stroke="#EF4444" stroke-width="1.2" />
        <line x1="11" y1="23" x2="21" y2="23" stroke="#94A3B8" stroke-width="1.2" />
      </g>`;
    },
  },

  // 16. Optical Disc (U+1F4BF)
  {
    id: 'optical-disc',
    char: '💿',
    name: 'Optical Disc',
    unicodeHex: 'U+1F4BF',
    category: 'objects-places',
    tags: ['optical disc', 'cd', 'dvd', 'disc', 'music', 'album', 'software', 'audio', 'shiny', '💿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E2E8F0', fillSecondary: '#C084FC', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="13" />
          <circle cx="16" cy="16" r="4.5" />
          <circle cx="16" cy="16" r="2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Outer metallic disc surface -->
        <circle cx="16" cy="16" r="13" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Prismatic rainbow reflection wedges -->
        <path d="M16 16 L25 7 A13 13 0 0 1 29 16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#A78BFA'}" opacity="0.6" />
        <path d="M16 16 L7 25 A13 13 0 0 1 3 16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" opacity="0.6" />
        <!-- Clear inner clamp ring -->
        <circle cx="16" cy="16" r="5" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <!-- Center spindle hole -->
        <circle cx="16" cy="16" r="2.2" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 17. DVD (U+1F4C0)
  {
    id: 'dvd',
    char: '📀',
    name: 'DVD',
    unicodeHex: 'U+1F4C0',
    category: 'objects-places',
    tags: ['dvd', 'gold disc', 'movie', 'video', 'disc', 'optical', 'gold', 'media', 'film', '📀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#EAB308', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="13" />
          <circle cx="16" cy="16" r="4.5" />
          <circle cx="16" cy="16" r="2" />
          <!-- Reflective radial rays -->
          <line x1="16" y1="3" x2="16" y2="7" />
          <line x1="16" y1="25" x2="16" y2="29" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="13" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Golden iridescent reflection slices -->
        <path d="M16 16 L25 7 A13 13 0 0 1 28 12 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" opacity="0.75" />
        <path d="M16 16 L7 25 A13 13 0 0 1 4 20 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" opacity="0.75" />
        <circle cx="16" cy="16" r="5" fill="#FEF08A" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <circle cx="16" cy="16" r="2.2" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 18. File Folder (U+1F4C1)
  {
    id: 'file-folder',
    char: '📁',
    name: 'File Folder',
    unicodeHex: 'U+1F4C1',
    category: 'objects-places',
    tags: ['file folder', 'folder', 'files', 'directory', 'archive', 'office', 'storage', 'data', 'manila', '📁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 8 C3 6.8 3.8 6 5 6 H12 L14 9 H27 C28.2 9 29 9.8 29 11 V25 C29 26.2 28.2 27 27 27 H5 C3.8 27 3 26.2 3 25 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back cover with top file tab -->
        <path d="M3 8 C3 6.8 3.8 6 5 6 H12 L14 9 H27 C28.2 9 29 9.8 29 11 V25 C29 26.2 28.2 27 27 27 H5 C3.8 27 3 26.2 3 25 Z" fill="${opts.style === 'duotone' ? c.secondary : '#D97706'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Front cover flap -->
        <path d="M3 11 C3 10 3.8 9.5 5 9.5 H27 C28.2 9.5 29 10 29 11 V25 C29 26.2 28.2 27 27 27 H5 C3.8 27 3 26.2 3 25 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 19. Open File Folder (U+1F4C2)
  {
    id: 'open-file-folder',
    char: '📂',
    name: 'Open File Folder',
    unicodeHex: 'U+1F4C2',
    category: 'objects-places',
    tags: ['open file folder', 'folder', 'open', 'directory', 'browse', 'files', 'documents', 'unfold', '📂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Back cover with tab -->
          <path d="M4 8 C4 6.8 4.8 6 6 6 H13 L15 9 H26 C27.2 9 28 9.8 28 11 V22" />
          <!-- White paper inside -->
          <path d="M7 11 H23 V17 H7 Z" />
          <!-- Front open flap -->
          <path d="M2 17 L6 27 H28 L31 17 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back folder wall -->
        <path d="M4 8 C4 6.8 4.8 6 6 6 H13 L15 9 H26 C27.2 9 28 9.8 28 11 V22 H4 Z" fill="${opts.style === 'duotone' ? c.secondary : '#D97706'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- White document paper peeking out -->
        <rect x="7" y="9" width="16" height="10" rx="1" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}" />
        <line x1="10" y1="12" x2="16" y2="12" stroke="#94A3B8" stroke-width="1.2" />
        <line x1="10" y1="15" x2="20" y2="15" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Front cover opened in perspective -->
        <path d="M2 17 L6 27 H27 L31 17 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 20. Page with Curl (U+1F4C3)
  {
    id: 'page-with-curl',
    char: '📃',
    name: 'Page with Curl',
    unicodeHex: 'U+1F4C3',
    category: 'objects-places',
    tags: ['page with curl', 'document', 'paper', 'scroll', 'curl', 'text', 'contract', 'script', 'page', '📃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#E2E8F0', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const thin = Math.max(1, sw * 0.75);
      const ink = o ? c.stroke : (d ? c.secondary : '#94A3B8');
      // Text lines are drawn inside the sheet; in duotone they need to stay visible on the light page.
      const lineInk = d ? '#94A3B8' : ink;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Sheet of paper -->
        <path d="M7 5 C7 3.9 7.9 3 9 3 H24 C25.1 3 26 3.9 26 5 V22 H7 Z" fill="${o ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Text lines -->
        <g stroke="${lineInk}" stroke-width="${thin}" fill="none">
          <line x1="11" y1="8" x2="22" y2="8" />
          <line x1="11" y1="12" x2="22" y2="12" />
          <line x1="11" y1="16" x2="18" y2="16" />
        </g>
        <!-- Paper curling toward the viewer at the bottom -->
        <path d="M5.5 24.5 C5.5 22.6 7 21 9 21 H27 V28 H9 C7 28 5.5 26.4 5.5 24.5 Z" fill="${o ? 'none' : (d ? c.secondary : '#CBD5E1')}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Rolled end -->
        <ellipse cx="9" cy="24.5" rx="2" ry="2.5" fill="${o ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 21. Page Facing Up (U+1F4C4)
  {
    id: 'page-facing-up',
    char: '📄',
    name: 'Page Facing Up',
    unicodeHex: 'U+1F4C4',
    category: 'objects-places',
    tags: ['page facing up', 'document', 'page', 'paper', 'file', 'blank', 'text', 'report', 'sheet', '📄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#E2E8F0', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Document sheet with dog-ear corner -->
          <path d="M6 5 C6 3.8 7 3 8 3 H20 L26 9 V27 C26 28.2 25 29 24 29 H8 C7 29 6 28.2 6 27 Z" />
          <path d="M20 3 V9 H26" />
          <line x1="10" y1="14" x2="22" y2="14" />
          <line x1="10" y1="18" x2="22" y2="18" />
          <line x1="10" y1="22" x2="17" y2="22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 5 C6 3.8 7 3 8 3 H20 L26 9 V27 C26 28.2 25 29 24 29 H8 C7 29 6 28.2 6 27 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Folded dog-ear corner -->
        <path d="M20 3 V9 H26 Z" fill="${opts.style === 'duotone' ? c.secondary : '#CBD5E1'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Printed text line indicators -->
        <line x1="10" y1="14" x2="22" y2="14" stroke="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke-width="${Math.max(1, sw * 0.75)}" />
        <line x1="10" y1="18" x2="22" y2="18" stroke="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke-width="${Math.max(1, sw * 0.75)}" />
        <line x1="10" y1="22" x2="17" y2="22" stroke="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke-width="${Math.max(1, sw * 0.75)}" />
      </g>`;
    },
  },

  // 22. Calendar (U+1F4C5)
  {
    id: 'calendar',
    char: '📅',
    name: 'Calendar',
    unicodeHex: 'U+1F4C5',
    category: 'objects-places',
    tags: ['calendar', 'date', 'schedule', 'planner', 'month', 'day', 'appointment', 'event', 'calendar page', '📅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#EF4444', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="6" width="24" height="22" rx="3" />
          <line x1="4" y1="12" x2="28" y2="12" />
          <line x1="9" y1="3" x2="9" y2="7" />
          <line x1="23" y1="3" x2="23" y2="7" />
          <!-- Calendar grid blocks -->
          <circle cx="9" cy="17" r="1.5" />
          <circle cx="16" cy="17" r="1.5" />
          <circle cx="23" cy="17" r="1.5" />
          <circle cx="9" cy="23" r="1.5" />
          <circle cx="16" cy="23" r="1.5" />
          <circle cx="23" cy="23" r="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Calendar body -->
        <rect x="4" y="6" width="24" height="22" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Red top banner header -->
        <path d="M4 9 C4 7.3 5.3 6 7 6 H25 C26.7 6 28 7.3 28 9 V12 H4 Z" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Twin spiral ring binders -->
        <line x1="9" y1="3" x2="9" y2="7" stroke="${c.stroke}" stroke-width="${sw + 0.5}" />
        <line x1="23" y1="3" x2="23" y2="7" stroke="${c.stroke}" stroke-width="${sw + 0.5}" />
        <!-- Date grid marks -->
        <circle cx="9" cy="16.5" r="1.5" fill="${c.stroke}" />
        <circle cx="16" cy="16.5" r="1.5" fill="${c.stroke}" />
        <circle cx="23" cy="16.5" r="1.5" fill="${c.stroke}" />
        <circle cx="9" cy="22.5" r="1.5" fill="${c.stroke}" />
        <circle cx="16" cy="22.5" r="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" />
        <circle cx="23" cy="22.5" r="1.5" fill="${c.stroke}" />
      </g>`;
    },
  },

  // 23. Tear-Off Calendar (U+1F4C6)
  {
    id: 'tear-off-calendar',
    char: '📆',
    name: 'Tear-Off Calendar',
    unicodeHex: 'U+1F4C6',
    category: 'objects-places',
    tags: ['tear-off calendar', 'calendar', 'date', 'daily calendar', 'day', 'schedule', 'today', 'tear off', '📆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#EF4444', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="6" width="24" height="22" rx="3" />
          <line x1="4" y1="12" x2="28" y2="12" />
          <!-- Perforations -->
          <line x1="4" y1="12" x2="28" y2="12" stroke-dasharray="1 1.5" />
          <line x1="9" y1="3" x2="9" y2="7" />
          <line x1="23" y1="3" x2="23" y2="7" />
          <!-- Big bold 17 -->
          <path d="M11 17 L13 15 V25 M17 15 H22 L18 25" stroke-width="${sw + 0.5}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="6" width="24" height="22" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Red top binding band -->
        <path d="M4 9 C4 7.3 5.3 6 7 6 H25 C26.7 6 28 7.3 28 9 V12 H4 Z" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Metal binder pegs -->
        <line x1="9" y1="3" x2="9" y2="7" stroke="${c.stroke}" stroke-width="${sw + 0.5}" />
        <line x1="23" y1="3" x2="23" y2="7" stroke="${c.stroke}" stroke-width="${sw + 0.5}" />
        <!-- Prominent numerical day: 17 -->
        <g stroke="${c.stroke}" stroke-width="${sw + 0.8}" fill="none">
          <path d="M11 17.5 L13 16 V24.5" />
          <path d="M17 16 H22 L18 24.5" />
        </g>
      </g>`;
    },
  },

  // 24. Card Index (U+1F4C7)
  {
    id: 'card-index',
    char: '📇',
    name: 'Card Index',
    unicodeHex: 'U+1F4C7',
    category: 'objects-places',
    tags: ['card index', 'rolodex', 'contacts', 'business card', 'index', 'address book', 'organizer', '📇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#3B82F6', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Stand base -->
          <path d="M5 26 H27 M8 26 L12 21 H20 L24 26" />
          <!-- Rotary wheel knobs -->
          <circle cx="6" cy="19" r="3" />
          <circle cx="26" cy="19" r="3" />
          <!-- Index card -->
          <rect x="9" y="8" width="14" height="13" rx="1.5" />
          <!-- Tab -->
          <path d="M9 11 H15 V8 H9 Z" />
          <line x1="12" y1="14" x2="20" y2="14" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Stand and axle frame -->
        <path d="M4 27 H28 M8 27 L11 20 H21 L24 27" stroke="${c.stroke}" stroke-width="${sw}" fill="none" />
        <line x1="6" y1="20" x2="26" y2="20" stroke="${c.stroke}" stroke-width="${sw + 0.5}" />
        <!-- Rear card layer -->
        <rect x="11" y="6" width="14" height="13" rx="1.5" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <path d="M19 6 H25 V9 H19 Z" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <!-- Front index card -->
        <rect x="8" y="9" width="14" height="13" rx="1.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${sw}" />
        <path d="M8 9 H14 V12 H8 Z" fill="${opts.style === 'duotone' ? c.secondary : '#3B82F6'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <line x1="11" y1="15" x2="19" y2="15" stroke="#94A3B8" stroke-width="1.2" />
        <line x1="11" y1="18" x2="17" y2="18" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Side rotary turning wheels -->
        <circle cx="5" cy="20" r="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <circle cx="27" cy="20" r="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 25. Chart Increasing (U+1F4C8)
  {
    id: 'chart-increasing',
    char: '📈',
    name: 'Chart Increasing',
    unicodeHex: 'U+1F4C8',
    category: 'symbols',
    tags: ['chart increasing', 'chart', 'graph', 'growth', 'trending up', 'success', 'profit', 'stocks', 'bullish', 'increase', '📈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#16A34A', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Graph axes -->
          <path d="M4 5 V27 H28" />
          <!-- Upward trending zigzag arrow -->
          <path d="M7 21 L13 14 L18 18 L26 8" stroke-width="${sw + 0.5}" />
          <polyline points="21,8 26,8 26,13" stroke-width="${sw + 0.5}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Axes -->
        <path d="M4 5 V27 H28" stroke="${opts.style === 'duotone' ? c.secondary : '#475569'}" stroke-width="${sw}" fill="none" />
        <!-- Grid dot lines -->
        <line x1="4" y1="12" x2="27" y2="12" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="4" y1="19" x2="27" y2="19" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="2 2" />
        <!-- Shaded fill under graph line -->
        <polygon points="7,21 13,14 18,18 26,8 26,27 7,27" fill="${opts.style === 'duotone' ? c.secondary : '#DCFCE7'}" opacity="0.6" />
        <!-- Bold green upward profit line -->
        <path d="M7 21 L13 14 L18 18 L26 8" stroke="${c.primary}" stroke-width="${sw + 1}" fill="none" />
        <!-- Arrowhead pointer -->
        <polyline points="20.5,8 26,8 26,13.5" stroke="${c.primary}" stroke-width="${sw + 1}" fill="none" />
      </g>`;
    },
  },

  // 26. Chart Decreasing (U+1F4C9)
  {
    id: 'chart-decreasing',
    char: '📉',
    name: 'Chart Decreasing',
    unicodeHex: 'U+1F4C9',
    category: 'symbols',
    tags: ['chart decreasing', 'chart', 'graph', 'decline', 'trending down', 'loss', 'bearish', 'drop', 'decrease', 'recession', '📉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#DC2626', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 5 V27 H28" />
          <!-- Downward cascade arrow -->
          <path d="M7 9 L13 16 L18 12 L26 23" stroke-width="${sw + 0.5}" />
          <polyline points="21,23 26,23 26,18" stroke-width="${sw + 0.5}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 5 V27 H28" stroke="${opts.style === 'duotone' ? c.secondary : '#475569'}" stroke-width="${sw}" fill="none" />
        <!-- Grid dot lines -->
        <line x1="4" y1="12" x2="27" y2="12" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="4" y1="19" x2="27" y2="19" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="2 2" />
        <!-- Shaded drop zone -->
        <polygon points="7,9 13,16 18,12 26,23 26,27 7,27" fill="${opts.style === 'duotone' ? c.secondary : '#FEE2E2'}" opacity="0.6" />
        <!-- Plunging red loss line -->
        <path d="M7 9 L13 16 L18 12 L26 23" stroke="${c.primary}" stroke-width="${sw + 1}" fill="none" />
        <!-- Arrowhead downward -->
        <polyline points="20.5,23 26,23 26,17.5" stroke="${c.primary}" stroke-width="${sw + 1}" fill="none" />
      </g>`;
    },
  },

  // 27. Bar Chart (U+1F4CA)
  {
    id: 'bar-chart',
    char: '📊',
    name: 'Bar Chart',
    unicodeHex: 'U+1F4CA',
    category: 'symbols',
    tags: ['bar chart', 'chart', 'graph', 'statistics', 'analytics', 'data', 'metrics', 'presentation', 'comparison', '📊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#EAB308', stroke: '#1E3A8A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="3" y1="27" x2="29" y2="27" />
          <rect x="5" y="15" width="4.5" height="12" rx="1" />
          <rect x="11.5" y="9" width="4.5" height="18" rx="1" />
          <rect x="18" y="5" width="4.5" height="22" rx="1" />
          <rect x="24.5" y="12" width="4.5" height="15" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="27" x2="29" y2="27" stroke="${c.stroke}" stroke-width="${sw + 0.5}" />
        <!-- Bar 1 (Red / Coral) -->
        <rect x="5" y="16" width="4.5" height="11" rx="1" fill="#F87171" stroke="${c.stroke}" stroke-width="${sw * 0.7}" />
        <!-- Bar 2 (Yellow / Amber) -->
        <rect x="11.5" y="10" width="4.5" height="17" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke="${c.stroke}" stroke-width="${sw * 0.7}" />
        <!-- Bar 3 (Blue / Primary) -->
        <rect x="18" y="5" width="4.5" height="22" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw * 0.7}" />
        <!-- Bar 4 (Green / Emerald) -->
        <rect x="24.5" y="12" width="4.5" height="15" rx="1" fill="#34D399" stroke="${c.stroke}" stroke-width="${sw * 0.7}" />
      </g>`;
    },
  },

  // 28. Clipboard (U+1F4CB)
  {
    id: 'clipboard',
    char: '📋',
    name: 'Clipboard',
    unicodeHex: 'U+1F4CB',
    category: 'objects-places',
    tags: ['clipboard', 'checklist', 'tasks', 'todo', 'notes', 'audit', 'exam', 'paper', 'board', 'clipboard check', '📋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#F8FAFC', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="24" rx="2" />
          <rect x="10" y="2" width="12" height="5" rx="1.5" />
          <circle cx="16" cy="4.5" r="1" />
          <!-- Attached sheet -->
          <rect x="8" y="8" width="16" height="18" rx="1" />
          <!-- Checklist items -->
          <path d="M10 13 L12 15 L15 12" />
          <line x1="17" y1="14" x2="22" y2="14" />
          <path d="M10 19 L12 21 L15 18" />
          <line x1="17" y1="20" x2="22" y2="20" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Brown wooden clipboard body -->
        <rect x="5" y="5" width="22" height="24" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- White paper document sheet -->
        <rect x="8" y="8" width="16" height="18" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}" />
        <!-- Checklist items with green checkmarks -->
        <path d="M10 13 L11.5 14.5 L14.5 11.5" stroke="#16A34A" stroke-width="${sw}" fill="none" />
        <line x1="16.5" y1="13.5" x2="21.5" y2="13.5" stroke="#94A3B8" stroke-width="1.2" />
        <path d="M10 18.5 L11.5 20 L14.5 17" stroke="#16A34A" stroke-width="${sw}" fill="none" />
        <line x1="16.5" y1="19" x2="21.5" y2="19" stroke="#94A3B8" stroke-width="1.2" />
        <line x1="10.5" y1="23" x2="19" y2="23" stroke="#CBD5E1" stroke-width="1.2" />
        <!-- Metallic spring clip at top -->
        <rect x="10" y="2.5" width="12" height="5" rx="1.5" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="${sw}" />
        <circle cx="16" cy="4.5" r="1.2" fill="${c.stroke}" />
      </g>`;
    },
  },

  // 29. Pushpin (U+1F4CC)
  {
    id: 'pushpin',
    char: '📌',
    name: 'Pushpin',
    unicodeHex: 'U+1F4CC',
    category: 'objects-places',
    tags: ['pushpin', 'pin', 'thumbtack', 'tack', 'notice', 'board', 'pinned', 'red pin', 'stationery', '📌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#DC2626', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const needle = o ? 'none' : (d ? '#94A3B8' : '#94A3B8');

      // Drawn upright, then tilted so the head is at the upper-right and the point at the lower-left.
      return `${badge}<g transform="rotate(40 16 16)" stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Steel needle -->
        <path d="M15 18 H17 L16 29 Z" fill="${needle}" stroke="${o ? c.stroke : '#475569'}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <!-- Flat base disc -->
        <rect x="8.5" y="15" width="15" height="3.5" rx="1.75" fill="${o ? 'none' : (d ? c.secondary : '#B91C1C')}" />
        <!-- Tapered body -->
        <path d="M12.5 7 H19.5 L21 15 H11 Z" fill="${o ? 'none' : c.primary}" />
        <!-- Thumb cap -->
        <rect x="10.5" y="3" width="11" height="4.5" rx="2" fill="${o ? 'none' : (d ? c.secondary : '#DC2626')}" />
        <!-- Gloss highlight -->
        ${opts.style === 'silhouette' || o ? '' : '<line x1="14.2" y1="9.5" x2="14.8" y2="13" stroke="#FFFFFF" stroke-width="1.2" opacity="0.75" />'}
      </g>`;
    },
  },

  // 30. Round Pushpin (U+1F4CD)
  {
    id: 'round-pushpin',
    char: '📍',
    name: 'Round Pushpin',
    unicodeHex: 'U+1F4CD',
    category: 'objects-places',
    tags: ['round pushpin', 'map pin', 'location', 'gps', 'marker', 'pin', 'place', 'destination', 'spot', '📍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#DC2626', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="15" y1="17" x2="5" y2="27" />
          <circle cx="20" cy="11" r="8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Silver steel needle -->
        <line x1="15" y1="16" x2="5" y2="26" stroke="#94A3B8" stroke-width="${sw + 0.8}" />
        <!-- Vibrant round sphere pinhead -->
        <circle cx="20" cy="11" r="8.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Spherical 3D shading & shiny highlight -->
        <circle cx="18" cy="8.5" r="2.8" fill="#FFFFFF" opacity="0.75" />
      </g>`;
    },
  },

  // 31. Paperclip (U+1F4CE)
  {
    id: 'paperclip',
    char: '📎',
    name: 'Paperclip',
    unicodeHex: 'U+1F4CE',
    category: 'objects-places',
    tags: ['paperclip', 'attachment', 'clip', 'paper', 'fastener', 'stationery', 'office', 'hold', 'wire', '📎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      // Classic Gem-style clip: one continuous wire, three nested U-turns, tilted 45 degrees
      const wire = 'M18.2 22 V9 A2.2 2.2 0 0 0 13.8 9 V24 A4.4 4.4 0 0 0 22.6 24 V8 A6.6 6.6 0 0 0 9.4 8 V22';
      const tilt = 'translate(-0.9 0.6) rotate(45 16 15)';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Continuous bent wire -->
          <path d="${wire}" transform="${tilt}" />
        </g>`;
      }
      if (opts.style === 'silhouette') {
        return `${badge}<g stroke="${c.primary}" stroke-width="${sw * 1.7}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${wire}" transform="${tilt}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" fill="none" transform="${tilt}">
        <!-- Dark wire edge -->
        <path d="${wire}" stroke="${c.stroke}" stroke-width="${sw * 1.7}" />
        <!-- Metal wire highlight -->
        <path d="${wire}" stroke="${c.primary}" stroke-width="${sw * 0.7}" />
      </g>`;
    },
  },

  // 31b. Linked Paperclips (U+1F587)
  {
    id: 'linked-paperclips',
    char: '🖇️',
    name: 'Linked Paperclips',
    unicodeHex: 'U+1F587',
    category: 'objects-places',
    tags: ['linked paperclips', 'paperclips', 'clips', 'link', 'linked', 'stationery', 'office', 'attachment', 'wire', 'fastener', '🖇️', '🖇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const wire = 'M18.2 22 V9 A2.2 2.2 0 0 0 13.8 9 V24 A4.4 4.4 0 0 0 22.6 24 V8 A6.6 6.6 0 0 0 9.4 8 V22';
      const weave = 'M 13.8 20 V24 A 4.4 4.4 0 0 0 22.6 24 V 18';
      const t1 = 'translate(10.5 16) scale(0.8) rotate(-24) translate(-16 -16)';
      const t2 = 'translate(21.5 16) scale(0.8) rotate(24) translate(-16 -16)';

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left clip -->
          <path d="${wire}" transform="${t1}" />
          <!-- Right clip -->
          <path d="${wire}" transform="${t2}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g stroke="${c.primary}" stroke-width="${sw * 1.6}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left clip -->
          <path d="${wire}" transform="${t1}" />
          <!-- Right clip -->
          <path d="${wire}" transform="${t2}" />
        </g>`;
      }

      const sec = opts.style === 'duotone' ? c.secondary : c.primary;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Left clip -->
        <g transform="${t1}">
          <path d="${wire}" stroke="${c.stroke}" stroke-width="${sw * 1.6}" />
          <path d="${wire}" stroke="${c.primary}" stroke-width="${sw * 0.7}" />
        </g>
        <!-- Right clip -->
        <g transform="${t2}">
          <path d="${wire}" stroke="${c.stroke}" stroke-width="${sw * 1.6}" />
          <path d="${wire}" stroke="${sec}" stroke-width="${sw * 0.7}" />
        </g>
        <!-- Interlocking weave strand -->
        <g transform="${t1}">
          <path d="${weave}" stroke="${c.stroke}" stroke-width="${sw * 1.6}" />
          <path d="${weave}" stroke="${c.primary}" stroke-width="${sw * 0.7}" />
        </g>
      </g>`;
    },
  },

  // 32. Straight Ruler (U+1F4CF)
  {
    id: 'straight-ruler',
    char: '📏',
    name: 'Straight Ruler',
    unicodeHex: 'U+1F4CF',
    category: 'objects-places',
    tags: ['straight ruler', 'ruler', 'measure', 'length', 'scale', 'centimeter', 'inch', 'tool', 'math', 'drafting', '📏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#F59E0B', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.6);
      // 45-degree ruler bar; ticks start just inside the top-left edge, long ones every other mark
      const bar = 'M3.5 21.5 L21.5 3.5 L28.5 10.5 L10.5 28.5 Z';
      const ticks = 'M7.36 20.32 L10.05 23.01 M10.60 17.08 L12.16 18.64 M13.84 13.84 L16.53 16.53 M17.08 10.60 L18.64 12.16 M20.32 7.36 L23.01 10.05';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Ruler bar -->
          <path d="${bar}" />
          <!-- Measurement tick marks -->
          <path d="${ticks}" stroke-width="${thin}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${bar}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Tick marks along the upper graduation edge -->
        <path d="${ticks}" fill="none" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 33. Triangular Ruler (U+1F4D0)
  {
    id: 'triangular-ruler',
    char: '📐',
    name: 'Triangular Ruler',
    unicodeHex: 'U+1F4D0',
    category: 'objects-places',
    tags: ['triangular ruler', 'set square', 'ruler', 'triangle', 'geometry', 'math', 'drafting', 'angle', 'measure', '📐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BAE6FD', fillSecondary: '#38BDF8', stroke: '#075985' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Right-angle set square with cutout -->
          <path d="M5 27 V5 L27 27 Z" />
          <path d="M10.5 22 V14.5 L18 22 Z" />
          <!-- Graduation ticks along both legs -->
          <path d="M5 23 H7.5 M5 19 H7.5 M5 15 H7.5 M5 11 H7.5" />
          <path d="M9 27 V24.5 M13 27 V24.5 M17 27 V24.5 M21 27 V24.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Set square body; the even-odd rule punches out the inner triangle -->
        <path d="M5 27 V5 L27 27 Z M10.5 22 V14.5 L18 22 Z" fill="${c.primary}" fill-rule="evenodd" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Graduation ticks along both legs -->
        <path d="M5 23 H7.5 M5 19 H7.5 M5 15 H7.5 M5 11 H7.5" stroke="${opts.style === 'duotone' ? c.secondary : c.stroke}" stroke-width="${thin}" />
        <path d="M9 27 V24.5 M13 27 V24.5 M17 27 V24.5 M21 27 V24.5" stroke="${opts.style === 'duotone' ? c.secondary : c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 34. Bookmark Tabs (U+1F4D1)
  {
    id: 'bookmark-tabs',
    char: '📑',
    name: 'Bookmark Tabs',
    unicodeHex: 'U+1F4D1',
    category: 'objects-places',
    tags: ['bookmark tabs', 'tabs', 'bookmark', 'index tabs', 'document', 'page', 'dividers', 'marker', 'organize', '📑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#3B82F6', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.75);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Page -->
          <rect x="5.5" y="4" width="18" height="24" rx="2" />
          <!-- Index tabs on the right edge -->
          <path d="M23.5 8 H27 V12.5 H23.5 M23.5 14.5 H27 V19 H23.5 M23.5 21 H27 V25.5 H23.5" />
          <!-- Text lines -->
          <line x1="9.5" y1="10" x2="19.5" y2="10" />
          <line x1="9.5" y1="15" x2="19.5" y2="15" />
          <line x1="9.5" y1="20" x2="15.5" y2="20" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tabs sit behind the page -->
        <rect x="21" y="8" width="6" height="4.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="21" y="14.5" width="6" height="4.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="21" y="21" width="6" height="4.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#3B82F6'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="5.5" y="4" width="18" height="24" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <line x1="9.5" y1="10" x2="19.5" y2="10" stroke="#94A3B8" stroke-width="${thin}" />
        <line x1="9.5" y1="15" x2="19.5" y2="15" stroke="#94A3B8" stroke-width="${thin}" />
        <line x1="9.5" y1="20" x2="15.5" y2="20" stroke="#94A3B8" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 35. Ledger (U+1F4D2)
  {
    id: 'ledger',
    char: '📒',
    name: 'Ledger',
    unicodeHex: 'U+1F4D2',
    category: 'objects-places',
    tags: ['ledger', 'notebook', 'accounts', 'bookkeeping', 'yellow notebook', 'binder', 'records', 'finance', '📒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#CA8A04', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cover -->
          <rect x="8" y="4" width="19" height="24" rx="2" />
          <!-- Binding rings -->
          <path d="M5.5 9 H10.5 M5.5 14.5 H10.5 M5.5 20 H10.5 M5.5 25.5 H10.5" />
          <!-- Label and ruled lines -->
          <rect x="14" y="8.5" width="9" height="6" />
          <line x1="14" y1="19" x2="23" y2="19" />
          <line x1="14" y1="23" x2="20" y2="23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="8" y="4" width="19" height="24" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Binding rings -->
        <path d="M5.5 9 H10.5 M5.5 14.5 H10.5 M5.5 20 H10.5 M5.5 25.5 H10.5" stroke="${c.secondary}" stroke-width="${sw + 0.8}" />
        <!-- Paper label and ruled lines -->
        <rect x="14" y="8.5" width="9" height="6" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="14" y1="19" x2="23" y2="19" stroke="${c.secondary}" stroke-width="${thin}" />
        <line x1="14" y1="23" x2="20" y2="23" stroke="${c.secondary}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 36. Notebook (U+1F4D3)
  {
    id: 'notebook',
    char: '📓',
    name: 'Notebook',
    unicodeHex: 'U+1F4D3',
    category: 'objects-places',
    tags: ['notebook', 'composition book', 'journal', 'notes', 'diary', 'writing', 'school', 'black notebook', '📓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#475569', fillSecondary: '#CBD5E1', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cover with taped spine -->
          <rect x="7" y="3" width="18" height="26" rx="2" />
          <line x1="11" y1="3" x2="11" y2="29" />
          <!-- Name label -->
          <rect x="14" y="9" width="8" height="7" />
          <line x1="15.5" y1="12.5" x2="20.5" y2="12.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="7" y="3" width="18" height="26" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Taped spine -->
        <path d="M11 3 H9 C7.9 3 7 3.9 7 5 V27 C7 28.1 7.9 29 9 29 H11 Z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Name label -->
        <rect x="14" y="9" width="8" height="7" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="15.5" y1="12.5" x2="20.5" y2="12.5" stroke="#94A3B8" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 37. Notebook with Decorative Cover (U+1F4D4)
  {
    id: 'notebook-with-decorative-cover',
    char: '📔',
    name: 'Notebook with Decorative Cover',
    unicodeHex: 'U+1F4D4',
    category: 'objects-places',
    tags: ['notebook with decorative cover', 'decorative notebook', 'journal', 'diary', 'leather', 'sketchbook', 'bookmark', 'ribbon', 'notes', '📔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#FDE047', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.6);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cover -->
          <rect x="7" y="3" width="18" height="23" rx="2" />
          <line x1="11" y1="3" x2="11" y2="26" />
          <!-- Ornament diamond -->
          <path d="M18 8.5 L21 12.5 L18 16.5 L15 12.5 Z" />
          <!-- Ribbon bookmark -->
          <path d="M20 26 V29.5 L21.5 28 L23 29.5 V26" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ribbon bookmark hangs below the cover -->
        <path d="M20 25 V29.5 L21.5 28 L23 29.5 V25 Z" fill="#EF4444" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="7" y="3" width="18" height="23" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <line x1="11" y1="3" x2="11" y2="26" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Gold ornament and corner studs -->
        <path d="M18 8.5 L21 12.5 L18 16.5 L15 12.5 Z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <circle cx="14.5" cy="7" r="0.9" fill="${c.secondary}" />
        <circle cx="21.5" cy="7" r="0.9" fill="${c.secondary}" />
        <circle cx="14.5" cy="21.5" r="0.9" fill="${c.secondary}" />
        <circle cx="21.5" cy="21.5" r="0.9" fill="${c.secondary}" />
      </g>`;
    },
  },

  // 38. Closed Book (U+1F4D5)
  {
    id: 'closed-book',
    char: '📕',
    name: 'Closed Book',
    unicodeHex: 'U+1F4D5',
    category: 'objects-places',
    tags: ['closed book', 'red book', 'book', 'read', 'library', 'study', 'literature', 'textbook', 'novel', '📕'],
    renderContent: (opts) => renderClosedBook(opts, { cover: '#EF4444', spine: '#B91C1C', stroke: '#7F1D1D' }),
  },

  // 39. Open Book (U+1F4D6)
  {
    id: 'open-book',
    char: '📖',
    name: 'Open Book',
    unicodeHex: 'U+1F4D6',
    category: 'objects-places',
    tags: ['open book', 'book', 'read', 'reading', 'pages', 'library', 'study', 'literature', 'learn', '📖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#2563EB', stroke: '#1E3A8A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.6);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Two curved pages meeting at the spine -->
          <path d="M16 8 C13 5.5 8.5 5 4 6.5 V24.5 C8.5 23 13 23.5 16 26 C19 23.5 23.5 23 28 24.5 V6.5 C23.5 5 19 5.5 16 8 Z" />
          <line x1="16" y1="8" x2="16" y2="26" />
          <!-- Text lines -->
          <path d="M7.5 11 C9.5 10.6 11.5 11 13 12 M7.5 15 C9.5 14.6 11.5 15 13 16" />
          <path d="M24.5 11 C22.5 10.6 20.5 11 19 12 M24.5 15 C22.5 14.6 20.5 15 19 16" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Cover peeking out beneath the pages -->
        <path d="M2.5 7 V27 C8 25.5 13 26 16 28.5 C19 26 24 25.5 29.5 27 V7" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Pages -->
        <path d="M16 8 C13 5.5 8.5 5 4 6.5 V24.5 C8.5 23 13 23.5 16 26 C19 23.5 23.5 23 28 24.5 V6.5 C23.5 5 19 5.5 16 8 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <line x1="16" y1="8" x2="16" y2="26" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M7.5 11 C9.5 10.6 11.5 11 13 12 M7.5 15 C9.5 14.6 11.5 15 13 16" stroke="#94A3B8" stroke-width="${thin}" fill="none" />
        <path d="M24.5 11 C22.5 10.6 20.5 11 19 12 M24.5 15 C22.5 14.6 20.5 15 19 16" stroke="#94A3B8" stroke-width="${thin}" fill="none" />
      </g>`;
    },
  },

  // 40. Green Book (U+1F4D7)
  {
    id: 'green-book',
    char: '📗',
    name: 'Green Book',
    unicodeHex: 'U+1F4D7',
    category: 'objects-places',
    tags: ['green book', 'book', 'read', 'library', 'study', 'textbook', 'guide', 'manual', 'nature', '📗'],
    renderContent: (opts) => renderClosedBook(opts, { cover: '#22C55E', spine: '#15803D', stroke: '#14532D' }),
  },

  // 41. Blue Book (U+1F4D8)
  {
    id: 'blue-book',
    char: '📘',
    name: 'Blue Book',
    unicodeHex: 'U+1F4D8',
    category: 'objects-places',
    tags: ['blue book', 'book', 'read', 'library', 'study', 'textbook', 'reference', 'manual', 'learn', '📘'],
    renderContent: (opts) => renderClosedBook(opts, { cover: '#3B82F6', spine: '#1D4ED8', stroke: '#1E3A8A' }),
  },

  // 42. Orange Book (U+1F4D9)
  {
    id: 'orange-book',
    char: '📙',
    name: 'Orange Book',
    unicodeHex: 'U+1F4D9',
    category: 'objects-places',
    tags: ['orange book', 'book', 'read', 'library', 'study', 'textbook', 'cookbook', 'guide', 'learn', '📙'],
    renderContent: (opts) => renderClosedBook(opts, { cover: '#F97316', spine: '#C2410C', stroke: '#7C2D12' }),
  },

  // 43. Books (U+1F4DA)
  {
    id: 'books',
    char: '📚',
    name: 'Books',
    unicodeHex: 'U+1F4DA',
    category: 'objects-places',
    tags: ['books', 'stack of books', 'library', 'study', 'reading', 'education', 'school', 'literature', 'pile', '📚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.6);
      // Bottom to top: a blue, red and green book, each slightly offset
      const stack = [
        { x: 4, y: 19.5, w: 24, fill: c.primary },
        { x: 6, y: 12.5, w: 21, fill: '#EF4444' },
        { x: 5, y: 5.5, w: 19, fill: '#22C55E' },
      ];
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${stack
            .map(
              (b) => `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="7" rx="1.5" />
          <line x1="${b.x + 4}" y1="${b.y}" x2="${b.x + 4}" y2="${b.y + 7}" />
          <line x1="${b.x + b.w - 4}" y1="${b.y}" x2="${b.x + b.w - 4}" y2="${b.y + 7}" />`,
            )
            .join('\n          ')}
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${stack
          .map(
            (b) => `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="7" rx="1.5" fill="${b.fill}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Spine bands -->
        <line x1="${b.x + 4}" y1="${b.y}" x2="${b.x + 4}" y2="${b.y + 7}" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="${b.x + b.w - 4}" y1="${b.y}" x2="${b.x + b.w - 4}" y2="${b.y + 7}" stroke="${c.stroke}" stroke-width="${thin}" />`,
          )
          .join('\n        ')}
      </g>`;
    },
  },

  // 44. Name Badge (U+1F4DB)
  {
    id: 'name-badge',
    char: '📛',
    name: 'Name Badge',
    unicodeHex: 'U+1F4DB',
    category: 'objects-places',
    tags: ['name badge', 'badge', 'name tag', 'label', 'id', 'identity', 'hello', 'shield', 'tag', '📛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Shield-shaped badge -->
          <path d="M16 3.5 C19.5 5.5 23.5 6.5 27 6.5 V16 C27 22 22.5 26.5 16 29 C9.5 26.5 5 22 5 16 V6.5 C8.5 6.5 12.5 5.5 16 3.5 Z" />
          <!-- Name plate -->
          <rect x="9" y="11.5" width="14" height="8" rx="1.5" />
          <line x1="11.5" y1="15.5" x2="20.5" y2="15.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 3.5 C19.5 5.5 23.5 6.5 27 6.5 V16 C27 22 22.5 26.5 16 29 C9.5 26.5 5 22 5 16 V6.5 C8.5 6.5 12.5 5.5 16 3.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Name plate -->
        <rect x="9" y="11.5" width="14" height="8" rx="1.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="11.5" y1="15.5" x2="20.5" y2="15.5" stroke="${c.primary}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 45. Scroll (U+1F4DC)
  {
    id: 'scroll',
    char: '📜',
    name: 'Scroll',
    unicodeHex: 'U+1F4DC',
    category: 'objects-places',
    tags: ['scroll', 'parchment', 'document', 'ancient', 'decree', 'manuscript', 'paper', 'history', 'certificate', '📜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FEF3C7', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Paper between the two rolls -->
          <path d="M9 9.5 V22.5 M23 9.5 V22.5" />
          <!-- Top and bottom rolls -->
          <rect x="6" y="4" width="20" height="5.5" rx="2.75" />
          <rect x="6" y="22.5" width="20" height="5.5" rx="2.75" />
          <!-- Text lines -->
          <line x1="12.5" y1="13" x2="19.5" y2="13" />
          <line x1="12.5" y1="17" x2="19.5" y2="17" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="7" width="14" height="18" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Text lines -->
        <line x1="12.5" y1="13" x2="19.5" y2="13" stroke="${c.secondary}" stroke-width="${thin}" />
        <line x1="12.5" y1="17" x2="19.5" y2="17" stroke="${c.secondary}" stroke-width="${thin}" />
        <!-- Rolled top and bottom edges -->
        <rect x="6" y="4" width="20" height="5.5" rx="2.75" fill="${opts.style === 'duotone' ? c.secondary : '#FDE68A'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <rect x="6" y="22.5" width="20" height="5.5" rx="2.75" fill="${opts.style === 'duotone' ? c.secondary : '#FDE68A'}" stroke="${c.stroke}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 46. Memo (U+1F4DD)
  {
    id: 'memo',
    char: '📝',
    name: 'Memo',
    unicodeHex: 'U+1F4DD',
    category: 'objects-places',
    tags: ['memo', 'note', 'pencil', 'write', 'edit', 'paper', 'notepad', 'document', 'compose', 'to-do', '📝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#FBBF24', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.75);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Page, open where the pencil crosses its right edge -->
          <path d="M22 14.5 V6 C22 4.9 21.1 4 20 4 H6 C4.9 4 4 4.9 4 6 V26 C4 27.1 4.9 28 6 28 H20 C21.1 28 22 27.1 22 26 V23.5" />
          <!-- Text lines -->
          <line x1="8" y1="10" x2="18" y2="10" />
          <line x1="8" y1="15" x2="15" y2="15" />
          <line x1="8" y1="20" x2="13" y2="20" />
          <!-- Pencil -->
          <path d="M16.62 21.26 L25.44 12.44 L28.56 15.56 L19.74 24.38 L15 26 Z" />
          <path d="M23.18 14.7 L26.3 17.82" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="18" height="24" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Text lines -->
        <line x1="8" y1="10" x2="18" y2="10" stroke="#94A3B8" stroke-width="${thin}" />
        <line x1="8" y1="15" x2="15" y2="15" stroke="#94A3B8" stroke-width="${thin}" />
        <line x1="8" y1="20" x2="13" y2="20" stroke="#94A3B8" stroke-width="${thin}" />
        <!-- Pencil: wood tip, body and eraser -->
        <path d="M16.62 21.26 L19.74 24.38 L15 26 Z" fill="#FDE68A" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M16.62 21.26 L25.44 12.44 L28.56 15.56 L19.74 24.38 Z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M23.18 14.7 L25.44 12.44 L28.56 15.56 L26.3 17.82 Z" fill="${opts.style === 'duotone' ? c.stroke : '#F472B6'}" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 47. Telephone Receiver (U+1F4DE)
  {
    id: 'telephone-receiver',
    char: '📞',
    name: 'Telephone Receiver',
    unicodeHex: 'U+1F4DE',
    category: 'objects-places',
    tags: ['telephone receiver', 'phone', 'handset', 'call', 'ring', 'contact', 'landline', 'dial', 'communication', '📞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#475569', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      // Handset with an arched grip and two pads, tilted 30 degrees
      const handset = 'M3 22.5 C3 18 5.5 14.5 9.5 12.3 C12.5 10.8 19.5 10.8 22.5 12.3 C26.5 14.5 29 18 29 22.5 V23 C29 24.6 27.8 25.8 26.2 25.8 H23.5 C21.9 25.8 20.7 24.6 20.7 23 V20 C20.7 17 19 15.5 16 15.5 C13 15.5 11.3 17 11.3 20 V23 C11.3 24.6 10.1 25.8 8.5 25.8 H5.8 C4.2 25.8 3 24.6 3 23 Z';
      const tilt = 'translate(-1.84 -4.0) rotate(-30 16 18)';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${handset}" transform="${tilt}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="${tilt}">
        <path d="${handset}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Speaker and mic grilles -->
        <line x1="5.7" y1="22.3" x2="8.6" y2="22.3" stroke="${c.secondary}" stroke-width="${thin}" />
        <line x1="23.4" y1="22.3" x2="26.3" y2="22.3" stroke="${c.secondary}" stroke-width="${thin}" />
        <!-- Grip highlight -->
        <path d="M11 13.8 C13.2 12.7 18.8 12.7 21 13.8" fill="none" stroke="${c.secondary}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 48. Pager (U+1F4DF)
  {
    id: 'pager',
    char: '📟',
    name: 'Pager',
    unicodeHex: 'U+1F4DF',
    category: 'objects-places',
    tags: ['pager', 'beeper', 'paging', 'message', 'alert', 'retro', 'communication', 'device', 'notification', '📟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#475569', fillSecondary: '#BBF7D0', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Pager body -->
          <rect x="4" y="7" width="24" height="18" rx="3" />
          <!-- Display with message lines -->
          <rect x="7.5" y="10.5" width="17" height="6" rx="1" />
          <!-- Buttons -->
          <circle cx="9.5" cy="21" r="0.9" />
          <circle cx="13.5" cy="21" r="0.9" />
          <circle cx="17.5" cy="21" r="0.9" />
          <line x1="21.5" y1="21" x2="24.5" y2="21" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="7" width="24" height="18" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Display with message lines -->
        <rect x="7.5" y="10.5" width="17" height="6" rx="1" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <line x1="9.5" y1="12.5" x2="20.5" y2="12.5" stroke="${c.stroke}" stroke-width="1" opacity="0.7" />
        <line x1="9.5" y1="14.5" x2="16" y2="14.5" stroke="${c.stroke}" stroke-width="1" opacity="0.7" />
        <!-- Buttons and speaker slot -->
        <circle cx="9.5" cy="21" r="1.1" fill="#CBD5E1" stroke="${c.stroke}" stroke-width="0.6" />
        <circle cx="13.5" cy="21" r="1.1" fill="#CBD5E1" stroke="${c.stroke}" stroke-width="0.6" />
        <circle cx="17.5" cy="21" r="1.1" fill="#CBD5E1" stroke="${c.stroke}" stroke-width="0.6" />
        <line x1="21.5" y1="21" x2="24.5" y2="21" stroke="#CBD5E1" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 49. E-Mail (U+1F4E7)
  {
    id: 'e-mail',
    char: '📧',
    name: 'E-Mail',
    unicodeHex: 'U+1F4E7',
    category: 'objects-places',
    tags: ['e-mail', 'email', 'mail', 'envelope', 'message', 'at sign', 'inbox', 'internet', 'address', '📧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1D4ED8', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const flap = 'M3 7 L15 16 L27 7';
      const flapOutline = 'M3 9.5 L15 17.5 L27 9.5';
      const at = 'M24.1 19.5 V21.9 C24.1 22.8 25.3 22.8 25.3 21 C25.3 18.7 24 17.4 22.5 17.4 C20.4 17.4 19.6 19 19.6 21 C19.6 23 20.9 24.5 22.8 24.5';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(0.2 -0.9)">
          <!-- Envelope with flap -->
          <path d="M16 22 H6 C4.3 22 3 20.7 3 19 V9 C3 7.3 4.3 6 6 6 H24 C25.7 6 27 7.3 27 9 V16.4" />
          <path d="${flapOutline}" />
          <!-- @ badge -->
          <circle cx="22.5" cy="21" r="6.5" />
          <circle cx="22.5" cy="21" r="1.5" stroke-width="${sw * 0.6}" />
          <path d="${at}" stroke-width="${sw * 0.6}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="translate(0.2 -0.9)">
        <rect x="3" y="6" width="24" height="16" rx="3" fill="${c.primary}" />
        <path d="${flap}" stroke="#FFFFFF" stroke-width="${sw + 0.3}" fill="none" />
        <!-- @ badge -->
        <circle cx="22.5" cy="21" r="6.5" fill="${c.secondary}" stroke="#FFFFFF" stroke-width="1.2" />
        <circle cx="22.5" cy="21" r="1.5" stroke="#FFFFFF" stroke-width="1.2" fill="none" />
        <path d="${at}" stroke="#FFFFFF" stroke-width="1.2" fill="none" />
      </g>`;
    },
  },

  // 50. Incoming Envelope (U+1F4E8)
  {
    id: 'incoming-envelope',
    char: '📨',
    name: 'Incoming Envelope',
    unicodeHex: 'U+1F4E8',
    category: 'objects-places',
    tags: ['incoming envelope', 'envelope', 'mail', 'received', 'incoming', 'message', 'delivery', 'inbox', 'arrow', '📨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1D4ED8', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const flap = 'M4 14 L16 23 L28 14';
      const flapOutline = 'M4 16.5 L16 25 L28 16.5';
      const arrow = 'M16 3 V13 M12 9 L16 13 L20 9';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(0 0.4)">
          <!-- Arrow dropping into the envelope -->
          <path d="${arrow}" />
          <!-- Envelope with flap -->
          <rect x="4" y="13" width="24" height="16" rx="3" />
          <path d="${flapOutline}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="translate(0 0.4)">
        <rect x="4" y="13" width="24" height="16" rx="3" fill="${c.primary}" />
        <path d="${flap}" stroke="#FFFFFF" stroke-width="${sw + 0.3}" fill="none" />
        <!-- Arrow dropping into the envelope -->
        <path d="${arrow}" stroke="${c.secondary}" stroke-width="${sw + 0.6}" fill="none" />
      </g>`;
    },
  },

  // 51. Envelope with Arrow (U+1F4E9)
  {
    id: 'envelope-with-arrow',
    char: '📩',
    name: 'Envelope with Arrow',
    unicodeHex: 'U+1F4E9',
    category: 'objects-places',
    tags: ['envelope with arrow', 'envelope', 'mail', 'download', 'save message', 'receive', 'incoming', 'arrow', 'message', '📩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1D4ED8', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const flap = 'M3 7 L15 16 L27 7';
      const flapOutline = 'M3 9.5 L15 17.5 L27 9.5';
      const down = 'M22.5 17.5 V24 M19.3 21 L22.5 24.2 L25.7 21';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(0.2 -0.9)">
          <!-- Envelope with flap -->
          <path d="M16 22 H6 C4.3 22 3 20.7 3 19 V9 C3 7.3 4.3 6 6 6 H24 C25.7 6 27 7.3 27 9 V16.4" />
          <path d="${flapOutline}" />
          <!-- Down-arrow badge -->
          <circle cx="22.5" cy="21" r="6.5" />
          <path d="${down}" stroke-width="${sw * 0.8}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="translate(0.2 -0.9)">
        <rect x="3" y="6" width="24" height="16" rx="3" fill="${c.primary}" />
        <path d="${flap}" stroke="#FFFFFF" stroke-width="${sw + 0.3}" fill="none" />
        <!-- Down-arrow badge -->
        <circle cx="22.5" cy="21" r="6.5" fill="${c.secondary}" stroke="#FFFFFF" stroke-width="1.2" />
        <path d="${down}" stroke="#FFFFFF" stroke-width="${sw * 0.8}" fill="none" />
      </g>`;
    },
  },

  // 52. Closed Mailbox with Lowered Flag (U+1F4EA)
  {
    id: 'closed-mailbox-with-lowered-flag',
    char: '📪',
    name: 'Closed Mailbox with Lowered Flag',
    unicodeHex: 'U+1F4EA',
    category: 'objects-places',
    tags: ['closed mailbox with lowered flag', 'mailbox', 'mail', 'postbox', 'no new mail', 'closed', 'flag down', 'post', 'delivery', '📪'],
    renderContent: (opts) => renderMailbox(opts, { open: false, letters: false, flagUp: false }),
  },

  // 53. Closed Mailbox with Raised Flag (U+1F4EB)
  {
    id: 'closed-mailbox-with-raised-flag',
    char: '📫',
    name: 'Closed Mailbox with Raised Flag',
    unicodeHex: 'U+1F4EB',
    category: 'objects-places',
    tags: ['closed mailbox with raised flag', 'mailbox', 'mail', 'postbox', 'new mail', 'closed', 'flag up', 'post', 'delivery', '📫'],
    renderContent: (opts) => renderMailbox(opts, { open: false, letters: false, flagUp: true }),
  },

  // 54. Open Mailbox with Raised Flag (U+1F4EC)
  {
    id: 'open-mailbox-with-raised-flag',
    char: '📬',
    name: 'Open Mailbox with Raised Flag',
    unicodeHex: 'U+1F4EC',
    category: 'objects-places',
    tags: ['open mailbox with raised flag', 'mailbox', 'mail', 'postbox', 'new mail', 'letters', 'flag up', 'delivery', 'post', '📬'],
    renderContent: (opts) => renderMailbox(opts, { open: true, letters: true, flagUp: true }),
  },

  // 55. Open Mailbox with Lowered Flag (U+1F4ED)
  {
    id: 'open-mailbox-with-lowered-flag',
    char: '📭',
    name: 'Open Mailbox with Lowered Flag',
    unicodeHex: 'U+1F4ED',
    category: 'objects-places',
    tags: ['open mailbox with lowered flag', 'mailbox', 'mail', 'postbox', 'empty', 'no mail', 'flag down', 'post', 'delivery', '📭'],
    renderContent: (opts) => renderMailbox(opts, { open: true, letters: false, flagUp: false }),
  },

  // Japanese Symbol for Beginner (U+1F530)
  {
    id: 'japanese-symbol-for-beginner',
    char: '🔰',
    name: 'Japanese Symbol for Beginner',
    unicodeHex: 'U+1F530',
    category: 'symbols',
    tags: ['japanese symbol for beginner', 'beginner', 'shoshinsha', 'wakaba', 'leaf', 'shield', 'yellow', 'green', 'driver', 'badge', '🔰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#F59E0B', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Outer leaf chevron shield -->
          <path d="M16 8.5 L24 4.5 C24.5 12 24.5 16 16 27.5 C7.5 16 7.5 12 8 4.5 Z" />
          <!-- Vertical center dividing line -->
          <line x1="16" y1="8.5" x2="16" y2="27.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Left Yellow Wing -->
        <path d="M16 8.5 L8 4.5 C7.5 12 7.5 16 16 27.5 Z" fill="${c.secondary}" stroke="${opts.style === 'duotone' ? c.stroke : '#B45309'}" stroke-width="${sw}" />
        <!-- Right Green Wing -->
        <path d="M16 8.5 L24 4.5 C24.5 12 24.5 16 16 27.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Center Crease Divider -->
        <line x1="16" y1="8.5" x2="16" y2="27.5" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Specular Highlight Line -->
        <path d="M10.5 8 C10 13 10.5 16 14 22" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.35" />
      </g>`;
    },
  },

  // Trident Emblem (U+1F531)
  {
    id: 'trident-emblem',
    char: '🔱',
    name: 'Trident Emblem',
    unicodeHex: 'U+1F531',
    category: 'symbols',
    tags: ['trident emblem', 'trident', 'poseidon', 'neptune', 'spear', 'pitchfork', 'gold', 'symbol', 'power', '🔱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FDE047', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Center Spearhead -->
          <path d="M16 3 L18.5 10 L16 18 L13.5 10 Z" />
          <!-- Left and Right Barbed Prongs -->
          <path d="M7 11.5 C7 17.5 12 19 16 19 C20 19 25 17.5 25 11.5 L23.5 14 C21.5 16.5 19 17 16 17 C13 17 10.5 16.5 8.5 14 Z" />
          <!-- Central Shaft & Base Ring -->
          <line x1="16" y1="19" x2="16" y2="28.5" />
          <line x1="13" y1="23" x2="19" y2="23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Shaft & Cross Guard -->
        <line x1="16" y1="18" x2="16" y2="28" stroke="${c.stroke}" stroke-width="${sw + 1}" />
        <line x1="16" y1="18" x2="16" y2="28" stroke="${c.primary}" stroke-width="${sw}" />
        <line x1="13" y1="23.5" x2="19" y2="23.5" stroke="${c.stroke}" stroke-width="${sw}" />
        <circle cx="16" cy="28.5" r="1.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Curved Outer Prongs -->
        <path d="M7 11 C6.8 17.5 11.8 19.5 16 19.5 C20.2 19.5 25.2 17.5 25 11 L23.5 14 C21.2 16.8 18.8 17 16 17 C13.2 17 10.8 16.8 8.5 14 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Center Main Spear Point -->
        <polygon points="16,3 18.8,10.5 16,19 13.2,10.5" fill="${opts.style === 'duotone' ? c.secondary : c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Center Bevel Ridge -->
        <line x1="16" y1="4" x2="16" y2="18" stroke="${c.secondary}" stroke-width="1.2" />
      </g>`;
    },
  },

  // Telescope (U+1F52D)
  {
    id: 'telescope',
    char: '🔭',
    name: 'Telescope',
    unicodeHex: 'U+1F52D',
    category: 'objects-places',
    tags: ['telescope', 'astronomy', 'stars', 'space', 'science', 'optics', 'planet', 'stargazing', 'sky', 'observatory', '🔭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tripod Legs -->
          <line x1="14" y1="18" x2="6" y2="29" />
          <line x1="14" y1="18" x2="14" y2="29" />
          <line x1="14" y1="18" x2="22" y2="29" />
          <!-- Telescope Optical Barrel -->
          <g transform="rotate(-32 14 14)">
            <rect x="7" y="11.5" width="18" height="5" rx="1" />
            <rect x="25" y="10.5" width="3" height="7" rx="0.8" />
            <rect x="3.5" y="12.5" width="3.5" height="3" rx="0.6" />
          </g>
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tripod Legs -->
        <g stroke="${c.stroke}" stroke-width="${sw}">
          <line x1="14" y1="18" x2="6" y2="29" />
          <line x1="14" y1="18" x2="14" y2="29" />
          <line x1="14" y1="18" x2="22" y2="29" />
        </g>
        <!-- Leg Spread Bracket & Mount Head -->
        <line x1="9" y1="24.5" x2="19" y2="24.5" stroke="#64748B" stroke-width="1.2" />
        <circle cx="14" cy="18" r="2.2" fill="#64748B" stroke="${c.stroke}" stroke-width="1" />
        <!-- Diagonal Main Barrel Assembly -->
        <g transform="rotate(-32 14 14)">
          <!-- Eyepiece Tube -->
          <rect x="3.5" y="12.5" width="4" height="3" rx="0.6" fill="#94A3B8" stroke="${c.stroke}" stroke-width="1" />
          <!-- Main Body Tube -->
          <rect x="7" y="11.5" width="18" height="5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
          <!-- Decorative Stripe -->
          <rect x="11" y="11.5" width="3" height="5" fill="#EF4444" />
          <!-- Objective Lens Hood & Lens Glass -->
          <rect x="25" y="10.5" width="3" height="7" rx="0.8" fill="#64748B" stroke="${c.stroke}" stroke-width="1.2" />
          <ellipse cx="28" cy="14" rx="0.6" ry="3" fill="${c.secondary}" />
          <!-- Finder Scope On Top -->
          <rect x="14" y="8.5" width="7" height="2" rx="0.5" fill="#475569" stroke="${c.stroke}" stroke-width="0.8" />
          <line x1="16" y1="10.5" x2="16" y2="11.5" stroke="${c.stroke}" stroke-width="1" />
          <line x1="19" y1="10.5" x2="19" y2="11.5" stroke="${c.stroke}" stroke-width="1" />
        </g>
      </g>`;
    },
  },

  // Crystal Ball (U+1F52E)
  {
    id: 'crystal-ball',
    char: '🔮',
    name: 'Crystal Ball',
    unicodeHex: 'U+1F52E',
    category: 'symbols',
    tags: ['crystal ball', 'magic', 'fortune', 'future', 'psychic', 'mystic', 'clairvoyance', 'orb', 'witch', 'tarot', '🔮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', fillSecondary: '#E9D5FF', fillAccent: '#F59E0B', stroke: '#581C87' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Glass Sphere Orb -->
          <circle cx="16" cy="12.5" r="9.5" />
          <!-- Base Stand Pedestal -->
          <path d="M10 21.5 C10 24 12 25 12 27 L20 27 C20 25 22 24 22 21.5" />
          <rect x="8" y="27" width="16" height="3" rx="1.5" />
          <!-- Magic Sparkle -->
          <path d="M16 8 L17 11 L20 12 L17 13 L16 16 L15 13 L12 12 L15 11 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Golden Pedestal Stand -->
        <path d="M10.5 21.5 C10.5 24 12.5 24.8 12.5 27 L19.5 27 C19.5 24.8 21.5 24 21.5 21.5" fill="${c.accent}" stroke="${opts.style === 'duotone' ? c.stroke : '#78350F'}" stroke-width="1" />
        <rect x="8" y="27" width="16" height="3" rx="1.5" fill="${c.accent}" stroke="${opts.style === 'duotone' ? c.stroke : '#78350F'}" stroke-width="1" />
        <!-- Crystal Glass Orb Base Body -->
        <circle cx="16" cy="12.5" r="9.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Inner Ambient Fog/Glow -->
        <circle cx="16" cy="12.5" r="7.5" fill="${c.secondary}" opacity="0.3" />
        <!-- 4-pointed Center Sparkle Star -->
        <path d="M16 8.5 Q16 11.5 14 12.5 Q16 13.5 16 16.5 Q16 13.5 18 12.5 Q16 11.5 16 8.5 Z" fill="#FFFFFF" opacity="0.85" />
        <circle cx="19.5" cy="9.5" r="0.8" fill="#FFFFFF" opacity="0.9" />
        <!-- Specular Crescent Reflection Highlight -->
        <path d="M10 8.5 A 7.5 7.5 0 0 1 17 5.2" fill="none" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" opacity="0.6" />
      </g>`;
    },
  },
];
