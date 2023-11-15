import { CSSProperties, memo } from 'react'
import { cls } from '@/shared/lib/class-names'
import { Icon } from '@/shared/ui'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string | number
  isImage?: boolean
}

export const Skeleton = memo(({ className, width, height, border, isImage }: SkeletonProps) => {
  const wrapperStyles: CSSProperties = {
    maxWidth: width,
    height,
  }

  const skeletonStyles: CSSProperties = {
    borderRadius: border,
  }

  return (
    <div
      className={cls(
        'animate-pulse space-y-8 rtl:space-x-reverse md:flex md:items-center md:space-x-8 md:space-y-0',
        {},
        [className]
      )}
      style={wrapperStyles}
      role="status"
    >
      <div
        style={skeletonStyles}
        className="flex h-full w-full items-center justify-center rounded-xl bg-base-content/30"
      >
        {isImage && <Icon name="shared/image" className="text-4xl text-base-content/40" />}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
})
