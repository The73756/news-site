import { cva } from 'class-variance-authority'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Loader, Text } from '@/shared/ui'
import { InputWithLabel } from '@/shared/ui/input'
import { ProfileSchema } from '../../model'

interface ProfileCardProps extends ProfileSchema {
  className?: string
  onChangeFirstname: (value?: string) => void
  onChangeLastname: (value?: string) => void
  onChangeCity: (value?: string) => void
  onChangeAge: (value?: string) => void
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
  onChangeAge,
  onChangeCity,
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
        <InputWithLabel
          label={t('Ваше имя')}
          placeholder={t('Иван')}
          value={data?.first}
          readOnly={readonly}
          onChange={onChangeFirstname}
        />
        <InputWithLabel
          label={t('Ваша фамилия')}
          placeholder={t('Иванов')}
          value={data?.lastname}
          readOnly={readonly}
          onChange={onChangeLastname}
        />
        <InputWithLabel
          label={t('Ваш возраст')}
          placeholder="21"
          value={data?.age}
          readOnly={readonly}
          onChange={onChangeAge}
        />
        <InputWithLabel
          label={t('Город')}
          placeholder={t('Москва')}
          value={data?.city}
          readOnly={readonly}
          onChange={onChangeCity}
        />
      </div>
    </div>
  )
}
