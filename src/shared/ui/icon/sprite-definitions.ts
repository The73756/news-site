export interface SpritesMap {
  shared: 'arrow' | 'translate'
  theme: 'moon' | 'sun'
  nav: 'home' | 'about'
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  shared: ['arrow', 'translate'],
  theme: ['moon', 'sun'],
  nav: ['home', 'about'],
}
