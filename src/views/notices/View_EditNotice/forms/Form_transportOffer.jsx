import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
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

const TransportOfferForm = ({notice, changeNoticeStatus}) => {
  const {
    description,
    cityName,
    region,
    address,
    location,
    id,
    name,
    phoneNumber,
    createdAt,
    type,
  } = notice
  const { t } = useTranslation();
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`

  // TODO: Replace with edit form
  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          {!!name && <Item label="Imię:" value={name}/>}
          {!! phoneNumber &&<Item label="Telefon:" value={phoneNumber}/>}
          {!! id &&<Item label="Identyfikator ogłoszenia:" value={id}/>}
        </div>
      </div>
      <Button onClick={changeNoticeStatus} className="mt-10 mx-auto w-fit" size="small">{type === 2 ? 'Dezaktywuj zgłoszenie' : 'Aktywuj zgłoszenie'}</Button>
    </Card>
  )
}

export default TransportOfferForm
