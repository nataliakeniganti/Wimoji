import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const inputLettersIcons: WimojiIconDef[] = [
  {
    id: 'input-latin-uppercase',
    char: '🔠',
    name: 'Input Latin Uppercase',
    unicodeHex: 'U+1F520',
    category: 'enclosed-letters',
    tags: ['abcd', 'uppercase', 'capital', 'letters', 'alphabet', 'text', 'input', 'font', '🔠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const textColor = opts.style === 'outline' ? c.stroke : '#FFFFFF';
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="14.2" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="8.5" letter-spacing="0.8">AB</text>
        <text x="16" y="23.2" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="8.5" letter-spacing="0.8">CD</text>
      </g>`;
    },
  },
  {
    id: 'input-latin-lowercase',
    char: '🔡',
    name: 'Input Latin Lowercase',
    unicodeHex: 'U+1F521',
    category: 'enclosed-letters',
    tags: ['abcd', 'lowercase', 'small', 'letters', 'alphabet', 'text', 'input', 'font', '🔡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const textColor = opts.style === 'outline' ? c.stroke : '#FFFFFF';
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="14" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="8.5" letter-spacing="0.8">ab</text>
        <text x="16" y="23" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="8.5" letter-spacing="0.8">cd</text>
      </g>`;
    },
  },
  {
    id: 'input-numbers',
    char: '🔢',
    name: 'Input Numbers',
    unicodeHex: 'U+1F522',
    category: 'enclosed-letters',
    tags: ['1234', 'numbers', 'digits', 'math', 'count', 'numeric', 'keypad', 'input', '🔢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const textColor = opts.style === 'outline' ? c.stroke : '#FFFFFF';
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="14.2" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="8.5" letter-spacing="0.8">12</text>
        <text x="16" y="23.2" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="8.5" letter-spacing="0.8">34</text>
      </g>`;
    },
  },
  {
    id: 'input-symbols',
    char: '🔣',
    name: 'Input Symbols',
    unicodeHex: 'U+1F523',
    category: 'enclosed-letters',
    tags: ['symbols', 'signs', 'special', 'characters', 'music', 'input', 'keyboard', '🔣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const textColor = opts.style === 'outline' ? c.stroke : '#FFFFFF';
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="14.2" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="8" letter-spacing="0.8">〒♪</text>
        <text x="16" y="23.2" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="8" letter-spacing="0.8">&amp;%</text>
      </g>`;
    },
  },
  {
    id: 'input-latin-letters',
    char: '🔤',
    name: 'Input Latin Letters',
    unicodeHex: 'U+1F524',
    category: 'enclosed-letters',
    tags: ['abc', 'alphabet', 'letters', 'input', 'text', 'keyboard', 'font', '🔤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const textColor = opts.style === 'outline' ? c.stroke : '#FFFFFF';
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="20.5" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="10" letter-spacing="0.6">abc</text>
      </g>`;
    },
  },
];
