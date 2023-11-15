import { ImgHTMLAttributes, memo, useEffect, useState } from 'react'
import placeholderImg from '@/shared/assets/img/placeholder.png'
import { cls } from '@/shared/lib/class-names'
import { Skeleton } from '@/shared/ui'
import { SkeletonWrapper } from '@/shared/ui/skeleton/skeleton-wrapper'

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
}

export const Image = memo(
  ({ className, width, height, wrapperClass, alt, src, loaderSize, ...props }: ImageProps) => {
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
      <div className={cls('relative h-full w-full', {}, [wrapperClass])}>
        {isImgLoading && src && (
          <SkeletonWrapper className="center absolute h-full w-full">
            <Skeleton isImage={true} width="100%" height="100%" />
          </SkeletonWrapper>
        )}

        <img
          {...props}
          className={cls(
            'block h-full w-full',
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
      </div>
    )
  }
)
