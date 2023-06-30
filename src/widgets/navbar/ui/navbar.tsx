import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from '@/entities/user'
import { LoginModal } from '@/features/auth-by-username'
import { cls } from '@/shared/lib/class-names'
import { AppLink, Button } from '@/shared/ui'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModalOpen((prevState) => !prevState)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <nav
        className={cls('navbar h-navbar bg-base-300 px-8', {}, [className])}
        data-testid="navbar"
      >
        <div className="w-full">
          <div className="flex-1">
            <AppLink to="/" className="btn-ghost btn text-xl normal-case">
              {t('Новостной сайт')}
            </AppLink>
          </div>

          <Button onClick={onLogout} className="ml-auto">
            {t('Выйти')}
          </Button>
        </div>
      </nav>
    )
  }

  return (
    <nav className={cls('navbar h-navbar bg-base-300 px-8', {}, [className])} data-testid="navbar">
      <div className="w-full">
        <div className="flex-1">
          <AppLink to="/" className="btn-ghost btn text-xl normal-case">
            {t('Новостной сайт')}
          </AppLink>
        </div>

        <Button onClick={onToggleAuthModal}>{t('Войти')}</Button>

        <LoginModal onClose={onToggleAuthModal} isOpen={isAuthModalOpen} />
      </div>
    </nav>
  )
}
