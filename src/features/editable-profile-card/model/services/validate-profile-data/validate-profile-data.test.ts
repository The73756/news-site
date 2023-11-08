import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { ValidateProfileError } from '@/entities/profile'
import { validateProfileData } from './validate-profile-data'

jest.mock('axios')

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

describe('validate-profile-data', () => {
  test('successful', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('without first name', async () => {
    const result = validateProfileData({ ...data, first: '' })

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('without age', async () => {
    const result = validateProfileData({ ...data, age: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('with incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 120 })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('with no data', async () => {
    const result = validateProfileData()

    expect(result).toEqual([ValidateProfileError.NO_DATA])
  })

  test('with no country', async () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('with incorrect all', async () => {
    const result = validateProfileData({
      ...data,
      age: 123,
      first: undefined,
      lastname: undefined,
      username: '',
      country: undefined,
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USERNAME,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
