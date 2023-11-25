import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ArticleCommentListContent } from '@/features/article-comment-list/ui/article-comment-list/article-comment-list-content'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { Text } from '@/shared/ui'
import {
  articleCommentsListReducer,
  fetchCommentsByArticle,
  getArticleCommentListError,
  getArticleCommentListIsLoading,
  getArticleComments,
} from '../../model'

interface ArticleCommentListProps {
  id: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleCommentsListReducer,
}

const ArticleCommentList = memo(({ id }: ArticleCommentListProps) => {
  const { t } = useTranslation('article-details')
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentListIsLoading)
  const error = useSelector(getArticleCommentListError)
  const dispatch = useAppDispatch()

  useInitialEffect(() => dispatch(fetchCommentsByArticle(id)))

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className="ml-4">
        {error ? (
          <Text
            title={t('Произошла ошибка при загрузке комментариев')}
            text={t('Попробуйте обновить страницу')}
            textSize="xl"
            titleSize="xl"
            theme="error"
          />
        ) : (
          <ArticleCommentListContent comments={comments} isLoading={commentsIsLoading} />
        )}
      </div>
    </DynamicModuleLoader>
  )
})

export default ArticleCommentList
