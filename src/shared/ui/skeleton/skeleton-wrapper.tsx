import { PropsWithChildren } from 'react'
import { cls } from '@/shared/lib/class-names'

interface SkeletonWrapperProps {
  className?: string
}

export const SkeletonWrapper = ({
  className,
  children,
}: PropsWithChildren<SkeletonWrapperProps>) => {
  return (
    <div className={cls('animate-pulse', {}, [className])} role="status">
      {children}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
