import { BASE_URL } from '../../../config/env'

export const reportsRoutes = {
  'reports.list': `${BASE_URL}/reports`,
  'reports.view': (reportId = ':reportId') => `${BASE_URL}/reports/${reportId}`,
}
