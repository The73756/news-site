import { FormEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { loginActions, loginByUsername } from '@/features/auth-by-username'
import { cls } from '@/shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Button, Input, Text } from '@/shared/ui'
import { loginReducer } from '../../model'
import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from '../../model/selectors'

interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

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
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const result = await dispatch(loginByUsername({ username, password }))
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess()
      }
    },
    [dispatch, password, username, onSuccess]
  )

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cls('', {}, [className])}>
        <Text title={t('Форма авторизации')} titleSize="xl" className="mb-4" />
        {error && (
          <Text theme="error" text={t('Вы ввели неверный логин или пароль')} className="mb-4" />
        )}
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
    </DynamicModuleLoader>
  )
})

export default LoginForm
