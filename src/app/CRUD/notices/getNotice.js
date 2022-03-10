import { API_URL } from '@/app/config/env'
import useQuery2 from '@/hooks/useQuery2'
import axios from 'axios'

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
