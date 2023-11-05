import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Select } from '@/shared/ui'
import { Currency } from '../../model'

interface CurrencySelectProps {
  className?: string
  value: Currency
  onChange: (value: Currency) => void
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(({ className, onChange, value }: CurrencySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange(value as Currency)
    },
    [onChange]
  )

  return (
    <Select
      label={t('Укажите валюту')}
      onChange={onChangeHandler}
      value={value}
      options={options}
      className={cls('', {}, [className])}
    />
  )
})
