import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import axios from 'axios'

const getReportTypes = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/enums/report-types`,
  }).then(({ data }) => data)

export const getReportTypesHelper = {
  queryKey: ['helper.reportTypes'],
  queryFn: getReportTypes,
  isArray: true,
}

export const useGetReportTypes = () => useQuery2(getReportTypesHelper)
