import { StateSchema } from '@/app/providers/store-provider'
import { getUserAuthData } from './get-user-auth-data'

describe('get-user-auth-data', () => {
  test('should return authData', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
      },
    }
    expect(getUserAuthData(state as StateSchema)).toEqual(state.user?.authData)
  })
})
