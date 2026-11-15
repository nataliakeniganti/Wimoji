import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';
import { renderFamilySymbol } from './familySymbolIcons';

function renderStripedFlag(
  opts: WimojiStyleOptions,
  clipId: string,
  stripes: string[]
): string {
  const c = resolveColors(opts, { fillPrimary: stripes[0], fillSecondary: '#64748B', stroke: '#1E293B' });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';

  const waveCloth = 'M7 6 C12 4 17 8 25 6 V18.5 C17 20.5 12 16.5 7 18.5 Z';
  const stripeHeight = 16.5 / stripes.length;

  if (o) {
    return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <line x1="7" y1="4" x2="7" y2="28" />
      <circle cx="7" cy="4" r="1.3" />
      <path d="${waveCloth}" />
      ${stripes
        .slice(1)
        .map((_, idx) => {
          const y = (6 + (idx + 1) * (12.5 / stripes.length)).toFixed(2);
          return `<path d="M7 ${y} C12 ${(+y - 1.8).toFixed(2)} 17 ${(+y + 1.8).toFixed(2)} 25 ${y}" stroke-width="${Math.max(0.9, sw * 0.55)}" />`;
        })
        .join('')}
    </g>`;
  }

  if (s) {
    return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
      <line x1="7" y1="4" x2="7" y2="28" stroke="${c.primary}" stroke-width="2.4" />
      <circle cx="7" cy="4" r="1.5" fill="${c.primary}" />
      <path d="${waveCloth}" fill="${c.primary}" />
      ${stripes
        .slice(1)
        .map((_, idx) => {
          const y = (6 + (idx + 1) * (12.5 / stripes.length)).toFixed(2);
          return `<path d="M7.5 ${y} C12 ${(+y - 1.6).toFixed(2)} 17 ${(+y + 1.6).toFixed(2)} 24.5 ${y}" fill="none" stroke="#FFFFFF" stroke-width="0.85" />`;
        })
        .join('')}
    </g>`;
  }

  return `${badge}<defs>
      <clipPath id="${clipId}">
        <path d="${waveCloth}" />
      </clipPath>
    </defs>
    <g stroke-linecap="round" stroke-linejoin="round">
      <line x1="7" y1="4" x2="7" y2="28" stroke="${d ? c.stroke : '#64748B'}" stroke-width="2.5" />
      <circle cx="7" cy="4" r="1.5" fill="${d ? c.primary : '#FBBF24'}" />
      <g clip-path="url(#${clipId})">
        ${stripes
          .map((col, idx) => {
            const y = (4 + idx * stripeHeight).toFixed(2);
            const h = (stripeHeight + 0.5).toFixed(2);
            const fillCol = d ? (idx % 2 === 0 ? c.primary : c.secondary) : col;
            return `<rect x="6" y="${y}" width="20" height="${h}" fill="${fillCol}" />`;
          })
          .join('')}
      </g>
      <path d="${waveCloth}" fill="none" stroke="${d ? c.stroke : '#64748B'}" stroke-width="1.1" />
    </g>`;
}

