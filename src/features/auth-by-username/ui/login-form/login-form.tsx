import { FormEvent, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { ReduxStoreWithManager } from '@/app/providers/store-provider'
import { loginActions, loginByUsername } from '@/features/auth-by-username'
import { cls } from '@/shared/lib/class-names'
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
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer)
    dispatch({ type: '@INIT loginForm reducer' })

    return () => {
      store.reducerManager.remove('loginForm')
      dispatch({ type: '@DESTROY loginForm reducer' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
  )
})

export default LoginForm
