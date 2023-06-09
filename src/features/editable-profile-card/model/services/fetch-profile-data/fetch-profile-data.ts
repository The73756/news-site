import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/store-provider'
import { Profile } from '@/entities/profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.get<Profile>('/profile')
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue("Couldn't login")
    }
  }
)
