import { Profile, ValidateProfileError } from '@/entities/profile'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const { first, lastname, age, country, username } = profile
  const errors: ValidateProfileError[] = []

  if (!username || username.trim().length < 3) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME)
  }

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age) || Number(age) > 100 || Number(age) < 0) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY)
  }

  return errors
}
