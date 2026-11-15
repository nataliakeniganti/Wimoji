import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const sweetsTreatsIcons: WimojiIconDef[] = [
  {
    id: 'sweet-potato',
    char: '🍠',
    name: 'Roasted Sweet Potato',
    unicodeHex: 'U+1F360',
    category: 'objects-places',
    tags: ['sweet potato', 'potato', 'yam', 'roasted', 'baked', 'food', 'snack', 'vegetable', 'steaming', '🍠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#7E22CE', fillSecondary: '#F59E0B', fillAccent: '#FEF08A', stroke: '#581C87' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Whole cut sweet potato contour -->
          <path d="M5 25c-3-4-1-12 5-17 6-4 13-4 17-2 2 3 2 8-1 12-4 5-13 10-21 7z" />
          <!-- Cut cross-section exposing inside -->
          <ellipse cx="21" cy="11" rx="5" ry="4" transform="rotate(-35 21 11)" />
          <ellipse cx="21" cy="11" rx="3.5" ry="2.7" transform="rotate(-35 21 11)" />
          <!-- Steam wisps -->
          <path d="M22 4c0-1.5 1-2 0-3" />
          <path d="M26 6c0-1.5 1-2 0-3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Purple skin outer body -->
        <path d="M5 25c-3-4-1-12 5-17 6-4 13-4 17-2 2 3 2 8-1 12-4 5-13 10-21 7z" fill="${c.primary}" stroke="#581C87" stroke-width="1.2" />
        <!-- Skin shadow / texture -->
        <path d="M7 23c2 2 7 2 12-2" stroke="#581C87" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Cut surface skin rim -->
        <ellipse cx="21" cy="11" rx="5.2" ry="4.2" transform="rotate(-35 21 11)" fill="#6B21A8" />
        <!-- Steaming golden flesh -->
        <ellipse cx="21" cy="11" rx="4.5" ry="3.5" transform="rotate(-35 21 11)" fill="${c.secondary}" />
        <ellipse cx="21" cy="11" rx="3" ry="2.2" transform="rotate(-35 21 11)" fill="${c.accent}" opacity="0.75" />
        <!-- Steam wisps rising -->
        <path d="M20 4c-0.5-1.2 0.8-2 0-3" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M25 6c-0.5-1.2 0.8-2 0-3" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'dango',
    char: '🍡',
    name: 'Dango',
    unicodeHex: 'U+1F361',
    category: 'objects-places',
    tags: ['dango', 'japanese', 'mochi', 'skewer', 'dessert', 'sweet', 'dumpling', 'snack', '🍡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F472B6', fillSecondary: '#22C55E', fillAccent: '#F8FAFC', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Bamboo skewer -->
          <line x1="4" y1="28" x2="28" y2="4" />
          <!-- 3 Dango dumplings -->
          <circle cx="21" cy="11" r="4.2" />
          <circle cx="16" cy="16" r="4.2" />
          <circle cx="11" cy="21" r="4.2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bamboo skewer stick -->
        <line x1="3" y1="29" x2="29" y2="3" stroke="#D97706" stroke-width="1.8" stroke-linecap="round" />
        <!-- Green Dango (bottom-left) -->
        <circle cx="11" cy="21" r="4.5" fill="${c.secondary}" stroke="#15803D" stroke-width="1" />
        <circle cx="10" cy="19.5" r="1.2" fill="#FFFFFF" opacity="0.4" />
        <!-- White Dango (middle) -->
        <circle cx="16" cy="16" r="4.5" fill="${c.accent}" stroke="#CBD5E1" stroke-width="1" />
        <circle cx="15" cy="14.5" r="1.2" fill="#FFFFFF" opacity="0.6" />
        <!-- Pink Dango (top-right) -->
        <circle cx="21" cy="11" r="4.5" fill="${c.primary}" stroke="#BE185D" stroke-width="1" />
        <circle cx="20" cy="9.5" r="1.2" fill="#FFFFFF" opacity="0.45" />
      </g>`;
    },
  },
  {
    id: 'oden',
    char: '🍢',
    name: 'Oden',
    unicodeHex: 'U+1F362',
    category: 'objects-places',
    tags: ['oden', 'japanese', 'skewer', 'seafood', 'fish cake', 'stew', 'food', 'snack', '🍢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A8A29E', fillSecondary: '#FBBF24', fillAccent: '#FB923C', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Skewer stick -->
          <line x1="16" y1="3" x2="16" y2="29" />
          <!-- Top Triangle (Konnyaku) -->
          <polygon points="16,4 10,12 22,12" />
          <!-- Middle Circle (Egg / Round Cake) -->
          <circle cx="16" cy="16.5" r="3.8" />
          <!-- Bottom Tube (Chikuwa Fish Cake) -->
          <rect x="10.5" y="21" width="11" height="5" rx="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wooden skewer stick -->
        <line x1="16" y1="2" x2="16" y2="30" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" />
        <!-- Bottom Chikuwa (fish cake roll) -->
        <rect x="10.5" y="21" width="11" height="5.5" rx="1.8" fill="${c.accent}" stroke="#C2410C" stroke-width="1" />
        <ellipse cx="16" cy="23.7" rx="3.5" ry="1.2" fill="#EA580C" opacity="0.4" />
        <!-- Middle Round Egg / Ball -->
        <circle cx="16" cy="16.5" r="4.2" fill="${c.secondary}" stroke="#D97706" stroke-width="1" />
        <circle cx="14.5" cy="15" r="1" fill="#FFFFFF" opacity="0.4" />
        <!-- Top Triangular Konjac -->
        <polygon points="16,4 9.5,12.5 22.5,12.5" fill="${c.primary}" stroke="#57534E" stroke-width="1" />
        <!-- Konjac speckles -->
        <circle cx="14" cy="9" r="0.6" fill="#44403C" />
        <circle cx="18" cy="10" r="0.5" fill="#44403C" />
        <circle cx="16" cy="7" r="0.5" fill="#44403C" />
      </g>`;
    },
  },
  {
    id: 'sushi',
    char: '🍣',
    name: 'Sushi',
    unicodeHex: 'U+1F363',
    category: 'objects-places',
    tags: ['sushi', 'nigiri', 'salmon', 'fish', 'rice', 'nori', 'japanese', 'food', 'seafood', '🍣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#F8FAFC', fillAccent: '#166534', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Rice base -->
          <path d="M5 22c0-3 3-5 11-5s11 2 11 5c0 3-3 4-11 4s-11-1-11-4z" />
          <!-- Fish fillet on top -->
          <path d="M4 17c0-5 4-8 12-8s12 3 12 8c0 2-3 3-12 3s-12-1-12-3z" />
          <!-- Salmon marbling stripes -->
          <path d="M10 11c2 2 4 4 5 7" />
          <path d="M15 10c2 2 4 4 5 7" />
          <path d="M20 10c2 2 3 4 4 6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Sushi Rice bed (Shari) -->
        <path d="M5 22c0-3.5 3.5-5.5 11-5.5s11 2 11 5.5c0 3-3.5 4.5-11 4.5s-11-1.5-11-4.5z" fill="${c.secondary}" stroke="#E2E8F0" stroke-width="1" />
        <!-- Rice grain details -->
        <circle cx="8" cy="22" r="0.8" fill="#CBD5E1" />
        <circle cx="12" cy="23.5" r="0.8" fill="#CBD5E1" />
        <circle cx="16" cy="23" r="0.8" fill="#CBD5E1" />
        <circle cx="20" cy="23.5" r="0.8" fill="#CBD5E1" />
        <circle cx="24" cy="22" r="0.8" fill="#CBD5E1" />
        <!-- Fresh Salmon fillet (Neta) -->
        <path d="M4 17c0-5.5 4-8.5 12-8.5s12 3 12 8.5c0 2.2-3 3.5-12 3.5s-12-1.3-12-3.5z" fill="${c.primary}" stroke="#EA580C" stroke-width="1.2" />
        <!-- Salmon fat marbling stripes -->
        <path d="M9 12c2.2 2 4.2 3.8 5.5 6.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M14 10.5c2.2 2 4.2 4 5.5 7.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M19 10.5c2 2 3.8 3.8 4.8 6.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <!-- Glossy highlight on sashimi -->
        <ellipse cx="14" cy="11.5" rx="5" ry="1.2" transform="rotate(-10 14 11.5)" fill="#FFFFFF" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'fried-shrimp',
    char: '🍤',
    name: 'Fried Shrimp',
    unicodeHex: 'U+1F364',
    category: 'objects-places',
    tags: ['fried shrimp', 'shrimp', 'tempura', 'ebi fry', 'prawn', 'crispy', 'seafood', 'food', '🍤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Curved crispy shrimp body -->
          <path d="M6 13c1-5 8-8 14-5 5 3 7 8 6 13-1 3-5 5-9 4-5-1-8-5-10-8-1-2-1-3-1-4z" />
          <!-- Tail fin prongs -->
          <path d="M21 21l6 5M25 21l3 1M23 23l3-4" />
          <!-- Breadcrumb texture marks -->
          <path d="M11 12c1-1 3 0 3 1" />
          <path d="M15 15c1-1 3 0 3 1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Red tail fins extending out -->
        <path d="M20 20l6.5 4.5c0.5-2.5 1-5-1-7l-4 3z" fill="${c.secondary}" stroke="#DC2626" stroke-width="1" />
        <path d="M20 20l7 1c-0.5-2-2-4-4.5-3l-2.5 2z" fill="${c.secondary}" stroke="#DC2626" stroke-width="1" />
        <!-- Crispy golden fried panko shrimp body -->
        <path d="M6 13c1-5.5 8-8.5 14.5-5 5 2.8 7 8 6 13-1 3.5-5.5 5.5-9.5 4.5-5-1.2-8.5-5-10-8.5-0.7-1.5-1-2.8-1-4z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Crunchy breadcrumbs highlights -->
        <circle cx="10" cy="11" r="0.7" fill="#FEF08A" />
        <circle cx="14" cy="9.5" r="0.8" fill="#FEF08A" />
        <circle cx="18" cy="12" r="0.7" fill="#FEF08A" />
        <circle cx="19" cy="17" r="0.8" fill="#FEF08A" />
        <circle cx="13" cy="18" r="0.7" fill="#FEF08A" />
        <circle cx="9" cy="15" r="0.7" fill="#FEF08A" />
      </g>`;
    },
  },
  {
    id: 'fish-cake',
    char: '🍥',
    name: 'Fish Cake with Swirl',
    unicodeHex: 'U+1F365',
    category: 'objects-places',
    tags: ['fish cake', 'naruto', 'narutomaki', 'kamaboko', 'swirl', 'ramen', 'japanese', 'food', '🍥'],
    renderContent: (opts) => {
      const fillPrimary = opts.style === 'silhouette' ? '#0F172A' : '#FFFFFF';
      const c = resolveColors(opts, { fillPrimary, fillSecondary: '#EC4899', stroke: '#E11D48' });
      const badge = getBadgeMarkup(opts);
      const D_SCALLOP = 'M 16 5.2 A 3.3 3.3 0 0 1 21.4 6.65 A 3.3 3.3 0 0 1 25.35 10.6 A 3.3 3.3 0 0 1 26.8 16 A 3.3 3.3 0 0 1 25.35 21.4 A 3.3 3.3 0 0 1 21.4 25.35 A 3.3 3.3 0 0 1 16 26.8 A 3.3 3.3 0 0 1 10.6 25.35 A 3.3 3.3 0 0 1 6.65 21.4 A 3.3 3.3 0 0 1 5.2 16 A 3.3 3.3 0 0 1 6.65 10.6 A 3.3 3.3 0 0 1 10.6 6.65 A 3.3 3.3 0 0 1 16 5.2 Z';
      const D_SWIRL = 'M 16 16.5 C 17 16.5 17.8 17.2 17.8 18.2 C 17.8 19.8 16.5 21 15 21 C 12.8 21 11.2 19.2 11.2 17 C 11.2 14.2 13.3 12 16 12 C 19 12 21.5 14.5 21.5 17.5 C 21.5 20.8 18.8 23.5 15.5 23.5 C 12.8 23.5 10.5 22 9.2 19.8';

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap || 'round'}" stroke-linejoin="${opts.strokeLinejoin || 'round'}" fill="none">
          <!-- Fluted scalloped rim of sliced fish cake -->
          <path d="${D_SCALLOP}" />
          <!-- Characteristic pink spiral swirl -->
          <path d="${D_SWIRL}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g>
          <!-- Scalloped silhouette fish cake disc -->
          <path d="${D_SCALLOP}" fill="${c.primary}" />
          <!-- Cutout spiral swirl -->
          <path d="${D_SWIRL}" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" fill="none" />
        </g>`;
      }

      if (opts.style === 'duotone') {
        return `${badge}<g>
          <!-- Duotone scalloped slice base -->
          <path d="${D_SCALLOP}" fill="${c.primary}" opacity="${c.duotoneOpacity || 0.3}" stroke="${c.stroke}" stroke-width="1.2" />
          <!-- Duotone spiral swirl -->
          <path d="${D_SWIRL}" stroke="${c.stroke}" stroke-width="2.6" stroke-linecap="round" fill="none" />
        </g>`;
      }

      // Color mode
      return `${badge}<g>
        <!-- Scalloped 3D bevel shadow -->
        <path d="${D_SCALLOP}" transform="translate(0 1.2)" fill="#CBD5E1" />
        <!-- White steamed fish paste disc -->
        <path d="${D_SCALLOP}" fill="${c.primary}" stroke="#E2E8F0" stroke-width="0.8" />
        <!-- Iconic vibrant pink spiral -->
        <path d="${D_SWIRL}" stroke="${c.secondary}" stroke-width="2.6" stroke-linecap="round" fill="none" />
        <!-- Specular gloss highlight on face -->
        <path d="M11 9c1.5-1 3.5-1.5 5-1.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
      </g>`;
    },
  },
  {
    id: 'soft-ice-cream',
    char: '🍦',
    name: 'Soft Ice Cream',
    unicodeHex: 'U+1F366',
    category: 'objects-places',
    tags: ['soft ice cream', 'ice cream', 'cone', 'waffle cone', 'vanilla', 'swirl', 'dessert', 'sweet', '🍦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#FBBF24', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Waffle cone -->
          <polygon points="10,18 22,18 16,30" />
          <line x1="12" y1="21" x2="19" y2="24" />
          <line x1="13" y1="25" x2="18" y2="20" />
          <!-- Swirl tiers -->
          <path d="M9 18c0-3 3-4 7-4s7 1 7 4" />
          <path d="M10 14c0-3 2.5-4 6-4s6 1 6 4" />
          <path d="M12 10c0-2 2-3 4-3s4 1 3 4" />
          <path d="M16 7c0-2 2-4 1-5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Waffle Cone -->
        <polygon points="10,18 22,18 16,30" fill="${c.secondary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Cone waffle cross-hatch lines -->
        <line x1="11.5" y1="20" x2="19" y2="24.5" stroke="#B45309" stroke-width="0.9" opacity="0.65" />
        <line x1="13.5" y1="23.5" x2="17.5" y2="26" stroke="#B45309" stroke-width="0.9" opacity="0.65" />
        <line x1="20.5" y1="20" x2="13" y2="24.5" stroke="#B45309" stroke-width="0.9" opacity="0.65" />
        <line x1="18.5" y1="23.5" x2="14.5" y2="26" stroke="#B45309" stroke-width="0.9" opacity="0.65" />
        <!-- Creamy vanilla swirl tiers -->
        <!-- Tier 1 (bottom) -->
        <path d="M8.5 18c0-3.2 3.5-4.5 7.5-4.5s7.5 1.3 7.5 4.5c0 1.2-1 2-2 2H10.5c-1 0-2-0.8-2-2z" fill="${c.primary}" stroke="#E2E8F0" stroke-width="1" />
        <!-- Tier 2 (middle) -->
        <path d="M10 14.5c0-3 2.5-4.2 6-4.2s6 1.2 6 4.2c0 1-0.8 1.5-1.5 1.5h-9c-0.7 0-1.5-0.5-1.5-1.5z" fill="${c.primary}" stroke="#E2E8F0" stroke-width="1" />
        <!-- Tier 3 (top swirl with curly peak) -->
        <path d="M12 11c0-2.5 2-4 4-4s4 1.5 3.5 4c-0.5 0.5-1.2 0.8-2 0.8h-4c-0.8 0-1.5-0.3-1.5-0.8z" fill="${c.primary}" stroke="#E2E8F0" stroke-width="1" />
        <!-- Perky curl tip -->
        <path d="M16 7c0-2.5 2.5-4.5 1-5.5-1 1-1.5 2.5-0.5 3.5" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'shaved-ice',
    char: '🍧',
    name: 'Shaved Ice',
    unicodeHex: 'U+1F367',
    category: 'objects-places',
    tags: ['shaved ice', 'kakigori', 'snow cone', 'ice', 'dessert', 'syrup', 'cold', 'summer', '🍧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#BAE6FD', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Footed bowl -->
          <path d="M6 18c0 4 4 6 10 6s10-2 10-6H6z" />
          <path d="M14 24v3h4v-3" />
          <line x1="11" y1="27" x2="21" y2="27" />
          <!-- Shaved ice mound -->
          <path d="M6 18c0-7 4.5-11 10-11s10 4 10 11" />
          <!-- Syrup drips -->
          <path d="M10 14c1 1 2 0 3 1s2 0 3-1 2 1 3 0 2 1 3-1" />
          <!-- Spoon -->
          <line x1="24" y1="5" x2="19" y2="13" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Glass footed bowl pedestal -->
        <path d="M14 24v2.5h-3c-0.6 0-1 0.4-1 1s0.4 1 1 1h10c0.6 0 1-0.4 1-1s-0.4-1-1-1h-3V24" fill="${c.secondary}" stroke="#0284C7" stroke-width="1" />
        <!-- Crushed Ice Mound base -->
        <path d="M6 18c0-6.5 4.5-11 10-11s10 4.5 10 11H6z" fill="#F0F9FF" />
        <!-- Strawberry red syrup on top with drip waves -->
        <path d="M6 18c0-6.5 4.5-11 10-11s10 4.5 10 11c-1.5-1-3 0-4-1s-2-0.5-3 0.5-2-0.5-3 0.5-2-0.5-3 0.5-2.5-1-4 0.5-2.5 0-3-1z" fill="${c.primary}" stroke="#DC2626" stroke-width="0.8" />
        <!-- Syrup highlight shine -->
        <ellipse cx="14" cy="10" rx="3.5" ry="1.5" transform="rotate(-15 14 10)" fill="#FFFFFF" opacity="0.4" />
        <!-- Small spoon sticking out -->
        <line x1="24.5" y1="4.5" x2="19" y2="13.5" stroke="#94A3B8" stroke-width="2.2" stroke-linecap="round" />
        <!-- Clear glass bowl -->
        <path d="M5.5 18c0 4.5 4.5 6.5 10.5 6.5s10.5-2 10.5-6.5H5.5z" fill="${c.secondary}" fill-opacity="0.65" stroke="#0284C7" stroke-width="1.2" />
        <ellipse cx="16" cy="18" rx="10.5" ry="2" fill="${c.secondary}" fill-opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'ice-cream-bowl',
    char: '🍨',
    name: 'Ice Cream',
    unicodeHex: 'U+1F368',
    category: 'objects-places',
    tags: ['ice cream', 'sundae', 'dessert', 'bowl', 'dish', 'cherry', 'scoop', 'sweet', '🍨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F472B6', fillSecondary: '#FEF08A', fillAccent: '#DC2626', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Footed glass cup -->
          <path d="M6 18c0 4 4.5 5.5 10 5.5s10-1.5 10-5.5H6z" />
          <path d="M14 23.5v3.5h-3v1h10v-1h-3v-3.5" />
          <!-- Scoops -->
          <circle cx="11.5" cy="15" r="4.5" />
          <circle cx="20.5" cy="15" r="4.5" />
          <circle cx="16" cy="12" r="4.5" />
          <!-- Cherry on top -->
          <circle cx="16" cy="6.5" r="2" />
          <path d="M16 4.5c1-2 3-2.5 4-2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Glass stem and base -->
        <path d="M14 23.5v3h-3c-0.6 0-1 0.4-1 1s0.4 1 1 1h10c0.6 0 1-0.4 1-1s-0.4-1-1-1h-3v-3" fill="#BAE6FD" stroke="#0284C7" stroke-width="1" />
        <!-- Left scoop (Pink Strawberry) -->
        <circle cx="11.5" cy="15.5" r="4.5" fill="${c.primary}" stroke="#DB2777" stroke-width="1" />
        <circle cx="10" cy="13.5" r="1.2" fill="#FFFFFF" opacity="0.4" />
        <!-- Right scoop (Vanilla / Mint) -->
        <circle cx="20.5" cy="15.5" r="4.5" fill="${c.secondary}" stroke="#CA8A04" stroke-width="1" />
        <circle cx="19" cy="13.5" r="1.2" fill="#FFFFFF" opacity="0.4" />
        <!-- Center top scoop (Cream) -->
        <circle cx="16" cy="12" r="4.8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1" />
        <circle cx="14.5" cy="10" r="1.2" fill="#FFFFFF" opacity="0.6" />
        <!-- Bright Red Cherry on Top -->
        <circle cx="16" cy="6.5" r="2.2" fill="${c.accent}" stroke="#991B1B" stroke-width="0.8" />
        <circle cx="15.2" cy="5.8" r="0.6" fill="#FFFFFF" opacity="0.6" />
        <path d="M16 4.5c1-2.5 3.5-3 5-2.2" stroke="#15803D" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <!-- Glass Sundae Dish front -->
        <path d="M6 18c0 4.5 4.5 5.8 10 5.8s10-1.3 10-5.8H6z" fill="#BAE6FD" fill-opacity="0.65" stroke="#0284C7" stroke-width="1.2" />
        <ellipse cx="16" cy="18" rx="10" ry="1.8" fill="#E0F2FE" fill-opacity="0.5" />
      </g>`;
    },
  },
  {
    id: 'doughnut',
    char: '🍩',
    name: 'Doughnut',
    unicodeHex: 'U+1F369',
    category: 'objects-places',
    tags: ['doughnut', 'donut', 'glaze', 'sprinkles', 'pastry', 'bakery', 'sweet', 'dessert', '🍩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EC4899', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Donut outer circle -->
          <circle cx="16" cy="16" r="11.5" />
          <!-- Inner hole circle -->
          <circle cx="16" cy="16" r="4.2" />
          <!-- Wavy frosting boundary -->
          <path d="M6 16c0-4 3-7 7-8s7 0 9 3 2 7-1 9-6 3-9 2-6-3-6-6z" />
          <!-- Sprinkles -->
          <line x1="10" y1="11" x2="12" y2="12" />
          <line x1="19" y1="10" x2="21" y2="11" />
          <line x1="22" y1="16" x2="23" y2="18" />
          <line x1="14" y1="8" x2="16" y2="8" />
          <line x1="9" y1="19" x2="11" y2="20" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Golden-brown fried dough ring -->
        <circle cx="16" cy="16" r="11.5" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Shiny pink strawberry frosting layer with wavy rim -->
        <path d="M5.5 16c0-5 3.5-9.5 9-10 5.5-0.5 10 3 11 8.5 0.5 4-2.5 8.5-7.5 9.5-5 1-10-1.5-12-5.5 0-1-0.5-2-0.5-2.5z" fill="${c.secondary}" stroke="#BE185D" stroke-width="0.8" />
        <!-- Center Hole -->
        <circle cx="16" cy="16" r="4.2" fill="#1e293b" opacity="0.95" />
        <circle cx="16" cy="16" r="4.2" stroke="#B45309" stroke-width="1" fill="none" />
        <!-- Colorful sprinkles -->
        <line x1="9" y1="11.5" x2="11.5" y2="12.5" stroke="#38BDF8" stroke-width="1.6" stroke-linecap="round" />
        <line x1="14" y1="7.5" x2="16.5" y2="7.5" stroke="#FDE047" stroke-width="1.6" stroke-linecap="round" />
        <line x1="19.5" y1="9.5" x2="21.5" y2="11.5" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" />
        <line x1="22.5" y1="15.5" x2="23.5" y2="18" stroke="#10B981" stroke-width="1.6" stroke-linecap="round" />
        <line x1="18.5" y1="21.5" x2="20.5" y2="22.5" stroke="#FDE047" stroke-width="1.6" stroke-linecap="round" />
        <line x1="11" y1="22" x2="13" y2="23" stroke="#38BDF8" stroke-width="1.6" stroke-linecap="round" />
        <line x1="7.5" y1="16.5" x2="9" y2="18.5" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'cookie',
    char: '🍪',
    name: 'Cookie',
    unicodeHex: 'U+1F36A',
    category: 'objects-places',
    tags: ['cookie', 'chocolate chip', 'biscuit', 'bakery', 'sweet', 'snack', 'dessert', 'baked', '🍪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#451A03', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Cookie perimeter -->
          <circle cx="16" cy="16" r="11.5" />
          <!-- Chocolate chips -->
          <circle cx="11" cy="12" r="1.8" />
          <circle cx="17" cy="10" r="1.8" />
          <circle cx="21" cy="14" r="1.8" />
          <circle cx="13" cy="18" r="1.8" />
          <circle cx="19" cy="20" r="1.8" />
          <!-- Fissure crack lines -->
          <path d="M14 12l2 2-1 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Golden-brown baked cookie disc -->
        <circle cx="16" cy="16" r="11.8" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Subtle crumb crack lines -->
        <path d="M13.5 13l2 2-1 3" stroke="#D97706" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
        <path d="M18 16l2 1" stroke="#D97706" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Rich dark chocolate chips -->
        <path d="M11 10.5c1-0.5 2 0.5 1.8 1.8-0.2 1-1.2 1.5-2 1-0.8-0.5-0.8-1.8 0.2-2.8z" fill="${c.secondary}" stroke="#291002" stroke-width="0.6" />
        <circle cx="11.2" cy="11.5" r="0.4" fill="#FFFFFF" opacity="0.35" />

        <path d="M17 8.5c1-0.5 2 0.5 1.8 1.8-0.2 1-1.2 1.5-2 1-0.8-0.5-0.8-1.8 0.2-2.8z" fill="${c.secondary}" stroke="#291002" stroke-width="0.6" />
        <circle cx="17.2" cy="9.5" r="0.4" fill="#FFFFFF" opacity="0.35" />

        <path d="M21 13c1-0.5 2 0.5 1.8 1.8-0.2 1-1.2 1.5-2 1-0.8-0.5-0.8-1.8 0.2-2.8z" fill="${c.secondary}" stroke="#291002" stroke-width="0.6" />
        <circle cx="21.2" cy="14" r="0.4" fill="#FFFFFF" opacity="0.35" />

        <path d="M12.5 18c1-0.5 2 0.5 1.8 1.8-0.2 1-1.2 1.5-2 1-0.8-0.5-0.8-1.8 0.2-2.8z" fill="${c.secondary}" stroke="#291002" stroke-width="0.6" />
        <circle cx="12.7" cy="19" r="0.4" fill="#FFFFFF" opacity="0.35" />

        <path d="M18.5 19.5c1-0.5 2 0.5 1.8 1.8-0.2 1-1.2 1.5-2 1-0.8-0.5-0.8-1.8 0.2-2.8z" fill="${c.secondary}" stroke="#291002" stroke-width="0.6" />
        <circle cx="18.7" cy="20.5" r="0.4" fill="#FFFFFF" opacity="0.35" />
      </g>`;
    },
  },
  {
    id: 'chocolate-bar',
    char: '🍫',
    name: 'Chocolate Bar',
    unicodeHex: 'U+1F36B',
    category: 'objects-places',
    tags: ['chocolate', 'chocolate bar', 'candy', 'cocoa', 'sweet', 'dessert', 'snack', 'foil', '🍫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#EF4444', fillAccent: '#E2E8F0', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Outer bar boundary -->
          <rect x="7" y="4" width="18" height="24" rx="2" />
          <!-- Chocolate block segments (2 cols x 2 rows visible at top) -->
          <line x1="16" y1="4" x2="16" y2="15" />
          <line x1="7" y1="9.5" x2="25" y2="9.5" />
          <!-- Jagged foil line -->
          <path d="M7 15l3-1 3 1.5 3-1.5 3 1.5 3-1.5 3 1" />
          <!-- Wrapper border -->
          <line x1="7" y1="18" x2="25" y2="18" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Rich Chocolate bar top base -->
        <rect x="7" y="4" width="18" height="13" rx="1.5" fill="${c.primary}" stroke="#451A03" stroke-width="1" />
        <!-- Segmented chocolate blocks (bevels) -->
        <rect x="8.5" y="5.5" width="6" height="4" rx="0.6" fill="#92400E" stroke="#5C2508" stroke-width="0.7" />
        <rect x="17.5" y="5.5" width="6" height="4" rx="0.6" fill="#92400E" stroke="#5C2508" stroke-width="0.7" />
        <rect x="8.5" y="10.5" width="6" height="4" rx="0.6" fill="#92400E" stroke="#5C2508" stroke-width="0.7" />
        <rect x="17.5" y="10.5" width="6" height="4" rx="0.6" fill="#92400E" stroke="#5C2508" stroke-width="0.7" />
        <!-- Silver Foil crimped peeling -->
        <path d="M7 15l2.5-1.5 3 1.5 3.5-1.5 3 1.5 3-1.5 3 1.5v3H7z" fill="${c.accent}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Classic Red Paper Wrapper sleeve -->
        <rect x="7" y="17.5" width="18" height="10.5" rx="1.5" fill="${c.secondary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Gold wrapper label band -->
        <rect x="7" y="21" width="18" height="3.5" fill="#FBBF24" />
      </g>`;
    },
  },
  {
    id: 'candy',
    char: '🍬',
    name: 'Candy',
    unicodeHex: 'U+1F36C',
    category: 'objects-places',
    tags: ['candy', 'sweet', 'lolly', 'wrapper', 'confectionery', 'sugar', 'snack', '🍬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F472B6', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left twisted wrapper fan -->
          <path d="M10 14L3 9v14l7-5" />
          <!-- Center oval candy piece -->
          <ellipse cx="16" cy="16" rx="6.5" ry="5.5" />
          <!-- Right twisted wrapper fan -->
          <path d="M22 14l7-5v14l-7-5" />
          <!-- Diagonal wrapper stripes -->
          <path d="M13 11c1.5 3 1.5 7 0 10" />
          <path d="M17 11c1.5 3 1.5 7 0 10" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Left twisted crinkled wrapper tail -->
        <path d="M10.5 13.5L3 8.5v15l7.5-5z" fill="${c.secondary}" stroke="#BE185D" stroke-width="1" />
        <line x1="5.5" y1="12" x2="9.5" y2="15" stroke="#BE185D" stroke-width="0.8" opacity="0.6" />
        <line x1="5.5" y1="20" x2="9.5" y2="17" stroke="#BE185D" stroke-width="0.8" opacity="0.6" />
        <!-- Right twisted crinkled wrapper tail -->
        <path d="M21.5 13.5L29 8.5v15l-7.5-5z" fill="${c.secondary}" stroke="#BE185D" stroke-width="1" />
        <line x1="26.5" y1="12" x2="22.5" y2="15" stroke="#BE185D" stroke-width="0.8" opacity="0.6" />
        <line x1="26.5" y1="20" x2="22.5" y2="17" stroke="#BE185D" stroke-width="0.8" opacity="0.6" />
        <!-- Plump center candy body -->
        <ellipse cx="16" cy="16" rx="6.8" ry="5.8" fill="${c.primary}" stroke="#9D174D" stroke-width="1.2" />
        <!-- Candy wrapper stripes -->
        <path d="M13.5 10.8c2 3.2 2 7.2 0 10.4" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
        <path d="M17.5 10.8c2 3.2 2 7.2 0 10.4" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'lollipop',
    char: '🍭',
    name: 'Lollipop',
    unicodeHex: 'U+1F36D',
    category: 'objects-places',
    tags: ['lollipop', 'sucker', 'candy', 'spiral', 'sweet', 'sugar', 'stick', 'confectionery', '🍭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FDE047', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Stick -->
          <line x1="16" y1="20" x2="16" y2="30" />
          <!-- Candy Disc -->
          <circle cx="16" cy="11.5" r="9.5" />
          <!-- Spiral swirl -->
          <path d="M16 11.5c1 0 1.8 0.8 1.8 1.8s-1.2 2.2-2.5 2.2-3.8-1.5-3.8-3.8 2-5 5-5 6.5 2.8 6.5 6.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- White lollipop stick -->
        <line x1="16" y1="18" x2="16" y2="30" stroke="#E2E8F0" stroke-width="2.6" stroke-linecap="round" />
        <line x1="16" y1="18" x2="16" y2="30" stroke="#94A3B8" stroke-width="0.8" stroke-linecap="round" />
        <!-- Big Candy Swirl Disc Base (Yellow) -->
        <circle cx="16" cy="11.5" r="9.5" fill="${c.secondary}" stroke="#B91C1C" stroke-width="1.2" />
        <!-- Red Spiral Stripe Arms -->
        <path d="M16 11.5c1.2 0 2 0.8 2 1.8s-1 2.5-2.6 2.5c-2.4 0-4.2-1.8-4.2-4.2 0-3.2 2.6-5.8 5.8-5.8 4 0 7 3 7 7 0 3-1.5 5.5-3.5 6.8" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Cyan spiral highlight -->
        <path d="M16 8.5c1.8 0 3.5 1.5 3.5 3.5" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <!-- Glossy specular shine arc -->
        <path d="M10 8c1.5-2 3.5-3.5 6-4" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'custard',
    char: '🍮',
    name: 'Custard',
    unicodeHex: 'U+1F36E',
    category: 'objects-places',
    tags: ['custard', 'flan', 'pudding', 'creme caramel', 'dessert', 'caramel', 'sweet', 'pastry', '🍮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#78350F', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Plate dish -->
          <ellipse cx="16" cy="25" rx="12" ry="3.5" />
          <!-- Pudding flan body -->
          <path d="M8.5 24l2-10h11l2 10" />
          <!-- Flat caramel top with drip -->
          <path d="M10.5 14h11c0 2-1 3-2 3s-1-1-2-1-1 2-2 2-1-2-2-2-2 1-3-2z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- White ceramic dessert plate -->
        <ellipse cx="16" cy="25.5" rx="12" ry="3.5" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1" />
        <ellipse cx="16" cy="25" rx="10" ry="2.5" fill="#E2E8F0" />
        <!-- Caramel puddle pooled on plate -->
        <ellipse cx="16" cy="24.5" rx="8" ry="2" fill="${c.secondary}" opacity="0.4" />
        <!-- Golden-yellow silky custard pudding body -->
        <path d="M8.5 24.5L10.8 14h10.4l2.3 10.5c-2.5 1-8 1.5-12.5 0.5-1-.2-1.8-.6-2.5-1z" fill="${c.primary}" stroke="#D97706" stroke-width="1" />
        <!-- Rich Dark Amber Caramel Glaze on Top with dripping syrup -->
        <path d="M10.5 14h11c0.5 2-0.5 3.5-1.8 3.5s-1.2-1.5-2.2-1.5-1.2 2.5-2.2 2.5-1.2-2-2.2-2-1.5 1.5-2.6-1.5z" fill="${c.secondary}" stroke="#451A03" stroke-width="0.8" />
        <ellipse cx="16" cy="14" rx="5.3" ry="1.2" fill="#92400E" />
        <!-- Glossy caramel highlight -->
        <ellipse cx="14" cy="14" rx="2.5" ry="0.6" fill="#FFFFFF" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'honey-pot',
    char: '🍯',
    name: 'Honey Pot',
    unicodeHex: 'U+1F36F',
    category: 'objects-places',
    tags: ['honey pot', 'honey', 'pot', 'jar', 'sweet', 'bee', 'syrup', 'dipper', 'golden', '🍯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#F59E0B', fillAccent: '#B45309', stroke: '#9A3412' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Pot rim -->
          <ellipse cx="16" cy="10" rx="7.5" ry="2.2" />
          <!-- Pot belly body -->
          <path d="M8.8 10.5C6 14 6 22 10 26c3 3 9 3 12 0 4-4 4-12 1.2-15.5" />
          <!-- Dripping honey -->
          <path d="M13 10v6c0 1.5 1 2.5 2 2.5s2-1 2-2.5v-6" />
          <!-- Honey dipper handle -->
          <line x1="22" y1="4" x2="17" y2="12" />
          <circle cx="17.5" cy="11.5" r="2.2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wooden Honey Dipper stick inserted -->
        <line x1="23.5" y1="3.5" x2="17" y2="12.5" stroke="#D97706" stroke-width="2.2" stroke-linecap="round" />
        <!-- Dipper grooved head -->
        <ellipse cx="18" cy="11.5" rx="2.8" ry="2" transform="rotate(-35 18 11.5)" fill="#B45309" stroke="#78350F" stroke-width="0.6" />
        <!-- Terracotta Honey Pot Belly Body -->
        <path d="M8.8 10.5C5.8 14.5 5.8 21.5 9.8 25.5c3.5 3.5 8.9 3.5 12.4 0 4-4 4-11 1-15z" fill="${c.primary}" stroke="#9A3412" stroke-width="1.2" />
        <!-- Pot neck and rim lip -->
        <ellipse cx="16" cy="10" rx="7.5" ry="2.2" fill="#C2410C" stroke="#9A3412" stroke-width="1" />
        <!-- Honey inside rim -->
        <ellipse cx="16" cy="10" rx="6.5" ry="1.6" fill="${c.secondary}" />
        <!-- Luscious Golden Honey Drip overflowing rim and down front -->
        <path d="M12.5 10c0 2 0.8 5 0.8 7 0 1.8 1.2 3 2.7 3s2.7-1.2 2.7-3c0-2 0.8-5 0.8-7z" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <ellipse cx="16" cy="18.5" rx="1.5" ry="1.2" fill="#FEF08A" opacity="0.6" />
        <!-- Jar label band with pattern -->
        <path d="M8.5 18c2 1 5 1.5 7.5 1.5s5.5-0.5 7.5-1.5" stroke="#FED7AA" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5" />
      </g>`;
    },
  },
];
