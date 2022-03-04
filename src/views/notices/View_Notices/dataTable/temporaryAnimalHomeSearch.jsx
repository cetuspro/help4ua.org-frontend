import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { route } from '@/app/router/urls/routes'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getAnimal, getPeriod } from './DataTable_Notices'
import { getBoolValue } from './temporaryAnimalHomeOffer'
import NoticeDetailsItem from '@/views/notices/View_Notices/NoticeDetailsItem'

export const temporaryAnimalHomeSearch = () => {
  const { t } = useTranslation()
  return [
    {
      name: t('common.animalType'),
      selector: ({ animalType }) => getAnimal(t, Number(animalType)),
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
      name: t('common.okres'),
      selector: ({ period }) => getPeriod(t, Number(period)),
    },
    {
      name: t('common.miasto'),
      selector: ({ cityName }) => cityName || '-',
    },
  ]
}

export const TemporaryAnimalHomeSearchExpandedComponent = ({
  data: {
    description,
    name,
    region,
    cityName,
    phoneNumber,
    email,
    animalType,
    isDelivery,
    arrivalDateStr,
    address,
    period,
    id,
    createdAt,
  },
}) => {
  const { t } = useTranslation()
  const getRegion = (val) => voivodeshipsEnum(t).find((item) => item.value === val)?.label ?? ''
  const href =
    location?.lat && location?.long
      ? `http://www.google.com/maps/place/${location?.lat},${location?.long}`
      : `https://www.google.com/maps/search/${cityName ?? ''}+${getRegion(region) ?? ''}+${
          address ?? ''
        }`

  return (
    <div className="text-sm text-center bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded shadow p-3 mb-4">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!name && <NoticeDetailsItem label={t('common.imie')} value={name} />}
          {!!phoneNumber && (
            <NoticeDetailsItem
              label={t('common.telefon')}
              value={
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-bold text-blue-700 hover:text-blue-500">
                  {phoneNumber}
                </a>
              }
            />
          )}
          {!!email && <NoticeDetailsItem label={t('form.email')} value={email} />}
          {(cityName || getRegion(region) || address) && (
            <NoticeDetailsItem
              label={t('common.adres')}
              value={
                <a
                  href={href}
                  target={'_blank'}
                  rel={'noreferrer'}
                  title="Zobacz na mapie"
                  className="flex flex-col text-blue-700 hover:text-blue-500 items-start">
                  {cityName || getRegion(region) ? (
                    <span>
                      {cityName}, {getRegion(region)}
                    </span>
                  ) : (
                    ''
                  )}
                  <span>{address}</span>
                </a>
              }
            />
          )}
          {!!animalType && (
            <NoticeDetailsItem
              label={t('form.whatAnimalType')}
              value={getAnimal(t, Number(animalType))}
            />
          )}
          {!!isDelivery && (
            <NoticeDetailsItem
              label={t('form.offerTransport')}
              value={getBoolValue(t, isDelivery)}
            />
          )}
          {!!period && (
            <NoticeDetailsItem label={t('form.period')} value={getPeriod(t, Number(period))} />
          )}
          {!!arrivalDateStr && (
            <NoticeDetailsItem label={t('common.arrival')} value={arrivalDateStr} />
          )}
          {!!description && <NoticeDetailsItem label={t('common.opis')} value={description} />}
          {!!createdAt && (
            <NoticeDetailsItem
              label={t('common.data')}
              value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}
            />
          )}
          {!!id && <NoticeDetailsItem label={t('common.id')} value={id} />}
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
