import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div className="text-blue-800">Загрузка</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
