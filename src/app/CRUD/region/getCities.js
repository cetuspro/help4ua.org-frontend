import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import axios from 'axios'

const getCities = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/enums/city`,
  }).then(({ data }) => data)

export const getCitiesHelper = {
  queryKey: ['helper.cities'],
  queryFn: getCities,
  isArray: true,
}

export const useGetCities = () => useQuery2(getCitiesHelper)
