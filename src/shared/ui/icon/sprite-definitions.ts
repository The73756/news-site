export interface SpritesMap {
  shared: 'translate'
  theme: 'moon' | 'sun'
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  shared: ['translate'],
  theme: ['moon', 'sun'],
}
