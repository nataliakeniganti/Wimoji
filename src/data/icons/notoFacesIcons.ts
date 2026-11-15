import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const notoFacesIcons: WimojiIconDef[] = [
  {
    id: 'grinning-face',
    char: '😀',
    name: 'Grinning Face',
    unicodeHex: 'U+1F600',
    category: 'faces-hands',
    tags: ['grinning', 'smile', 'happy', 'teeth', 'face', 'joy', 'noto'],
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
          <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          <path d="M10.15 18.71 L21.85 18.71" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF">
            <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" />
            <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" />
            <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" id="Ellipse 2" fill="${eyeColor}" />
        <ellipse cx="20.5" cy="12.5" rx="1.6" ry="2.2" id="Ellipse 3" fill="${eyeColor}" />
        <ellipse cx="12" cy="11.8" rx="0.6" ry="0.6" id="Ellipse 4" fill="#FFFFFF" />
        <ellipse cx="21" cy="11.8" rx="0.6" ry="0.6" id="Ellipse 5" fill="#FFFFFF" />
        <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" id="Path" fill="${mouthColor}" />
        <path d="M22 17 C22 17.6 21.95 18.17 21.85 18.71 L10.15 18.71 C10.05 18.17 10 17.6 10 17 L22 17 Z" fill-rule="evenodd" id="Path 1" fill="${teethColor}" />
        <path transform="matrix(-1, 0, 0, -1, 32, 41.102)" d="M16 17.3 C15.2 17.3 14.45 17.44 13.77 17.7 C13.95 18.49 14.51 19.31 16 19.55 C17.49 19.31 18.05 18.49 18.23 17.7 C17.55 17.44 16.8 17.3 16 17.3 Z" fill-rule="evenodd" id="Path 3" fill="${tongueColor}" />
      </g>`;
    },
  },
  {
    id: 'slightly-smiling-face',
    char: '🙂',
    name: 'Slightly Smiling Face',
    unicodeHex: 'U+1F642',
    category: 'faces-hands',
    tags: ['slightly smiling', 'smile', 'happy', 'pleased', 'face', 'kind', 'noto'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11 18.5c1.2 2.5 3 3 5 3s3.8-.5 5-3" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.3" />
        <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <circle cx="12" cy="12.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.2" r="0.6" fill="#FFFFFF" />
        <path d="M11 18.5c1.2 2.5 3 3.2 5 3.2s3.8-.7 5-3.2" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'neutral-face',
    char: '😐',
    name: 'Neutral Face',
    unicodeHex: 'U+1F610',
    category: 'faces-hands',
    tags: ['neutral', 'straight face', 'deadpan', 'flat', 'meh', 'unimpressed', 'noto'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11 20h10" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.3" />
        <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <circle cx="12" cy="12.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.2" r="0.6" fill="#FFFFFF" />
        <path d="M11 20h10" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'expressionless-face',
    char: '😑',
    name: 'Expressionless Face',
    unicodeHex: 'U+1F611',
    category: 'faces-hands',
    tags: ['expressionless', 'unexpressive', 'straight face', 'deadpan', 'flat', 'meh', 'blank', 'noto'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M9.5 13.5h4" stroke-width="2.2" stroke-linecap="round" />
          <path d="M18.5 13.5h4" stroke-width="2.2" stroke-linecap="round" />
          <path d="M11 20h10" stroke-width="2.2" stroke-linecap="round" />
        </g>`;
      }
      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M9.5 13.5h4 M18.5 13.5h4 M11 20h10" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none" />
        </g>`;
      }
      const lineColor = isDuotone ? c.secondary : '#37474F';
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="0.3" />
        <path d="M9.5 13.5h4" stroke="${lineColor}" stroke-width="2.2" stroke-linecap="round" />
        <path d="M18.5 13.5h4" stroke="${lineColor}" stroke-width="2.2" stroke-linecap="round" />
        <path d="M11 20h10" stroke="${lineColor}" stroke-width="2.2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'slightly-frowning-face',
    char: '🙁',
    name: 'Slightly Frowning Face',
    unicodeHex: 'U+1F641',
    category: 'faces-hands',
    tags: ['slightly frowning', 'sad', 'disappointed', 'frown', 'unhappy', 'face', 'noto'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11 21c1.2-2.5 3-3 5-3s3.8.5 5 3" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.3" />
        <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <circle cx="12" cy="12.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.2" r="0.6" fill="#FFFFFF" />
        <path d="M11.5 21.5c1.2-2.2 3-2.8 4.5-2.8s3.3.6 4.5 2.8" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'face-with-diagonal-mouth',
    char: '🫤',
    name: 'Face with Diagonal Mouth',
    unicodeHex: 'U+1FAE4',
    category: 'faces-hands',
    tags: ['diagonal mouth', 'skeptical', 'unsure', 'meh', 'confused', 'face', 'noto'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11 21.5L21 18" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.3" />
        <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <circle cx="12" cy="12.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.2" r="0.6" fill="#FFFFFF" />
        <path d="M11 21.5L21 17.5" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'confused-face',
    char: '😕',
    name: 'Confused Face',
    unicodeHex: 'U+1F615',
    category: 'faces-hands',
    tags: ['confused', 'puzzled', 'doubt', 'unsure', 'hesitant', 'face', 'noto'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11 21c3-1.8 6 1.8 9 0" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.3" />
        <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <circle cx="12" cy="12.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.2" r="0.6" fill="#FFFFFF" />
        <path d="M11 20.8c2.8-1.8 5.6 1.8 8.8 0" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 1. Beaming Face with Smiling Eyes (U+1F601)
  {
    id: 'beaming-face-with-smiling-eyes',
    char: '😁',
    name: 'Beaming Face with Smiling Eyes',
    unicodeHex: 'U+1F601',
    category: 'faces-hands',
    tags: ['beaming', 'smile', 'smiling eyes', 'teeth', 'happy', 'grin', 'joy', 'excited', '😁'],
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
          <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" stroke-width="${sw}" />
          <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" stroke-width="${sw}" />
          <path d="M9.5 16.5 L22.5 16.5 C22.5 21.5 20 23.8 16 23.8 C12 23.8 9.5 21.5 9.5 16.5 Z" />
          <line x1="9.8" y1="20" x2="22.2" y2="20" stroke-width="${Math.max(1, sw * 0.7)}" />
          <line x1="13.8" y1="17" x2="13.8" y2="22.8" stroke-width="${Math.max(1, sw * 0.7)}" />
          <line x1="18.2" y1="17" x2="18.2" y2="22.8" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" />
            <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" />
            <path d="M9.5 16.5 L22.5 16.5 C22.5 21.5 20 23.8 16 23.8 C12 23.8 9.5 21.5 9.5 16.5 Z" fill="#FFFFFF" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M9.5 16.5 L22.5 16.5 C22.5 21.5 20 23.8 16 23.8 C12 23.8 9.5 21.5 9.5 16.5 Z" fill="${mouthColor}" />
        <path d="M10 17 L22 17 C21.8 20.8 19.8 23.2 16 23.2 C12.2 23.2 10.2 20.8 10 17 Z" fill="${teethColor}" />
        <line x1="10.2" y1="20" x2="21.8" y2="20" stroke="${mouthColor}" stroke-width="0.8" />
        <line x1="13.8" y1="17.2" x2="13.8" y2="22.5" stroke="${mouthColor}" stroke-width="0.7" />
        <line x1="16" y1="17.2" x2="16" y2="23.2" stroke="${mouthColor}" stroke-width="0.7" />
        <line x1="18.2" y1="17.2" x2="18.2" y2="22.5" stroke="${mouthColor}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 2. Face with Tears of Joy (U+1F602)
  {
    id: 'face-with-tears-of-joy',
    char: '😂',
    name: 'Face with Tears of Joy',
    unicodeHex: 'U+1F602',
    category: 'faces-hands',
    tags: ['tears of joy', 'laughing', 'crying laughter', 'lol', 'happy', 'haha', 'rofl', 'funny', '😂'],
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
          <path d="M9 13.5 C10 11.5 12.8 11.5 13.8 13.5" stroke-width="${sw}" />
          <path d="M18.2 13.5 C19.2 11.5 22 11.5 23 13.5" stroke-width="${sw}" />
          <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          <path d="M10.15 18.71 L21.85 18.71" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M7 15 C5.5 15.5 4.5 17.5 5 19 C5.8 20.8 8 20.5 7.8 18.5 Z" />
          <path d="M25 15 C26.5 15.5 27.5 17.5 27 19 C26.2 20.8 24 20.5 24.2 18.5 Z" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 13.5 C10 11.5 12.8 11.5 13.8 13.5" stroke-width="2.2" fill="none" />
            <path d="M18.2 13.5 C19.2 11.5 22 11.5 23 13.5" stroke-width="2.2" fill="none" />
            <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" stroke="none" />
            <path d="M7 15 C5.5 15.5 4.5 17.5 5 19 C5.8 20.8 8 20.5 7.8 18.5 Z" stroke="none" />
            <path d="M25 15 C26.5 15.5 27.5 17.5 27 19 C26.2 20.8 24 20.5 24.2 18.5 Z" stroke="none" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const tearColor = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.secondary : '#0284C7';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9 13.5 C10 11.5 12.8 11.5 13.8 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.2 13.5 C19.2 11.5 22 11.5 23 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" id="Path" fill="${mouthColor}" />
        <path d="M22 17 C22 17.6 21.95 18.17 21.85 18.71 L10.15 18.71 C10.05 18.17 10 17.6 10 17 L22 17 Z" fill-rule="evenodd" id="Path 1" fill="${teethColor}" />
        <path transform="matrix(-1, 0, 0, -1, 32, 41.102)" d="M16 17.3 C15.2 17.3 14.45 17.44 13.77 17.7 C13.95 18.49 14.51 19.31 16 19.55 C17.49 19.31 18.05 18.49 18.23 17.7 C17.55 17.44 16.8 17.3 16 17.3 Z" fill-rule="evenodd" id="Path 3" fill="${tongueColor}" />
        <path d="M7 15 C5.5 15.5 4.5 17.5 5 19 C5.8 20.8 8 20.5 7.8 18.5 Z" fill="${tearColor}" stroke="${tearStroke}" stroke-width="0.6" />
        <path d="M25 15 C26.5 15.5 27.5 17.5 27 19 C26.2 20.8 24 20.5 24.2 18.5 Z" fill="${tearColor}" stroke="${tearStroke}" stroke-width="0.6" />
      </g>`;
    },
  },

  // 3. Grinning Face with Big Eyes (U+1F603)
  {
    id: 'grinning-face-with-big-eyes',
    char: '😃',
    name: 'Grinning Face with Big Eyes',
    unicodeHex: 'U+1F603',
    category: 'faces-hands',
    tags: ['grinning', 'big eyes', 'happy', 'cheerful', 'excited', 'joy', 'smile', '😃'],
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
          <ellipse cx="11.5" cy="12" rx="2.1" ry="2.7" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12" rx="2.1" ry="2.7" fill="${c.stroke}" />
          <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          <path d="M10.15 18.71 L21.85 18.71" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF">
            <ellipse cx="11.5" cy="12" rx="2.1" ry="2.7" />
            <ellipse cx="20.5" cy="12" rx="2.1" ry="2.7" />
            <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="12" rx="2.1" ry="2.7" id="Ellipse 2" fill="${eyeColor}" />
        <ellipse cx="20.5" cy="12" rx="2.1" ry="2.7" id="Ellipse 3" fill="${eyeColor}" />
        <ellipse cx="12" cy="11.2" rx="0.8" ry="0.8" id="Ellipse 4" fill="#FFFFFF" />
        <ellipse cx="21" cy="11.2" rx="0.8" ry="0.8" id="Ellipse 5" fill="#FFFFFF" />
        <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" id="Path" fill="${mouthColor}" />
        <path d="M22 17 C22 17.6 21.95 18.17 21.85 18.71 L10.15 18.71 C10.05 18.17 10 17.6 10 17 L22 17 Z" fill-rule="evenodd" id="Path 1" fill="${teethColor}" />
        <path transform="matrix(-1, 0, 0, -1, 32, 41.102)" d="M16 17.3 C15.2 17.3 14.45 17.44 13.77 17.7 C13.95 18.49 14.51 19.31 16 19.55 C17.49 19.31 18.05 18.49 18.23 17.7 C17.55 17.44 16.8 17.3 16 17.3 Z" fill-rule="evenodd" id="Path 3" fill="${tongueColor}" />
      </g>`;
    },
  },

  // 4. Grinning Face with Smiling Eyes (U+1F604)
  {
    id: 'grinning-face-with-smiling-eyes',
    char: '😄',
    name: 'Grinning Face with Smiling Eyes',
    unicodeHex: 'U+1F604',
    category: 'faces-hands',
    tags: ['grinning', 'smiling eyes', 'happy', 'laugh', 'joy', 'smile', 'cheerful', '😄'],
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
          <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" stroke-width="${sw}" />
          <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" stroke-width="${sw}" />
          <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          <path d="M10.15 18.71 L21.85 18.71" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" />
            <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" />
            <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" id="Path" fill="${mouthColor}" />
        <path d="M22 17 C22 17.6 21.95 18.17 21.85 18.71 L10.15 18.71 C10.05 18.17 10 17.6 10 17 L22 17 Z" fill-rule="evenodd" id="Path 1" fill="${teethColor}" />
        <path transform="matrix(-1, 0, 0, -1, 32, 41.102)" d="M16 17.3 C15.2 17.3 14.45 17.44 13.77 17.7 C13.95 18.49 14.51 19.31 16 19.55 C17.49 19.31 18.05 18.49 18.23 17.7 C17.55 17.44 16.8 17.3 16 17.3 Z" fill-rule="evenodd" id="Path 3" fill="${tongueColor}" />
      </g>`;
    },
  },

  // 5. Grinning Face with Sweat (U+1F605)
  {
    id: 'grinning-face-with-sweat',
    char: '😅',
    name: 'Grinning Face with Sweat',
    unicodeHex: 'U+1F605',
    category: 'faces-hands',
    tags: ['sweat', 'relieved', 'nervous', 'close call', 'whew', 'phew', 'laugh', '😅'],
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
          <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" stroke-width="${sw}" />
          <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" stroke-width="${sw}" />
          <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          <path d="M10.15 18.71 L21.85 18.71" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M7 7.5 C5.8 7.5 5 9 6.2 10.8 C7.5 12.5 8.8 11.5 8.5 9.8 C8.2 8.5 7.8 7.5 7 7.5 Z" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" />
            <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" />
            <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" fill="#FFFFFF" stroke="none" />
            <path d="M7 7.5 C5.8 7.5 5 9 6.2 10.8 C7.5 12.5 8.8 11.5 8.5 9.8 C8.2 8.5 7.8 7.5 7 7.5 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';
      const sweatColor = isDuotone ? c.secondary : '#38BDF8';
      const sweatStroke = isDuotone ? c.secondary : '#0284C7';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M7 7.5 C5.8 7.5 5 9 6.2 10.8 C7.5 12.5 8.8 11.5 8.5 9.8 C8.2 8.5 7.8 7.5 7 7.5 Z" fill="${sweatColor}" stroke="${sweatStroke}" stroke-width="0.6" />
        <path d="M9.5 13.5 C10.2 11 12.8 11 13.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 13.5 C19.2 11 21.8 11 22.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" id="Path" fill="${mouthColor}" />
        <path d="M22 17 C22 17.6 21.95 18.17 21.85 18.71 L10.15 18.71 C10.05 18.17 10 17.6 10 17 L22 17 Z" fill-rule="evenodd" id="Path 1" fill="${teethColor}" />
        <path transform="matrix(-1, 0, 0, -1, 32, 41.102)" d="M16 17.3 C15.2 17.3 14.45 17.44 13.77 17.7 C13.95 18.49 14.51 19.31 16 19.55 C17.49 19.31 18.05 18.49 18.23 17.7 C17.55 17.44 16.8 17.3 16 17.3 Z" fill-rule="evenodd" id="Path 3" fill="${tongueColor}" />
      </g>`;
    },
  },

  // 6. Grinning Squinting Face (U+1F606)
  {
    id: 'grinning-squinting-face',
    char: '😆',
    name: 'Grinning Squinting Face',
    unicodeHex: 'U+1F606',
    category: 'faces-hands',
    tags: ['grinning', 'squinting', 'laughing', 'happy', 'glee', 'satisfied', '😆'],
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
          <path d="M9.5 11.2 L13.2 13 L9.5 14.8" stroke-width="${sw}" />
          <path d="M22.5 11.2 L18.8 13 L22.5 14.8" stroke-width="${sw}" />
          <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          <path d="M10.15 18.71 L21.85 18.71" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M9.5 11.2 L13.2 13 L9.5 14.8" />
            <path d="M22.5 11.2 L18.8 13 L22.5 14.8" />
            <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9.5 11.2 L13.2 13 L9.5 14.8" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M22.5 11.2 L18.8 13 L22.5 14.8" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" id="Path" fill="${mouthColor}" />
        <path d="M22 17 C22 17.6 21.95 18.17 21.85 18.71 L10.15 18.71 C10.05 18.17 10 17.6 10 17 L22 17 Z" fill-rule="evenodd" id="Path 1" fill="${teethColor}" />
        <path transform="matrix(-1, 0, 0, -1, 32, 41.102)" d="M16 17.3 C15.2 17.3 14.45 17.44 13.77 17.7 C13.95 18.49 14.51 19.31 16 19.55 C17.49 19.31 18.05 18.49 18.23 17.7 C17.55 17.44 16.8 17.3 16 17.3 Z" fill-rule="evenodd" id="Path 3" fill="${tongueColor}" />
      </g>`;
    },
  },

  // 7. Smiling Face with Halo (U+1F607)
  {
    id: 'smiling-face-with-halo',
    char: '😇',
    name: 'Smiling Face with Halo',
    unicodeHex: 'U+1F607',
    category: 'faces-hands',
    tags: ['halo', 'angel', 'innocent', 'pure', 'blessed', 'good', 'saint', 'halo face', '😇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="3.5" rx="8" ry="2.2" stroke-width="${sw}" />
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9.5 13.5 C10.2 11.2 12.8 11.2 13.5 13.5" stroke-width="${sw}" />
          <path d="M18.5 13.5 C19.2 11.2 21.8 11.2 22.5 13.5" stroke-width="${sw}" />
          <path d="M11.5 19 C13 22.5 19 22.5 20.5 19" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="3.5" rx="8" ry="2.2" fill="none" stroke="${c.primary}" stroke-width="${sw}" />
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 13.5 C10.2 11.2 12.8 11.2 13.5 13.5" />
            <path d="M18.5 13.5 C19.2 11.2 21.8 11.2 22.5 13.5" />
            <path d="M11.5 19 C13 22.5 19 22.5 20.5 19" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const haloColor = isDuotone ? c.secondary : '#38BDF8';

      return `${badge}<g>
        <ellipse cx="16" cy="3.5" rx="8" ry="2.2" fill="none" stroke="${haloColor}" stroke-width="1.8" />
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9.5 13.5 C10.2 11.2 12.8 11.2 13.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 13.5 C19.2 11.2 21.8 11.2 22.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M11.5 19 C13 22.5 19 22.5 20.5 19" stroke="${mouthColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 8. Winking Face (U+1F609)
  {
    id: 'winking-face',
    char: '😉',
    name: 'Winking Face',
    unicodeHex: 'U+1F609',
    category: 'faces-hands',
    tags: ['winking', 'wink', 'flirt', 'joke', 'playful', 'hint', 'clever', 'smile', '😉'],
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
          <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M18.5 13 C19.5 11.5 21.5 11.5 22.5 13" stroke-width="${sw}" />
          <path d="M11 18.5 C13 22.5 19 22.5 21 18.5" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#FFFFFF" stroke-linecap="round">
            <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" stroke="none" />
            <path d="M18.5 13 C19.5 11.5 21.5 11.5 22.5 13" stroke-width="2.2" fill="none" />
            <path d="M11 18.5 C13 22.5 19 22.5 21 18.5" stroke-width="2.2" fill="none" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.2" id="Ellipse 2" fill="${eyeColor}" />
        <ellipse cx="12" cy="11.8" rx="0.6" ry="0.6" id="Ellipse 4" fill="#FFFFFF" />
        <path d="M18.5 13 C19.5 11.5 21.5 11.5 22.5 13" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M11 18.5 C13 22.5 19 22.5 21 18.5" stroke="${mouthColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 9. Smiling Face with Smiling Eyes (U+1F60A)
  {
    id: 'smiling-face-with-smiling-eyes',
    char: '😊',
    name: 'Smiling Face with Smiling Eyes',
    unicodeHex: 'U+1F60A',
    category: 'faces-hands',
    tags: ['blushing', 'warm', 'smiling eyes', 'blush', 'happy', 'flattered', 'sweet', 'kind', '😊'],
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
          <path d="M9.5 13 C10.2 10.8 12.8 10.8 13.5 13" stroke-width="${sw}" />
          <path d="M18.5 13 C19.2 10.8 21.8 10.8 22.5 13" stroke-width="${sw}" />
          <ellipse cx="8.5" cy="16.5" rx="1.8" ry="1.1" stroke-width="${Math.max(1, sw * 0.7)}" />
          <ellipse cx="23.5" cy="16.5" rx="1.8" ry="1.1" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M11.5 18 C13 22 19 22 20.5 18" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 13 C10.2 10.8 12.8 10.8 13.5 13" />
            <path d="M18.5 13 C19.2 10.8 21.8 10.8 22.5 13" />
            <path d="M11.5 18 C13 22 19 22 20.5 18" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="8.5" cy="16.5" rx="2.2" ry="1.3" fill="${blushColor}" opacity="0.65" />
        <ellipse cx="23.5" cy="16.5" rx="2.2" ry="1.3" fill="${blushColor}" opacity="0.65" />
        <path d="M9.5 13 C10.2 10.8 12.8 10.8 13.5 13" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 13 C19.2 10.8 21.8 10.8 22.5 13" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M11.5 18 C13 22 19 22 20.5 18" stroke="${mouthColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 10. Face Savoring Food (U+1F60B)
  {
    id: 'face-savoring-food',
    char: '😋',
    name: 'Face Savoring Food',
    unicodeHex: 'U+1F60B',
    category: 'faces-hands',
    tags: ['savoring', 'yummy', 'delicious', 'tasty', 'tongue', 'food', 'hungry', 'lick', 'yum', '😋'],
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
          <path d="M9.5 13 C10.2 10.8 12.8 10.8 13.5 13" stroke-width="${sw}" />
          <path d="M18.5 13 C19.2 10.8 21.8 10.8 22.5 13" stroke-width="${sw}" />
          <path d="M10.5 18 C12.5 21 19.5 21 21.5 18" stroke-width="${sw}" />
          <path d="M15.5 18 C15.5 23 20 23 20 18" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M9.5 13 C10.2 10.8 12.8 10.8 13.5 13" />
            <path d="M18.5 13 C19.2 10.8 21.8 10.8 22.5 13" />
            <path d="M10.5 18 C12.5 21 19.5 21 21.5 18" />
            <path d="M15.5 18 C15.5 23 20 23 20 18 Z" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M9.5 13 C10.2 10.8 12.8 10.8 13.5 13" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 13 C19.2 10.8 21.8 10.8 22.5 13" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M10.5 18 C12.5 21 19.5 21 21.5 18" stroke="${mouthColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M15.5 18 C15.5 23 20 23 20 18 Z" fill="${tongueColor}" stroke="${mouthColor}" stroke-width="1.2" stroke-linejoin="round" />
      </g>`;
    },
  },

  // 11. Relieved Face (U+1F60C)
  {
    id: 'relieved-face',
    char: '😌',
    name: 'Relieved Face',
    unicodeHex: 'U+1F60C',
    category: 'faces-hands',
    tags: ['relieved', 'peaceful', 'calm', 'zen', 'content', 'serene', 'rest', 'soothing', '😌'],
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
          <path d="M9.5 9.5 C10.5 8.2 12.5 8.2 13.5 9.5" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M18.5 9.5 C19.5 8.2 21.5 8.2 22.5 9.5" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M9.5 13.5 C10.5 15.5 12.5 15.5 13.5 13.5" stroke-width="${sw}" />
          <path d="M18.5 13.5 C19.5 15.5 21.5 15.5 22.5 13.5" stroke-width="${sw}" />
          <path d="M12 19 C13.5 21.2 18.5 21.2 20 19" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 13.5 C10.5 15.5 12.5 15.5 13.5 13.5" />
            <path d="M18.5 13.5 C19.5 15.5 21.5 15.5 22.5 13.5" />
            <path d="M12 19 C13.5 21.2 18.5 21.2 20 19" />
          </g>
        </g>`;
      }

      const eyeColor = isDuotone ? c.secondary : '#37474F';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="8.5" cy="16" rx="2" ry="1.1" fill="${blushColor}" opacity="0.45" />
        <ellipse cx="23.5" cy="16" rx="2" ry="1.1" fill="${blushColor}" opacity="0.45" />
        <path d="M9.5 9.5 C10.5 8.2 12.5 8.2 13.5 9.5" stroke="${eyeColor}" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <path d="M18.5 9.5 C19.5 8.2 21.5 8.2 22.5 9.5" stroke="${eyeColor}" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <path d="M9.5 13.5 C10.5 15.5 12.5 15.5 13.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.5 13.5 C19.5 15.5 21.5 15.5 22.5 13.5" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M12 19 C13.5 21.2 18.5 21.2 20 19" stroke="${mouthColor}" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 12. Smiling Face with Heart-Eyes (U+1F60D)
  {
    id: 'smiling-face-with-heart-eyes',
    char: '😍',
    name: 'Smiling Face with Heart-Eyes',
    unicodeHex: 'U+1F60D',
    category: 'faces-hands',
    tags: ['heart eyes', 'love', 'crush', 'adoring', 'infatuated', 'smile', 'in love', 'affection', '😍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const heartLeftD = 'M11.5 15.2 C11.5 15.2 7.8 12.5 7.8 10 C7.8 8.2 9.2 7 10.7 7.8 C11.3 8.1 11.5 8.5 11.5 8.5 C11.5 8.5 11.7 8.1 12.3 7.8 C13.8 7 15.2 8.2 15.2 10 C15.2 12.5 11.5 15.2 11.5 15.2 Z';
      const heartRightD = 'M20.5 15.2 C20.5 15.2 16.8 12.5 16.8 10 C16.8 8.2 18.2 7 19.7 7.8 C20.3 8.1 20.5 8.5 20.5 8.5 C20.5 8.5 20.7 8.1 21.3 7.8 C22.8 7 24.2 8.2 24.2 10 C24.2 12.5 20.5 15.2 20.5 15.2 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="${heartLeftD}" />
          <path d="${heartRightD}" />
          <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          <path d="M10.15 18.71 L21.85 18.71" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF">
            <path d="${heartLeftD}" />
            <path d="${heartRightD}" />
            <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" />
          </g>
        </g>`;
      }

      const heartColor = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.secondary : '#DC2626';
      const mouthColor = isDuotone ? c.secondary : '#37474F';
      const teethColor = isDuotone ? c.primary : '#FFFFFF';
      const tongueColor = isDuotone ? c.stroke : '#FB7185';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="${heartLeftD}" fill="${heartColor}" stroke="${heartStroke}" stroke-width="0.5" />
        <path d="${heartRightD}" fill="${heartColor}" stroke="${heartStroke}" stroke-width="0.5" />
        <path d="M10 17 L22 17 C22 21.2 19.5 23.8 16 23.8 C12.5 23.8 10 21.2 10 17 Z" id="Path" fill="${mouthColor}" />
        <path d="M22 17 C22 17.6 21.95 18.17 21.85 18.71 L10.15 18.71 C10.05 18.17 10 17.6 10 17 L22 17 Z" fill-rule="evenodd" id="Path 1" fill="${teethColor}" />
        <path transform="matrix(-1, 0, 0, -1, 32, 41.102)" d="M16 17.3 C15.2 17.3 14.45 17.44 13.77 17.7 C13.95 18.49 14.51 19.31 16 19.55 C17.49 19.31 18.05 18.49 18.23 17.7 C17.55 17.44 16.8 17.3 16 17.3 Z" fill-rule="evenodd" id="Path 3" fill="${tongueColor}" />
      </g>`;
    },
  },

  // 13. Smiling Face with Sunglasses (U+1F60E)
  {
    id: 'smiling-face-with-sunglasses',
    char: '😎',
    name: 'Smiling Face with Sunglasses',
    unicodeHex: 'U+1F60E',
    category: 'faces-hands',
    tags: ['sunglasses', 'cool', 'confident', 'summer', 'shades', 'sun', 'swag', 'boss', '😎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const glassesD = 'M6 11.5 C6 10 7.5 9.5 9.5 9.5 L22.5 9.5 C24.5 9.5 26 10 26 11.5 L24.8 15 C24.3 17.5 21.5 17.8 19.5 16.8 L17.5 15.8 C16.5 15.3 15.5 15.3 14.5 15.8 L12.5 16.8 C10.5 17.8 7.7 17.5 7.2 15 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="${glassesD}" stroke-width="${sw}" />
          <path d="M11 19.5 C13 23 19 23 21 19.5" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF" stroke="#FFFFFF" stroke-linecap="round">
            <path d="${glassesD}" stroke="none" />
            <path d="M11 19.5 C13 23 19 23 21 19.5" stroke-width="2.2" fill="none" />
          </g>
        </g>`;
      }

      const shadesFill = isDuotone ? c.secondary : '#1E293B';
      const shadesStroke = isDuotone ? c.secondary : '#0F172A';
      const mouthColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="${glassesD}" fill="${shadesFill}" stroke="${shadesStroke}" stroke-width="0.8" />
        <line x1="8.5" y1="12" x2="11.5" y2="15" stroke="#FFFFFF" stroke-width="1.2" opacity="0.65" stroke-linecap="round" />
        <line x1="18" y1="12" x2="21" y2="15" stroke="#FFFFFF" stroke-width="1.2" opacity="0.65" stroke-linecap="round" />
        <path d="M11 19.5 C13 23 19 23 21 19.5" stroke="${mouthColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 14. Smirking Face (U+1F60F)
  {
    id: 'smirking-face',
    char: '😏',
    name: 'Smirking Face',
    unicodeHex: 'U+1F60F',
    category: 'faces-hands',
    tags: ['smirking', 'smirk', 'suggestive', 'flirt', 'sly', 'playful', 'cocky', 'smile', '😏'],
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
          <path d="M7.6 9.6 C9.2 8.2 12 8.2 14 9.6" stroke-width="${sw}" />
          <path d="M18 8.8 C19.8 7.4 22.6 7.4 24.2 8.8" stroke-width="${sw}" />
          <path d="M14.4 14 C14 16.5 11.4 16.5 11.2 13.8 Z" fill="${c.stroke}" />
          <path d="M7.2 14.4 C9.2 12.4 12.8 12.4 15 14.2" stroke-width="${sw}" />
          <path d="M24.4 14 C24 16.5 21.4 16.5 21.2 13.8 Z" fill="${c.stroke}" />
          <path d="M17.2 14.4 C19.2 12.4 22.8 12.4 25 14.2" stroke-width="${sw}" />
          <path d="M10.6 20.4 C14 21.8 18.4 21.2 21.6 17.6" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M7.6 9.6 C9.2 8.2 12 8.2 14 9.6" />
            <path d="M18 8.8 C19.8 7.4 22.6 7.4 24.2 8.8" />
            <path d="M14.4 14 C14 16.5 11.4 16.5 11.2 13.8 Z" fill="#FFFFFF" stroke="none" />
            <path d="M7.2 14.4 C9.2 12.4 12.8 12.4 15 14.2" />
            <path d="M24.4 14 C24 16.5 21.4 16.5 21.2 13.8 Z" fill="#FFFFFF" stroke="none" />
            <path d="M17.2 14.4 C19.2 12.4 22.8 12.4 25 14.2" />
            <path d="M10.6 20.4 C14 21.8 18.4 21.2 21.6 17.6" />
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

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <path d="M7.6 9.6 C9.2 8.2 12 8.2 14 9.6" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M18 8.8 C19.8 7.4 22.6 7.4 24.2 8.8" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M14.4 14 C14 16.5 11.4 16.5 11.2 13.8 Z" fill="${featureColor}" />
        <path d="M7.2 14.4 C9.2 12.4 12.8 12.4 15 14.2" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M24.4 14 C24 16.5 21.4 16.5 21.2 13.8 Z" fill="${featureColor}" />
        <path d="M17.2 14.4 C19.2 12.4 22.8 12.4 25 14.2" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M10.6 20.4 C14 21.8 18.4 21.2 21.6 17.6" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // 15. Smiling Face with Horns / Happy Imp (U+1F608)
  {
    id: 'smiling-face-with-horns',
    char: '😈',
    name: 'Smiling Face with Horns',
    unicodeHex: 'U+1F608',
    category: 'faces-hands',
    tags: ['devil', 'horns', 'smiling face with horns', 'imp', 'purple', 'evil smile', 'mischief', 'bad', 'naughty', 'fantasy', '😈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#9333EA', fillSecondary: '#37474F', stroke: '#7E22CE' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 12 L5 4.5 L11.5 8" />
          <path d="M24 12 L27 4.5 L20.5 8" />
          <circle cx="16" cy="17" r="11.5" />
          <line x1="8.5" y1="11.5" x2="14" y2="14" stroke-width="${sw + 0.3}" />
          <line x1="23.5" y1="11.5" x2="18" y2="14" stroke-width="${sw + 0.3}" />
          <ellipse cx="11.5" cy="15" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="15" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M10.5 20.5 C12.5 24.5 19.5 24.5 21.5 20.5" stroke-width="${sw + 0.3}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <polygon points="8,12 5,4.5 11.5,8" />
          <polygon points="24,12 27,4.5 20.5,8" />
          <circle cx="16" cy="17" r="11.5" />
          <g stroke="#FFFFFF" stroke-linecap="round" fill="#FFFFFF">
            <line x1="8.5" y1="11.5" x2="14" y2="14" stroke-width="2.2" />
            <line x1="23.5" y1="11.5" x2="18" y2="14" stroke-width="2.2" />
            <ellipse cx="11.5" cy="15" rx="1.6" ry="2.2" stroke="none" />
            <ellipse cx="20.5" cy="15" rx="1.6" ry="2.2" stroke="none" />
            <path d="M10.5 20.5 C12.5 24.5 19.5 24.5 21.5 20.5" stroke-width="2.2" fill="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#1E1B4B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Horns behind head -->
        <polygon points="8,12 5,4.5 11.5,8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <polygon points="24,12 27,4.5 20.5,8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Purple Face Base with inner highlight -->
        <circle cx="16" cy="17" r="11.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="16" cy="16" r="10" fill="${isDuotone ? c.secondary : '#C084FC'}" opacity="0.25" />
        <!-- Angry/devious furrowed eyebrows -->
        <line x1="8.5" y1="11.5" x2="14" y2="14" stroke="${featureColor}" stroke-width="2.2" />
        <line x1="23.5" y1="11.5" x2="18" y2="14" stroke="${featureColor}" stroke-width="2.2" />
        <!-- Expressive eyes with glints -->
        <ellipse cx="11.5" cy="15" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="15" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="14.2" r="0.6" fill="#FFFFFF" opacity="0.9" />
        <circle cx="21" cy="14.2" r="0.6" fill="#FFFFFF" opacity="0.9" />
        <!-- Mischievous upturned devil grin -->
        <path d="M10.5 20.5 C12.5 24.5 19.5 24.5 21.5 20.5" stroke="${featureColor}" stroke-width="2.2" fill="none" />
      </g>`;
    },
  },

  // Upside-Down Face (U+1F643)
  {
    id: 'upside-down-face',
    char: '🙃',
    name: 'Upside-Down Face',
    unicodeHex: 'U+1F643',
    category: 'faces-hands',
    tags: ['upside-down face', 'upside down', 'silly', 'sarcasm', 'irony', 'joking', 'playful', 'sarcastic', '🙃'],
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
          <ellipse cx="11.5" cy="19" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="19" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M21 13.5 C19.8 11 18 10.3 16 10.3 C14 10.3 12.2 11 11 13.5" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <ellipse cx="11.5" cy="19" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="19" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <path d="M21 13.5 C19.8 11 18 10.3 16 10.3 C14 10.3 12.2 11 11 13.5" />
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

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="19" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="19" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="11" cy="19.8" r="0.6" fill="#FFFFFF" />
        <circle cx="20" cy="19.8" r="0.6" fill="#FFFFFF" />
        <path d="M21 13.5 C19.8 11 18 10.3 16 10.3 C14 10.3 12.2 11 11 13.5" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // Face with Rolling Eyes (U+1F644)
  {
    id: 'face-with-rolling-eyes',
    char: '🙄',
    name: 'Face with Rolling Eyes',
    unicodeHex: 'U+1F644',
    category: 'faces-hands',
    tags: ['face with rolling eyes', 'rolling eyes', 'eye roll', 'eyeroll', 'whatever', 'sarcastic', 'bored', 'annoyed', 'disdain', 'unimpressed', '🙄'],
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
          <ellipse cx="11.2" cy="13.4" rx="3.4" ry="4" stroke-width="${Math.max(1, sw * 0.7)}" />
          <ellipse cx="20.8" cy="13.4" rx="3.4" ry="4" stroke-width="${Math.max(1, sw * 0.7)}" />
          <!-- Pupils rolled up -->
          <circle cx="11.2" cy="11.2" r="1.5" fill="${c.stroke}" stroke="none" />
          <circle cx="20.8" cy="11.2" r="1.5" fill="${c.stroke}" stroke="none" />
          <path d="M12.6 22.6 H19.4" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <ellipse cx="11.2" cy="13.4" rx="3.4" ry="4" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.8" cy="13.4" rx="3.4" ry="4" fill="#FFFFFF" stroke="none" />
            <circle cx="11.2" cy="11.2" r="1.5" fill="${c.primary}" stroke="none" />
            <circle cx="20.8" cy="11.2" r="1.5" fill="${c.primary}" stroke="none" />
            <path d="M12.6 22.6 H19.4" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" id="Ellipse" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <!-- Large white eye scleras -->
        <ellipse cx="11.2" cy="13.4" rx="3.4" ry="4" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1" />
        <ellipse cx="20.8" cy="13.4" rx="3.4" ry="4" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1" />
        <!-- Dark pupils rolled upwards to top of eyes -->
        <circle cx="11.2" cy="11.2" r="1.5" fill="${featureColor}" />
        <circle cx="20.8" cy="11.2" r="1.5" fill="${featureColor}" />
        <!-- Specular white shine spots -->
        <circle cx="11.8" cy="10.5" r="0.5" fill="#FFFFFF" />
        <circle cx="21.4" cy="10.5" r="0.5" fill="#FFFFFF" />
        <!-- Exasperated flat mouth line -->
        <path d="M12.6 22.6 H19.4" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },

  // Melting Face (U+1FAE0)
  {
    id: 'melting-face',
    char: '🫠',
    name: 'Melting Face',
    unicodeHex: 'U+1FAE0',
    category: 'faces-hands',
    tags: ['melting face', 'melt', 'dissolve', 'embarrassed', 'hot', 'liquid', 'disappear', 'sinking', '🫠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3.5 15.5 C3.5 8.5 9 3.5 16 3.5 C23 3.5 28.5 8.5 28.5 15.5 C28.5 19.4 27.6 21.6 27.2 23.6 C26.8 25.8 28.2 28 26 28.6 C24.2 29 23.8 26.8 23 25.6 C22.2 24.4 20.8 24.8 20.2 26.4 C19.6 28.2 20 30 17.8 30 C15.6 30 16.2 28.2 15.4 26.8 C14.6 25.4 13.2 25.8 12.4 27.2 C11.6 28.6 11.8 30 9.8 29.6 C7.8 29.2 8.8 27.2 8.2 25.6 C7.8 24.4 6.4 23.8 5.6 21.8 C4.2 19.8 3.5 18 3.5 15.5 Z" />
          <ellipse cx="11.5" cy="12.6" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="12.6" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M10.4 17.6 C12 19.8 14 20.2 16 20.2 C18 20.2 20 19.8 21.6 17.6" stroke-width="${sw}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M3.5 15.5 C3.5 8.5 9 3.5 16 3.5 C23 3.5 28.5 8.5 28.5 15.5 C28.5 19.4 27.6 21.6 27.2 23.6 C26.8 25.8 28.2 28 26 28.6 C24.2 29 23.8 26.8 23 25.6 C22.2 24.4 20.8 24.8 20.2 26.4 C19.6 28.2 20 30 17.8 30 C15.6 30 16.2 28.2 15.4 26.8 C14.6 25.4 13.2 25.8 12.4 27.2 C11.6 28.6 11.8 30 9.8 29.6 C7.8 29.2 8.8 27.2 8.2 25.6 C7.8 24.4 6.4 23.8 5.6 21.8 C4.2 19.8 3.5 18 3.5 15.5 Z" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <ellipse cx="11.5" cy="12.6" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="12.6" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <path d="M10.4 17.6 C12 19.8 14 20.2 16 20.2 C18 20.2 20 19.8 21.6 17.6" />
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

      return `${badge}<g>
        <path d="M3.5 15.5 C3.5 8.5 9 3.5 16 3.5 C23 3.5 28.5 8.5 28.5 15.5 C28.5 19.4 27.6 21.6 27.2 23.6 C26.8 25.8 28.2 28 26 28.6 C24.2 29 23.8 26.8 23 25.6 C22.2 24.4 20.8 24.8 20.2 26.4 C19.6 28.2 20 30 17.8 30 C15.6 30 16.2 28.2 15.4 26.8 C14.6 25.4 13.2 25.8 12.4 27.2 C11.6 28.6 11.8 30 9.8 29.6 C7.8 29.2 8.8 27.2 8.2 25.6 C7.8 24.4 6.4 23.8 5.6 21.8 C4.2 19.8 3.5 18 3.5 15.5 Z" id="Melt" fill="${c.primary}" stroke="${c.stroke}" stroke-linecap="butt" stroke-linejoin="round" stroke-width="0.8" />
        <ellipse cx="16" cy="14" rx="10.8" ry="9.8" id="Ellipse 1" opacity="0.3" fill="${isDuotone ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="12.6" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12.6" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="11.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="11.8" r="0.6" fill="#FFFFFF" />
        <path d="M10.4 17.6 C12 19.8 14 20.2 16 20.2 C18 20.2 20 19.8 21.6 17.6" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
];
