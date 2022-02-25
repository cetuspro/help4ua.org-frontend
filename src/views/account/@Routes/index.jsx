import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

import ConfirmAccount from '../ConfirmAccount'
import RequireAuth from '@/app/router/components/RequireAuth'
import UserLayout from '@/layouts/UserLayout'
import { PERMISSION_USER } from '@/app/config/permissions'
import ViewMyAccount from '../../user/myAccount/ViewMyAccount'

const AccountRoutes = [
  <Route key={route['account.confirm']} path={route['account.confirm']} element={<ConfirmAccount />}/>,
  // <Route key={route['account']} path={route['account.profile']} element={<RequireAuth roles={[PERMISSION_USER]}><UserLayout /></RequireAuth>}>
  //   <Route index element={<ViewMyAccount />} />
  // </Route>
]

export default AccountRoutes
