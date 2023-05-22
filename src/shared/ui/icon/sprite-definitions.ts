export interface SpritesMap {
  theme: "moon" | "sun";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  theme: ["moon", "sun"],
};
