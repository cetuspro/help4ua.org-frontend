import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'

const getPopulation = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/populations`,
  }).then(({ data }) => data.items)

export const useGetPopulation = () =>
  useQuery2({
    queryKey: ['app.population'],
    queryFn: getPopulation,
  })
