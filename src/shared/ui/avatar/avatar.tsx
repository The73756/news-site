import { CSSProperties, ImgHTMLAttributes } from 'react'
import { cls } from '@/shared/lib/class-names'
import { Image } from '@/shared/ui/image/image'

type HTMLInputElementProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'width' | 'height'
>

interface AvatarProps extends HTMLInputElementProps {
  className?: string
  src: string
  alt?: string
  size?: number
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt, size } = props

  const styles: CSSProperties = {
    width: size || 'auto',
    height: size || 'auto',
  }

  return (
    <div style={styles} className="overflow-hidden rounded-full">
      <Image
        loaderSize={size}
        {...props}
        src={src}
        width={size || 100}
        height={size || 100}
        alt={alt || ''}
        className={cls('', {}, [className])}
      />
    </div>
  )
}
