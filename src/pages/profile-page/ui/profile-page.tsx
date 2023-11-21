import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { EditableProfileCard } from '@/features/editable-profile-card'
import { ProfilePageHeader } from '@/pages/profile-page/ui/profile-page-header/profile-page-header'

const ProfilePage = () => {
  const { id } = useParams()
  const { t } = useTranslation('profile')

  if (!id) {
    return <div>{t('Профиль не найден')}</div>
  }

  return (
    <div className="">
      <ProfilePageHeader />
      <EditableProfileCard id={id} />
    </div>
  )
}

export default ProfilePage
