import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const arrowIcons: WimojiIconDef[] = [
  {
    id: 'arrow-left-right',
    char: '↔',
    name: 'Left-Right Arrow',
    unicodeHex: 'U+2194',
    category: 'arrows',
    tags: ['arrow', 'horizontal', 'left', 'right', 'swap', 'width', 'both'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M5 16h22" />
        <path d="M10 11l-5 5 5 5" />
        <path d="M22 11l5 5-5 5" />
      </g>`;
    },
  },
  {
    id: 'arrow-up-down',
    char: '↕',
    name: 'Up-Down Arrow',
    unicodeHex: 'U+2195',
    category: 'arrows',
    tags: ['arrow', 'vertical', 'up', 'down', 'height', 'scroll', 'both'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M16 5v22" />
        <path d="M11 10l5-5 5 5" />
        <path d="M11 22l5 5 5-5" />
      </g>`;
    },
  },
  {
    id: 'arrow-up-left',
    char: '↖',
    name: 'Up-Left Arrow',
    unicodeHex: 'U+2196',
    category: 'arrows',
    tags: ['arrow', 'diagonal', 'northwest', 'up', 'left', 'direction'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M23 23L9 9" />
        <path d="M19 9H9v10" />
      </g>`;
    },
  },
  {
    id: 'arrow-up-right',
    char: '↗',
    name: 'Up-Right Arrow',
    unicodeHex: 'U+2197',
    category: 'arrows',
    tags: ['arrow', 'diagonal', 'northeast', 'up', 'right', 'external', 'link'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M9 23L23 9" />
        <path d="M13 9h10v10" />
      </g>`;
    },
  },
  {
    id: 'arrow-down-right',
    char: '↘',
    name: 'Down-Right Arrow',
    unicodeHex: 'U+2198',
    category: 'arrows',
    tags: ['arrow', 'diagonal', 'southeast', 'down', 'right', 'direction'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M9 9l14 14" />
        <path d="M13 23h10V13" />
      </g>`;
    },
  },
  {
    id: 'arrow-down-left',
    char: '↙',
    name: 'Down-Left Arrow',
    unicodeHex: 'U+2199',
    category: 'arrows',
    tags: ['arrow', 'diagonal', 'southwest', 'down', 'left', 'direction'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M23 9L9 23" />
        <path d="M19 23H9V13" />
      </g>`;
    },
  },
  {
    id: 'arrow-curve-left',
    char: '↩',
    name: 'Right Arrow Curving Left',
    unicodeHex: 'U+21A9',
    category: 'arrows',
    tags: ['arrow', 'curve', 'return', 'enter', 'back', 'reply', 'undo'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M12 11l-5 5 5 5" />
        <path d="M7 16h13a5 5 0 0 0 5-5v-1" />
      </g>`;
    },
  },
  {
    id: 'arrow-curve-right',
    char: '↪',
    name: 'Left Arrow Curving Right',
    unicodeHex: 'U+21AA',
    category: 'arrows',
    tags: ['arrow', 'curve', 'forward', 'redo', 'next', 'redirect'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
        <path d="M20 11l5 5-5 5" />
        <path d="M25 16H12a5 5 0 0 1-5-5v-1" />
      </g>`;
    },
  },
];
