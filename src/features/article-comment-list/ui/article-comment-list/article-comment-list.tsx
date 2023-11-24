import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { CommentCard } from '@/entities/comment'
import { AddCommentForm } from '@/features/add-comment-form'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { Header, Text } from '@/shared/ui'
import {
  articleDetailsCommentsReducer,
  fetchCommentsByArticle,
  getArticleCommentListIsLoading,
  getArticleComments,
} from '../../model'

interface ArticleCommentListProps {
  id: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleCommentList = memo(({ id }: ArticleCommentListProps) => {
  const { t } = useTranslation('article-details')
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentListIsLoading)
  const dispatch = useAppDispatch()

  useInitialEffect(() => dispatch(fetchCommentsByArticle(id)))

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className="ml-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment.id} isLoading={commentsIsLoading} comment={comment} />
          ))
        ) : (
          <Text text={t('Комментариев нет')} />
        )}
      </div>
    </DynamicModuleLoader>
  )
})

export default ArticleCommentList
