import { useTranslation } from 'react-i18next'
import { tw } from 'typewind'
import { cls } from '@/shared/lib'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
    <div className={cls(tw.flex.justify_center.items_center.h_full, {}, [className])}>
      <h2 className={tw.text_2xl}>{t('Страница не найдена')}</h2>
    </div>
  )
}
