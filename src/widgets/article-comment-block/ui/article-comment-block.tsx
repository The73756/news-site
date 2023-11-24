import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { AddCommentForm } from '@/features/add-comment-form'
import { ArticleCommentList } from '@/features/article-comment-list'
import { cls } from '@/shared/lib/class-names'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Header } from '@/shared/ui'
import { addCommentForArticle } from '../model'

interface CommentBlockProps {
  className?: string
  id: string
}

export const ArticleCommentBlock = memo(({ className, id }: CommentBlockProps) => {
  const { t } = useTranslation('article-details')
  const dispatch = useAppDispatch()

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  return (
    <div className={cls('', {}, [className])}>
      <Header level="h3" className="mb-3 mt-6">
        {t('Комментарии')}
      </Header>
      <AddCommentForm onSendComment={onSendComment} />
      <ArticleCommentList id={id} />
    </div>
  )
})
