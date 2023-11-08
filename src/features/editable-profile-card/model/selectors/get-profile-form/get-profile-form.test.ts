import { StateSchema } from '@/app/providers/store-provider'
import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { getProfileForm } from './get-profile-form'

describe('get-profile-form', () => {
  test('should return error', () => {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
