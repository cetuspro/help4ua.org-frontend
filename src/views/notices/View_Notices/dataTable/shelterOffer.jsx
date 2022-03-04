import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { getPeriod, getValue, getLanguagesValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

export const shelterOfferStyles = {  
  rows: { style: { display: 'none' }},
  table: { style: { background: 'transparent' }},
  expanderRow: { style: { background: 'transparent' }},
}

export const shelterOfferConfig = {
  noTableHead: true,
  expandableRowsHideExpander: true,
  expandableRowExpanded: () => true,
}

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
        selector: ({ phoneNumber }) =>  <a href={`tel:${phoneNumber}`} className="font-bold text-blue-700 hover:text-blue-500">{phoneNumber}</a>,
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
    <div className="mb-2 flex gap-2">
      <span className="">{label}:</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}
const PhoneItem = ({label, value}) => {
  return (
    <div className="mb-2 flex gap-2">
      <span className="">{label}</span>
      <a href={`tel:${value}`} className="font-bold text-blue-700 hover:text-blue-500">{value}</a>
    </div>
  )
}

export const ShelterOfferExpandedComponent = ({data: {
  description,
  descriptionUA,
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
  polishLang,
}}) => {
  const { t } = useTranslation();
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`
  return (
    <div className="text-sm text-center bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded shadow p-3 mb-4">
      <div className="flex md:gap-5 flex-col md:flex-row text-left">
        <div className="flex-1">
          {!!description && <Item label={t("common.opis")} value={description}/>}
          {!!descriptionUA && <Item label={t("common.opisUA")} value={descriptionUA}/>}
          {(cityName || getRegion(region) || address) && <Item label={t("common.adres")} value={
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
          }
          />}
          {!!name && <Item label={t("common.imie")} value={name}/>}
          {!!phoneNumber && <PhoneItem label={t("common.telefon")} value={phoneNumber}/>}
          {!!period && <Item label={t("common.okres")} value={getPeriod(t, parseInt(period))}/>}
          {!!createdAt && <Item label={t("common.data")} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!!id && <Item label={t("common.id")} value={id}/>}
        </div>

        <div className="flex-1">
          {!!accommodationPlacesCount && <Item label={t("common.miejsca")} value={accommodationPlacesCount}/>}
          {!!bedCount && <Item label={t("common.lozka")} value={bedCount}/>}
          {!!isAcceptedChild && <Item label={t("common.dzieci")} value={getValue(isAcceptedChild)}/>}
          {!!isAcceptedAnimal && <Item label={t("common.zwierzaki")} value={getValue(isAcceptedAnimal)}/>}
          {!!hasWashingMachine && <Item label={t("common.pralka")} value={getValue(hasWashingMachine)}/>}
          {!!isCatering && <Item label={t("common.jedzenie")} value={getValue(isCatering)}/>}
          {!!isDelivery && <Item label={t("common.transport")} value={getValue(isDelivery)}/>}
          { (ukraineLang || englishLang || germanyLang || polishLang) &&
            <Item label={t("form.language")}
                 value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
            />
          }
          <Item label={t("common.uniqueLink")} value={<Link to={route['notices.view'](id)} className="text-blue-700 hover:text-blue-500 inline-block font-semibold">Link</Link>}/>
        </div>
      </div>
    </div>
  )
}