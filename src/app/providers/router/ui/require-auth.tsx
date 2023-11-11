import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from '@/app/providers/router'
import { getUserAuthData } from '@/entities/user'

interface RequireAuthProps {
  children?: ReactNode
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return <>{children}</>
}
