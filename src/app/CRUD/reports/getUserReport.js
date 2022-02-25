import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'

const getUserReport = ([reportId]) =>
  axios({
    method: 'GET',
    url: `${API_URL}/user/reports/${reportId}`,
  }).then(({ data }) => data)

export const useGetUserReport = (reportId) =>
  useQuery2({
    queryKey: ['app.userReports', reportId],
    queryFn: getUserReport,
  })
