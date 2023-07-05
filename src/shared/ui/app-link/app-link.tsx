import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { cls } from '@/shared/lib/class-names'

interface AppLinkProps extends LinkProps {
  className?: string
  children?: ReactNode
}

export const AppLink = ({ className, children, ...props }: AppLinkProps) => {
  return (
    <Link {...props} className={cls('link-hover text-lg', {}, [className])}>
      {children}
    </Link>
  )
}
