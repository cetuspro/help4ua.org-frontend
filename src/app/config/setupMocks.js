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

  // mock.onGet(`${API_URL}/notices`).reply(config => {
  //   return [200, {
  //     items: notices.slice((config?.params?.PageNumber-1)*config?.params?.PageSize, config?.params?.PageNumber*config?.params?.PageSize),
  //     pageIndex: config?.params?.PageNumber,
  //     totalPages: 16/config?.params?.PageSize,
  //     totalCount: 16,
  //     hasPreviousPage: config?.params?.PageNumber > 1,
  //     hasNextPage: config?.params?.PageNumber < 16/config?.params?.PageSize,
  //   }]
  // })
  // mock.onGet(`${API_URL}/notices`).reply(202, {
  //   items: notices
  // })

  // mock.onPost(`${API_URL}/notices/create`).reply(config => {
  //   console.log(JSON.parse(config.data));
  //   return [200]
  // })
}
