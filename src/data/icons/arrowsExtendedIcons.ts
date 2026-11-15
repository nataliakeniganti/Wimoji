import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const arrowsExtendedIcons: WimojiIconDef[] = [
  {
    id: 'arrow-right',
    char: '➡',
    name: 'Right Arrow',
    unicodeHex: 'U+27A1',
    category: 'arrows',
    tags: ['arrow', 'right', 'forward', 'next', 'direction', 'pointer'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M5 16h22M19 8l8 8-8 8" />
      </g>`;
    },
  },
  {
    id: 'arrow-left',
    char: '⬅',
    name: 'Left Arrow',
    unicodeHex: 'U+2B05',
    category: 'arrows',
    tags: ['arrow', 'left', 'back', 'previous', 'direction', 'west'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M27 16H5M13 8l-8 8 8 8" />
      </g>`;
    },
  },
  {
    id: 'arrow-up',
    char: '⬆',
    name: 'Up Arrow',
    unicodeHex: 'U+2B06',
    category: 'arrows',
    tags: ['arrow', 'up', 'top', 'north', 'ascend', 'direction'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M16 27V5M8 13l8-8 8 8" />
      </g>`;
    },
  },
  {
    id: 'arrow-down',
    char: '⬇',
    name: 'Down Arrow',
    unicodeHex: 'U+2B07',
    category: 'arrows',
    tags: ['arrow', 'down', 'bottom', 'south', 'descend', 'direction'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M16 5v22M8 19l8 8 8-8" />
      </g>`;
    },
  },
  {
    id: 'arrow-curve-up',
    char: '⤴',
    name: 'Arrow Curving Up',
    unicodeHex: 'U+2934',
    category: 'arrows',
    tags: ['arrow', 'curve', 'up', 'ascend', 'turn', 'direction'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M7 25h9a8 8 0 0 0 8-8V7" />
        <path d="M18 13l6-6 6 6" />
      </g>`;
    },
  },
  {
    id: 'arrow-curve-down',
    char: '⤵',
    name: 'Arrow Curving Down',
    unicodeHex: 'U+2935',
    category: 'arrows',
    tags: ['arrow', 'curve', 'down', 'descend', 'turn', 'direction'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M7 7h9a8 8 0 0 1 8 8v10" />
        <path d="M18 19l6 6 6-6" />
      </g>`;
    },
  },
  {
    id: 'curly-loop',
    char: '➰',
    name: 'Curly Loop',
    unicodeHex: 'U+27B0',
    category: 'arrows',
    tags: ['loop', 'curly', 'curl', 'voicemail', 'knot', 'spiral'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<path d="M4 6C10 6 12.5 9.5 16 14C20.5 19 22 28 16 28C10 28 11 20 16 14C19 10 22 6 28 6" stroke="${stroke}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
    },
  },
  {
    id: 'double-curly-loop',
    char: '➿',
    name: 'Double Curly Loop',
    unicodeHex: 'U+27BF',
    category: 'arrows',
    tags: ['loop', 'double', 'voicemail', 'tape', 'knot', 'curl'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M2 6C5 6 7 10 9 14C12.5 19 13 27 9 27C5 27 5.5 19 9 14C11 10 12.5 6 16 6C19.5 6 21 10 23 14C26.5 19 27 27 23 27C19 27 19.5 19 23 14C25 10 27 6 30 6" />
      </g>`;
    },
  },
  {
    id: 'arrow-left-right-black',
    char: '⬌',
    name: 'Left Right Black Arrow',
    unicodeHex: 'U+2B0C',
    category: 'arrows',
    tags: ['arrow', 'horizontal', 'left', 'right', 'double-ended', 'pointer'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<polygon points="9,10 9,14 23,14 23,10 29,16 23,22 23,18 9,18 9,22 3,16" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<polygon points="9,11 9,14 23,14 23,11 29,16 23,21 23,18 9,18 9,21 3,16" fill="${c.primary}" />`;
    },
  },
  {
    id: 'arrow-up-down-black',
    char: '⬍',
    name: 'Up Down Black Arrow',
    unicodeHex: 'U+2B0D',
    category: 'arrows',
    tags: ['arrow', 'vertical', 'up', 'down', 'double-ended', 'pointer'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<polygon points="10,9 14,9 14,23 10,23 16,29 22,23 18,23 18,9 22,9 16,3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<polygon points="11,9 14,9 14,23 11,23 16,29 21,23 18,23 18,9 21,9 16,3" fill="${c.primary}" />`;
    },
  },
];