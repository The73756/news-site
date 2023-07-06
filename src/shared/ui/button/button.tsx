import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const button = cva('btn', {
  variants: {
    shape: {
      rounded: 'btn-circle',
    },
    size: {
      large: 'btn-xl text-xl',
      small: 'btn-sm text-sx',
    },
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({ className, children, shape, size, ...props }: ButtonProps) => {
  return (
    <button className={button({ shape, size, className })} {...props}>
      {children}
    </button>
  )
}
