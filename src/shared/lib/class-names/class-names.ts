type Mods = Record<string, boolean | string>

export const cls = (cls: string, mods: Mods = {}, additional?: (string | undefined)[]): string => {
  const additionalArray = additional || []

  return [
    cls,
    ...additionalArray.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ')
}
