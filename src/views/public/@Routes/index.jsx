import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import RequireGuest from '@/app/router/components/RequireGuest'

import PublicLayout from '@/layouts/PublicLayout'
import UserLayout from '@/layouts/UserLayout'
const LazyLogin = lazy(() => import('@/views/public/auth/Login'))
const LazyRegister = lazy(() => import('@/views/public/auth/Register'))
const LazyForgotPass = lazy(() => import('@/views/public/auth/PasswordForgot'))
const LazyResetPass = lazy(() => import('@/views/public/auth/PasswordReset'))
const LazyHome = lazy(() => import('@/views/public/Home'))
const LazyReports = lazy(() => import('@/views/public/reports/View_ReportList/ViewReportList'))
const LazyReport = lazy(() => import('@/views/public/reports/View_Report/ViewReport'))

const PublicRoutes = [
  <Route key={route['index']} path={route['index']} element={<PublicLayout />}>
    <Route index element={<LazyHome />} />
    {/*<Route*/}
    {/*  path={route['auth.login']}*/}
    {/*  element={*/}
    {/*    <RequireGuest>*/}
    {/*      <LazyLogin />*/}
    {/*    </RequireGuest>*/}
    {/*  }*/}
    {/*/>*/}
    {/*<Route*/}
    {/*  path={route['auth.register']}*/}
    {/*  element={*/}
    {/*    <RequireGuest>*/}
    {/*      <LazyRegister />*/}
    {/*    </RequireGuest>*/}
    {/*  }*/}
    {/*/>*/}
    {/*<Route*/}
    {/*  path={route['auth.password.forgot']}*/}
    {/*  element={*/}
    {/*    <RequireGuest>*/}
    {/*      <LazyForgotPass />*/}
    {/*    </RequireGuest>*/}
    {/*  }*/}
    {/*/>*/}
    {/*<Route*/}
    {/*  path={route['auth.password.reset']}*/}
    {/*  element={*/}
    {/*    <RequireGuest>*/}
    {/*      <LazyResetPass />*/}
    {/*    </RequireGuest>*/}
    {/*  } */}
    {/*/>*/}
  </Route>,
  // <Route key={route['reports.list']} path={route['reports.list']} element={<UserLayout />}>
  //   <Route index element={<LazyReports />} />
  //   <Route path={route['reports.view']()} element={<LazyReport />} />
  // </Route>,
]

export default PublicRoutes
