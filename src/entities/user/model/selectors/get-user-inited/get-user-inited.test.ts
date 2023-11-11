import { StateSchema } from '@/app/providers/store-provider'
import { getUserInited } from './get-user-inited'

describe('get-user-auth-data', () => {
  test('should return inited', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
      },
    }
    expect(getUserInited(state as StateSchema)).toEqual(true)
  })
})
