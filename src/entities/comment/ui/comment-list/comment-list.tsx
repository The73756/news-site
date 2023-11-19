import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Text } from '@/shared/ui'
import { CommentItem } from '../../model'
import { CommentCard } from '../comment-card'

interface CommentListProps {
  className?: string
  comments?: CommentItem[]
  isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation()
  return (
    <div className={cls('ml-4', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
      ) : (
        <Text text={t('Комментариев нет')} />
      )}
    </div>
  )
})
