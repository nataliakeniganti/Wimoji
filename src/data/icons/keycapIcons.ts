import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

function renderKeycap(
  opts: WimojiStyleOptions,
  innerMarkup: (glyphStroke: string, glyphWidth: number) => string
): string {
  const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#334155' });
  const badge = getBadgeMarkup(opts);
  const isOutline = opts.style === 'outline';
  const glyphStroke = isOutline ? c.stroke : '#FFFFFF';
  const rectFill = opts.style === 'color' ? c.primary : (opts.style === 'duotone' ? c.secondary : (opts.style === 'silhouette' ? c.primary : 'none'));
  const glyphWidth = opts.strokeWidth + 0.5;

  return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <rect x="5" y="5" width="22" height="22" rx="4" fill="${rectFill}" />
    ${innerMarkup(glyphStroke, glyphWidth)}
  </g>`;
}

export const keycapIcons: WimojiIconDef[] = [
  {
    id: 'keycap-hash',
    char: '#️⃣',
    name: 'Keycap: #',
    unicodeHex: 'U+0023 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', 'hash', 'number sign', 'pound', 'button', 'input', 'symbol', '#'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M10 13.5h12M10 18.5h12M14 10l-1.5 12M19.5 10l-1.5 12" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-asterisk',
    char: '*️⃣',
    name: 'Keycap: *',
    unicodeHex: 'U+002A U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', 'asterisk', 'star', 'button', 'input', 'symbol', '*'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M16 10.5v11M11.5 13.25l9 5.5M11.5 18.75l9-5.5" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-0',
    char: '0️⃣',
    name: 'Keycap: 0',
    unicodeHex: 'U+0030 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '0', 'zero', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<rect x="12" y="10" width="8" height="12" rx="4" stroke="${glyphStroke}" stroke-width="${glyphWidth}" fill="none" />`
      ),
  },
  {
    id: 'keycap-1',
    char: '1️⃣',
    name: 'Keycap: 1',
    unicodeHex: 'U+0031 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '1', 'one', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M13 11l3-2v14" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-2',
    char: '2️⃣',
    name: 'Keycap: 2',
    unicodeHex: 'U+0032 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '2', 'two', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M12.5 13.5a3.5 3.5 0 0 1 7 0c0 2.8-2.5 5.5-6.5 8.5h7" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-3',
    char: '3️⃣',
    name: 'Keycap: 3',
    unicodeHex: 'U+0033 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '3', 'three', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M13 11.5h6.5l-3.5 4c2.2 0 4 1.2 4 3.5a3.8 3.8 0 0 1-7 2" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-4',
    char: '4️⃣',
    name: 'Keycap: 4',
    unicodeHex: 'U+0034 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '4', 'four', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M18 10l-6.5 9h8.5M18 10v12" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-5',
    char: '5️⃣',
    name: 'Keycap: 5',
    unicodeHex: 'U+0035 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '5', 'five', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M18.5 11h-5.5v5h2.5a3.5 3.5 0 0 1 3.5 3.5c0 2.2-1.8 3-4.5 3a4 4 0 0 1-3-1.2" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-6',
    char: '6️⃣',
    name: 'Keycap: 6',
    unicodeHex: 'U+0036 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '6', 'six', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<circle cx="16" cy="18" r="3.5" stroke="${glyphStroke}" stroke-width="${glyphWidth}" fill="none" /><path d="M17.5 10.5c-2.8 0-5 3.5-5 7.5" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-7',
    char: '7️⃣',
    name: 'Keycap: 7',
    unicodeHex: 'U+0037 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '7', 'seven', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M12.5 11h7l-5.5 11.5" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-8',
    char: '8️⃣',
    name: 'Keycap: 8',
    unicodeHex: 'U+0038 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '8', 'eight', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<circle cx="16" cy="13.2" r="2.8" stroke="${glyphStroke}" stroke-width="${glyphWidth}" fill="none" /><circle cx="16" cy="18.8" r="3.2" stroke="${glyphStroke}" stroke-width="${glyphWidth}" fill="none" />`
      ),
  },
  {
    id: 'keycap-9',
    char: '9️⃣',
    name: 'Keycap: 9',
    unicodeHex: 'U+0039 U+FE0F U+20E3',
    category: 'enclosed-letters',
    tags: ['keycap', '9', 'nine', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<circle cx="16" cy="14" r="3.5" stroke="${glyphStroke}" stroke-width="${glyphWidth}" fill="none" /><path d="M19.5 14c0 4-2.2 7.5-5 7.5" stroke="${glyphStroke}" stroke-width="${glyphWidth}" />`
      ),
  },
  {
    id: 'keycap-10',
    char: '🔟',
    name: 'Keycap: 10',
    unicodeHex: 'U+1F51F',
    category: 'enclosed-letters',
    tags: ['keycap', '10', 'ten', 'digit', 'number', 'button', 'input'],
    renderContent: (opts) =>
      renderKeycap(opts, (glyphStroke, glyphWidth) =>
        `<path d="M9.5 13l2.5-2v11" stroke="${glyphStroke}" stroke-width="${Math.max(1.8, glyphWidth - 0.2)}" /><rect x="16.5" y="11" width="6" height="11" rx="3" stroke="${glyphStroke}" stroke-width="${Math.max(1.8, glyphWidth - 0.2)}" fill="none" />`
      ),
  },
];
