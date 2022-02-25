import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const refreshUserToken = (token) =>
  axios({
    method: 'POST',
    url: `${API_URL}/account/refresh-token`,
    data: { token },
  })
