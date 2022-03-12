import { route } from '@/app/router/urls/routes'
import Button from '@/components/common/Button'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import PhoneNumber from '@/views/notices/components/common/Fields/PhoneNumber'

const Item = ({ label, value }) => {
  return (
    <div className="py-1 flex gap-1">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

const HelpOfferPopup = ({
  description,
  cityName,
  region,
  address,
  location,
  id,
  name,
  phoneNumber,
  createdAt,
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
    <>
      <div className="flex flex-col">
        <div className="flex-1">
          {!!description && <Item label={`${t('form.description')}:`} value={description} />}
          <Item
            label={`${t('common.adres')}:`}
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
          {!!name && <Item label={`${t('common.imie')}:`} value={name} />}
          {!!phoneNumber && <PhoneNumber id={id} phoneNumber={phoneNumber} showIcon={false}/>}
          {!!createdAt && (
            <Item label={`${t('common.data')}:`} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')} />
          )}
          {!!id && <Item label={`${t('common.id')}:`} value={id} />}
        </div>
      </div>
      <Button to={route['notices.view'](id)} className="mt-5 mx-auto w-fit" size="small">
        {t('form.details')}
      </Button>
    </>
  )
}

export default HelpOfferPopup
