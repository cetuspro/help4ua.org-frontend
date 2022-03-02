import { contactRoutes } from '@/app/router/urls/public/public'
import { BASE_URL } from '../../config/env'
import { accountRoutes } from './account'
import { actionsRoutes } from './actions/actions'
import { adminRoutes } from './admin'
import { authRoutes } from './common/auth'
import { helpPointsRoutes } from './helpPoints'
import { noticesRoutes } from './notices/notices'
import { reportsRoutes } from './reports'
import { threatMapRoutes } from './threatMap'
import { userRoutes } from './user'

export const route = {
  index: `${BASE_URL}/`,
  'homepage.notices': `${BASE_URL}/#zgloszenia`,
  rodo: `${BASE_URL}/rodo`,
  ...authRoutes,
  ...threatMapRoutes,
  ...adminRoutes,
  ...userRoutes,
  ...accountRoutes,
  ...reportsRoutes,
  ...noticesRoutes,
  ...contactRoutes,
  ...helpPointsRoutes,
  ...actionsRoutes,
}
