import { SVGProps } from 'react'
import { tw } from 'typewind'
import { cls } from '@/shared/lib/class-names'
import { SpritesMap } from './sprite-definitions'

export type SpriteKey = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`
}[keyof SpritesMap]

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  name: SpriteKey
}

export const Icon = ({ name, className, viewBox, ...props }: IconProps) => {
  const [spriteName, iconName] = name.split('/')

  return (
    <svg
      className={cls(
        tw.fill_current.h_['1em'].inline_block.select_none.text_inherit.w_['1em'],
        {},
        [className]
      )}
      viewBox={viewBox}
      focusable="false"
      aria-hidden
      {...props}
    >
      <use xlinkHref={`./sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  )
}
