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

  // const singleNotice = new RegExp(`${API_URL}/notices/([0-9]+)`)

  // mock.onGet(singleNotice).reply(config => {
  //   const noticeId = config?.url?.match(singleNotice)[1];
  //   const notice = notices?.find(notice => notice?.id === +noticeId);
  //   return notice ? [200, notice] : [404]
  // })

  // mock.onGet(`${API_URL}/notices`).reply(202, {
  //   items: notices
  // })
}
