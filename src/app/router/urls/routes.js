import { BASE_URL } from '../../config/env'
import { accountRoutes } from './account'
import { adminRoutes } from './admin'
import { authRoutes } from './common/auth'
import { noticesRoutes } from './notices/notices'
import { reportsRoutes } from './reports'
import { threatMapRoutes } from './threatMap'
import { userRoutes } from './user'
import { contactRoutes } from '@/app/router/urls/public/public'
import { helpPointsRoutes } from './helpPoints'
import { actionsRoutes } from './actions/actions'

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
