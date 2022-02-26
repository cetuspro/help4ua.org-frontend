import axios from 'axios'
import { API_URL } from '../../config/env'
import { usePaginatedQuery2 } from '@/app/hooks/usePaginatedQuery2'

const getNotices = (noticeType) => (key, pagination) =>
  axios({
    method: 'GET',
    url: `${API_URL}/notices`,
    params: {
      ...pagination,
      noticeType,
    },
  }).then(({ data }) => data)

export const useGetNotices = (noticeType) =>
  usePaginatedQuery2({
    queryKey: ['app.notices'],
    queryFn: getNotices(noticeType),
    perPage: 50,
  })
