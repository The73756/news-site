import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProfileCard } from '@/entities/profile'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from '../../model'

const reducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCard = () => {
  const dispatch = useAppDispatch()
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfileCard data={data} error={error} isLoading={isLoading} />
    </DynamicModuleLoader>
  )
}
