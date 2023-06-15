import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui'

export const PageError = () => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-medium text-primary">{t('Произошла непредвиденная ошибка')}</h1>
      <Button onClick={reloadPage} className="btn-primary btn-lg">
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}
