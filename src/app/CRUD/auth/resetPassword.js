import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const resetPassword = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/account/reset-password`,
    data,
  })
}
