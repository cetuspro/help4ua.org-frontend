import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import dayjs from 'dayjs'
import { getPeriod, getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'

const Item = ({ label, value }) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

const TransportSearchPopup = ({
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

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description} />}
          {!!name && <Item label="Imię:" value={name} />}
          {!!phoneNumber && <Item label="Telefon:" value={phoneNumber} />}
          {!!createdAt && (
            <Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')} />
          )}
          {!!id && <Item label="Identyfikator ogłoszenia:" value={id} />}
        </div>
      </div>
      <Button to={route['notices.view'](id)} className="mt-10 mx-auto w-fit" size="small">
        Szczegóły
      </Button>
    </>
  )
}

export default TransportSearchPopup
