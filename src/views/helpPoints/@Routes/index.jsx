import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import MapLayout from '@/layouts/MapLayout'

const Map = lazy(() => import('../View_Map/ViewMap'))

const HelpPointsRoutes = [
  <Route key={route['helpPoints']} path={route['helpPoints.map']} element={<Map />}>
    <Route index element={<div>siema</div>} />
  </Route>,
]

export default HelpPointsRoutes
