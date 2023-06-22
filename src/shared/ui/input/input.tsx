import { ChangeEvent, InputHTMLAttributes, memo } from 'react'
import { cls } from '@/shared/lib/class-names'

type HTMLInputElementProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends HTMLInputElementProps {
  className?: string
  onChange?: (value: string) => void
  value?: string
}

export const Input = memo((props: InputProps) => {
  const { className, onChange, value } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      {...props}
      className={cls('input-bordered input', {}, [className])}
      value={value}
      onChange={onChangeHandler}
    />
  )
})
