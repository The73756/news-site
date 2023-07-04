import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/store-provider'
import { getLoginError } from './get-login-error'

describe('get-login-error', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'some error',
      },
    }
    expect(getLoginError(state as StateSchema)).toEqual('some error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual('')
  })
})
