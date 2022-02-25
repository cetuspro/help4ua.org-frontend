import { BASE_URL } from '../../../config/env'

export const myReportsRoutes = {
  'userReports.list': `${BASE_URL}/user/reports`,
  'userReports.view': (reportId = ':reportId') => `${BASE_URL}/user/reports/${reportId}`,
  'userReports.edit': (reportId = ':reportId') => `${BASE_URL}/user/reports/${reportId}/edit`,
  'userReports.add': `${BASE_URL}/user/reports/create`,
}
