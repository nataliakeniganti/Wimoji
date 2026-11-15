import { WimojiIconDef } from '../../types/wimoji';
import {
  HeadLayer,
  headBase,
  headEyes,
  headLine,
  renderHead,
} from './peoplePersonIcons';

const WOMAN_BACK_HAIR =
  'M6.2 17 C4.8 9 9.8 4.2 16 4.2 C22.2 4.2 27.2 9 25.8 17 C25.4 22 26.2 26 28.2 29 C24.4 29.4 22.4 28.2 21.2 26.4 L10.8 26.4 C9.6 28.2 7.6 29.4 3.8 29 C5.8 26 6.6 22 6.2 17 Z';

const WOMAN_BANGS =
  'M7.8 16.6 C7.2 10 11 6.2 16 6.2 C21 6.2 24.8 10 24.2 16.6 C21.8 14.4 18.4 12.2 14.6 9.8 C13.4 12.6 10.6 15 7.8 16.6 Z';

const MAN_HAIR =
  'M7.2 15.6 C6 8.6 10.4 5 16 5 C21.6 5 26 8.6 24.8 15.6 C23.8 12 21 10.6 16 10.6 C11 10.6 8.2 12 7.2 15.6 Z';

const SWEPT_MAN_HAIR =
  'M7.4 16 C6.4 9.2 10.6 5 16 5 C21.4 5 25.6 9.2 24.6 16 C23.4 13 21 11.2 18.4 10 C16 12.6 11.4 14.2 7.4 16 Z';

const manBrowsAndFeatures = (ink: string) =>
  headLine(ink, 'M10.8 14.6 L14.6 14.2 M17.4 14.2 L21.2 14.6', 1.4) +
  headEyes(ink, [
    [12.8, 17.6],
    [19.2, 17.6],
  ]) +
  headLine(ink, 'M13.6 23 C14.8 24.4 17.2 24.4 18.4 23', 1.3);

const womanFeatures = (ink: string, o: boolean, s: boolean) =>
  headEyes(
    ink,
    [
      [12.8, 18.6],
      [19.2, 18.6],
    ],
    1.1
  ) +
  headLine(ink, 'M11 17.2 L9.8 16.6 M21 17.2 L22.2 16.6', 0.8) +
  headLine(o ? ink : s ? '#FFFFFF' : '#E11D48', 'M13.8 22.8 C15 24.4 17 24.4 18.2 22.8', 1.6);

