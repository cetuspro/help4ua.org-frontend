import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { route } from '@/app/router/urls/routes'

const RequireAuth = ({ children, roles }) => {
  const isAuth = useSelector((state) => state.auth?.accessToken)
  const userRoles = useSelector(state => state.auth?.roles)
  
  if (!isAuth) return <Navigate to={route['auth.login']} />
  
  const userHasRequiredRoles = !roles || (roles && userRoles && roles.some(role => userRoles.includes(role)))
  if (!userHasRequiredRoles) return <Navigate to={route['auth.unauthorized']} />

  return children
}

export default RequireAuth
