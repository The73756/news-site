import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProfileCard } from '@/entities/profile'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
} from '../../model'

const reducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCard = () => {
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

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

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfileCard
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        data={formData}
        error={error}
        isLoading={isLoading}
        readonly={readonly}
      />
    </DynamicModuleLoader>
  )
}
