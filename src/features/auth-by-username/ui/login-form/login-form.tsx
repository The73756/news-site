import { FormEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginState, loginActions, loginByUsername } from '@/features/auth-by-username'
import { cls } from '@/shared/lib/class-names'
import { Button, Input } from '@/shared/ui'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(loginByUsername({ username, password }))
    },
    [dispatch, password, username]
  )

  return (
    <div className={cls('', {}, [className])}>
      {error && <div className="text-error">{error}</div>}
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Input
          placeholder={t('Введите username')}
          onChange={onChangeUsername}
          value={username}
          autoComplete="username"
        />
        <Input
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
          autoComplete="current-password"
        />
        <Button type="submit" disabled={isLoading}>
          {t('Войти')}
        </Button>
      </form>
    </div>
  )
})
