import { createSelector } from '@reduxjs/toolkit'
import { RoutePath } from '@/app/providers/router'
import { getUserAuthData } from '@/entities/user'
import { SidebarItemType } from '@/widgets/sidebar/model'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'Профиль',
        icon: 'nav/profile',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Статьи',
        icon: 'nav/article',
        authOnly: true,
      }
    )
  }

  return sidebarItemsList
})
