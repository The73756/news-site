import { SVGProps } from 'react'
import { cls } from '@/shared/lib/class-names'
import { SPRITES_META, type SpritesMap } from '@/shared/ui/icon/sprite.gen'

export type IconName = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`
}[keyof SpritesMap]

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  name: IconName
}

export function Icon({ name, className, ...props }: IconProps) {
  const [spriteName, iconName] = name.split('/') as [keyof SpritesMap, SpritesMap[keyof SpritesMap]]
  const { filePath, items } = SPRITES_META[spriteName]
  const { viewBox } = (items as never)[iconName]

  return (
    <svg
      className={cls('inline-block h-[1em] w-[1em] select-none fill-current text-inherit', {}, [
        className,
      ])}
      viewBox={viewBox}
      focusable="false"
      aria-hidden
      {...props}
    >
      <use href={`/${filePath}#${iconName}`} />
    </svg>
  )
}
