import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/store-provider'
import { CommentItem } from '@/entities/comment'

export const fetchCommentsByArticle = createAsyncThunk<CommentItem[], string, ThunkConfig<string>>(
  'article-comment-list/fetchCommentsByArticle',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!articleId) {
      rejectWithValue('id not passed')
    }

    try {
      const { data } = await extra.api.get<CommentItem[]>('/comments/', {
        params: {
          articleId,
          _expand: 'user',
        },
      })

      // for test mock data
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!data) {
        // eslint-disable-next-line unicorn/error-message
        throw new Error()
      }

      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue("Couldn't login")
    }
  }
)
