import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileError, getProfileIsLoading } from '@/entities/profile'
import { cls } from '@/shared/lib/class-names'
import { Button, Input, Text } from '@/shared/ui'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (
    <div className={cls('max-w-lg rounded-lg border border-base-content p-4', {}, [className])}>
      <div className="mb-4 flex justify-between">
        <Text titleSize="xl" title={t('Профиль')} />
        <Button className="btn-outline text-lg normal-case">{t('Редактировать')}</Button>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        <Input value={data?.first} placeholder={t('Ваше имя')} />
        <Input value={data?.lastname} placeholder={t('Ваша фамилия')} />
      </div>
    </div>
  )
}
