import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { API_URL } from './env'
// import comments from '../data/adminComments'
import * as population from '../CRUD/populations/populations.json'
import users from '../data/users'
import userStatuses from '../data/user-statuses';
import userRoles from '../data/user-roles';

// You can mock API endpoints here

export const setupMocks = () => {
  const mock = new MockAdapter(axios, {
    onNoMatch: 'passthrough',
    // delayResponse: 2000
  })

  const singleUserUrl = new RegExp(`${API_URL}/admin/users/([0-9]+)`)

  // mock.onGet(singleUserUrl).reply(config => {
  //   const userId = config?.url?.match(singleUserUrl)[1];
  //   const user = users?.find(user => user?.id === +userId);
  //   return user ? [200, user] : [404]
  // })

  // mock.onGet(`${API_URL}/admin/users`).reply(config => {
  //   let results = users;
  //   if(config?.params?.SearchPhrase) {
  //     results = results.filter(user => `${user?.firstName} ${user?.lastName}`.toLowerCase().includes(config?.params?.SearchPhrase.toLowerCase()))
  //   }
  //   if(config?.params?.UserRole) {
  //     results = results.filter(user => user?.roles?.includes(userRoles.find(x => x.id === config?.params?.UserRole).name))
  //   }
  //   if(config?.params?.UserStatus) {
  //     results = results.filter(user => user?.status?.id === config?.params?.UserStatus)
  //   }
  //   return [200, {items: results}]
  // });

  mock.onPut(singleUserUrl).reply(config => {
    const userId = config?.url?.match(singleUserUrl)[1];
    const index = users?.findIndex(user => user?.id === +userId);
    const data = JSON.parse(config?.data);
    const newStatus = userStatuses.find(status => status.id == data?.status);
    if(!newStatus) return [400, {message: 'Incorrect status'}];
    users[index] = {...users[index], status: newStatus, banReason: newStatus?.id === 3 ? data?.banReason : null};
    if(data?.roles) {
      users[index] = {...users[index], roles: data?.roles};
    }
    return index !== -1 ? [200] : [404];
  })

  // mock.onGet(`${API_URL}/enums/user-role`).reply(200, userRoles);
  // mock.onGet(`${API_URL}/enums/user-status`).reply(200, userStatuses);

  mock.onPost(`${API_URL}/account/change-password`).reply(400);

  // Account confirmation
  // mock.onPatch(`${API_URL}/account/confirm-email`).reply(200);

  // Uncomment to bypass login if API doesn't work :)
  //
  // mock.onPost(`${API_URL}/account/sign-in`).reply(200, {
  //   accessToken: "Mariusz_API_nie_dziala!",
  //   expires: 999999,
  //   userId: 1,
  //   roles: ['User', 'Admin'],
  // })

  mock.onGet(`${API_URL}/account/me`).reply(async config => {
    const data = await fetch(`${API_URL}/account/me`, {
      method: 'GET',
      headers: config?.headers
    }).then(response => response.json())

    return [200, Object.assign({
      id: 1,
      email: "jkowalski@gmail.com",
      firstName: "Jan",
      lastName: "Kowalski",
      roles: [
        "User",
        "Admin"
      ],
      phoneNumber: "678954321",
      reportsCount: 2,
      commentsCount: 1,
      registerDate: '2021-12-23T10:39:08.573Z',
    }, data)]
  })

  // mock.onGet(`${API_URL}/admin/comments`).reply(config => {
  //   return [200, {
  //   items: comments.slice((config?.params?.PageNumber-1)*config?.params?.PageSize, config?.params?.PageNumber*config?.params?.PageSize),
  //   pageIndex: config?.params?.PageNumber,
  //   totalPages: 18/config?.params?.PageSize,
  //   totalCount: 18,
  //   hasPreviousPage: config?.params?.PageNumber > 1,
  //   hasNextPage: config?.params?.PageNumber < 18/config?.params?.PageSize,
  // }]});

  mock.onGet(`${API_URL}/populations`).reply(200, population)
}
