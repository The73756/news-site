import { StateSchema } from '@/app/providers/store-provider'
import { ArticleView } from '@/entities/article'

export const getArticlesPageListLoading = (state: StateSchema) => state.articlesPageList?.isLoading
export const getArticlesPageListError = (state: StateSchema) => state.articlesPageList?.error
export const getArticlesPageListView = (state: StateSchema) =>
  state.articlesPageList?.view || ArticleView.TILE
