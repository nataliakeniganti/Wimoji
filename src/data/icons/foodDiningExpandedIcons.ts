import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const foodDiningExpandedIcons: WimojiIconDef[] = [
  // 🥕 Carrot (U+1F955)
  {
    id: 'carrot',
    char: '\u{1F955}',
    name: 'Carrot',
    unicodeHex: 'U+1F955',
    category: 'objects-places',
    tags: ['carrot', 'vegetable', 'orange', 'root', 'healthy', 'food', 'rabbit', 'gardening', 'greens', '🥕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F97316',
        fillSecondary: '#22C55E',
        fillAccent: '#EA580C',
        stroke: '#C2410C',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const rootPath = 'M7.5 24.5 C6 26.5 5 26 6.2 24.5 C8 20.5 15.5 11.5 19.5 8.5 C22 6.8 24.2 7.8 24.5 10.2 C24.5 13.8 17.5 20.5 7.5 24.5 Z';
      const greensPath = 'M21.5 8 C23 4.2 26 2.5 28 3 C27 5.5 25 7.5 23 8.5 M22.5 7 C24.5 4 27.5 4.8 26.8 7.2 M20.5 8 C19.5 4.5 21.5 2.5 23.5 3.8';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${rootPath}" />
          <path d="${greensPath}" stroke-width="${Math.max(1.1, sw * 0.8)}" />
          <!-- Root horizontal ridges -->
          <line x1="10" y1="20" x2="13" y2="22" stroke-width="${Math.max(0.9, sw * 0.7)}" />
          <line x1="14" y1="15.5" x2="17.5" y2="18" stroke-width="${Math.max(0.9, sw * 0.7)}" />
          <line x1="18" y1="11.5" x2="21.5" y2="14" stroke-width="${Math.max(0.9, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${rootPath}" />
          <path d="${greensPath}" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
          <!-- Negative space root ridges -->
          <line x1="10" y1="20" x2="13" y2="22" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" />
          <line x1="14" y1="15.5" x2="17.5" y2="18" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" />
          <line x1="18" y1="11.5" x2="21.5" y2="14" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" />
        </g>`;
      }

      const carrotFill = isDuotone ? c.primary : '#F97316';
      const carrotOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const greenCol = isDuotone ? c.secondary : '#22C55E';
      const borderCol = isDuotone ? c.stroke : '#C2410C';

      return `${badge}<g>
        <!-- Leafy Feathery Green Carrot Tops -->
        <g stroke="${greenCol}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M22 8 C23.5 4.5 26.5 2.5 28 3 C27 5.5 25 7.5 23 8.5" />
          <path d="M22.5 7 C24.5 4.2 27.5 4.8 26.8 7.2" />
          <path d="M20.5 8 C19.5 4.5 21.5 2.5 23.5 3.8" />
        </g>
        <!-- Orange Taproot Body -->
        <path d="${rootPath}" fill="${carrotFill}"${carrotOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Top Shoulder Highlight -->
        <path d="M18.5 9.5 C20.5 8 22.5 8.5 23.5 10.5" stroke="#FDBA74" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Root Ridges -->
        <line x1="10" y1="20" x2="13" y2="22" stroke="${borderCol}" stroke-width="1.1" stroke-linecap="round" opacity="0.85" />
        <line x1="14" y1="15.5" x2="17.5" y2="18" stroke="${borderCol}" stroke-width="1.1" stroke-linecap="round" opacity="0.85" />
        <line x1="18" y1="11.5" x2="21.5" y2="14" stroke="${borderCol}" stroke-width="1.1" stroke-linecap="round" opacity="0.85" />
      </g>`;
    },
  },

  // 🥖 Baguette Bread (U+1F956)
  {
    id: 'baguette-bread',
    char: '\u{1F956}',
    name: 'Baguette Bread',
    unicodeHex: 'U+1F956',
    category: 'objects-places',
    tags: ['baguette bread', 'baguette', 'french bread', 'bakery', 'bread', 'loaf', 'food', 'crust', 'sandwich', '🥖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#D97706',
        fillAccent: '#FEF3C7',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const loafPath = 'M5 24 C3 22 4 19 6 17 L21 5 C24 2.5 27 3.5 28 6 C29 8.5 27.5 11 25 13 L10 25 C8 27 5.5 26 5 24 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${loafPath}" />
          <!-- Diagonal Baker's Slashes -->
          <line x1="9" y1="17" x2="12" y2="19" stroke-width="${Math.max(1, sw * 0.75)}" />
          <line x1="14" y1="12" x2="17" y2="14" stroke-width="${Math.max(1, sw * 0.75)}" />
          <line x1="19" y1="7" x2="22" y2="9" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${loafPath}" />
          <!-- Slash cutouts -->
          <ellipse cx="10.5" cy="18" rx="1.8" ry="0.8" transform="rotate(35 10.5 18)" fill="#FFFFFF" />
          <ellipse cx="15.5" cy="13" rx="1.8" ry="0.8" transform="rotate(35 15.5 13)" fill="#FFFFFF" />
          <ellipse cx="20.5" cy="8" rx="1.8" ry="0.8" transform="rotate(35 20.5 8)" fill="#FFFFFF" />
        </g>`;
      }

      const breadFill = isDuotone ? c.primary : '#F59E0B';
      const breadOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const crustCol = isDuotone ? c.secondary : '#D97706';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Golden Baked Baguette Loaf -->
        <path d="${loafPath}" fill="${breadFill}"${breadOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Bottom Shading -->
        <path d="M7 23 L22 11" stroke="${crustCol}" stroke-width="2" stroke-linecap="round" opacity="0.4" />
        <!-- Baker's Slits / Slashes -->
        <g stroke="${borderCol}" stroke-width="1.1" stroke-linecap="round" fill="none">
          <path d="M9 17 C10.5 16 12 18 12.5 19.5" />
          <path d="M14 12 C15.5 11 17 13 17.5 14.5" />
          <path d="M19 7 C20.5 6 22 8 22.5 9.5" />
        </g>
        <!-- Pale Bread Crumb Interior in Cuts -->
        <ellipse cx="10.5" cy="18" rx="1.5" ry="0.6" transform="rotate(35 10.5 18)" fill="#FEF3C7" />
        <ellipse cx="15.5" cy="13" rx="1.5" ry="0.6" transform="rotate(35 15.5 13)" fill="#FEF3C7" />
        <ellipse cx="20.5" cy="8" rx="1.5" ry="0.6" transform="rotate(35 20.5 8)" fill="#FEF3C7" />
        <!-- Crust Flour Highlight Sheen -->
        <path d="M8 19 L23 7" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" opacity="0.35" />
      </g>`;
    },
  },

  // 🥗 Green Salad (U+1F957)
  {
    id: 'green-salad',
    char: '\u{1F957}',
    name: 'Green Salad',
    unicodeHex: 'U+1F957',
    category: 'objects-places',
    tags: ['green salad', 'salad', 'vegetables', 'healthy', 'greens', 'lettuce', 'tomato', 'vegan', 'diet', 'food', 'bowl', '🥗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#22C55E',
        fillSecondary: '#EF4444',
        fillAccent: '#F8FAFC',
        stroke: '#15803D',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Salad Bowl -->
          <ellipse cx="16" cy="16" rx="11" ry="3.5" />
          <path d="M5 16 C5 24 9.5 27 16 27 C22.5 27 27 24 27 16" />
          <!-- Ruffled Greens -->
          <path d="M7 15 C6 11 10 9 13 11 C15 8 19 8 21 11 C24 9 27 12 25 15" />
          <!-- Toppings -->
          <circle cx="11.5" cy="13.5" r="1.8" />
          <circle cx="20.5" cy="13" r="1.8" />
          <circle cx="16" cy="11.5" r="1.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M5 16 C5 24 9.5 27 16 27 C22.5 27 27 24 27 16 Z" />
          <!-- Greens Dome -->
          <path d="M6 16 C5 11 9.5 8 13 10 C15 7.5 19 7.5 21 10 C24.5 8 27 11 26 16 Z" />
          <!-- Cutout toppings -->
          <circle cx="11.5" cy="13.5" r="1.5" fill="#FFFFFF" />
          <circle cx="20.5" cy="13" r="1.5" fill="#FFFFFF" />
          <circle cx="16" cy="11.5" r="1.2" fill="#FFFFFF" />
        </g>`;
      }

      const greensFill = isDuotone ? c.primary : '#22C55E';
      const greensOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const tomatoCol = isDuotone ? c.secondary : '#EF4444';
      const bowlCol = isDuotone ? '#E2E8F0' : '#F8FAFC';
      const borderCol = isDuotone ? c.stroke : '#94A3B8';

      return `${badge}<g>
        <!-- Crisp Lettuce Leaf Clusters -->
        <path d="M6 16 C5 11 9.5 8.5 13 10.5 C15 7.5 19 7.5 21 10.5 C24.5 8.5 27 11 26 16 Z" fill="${greensFill}"${greensOpacity} stroke="#15803D" stroke-width="1" stroke-linejoin="round" />
        <!-- Leaf Veins -->
        <path d="M10 13 C12 11 14 12 16 11 M18 10 C20 11 22 10 24 13" stroke="#86EFAC" stroke-width="0.8" stroke-linecap="round" fill="none" />
        <!-- Cherry Tomato Half 1 -->
        <circle cx="11.5" cy="13.5" r="2.2" fill="${tomatoCol}" stroke="#B91C1C" stroke-width="0.7" />
        <circle cx="11" cy="13" r="0.6" fill="#FFFFFF" opacity="0.6" />
        <!-- Cherry Tomato Half 2 -->
        <circle cx="20.5" cy="13" r="2.2" fill="${tomatoCol}" stroke="#B91C1C" stroke-width="0.7" />
        <circle cx="20" cy="12.5" r="0.6" fill="#FFFFFF" opacity="0.6" />
        <!-- Cucumber Rondelle -->
        <circle cx="16" cy="11.5" r="1.8" fill="#86EFAC" stroke="#15803D" stroke-width="0.7" />
        <!-- Ceramic Salad Bowl -->
        <path d="M5 16 C5 24 9.5 27 16 27 C22.5 27 27 24 27 16 Z" fill="${bowlCol}" stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Bowl Top Rim -->
        <ellipse cx="16" cy="16" rx="11" ry="3.5" fill="none" stroke="${borderCol}" stroke-width="1.2" />
        <!-- Bowl Shadow Shading -->
        <path d="M7 21 C10 25 22 25 25 21" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 🥘 Shallow Pan of Food (U+1F958)
  {
    id: 'shallow-pan-of-food',
    char: '\u{1F958}',
    name: 'Shallow Pan of Food',
    unicodeHex: 'U+1F958',
    category: 'objects-places',
    tags: ['shallow pan of food', 'paella', 'pan', 'skillet', 'casserole', 'cooking', 'spanish', 'rice', 'seafood', 'shrimp', 'food', 'dinner', '🥘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#FB7185',
        fillAccent: '#22C55E',
        stroke: '#1E293B',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Pan Body -->
          <ellipse cx="16" cy="17.5" rx="11" ry="5.5" />
          <path d="M5 17.5 C5 22.5 9.5 25.5 16 25.5 C22.5 25.5 27 22.5 27 17.5" />
          <!-- Handles -->
          <path d="M5 16.5 C2.5 16.5 2.5 19 5 19.5" />
          <path d="M27 16.5 C29.5 16.5 29.5 19 27 19.5" />
          <!-- Shrimp & Morsels -->
          <path d="M12 16 C10.5 14 12 12.5 13.5 13.5 C15 14.5 14 16 12 16" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M18.5 17.5 C20 16 21.5 17 21 18.5" stroke-width="${Math.max(1, sw * 0.75)}" />
          <circle cx="16" cy="15.5" r="0.8" />
          <circle cx="10" cy="18" r="0.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Pan -->
          <ellipse cx="16" cy="17.5" rx="11" ry="5.5" />
          <path d="M5 17.5 C5 22.5 9.5 25.5 16 25.5 C22.5 25.5 27 22.5 27 17.5 Z" />
          <path d="M5 16.5 C2.5 16.5 2.5 19 5 19.5" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="M27 16.5 C29.5 16.5 29.5 19 27 19.5" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" fill="none" />
          <!-- Shrimp cutouts -->
          <circle cx="13" cy="15" r="1.2" fill="#FFFFFF" />
          <circle cx="19" cy="17" r="1.2" fill="#FFFFFF" />
        </g>`;
      }

      const panCol = isDuotone ? '#334155' : '#1E293B';
      const riceFill = isDuotone ? c.primary : '#F59E0B';
      const riceOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const shrimpCol = isDuotone ? c.secondary : '#FB7185';
      const peaCol = isDuotone ? c.accent : '#22C55E';
      const borderCol = isDuotone ? c.stroke : '#0F172A';

      return `${badge}<g>
        <!-- Loop Handle Left -->
        <path d="M5 16.5 C2 16.5 2 19 5 19.5" stroke="${borderCol}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Loop Handle Right -->
        <path d="M27 16.5 C30 16.5 30 19 27 19.5" stroke="${borderCol}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Skillet Pan Outer Basin -->
        <path d="M5 17.5 C5 23 9.5 26 16 26 C22.5 26 27 23 27 17.5 Z" fill="${panCol}" stroke="${borderCol}" stroke-width="1.2" />
        <!-- Saffron Rice Pan Interior -->
        <ellipse cx="16" cy="17.5" rx="10.8" ry="5.2" fill="${riceFill}"${riceOpacity} stroke="${borderCol}" stroke-width="1" />
        <!-- Curled Pink Prawn / Shrimp 1 -->
        <path d="M11 16.5 C9.5 14 11.5 12 13.5 13 C15 14 14.5 16.5 12.5 16.8 Z" fill="${shrimpCol}" stroke="#E11D48" stroke-width="0.6" />
        <!-- Curled Pink Prawn / Shrimp 2 -->
        <path d="M18 18 C19.5 16 21.5 16.5 21.5 18 C21 19.5 19 19.8 18 18 Z" fill="${shrimpCol}" stroke="#E11D48" stroke-width="0.6" />
        <!-- Sweet Green Peas -->
        <circle cx="10" cy="18" r="0.9" fill="${peaCol}" />
        <circle cx="15.5" cy="15.2" r="0.9" fill="${peaCol}" />
        <circle cx="16.5" cy="19.5" r="0.9" fill="${peaCol}" />
        <circle cx="22" cy="16.5" r="0.9" fill="${peaCol}" />
        <!-- Lemon Wedge Garnish Accent -->
        <path d="M15 13 L17 12 C17.5 13.5 16.5 14.5 15 14 Z" fill="#FACC15" />
      </g>`;
    },
  },

  // 🥙 Stuffed Flatbread (U+1F959)
  {
    id: 'stuffed-flatbread',
    char: '\u{1F959}',
    name: 'Stuffed Flatbread',
    unicodeHex: 'U+1F959',
    category: 'objects-places',
    tags: ['stuffed flatbread', 'falafel', 'pita', 'kebab', 'shawarma', 'gyro', 'flatbread', 'sandwich', 'food', 'wrap', '🥙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#FDE68A',
        fillSecondary: '#22C55E',
        fillAccent: '#EF4444',
        stroke: '#B45309',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const pitaPocket = 'M5 16 C5 24 10 27 16 27 C22 27 27 24 27 16 C23.5 18.5 19.5 19.5 16 19.5 C12.5 19.5 8.5 18.5 5 16 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${pitaPocket}" />
          <!-- Stuffed Fillings Mound -->
          <path d="M5.5 15 C7.5 10 11.5 7.5 16 7.5 C20.5 7.5 24.5 10 26.5 15" />
          <!-- Falafel, Tomatoes & Drizzle -->
          <circle cx="12" cy="12" r="2" />
          <circle cx="20" cy="12" r="2" />
          <path d="M14 13 Q16 11 18 13" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${pitaPocket}" />
          <path d="M5.5 15 C7.5 10 11.5 7.5 16 7.5 C20.5 7.5 24.5 10 26.5 15 Z" />
          <!-- Negative space cuts -->
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
          <circle cx="20" cy="12" r="1.5" fill="#FFFFFF" />
          <path d="M10 18 Q16 21 22 18" stroke="#FFFFFF" stroke-width="1" fill="none" />
        </g>`;
      }

      const pitaFill = isDuotone ? c.primary : '#FDE68A';
      const pitaOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const borderCol = isDuotone ? c.stroke : '#B45309';

      return `${badge}<g>
        <!-- Crisp Shredded Greens in Pocket -->
        <path d="M6 15 C8 10 11.5 7.5 16 7.5 C20.5 7.5 24 10 26 15 Z" fill="#22C55E" stroke="#15803D" stroke-width="0.8" />
        <!-- Falafel Meatball 1 -->
        <circle cx="11.5" cy="11.5" r="2.2" fill="#78350F" stroke="#451A03" stroke-width="0.6" />
        <!-- Falafel Meatball 2 -->
        <circle cx="20.5" cy="11.5" r="2.2" fill="#78350F" stroke="#451A03" stroke-width="0.6" />
        <!-- Diced Red Tomato Cubes -->
        <rect x="14" y="9.5" width="2.4" height="2.4" rx="0.5" fill="#EF4444" />
        <rect x="16.5" y="11" width="2.2" height="2.2" rx="0.5" fill="#EF4444" />
        <!-- Creamy Tahini Drizzle Swirl -->
        <path d="M9 13.5 Q12 11 15 13 Q18 11 22 13.5" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <!-- Toasted Pita Bread Pocket Outer Shell -->
        <path d="${pitaPocket}" fill="${pitaFill}"${pitaOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Toasted Spots on Pita -->
        <ellipse cx="12" cy="22" rx="1.5" ry="0.8" fill="#B45309" opacity="0.4" />
        <ellipse cx="19" cy="23" rx="1.8" ry="0.9" fill="#B45309" opacity="0.4" />
        <ellipse cx="15.5" cy="24.5" rx="1.2" ry="0.6" fill="#B45309" opacity="0.4" />
      </g>`;
    },
  },

  // 🥚 Egg (U+1F95A)
  {
    id: 'egg',
    char: '\u{1F95A}',
    name: 'Egg',
    unicodeHex: 'U+1F95A',
    category: 'objects-places',
    tags: ['egg', 'breakfast', 'food', 'cooking', 'shell', 'hen', 'farm', 'oval', 'baking', 'protein', '🥚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F8FAFC',
        fillSecondary: '#E2E8F0',
        stroke: '#94A3B8',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const eggPath = 'M16 4.5 C11 4.5 7.5 11.5 7.5 18.5 C7.5 24 11 27.5 16 27.5 C21 27.5 24.5 24 24.5 18.5 C24.5 11.5 21 4.5 16 4.5 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${eggPath}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${eggPath}" />
          <ellipse cx="13" cy="12" rx="2" ry="3.5" transform="rotate(-20 13 12)" fill="#FFFFFF" opacity="0.4" />
        </g>`;
      }

      const eggFill = isDuotone ? c.primary : '#F8FAFC';
      const eggOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const borderCol = isDuotone ? c.stroke : '#94A3B8';

      return `${badge}<g>
        <!-- Porcelain Smooth Egg Shell -->
        <path d="${eggPath}" fill="${eggFill}"${eggOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Bottom Shading Gradient Shadow -->
        <path d="M9 19 C9 24 12 26.5 16 26.5 C20 26.5 23 24 23 19" stroke="#CBD5E1" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Soft Specular Reflection Light Sheen -->
        <ellipse cx="13" cy="12" rx="2.2" ry="4" transform="rotate(-20 13 12)" fill="#FFFFFF" opacity="0.75" />
      </g>`;
    },
  },

  // 🥛 Glass of Milk (U+1F95B)
  {
    id: 'glass-of-milk',
    char: '\u{1F95B}',
    name: 'Glass of Milk',
    unicodeHex: 'U+1F95B',
    category: 'objects-places',
    tags: ['glass of milk', 'milk', 'drink', 'beverage', 'calcium', 'dairy', 'breakfast', 'cow', 'healthy', '🥛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#FFFFFF',
        fillSecondary: '#BAE6FD',
        stroke: '#94A3B8',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tumbler Glass -->
          <ellipse cx="16" cy="6" rx="7" ry="1.8" />
          <path d="M9 6 L10.5 25.5 C10.8 27.2 12 28 14 28 H18 C20 28 21.2 27.2 21.5 25.5 L23 6" />
          <!-- Milk Level Surface -->
          <ellipse cx="16" cy="11.5" rx="5.8" ry="1.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M9 6 L10.5 25.5 C10.8 27.2 12 28 14 28 H18 C20 28 21.2 27.2 21.5 25.5 L23 6 Z" />
          <ellipse cx="16" cy="6" rx="6" ry="1.5" fill="#FFFFFF" />
          <!-- Negative space line -->
          <line x1="11.5" y1="9" x2="12.5" y2="24" stroke="#FFFFFF" stroke-width="1" />
        </g>`;
      }

      const milkFill = isDuotone ? c.primary : '#FFFFFF';
      const glassBorder = isDuotone ? c.stroke : '#94A3B8';

      return `${badge}<g>
        <!-- Glass Tumbler Walls -->
        <path d="M9 6 L10.5 25.5 C10.8 27.2 12 28 14 28 H18 C20 28 21.2 27.2 21.5 25.5 L23 6 Z" fill="#F0F9FF" fill-opacity="0.4" stroke="${glassBorder}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Rich Creamy White Milk -->
        <path d="M10.2 11.5 L10.8 25 C11 26.2 12 27 14 27 H18 C20 27 21 26.2 21.2 25 L21.8 11.5 C19 12.5 13 12.5 10.2 11.5 Z" fill="${milkFill}" stroke="#E2E8F0" stroke-width="0.8" />
        <!-- Milk Surface Meniscus -->
        <ellipse cx="16" cy="11.5" rx="5.8" ry="1.4" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="0.6" />
        <!-- Top Glass Oval Rim -->
        <ellipse cx="16" cy="6" rx="7" ry="1.8" fill="none" stroke="${glassBorder}" stroke-width="1.1" />
        <!-- Glass Glint Highlight -->
        <line x1="11.2" y1="9" x2="12.2" y2="24" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.6" />
      </g>`;
    },
  },

  // 🥜 Peanuts (U+1F95C)
  {
    id: 'peanuts',
    char: '\u{1F95C}',
    name: 'Peanuts',
    unicodeHex: 'U+1F95C',
    category: 'objects-places',
    tags: ['peanuts', 'peanut', 'nut', 'snack', 'food', 'shell', 'groundnut', 'salty', 'peanut butter', '🥜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#D97706',
        fillSecondary: '#FDE68A',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const pod1 = 'M14 5 C10.5 5 8.5 8 9 11.5 C9.5 14 11.5 15.5 11.5 16.5 C11.5 17.5 8.5 19.5 9 23 C9.5 26.5 11.8 28 15 28 C18.2 28 20.5 26.5 21 23 C21.5 19.5 18.5 17.5 18.5 16.5 C18.5 15.5 20.5 14 21 11.5 C21.5 8 18 5 14 5 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${pod1}" />
          <!-- Shell Waist & Ridges -->
          <path d="M11.5 16.5 H18.5" />
          <path d="M12 9 C14 8 16 8 18 9" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M12 24 C14 25 16 25 18 24" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${pod1}" />
          <!-- Waist cut -->
          <line x1="12" y1="16.5" x2="18" y2="16.5" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const shellFill = isDuotone ? c.primary : '#D97706';
      const shellOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Textured Peanut Pod In Shell -->
        <path d="${pod1}" fill="${shellFill}"${shellOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Shell Waist Constriction Contour -->
        <path d="M11.5 16.5 C13.5 17 16.5 17 18.5 16.5" stroke="${borderCol}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <!-- Reticulated Shell Texture Ridges -->
        <g stroke="${borderCol}" stroke-width="0.9" stroke-linecap="round" opacity="0.75" fill="none">
          <path d="M12 9 C14 8 16 8 18 9" />
          <path d="M11.5 12 C14 11 16 11 18.5 12" />
          <path d="M11.5 21 C14 20 16 20 18.5 21" />
          <path d="M12 24 C14 25 16 25 18 24" />
          <!-- Vertical Intersecting Mesh Strands -->
          <line x1="15" y1="8" x2="15" y2="14" />
          <line x1="15" y1="19" x2="15" y2="25" />
        </g>
        <!-- Shell Light Highlight -->
        <ellipse cx="14" cy="9.5" rx="2" ry="1.2" fill="#FEF3C7" opacity="0.4" />
        <ellipse cx="15" cy="22.5" rx="2.5" ry="1.5" fill="#FEF3C7" opacity="0.4" />
      </g>`;
    },
  },

  // 🥝 Kiwi Fruit (U+1F95D)
  {
    id: 'kiwi-fruit',
    char: '\u{1F95D}',
    name: 'Kiwi Fruit',
    unicodeHex: 'U+1F95D',
    category: 'objects-places',
    tags: ['kiwi fruit', 'kiwi', 'fruit', 'food', 'green', 'healthy', 'tropical', 'seeds', 'sweet', 'tart', '🥝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#84CC16',
        fillSecondary: '#78350F',
        fillAccent: '#ECFCCB',
        stroke: '#4D7C0F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="10.5" stroke-width="${Math.max(1, sw * 0.75)}" />
          <circle cx="16" cy="16" r="3.5" />
          <!-- Seeds -->
          <circle cx="16" cy="10" r="0.8" fill="${c.stroke}" />
          <circle cx="21" cy="13" r="0.8" fill="${c.stroke}" />
          <circle cx="20" cy="19" r="0.8" fill="${c.stroke}" />
          <circle cx="14" cy="21.5" r="0.8" fill="${c.stroke}" />
          <circle cx="11" cy="17" r="0.8" fill="${c.stroke}" />
          <circle cx="12" cy="12" r="0.8" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" />
        </g>`;
      }

      const kiwiFlesh = isDuotone ? c.primary : '#84CC16';
      const kiwiOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const skinCol = isDuotone ? c.stroke : '#78350F';
      const coreCol = isDuotone ? c.accent : '#ECFCCB';
      const borderCol = isDuotone ? c.stroke : '#4D7C0F';

      return `${badge}<g>
        <!-- Fuzzy Brown Outer Kiwi Skin / Rind -->
        <circle cx="16" cy="16" r="12.5" fill="${skinCol}" stroke="${skinCol}" stroke-width="0.8" />
        <!-- Tangy Emerald Green Flesh -->
        <circle cx="16" cy="16" r="11.2" fill="${kiwiFlesh}"${kiwiOpacity} stroke="${borderCol}" stroke-width="0.8" />
        <!-- Pale Starburst Creamy Center Core -->
        <ellipse cx="16" cy="16" rx="3.8" ry="3.8" fill="${coreCol}" />
        <!-- Radiating Starburst Flesh Lines -->
        <g stroke="${coreCol}" stroke-width="0.8" stroke-linecap="round" opacity="0.65" fill="none">
          <line x1="16" y1="12" x2="16" y2="8" />
          <line x1="19" y1="13.5" x2="22.5" y2="11" />
          <line x1="20" y1="16" x2="24" y2="16" />
          <line x1="19" y1="18.5" x2="22.5" y2="21" />
          <line x1="16" y1="20" x2="16" y2="24" />
          <line x1="13" y1="18.5" x2="9.5" y2="21" />
          <line x1="12" y1="16" x2="8" y2="16" />
          <line x1="13" y1="13.5" x2="9.5" y2="11" />
        </g>
        <!-- Ring of Tiny Black Kiwi Seeds -->
        <g fill="#1E293B">
          <circle cx="16" cy="10" r="0.9" />
          <circle cx="19.5" cy="11.5" r="0.9" />
          <circle cx="21.5" cy="15" r="0.9" />
          <circle cx="20.5" cy="18.5" r="0.9" />
          <circle cx="17.5" cy="21.5" r="0.9" />
          <circle cx="14" cy="21.5" r="0.9" />
          <circle cx="11" cy="19" r="0.9" />
          <circle cx="10.2" cy="15.5" r="0.9" />
          <circle cx="12" cy="12" r="0.9" />
          <circle cx="14" cy="10.5" r="0.9" />
        </g>
      </g>`;
    },
  },

  // 🥞 Pancakes (U+1F95E)
  {
    id: 'pancakes',
    char: '\u{1F95E}',
    name: 'Pancakes',
    unicodeHex: 'U+1F95E',
    category: 'objects-places',
    tags: ['pancakes', 'flapjacks', 'hotcakes', 'breakfast', 'butter', 'syrup', 'stack', 'food', 'sweet', 'maple', '🥞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#FACC15',
        fillAccent: '#B45309',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Plate -->
          <ellipse cx="16" cy="25" rx="12" ry="3.5" />
          <!-- 3 Pancakes -->
          <path d="M6.5 21 C6.5 23 10.5 24 16 24 C21.5 24 25.5 23 25.5 21" />
          <path d="M7 17 C7 19 11 20 16 20 C21 20 25 19 25 17" />
          <ellipse cx="16" cy="14" rx="9" ry="3.2" />
          <!-- Butter Pat -->
          <rect x="13.5" y="8.5" width="5" height="3.5" rx="0.8" transform="rotate(-10 16 10)" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="25" rx="12" ry="3.5" />
          <!-- Pancakes stack -->
          <path d="M6.5 15 C6.5 24 25.5 24 25.5 15 Z" />
          <ellipse cx="16" cy="14" rx="9" ry="3.2" />
          <rect x="13.5" y="8.5" width="5" height="3.5" rx="0.8" transform="rotate(-10 16 10)" />
          <!-- Negative cuts -->
          <line x1="7" y1="17.5" x2="25" y2="17.5" stroke="#FFFFFF" stroke-width="0.8" />
          <line x1="6.5" y1="21.5" x2="25.5" y2="21.5" stroke="#FFFFFF" stroke-width="0.8" />
        </g>`;
      }

      const pancakeFill = isDuotone ? c.primary : '#F59E0B';
      const pancakeOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const butterFill = isDuotone ? c.secondary : '#FDE047';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Serving Plate Base -->
        <ellipse cx="16" cy="25" rx="12" ry="3.5" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1" />
        <!-- Bottom Pancake -->
        <path d="M6.5 21 C6.5 23.5 10.5 24.5 16 24.5 C21.5 24.5 25.5 23.5 25.5 21 V19.5 C25.5 22 21.5 23 16 23 C10.5 23 6.5 22 6.5 19.5 Z" fill="#D97706" stroke="${borderCol}" stroke-width="1" />
        <!-- Middle Pancake -->
        <path d="M7 17 C7 19.5 11 20.5 16 20.5 C21 20.5 25 19.5 25 17 V15.5 C25 18 21 19 16 19 C11 19 7 18 7 15.5 Z" fill="#D97706" stroke="${borderCol}" stroke-width="1" />
        <!-- Top Pancake Golden Fluffy Cake -->
        <path d="M7 14 C7 16.5 11 17.5 16 17.5 C21 17.5 25 16.5 25 14 V13 C25 15.5 21 16.5 16 16.5 C11 16.5 7 15.5 7 13 Z" fill="#D97706" stroke="${borderCol}" stroke-width="1" />
        <ellipse cx="16" cy="13.5" rx="9" ry="3.2" fill="${pancakeFill}"${pancakeOpacity} stroke="${borderCol}" stroke-width="1.1" />
        <!-- Maple Syrup Drip Layer -->
        <path d="M12 13.5 C12 17 13.5 17 14 15 C14.5 18 16 18 16.5 15 C17 19 19 18.5 19.5 15.5 C18 13.5 14 13 12 13.5 Z" fill="#B45309" opacity="0.85" />
        <!-- Butter Pat On Top -->
        <rect x="13.5" y="8" width="5.5" height="3.8" rx="0.9" transform="rotate(-10 16.2 9.9)" fill="${butterFill}" stroke="#CA8A04" stroke-width="0.8" />
        <!-- Butter Top Gleam -->
        <ellipse cx="16" cy="9.5" rx="1.5" ry="0.8" fill="#FFFFFF" opacity="0.6" />
      </g>`;
    },
  },

  // 🥟 Dumpling (U+1F95F)
  {
    id: 'dumpling',
    char: '\u{1F95F}',
    name: 'Dumpling',
    unicodeHex: 'U+1F95F',
    category: 'objects-places',
    tags: ['dumpling', 'potsticker', 'gyoza', 'dim sum', 'jiaozi', 'asian', 'chinese', 'japanese', 'steamed', 'food', '🥟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#FEF3C7',
        fillSecondary: '#D97706',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const dumplingPath = 'M5 21 C4 17 6 12 11 9 C16 6 22 7 26 10.5 C28 13 28 17 26 20 C21 24 11 24 5 21 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${dumplingPath}" />
          <!-- Pleats / Crimps -->
          <path d="M10 10.5 C11 12.5 12 15 11 17" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M14 8.5 C15 11 15 14 14 17" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M18 8.5 C19 11 19 14 18 17" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M22 9.5 C23 12 22 14.5 21 17" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${dumplingPath}" />
          <!-- Pleat cutouts in white -->
          <line x1="11" y1="10" x2="11.5" y2="16" stroke="#FFFFFF" stroke-width="0.9" />
          <line x1="14.5" y1="8.5" x2="14.5" y2="16.5" stroke="#FFFFFF" stroke-width="0.9" />
          <line x1="18.5" y1="8.5" x2="18.5" y2="16.5" stroke="#FFFFFF" stroke-width="0.9" />
          <line x1="22" y1="10" x2="21.5" y2="16" stroke="#FFFFFF" stroke-width="0.9" />
        </g>`;
      }

      const doughFill = isDuotone ? c.primary : '#FEF3C7';
      const doughOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const panFriedCol = isDuotone ? c.secondary : '#D97706';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Steamed Potsticker Dough Wrapper Body -->
        <path d="${dumplingPath}" fill="${doughFill}"${doughOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Golden-Brown Pan-Fried Crispy Bottom Crust -->
        <path d="M6 21 C11 23.8 21 23.8 25.5 20.2" stroke="${panFriedCol}" stroke-width="2.6" stroke-linecap="round" fill="none" opacity="0.65" />
        <!-- Hand-Crimped Dough Pleats Along Spine -->
        <g stroke="${borderCol}" stroke-width="1.1" stroke-linecap="round" fill="none">
          <path d="M10 10.5 C11.5 12.5 12 15 11 17" />
          <path d="M14 8.5 C15.5 11 15.5 14 14 17" />
          <path d="M18 8.5 C19.5 11 19.5 14 18 17" />
          <path d="M22 9.5 C23 12 22.5 14.5 21 17" />
        </g>
        <!-- Soft Steamer Glaze Highlight -->
        <path d="M12 9 C15 7.5 20 8 23 10" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
      </g>`;
    },
  },

  // 🥠 Fortune Cookie (U+1F960)
  {
    id: 'fortune-cookie',
    char: '\u{1F960}',
    name: 'Fortune Cookie',
    unicodeHex: 'U+1F960',
    category: 'objects-places',
    tags: ['fortune cookie', 'cookie', 'chinese', 'fortune', 'luck', 'dessert', 'prophecy', 'message', 'paper', 'food', '🥠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#FFFFFF',
        fillAccent: '#EF4444',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const cookiePath = 'M8 9 C12 6.5 20 6.5 24 9 C27 13 26 19 23 23 C20 27 18 24 16 21 C14 24 12 27 9 23 C6 19 5 13 8 9 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Paper Slip -->
          <rect x="18" y="7.5" width="8" height="4" rx="0.6" transform="rotate(22 22 9.5)" />
          <!-- Folded Cookie -->
          <path d="${cookiePath}" />
          <!-- Center Pinch Crease -->
          <path d="M16 11 V21" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <rect x="18" y="7.5" width="8" height="4" rx="0.6" transform="rotate(22 22 9.5)" />
          <path d="${cookiePath}" />
          <!-- Center crease cut -->
          <line x1="16" y1="12" x2="16" y2="21" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const cookieFill = isDuotone ? c.primary : '#F59E0B';
      const cookieOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Fortune Paper Slip Peeking Out -->
        <g transform="rotate(22 22 9.5)">
          <rect x="18" y="7" width="8.5" height="4.5" rx="0.6" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.7" />
          <line x1="19.5" y1="9.2" x2="25" y2="9.2" stroke="#EF4444" stroke-width="0.6" />
        </g>
        <!-- Folded Winged Fortune Cookie Body -->
        <path d="${cookiePath}" fill="${cookieFill}"${cookieOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Center Inward Fold Indentation -->
        <path d="M16 10.5 C15.5 14 15.5 18 16 21" stroke="${borderCol}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <!-- Baked Crust Shading in Crease -->
        <path d="M16 12 C15 15 15 18 16 20.5" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.5" />
        <!-- Crisp Baked Wing Highlights -->
        <path d="M9 11 C8 15 8.5 19 10 22" stroke="#FEF3C7" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
        <path d="M23 11 C24 15 23.5 19 22 22" stroke="#FEF3C7" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
      </g>`;
    },
  },

  // 🥡 Takeout Box (U+1F961)
  {
    id: 'takeout-box',
    char: '\u{1F961}',
    name: 'Takeout Box',
    unicodeHex: 'U+1F961',
    category: 'objects-places',
    tags: ['takeout box', 'oyster pail', 'chinese takeout', 'food container', 'noodles', 'carryout', 'fast food', 'box', 'takeaway', '🥡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F8FAFC',
        fillSecondary: '#EF4444',
        stroke: '#64748B',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Wire Handle -->
          <path d="M9 16 C9 8 23 8 23 16" />
          <!-- Tapered Box -->
          <polygon points="7,12 25,12 22,27 10,27" />
          <!-- Top Fold Flaps -->
          <path d="M7 12 L11 8 H21 L25 12" />
          <!-- Pagoda Mark -->
          <line x1="14" y1="18" x2="18" y2="18" stroke-width="${Math.max(1, sw * 0.75)}" />
          <line x1="13" y1="21" x2="19" y2="21" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M9 16 C9 8 23 8 23 16" stroke="${c.primary}" stroke-width="1.8" fill="none" />
          <polygon points="7,12 25,12 22,27 10,27" />
          <polygon points="7,12 11,8 21,8 25,12" />
          <!-- Pagoda cutout -->
          <rect x="14" y="17" width="4" height="1.2" fill="#FFFFFF" />
          <rect x="13" y="19.5" width="6" height="1.2" fill="#FFFFFF" />
        </g>`;
      }

      const boxFill = isDuotone ? c.primary : '#F8FAFC';
      const boxOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const redEmblem = isDuotone ? c.secondary : '#EF4444';
      const borderCol = isDuotone ? c.stroke : '#94A3B8';

      return `${badge}<g>
        <!-- Wire Carry Handle Behind Flaps -->
        <path d="M9 16 C9 7.5 23 7.5 23 16" stroke="#94A3B8" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <!-- Tapered Oyster Pail Carton Body -->
        <polygon points="7,12 25,12 22,27 10,27" fill="${boxFill}"${boxOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Angled Fold Flaps -->
        <polygon points="7,12 11,8 21,8 25,12" fill="${boxFill}"${boxOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Red Chinese Pagoda Takeout Emblem -->
        <g stroke="${redEmblem}" stroke-width="1.4" stroke-linecap="round" fill="none">
          <line x1="15" y1="16.5" x2="17" y2="16.5" />
          <line x1="13.5" y1="19" x2="18.5" y2="19" />
          <line x1="12.5" y1="21.5" x2="19.5" y2="21.5" />
        </g>
        <!-- Wire Handle Rivets on Sides -->
        <circle cx="8.5" cy="16" r="0.8" fill="#64748B" />
        <circle cx="23.5" cy="16" r="0.8" fill="#64748B" />
      </g>`;
    },
  },

  // 🥢 Chopsticks (U+1F962)
  {
    id: 'chopsticks',
    char: '\u{1F962}',
    name: 'Chopsticks',
    unicodeHex: 'U+1F962',
    category: 'objects-places',
    tags: ['chopsticks', 'dining', 'eating', 'asian', 'chinese', 'japanese', 'food', 'utensil', 'bamboo', 'sushi', 'noodles', '🥢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#B45309',
        fillSecondary: '#FDE68A',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      // Sleek tapered chopsticks crossing or parallel
      const stick1 = 'M6 5 L24 26';
      const stick2 = 'M9.5 4 L26.5 25';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="6" y1="5" x2="24" y2="26" stroke-width="${Math.max(1.8, sw * 1.1)}" />
          <line x1="9.5" y1="4" x2="26.5" y2="25" stroke-width="${Math.max(1.8, sw * 1.1)}" />
          <!-- Top Grip Bands -->
          <line x1="7.5" y1="7" x2="11" y2="5.5" stroke-width="${Math.max(1, sw * 0.75)}" />
          <line x1="9" y1="9" x2="12.5" y2="7.5" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <line x1="6" y1="5" x2="24" y2="26" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" />
          <line x1="9.5" y1="4" x2="26.5" y2="25" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" />
          <!-- Band cutouts -->
          <line x1="7.5" y1="7" x2="11" y2="5.5" stroke="#FFFFFF" stroke-width="0.8" />
        </g>`;
      }

      const woodFill = isDuotone ? c.primary : '#B45309';
      const highlightCol = isDuotone ? c.secondary : '#FDE68A';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Left Tapered Wooden Chopstick -->
        <line x1="6" y1="5" x2="24" y2="26" stroke="${borderCol}" stroke-width="2.6" stroke-linecap="round" />
        <line x1="6" y1="5" x2="24" y2="26" stroke="${woodFill}" stroke-width="1.8" stroke-linecap="round" />
        <line x1="6.5" y1="5.5" x2="18" y2="19" stroke="${highlightCol}" stroke-width="0.8" stroke-linecap="round" opacity="0.6" />

        <!-- Right Tapered Wooden Chopstick -->
        <line x1="9.5" y1="4" x2="26.5" y2="25" stroke="${borderCol}" stroke-width="2.6" stroke-linecap="round" />
        <line x1="9.5" y1="4" x2="26.5" y2="25" stroke="${woodFill}" stroke-width="1.8" stroke-linecap="round" />
        <line x1="10" y1="4.5" x2="20.5" y2="17" stroke="${highlightCol}" stroke-width="0.8" stroke-linecap="round" opacity="0.6" />

        <!-- Decorative Gold-Tone Top Bands -->
        <line x1="7.5" y1="7" x2="11.2" y2="5.5" stroke="#FACC15" stroke-width="1.1" stroke-linecap="round" />
        <line x1="9" y1="9" x2="12.7" y2="7.5" stroke="#FACC15" stroke-width="1.1" stroke-linecap="round" />
      </g>`;
    },
  },

  // 🥣 Bowl with Spoon (U+1F963)
  {
    id: 'bowl-with-spoon',
    char: '\u{1F963}',
    name: 'Bowl with Spoon',
    unicodeHex: 'U+1F963',
    category: 'objects-places',
    tags: ['bowl with spoon', 'cereal', 'soup', 'porridge', 'oatmeal', 'breakfast', 'spoon', 'bowl', 'food', 'warm', '🥣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#0284C7',
        fillSecondary: '#FDE68A',
        stroke: '#0369A1',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Spoon -->
          <path d="M13 18 L25 8 C26.2 7 27.5 7.5 28 8.5 C28.5 9.5 28 10.8 26.8 11.5 L17 19.5" />
          <!-- Bowl -->
          <ellipse cx="16" cy="16" rx="11" ry="3.8" />
          <path d="M5 16 C5 24 9.5 27 16 27 C22.5 27 27 24 27 16" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M13 18 L25 8 C26.2 7 27.5 7.5 28 8.5 C28.5 9.5 28 10.8 26.8 11.5 L17 19.5 Z" />
          <path d="M5 16 C5 24 9.5 27 16 27 C22.5 27 27 24 27 16 Z" />
          <ellipse cx="16" cy="16" rx="9" ry="2.8" fill="#FFFFFF" opacity="0.4" />
        </g>`;
      }

      const bowlFill = isDuotone ? c.primary : '#0284C7';
      const bowlOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const soupFill = isDuotone ? c.secondary : '#FDE68A';
      const borderCol = isDuotone ? c.stroke : '#0369A1';

      return `${badge}<g>
        <!-- Slanted Silver Spoon Sticking Out of Soup -->
        <path d="M13 18 L24.5 8 C25.8 7 27.2 7.5 27.8 8.5 C28.2 9.5 27.8 10.8 26.5 11.5 L16.5 19.5 Z" fill="#E2E8F0" stroke="#64748B" stroke-width="1.1" stroke-linejoin="round" />
        <ellipse cx="25.5" cy="9.2" rx="2" ry="1.2" transform="rotate(-40 25.5 9.2)" fill="#FFFFFF" opacity="0.75" />
        <!-- Deep Ceramic Bowl Basin -->
        <path d="M5 16 C5 24 9.5 27 16 27 C22.5 27 27 24 27 16 Z" fill="${bowlFill}"${bowlOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Bowl Interior Soup / Cereal Surface -->
        <ellipse cx="16" cy="16" rx="10.8" ry="3.6" fill="${soupFill}" stroke="${borderCol}" stroke-width="1" />
        <!-- Cereal Rings on Surface -->
        <circle cx="11" cy="16" r="1.1" fill="#F59E0B" stroke="#B45309" stroke-width="0.5" />
        <circle cx="15" cy="17" r="1.1" fill="#F59E0B" stroke="#B45309" stroke-width="0.5" />
        <circle cx="20" cy="16.5" r="1.1" fill="#F59E0B" stroke="#B45309" stroke-width="0.5" />
        <!-- Bowl Side Shading Contour -->
        <path d="M7 21 C10 25 22 25 25 21" stroke="#0369A1" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />
      </g>`;
    },
  },

  // 🥤 Cup with Straw (U+1F964)
  {
    id: 'cup-with-straw',
    char: '\u{1F964}',
    name: 'Cup with Straw',
    unicodeHex: 'U+1F964',
    category: 'objects-places',
    tags: ['cup with straw', 'soda', 'soft drink', 'paper cup', 'straw', 'fast food', 'cola', 'juice', 'takeout', 'beverage', '🥤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#F8FAFC',
        fillAccent: '#38BDF8',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Straw -->
          <path d="M16 11 L16 7 L21 4" stroke-width="${Math.max(1.8, sw * 1.1)}" />
          <!-- Lid -->
          <rect x="8" y="11" width="16" height="2.5" rx="1" />
          <!-- Cup Body -->
          <polygon points="9,13.5 23,13.5 21,28 11,28" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M16 11 L16 7 L21 4" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <rect x="8" y="11" width="16" height="2.5" rx="1" />
          <polygon points="9,13.5 23,13.5 21,28 11,28" />
          <!-- Negative space stripe -->
          <line x1="10" y1="20" x2="22" y2="20" stroke="#FFFFFF" stroke-width="1.4" />
        </g>`;
      }

      const cupFill = isDuotone ? c.primary : '#EF4444';
      const cupOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const strawCol = isDuotone ? c.accent : '#38BDF8';
      const borderCol = isDuotone ? c.stroke : '#B91C1C';

      return `${badge}<g>
        <!-- Bendy Straw -->
        <path d="M16 11 L16 7.5 L21.5 4" stroke="${strawCol}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M16 11 L16 7.5 L21.5 4" stroke="#0284C7" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Tapered Fast Food Paper Cup Body -->
        <polygon points="9,13.5 23,13.5 21,28 11,28" fill="${cupFill}"${cupOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Iconic White Branding Wave Stripe -->
        <path d="M9.8 19 C13 21 19 17 22.2 19 L21.8 22 C18.6 20 12.6 24 9.4 22 Z" fill="#FFFFFF" opacity="0.9" />
        <!-- Snap-On Translucent Lid -->
        <rect x="8" y="11" width="16" height="2.8" rx="1.2" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.1" />
        <!-- Lid Lip Rim Line -->
        <line x1="7.5" y1="13.8" x2="24.5" y2="13.8" stroke="#CBD5E1" stroke-width="0.8" stroke-linecap="round" />
      </g>`;
    },
  },

  // 🥥 Coconut (U+1F965)
  {
    id: 'coconut',
    char: '\u{1F965}',
    name: 'Coconut',
    unicodeHex: 'U+1F965',
    category: 'objects-places',
    tags: ['coconut', 'tropical', 'fruit', 'husk', 'water', 'palm', 'island', 'beach', 'food', 'nut', '🥥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#78350F',
        fillSecondary: '#FFFFFF',
        fillAccent: '#BAE6FD',
        stroke: '#451A03',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="10" stroke-width="${Math.max(1, sw * 0.75)}" />
          <circle cx="16" cy="16" r="6.5" />
          <!-- Fiber hairs -->
          <line x1="3" y1="12" x2="4.5" y2="13" />
          <line x1="28" y1="19" x2="29.5" y2="20" />
          <line x1="20" y1="28" x2="21" y2="29.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="7" fill="#FFFFFF" />
        </g>`;
      }

      const huskFill = isDuotone ? c.primary : '#78350F';
      const huskOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const meatFill = isDuotone ? c.secondary : '#FFFFFF';
      const waterFill = isDuotone ? c.accent : '#BAE6FD';
      const borderCol = isDuotone ? c.stroke : '#451A03';

      return `${badge}<g>
        <!-- Outer Fibrous Brown Coconut Shell -->
        <circle cx="16" cy="16" r="12.2" fill="${huskFill}"${huskOpacity} stroke="${borderCol}" stroke-width="1.2" />
        <!-- Husk Fiber Hairs -->
        <g stroke="${borderCol}" stroke-width="1.2" stroke-linecap="round" opacity="0.8">
          <line x1="3" y1="12" x2="4.5" y2="13" />
          <line x1="2.5" y1="17" x2="4" y2="17" />
          <line x1="28" y1="12" x2="29.5" y2="11" />
          <line x1="28" y1="19" x2="29.5" y2="20" />
          <line x1="12" y1="28" x2="11.5" y2="29.5" />
          <line x1="20" y1="28" x2="21" y2="29.5" />
          <line x1="12" y1="4" x2="11.5" y2="2.5" />
          <line x1="20" y1="4" x2="20.5" y2="2.5" />
        </g>
        <!-- Pure White Coconut Meat Flesh Ring -->
        <circle cx="16" cy="16" r="10" fill="${meatFill}" stroke="#E2E8F0" stroke-width="0.8" />
        <!-- Refreshing Clear Coconut Water Hollow -->
        <circle cx="16" cy="16" r="6.8" fill="${waterFill}" stroke="#93C5FD" stroke-width="0.8" opacity="0.85" />
        <!-- Water Shine Gleam -->
        <path d="M12.5 14 C13.5 12 17 12 18.5 13" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.75" />
      </g>`;
    },
  },

  // 🥦 Broccoli (U+1F966)
  {
    id: 'broccoli',
    char: '\u{1F966}',
    name: 'Broccoli',
    unicodeHex: 'U+1F966',
    category: 'objects-places',
    tags: ['broccoli', 'vegetable', 'greens', 'healthy', 'floret', 'diet', 'cabbage', 'vegan', 'food', 'fresh', '🥦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#15803D',
        fillSecondary: '#86EFAC',
        fillAccent: '#22C55E',
        stroke: '#14532D',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const stalkPath = 'M13 18 L12 28 H20 L19 18 Z';
      const floretsPath = 'M9 18 C5 17 4.5 12 8 9 C9 6 13 4 16 5 C19 4 23 6 24 9 C27.5 12 27 17 23 18 C20 19 12 19 9 18 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${stalkPath}" />
          <path d="${floretsPath}" />
          <!-- Inner floret scallops -->
          <path d="M9 13 C11 11 14 11 15 13" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M17 13 C18 11 21 11 23 13" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M13 8 C15 7 17 7 19 8" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${stalkPath}" />
          <path d="${floretsPath}" />
          <!-- Scallop cuts -->
          <circle cx="12" cy="12" r="1.2" fill="#FFFFFF" />
          <circle cx="20" cy="12" r="1.2" fill="#FFFFFF" />
          <circle cx="16" cy="8" r="1.2" fill="#FFFFFF" />
        </g>`;
      }

      const floretFill = isDuotone ? c.primary : '#15803D';
      const floretOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const stalkFill = isDuotone ? c.secondary : '#86EFAC';
      const floretHighlight = isDuotone ? c.accent : '#22C55E';
      const borderCol = isDuotone ? c.stroke : '#14532D';

      return `${badge}<g>
        <!-- Pale Green Stalk -->
        <path d="${stalkPath}" fill="${stalkFill}" stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <line x1="16" y1="18" x2="16" y2="28" stroke="#4ADE80" stroke-width="1.2" stroke-linecap="round" opacity="0.6" />
        <!-- Rich Dense Bumpy Florets Head -->
        <path d="${floretsPath}" fill="${floretFill}"${floretOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Bumpy Textured Floret Clusters -->
        <g stroke="${floretHighlight}" stroke-width="1.4" stroke-linecap="round" fill="none">
          <path d="M9 13 C11 11 13.5 11 15 13" />
          <path d="M17 13 C18.5 11 21 11 23 13" />
          <path d="M13 8 C14.5 6.5 17.5 6.5 19 8" />
          <path d="M11 16 C13 15 19 15 21 16" />
        </g>
        <!-- Tiny Crisp Highlight Dots -->
        <circle cx="12" cy="10" r="0.8" fill="#4ADE80" opacity="0.75" />
        <circle cx="20" cy="10" r="0.8" fill="#4ADE80" opacity="0.75" />
        <circle cx="16" cy="14" r="0.8" fill="#4ADE80" opacity="0.75" />
      </g>`;
    },
  },

  // 🥧 Pie (U+1F967)
  {
    id: 'pie',
    char: '\u{1F967}',
    name: 'Pie',
    unicodeHex: 'U+1F967',
    category: 'objects-places',
    tags: ['pie', 'baking', 'bakery', 'dessert', 'apple pie', 'crust', 'pastry', 'sweet', 'food', 'thanksgiving', '🥧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#DC2626',
        fillAccent: '#D97706',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Pan -->
          <polygon points="5,18 7,26 25,26 27,18" />
          <!-- Crust Dome -->
          <ellipse cx="16" cy="18" rx="11" ry="4.2" />
          <!-- Vents -->
          <line x1="14" y1="15" x2="14" y2="18" stroke-width="${Math.max(1, sw * 0.75)}" />
          <line x1="16" y1="14" x2="16" y2="19" stroke-width="${Math.max(1, sw * 0.75)}" />
          <line x1="18" y1="15" x2="18" y2="18" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <polygon points="5,18 7,26 25,26 27,18" />
          <ellipse cx="16" cy="18" rx="11" ry="4.2" />
          <!-- Slit cuts -->
          <line x1="14" y1="15" x2="14" y2="18" stroke="#FFFFFF" stroke-width="1.2" />
          <line x1="16" y1="14" x2="16" y2="19" stroke="#FFFFFF" stroke-width="1.2" />
          <line x1="18" y1="15" x2="18" y2="18" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const crustFill = isDuotone ? c.primary : '#F59E0B';
      const crustOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const berryCol = isDuotone ? c.secondary : '#DC2626';
      const panCol = isDuotone ? '#CBD5E1' : '#94A3B8';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Fluted Foil Pie Pan Base -->
        <polygon points="5,18 7,26 25,26 27,18" fill="${panCol}" stroke="#64748B" stroke-width="1.1" stroke-linejoin="round" />
        <!-- Pie Pan Ridge Lines -->
        <line x1="10" y1="18" x2="11.5" y2="26" stroke="#64748B" stroke-width="0.8" opacity="0.6" />
        <line x1="16" y1="18" x2="16" y2="26" stroke="#64748B" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="18" x2="20.5" y2="26" stroke="#64748B" stroke-width="0.8" opacity="0.6" />
        <!-- Golden Baked Flaky Pie Top -->
        <ellipse cx="16" cy="18" rx="11" ry="4.5" fill="${crustFill}"${crustOpacity} stroke="${borderCol}" stroke-width="1.2" />
        <!-- Bubbling Berry Fruit Filling Vents -->
        <g stroke="${berryCol}" stroke-width="1.5" stroke-linecap="round">
          <line x1="13.5" y1="16" x2="13.5" y2="18.5" />
          <line x1="16" y1="15" x2="16" y2="19.5" />
          <line x1="18.5" y1="16" x2="18.5" y2="18.5" />
        </g>
        <!-- Fluted Crimped Edge Scallops -->
        <path d="M6 18 C7 16 9 16 10 18 C11 16 13 16 14 18 C15 16 17 16 18 18 C19 16 21 16 22 18 C23 16 25 16 26 18" stroke="${borderCol}" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.5" />
        <!-- Golden Glaze Glow -->
        <ellipse cx="16" cy="16.5" rx="7" ry="1.8" fill="#FEF3C7" opacity="0.35" />
      </g>`;
    },
  },

  // 🥨 Pretzel (U+1F968)
  {
    id: 'pretzel',
    char: '\u{1F968}',
    name: 'Pretzel',
    unicodeHex: 'U+1F968',
    category: 'objects-places',
    tags: ['pretzel', 'bavarian', 'snack', 'bread', 'knot', 'twisted', 'bakery', 'salty', 'beer', 'oktoberfest', 'food', '🥨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#B45309',
        fillSecondary: '#FFFFFF',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const pretzelOuter = 'M7 11 C4 14 4 20 8 23 C12 26 15 25 16 23 C17 25 20 26 24 23 C28 20 28 14 25 11 C22 8 18 10 16 14 C14 10 10 8 7 11 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${pretzelOuter}" />
          <!-- Inner Knots -->
          <path d="M10 18 C12 21 15 20 16 17" stroke-width="${Math.max(1, sw * 0.8)}" />
          <path d="M22 18 C20 21 17 20 16 17" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${pretzelOuter}" />
          <!-- Eye cutouts -->
          <circle cx="11.5" cy="14" r="2.2" fill="#FFFFFF" />
          <circle cx="20.5" cy="14" r="2.2" fill="#FFFFFF" />
          <circle cx="16" cy="20" r="1.8" fill="#FFFFFF" />
        </g>`;
      }

      const pretzelFill = isDuotone ? c.primary : '#B45309';
      const pretzelOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Baked Bavarian Twisted Knot Pretzel -->
        <path d="${pretzelOuter}" fill="${pretzelFill}"${pretzelOpacity} stroke="${borderCol}" stroke-width="1.3" stroke-linejoin="round" />
        <!-- Inner Knot Holes (Negative Space) -->
        <ellipse cx="11.5" cy="14" rx="2.4" ry="2" fill="#0F172A" opacity="0.05" />
        <ellipse cx="20.5" cy="14" rx="2.4" ry="2" fill="#0F172A" opacity="0.05" />
        <ellipse cx="16" cy="20" rx="1.8" ry="1.5" fill="#0F172A" opacity="0.05" />
        <!-- Internal Overlapping Strands -->
        <path d="M10 18 C12.5 21 15 20 16 17" stroke="${borderCol}" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <path d="M22 18 C19.5 21 17 20 16 17" stroke="${borderCol}" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <!-- Shiny Baked Crust Shading -->
        <path d="M7 11 C8 9.5 11 8.5 13 10 M25 11 C24 9.5 21 8.5 19 10" stroke="#F59E0B" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Coarse Sea Salt Granules -->
        <rect x="7" y="14" width="1.2" height="1.2" rx="0.3" fill="#FFFFFF" />
        <rect x="13" y="10" width="1.2" height="1.2" rx="0.3" fill="#FFFFFF" />
        <rect x="18" y="10" width="1.2" height="1.2" rx="0.3" fill="#FFFFFF" />
        <rect x="24" y="14" width="1.2" height="1.2" rx="0.3" fill="#FFFFFF" />
        <rect x="15.5" y="23" width="1.2" height="1.2" rx="0.3" fill="#FFFFFF" />
        <rect x="9.5" y="21" width="1.2" height="1.2" rx="0.3" fill="#FFFFFF" />
        <rect x="21.5" y="21" width="1.2" height="1.2" rx="0.3" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 🥩 Cut of Meat (U+1F969)
  {
    id: 'cut-of-meat',
    char: '\u{1F969}',
    name: 'Cut of Meat',
    unicodeHex: 'U+1F969',
    category: 'objects-places',
    tags: ['cut of meat', 'steak', 'beef', 't-bone', 'ribeye', 'meat', 'butcher', 'protein', 'raw', 'grill', 'bbq', 'food', '🥩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#DC2626',
        fillSecondary: '#FFFFFF',
        fillAccent: '#FEE2E2',
        stroke: '#991B1B',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const steakPath = 'M7 13 C6 8.5 9 5.5 14 5.5 C19 5.5 25 8 26 13 C27 19.5 23 25.5 18 26.5 C12.5 27.5 7 23 7 13 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${steakPath}" />
          <!-- Bone -->
          <circle cx="14" cy="11" r="2.2" />
          <!-- Marbling -->
          <path d="M12 17 C15 15 17 19 20 17" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M15 21 C18 19 20 22 23 20" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${steakPath}" />
          <!-- Bone cutout -->
          <circle cx="14" cy="11" r="2" fill="#FFFFFF" />
          <!-- Marbling cutouts -->
          <path d="M12 17 C15 15 17 19 20 17" stroke="#FFFFFF" stroke-width="1" fill="none" />
        </g>`;
      }

      const beefFill = isDuotone ? c.primary : '#DC2626';
      const beefOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const fatCol = isDuotone ? c.accent : '#FEE2E2';
      const borderCol = isDuotone ? c.stroke : '#991B1B';

      return `${badge}<g>
        <!-- Prime Cut Raw Beef Steak -->
        <path d="${steakPath}" fill="${beefFill}"${beefOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Outer Fatty Rind Band -->
        <path d="M7.5 12 C7 8.5 9.5 6.5 14 6.5 C18.5 6.5 24 8.5 25 12.5" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.8" />
        <!-- Round Marrow Bone -->
        <circle cx="14" cy="11" r="2.6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="0.8" />
        <circle cx="14" cy="11" r="1.1" fill="#E2E8F0" />
        <!-- Intramuscular Fat Marbling Ribbons -->
        <g stroke="${fatCol}" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.85">
          <path d="M11 16.5 C13.5 15 16.5 18 19.5 16.5" />
          <path d="M14 20.5 C16.5 19 19.5 22 22 20" />
          <path d="M17 13.5 C19.5 12 21.5 14 23 13" />
        </g>
      </g>`;
    },
  },

  // 🥪 Sandwich (U+1F96A)
  {
    id: 'sandwich',
    char: '\u{1F96A}',
    name: 'Sandwich',
    unicodeHex: 'U+1F96A',
    category: 'objects-places',
    tags: ['sandwich', 'lunch', 'bread', 'deli', 'club sandwich', 'snack', 'lettuce', 'cheese', 'ham', 'food', '🥪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#FDE68A',
        fillSecondary: '#22C55E',
        fillAccent: '#EF4444',
        stroke: '#B45309',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top Triangle Bread -->
          <polygon points="5,21 16,8 27,21" />
          <!-- Fillings Lines -->
          <path d="M5 23 Q16 26 27 23" />
          <path d="M6 21 H26" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <polygon points="5,21 16,8 27,21" />
          <path d="M5 21 L5 24 Q16 27 27 24 L27 21 Z" />
          <!-- Cutout slit -->
          <line x1="7" y1="21.5" x2="25" y2="21.5" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const breadFill = isDuotone ? c.primary : '#FDE68A';
      const breadOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const borderCol = isDuotone ? c.stroke : '#B45309';

      return `${badge}<g>
        <!-- Bottom Bread Crust -->
        <polygon points="5,22 16,9 27,22" fill="#D97706" stroke="${borderCol}" stroke-width="1.1" stroke-linejoin="round" />
        <!-- Layered Fillings: Lettuce, Ham, Tomato, Cheese -->
        <path d="M4.5 22.5 Q16 25 27.5 22.5" stroke="#22C55E" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M5 21.5 Q16 24 27 21.5" stroke="#FB7185" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- Red Tomato Slices -->
        <circle cx="11" cy="22" r="1.5" fill="#EF4444" />
        <circle cx="21" cy="22" r="1.5" fill="#EF4444" />
        <!-- Melted Yellow Cheese Drip -->
        <polygon points="14,22 17,25 19,22" fill="#FACC15" />
        <!-- Top Soft Sliced Deli Bread -->
        <polygon points="5,20.5 16,7.5 27,20.5" fill="${breadFill}"${breadOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Bread Crust Trim -->
        <line x1="5" y1="20.5" x2="16" y2="7.5" stroke="${borderCol}" stroke-width="1.8" stroke-linecap="round" />
        <line x1="16" y1="7.5" x2="27" y2="20.5" stroke="${borderCol}" stroke-width="1.8" stroke-linecap="round" />
      </g>`;
    },
  },

  // 🥫 Canned Food (U+1F96B)
  {
    id: 'canned-food',
    char: '\u{1F96B}',
    name: 'Canned Food',
    unicodeHex: 'U+1F96B',
    category: 'objects-places',
    tags: ['canned food', 'can', 'tin', 'soup', 'tomato', 'preserves', 'pantry', 'groceries', 'food', '🥫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#CBD5E1',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Can Lid -->
          <ellipse cx="16" cy="8" rx="8" ry="2.5" />
          <!-- Can Body -->
          <path d="M8 8 V24 C8 25.5 11.5 27 16 27 C20.5 27 24 25.5 24 24 V8" />
          <!-- Label Bands -->
          <path d="M8 12 C11.5 13.5 20.5 13.5 24 12" />
          <path d="M8 21 C11.5 22.5 20.5 22.5 24 21" />
          <!-- Pull Tab -->
          <circle cx="16" cy="8" r="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="8" rx="8" ry="2.5" />
          <path d="M8 8 V24 C8 25.5 11.5 27 16 27 C20.5 27 24 25.5 24 24 V8 Z" />
          <!-- Label cutout -->
          <rect x="8" y="13" width="16" height="7" fill="#FFFFFF" />
        </g>`;
      }

      const labelFill = isDuotone ? c.primary : '#EF4444';
      const labelOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const tinCol = isDuotone ? c.secondary : '#E2E8F0';
      const borderCol = isDuotone ? c.stroke : '#64748B';

      return `${badge}<g>
        <!-- Tin Can Metal Hull -->
        <path d="M8 8 V24 C8 25.8 11.5 27 16 27 C20.5 27 24 25.8 24 24 V8 Z" fill="${tinCol}" stroke="${borderCol}" stroke-width="1.2" />
        <!-- Bottom Rim Line -->
        <path d="M8 24 C8 25.8 11.5 27 16 27 C20.5 27 24 25.8 24 24" stroke="${borderCol}" stroke-width="1.2" fill="none" />
        <!-- Red Label Paper Band -->
        <path d="M8 12 V21 C11.5 22.2 20.5 22.2 24 21 V12 C20.5 13.2 11.5 13.2 8 12 Z" fill="${labelFill}"${labelOpacity} stroke="#B91C1C" stroke-width="0.8" />
        <!-- Label Tomato / Soup Emblem -->
        <circle cx="16" cy="16.5" r="2.4" fill="#FACC15" />
        <circle cx="16" cy="16.5" r="1.8" fill="#DC2626" />
        <!-- Top Embossed Metallic Can Lid -->
        <ellipse cx="16" cy="8" rx="8" ry="2.5" fill="${tinCol}" stroke="${borderCol}" stroke-width="1.2" />
        <!-- Pull Tab Ring -->
        <ellipse cx="16" cy="8" rx="2.5" ry="1" fill="none" stroke="${borderCol}" stroke-width="0.9" />
        <circle cx="16" cy="8" r="0.6" fill="${borderCol}" />
        <!-- Can Shine Glare -->
        <line x1="10" y1="12" x2="10" y2="21" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.6" />
      </g>`;
    },
  },

  // 🥬 Leafy Green (U+1F96C)
  {
    id: 'leafy-green',
    char: '\u{1F96C}',
    name: 'Leafy Green',
    unicodeHex: 'U+1F96C',
    category: 'objects-places',
    tags: ['leafy green', 'bok choy', 'cabbage', 'lettuce', 'kale', 'spinach', 'romaine', 'vegetable', 'healthy', 'salad', 'greens', '🥬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#22C55E',
        fillSecondary: '#DCFCE7',
        stroke: '#15803D',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const leafHead = 'M11 27 C9 24 6 18 5 13 C4 8 7 4 11 5 C13 5.5 14 7 16 7 C18 7 19 5.5 21 5 C25 4 28 8 27 13 C26 18 23 24 21 27 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${leafHead}" />
          <!-- Midribs -->
          <line x1="16" y1="27" x2="16" y2="8" />
          <path d="M12 27 C12 21 11 16 8 13" />
          <path d="M20 27 C20 21 21 16 24 13" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${leafHead}" />
          <!-- Midrib cuts -->
          <line x1="16" y1="27" x2="16" y2="10" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const greenFill = isDuotone ? c.primary : '#22C55E';
      const greenOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const stalkFill = isDuotone ? c.secondary : '#F0FDF4';
      const borderCol = isDuotone ? c.stroke : '#15803D';

      return `${badge}<g>
        <!-- Lush Ruffled Leaf Canopy -->
        <path d="${leafHead}" fill="${greenFill}"${greenOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Leaf Blade Contours -->
        <path d="M6 13 C8 16 11 17 13 18 M26 13 C24 16 21 17 19 18" stroke="#16A34A" stroke-width="1" stroke-linecap="round" fill="none" />
        <!-- Crisp White Stalk Base Bundle -->
        <path d="M11 27 C11 22 13 18 16 18 C19 18 21 22 21 27 Z" fill="${stalkFill}" stroke="${borderCol}" stroke-width="1" />
        <!-- Central Rib Veining -->
        <path d="M16 27 V10 M14 22 C12 18 10 16 8 14 M18 22 C20 18 22 16 24 14" stroke="#DCFCE7" stroke-width="1.4" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 🥭 Mango (U+1F96D)
  {
    id: 'mango',
    char: '\u{1F96D}',
    name: 'Mango',
    unicodeHex: 'U+1F96D',
    category: 'objects-places',
    tags: ['mango', 'tropical', 'fruit', 'sweet', 'juicy', 'yellow', 'red', 'healthy', 'food', 'summer', '🥭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#EF4444',
        stroke: '#B45309',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const mangoBody = 'M16 6 C21 5.5 25.5 8 26.5 13.5 C27.5 20.5 22.5 27 15 27 C8.5 27 5.5 21.5 5.5 16 C5.5 10 11 6.5 16 6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Stem -->
          <path d="M16 6 C16 4 15.5 3 14.5 2.5" />
          <!-- Mango Body -->
          <path d="${mangoBody}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M16 6 C16 4 15.5 3 14.5 2.5" stroke="${c.primary}" stroke-width="1.8" fill="none" />
          <path d="${mangoBody}" />
          <!-- Glint cutout -->
          <ellipse cx="20" cy="11" rx="2.5" ry="1.2" transform="rotate(-30 20 11)" fill="#FFFFFF" opacity="0.4" />
        </g>`;
      }

      const mangoFill = isDuotone ? c.primary : '#F59E0B';
      const mangoOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const blushCol = isDuotone ? c.secondary : '#EF4444';
      const borderCol = isDuotone ? c.stroke : '#B45309';

      return `${badge}<g>
        <!-- Little Brown Stem Nub -->
        <path d="M16 6 C16 4 15.5 3 14.5 2.5" stroke="#78350F" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Tropical Kidney-Shaped Mango Body -->
        <path d="${mangoBody}" fill="${mangoFill}"${mangoOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Ruby-Red Sunlit Blush Shoulder -->
        <path d="M16 6 C21 5.5 25.5 8 26.5 13.5 C27 17 24 19 21 16 C18 13 16 8 16 6 Z" fill="${blushCol}" opacity="0.75" />
        <!-- Bottom Lime-Yellow Ripeness Glow -->
        <path d="M7 18 C7 24 11 26.5 16 26.5" stroke="#84CC16" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Glossy Mango Skin Highlight -->
        <ellipse cx="20" cy="11" rx="2.8" ry="1.4" transform="rotate(-30 20 11)" fill="#FFFFFF" opacity="0.6" />
      </g>`;
    },
  },

  // 🥮 Moon Cake (U+1F96E)
  {
    id: 'moon-cake',
    char: '\u{1F96E}',
    name: 'Moon Cake',
    unicodeHex: 'U+1F96E',
    category: 'objects-places',
    tags: ['moon cake', 'mid-autumn festival', 'chinese', 'pastry', 'lotus seed', 'dessert', 'autumn', 'bakery', 'holiday', 'food', '🥮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#B45309',
        fillSecondary: '#D97706',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="14" rx="10.5" ry="5.5" />
          <path d="M5.5 14 V20 C5.5 24 10 26.5 16 26.5 C22 26.5 26.5 24 26.5 20 V14" />
          <!-- Stamped Relief Rosette -->
          <circle cx="16" cy="14" r="3" />
          <line x1="16" y1="9.5" x2="16" y2="18.5" stroke-width="${Math.max(1, sw * 0.75)}" />
          <line x1="8" y1="14" x2="24" y2="14" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="14" rx="10.5" ry="5.5" />
          <path d="M5.5 14 V20 C5.5 24 10 26.5 16 26.5 C22 26.5 26.5 24 26.5 20 V14 Z" />
          <!-- Stamped rosette cut -->
          <circle cx="16" cy="14" r="2.5" fill="#FFFFFF" />
        </g>`;
      }

      const cakeFill = isDuotone ? c.primary : '#B45309';
      const cakeOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const reliefCol = isDuotone ? c.secondary : '#D97706';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Fluted Baked Cake Side Walls -->
        <path d="M5.5 14 V20 C5.5 24 10 26.5 16 26.5 C22 26.5 26.5 24 26.5 20 V14 Z" fill="${cakeFill}"${cakeOpacity} stroke="${borderCol}" stroke-width="1.2" />
        <!-- Side Wall Fluting Grooves -->
        <line x1="9" y1="16" x2="9" y2="22.5" stroke="${borderCol}" stroke-width="0.8" opacity="0.6" />
        <line x1="13" y1="18" x2="13" y2="25" stroke="${borderCol}" stroke-width="0.8" opacity="0.6" />
        <line x1="16" y1="19.5" x2="16" y2="26.5" stroke="${borderCol}" stroke-width="0.8" opacity="0.6" />
        <line x1="19" y1="18" x2="19" y2="25" stroke="${borderCol}" stroke-width="0.8" opacity="0.6" />
        <line x1="23" y1="16" x2="23" y2="22.5" stroke="${borderCol}" stroke-width="0.8" opacity="0.6" />
        <!-- Top Face Golden Crust Disk -->
        <ellipse cx="16" cy="14" rx="10.5" ry="5.5" fill="${reliefCol}" stroke="${borderCol}" stroke-width="1.2" />
        <!-- Intricate Geometric Relief Pattern -->
        <circle cx="16" cy="14" r="3.2" fill="none" stroke="${borderCol}" stroke-width="1" />
        <g stroke="${borderCol}" stroke-width="0.9" stroke-linecap="round" fill="none">
          <line x1="16" y1="9.5" x2="16" y2="18.5" />
          <line x1="8" y1="14" x2="24" y2="14" />
          <line x1="10.5" y1="10.5" x2="21.5" y2="17.5" />
          <line x1="10.5" y1="17.5" x2="21.5" y2="10.5" />
        </g>
        <!-- Center Gem Accent -->
        <circle cx="16" cy="14" r="1.1" fill="${borderCol}" />
      </g>`;
    },
  },

  // 🥯 Bagel (U+1F96F)
  {
    id: 'bagel',
    char: '\u{1F96F}',
    name: 'Bagel',
    unicodeHex: 'U+1F96F',
    category: 'objects-places',
    tags: ['bagel', 'bakery', 'bread', 'breakfast', 'cream cheese', 'sesame', 'jewish', 'new york', 'food', 'dough', '🥯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#D97706',
        fillSecondary: '#FEF3C7',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="11.5" ry="9" />
          <ellipse cx="16" cy="16" rx="4" ry="3" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="11.5" ry="9" />
          <ellipse cx="16" cy="16" rx="4" ry="3" fill="#FFFFFF" />
        </g>`;
      }

      const bagelFill = isDuotone ? c.primary : '#D97706';
      const bagelOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Golden Baked Bagel Torus Ring -->
        <ellipse cx="16" cy="16" rx="11.5" ry="9" fill="${bagelFill}"${bagelOpacity} stroke="${borderCol}" stroke-width="1.2" />
        <!-- Bagel Center Hole -->
        <ellipse cx="16" cy="16" rx="4" ry="3" fill="#0F172A" opacity="0.08" stroke="${borderCol}" stroke-width="1.1" />
        <!-- Shiny Crust Highlight Arc -->
        <path d="M8 12 C11 9 21 9 24 12" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.45" />
        <!-- Scattered White Sesame Seeds -->
        <ellipse cx="10" cy="11.5" rx="0.9" ry="0.5" transform="rotate(-20 10 11.5)" fill="#FEF3C7" />
        <ellipse cx="14" cy="9.5" rx="0.9" ry="0.5" transform="rotate(15 14 9.5)" fill="#FEF3C7" />
        <ellipse cx="18" cy="9.5" rx="0.9" ry="0.5" transform="rotate(-15 18 9.5)" fill="#FEF3C7" />
        <ellipse cx="22" cy="11.5" rx="0.9" ry="0.5" transform="rotate(25 22 11.5)" fill="#FEF3C7" />
        <ellipse cx="8.5" cy="16" rx="0.9" ry="0.5" transform="rotate(80 8.5 16)" fill="#FEF3C7" />
        <ellipse cx="23.5" cy="16" rx="0.9" ry="0.5" transform="rotate(-80 23.5 16)" fill="#FEF3C7" />
        <ellipse cx="12" cy="22" rx="0.9" ry="0.5" transform="rotate(10 12 22)" fill="#FEF3C7" />
        <ellipse cx="16" cy="23" rx="0.9" ry="0.5" transform="rotate(-5 16 23)" fill="#FEF3C7" />
        <ellipse cx="20" cy="22" rx="0.9" ry="0.5" transform="rotate(20 20 22)" fill="#FEF3C7" />
      </g>`;
    },
  },
];
