import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const changeCommentStatus = (reportId, commentId) => () => {
  return axios({
    method: 'PUT',
    url: `${API_URL}/admin/reports/${reportId}/comments/${commentId}`,
  })
}
