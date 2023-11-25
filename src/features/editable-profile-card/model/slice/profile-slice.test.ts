import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { ProfileSchema, ValidateProfileError } from '@/entities/profile'
import { updateProfileData } from '../services'
import { profileActions, profileReducer } from './profile-slice'

const data = {
  username: 'admin',
  lastname: '73756',
  first: 'the',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
  age: 10,
  city: 'Москва',
}

const updatedData = {
  username: 'tested',
  lastname: 'tested',
  first: 'tested',
  country: Country.KAZAKHSTAN,
  currency: Currency.EUR,
  city: 'Test',
  age: 80,
  avatar: 'https//...',
}

describe('profile-slice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    })
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    })
  })

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: data }

    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile(updatedData))
    ).toEqual({ data, form: updatedData })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '', '1'))
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    })
  })
})
