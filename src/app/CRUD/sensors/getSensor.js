import axios from 'axios'
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'

const getSensor = ([sensorId]) =>
  axios({
    method: 'GET',
    url: `${API_URL}/sensors/${sensorId}/groups`,
  }).then(({ data }) => data)

export const useGetSensor = (sensorId) =>
  useQuery2({
    queryKey: ['app.sensors', sensorId],
    queryFn: getSensor,
  })
