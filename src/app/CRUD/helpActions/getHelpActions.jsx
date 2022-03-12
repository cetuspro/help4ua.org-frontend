import axios from 'axios'
import { API_URL } from '@/app/config/env'
import { usePaginatedQuery2 } from '@/app/hooks/usePaginatedQuery2'

const getHelpActions = (params) => (_, pagination) =>
  axios({
    method: 'GET',
    url: `${API_URL}/help-actions`,
    params: {
      ...pagination,
      ...params,
    },
  }).then(({ data }) => data)

export const useGetHelpActions = (params) =>
  usePaginatedQuery2({
    queryKey: ['app.notices'],
    queryFn: getHelpActions(params),
    defaultPageSize: 50,
  })
