import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const forgotPassword = (params) => {
  return axios({
    method: 'GET',
    url: `${API_URL}/account/request-password-reset`,
    params,
  })
}
