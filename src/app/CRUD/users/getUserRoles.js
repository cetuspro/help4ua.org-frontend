import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import axios from 'axios'

const getUserRoles = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/enums/user-role`,
  }).then(({ data }) => data)

export const getUserRolesHelper = {
  queryKey: ['helper.userRoles'],
  queryFn: getUserRoles,
  isArray: true,
}

export const useGetUserRoles = () => useQuery2(getUserRolesHelper)
