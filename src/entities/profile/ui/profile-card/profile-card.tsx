import { cva } from 'class-variance-authority'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Button, Input, Loader, Text } from '@/shared/ui'
import { ProfileSchema } from '../../model'

interface ProfileCardProps extends ProfileSchema {
  className?: string
}

const profileClasses = cva('rounded-lg h-1/2 border border-base-content p-4', {
  variants: {
    isExcept: {
      true: 'flex items-center justify-center',
    },
  },
})

export const ProfileCard = ({ className, data, isLoading, error }: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={cls(profileClasses({ isExcept: isLoading }), {}, [className])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={cls(profileClasses({ isExcept: Boolean(error) }), {}, [className])}>
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          textSize="xl"
          titleSize="xl"
          theme="error"
          align="center"
        />
      </div>
    )
  }

  return (
    <div className={cls(profileClasses(), {}, [className])}>
      <div className="mb-4 flex justify-between">
        <Text titleSize="xl" title={t('Профиль')} />
        <Button className="btn-outline text-lg normal-case">{t('Редактировать')}</Button>
      </div>
      <div className="flex max-w-xl flex-col gap-2">
        <Input value={data?.first} placeholder={t('Ваше имя')} />
        <Input value={data?.lastname} placeholder={t('Ваша фамилия')} />
      </div>
    </div>
  )
}
