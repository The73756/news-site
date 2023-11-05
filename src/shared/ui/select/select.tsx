import { ChangeEvent, memo, SelectHTMLAttributes, useMemo } from 'react'
import { cls } from '@/shared/lib/class-names'

type HTMLSelectElementProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'disabled'
>

interface SelectOption {
  value: string
  content: string
}

interface SelectProps extends HTMLSelectElementProps {
  className?: string
  label?: string
  options: SelectOption[]
  value?: string
  readonly?: boolean
  onChange: (value: string) => void
}

export const Select = memo(
  ({ className, label, options, value, onChange, readonly, ...props }: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value)
    }

    const optionList = useMemo(() => {
      return options.map((el) => (
        <option key={el.value} value={el.value}>
          {el.content}
        </option>
      ))
    }, [options])

    return (
      <div className={cls('', {}, [className])}>
        {label && <span className="label-text mb-1 block">{label}</span>}
        <select
          {...props}
          disabled={readonly}
          onChange={onChangeHandler}
          value={value}
          className="select-bordered select w-full"
        >
          {optionList}
        </select>
      </div>
    )
  }
)
