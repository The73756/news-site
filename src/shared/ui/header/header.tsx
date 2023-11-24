import { cva, VariantProps } from 'class-variance-authority'
import { memo, PropsWithChildren } from 'react'
import { cls } from '@/shared/lib/class-names'

export enum HeaderLevelClasses {
  H1 = 'text-5xl',
  H2 = 'text-4xl',
  H3 = 'text-3xl',
  H4 = 'text-2xl',
  H5 = 'text-xl',
  H6 = 'text-lg',
}

export enum HeaderWeightClasses {
  NORMAL = 'font-normal',
  BOLD = 'font-bold',
  SEMIBOLD = 'font-semibold',
  EXTRABOLD = 'font-extrabold',
  AUTO = '',
}

const headerVariants = cva('', {
  variants: {
    level: {
      h1: HeaderLevelClasses.H1,
      h2: HeaderLevelClasses.H2,
      h3: HeaderLevelClasses.H3,
      h4: HeaderLevelClasses.H4,
      h5: HeaderLevelClasses.H5,
      h6: HeaderLevelClasses.H6,
    },
    weight: {
      normal: HeaderWeightClasses.NORMAL,
      bold: HeaderWeightClasses.BOLD,
      semibold: HeaderWeightClasses.SEMIBOLD,
      extrabold: HeaderWeightClasses.EXTRABOLD,
      auto: HeaderWeightClasses.AUTO,
    },
  },
  compoundVariants: [
    {
      level: 'h1',
      weight: 'auto',
      className: HeaderWeightClasses.BOLD,
    },
    {
      level: 'h2',
      weight: 'auto',
      className: HeaderWeightClasses.SEMIBOLD,
    },
    {
      level: 'h3',
      weight: 'auto',
      className: HeaderWeightClasses.SEMIBOLD,
    },
    {
      level: 'h4',
      weight: 'auto',
      className: HeaderWeightClasses.SEMIBOLD,
    },
    {
      level: 'h5',
      weight: 'auto',
      className: HeaderWeightClasses.SEMIBOLD,
    },
    {
      level: 'h6',
      weight: 'auto',
      className: HeaderWeightClasses.SEMIBOLD,
    },
  ],
  defaultVariants: {
    weight: 'auto',
  },
})
type HeaderVariantProps = VariantProps<typeof headerVariants>

interface HeaderProps
  extends Omit<HeaderVariantProps, 'level'>,
    Required<Pick<HeaderVariantProps, 'level'>> {
  className?: string
  custom?: true
}

export const Header = memo(
  ({ className, level, weight, children, custom }: PropsWithChildren<HeaderProps>) => {
    const Tag = level || 'h2'
    const headerClasses = custom
      ? className
      : cls(headerVariants({ level, weight }), {}, [className])

    return <Tag className={headerClasses}>{children}</Tag>
  }
)
