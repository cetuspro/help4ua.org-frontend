import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import axios from 'axios'

const getRegions = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/enums/region`,
  }).then(({ data }) => {
    return data.filter(e=>e.id!==0);
  })

export const getRegionsHelper = {
  queryKey: ['helper.regions'],
  queryFn: getRegions,
  isArray: true,
}

export const useGetRegions = () => useQuery2(getRegionsHelper)
