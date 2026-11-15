import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const notoFacesPart2Icons: WimojiIconDef[] = [
  // 1. Unamused Face (U+1F612)
  {
    id: 'unamused-face',
    char: '😒',
    name: 'Unamused Face',
    unicodeHex: 'U+1F612',
    category: 'faces-hands',
    tags: ['unamused', 'side eye', 'skeptical', 'annoyed', 'grumpy', 'unimpressed', 'bored', '😒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M7.4 8.8 C9 7.4 12 7.6 14 9.4" stroke-width="${sw}" />
          <path d="M18 9.4 C20 7.6 23 7.4 24.6 8.8" stroke-width="${sw}" />
          <path d="M14.4 14 C14 16.5 11.4 16.5 11.2 13.8 Z" fill="${c.stroke}" />
          <path d="M7.2 14.4 C9.2 12.4 12.8 12.4 15 14.2" stroke-width="${sw}" />
          <path d="M24.4 14 C24 16.5 21.4 16.5 21.2 13.8 Z" fill="${c.stroke}" />
          <path d="M17.2 14.4 C19.2 12.4 22.8 12.4 25 14.2" stroke-width="${sw}" />
          <path d="M12.4 23.2 C13 21.2 14.8 20.6 16 20.6 C17.2 20.6 19 21.2 19.6 23.2" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M7.4 8.8 C9 7.4 12 7.6 14 9.4" />
            <path d="M18 9.4 C20 7.6 23 7.4 24.6 8.8" />
            <path d="M14.4 14 C14 16.5 11.4 16.5 11.2 13.8 Z" fill="#FFFFFF" stroke="none" />
            <path d="M7.2 14.4 C9.2 12.4 12.8 12.4 15 14.2" />
            <path d="M24.4 14 C24 16.5 21.4 16.5 21.2 13.8 Z" fill="#FFFFFF" stroke="none" />
            <path d="M17.2 14.4 C19.2 12.4 22.8 12.4 25 14.2" />
            <path d="M12.4 23.2 C13 21.2 14.8 20.6 16 20.6 C17.2 20.6 19 21.2 19.6 23.2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M7.4 8.8 C9 7.4 12 7.6 14 9.4" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M18 9.4 C20 7.6 23 7.4 24.6 8.8" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M14.4 14 C14 16.5 11.4 16.5 11.2 13.8 Z" fill="${featureColor}" />
        <path d="M7.2 14.4 C9.2 12.4 12.8 12.4 15 14.2" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M24.4 14 C24 16.5 21.4 16.5 21.2 13.8 Z" fill="${featureColor}" />
        <path d="M17.2 14.4 C19.2 12.4 22.8 12.4 25 14.2" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M12.4 23.2 C13 21.2 14.8 20.6 16 20.6 C17.2 20.6 19 21.2 19.6 23.2" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // 2. Downcast Face with Sweat (U+1F613)
  {
    id: 'downcast-face-with-sweat',
    char: '😓',
    name: 'Downcast Face with Sweat',
    unicodeHex: 'U+1F613',
    category: 'faces-hands',
    tags: ['downcast', 'sweat', 'stressed', 'hard work', 'exhausted', 'sad', 'worried', '😓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9.5 14 C10.5 16 12.5 16 13.5 14" stroke-width="${sw}" />
          <path d="M18.5 14 C19.5 16 21.5 16 22.5 14" stroke-width="${sw}" />
          <path d="M6.5 7.5 C5.5 7.5 4.8 9 5.8 10.8 C7 12.5 8.2 11.5 8 9.8 C7.8 8.5 7.3 7.5 6.5 7.5 Z" />
          <path d="M12 21 C14 19.2 18 19.2 20 21" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 14 C10.5 16 12.5 16 13.5 14" />
            <path d="M18.5 14 C19.5 16 21.5 16 22.5 14" />
            <path d="M6.5 7.5 C5.5 7.5 4.8 9 5.8 10.8 C7 12.5 8.2 11.5 8 9.8 C7.8 8.5 7.3 7.5 6.5 7.5 Z" fill="#FFFFFF" stroke="none" />
            <path d="M12 21 C14 19.2 18 19.2 20 21" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const sweatColor = isDuotone ? c.secondary : '#38BDF8';
      const sweatStroke = isDuotone ? c.secondary : '#0284C7';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M6.5 7.5 C5.5 7.5 4.8 9 5.8 10.8 C7 12.5 8.2 11.5 8 9.8 C7.8 8.5 7.3 7.5 6.5 7.5 Z" fill="${sweatColor}" stroke="${sweatStroke}" stroke-width="0.6" />
        <path d="M9.5 14 C10.5 16 12.5 16 13.5 14" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 14 C19.5 16 21.5 16 22.5 14" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M12 21 C14 19.2 18 19.2 20 21" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 3. Pensive Face (U+1F614)
  {
    id: 'pensive-face',
    char: '😔',
    name: 'Pensive Face',
    unicodeHex: 'U+1F614',
    category: 'faces-hands',
    tags: ['pensive', 'sad', 'down', 'depressed', 'thoughtful', 'guilt', 'regret', 'gloomy', '😔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8 11.2 C9.8 10.4 12 9.2 14 8.4" stroke-width="${sw}" />
          <path d="M 24 11.2 C 22.2 10.4 20 9.2 18 8.4" stroke-width="${sw}" />
          <path d="M9 14.4 C10 16.6 12.8 16.8 14 14.8" stroke-width="${sw}" />
          <path d="M 23 14.4 C 22 16.6 19.2 16.8 18 14.8" stroke-width="${sw}" />
          <path d="M13.2 22 H18.8" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8 11.2 C9.8 10.4 12 9.2 14 8.4" />
            <path d="M 24 11.2 C 22.2 10.4 20 9.2 18 8.4" />
            <path d="M9 14.4 C10 16.6 12.8 16.8 14 14.8" />
            <path d="M 23 14.4 C 22 16.6 19.2 16.8 18 14.8" />
            <path d="M13.2 22 H18.8" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8 11.2 C9.8 10.4 12 9.2 14 8.4" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 24 11.2 C 22.2 10.4 20 9.2 18 8.4" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M9 14.4 C10 16.6 12.8 16.8 14 14.8" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23 14.4 C 22 16.6 19.2 16.8 18 14.8" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M13.2 22 H18.8" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // 4. Confounded Face (U+1F616)
  {
    id: 'confounded-face',
    char: '😖',
    name: 'Confounded Face',
    unicodeHex: 'U+1F616',
    category: 'faces-hands',
    tags: ['confounded', 'frustrated', 'quivering', 'scrunched', 'angry', 'upset', 'cringe', 'pain', '😖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.4 10.4 L13.4 13.4 L8.4 16.4" stroke-width="${sw}" />
          <path d="M 23.6 10.4 L 18.6 13.4 L 23.6 16.4" stroke-width="${sw}" />
          <path d="M9.2 22.2 C10.4 19.4 12.8 19.4 14.2 21.4 C15.4 23 16.6 23 17.8 21.4 C19.2 19.4 21.6 19.4 22.8 22.2" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.4 10.4 L13.4 13.4 L8.4 16.4" />
            <path d="M 23.6 10.4 L 18.6 13.4 L 23.6 16.4" />
            <path d="M9.2 22.2 C10.4 19.4 12.8 19.4 14.2 21.4 C15.4 23 16.6 23 17.8 21.4 C19.2 19.4 21.6 19.4 22.8 22.2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.4 10.4 L13.4 13.4 L8.4 16.4" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.6 10.4 L 18.6 13.4 L 23.6 16.4" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M9.2 22.2 C10.4 19.4 12.8 19.4 14.2 21.4 C15.4 23 16.6 23 17.8 21.4 C19.2 19.4 21.6 19.4 22.8 22.2" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // 5. Kissing Face (U+1F617)
  {
    id: 'kissing-face',
    char: '😗',
    name: 'Kissing Face',
    unicodeHex: 'U+1F617',
    category: 'faces-hands',
    tags: ['kissing', 'kiss', 'pucker', 'love', 'flirt', 'whistle', 'smooch', '😗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <ellipse cx="11.4" cy="12.8" rx="1.7" ry="2.3" fill="${c.stroke}" />
          <ellipse cx="20.6" cy="12.8" rx="1.7" ry="2.3" fill="${c.stroke}" />
          <path d="M14.6 17.8 C17.6 17 18.8 19 16.6 20.1 C19 21.1 17.8 23.6 14.6 22.4" stroke-width="${sw * 1.35}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <ellipse cx="11.4" cy="12.8" rx="1.7" ry="2.3" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.6" cy="12.8" rx="1.7" ry="2.3" fill="#FFFFFF" stroke="none" />
            <path d="M14.6 17.8 C17.6 17 18.8 19 16.6 20.1 C19 21.1 17.8 23.6 14.6 22.4" stroke-width="2.8" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.4" cy="12.8" rx="1.7" ry="2.3" fill="${featureColor}" />
        <ellipse cx="20.6" cy="12.8" rx="1.7" ry="2.3" fill="${featureColor}" />
        <circle cx="12" cy="12" r="0.6" fill="#FFFFFF" />
        <circle cx="21.2" cy="12" r="0.6" fill="#FFFFFF" />
        <path d="M14.6 17.8 C17.6 17 18.8 19 16.6 20.1 C19 21.1 17.8 23.6 14.6 22.4" stroke="${featureColor}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // 6. Face Blowing a Kiss (U+1F618)
  {
    id: 'face-blowing-a-kiss',
    char: '😘',
    name: 'Face Blowing a Kiss',
    unicodeHex: 'U+1F618',
    category: 'faces-hands',
    tags: ['kissing heart', 'blow kiss', 'love', 'flirt', 'affection', 'romance', 'sweetheart', 'kiss', '😘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.6 13.8 C9.6 11.2 12.8 11.2 13.8 13.8" stroke-width="${sw}" />
          <ellipse cx="20.6" cy="12.8" rx="1.7" ry="2.3" fill="${c.stroke}" />
          <path d="M13.2 18 C16.2 17.2 17.4 19.2 15.2 20.3 C17.6 21.3 16.4 23.8 13.2 22.6" stroke-width="${sw * 1.35}" />
          <path d="M0 4 C-5.4 0.4 -5.2 -4.6 -2.4 -4.4 C-1 -4.3 0 -3.4 0 -2.4 C0 -3.4 1 -4.3 2.4 -4.4 C5.2 -4.6 5.4 0.4 0 4 Z" transform="translate(24.2 18.4) rotate(14)" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.6 13.8 C9.6 11.2 12.8 11.2 13.8 13.8" />
            <ellipse cx="20.6" cy="12.8" rx="1.7" ry="2.3" fill="#FFFFFF" stroke="none" />
            <path d="M13.2 18 C16.2 17.2 17.4 19.2 15.2 20.3 C17.6 21.3 16.4 23.8 13.2 22.6" stroke-width="2.8" />
            <path d="M0 4 C-5.4 0.4 -5.2 -4.6 -2.4 -4.4 C-1 -4.3 0 -3.4 0 -2.4 C0 -3.4 1 -4.3 2.4 -4.4 C5.2 -4.6 5.4 0.4 0 4 Z" transform="translate(24.2 18.4) rotate(14)" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.6 13.8 C9.6 11.2 12.8 11.2 13.8 13.8" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <ellipse cx="20.6" cy="12.8" rx="1.7" ry="2.3" fill="${featureColor}" />
        <circle cx="21.2" cy="12" r="0.6" fill="#FFFFFF" />
        <path d="M13.2 18 C16.2 17.2 17.4 19.2 15.2 20.3 C17.6 21.3 16.4 23.8 13.2 22.6" stroke="${featureColor}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M0 4 C-5.4 0.4 -5.2 -4.6 -2.4 -4.4 C-1 -4.3 0 -3.4 0 -2.4 C0 -3.4 1 -4.3 2.4 -4.4 C5.2 -4.6 5.4 0.4 0 4 Z" transform="translate(24.2 18.4) rotate(14)" fill="${heartColor}" stroke="${heartStroke}" stroke-width="0.5" />
      </g>`;
    },
  },

  // 7. Kissing Face with Smiling Eyes (U+1F619)
  {
    id: 'kissing-face-with-smiling-eyes',
    char: '😙',
    name: 'Kissing Face with Smiling Eyes',
    unicodeHex: 'U+1F619',
    category: 'faces-hands',
    tags: ['kissing', 'smiling eyes', 'whistle', 'affection', 'sweet', 'cute', 'smooch', '😙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.8 14.2 C9.6 10.6 13.4 10.6 14.2 14.2" stroke-width="${sw}" />
          <path d="M 23.2 14.2 C 22.4 10.6 18.6 10.6 17.8 14.2" stroke-width="${sw}" />
          <path d="M14.6 17.8 C17.6 17 18.8 19 16.6 20.1 C19 21.1 17.8 23.6 14.6 22.4" stroke-width="${sw * 1.35}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.8 14.2 C9.6 10.6 13.4 10.6 14.2 14.2" />
            <path d="M 23.2 14.2 C 22.4 10.6 18.6 10.6 17.8 14.2" />
            <path d="M14.6 17.8 C17.6 17 18.8 19 16.6 20.1 C19 21.1 17.8 23.6 14.6 22.4" stroke-width="2.8" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.8 14.2 C9.6 10.6 13.4 10.6 14.2 14.2" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.2 14.2 C 22.4 10.6 18.6 10.6 17.8 14.2" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M14.6 17.8 C17.6 17 18.8 19 16.6 20.1 C19 21.1 17.8 23.6 14.6 22.4" stroke="${featureColor}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // 8. Kissing Face with Closed Eyes (U+1F61A)
  {
    id: 'kissing-face-with-closed-eyes',
    char: '😚',
    name: 'Kissing Face with Closed Eyes',
    unicodeHex: 'U+1F61A',
    category: 'faces-hands',
    tags: ['kissing', 'closed eyes', 'blush', 'kiss', 'affection', 'smooch', 'romantic', 'cute', '😚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.8 12.4 C9.6 15.4 13.2 15.4 14 12.4" stroke-width="${sw}" />
          <path d="M 23.2 12.4 C 22.4 15.4 18.8 15.4 18 12.4" stroke-width="${sw}" />
          <path d="M14.6 18.2 C17.6 17.4 18.8 19.4 16.6 20.5 C19 21.5 17.8 24 14.6 22.8" stroke-width="${sw * 1.35}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.8 12.4 C9.6 15.4 13.2 15.4 14 12.4" />
            <path d="M 23.2 12.4 C 22.4 15.4 18.8 15.4 18 12.4" />
            <path d="M14.6 18.2 C17.6 17.4 18.8 19.4 16.6 20.5 C19 21.5 17.8 24 14.6 22.8" stroke-width="2.8" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="8.2" cy="17.6" rx="2.4" ry="1.4" fill="${blushColor}" opacity="0.65" />
        <ellipse cx="23.8" cy="17.6" rx="2.4" ry="1.4" fill="${blushColor}" opacity="0.65" />
        <path d="M8.8 12.4 C9.6 15.4 13.2 15.4 14 12.4" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.2 12.4 C 22.4 15.4 18.8 15.4 18 12.4" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M14.6 18.2 C17.6 17.4 18.8 19.4 16.6 20.5 C19 21.5 17.8 24 14.6 22.8" stroke="${featureColor}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // 9. Face with Tongue (U+1F61B)
  {
    id: 'face-with-tongue',
    char: '😛',
    name: 'Face with Tongue',
    unicodeHex: 'U+1F61B',
    category: 'faces-hands',
    tags: ['tongue', 'playful', 'silly', 'cheeky', 'joke', 'blep', 'tongue out', '😛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <ellipse cx="11.5" cy="12.2" rx="1.7" ry="2.3" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12.2" rx="1.7" ry="2.3" fill="${c.stroke}" />
          <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M16 22.6 V26" stroke-width="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <ellipse cx="11.5" cy="12.2" rx="1.7" ry="2.3" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="12.2" rx="1.7" ry="2.3" fill="#FFFFFF" stroke="none" />
            <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" fill="#FFFFFF" stroke="none" />
            <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" fill="#FFFFFF" stroke="none" />
            <path d="M16 22.6 V26" stroke="${c.primary}" stroke-width="1.2" fill="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="12.2" rx="1.7" ry="2.3" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12.2" rx="1.7" ry="2.3" fill="${featureColor}" />
        <circle cx="12" cy="11.4" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="11.4" r="0.6" fill="#FFFFFF" />
        <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" fill="${featureColor}" />
        <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" fill="${tongueColor}" />
        <path d="M16 22.6 V26" stroke="${c.primary}" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 10. Winking Face with Tongue (U+1F61C)
  {
    id: 'winking-face-with-tongue',
    char: '😜',
    name: 'Winking Face with Tongue',
    unicodeHex: 'U+1F61C',
    category: 'faces-hands',
    tags: ['winking tongue', 'wacky', 'crazy', 'goofy', 'party', 'playful', 'joke', 'kidding', '😜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M7.6 12 C8.6 14.6 12.2 14.8 13.4 12.4" stroke-width="${sw}" />
          <circle cx="21.2" cy="12.4" r="3.9" stroke-width="${Math.max(1, sw * 0.8)}" />
          <circle cx="21.2" cy="12.4" r="1.6" fill="${c.stroke}" />
          <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M16 22.6 V26" stroke-width="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M7.6 12 C8.6 14.6 12.2 14.8 13.4 12.4" />
            <circle cx="21.2" cy="12.4" r="3.9" fill="#FFFFFF" stroke="none" />
            <circle cx="21.2" cy="12.4" r="1.6" fill="${c.primary}" stroke="none" />
            <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" fill="#FFFFFF" stroke="none" />
            <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" fill="#FFFFFF" stroke="none" />
            <path d="M16 22.6 V26" stroke="${c.primary}" stroke-width="1.2" fill="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M7.6 12 C8.6 14.6 12.2 14.8 13.4 12.4" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <circle cx="21.2" cy="12.4" r="3.9" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1" />
        <circle cx="21.2" cy="12.4" r="1.6" fill="${featureColor}" />
        <circle cx="21.8" cy="11.7" r="0.5" fill="#FFFFFF" />
        <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" fill="${featureColor}" />
        <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" fill="${tongueColor}" />
        <path d="M16 22.6 V26" stroke="${c.primary}" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 11. Squinting Face with Tongue (U+1F61D)
  {
    id: 'squinting-face-with-tongue',
    char: '😝',
    name: 'Squinting Face with Tongue',
    unicodeHex: 'U+1F61D',
    category: 'faces-hands',
    tags: ['squinting tongue', 'playful', 'silly', 'mocking', 'prank', 'lol', 'wild', '😝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.4 10.6 L13.6 13.4 L8.4 16.2" stroke-width="${sw}" />
          <path d="M 23.6 10.6 L 18.4 13.4 L 23.6 16.2" stroke-width="${sw}" />
          <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M16 22.6 V26" stroke-width="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.4 10.6 L13.6 13.4 L8.4 16.2" />
            <path d="M 23.6 10.6 L 18.4 13.4 L 23.6 16.2" />
            <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" fill="#FFFFFF" stroke="none" />
            <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" fill="#FFFFFF" stroke="none" />
            <path d="M16 22.6 V26" stroke="${c.primary}" stroke-width="1.2" fill="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.4 10.6 L13.6 13.4 L8.4 16.2" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.6 10.6 L 18.4 13.4 L 23.6 16.2" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M8.6 17 C12 18.2 20 18.2 23.4 17 C23.4 22.4 19.6 24.6 16 24.6 C12.4 24.6 8.6 22.4 8.6 17 Z" fill="${featureColor}" />
        <path d="M12.4 21.4 C13.4 20 18.6 20 19.6 21.4 L19.8 26 C19.8 29.2 12.2 29.2 12.2 26 Z" fill="${tongueColor}" />
        <path d="M16 22.6 V26" stroke="${c.primary}" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 12. Disappointed Face (U+1F61E)
  {
    id: 'disappointed-face',
    char: '😞',
    name: 'Disappointed Face',
    unicodeHex: 'U+1F61E',
    category: 'faces-hands',
    tags: ['disappointed', 'sad', 'bummed', 'unhappy', 'frown', 'regret', 'let down', 'gloom', '😞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9.5 14.5 C10.5 16.5 12.5 16.5 13.5 14.5" stroke-width="${sw}" />
          <path d="M18.5 14.5 C19.5 16.5 21.5 16.5 22.5 14.5" stroke-width="${sw}" />
          <path d="M10.5 22 C12 18.5 20 18.5 21.5 22" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 14.5 C10.5 16.5 12.5 16.5 13.5 14.5" />
            <path d="M18.5 14.5 C19.5 16.5 21.5 16.5 22.5 14.5" />
            <path d="M10.5 22 C12 18.5 20 18.5 21.5 22" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9.5 14.5 C10.5 16.5 12.5 16.5 13.5 14.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 14.5 C19.5 16.5 21.5 16.5 22.5 14.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M10.5 22 C12 18.5 20 18.5 21.5 22" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 13. Worried Face (U+1F61F)
  {
    id: 'worried-face',
    char: '😟',
    name: 'Worried Face',
    unicodeHex: 'U+1F61F',
    category: 'faces-hands',
    tags: ['worried', 'nervous', 'anxious', 'concerned', 'fretful', 'fear', 'distressed', 'scared', '😟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9 10 C10.5 8.5 13 9 14 10.5" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M23 10 C21.5 8.5 19 9 18 10.5" stroke-width="${Math.max(1, sw * 0.7)}" />
          <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11.5 21.5 C13 19 19 19 20.5 21.5" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#FFFFFF" stroke-linecap="round">
            <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2.2" stroke="none" />
            <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2.2" stroke="none" />
            <path d="M11.5 21.5 C13 19 19 19 20.5 21.5" stroke-width="2.2" fill="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9 10 C10.5 8.5 13 9 14 10.5" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <path d="M23 10 C21.5 8.5 19 9 18 10.5" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="12.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.8" r="0.6" fill="#FFFFFF" />
        <path d="M11.5 21.5 C13 19 19 19 20.5 21.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 14. Angry Face (U+1F620)
  {
    id: 'angry-face',
    char: '😠',
    name: 'Angry Face',
    unicodeHex: 'U+1F620',
    category: 'faces-hands',
    tags: ['angry', 'mad', 'grumpy', 'furious', 'annoyed', 'scowl', 'stern', '😠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <line x1="8.5" y1="10.5" x2="14" y2="13.5" stroke-width="${sw + 0.3}" />
          <line x1="23.5" y1="10.5" x2="18" y2="13.5" stroke-width="${sw + 0.3}" />
          <ellipse cx="11.5" cy="14" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11 21.5 C13 18.5 19 18.5 21 21.5" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#FFFFFF" stroke-linecap="round">
            <line x1="8.5" y1="10.5" x2="14" y2="13.5" stroke-width="2.2" />
            <line x1="23.5" y1="10.5" x2="18" y2="13.5" stroke-width="2.2" />
            <ellipse cx="11.5" cy="14" rx="1.6" ry="2.2" stroke="none" />
            <ellipse cx="20.5" cy="14" rx="1.6" ry="2.2" stroke="none" />
            <path d="M11 21.5 C13 18.5 19 18.5 21 21.5" stroke-width="2.2" fill="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <line x1="8.5" y1="10.5" x2="14" y2="13.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="23.5" y1="10.5" x2="18" y2="13.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" />
        <ellipse cx="11.5" cy="14" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="14" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="13.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="13.2" r="0.6" fill="#FFFFFF" />
        <path d="M11 21.5 C13 18.5 19 18.5 21 21.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 15. Pouting Face / Enraged Face (U+1F621)
  {
    id: 'pouting-face',
    char: '😡',
    name: 'Pouting Face',
    unicodeHex: 'U+1F621',
    category: 'faces-hands',
    tags: ['pouting', 'rage', 'enraged', 'furious', 'red face', 'hate', 'fuming', 'mad', '😡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#1E1B4B', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <line x1="8" y1="10" x2="14" y2="13.5" stroke-width="${sw + 0.4}" />
          <line x1="24" y1="10" x2="18" y2="13.5" stroke-width="${sw + 0.4}" />
          <ellipse cx="11.5" cy="14.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M10.5 22.5 C13 18.5 19 18.5 21.5 22.5" stroke-width="${sw + 0.2}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#FFFFFF" stroke-linecap="round">
            <line x1="8" y1="10" x2="14" y2="13.5" stroke-width="2.2" />
            <line x1="24" y1="10" x2="18" y2="13.5" stroke-width="2.2" />
            <ellipse cx="11.5" cy="14.5" rx="1.6" ry="2.2" stroke="none" />
            <ellipse cx="20.5" cy="14.5" rx="1.6" ry="2.2" stroke="none" />
            <path d="M10.5 22.5 C13 18.5 19 18.5 21.5 22.5" stroke-width="2.2" fill="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#1E1B4B';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${isDuotone ? c.secondary : '#FCA5A5'}" />
        <line x1="8" y1="10" x2="14" y2="13.5" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" />
        <line x1="24" y1="10" x2="18" y2="13.5" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" />
        <ellipse cx="11.5" cy="14.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="14.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="13.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="13.8" r="0.6" fill="#FFFFFF" />
        <path d="M10.5 22.5 C13 18.5 19 18.5 21.5 22.5" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 16. Crying Face (U+1F622)
  {
    id: 'crying-face',
    char: '😢',
    name: 'Crying Face',
    unicodeHex: 'U+1F622',
    category: 'faces-hands',
    tags: ['crying', 'tear', 'sad', 'heartbroken', 'sorrow', 'weep', 'unhappy', 'emotional', '😢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const tearD = 'M7.5 15 C6.5 15 5.5 16.8 6.5 19 C7.5 20.8 9 19.8 8.8 17.5 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9 10.5 C10.5 9 13 9.5 14 11" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M23 10.5 C21.5 9 19 9.5 18 11" stroke-width="${Math.max(1, sw * 0.7)}" />
          <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="${tearD}" />
          <path d="M11.5 21.5 C13 19.2 19 19.2 20.5 21.5" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#FFFFFF" stroke-linecap="round">
            <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2.2" stroke="none" />
            <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2.2" stroke="none" />
            <path d="${tearD}" stroke="none" />
            <path d="M11.5 21.5 C13 19.2 19 19.2 20.5 21.5" stroke-width="2.2" fill="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9 10.5 C10.5 9 13 9.5 14 11" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <path d="M23 10.5 C21.5 9 19 9.5 18 11" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="12.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.8" r="0.6" fill="#FFFFFF" />
        <path d="${tearD}" fill="${tearColor}" stroke="${tearStroke}" stroke-width="0.6" />
        <path d="M11.5 21.5 C13 19.2 19 19.2 20.5 21.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 17. Persevering Face (U+1F623)
  {
    id: 'persevering-face',
    char: '😣',
    name: 'Persevering Face',
    unicodeHex: 'U+1F623',
    category: 'faces-hands',
    tags: ['persevering', 'struggling', 'endure', 'trying', 'tense', 'strain', 'determined', '😣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9.5 11.5 L13 13.5 L9.5 15.5" stroke-width="${sw}" />
          <path d="M22.5 11.5 L19 13.5 L22.5 15.5" stroke-width="${sw}" />
          <path d="M11 22.5 C13 19 19 19 21 22.5" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M9.5 11.5 L13 13.5 L9.5 15.5" />
            <path d="M22.5 11.5 L19 13.5 L22.5 15.5" />
            <path d="M11 22.5 C13 19 19 19 21 22.5" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9 10 L13 11" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" />
        <path d="M23 10 L19 11" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" />
        <path d="M9.5 11.5 L13 13.5 L9.5 15.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M22.5 11.5 L19 13.5 L22.5 15.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M11 22.5 C13 19 19 19 21 22.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 18. Face with Steam from Nose (U+1F624)
  {
    id: 'face-with-steam-from-nose',
    char: '😤',
    name: 'Face with Steam from Nose',
    unicodeHex: 'U+1F624',
    category: 'faces-hands',
    tags: ['steam from nose', 'triumph', 'pride', 'fuming', 'angry', 'huffing', 'snort', 'smug', '😤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.4 9.4 L14 12.2" stroke-width="${sw}" />
          <path d="M 23.6 9.4 L 18 12.2" stroke-width="${sw}" />
          <path d="M9 14.4 C10 16.8 13 16.8 14 14.4" stroke-width="${sw}" />
          <path d="M 23 14.4 C 22 16.8 19 16.8 18 14.4" stroke-width="${sw}" />
          <path d="M13 24.6 C14.4 23 17.6 23 19 24.6" stroke-width="${sw}" />
          <path d="M-3 1.8 C-4.6 1.6 -4.8 -0.8 -3 -1.2 C-3 -3 -0.8 -3.4 0.2 -2.2 C1.4 -3.4 3.6 -2.6 3.4 -0.8 C5 -0.4 4.8 1.8 3 1.8 Z" transform="translate(8.2 20.6) scale(1.05)" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M-3 1.8 C-4.6 1.6 -4.8 -0.8 -3 -1.2 C-3 -3 -0.8 -3.4 0.2 -2.2 C1.4 -3.4 3.6 -2.6 3.4 -0.8 C5 -0.4 4.8 1.8 3 1.8 Z" transform="translate(23.8 20.6) scale(-1.05 1.05)" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.4 9.4 L14 12.2" />
            <path d="M 23.6 9.4 L 18 12.2" />
            <path d="M9 14.4 C10 16.8 13 16.8 14 14.4" />
            <path d="M 23 14.4 C 22 16.8 19 16.8 18 14.4" />
            <path d="M13 24.6 C14.4 23 17.6 23 19 24.6" />
            <path d="M-3 1.8 C-4.6 1.6 -4.8 -0.8 -3 -1.2 C-3 -3 -0.8 -3.4 0.2 -2.2 C1.4 -3.4 3.6 -2.6 3.4 -0.8 C5 -0.4 4.8 1.8 3 1.8 Z" transform="translate(8.2 20.6) scale(1.05)" fill="#FFFFFF" stroke="none" />
            <path d="M-3 1.8 C-4.6 1.6 -4.8 -0.8 -3 -1.2 C-3 -3 -0.8 -3.4 0.2 -2.2 C1.4 -3.4 3.6 -2.6 3.4 -0.8 C5 -0.4 4.8 1.8 3 1.8 Z" transform="translate(23.8 20.6) scale(-1.05 1.05)" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.4 9.4 L14 12.2" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.6 9.4 L 18 12.2" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M9 14.4 C10 16.8 13 16.8 14 14.4" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23 14.4 C 22 16.8 19 16.8 18 14.4" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M13 24.6 C14.4 23 17.6 23 19 24.6" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M-3 1.8 C-4.6 1.6 -4.8 -0.8 -3 -1.2 C-3 -3 -0.8 -3.4 0.2 -2.2 C1.4 -3.4 3.6 -2.6 3.4 -0.8 C5 -0.4 4.8 1.8 3 1.8 Z" transform="translate(8.2 20.6) scale(1.05)" fill="${steamFill}" stroke="${steamStroke}" stroke-width="0.8" />
        <path d="M-3 1.8 C-4.6 1.6 -4.8 -0.8 -3 -1.2 C-3 -3 -0.8 -3.4 0.2 -2.2 C1.4 -3.4 3.6 -2.6 3.4 -0.8 C5 -0.4 4.8 1.8 3 1.8 Z" transform="translate(23.8 20.6) scale(-1.05 1.05)" fill="${steamFill}" stroke="${steamStroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 19. Sad but Relieved Face (U+1F625)
  {
    id: 'sad-but-relieved-face',
    char: '😥',
    name: 'Sad but Relieved Face',
    unicodeHex: 'U+1F625',
    category: 'faces-hands',
    tags: ['sad relieved', 'disappointed relieved', 'phew', 'sweat', 'anxious', 'close call', 'stress', '😥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8 11.6 C9.8 10.8 12 9.6 14 8.4" stroke-width="${sw}" />
          <path d="M 24 11.6 C 22.2 10.8 20 9.6 18 8.4" stroke-width="${sw}" />
          <ellipse cx="11.5" cy="13.6" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13.6" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M12.8 22.6 C13.6 20.8 14.8 20.2 16 20.2 C17.2 20.2 18.4 20.8 19.2 22.6" stroke-width="${sw}" />
          <path d="M8.4 16.6 C9.4 19 12 20.8 12 23.8 C12 26.2 10.4 27.8 8.4 27.8 C6.4 27.8 4.8 26.2 4.8 23.8 C4.8 20.8 7.4 19 8.4 16.6 Z" transform="translate(-1.2 0.2)" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8 11.6 C9.8 10.8 12 9.6 14 8.4" />
            <path d="M 24 11.6 C 22.2 10.8 20 9.6 18 8.4" />
            <ellipse cx="11.5" cy="13.6" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="13.6" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <path d="M12.8 22.6 C13.6 20.8 14.8 20.2 16 20.2 C17.2 20.2 18.4 20.8 19.2 22.6" />
            <path d="M8.4 16.6 C9.4 19 12 20.8 12 23.8 C12 26.2 10.4 27.8 8.4 27.8 C6.4 27.8 4.8 26.2 4.8 23.8 C4.8 20.8 7.4 19 8.4 16.6 Z" transform="translate(-1.2 0.2)" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8 11.6 C9.8 10.8 12 9.6 14 8.4" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 24 11.6 C 22.2 10.8 20 9.6 18 8.4" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <ellipse cx="11.5" cy="13.6" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.6" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="12.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.8" r="0.6" fill="#FFFFFF" />
        <path d="M12.8 22.6 C13.6 20.8 14.8 20.2 16 20.2 C17.2 20.2 18.4 20.8 19.2 22.6" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M8.4 16.6 C9.4 19 12 20.8 12 23.8 C12 26.2 10.4 27.8 8.4 27.8 C6.4 27.8 4.8 26.2 4.8 23.8 C4.8 20.8 7.4 19 8.4 16.6 Z" transform="translate(-1.2 0.2)" fill="${tearColor}" stroke="${tearStroke}" stroke-width="0.6" />
        <ellipse cx="6" cy="24.6" rx="0.8" ry="1.5" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 20. Frowning Face with Open Mouth (U+1F626)
  {
    id: 'frowning-face-with-open-mouth',
    char: '😦',
    name: 'Frowning Face with Open Mouth',
    unicodeHex: 'U+1F626',
    category: 'faces-hands',
    tags: ['frowning open mouth', 'shocked', 'stunned', 'gasp', 'frown', 'open mouth', 'aww', '😦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const mouthD = 'M11.5 22.5 C11.5 18 20.5 18 20.5 22.5 C18 21 14 21 11.5 22.5 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="${mouthD}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF">
            <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" />
            <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" />
            <path d="${mouthD}" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="11.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="11.8" r="0.6" fill="#FFFFFF" />
        <path d="${mouthD}" fill="${featureColor}" />
      </g>`;
    },
  },

  // 21. Anguished Face (U+1F627)
  {
    id: 'anguished-face',
    char: '😧',
    name: 'Anguished Face',
    unicodeHex: 'U+1F627',
    category: 'faces-hands',
    tags: ['anguished', 'stunned', 'gasp', 'shocked', 'worried', 'dismay', 'horrified', '😧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.4 10.4 C10 9.8 12 8.8 13.8 7.6" stroke-width="${sw}" />
          <path d="M 23.6 10.4 C 22 9.8 20 8.8 18.2 7.6" stroke-width="${sw}" />
          <ellipse cx="11.5" cy="12.8" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12.8" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11.5 22.8 C11.5 18 20.5 18 20.5 22.8 C18 21.2 14 21.2 11.5 22.8 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.4 10.4 C10 9.8 12 8.8 13.8 7.6" />
            <path d="M 23.6 10.4 C 22 9.8 20 8.8 18.2 7.6" />
            <ellipse cx="11.5" cy="12.8" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="12.8" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <path d="M11.5 22.8 C11.5 18 20.5 18 20.5 22.8 C18 21.2 14 21.2 11.5 22.8 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.4 10.4 C10 9.8 12 8.8 13.8 7.6" stroke="${featureColor}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.6 10.4 C 22 9.8 20 8.8 18.2 7.6" stroke="${featureColor}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <ellipse cx="11.5" cy="12.8" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12.8" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="12" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12" r="0.6" fill="#FFFFFF" />
        <path d="M11.5 22.8 C11.5 18 20.5 18 20.5 22.8 C18 21.2 14 21.2 11.5 22.8 Z" fill="${featureColor}" />
      </g>`;
    },
  },

  // 22. Fearful Face (U+1F628)
  {
    id: 'fearful-face',
    char: '😨',
    name: 'Fearful Face',
    unicodeHex: 'U+1F628',
    category: 'faces-hands',
    tags: ['fearful', 'scared', 'terrified', 'frightened', 'afraid', 'panicked', 'horror', 'shocked', '😨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const mouthD = 'M11.5 22.5 C11.5 18 20.5 18 20.5 22.5 C18 21 14 21 11.5 22.5 Z';
      const foreheadD = 'M 4.54 11 A 12.5 12.5 0 0 1 27.46 11 C 22 12.5 10 12.5 4.54 11 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M 4.54 11 C 10 12.5 22 12.5 27.46 11" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M9 9.5 C10.5 8 13 8.5 14 10" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M23 9.5 C21.5 8 19 8.5 18 10" stroke-width="${Math.max(1, sw * 0.7)}" />
          <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="${mouthD}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#FFFFFF" stroke-linecap="round">
            <path d="M 4.54 11 C 10 12.5 22 12.5 27.46 11" stroke-width="1.2" fill="none" />
            <path d="M9 9.5 C10.5 8 13 8.5 14 10" stroke-width="1.2" fill="none" />
            <path d="M23 9.5 C21.5 8 19 8.5 18 10" stroke-width="1.2" fill="none" />
            <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" stroke="none" />
            <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" stroke="none" />
            <path d="${mouthD}" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <!-- Fear smooth blue forehead dome wash -->
        <path d="${foreheadD}" fill="${fearGlow}" opacity="0.65" />
        <path d="M9 9.5 C10.5 8 13 8.5 14 10" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <path d="M23 9.5 C21.5 8 19 8.5 18 10" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="11.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="11.8" r="0.6" fill="#FFFFFF" />
        <path d="${mouthD}" fill="${featureColor}" />
      </g>`;
    },
  },

  // 23. Weary Face (U+1F629)
  {
    id: 'weary-face',
    char: '😩',
    name: 'Weary Face',
    unicodeHex: 'U+1F629',
    category: 'faces-hands',
    tags: ['weary', 'tired', 'giving up', 'exhausted', 'whining', 'sad', 'groan', 'weary face', '😩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M7.8 11 C9.6 10.4 12 9.2 14 7.8" stroke-width="${sw}" />
          <path d="M 24.2 11 C 22.4 10.4 20 9.2 18 7.8" stroke-width="${sw}" />
          <path d="M9.5 14.5 C10.5 16.5 12.5 16.5 13.5 14.5" stroke-width="${sw}" />
          <path d="M 22.5 14.5 C 21.5 16.5 19.5 16.5 18.5 14.5" stroke-width="${sw}" />
          <path d="M9.4 26 C9.8 16.8 22.2 16.8 22.6 26 C19.8 24 12.2 24 9.4 26 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M10.8 21.2 C12.4 18.6 19.6 18.6 21.2 21.2 L20.8 22.8 C18.8 21.6 13.2 21.6 11.2 22.8 Z" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M7.8 11 C9.6 10.4 12 9.2 14 7.8" />
            <path d="M 24.2 11 C 22.4 10.4 20 9.2 18 7.8" />
            <path d="M9.5 14.5 C10.5 16.5 12.5 16.5 13.5 14.5" />
            <path d="M 22.5 14.5 C 21.5 16.5 19.5 16.5 18.5 14.5" />
            <path d="M9.4 26 C9.8 16.8 22.2 16.8 22.6 26 C19.8 24 12.2 24 9.4 26 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M7.8 11 C9.6 10.4 12 9.2 14 7.8" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 24.2 11 C 22.4 10.4 20 9.2 18 7.8" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M9.5 14.5 C10.5 16.5 12.5 16.5 13.5 14.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 22.5 14.5 C 21.5 16.5 19.5 16.5 18.5 14.5" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M9.4 26 C9.8 16.8 22.2 16.8 22.6 26 C19.8 24 12.2 24 9.4 26 Z" fill="${featureColor}" />
        <path d="M10.8 21.2 C12.4 18.6 19.6 18.6 21.2 21.2 L20.8 22.8 C18.8 21.6 13.2 21.6 11.2 22.8 Z" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 24. Sleepy Face (U+1F62A)
  {
    id: 'sleepy-face',
    char: '😪',
    name: 'Sleepy Face',
    unicodeHex: 'U+1F62A',
    category: 'faces-hands',
    tags: ['sleepy', 'snot bubble', 'tired', 'drowsy', 'sleeping', 'nap', 'bedtime', 'snooze', 'rest', '😪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.4 11.6 C10 11 12 10 13.8 8.8" stroke-width="${sw}" />
          <path d="M 23.6 11.6 C 22 11 20 10 18.2 8.8" stroke-width="${sw}" />
          <path d="M9 14.6 C10 16.8 12.8 17 14 15" stroke-width="${sw}" />
          <path d="M 23 14.6 C 22 16.8 19.2 17 18 15" stroke-width="${sw}" />
          <path d="M10.6 22.4 C11.6 21.4 12.8 23 13.8 22.2 C14.6 21.6 15.2 22 16 22.4" stroke-width="${sw}" />
          <path d="M20 21.4 C22.2 19 27 20.4 28 24.2 C28.6 27.6 25.2 29.2 22.6 28.2 C19.8 27 18.8 22.8 20 21.4 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.4 11.6 C10 11 12 10 13.8 8.8" />
            <path d="M 23.6 11.6 C 22 11 20 10 18.2 8.8" />
            <path d="M9 14.6 C10 16.8 12.8 17 14 15" />
            <path d="M 23 14.6 C 22 16.8 19.2 17 18 15" />
            <path d="M10.6 22.4 C11.6 21.4 12.8 23 13.8 22.2 C14.6 21.6 15.2 22 16 22.4" />
            <path d="M20 21.4 C22.2 19 27 20.4 28 24.2 C28.6 27.6 25.2 29.2 22.6 28.2 C19.8 27 18.8 22.8 20 21.4 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.4 11.6 C10 11 12 10 13.8 8.8" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.6 11.6 C 22 11 20 10 18.2 8.8" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M9 14.6 C10 16.8 12.8 17 14 15" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23 14.6 C 22 16.8 19.2 17 18 15" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M10.6 22.4 C11.6 21.4 12.8 23 13.8 22.2 C14.6 21.6 15.2 22 16 22.4" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M20 21.4 C22.2 19 27 20.4 28 24.2 C28.6 27.6 25.2 29.2 22.6 28.2 C19.8 27 18.8 22.8 20 21.4 Z" fill="${tearColor}" stroke="${tearStroke}" stroke-width="0.6" />
        <ellipse cx="22.6" cy="24" rx="1.1" ry="1.8" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 25. Tired Face (U+1F62B)
  {
    id: 'tired-face',
    char: '😫',
    name: 'Tired Face',
    unicodeHex: 'U+1F62B',
    category: 'faces-hands',
    tags: ['tired', 'wailing', 'frustrated', 'upset', 'screaming', 'done', 'whining', 'exhausted', '😫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8 8.4 C9.8 8 12 7.4 13.8 6.4" stroke-width="${sw}" />
          <path d="M 24 8.4 C 22.2 8 20 7.4 18.2 6.4" stroke-width="${sw}" />
          <path d="M8.4 11.8 L13.6 14.6 L8.4 17.4" stroke-width="${sw}" />
          <path d="M 23.6 11.8 L 18.4 14.6 L 23.6 17.4" stroke-width="${sw}" />
          <path d="M9.4 26 C9.8 16.8 22.2 16.8 22.6 26 C19.8 24 12.2 24 9.4 26 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M10.8 21.2 C12.4 18.6 19.6 18.6 21.2 21.2 L20.8 22.8 C18.8 21.6 13.2 21.6 11.2 22.8 Z" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8 8.4 C9.8 8 12 7.4 13.8 6.4" />
            <path d="M 24 8.4 C 22.2 8 20 7.4 18.2 6.4" />
            <path d="M8.4 11.8 L13.6 14.6 L8.4 17.4" />
            <path d="M 23.6 11.8 L 18.4 14.6 L 23.6 17.4" />
            <path d="M9.4 26 C9.8 16.8 22.2 16.8 22.6 26 C19.8 24 12.2 24 9.4 26 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8 8.4 C9.8 8 12 7.4 13.8 6.4" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 24 8.4 C 22.2 8 20 7.4 18.2 6.4" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M8.4 11.8 L13.6 14.6 L8.4 17.4" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.6 11.8 L 18.4 14.6 L 23.6 17.4" stroke="${featureColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M9.4 26 C9.8 16.8 22.2 16.8 22.6 26 C19.8 24 12.2 24 9.4 26 Z" fill="${featureColor}" />
        <path d="M10.8 21.2 C12.4 18.6 19.6 18.6 21.2 21.2 L20.8 22.8 C18.8 21.6 13.2 21.6 11.2 22.8 Z" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 26. Grimacing Face (U+1F62C)
  {
    id: 'grimacing-face',
    char: '😬',
    name: 'Grimacing Face',
    unicodeHex: 'U+1F62C',
    category: 'faces-hands',
    tags: ['grimacing', 'grimace', 'awkward', 'cringe', 'eek', 'nervous', 'yikes', 'teeth', 'tense', '😬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <ellipse cx="11.5" cy="12" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <rect x="9" y="16.5" width="14" height="6.5" rx="3.2" stroke-width="${sw}" />
          <line x1="9.5" y1="19.75" x2="22.5" y2="19.75" stroke-width="${Math.max(1, sw * 0.7)}" />
          <line x1="12.5" y1="16.8" x2="12.5" y2="22.8" stroke-width="${Math.max(1, sw * 0.7)}" />
          <line x1="16" y1="16.8" x2="16" y2="22.8" stroke-width="${Math.max(1, sw * 0.7)}" />
          <line x1="19.5" y1="16.8" x2="19.5" y2="22.8" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#37474F" stroke-linecap="round">
            <ellipse cx="11.5" cy="12" rx="1.6" ry="2.2" stroke="none" fill="#FFFFFF" />
            <ellipse cx="20.5" cy="12" rx="1.6" ry="2.2" stroke="none" fill="#FFFFFF" />
            <rect x="9" y="16.5" width="14" height="6.5" rx="3.2" fill="#FFFFFF" stroke="none" />
            <line x1="9.5" y1="19.75" x2="22.5" y2="19.75" stroke="${c.primary}" stroke-width="1.2" />
            <line x1="12.5" y1="16.8" x2="12.5" y2="22.8" stroke="${c.primary}" stroke-width="1.2" />
            <line x1="16" y1="16.8" x2="16" y2="22.8" stroke="${c.primary}" stroke-width="1.2" />
            <line x1="19.5" y1="16.8" x2="19.5" y2="22.8" stroke="${c.primary}" stroke-width="1.2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="12" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="11.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="11.2" r="0.6" fill="#FFFFFF" />
        <!-- Clenched teeth rectangle -->
        <rect x="9" y="16.5" width="14" height="6.5" rx="3.2" fill="${teethColor}" stroke="${featureColor}" stroke-width="1.4" />
        <line x1="9.5" y1="19.75" x2="22.5" y2="19.75" stroke="${featureColor}" stroke-width="0.9" />
        <line x1="12.5" y1="16.8" x2="12.5" y2="22.8" stroke="${featureColor}" stroke-width="0.8" />
        <line x1="16" y1="16.8" x2="16" y2="22.8" stroke="${featureColor}" stroke-width="0.8" />
        <line x1="19.5" y1="16.8" x2="19.5" y2="22.8" stroke="${featureColor}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 27. Loudly Crying Face (U+1F62D)
  {
    id: 'loudly-crying-face',
    char: '😭',
    name: 'Loudly Crying Face',
    unicodeHex: 'U+1F62D',
    category: 'faces-hands',
    tags: ['loudly crying', 'sobbing', 'crying tears', 'bawling', 'devastated', 'sad', 'heartbroken', 'grief', '😭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9 14.2 C7.8 18 8 22.4 9.4 26 C11 26.4 12.6 26 12.4 24.4 C11.8 21 12.4 17.4 13.4 14.4 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M 23 14.2 C 24.2 18 24 22.4 22.6 26 C 21 26.4 19.4 26 19.6 24.4 C 20.2 21 19.6 17.4 18.6 14.4 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M8.6 13.6 C9.6 11 12.8 11 13.8 13.6" stroke-width="${sw}" />
          <path d="M 23.4 13.6 C 22.4 11 19.2 11 18.2 13.6" stroke-width="${sw}" />
          <path d="M12.6 19.4 C12.6 16.6 19.4 16.6 19.4 19.4 L19.4 23 C19.4 26.2 12.6 26.2 12.6 23 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M13 19.6 C13.4 17.8 18.6 17.8 19 19.6 L19 21.2 H13 Z" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="M13.8 24.6 C14.2 22.8 17.8 22.8 18.2 24.6 C17.4 25.7 14.6 25.7 13.8 24.6 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M9 14.2 C7.8 18 8 22.4 9.4 26 C11 26.4 12.6 26 12.4 24.4 C11.8 21 12.4 17.4 13.4 14.4 Z" fill="#FFFFFF" stroke="none" />
            <path d="M 23 14.2 C 24.2 18 24 22.4 22.6 26 C 21 26.4 19.4 26 19.6 24.4 C 20.2 21 19.6 17.4 18.6 14.4 Z" fill="#FFFFFF" stroke="none" />
            <path d="M8.6 13.6 C9.6 11 12.8 11 13.8 13.6" />
            <path d="M 23.4 13.6 C 22.4 11 19.2 11 18.2 13.6" />
            <path d="M12.6 19.4 C12.6 16.6 19.4 16.6 19.4 19.4 L19.4 23 C19.4 26.2 12.6 26.2 12.6 23 Z" fill="#FFFFFF" stroke="none" />
            <path d="M13.8 24.6 C14.2 22.8 17.8 22.8 18.2 24.6 C17.4 25.7 14.6 25.7 13.8 24.6 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9 14.2 C7.8 18 8 22.4 9.4 26 C11 26.4 12.6 26 12.4 24.4 C11.8 21 12.4 17.4 13.4 14.4 Z" fill="${tearColor}" stroke="${tearStroke}" stroke-width="0.6" />
        <path d="M 23 14.2 C 24.2 18 24 22.4 22.6 26 C 21 26.4 19.4 26 19.6 24.4 C 20.2 21 19.6 17.4 18.6 14.4 Z" fill="${tearColor}" stroke="${tearStroke}" stroke-width="0.6" />
        <path d="M8.6 13.6 C9.6 11 12.8 11 13.8 13.6" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.4 13.6 C 22.4 11 19.2 11 18.2 13.6" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M12.6 19.4 C12.6 16.6 19.4 16.6 19.4 19.4 L19.4 23 C19.4 26.2 12.6 26.2 12.6 23 Z" fill="${featureColor}" />
        <path d="M13 19.6 C13.4 17.8 18.6 17.8 19 19.6 L19 21.2 H13 Z" fill="#FFFFFF" />
        <path d="M13.8 24.6 C14.2 22.8 17.8 22.8 18.2 24.6 C17.4 25.7 14.6 25.7 13.8 24.6 Z" fill="${tongueColor}" />
      </g>`;
    },
  },

  // 28. Face with Open Mouth (U+1F62E)
  {
    id: 'face-with-open-mouth',
    char: '😮',
    name: 'Face with Open Mouth',
    unicodeHex: 'U+1F62E',
    category: 'faces-hands',
    tags: ['open mouth', 'surprised', 'gasp', 'wow', 'amazed', 'oh', 'shocked', '😮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <ellipse cx="11.5" cy="12" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="16" cy="20" rx="3.5" ry="4.2" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF">
            <ellipse cx="11.5" cy="12" rx="1.6" ry="2.2" />
            <ellipse cx="20.5" cy="12" rx="1.6" ry="2.2" />
            <ellipse cx="16" cy="20" rx="3.5" ry="4.2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="12" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="11.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="11.2" r="0.6" fill="#FFFFFF" />
        <ellipse cx="16" cy="20" rx="3.5" ry="4.2" fill="${featureColor}" />
      </g>`;
    },
  },

  // 29. Hushed Face (U+1F62F)
  {
    id: 'hushed-face',
    char: '😯',
    name: 'Hushed Face',
    unicodeHex: 'U+1F62F',
    category: 'faces-hands',
    tags: ['hushed', 'surprised', 'stunned', 'whoa', 'quiet', 'mild surprise', 'speechless', 'gasp', '😯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9 9 C10.5 7.8 13 8.2 14 9.5" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M23 9 C21.5 7.8 19 8.2 18 9.5" stroke-width="${Math.max(1, sw * 0.7)}" />
          <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="16" cy="19.5" rx="2.4" ry="3.2" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF">
            <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" />
            <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" />
            <ellipse cx="16" cy="19.5" rx="2.4" ry="3.2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9 9 C10.5 7.8 13 8.2 14 9.5" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <path d="M23 9 C21.5 7.8 19 8.2 18 9.5" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="11.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="11.8" r="0.6" fill="#FFFFFF" />
        <ellipse cx="16" cy="19.5" rx="2.4" ry="3.2" fill="${featureColor}" />
      </g>`;
    },
  },

  // Anxious Face with Sweat (U+1F630)
  {
    id: 'anxious-face-with-sweat',
    char: '😰',
    name: 'Anxious Face with Sweat',
    unicodeHex: 'U+1F630',
    category: 'faces-hands',
    tags: ['anxious face with sweat', 'cold sweat', 'nervous', 'worried', 'anxious', 'stressed', 'scared', '😰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M 4.54 11 C 10 12.5 22 12.5 27.46 11" stroke-width="1.2" />
          <path d="M8 11.6 C9.8 10.8 12 9.6 14 8.4" stroke-width="${sw}" />
          <path d="M 24 11.6 C 22.2 10.8 20 9.6 18 8.4" stroke-width="${sw}" />
          <ellipse cx="11.5" cy="13.8" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13.8" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M12.2 22.8 C12.6 19.4 19.4 19.4 19.8 22.8 C17.6 21.8 14.4 21.8 12.2 22.8 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M8.4 16.6 C9.4 19 12 20.8 12 23.8 C12 26.2 10.4 27.8 8.4 27.8 C6.4 27.8 4.8 26.2 4.8 23.8 C4.8 20.8 7.4 19 8.4 16.6 Z" transform="translate(-1.2 0.2)" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M 4.54 11 C 10 12.5 22 12.5 27.46 11" stroke-width="1.2" />
            <path d="M8 11.6 C9.8 10.8 12 9.6 14 8.4" />
            <path d="M 24 11.6 C 22.2 10.8 20 9.6 18 8.4" />
            <ellipse cx="11.5" cy="13.8" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="13.8" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <path d="M12.2 22.8 C12.6 19.4 19.4 19.4 19.8 22.8 C17.6 21.8 14.4 21.8 12.2 22.8 Z" fill="#FFFFFF" stroke="none" />
            <path d="M8.4 16.6 C9.4 19 12 20.8 12 23.8 C12 26.2 10.4 27.8 8.4 27.8 C6.4 27.8 4.8 26.2 4.8 23.8 C4.8 20.8 7.4 19 8.4 16.6 Z" transform="translate(-1.2 0.2)" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M 4.54 11 A 12.5 12.5 0 0 1 27.46 11 C 22 12.5 10 12.5 4.54 11 Z" fill="${fearGlow}" opacity="0.65" />
        <path d="M8 11.6 C9.8 10.8 12 9.6 14 8.4" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 24 11.6 C 22.2 10.8 20 9.6 18 8.4" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <ellipse cx="11.5" cy="13.8" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.8" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="13" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="13" r="0.6" fill="#FFFFFF" />
        <path d="M12.2 22.8 C12.6 19.4 19.4 19.4 19.8 22.8 C17.6 21.8 14.4 21.8 12.2 22.8 Z" fill="${featureColor}" />
        <path d="M8.4 16.6 C9.4 19 12 20.8 12 23.8 C12 26.2 10.4 27.8 8.4 27.8 C6.4 27.8 4.8 26.2 4.8 23.8 C4.8 20.8 7.4 19 8.4 16.6 Z" transform="translate(-1.2 0.2)" fill="${tearColor}" stroke="${tearStroke}" stroke-width="0.6" />
        <ellipse cx="6" cy="24.6" rx="0.8" ry="1.5" fill="#FFFFFF" />
      </g>`;
    },
  },

  // Face Screaming in Fear (U+1F631)
  {
    id: 'face-screaming-in-fear',
    char: '😱',
    name: 'Face Screaming in Fear',
    unicodeHex: 'U+1F631',
    category: 'faces-hands',
    tags: ['face screaming in fear', 'scream', 'horror', 'shocked', 'scared', 'terrified', 'omg', '😱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M 4.54 11 C 10 12.5 22 12.5 27.46 11" stroke-width="1.2" />
          <ellipse cx="11" cy="11.8" rx="3.4" ry="4.8" stroke-width="${Math.max(1, sw * 0.8)}" />
          <ellipse cx="21" cy="11.8" rx="3.4" ry="4.8" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M16 17 C18.8 17 20.2 19.8 20.2 22.4 C20.2 25.2 18.4 26.6 16 26.6 C13.6 26.6 11.8 25.2 11.8 22.4 C11.8 19.8 13.2 17 16 17 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <ellipse cx="16" cy="24.6" rx="2" ry="1.2" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M4.2 27 C2.6 24.4 2.4 20 3.4 17.2 C3.8 16 5 15.8 5.6 16.8 C5.8 15.4 7.4 15 8 16.2 C8.4 15.2 10 15.4 10.2 16.8 C11 16.4 12 17.2 11.6 18.4 L11.4 22.6 C11.2 25.4 9.2 28 6.8 28.2 C5.6 28.3 4.8 27.8 4.2 27 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M 27.8 27 C 29.4 24.4 29.6 20 28.6 17.2 C 28.2 16 27 15.8 26.4 16.8 C 26.2 15.4 24.6 15 24 16.2 C 23.6 15.2 22 15.4 21.8 16.8 C 21 16.4 20 17.2 20.4 18.4 L 20.6 22.6 C 20.8 25.4 22.8 28 25.2 28.2 C 26.4 28.3 27.2 27.8 27.8 27 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M 4.54 11 C 10 12.5 22 12.5 27.46 11" stroke-width="1.2" />
            <ellipse cx="11" cy="11.8" rx="3.4" ry="4.8" fill="#FFFFFF" stroke="none" />
            <ellipse cx="21" cy="11.8" rx="3.4" ry="4.8" fill="#FFFFFF" stroke="none" />
            <path d="M16 17 C18.8 17 20.2 19.8 20.2 22.4 C20.2 25.2 18.4 26.6 16 26.6 C13.6 26.6 11.8 25.2 11.8 22.4 C11.8 19.8 13.2 17 16 17 Z" fill="#FFFFFF" stroke="none" />
            <ellipse cx="16" cy="24.6" rx="2" ry="1.2" fill="#FFFFFF" stroke="none" />
            <path d="M4.2 27 C2.6 24.4 2.4 20 3.4 17.2 C3.8 16 5 15.8 5.6 16.8 C5.8 15.4 7.4 15 8 16.2 C8.4 15.2 10 15.4 10.2 16.8 C11 16.4 12 17.2 11.6 18.4 L11.4 22.6 C11.2 25.4 9.2 28 6.8 28.2 C5.6 28.3 4.8 27.8 4.2 27 Z" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.2" />
            <path d="M 27.8 27 C 29.4 24.4 29.6 20 28.6 17.2 C 28.2 16 27 15.8 26.4 16.8 C 26.2 15.4 24.6 15 24 16.2 C 23.6 15.2 22 15.4 21.8 16.8 C 21 16.4 20 17.2 20.4 18.4 L 20.6 22.6 C 20.8 25.4 22.8 28 25.2 28.2 C 26.4 28.3 27.2 27.8 27.8 27 Z" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M 4.54 11 A 12.5 12.5 0 0 1 27.46 11 C 22 12.5 10 12.5 4.54 11 Z" fill="${fearGlow}" opacity="0.65" />
        <ellipse cx="11" cy="11.8" rx="3.4" ry="4.8" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1" />
        <ellipse cx="21" cy="11.8" rx="3.4" ry="4.8" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1" />
        <path d="M16 17 C18.8 17 20.2 19.8 20.2 22.4 C20.2 25.2 18.4 26.6 16 26.6 C13.6 26.6 11.8 25.2 11.8 22.4 C11.8 19.8 13.2 17 16 17 Z" fill="${featureColor}" />
        <ellipse cx="16" cy="24.6" rx="2" ry="1.2" fill="${tongueColor}" />
        <path d="M4.2 27 C2.6 24.4 2.4 20 3.4 17.2 C3.8 16 5 15.8 5.6 16.8 C5.8 15.4 7.4 15 8 16.2 C8.4 15.2 10 15.4 10.2 16.8 C11 16.4 12 17.2 11.6 18.4 L11.4 22.6 C11.2 25.4 9.2 28 6.8 28.2 C5.6 28.3 4.8 27.8 4.2 27 Z" fill="${handFill}" stroke="${handStroke}" stroke-width="0.8" />
        <path d="M 27.8 27 C 29.4 24.4 29.6 20 28.6 17.2 C 28.2 16 27 15.8 26.4 16.8 C 26.2 15.4 24.6 15 24 16.2 C 23.6 15.2 22 15.4 21.8 16.8 C 21 16.4 20 17.2 20.4 18.4 L 20.6 22.6 C 20.8 25.4 22.8 28 25.2 28.2 C 26.4 28.3 27.2 27.8 27.8 27 Z" fill="${handFill}" stroke="${handStroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // Astonished Face (U+1F632)
  {
    id: 'astonished-face',
    char: '😲',
    name: 'Astonished Face',
    unicodeHex: 'U+1F632',
    category: 'faces-hands',
    tags: ['astonished face', 'astonished', 'amazed', 'surprised', 'shocked', 'wow', 'gasp', 'speechless', '😲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.2 9.8 C9.6 7.4 12.8 7.4 14.2 9.4" stroke-width="${sw}" />
          <path d="M 23.8 9.8 C 22.4 7.4 19.2 7.4 17.8 9.4" stroke-width="${sw}" />
          <ellipse cx="11.5" cy="13.4" rx="1.5" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13.4" rx="1.5" ry="2.2" fill="${c.stroke}" />
          <path d="M16 17.8 C18.6 17.8 19.8 20.2 19.8 22.6 C19.8 25 18.2 26.4 16 26.4 C13.8 26.4 12.2 25 12.2 22.6 C12.2 20.2 13.4 17.8 16 17.8 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M13.2 20.4 C13.8 18.8 18.2 18.8 18.8 20.4 L18.6 21.8 H13.4 Z" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.2 9.8 C9.6 7.4 12.8 7.4 14.2 9.4" />
            <path d="M 23.8 9.8 C 22.4 7.4 19.2 7.4 17.8 9.4" />
            <ellipse cx="11.5" cy="13.4" rx="1.5" ry="2.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="13.4" rx="1.5" ry="2.2" fill="#FFFFFF" stroke="none" />
            <path d="M16 17.8 C18.6 17.8 19.8 20.2 19.8 22.6 C19.8 25 18.2 26.4 16 26.4 C13.8 26.4 12.2 25 12.2 22.6 C12.2 20.2 13.4 17.8 16 17.8 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.2 9.8 C9.6 7.4 12.8 7.4 14.2 9.4" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.8 9.8 C 22.4 7.4 19.2 7.4 17.8 9.4" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <ellipse cx="11.5" cy="13.4" rx="1.5" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.4" rx="1.5" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="12.6" r="0.55" fill="#FFFFFF" />
        <circle cx="21" cy="12.6" r="0.55" fill="#FFFFFF" />
        <path d="M16 17.8 C18.6 17.8 19.8 20.2 19.8 22.6 C19.8 25 18.2 26.4 16 26.4 C13.8 26.4 12.2 25 12.2 22.6 C12.2 20.2 13.4 17.8 16 17.8 Z" fill="${featureColor}" />
        <path d="M13.2 20.4 C13.8 18.8 18.2 18.8 18.8 20.4 L18.6 21.8 H13.4 Z" fill="#FFFFFF" />
      </g>`;
    },
  },

  // Flushed Face (U+1F633)
  {
    id: 'flushed-face',
    char: '😳',
    name: 'Flushed Face',
    unicodeHex: 'U+1F633',
    category: 'faces-hands',
    tags: ['flushed face', 'flushed', 'embarrassed', 'blush', 'shy', 'awkward', 'shocked', 'wide eyes', '😳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8 8 C9.4 6 12.6 6 14 7.8" stroke-width="${sw}" />
          <path d="M 24 8 C 22.6 6 19.4 6 18 7.8" stroke-width="${sw}" />
          <ellipse cx="11.2" cy="13.4" rx="3.4" ry="4" stroke-width="${Math.max(1, sw * 0.8)}" />
          <ellipse cx="20.8" cy="13.4" rx="3.4" ry="4" stroke-width="${Math.max(1, sw * 0.8)}" />
          <circle cx="11.2" cy="13.4" r="1.5" fill="${c.stroke}" />
          <circle cx="20.8" cy="13.4" r="1.5" fill="${c.stroke}" />
          <path d="M12.6 22.6 H19.4" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8 8 C9.4 6 12.6 6 14 7.8" />
            <path d="M 24 8 C 22.6 6 19.4 6 18 7.8" />
            <ellipse cx="11.2" cy="13.4" rx="3.4" ry="4" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.8" cy="13.4" rx="3.4" ry="4" fill="#FFFFFF" stroke="none" />
            <circle cx="11.2" cy="13.4" r="1.5" fill="${c.primary}" stroke="none" />
            <circle cx="20.8" cy="13.4" r="1.5" fill="${c.primary}" stroke="none" />
            <path d="M12.6 22.6 H19.4" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="5.8" cy="19.8" rx="2.6" ry="1.8" fill="${blushColor}" opacity="0.65" />
        <ellipse cx="26.2" cy="19.8" rx="2.6" ry="1.8" fill="${blushColor}" opacity="0.65" />
        <path d="M8 8 C9.4 6 12.6 6 14 7.8" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 24 8 C 22.6 6 19.4 6 18 7.8" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <ellipse cx="11.2" cy="13.4" rx="3.4" ry="4" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1" />
        <ellipse cx="20.8" cy="13.4" rx="3.4" ry="4" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1" />
        <circle cx="11.2" cy="13.4" r="1.5" fill="${featureColor}" />
        <circle cx="20.8" cy="13.4" r="1.5" fill="${featureColor}" />
        <circle cx="11.8" cy="12.7" r="0.5" fill="#FFFFFF" />
        <circle cx="21.4" cy="12.7" r="0.5" fill="#FFFFFF" />
        <path d="M12.6 22.6 H19.4" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // Sleeping Face (U+1F634)
  {
    id: 'sleeping-face',
    char: '😴',
    name: 'Sleeping Face',
    unicodeHex: 'U+1F634',
    category: 'faces-hands',
    tags: ['sleeping face', 'sleeping', 'sleep', 'zzz', 'tired', 'snooze', 'nap', 'bedtime', '😴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.8 14.6 C9.8 17 12.8 17 14 14.8" stroke-width="${sw}" />
          <path d="M 23.2 14.6 C 22.2 17 19.2 17 18 14.8" stroke-width="${sw}" />
          <ellipse cx="16" cy="22.2" rx="1.6" ry="2.1" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M18.4 9.45 H20.8 L18.4 11.75 H20.8" stroke-width="1.6" />
          <path d="M22 5.9 H25.2 L22 8.9 H25.2" stroke-width="1.6" />
          <path d="M25.5 1.6 H29.7 L25.5 5.6 H29.7" stroke-width="1.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.8 14.6 C9.8 17 12.8 17 14 14.8" />
            <path d="M 23.2 14.6 C 22.2 17 19.2 17 18 14.8" />
            <ellipse cx="16" cy="22.2" rx="1.6" ry="2.1" fill="#FFFFFF" stroke="none" />
            <path d="M18.4 9.45 H20.8 L18.4 11.75 H20.8" stroke="${c.primary}" stroke-width="2" />
            <path d="M22 5.9 H25.2 L22 8.9 H25.2" stroke="${c.primary}" stroke-width="2" />
            <path d="M25.5 1.6 H29.7 L25.5 5.6 H29.7" stroke="${c.primary}" stroke-width="2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.8 14.6 C9.8 17 12.8 17 14 14.8" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.2 14.6 C 22.2 17 19.2 17 18 14.8" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <ellipse cx="16" cy="22.2" rx="1.6" ry="2.1" fill="${featureColor}" />
        <path d="M18.4 9.45 H20.8 L18.4 11.75 H20.8" stroke="${zzzColor}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M22 5.9 H25.2 L22 8.9 H25.2" stroke="${zzzColor}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M25.5 1.6 H29.7 L25.5 5.6 H29.7" stroke="${zzzColor}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // Face with Crossed-Out Eyes (U+1F635)
  {
    id: 'face-with-crossed-out-eyes',
    char: '😵',
    name: 'Face with Crossed-Out Eyes',
    unicodeHex: 'U+1F635',
    category: 'faces-hands',
    tags: ['face with crossed-out eyes', 'dizzy face', 'knocked out', 'dead', 'unconscious', 'stunned', 'faint', 'x eyes', '😵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8 8.8 C9.4 6.8 12.6 6.8 14 8.4" stroke-width="${sw}" />
          <path d="M 24 8.8 C 22.6 6.8 19.4 6.8 18 8.4" stroke-width="${sw}" />
          <path d="M8.8 10.6 L13.6 15.4 M13.6 10.6 L8.8 15.4" stroke-width="${sw}" />
          <path d="M 23.2 10.6 L 18.4 15.4 M 18.4 10.6 L 23.2 15.4" stroke-width="${sw}" />
          <ellipse cx="16" cy="22.6" rx="2.9" ry="3.8" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8 8.8 C9.4 6.8 12.6 6.8 14 8.4" />
            <path d="M 24 8.8 C 22.6 6.8 19.4 6.8 18 8.4" />
            <path d="M8.8 10.6 L13.6 15.4 M13.6 10.6 L8.8 15.4" />
            <path d="M 23.2 10.6 L 18.4 15.4 M 18.4 10.6 L 23.2 15.4" />
            <ellipse cx="16" cy="22.6" rx="2.9" ry="3.8" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8 8.8 C9.4 6.8 12.6 6.8 14 8.4" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 24 8.8 C 22.6 6.8 19.4 6.8 18 8.4" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M8.8 10.6 L13.6 15.4 M13.6 10.6 L8.8 15.4" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.2 10.6 L 18.4 15.4 M 18.4 10.6 L 23.2 15.4" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <ellipse cx="16" cy="22.6" rx="2.9" ry="3.8" fill="${featureColor}" />
      </g>`;
    },
  },

  // Face Without Mouth (U+1F636)
  {
    id: 'face-without-mouth',
    char: '😶',
    name: 'Face Without Mouth',
    unicodeHex: 'U+1F636',
    category: 'faces-hands',
    tags: ['face without mouth', 'no mouth', 'speechless', 'silent', 'mute', 'blank', 'quiet', 'awkward', '😶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <ellipse cx="11.5" cy="14" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14" rx="1.6" ry="2.2" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <ellipse cx="11.5" cy="14" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="14" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="14" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="14" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="13.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="13.2" r="0.6" fill="#FFFFFF" />
      </g>`;
    },
  },

  // Face with Medical Mask (U+1F637)
  {
    id: 'face-with-medical-mask',
    char: '😷',
    name: 'Face with Medical Mask',
    unicodeHex: 'U+1F637',
    category: 'faces-hands',
    tags: ['face with medical mask', 'mask', 'sick', 'ill', 'flu', 'covid', 'doctor', 'cold', '😷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M8.8 13.8 C9.6 11.2 13.2 11.2 14 13.8" stroke-width="${sw}" />
          <path d="M 23.2 13.8 C 22.4 11.2 18.8 11.2 18 13.8" stroke-width="${sw}" />
          <path d="M7.8 19 L4.4 16.8 M24.2 19 L27.6 16.8" stroke-width="1.2" />
          <path d="M7.6 17.6 C11 16.8 21 16.8 24.4 17.6 L24.4 24.4 C21 25.8 11 25.8 7.6 24.4 Z" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.8 13.8 C9.6 11.2 13.2 11.2 14 13.8" />
            <path d="M 23.2 13.8 C 22.4 11.2 18.8 11.2 18 13.8" />
            <path d="M7.8 19 L4.4 16.8 M24.2 19 L27.6 16.8" stroke="#FFFFFF" stroke-width="1.2" />
            <path d="M7.6 17.6 C11 16.8 21 16.8 24.4 17.6 L24.4 24.4 C21 25.8 11 25.8 7.6 24.4 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const steamFill = isDuotone ? c.secondary : '#F8FAFC';
      const steamStroke = isDuotone ? c.secondary : '#94A3B8';
      const fearGlow = isDuotone ? c.secondary : '#60A5FA';
      const zzzColor = isDuotone ? c.secondary : '#2563EB';
      const maskFill = isDuotone ? c.secondary : '#FFFFFF';
      const maskStroke = isDuotone ? c.secondary : '#B0BEC5';
      const pleatColor = isDuotone ? c.primary : '#4FC3F7';
      const loopColor = isDuotone ? c.secondary : '#B0BEC5';
      const handFill = isDuotone ? c.stroke : '#FFB300';
      const handStroke = isDuotone ? c.secondary : '#F57C00';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M8.8 13.8 C9.6 11.2 13.2 11.2 14 13.8" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M 23.2 13.8 C 22.4 11.2 18.8 11.2 18 13.8" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M7.8 19 L4.4 16.8 M24.2 19 L27.6 16.8" stroke="${loopColor}" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M7.6 17.6 C11 16.8 21 16.8 24.4 17.6 L24.4 24.4 C21 25.8 11 25.8 7.6 24.4 Z" fill="${maskFill}" stroke="${maskStroke}" stroke-width="0.8" />
      </g>`;
    },
  },
];
