import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '@/features/auth-by-username'
import { LoginSchema } from '../types/login-schema'

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<LoginSchema['username']>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<LoginSchema['password']>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
