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

const TransportOfferCard = () => {
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
    transportFromStr,
    transportToStr,
    carRegoNo
  } } = useQueryContext()
  const { t } = useTranslation();
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`

  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          {!!name && <Item label="Imię:" value={name}/>}
          {!! phoneNumber &&<Item label="Telefon:" value={phoneNumber}/>}
          {!! transportFromStr &&<Item label="Transport z:" value={transportFromStr}/>}
          {!! transportToStr &&<Item label="Transport do:" value={transportToStr}/>}
          {!! carRegoNo &&<Item label="Numer rejestracyjny:" value={carRegoNo}/>}
          {!! createdAt &&<Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label="Identyfikator ogłoszenia:" value={id}/>}         
        </div>
      </div>
      <Button to={route['notices.list4']} className="mt-10 mx-auto w-fit" size="small">Wróć do listy ogłoszeń</Button>
    </Card>
  )
}

export default TransportOfferCard
