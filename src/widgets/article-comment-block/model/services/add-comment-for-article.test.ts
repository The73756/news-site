import axios from 'axios'
import { TestAsyncThunk } from '@/shared/lib/tests'
import { addCommentForArticle } from './add-comment-for-article'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const user = {
  id: '1',
  username: 'admin',
  avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
}

const data = {
  ids: ['1'],
  entities: {
    '1': {
      id: '1',
      text: 'some comment',
      articleId: '1',
      user,
      createdAt: 1700825044653,
    },
  },
}

describe('add-comment-for-article', () => {
  test('successful add comment', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data }))

    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: user,
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
      articleDetailsComments: {
        ids: [],
        entities: {},
      },
    })
    const result = await thunk.callThunk('1')

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(data)
  })

  test('error add comment', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject('error'))

    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: user,
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
      articleDetailsComments: {
        ids: [],
        entities: {},
      },
    })
    const result = await thunk.callThunk('1')

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe("Couldn't login")
  })
})
