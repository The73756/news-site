import { ImgHTMLAttributes, memo, useState } from 'react'
import placeholderImg from '@/shared/assets/img/placeholder.png'
import { cls } from '@/shared/lib/class-names'
import { Loader } from '@/shared/ui'

type HTMLInputElementProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'width' | 'height' | 'alt'
>

interface ImageProps extends HTMLInputElementProps {
  alt: string
  src: string
  className?: string
  wrapperClass?: string
  width?: number
  height?: number
  loaderWidth?: number
  loaderHeight?: number
}

export const Image = memo(
  ({ className, width, height, wrapperClass, alt, src, ...props }: ImageProps) => {
    const [isImgLoading, setIsImgLoading] = useState(true)
    const [isImgFailure, setIsImgFailure] = useState(false)
    const srcString = !src || isImgFailure ? placeholderImg : src

    const onImgLoaded = () => {
      setIsImgLoading(false)
    }

    const onImgError = () => {
      setIsImgLoading(false)
      setIsImgFailure(true)
    }

    return (
      <div className={cls('relative', {}, [wrapperClass])}>
        {isImgLoading && src && (
          <div className="center absolute">
            <Loader />
          </div>
        )}

        <img
          {...props}
          className={cls(
            'block h-full w-full',
            {
              isImgLoading: 'opacity-0',
            },
            [className]
          )}
          width={width}
          height={height}
          alt={alt}
          src={srcString}
          onLoad={onImgLoaded}
          onError={onImgError}
        />
      </div>
    )
  }
)
