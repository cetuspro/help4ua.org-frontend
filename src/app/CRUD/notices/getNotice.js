import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'

const getNotice = ([noticeId]) =>
  axios({
    method: 'GET',
    url: `${API_URL}/notices/${noticeId}`,
  }).then(({ data }) => data)

export const useGetNotice = (noticeId) =>
  useQuery2({
    queryKey: ['app.notice', noticeId],
    queryFn: getNotice,
  })
