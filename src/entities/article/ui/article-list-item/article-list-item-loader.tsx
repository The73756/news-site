import { memo } from 'react'
import { ArticleView } from '@/entities/article/model'
import { cls } from '@/shared/lib/class-names'
import { Skeleton, SkeletonWrapper } from '@/shared/ui'

interface ArticleListItemLoaderProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemLoader = memo(({ className, view }: ArticleListItemLoaderProps) => {
  if (view === ArticleView.TILE) {
    return (
      <SkeletonWrapper className={cls('card', {}, [className])}>
        <Skeleton width="100%" height={250} isImage={true} />
        <div className="card-body px-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Skeleton height={22} width={120} />
            <Skeleton height={18} width={75} />
          </div>
          <div className="card-actions justify-between">
            <Skeleton width={75} height={18} />
            <Skeleton width={60} height={18} />
          </div>
        </div>
      </SkeletonWrapper>
    )
  }

  return (
    <SkeletonWrapper className={cls('card', {}, [className])}>
      <div className="card-body px-0 pt-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <Skeleton
              className="min-w-[40px]"
              width={40}
              height={40}
              isImage={true}
              border="100%"
            />
            <div className="flex items-center gap-2">
              <Skeleton width={70} height={18} />
              <Skeleton width={75} height={18} />
            </div>
          </div>
          <Skeleton width={70} height={18} />
        </div>
        <div className="card-actions justify-between">
          <Skeleton width={200} height={24} />
          <Skeleton width={80} height={18} />
        </div>
      </div>
      <Skeleton width="100%" height={250} isImage={true} />
      <div className="card-body px-0">
        <div className="mb-2 space-y-2">
          <Skeleton width="100%" height={14} />
          <Skeleton width="90%" height={14} />
          <Skeleton width="85%" height={14} />
          <Skeleton width="95%" height={14} />
        </div>
        <div className="card-actions justify-end">
          <Skeleton width={130} height={36} />
        </div>
      </div>
    </SkeletonWrapper>
  )
})
