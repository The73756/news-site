import axios from 'axios'
import { userActions } from '@/entities/user'
import { TestAsyncThunk } from '@/shared/lib/tests'
import { loginByUsername } from './login-by-username'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('login-by-username', () => {
  test('successful login', async () => {
    const userValue = { username: 'admin', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'admin', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'admin', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe("Couldn't login")
  })
})
