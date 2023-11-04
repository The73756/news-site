import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/store-provider'
import { Profile } from '@/entities/profile'
import { getProfileForm } from '../../selectors'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    try {
      const { data } = await extra.api.put<Profile>('/profile', formData)
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue("Couldn't login")
    }
  }
)
