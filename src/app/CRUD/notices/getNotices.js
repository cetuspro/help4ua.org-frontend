import axios from 'axios'

import { usePaginatedQuery2 } from '@/app/hooks/usePaginatedQuery2'
import { API_URL } from '@/app/config/env'

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
