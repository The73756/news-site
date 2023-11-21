import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { CommentList } from '@/entities/comment'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { Text } from '@/shared/ui'
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

export const ArticleCommentList = memo(({ id }: ArticleCommentListProps) => {
  const { t } = useTranslation('article-details')
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentListIsLoading)
  const dispatch = useAppDispatch()

  useInitialEffect(() => dispatch(fetchCommentsByArticle(id)))

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <Text className="my-5" title={t('Комментарии')} titleSize="xl" titleWeight="semibold" />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </DynamicModuleLoader>
  )
})
