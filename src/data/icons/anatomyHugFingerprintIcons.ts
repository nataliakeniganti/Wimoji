import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const anatomyHugFingerprintIcons: WimojiIconDef[] = [
  // 1. Anatomical Heart (U+1FAC0)
  {
    id: 'anatomical-heart',
    char: '🫀',
    name: 'Anatomical Heart',
    unicodeHex: 'U+1FAC0',
    category: 'objects-places',
    tags: ['anatomical heart', 'heart', 'organ', 'cardiology', 'medical', 'pulse', '🫀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#2563EB', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const heartChamber =
        'M11 10.6 C8 11.4 6.6 15.2 7.6 19.6 C8.8 24.4 13.6 28.4 18.4 28.4 C22.6 28.4 25.4 23.6 24.8 18 C24.4 14.2 21.8 11.4 18.4 10.8 Z';
      const aorta =
        'M13.6 11.6 V7.6 C13.6 5.4 15.6 4.2 18 4.4 C20.4 4.6 21.8 6.4 21.4 8.8 L20.8 12.2';
      const venaCava = 'M9.8 12.2 V6.2 H12.4 V11';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${venaCava}" />
          <path d="${aorta}" />
          <path d="M15.4 4.6 V2.8 M17.6 4.2 V2.4 M19.6 4.8 L20.4 3.2" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="${heartChamber}" />
          <path d="M16.2 13.6 C15.8 18 14.2 21.4 11.6 24 M15.4 17.8 L19.2 20.6" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${venaCava} Z" />
          <path d="M13.2 11.8 V7.6 C13.2 5 15.6 3.8 18.2 4 C20.8 4.2 22.2 6.2 21.8 9 L21.2 12.4 Z" />
          <path d="M15.4 4.6 V2.8 M17.6 4.2 V2.4 M19.6 4.8 L20.4 3.2" fill="none" stroke="${c.primary}" stroke-width="1.4" />
          <path d="${heartChamber}" />
          <path d="M16.2 13.6 C15.8 18 14.2 21.4 11.6 24 M15.4 17.8 L19.2 20.6" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const body = c.primary;
      const vesselBlue = isDuotone ? c.secondary : '#2563EB';
      const vesselBlueStroke = isDuotone ? c.stroke : '#1E3A8A';
      const aortaRed = isDuotone ? c.secondary : '#EF4444';
      const veinLine = isDuotone ? c.secondary : '#FCA5A5';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Superior Vena Cava & Pulmonary Artery (blue) -->
        <path d="M9.6 12.4 V6 H12.4 V11.4 Z" fill="${vesselBlue}" stroke="${vesselBlueStroke}" stroke-width="1" />
        <!-- Arched Aorta & top branches -->
        <path d="M15.4 4.8 V2.8 M17.6 4.2 V2.4 M19.6 4.8 L20.4 3.2" fill="none" stroke="${c.stroke}" stroke-width="1.5" />
        <path d="M13.2 12 V7.6 C13.2 5 15.6 3.8 18.2 4 C20.8 4.2 22.2 6.2 21.8 9 L21 12.4 Z" fill="${aortaRed}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Main Cardiac Chambers -->
        <path d="${heartChamber}" fill="${body}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Pulmonary Trunk crossing front -->
        <path d="M14.2 11.8 C16.2 10.6 19.6 10.2 23.4 11.4 L22.6 13.8 C19.6 13 17 13.2 15 14 Z" fill="${vesselBlue}" stroke="${vesselBlueStroke}" stroke-width="0.9" />
        <!-- Coronary Vessels & Highlight -->
        <path d="M16.2 14.2 C15.8 18.4 14.2 21.6 11.6 24 M15.4 18.2 L19.4 21" fill="none" stroke="${veinLine}" stroke-width="1.1" />
        <path d="M9.8 16.4 C9.6 19.4 10.6 21.8 12.2 23.4" fill="none" stroke="#FCA5A5" stroke-width="1.1" opacity="0.65" />
      </g>`;
    },
  },

  // 2. Lungs (U+1FAC1)
  {
    id: 'lungs',
    char: '🫁',
    name: 'Lungs',
    unicodeHex: 'U+1FAC1',
    category: 'objects-places',
    tags: ['lungs', 'breathing', 'respiratory', 'organ', 'anatomy', 'breath', 'oxygen', '🫁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FB7185', fillSecondary: '#FDA4AF', stroke: '#9F1239' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const leftLobe =
        'M13.4 9.8 C9.4 9.2 6.4 12.8 5.2 18.4 C4 23.6 5 26.8 8.4 26.8 C11.4 26.8 13.4 24.8 13.8 21.4 C14.2 17.6 14 12.6 13.4 9.8 Z';
      const rightLobe =
        'M18.6 9.8 C22.6 9.2 25.6 12.8 26.8 18.4 C28 23.6 27 26.8 23.6 26.8 C20.6 26.8 18.6 24.8 18.2 21.4 C17.8 17.6 18 12.6 18.6 9.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M14.6 4.4 V12.4 L10.8 16.2 M17.4 4.4 V12.4 L21.2 16.2" />
          <path d="M14.6 6.8 H17.4 M14.6 9.4 H17.4" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="${leftLobe}" />
          <path d="${rightLobe}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.6 4.4 H17.4 V12.8 L20.6 15.6 L19.2 17 L16 14 L12.8 17 L11.4 15.6 L14.6 12.8 Z" />
          <path d="${leftLobe}" />
          <path d="${rightLobe}" />
          <path d="M11 16 L8.6 20.6 M21 16 L23.4 20.6" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const lobe = c.primary;
      const trachea = isDuotone ? c.secondary : '#FECDD3';
      const bronchi = isDuotone ? c.stroke : '#BE123C';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Trachea windpipe & rings -->
        <path d="M14.5 4.4 H17.5 V12.4 L20.6 15.6 L19 17 L16 14 L13 17 L11.4 15.6 L14.5 12.4 Z" fill="${trachea}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M14.8 6.8 H17.2 M14.8 9.2 H17.2 M14.8 11.4 H17.2" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Left & Right Lung Lobes -->
        <path d="${leftLobe}" fill="${lobe}" stroke="${c.stroke}" stroke-width="1.15" />
        <path d="${rightLobe}" fill="${lobe}" stroke="${c.stroke}" stroke-width="1.15" />
        <!-- Bronchial tree branches & soft highlight -->
        <path d="M12.2 14.8 L9.6 18.8 M10.6 17.4 L8 18.2 M10 18.4 L10.6 22" fill="none" stroke="${bronchi}" stroke-width="1.1" opacity="0.6" />
        <path d="M19.8 14.8 L22.4 18.8 M21.4 17.4 L24 18.2 M22 18.4 L21.4 22" fill="none" stroke="${bronchi}" stroke-width="1.1" opacity="0.6" />
        <path d="M8.6 14.4 C7.4 16.4 7 18.8 7 21" fill="none" stroke="#FFE4E6" stroke-width="1.2" opacity="0.7" />
      </g>`;
    },
  },

  // 3. People Hugging (U+1FAC2)
  {
    id: 'people-hugging',
    char: '🫂',
    name: 'People Hugging',
    unicodeHex: 'U+1FAC2',
    category: 'faces-hands',
    tags: ['people hugging', 'hug', 'embrace', 'comfort', 'care', 'love', 'support', '🫂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#38BDF8', stroke: '#075985' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const backHead = 'M11.6 10.6 A4.6 4.8 0 1 0 20.8 10.6 A4.6 4.8 0 1 0 11.6 10.6 Z';
      const backBody = 'M5.2 28 C5.2 21 8.8 17.4 14 17.4 C18.6 17.4 21.8 20.6 21.8 28 Z';
      const frontHead = 'M15.4 12.4 A4.4 4.6 0 1 0 24.2 12.4 A4.4 4.6 0 1 0 15.4 12.4 Z';
      const frontBody = 'M11.4 28 C11.4 21.4 14.8 18.2 19.8 18.2 C24.6 18.2 27.6 21.6 27.6 28 Z';
      const huggingArm = 'M8.4 22.8 C10.6 25 16.2 25 20.4 22.8 C21.8 22 22.6 23.6 21 24.8 C16.6 27.6 10.4 27.6 7 24.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${backHead}" />
          <path d="${backBody}" />
          <path d="${frontHead}" fill="#FFFFFF" />
          <path d="${frontBody}" fill="#FFFFFF" />
          <path d="${huggingArm}" fill="#FFFFFF" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path d="${backHead}" />
          <path d="${backBody}" />
          <path d="${frontHead}" />
          <path d="${frontBody}" />
          <path d="${huggingArm}" />
        </g>`;
      }

      const backFill = c.primary;
      const frontFill = isDuotone ? c.secondary : '#38BDF8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back person figure -->
        <path d="${backBody}" fill="${backFill}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="${backHead}" fill="${backFill}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Front person figure -->
        <path d="${frontBody}" fill="${frontFill}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="${frontHead}" fill="${frontFill}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Wrapping embrace arm -->
        <path d="${huggingArm}" fill="${backFill}" stroke="${c.stroke}" stroke-width="1.1" />
      </g>`;
    },
  },

  // 4. Fingerprint (U+1FAC6)
  {
    id: 'fingerprint',
    char: '🫆',
    name: 'Fingerprint',
    unicodeHex: 'U+1FAC6',
    category: 'objects-places',
    tags: ['fingerprint', 'identity', 'biometric', 'forensics', 'security', 'touch id', 'print', '🫆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#4F46E5', fillSecondary: '#C7D2FE', stroke: '#312E81' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const ridges = `
        <path d="M9.6 7.8 C13.2 4.6 18.8 4.6 22.4 7.8" />
        <path d="M7.6 11.4 C10.6 7 21.4 7 24.4 11.4" />
        <path d="M6.8 16 C6.8 10 11 7.6 16 7.6 C21 7.6 25.2 10 25.2 16 C25.2 18.4 24.6 20.6 23.6 22.4" />
        <path d="M8.8 20.8 C8.2 18.6 8.6 14 10.6 11.6 C13 9.2 19 9.2 21.4 11.6 C23.4 13.8 23.4 18.6 21.8 22.8" />
        <path d="M10.8 24 C10.2 20.6 10.4 15.8 12.2 13.6 C14.2 11.4 18 11.4 19.8 13.6 C21.2 15.6 20.8 20.8 19.2 25" />
        <path d="M13 26.2 C12.4 22.8 12.4 17.6 14 15.6 C15.2 14.2 17 14.2 17.8 15.8 C18.6 17.8 18 22.6 16.4 26.8" />
        <path d="M15.4 27.4 C15.2 24.2 15.2 20.4 15.8 18" />
      `;

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${Math.max(1.3, sw * 0.72)}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${ridges}
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="16" cy="16" rx="10.4" ry="12.6" />
          <g fill="none" stroke="#FFFFFF" stroke-width="1.35">
            ${ridges}
          </g>
        </g>`;
      }

      const bg = isDuotone ? c.secondary : '#E0E7FF';
      const ink = isDuotone ? c.stroke : c.primary;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="16" cy="16" rx="10.6" ry="12.6" fill="${bg}" opacity="0.6" />
        <g fill="none" stroke="${ink}" stroke-width="1.5">
          ${ridges}
        </g>
      </g>`;
    },
  },
];
