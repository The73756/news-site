import { StateSchema } from '@/app/providers/store-provider'
import { getAddCommentFormError, getAddCommentFormText } from './add-comment-form'

describe('add-comment-form', () => {
  test('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'text',
      },
    }
    expect(getAddCommentFormText(state as StateSchema)).toEqual('text')
  })

  test('should work with empty state text', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined)
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    }
    expect(getAddCommentFormError(state as StateSchema)).toEqual('error')
  })

  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined)
  })
})
