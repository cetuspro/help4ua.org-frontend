import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
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

const ShelterSearchForm = ({notice}) => {
  const {
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
    ukraineLang,
    englishLang,
    germanyLang,
    status,
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
          {!! period &&<Item label="Na okres:" value={getPeriod(t, parseInt(period))}/>}
          {!! id &&<Item label="Identyfikator ogłoszenia:" value={id}/>}
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
    </Card>
  )
}

export default ShelterSearchForm
