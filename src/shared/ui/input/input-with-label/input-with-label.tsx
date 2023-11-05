import { memo } from 'react'
import { Input, InputProps } from '../input'

interface InputWithLabelProps extends InputProps {
  label: string
}

export const InputWithLabel = memo(({ label, ...props }: InputWithLabelProps) => {
  return (
    <label>
      <span className="label-text mb-1 block">{label}</span>
      <Input {...props} />
    </label>
  )
})
