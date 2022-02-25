import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const editAdminUser = (userId, data) => (data2) => {
  return axios({
    method: 'PATCH',
    url: `${API_URL}/admin/users/${userId}`,
    data: data || data2,
  })
}
