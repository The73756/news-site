import { StateSchema } from '@/app/providers/store-provider'
import { getLoginUsername } from './get-login-username'

describe('get-login-username', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
