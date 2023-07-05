import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/profile'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = () => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  )
}

export default ProfilePage
