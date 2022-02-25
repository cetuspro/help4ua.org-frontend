import { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

const Lazy404 = lazy(() => import('@/views/error/View404'))
const Lazy401 = lazy(() => import('@/views/error/View401'))
import ThreatMapRoutes from './ThreatMap/@Routes'
import PublicRoutes from './public/@Routes'
import UserRoutes from './user/@Routes'
import AccountRoutes from './account/@Routes'
import NoticesRoutes from './notices/@Routes'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {ThreatMapRoutes}

        {UserRoutes}

        {PublicRoutes}

        {AccountRoutes}
        
        {NoticesRoutes}

        <Route path={route['auth.unauthorized']} element={<Lazy401 />} />
        <Route path="*" element={<Lazy404 />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
