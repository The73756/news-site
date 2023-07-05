import { useTranslation } from 'react-i18next'
import { profileReducer } from '@/entities/profile'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = () => {
  const { t } = useTranslation('profile')
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>{t('Профиль')}</div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
