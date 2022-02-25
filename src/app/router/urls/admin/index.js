import { BASE_URL } from '../../../config/env'

export const adminRoutes = {
  'admin': `${BASE_URL}/admin`,
  'admin.reports': `${BASE_URL}/admin/reports`,
  'admin.report': (id = ':reportId') => `${BASE_URL}/admin/reports/${id}`,
  'admin.pendingReports': `${BASE_URL}/admin/pending-reports`,
  'admin.map': `${BASE_URL}/admin/map`,
  'admin.comments': `${BASE_URL}/admin/comments`,
  'admin.users': `${BASE_URL}/admin/users`,
  'admin.user': (id = ':userId') => `${BASE_URL}/admin/users/${id}`,
  'admin.subadmins': `${BASE_URL}/admin/city-admins`,
  'admin.entities': `${BASE_URL}/admin/entities`,
}