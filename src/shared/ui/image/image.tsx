import { ImgHTMLAttributes, memo, useEffect, useState } from 'react'
import placeholderImg from '@/shared/assets/img/placeholder.png'
import { cls } from '@/shared/lib/class-names'
import { Skeleton, SkeletonWrapper } from '@/shared/ui'

type HTMLInputElementProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'width' | 'height' | 'alt'
>

interface ImageProps extends HTMLInputElementProps {
  alt: string | undefined
  src: string | undefined
  className?: string
  wrapperClass?: string
  width?: number
  height?: number
  loaderSize?: number
  loaderHeight?: number | string
}

export const Image = memo(
  ({
    className,
    width,
    height,
    wrapperClass,
    alt,
    src,
    loaderSize,
    loaderHeight,
    ...props
  }: ImageProps) => {
    const [isImgLoading, setIsImgLoading] = useState(true)
    const [imgSrc, setImgSrc] = useState('')

    useEffect(() => {
      setImgSrc(String(src))
    }, [src])

    const onImgLoaded = () => {
      setIsImgLoading(false)
    }

    const onImgError = () => {
      setIsImgLoading(false)
      setImgSrc(placeholderImg)
    }

    return (
      <>
        {isImgLoading && src && (
          <SkeletonWrapper className="h-full w-full" height={loaderHeight}>
            <Skeleton isImage={true} width="100%" height="100%" />
          </SkeletonWrapper>
        )}

        <img
          {...props}
          className={cls(
            'block h-full',
            {
              'sr-only': isImgLoading,
            },
            [className]
          )}
          width={width}
          height={height}
          alt={alt}
          src={imgSrc}
          onLoad={onImgLoaded}
          onError={onImgError}
        />
      </>
    )
  }
)
