import { StateSchema } from '@/app/providers/store-provider'
import { getProfileReadonly } from './get-profile-readonly'

describe('get-profile-readonly', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(false)
  })
})
