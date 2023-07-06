import { cva, VariantProps } from 'class-variance-authority'
import { memo } from 'react'

const textVariants = cva('', {
  variants: {
    theme: {
      error: 'text-error',
    },
    titleSize: {
      default: 'text-xl',
      xl: 'text-2xl',
    },
    textSize: {
      default: 'opacity-80',
      xl: 'text-lg opacity-80',
    },
    align: {
      center: 'text-center',
      right: 'text-right',
      left: 'text-left',
    },
  },
})

interface TextProps extends VariantProps<typeof textVariants> {
  className?: string
  text?: string
  title?: string
}

export const Text = memo(
  ({ className, text, title, theme, textSize, titleSize, align }: TextProps) => {
    return (
      <div className={textVariants({ theme, className, align })}>
        {title && <div className={textVariants({ titleSize })}>{title}</div>}
        {text && <div className={textVariants({ textSize })}>{text}</div>}
      </div>
    )
  }
)
