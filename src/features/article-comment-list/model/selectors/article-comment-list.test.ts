import { StateSchema } from '@/app/providers/store-provider'
import { getArticleCommentListError, getArticleCommentListIsLoading } from './article-comment-list'

describe('article-comment-list', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    }
    expect(getArticleCommentListIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleCommentListIsLoading(state as StateSchema)).toEqual(undefined)
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error',
      },
    }
    expect(getArticleCommentListError(state as StateSchema)).toEqual('error')
  })

  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleCommentListError(state as StateSchema)).toEqual(undefined)
  })
})
