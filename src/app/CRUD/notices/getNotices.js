import axios from 'axios'
import { API_URL } from '../../config/env'
import { usePaginatedQuery2 } from '@/app/hooks/usePaginatedQuery2'

const getNotices = (key, pagination) =>
  axios({
    method: 'GET',
    url: `${API_URL}/notices`,
    params: pagination,
  }).then(({ data }) => data)

export const useGetNotices = () =>
  usePaginatedQuery2({
    queryKey: ['app.notices'],
    queryFn: getNotices,
    perPage: 50,
  })
