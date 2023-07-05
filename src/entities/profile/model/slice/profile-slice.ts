import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action) => {},
  },
})

export const { actions: profileActions, reducer: profileReducer } = ProfileSlice
