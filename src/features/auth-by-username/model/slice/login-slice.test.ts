import { LoginSchema } from '../types/login-schema'
import { loginActions, loginReducer } from './login-slice'

describe('login-slice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('Not a admin'))).toEqual({
      username: 'Not a admin',
    })
  })

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('321'))).toEqual({
      password: '321',
    })
  })
})
