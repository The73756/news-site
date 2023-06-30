import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from '@/entities/user'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage'

interface LoginByUsernamePayload {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernamePayload,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const { data } = await axios.post<User>('http://localhost:5000/login', authData)

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))
    thunkAPI.dispatch(userActions.setAuthData(data))

    return data
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue("Couldn't login")
  }
})
