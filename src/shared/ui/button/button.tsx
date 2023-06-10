import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { tw } from 'typewind'

const button = cva(tw.btn, {
  variants: {
    shape: {
      rounded: ['btn-circle'],
      default: [],
    },
    size: {
      normal: [],
      large: [tw.btn_xl.text_xl],
      small: [tw.btn_sm.text_sm],
    },
  },
  compoundVariants: [{ shape: 'default', size: 'normal' }],
  defaultVariants: {
    shape: 'default',
    size: 'normal',
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({ className, children, shape, size, ...props }) => {
  return (
    <button className={button({ shape, size, className })} {...props}>
      {children}
      <div className="w-0.5" />
    </button>
  )
}
