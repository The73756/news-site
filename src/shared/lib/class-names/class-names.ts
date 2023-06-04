import { tw } from 'typewind'

type Typewind = typeof tw
type Mods = Record<string, boolean | string>

export const cls = (
  cls: string | Typewind,
  mods: Mods = {},
  additional?: (string | Typewind | undefined)[]
): string => {
  const additionalArray = additional || []

  return [
    cls,
    ...additionalArray.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ')
}
