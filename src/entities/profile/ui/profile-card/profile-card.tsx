import { cva } from 'class-variance-authority'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Avatar, Loader, Text } from '@/shared/ui'
import { InputWithLabel } from '@/shared/ui/input'
import { ProfileSchema } from '../../model'

interface ProfileCardProps extends ProfileSchema {
  className?: string
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
}

const profileVariants = cva('rounded-lg h-1/2 border border-base-content p-4', {
  variants: {
    isExcept: {
      true: 'flex items-center justify-center',
    },
    isEditing: {
      true: 'border-error',
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
  onChangeAvatar,
  onChangeUsername,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={cls(profileVariants({ isExcept: isLoading }), {}, [className])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={cls(profileVariants({ isExcept: Boolean(error) }), {}, [className])}>
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
    <div className={cls(profileVariants({ isEditing: !readonly }), {}, [className])}>
      <div className="flex max-w-xl flex-col gap-4 ">
        <div className="flex items-center justify-center">
          {data?.avatar && (
            <Avatar
              src={data.avatar}
              alt={`${t('Изображение профиля для')} ${data.username}`}
              size={200}
            />
          )}
        </div>

        <InputWithLabel
          label={t('Ваш аватар')}
          placeholder="https://..."
          value={data?.avatar}
          readOnly={readonly}
          onChange={onChangeAvatar}
        />
        <InputWithLabel
          label={t('Ваше имя пользователя')}
          placeholder="username"
          value={data?.username}
          readOnly={readonly}
          onChange={onChangeUsername}
        />
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
