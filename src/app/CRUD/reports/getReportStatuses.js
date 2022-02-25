import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import axios from 'axios'

const getReportStatuses = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/enums/report-status`,
  }).then(({ data }) => data)

export const getReportStatusesHelper = {
  queryKey: ['helper.reportStatuses'],
  queryFn: getReportStatuses,
  isArray: true,
}

export const useGetReportStatuses = () => useQuery2(getReportStatusesHelper)
