export interface SpritesMap {
  shared: 'translate' | 'arrow'
  theme: 'moon' | 'sun'
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  shared: ['translate', 'arrow'],
  theme: ['moon', 'sun'],
}
