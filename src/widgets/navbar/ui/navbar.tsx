import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { AppLink } from '@/shared/ui'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <nav className={cls('navbar h-navbar bg-base-300 px-8', {}, [className])} data-testid="navbar">
      <ul className="w-full">
        <li className="flex-1">
          <AppLink to="/" className="btn-ghost btn text-xl normal-case">
            {t('Новостной сайт')}
          </AppLink>
        </li>
      </ul>
    </nav>
  )
}
