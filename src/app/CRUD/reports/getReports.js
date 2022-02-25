import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import { usePaginatedQuery2 } from '@/app/hooks/usePaginatedQuery2'

const getReports = (key, pagination) =>
  axios({
    method: 'GET',
    url: `${API_URL}/reports`,
    params: pagination,
  }).then(({ data }) => data)

const getReportsMap = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/reports`,
  }).then(({ data }) => data.items)

export const useGetReports = () =>
  usePaginatedQuery2({
    queryKey: ['app.reports'],
    queryFn: getReports,
  })

export const useGetReportsMap = () =>
  useQuery2({
    queryKey: ['app.reports.map'],
    queryFn: getReportsMap,
  })
