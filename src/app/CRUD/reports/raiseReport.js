import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const raiseReport = (reportId) => () => {
  return axios({
    method: 'POST',
    url: `${API_URL}/user/reports/${reportId}/raise`,
    data: { reportId },
  })
}
