import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { FaPhone } from 'react-icons/fa'
import { useState } from 'react'
import NoticeDetailsItem from '@/views/notices/View_Notices/NoticeDetailsItem'
import { getLanguagesValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

export const transportOfferColumns = () => {
  const { t } = useTranslation()
  return [
    {
      name: t('common.imie'),
      selector: ({ name }) => name,
    },
    {
      name: t('common.telefon'),
      selector: ({ phoneNumber }) => (
        <a href={`tel:${phoneNumber}`} className="font-bold text-blue-700 hover:text-blue-500">
          {phoneNumber}
        </a>
      ),
    },
    {
      name: t('common.miejsca'),
      selector: ({ accommodationPlacesCount }) =>
        accommodationPlacesCount ? accommodationPlacesCount : '-',
    },
    {
      name: t('form.transportFromStr'),
      selector: ({ transportFromStr }) => transportFromStr,
    },
    {
      name: t('form.transportToStr'),
      selector: ({ transportToStr }) => transportToStr,
    },
    {
      name: t('form.carRegoNo'),
      selector: ({ carRegoNo }) => carRegoNo,
    },
    {
      name: t('common.opis'),
      selector: ({ description }) => description?.slice(0, 100),
    },
  ]
}

export const TransportOfferExpandedComponent = ({
  data: {
    description,
    descriptionUA,
    id,
    name,
    phoneNumber,
    createdAt,
    carRegoNo,
    transportToStr,
    transportFromStr,
    ukraineLang,
    englishLang,
    germanyLang,
    polishLang,
  },
}) => {
  const { t } = useTranslation()
  return (
    <div className="text-sm text-center bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded shadow p-3 mb-4">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <NoticeDetailsItem label={t('common.opis')} value={description} />}
          {!!descriptionUA && (
            <NoticeDetailsItem label={t('common.opisUA')} value={descriptionUA} />
          )}
          {!!name && <NoticeDetailsItem label={t('common.imie')} value={name} />}
          {!!phoneNumber && <NoticeDetailsItem label={t('common.telefon')} value={phoneNumber} />}
          {!!transportFromStr && (
            <NoticeDetailsItem label={t('form.transportFromStr')} value={transportFromStr} />
          )}
          {!!transportToStr && (
            <NoticeDetailsItem label={t('form.transportToStr')} value={transportToStr} />
          )}
          {!!carRegoNo && <NoticeDetailsItem label={t('form.carRegoNo')} value={carRegoNo} />}
          {!!createdAt && (
            <NoticeDetailsItem
              label={t('common.data')}
              value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}
            />
          )}
          {!!id && <NoticeDetailsItem label={t('common.id')} value={id} />}
          {(ukraineLang || englishLang || germanyLang || polishLang) && (
            <NoticeDetailsItem
              label={t('form.language')}
              value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
            />
          )}
          <NoticeDetailsItem
            label={t('common.uniqueLink')}
            value={
              <Link
                to={route['notices.view'](id)}
                className="text-blue-700 hover:text-blue-500 inline-block font-bold">
                Link
              </Link>
            }
          />
        </div>
      </div>
    </div>
  )
}

export const TransportOfferItem = ({
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
  carRegoNo,
  transportToStr,
  transportFromStr,
}) => {
  const { t } = useTranslation()
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 mb-2 text-sm overflow-hidden shadow">
      <div className="px-3 py-2 bg-gray-100 flex rounded-t-lg">
        <div className="w-1/3 flex">
          Miejsca: <strong className="ml-1.5">{accommodationPlacesCount ?? '-'}</strong>
        </div>
        <div className="w-1/3 flex">
          <FaPhone className="mr-1.5 mt-0.5" /> <strong>{phoneNumber}</strong>
        </div>
        <div className="w-1/3 flex">
          <strong className="ml-1.5">{name}</strong>
        </div>
        <div className="w-1/3 flex">
          <strong className="ml-1.5">{transportFromStr}</strong>
        </div>
        <div className="w-1/3 flex">
          <strong className="ml-1.5">{transportToStr}</strong>
        </div>
        <div className="w-1/3 flex">
          <strong className="ml-1.5">{carRegoNo}</strong>
        </div>
      </div>
      <div className="px-3 py-2 text-gray-700 text-xs whitespace-pre-wrap max-w-full">
        <Desc>{description}</Desc>
        <div className="text-gray-400 text-xs -mb-2 mt-2 text-right">
          {t('common.id')}: {id}
        </div>
      </div>
    </div>
  )
}

const Desc = ({ children: description = '' }) => {
  const [show, setShow] = useState(false)
  if (!description || description?.length < 140) return description
  return (
    <>
      {!show ? description.substring(0, 140) + '...' : description}
      <span
        className="text-blue-900 hover:text-blue-800 cursor-pointer underline px-2"
        onClick={() => setShow(!show)}>
        {show ? 'ukryj' : 'więcej'}
      </span>
    </>
  )
}
