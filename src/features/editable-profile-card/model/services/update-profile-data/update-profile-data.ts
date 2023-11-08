import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/store-provider'
import { Profile, ValidateProfileError } from '@/entities/profile'
import { getProfileForm } from '../../selectors'
import { validateProfileData } from '../validate-profile-data/validate-profile-data'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI

  const formData = getProfileForm(getState())

  const errors = validateProfileData(formData)

  if (errors.length > 0) {
    return rejectWithValue(errors)
  }

  try {
    const { data } = await extra.api.put<Profile>('/profile', formData)

    // for test mock data
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!data) {
      // eslint-disable-next-line unicorn/error-message
      throw new Error()
    }

    return data
  } catch (error) {
    console.log(error)
    return rejectWithValue([ValidateProfileError.SERVER_ERROR])
  }
})
