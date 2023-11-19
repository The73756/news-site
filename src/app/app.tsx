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
    <Suspense fallback="">
      <Navbar />
      <div className="full-height relative flex overflow-hidden">
        <Sidebar />
        <div className="full-height mx-auto flex w-full justify-center overflow-auto">
          <div className="w-full max-w-[1520px]">
            <main className="p-5">{inited && <AppRouter />}</main>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
