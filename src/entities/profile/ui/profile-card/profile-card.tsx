import { cva } from 'class-variance-authority'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Input, Loader, Text } from '@/shared/ui'
import { ProfileSchema } from '../../model'

interface ProfileCardProps extends ProfileSchema {
  className?: string
  onChangeFirstname: (value?: string) => void
  onChangeLastname: (value?: string) => void
}

const profileClasses = cva('rounded-lg h-1/2 border border-base-content p-4', {
  variants: {
    isExcept: {
      true: 'flex items-center justify-center',
    },
  },
})

export const ProfileCard = ({
  className,
  data,
  isLoading,
  readonly,
  error,
  onChangeLastname,
  onChangeFirstname,
}: ProfileCardProps) => {
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
      <div className="flex max-w-xl flex-col gap-4">
        <label>
          <span className="label-text mb-1 block">{t('Ваше имя')}</span>
          <Input
            value={data?.first}
            placeholder={t('Иван')}
            readOnly={readonly}
            onChange={onChangeFirstname}
          />
        </label>
        <label>
          <span className="label-text mb-1 block">{t('Ваша фамилия')}</span>
          <Input
            value={data?.lastname}
            placeholder={t('Иванов')}
            readOnly={readonly}
            onChange={onChangeLastname}
          />
        </label>
      </div>
    </div>
  )
}
