import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const editAdminReport = (reportId, data) => (data2) => {
  return axios({
    method: 'PUT',
    url: `${API_URL}/admin/reports/${reportId}`,
    data: data || data2,
  })
}
