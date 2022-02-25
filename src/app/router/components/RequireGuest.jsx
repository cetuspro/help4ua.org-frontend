import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { route } from '@/app/router/urls/routes'

const RequireGuest = ({ children }) => {
  const isAuth = useSelector((state) => state.auth?.accessToken)
  if (!isAuth) return children
  else return <Navigate to={route['index']} />
}

export default RequireGuest
