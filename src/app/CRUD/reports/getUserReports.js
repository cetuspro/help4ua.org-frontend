import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import { usePaginatedQuery2 } from '../../hooks/usePaginatedQuery2'

const getUserReports = (key, pagination) =>
  axios({
    method: 'GET',
    url: `${API_URL}/user/reports`,
    params: pagination,
  }).then(({ data }) => data)

export const useGetUserReports = () =>
  usePaginatedQuery2({
    queryKey: ['app.userReports'],
    queryFn: getUserReports,
  })
