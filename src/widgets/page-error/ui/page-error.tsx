import { useTranslation } from 'react-i18next'
import { tw } from 'typewind'
import { Button } from '@/shared/ui'

export const PageError = () => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={tw.w_full.h_['100vh'].flex.flex_col.items_center.justify_center.gap_6}>
      <h1 className={tw.text_5xl.text_primary.font_medium}>
        {t('Произошла непредвиденная ошибка')}
      </h1>
      <Button onClick={reloadPage} className={tw.btn_primary.btn_lg}>
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}
