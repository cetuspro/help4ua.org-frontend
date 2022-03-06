import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { getLanguagesValue } from '../../View_Notices/models/tableList'

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

const TransportOfferCard = () => {
  const { data: {
    description,
    id,
    name,
    phoneNumber,
    createdAt,
    transportFromStr,
    transportToStr,
    carRegoNo,
    ukraineLang,
    englishLang,
    germanyLang,
    polishLang
  } } = useQueryContext()
  const { t } = useTranslation();

  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          {!!name && <Item label="Imię:" value={name}/>}
          {!! phoneNumber &&<PhoneItem label="Telefon:" value={phoneNumber}/>}
          {!! transportFromStr &&<Item label="Transport z:" value={transportFromStr}/>}
          {!! transportToStr &&<Item label="Transport do:" value={transportToStr}/>}
          {!! carRegoNo &&<Item label="Numer rejestracyjny:" value={carRegoNo}/>}
          {!! createdAt &&<Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label="Identyfikator ogłoszenia:" value={id}/>}
          { (ukraineLang || englishLang || germanyLang || polishLang) &&
          <Item label={`${t("form.language")}:`}
                value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
          />
          }
        </div>
      </div>
      <Button to={route['notices.list4']} className="mt-10 mx-auto w-fit" size="small">Wróć do listy ogłoszeń</Button>
    </Card>
  )
}

export default TransportOfferCard
