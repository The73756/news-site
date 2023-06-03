import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'

const button = cva('btn', {
  variants: {
    shape: {
      rounded: ['btn-circle'],
      default: [''],
    },
    size: {
      normal: [''],
      large: ['btn-xl text-xl'],
      small: ['btn-sm text-sm'],
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
    </button>
  )
}
