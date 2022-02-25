import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const commentUserReport = (reportId) => (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/user/reports/${reportId}/comment`,
    data,
  })
}
