import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/page-loader'
import { routeConfig } from '../config'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
