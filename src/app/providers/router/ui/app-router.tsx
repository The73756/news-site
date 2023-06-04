import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { tw } from 'typewind'
import { routeConfig } from '../config'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div className={tw.text_blue_800}>Загрузка</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
