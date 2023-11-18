import { cva, VariantProps } from 'class-variance-authority'
import { memo } from 'react'
import { cls } from '@/shared/lib/class-names'

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
    titleWeight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
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
  titleClassName?: string
  textClassName?: string
  text?: string
  title?: string
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme,
    titleClassName,
    textClassName,
    textSize,
    titleSize,
    titleWeight,
    align,
  } = props

  const titleClasses = cls(textVariants({ titleSize, titleWeight }), {}, [titleClassName])
  const textClasses = cls(textVariants({ textSize }), {}, [textClassName])
  return (
    <div className={textVariants({ theme, className, align })}>
      {title && <div className={titleClasses}>{title}</div>}
      {text && <div className={textClasses}>{text}</div>}
    </div>
  )
})
