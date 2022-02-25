import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

const LazyUserReports = lazy(() => import('../View_MyReports/View_MyReports'))
const LazyAddUserReports = lazy(() => import('../View_MyReportsAdd/View_MyReportsAdd'))
const LazySingleUserReport = lazy(() => import('../View_MyReport/View_MyReport'))
const LazyEditUserReport = lazy(() => import('../View_MyReportsEdit/View_MyReportsEdit'))

const userReportsRoutes = [
  <Route
    path={route['userReports.list']}
    element={
      <LazyUserReports />
    }
  />,
  <Route
    path={route['userReports.add']}
    element={
      <LazyAddUserReports />
    }
  />,
  <Route
    path={route['userReports.view']()}
    element={
      <LazySingleUserReport />
    }
  />,
  <Route
    path={route['userReports.edit']()}
    element={
      <LazyEditUserReport />
    }
  />
]

export default userReportsRoutes
