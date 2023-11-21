import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/store-provider'
import { Profile } from '@/entities/profile'

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!id) {
      rejectWithValue('id not passed')
    }

    try {
      const { data } = await extra.api.get<Profile>('/profile/' + id)

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
