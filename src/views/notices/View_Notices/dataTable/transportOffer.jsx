import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

export const transportOfferColumns = [
  {
    name: 'Imię',
    selector: ({ name }) => name,
  },
  {
    name: 'Telefon',
    selector: ({ phoneNumber }) => phoneNumber,
  },
  {
    name: 'Ilość miejsc',
    selector: ({ accommodationPlacesCount }) => accommodationPlacesCount ? accommodationPlacesCount : '-',
  },
  {
    name: 'Opis',
    selector: ({ description }) => description?.slice(0, 100)
  },
];

const Item = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}


export const TransportOfferExpandedComponent = ({data: {
  description,
  cityName,
  region,
  address,
  bedCount,
  isAcceptedChild,
  isAcceptedAnimal,
  hasWashingMachine,
  period,
  isCatering,
  isDelivery,
  location,
  id,
  name,
  accommodationPlacesCount,
  phoneNumber,
  createdAt,
}}) => {
  const { t } = useTranslation();
  return (
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          {!!name && <Item label="Imię:" value={name}/>}
          {!! phoneNumber &&<Item label="Telefon:" value={phoneNumber}/>}
          {!! createdAt &&<Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label="Identyfikator ogłoszenia:" value={id}/>}
        </div>
      </div>
      <Link to={route['notices.view'](id)} className="text-blue-500 hover:text-blue-300 mt-5 inline-block font-bold">Link</Link>
    </div>
  )
}

export const TransportListItem = () => {
  return (
    <div>
      
    </div>
  )
}