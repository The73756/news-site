import { memo } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList } from '@/entities/article'
import { articlesPageListReducer } from '@/features/articles-page-list'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import {
  fetchArticlesList,
  getArticles,
  getArticlesPageListLoading,
  getArticlesPageListView,
} from '../model'

const reducers: ReducersList = {
  articlesPageList: articlesPageListReducer,
}

export const ArticlesPageList = memo(() => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const view = useSelector(getArticlesPageListView)
  const articlesLoading = useSelector(getArticlesPageListLoading)

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
  })

  return (
    <div>
      <DynamicModuleLoader reducers={reducers}>
        <ArticleList isLoading={articlesLoading} view={view} articles={articles} />
      </DynamicModuleLoader>
    </div>
  )
})
