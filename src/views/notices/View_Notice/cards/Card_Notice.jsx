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

const NoticeCard = () => {
  const { data: {
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
    ukraineLang,
    englishLang,
    germanyLang,
  } } = useQueryContext()
  const { t } = useTranslation();
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "Brak danych";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`

  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          <Item label="Adres:" value={
            <a
              href={href}
              target={'_blank'}
              rel={'noreferrer'}
              title="Zobacz na mapie"
              className="flex flex-col text-blue-700 hover:text-blue-500 items-start"
            >
              <span>{cityName}, {getRegion(region)}</span>
              <span>{address}</span>
            </a>}
          />
          {!!name && <Item label="Imię i nazwisko:" value={name}/>}
          {!! phoneNumber &&<Item label="Telefon:" value={phoneNumber}/>}
          {!! period &&<Item label="Na okres:" value={getPeriod(parseInt(period))}/>}
          {!! createdAt &&<Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label="Identyfikator:" value={id}/>}
        </div>
        <div className="flex-1">
          {!!accommodationPlacesCount && <Item label="Liczba miejsc:" value={accommodationPlacesCount}/>}
          {!!bedCount && <Item label="Liczba łóżek:" value={bedCount}/>}
          <Item label="Przyjmę z małym dzieckiem:" value={getValue(isAcceptedChild)}/>
          <Item label="Przyjmę ze zwierzętami:" value={getValue(isAcceptedAnimal)}/>
          <Item label="Dostęp do pralki:" value={getValue(hasWashingMachine)}/>
          <Item label="Zapewniam wyżywienie:" value={getValue(isCatering)}/>
          <Item label="Zapewniam transport:" value={getValue(isDelivery)}/>
          <Item label="Język ukraiński:" value={getValue(ukraineLang)}/>
          <Item label="Język niemiecki:" value={getValue(englishLang)}/>
          <Item label="Język angielski:" value={getValue(germanyLang)}/>
        </div>
      </div>
      <Button to={route['notices.list']} className="mt-10 mx-auto w-fit" size="small">Wróć do listy ogłoszeń</Button>
    </Card>
  )
}

export default NoticeCard
