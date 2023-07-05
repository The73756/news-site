import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Button, Icon } from '@/shared/ui'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation()

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button onClick={toggle} size="large" shape="rounded" className={cls('', {}, [className])}>
      <Icon name="shared/translate" />
    </Button>
  )
})
