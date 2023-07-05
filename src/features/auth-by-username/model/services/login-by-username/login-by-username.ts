import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/store-provider'
import { User, userActions } from '@/entities/user'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage'

interface LoginByUsernamePayload {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernamePayload, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.post<User>('/login', authData)

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))

      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue("Couldn't login")
    }
  }
)
