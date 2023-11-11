import './styles/main.css'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRouter } from '@/app/providers/router'
import { useTheme } from '@/app/providers/theme-provider'
import { userActions } from '@/entities/user'
import { getUserInited } from '@/entities/user/model/selectors'
import { Navbar } from '@/widgets/navbar'
import { Sidebar } from '@/widgets/sidebar'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initUserData())
  }, [dispatch])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="min-h-[100vh] w-full min-w-[320px]">
      <Suspense fallback="">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-5">{inited && <AppRouter />}</main>
        </div>
      </Suspense>
    </div>
  )
}