export const zwjSequencesIcons: WimojiIconDef[] = [
  // 1. Face Exhaling (U+1F62E U+200D U+1F4A8)
  {
    id: 'face-exhaling',
    char: '😮‍💨',
    name: 'Face Exhaling',
    unicodeHex: 'U+1F62E U+200D U+1F4A8',
    category: 'smileys-emotion',
    tags: ['face exhaling', 'exhale', 'sigh', 'relief', 'tired', 'gasp', 'phew', '😮‍💨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#E2E8F0', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const cloudPath =
        'M17.2 21.6 C18.8 20.6 20.6 19.6 22.4 19.4 C23.6 17.6 26.8 18.2 27.2 20.4 C29.4 20.8 29.8 24.4 27.2 25.2 C26.6 27.4 23.0 27.8 21.8 25.8 C19.8 26.2 17.8 24.6 17.2 21.6 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="14.2" cy="14.8" r="11.2" />
          <path d="M9.0 12.2 C10.0 13.6 11.4 13.6 12.4 12.2" />
          <path d="M16.0 12.2 C17.0 13.6 18.4 13.6 19.4 12.2" />
          <circle cx="14.6" cy="18.8" r="1.8" fill="${c.stroke}" stroke="none" />
          <path d="${cloudPath}" fill="${opts.badgeBg ? 'none' : 'none'}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="14.2" cy="14.8" r="11.4" />
          <path d="M9.0 12.2 C10.0 13.6 11.4 13.6 12.4 12.2 M16.0 12.2 C17.0 13.6 18.4 13.6 19.4 12.2" fill="none" stroke="#FFFFFF" stroke-width="1.6" />
          <circle cx="14.6" cy="18.8" r="1.8" fill="#FFFFFF" />
          <path d="${cloudPath}" stroke="#FFFFFF" stroke-width="1.4" />
        </g>`;
      }

      const featureInk = d ? c.stroke : '#37474F';
      const cloudFill = d ? c.secondary : '#F1F5F9';
      const cloudStroke = d ? c.stroke : '#94A3B8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="14.2" cy="14.8" r="11.4" fill="${c.primary}" stroke="#FFA000" stroke-width="0.9" />
        <circle cx="14.2" cy="14.0" r="10.0" fill="#FFE082" opacity="0.28" />
        <!-- Tired closed eyelids & eyebrows -->
        <path d="M8.6 9.8 C9.8 9.0 11.4 9.0 12.4 9.8 M16.0 9.8 C17.0 9.0 18.6 9.0 19.8 9.8" fill="none" stroke="${featureInk}" stroke-width="1.4" />
        <path d="M8.8 12.6 C9.8 14.0 11.4 14.0 12.4 12.6 M16.0 12.6 C17.0 14.0 18.6 14.0 19.6 12.6" fill="none" stroke="${featureInk}" stroke-width="1.7" />
        <!-- Small exhaling O-mouth -->
        <ellipse cx="14.6" cy="19.0" rx="1.8" ry="2.1" fill="${featureInk}" />
        <!-- Swirling exhale puff -->
        <path d="${cloudPath}" fill="${cloudFill}" stroke="${cloudStroke}" stroke-width="1.1" />
        <path d="M19.8 22.8 C21.8 22.2 23.4 22.6 24.4 23.4" fill="none" stroke="${cloudStroke}" stroke-width="1.0" />
      </g>`;
    },
  },

  // 2. Face in Clouds (U+1F636 U+200D U+1F32B U+FE0F)
  {
    id: 'face-in-clouds',
    char: '😶‍🌫️',
    name: 'Face in Clouds',
    unicodeHex: 'U+1F636 U+200D U+1F32B U+FE0F',
    category: 'smileys-emotion',
    tags: ['face in clouds', 'absentminded', 'foggy', 'head in clouds', 'daydream', '😶‍🌫️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#E2E8F0', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const topCloud =
        'M6.2 10.6 C4.4 9.6 4.8 6.4 7.4 6.2 C8.4 4.2 11.8 4.2 13.0 6.0 C14.6 4.8 17.4 5.2 18.2 7.0 C20.4 6.4 22.4 8.4 21.4 10.4 C18.2 11.2 10.2 11.4 6.2 10.6 Z';
      const bottomCloud =
        'M5.2 25.8 C2.8 25.0 2.6 20.6 5.6 19.8 C6.8 17.6 10.4 17.8 11.8 19.6 C13.8 18.2 17.6 18.6 18.8 20.8 C20.4 19.0 24.4 18.8 25.6 21.0 C28.6 21.2 28.8 25.6 25.8 26.4 C21.2 27.6 10.0 27.4 5.2 25.8 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="15.2" r="10.8" />
          <ellipse cx="12.2" cy="14.2" rx="1.4" ry="2.0" fill="${c.stroke}" stroke="none" />
          <ellipse cx="19.8" cy="14.2" rx="1.4" ry="2.0" fill="${c.stroke}" stroke="none" />
          <path d="${topCloud}" />
          <path d="${bottomCloud}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="16" cy="15.2" r="11.0" />
          <ellipse cx="12.2" cy="14.2" rx="1.4" ry="2.0" fill="#FFFFFF" />
          <ellipse cx="19.8" cy="14.2" rx="1.4" ry="2.0" fill="#FFFFFF" />
          <path d="${topCloud}" stroke="#FFFFFF" stroke-width="1.4" />
          <path d="${bottomCloud}" stroke="#FFFFFF" stroke-width="1.4" />
        </g>`;
      }

      const featureInk = d ? c.stroke : '#37474F';
      const cloudFill = d ? c.secondary : '#F8FAFC';
      const cloudStroke = d ? c.stroke : '#94A3B8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back haze -->
        <circle cx="23.2" cy="13.2" r="5.2" fill="${cloudFill}" stroke="${cloudStroke}" stroke-width="0.9" opacity="0.85" />
        <!-- Mouthless Face -->
        <circle cx="16" cy="15.2" r="11.0" fill="${c.primary}" stroke="#FFA000" stroke-width="0.9" />
        <ellipse cx="12.2" cy="14.2" rx="1.5" ry="2.1" fill="${featureInk}" />
        <ellipse cx="19.8" cy="14.2" rx="1.5" ry="2.1" fill="${featureInk}" />
        <circle cx="12.6" cy="13.5" r="0.55" fill="#FFFFFF" />
        <circle cx="20.2" cy="13.5" r="0.55" fill="#FFFFFF" />
        <!-- Fluffy foreground clouds obscuring forehead and mouth area -->
        <path d="${topCloud}" fill="${cloudFill}" stroke="${cloudStroke}" stroke-width="1.05" opacity="0.96" />
        <path d="${bottomCloud}" fill="${cloudFill}" stroke="${cloudStroke}" stroke-width="1.05" opacity="0.97" />
      </g>`;
    },
  },

  // 3. Face with Spiral Eyes (U+1F635 U+200D U+1F4AB)
  {
    id: 'face-with-spiral-eyes',
    char: '😵‍💫',
    name: 'Face with Spiral Eyes',
    unicodeHex: 'U+1F635 U+200D U+1F4AB',
    category: 'smileys-emotion',
    tags: ['face with spiral eyes', 'dizzy', 'hypnotized', 'woozy', 'spiral', 'confused', '😵‍💫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const leftSpiral =
        'M11.2 13.0 C11.2 12.2 12.2 12.2 12.2 13.0 C12.2 14.2 10.2 14.2 10.2 12.8 C10.2 11.0 13.0 11.0 13.2 13.0 C13.4 15.2 9.4 15.4 9.0 12.8';
      const rightSpiral =
        'M20.8 13.0 C20.8 12.2 21.8 12.2 21.8 13.0 C21.8 14.2 19.8 14.2 19.8 12.8 C19.8 11.0 22.6 11.0 22.8 13.0 C23.0 15.2 19.0 15.4 18.6 12.8';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.2" />
          <path d="${leftSpiral}" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="${rightSpiral}" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="M12.2 21.2 C13.8 19.8 18.2 19.8 19.8 21.2 C18.2 22.6 13.8 22.6 12.2 21.2 Z" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="16" cy="16" r="12.5" />
          <path d="${leftSpiral}" fill="none" stroke="#FFFFFF" stroke-width="1.35" />
          <path d="${rightSpiral}" fill="none" stroke="#FFFFFF" stroke-width="1.35" />
          <ellipse cx="16" cy="21.4" rx="3.4" ry="1.8" fill="#FFFFFF" />
        </g>`;
      }

      const featureInk = d ? c.secondary : '#37474F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.3" />
        <!-- White circular eye discs behind spirals -->
        <circle cx="11.2" cy="13.0" r="3.2" fill="#FFFFFF" opacity="0.9" />
        <circle cx="20.8" cy="13.0" r="3.2" fill="#FFFFFF" opacity="0.9" />
        <!-- Crisp hypnotic spirals -->
        <path d="${leftSpiral}" fill="none" stroke="${featureInk}" stroke-width="1.35" />
        <path d="${rightSpiral}" fill="none" stroke="${featureInk}" stroke-width="1.35" />
        <!-- Woozy wavy open mouth -->
        <path d="M12.6 21.4 C14.0 19.8 18.0 19.8 19.4 21.4 C18.0 23.0 14.0 23.0 12.6 21.4 Z" fill="${featureInk}" />
      </g>`;
    },
  },

  // 4. Head Shaking Horizontally (U+1F642 U+200D U+2194 U+FE0F)
  {
    id: 'head-shaking-horizontally',
    char: '🙂‍↔️',
    name: 'Head Shaking Horizontally',
    unicodeHex: 'U+1F642 U+200D U+2194 U+FE0F',
    category: 'smileys-emotion',
    tags: ['head shaking horizontally', 'no', 'shake head', 'disagree', 'left right', '🙂‍↔️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="15.5" r="10.0" />
          <ellipse cx="12.6" cy="13.2" rx="1.3" ry="1.9" fill="${c.stroke}" stroke="none" />
          <ellipse cx="19.4" cy="13.2" rx="1.3" ry="1.9" fill="${c.stroke}" stroke="none" />
          <path d="M12.2 18.0 C13.4 20.0 18.6 20.0 19.8 18.0" />
          <!-- Left-right arrows underneath -->
          <path d="M6.5 28.2 H25.5 M9.5 25.8 L6.2 28.2 L9.5 30.6 M22.5 25.8 L25.8 28.2 L22.5 30.6" stroke-width="${Math.max(1.2, sw * 0.75)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11.6" cy="15.5" r="9.0" opacity="0.32" />
          <circle cx="20.4" cy="15.5" r="9.0" opacity="0.32" />
          <circle cx="16" cy="15.5" r="10.0" />
          <ellipse cx="12.6" cy="13.2" rx="1.3" ry="1.9" fill="#FFFFFF" />
          <ellipse cx="19.4" cy="13.2" rx="1.3" ry="1.9" fill="#FFFFFF" />
          <path d="M12.2 18.0 C13.4 20.0 18.6 20.0 19.8 18.0" stroke="#FFFFFF" stroke-width="1.7" fill="none" />
          <path d="M6.5 28.2 H25.5 M9.5 25.8 L6.2 28.2 L9.5 30.6 M22.5 25.8 L25.8 28.2 L22.5 30.6" stroke="${c.primary}" stroke-width="1.8" fill="none" />
        </g>`;
      }

      const featureInk = d ? c.secondary : '#37474F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Horizontal motion ghost spheres -->
        <circle cx="11.2" cy="15.2" r="9.8" fill="${c.primary}" opacity="0.30" />
        <circle cx="20.8" cy="15.2" r="9.8" fill="${c.primary}" opacity="0.30" />
        <!-- Slightly smiling face sphere -->
        <circle cx="16" cy="15.2" r="10.2" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="14.4" r="8.8" fill="#FFE082" opacity="0.28" />
        <ellipse cx="12.6" cy="13.0" rx="1.35" ry="1.9" fill="${featureInk}" />
        <ellipse cx="19.4" cy="13.0" rx="1.35" ry="1.9" fill="${featureInk}" />
        <circle cx="13.0" cy="12.3" r="0.5" fill="#FFFFFF" />
        <circle cx="19.8" cy="12.3" r="0.5" fill="#FFFFFF" />
        <path d="M12.2 17.8 C13.4 19.8 18.6 19.8 19.8 17.8" stroke="${featureInk}" stroke-width="1.75" fill="none" />
        <!-- Horizontal shake arrow track -->
        <path d="M6.5 28.2 H25.5 M9.5 25.8 L6.2 28.2 L9.5 30.6 M22.5 25.8 L25.8 28.2 L22.5 30.6" stroke="#EA580C" stroke-width="1.8" fill="none" />
      </g>`;
    },
  },

  // 5. Head Shaking Vertically (U+1F642 U+200D U+2195 U+FE0F)
  {
    id: 'head-shaking-vertically',
    char: '🙂‍↕️',
    name: 'Head Shaking Vertically',
    unicodeHex: 'U+1F642 U+200D U+2195 U+FE0F',
    category: 'smileys-emotion',
    tags: ['head shaking vertically', 'yes', 'nod', 'agree', 'up down', '🙂‍↕️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="13.8" cy="16" r="10.0" />
          <ellipse cx="10.6" cy="13.8" rx="1.3" ry="1.9" fill="${c.stroke}" stroke="none" />
          <ellipse cx="17.0" cy="13.8" rx="1.3" ry="1.9" fill="${c.stroke}" stroke="none" />
          <path d="M10.2 18.5 C11.4 20.4 16.2 20.4 17.4 18.5" />
          <!-- Up-down nod arrow on right -->
          <path d="M27.6 6.5 V25.5 M25.2 9.5 L27.6 6.2 L30.0 9.5 M25.2 22.5 L27.6 25.8 L30.0 22.5" stroke-width="${Math.max(1.2, sw * 0.75)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="13.8" cy="11.6" r="9.0" opacity="0.32" />
          <circle cx="13.8" cy="20.4" r="9.0" opacity="0.32" />
          <circle cx="13.8" cy="16" r="10.0" />
          <ellipse cx="10.6" cy="13.8" rx="1.3" ry="1.9" fill="#FFFFFF" />
          <ellipse cx="17.0" cy="13.8" rx="1.3" ry="1.9" fill="#FFFFFF" />
          <path d="M10.2 18.5 C11.4 20.4 16.2 20.4 17.4 18.5" stroke="#FFFFFF" stroke-width="1.7" fill="none" />
          <path d="M27.6 6.5 V25.5 M25.2 9.5 L27.6 6.2 L30.0 9.5 M25.2 22.5 L27.6 25.8 L30.0 22.5" stroke="${c.primary}" stroke-width="1.8" fill="none" />
        </g>`;
      }

      const featureInk = d ? c.secondary : '#37474F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Vertical motion ghost spheres -->
        <circle cx="13.8" cy="11.2" r="9.6" fill="${c.primary}" opacity="0.30" />
        <circle cx="13.8" cy="20.8" r="9.6" fill="${c.primary}" opacity="0.30" />
        <!-- Slightly smiling face sphere -->
        <circle cx="13.8" cy="16" r="10.0" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="13.8" cy="15.2" r="8.6" fill="#FFE082" opacity="0.28" />
        <ellipse cx="10.6" cy="13.8" rx="1.35" ry="1.9" fill="${featureInk}" />
        <ellipse cx="17.0" cy="13.8" rx="1.35" ry="1.9" fill="${featureInk}" />
        <circle cx="11.0" cy="13.1" r="0.5" fill="#FFFFFF" />
        <circle cx="17.4" cy="13.1" r="0.5" fill="#FFFFFF" />
        <path d="M10.2 18.5 C11.4 20.4 16.2 20.4 17.4 18.5" stroke="${featureInk}" stroke-width="1.75" fill="none" />
        <!-- Vertical nod arrow on right -->
        <path d="M27.6 6.5 V25.5 M25.2 9.5 L27.6 6.2 L30.0 9.5 M25.2 22.5 L27.6 25.8 L30.0 22.5" stroke="#10B981" stroke-width="1.8" fill="none" />
      </g>`;
    },
  },

  // 6. Heart on Fire (U+2764 U+FE0F U+200D U+1F525)
  {
    id: 'heart-on-fire',
    char: '❤️‍🔥',
    name: 'Heart on Fire',
    unicodeHex: 'U+2764 U+FE0F U+200D U+1F525',
    category: 'smileys-emotion',
    tags: ['heart on fire', 'passion', 'burn', 'love', 'lust', 'sacred heart', '🔥', '❤️‍🔥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F97316', fillAccent: '#FDE047', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const heartPath = 'M16 28.5 S6.5 22.2 6.5 15.2 A5.2 5.2 0 0 1 16 12.2 A5.2 5.2 0 0 1 25.5 15.2 C25.5 22.2 16 28.5 16 28.5 Z';
      const backFlame =
        'M16 2.2 C16.6 5.6 19.6 7.0 19.2 10.2 C21.2 8.2 22.2 6.6 21.8 4.8 C25.4 7.6 27.5 11.8 27.2 16.4 C27.0 21.6 22.2 26.8 16 29.2 C9.8 26.8 5.0 21.6 4.8 16.4 C4.5 11.8 6.6 7.6 10.2 4.8 C9.8 6.6 10.8 8.2 12.8 10.2 C12.4 7.0 15.4 5.6 16 2.2 Z';
      const frontTongues =
        'M8.2 21.8 C7.8 19.2 9.4 17.6 10.8 16.4 C10.4 18.6 11.6 19.8 13.0 19.6 C14.0 17.4 15.0 15.2 16.0 13.6 C17.0 15.2 18.0 17.4 19.0 19.6 C20.4 19.8 21.6 18.6 21.2 16.4 C22.6 17.6 24.2 19.2 23.8 21.8 C22.0 24.8 19.2 27.0 16 28.4 C12.8 27.0 10.0 24.8 8.2 21.8 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${backFlame}" />
          <path d="${heartPath}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${backFlame}" />
          <path d="${heartPath}" stroke="#FFFFFF" stroke-width="1.3" />
        </g>`;
      }

      const outerFlameColor = d ? c.secondary : '#F97316';
      const tipFlameColor = d ? c.secondary : '#FDE047';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Outer blazing halo -->
        <path d="${backFlame}" fill="${outerFlameColor}" stroke="${d ? c.stroke : '#EA580C'}" stroke-width="0.9" />
        <!-- Red heart core -->
        <path d="${heartPath}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Licking golden flame tongues across lower half -->
        <path d="${frontTongues}" fill="${tipFlameColor}" opacity="0.9" />
      </g>`;
    },
  },

  // 7. Mending Heart (U+2764 U+FE0F U+200D U+1FA79)
  {
    id: 'mending-heart',
    char: '❤️‍🩹',
    name: 'Mending Heart',
    unicodeHex: 'U+2764 U+FE0F U+200D U+1FA79',
    category: 'smileys-emotion',
    tags: ['mending heart', 'heal', 'recover', 'bandage', 'sympathy', 'heart', '🩹', '❤️‍🩹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const heartPath = 'M16 27.5s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z';
      const crackPath = 'M16 10.6 L14.8 14.4 L17.0 18.2 L15.4 22.4 L16 26.8';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${heartPath}" />
          <path d="${crackPath}" stroke-width="${Math.max(1, sw * 0.65)}" />
          <rect x="8.5" y="12.5" width="15" height="7" rx="3.5" transform="rotate(-18 16 16)" fill="none" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${heartPath}" />
          <rect x="8.5" y="12.5" width="15" height="7" rx="3.5" transform="rotate(-18 16 16)" fill="#FFFFFF" stroke="${c.primary}" stroke-width="1.2" />
          <g transform="rotate(-18 16 16)" fill="${c.primary}">
            <circle cx="11.2" cy="14.6" r="0.55" />
            <circle cx="11.2" cy="17.4" r="0.55" />
            <circle cx="20.8" cy="14.6" r="0.55" />
            <circle cx="20.8" cy="17.4" r="0.55" />
          </g>
        </g>`;
      }

      const bandageFill = d ? c.secondary : '#FCD34D';
      const padFill = d ? c.primary : '#FEF3C7';
      const bandageStroke = d ? c.stroke : '#B45309';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Red Heart -->
        <path d="${heartPath}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Healing seam crack -->
        <path d="${crackPath}" fill="none" stroke="${d ? c.stroke : '#991B1B'}" stroke-width="1.2" />
        <!-- Adhesive Bandage across the mend -->
        <g transform="rotate(-18 16 16)">
          <rect x="8.0" y="12.2" width="16.0" height="7.6" rx="3.8" fill="${bandageFill}" stroke="${bandageStroke}" stroke-width="1.0" />
          <rect x="13.2" y="12.4" width="5.6" height="7.2" fill="${padFill}" stroke="none" />
          <line x1="13.2" y1="12.4" x2="13.2" y2="19.6" stroke="${bandageStroke}" stroke-width="0.7" opacity="0.6" />
          <line x1="18.8" y1="12.4" x2="18.8" y2="19.6" stroke="${bandageStroke}" stroke-width="0.7" opacity="0.6" />
          <circle cx="10.4" cy="14.6" r="0.55" fill="${bandageStroke}" />
          <circle cx="10.4" cy="17.4" r="0.55" fill="${bandageStroke}" />
          <circle cx="11.8" cy="16.0" r="0.55" fill="${bandageStroke}" />
          <circle cx="20.2" cy="16.0" r="0.55" fill="${bandageStroke}" />
          <circle cx="21.6" cy="14.6" r="0.55" fill="${bandageStroke}" />
          <circle cx="21.6" cy="17.4" r="0.55" fill="${bandageStroke}" />
        </g>
      </g>`;
    },
  },

  // 8. Family: Adult, Adult, Child (U+1F9D1 U+200D U+1F9D1 U+200D U+1F9D2)
  {
    id: 'family-adult-adult-child',
    char: '🧑‍🧑‍🧒',
    name: 'Family: Adult, Adult, Child',
    unicodeHex: 'U+1F9D1 U+200D U+1F9D1 U+200D U+1F9D2',
    category: 'people-body',
    tags: ['family', 'adult', 'child', 'parents', 'people', 'gender neutral', 'symbol', '🧑‍🧑‍🧒'],
    renderContent: (opts) => renderFamilySymbol(opts, 'family-adult-adult-child', ['adult', 'adult', 'child']),
  },

  // 9. Family: Adult, Adult, Child, Child (U+1F9D1 U+200D U+1F9D1 U+200D U+1F9D2 U+200D U+1F9D2)
  {
    id: 'family-adult-adult-child-child',
    char: '🧑‍🧑‍🧒‍🧒',
    name: 'Family: Adult, Adult, Child, Child',
    unicodeHex: 'U+1F9D1 U+200D U+1F9D1 U+200D U+1F9D2 U+200D U+1F9D2',
    category: 'people-body',
    tags: ['family', 'adult', 'child', 'children', 'parents', 'people', 'symbol', '🧑‍🧑‍🧒‍🧒'],
    renderContent: (opts) =>
      renderFamilySymbol(opts, 'family-adult-adult-child-child', ['adult', 'adult', 'child', 'child']),
  },

  // 10. Family: Adult, Child (U+1F9D1 U+200D U+1F9D2)
  {
    id: 'family-adult-child',
    char: '🧑‍🧒',
    name: 'Family: Adult, Child',
    unicodeHex: 'U+1F9D1 U+200D U+1F9D2',
    category: 'people-body',
    tags: ['family', 'adult', 'child', 'parent', 'single parent', 'people', 'symbol', '🧑‍🧒'],
    renderContent: (opts) => renderFamilySymbol(opts, 'family-adult-child', ['adult', 'child']),
  },

  // 11. Family: Adult, Child, Child (U+1F9D1 U+200D U+1F9D2 U+200D U+1F9D2)
  {
    id: 'family-adult-child-child',
    char: '🧑‍🧒‍🧒',
    name: 'Family: Adult, Child, Child',
    unicodeHex: 'U+1F9D1 U+200D U+1F9D2 U+200D U+1F9D2',
    category: 'people-body',
    tags: ['family', 'adult', 'child', 'children', 'parent', 'people', 'symbol', '🧑‍🧒‍🧒'],
    renderContent: (opts) => renderFamilySymbol(opts, 'family-adult-child-child', ['adult', 'child', 'child']),
  },

  // 12. Phoenix (U+1F426 U+200D U+1F525)
  {
    id: 'phoenix',
    char: '🐦‍🔥',
    name: 'Phoenix',
    unicodeHex: 'U+1F426 U+200D U+1F525',
    category: 'animals-nature',
    tags: ['phoenix', 'firebird', 'flame', 'rebirth', 'immortal', 'mythical', 'bird', '🐦‍🔥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F97316', fillAccent: '#FDE047', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const tailPlume = 'M20.4 18.6 C24.6 17.6 27.6 13.6 29.0 9.6 C29.8 14.4 27.6 19.8 24.4 22.4 C27.2 22.6 29.2 21.8 30.2 20.4 C28.2 24.4 23.6 25.8 19.6 23.6 Z';
      const wingPath = 'M12.6 15.6 C16.8 11.2 23.2 8.2 26.2 6.8 C25.2 10.6 24.0 13.4 21.6 15.4 C23.6 14.8 24.8 14.2 25.8 13.2 C23.2 17.4 18.4 19.8 13.6 19.2 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${tailPlume}" />
          <path d="M13.6 23.6 L13.2 28.0 M13.2 28.0 L11.4 28.8 M13.2 28.0 L15.0 28.8 M17.6 23.8 L18.0 28.0 M18.0 28.0 L16.2 28.8 M18.0 28.0 L19.8 28.8" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <ellipse cx="15.2" cy="18.6" rx="6.8" ry="5.2" transform="rotate(-12 15.2 18.6)" />
          <path d="${wingPath}" />
          <circle cx="9.8" cy="11.8" r="4.4" />
          <path d="M8.6 7.6 C8.4 4.8 10.6 3.6 12.4 5.2 C12.8 3.6 14.8 3.8 14.2 6.4" stroke-width="${Math.max(1.1, sw * 0.7)}" />
          <path d="M5.8 10.8 L2.4 12.2 L6.0 13.4 Z" />
          <circle cx="8.6" cy="10.8" r="0.8" fill="${c.stroke}" stroke="none" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${tailPlume}" />
          <path d="M13.6 23.6 L13.2 28.0 M13.2 28.0 L11.4 28.8 M13.2 28.0 L15.0 28.8 M17.6 23.8 L18.0 28.0 M18.0 28.0 L16.2 28.8 M18.0 28.0 L19.8 28.8" fill="none" stroke="${c.primary}" stroke-width="1.4" />
          <ellipse cx="15.2" cy="18.6" rx="6.8" ry="5.2" transform="rotate(-12 15.2 18.6)" />
          <path d="${wingPath}" stroke="#FFFFFF" stroke-width="1.0" />
          <circle cx="9.8" cy="11.8" r="4.4" />
          <path d="M8.6 7.8 C8.2 4.8 10.6 3.6 12.4 5.2 C12.8 3.6 14.8 3.8 14.0 6.8" fill="none" stroke="${c.primary}" stroke-width="1.5" />
          <path d="M5.8 10.8 L2.4 12.2 L6.0 13.4 Z" />
          <circle cx="8.6" cy="10.8" r="0.9" fill="#FFFFFF" />
        </g>`;
      }

      const orange = d ? c.secondary : '#F97316';
      const gold = d ? c.secondary : '#FDE047';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Flaming Tail Plumes -->
        <path d="${tailPlume}" fill="${orange}" stroke="${c.stroke}" stroke-width="1.0" />
        <path d="M21.4 20.4 C24.6 19.6 26.6 16.8 27.6 13.6 C27.2 17.4 25.2 21.0 21.8 22.2 Z" fill="${gold}" />
        <!-- Legs -->
        <path d="M13.6 23.6 L13.2 28.0 M13.2 28.0 L11.4 28.8 M13.2 28.0 L15.0 28.8 M17.6 23.8 L18.0 28.0 M18.0 28.0 L16.2 28.8 M18.0 28.0 L19.8 28.8" fill="none" stroke="${d ? c.stroke : '#F59E0B'}" stroke-width="1.2" />
        <!-- Crimson Body -->
        <ellipse cx="15.2" cy="18.6" rx="6.8" ry="5.2" transform="rotate(-12 15.2 18.6)" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.05" />
        <!-- Golden Breast Plume -->
        <path d="M9.6 17.8 C10.4 21.2 14.0 22.8 17.4 21.8 C14.0 21.4 11.4 20.0 9.6 17.8 Z" fill="${gold}" />
        <!-- Blazing Wing -->
        <path d="${wingPath}" fill="${orange}" stroke="${c.stroke}" stroke-width="1.0" />
        <path d="M15.2 16.0 C18.4 13.6 21.8 11.6 24.0 10.6" fill="none" stroke="${gold}" stroke-width="1.1" />
        <!-- Head, Flame Crest, Beak & Eye -->
        <path d="M8.6 7.8 C8.2 4.6 10.8 3.6 12.4 5.4 C12.8 3.6 15.0 4.0 14.0 7.0" fill="none" stroke="${gold}" stroke-width="1.7" />
        <path d="M8.6 7.8 C8.2 4.6 10.8 3.6 12.4 5.4 C12.8 3.6 15.0 4.0 14.0 7.0" fill="none" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="9.8" cy="11.8" r="4.4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.05" />
        <path d="M5.8 10.8 L2.4 12.2 L6.0 13.4 Z" fill="${gold}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="8.6" cy="10.8" r="1.25" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="0.6" />
        <circle cx="8.4" cy="10.9" r="0.65" fill="#0F172A" />
      </g>`;
    },
  },

  // 13. Lime (U+1F34B U+200D U+1F7E9) — built directly on lemon geometry
  {
    id: 'lime',
    char: '🍋‍🟩',
    name: 'Lime',
    unicodeHex: 'U+1F34B U+200D U+1F7E9',
    category: 'food-drink',
    tags: ['lime', 'citrus', 'green', 'sour', 'fruit', 'tropical', 'zest', '🍋‍🟩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#65A30D', fillSecondary: '#15803D', stroke: '#3F6212' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 21C2 18 2 14 5 11s12-7 18-3 7 12 3 18-18 2-21-5z" />
          <path d="M23 8l3-3" />
        </g>`;
      }

      if (s) {
        return `${badge}<g transform="rotate(-25 16 16)" fill="${c.primary}">
          <path d="M5 21C2 18 2 14 5 11s12-7 18-3 7 12 3 18-18 2-21-5z" />
          <path d="M23 8c3-3 6-3 8-1s0 5-4 4z" />
        </g>`;
      }

      return `${badge}<g transform="rotate(-25 16 16)">
        <!-- Oval Lime with Pointed Ends -->
        <path d="M5 21C2 18 2 14 5 11s12-7 18-3 7 12 3 18-18 2-21-5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Glossy highlight -->
        <ellipse cx="12" cy="11" rx="2" ry="5" transform="rotate(-30 12 11)" fill="#FFFFFF" opacity="0.28" />
        <!-- Green leaf at top tip -->
        <path d="M23 8c3-3 6-3 8-1s0 5-4 4z" fill="${d ? c.secondary : '#16A34A'}" stroke="${d ? c.stroke : '#14532D'}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 14. Brown Mushroom (U+1F344 U+200D U+1F7EB) — built directly on mushroom geometry
  {
    id: 'brown-mushroom',
    char: '🍄‍🟫',
    name: 'Brown Mushroom',
    unicodeHex: 'U+1F344 U+200D U+1F7EB',
    category: 'food-drink',
    tags: ['brown mushroom', 'mushroom', 'fungus', 'cremini', 'portobello', 'shiitake', 'food', '🍄‍🟫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', fillSecondary: '#FEF3C7', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M13 18v7c0 2 2 3 3 3s3-1 3-3v-7" />
          <path d="M4 18c0-8 6-13 12-13s12 5 12 13H4z" />
          <path d="M11 10.5c1.8-1.5 3.6-2 5-2" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}">
          <path d="M13 17v7c0 2 1.5 3 3 3s3-1 3-3v-7z" />
          <path d="M4 18c0-8 5.5-13 12-13s12 5 12 13H4z" />
          <path d="M6 18 H26" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      return `${badge}<g>
        <!-- Stem -->
        <path d="M13 17v7c0 2 1.5 3 3 3s3-1 3-3v-7z" fill="${c.secondary}" stroke="${d ? c.stroke : '#B45309'}" stroke-width="1.05" />
        <!-- Gill Shadow under Cap -->
        <ellipse cx="16" cy="18" rx="11.5" ry="1.8" fill="${d ? c.secondary : '#D97706'}" opacity="0.55" />
        <!-- Brown Cap -->
        <path d="M4 18c0-8 5.5-13 12-13s12 5 12 13H4z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Soft organic cap highlights -->
        <path d="M8.5 11.8 C10.6 8.8 13.6 7.8 16.4 7.8" fill="none" stroke="${d ? c.secondary : '#FDE68A'}" stroke-width="1.3" stroke-linecap="round" opacity="0.38" />
        <ellipse cx="20.8" cy="11.6" rx="1.6" ry="0.9" transform="rotate(24 20.8 11.6)" fill="${d ? c.secondary : '#FDE68A'}" opacity="0.28" />
      </g>`;
    },
  },

  // 15. Rainbow Flag (U+1F3F3 U+FE0F U+200D U+1F308)
  {
    id: 'rainbow-flag',
    char: '🏳️‍🌈',
    name: 'Rainbow Flag',
    unicodeHex: 'U+1F3F3 U+FE0F U+200D U+1F308',
    category: 'flags',
    tags: ['rainbow flag', 'pride', 'lgbtq', 'rainbow', 'flag', '🏳️‍🌈'],
    renderContent: (opts) =>
      renderStripedFlag(opts, 'wimoji-rainbow-flag-clip', [
        '#EF4444',
        '#F97316',
        '#FACC15',
        '#22C55E',
        '#3B82F6',
        '#A855F7',
      ]),
  },

  // 16. Transgender Flag (U+1F3F3 U+FE0F U+200D U+26A7 U+FE0F)
  {
    id: 'transgender-flag',
    char: '🏳️‍⚧️',
    name: 'Transgender Flag',
    unicodeHex: 'U+1F3F3 U+FE0F U+200D U+26A7 U+FE0F',
    category: 'flags',
    tags: ['transgender flag', 'trans', 'pride', 'lgbtq', 'flag', '🏳️‍⚧️'],
    renderContent: (opts) =>
      renderStripedFlag(opts, 'wimoji-trans-flag-clip', [
        '#38BDF8',
        '#F472B6',
        '#F8FAFC',
        '#F472B6',
        '#38BDF8',
      ]),
  },

  // 17. Pirate Flag (U+1F3F4 U+200D U+2620 U+FE0F)
  {
    id: 'pirate-flag',
    char: '🏴‍☠️',
    name: 'Pirate Flag',
    unicodeHex: 'U+1F3F4 U+200D U+2620 U+FE0F',
    category: 'flags',
    tags: ['pirate flag', 'jolly roger', 'pirate', 'skull and crossbones', 'flag', '🏴‍☠️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const waveCloth = 'M7 6 C12 4 17 8 25 6 V18.5 C17 20.5 12 16.5 7 18.5 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="7" y1="4" x2="7" y2="28" />
          <circle cx="7" cy="4" r="1.3" />
          <path d="${waveCloth}" />
          <!-- Skull & Crossbones -->
          <circle cx="16" cy="11.2" r="2.2" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="M13 15.6 L19 12.8 M13 12.8 L19 15.6" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="4" x2="7" y2="28" stroke="${c.primary}" stroke-width="2.4" />
          <circle cx="7" cy="4" r="1.5" fill="${c.primary}" />
          <path d="${waveCloth}" fill="${c.primary}" />
          <!-- White Skull & Crossbones -->
          <path d="M12.4 15.8 L19.6 12.6 M12.4 12.6 L19.6 15.8" stroke="#FFFFFF" stroke-width="1.3" />
          <circle cx="16" cy="11.0" r="2.2" fill="#FFFFFF" />
          <rect x="14.9" y="12.2" width="2.2" height="1.5" rx="0.4" fill="#FFFFFF" />
          <circle cx="15.2" cy="10.9" r="0.45" fill="${c.primary}" />
          <circle cx="16.8" cy="10.9" r="0.45" fill="${c.primary}" />
        </g>`;
      }

      const skull = d ? c.secondary : '#FFFFFF';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="4" x2="7" y2="28" stroke="${d ? c.stroke : '#64748B'}" stroke-width="2.5" />
        <circle cx="7" cy="4" r="1.5" fill="${d ? c.secondary : '#FBBF24'}" />
        <path d="${waveCloth}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Crossbones -->
        <path d="M12.2 15.8 L19.8 12.4 M12.2 12.4 L19.8 15.8" stroke="${skull}" stroke-width="1.35" />
        <!-- Skull -->
        <circle cx="16" cy="11.0" r="2.3" fill="${skull}" />
        <rect x="14.8" y="12.3" width="2.4" height="1.6" rx="0.4" fill="${skull}" />
        <circle cx="15.1" cy="11.0" r="0.5" fill="${c.primary}" />
        <circle cx="16.9" cy="11.0" r="0.5" fill="${c.primary}" />
      </g>`;
    },
  },
];
