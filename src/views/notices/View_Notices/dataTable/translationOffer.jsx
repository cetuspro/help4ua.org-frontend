import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import NoticeDetailsItem from '@/views/notices/View_Notices/NoticeDetailsItem'

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
}}) => {
  const { t } = useTranslation();
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`
  
  return (
    <div className="text-sm text-center bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded shadow p-3 mb-4">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <NoticeDetailsItem label={t('common.opis')} value={description}/>}
          {!!descriptionUA && <NoticeDetailsItem label={t("common.opisUA")} value={descriptionUA}/>}
          {(cityName || getRegion(region) || address) && <NoticeDetailsItem label={t("common.adres")} value={
            <a
              href={href}
              target={'_blank'}
              rel={'noreferrer'}
              title="Zobacz na mapie"
              className="flex flex-col text-blue-700 hover:text-blue-500 items-start"
            >
              {(cityName || getRegion(region)) ? <span>{cityName}, {getRegion(region)}</span> : ''}
              <span>{address}</span>
            </a>
          }
          />}
          {!!name && <NoticeDetailsItem label={t('common.imie')} value={name}/>}
          {!!phoneNumber && <NoticeDetailsItem label={t("common.telefon")} value={ <a href={`tel:${phoneNumber}`} className="font-bold text-blue-700 hover:text-blue-500">{phoneNumber}</a>}/>}
          {!!createdAt && <NoticeDetailsItem label={t('common.data')} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!!id && <NoticeDetailsItem label={t('common.id')} value={id}/>}
          <NoticeDetailsItem label={t("common.uniqueLink")} value={<Link to={route['notices.view'](id)} className="text-blue-700 hover:text-blue-500 inline-block font-bold">Link</Link>}/>
        </div>
      </div>
    </div>
  )
}