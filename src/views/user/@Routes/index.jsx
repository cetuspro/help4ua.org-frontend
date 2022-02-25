import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

import userReportsRoutes from '../myReports/@Routes'
import RequireAuth from '@/app/router/components/RequireAuth'
import { PERMISSION_USER } from '@/app/config/permissions'
import UserLayout from '@/layouts/UserLayout'
import ViewMyAccount from '../myAccount/ViewMyAccount'

const userRoutes = [
  <Route key={route['user']} path={route['user']} element={<RequireAuth roles={[PERMISSION_USER]}><UserLayout /></RequireAuth>}>
    {userReportsRoutes}

    <Route path={route['user.profile']} element={<ViewMyAccount />} />
  </Route>
]

export default userRoutes
