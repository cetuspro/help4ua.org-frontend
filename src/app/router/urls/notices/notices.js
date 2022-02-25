import { BASE_URL } from '../../../config/env'

export const noticesRoutes = {
  'notices.list': `${BASE_URL}/ogloszenia`,
  'notices.view': (noticeId = ':noticeId') => `${BASE_URL}/ogloszenia/${noticeId}`,
}
