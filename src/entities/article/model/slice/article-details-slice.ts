import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services'
import { Article } from '../types/article'
import { ArticleDetailsSchema } from '../types/article-details-schema'

const initialState: ArticleDetailsSchema = {
  isLoading: true,
  data: undefined,
  error: undefined,
}

export const articleDetailsSlice = createSlice({
  name: 'article-details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } =
  articleDetailsSlice
