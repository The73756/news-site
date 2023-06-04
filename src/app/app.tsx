import './styles/main.css'
import { Suspense } from 'react'
import { tw } from 'typewind'
import { AppRouter } from '@/app/providers/router'
import { useTheme } from '@/app/providers/theme-provider'
import { Navbar } from '@/widgets/navbar'
import { Sidebar } from '@/widgets/sidebar'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div data-theme={theme} className={tw.min_h_['100vh'].min_w_['320px'].w_full}>
      <Suspense fallback="">
        <Navbar />
        <div className={tw.flex}>
          <Sidebar />
          <main className={tw.flex_1.p_5}>
            <AppRouter />
          </main>
        </div>
      </Suspense>
    </div>
  )
}
