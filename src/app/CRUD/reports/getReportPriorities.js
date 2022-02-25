import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import axios from 'axios'

const getReportPriorities = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/enums/report-priorities`,
  }).then(({ data }) => data)

export const getReportPrioritiesHelper = {
  queryKey: ['helper.reportPriorities'],
  queryFn: getReportPriorities,
  isArray: true,
}

export const useGetReportPriorities = () => useQuery2(getReportPrioritiesHelper)
