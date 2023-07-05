import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
    <div className={cls('flex h-full items-center justify-center', {}, [className])}>
      <h2 className="text-2xl">{t('Страница не найдена')}</h2>
    </div>
  )
}
