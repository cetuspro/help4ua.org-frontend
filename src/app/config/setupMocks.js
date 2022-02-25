import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import notices from '../data/notices'
import { API_URL } from './env'

// You can mock API endpoints here

export const setupMocks = () => {
  const mock = new MockAdapter(axios, {
    onNoMatch: 'passthrough',
    // delayResponse: 2000
  })

  mock.onGet(`${API_URL}/notices`).reply(202, {
    items: notices
  })
}
