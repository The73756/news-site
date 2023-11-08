import { StateSchema } from '@/app/providers/store-provider'
import { ValidateProfileError } from '@/entities/profile'
import { getProfileValidateErrors } from './get-profile-validate-errors'

describe('get-profile-validate-errors', () => {
  test('should return error', () => {
    const validateErrors: ValidateProfileError[] = [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_USERNAME,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
