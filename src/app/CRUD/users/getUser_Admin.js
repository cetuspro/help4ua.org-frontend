import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'

const getAdminUser = ([userId]) =>
  axios({
    method: 'GET',
    url: `${API_URL}/admin/users/${userId}`,
  }).then(({ data }) => data)

export const useGetAdminUser = (userId) =>
  useQuery2({
    queryKey: ['app.adminUser', userId],
    queryFn: getAdminUser,
  })
