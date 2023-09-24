export interface SpritesMap {
  nav: 'about' | 'home' | 'profile'
  shared: 'arrow' | 'translate'
  theme: 'moon' | 'sun'
}
export const SPRITES_META = {
  nav: {
    filePath: 'nav.svg',
    items: {
      about: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      home: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      profile: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
    },
  },
  shared: {
    filePath: 'shared.svg',
    items: {
      arrow: {
        viewBox: '0 0 131 131',
        width: 131,
        height: 131,
      },
      translate: {
        viewBox: '0 0 43 38',
        width: 43,
        height: 38,
      },
    },
  },
  theme: {
    filePath: 'theme.svg',
    items: {
      moon: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      sun: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
    },
  },
} satisfies Record<
  string,
  {
    filePath: string
    items: Record<
      string,
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
>
