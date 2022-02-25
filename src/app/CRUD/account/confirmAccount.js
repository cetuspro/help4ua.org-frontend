import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const confirmAccount = (userId, token) => {
  return axios({
    method: 'GET',
    url: `${API_URL}/account/confirm-email`,
    params: {
      userId: userId,
      token: token,
    }
  })
}
