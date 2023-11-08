import axios from 'axios'
import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { TestAsyncThunk } from '@/shared/lib/tests'
import { fetchProfileData } from './fetch-profile-data'

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

describe('fetch-profile-data', () => {
  test('successful fetch data', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data }))

    const thunk = new TestAsyncThunk(fetchProfileData)
    const result = await thunk.callThunk()

    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error fetch data', async () => {
    mockedAxios.get.mockReturnValue(Promise.reject({ status: 403 }))

    const thunk = new TestAsyncThunk(fetchProfileData)
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
