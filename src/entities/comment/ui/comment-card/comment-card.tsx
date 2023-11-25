import { memo } from 'react'
import { RoutePath } from '@/app/providers/router'
import { cls } from '@/shared/lib/class-names'
import { getFormattedDateTime } from '@/shared/lib/date'
import { AppLink, Avatar, Skeleton, SkeletonWrapper } from '@/shared/ui'
import { CommentItem } from '../../model'

interface CommentCardProps {
  className?: string
  comment?: CommentItem
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

  if (!comment) return null

  const date = getFormattedDateTime(comment.createdAt)

  return (
    <div className={cls('mb-4 flex gap-3', {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
        <Avatar src={comment.user.avatar || ''} alt={comment.user.username} size={48} />
      </AppLink>
      <div>
        <AppLink to={`${RoutePath.profile}${comment.user.id}`}>{comment.user.username}</AppLink>
        <time className="ml-2 text-xs opacity-50">{date}</time>
        <div className="w-fit rounded-lg bg-neutral px-3 py-2">{comment.text}</div>
      </div>
    </div>
  )
})
