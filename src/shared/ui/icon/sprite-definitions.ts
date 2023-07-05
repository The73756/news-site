export interface SpritesMap {
  nav: 'about' | 'home' | 'profile'
  shared: 'arrow' | 'translate'
  theme: 'moon' | 'sun'
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  nav: ['about', 'home', 'profile'],
  shared: ['arrow', 'translate'],
  theme: ['moon', 'sun'],
}
