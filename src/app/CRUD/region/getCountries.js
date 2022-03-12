
import { API_URL } from '../../config/env'
import useQuery2 from '../../hooks/useQuery2'
import axios from 'axios'

const getCountries = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/help/list/coutries`,
  }).then(({ data }) => {
    return data.map(({nameENG, id}) => ({name: nameENG, value: id}))
  })

export const getCountriesHelper = {
  queryKey: ['helper.countries'],
  queryFn: getCountries,
  isArray: true,
}

export const useGetCountries = () => useQuery2(getCountriesHelper)

