import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const enclosedIcons: WimojiIconDef[] = [
  {
    id: 'blood-type-a',
    char: '🅰',
    name: 'A Button (Blood Type)',
    unicodeHex: 'U+1F170',
    category: 'enclosed-letters',
    tags: ['a', 'letter', 'blood type', 'red', 'square', 'button'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <path d="M12 22l4-12 4 12M13.5 17.5h5" stroke-width="${opts.strokeWidth + 0.6}" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />
        <path d="M11.5 22L16 9.5 20.5 22M13 17.5h6" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'blood-type-b',
    char: '🅱',
    name: 'B Button (Blood Type)',
    unicodeHex: 'U+1F171',
    category: 'enclosed-letters',
    tags: ['b', 'letter', 'blood type', 'red', 'square', 'button'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <path d="M12 10h4.5a3 3 0 0 1 0 6H12v6h5a3.5 3.5 0 0 0 0-7" stroke-width="${opts.strokeWidth + 0.6}" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />
        <path d="M12 10h4.5a3 3 0 0 1 0 6H12v6h5a3.5 3.5 0 0 0 0-7" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'blood-type-o',
    char: '🅾',
    name: 'O Button (Blood Type)',
    unicodeHex: 'U+1F17E',
    category: 'enclosed-letters',
    tags: ['o', 'letter', 'blood type', 'red', 'square', 'button', 'zero'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <circle cx="16" cy="16" r="6" stroke-width="${opts.strokeWidth + 0.6}" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />
        <circle cx="16" cy="16" r="6" stroke="#FFFFFF" stroke-width="2.6" fill="none" />
      </g>`;
    },
  },
  {
    id: 'parking-button',
    char: '🅿',
    name: 'P Button (Parking)',
    unicodeHex: 'U+1F17F',
    category: 'enclosed-letters',
    tags: ['p', 'parking', 'car', 'blue', 'square', 'button', 'transit'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <path d="M12 22V10h5a4 4 0 0 1 0 8h-5" stroke-width="${opts.strokeWidth + 0.6}" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />
        <path d="M12.5 22V10h4.5a4 4 0 0 1 0 8h-4.5" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'blood-type-ab',
    char: '🆎',
    name: 'AB Button (Blood Type)',
    unicodeHex: 'U+1F18E',
    category: 'enclosed-letters',
    tags: ['ab', 'letters', 'blood type', 'red', 'square', 'button'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <path d="M8 21l3-10 3 10M9 18h4" />
          <path d="M18 11h2.5a2 2 0 0 1 0 4H18v6h3a2.5 2.5 0 0 0 0-5" />
        </g>`;
      }
      return `${badge}<g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" stroke="none" />
        <path d="M8.5 21l3-10 3 10M9.5 18h4" />
        <path d="M18 11h2.5a2 2 0 0 1 0 4H18v6h3a2.5 2.5 0 0 0 0-5" />
      </g>`;
    },
  },
  {
    id: 'cl-button',
    char: '🆑',
    name: 'CL Button',
    unicodeHex: 'U+1F191',
    category: 'enclosed-letters',
    tags: ['cl', 'clear', 'red', 'button', 'square', 'phone'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g stroke="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <path d="M14 13a4 4 0 0 0-5 0v6a4 4 0 0 0 5 0M18 11v10h5" />
      </g>`;
    },
  },
  {
    id: 'cool-button',
    char: '🆒',
    name: 'Cool Button',
    unicodeHex: 'U+1F192',
    category: 'enclosed-letters',
    tags: ['cool', 'blue', 'button', 'square', 'word'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="3" y="6" width="26" height="20" rx="5" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="19" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="8.5">COOL</text>
      </g>`;
    },
  },
  {
    id: 'free-button',
    char: '🆓',
    name: 'Free Button',
    unicodeHex: 'U+1F193',
    category: 'enclosed-letters',
    tags: ['free', 'blue', 'button', 'square', 'cost', 'zero'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="3" y="6" width="26" height="20" rx="5" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="19" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="8.5">FREE</text>
      </g>`;
    },
  },
  {
    id: 'id-button',
    char: '🆔',
    name: 'ID Button',
    unicodeHex: 'U+1F194',
    category: 'enclosed-letters',
    tags: ['id', 'identity', 'purple', 'button', 'badge'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#7C3AED' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="20.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="12">ID</text>
      </g>`;
    },
  },
  {
    id: 'new-button',
    char: '🆕',
    name: 'New Button',
    unicodeHex: 'U+1F195',
    category: 'enclosed-letters',
    tags: ['new', 'blue', 'button', 'square', 'fresh', 'update'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="3" y="6" width="26" height="20" rx="5" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="19" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="9">NEW</text>
      </g>`;
    },
  },
  {
    id: 'ng-button',
    char: '🆖',
    name: 'NG Button',
    unicodeHex: 'U+1F196',
    category: 'enclosed-letters',
    tags: ['ng', 'no good', 'blue', 'button', 'square', 'blooper'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="20.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="11.5">NG</text>
      </g>`;
    },
  },
  {
    id: 'ok-button',
    char: '🆗',
    name: 'OK Button',
    unicodeHex: 'U+1F197',
    category: 'enclosed-letters',
    tags: ['ok', 'okay', 'blue', 'button', 'square', 'confirm', 'agree'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="20.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="11.5">OK</text>
      </g>`;
    },
  },
  {
    id: 'sos-button',
    char: '🆘',
    name: 'SOS Button',
    unicodeHex: 'U+1F198',
    category: 'enclosed-letters',
    tags: ['sos', 'emergency', 'help', 'red', 'square', 'button', 'danger'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="3" y="6" width="26" height="20" rx="5" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="19.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="9">SOS</text>
      </g>`;
    },
  },
  {
    id: 'up-button',
    char: '🆙',
    name: 'UP! Button',
    unicodeHex: 'U+1F199',
    category: 'enclosed-letters',
    tags: ['up', 'blue', 'button', 'square', 'level', 'top'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="20.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="11">UP!</text>
      </g>`;
    },
  },
  {
    id: 'vs-button',
    char: '🆚',
    name: 'VS Button',
    unicodeHex: 'U+1F19A',
    category: 'enclosed-letters',
    tags: ['vs', 'versus', 'orange', 'button', 'square', 'match', 'game'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="20.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="11.5">VS</text>
      </g>`;
    },
  },
  {
    id: 'japanese-congratulations',
    char: '㊗',
    name: 'Circled Ideograph Congratulation',
    unicodeHex: 'U+3297',
    category: 'enclosed-letters',
    tags: ['congratulations', 'celebration', 'kanji', 'japanese', 'shu', 'red', 'circle'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <circle cx="16" cy="16" r="12" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="14">祝</text>
      </g>`;
    },
  },
  {
    id: 'japanese-secret',
    char: '㊙',
    name: 'Circled Ideograph Secret',
    unicodeHex: 'U+3299',
    category: 'enclosed-letters',
    tags: ['secret', 'confidential', 'kanji', 'japanese', 'hi', 'red', 'circle'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <circle cx="16" cy="16" r="12" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="14">秘</text>
      </g>`;
    },
  },
  {
    id: 'japanese-koko',
    char: '🈁',
    name: 'Squared Katakana Koko',
    unicodeHex: 'U+1F201',
    category: 'enclosed-letters',
    tags: ['koko', 'here', 'destination', 'square', 'katakana', 'blue'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="20.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="11">ココ</text>
      </g>`;
    },
  },
  {
    id: 'japanese-service-charge',
    char: '🈂',
    name: 'Squared Katakana Sa',
    unicodeHex: 'U+1F202',
    category: 'enclosed-letters',
    tags: ['sa', 'service', 'charge', 'square', 'katakana', 'blue'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="14">サ</text>
      </g>`;
    },
  },
  {
    id: 'japanese-free-of-charge',
    char: '🈚',
    name: 'Squared CJK Ideograph Free of Charge',
    unicodeHex: 'U+1F21A',
    category: 'enclosed-letters',
    tags: ['free', 'without', 'kanji', 'japanese', 'mu', 'orange', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">無</text>
      </g>`;
    },
  },
  {
    id: 'japanese-reserved',
    char: '🈯',
    name: 'Squared CJK Ideograph Reserved',
    unicodeHex: 'U+1F22F',
    category: 'enclosed-letters',
    tags: ['reserved', 'finger', 'kanji', 'japanese', 'shi', 'green', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">指</text>
      </g>`;
    },
  },
  {
    id: 'japanese-prohibited',
    char: '🈲',
    name: 'Squared CJK Ideograph Prohibited',
    unicodeHex: 'U+1F232',
    category: 'enclosed-letters',
    tags: ['prohibited', 'forbidden', 'kanji', 'japanese', 'kin', 'red', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">禁</text>
      </g>`;
    },
  },
  {
    id: 'japanese-vacant',
    char: '🈳',
    name: 'Squared CJK Ideograph Vacant',
    unicodeHex: 'U+1F233',
    category: 'enclosed-letters',
    tags: ['vacant', 'empty', 'sky', 'kanji', 'japanese', 'kuu', 'blue', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">空</text>
      </g>`;
    },
  },
  {
    id: 'japanese-passing-grade',
    char: '🈴',
    name: 'Squared CJK Ideograph Passing Grade',
    unicodeHex: 'U+1F234',
    category: 'enclosed-letters',
    tags: ['passing', 'grade', 'passed', 'kanji', 'japanese', 'gou', 'red', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">合</text>
      </g>`;
    },
  },
  {
    id: 'japanese-no-vacancy',
    char: '🈵',
    name: 'Squared CJK Ideograph No Vacancy',
    unicodeHex: 'U+1F235',
    category: 'enclosed-letters',
    tags: ['full', 'no vacancy', 'kanji', 'japanese', 'man', 'red', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">満</text>
      </g>`;
    },
  },
  {
    id: 'japanese-not-free',
    char: '🈶',
    name: 'Squared CJK Ideograph Not Free',
    unicodeHex: 'U+1F236',
    category: 'enclosed-letters',
    tags: ['charge', 'possess', 'kanji', 'japanese', 'yuu', 'orange', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">有</text>
      </g>`;
    },
  },
  {
    id: 'japanese-monthly',
    char: '🈷',
    name: 'Squared CJK Ideograph Monthly',
    unicodeHex: 'U+1F237',
    category: 'enclosed-letters',
    tags: ['monthly', 'month', 'moon', 'kanji', 'japanese', 'tsuki', 'orange', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">月</text>
      </g>`;
    },
  },
  {
    id: 'japanese-application',
    char: '🈸',
    name: 'Squared CJK Ideograph Application',
    unicodeHex: 'U+1F238',
    category: 'enclosed-letters',
    tags: ['application', 'request', 'kanji', 'japanese', 'shin', 'orange', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">申</text>
      </g>`;
    },
  },
  {
    id: 'japanese-discount',
    char: '🈹',
    name: 'Squared CJK Ideograph Discount',
    unicodeHex: 'U+1F239',
    category: 'enclosed-letters',
    tags: ['discount', 'sale', 'kanji', 'japanese', 'wari', 'red', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">割</text>
      </g>`;
    },
  },
  {
    id: 'japanese-open-for-business',
    char: '🈺',
    name: 'Squared CJK Ideograph Open for Business',
    unicodeHex: 'U+1F23A',
    category: 'enclosed-letters',
    tags: ['open', 'business', 'operating', 'kanji', 'japanese', 'ei', 'orange', 'square'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21.5" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13">営</text>
      </g>`;
    },
  },
  {
    id: 'japanese-bargain',
    char: '🉐',
    name: 'Circled Ideograph Advantage',
    unicodeHex: 'U+1F250',
    category: 'enclosed-letters',
    tags: ['bargain', 'advantage', 'profit', 'toku', 'kanji', 'japanese', 'orange', 'circle'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <circle cx="16" cy="16" r="12" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13.5">得</text>
      </g>`;
    },
  },
  {
    id: 'japanese-acceptable',
    char: '🉑',
    name: 'Circled Ideograph Acceptable',
    unicodeHex: 'U+1F251',
    category: 'enclosed-letters',
    tags: ['acceptable', 'pass', 'allowed', 'kanji', 'japanese', 'ka', 'orange', 'circle'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <circle cx="16" cy="16" r="12" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <text x="16" y="21" text-anchor="middle" fill="${opts.style === 'outline' ? c.stroke : '#FFFFFF'}" font-family="sans-serif" font-weight="bold" font-size="13.5">可</text>
      </g>`;
    },
  },
];
