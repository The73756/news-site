import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '@/entities/user'

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
    return data
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue('error')
  }
})
