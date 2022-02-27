import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { getPeriod, getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

export const translationOfferColumns = [
  {
    name: 'Miasto',
    selector: ({ cityName }) => cityName,
  },
  {
    name: 'Imię',
    selector: ({ name }) => name,
  },
  {
    name: 'Adres',
    cell: ({ address, location }) => <a
      href={`http://www.google.com/maps/place/${location?.lat},${location?.long}`}
      className="text-blue-400 hover:text-blue-600"
      target="_blank"
      rel="noreferrer"
      title="Zobacz na mapie"
    >{address}</a>,
  },
  {
    name: 'Telefon',
    selector: ({ phoneNumber }) => phoneNumber,
  },
  {
    name: 'Opis',
    selector: ({ description }) => description?.slice(0, 100)
  },
]
const Item = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}


export const TranslationOfferExpandedComponent = ({data: {
  description,
  cityName,
  region,
  address,
  location,
  id,
  name,
  phoneNumber,
  createdAt,
}}) => {
  const { t } = useTranslation();
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`
  return (
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          <Item label="Adres:" value={!!(cityName || getRegion(region) || address) ? (
            <a
              href={href}
              target={'_blank'}
              rel={'noreferrer'}
              title="Zobacz na mapie"
              className="flex flex-col text-blue-700 hover:text-blue-500 items-start"
            >
              {!!(cityName || getRegion(region)) ? <span>{cityName}, {getRegion(region)}</span> : ''}
              <span>{address}</span>
            </a>
          ) : "Brak danych"}
          />
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