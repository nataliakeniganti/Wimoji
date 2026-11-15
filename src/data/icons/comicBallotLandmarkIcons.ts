import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const comicBallotLandmarkIcons: WimojiIconDef[] = [
  {
    id: 'stock-chart',
    char: '🗠',
    name: 'Stock Chart',
    unicodeHex: 'U+1F5E0',
    category: 'tools',
    tags: ['stock chart', 'chart', 'stocks', 'market', 'finance', 'invest', 'trading', 'growth', 'uptrend', 'candlestick', '🗠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Chart Board Frame -->
          <rect x="3" y="4" width="26" height="24" rx="3" />
          <!-- Baseline and Axis Grid -->
          <line x1="7" y1="23" x2="25" y2="23" />
          <line x1="7" y1="10" x2="7" y2="23" />
          <!-- Trend Line -->
          <polyline points="7,20 13,15 18,18 24,9" />
          <circle cx="24" cy="9" r="1.5" />
        </g>`;
      }
      const boardBg = opts.style === 'color' ? '#1E293B' : c.secondary;
      const trendColor = opts.style === 'color' ? '#10B981' : c.primary;
      const barColor = opts.style === 'color' ? '#334155' : (opts.style === 'duotone' ? c.secondary : c.primary);

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Display Monitor / Board Panel -->
        <rect x="3" y="4" width="26" height="24" rx="3" fill="${boardBg}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <!-- Background Volume Bars -->
        <rect x="7" y="18" width="3" height="5" rx="0.5" fill="${barColor}" opacity="0.6" />
        <rect x="12" y="15" width="3" height="8" rx="0.5" fill="${barColor}" opacity="0.6" />
        <rect x="17" y="17" width="3" height="6" rx="0.5" fill="${barColor}" opacity="0.6" />
        <rect x="22" y="10" width="3" height="13" rx="0.5" fill="${barColor}" opacity="0.6" />
        <!-- Axis Line -->
        <line x1="6" y1="23" x2="26" y2="23" stroke="${opts.style === 'color' ? '#64748B' : c.stroke}" stroke-width="0.8" />
        <!-- Ascending Trendline -->
        <polyline points="7,20 12.5,15 17.5,18 24,9" fill="none" stroke="${trendColor}" stroke-width="2.2" />
        <!-- High Peak Dot -->
        <circle cx="24" cy="9" r="2" fill="${trendColor}" />
      </g>`;
    },
  },
  {
    id: 'three-rays-above',
    char: '🗤',
    name: 'Three Rays Above',
    unicodeHex: 'U+1F5E4',
    category: 'symbols',
    tags: ['three rays above', 'rays', 'beam', 'radiance', 'comic', 'spark', 'shine', 'burst', 'light', '🗤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const strokeColor = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${strokeColor}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" fill="none">
        <line x1="8" y1="24" x2="5" y2="8" />
        <line x1="16" y1="26" x2="16" y2="6" />
        <line x1="24" y1="24" x2="27" y2="8" />
      </g>`;
    },
  },
  {
    id: 'three-rays-below',
    char: '🗥',
    name: 'Three Rays Below',
    unicodeHex: 'U+1F5E5',
    category: 'symbols',
    tags: ['three rays below', 'rays', 'beam', 'down', 'comic', 'radiance', 'burst', 'shine', 'light', '🗥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const strokeColor = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${strokeColor}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" fill="none">
        <line x1="8" y1="8" x2="5" y2="24" />
        <line x1="16" y1="6" x2="16" y2="26" />
        <line x1="24" y1="8" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'three-rays-left',
    char: '🗦',
    name: 'Three Rays Left',
    unicodeHex: 'U+1F5E6',
    category: 'symbols',
    tags: ['three rays left', 'rays', 'left', 'comic', 'radiance', 'beam', 'shine', 'burst', '🗦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const strokeColor = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${strokeColor}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" fill="none">
        <line x1="24" y1="8" x2="8" y2="5" />
        <line x1="26" y1="16" x2="6" y2="16" />
        <line x1="24" y1="24" x2="8" y2="27" />
      </g>`;
    },
  },
  {
    id: 'three-rays-right',
    char: '🗧',
    name: 'Three Rays Right',
    unicodeHex: 'U+1F5E7',
    category: 'symbols',
    tags: ['three rays right', 'rays', 'right', 'comic', 'radiance', 'beam', 'shine', 'burst', '🗧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const strokeColor = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${strokeColor}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" fill="none">
        <line x1="8" y1="8" x2="24" y2="5" />
        <line x1="6" y1="16" x2="26" y2="16" />
        <line x1="8" y1="24" x2="24" y2="27" />
      </g>`;
    },
  },
  {
    id: 'two-speech-bubbles',
    char: '🗪',
    name: 'Two Speech Bubbles',
    unicodeHex: 'U+1F5EA',
    category: 'symbols',
    tags: ['two speech bubbles', 'chat', 'talk', 'dialogue', 'conversation', 'bubbles', 'message', 'text', 'forum', '🗪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#E2E8F0', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Back Bubble -->
          <path d="M13 5h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-3l-4 4v-4h-5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" />
          <!-- Front Bubble -->
          <path d="M4 11h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-2l-4 3v-3H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back Bubble (Blue) -->
        <path d="M13 5h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-3l-4 4v-4h-5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
        <!-- Front Bubble (Light/Secondary) -->
        <path d="M4 11h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-2l-4 3v-3H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
      </g>`;
    },
  },
  {
    id: 'three-speech-bubbles',
    char: '🗫',
    name: 'Three Speech Bubbles',
    unicodeHex: 'U+1F5EB',
    category: 'symbols',
    tags: ['three speech bubbles', 'chat', 'group chat', 'discussion', 'bubbles', 'meeting', 'community', 'conversation', '🗫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#10B981', fillAccent: '#F59E0B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Bubble 1 Top Left -->
          <path d="M4 5h9a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-2l-3 2.5v-2.5H4A2.5 2.5 0 0 1 1.5 11.5v-4A2.5 2.5 0 0 1 4 5z" />
          <!-- Bubble 2 Top Right -->
          <path d="M18 6h9a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-4l-3 2.5V15h-2a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 18 6z" />
          <!-- Bubble 3 Bottom Center -->
          <path d="M10 16h11a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-2l-3 2.5V25H10a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 10 16z" />
        </g>`;
      }
      const b1 = opts.style === 'color' ? '#3B82F6' : c.primary;
      const b2 = opts.style === 'color' ? '#10B981' : c.secondary;
      const b3 = opts.style === 'color' ? '#F59E0B' : (opts.style === 'duotone' ? c.primary : c.primary);

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 5h9a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-2l-3 2.5v-2.5H4A2.5 2.5 0 0 1 1.5 11.5v-4A2.5 2.5 0 0 1 4 5z" fill="${b1}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.9}" />
        <path d="M18 6h9a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-4l-3 2.5V15h-2a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 18 6z" fill="${b2}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.9}" />
        <path d="M10 16h11a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-2l-3 2.5V25H10a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 10 16z" fill="${b3}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.9}" />
      </g>`;
    },
  },
  {
    id: 'left-thought-bubble',
    char: '🗬',
    name: 'Left Thought Bubble',
    unicodeHex: 'U+1F5EC',
    category: 'symbols',
    tags: ['left thought bubble', 'thought', 'think', 'cloud', 'idea', 'dream', 'ponder', 'bubble', 'left', '🗬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#F8FAFC', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Thought Cloud Body -->
          <path d="M13 6c2.5 0 4.5 1.5 5 3.5 1.5-.5 3.5 0 4.5 1.5 1.2 1.8.8 4-.5 5 1.5 1.5 1.5 4 0 5.5-1.5 1.5-4 1.5-5.5.5-1 1.5-3 2-5 1.5-1.5-.5-2.5-1.5-3-2.5-2 0-3.5-1.5-3.5-3.5 0-1.5.8-2.8 2-3.3C7 11.5 8 9.5 9.5 8.5 10.5 7 11.5 6 13 6z" />
          <circle cx="8" cy="22.5" r="2" />
          <circle cx="4.5" cy="26.5" r="1.2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 6c2.5 0 4.5 1.5 5 3.5 1.5-.5 3.5 0 4.5 1.5 1.2 1.8.8 4-.5 5 1.5 1.5 1.5 4 0 5.5-1.5 1.5-4 1.5-5.5.5-1 1.5-3 2-5 1.5-1.5-.5-2.5-1.5-3-2.5-2 0-3.5-1.5-3.5-3.5 0-1.5.8-2.8 2-3.3C7 11.5 8 9.5 9.5 8.5 10.5 7 11.5 6 13 6z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <circle cx="8" cy="22.5" r="2" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
        <circle cx="4.5" cy="26.5" r="1.2" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
      </g>`;
    },
  },
  {
    id: 'right-thought-bubble',
    char: '🗭',
    name: 'Right Thought Bubble',
    unicodeHex: 'U+1F5ED',
    category: 'symbols',
    tags: ['right thought bubble', 'thought', 'think', 'cloud', 'idea', 'dream', 'ponder', 'bubble', 'right', '🗭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#F8FAFC', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Mirrored Thought Cloud Body -->
          <path d="M19 6c-2.5 0-4.5 1.5-5 3.5-1.5-.5-3.5 0-4.5 1.5-1.2 1.8-.8 4 .5 5-1.5 1.5-1.5 4 0 5.5 1.5 1.5 4 1.5 5.5.5 1 1.5 3 2 5 1.5 1.5-.5 2.5-1.5 3-2.5 2 0 3.5-1.5 3.5-3.5 0-1.5-.8-2.8-2-3.3C25 11.5 24 9.5 22.5 8.5 21.5 7 20.5 6 19 6z" />
          <circle cx="24" cy="22.5" r="2" />
          <circle cx="27.5" cy="26.5" r="1.2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 6c-2.5 0-4.5 1.5-5 3.5-1.5-.5-3.5 0-4.5 1.5-1.2 1.8-.8 4 .5 5-1.5 1.5-1.5 4 0 5.5 1.5 1.5 4 1.5 5.5.5 1 1.5 3 2 5 1.5 1.5-.5 2.5-1.5 3-2.5 2 0 3.5-1.5 3.5-3.5 0-1.5-.8-2.8-2-3.3C25 11.5 24 9.5 22.5 8.5 21.5 7 20.5 6 19 6z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <circle cx="24" cy="22.5" r="2" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
        <circle cx="27.5" cy="26.5" r="1.2" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
      </g>`;
    },
  },
  {
    id: 'left-anger-bubble',
    char: '🗮',
    name: 'Left Anger Bubble',
    unicodeHex: 'U+1F5EE',
    category: 'symbols',
    tags: ['left anger bubble', 'anger', 'angry', 'shout', 'explosion', 'comic', 'spiky', 'burst', 'frustrated', 'rage', '🗮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FEE2E2', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="14,4 18,7 23,5 24,10 29,11 27,15 30,19 25,20 26,25 21,23 18,27 15,22 9,28 10,21 4,21 8,16 4,12 10,11 9,6 14,8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="14,4 18,7 23,5 24,10 29,11 27,15 30,19 25,20 26,25 21,23 18,27 15,22 9,28 10,21 4,21 8,16 4,12 10,11 9,6 14,8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
      </g>`;
    },
  },
  {
    id: 'mood-bubble',
    char: '🗰',
    name: 'Mood Bubble',
    unicodeHex: 'U+1F5F0',
    category: 'symbols',
    tags: ['mood bubble', 'mood', 'emotion', 'comic', 'symbol', 'bubble', 'feeling', 'expressive', '🗰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#EDE9FE', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Wavy Mood Bubble -->
          <path d="M7 6c5-2 13-2 18 0s6 7 4 12-4 7-10 7l-5 4v-4c-4-1-8-4-8-9s1-8 1-10z" />
          <!-- Inner Swirl Curve -->
          <path d="M14 11c3-2 6 0 5 3-1 2-3 2-3 4" />
          <circle cx="16" cy="20.5" r="0.8" fill="${c.stroke}" />
        </g>`;
      }
      const markColor = opts.style === 'color' ? '#6D28D9' : (opts.style === 'duotone' ? c.stroke : '#FFFFFF');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 6c5-2 13-2 18 0s6 7 4 12-4 7-10 7l-5 4v-4c-4-1-8-4-8-9s1-8 1-10z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <path d="M14 11c3-2 6 0 5 3-1 2-3 2-3 4" stroke="${markColor}" stroke-width="1.8" fill="none" />
        <circle cx="16" cy="20.5" r="1" fill="${markColor}" />
      </g>`;
    },
  },
  {
    id: 'lightning-mood-bubble',
    char: '🗱',
    name: 'Lightning Mood Bubble',
    unicodeHex: 'U+1F5F1',
    category: 'symbols',
    tags: ['lightning mood bubble', 'shock', 'electric', 'surprise', 'comic', 'lightning', 'flash', 'energy', 'bubble', '🗱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FEF3C7', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6 7l6-2 9 1 5 6-2 8-5 5-4 4 1-4H10l-6-5z" />
          <polygon points="17,8 12,16 16,16 14,23 20,14 16,14" />
        </g>`;
      }
      const boltFill = opts.style === 'color' ? '#F59E0B' : (opts.style === 'duotone' ? c.primary : '#FFFFFF');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Spiky Shock Bubble Outline -->
        <path d="M6 7l6-2 9 1 5 6-2 8-5 5-4 4 1-4H10l-6-5z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <!-- Electric Bolt Core -->
        <polygon points="17,8 12,16 16,16 14,23 20,14 16,14" fill="${boltFill}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
      </g>`;
    },
  },
  {
    id: 'lightning-mood',
    char: '🗲',
    name: 'Lightning Mood',
    unicodeHex: 'U+1F5F2',
    category: 'symbols',
    tags: ['lightning mood', 'lightning', 'bolt', 'spark', 'electric', 'energy', 'zap', 'shock', 'comic', 'power', '🗲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="18,3 7,16 15,16 13,29 25,13 16,13" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="18,3 7,16 15,16 13,29 25,13 16,13" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
      </g>`;
    },
  },
  {
    id: 'ballot-box-with-ballot',
    char: '🗳',
    name: 'Ballot Box with Ballot',
    unicodeHex: 'U+1F5F3',
    category: 'tools',
    tags: ['ballot box with ballot', 'ballot box', 'vote', 'election', 'democracy', 'polling', 'voting', 'politics', 'box', 'ballot', '🗳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Box Casing -->
          <rect x="4" y="11" width="24" height="17" rx="3" />
          <!-- Slot -->
          <line x1="8" y1="11" x2="24" y2="11" />
          <!-- Ballot Paper -->
          <polygon points="10,4 22,4 22,14 10,14" />
          <path d="M13 8.5l2 2 4-4" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Blue Secure Voting Box -->
        <rect x="4" y="11" width="24" height="17" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <!-- Top Slot Recess -->
        <rect x="7" y="10" width="18" height="2" rx="0.5" fill="#0F172A" />
        <!-- Paper Ballot Cast into Slot -->
        <polygon points="10,4 22,4 22,13 10,13" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Green Checkmark on Ballot Paper -->
        <path d="M13 8.5l2 2 4-4" fill="none" stroke="${opts.style === 'color' ? '#16A34A' : c.primary}" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'ballot-script-x',
    char: '🗴',
    name: 'Ballot Script X',
    unicodeHex: 'U+1F5F4',
    category: 'symbols',
    tags: ['ballot script x', 'script x', 'cross', 'x', 'cancel', 'vote', 'mark', 'no', 'handwritten', '🗴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const strokeColor = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${strokeColor}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M7 8c3 2 11 11 18 16" />
        <path d="M25 8c-3 2-11 11-18 16" />
      </g>`;
    },
  },
  {
    id: 'ballot-box-with-script-x',
    char: '🗵',
    name: 'Ballot Box with Script X',
    unicodeHex: 'U+1F5F5',
    category: 'symbols',
    tags: ['ballot box with script x', 'checkbox', 'cross', 'box', 'vote', 'ballot', 'checked', 'no', 'cancel', '🗵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <path d="M10 10c2 2 8 8 12 12" />
          <path d="M22 10c-2 2-8 8-12 12" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.5}" />
        <path d="M10 10c2 2 8 8 12 12M22 10c-2 2-8 8-12 12" fill="none" stroke="${c.primary}" stroke-width="2.4" />
      </g>`;
    },
  },
  {
    id: 'ballot-bold-script-x',
    char: '🗶',
    name: 'Ballot Bold Script X',
    unicodeHex: 'U+1F5F6',
    category: 'symbols',
    tags: ['ballot bold script x', 'bold cross', 'heavy x', 'vote', 'mark', 'cancel', 'no', 'rejection', '🗶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const strokeColor = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${strokeColor}" stroke-width="${opts.strokeWidth + 1.6}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M6 7c3 3 12 12 20 18" />
        <path d="M26 7c-3 3-12 12-20 18" />
      </g>`;
    },
  },
  {
    id: 'ballot-box-with-bold-script-x',
    char: '🗷',
    name: 'Ballot Box with Bold Script X',
    unicodeHex: 'U+1F5F7',
    category: 'symbols',
    tags: ['ballot box with bold script x', 'bold checkbox', 'cross box', 'vote', 'ballot', 'rejection', 'no', '🗷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <path d="M9 9c2 2 9 9 14 14" stroke-width="${opts.strokeWidth + 0.8}" />
          <path d="M23 9c-2 2-9 9-14 14" stroke-width="${opts.strokeWidth + 0.8}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.8}" />
        <path d="M9 9c2 2 9 9 14 14M23 9c-2 2-9 9-14 14" fill="none" stroke="${c.primary}" stroke-width="3" />
      </g>`;
    },
  },
  {
    id: 'light-check-mark',
    char: '🗸',
    name: 'Light Check Mark',
    unicodeHex: 'U+1F5F8',
    category: 'symbols',
    tags: ['light check mark', 'check', 'tick', 'yes', 'confirm', 'success', 'accept', 'done', 'light check', '🗸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      const strokeColor = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${strokeColor}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M6 17l6 6L26 8" />
      </g>`;
    },
  },
  {
    id: 'ballot-box-with-bold-check',
    char: '🗹',
    name: 'Ballot Box with Bold Check',
    unicodeHex: 'U+1F5F9',
    category: 'symbols',
    tags: ['ballot box with bold check', 'checkbox', 'checked', 'check box', 'vote', 'ballot', 'yes', 'approved', 'success', 'done', '🗹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <path d="M9 16l5 5 9-10" stroke-width="${opts.strokeWidth + 0.8}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.5}" />
        <path d="M9 16l5 5 9-10" fill="none" stroke="${c.primary}" stroke-width="3" />
      </g>`;
    },
  },
  {
    id: 'world-map',
    char: '🗺',
    name: 'World Map',
    unicodeHex: 'U+1F5FA',
    category: 'objects-places',
    tags: ['world map', 'map', 'globe', 'earth', 'travel', 'navigation', 'cartography', 'geography', 'continents', 'paper map', '🗺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#10B981', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tri-Fold Paper Map Boundary -->
          <polygon points="4,7 12,5 20,7 28,5 28,25 20,27 12,25 4,27" />
          <!-- Vertical Crease Folds -->
          <line x1="12" y1="5" x2="12" y2="25" />
          <line x1="20" y1="7" x2="20" y2="27" />
          <!-- Continents -->
          <path d="M6 12c2-1 3 1 4 0 1-2-1-3 0-4" />
          <path d="M14 10c2-1 3 0 4 2 1 1-1 3-2 3" />
          <path d="M22 11c2-1 3 1 4 0" />
          <path d="M23 18c1 0 2 1 2 2" />
        </g>`;
      }
      const oceanFill = opts.style === 'color' ? '#38BDF8' : c.primary;
      const landFill = opts.style === 'color' ? '#10B981' : (opts.style === 'duotone' ? c.secondary : c.primary);

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Fold 1 (Left) -->
        <polygon points="4,7 12,5 12,25 4,27" fill="${oceanFill}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Fold 2 (Center Shaded) -->
        <polygon points="12,5 20,7 20,27 12,25" fill="${opts.style === 'color' ? '#0284C7' : oceanFill}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Fold 3 (Right) -->
        <polygon points="20,7 28,5 28,25 20,27" fill="${oceanFill}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Continents Landmasses -->
        <!-- Americas -->
        <path d="M6 9c1.5 0 2 1.5 3 1 1-1 0-2 1-2.5s2 1 1 2c-1 1-2 3-3 4-1 0-1 3-2 3" fill="${landFill}" />
        <!-- Europe & Africa -->
        <path d="M14 9c2-1 3 0 3.5 1.5.5 1.5-.5 3.5-1 4.5s1 3 0 4c-1 0-1.5-2-2-3" fill="${landFill}" />
        <!-- Asia & Australia -->
        <path d="M22 10c2-1 3 0.5 4 0s1.5 2 1 3c-1 1-2.5 1-3.5 0" fill="${landFill}" />
        <circle cx="24" cy="20" r="1.5" fill="${landFill}" />
      </g>`;
    },
  },
  {
    id: 'mount-fuji',
    char: '🗻',
    name: 'Mount Fuji',
    unicodeHex: 'U+1F5FB',
    category: 'objects-places',
    tags: ['mount fuji', 'fuji', 'mountain', 'japan', 'snow', 'volcano', 'nature', 'landscape', 'fujisan', 'peak', '🗻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E3A8A', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Rising Sun -->
          <circle cx="16" cy="7" r="4.5" />
          <!-- Volcanic Cone -->
          <polygon points="3,27 12,9 20,9 29,27" />
          <!-- Snowline Crest -->
          <path d="M10 14l2 3 2-2 2 3 2-2 2 3 2-3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Red Rising Sun behind Fuji -->
        <circle cx="16" cy="7" r="4.5" fill="#EF4444" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
        <!-- Deep Blue Volcanic Mountain Base -->
        <polygon points="3,27 12,9 20,9 29,27" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <!-- Pristine Jagged Snow Cap -->
        <path d="M12 9h8l2 5-2-1-2 2-2-1-2 2-2-1-2 1z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
        <!-- Ground Horizon Line -->
        <line x1="2" y1="27" x2="30" y2="27" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'tokyo-tower',
    char: '🗼',
    name: 'Tokyo Tower',
    unicodeHex: 'U+1F5FC',
    category: 'objects-places',
    tags: ['tokyo tower', 'tokyo', 'tower', 'japan', 'landmark', 'eiffel', 'communications', 'red tower', 'architecture', '🗼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top Spire -->
          <line x1="16" y1="2" x2="16" y2="7" />
          <!-- Upper Spire Cone -->
          <polygon points="15,7 17,7 17.5,13 14.5,13" />
          <!-- Observation Deck 1 -->
          <rect x="13" y="13" width="6" height="2" rx="0.5" />
          <!-- Mid Truss -->
          <polygon points="14,15 18,15 19,20 13,20" />
          <!-- Observation Deck 2 -->
          <rect x="11.5" y="20" width="9" height="2" rx="0.5" />
          <!-- Lower Arch and Splayed Legs -->
          <path d="M12.5 22L7 29h4l2.5-4 2.5 2 2.5-2 2.5 4h4l-5.5-7z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Spire Antenna Pin -->
        <line x1="16" y1="2" x2="16" y2="7" stroke="${c.primary}" stroke-width="1.8" />
        <!-- White Upper Spire Band -->
        <polygon points="15,7 17,7 17.5,10 14.5,10" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Red Mid Spire Band -->
        <polygon points="14.5,10 17.5,10 18,13 14,13" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Upper Observation Deck (White) -->
        <rect x="13" y="13" width="6" height="2.2" rx="0.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Main Tower Red Truss -->
        <polygon points="14,15.2 18,15.2 19,20 13,20" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Lower Observation Main Deck -->
        <rect x="11.5" y="20" width="9" height="2.5" rx="0.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Splayed Lower Arch Legs -->
        <path d="M12.5 22.5L6.5 29h4.5l2.5-4 2.5 2 2.5-2 2.5 4h4.5l-6-6.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'statue-of-liberty',
    char: '🗽',
    name: 'Statue of Liberty',
    unicodeHex: 'U+1F5FD',
    category: 'objects-places',
    tags: ['statue of liberty', 'liberty', 'new york', 'usa', 'landmark', 'freedom', 'torch', 'crown', 'monument', 'america', '🗽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#059669', fillSecondary: '#6EE7B7', stroke: '#064E3B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Torch & Flame -->
          <circle cx="25" cy="5" r="2" />
          <line x1="25" y1="7" x2="25" y2="12" />
          <!-- Spiked Crown 7 Rays -->
          <path d="M10 10l2-4 2 3.5 2-4.5 2 4.5 2-3.5 2 4" />
          <!-- Head Profile & Neck -->
          <circle cx="16" cy="13" r="3.5" />
          <!-- Torso Robes -->
          <path d="M9 28c0-7 3-11 7-11s7 4 7 11z" />
          <path d="M13 17l6 11M19 17l-3 11" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Verdigris Robe Body -->
        <path d="M9 28c0-7 3-11 7-11s7 4 7 11z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <path d="M13 17l6 11M19 17l-3 11" stroke="${opts.style === 'color' ? '#047857' : c.stroke}" stroke-width="1" fill="none" />
        <!-- Head & Face -->
        <circle cx="16" cy="13" r="3.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
        <!-- 7-Ray Crown -->
        <polygon points="10,12 11,7 13,10 16,5 19,10 21,7 22,12" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
        <!-- Raised Arm with Torch -->
        <path d="M22 18l3-6v-2h1" stroke="${c.primary}" stroke-width="2" fill="none" />
        <!-- Golden Torch Flame -->
        <circle cx="26" cy="5.5" r="2.2" fill="${opts.style === 'color' ? '#F59E0B' : c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
      </g>`;
    },
  },
  {
    id: 'silhouette-of-japan',
    char: '🗾',
    name: 'Silhouette of Japan',
    unicodeHex: 'U+1F5FE',
    category: 'objects-places',
    tags: ['silhouette of japan', 'japan', 'map', 'archipelago', 'honshu', 'hokkaido', 'kyushu', 'shikoku', 'country', 'geography', '🗾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#0284C7', stroke: '#065F46' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Hokkaido -->
          <polygon points="21,5 26,6 27,10 24,11 22,9" />
          <!-- Honshu Curved Arc -->
          <path d="M21 11l-3 3-5 5-4 1-3 3 2 1 5-2 5-4 4-4z" />
          <!-- Shikoku -->
          <polygon points="10,21 13,20 14,22 11,23" />
          <!-- Kyushu -->
          <polygon points="6,23 9,22 10,25 7,27 5,25" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ocean Blue Background Card Base -->
        <rect x="3" y="3" width="26" height="26" rx="5" fill="${opts.style === 'color' ? '#0284C7' : 'none'}" />
        <!-- Hokkaido Island -->
        <polygon points="21,5 26,6 27,10 24,11 22,9" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.8}" />
        <!-- Main Honshu Archipelago Arc -->
        <path d="M21 11l-3 3-5 5-4 1-3 3 2 1 5-2 5-4 4-4z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.9}" />
        <!-- Shikoku Island -->
        <polygon points="10,21 13,20 14,22 11,23" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.7}" />
        <!-- Kyushu Island -->
        <polygon points="6,23 9,22 10,25 7,27 5,25" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 0.7}" />
      </g>`;
    },
  },
  {
    id: 'moyai',
    char: '🗿',
    name: 'Moyai',
    unicodeHex: 'U+1F5FF',
    category: 'objects-places',
    tags: ['moyai', 'moai', 'statue', 'easter island', 'stone', 'monolith', 'head', 'face', 'rock', 'sculpture', '🗿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Monolith Head Contour -->
          <path d="M10 4h9c3 0 4 3 4 7v13c0 3-2 4-6 4h-4c-4 0-5-2-5-5V7c0-2 1-3 2-3z" />
          <!-- Heavy Prominent Brow & Nose -->
          <path d="M9 10h6v6h-3v5h4" />
          <!-- Deep Eye Socket Shadow -->
          <line x1="15" y1="11" x2="19" y2="11" />
          <!-- Protruding Lip & Chin Cut -->
          <line x1="12" y1="21" x2="16" y2="21" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Chiseled Stone Monolith Head -->
        <path d="M10 4h9c3 0 4 3 4 7v13c0 3-2 4-6 4h-4c-4 0-5-2-5-5V7c0-2 1-3 2-3z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1.2}" />
        <!-- Sculpted Nose & Brow Ridge -->
        <polygon points="9,9 16,9 16,16 12.5,16 12.5,21 16,21 15,24 10,24" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.style === 'silhouette' ? 0 : 1}" />
        <!-- Dark Eye Socket Cavity -->
        <line x1="16" y1="11" x2="19.5" y2="11" stroke="${opts.style === 'color' ? '#334155' : c.stroke}" stroke-width="1.8" />
        <!-- Pursed Lip Line -->
        <line x1="12.5" y1="21" x2="16" y2="21" stroke="${opts.style === 'color' ? '#334155' : c.stroke}" stroke-width="1.5" />
      </g>`;
    },
  },
];
