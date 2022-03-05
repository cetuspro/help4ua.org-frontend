import { API_URL } from '../../config/env'
import axios from 'axios'

export const getLocation = (query = '', countryId = '') => {
  return axios({
    method: 'GET',
    url: `${API_URL}/help/list/locations?search=${query}&countryId=${countryId}`,
  }).then(({ data: { data } }) => data)
}
