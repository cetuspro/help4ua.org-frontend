import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { route } from '@/app/router/urls/routes'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getAnimal, getPeriod } from './DataTable_Notices'

export const temporaryAnimalHomeOfferColumns = () => {
  const { t } = useTranslation()
  return [
    {
      name: t('common.animalType'),
      selector: ({ animalType }) => getAnimal(t, Number(animalType)),
    },
    {
      name: t('form.howMany'),
      selector: ({ accommodationPlacesCount }) => accommodationPlacesCount || '-',
    },
    {
      name: t('common.telefon'),
      selector: ({ phoneNumber }) => phoneNumber,
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

const Item = ({ label, value }) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

export const getBoolValue = (t, value) =>
  value !== null ? (value ? t('common.tak') : t('common.nie')) : ''

export const TemporaryAnimalHomeOfferExpandedComponent = ({
  data: {
    description,
    cityName,
    region,
    address,
    email,
    period,
    isCatering,
    isDelivery,
    location,
    shouldRefund,
    animalType,
    hasExperience,
    id,
    name,
    accommodationPlacesCount,
    phoneNumber,
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
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!name && <Item label={t('common.imie')} value={name} />}
          {!!phoneNumber && <Item label={t('common.telefon')} value={phoneNumber} />}
          {!!email && <Item label={t('form.email')} value={email} />}
          {!!description && <Item label={t('common.opis')} value={description} />}
          <Item
            label={t('common.adres')}
            value={
              cityName || getRegion(region) || address ? (
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
              ) : (
                'Brak danych'
              )
            }
          />

          {!!animalType && (
            <Item label={t('form.whatAnimalType')} value={getAnimal(t, Number(animalType))} />
          )}
          {!!accommodationPlacesCount && (
            <Item label={t('form.howMany')} value={accommodationPlacesCount} />
          )}

          {!!hasExperience && (
            <Item
              label={t('form.hasExperienceWithAnimals')}
              value={getBoolValue(t, hasExperience)}
            />
          )}
          {!!isDelivery && (
            <Item label={t('form.offerTransport')} value={getBoolValue(t, isDelivery)} />
          )}

          {!!shouldRefund && (
            <Item label={t('form.constRefund')} value={getBoolValue(t, shouldRefund)} />
          )}

          {!!period && <Item label={t('form.period')} value={getPeriod(t, Number(period))} />}

          {!!createdAt && (
            <Item label={t('common.data')} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')} />
          )}
          {!!id && <Item label={t('common.id')} value={id} />}
        </div>
      </div>
      <Link
        to={route['notices.view'](id)}
        className="text-blue-500 hover:text-blue-300 mt-5 inline-block font-bold">
        Link
      </Link>
    </div>
  )
}
