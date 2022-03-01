import axios from 'axios'
import { API_URL } from '../../config/env'
import { usePaginatedQuery2 } from '@/app/hooks/usePaginatedQuery2'

const getNotices = (params) => (key, pagination) =>
  axios({
    method: 'GET',
    url: `${API_URL}/notices`,
    params: {
      ...pagination,
      ...params,
    },
  }).then(({ data }) => data)

export const useGetNotices = (params) =>
  usePaginatedQuery2({
    queryKey: ['app.notices'],
    queryFn: getNotices(params),
    defaultPageSize: 50,
  })
