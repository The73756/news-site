export interface SpritesMap {
  nav: 'about' | 'article' | 'home' | 'profile'
  shared: 'arrow' | 'copy' | 'eye' | 'image' | 'translate' | 'wrap' | 'tile' | 'list'
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
      article: {
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
      copy: {
        viewBox: '0 0 91 91',
        width: 91,
        height: 91,
      },
      eye: {
        viewBox: '0 0 64 64',
        width: 64,
        height: 64,
      },
      image: {
        viewBox: '0 0 20 18',
        width: 20,
        height: 18,
      },
      translate: {
        viewBox: '0 0 43 38',
        width: 43,
        height: 38,
      },
      wrap: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      tile: {
        viewBox: '0 0 40 40',
        width: 40,
        height: 40,
      },
      list: {
        viewBox: '0 0 40 40',
        width: 40,
        height: 40,
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
