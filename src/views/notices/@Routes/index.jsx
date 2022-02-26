import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import UserLayout from '@/layouts/UserLayout'
const LazyNotices = lazy(() => import('@/views/notices/View_Notices/View_Notices'))
const LazyNotice = lazy(() => import('@/views/notices/View_Notice/View_Notice'))

const PublicRoutes = [
  <Route key={route['notices.list']} path={route['notices.list']} element={<UserLayout />}>
    <Route index element={<LazyNotices />} />
    <Route path={route['notices.list2']} element={<LazyNotices />} />
    <Route path={route['notices.list3']} element={<LazyNotices />} />
    <Route path={route['notices.list4']} element={<LazyNotices />} />
    <Route path={route['notices.list5']} element={<LazyNotices />} />
    <Route path={route['notices.view']()} element={<LazyNotice />} />
  </Route>,
]

export default PublicRoutes