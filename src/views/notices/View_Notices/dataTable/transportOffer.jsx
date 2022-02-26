import dayjs from 'dayjs'

export const transportOfferColumns = [
  {
    name: 'Ilość miejsc',
    selector: ({ accommodationPlacesCount }) => accommodationPlacesCount,
  },
  {
    name: 'Imię',
    selector: ({ name }) => name,
  },
  {
    name: 'Telefon',
    selector: ({ phoneNumber }) => phoneNumber,
  },
  {
    name: 'Data dodania',
    selector: ({ createdAt }) => dayjs(createdAt).format('DD.MM.YYYY HH:mm'),
  },
];


export const TransportOfferExpandedComponent = null;