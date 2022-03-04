import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { getLanguagesValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

export const translationOfferColumns = () => {
  const {t} = useTranslation()
  return [
    {
      name: t('common.miasto'),
      selector: ({ cityName }) => cityName,
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
      selector: ({ phoneNumber }) => <a href={`tel:${phoneNumber}`} className="font-bold text-blue-700 hover:text-blue-500">{phoneNumber}</a>,
    },
    {
      name: t('common.opis'),
      selector: ({ description }) => description?.slice(0, 100)
    },
  ]
}
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

export const TranslationOfferExpandedComponent = ({data: {
  description,
  descriptionUA,
  cityName,
  region,
  address,
  location,
  id,
  name,
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
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <Item label={t('common.opis')} value={description}/>}
          {!!descriptionUA && <Item label={t("common.opisUA")} value={descriptionUA}/>}
          <Item label={t('common.adres')} value={!!(cityName || getRegion(region) || address) ? (
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
          {!!name && <Item label={t('common.imie')} value={name}/>}
          {!! phoneNumber &&<PhoneItem label={t('common.telefon')} value={phoneNumber}/>}
          {!! createdAt &&<Item label={t('common.data')} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label={t('common.id')} value={id}/>}
          { (ukraineLang || englishLang || germanyLang || polishLang) &&
          <Item label={t("form.language")}
                value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
          />
          }
        </div>
      </div>
      <Link to={route['notices.view'](id)} className="text-blue-500 hover:text-blue-300 mt-5 inline-block font-bold">Link</Link>
    </div>
  )
}