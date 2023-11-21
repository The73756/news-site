import { memo } from 'react'
import { cls } from '@/shared/lib/class-names'
import { Avatar, Skeleton, SkeletonWrapper } from '@/shared/ui'
import { CommentItem } from '../../model'

interface CommentCardProps {
  className?: string
  comment: CommentItem
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <SkeletonWrapper className={cls('mb-4 flex gap-3', {}, [className])}>
        <Skeleton height={48} width={48} border="100%" isImage={true} />
        <div className="w-full">
          <div className="mb-2 flex w-full gap-1">
            <Skeleton height={15} width={100} />
            <Skeleton height={15} width={80} />
          </div>

          <Skeleton height={60} width="80%" />
        </div>
      </SkeletonWrapper>
    )
  }

  return (
    <div className={cls('mb-4 flex gap-3', {}, [className])}>
      <Avatar src={comment.user.avatar || ''} alt="comment" size={48} />
      <div>
        {comment.user.username}
        <time className="ml-1 text-xs opacity-50">12:45</time>
        <div className="rounded-lg bg-neutral px-3 py-2">{comment.text}</div>
      </div>
    </div>
  )
})
