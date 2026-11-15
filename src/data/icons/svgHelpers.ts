import { WimojiStyleOptions } from '../../types/wimoji';
import { D_INDEX_HAND_SKIN, D_INDEX_HAND_STROKE } from './pointingHandPaths';

/**
 * Returns optional background badge SVG markup according to WimojiStyleOptions
 */
export function getBadgeMarkup(opts: WimojiStyleOptions): string {
  if (opts.badgeShape === 'none') return '';
  const fill = opts.badgeBg || '#1e293b';

  switch (opts.badgeShape) {
    case 'circle':
      return `<circle cx="16" cy="16" r="15" fill="${fill}" />`;
    case 'squircle':
      return `<rect x="1" y="1" width="30" height="30" rx="8" fill="${fill}" />`;
    case 'square':
      return `<rect x="1" y="1" width="30" height="30" rx="3" fill="${fill}" />`;
    default:
      return '';
  }
}

/**
 * Common color palette resolver for Wimoji vendor
 */
export function resolveColors(opts: WimojiStyleOptions, defaults: {
  fillPrimary?: string;
  fillSecondary?: string;
  fillAccent?: string;
  stroke?: string;
}) {
  const isOutline = opts.style === 'outline';
  const isDuotone = opts.style === 'duotone';
  const isSilhouette = opts.style === 'silhouette';

  if (isSilhouette) {
    return {
      primary: opts.primaryColor || defaults.fillPrimary || '#0F172A',
      secondary: opts.primaryColor || defaults.fillSecondary || '#0F172A',
      accent: opts.primaryColor || defaults.fillAccent || '#0F172A',
      stroke: 'none',
      duotoneOpacity: '1',
      isFilled: true,
    };
  }

  if (isOutline) {
    return {
      primary: 'none',
      secondary: 'none',
      accent: 'none',
      stroke: opts.strokeColor || opts.primaryColor || defaults.stroke || '#0F172A',
      duotoneOpacity: '0',
      isFilled: false,
    };
  }

  if (isDuotone) {
    return {
      primary: opts.primaryColor || defaults.fillPrimary || '#3B82F6',
      secondary: opts.secondaryColor || defaults.fillSecondary || '#93C5FD',
      accent: opts.accentColor || defaults.fillAccent || '#60A5FA',
      stroke: opts.strokeColor || opts.primaryColor || defaults.stroke || '#1D4ED8',
      duotoneOpacity: '0.3',
      isFilled: true,
    };
  }

  // Vibrant / Full Color (Wimoji vendor original)
  return {
    primary: defaults.fillPrimary || opts.primaryColor,
    secondary: defaults.fillSecondary || opts.secondaryColor,
    accent: defaults.fillAccent || opts.accentColor,
    stroke: defaults.stroke || opts.strokeColor,
    duotoneOpacity: '1',
    isFilled: true,
  };
}

/**
 * Renders authentic pointing index hands pointing left or right (☚ ☛ ☜ ☞)
 */
