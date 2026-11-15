import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const symbolsShapesPlantsIcons: WimojiIconDef[] = [
  // 1. Khanda (U+1FAAF) - Sikh faith emblem
  {
    id: 'khanda-symbol',
    char: '🪯',
    name: 'Khanda Symbol',
    unicodeHex: 'U+1FAAF',
    category: 'symbols',
    tags: ['khanda', 'sikh', 'sikhism', 'sword', 'faith', 'religion', 'chakkar', 'kirpan', 'punjab', '🪯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#D97706',
        fillAccent: '#FDE68A',
        stroke: '#B45309',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Central double-edged khanda sword -->
          <path d="M16 2.5 L17.5 5 C18.5 9 18.5 15 18 19 H14 C13.5 15 13.5 9 14.5 5 Z" />
          <line x1="16" y1="3" x2="16" y2="19" />
          <rect x="12" y="19" width="8" height="2" rx="0.5" />
          <line x1="16" y1="21" x2="16" y2="26.5" />
          <circle cx="16" cy="27.5" r="1.5" />
          <!-- Chakkar (circular quoit ring) -->
          <circle cx="16" cy="13.5" r="5.5" />
          <circle cx="16" cy="13.5" r="3.6" />
          <!-- Left curved kirpan dagger -->
          <path d="M14.5 28 C9.5 28 5.5 23.5 6.5 16 C7 12 9 7.5 10 6 C8.5 9.5 7.5 14 8 18 C8.5 21 11 24.5 14 25.5" />
          <!-- Right curved kirpan dagger -->
          <path d="M17.5 28 C22.5 28 26.5 23.5 25.5 16 C25 12 23 7.5 22 6 C23.5 9.5 24.5 14 24 18 C23.5 21 21 24.5 18 25.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <!-- Central sword -->
          <path d="M16 2.5 L17.5 5 C18.5 9 18.5 15 18 19 H14 C13.5 15 13.5 9 14.5 5 Z" />
          <rect x="12" y="19" width="8" height="2" rx="0.5" />
          <rect x="15.2" y="21" width="1.6" height="5.5" />
          <circle cx="16" cy="27.5" r="1.5" />
          <!-- Chakkar quoit ring -->
          <path d="M16 8 C13 8 10.5 10.5 10.5 13.5 C10.5 16.5 13 19 16 19 C19 19 21.5 16.5 21.5 13.5 C21.5 10.5 19 8 16 8 Z M16 10 C18 10 19.6 11.6 19.6 13.5 C19.6 15.4 18 17 16 17 C14 17 12.4 15.4 12.4 13.5 C12.4 11.6 14 10 16 10 Z" fill-rule="evenodd" />
          <!-- Flanking kirpans -->
          <path d="M14.5 28.5 C9.5 28.5 5.5 23.8 6.5 16 C7 11.8 9 7.2 10 6 C8.5 9.5 7.5 14 8 18 C8.5 21.5 11 25 14 26 L14.5 28.5 Z" />
          <path d="M17.5 28.5 C22.5 28.5 26.5 23.8 25.5 16 C25 11.8 23 7.2 22 6 C23.5 9.5 24.5 14 24 18 C23.5 21.5 21 25 18 26 L17.5 28.5 Z" />
        </g>`;
      }

      // Color / Duotone
      const pColor = c.primary;
      const sColor = opts.style === 'duotone' ? c.secondary : '#D97706';
      const aColor = opts.style === 'duotone' ? c.primary : '#FDE68A';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Chakkar quoit ring -->
        <circle cx="16" cy="13.5" r="5.6" fill="${sColor}" />
        <circle cx="16" cy="13.5" r="3.7" fill="#FFFFFF" />
        <!-- Central double-edged blade -->
        <path d="M16 2.5 L17.5 5.5 C18.3 9.5 18.2 15 17.8 19 H14.2 C13.8 15 13.7 9.5 14.5 5.5 Z" fill="${pColor}" stroke="${sColor}" stroke-width="0.8" />
        <!-- Blade fuller / center ridge gleam -->
        <line x1="16" y1="3.2" x2="16" y2="18.5" stroke="${aColor}" stroke-width="0.9" />
        <!-- Sword crossguard & hilt -->
        <rect x="12" y="19" width="8" height="2" rx="0.6" fill="${sColor}" />
        <rect x="15" y="21" width="2" height="5.5" rx="0.4" fill="${pColor}" stroke="${sColor}" stroke-width="0.6" />
        <circle cx="16" cy="27.5" r="1.5" fill="${sColor}" />
        <circle cx="16" cy="27.5" r="0.6" fill="${aColor}" />
        <!-- Left curved kirpan -->
        <path d="M14.5 28.2 C9.5 28.2 5.5 23.5 6.5 16 C7 11.8 9 7.2 10 6 C8.5 9.5 7.5 14 8 18 C8.5 21.5 11 25 14 26 L14.5 28.2 Z" fill="${pColor}" stroke="${sColor}" stroke-width="0.8" />
        <!-- Right curved kirpan -->
        <path d="M17.5 28.2 C22.5 28.2 26.5 23.5 25.5 16 C25 11.8 23 7.2 22 6 C23.5 9.5 24.5 14 24 18 C23.5 21.5 21 25 18 26 L17.5 28.2 Z" fill="${pColor}" stroke="${sColor}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 2. Heavy Equals Sign (U+1F7F0)
  {
    id: 'heavy-equals-sign',
    char: '🟰',
    name: 'Heavy Equals Sign',
    unicodeHex: 'U+1F7F0',
    category: 'symbols',
    tags: ['equals', 'heavy', 'math', 'equal sign', 'equality', 'is', 'equivalent', '🟰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#4F46E5',
        fillSecondary: '#3B82F6',
        stroke: '#3730A3',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="8" width="24" height="6" rx="3" />
          <rect x="4" y="18" width="24" height="6" rx="3" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <rect x="4" y="8" width="24" height="6" rx="3" />
          <rect x="4" y="18" width="24" height="6" rx="3" />
        </g>`;
      }

      const pColor = c.primary;
      const sColor = opts.style === 'duotone' ? c.secondary : c.primary;

      return `${badge}<g>
        <!-- Top bar -->
        <rect x="4" y="8" width="24" height="6" rx="3" fill="${pColor}" />
        <rect x="6.5" y="9.2" width="19" height="1.6" rx="0.8" fill="#FFFFFF" opacity="0.3" />
        <!-- Bottom bar -->
        <rect x="4" y="18" width="24" height="6" rx="3" fill="${sColor}" />
        <rect x="6.5" y="19.2" width="19" height="1.6" rx="0.8" fill="#FFFFFF" opacity="0.3" />
      </g>`;
    },
  },

  // 3. Black Square Button (U+1F532)
  {
    id: 'black-square-button',
    char: '🔲',
    name: 'Black Square Button',
    unicodeHex: 'U+1F532',
    category: 'shapes-suits',
    tags: ['black square button', 'button', 'square', 'box', 'dark', 'ui', 'control', '🔲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#334155',
        fillSecondary: '#F8FAFC',
        stroke: '#1E293B',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="5" />
          <rect x="8.5" y="8.5" width="15" height="15" rx="2.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="M8 3 H24 C26.8 3 29 5.2 29 8 V24 C29 26.8 26.8 29 24 29 H8 C5.2 29 3 26.8 3 24 V8 C3 5.2 5.2 3 8 3 Z M11 8.5 C9.6 8.5 8.5 9.6 8.5 11 V21 C8.5 22.4 9.6 23.5 11 23.5 H21 C22.4 23.5 23.5 22.4 23.5 21 V11 C23.5 9.6 22.4 8.5 21 8.5 Z" fill-rule="evenodd" />
        </g>`;
      }

      const outerColor = opts.style === 'duotone' ? c.primary : '#334155';
      const innerColor = opts.style === 'duotone' ? c.secondary : '#F8FAFC';

      return `${badge}<g>
        <rect x="3" y="3" width="26" height="26" rx="5" fill="${outerColor}" stroke="#1E293B" stroke-width="0.8" />
        <rect x="8.5" y="8.5" width="15" height="15" rx="2.5" fill="${innerColor}" stroke="#CBD5E1" stroke-width="0.8" />
        <rect x="9.5" y="9.5" width="13" height="3" rx="1" fill="#FFFFFF" opacity="0.6" />
      </g>`;
    },
  },

  // 4. White Square Button (U+1F533)
  {
    id: 'white-square-button',
    char: '🔳',
    name: 'White Square Button',
    unicodeHex: 'U+1F533',
    category: 'shapes-suits',
    tags: ['white square button', 'button', 'square', 'box', 'inset', 'ui', 'control', '🔳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#0F172A',
        fillSecondary: '#CBD5E1',
        stroke: '#475569',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="5" />
          <rect x="8.5" y="8.5" width="15" height="15" rx="2.5" fill="${c.stroke}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.secondary}">
          <rect x="3" y="3" width="26" height="26" rx="5" />
          <rect x="8.5" y="8.5" width="15" height="15" rx="2.5" fill="${c.primary}" />
        </g>`;
      }

      const outerColor = opts.style === 'duotone' ? c.secondary : '#CBD5E1';
      const innerColor = opts.style === 'duotone' ? c.primary : '#0F172A';

      return `${badge}<g>
        <rect x="3" y="3" width="26" height="26" rx="5" fill="${outerColor}" stroke="#94A3B8" stroke-width="0.8" />
        <rect x="8.5" y="8.5" width="15" height="15" rx="2.5" fill="${innerColor}" stroke="#000000" stroke-width="0.8" />
        <rect x="9.5" y="9.5" width="13" height="2" rx="0.8" fill="#334155" opacity="0.6" />
      </g>`;
    },
  },

  // 5. Diamond Shape with a Dot Inside (U+1F4A0)
  {
    id: 'diamond-shape-with-a-dot-inside',
    char: '💠',
    name: 'Diamond Shape with a Dot Inside',
    unicodeHex: 'U+1F4A0',
    category: 'shapes-suits',
    tags: ['diamond', 'dot', 'cute', 'kawaii', 'flower diamond', 'jewel', 'crystal', 'cyan', '💠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#06B6D4',
        fillSecondary: '#38BDF8',
        fillAccent: '#FFFFFF',
        stroke: '#0891B2',
      });
      const badge = getBadgeMarkup(opts);

      // 4-lobed kawaii diamond flower path
      const flowerPath = 'M16 2.5 C17.8 7.2 20.8 10.2 25.5 12 C28.5 13.2 28.5 18.8 25.5 20 C20.8 21.8 17.8 24.8 16 29.5 C14.2 24.8 11.2 21.8 6.5 20 C3.5 18.8 3.5 13.2 6.5 12 C11.2 10.2 14.2 7.2 16 2.5 Z';

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${flowerPath}" />
          <path d="M16 8 L24 16 L16 24 L8 16 Z" />
          <circle cx="16" cy="16" r="2.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="${flowerPath}" />
          <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
        </g>`;
      }

      const pColor = c.primary;
      const sColor = opts.style === 'duotone' ? c.secondary : '#38BDF8';
      const aColor = opts.style === 'duotone' ? c.primary : '#FFFFFF';

      return `${badge}<g stroke-linejoin="round">
        <path d="${flowerPath}" fill="${pColor}" stroke="#0891B2" stroke-width="0.8" />
        <path d="M16 8 L24 16 L16 24 L8 16 Z" fill="${sColor}" opacity="0.85" />
        <!-- Facet highlights -->
        <polygon points="16,8 24,16 16,16" fill="#7DD3FC" opacity="0.4" />
        <polygon points="16,8 8,16 16,16" fill="#BAE6FD" opacity="0.6" />
        <!-- Sparkling center circle dot -->
        <circle cx="16" cy="16" r="3" fill="${aColor}" stroke="#0891B2" stroke-width="0.6" />
      </g>`;
    },
  },

  // 6. Large Blue Diamond (U+1F537)
  {
    id: 'large-blue-diamond',
    char: '🔷',
    name: 'Large Blue Diamond',
    unicodeHex: 'U+1F537',
    category: 'shapes-suits',
    tags: ['blue diamond', 'large', 'rhombus', 'gem', 'jewel', 'blue', 'geometric', '🔷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#3B82F6',
        fillSecondary: '#2563EB',
        fillAccent: '#93C5FD',
        stroke: '#1D4ED8',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,2.5 28.5,16 16,29.5 3.5,16" />
          <line x1="16" y1="2.5" x2="16" y2="29.5" />
          <line x1="3.5" y1="16" x2="28.5" y2="16" />
          <polygon points="16,8 23,16 16,24 9,16" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <polygon points="16,2.5 28.5,16 16,29.5 3.5,16" />
        </g>`;
      }

      return `${badge}<g stroke-linejoin="round">
        <!-- Top Left facet -->
        <polygon points="16,2.5 3.5,16 16,16" fill="#60A5FA" />
        <!-- Top Right facet -->
        <polygon points="16,2.5 28.5,16 16,16" fill="#3B82F6" />
        <!-- Bottom Left facet -->
        <polygon points="3.5,16 16,29.5 16,16" fill="#2563EB" />
        <!-- Bottom Right facet -->
        <polygon points="28.5,16 16,29.5 16,16" fill="#1D4ED8" />
        <!-- Inner diamond table -->
        <polygon points="16,7.5 24.5,16 16,24.5 7.5,16" fill="#93C5FD" opacity="0.35" stroke="#FFFFFF" stroke-width="0.6" />
      </g>`;
    },
  },

  // 7. Small Blue Diamond (U+1F539)
  {
    id: 'small-blue-diamond',
    char: '🔹',
    name: 'Small Blue Diamond',
    unicodeHex: 'U+1F539',
    category: 'shapes-suits',
    tags: ['blue diamond', 'small', 'rhombus', 'gem', 'jewel', 'blue', 'geometric', '🔹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#3B82F6',
        fillSecondary: '#2563EB',
        stroke: '#1D4ED8',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,7 25,16 16,25 7,16" />
          <line x1="16" y1="7" x2="16" y2="25" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <polygon points="16,7 25,16 16,25 7,16" />
        </g>`;
      }

      return `${badge}<g stroke-linejoin="round">
        <!-- Left highlight facet -->
        <polygon points="16,7 7,16 16,25" fill="#60A5FA" />
        <!-- Right deeper facet -->
        <polygon points="16,7 25,16 16,25" fill="#2563EB" />
        <polygon points="16,10 22,16 16,22 10,16" fill="#93C5FD" opacity="0.35" />
      </g>`;
    },
  },

  // 8. Down-Pointing Red Triangle (U+1F53B)
  {
    id: 'down-pointing-red-triangle',
    char: '🔻',
    name: 'Down-Pointing Red Triangle',
    unicodeHex: 'U+1F53B',
    category: 'shapes-suits',
    tags: ['red triangle down', 'down', 'triangle', 'arrow', 'negative', 'decrease', 'red', '🔻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#DC2626',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);
      const d = 'M5 7.5 H27 C27.6 7.5 28 8.1 27.7 8.6 L16.7 26.6 C16.4 27.1 15.6 27.1 15.3 26.6 L4.3 8.6 C4 8.1 4.4 7.5 5 7.5 Z';

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${d}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="${d}" />
        </g>`;
      }

      return `${badge}<g stroke-linejoin="round">
        <path d="${d}" fill="${c.primary}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Top bevel reflection -->
        <polygon points="6,9 26,9 22,12 10,12" fill="#F87171" opacity="0.7" />
        <!-- Right shadow bevel -->
        <polygon points="27,9 16,25 16,12 22,12" fill="#DC2626" opacity="0.5" />
      </g>`;
    },
  },

  // 9. Up-Pointing Red Triangle (U+1F53A)
  {
    id: 'up-pointing-red-triangle',
    char: '🔺',
    name: 'Up-Pointing Red Triangle',
    unicodeHex: 'U+1F53A',
    category: 'shapes-suits',
    tags: ['red triangle up', 'up', 'triangle', 'arrow', 'positive', 'increase', 'red', '🔺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#DC2626',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);
      const d = 'M15.3 5.4 C15.6 4.9 16.4 4.9 16.7 5.4 L27.7 23.4 C28 23.9 27.6 24.5 27 24.5 H5 C4.4 24.5 4 23.9 4.3 23.4 Z';

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${d}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="${d}" />
        </g>`;
      }

      return `${badge}<g stroke-linejoin="round">
        <path d="${d}" fill="${c.primary}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Left highlight bevel -->
        <polygon points="16,7 16,21 7,23 5,23" fill="#F87171" opacity="0.7" />
        <!-- Right shadow bevel -->
        <polygon points="16,7 27,23 16,21" fill="#DC2626" opacity="0.5" />
      </g>`;
    },
  },

  // 10. Large Orange Diamond (U+1F536)
  {
    id: 'large-orange-diamond',
    char: '🔶',
    name: 'Large Orange Diamond',
    unicodeHex: 'U+1F536',
    category: 'shapes-suits',
    tags: ['orange diamond', 'large', 'rhombus', 'amber', 'gem', 'orange', 'geometric', '🔶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#EA580C',
        stroke: '#C2410C',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,2.5 28.5,16 16,29.5 3.5,16" />
          <line x1="16" y1="2.5" x2="16" y2="29.5" />
          <line x1="3.5" y1="16" x2="28.5" y2="16" />
          <polygon points="16,8 23,16 16,24 9,16" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <polygon points="16,2.5 28.5,16 16,29.5 3.5,16" />
        </g>`;
      }

      return `${badge}<g stroke-linejoin="round">
        <!-- Top Left facet -->
        <polygon points="16,2.5 3.5,16 16,16" fill="#FBBF24" />
        <!-- Top Right facet -->
        <polygon points="16,2.5 28.5,16 16,16" fill="#F59E0B" />
        <!-- Bottom Left facet -->
        <polygon points="3.5,16 16,29.5 16,16" fill="#EA580C" />
        <!-- Bottom Right facet -->
        <polygon points="28.5,16 16,29.5 16,16" fill="#C2410C" />
        <!-- Inner diamond table -->
        <polygon points="16,7.5 24.5,16 16,24.5 7.5,16" fill="#FDE68A" opacity="0.4" stroke="#FFFFFF" stroke-width="0.6" />
      </g>`;
    },
  },

  // 11. Small Orange Diamond (U+1F538)
  {
    id: 'small-orange-diamond',
    char: '🔸',
    name: 'Small Orange Diamond',
    unicodeHex: 'U+1F538',
    category: 'shapes-suits',
    tags: ['orange diamond', 'small', 'rhombus', 'amber', 'gem', 'orange', 'geometric', '🔸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#EA580C',
        stroke: '#C2410C',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,7 25,16 16,25 7,16" />
          <line x1="16" y1="7" x2="16" y2="25" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <polygon points="16,7 25,16 16,25 7,16" />
        </g>`;
      }

      return `${badge}<g stroke-linejoin="round">
        <polygon points="16,7 7,16 16,25" fill="#FBBF24" />
        <polygon points="16,7 25,16 16,25" fill="#EA580C" />
        <polygon points="16,10 22,16 16,22 10,16" fill="#FDE68A" opacity="0.4" />
      </g>`;
    },
  },

  // 12. High Brightness Symbol (U+1F506)
  {
    id: 'high-brightness-symbol',
    char: '🔆',
    name: 'High Brightness Symbol',
    unicodeHex: 'U+1F506',
    category: 'time-media',
    tags: ['high brightness', 'brightness', 'screen', 'display', 'sun', 'bright', 'level', 'light', '🔆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#FBBF24',
        stroke: '#B45309',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.4}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="5" />
          <line x1="16" y1="3" x2="16" y2="7.5" />
          <line x1="16" y1="24.5" x2="16" y2="29" />
          <line x1="3" y1="16" x2="7.5" y2="16" />
          <line x1="24.5" y1="16" x2="29" y2="16" />
          <line x1="6.8" y1="6.8" x2="10" y2="10" />
          <line x1="22" y1="22" x2="25.2" y2="25.2" />
          <line x1="6.8" y1="25.2" x2="10" y2="22" />
          <line x1="22" y1="10" x2="25.2" y2="6.8" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.4}" stroke-linecap="round">
          <circle cx="16" cy="16" r="5" stroke="none" />
          <line x1="16" y1="3" x2="16" y2="7.5" />
          <line x1="16" y1="24.5" x2="16" y2="29" />
          <line x1="3" y1="16" x2="7.5" y2="16" />
          <line x1="24.5" y1="16" x2="29" y2="16" />
          <line x1="6.8" y1="6.8" x2="10" y2="10" />
          <line x1="22" y1="22" x2="25.2" y2="25.2" />
          <line x1="6.8" y1="25.2" x2="10" y2="22" />
          <line x1="22" y1="10" x2="25.2" y2="6.8" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round">
        <!-- 8 Full Radiant Sunburst Rays -->
        <g stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.6}">
          <line x1="16" y1="3" x2="16" y2="7.5" />
          <line x1="16" y1="24.5" x2="16" y2="29" />
          <line x1="3" y1="16" x2="7.5" y2="16" />
          <line x1="24.5" y1="16" x2="29" y2="16" />
          <line x1="6.8" y1="6.8" x2="10" y2="10" />
          <line x1="22" y1="22" x2="25.2" y2="25.2" />
          <line x1="6.8" y1="25.2" x2="10" y2="22" />
          <line x1="22" y1="10" x2="25.2" y2="6.8" />
        </g>
        <!-- Radiant Glowing Center Sun -->
        <circle cx="16" cy="16" r="5.5" fill="${c.primary}" />
        <circle cx="14.5" cy="14.5" r="2.8" fill="${c.secondary}" />
        <circle cx="13.5" cy="13.5" r="1.2" fill="#FFFFFF" opacity="0.6" />
      </g>`;
    },
  },

  // 13. Low Brightness Symbol (U+1F505)
  {
    id: 'low-brightness-symbol',
    char: '🔅',
    name: 'Low Brightness Symbol',
    unicodeHex: 'U+1F505',
    category: 'time-media',
    tags: ['low brightness', 'dim', 'screen', 'display', 'sun', 'night mode', 'level', 'darker', '🔅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#64748B',
        fillSecondary: '#94A3B8',
        stroke: '#475569',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="4" />
          <line x1="16" y1="5.5" x2="16" y2="8" />
          <line x1="16" y1="24" x2="16" y2="26.5" />
          <line x1="5.5" y1="16" x2="8" y2="16" />
          <line x1="24" y1="16" x2="26.5" y2="16" />
          <line x1="8.6" y1="8.6" x2="10.4" y2="10.4" />
          <line x1="21.6" y1="21.6" x2="23.4" y2="23.4" />
          <line x1="8.6" y1="23.4" x2="10.4" y2="21.6" />
          <line x1="21.6" y1="10.4" x2="23.4" y2="8.6" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}" stroke="${c.primary}" stroke-width="${opts.strokeWidth}" stroke-linecap="round">
          <circle cx="16" cy="16" r="4" stroke="none" />
          <line x1="16" y1="5.5" x2="16" y2="8" />
          <line x1="16" y1="24" x2="16" y2="26.5" />
          <line x1="5.5" y1="16" x2="8" y2="16" />
          <line x1="24" y1="16" x2="26.5" y2="16" />
          <line x1="8.6" y1="8.6" x2="10.4" y2="10.4" />
          <line x1="21.6" y1="21.6" x2="23.4" y2="23.4" />
          <line x1="8.6" y1="23.4" x2="10.4" y2="21.6" />
          <line x1="21.6" y1="10.4" x2="23.4" y2="8.6" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round">
        <!-- 8 Shorter / Dimmed Rays -->
        <g stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.2}">
          <line x1="16" y1="5.5" x2="16" y2="8" />
          <line x1="16" y1="24" x2="16" y2="26.5" />
          <line x1="5.5" y1="16" x2="8" y2="16" />
          <line x1="24" y1="16" x2="26.5" y2="16" />
          <line x1="8.6" y1="8.6" x2="10.4" y2="10.4" />
          <line x1="21.6" y1="21.6" x2="23.4" y2="23.4" />
          <line x1="8.6" y1="23.4" x2="10.4" y2="21.6" />
          <line x1="21.6" y1="10.4" x2="23.4" y2="8.6" />
        </g>
        <!-- Hollow/Dimmed Center Circle -->
        <circle cx="16" cy="16" r="4.5" fill="${c.secondary}" stroke="${c.primary}" stroke-width="1.2" />
        <circle cx="16" cy="16" r="2.2" fill="#FFFFFF" opacity="0.4" />
      </g>`;
    },
  },

  // 14. Repeat Button (U+1F501)
  {
    id: 'repeat-button',
    char: '🔁',
    name: 'Repeat Button',
    unicodeHex: 'U+1F501',
    category: 'time-media',
    tags: ['repeat', 'loop', 'media', 'player', 'arrows', 'circle', 'cycle', 'music', '🔁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#10B981',
        fillSecondary: '#059669',
        stroke: '#047857',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top arrow loop track -->
          <path d="M8 15 V11 C8 9 9.5 7.5 11.5 7.5 H23.5" />
          <polyline points="20.5,4.5 24.5,7.5 20.5,10.5" />
          <!-- Bottom arrow loop track -->
          <path d="M24 17 V21 C24 23 22.5 24.5 20.5 24.5 H8.5" />
          <polyline points="11.5,21.5 7.5,24.5 11.5,27.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 15 V11 C8 9 9.5 7.5 11.5 7.5 H23.5" />
          <polygon points="20.5,4.5 25,7.5 20.5,10.5" fill="${c.primary}" stroke="none" />
          <path d="M24 17 V21 C24 23 22.5 24.5 20.5 24.5 H8.5" />
          <polygon points="11.5,21.5 7,24.5 11.5,27.5" fill="${c.primary}" stroke="none" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Rounded Button Backdrop Badge -->
        <rect x="3" y="3" width="26" height="26" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Top clockwise loop arrow -->
        <path d="M8.5 14.5 V11.5 C8.5 10 9.8 8.8 11.5 8.8 H21" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
        <polygon points="19.5,5.5 24.5,8.8 19.5,12" fill="#FFFFFF" />
        <!-- Bottom clockwise loop arrow -->
        <path d="M23.5 17.5 V20.5 C23.5 22 22.2 23.2 20.5 23.2 H11" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
        <polygon points="12.5,20 7.5,23.2 12.5,26.5" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 15. Repeat Single (U+1F502)
  {
    id: 'repeat-single',
    char: '🔂',
    name: 'Repeat Single',
    unicodeHex: 'U+1F502',
    category: 'time-media',
    tags: ['repeat single', 'repeat one', 'loop once', 'media', 'player', 'music', 'track', '1', '🔂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#10B981',
        fillSecondary: '#059669',
        stroke: '#047857',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7.5 15 V11 C7.5 9 9 7.5 11 7.5 H24.5" />
          <polyline points="21.5,4.5 25.5,7.5 21.5,10.5" />
          <path d="M24.5 17 V21 C24.5 23 23 24.5 21 24.5 H7.5" />
          <polyline points="10.5,21.5 6.5,24.5 10.5,27.5" />
          <!-- Center 1 -->
          <polyline points="14.2,14.2 16.5,12.5 16.5,19.5" />
          <line x1="14" y1="19.5" x2="19" y2="19.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7.5 15 V11 C7.5 9 9 7.5 11 7.5 H24.5" />
          <polygon points="21.5,4.5 26,7.5 21.5,10.5" fill="${c.primary}" stroke="none" />
          <path d="M24.5 17 V21 C24.5 23 23 24.5 21 24.5 H7.5" />
          <polygon points="10.5,21.5 6,24.5 10.5,27.5" fill="${c.primary}" stroke="none" />
          <!-- Center 1 -->
          <polyline points="14.2,14.2 16.5,12.5 16.5,19.5" />
          <line x1="14" y1="19.5" x2="19" y2="19.5" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="26" height="26" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M8.5 14.5 V11.5 C8.5 10 9.8 8.8 11.5 8.8 H21" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
        <polygon points="19.5,5.5 24.5,8.8 19.5,12" fill="#FFFFFF" />
        <path d="M23.5 17.5 V20.5 C23.5 22 22.2 23.2 20.5 23.2 H11" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
        <polygon points="12.5,20 7.5,23.2 12.5,26.5" fill="#FFFFFF" />
        <!-- Center Numeral '1' -->
        <g stroke="#FFFFFF" stroke-width="2.2" fill="none">
          <polyline points="14.5,14 16.5,12.5 16.5,19.5" />
          <line x1="14.2" y1="19.5" x2="18.8" y2="19.5" />
        </g>
      </g>`;
    },
  },

  // 16. Twisted Rightwards Arrows (U+1F500)
  {
    id: 'twisted-rightwards-arrows',
    char: '🔀',
    name: 'Twisted Rightwards Arrows',
    unicodeHex: 'U+1F500',
    category: 'time-media',
    tags: ['shuffle', 'twisted arrows', 'random', 'music', 'media', 'cross', 'tracks', 'player', '🔀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#10B981',
        fillSecondary: '#059669',
        stroke: '#047857',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top to Bottom Crossing Arrow -->
          <path d="M5 10 H9 C12 10 14 14 16 16 C18 18 20 22 23 22" />
          <polyline points="20,19 24,22 20,25" />
          <!-- Bottom to Top Crossing Arrow -->
          <path d="M5 22 H9 C11.5 22 13 19 14.5 17" />
          <path d="M17.5 15 C19 13 20.5 10 23 10" />
          <polyline points="20,7 24,10 20,13" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 10 H9 C12 10 14 14 16 16 C18 18 20 22 23 22" />
          <polygon points="20,19 25,22 20,25" fill="${c.primary}" stroke="none" />
          <path d="M5 22 H9 C11.5 22 13 19 14.5 17" />
          <path d="M17.5 15 C19 13 20.5 10 23 10" />
          <polygon points="20,7 25,10 20,13" fill="${c.primary}" stroke="none" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="26" height="26" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Bottom-left to top-right path -->
        <path d="M6 21 H10 C12.5 21 14 18 15 16.5" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
        <path d="M17 15.5 C18 14 19.5 11 22 11" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
        <polygon points="19.5,7.5 24.5,11 19.5,14.5" fill="#FFFFFF" />
        <!-- Top-left to bottom-right path (smooth continuous bridge) -->
        <path d="M6 11 H10 C12.5 11 14.5 15 16 17 C17.5 19 19.5 21 22 21" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
        <polygon points="19.5,17.5 24.5,21 19.5,24.5" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 17. Up-Pointing Small Red Triangle (U+1F53C)
  {
    id: 'up-pointing-small-red-triangle',
    char: '🔼',
    name: 'Up-Pointing Small Red Triangle',
    unicodeHex: 'U+1F53C',
    category: 'shapes-suits',
    tags: ['up-pointing small red triangle', 'up button', 'triangle', 'arrow', 'up', 'button', 'red', '🔼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#334155',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3.5" y="3.5" width="25" height="25" rx="5" />
          <polygon points="16,9.5 23,21.5 9,21.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <rect x="3.5" y="3.5" width="25" height="25" rx="5" />
          <polygon points="16,9.5 23,21.5 9,21.5" fill="#FFFFFF" />
        </g>`;
      }

      const btnBg = opts.style === 'duotone' ? c.secondary : '#1E293B';

      return `${badge}<g stroke-linejoin="round">
        <rect x="3.5" y="3.5" width="25" height="25" rx="5" fill="${btnBg}" stroke="#0F172A" stroke-width="0.8" />
        <!-- Red up triangle -->
        <polygon points="16,9.5 23.5,21.5 8.5,21.5" fill="#EF4444" stroke="#DC2626" stroke-width="0.8" />
        <!-- Triangle highlight facet -->
        <polygon points="16,10.5 16,20.5 10,20.5" fill="#F87171" opacity="0.6" />
      </g>`;
    },
  },

  // 18. Down-Pointing Small Red Triangle (U+1F53D)
  {
    id: 'down-pointing-small-red-triangle',
    char: '🔽',
    name: 'Down-Pointing Small Red Triangle',
    unicodeHex: 'U+1F53D',
    category: 'shapes-suits',
    tags: ['down-pointing small red triangle', 'down button', 'triangle', 'arrow', 'down', 'button', 'red', '🔽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#334155',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3.5" y="3.5" width="25" height="25" rx="5" />
          <polygon points="8.5,10.5 23.5,10.5 16,22.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <rect x="3.5" y="3.5" width="25" height="25" rx="5" />
          <polygon points="8.5,10.5 23.5,10.5 16,22.5" fill="#FFFFFF" />
        </g>`;
      }

      const btnBg = opts.style === 'duotone' ? c.secondary : '#1E293B';

      return `${badge}<g stroke-linejoin="round">
        <rect x="3.5" y="3.5" width="25" height="25" rx="5" fill="${btnBg}" stroke="#0F172A" stroke-width="0.8" />
        <!-- Red down triangle -->
        <polygon points="8.5,10.5 23.5,10.5 16,22.5" fill="#EF4444" stroke="#DC2626" stroke-width="0.8" />
        <!-- Triangle highlight facet -->
        <polygon points="9.5,11.5 22.5,11.5 16,15.5" fill="#F87171" opacity="0.6" />
      </g>`;
    },
  },

  // 19. Wilted Flower (U+1F940)
  {
    id: 'wilted-flower',
    char: '🥀',
    name: 'Wilted Flower',
    unicodeHex: 'U+1F940',
    category: 'objects-places',
    tags: ['wilted flower', 'dying rose', 'drooping', 'dead flower', 'sad', 'rose', 'faded', '🥀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#9F1239',
        fillSecondary: '#4D7C0F',
        stroke: '#881337',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Drooping bent stem -->
          <path d="M17 29 C18 22 16 17 12 14" />
          <!-- Drooping wilted leaf -->
          <path d="M16 22 C19 21 22 23 21 26 C18 26.5 16.5 24.5 16 22 Z" />
          <!-- Drooping rose blossom -->
          <path d="M12 14 C10 13 8 13.5 7 15 C5.5 14 5 12 6.5 10 C8 8 11 9 12 11" />
          <path d="M6 14 C4.5 16 6 19 9 19 C11 19 12.5 17 12 14" />
          <path d="M7 11 C8 12.5 10 13 11 12" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <!-- Stem -->
          <path d="M16 29 C17 22 15 17.5 11.5 14.5 L12.5 13.5 C16.5 17 18.5 22 17.5 29 Z" />
          <!-- Wilted leaf -->
          <path d="M16.5 21.5 C19.5 20.5 22.5 22.5 21.5 25.5 C18.5 26 17 24 16.5 21.5 Z" />
          <!-- Drooping rose blossom -->
          <path d="M12 13 C9.5 12 7.5 13 6.5 14.5 C5 14 4.5 11.5 6 9.5 C8 7.5 11.5 8.5 12.5 10.5 C13 11.5 12.5 12.5 12 13 Z" />
          <path d="M6 14 C4 16.5 5.5 19.5 9 19.5 C11.5 19.5 13 17 12 14 C10 16 7.5 16 6 14 Z" />
        </g>`;
      }

      const petalColor = opts.style === 'duotone' ? c.primary : '#9F1239';
      const stemColor = opts.style === 'duotone' ? c.secondary : '#4D7C0F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Bent drooping stem -->
        <path d="M17 29 C18 22 16 17 11.8 14" stroke="${stemColor}" stroke-width="2" fill="none" />
        <!-- Drooping wilted leaf on stem -->
        <path d="M16 22 C19.5 21 22.5 23 21.5 26 C18.5 26.5 16.5 24.5 16 22 Z" fill="#65A30D" stroke="${stemColor}" stroke-width="0.8" />
        <!-- Sepal/calyx -->
        <path d="M12 14 C11 12.5 9 13 8 14.5" stroke="${stemColor}" stroke-width="1.2" fill="none" />
        <!-- Limp overlapping wilted rose petals -->
        <path d="M6 14 C4 16.5 5.5 19.5 9 19.5 C11.5 19.5 13 17 12 14 C10 16 7.5 16 6 14 Z" fill="${petalColor}" stroke="#881337" stroke-width="0.8" />
        <path d="M12 13 C9.5 12 7.5 13 6.5 14.5 C5 14 4.5 11.5 6 9.5 C8 7.5 11.5 8.5 12.5 10.5 C13 11.5 12.5 12.5 12 13 Z" fill="#BE123C" stroke="#881337" stroke-width="0.8" />
        <path d="M7.5 11 C8.5 12.5 10.5 13 11.5 12" stroke="#881337" stroke-width="0.8" fill="none" />
      </g>`;
    },
  },

  // 20. Lotus (U+1FAB7)
  {
    id: 'lotus',
    char: '🪷',
    name: 'Lotus',
    unicodeHex: 'U+1FAB7',
    category: 'objects-places',
    tags: ['lotus', 'flower', 'blossom', 'buddhism', 'hinduism', 'zen', 'pond', 'peace', 'pink', '🪷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EC4899',
        fillSecondary: '#10B981',
        fillAccent: '#FBBF24',
        stroke: '#BE185D',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Center petal -->
          <path d="M16 5 C14 10 13.5 16 16 21 C18.5 16 18 10 16 5 Z" />
          <!-- Inner petals -->
          <path d="M14 8 C10 12 9.5 17 15 22 C13 18 13 13 14 8 Z" />
          <path d="M18 8 C22 12 22.5 17 17 22 C19 18 19 13 18 8 Z" />
          <!-- Outer cupped petals -->
          <path d="M10 13 C5 17 5 22 13 23" />
          <path d="M22 13 C27 17 27 22 19 23" />
          <!-- Water ripple base -->
          <path d="M5 25 C10 27.5 22 27.5 27 25" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="M16 5 C14 10 13.5 16 16 21 C18.5 16 18 10 16 5 Z" />
          <path d="M14 8 C10 12 9.5 17 15 22 C13 18 13 13 14 8 Z" />
          <path d="M18 8 C22 12 22.5 17 17 22 C19 18 19 13 18 8 Z" />
          <path d="M10 13 C5 17 5 22 13 23 C8 21 8 16 10 13 Z" />
          <path d="M22 13 C27 17 27 22 19 23 C24 21 24 16 22 13 Z" />
          <ellipse cx="16" cy="25" rx="11" ry="2" />
        </g>`;
      }

      const petalMain = opts.style === 'duotone' ? c.primary : '#EC4899';
      const petalLight = opts.style === 'duotone' ? c.secondary : '#F472B6';
      const stamenColor = opts.style === 'duotone' ? c.primary : '#FBBF24';
      const waterColor = opts.style === 'duotone' ? c.secondary : '#10B981';

      return `${badge}<g stroke-linejoin="round">
        <!-- Floating water pad ripples -->
        <ellipse cx="16" cy="25.5" rx="11" ry="2.5" fill="${waterColor}" opacity="0.8" />
        <!-- Outer left cupped petal -->
        <path d="M10 13 C4.5 17 5 22.5 14 23.5 C8.5 21.5 8 16 10 13 Z" fill="#DB2777" stroke="#BE185D" stroke-width="0.8" />
        <!-- Outer right cupped petal -->
        <path d="M22 13 C27.5 17 27 22.5 18 23.5 C23.5 21.5 24 16 22 13 Z" fill="#DB2777" stroke="#BE185D" stroke-width="0.8" />
        <!-- Inner left petal -->
        <path d="M14 8 C9.5 12 9 17.5 15.5 22.5 C13 18 13 13 14 8 Z" fill="${petalMain}" stroke="#BE185D" stroke-width="0.8" />
        <!-- Inner right petal -->
        <path d="M18 8 C22.5 12 23 17.5 16.5 22.5 C19 18 19 13 18 8 Z" fill="${petalMain}" stroke="#BE185D" stroke-width="0.8" />
        <!-- Central upright petal -->
        <path d="M16 5 C13.5 10 13 16 16 21.5 C19 16 18.5 10 16 5 Z" fill="${petalLight}" stroke="#BE185D" stroke-width="0.8" />
        <!-- Golden stamen center -->
        <ellipse cx="16" cy="20.5" rx="2.5" ry="1.2" fill="${stamenColor}" />
      </g>`;
    },
  },

  // 21. White Flower (U+1F4AE)
  {
    id: 'white-flower',
    char: '💮',
    name: 'White Flower',
    unicodeHex: 'U+1F4AE',
    category: 'objects-places',
    tags: ['white flower', 'japanese stamp', 'cherry blossom', 'sakura', 'good job', 'seal', 'rosette', '💮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#DC2626',
        fillSecondary: '#FFFFFF',
        fillAccent: '#F59E0B',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);

      // Stylized 5-lobed notched cherry blossom seal
      const outerSeal = 'M16 3 C17.5 4.5 18 6 19.5 4 C22 5.5 24.5 7 24.5 9.5 C26.5 11 28 12.5 27 15 C28.5 17 28.5 19.5 26.5 21.5 C26 23.8 24 25.5 22 26.5 C20 28.5 18 28 16 29 C14 28 12 28.5 10 26.5 C8 25.5 6 23.8 5.5 21.5 C3.5 19.5 3.5 17 5 15 C4 12.5 5.5 11 7.5 9.5 C7.5 7 10 5.5 12.5 4 C14 6 14.5 4.5 16 3 Z';

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${outerSeal}" />
          <circle cx="16" cy="16" r="6" />
          <circle cx="16" cy="16" r="2.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="${outerSeal}" />
          <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
        </g>`;
      }

      const sealColor = opts.style === 'duotone' ? c.primary : '#DC2626';
      const petalColor = opts.style === 'duotone' ? c.secondary : '#FFFFFF';

      return `${badge}<g stroke-linejoin="round">
        <!-- Outer Stamp Ink Contour -->
        <path d="${outerSeal}" fill="${sealColor}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Inner Petal Cutout / Stamp Stamp Pattern -->
        <path d="M16 5.5 C17 6.8 17.5 7.8 18.5 6.5 C20.5 7.6 22.5 8.8 22.5 10.8 C24 12 25 13.2 24.2 15 C25.2 16.5 25.2 18.5 23.5 20 C23 21.8 21.5 23 20 23.8 C18.5 25.2 17 25 16 25.8 C15 25 13.5 25.2 12 23.8 C10.5 23 9 21.8 8.5 20 C6.8 18.5 6.8 16.5 7.8 15 C7 13.2 8 12 9.5 10.8 C9.5 8.8 11.5 7.6 13.5 6.5 C14.5 7.8 15 6.8 16 5.5 Z" fill="${petalColor}" />
        <!-- Center Stamp Lines / Rosette Core -->
        <circle cx="16" cy="16" r="5" fill="none" stroke="${sealColor}" stroke-width="1.2" />
        <circle cx="16" cy="16" r="2.5" fill="${sealColor}" />
        <circle cx="16" cy="16" r="1.2" fill="#F59E0B" />
      </g>`;
    },
  },

  // 22. Hyacinth (U+1FABB)
  {
    id: 'hyacinth',
    char: '🪻',
    name: 'Hyacinth',
    unicodeHex: 'U+1FABB',
    category: 'objects-places',
    tags: ['hyacinth', 'flower', 'purple', 'lavender', 'spring', 'bloom', 'garden', 'violet', '🪻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#8B5CF6',
        fillSecondary: '#22C55E',
        fillAccent: '#C4B5FD',
        stroke: '#6D28D9',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Central stalk -->
          <line x1="16" y1="6" x2="16" y2="28" />
          <!-- Sword-like basal leaves -->
          <path d="M12 28 C10 22 9 16 11 10 C13 16 14 22 15 28" />
          <path d="M20 28 C22 22 23 16 21 10 C19 16 18 22 17 28" />
          <!-- Flower raceme florets -->
          <circle cx="16" cy="7" r="2.5" />
          <circle cx="13" cy="11" r="2.8" />
          <circle cx="19" cy="11" r="2.8" />
          <circle cx="12" cy="16" r="3" />
          <circle cx="20" cy="16" r="3" />
          <circle cx="16" cy="14" r="2.8" />
          <circle cx="16" cy="19" r="3" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <!-- Leaves -->
          <path d="M11 28 C9 22 8 16 10.5 10 C13 16 14 22 15 28 Z" />
          <path d="M21 28 C23 22 24 16 21.5 10 C19 16 18 22 17 28 Z" />
          <rect x="15" y="8" width="2" height="20" />
          <!-- Florets -->
          <circle cx="16" cy="7" r="2.8" />
          <circle cx="13" cy="11" r="3" />
          <circle cx="19" cy="11" r="3" />
          <circle cx="12" cy="16" r="3.2" />
          <circle cx="20" cy="16" r="3.2" />
          <circle cx="16" cy="14" r="3" />
          <circle cx="16" cy="19.5" r="3.2" />
        </g>`;
      }

      const floretDark = opts.style === 'duotone' ? c.primary : '#7C3AED';
      const floretLight = opts.style === 'duotone' ? c.secondary : '#A78BFA';
      const leafColor = opts.style === 'duotone' ? c.secondary : '#16A34A';

      return `${badge}<g stroke-linejoin="round">
        <!-- Upright green sword leaves -->
        <path d="M11 28 C9 22 8 16 10.5 10 C13 16 14 22 15 28 Z" fill="${leafColor}" stroke="#15803D" stroke-width="0.8" />
        <path d="M21 28 C23 22 24 16 21.5 10 C19 16 18 22 17 28 Z" fill="${leafColor}" stroke="#15803D" stroke-width="0.8" />
        <line x1="16" y1="8" x2="16" y2="28" stroke="#15803D" stroke-width="2" />
        <!-- Lower floret tier -->
        <circle cx="16" cy="19.5" r="3.2" fill="${floretDark}" stroke="#6D28D9" stroke-width="0.7" />
        <circle cx="16" cy="19.5" r="1.2" fill="#DDD6FE" />
        <!-- Middle floret tier -->
        <circle cx="12" cy="16" r="3.2" fill="${floretLight}" stroke="#6D28D9" stroke-width="0.7" />
        <circle cx="12" cy="16" r="1.1" fill="#FFFFFF" opacity="0.8" />
        <circle cx="20" cy="16" r="3.2" fill="${floretLight}" stroke="#6D28D9" stroke-width="0.7" />
        <circle cx="20" cy="16" r="1.1" fill="#FFFFFF" opacity="0.8" />
        <circle cx="16" cy="14" r="3" fill="${floretDark}" stroke="#6D28D9" stroke-width="0.7" />
        <circle cx="16" cy="14" r="1.1" fill="#DDD6FE" />
        <!-- Upper floret tier -->
        <circle cx="13" cy="10.8" r="3" fill="${floretLight}" stroke="#6D28D9" stroke-width="0.7" />
        <circle cx="13" cy="10.8" r="1" fill="#FFFFFF" opacity="0.8" />
        <circle cx="19" cy="10.8" r="3" fill="${floretLight}" stroke="#6D28D9" stroke-width="0.7" />
        <circle cx="19" cy="10.8" r="1" fill="#FFFFFF" opacity="0.8" />
        <!-- Top bud -->
        <circle cx="16" cy="7" r="2.8" fill="${floretDark}" stroke="#6D28D9" stroke-width="0.7" />
        <circle cx="16" cy="7" r="1" fill="#DDD6FE" />
      </g>`;
    },
  },

  // 23. Potted Plant (U+1FAB4)
  {
    id: 'potted-plant',
    char: '🪴',
    name: 'Potted Plant',
    unicodeHex: 'U+1FAB4',
    category: 'objects-places',
    tags: ['potted plant', 'houseplant', 'plant', 'pot', 'leaves', 'terracotta', 'monstera', 'indoor', 'greenery', '🪴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#22C55E',
        fillSecondary: '#EA580C',
        stroke: '#15803D',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Pot rim & body -->
          <rect x="7.5" y="19" width="17" height="3" rx="1" />
          <polygon points="9,22 10.5,28.5 21.5,28.5 23,22" />
          <!-- Plant stems -->
          <path d="M16 19 V9" />
          <path d="M16 18 C14 15 11 13 9 12" />
          <path d="M16 18 C18 15 21 13 23 12" />
          <!-- Leaves -->
          <path d="M16 4 C13.5 7 13.5 11 16 13 C18.5 11 18.5 7 16 4 Z" />
          <path d="M9 7 C6.5 9 6.5 13 10 14 C12 12.5 12 9 9 7 Z" />
          <path d="M23 7 C25.5 9 25.5 13 22 14 C20 12.5 20 9 23 7 Z" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <rect x="7.5" y="19" width="17" height="3" rx="1" />
          <polygon points="9,22 10.5,28.5 21.5,28.5 23,22" />
          <rect x="15" y="10" width="2" height="10" />
          <path d="M16 4 C13.5 7 13.5 11 16 13 C18.5 11 18.5 7 16 4 Z" />
          <path d="M9 7 C6.5 9 6.5 13 10 14 C12 12.5 12 9 9 7 Z" />
          <path d="M23 7 C25.5 9 25.5 13 22 14 C20 12.5 20 9 23 7 Z" />
        </g>`;
      }

      const leafDark = opts.style === 'duotone' ? c.primary : '#15803D';
      const leafLight = opts.style === 'duotone' ? c.primary : '#22C55E';
      const potColor = opts.style === 'duotone' ? c.secondary : '#EA580C';
      const potShadow = opts.style === 'duotone' ? c.secondary : '#C2410C';

      return `${badge}<g stroke-linejoin="round">
        <!-- Plant stems -->
        <path d="M16 20 V9" stroke="${leafDark}" stroke-width="2" stroke-linecap="round" />
        <path d="M16 18 C14 15 11 13 9 12" stroke="${leafDark}" stroke-width="1.8" stroke-linecap="round" />
        <path d="M16 18 C18 15 21 13 23 12" stroke="${leafDark}" stroke-width="1.8" stroke-linecap="round" />
        <!-- Left heart/monstera leaf -->
        <path d="M9 7 C6 9.5 6 13.5 10 14 C12 12.5 12.5 9 9 7 Z" fill="${leafLight}" stroke="${leafDark}" stroke-width="0.8" />
        <line x1="9" y1="7" x2="10" y2="14" stroke="${leafDark}" stroke-width="0.8" />
        <!-- Right heart/monstera leaf -->
        <path d="M23 7 C26 9.5 26 13.5 22 14 C20 12.5 19.5 9 23 7 Z" fill="${leafLight}" stroke="${leafDark}" stroke-width="0.8" />
        <line x1="23" y1="7" x2="22" y2="14" stroke="${leafDark}" stroke-width="0.8" />
        <!-- Top center upright leaf -->
        <path d="M16 4 C13.5 7 13.5 11 16 13.5 C18.5 11 18.5 7 16 4 Z" fill="#4ADE80" stroke="${leafDark}" stroke-width="0.8" />
        <line x1="16" y1="4.5" x2="16" y2="13.5" stroke="${leafDark}" stroke-width="0.8" />
        <!-- Soil -->
        <ellipse cx="16" cy="19.5" rx="6.5" ry="1.5" fill="#451A03" />
        <!-- Terracotta Pot Brim -->
        <rect x="7.5" y="19" width="17" height="3" rx="1.2" fill="${potColor}" stroke="#9A3412" stroke-width="0.8" />
        <!-- Terracotta Pot Tapered Body -->
        <polygon points="9,22 10.5,28.5 21.5,28.5 23,22" fill="${potShadow}" stroke="#9A3412" stroke-width="0.8" />
        <polygon points="9.5,22.5 10.5,28 14.5,28 14.5,22.5" fill="${potColor}" opacity="0.6" />
      </g>`;
    },
  },

  // 24. Wood (Log) (U+1FAB5)
  {
    id: 'wood-log',
    char: '🪵',
    name: 'Wood Log',
    unicodeHex: 'U+1FAB5',
    category: 'objects-places',
    tags: ['wood', 'log', 'timber', 'lumber', 'tree', 'bark', 'firewood', 'rings', 'nature', '🪵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#78350F',
        fillSecondary: '#FDE68A',
        stroke: '#451A03',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Log cylinder -->
          <path d="M8.5 12 L24.5 14 C27 14 28 17 28 20 C28 23 27 26 24.5 26 L8.5 24" />
          <!-- Left cut cross-section face -->
          <ellipse cx="8.5" cy="18" rx="4.5" ry="6" />
          <ellipse cx="8.5" cy="18" rx="2.5" ry="3.5" />
          <circle cx="8.5" cy="18" r="0.8" />
          <!-- Bark grain line -->
          <path d="M12 17 C16 17 20 18 24 18" />
          <!-- Tiny sprout on top -->
          <path d="M19 13.5 C19 11 20 9 22 8" />
          <path d="M22 8 C23 9 22 11 20 11 Z" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="M8.5 12 L24.5 14 C27 14 28 17 28 20 C28 23 27 26 24.5 26 L8.5 24 Z" />
          <ellipse cx="8.5" cy="18" rx="4.5" ry="6" />
          <!-- Sprout -->
          <path d="M19 13.5 C19 11 20 9 22 8 C23 9 22 11 20 11 Z" />
        </g>`;
      }

      const barkColor = opts.style === 'duotone' ? c.primary : '#78350F';
      const barkShadow = opts.style === 'duotone' ? c.primary : '#92400E';
      const faceColor = opts.style === 'duotone' ? c.secondary : '#FDE68A';
      const ringColor = opts.style === 'duotone' ? c.primary : '#D97706';

      return `${badge}<g stroke-linejoin="round">
        <!-- Log Cylinder Body -->
        <path d="M8.5 12 L24.5 14 C27 14 28 17 28 20 C28 23 27 26 24.5 26 L8.5 24 Z" fill="${barkColor}" stroke="#451A03" stroke-width="0.8" />
        <!-- Top bark cylinder highlight -->
        <path d="M8.5 12 L24.5 14 C26 14.2 27 15.5 27.5 17 L8.5 15 Z" fill="${barkShadow}" opacity="0.6" />
        <!-- Bark wood grain lines -->
        <path d="M13 18 C17 18 21 19 25 19" stroke="#451A03" stroke-width="0.8" stroke-linecap="round" />
        <path d="M14 22 C18 22 21 23 24 23" stroke="#451A03" stroke-width="0.8" stroke-linecap="round" />
        <!-- Log Face (Annual Rings) -->
        <ellipse cx="8.5" cy="18" rx="4.5" ry="6" fill="${faceColor}" stroke="#451A03" stroke-width="0.8" />
        <!-- Outer Tree Ring -->
        <ellipse cx="8.5" cy="18" rx="3.2" ry="4.3" fill="none" stroke="${ringColor}" stroke-width="0.8" />
        <!-- Inner Tree Ring -->
        <ellipse cx="8.5" cy="18" rx="1.8" ry="2.4" fill="none" stroke="${ringColor}" stroke-width="0.8" />
        <!-- Center Pith -->
        <circle cx="8.5" cy="18" r="0.8" fill="${ringColor}" />
        <!-- Fresh green sprout on log -->
        <path d="M19 13.5 C19 11 20 9 22 8" stroke="#16A34A" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M22 8 C23.5 9 23 11 20.5 11 Z" fill="#22C55E" stroke="#15803D" stroke-width="0.6" />
      </g>`;
    },
  },

  // 25. Fire (U+1F525)
  {
    id: 'fire',
    char: '🔥',
    name: 'Fire',
    unicodeHex: 'U+1F525',
    category: 'weather',
    tags: ['fire', 'flame', 'hot', 'burn', 'heat', 'campfire', 'lit', 'blaze', 'energy', '🔥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#F97316',
        fillAccent: '#FDE047',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);

      // Outer dancing flame path
      const outerFlame = 'M16 2.5 C16 6 12 8 12 12 C10 10 10 8 11 6 C7 9 5 14 5 19 C5 25.5 10 29.5 16 29.5 C22 29.5 27 25.5 27 19 C27 13 23 8 20 8 C21 11 20 13 18 13 C18 9 17 5 16 2.5 Z';
      // Middle flame tongue path
      const midFlame = 'M16 11 C15 13 13 15 13 18 C11.5 16.5 11.5 15 12 13.5 C9.5 16 8.5 19 8.5 22 C8.5 26.5 11.8 28.5 16 28.5 C20.2 28.5 23.5 26.5 23.5 22 C23.5 17 20 14 18 14 C19 16 18.5 17.5 17.5 17.5 C17.5 15 16.8 12.5 16 11 Z';
      // Inner hot yellow core
      const innerFlame = 'M16 18 C14.5 20 13.5 21.5 13.5 23.5 C13.5 26 14.8 27.5 16 27.5 C17.2 27.5 18.5 26 18.5 23.5 C18.5 21.5 17.5 20 16 18 Z';

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${outerFlame}" />
          <path d="${midFlame}" />
          <path d="${innerFlame}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="${outerFlame}" />
        </g>`;
      }

      const pColor = c.primary;
      const sColor = opts.style === 'duotone' ? c.secondary : '#F97316';
      const aColor = opts.style === 'duotone' ? c.primary : '#FDE047';

      return `${badge}<g stroke-linejoin="round">
        <!-- Outer Roaring Flame -->
        <path d="${outerFlame}" fill="${pColor}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Middle Licking Flame Tongue -->
        <path d="${midFlame}" fill="${sColor}" />
        <!-- Inner Incandescent Golden Core -->
        <path d="${innerFlame}" fill="${aColor}" />
      </g>`;
    },
  },

  // 26. Bubbles (U+1FAE7)
  {
    id: 'bubbles',
    char: '🫧',
    name: 'Bubbles',
    unicodeHex: 'U+1FAE7',
    category: 'weather',
    tags: ['bubbles', 'bubble', 'soap', 'water', 'floating', 'bath', 'clean', 'fizzy', 'translucent', '🫧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#38BDF8',
        fillSecondary: '#818CF8',
        fillAccent: '#FFFFFF',
        stroke: '#0284C7',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Large bubble -->
          <circle cx="12" cy="18" r="7.5" />
          <path d="M7.8 14.5 C8.8 12.2 11 11.5 13.5 12" />
          <!-- Medium bubble -->
          <circle cx="22" cy="10" r="5" />
          <path d="M19.2 7.8 C20.2 6.8 22 6.8 23.5 7.5" />
          <!-- Small bubble -->
          <circle cx="23.5" cy="22" r="3.2" />
          <path d="M21.8 20.2 C22.4 19.6 23.4 19.6 24.2 20.2" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <!-- Large bubble -->
          <circle cx="12" cy="18" r="7.5" />
          <path d="M7.8 14.5 C8.8 12.2 11 11.5 13.5 12" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" />
          <!-- Medium bubble -->
          <circle cx="22" cy="10" r="5" />
          <path d="M19.2 7.8 C20.2 6.8 22 6.8 23.5 7.5" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" />
          <!-- Small bubble -->
          <circle cx="23.5" cy="22" r="3.2" />
          <path d="M21.8 20.2 C22.4 19.6 23.4 19.6 24.2 20.2" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" fill="none" />
        </g>`;
      }

      const bubbleColor = opts.style === 'duotone' ? c.primary : '#38BDF8';
      const bubbleStroke = opts.style === 'duotone' ? c.stroke : '#0284C7';

      return `${badge}<g stroke-linecap="round">
        <!-- 1. Large Bubble (Center-Left) -->
        <circle cx="12" cy="18" r="7.5" fill="${bubbleColor}" fill-opacity="0.35" stroke="${bubbleStroke}" stroke-width="1.2" />
        <!-- Bottom iridescence glow -->
        <path d="M8.5 21.5 C10.5 24 14.5 24 16.5 21" stroke="#F472B6" stroke-width="1.2" fill="none" opacity="0.6" />
        <!-- Top reflection crescent glint -->
        <path d="M7.8 14.5 C8.8 12.2 11 11.5 13.5 12" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
        <circle cx="8.8" cy="16.5" r="0.75" fill="#FFFFFF" />

        <!-- 2. Medium Bubble (Top-Right) -->
        <circle cx="22" cy="10" r="5" fill="${bubbleColor}" fill-opacity="0.35" stroke="${bubbleStroke}" stroke-width="1.1" />
        <path d="M19.5 12.5 C21 14 23.5 13.5 24.5 12" stroke="#F472B6" stroke-width="1" fill="none" opacity="0.5" />
        <path d="M19.2 7.8 C20.2 6.8 22 6.8 23.5 7.5" stroke="#FFFFFF" stroke-width="1.2" fill="none" />

        <!-- 3. Small Bubble (Bottom-Right) -->
        <circle cx="23.5" cy="22" r="3.2" fill="${bubbleColor}" fill-opacity="0.35" stroke="${bubbleStroke}" stroke-width="1" />
        <path d="M21.8 20.2 C22.4 19.6 23.4 19.6 24.2 20.2" stroke="#FFFFFF" stroke-width="0.9" fill="none" />
      </g>`;
    },
  },
];
