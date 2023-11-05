import { cva, VariantProps } from 'class-variance-authority'
import { ImgHTMLAttributes } from 'react'
import { cls } from '@/shared/lib/class-names'

type HTMLInputElementProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'width' | 'height'
>

const avatarVariants = cva('rounded-full', {
  variants: {},
})

interface AvatarProps extends VariantProps<typeof avatarVariants>, HTMLInputElementProps {
  className?: string
  src: string
  alt?: string
  size?: number
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt, size } = props

  return (
    <img
      {...props}
      src={src}
      width={size || 100}
      height={size || 100}
      alt={alt || ''}
      className={cls(avatarVariants({}), {}, [className])}
    />
  )
}
