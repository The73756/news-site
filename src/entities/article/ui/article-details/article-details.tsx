import { memo } from 'react'
import { useSelector } from 'react-redux'
import { ArticleDetailsLoader } from '@/entities/article/ui/article-details/article-details-loader'
import { cls } from '@/shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import {
  articleDetailsReducer,
  fetchArticleById,
  getArticleDetails,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model'
import { ArticleDetailsContent } from './article-details-content'
import { ArticleDetailsError } from './article-details-error'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetails)
  const error = useSelector(getArticleDetailsError)

  useInitialEffect(() => dispatch(fetchArticleById(id)))

  let content

  if (isLoading || isLoading === undefined) {
    content = <ArticleDetailsLoader />
  } else if (error) {
    content = <ArticleDetailsError />
  } else {
    content = <ArticleDetailsContent article={article} />
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <article className={cls('min-h-full', {}, [className])}>{content}</article>
    </DynamicModuleLoader>
  )
})
