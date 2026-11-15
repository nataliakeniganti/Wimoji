import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

interface RegionalItem {
  letter: string;
  char: string;
  hex: string;
}

const REGIONAL_ITEMS: RegionalItem[] = [
  { letter: 'A', char: '🇦', hex: 'U+1F1E6' },
  { letter: 'B', char: '🇧', hex: 'U+1F1E7' },
  { letter: 'C', char: '🇨', hex: 'U+1F1E8' },
  { letter: 'D', char: '🇩', hex: 'U+1F1E9' },
  { letter: 'E', char: '🇪', hex: 'U+1F1EA' },
  { letter: 'F', char: '🇫', hex: 'U+1F1EB' },
  { letter: 'G', char: '🇬', hex: 'U+1F1EC' },
  { letter: 'H', char: '🇭', hex: 'U+1F1ED' },
  { letter: 'I', char: '🇮', hex: 'U+1F1EE' },
  { letter: 'J', char: '🇯', hex: 'U+1F1EF' },
  { letter: 'K', char: '🇰', hex: 'U+1F1F0' },
  { letter: 'L', char: '🇱', hex: 'U+1F1F1' },
  { letter: 'M', char: '🇲', hex: 'U+1F1F2' },
  { letter: 'N', char: '🇳', hex: 'U+1F1F3' },
  { letter: 'O', char: '🇴', hex: 'U+1F1F4' },
  { letter: 'P', char: '🇵', hex: 'U+1F1F5' },
  { letter: 'Q', char: '🇶', hex: 'U+1F1F6' },
  { letter: 'R', char: '🇷', hex: 'U+1F1F7' },
  { letter: 'S', char: '🇸', hex: 'U+1F1F8' },
  { letter: 'T', char: '🇹', hex: 'U+1F1F9' },
  { letter: 'U', char: '🇺', hex: 'U+1F1FA' },
  { letter: 'V', char: '🇻', hex: 'U+1F1FB' },
  { letter: 'W', char: '🇼', hex: 'U+1F1FC' },
  { letter: 'X', char: '🇽', hex: 'U+1F1FD' },
  { letter: 'Y', char: '🇾', hex: 'U+1F1FE' },
  { letter: 'Z', char: '🇿', hex: 'U+1F1FF' },
];

export const regionalIndicatorIcons: WimojiIconDef[] = REGIONAL_ITEMS.map((item) => ({
  id: `regional-indicator-${item.letter.toLowerCase()}`,
  char: item.char,
  name: `Regional Indicator Symbol ${item.letter}`,
  unicodeHex: item.hex,
  category: 'regional',
  tags: ['regional indicator', 'flag', 'letter', item.letter.toLowerCase(), 'country', 'alphabet'],
  renderContent: (opts) => {
    const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
    const badge = getBadgeMarkup(opts);
    const isOutline = opts.style === 'outline';

    return `${badge}<g>
      <rect x="4" y="4" width="24" height="24" rx="6" fill="${isOutline ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${isOutline ? opts.strokeWidth : 0}" />
      <text x="16" y="21.5" text-anchor="middle" fill="${isOutline ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="14">${item.letter}</text>
    </g>`;
  },
}));
