import { BASE_URL } from '../../../config/env'

export const noticesRoutes = {
  'notices.list': `${BASE_URL}/ogloszenia`,
  'notices.list2': `${BASE_URL}/ogloszenia/szukam-schronienia`,
  'notices.list3': `${BASE_URL}/ogloszenia/oferuje-schronienia`,
  'notices.list4': `${BASE_URL}/ogloszenia/oferuje-transport`,
  'notices.list5': `${BASE_URL}/ogloszenia/oferuje-pomoc`,
  'notices.view': (noticeId = ':noticeId') => `${BASE_URL}/ogloszenia/${noticeId}`,
}
