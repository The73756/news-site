import { cva } from 'class-variance-authority'
import { useTranslation } from 'react-i18next'
import { Country, CountrySelect } from '@/entities/country'
import { Currency, CurrencySelect } from '@/entities/currency'
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
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

const profileVariants = cva('rounded-lg h-1/2 min-h-[400px]  border border-base-content p-4', {
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
  onChangeCurrency,
  onChangeCountry,
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
      <div className="mb-4 flex items-center justify-center">
        {data?.avatar && (
          <Avatar
            src={data.avatar}
            alt={`${t('Изображение профиля для')} ${data.username}`}
            size={200}
          />
        )}
      </div>
      <div className="flex  gap-10">
        <div className="flex basis-1/2 flex-col gap-4">
          <InputWithLabel
            label={t('Ваш аватар')}
            placeholder="https://..."
            value={data?.avatar}
            readonly={readonly}
            onChange={onChangeAvatar}
            className="w-full"
          />
          <InputWithLabel
            label={t('Ваше имя пользователя')}
            placeholder="username"
            value={data?.username}
            readonly={readonly}
            onChange={onChangeUsername}
            className="w-full"
          />
          <InputWithLabel
            label={t('Ваше имя')}
            placeholder={t('Иван')}
            value={data?.first}
            readonly={readonly}
            onChange={onChangeFirstname}
            className="w-full"
          />
          <InputWithLabel
            label={t('Ваша фамилия')}
            placeholder={t('Иванов')}
            value={data?.lastname}
            readonly={readonly}
            onChange={onChangeLastname}
            className="w-full"
          />
          <InputWithLabel
            label={t('Ваш возраст')}
            placeholder="21"
            value={data?.age}
            readonly={readonly}
            onChange={onChangeAge}
            className="w-full"
          />
          <InputWithLabel
            label={t('Город')}
            placeholder={t('Москва')}
            value={data?.city}
            readonly={readonly}
            onChange={onChangeCity}
            className="w-full"
          />
        </div>

        <div className="flex basis-1/2 flex-col gap-4">
          <CountrySelect
            readonly={readonly}
            value={data?.country || Country.RUSSIA}
            onChange={onChangeCountry}
            className="w-full"
          />
          <CurrencySelect
            readonly={readonly}
            value={data?.currency || Currency.RUB}
            onChange={onChangeCurrency}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
