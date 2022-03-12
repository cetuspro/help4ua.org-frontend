import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import UserLayout from '@/layouts/UserLayout'

const LazyHelpActions = lazy(() => import('@/views/helpActions/View_HelpActions/View_HelpActions'))

const HelpActionsRoutes = () => {
  return [
    <Route key={route['helpActions']} path={route['helpActions']} element={<UserLayout />}>
      <Route index element={<LazyHelpActions />} />
    </Route>,
  ]
}

export default HelpActionsRoutes
