import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import axios from 'axios'

const getUserStatuses = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/enums/user-status`,
  }).then(({ data }) => data)

export const getUserStatusesHelper = {
  queryKey: ['helper.userStatuses'],
  queryFn: getUserStatuses,
  isArray: true,
}

export const useGetUserStatuses = () => useQuery2(getUserStatusesHelper)
