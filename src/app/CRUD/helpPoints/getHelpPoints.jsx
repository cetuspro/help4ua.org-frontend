import axios from 'axios'
import { usePaginatedQuery2 } from '@/app/hooks/usePaginatedQuery2'
import { API_URL } from '@/app/config/env'

const getHelpPoints = (params) => (key, pagination) =>
  axios({
    method: 'GET',
    url: `${API_URL}/help-points`,
    params: {
      ...pagination,
      ...params,
    },
  }).then(({ data }) => data)

export const useGetHelpPoints = (params) =>
  usePaginatedQuery2({
    queryKey: ['app.helpPoints'],
    queryFn: getHelpPoints(params),
    defaultPageSize: 50,
  })
