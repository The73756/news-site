import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { ProfileCard, ValidateProfileError } from '@/entities/profile'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { Text } from '@/shared/ui'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from '../../model'

const reducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCard = () => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Произошла ошибка сервера'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Пожалуйста, выберите корректную страну'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Пожалуйста, укажите корректное имя и фамилию'),
    [ValidateProfileError.INCORRECT_AGE]: t('Пожалуйста, введите корректный возраст'),
    [ValidateProfileError.NO_DATA]: t('Пожалуйста, заполните все поля'),
    [ValidateProfileError.INCORRECT_USERNAME]: t(
      'Имя пользователя должно содержать минимум два символа'
    ),
  }

  useInitialEffect(() => dispatch(fetchProfileData()))

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch]
  )

  const onChangeAge = useCallback(
    (value?: string) => {
      if (value && !/\d+$/.test(value)) return

      dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    },
    [dispatch]
  )

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch]
  )

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch]
  )

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch]
  )

  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }))
    },
    [dispatch]
  )

  const onChangeCountry = useCallback(
    (value: Country) => {
      dispatch(profileActions.updateProfile({ country: value }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers}>
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text key={err} text={validateErrorTranslates[err]} theme="error" />
        ))}
      <ProfileCard
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeCity={onChangeCity}
        onChangeAge={onChangeAge}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
        data={formData}
        error={error}
        isLoading={isLoading}
        readonly={readonly}
      />
    </DynamicModuleLoader>
  )
}
