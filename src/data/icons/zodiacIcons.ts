import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

function getZodiacButton(
  opts: WimojiStyleOptions,
  c: { primary: string; secondary: string; stroke: string }
): { buttonMarkup: string; strokeCol: string } {
  const isOutline = opts.style === 'outline';
  const isDuotone = opts.style === 'duotone';
  const isSilhouette = opts.style === 'silhouette';

  if (isOutline) {
    return {
      buttonMarkup: `<rect x="4" y="4" width="24" height="24" rx="6" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" />`,
      strokeCol: c.stroke,
    };
  }
  if (isDuotone) {
    return {
      buttonMarkup: `<rect x="4" y="4" width="24" height="24" rx="6" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" />`,
      strokeCol: c.primary,
    };
  }
  if (isSilhouette) {
    return {
      buttonMarkup: `<rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />`,
      strokeCol: '#FFFFFF',
    };
  }
  // vibrant color mode
  return {
    buttonMarkup: `<rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />`,
    strokeCol: '#FFFFFF',
  };
}

export const zodiacIcons: WimojiIconDef[] = [
  {
    id: 'aries',
    char: '♈',
    name: 'Aries',
    unicodeHex: 'U+2648',
    category: 'zodiac',
    tags: ['aries', 'ram', 'zodiac', 'horoscope', 'astrology', 'fire sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FEE2E2', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<path d="M16 23V11M16 11c-2-4-7-4-8 1s3 6 5 4M16 11c2-4 7-4 8 1s-3 6-5 4" stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
    },
  },
  {
    id: 'taurus',
    char: '♉',
    name: 'Taurus',
    unicodeHex: 'U+2649',
    category: 'zodiac',
    tags: ['taurus', 'bull', 'zodiac', 'horoscope', 'astrology', 'earth sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#D1FAE5', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <circle cx="16" cy="18" r="5" />
        <path d="M10 9c0 4 3 5 6 5s6-1 6-5" />
      </g>`;
    },
  },
  {
    id: 'gemini',
    char: '♊',
    name: 'Gemini',
    unicodeHex: 'U+264A',
    category: 'zodiac',
    tags: ['gemini', 'twins', 'zodiac', 'horoscope', 'astrology', 'air sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FEF3C7', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <path d="M9 8c4 2 10 2 14 0" />
        <path d="M9 24c4-2 10-2 14 0" />
        <path d="M13 9v14" />
        <path d="M19 9v14" />
      </g>`;
    },
  },
  {
    id: 'cancer',
    char: '♋',
    name: 'Cancer',
    unicodeHex: 'U+264B',
    category: 'zodiac',
    tags: ['cancer', 'crab', 'zodiac', 'horoscope', 'astrology', 'water sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#06B6D4', fillSecondary: '#CFFAFE', stroke: '#0891B2' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9c4-1 9 1 10 6" />
        <circle cx="20" cy="20" r="3" />
        <path d="M20 23c-4 1-9-1-10-6" />
      </g>`;
    },
  },
  {
    id: 'leo',
    char: '♌',
    name: 'Leo',
    unicodeHex: 'U+264C',
    category: 'zodiac',
    tags: ['leo', 'lion', 'zodiac', 'horoscope', 'astrology', 'fire sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#FFEDD5', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <circle cx="11" cy="19" r="2.5" />
        <path d="M13.5 19c2-5 3-10 6-10 2 0 3.5 1.5 3.5 4 0 4-4 7-2 9 1 1 2 0 2-1" />
      </g>`;
    },
  },
  {
    id: 'virgo',
    char: '♍',
    name: 'Virgo',
    unicodeHex: 'U+264D',
    category: 'zodiac',
    tags: ['virgo', 'maiden', 'zodiac', 'horoscope', 'astrology', 'earth sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#84CC16', fillSecondary: '#ECFCCB', stroke: '#65A30D' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <path d="M8 9v13" />
        <path d="M8 12c1.5-3 5-3 5 0v10" />
        <path d="M13 12c1.5-3 5-3 5 0v10" />
        <path d="M18 16c2-1 4-1 4 2 0 4-3 6-5 6" />
      </g>`;
    },
  },
  {
    id: 'libra',
    char: '♎',
    name: 'Libra',
    unicodeHex: 'U+264E',
    category: 'zodiac',
    tags: ['libra', 'scales', 'balance', 'zodiac', 'horoscope', 'astrology', 'air sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#DBEAFE', stroke: '#2563EB' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <path d="M8 23h16" />
        <path d="M8 17h4c1-3 3-4 4-4s3 1 4 4h4" />
      </g>`;
    },
  },
  {
    id: 'scorpio',
    char: '♏',
    name: 'Scorpio',
    unicodeHex: 'U+264F',
    category: 'zodiac',
    tags: ['scorpio', 'scorpion', 'zodiac', 'horoscope', 'astrology', 'water sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#EDE9FE', stroke: '#7C3AED' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M8 9v13" />
        <path d="M8 12c1.5-3 5-3 5 0v10" />
        <path d="M13 12c1.5-3 5-3 5 0v10c0 2 2 3 4 3" />
        <path d="M21 21l3 3-2 1" />
      </g>`;
    },
  },
  {
    id: 'sagittarius',
    char: '♐',
    name: 'Sagittarius',
    unicodeHex: 'U+2650',
    category: 'zodiac',
    tags: ['sagittarius', 'archer', 'arrow', 'zodiac', 'horoscope', 'astrology', 'fire sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#FCE7F3', stroke: '#DB2777' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M9 23L23 9" />
        <path d="M15 9h8v8" />
        <path d="M11 15l6 6" />
      </g>`;
    },
  },
  {
    id: 'capricorn',
    char: '♑',
    name: 'Capricorn',
    unicodeHex: 'U+2651',
    category: 'zodiac',
    tags: ['capricorn', 'goat', 'zodiac', 'horoscope', 'astrology', 'earth sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78716C', fillSecondary: '#F5F5F4', stroke: '#57534E' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M8 10v9c0 2 1.5 3 3 3s3-1 3-3V9" />
        <path d="M14 14l5 6c2 2 4 1 4-1s-2-3-4-2" />
      </g>`;
    },
  },
  {
    id: 'aquarius',
    char: '♒',
    name: 'Aquarius',
    unicodeHex: 'U+2652',
    category: 'zodiac',
    tags: ['aquarius', 'water bearer', 'waves', 'zodiac', 'horoscope', 'astrology', 'air sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#E0F2FE', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M8 13l3-3 4 4 4-4 4 4" />
        <path d="M8 20l3-3 4 4 4-4 4 4" />
      </g>`;
    },
  },
  {
    id: 'pisces',
    char: '♓',
    name: 'Pisces',
    unicodeHex: 'U+2653',
    category: 'zodiac',
    tags: ['pisces', 'fishes', 'zodiac', 'horoscope', 'astrology', 'water sign'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#14B8A6', fillSecondary: '#CCFBF1', stroke: '#0D9488' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <path d="M10 8c3 4 3 12 0 16" />
        <path d="M22 8c-3 4-3 12 0 16" />
        <path d="M7 16h18" />
      </g>`;
    },
  },
  {
    id: 'ophiuchus',
    char: '⛎',
    name: 'Ophiuchus',
    unicodeHex: 'U+26CE',
    category: 'zodiac',
    tags: ['ophiuchus', 'serpent bearer', '13th zodiac', 'constellation', 'astrology'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#9333EA', fillSecondary: '#F3E8FF', stroke: '#7E22CE' });
      const badge = getBadgeMarkup(opts);
      const { buttonMarkup, strokeCol } = getZodiacButton(opts, c);

      return `${badge}${buttonMarkup}<g stroke="${strokeCol}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <path d="M12 9v10a4 4 0 0 0 8 0V9" />
        <path d="M9 15c4-2 10 2 14 0" />
      </g>`;
    },
  },
];
