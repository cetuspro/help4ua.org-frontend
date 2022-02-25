import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const deleteReportPhoto = (reportId) => (photoId) => {
  return axios({
    method: 'DELETE',
    url: `${API_URL}/user/reports/${reportId}/photo/${photoId}`,
  })
}
