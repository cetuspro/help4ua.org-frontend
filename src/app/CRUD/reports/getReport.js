import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'

const getReport = ([reportId]) =>
  axios({
    method: 'GET',
    url: `${API_URL}/reports/${reportId}`,
  }).then(({ data }) => data)

export const useGetReport = (reportId) =>
  useQuery2({
    queryKey: ['app.reports', reportId],
    queryFn: getReport,
  })
