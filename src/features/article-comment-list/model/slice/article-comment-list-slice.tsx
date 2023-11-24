import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/store-provider'
import { CommentItem } from '@/entities/comment'
import { ArticleCommentListSchema, fetchCommentsByArticle } from '..'

const commentsAdapter = createEntityAdapter<CommentItem>({
  selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleCommentListSlice = createSlice({
  name: 'article-details-comment-slice',
  initialState: commentsAdapter.getInitialState<ArticleCommentListSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticle.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticle.fulfilled, (state, action: PayloadAction<CommentItem[]>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticle.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleCommentsListReducer } = articleCommentListSlice
