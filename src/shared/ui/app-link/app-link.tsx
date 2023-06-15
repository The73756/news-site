import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { cls } from '@/shared/lib/class-names'

interface AppLinkProps extends LinkProps {
  className?: string
}

export const AppLink: FC<AppLinkProps> = ({ className, children, ...props }) => {
  return (
    <Link {...props} className={cls('link', {}, [className])}>
      {children}
    </Link>
  )
}