export function renderPointingHandHorizontal(
  opts: WimojiStyleOptions,
  dir: 'left' | 'right',
  isBlack: boolean
): string {
  if (!isBlack) {
    const c = resolveColors(opts, { fillPrimary: '#FFCA28', stroke: '#78350F' });
    const badge = getBadgeMarkup(opts);

    const isOutline = opts.style === 'outline';
    const isSilhouette = opts.style === 'silhouette';
    const isDuotone = opts.style === 'duotone';

    let skinFill: string;
    let strokeFill: string = 'none';

    if (isSilhouette) {
      skinFill = c.primary;
    } else if (isOutline) {
      skinFill = 'none';
      strokeFill = c.stroke;
    } else if (isDuotone) {
      skinFill = c.primary;
      strokeFill = c.stroke;
    } else {
      // Vibrant / Full Color: #78350F outline on yellow skin
      skinFill = opts.primaryColor && opts.primaryColor !== '#3B82F6' ? c.primary : '#FFCA28';
      strokeFill = '#78350F';
    }

    const skinPath = skinFill === 'none'
      ? ''
      : `<path d="${D_INDEX_HAND_SKIN}" fill="${skinFill}" fill-rule="evenodd"${isDuotone ? ` fill-opacity="${c.duotoneOpacity}"` : ''} />`;
    const strokePath = strokeFill === 'none'
      ? ''
      : `<path d="${D_INDEX_HAND_STROKE}" fill="${strokeFill}" fill-rule="evenodd" />`;

    const transform = dir === 'right'
      ? 'matrix(0, -1, -1, 0, 32, 32)'
      : 'matrix(0, -1, 1, 0, 0, 32)';

    return `${badge}<g transform="${transform}">
      <g transform="matrix(0.0625, 0, 0, 0.0625, 0, 0)">
        ${skinPath}
        ${strokePath}
      </g>
    </g>`;
  }

  const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
  const badge = getBadgeMarkup(opts);

  const strokeWidth = opts.strokeWidth;
  const isOutline = opts.style === 'outline';
  const isSilhouette = opts.style === 'silhouette';
  const isDuotone = opts.style === 'duotone';

  const stroke = isOutline ? c.stroke : (isBlack ? '#0F172A' : (opts.style === 'color' ? '#B45309' : c.stroke));
  let fillHand: string;
  let fillCuff: string;
  let innerStroke: string;

  if (isSilhouette) {
    fillHand = c.primary;
    fillCuff = c.primary;
    innerStroke = '#FFFFFF';
  } else if (isOutline) {
    if (isBlack) {
      fillHand = c.stroke;
      fillCuff = c.stroke;
      innerStroke = '#FFFFFF';
    } else {
      fillHand = 'none';
      fillCuff = 'none';
      innerStroke = c.stroke;
    }
  } else if (isDuotone) {
    fillHand = c.primary;
    fillCuff = c.secondary;
    innerStroke = c.stroke;
  } else {
    // color mode
    if (isBlack) {
      fillHand = '#1E293B';
      fillCuff = '#F8FAFC';
      innerStroke = '#64748B';
    } else {
      fillHand = c.primary;
      fillCuff = '#F8FAFC';
      innerStroke = '#D97706';
    }
  }

  const cuffStroke = isSilhouette ? 'none' : (isOutline ? stroke : (isBlack ? stroke : '#94A3B8'));
  const buttonFill = isBlack && isOutline ? '#FFFFFF' : innerStroke;

  const content = `
    <!-- Sleeve Cuff -->
    <rect x="3.5" y="11" width="4" height="12.5" rx="1.2" fill="${fillCuff}" stroke="${cuffStroke}" stroke-width="${strokeWidth}" />
    <circle cx="5.5" cy="17.2" r="0.75" fill="${buttonFill}" />
    <!-- Hand & Pointing Index Finger -->
    <path d="M7.5 12.5 C9.5 9.8 12.5 9.5 14.5 10.5 C15.8 11.2 16.5 12 16.5 12.8 L27 12.8 C28.5 12.8 28.5 16.2 27 16.2 L17 16.2 C18.8 16.2 19.5 17 19.5 18.6 C19.5 19.2 18.5 19.5 18.5 20.8 C18.5 21.4 17.5 21.8 17 23.2 C12 23.5 8 23.2 7.5 23.2 Z" fill="${fillHand}" stroke="${stroke}" stroke-width="${strokeWidth}" />
    <!-- Curled Finger Creases -->
    <path d="M17 16.2 h2.5" stroke="${innerStroke}" stroke-width="${strokeWidth * 0.8}" stroke-linecap="round" />
    <path d="M15 18.8 h3.5" stroke="${innerStroke}" stroke-width="${strokeWidth * 0.8}" stroke-linecap="round" />
    <path d="M14 21 h3" stroke="${innerStroke}" stroke-width="${strokeWidth * 0.8}" stroke-linecap="round" />
    <!-- Thumb fold crease -->
    <path d="M10.5 10.5 c1.8 1.5 3.2 2.5 4 4.2" stroke="${innerStroke}" stroke-width="${strokeWidth * 0.8}" stroke-linecap="round" />
    <!-- Index knuckle crease -->
    <path d="M22 13.8 v1.6" stroke="${innerStroke}" stroke-width="${strokeWidth * 0.7}" stroke-linecap="round" />
  `;

  if (dir === 'left') {
    return `${badge}<g stroke-linecap="round" stroke-linejoin="round" transform="translate(32, 0) scale(-1, 1)">${content}</g>`;
  }
  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">${content}</g>`;
}

/**
 * Renders authentic pointing index hands pointing up or down (☝ ☟)
 */
export function renderPointingHandVertical(
  opts: WimojiStyleOptions,
  dir: 'up' | 'down',
  isBlack: boolean = false
): string {
  const c = resolveColors(opts, { fillPrimary: '#FFCA28', stroke: '#78350F' });
  const badge = getBadgeMarkup(opts);

  const isOutline = opts.style === 'outline';
  const isSilhouette = opts.style === 'silhouette';
  const isDuotone = opts.style === 'duotone';

  let skinFill: string;
  let strokeFill: string = 'none';

  if (isSilhouette) {
    skinFill = c.primary;
  } else if (isOutline) {
    skinFill = 'none';
    strokeFill = c.stroke;
  } else if (isDuotone) {
    skinFill = c.primary;
    strokeFill = c.stroke;
  } else {
    // Vibrant / Full Color: #78350F outline on yellow skin
    skinFill = opts.primaryColor && opts.primaryColor !== '#3B82F6' ? c.primary : '#FFCA28';
    strokeFill = '#78350F';
  }

  const skinPath = skinFill === 'none'
    ? ''
    : `<path d="${D_INDEX_HAND_SKIN}" fill="${skinFill}" fill-rule="evenodd"${isDuotone ? ` fill-opacity="${c.duotoneOpacity}"` : ''} />`;
  const strokePath = strokeFill === 'none'
    ? ''
    : `<path d="${D_INDEX_HAND_STROKE}" fill="${strokeFill}" fill-rule="evenodd" />`;

  if (dir === 'down') {
    return `${badge}<g transform="rotate(180 16 16)">
      <g transform="matrix(0.0625, 0, 0, 0.0625, 0, 0)">
        ${skinPath}
        ${strokePath}
      </g>
    </g>`;
  }

  return `${badge}<g transform="matrix(0.0625, 0, 0, 0.0625, 0, 0)">
    ${skinPath}
    ${strokePath}
  </g>`;
}
