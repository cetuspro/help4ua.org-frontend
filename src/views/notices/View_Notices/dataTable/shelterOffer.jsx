import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { getPeriod, getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

export const shelterOfferColumns = () => {
  const {t} = useTranslation()
  
  return (
    [
      {
        name: t('common.miasto'),
        selector: ({ cityName }) => cityName,
      },
      {
        name: t('common.miejsca'),
        selector: ({ accommodationPlacesCount }) => accommodationPlacesCount,
      },
      {
        name: t('common.imie'),
        selector: ({ name }) => name,
      },
      {
        name: t('common.adres'),
        cell: ({ address, location }) => <a
          href={`http://www.google.com/maps/place/${location?.lat},${location?.long}`}
          className="text-blue-400 hover:text-blue-600"
          target="_blank"
          rel="noreferrer"
          title="Zobacz na mapie"
        >{address}</a>,
      },
      {
        name: t('common.telefon'),
        selector: ({ phoneNumber }) => phoneNumber,
      },
      {
        name: t('common.opis'),
        selector: ({ description }) => description?.slice(0, 100)
      },
    ]
  )
}
const Item = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}


export const ShelterOfferExpandedComponent = ({data: {
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
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`
  return (
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <Item label={t("common.opis")} value={description}/>}
          <Item label={t("common.adres")} value={!!(cityName || getRegion(region) || address) ? (
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
          {!!name && <Item label={t("common.imie")} value={name}/>}
          {!! phoneNumber &&<Item label={t("common.telefon")} value={phoneNumber}/>}
          {!! period &&<Item label={t("common.okres")}value={getPeriod(t, parseInt(period))}/>}
          {!! createdAt &&<Item label={t("common.data")}value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label={t("common.id")} value={id}/>}
        </div>
        <div className="flex-1">
          {!!accommodationPlacesCount && <Item label={t("common.miejsca")} value={accommodationPlacesCount}/>}
          {!!bedCount && <Item label={t("common.lozka")} value={bedCount}/>}
          <Item label={t("common.dzieci")} value={getValue(isAcceptedChild)}/>
          <Item label={t("common.zwierzaki")} value={getValue(isAcceptedAnimal)}/>
          <Item label={t("common.pralka")} value={getValue(hasWashingMachine)}/>
          <Item label={t("common.jedzenie")} value={getValue(isCatering)}/>
          <Item label={t("common.transport")} value={getValue(isDelivery)}/>
        </div>
      </div>
      <Link to={route['notices.view'](id)} className="text-blue-500 hover:text-blue-300 mt-5 inline-block font-bold">Link</Link>
    </div>
  )
}