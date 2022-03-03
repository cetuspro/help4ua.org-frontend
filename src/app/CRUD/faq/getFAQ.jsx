import axios from 'axios'
import { API_URL } from '../../config/env'

export const getFAQ = (language) =>
  axios({
    method: 'GET',
    url: `${API_URL}/faq/${language}`,
  }).then(({ data }) => data)
