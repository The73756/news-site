import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui'

export const ArticleDetailsError = memo(() => {
  const { t } = useTranslation('article-details')

  return (
    <Text
      title={t('Произошла ошибка при загрузке статьи')}
      text={t('Попробуйте обновить страницу')}
      textSize="xl"
      titleSize="xl"
      theme="error"
      align="center"
    />
  )
})
