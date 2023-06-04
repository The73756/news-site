import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { tw } from 'typewind'
import { cls } from '@/shared/lib'

interface AppLinkProps extends LinkProps {
  className?: string
}

export const AppLink: FC<AppLinkProps> = ({ className, children, ...props }) => {
  return (
    <Link {...props} className={cls(tw.link, {}, [className])}>
      {children}
    </Link>
  )
}
