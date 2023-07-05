import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { AppLink, Icon } from '@/shared/ui'
import { SidebarItemType } from '../model'

interface SidebarItemProps {
  isCollapsed: boolean
  item: SidebarItemType
}

export const SidebarItem = memo(({ isCollapsed, item }: SidebarItemProps) => {
  const { icon, text, path } = item
  const { t } = useTranslation()

  return (
    <AppLink
      to={path}
      className={cls('flex items-center gap-2 whitespace-nowrap', {
        'btn-ghost btn-circle btn': isCollapsed,
      })}
    >
      <Icon name={icon} className={cls('text-2xl')} />
      <span
        className={cls('', {
          'sr-only': isCollapsed,
        })}
      >
        {t(`${text}`)}
      </span>
    </AppLink>
  )
})
