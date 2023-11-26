import { IconProps } from '@/shared/ui/icon'

export interface SidebarItemType {
  path: string
  text: string
  icon: IconProps['name']
  authOnly?: boolean
}