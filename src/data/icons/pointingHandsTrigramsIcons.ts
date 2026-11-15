import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup, renderPointingHandHorizontal, renderPointingHandVertical } from './svgHelpers';

export const pointingHandsTrigramsIcons: WimojiIconDef[] = [
  {
    id: 'black-left-pointing-index',
    char: '☚',
    name: 'Black Left Pointing Index',
    unicodeHex: 'U+261A',
    category: 'faces-hands',
    tags: ['hand', 'finger', 'pointing', 'left', 'index', 'gesture', 'black', 'black left pointing index', 'manicule', '☚', '☚️'],
    renderContent: (opts) => renderPointingHandHorizontal(opts, 'left', true),
  },
  {
    id: 'black-right-pointing-index',
    char: '☛',
    name: 'Black Right Pointing Index',
    unicodeHex: 'U+261B',
    category: 'faces-hands',
    tags: ['hand', 'finger', 'pointing', 'right', 'index', 'gesture', 'black', 'black right pointing index', 'manicule', '☛', '☛️'],
    renderContent: (opts) => renderPointingHandHorizontal(opts, 'right', true),
  },
  {
    id: 'white-left-pointing-index',
    char: '☜',
    name: 'White Left Pointing Index',
    unicodeHex: 'U+261C',
    category: 'faces-hands',
    tags: ['hand', 'finger', 'pointing', 'left', 'index', 'white', 'outline', 'white left pointing index', 'manicule', '☜', '☜️'],
    renderContent: (opts) => renderPointingHandHorizontal(opts, 'left', false),
  },
  {
    id: 'white-right-pointing-index',
    char: '☞',
    name: 'White Right Pointing Index',
    unicodeHex: 'U+261E',
    category: 'faces-hands',
    tags: ['hand', 'finger', 'pointing', 'right', 'index', 'white', 'outline', 'white right pointing index', 'manicule', '☞', '☞️'],
    renderContent: (opts) => renderPointingHandHorizontal(opts, 'right', false),
  },
  {
    id: 'white-down-pointing-index',
    char: '☟',
    name: 'White Down Pointing Index',
    unicodeHex: 'U+261F',
    category: 'faces-hands',
    tags: ['hand', 'finger', 'pointing', 'down', 'index', 'white', 'outline', 'white down pointing index', 'point down', '☟', '☟️'],
    renderContent: (opts) => renderPointingHandVertical(opts, 'down', false),
  },
  {
    id: 'trigram-for-heaven',
    char: '☰',
    name: 'Trigram for Heaven',
    unicodeHex: 'U+2630',
    category: 'symbols',
    tags: ['trigram', 'heaven', 'qian', 'iching', 'bagua', 'yang', 'taoism', '☰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="5" y1="8" x2="27" y2="8" />
        <line x1="5" y1="16" x2="27" y2="16" />
        <line x1="5" y1="24" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'trigram-for-lake',
    char: '☱',
    name: 'Trigram for Lake',
    unicodeHex: 'U+2631',
    category: 'symbols',
    tags: ['trigram', 'lake', 'dui', 'iching', 'bagua', 'taoism', '☱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="5" y1="8" x2="13.5" y2="8" />
        <line x1="18.5" y1="8" x2="27" y2="8" />
        <line x1="5" y1="16" x2="27" y2="16" />
        <line x1="5" y1="24" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'trigram-for-fire',
    char: '☲',
    name: 'Trigram for Fire',
    unicodeHex: 'U+2632',
    category: 'symbols',
    tags: ['trigram', 'fire', 'li', 'iching', 'bagua', 'taoism', '☲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="5" y1="8" x2="27" y2="8" />
        <line x1="5" y1="16" x2="13.5" y2="16" />
        <line x1="18.5" y1="16" x2="27" y2="16" />
        <line x1="5" y1="24" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'trigram-for-thunder',
    char: '☳',
    name: 'Trigram for Thunder',
    unicodeHex: 'U+2633',
    category: 'symbols',
    tags: ['trigram', 'thunder', 'zhen', 'iching', 'bagua', 'taoism', '☳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="5" y1="8" x2="13.5" y2="8" />
        <line x1="18.5" y1="8" x2="27" y2="8" />
        <line x1="5" y1="16" x2="13.5" y2="16" />
        <line x1="18.5" y1="16" x2="27" y2="16" />
        <line x1="5" y1="24" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'trigram-for-wind',
    char: '☴',
    name: 'Trigram for Wind',
    unicodeHex: 'U+2634',
    category: 'symbols',
    tags: ['trigram', 'wind', 'xun', 'iching', 'bagua', 'taoism', '☴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="5" y1="8" x2="27" y2="8" />
        <line x1="5" y1="16" x2="27" y2="16" />
        <line x1="5" y1="24" x2="13.5" y2="24" />
        <line x1="18.5" y1="24" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'trigram-for-water',
    char: '☵',
    name: 'Trigram for Water',
    unicodeHex: 'U+2635',
    category: 'symbols',
    tags: ['trigram', 'water', 'kan', 'iching', 'bagua', 'taoism', '☵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="5" y1="8" x2="13.5" y2="8" />
        <line x1="18.5" y1="8" x2="27" y2="8" />
        <line x1="5" y1="16" x2="27" y2="16" />
        <line x1="5" y1="24" x2="13.5" y2="24" />
        <line x1="18.5" y1="24" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'trigram-for-mountain',
    char: '☶',
    name: 'Trigram for Mountain',
    unicodeHex: 'U+2636',
    category: 'symbols',
    tags: ['trigram', 'mountain', 'gen', 'iching', 'bagua', 'taoism', '☶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="5" y1="8" x2="27" y2="8" />
        <line x1="5" y1="16" x2="13.5" y2="16" />
        <line x1="18.5" y1="16" x2="27" y2="16" />
        <line x1="5" y1="24" x2="13.5" y2="24" />
        <line x1="18.5" y1="24" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'trigram-for-earth',
    char: '☷',
    name: 'Trigram for Earth',
    unicodeHex: 'U+2637',
    category: 'symbols',
    tags: ['trigram', 'earth', 'kun', 'iching', 'bagua', 'yin', 'taoism', '☷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="5" y1="8" x2="13.5" y2="8" />
        <line x1="18.5" y1="8" x2="27" y2="8" />
        <line x1="5" y1="16" x2="13.5" y2="16" />
        <line x1="18.5" y1="16" x2="27" y2="16" />
        <line x1="5" y1="24" x2="13.5" y2="24" />
        <line x1="18.5" y1="24" x2="27" y2="24" />
      </g>`;
    },
  },
  {
    id: 'black-smiling-face',
    char: '☻',
    name: 'Black Smiling Face',
    unicodeHex: 'U+263B',
    category: 'faces-hands',
    tags: ['smiley', 'smiling', 'face', 'happy', 'black smiley', 'dark', 'smile', '☻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" fill="${c.stroke}" />
          <circle cx="11.5" cy="13" r="1.5" fill="#FFFFFF" />
          <circle cx="20.5" cy="13" r="1.5" fill="#FFFFFF" />
          <path d="M11 19c1.5 3 3.5 3.5 5 3.5s3.5-.5 5-3.5" stroke="#FFFFFF" stroke-width="2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="11.5" cy="13" r="1.6" fill="${c.secondary}" />
        <circle cx="20.5" cy="13" r="1.6" fill="${c.secondary}" />
        <path d="M11 19c1.5 3 3.5 3.5 5 3.5s3.5-.5 5-3.5" stroke="${c.secondary}" stroke-width="2" fill="none" />
      </g>`;
    },
  },
];
