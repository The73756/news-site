import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePath } from '@/app/providers/router'
import { cls } from '@/shared/lib/class-names'
import { AppLink, Button, Icon, LangSwitcher, ThemeSwitcher } from '@/shared/ui'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <aside
      data-testid="sidebar"
      className={cls(
        'body-height relative flex w-[var(--sidebar-w)] flex-col bg-base-300 px-[var(--sidebar-x-padding)] py-2 transition-[width]',
        { 'w-[var(--sidebar-w-collapsed)]': isCollapsed },
        [className]
      )}
    >
      <div className="flex-1">
        <nav aria-label="Основная навигация">
          <ul
            className={cls('flex flex-col', {
              'gap-0': isCollapsed,
              'gap-3': !isCollapsed,
            })}
          >
            <li className="flex items-center gap-1">
              <AppLink
                to={RoutePath.about}
                className={cls('flex items-center gap-2 whitespace-nowrap', {
                  'btn-ghost btn-circle btn': isCollapsed,
                })}
              >
                <Icon name="nav/home" className={cls('text-2xl')} />
                <span
                  className={cls('', {
                    'sr-only': isCollapsed,
                  })}
                >
                  {t('Главная')}
                </span>
              </AppLink>
            </li>
            <li className="flex items-center gap-1">
              <AppLink
                to={RoutePath.about}
                className={cls('flex items-center gap-2 whitespace-nowrap', {
                  'btn-ghost btn-circle btn': isCollapsed,
                })}
              >
                <Icon name="nav/about" className={cls('text-2xl')} />
                <span
                  className={cls('', {
                    'sr-only': isCollapsed,
                  })}
                >
                  {t('О сайте')}
                </span>
              </AppLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-wrap gap-2">
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <Button
        size="large"
        shape="rounded"
        className="btn-ghost no-animation absolute right-1 top-1/2 transition-transform"
        style={{
          transform: `translateY(-50%) rotate(${isCollapsed ? '0deg' : '180deg'})`,
        }}
        onClick={toggleCollapsed}
        data-testid="sidebar-toggle"
      >
        <Icon name="shared/arrow" className="ml-1" />
      </Button>
    </aside>
  )
}
