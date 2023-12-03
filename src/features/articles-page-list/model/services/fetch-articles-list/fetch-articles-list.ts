import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/store-provider'
import { Article } from '@/entities/article'

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'article-comment-list/fetchCommentsByArticle',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
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
