import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const chairIcons: WimojiIconDef[] = [
  // Chair (U+1FA91)
  {
    id: 'chair',
    char: '🪑',
    name: 'Chair',
    unicodeHex: 'U+1FA91',
    category: 'objects-places',
    tags: [
      'chair',
      'seat',
      'high back chair',
      'furniture',
      'red chair',
      'dining chair',
      'chair facing left',
      'chair left',
      'wooden chair',
      '🪑',
      'U+1FA91',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const strokeCol = o ? c.stroke : (d || s ? c.primary : '#EF4444');
      const lineSw = Math.max(2.2, sw * 1.25);

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tall backrest on the right continuing down to back leg -->
        <line x1="25.5" y1="3.5" x2="25.5" y2="27.5" stroke="${strokeCol}" stroke-width="${lineSw}" />
        <!-- Front leg on left turning into contoured seat surface connecting to backrest -->
        <path d="M11.5 27.5 V19.5 C15 20.3 22 20.3 25.5 19.5" fill="none" stroke="${strokeCol}" stroke-width="${lineSw}" />
      </g>`;
    },
  },

  // Chair Facing Right (Non-RGI: U+1FA91 U+200D U+27A1)
  {
    id: '1fa91-200d-27a1',
    char: '🪑\u200D➡️',
    name: 'Chair Facing Right',
    unicodeHex: 'U+1FA91 U+200D U+27A1',
    category: 'objects-places',
    tags: [
      '1fa91-200d-27a1',
      'chair facing right',
      'chair right',
      'non-rgi',
      'seat',
      'high back chair',
      'furniture',
      'red chair',
      'dining chair',
      '🪑‍➡️',
      '🪑➡️',
      '🪑',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const strokeCol = o ? c.stroke : (d || s ? c.primary : '#EF4444');
      const lineSw = Math.max(2.2, sw * 1.25);

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Tall backrest on the left continuing down to back leg -->
        <line x1="6.5" y1="3.5" x2="6.5" y2="27.5" stroke="${strokeCol}" stroke-width="${lineSw}" />
        <!-- Seat surface curving across to the right and turning down into front leg -->
        <path d="M6.5 19.5 C10 20.3 17 20.3 20.5 19.5 V27.5" fill="none" stroke="${strokeCol}" stroke-width="${lineSw}" />
      </g>`;
    },
  },
];
