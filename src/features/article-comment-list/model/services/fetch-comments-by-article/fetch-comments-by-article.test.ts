import axios from 'axios'
import { TestAsyncThunk } from '@/shared/lib/tests'
import { fetchCommentsByArticle } from './fetch-comments-by-article'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('fetch-article-by-username', () => {
  test('successful fetch', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data: 'data' }))

    const thunk = new TestAsyncThunk(fetchCommentsByArticle)
    const result = await thunk.callThunk('1')

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe('data')
  })

  test('error fetch', async () => {
    mockedAxios.get.mockReturnValue(Promise.reject(new Error('error')))

    const thunk = new TestAsyncThunk(fetchCommentsByArticle)
    const result = await thunk.callThunk('1')

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe("Couldn't login")
  })
})
