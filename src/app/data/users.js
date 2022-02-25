export default [
  {
    id: 3,
    firstName: 'Jan',
    lastName: 'Kowalski',
    roles: ['User'],
    phoneNumber: '123456789',
    email: 'jankowalski@gmail.com',
    reportsCount: 1,
    commentsCount: 2,
    registerDate: '2022-01-12T10:39:08.573Z',
    banReason: null,
    userStatus: {
      id: 2,
      name: 'Aktywny',
    },
    latestActivity: [
      {
        type: {
          id: 1,
          name: "dodał(a) zgłoszenie"
        },
        date: '2022-01-23T10:39:08.573Z',
        reportId: 1,
        title: "Na matuszczaka znowu podtopienie",
        content: "Znowu matuszczaka zalało",
      },
      {
        type: {
          id: 2,
          name: "skomentował(a) zgłosenie"
        },
        date: '2022-01-23T10:33:16.345Z',
        reportId: 1,
        title: "Testowe zgłoszenie",
        content: "Zgadzam się"
      },
      {
        type: {
          id: 2,
          name: "skomentował(a) zgłosenie"
        },
        date: '2022-01-23T10:23:30.120Z',
        reportId: 1,
        title: "Testowe zgłoszenie",
        content: "Testowy komentarz"
      },
    ]
  },
  {
    id: 4,
    firstName: 'Anna',
    lastName: 'Nowak',
    roles: ['User', 'CityAdmin'],
    phoneNumber: '987654321',
    email: 'annanowak21@gmail.com',
    reportsCount: 0,
    commentsCount: 0,
    registerDate: '2022-01-06T10:39:08.573Z',
    banReason: null,
    userStatus: {
      id: 2,
      name: 'Aktywny',
    },
    latestActivity: [
      {
        type: {
          id: 2,
          name: "skomentował(a) zgłosenie"
        },
        date: '2022-01-23T10:33:16.345Z',
        reportId: 1,
        title: "Testowe zgłoszenie",
        content: "Ju się tym zajmujemy"
      },
      {
        type: {
          id: 3,
          name: "dodał(a) feedback"
        },
        date: '2022-01-23T10:23:30.120Z',
        reportId: 1,
        title: "Testowe zgłoszenie",
        content: "Sprawa rozwiązana"
      },
    ]
  },
  {
    id: 5,
    firstName: 'Tomasz',
    lastName: 'Kulik',
    roles: ['User'],
    phoneNumber: '678954321',
    email: 'tomek98@gmail.com',
    reportsCount: 2,
    commentsCount: 1,
    registerDate: '2021-12-23T10:39:08.573Z',
    banReason: null,
    userStatus: {
      id: 1,
      name: 'Nowy',
    },
    latestActivity: []
  },
  {
    id: 6,
    firstName: 'Sebastian',
    lastName: 'Rycki',
    roles: ['User'],
    phoneNumber: '000111222',
    email: 'sebix04@gmail.com',
    banReason: "Używanie niecenzuralnych słów",
    reportsCount: 1,
    commentsCount: 0,
    registerDate: '2022-01-18T10:39:08.573Z',
    userStatus: {
      id: 3,
      name: 'Zablokowany',
    },
    latestActivity: [
      {
        type: {
          id: 1,
          name: "dodał(a) zgłoszenie"
        },
        date: '2022-01-23T10:39:08.573Z',
        reportId: 1,
        title: "Testowe zgłoszenie2",
        content: "Kurwa kiedy ktoś się tym wreszcie zajmie?!!",
      },
    ]
  },
  {
    id: 7,
    firstName: '',
    lastName: '',
    roles: ['User', 'Admin', 'Dev'],
    phoneNumber: '000999888',
    email: 'admin@connectedcity.com',
    reportsCount: 0,
    commentsCount: 0,
    registerDate: '2021-12-3T10:39:08.573Z',
    banReason: null,
    userStatus: {
      id: 2,
      name: 'Aktywny',
    },
    latestActivity: [
      {
        type: {
          id: 3,
          name: "dodał(a) feedback"
        },
        date: '2022-01-23T10:23:30.120Z',
        reportId: 1,
        title: "Testowe zgłoszenie",
        content: "Sprawa rozwiązana"
      },
    ]
  },
]