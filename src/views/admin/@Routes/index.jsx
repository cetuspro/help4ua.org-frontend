import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

import RequireAuth from '@/app/router/components/RequireAuth'
import AdminLayout from '@/layouts/AdminLayout'
import { PERMISSION_ADMIN, PERMISSION_CITY_ADMIN } from '@/app/config/permissions'
const LazyReports = lazy(() => import('../reports/ViewReports'))
const LazyReport = lazy(() => import('@/views/admin/report/ViewReport'))
const LazyPendingReports = lazy(() => import('@/views/admin/pendingReports/ViewPendingReports'))
const LazyReportMap = lazy(() => import('@/views/admin/reportMap/ViewReportMap'))
const LazyUsers = lazy(() => import('@/views/admin/users/ViewUsers'))
const LazyUser = lazy(() => import('@/views/admin/users/ViewUser'))
const LazySubAdmins = lazy(() => import('@/views/admin/users/ViewSubAdmins'))
const LazyEntities = lazy(() =>
  import('@/views/admin/organisationalEntities/ViewOrganisationalEntities'),
)
const LazyComments = lazy(() => import('@/views/admin/comments/ViewComments'))
const LazyPostMeasures = lazy(() => import('@/views/admin/postMeasurements/PostMeasurements'))

const AdminRoutes = [
  <Route
    key={route['admin']}
    path={route['admin']}
    element={
      <RequireAuth roles={[PERMISSION_ADMIN, PERMISSION_CITY_ADMIN]}>
        <AdminLayout />
      </RequireAuth>
    }>
    <Route path={route['admin.pendingReports']} element={<LazyPendingReports />} />
    <Route path={route['admin.reports']} element={<LazyReports />} />
    <Route path={route['admin.report']()} element={<LazyReport />} />
    <Route path={route['admin.map']} element={<LazyReportMap />} />
    <Route path={route['admin.comments']} element={<LazyComments />} />
    <Route path={route['admin.users']} element={<LazyUsers />} />
    <Route path={route['admin.user']()} element={<LazyUser />} />
    <Route path={route['admin.subadmins']} element={<LazySubAdmins />} />
    <Route path={route['admin.entities']} element={<LazyEntities />} />
    <Route path={'/admin/post-measurements'} element={<LazyPostMeasures />} />
  </Route>,
]

export default AdminRoutes
