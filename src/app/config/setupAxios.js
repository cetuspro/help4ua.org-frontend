import axios from 'axios'

export const setupAxios = (store) => {
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { accessToken },
      } = store.getState()
      if (!config.url) console.error('request.url is undefined')
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    },
    (err) => Promise.reject(err),
  )
}
