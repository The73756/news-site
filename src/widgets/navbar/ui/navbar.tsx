import { useTranslation } from 'react-i18next'
import { tw } from 'typewind'
import { cls } from '@/shared/lib/class-names'
import { AppLink } from '@/shared/ui'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <nav className={cls(tw.bg_base_300.h_navbar.navbar.px_8, {}, [className])} data-testid="navbar">
      <ul className={tw.w_full}>
        <li className={tw.flex_1}>
          <AppLink to="/" className={tw.btn.btn_ghost.normal_case.text_xl}>
            {t('Новостной сайт')}
          </AppLink>
        </li>
        <li>
          <AppLink to="/" className={tw.mr_2}>
            {t('Главная')}
          </AppLink>
          <AppLink to="/about">{t('О сайте')}</AppLink>
        </li>
      </ul>
    </nav>
  )
}
