import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'

const getReportComments = ([reportId]) =>
  axios({
    method: 'GET',
    url: `${API_URL}/user/reports/${reportId}/comments`,
  }).then(({ data }) => data.items)

export const useGetReportComments = (reportId) =>
  useQuery2({
    queryKey: ['app.userReports.comments', reportId],
    queryFn: getReportComments,
  })
