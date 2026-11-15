import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const weddingHeartsIcons: WimojiIconDef[] = [
  // 1. Bouquet (U+1F490)
  {
    id: 'bouquet',
    char: '💐',
    name: 'Bouquet',
    unicodeHex: 'U+1F490',
    category: 'objects-places',
    tags: ['bouquet', 'flowers', 'roses', 'tulips', 'blossoms', 'wedding', 'gift', 'nature', 'romance', 'love', '💐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#EC4899', fillAccent: '#22C55E', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Wrapped paper funnel -->
          <polygon points="12,28 20,28 23,19 9,19" />
          <line x1="10.5" y1="23.5" x2="21.5" y2="23.5" />
          <!-- Green foliage -->
          <path d="M8 18 C7 13 11 12 13 15" />
          <path d="M24 18 C25 13 21 12 19 15" />
          <!-- Blossom heads -->
          <circle cx="16" cy="12" r="3.5" />
          <circle cx="11" cy="14" r="3" />
          <circle cx="21" cy="14" r="3" />
          <circle cx="16" cy="7.5" r="2.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Bouquet craft paper wrapping -->
        <polygon points="12,28 20,28 23.5,18.5 8.5,18.5" fill="#FDE68A" stroke="#D97706" stroke-width="0.8" />
        <!-- Wrapping ribbon bow -->
        <line x1="10" y1="23" x2="22" y2="23" stroke="${c.primary}" stroke-width="1.8" />
        <ellipse cx="14.5" cy="23" rx="1.5" ry="1" fill="${c.primary}" />
        <ellipse cx="17.5" cy="23" rx="1.5" ry="1" fill="${c.primary}" />
        <!-- Lush green leaves -->
        <path d="M8 18 C6.5 12 11 12 13.5 15.5 Z" fill="#22C55E" stroke="#16A34A" stroke-width="0.6" />
        <path d="M24 18 C25.5 12 21 12 18.5 15.5 Z" fill="#22C55E" stroke="#16A34A" stroke-width="0.6" />
        <!-- Flower blooms cluster -->
        <!-- Left Pink Blossom -->
        <circle cx="11" cy="14" r="3.2" fill="${opts.style === 'duotone' ? c.secondary : '#EC4899'}" stroke="#BE185D" stroke-width="0.6" />
        <circle cx="11" cy="14" r="1.2" fill="#FDE047" />
        <!-- Right Lavender Blossom -->
        <circle cx="21" cy="14" r="3.2" fill="${opts.style === 'duotone' ? c.secondary : '#A855F7'}" stroke="#7E22CE" stroke-width="0.6" />
        <circle cx="21" cy="14" r="1.2" fill="#FDE047" />
        <!-- Top Sunny Blossom -->
        <circle cx="16" cy="7.5" r="2.8" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <circle cx="16" cy="7.5" r="1" fill="#EA580C" />
        <!-- Centerpiece Red Rose / Tulip -->
        <circle cx="16" cy="12.5" r="3.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M14 11 C15 9.5 17 9.5 18 11 C18 13 14 13 14 11 Z" fill="#BE123C" />
        <path d="M14.5 12.5 C15.5 14 16.5 14 17.5 12.5" stroke="#FFFFFF" stroke-width="0.8" fill="none" opacity="0.7" />
      </g>`;
    },
  },

  // 2. Couple with Heart (U+1F491)
  {
    id: 'couple-with-heart',
    char: '💑',
    name: 'Couple with Heart',
    unicodeHex: 'U+1F491',
    category: 'faces-hands',
    tags: ['couple with heart', 'love', 'couple', 'partners', 'lovers', 'romance', 'relationship', 'heart', 'affection', '💑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#EF4444', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Floating Heart between couple -->
          <path d="M16 13.5 s-5-3.2-5-7 a2.7 2.7 0 0 1 5-1.5 2.7 2.7 0 0 1 5 1.5 c0 3.8-5 7-5 7 z" fill="${c.stroke}" />
          <!-- Left person -->
          <circle cx="10.5" cy="19" r="4.5" />
          <path d="M6.5 19 C6.5 14.5 8.5 14 11.5 14" />
          <circle cx="9" cy="19" r="0.8" fill="${c.stroke}" />
          <circle cx="12" cy="19" r="0.8" fill="${c.stroke}" />
          <path d="M9.5 21 C10.2 21.8 11.5 21.8 12 21" />
          <path d="M5 28 C5 24 8 23 11 23 C13 23 14.5 24 15.5 26" />
          <!-- Right person -->
          <circle cx="21.5" cy="19" r="4.5" />
          <path d="M25.5 19 C25.5 14.5 23.5 14 20.5 14" />
          <circle cx="20" cy="19" r="0.8" fill="${c.stroke}" />
          <circle cx="23" cy="19" r="0.8" fill="${c.stroke}" />
          <path d="M20 21 C20.5 21.8 21.8 21.8 22.5 21" />
          <path d="M27 28 C27 24 24 23 21 23 C19 23 17.5 24 16.5 26" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Floating Red Heart based on red-heart SVG -->
        <path d="M16 13.5 s-5-3.2-5-7 a2.7 2.7 0 0 1 5-1.5 2.7 2.7 0 0 1 5 1.5 c0 3.8-5 7-5 7 z" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke="#991B1B" stroke-width="0.6" />
        <!-- Left person clothes (Blue) -->
        <path d="M5 28 C5 24 8 23 11 23 C13.5 23 15 24.5 15.8 27 Z" fill="#3B82F6" stroke="#1D4ED8" stroke-width="0.6" />
        <!-- Right person clothes (Pink) -->
        <path d="M27 28 C27 24 24 23 21 23 C18.5 23 17 24.5 16.2 27 Z" fill="#EC4899" stroke="#BE185D" stroke-width="0.6" />
        <!-- Left Head -->
        <circle cx="10.5" cy="19" r="4.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M6.5 19 C6.5 14.5 8.5 14 11.5 14 C13.5 14 14.5 15 15 16.5 C13.5 15.5 10.5 15.5 8.5 17 Z" fill="${opts.style === 'duotone' ? c.secondary : '#475569'}" />
        <circle cx="9.2" cy="19" r="0.7" fill="#1E293B" />
        <circle cx="12.2" cy="19" r="0.7" fill="#1E293B" />
        <path d="M9.8 21.2 C10.4 21.8 11.4 21.8 11.8 21.2" stroke="#E11D48" stroke-width="1" fill="none" />
        <circle cx="8.5" cy="20.2" r="0.8" fill="#FDA4AF" />
        <!-- Right Head -->
        <circle cx="21.5" cy="19" r="4.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M25.5 19 C25.5 14 22.5 13.5 19.5 14 C18.5 14.5 18 15.5 17.5 17 C19 15.5 22 15.5 24.5 17.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#854D0E'}" />
        <circle cx="19.8" cy="19" r="0.7" fill="#1E293B" />
        <circle cx="22.8" cy="19" r="0.7" fill="#1E293B" />
        <path d="M20.2 21.2 C20.8 21.8 21.8 21.8 22.4 21.2" stroke="#E11D48" stroke-width="1" fill="none" />
        <circle cx="23.5" cy="20.2" r="0.8" fill="#FDA4AF" />
      </g>`;
    },
  },

  // 3. Wedding (U+1F492)
  {
    id: 'wedding',
    char: '💒',
    name: 'Wedding',
    unicodeHex: 'U+1F492',
    category: 'objects-places',
    tags: ['wedding', 'chapel', 'church', 'marriage', 'romance', 'love', 'heart', 'ceremony', 'bride', 'groom', '💒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#EF4444', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Steeple tower & cross -->
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="14.5" y1="3.5" x2="17.5" y2="3.5" />
          <polygon points="14,12 16,6 18,12" />
          <!-- Chapel facade and roof -->
          <polygon points="7,16 16,11 25,16" />
          <rect x="7" y="16" width="18" height="11" />
          <!-- Heart emblem on front -->
          <path d="M16 19.5 s-3-2-3-4.2 a1.6 1.6 0 0 1 3-0.9 1.6 1.6 0 0 1 3 0.9 c0 2.2-3 4.2-3 4.2 z" fill="${c.stroke}" />
          <!-- Arched wedding doors -->
          <path d="M13 27 V23 C13 21 19 21 19 23 V27" />
          <line x1="16" y1="21" x2="16" y2="27" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Golden Cross atop steeple -->
        <line x1="16" y1="2" x2="16" y2="6" stroke="#FBBF24" stroke-width="1.2" />
        <line x1="14.5" y1="3.5" x2="17.5" y2="3.5" stroke="#FBBF24" stroke-width="1.2" />
        <!-- Steeple Spire -->
        <polygon points="14,12 16,6 18,12" fill="#E2E8F0" stroke="#94A3B8" stroke-width="0.8" />
        <rect x="14" y="10" width="4" height="2" fill="#FBBF24" />
        <!-- Pitched Roof -->
        <polygon points="6,16 16,10 26,16" fill="#F43F5E" stroke="#BE123C" stroke-width="0.8" />
        <!-- White Chapel Building Body -->
        <rect x="7" y="16" width="18" height="11" fill="${c.primary}" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Romantic Red Heart directly on chapel facade -->
        <path d="M16 19.5 s-3-2-3-4.2 a1.6 1.6 0 0 1 3-0.9 1.6 1.6 0 0 1 3 0.9 c0 2.2-3 4.2-3 4.2 z" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke="#991B1B" stroke-width="0.5" />
        <!-- Arched Purple Stained Glass Wedding Doorway -->
        <path d="M13 27 V23 C13 21 19 21 19 23 V27 Z" fill="#A855F7" stroke="#7E22CE" stroke-width="0.8" />
        <line x1="16" y1="21" x2="16" y2="27" stroke="#FDE047" stroke-width="0.8" />
        <!-- Small flanking floral topiaries -->
        <circle cx="5" cy="25" r="2" fill="#22C55E" />
        <rect x="4.5" y="25" width="1" height="2" fill="#78350F" />
        <circle cx="27" cy="25" r="2" fill="#22C55E" />
        <rect x="26.5" y="25" width="1" height="2" fill="#78350F" />
      </g>`;
    },
  },

  // 4. Beating Heart (U+1F493) - Based on Wimoji red-heart
  {
    id: 'beating-heart',
    char: '💓',
    name: 'Beating Heart',
    unicodeHex: 'U+1F493',
    category: 'symbols',
    tags: ['beating heart', 'heart', 'pulse', 'vibrating heart', 'love', 'flutter', 'excitement', 'alarm', '💓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FB7185', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Main Heart -->
          <g transform="translate(16 16) scale(0.82) translate(-16 -16)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          </g>
          <!-- Left pulse vibration waves -->
          <path d="M5.5 12 C4 14.5 4 18.5 5.5 21" />
          <path d="M2.5 10 C0.5 14 0.5 19 2.5 23" />
          <!-- Right pulse vibration waves -->
          <path d="M26.5 12 C28 14.5 28 18.5 26.5 21" />
          <path d="M29.5 10 C31.5 14 31.5 19 29.5 23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Beating red heart with pulse glow -->
        <g transform="translate(16 16) scale(0.82) translate(-16 -16)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />
        </g>
        <!-- Vibrating sound / pulse waves -->
        <path d="M5.5 12 C4 14.5 4 18.5 5.5 21" stroke="${opts.style === 'duotone' ? c.secondary : '#FB7185'}" stroke-width="1.8" fill="none" />
        <path d="M2.5 10 C0.5 14 0.5 19 2.5 23" stroke="${opts.style === 'duotone' ? c.secondary : '#FDA4AF'}" stroke-width="1.6" fill="none" />
        <path d="M26.5 12 C28 14.5 28 18.5 26.5 21" stroke="${opts.style === 'duotone' ? c.secondary : '#FB7185'}" stroke-width="1.8" fill="none" />
        <path d="M29.5 10 C31.5 14 31.5 19 29.5 23" stroke="${opts.style === 'duotone' ? c.secondary : '#FDA4AF'}" stroke-width="1.6" fill="none" />
      </g>`;
    },
  },

  // 5. Broken Heart (U+1F494) - Based on Wimoji red-heart
  {
    id: 'broken-heart',
    char: '💔',
    name: 'Broken Heart',
    unicodeHex: 'U+1F494',
    category: 'symbols',
    tags: ['broken heart', 'heartbreak', 'breakup', 'sad', 'sorrow', 'grief', 'pain', 'loss', '💔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#BE123C', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left broken fragment -->
          <path d="M15.5 10 C13.5 7.5 10.5 7 8 8.5 C5.5 10.5 5.5 14 5.5 15.5 C5.5 21 11.5 25.5 14.5 27.5 L12.5 22 L16.5 17.5 L13 13.5 Z" />
          <!-- Right broken fragment -->
          <path d="M17.5 10 C19.5 7.5 22.5 7 25 8.5 C27.5 10.5 27.5 14 27.5 15.5 C27.5 21 21.5 25.5 17.5 27.5 L15.5 22 L19.5 17.5 L16 13.5 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Left broken half -->
        <path d="M15.5 10 C13.5 7.5 10.5 7 8 8.5 C5.5 10.5 5.5 14 5.5 15.5 C5.5 21 11.5 25.5 14.5 27.5 L12.5 22 L16.5 17.5 L13 13.5 Z" fill="${c.primary}" />
        <!-- Right broken half -->
        <path d="M17.5 10 C19.5 7.5 22.5 7 25 8.5 C27.5 10.5 27.5 14 27.5 15.5 C27.5 21 21.5 25.5 17.5 27.5 L15.5 22 L19.5 17.5 L16 13.5 Z" fill="${opts.style === 'duotone' ? c.secondary : c.primary}" />
      </g>`;
    },
  },

  // 6. Two Hearts (U+1F495) - Based on Wimoji red-heart
  {
    id: 'two-hearts',
    char: '💕',
    name: 'Two Hearts',
    unicodeHex: 'U+1F495',
    category: 'symbols',
    tags: ['two hearts', 'hearts', 'pink hearts', 'love', 'affection', 'romance', 'sweet', 'floating hearts', '💕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F43F5E', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Main lower heart -->
          <g transform="translate(11 18) scale(0.72) rotate(-12) translate(-16 -17)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          </g>
          <!-- Small upper floating heart -->
          <g transform="translate(22 9) scale(0.48) rotate(14) translate(-16 -17)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          </g>
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main lower pink heart -->
        <g transform="translate(11 18) scale(0.72) rotate(-12) translate(-16 -17)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />
        </g>
        <!-- Small upper floating heart -->
        <g transform="translate(22 9) scale(0.48) rotate(14) translate(-16 -17)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${opts.style === 'duotone' ? c.secondary : '#F43F5E'}" />
        </g>
      </g>`;
    },
  },

  // 7. Sparkling Heart (U+1F496) - Based on Wimoji red-heart
  {
    id: 'sparkling-heart',
    char: '💖',
    name: 'Sparkling Heart',
    unicodeHex: 'U+1F496',
    category: 'symbols',
    tags: ['sparkling heart', 'heart', 'sparkle', 'glitter', 'shine', 'love', 'affection', 'stars', 'magical', '💖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#FDE047', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          <!-- Star sparkle top right -->
          <polygon points="26,4 27,6.8 29.5,7.8 27,8.8 26,11.5 25,8.8 22.5,7.8 25,6.8" fill="${c.stroke}" />
          <!-- Star sparkle bottom left -->
          <polygon points="6,21 6.8,22.8 8.8,23.5 6.8,24.2 6,26 5.2,24.2 3.2,23.5 5.2,22.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main Heart without border or shiny spot -->
        <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />
        <!-- Big Gold Twinkle Star (top-right) -->
        <polygon points="26,3.5 27,6.5 30,7.5 27,8.5 26,11.5 25,8.5 22,7.5 25,6.5" fill="${opts.style === 'duotone' ? c.secondary : '#FDE047'}" stroke="#D97706" stroke-width="0.5" />
        <!-- Medium Gold Twinkle Star (bottom-left) -->
        <polygon points="6,21 6.8,22.8 8.8,23.5 6.8,24.2 6,26 5.2,24.2 3.2,23.5 5.2,22.8" fill="${opts.style === 'duotone' ? c.secondary : '#FDE047'}" stroke="#D97706" stroke-width="0.5" />
        <!-- Small White Sparkle (top-left) -->
        <polygon points="7.5,4 8,5.2 9.2,5.8 8,6.4 7.5,7.5 7,6.4 5.8,5.8 7,5.2" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 8. Growing Heart (U+1F497) - Based on Wimoji red-heart
  {
    id: 'growing-heart',
    char: '💗',
    name: 'Growing Heart',
    unicodeHex: 'U+1F497',
    category: 'symbols',
    tags: ['growing heart', 'heart', 'pulse', 'expanding', 'love', 'multiple hearts', 'affection', 'excited', '💗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F43F5E', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Outer heart ring -->
          <g transform="translate(16 16) scale(1) translate(-16 -17)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          </g>
          <!-- Middle heart ring -->
          <g transform="translate(16 16) scale(0.75) translate(-16 -17)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          </g>
          <!-- Inner core heart -->
          <g transform="translate(16 16) scale(0.5) translate(-16 -17)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.stroke}" />
          </g>
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Outer expanding heart layer -->
        <g transform="translate(16 16) scale(1) translate(-16 -17)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" opacity="0.3" />
        </g>
        <!-- Middle expanding heart layer -->
        <g transform="translate(16 16) scale(0.75) translate(-16 -17)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" opacity="0.65" />
        </g>
        <!-- Inner vibrant beating heart core -->
        <g transform="translate(16 16) scale(0.5) translate(-16 -17)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${opts.style === 'duotone' ? c.secondary : '#F43F5E'}" />
        </g>
      </g>`;
    },
  },

  // 9. Heart with Arrow (U+1F498) - Based on Wimoji red-heart
  {
    id: 'heart-with-arrow',
    char: '💘',
    name: 'Heart with Arrow',
    unicodeHex: 'U+1F498',
    category: 'symbols',
    tags: ['heart with arrow', 'cupid', 'arrow', 'love', 'struck', 'infatuation', 'romance', 'valentine', '💘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Arrow shaft cutting through heart -->
          <line x1="3" y1="28" x2="28" y2="4" />
          <polygon points="28,4 23,5.5 26.5,9" fill="${c.stroke}" />
          <!-- Fletching feathers at bottom-left -->
          <line x1="4.5" y1="29.5" x2="2" y2="27" />
          <line x1="7" y1="27" x2="4.5" y2="24.5" />
          <!-- Pierced heart -->
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back Arrow shaft entering from lower left -->
        <line x1="3" y1="28" x2="11" y2="20" stroke="#CBD5E1" stroke-width="2" />
        <!-- Feather fletching -->
        <path d="M4.5 29.5 L2 27 M7 27 L4.5 24.5 M3 28 L1.5 29.5" stroke="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke-width="1.6" />
        <!-- Pierced Red Heart based on red-heart SVG without border or shiny spot -->
        <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />
        <!-- Entry and exit puncture wounds -->
        <ellipse cx="10.5" cy="20.5" rx="1.2" ry="0.6" fill="#7F1D1D" transform="rotate(-45 10.5 20.5)" />
        <ellipse cx="21" cy="10.5" rx="1.2" ry="0.6" fill="#7F1D1D" transform="rotate(-45 21 10.5)" />
        <!-- Front Arrow shaft exiting upper right -->
        <line x1="21" y1="10.5" x2="28" y2="4" stroke="#CBD5E1" stroke-width="2" />
        <!-- Golden Arrow Head -->
        <polygon points="28.5,3.5 23.5,5 27,8.5" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke="#D97706" stroke-width="0.6" />
      </g>`;
    },
  },

  // 10. Heart with Ribbon (U+1F49D) - Based on Wimoji red-heart
  {
    id: 'heart-with-ribbon',
    char: '💝',
    name: 'Heart with Ribbon',
    unicodeHex: 'U+1F49D',
    category: 'symbols',
    tags: ['heart with ribbon', 'gift', 'present', 'valentine', 'chocolate', 'box', 'love', 'wrapped', 'ribbon', '💝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Base Heart -->
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          <!-- Ribbon cross bands -->
          <line x1="7" y1="16" x2="25" y2="16" />
          <line x1="16" y1="10" x2="16" y2="26" />
          <!-- Ribbon bow loops -->
          <circle cx="13.5" cy="11" r="2" />
          <circle cx="18.5" cy="11" r="2" />
          <circle cx="16" cy="11.5" r="1" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Gift Heart Body without border -->
        <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />
        <!-- Horizontal Satin Ribbon Band -->
        <rect x="6.8" y="14.8" width="18.4" height="3" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke="#D97706" stroke-width="0.5" />
        <!-- Vertical Satin Ribbon Band -->
        <rect x="14.5" y="10" width="3" height="16" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke="#D97706" stroke-width="0.5" />
        <!-- Tied Gift Ribbon Bow -->
        <ellipse cx="13" cy="11" rx="2.4" ry="1.6" transform="rotate(-25 13 11)" fill="${opts.style === 'duotone' ? c.secondary : '#FDE047'}" stroke="#D97706" stroke-width="0.6" />
        <ellipse cx="19" cy="11" rx="2.4" ry="1.6" transform="rotate(25 19 11)" fill="${opts.style === 'duotone' ? c.secondary : '#FDE047'}" stroke="#D97706" stroke-width="0.6" />
        <circle cx="16" cy="11.5" r="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="#D97706" stroke-width="0.6" />
        <!-- Ribbon hanging ends -->
        <path d="M15 13 L13.5 16.5 M17 13 L18.5 16.5" stroke="#D97706" stroke-width="1.2" />
      </g>`;
    },
  },

  // 11. Revolving Hearts (U+1F49E) - Based on Wimoji red-heart
  {
    id: 'revolving-hearts',
    char: '💞',
    name: 'Revolving Hearts',
    unicodeHex: 'U+1F49E',
    category: 'symbols',
    tags: ['revolving hearts', 'hearts', 'orbit', 'circle', 'love', 'revolving', 'infatuation', 'sweet', '💞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F43F5E', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top Left Heart -->
          <g transform="translate(10 12) scale(0.55) translate(-16 -17)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          </g>
          <!-- Bottom Right Heart -->
          <g transform="translate(22 20) scale(0.55) translate(-16 -17)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          </g>
          <!-- Orbit motion path arcs -->
          <path d="M21 11 C18 7 13 7 11 9" />
          <path d="M11 21 C14 25 19 25 21 23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Orbiting swoosh arcs -->
        <path d="M22 10 C18 6 12 7 9 10" stroke="${opts.style === 'duotone' ? c.secondary : '#FDA4AF'}" stroke-width="1.6" fill="none" />
        <polygon points="8,11 11,9 9.5,12.5" fill="${opts.style === 'duotone' ? c.secondary : '#FDA4AF'}" />
        <path d="M10 22 C14 26 20 25 23 22" stroke="${opts.style === 'duotone' ? c.secondary : '#FDA4AF'}" stroke-width="1.6" fill="none" />
        <polygon points="24,21 21,23 22.5,19.5" fill="${opts.style === 'duotone' ? c.secondary : '#FDA4AF'}" />
        <!-- Top Left Heart without border or shiny spot -->
        <g transform="translate(10 12) scale(0.55) translate(-16 -17)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />
        </g>
        <!-- Bottom Right Heart without border or shiny spot -->
        <g transform="translate(22 20) scale(0.55) translate(-16 -17)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${opts.style === 'duotone' ? c.secondary : '#F43F5E'}" />
        </g>
      </g>`;
    },
  },

  // 12. Heart Decoration (U+1F49F) - Based on Wimoji red-heart
  {
    id: 'heart-decoration',
    char: '💟',
    name: 'Heart Decoration',
    unicodeHex: 'U+1F49F',
    category: 'symbols',
    tags: ['heart decoration', 'purple square', 'heart', 'badge', 'cute', 'love', 'ornament', 'stamp', '💟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', fillSecondary: '#FFFFFF', stroke: '#7E22CE' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Rounded Squircle Box -->
          <rect x="3" y="3" width="26" height="26" rx="5" />
          <!-- Inner Heart cutout -->
          <g transform="translate(16 16.5) scale(0.68) translate(-16 -17)">
            <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" />
          </g>
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Vibrant Purple Rounded Squircle Tile -->
        <rect x="3" y="3" width="26" height="26" rx="5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="4.5" y="4.5" width="23" height="23" rx="4" fill="none" stroke="#C084FC" stroke-width="0.8" opacity="0.4" />
        <!-- Crisp White Centered Heart based on red-heart SVG -->
        <g transform="translate(16 16.5) scale(0.68) translate(-16 -17)">
          <path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" />
        </g>
      </g>`;
    },
  },
];