export const zwjPeopleHairBeardIcons: WimojiIconDef[] = [
  // 1. Man: Beard (🧔‍♂️ U+1F9D4 U+200D U+2642 U+FE0F)
  {
    id: 'man-beard',
    char: '🧔‍♂️',
    name: 'Man: Beard',
    unicodeHex: 'U+1F9D4 U+200D U+2642 U+FE0F',
    category: 'people-body',
    tags: ['man beard', 'bearded man', 'beard', 'facial hair', 'man', '🧔‍♂️', '1f9d4-200d-2642-fe0f'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 16, 8.6, 9),
        { d: MAN_HAIR.replace(/15\.6/g, '14.6').replace(/10\.6/g, '9.8'), kind: 'hair' },
        {
          d: 'M7.8 17.4 C7.8 24.8 11.6 28.6 16 28.6 C20.4 28.6 24.2 24.8 24.2 17.4 C23 19.8 20.8 20.6 19 20.2 C17.8 19.8 17.2 19.4 16 19.4 C14.8 19.4 14.2 19.8 13 20.2 C11.2 20.6 9 19.8 7.8 17.4 Z',
          kind: 'hair',
        },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) =>
          headLine(ink, 'M10.8 14.4 L14.6 14 M17.4 14 L21.2 14.4', 1.35) +
          headEyes(ink, [
            [12.6, 17.2],
            [19.4, 17.2],
          ]) +
          `<path d="M14.2 22.8 C15.2 24 16.8 24 17.8 22.8 C16.8 22.2 15.2 22.2 14.2 22.8 Z" fill="${
            o ? 'none' : s ? '#FFFFFF' : '#FCA5A5'
          }" stroke="${o ? ink : 'none'}" stroke-width="0.8" />`,
        'man-beard',
        '#5D3A1A'
      );
    },
  },

  // 2. Woman: Beard (🧔‍♀️ U+1F9D4 U+200D U+2640 U+FE0F)
  {
    id: 'woman-beard',
    char: '🧔‍♀️',
    name: 'Woman: Beard',
    unicodeHex: 'U+1F9D4 U+200D U+2640 U+FE0F',
    category: 'people-body',
    tags: ['woman beard', 'bearded woman', 'beard', 'facial hair', 'woman', '🧔‍♀️', '1f9d4-200d-2640-fe0f'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        { d: WOMAN_BACK_HAIR, kind: 'hair' },
        ...headBase(16, 17, 8, 8.8, false),
        { d: WOMAN_BANGS, kind: 'hair' },
        {
          d: 'M8.1 18.2 C8.1 25 11.6 28.4 16 28.4 C20.4 28.4 23.9 25 23.9 18.2 C22.8 20.4 20.8 21.2 19 20.8 C17.8 20.4 17.2 20 16 20 C14.8 20 14.2 20.4 13 20.8 C11.2 21.2 9.2 20.4 8.1 18.2 Z',
          kind: 'hair',
        },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) =>
          headEyes(
            ink,
            [
              [12.8, 18.2],
              [19.2, 18.2],
            ],
            1.1
          ) +
          headLine(ink, 'M11 16.8 L9.8 16.2 M21 16.8 L22.2 16.2', 0.8) +
          `<path d="M14.2 23.2 C15.2 24.4 16.8 24.4 17.8 23.2 C16.8 22.6 15.2 22.6 14.2 23.2 Z" fill="${
            o ? 'none' : s ? '#FFFFFF' : '#F472B6'
          }" stroke="${o ? ink : 'none'}" stroke-width="0.8" />`,
        'woman-beard',
        '#5D3A1A'
      );
    },
  },

  // 3. Man: Red Hair (👨‍🦰 U+1F468 U+200D U+1F9B0)
  {
    id: 'man-red-hair',
    char: '👨‍🦰',
    name: 'Man: Red Hair',
    unicodeHex: 'U+1F468 U+200D U+1F9B0',
    category: 'people-body',
    tags: ['man red hair', 'redhead', 'ginger', 'man', 'red hair', '👨‍🦰', '1f468-200d-1f9b0'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17.2, 8.8, 9.4),
        { d: MAN_HAIR, kind: 'hair' },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const strand = o
            ? headLine(ink, 'M10 12.2 C12.4 8.6 15.6 7.4 19 8.2', 0.8)
            : s
            ? headLine('#FFFFFF', 'M10 12.2 C12.4 8.6 15.6 7.4 19 8.2', 0.8)
            : '<path d="M10 12.2 C12.4 8.6 15.6 7.4 19 8.2" fill="none" stroke="#FB923C" stroke-width="1" stroke-linecap="round" opacity="0.85" />';
          return manBrowsAndFeatures(ink) + strand;
        },
        'man-red-hair',
        '#C2410C'
      );
    },
  },

  // 4. Man: Curly Hair (👨‍🦱 U+1F468 U+200D U+1F9B1)
  {
    id: 'man-curly-hair',
    char: '👨‍🦱',
    name: 'Man: Curly Hair',
    unicodeHex: 'U+1F468 U+200D U+1F9B1',
    category: 'people-body',
    tags: ['man curly hair', 'curly hair', 'afro', 'man', '👨‍🦱', '1f468-200d-1f9b1'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17.2, 8.8, 9.4),
        {
          d: 'M7.4 16 C6 14.4 5.6 12.4 6.4 10.6 C7.2 8.6 8.8 7.4 10.8 6.8 C11.6 5 13.4 3.8 15.6 3.6 C17.4 3.4 19.2 4.2 20.4 5.4 C22 4.8 23.8 5.8 24.8 7.2 C25.8 8.8 26 11 25.2 12.8 C25.6 14.4 25 15.6 24.4 16.4 C23.2 13.8 20.8 11.8 18.4 10.4 C16.6 12.2 15 12.4 13.8 11.4 C12.2 12.8 9.6 14.4 7.4 16 Z',
          kind: 'hair',
        },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const curls = o
            ? headLine(
                ink,
                'M10.8 7.8 C12.2 6.6 14 7.4 13.8 9 M16.8 7.4 C18.2 6.2 20 7 19.8 8.6 M21.4 11 C22.6 10.4 23.6 11.2 23.2 12.4',
                0.9
              )
            : s
            ? headLine(
                '#FFFFFF',
                'M10.8 7.8 C12.2 6.6 14 7.4 13.8 9 M16.8 7.4 C18.2 6.2 20 7 19.8 8.6 M21.4 11 C22.6 10.4 23.6 11.2 23.2 12.4',
                0.9
              )
            : '<path d="M10.8 7.8 C12.2 6.6 14 7.4 13.8 9 M16.8 7.4 C18.2 6.2 20 7 19.8 8.6 M21.4 11 C22.6 10.4 23.6 11.2 23.2 12.4" fill="none" stroke="#5D4037" stroke-width="1.1" stroke-linecap="round" />';
          return manBrowsAndFeatures(ink) + curls;
        },
        'man-curly-hair',
        '#271C19'
      );
    },
  },

  // 5. Man: White Hair (👨‍🦳 U+1F468 U+200D U+1F9B3)
  {
    id: 'man-white-hair',
    char: '👨‍🦳',
    name: 'Man: White Hair',
    unicodeHex: 'U+1F468 U+200D U+1F9B3',
    category: 'people-body',
    tags: ['man white hair', 'white hair', 'gray hair', 'silver hair', 'man', '👨‍🦳', '1f468-200d-1f9b3'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17.2, 8.8, 9.4),
        { d: MAN_HAIR, kind: 'hair' },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const strand = o
            ? headLine(ink, 'M10.2 12.4 C12.6 8.8 15.6 7.6 18.8 8.2', 0.9)
            : s
            ? headLine('#FFFFFF', 'M10.2 12.4 C12.6 8.8 15.6 7.6 18.8 8.2', 1)
            : '<path d="M10.2 12.4 C12.6 8.8 15.6 7.6 18.8 8.2" fill="none" stroke="#94A3B8" stroke-width="1" stroke-linecap="round" opacity="0.8" />';
          return manBrowsAndFeatures(ink) + strand;
        },
        'man-white-hair',
        '#E2E8F0',
        true
      );
    },
  },

  // 6. Man: Bald (👨‍🦲 U+1F468 U+200D U+1F9B2)
  {
    id: 'man-bald',
    char: '👨‍🦲',
    name: 'Man: Bald',
    unicodeHex: 'U+1F468 U+200D U+1F9B2',
    category: 'people-body',
    tags: ['man bald', 'bald', 'shaved head', 'man', '👨‍🦲', '1f468-200d-1f9b2'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [...headBase(16, 17.2, 8.8, 9.4)];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const shine = o
            ? headLine(ink, 'M12 10.8 C13.6 9 16 8.2 18.8 8.6', 0.9)
            : s
            ? headLine('#FFFFFF', 'M12 10.8 C13.6 9 16 8.2 18.8 8.6', 1)
            : '<path d="M12 10.8 C13.6 9 16 8.2 18.8 8.6" fill="none" stroke="#FFE082" stroke-width="1.3" stroke-linecap="round" /><circle cx="10.8" cy="12.2" r="0.65" fill="#FFE082" stroke="none" />';
          return manBrowsAndFeatures(ink) + shine;
        },
        'man-bald'
      );
    },
  },

  // 7. Woman: Red Hair (👩‍🦰 U+1F469 U+200D U+1F9B0)
  {
    id: 'woman-red-hair',
    char: '👩‍🦰',
    name: 'Woman: Red Hair',
    unicodeHex: 'U+1F469 U+200D U+1F9B0',
    category: 'people-body',
    tags: ['woman red hair', 'redhead', 'ginger', 'woman', 'red hair', '👩‍🦰', '1f469-200d-1f9b0'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        { d: WOMAN_BACK_HAIR, kind: 'hair' },
        ...headBase(16, 17.4, 8, 8.8, false),
        { d: WOMAN_BANGS, kind: 'hair' },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const strand = o
            ? headLine(ink, 'M10.4 11.4 C12.8 8 15.8 7 19.2 7.8', 0.8)
            : s
            ? headLine('#FFFFFF', 'M10.4 11.4 C12.8 8 15.8 7 19.2 7.8', 0.8)
            : '<path d="M10.4 11.4 C12.8 8 15.8 7 19.2 7.8" fill="none" stroke="#FB923C" stroke-width="1" stroke-linecap="round" opacity="0.85" />';
          return womanFeatures(ink, o, s) + strand;
        },
        'woman-red-hair',
        '#C2410C'
      );
    },
  },

  // 8. Woman: Curly Hair (👩‍🦱 U+1F469 U+200D U+1F9B1)
  {
    id: 'woman-curly-hair',
    char: '👩‍🦱',
    name: 'Woman: Curly Hair',
    unicodeHex: 'U+1F469 U+200D U+1F9B1',
    category: 'people-body',
    tags: ['woman curly hair', 'curly hair', 'afro', 'woman', '👩‍🦱', '1f469-200d-1f9b1'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        {
          d: 'M5.6 17.4 C4.2 14.8 4.4 11.6 5.8 9.2 C6.6 6.8 8.8 5 11.2 4.6 C12.6 3.2 14.4 2.8 16 2.8 C17.6 2.8 19.4 3.2 20.8 4.6 C23.2 5 25.4 6.8 26.2 9.2 C27.6 11.6 27.8 14.8 26.4 17.4 C27.4 20.6 27.8 25.4 28.4 28.8 C25 29.4 22.8 28.2 21.4 26.4 L10.6 26.4 C9.2 28.2 7 29.4 3.6 28.8 C4.2 25.4 4.6 20.6 5.6 17.4 Z',
          kind: 'hair',
        },
        ...headBase(16, 17.6, 8, 8.6, false),
        {
          d: 'M7.8 16.4 C7.2 12.6 9.6 9.6 12.4 8.8 C14 7.6 16.2 7.4 18 8.4 C20.4 8.2 23.8 10.8 24.2 16.4 C22 14 19 12.4 16 11 C13 12.4 10 14 7.8 16.4 Z',
          kind: 'hair',
        },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const curls = o
            ? headLine(
                ink,
                'M10.4 7 C11.8 5.8 13.6 6.4 13.4 8 M17.2 6.6 C18.6 5.4 20.4 6 20.2 7.6',
                0.9
              )
            : s
            ? headLine(
                '#FFFFFF',
                'M10.4 7 C11.8 5.8 13.6 6.4 13.4 8 M17.2 6.6 C18.6 5.4 20.4 6 20.2 7.6',
                0.9
              )
            : '<path d="M10.4 7 C11.8 5.8 13.6 6.4 13.4 8 M17.2 6.6 C18.6 5.4 20.4 6 20.2 7.6" fill="none" stroke="#5D4037" stroke-width="1.1" stroke-linecap="round" />';
          return womanFeatures(ink, o, s) + curls;
        },
        'woman-curly-hair',
        '#271C19'
      );
    },
  },

  // 9. Woman: White Hair (👩‍🦳 U+1F469 U+200D U+1F9B3)
  {
    id: 'woman-white-hair',
    char: '👩‍🦳',
    name: 'Woman: White Hair',
    unicodeHex: 'U+1F469 U+200D U+1F9B3',
    category: 'people-body',
    tags: ['woman white hair', 'white hair', 'gray hair', 'silver hair', 'woman', '👩‍🦳', '1f469-200d-1f9b3'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        { d: WOMAN_BACK_HAIR, kind: 'hair' },
        ...headBase(16, 17.4, 8, 8.8, false),
        { d: WOMAN_BANGS, kind: 'hair' },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const strand = o
            ? headLine(ink, 'M10.4 11.4 C12.8 8 15.8 7 19.2 7.8', 0.9)
            : s
            ? headLine('#FFFFFF', 'M10.4 11.4 C12.8 8 15.8 7 19.2 7.8', 1)
            : '<path d="M10.4 11.4 C12.8 8 15.8 7 19.2 7.8" fill="none" stroke="#94A3B8" stroke-width="1" stroke-linecap="round" opacity="0.8" />';
          return womanFeatures(ink, o, s) + strand;
        },
        'woman-white-hair',
        '#E2E8F0',
        true
      );
    },
  },

  // 10. Woman: Bald (👩‍🦲 U+1F469 U+200D U+1F9B2)
  {
    id: 'woman-bald',
    char: '👩‍🦲',
    name: 'Woman: Bald',
    unicodeHex: 'U+1F469 U+200D U+1F9B2',
    category: 'people-body',
    tags: ['woman bald', 'bald', 'shaved head', 'woman', '👩‍🦲', '1f469-200d-1f9b2'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [...headBase(16, 17.4, 8.2, 8.8, true)];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const shine = o
            ? headLine(ink, 'M12.2 11.2 C13.8 9.4 16.2 8.6 18.8 9', 0.9)
            : s
            ? headLine('#FFFFFF', 'M12.2 11.2 C13.8 9.4 16.2 8.6 18.8 9', 1)
            : '<path d="M12.2 11.2 C13.8 9.4 16.2 8.6 18.8 9" fill="none" stroke="#FFE082" stroke-width="1.3" stroke-linecap="round" /><circle cx="11" cy="12.6" r="0.65" fill="#FFE082" stroke="none" />';
          return womanFeatures(ink, o, s) + shine;
        },
        'woman-bald'
      );
    },
  },

  // 11. Woman: Blond Hair (👱‍♀️ U+1F471 U+200D U+2640 U+FE0F)
  {
    id: 'woman-blond-hair',
    char: '👱‍♀️',
    name: 'Woman: Blond Hair',
    unicodeHex: 'U+1F471 U+200D U+2640 U+FE0F',
    category: 'people-body',
    tags: ['woman blond hair', 'blonde', 'blond', 'woman', 'fair hair', '👱‍♀️', '1f471-200d-2640-fe0f'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        { d: WOMAN_BACK_HAIR, kind: 'hair' },
        ...headBase(16, 17.4, 8, 8.8, false),
        { d: WOMAN_BANGS, kind: 'hair' },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => womanFeatures(ink, o, s),
        'woman-blond-hair',
        '#E8B100',
        true
      );
    },
  },

  // 12. Man: Blond Hair (👱‍♂️ U+1F471 U+200D U+2642 U+FE0F)
  {
    id: 'man-blond-hair',
    char: '👱‍♂️',
    name: 'Man: Blond Hair',
    unicodeHex: 'U+1F471 U+200D U+2642 U+FE0F',
    category: 'people-body',
    tags: ['man blond hair', 'blond', 'blonde', 'man', 'fair hair', '👱‍♂️', '1f471-200d-2642-fe0f'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17.2, 8.8, 9.4),
        { d: SWEPT_MAN_HAIR, kind: 'hair' },
      ];
      return renderHead(
        opts,
        layers,
        (ink) => manBrowsAndFeatures(ink),
        'man-blond-hair',
        '#E8B100',
        true
      );
    },
  },
];
