import { RoutePath } from '@/app/providers/router'
import { IconProps } from '@/shared/ui/icon'

export interface SidebarItemType {
  path: string
  text: string
  icon: IconProps['name']
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    icon: 'nav/home',
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    icon: 'nav/about',
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    icon: 'nav/profile',
    authOnly: true,
  },
]
