import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Select } from '@/shared/ui'
import { Country } from '../../model'

interface CountrySelectProps {
  className?: string
  value: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

export const CountrySelect = memo(
  ({ className, onChange, value, readonly }: CountrySelectProps) => {
    const { t } = useTranslation()

    const options = useMemo(() => {
      return [
        { value: Country.RUSSIA, content: t(Country.RUSSIA) },
        { value: Country.BELARUS, content: t(Country.BELARUS) },
        { value: Country.ARMENIA, content: t(Country.ARMENIA) },
        { value: Country.KAZAKHSTAN, content: t(Country.KAZAKHSTAN) },
      ]
    }, [t])

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country)
      },
      [onChange]
    )

    return (
      <Select
        label={t('Укажите страну')}
        readonly={readonly}
        onChange={onChangeHandler}
        value={value}
        options={options}
        className={cls('', {}, [className])}
      />
    )
  }
)
