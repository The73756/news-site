import axios from 'axios'
import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { ValidateProfileError } from '@/entities/profile'
import { TestAsyncThunk } from '@/shared/lib/tests'
import { updateProfileData } from './update-profile-data'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)
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

describe('update-profile-data', () => {
  test('successful update data', async () => {
    mockedAxios.put.mockReturnValue(Promise.resolve({ data }))

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    const result = await thunk.callThunk()

    expect(mockedAxios.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error update data', async () => {
    mockedAxios.put.mockReturnValue(Promise.reject({ status: 403 }))

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})
