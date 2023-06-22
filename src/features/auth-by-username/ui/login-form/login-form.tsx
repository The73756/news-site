import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Button, Input } from '@/shared/ui'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
    <div className={cls('', {}, [className])}>
      <form action="" className="flex flex-col gap-4">
        <Input placeholder={t('Введите username')} />
        <Input placeholder={t('Введите пароль')} />

        <Button>{t('Войти')}</Button>
      </form>
    </div>
  )
}
