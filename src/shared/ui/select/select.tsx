import { ChangeEvent, memo, useMemo } from 'react'
import { cls } from '@/shared/lib/class-names'

interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options: SelectOption[]
  value?: string
  onChange: (value: string) => void
}

export const Select = memo(({ className, label, options, value, onChange }: SelectProps) => {
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
    <div className={cls('flex items-center gap-2', {}, [className])}>
      {label && <span>{label}</span>}
      <select onChange={onChangeHandler} value={value} className="select-bordered select">
        {optionList}
      </select>
    </div>
  )
})
