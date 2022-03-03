import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { route } from '@/app/router/urls/routes'

export const transportSearchColumns = () => {
  const {t} = useTranslation()
  return [
    {
      name: t('common.imie'),
      selector: ({ name }) => name,
    },
    {
      name: t('common.telefon'),
      selector: ({ phoneNumber }) => <a href={`tel:${phoneNumber}`} className="font-bold text-blue-700 hover:text-blue-500">{phoneNumber}</a>,
    },
    {
      name: t('common.miejsca'),
      selector: ({ accommodationPlacesCount }) => accommodationPlacesCount ? accommodationPlacesCount : '-',
    },
    {
      name: t('form.transportFromStr'),
      selector: ({transportFromStr }) => transportFromStr,
    },
    {
      name: t('form.transportToStr'),
      selector: ({transportToStr }) => transportToStr,
    },  
    {
      name: t('common.opis'),
      selector: ({ description }) => description?.slice(0, 100)
    },
  ];
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

export const TransportSearchExpandedComponent = ({data: {
  description,
  descriptionUA,
  id,
  name,
  phoneNumber,
  createdAt,
  transportToStr,
  transportFromStr,
}}) => {
  const { t } = useTranslation();
  return (
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          {!!descriptionUA && <Item label={t("common.opisUA")} value={descriptionUA}/>}
          {!!name && <Item label="Imię:" value={name}/>}
          {!! phoneNumber &&<PhoneItem label="Telefon:" value={phoneNumber}/>}
          {!!transportFromStr && <Item label="Transport z:" value={transportFromStr}/>}
          {!!transportToStr && <Item label="Transport do:" value={transportToStr}/>}          
          {!! createdAt &&<Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label="Identyfikator ogłoszenia:" value={id}/>}
        </div>
      </div>
      <Link to={route['notices.view'](id)} className="text-blue-500 hover:text-blue-300 mt-5 inline-block font-bold">Link</Link>
    </div>
  )
}