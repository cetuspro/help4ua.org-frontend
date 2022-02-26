import { BASE_URL } from '../../config/env'
import { accountRoutes } from './account'
import { adminRoutes } from './admin'
import { authRoutes } from './common/auth'
import { reportsRoutes } from './reports'
import { threatMapRoutes } from './threatMap'
import { userRoutes } from './user'
import { contactRoutes } from '@/app/router/urls/public/public'

export const route = {
  index: `${BASE_URL}/`,
  ...authRoutes,
  ...threatMapRoutes,
  ...adminRoutes,
  ...userRoutes,
  ...accountRoutes,
  ...reportsRoutes,
  ...contactRoutes,
}
