import { memo } from 'react'
import { Skeleton } from '@/shared/ui'
import { SkeletonWrapper } from '@/shared/ui/skeleton/skeleton-wrapper'

export const ArticleDetailsLoader = memo(() => {
  return (
    <SkeletonWrapper>
      <div className="mb-3 flex items-center gap-4">
        <Skeleton width={40} height={40} border="100%" isImage={true} />
        <div className="flex w-full items-center gap-2">
          <Skeleton width="30%" height={15} />
          <Skeleton width="20%" height={15} />
        </div>
      </div>
      <Skeleton width="70%" height={25} className="mb-1" />
      <Skeleton width="50%" height={18} className="mb-8" />
      <Skeleton width="100%" height={400} isImage={true} className="mb-8" />
      <Skeleton width="50%" height={18} className="mb-4" />
      <div className="mb-2 flex flex-col gap-1">
        <Skeleton width="95%" height={10} />
        <Skeleton width="80%" height={10} />
        <Skeleton width="75%" height={10} />
        <Skeleton width="90%" height={10} />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton width="90%" height={10} />
        <Skeleton width="85%" height={10} />
        <Skeleton width="60%" height={10} />
      </div>
    </SkeletonWrapper>
  )
})
