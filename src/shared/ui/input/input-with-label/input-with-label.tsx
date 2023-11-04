import { memo } from 'react'
import { Input, InputProps } from '../input'

interface InputWithLabelProps extends InputProps {
  label: string
}

export const InputWithLabel = memo((props: InputWithLabelProps) => {
  const { label } = props

  return (
    <label>
      <span className="label-text mb-1 block">{label}</span>
      <Input {...props} />
    </label>
  )
})
