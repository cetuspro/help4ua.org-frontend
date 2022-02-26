import axios from 'axios'
import { API_URL } from '@/app/config/env'

export const postNoticeInactive = (noticeId) => (data) => {
  console.log(noticeId)
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/${noticeId}/inactive`,
    data,
  })
}
