import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/store-provider'
import { Article, ArticleView } from '@/entities/article'
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage'
import { fetchArticlesList } from '../services'
import { ArticlesPageListSchema } from '../types/articles-page-list-schema'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPageList || articlesAdapter.getInitialState()
)

export const articlesPageListSlice = createSlice({
  name: 'articles-page-list',
  initialState: articlesAdapter.getInitialState<ArticlesPageListSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.TILE,
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload)
    },
    initState: (state) => {
      state.view =
        (localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView | null) ||
        ArticleView.TILE
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articlesPageListActions, reducer: articlesPageListReducer } =
  articlesPageListSlice
