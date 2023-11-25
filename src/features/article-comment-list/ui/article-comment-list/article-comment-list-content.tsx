import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CommentCard, CommentItem } from '@/entities/comment'
import { Text } from '@/shared/ui'

interface ArticleCommentListContentProps {
  comments: CommentItem[]
  isLoading?: boolean
}

export const ArticleCommentListContent = memo(
  ({ comments, isLoading }: ArticleCommentListContentProps) => {
    const { t } = useTranslation('article-details')

    if (isLoading !== false) {
      return (
        <>
          <CommentCard isLoading={true} />
          <CommentCard isLoading={true} />
          <CommentCard isLoading={true} />
        </>
      )
    }

    return (
      <>
        {comments.length > 0 ? (
          comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
        ) : (
          <Text text={t('Комментариев нет')} />
        )}
      </>
    )
  }
)
