import { AddCommentFormSchema } from '../types/add-comment-form'
import { addCommentFormActions, addCommentFormReducer } from './add-comment-form-slice'

describe('add-comment-form', () => {
  test('test set text', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: '' }
    expect(
      addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('text'))
    ).toEqual({
      text: 'text',
    })
  })

  test('test set error', () => {
    const state: DeepPartial<AddCommentFormSchema> = { error: '' }
    expect(
      addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setError('Error!'))
    ).toEqual({
      error: 'Error!',
    })
  })
})
