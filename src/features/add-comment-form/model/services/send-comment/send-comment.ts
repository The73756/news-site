import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/store-provider'
import { getArticleDetails } from '@/entities/article'
import { CommentItem } from '@/entities/comment'
import { getUserAuthData } from '@/entities/user'
import { addCommentFormActions } from '@/features/add-comment-form/model'
import { getAddCommentFormText } from '../../selectors'

export const sendComment = createAsyncThunk<CommentItem, void, ThunkConfig<string>>(
  'add-comment-form/send-comment',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI

    const userData = getUserAuthData(getState())
    const text = getAddCommentFormText(getState())
    const article = getArticleDetails(getState())
    const date = new Date().getTime()

    if (!userData || !text || !article) {
      return rejectWithValue("Couldn't login")
    }

    try {
      const { data } = await extra.api.post<CommentItem>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
        createdAt: date,
      })

      // for test mock data
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!data) {
        // eslint-disable-next-line unicorn/error-message
        throw new Error()
      }

      dispatch(addCommentFormActions.setText(''))

      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue("Couldn't login")
    }
  }
)
