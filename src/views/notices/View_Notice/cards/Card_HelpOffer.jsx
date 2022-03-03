import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import dayjs from 'dayjs'
import { getPeriod, getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'

const Item = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}
const PhoneItem = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <a href={`tel:${value}`} className="font-bold text-blue-700 hover:text-blue-500">{value}</a>
    </div>
  )
}

const HelpOfferCard = () => {
  const { data: {
    description,
    cityName,
    region,
    address,
    location,
    id,
    name,
    phoneNumber,
    createdAt,
  } } = useQueryContext()
  const { t } = useTranslation();
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`

  return (
    <Card>
      <div className="flex flex-col md:flex-row">
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
          {!! phoneNumber &&<PhoneItem label="Telefon:" value={phoneNumber}/>}
          {!! createdAt &&<Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label="Identyfikator ogłoszenia:" value={id}/>}
        </div>
      </div>
      <Button to={route['notices.list5']} className="mt-10 mx-auto w-fit" size="small">Wróć do listy ogłoszeń</Button>
    </Card>
  )
}

export default HelpOfferCard
