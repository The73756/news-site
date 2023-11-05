import { EditableProfileCard } from '@/features/editable-profile-card'
import { ProfilePageHeader } from '@/pages/profile-page/ui/profile-page-header/profile-page-header'

const ProfilePage = () => {
  return (
    <div className="">
      <ProfilePageHeader />
      <EditableProfileCard />
    </div>
  )
}

export default ProfilePage
