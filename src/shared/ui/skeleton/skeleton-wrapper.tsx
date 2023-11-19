import { CSSProperties, PropsWithChildren } from 'react'
import { cls } from '@/shared/lib/class-names'

interface SkeletonWrapperProps {
  className?: string
  height?: number | string
}

export const SkeletonWrapper = ({
  className,
  children,
  height,
}: PropsWithChildren<SkeletonWrapperProps>) => {
  const styles: CSSProperties = {
    height: height || '100%',
  }

  return (
    <div style={styles} className={cls('animate-pulse', {}, [className])} role="status">
      {children}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
