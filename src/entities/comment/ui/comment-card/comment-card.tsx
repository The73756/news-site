import { memo } from 'react'
import { cls } from '@/shared/lib/class-names'
import { Avatar } from '@/shared/ui'
import { CommentItem } from '../../model'

interface CommentCardProps {
  className?: string
  comment: CommentItem
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  return (
    <div className={cls('mb-4 flex gap-3', {}, [className])}>
      <Avatar src={comment.user.avatar || ''} alt="comment" size={48} />
      <div className="flex-grow-0">
        {comment.user.username}
        <time className="ml-1 text-xs opacity-50">12:45</time>
        <div className="rounded-lg bg-neutral px-3 py-2">{comment.text}</div>
      </div>
    </div>
  )
})
