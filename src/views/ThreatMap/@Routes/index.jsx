import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

import ThreatList from '../components/ThreatList'
import SingleReportView from '../components/SingleReportView'
import SingleSensorView from '../components/SingleSensorView'
const LazyThreatMap = lazy(() => import('@/views/ThreatMap/ViewThreatMap'))

const ThreatMapRoutes = [
  <Route key={route['map']} path={route['map']} element={<LazyThreatMap />}>
    <Route index element={<ThreatList />} />
    <Route path={route['map.addReport']} element={<ThreatList />} />
    <Route path={route['map.viewReport']()} element={<SingleReportView />} />
    <Route path={route['map.viewSensor']()} element={<SingleSensorView />} />
  </Route>,
]

export default ThreatMapRoutes
