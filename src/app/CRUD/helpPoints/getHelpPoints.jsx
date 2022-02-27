import axios from 'axios'
import { API_URL } from '../../config/env'
import { usePaginatedQuery2 } from '@/app/hooks/usePaginatedQuery2'

const getHelpPoints = (key, pagination) =>
  axios({
    method: 'GET',
    url: `${API_URL}/help-points`,
    params: {
      ...pagination,
    },
  }).then(({ data }) => data)

export const useGetHelpPoints = () =>
  usePaginatedQuery2({
    queryKey: ['app.helpPoints'],
    queryFn: getHelpPoints,
    defaultPageSize: 50,
  })
