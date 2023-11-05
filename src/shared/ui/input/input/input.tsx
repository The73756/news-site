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
  readonly?: boolean
}

const inputVariants = cva('input-bordered input', {
  variants: {
    readonly: {
      true: 'opacity-80 focus:outline-none',
    },
  },
})

export const Input = memo(({ className, onChange, value, readonly, ...props }: InputProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      {...props}
      className={cls(inputVariants({ readonly }), {}, [className])}
      value={String(value)}
      readOnly={readonly}
      onChange={onChangeHandler}
    />
  )
})
