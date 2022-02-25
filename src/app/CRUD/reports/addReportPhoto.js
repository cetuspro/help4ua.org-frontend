import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const addReportPhoto = (reportId) => (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/user/reports/${reportId}/photo`,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
