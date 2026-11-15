import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const expressiveFacesPart2EffectsIcons: WimojiIconDef[] = [
  // 1. Splatter (U+1FADF)
  {
    id: 'splatter',
    char: '\u{1FADF}',
    name: 'Splatter',
    unicodeHex: 'U+1FADF',
    category: 'objects-places',
    tags: ['splatter', 'paint', 'ink', 'splash', 'stain', 'blob', 'spill', 'mess', '🫟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#60A5FA', stroke: '#1E3A8A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const mainBlob =
        'M15.4 6.6 C17 5.8 18.2 7.6 17.4 9.4 C19.4 9.8 20.6 7.8 22.4 7.6 C24 7.4 24.8 9.2 23.4 10.6 C22.2 11.8 22.6 13.4 24.4 13.6 C26.6 13.8 27.6 15.8 25.8 17.2 C24.2 18.4 22.6 18.2 22 19.6 C21.4 21 24 22.6 24.2 24.4 C24.4 26 22.4 26.8 21 25.4 C19.8 24.2 18.8 23.4 17.4 24 C16.2 24.6 16.4 27.4 14.6 27.8 C12.8 28.2 11.6 26.2 12.6 24.4 C13.2 23 12 21.8 10.4 22.4 C8.2 23.2 6.6 22 7.4 20.2 C8 18.8 9.4 18 8.4 16.4 C7.4 14.8 4.8 14.6 4.8 12.6 C4.8 10.8 7 10.2 8.6 11.4 C9.8 12.2 11.2 11.6 11 10 C10.8 7.8 13.2 7.6 15.4 6.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${mainBlob}" />
          <circle cx="6.2" cy="6.8" r="1.4" />
          <circle cx="26.4" cy="9.4" r="1.2" />
          <circle cx="27.2" cy="21.8" r="1.1" />
          <circle cx="7.4" cy="26.2" r="1.3" />
          <circle cx="19.6" cy="4.4" r="0.9" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${mainBlob}" />
          <circle cx="6.2" cy="6.8" r="1.5" />
          <circle cx="26.4" cy="9.4" r="1.3" />
          <circle cx="27.2" cy="21.8" r="1.2" />
          <circle cx="7.4" cy="26.2" r="1.4" />
          <circle cx="19.6" cy="4.4" r="1" />
        </g>`;
      }

      const splashFill = c.primary;
      const highlight = isDuotone ? c.secondary : '#93C5FD';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${mainBlob}" fill="${splashFill}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Detached splash droplets -->
        <circle cx="6.2" cy="6.8" r="1.4" fill="${splashFill}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="26.4" cy="9.4" r="1.2" fill="${splashFill}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="27.2" cy="21.8" r="1.1" fill="${splashFill}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="7.4" cy="26.2" r="1.3" fill="${splashFill}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="19.6" cy="4.4" r="0.9" fill="${splashFill}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Glossy liquid highlights -->
        <path d="M12.4 13.2 C14 11.8 16.4 11.8 18 12.6" fill="none" stroke="${highlight}" stroke-width="1.4" opacity="0.85" />
        <circle cx="13.4" cy="17.2" r="1.1" fill="${highlight}" opacity="0.7" />
      </g>`;
    },
  },

  // 2. Fight Cloud (U+1FAEF)
  {
    id: 'fight-cloud',
    char: '\u{1FAEF}',
    name: 'Fight Cloud',
    unicodeHex: 'U+1FAEF',
    category: 'symbols',
    tags: ['fight cloud', 'fight', 'brawl', 'scuffle', 'comic', 'pow', 'dust cloud', 'cartoon', '🫯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F1F5F9', fillSecondary: '#FBBF24', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const cloudPuff =
        'M8.6 22.6 C5.2 22.6 3.6 19.2 5.4 16.4 C4.2 13.6 6.4 10 9.8 10.2 C10.8 6.8 15.2 5.4 18.2 7.6 C21 5.6 25.4 7.4 25.6 11 C28.6 12.2 29.2 16.4 26.8 18.6 C28 21.4 25.6 24.4 22.4 23.6 C20.4 25.8 16.4 25.8 14.4 23.8 C12.4 25.2 9.6 24.6 8.6 22.6 Z';
      const starBurst =
        'M16 10.4 L17.6 13.6 L21.2 12.8 L19 15.8 L21.8 18.2 L18 18.4 L16.8 21.8 L15 18.6 L11.4 19.4 L13.4 16.2 L10.8 13.8 L14.4 13.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${cloudPuff}" />
          <path d="${starBurst}" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="M3.4 8.6 L5.8 10.2 M28.6 8.4 L26.2 10.2 M4.2 25.4 L6.4 23.6 M27.8 25.4 L25.6 23.6" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${cloudPuff}" />
          <path d="${starBurst}" fill="#FFFFFF" />
          <path d="M3.4 8.6 L5.8 10.2 M28.6 8.4 L26.2 10.2 M4.2 25.4 L6.4 23.6 M27.8 25.4 L25.6 23.6" stroke="${c.primary}" stroke-width="1.6" />
        </g>`;
      }

      const cloudFill = c.primary;
      const burstFill = isDuotone ? c.secondary : '#FBBF24';
      const burstStroke = isDuotone ? c.stroke : '#D97706';
      const swishStroke = isDuotone ? c.stroke : '#EF4444';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Comic motion lines outside dust cloud -->
        <path d="M3.2 8.4 L6 10.4 M28.8 8.4 L26 10.4 M4 25.6 L6.6 23.4 M28 25.6 L25.4 23.4" fill="none" stroke="${swishStroke}" stroke-width="1.4" />
        <!-- Billowing cartoon dust puff -->
        <path d="${cloudPuff}" fill="${cloudFill}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Comic swirl curves -->
        <path d="M8 15.2 C7.8 13.4 9.6 12.4 11 13.4 M23.8 18.8 C24.6 17.2 23.6 15.2 22 15.6" fill="none" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Central comic scuffle starburst -->
        <path d="${starBurst}" fill="${burstFill}" stroke="${burstStroke}" stroke-width="1" />
        <circle cx="16.2" cy="16" r="1.4" fill="${swishStroke}" />
      </g>`;
    },
  },

  // 3. Saluting Face (U+1FAE1) — built on slightly-smiling-face foundation
  {
    id: 'saluting-face',
    char: '🫡',
    name: 'Saluting Face',
    unicodeHex: 'U+1FAE1',
    category: 'faces-hands',
    tags: ['saluting face', 'salute', 'respect', 'yes sir', 'military', 'aye', 'o7', '🫡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const handD =
        'M17.2 10.6 C16.6 9.8 17.4 8.6 18.6 9 L26.2 11.4 C27.8 12 28.4 13.6 27.4 15.2 L25.4 18.2 C24.6 19.2 23.2 18.8 22.8 17.4 L21.8 14.4 L17.6 12.2 C17 11.8 17 11 17.2 10.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <ellipse cx="11.2" cy="13.4" rx="1.5" ry="2" fill="${c.stroke}" stroke="none" />
          <ellipse cx="19" cy="13.8" rx="1.5" ry="2" fill="${c.stroke}" stroke="none" />
          <path d="M11.6 19.4 C13.6 20.8 17 20.8 19 19.4" />
          <path d="${handD}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.72)}" />
          <path d="M21 11.6 L25.2 13 M21.4 13.2 L24.6 14.4" stroke-width="${Math.max(0.9, sw * 0.5)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <ellipse cx="11.2" cy="13.4" rx="1.5" ry="2" fill="#FFFFFF" />
          <ellipse cx="19" cy="13.8" rx="1.5" ry="2" fill="#FFFFFF" />
          <path d="M11.6 19.4 C13.6 20.8 17 20.8 19 19.4" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="${handD}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.2" stroke-linejoin="round" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const handFill = isDuotone ? c.secondary : '#FFB300';
      const handStroke = isDuotone ? c.stroke : '#F57C00';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.3}" />
        <!-- Eyes & Earnest Half-Smile -->
        <ellipse cx="11.2" cy="13.4" rx="1.5" ry="2.1" fill="${featureColor}" />
        <ellipse cx="19" cy="13.8" rx="1.5" ry="2.1" fill="${featureColor}" />
        <circle cx="11.7" cy="12.6" r="0.55" fill="#FFFFFF" />
        <circle cx="19.5" cy="13" r="0.55" fill="#FFFFFF" />
        <path d="M11.6 19.4 C13.6 20.8 17 20.8 19 19.4" stroke="${featureColor}" stroke-width="1.9" stroke-linecap="round" fill="none" />
        <!-- Saluting Right Hand at Brow -->
        <path d="${handD}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 11.6 L25.2 13 M21.4 13.2 L24.6 14.4" stroke="${handStroke}" stroke-width="0.7" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 4. Face with Open Eyes and Hand Over Mouth (U+1FAE2)
  {
    id: 'face-with-open-eyes-and-hand-over-mouth',
    char: '🫢',
    name: 'Face with Open Eyes and Hand Over Mouth',
    unicodeHex: 'U+1FAE2',
    category: 'faces-hands',
    tags: ['face with open eyes and hand over mouth', 'gasp', 'shock', 'oops', 'surprise', 'amazed', '🫢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const handOverMouth =
        'M17.2 29.8 C14.6 29.6 12.4 28 11.8 25.4 L10.6 22.8 C10 21.6 11.4 20.6 12.4 21.8 L13.2 22.8 L11.4 19.6 C10.8 18.4 12.2 17.4 13.2 18.4 C13.4 17.2 15 16.8 15.8 18 C16.2 17 17.8 17 18.2 18.4 C19 17.8 20.2 18.6 20 20 L19.8 22.4 C21.2 23.6 22 25.6 21.4 27.6 C20.8 29.2 19 30 17.2 29.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M9.2 8.8 C10.6 7.4 12.6 7.4 13.8 8.6 M18.2 8.6 C19.4 7.4 21.4 7.4 22.8 8.8" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <ellipse cx="11.5" cy="12.6" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <ellipse cx="20.5" cy="12.6" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <path d="${handOverMouth}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="M13.6 19.4 L15 22.2 M16 19.2 L16.8 22 M18.2 19.8 L18.4 22.2" stroke-width="${Math.max(0.9, sw * 0.5)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M9.2 8.8 C10.6 7.4 12.6 7.4 13.8 8.6 M18.2 8.6 C19.4 7.4 21.4 7.4 22.8 8.8" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" fill="none" />
          <ellipse cx="11.5" cy="12.6" rx="1.6" ry="2.2" fill="#FFFFFF" />
          <ellipse cx="20.5" cy="12.6" rx="1.6" ry="2.2" fill="#FFFFFF" />
          <path d="${handOverMouth}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" stroke-linejoin="round" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const handFill = isDuotone ? c.secondary : '#FFB300';
      const handStroke = isDuotone ? c.stroke : '#F57C00';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.3}" />
        <!-- Surprised Raised Brows & Wide Open Eyes -->
        <path d="M9.2 8.8 C10.6 7.4 12.6 7.4 13.8 8.6 M18.2 8.6 C19.4 7.4 21.4 7.4 22.8 8.8" stroke="#795548" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <ellipse cx="11.5" cy="12.6" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="12.6" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="11.8" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="11.8" r="0.6" fill="#FFFFFF" />
        <!-- Cupped Hand Over Mouth -->
        <path d="${handOverMouth}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.6 19.4 L15 22.2 M16 19.2 L16.8 22 M18.2 19.8 L18.4 22.2" stroke="${handStroke}" stroke-width="0.65" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 5. Face with Peeking Eye (U+1FAE3)
  {
    id: 'face-with-peeking-eye',
    char: '🫣',
    name: 'Face with Peeking Eye',
    unicodeHex: 'U+1FAE3',
    category: 'faces-hands',
    tags: ['face with peeking eye', 'peek', 'peeking', 'nervous', 'scared', 'shy', 'cover eyes', '🫣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      // Left hand solid across left eye; right hand with two separated fingers framing the peeking right eye
      const leftHand =
        'M6.2 26.8 C5 25 5 22 6.2 19.4 L7 12.2 C7.2 10.6 9.2 10.6 9.4 12.2 L9.6 15.8 L10.2 10.6 C10.4 9 12.4 9 12.6 10.6 L12.6 15.6 L13.4 11.2 C13.6 9.6 15.6 9.8 15.6 11.4 L15.2 20.6 C15 24.4 12.6 27.6 9.4 28.2 C7.8 28.4 6.8 27.8 6.2 26.8 Z';
      const rightHand =
        'M25.8 26.8 C27 25 27 22 25.8 19.4 L25 12.2 C24.8 10.6 22.8 10.6 22.6 12.2 L22 17 C21.2 17.6 19.8 17.6 19 16.8 L18.6 10.8 C18.4 9.2 16.4 9.2 16.4 10.8 L16.8 20.6 C17 24.4 19.4 27.6 22.6 28.2 C24.2 28.4 25.2 27.8 25.8 26.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <ellipse cx="20.4" cy="13.2" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <path d="M13.6 22.6 C15 22 17 22 18.4 22.6" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="${leftHand}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="${rightHand}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <ellipse cx="20.4" cy="13.2" rx="1.6" ry="2.2" fill="#FFFFFF" />
          <path d="M13.6 22.6 C15 22 17 22 18.4 22.6" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" fill="none" />
          <path d="${leftHand}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" stroke-linejoin="round" />
          <path d="${rightHand}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" stroke-linejoin="round" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const handFill = isDuotone ? c.secondary : '#FFB300';
      const handStroke = isDuotone ? c.stroke : '#F57C00';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.3}" />
        <!-- Peeking right eye visible through parted fingers -->
        <ellipse cx="20.4" cy="13.2" rx="1.9" ry="2.4" fill="#FFFFFF" stroke="${featureColor}" stroke-width="0.7" />
        <ellipse cx="20.4" cy="13.3" rx="1.2" ry="1.5" fill="${featureColor}" />
        <circle cx="20.8" cy="12.6" r="0.45" fill="#FFFFFF" />
        <!-- Small nervous mouth -->
        <path d="M13.6 22.6 C15 22 17 22 18.4 22.6" stroke="${featureColor}" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <!-- Two hands raised with parted fingers on the right -->
        <path d="${leftHand}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round" />
        <path d="${rightHand}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round" />
      </g>`;
    },
  },

  // 6. Biting Lip (U+1FAE6) — built directly on mouth SVG template
  {
    id: 'biting-lip',
    char: '🫦',
    name: 'Biting Lip',
    unicodeHex: 'U+1FAE6',
    category: 'faces-hands',
    tags: ['biting lip', 'lip bite', 'flirt', 'nervous', 'anxious', 'mouth', 'lips', '🫦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FCA5A5', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const upperLip =
        'M4 16 C9 11 13 11 16 13 C19 11 23 11 28 16 C23 17 19 16 16 16 C13 16 9 17 4 16 Z';
      const lowerLip =
        'M4 16 C8 23.5 12 25 16 25 C20 25 24 23.5 28 16 C23.5 18 21.5 19.6 18.8 19.6 C16 19.6 14 17.5 4 16 Z';
      const teethRow =
        'M13.6 15.8 C15.6 15.6 19.4 15.6 22.8 16.2 C22.2 18.4 20.4 19.2 18.4 19.2 C16.2 19.2 14.4 18 13.6 15.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${upperLip}" />
          <path d="${lowerLip}" />
          <path d="${teethRow}" fill="#FFFFFF" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="M16.6 16 V19 M19.6 16 V19" stroke-width="${Math.max(0.9, sw * 0.5)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${upperLip}" />
          <path d="${lowerLip}" />
          <path d="${teethRow}" fill="#FFFFFF" />
        </g>`;
      }

      const lipFill = c.primary;
      const cavity = isDuotone ? c.stroke : '#7F1D1D';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Dark mouth cavity behind teeth -->
        <path d="M6 16 C10 14.5 22 14.5 26 16 C22 19.5 10 19.5 6 16 Z" fill="${cavity}" />
        <!-- Crisp upper teeth biting down onto lower lip -->
        <path d="${teethRow}" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1" />
        <path d="M16.6 16 V18.9 M19.6 16 V18.9" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Plump rounded lower lip indented by bite -->
        <path d="${lowerLip}" fill="${lipFill}" stroke="${c.stroke}" stroke-width="1.8" />
        <!-- Upper lip with Cupid's bow dip -->
        <path d="${upperLip}" fill="${lipFill}" stroke="${c.stroke}" stroke-width="1.8" />
        <!-- Glossy highlight specular spot -->
        <ellipse cx="13.8" cy="22" rx="3.2" ry="1.1" fill="#FFFFFF" opacity="0.65" />
      </g>`;
    },
  },

  // 7. Shaking Face (U+1FAE8) — built on slightly-smiling-face foundation
  {
    id: 'shaking-face',
    char: '🫨',
    name: 'Shaking Face',
    unicodeHex: 'U+1FAE8',
    category: 'faces-hands',
    tags: ['shaking face', 'shake', 'vibration', 'earthquake', 'shocked', 'dizzy', 'blur', '🫨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3.2 10.6 C1.8 13.8 1.8 18.2 3.2 21.4 M28.8 10.6 C30.2 13.8 30.2 18.2 28.8 21.4" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="M8.6 5.6 C5 8.2 3.6 12.2 3.6 16 C3.6 19.8 5 23.8 8.6 26.4" stroke-width="${Math.max(1, sw * 0.55)}" opacity="0.5" />
          <path d="M23.4 5.6 C27 8.2 28.4 12.2 28.4 16 C28.4 19.8 27 23.8 23.4 26.4" stroke-width="${Math.max(1, sw * 0.55)}" opacity="0.5" />
          <circle cx="16" cy="16" r="10.4" />
          <ellipse cx="12.2" cy="13.8" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <ellipse cx="19.8" cy="13.8" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <path d="M12.4 20.6 C13.6 19.4 14.8 21.6 16 20.4 C17.2 19.2 18.4 21.6 19.6 20.4" stroke-width="${Math.max(1.3, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="11.8" cy="16" r="9.6" opacity="0.35" />
          <circle cx="20.2" cy="16" r="9.6" opacity="0.35" />
          <circle cx="16" cy="16" r="10.4" />
          <ellipse cx="12.2" cy="13.8" rx="1.6" ry="2.2" fill="#FFFFFF" />
          <ellipse cx="19.8" cy="13.8" rx="1.6" ry="2.2" fill="#FFFFFF" />
          <path d="M12.4 20.6 C13.6 19.4 14.8 21.6 16 20.4 C17.2 19.2 18.4 21.6 19.6 20.4" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" fill="none" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <!-- Motion-blurred horizontal ghost duplicates -->
        <circle cx="11.2" cy="16" r="10.2" fill="${c.primary}" opacity="0.32" />
        <circle cx="20.8" cy="16" r="10.2" fill="${c.primary}" opacity="0.32" />
        <!-- Vibration arcs on sides -->
        <path d="M2.6 10.6 C1.2 13.8 1.2 18.2 2.6 21.4 M29.4 10.6 C30.8 13.8 30.8 18.2 29.4 21.4" stroke="#FFA000" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.7" />
        <!-- Main Face Sphere -->
        <circle cx="16" cy="16" r="10.6" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15.2" r="9.2" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.3}" />
        <!-- Double-vision ghost pupils -->
        <ellipse cx="10.6" cy="13.8" rx="1.4" ry="2" fill="${featureColor}" opacity="0.25" />
        <ellipse cx="21.4" cy="13.8" rx="1.4" ry="2" fill="${featureColor}" opacity="0.25" />
        <!-- Primary shocked eyes & wavy trembling mouth -->
        <ellipse cx="12.2" cy="13.8" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="19.8" cy="13.8" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12.7" cy="13" r="0.55" fill="#FFFFFF" />
        <circle cx="20.3" cy="13" r="0.55" fill="#FFFFFF" />
        <path d="M12.4 20.6 C13.6 19.4 14.8 21.6 16 20.4 C17.2 19.2 18.4 21.6 19.6 20.4" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 8. Face with Bags Under Eyes (U+1FAE9) — built on slightly-smiling-face foundation
  {
    id: 'face-with-bags-under-eyes',
    char: '\u{1FAE9}',
    name: 'Face with Bags Under Eyes',
    unicodeHex: 'U+1FAE9',
    category: 'faces-hands',
    tags: ['face with bags under eyes', 'tired', 'exhausted', 'sleepy', 'fatigued', 'dark circles', 'eye bags', '🫩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M8.6 9.8 L13.4 10.6 M23.4 9.8 L18.6 10.6" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="M8.8 13.4 H14.2 M17.8 13.4 H23.2" />
          <circle cx="11.5" cy="14.4" r="1.2" fill="${c.stroke}" stroke="none" />
          <circle cx="20.5" cy="14.4" r="1.2" fill="${c.stroke}" stroke="none" />
          <path d="M8.6 16.4 C10.2 18.4 13 18.4 14.4 16.4 M17.6 16.4 C19 18.4 21.8 18.4 23.4 16.4" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="M12.2 22 C14.6 21.2 17.4 21.2 19.8 22" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.8 13.4 H14.2 M17.8 13.4 H23.2" stroke-width="2" />
            <circle cx="11.5" cy="14.6" r="1.2" fill="#FFFFFF" stroke="none" />
            <circle cx="20.5" cy="14.6" r="1.2" fill="#FFFFFF" stroke="none" />
            <path d="M8.6 16.6 C10.2 18.6 13 18.6 14.4 16.6 M17.6 16.6 C19 18.6 21.8 18.6 23.4 16.6" stroke-width="1.3" />
            <path d="M12.2 22 C14.6 21.2 17.4 21.2 19.8 22" stroke-width="2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const bagColor = isDuotone ? c.stroke : '#E65100';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.3}" />
        <!-- Drooping exhausted eyebrows -->
        <path d="M8.6 9.8 L13.4 10.6 M23.4 9.8 L18.6 10.6" stroke="#795548" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
        <!-- Heavy half-lidded eyes -->
        <path d="M8.8 13.4 C9.2 16 13.8 16 14.2 13.4 Z" fill="#FFFFFF" />
        <path d="M17.8 13.4 C18.2 16 22.8 16 23.2 13.4 Z" fill="#FFFFFF" />
        <circle cx="11.5" cy="14.2" r="1.25" fill="${featureColor}" />
        <circle cx="20.5" cy="14.2" r="1.25" fill="${featureColor}" />
        <path d="M8.6 13.4 H14.4 M17.6 13.4 H23.4" stroke="${featureColor}" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <!-- Prominent Puffy Under-Eye Bags -->
        <path d="M8.4 16 C10 18.4 13.2 18.4 14.6 16 C13 17.6 10 17.6 8.4 16 Z" fill="${bagColor}" opacity="0.4" />
        <path d="M8.6 16.4 C10.2 18.4 13 18.4 14.4 16.4 M17.6 16.4 C19 18.4 21.8 18.4 23.4 16.4" stroke="${bagColor}" stroke-width="1.15" stroke-linecap="round" fill="none" opacity="0.85" />
        <path d="M17.4 16 C19 18.4 22.2 18.4 23.6 16 C22 17.6 19 17.6 17.4 16 Z" fill="${bagColor}" opacity="0.4" />
        <!-- Weary Flat Slight Frown -->
        <path d="M12.2 22 C14.6 21.2 17.4 21.2 19.8 22" stroke="${featureColor}" stroke-width="1.9" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 9. Distorted Face (U+1FAEA) — 😳 Flushed Face with Fisheye Lens Distortion
  {
    id: 'distorted-face',
    char: '\u{1FAEA}',
    name: 'Distorted Face',
    unicodeHex: 'U+1FAEA',
    category: 'faces-hands',
    tags: ['distorted face', 'fisheye', 'flushed', 'bulge', 'warped', 'wide angle', 'surreal', '🫪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="13" />
          <!-- Fisheye steeply arched brows from 😳 -->
          <path d="M6.4 7.6 C8.4 4.2 12.6 4.4 14.2 7.4" />
          <path d="M25.6 7.6 C23.6 4.2 19.4 4.4 17.8 7.4" />
          <!-- Fisheye-bulged giant 😳 eyes -->
          <ellipse cx="10.4" cy="14" rx="4.5" ry="5.4" transform="rotate(-7 10.4 14)" stroke-width="${Math.max(1.1, sw * 0.72)}" />
          <ellipse cx="21.6" cy="14" rx="4.5" ry="5.4" transform="rotate(7 21.6 14)" stroke-width="${Math.max(1.1, sw * 0.72)}" />
          <circle cx="10.6" cy="14" r="2.1" fill="${c.stroke}" stroke="none" />
          <circle cx="21.4" cy="14" r="2.1" fill="${c.stroke}" stroke="none" />
          <!-- Pinched low 😳 mouth -->
          <path d="M13 24.4 C15 23.8 17 23.8 19 24.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="13" />
          <g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M6.4 7.6 C8.4 4.2 12.6 4.4 14.2 7.4" stroke-width="2" />
            <path d="M25.6 7.6 C23.6 4.2 19.4 4.4 17.8 7.4" stroke-width="2" />
            <ellipse cx="10.4" cy="14" rx="4.5" ry="5.4" transform="rotate(-7 10.4 14)" fill="#FFFFFF" stroke="none" />
            <ellipse cx="21.6" cy="14" rx="4.5" ry="5.4" transform="rotate(7 21.6 14)" fill="#FFFFFF" stroke="none" />
            <circle cx="10.6" cy="14" r="2.1" fill="${c.primary}" stroke="none" />
            <circle cx="21.4" cy="14" r="2.1" fill="${c.primary}" stroke="none" />
            <path d="M13 24.4 C15 23.8 17 23.8 19 24.4" stroke-width="2" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FB7185';

      return `${badge}<g>
        <!-- Fisheye-swollen slightly-smiling-face sphere -->
        <circle cx="16" cy="16" r="13" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <!-- Central fisheye lens highlight dome -->
        <circle cx="16" cy="14.6" r="9.8" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.16 : 0.36}" />
        <!-- Squeezed outward rim blush from 😳 -->
        <ellipse cx="5.2" cy="21.2" rx="2.2" ry="2.8" transform="rotate(-24 5.2 21.2)" fill="${blushColor}" opacity="0.65" />
        <ellipse cx="26.8" cy="21.2" rx="2.2" ry="2.8" transform="rotate(24 26.8 21.2)" fill="${blushColor}" opacity="0.65" />
        <!-- Warped steeply arched 😳 eyebrows -->
        <path d="M6.4 7.6 C8.4 4.2 12.6 4.4 14.2 7.4" stroke="${featureColor}" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <path d="M25.6 7.6 C23.6 4.2 19.4 4.4 17.8 7.4" stroke="${featureColor}" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <!-- Looming fisheye-magnified 😳 wide eyes -->
        <ellipse cx="10.4" cy="14" rx="4.5" ry="5.4" transform="rotate(-7 10.4 14)" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1.1" />
        <ellipse cx="21.6" cy="14" rx="4.5" ry="5.4" transform="rotate(7 21.6 14)" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1.1" />
        <circle cx="10.6" cy="14" r="2.15" fill="${featureColor}" />
        <circle cx="21.4" cy="14" r="2.15" fill="${featureColor}" />
        <circle cx="11.4" cy="13" r="0.7" fill="#FFFFFF" />
        <circle cx="22.2" cy="13" r="0.7" fill="#FFFFFF" />
        <!-- Pinched low 😳 mouth -->
        <path d="M13 24.4 C15 23.8 17 23.8 19 24.4" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
];
