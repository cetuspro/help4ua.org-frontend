import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import dayjs from 'dayjs'

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

  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <Item label="Opis:" value={description}/>
          <Item label="Adres:" value={
            <a
              href={`http://www.google.com/maps/place/${location?.lat},${location?.long}`}
              title="Zobacz na mapie"
              className="flex flex-col text-blue-500 hover:text-blue-300"
            >
              <span>{cityName}, {region}</span>
              <span>{address}</span>
            </a>}
          />
          <Item label="Imię i nazwisko:" value={name}/>
          <Item label="Telefon:" value={phoneNumber}/>
          <Item label="Na okres:" value={period}/>
          <Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>
          <Item label="Identyfikator:" value={id}/>
        </div>
        <div className="flex-1">
          <Item label="Liczba miejsc:" value={accommodationPlacesCount}/>
          <Item label="Liczba łóżek:" value={bedCount}/>
          <Item label="Przyjmę z małym dzieckiem:" value={isAcceptedChild ? 'TAK' : 'NIE'}/>
          <Item label="Przyjmę ze zwierzętami:" value={isAcceptedAnimal ? 'TAK' : 'NIE'}/>
          <Item label="Dostęp do pralki:" value={hasWashingMachine ? 'TAK' : 'NIE'}/>
          <Item label="Zapewniam wyżywienie:" value={isCatering ? 'TAK' : 'NIE'}/>
          <Item label="Zapewniam transport:" value={isDelivery ? 'TAK' : 'NIE'}/>
          <Item label="Język ukraiński:" value={ukraineLang ? 'TAK' : 'NIE'}/>
          <Item label="Język niemiecki:" value={englishLang ? 'TAK' : 'NIE'}/>
          <Item label="Język angielski:" value={germanyLang ? 'TAK' : 'NIE'}/>
        </div>
      </div>
      <Button to={route['notices.list']} className="mt-10 mx-auto w-fit" size="small">Wróć do listy ogłoszeń</Button>
    </Card>
  )
}

export default NoticeCard
