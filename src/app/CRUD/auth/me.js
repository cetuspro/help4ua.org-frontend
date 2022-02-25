import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const me = () =>
  axios({
    method: 'get',
    url: `${API_URL}/account/me`,
  })
