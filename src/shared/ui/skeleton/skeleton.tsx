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

export const Skeleton = memo(({ width, height, border, isImage, className }: SkeletonProps) => {
  const styles: CSSProperties = {
    maxWidth: width,
    height,
    borderRadius: border,
  }

  return (
    <div
      style={styles}
      className={cls(
        'flex h-full w-full items-center justify-center rounded-xl bg-base-content/30',
        {},
        [className]
      )}
    >
      {isImage && (
        <Icon
          name="shared/image"
          className="h-[45%] max-h-[80px] w-[45%] max-w-[80px] text-base-content/40"
        />
      )}
    </div>
  )
})
