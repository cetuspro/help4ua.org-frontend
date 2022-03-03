import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

export const medicalAssistanceSearch = () => {
  const { t } = useTranslation()
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
      name: t('common.telefon'),
      selector: ({ phoneNumber }) => phoneNumber,
    },
    {
      name: t('common.email'),
      selector: ({ email }) => email,
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


export const MedicalAssistanceSearchExpandedComponent = ({data: {
  description,
  descriptionUA,
  cityName,
  region,
  address,
  location,
  id,
  name,
  phoneNumber,
  email,
  createdAt,
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
          {!!phoneNumber &&
          <Item label={t('common.telefon')} value={
            <a
              href={`tel:${phoneNumber}`}
              className="flex flex-col text-blue-700 hover:text-blue-500 items-start"
            >
              {phoneNumber}
            </a>
            }
          />
          }
          {!! email &&
            <Item label={t('common.email')} value={
              <a
                href={`mailto:${email}`}
                className="flex flex-col text-blue-700 hover:text-blue-500 items-start"
              >
                {email}
              </a>
              } 
            /> 
          }
          {!! createdAt &&<Item label={t('common.data')} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label={t('common.id')} value={id}/>}
        </div>
      </div>
    </div>
  )
}