import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'

const button = cva('btn', {
  variants: {
    shape: {
      default: [],
      rounded: 'btn-circle',
    },
    size: {
      default: [],
      large: 'btn-xl text-xl',
      small: 'btn-sm text-sx',
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
