import { memo } from 'react'
import { Skeleton } from '@/shared/ui'
import { SkeletonWrapper } from '@/shared/ui/skeleton/skeleton-wrapper'

export const ArticleDetailsLoader = memo(() => {
  return (
    <div className="max-w-screen-md">
      <SkeletonWrapper className="mb-8 flex flex-col gap-3">
        <Skeleton width={150} height={150} border="100%" />
        <Skeleton width="60%" height={20} />
        <Skeleton width="40%" height={18} />
      </SkeletonWrapper>
      <SkeletonWrapper className="flex flex-col gap-2">
        <Skeleton width="100%" height={10} />
        <Skeleton width="90%" height={10} />
        <Skeleton width="95%" height={10} />
        <Skeleton width="70%" height={10} />
        <Skeleton width="80%" height={10} />
      </SkeletonWrapper>
    </div>
  )
})
