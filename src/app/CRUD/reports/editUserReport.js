import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const editUserReport = (reportId) => (data) => {
  return axios({
    method: 'PUT',
    url: `${API_URL}/user/reports/${reportId}/update`,
    data,
  })
}
