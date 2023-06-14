import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { tw } from 'typewind'

const button = cva(tw.btn, {
  variants: {
    shape: {
      default: [],
      rounded: ['btn-circle'],
    },
    size: {
      default: [],
      large: [tw.btn_xl.text_xl],
      small: [tw.btn_sm.text_sm],
    },
  },
  compoundVariants: [{ shape: 'default', size: 'default' }],
  defaultVariants: {
    shape: 'default',
    size: 'default',
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({ className, children, shape, size, ...props }) => {
  return (
    <button className={button({ shape, size, className })} {...props}>
      {children}
    </button>
  )
}
