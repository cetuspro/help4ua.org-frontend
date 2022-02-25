import { BASE_URL } from '../../../config/env'

export const noticesRoutes = {
  'notices.list': `${BASE_URL}/notices`,
  'notices.view': (noticeId = ':noticeId') => `${BASE_URL}/notices/${noticeId}`,
}
