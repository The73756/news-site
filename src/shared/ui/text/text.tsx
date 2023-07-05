import { cva, VariantProps } from 'class-variance-authority'
import { memo } from 'react'

const textVariants = cva('', {
  variants: {
    theme: {
      default: '',
      error: 'text-error',
    },
    titleSize: {
      default: 'text-lg',
      xl: 'text-xl',
    },
    textSize: {
      default: 'opacity-80',
      xl: 'text-lg opacity-80',
    },
  },

  defaultVariants: {
    theme: 'default',
  },
})

interface TextProps extends VariantProps<typeof textVariants> {
  className?: string
  text?: string
  title?: string
}

export const Text = memo(({ className, text, title, theme, textSize, titleSize }: TextProps) => {
  return (
    <div className={textVariants({ theme, className })}>
      {title && <div className={textVariants({ titleSize })}>{title}</div>}
      {text && <div className={textVariants({ textSize })}>{text}</div>}
    </div>
  )
})
