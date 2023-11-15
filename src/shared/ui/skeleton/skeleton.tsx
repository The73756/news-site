import { CSSProperties, memo } from 'react'
import { Icon } from '@/shared/ui'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string | number
  isImage?: boolean
}

export const Skeleton = memo(({ width, height, border, isImage }: SkeletonProps) => {
  const styles: CSSProperties = {
    maxWidth: width,
    height,
    borderRadius: border,
  }

  return (
    <div
      style={styles}
      className="flex h-full w-full items-center justify-center rounded-xl bg-base-content/30"
    >
      {isImage && <Icon name="shared/image" className="text-4xl text-base-content/40" />}
    </div>
  )
})
