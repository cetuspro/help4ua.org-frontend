import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const deleteUserComment = (reportId, commentId) => () => {
  return axios({
    method: 'DELETE',
    url: `${API_URL}/user/reports/${reportId}/comments/${commentId}`,
  })
}
