import { cva } from 'class-variance-authority'
import { ChangeEvent, InputHTMLAttributes, memo } from 'react'
import { cls } from '@/shared/lib/class-names'

type HTMLInputElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly'
>

export interface InputProps extends HTMLInputElementProps {
  className?: string
  onChange?: (value: string) => void
  value?: string | number
  readOnly?: boolean
}

const inputClasses = cva('input-bordered input', {
  variants: {
    readOnly: {
      true: 'opacity-80 focus:outline-none',
    },
  },
})

export const Input = memo((props: InputProps) => {
  const { className, onChange, value, readOnly } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      {...props}
      className={cls(inputClasses({ readOnly }), {}, [className])}
      value={String(value)}
      readOnly={readOnly}
      onChange={onChangeHandler}
    />
  )
})
