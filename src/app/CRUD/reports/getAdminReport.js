import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'

const getAdminReport = ([reportId]) =>
  axios({
    method: 'GET',
    url: `${API_URL}/admin/reports/${reportId}`,
  }).then(({ data }) => data)

export const useGetAdminReport = (reportId) =>
  useQuery2({
    queryKey: ['app.adminReports', reportId],
    queryFn: getAdminReport,
  })
