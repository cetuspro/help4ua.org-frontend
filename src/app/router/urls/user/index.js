import { BASE_URL } from '@/app/config/env'
import { myReportsRoutes } from './myReportsRoutes'

export const userRoutes = {
  user: `${BASE_URL}/user`,
  'user.profile': `${BASE_URL}/user/profile`,
  ...myReportsRoutes,
}
