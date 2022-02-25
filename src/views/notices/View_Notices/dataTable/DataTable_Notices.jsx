import Datatable from '@/components/common/Datatable'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { useNavigate } from 'react-router-dom'
import usePagination from '@/app/hooks/usePagination'
import dayjs from 'dayjs'
import { route } from '@/app/router/urls/routes'
import { Link } from 'react-router-dom'

const columns = [
  {
    name: 'Miasto',
    selector: ({ cityName }) => cityName,
  },
  {
    name: 'Ilość miejsc',
    selector: ({ accommodationPlacesCount }) => accommodationPlacesCount,
  },
  {
    name: 'Imię i nazwisko',
    selector: ({ firstName, lastName }) => `${firstName || ''} ${lastName || ''}`,
  },
  {
    name: 'Adres',
    cell: ({ address, location }) => <a href={`http://www.google.com/maps/place/${location?.lat},${location?.long}`} className="text-blue-400 hover:text-blue-600">{address}</a>,
  },
  {
    name: 'Telefon',
    selector: ({ phoneNumber }) => phoneNumber,
  },
  {
    name: 'Data dodania',
    selector: ({ createdAt }) => dayjs(createdAt).format('DD.MM.YYYY HH:mm'),
  },
]

const Item = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

const ExpandedComponent = ({data: {
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
  id
}}) => {
  return (
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <Item label="Opis:" value={description}/>
          <Item label="Adres:" value={
            <a
              href={`http://www.google.com/maps/place/${location?.lat},${location?.long}`}
              title="Zobacz na mapie"
              className="flex flex-col"
            >
              <span>{cityName}, {region}</span>
              <span>{address}</span>
            </a>}
          />
          <Item label="Liczba łóżek:" value={bedCount}/>
          <Item label="Na okres:" value={period}/>
          <Item label="Identyfikator:" value={id}/>
        </div>
        <div className="flex-1">
          <Item label="Przyjmę z małym dzieckiem:" value={isAcceptedChild ? 'TAK' : 'NIE'}/>
          <Item label="Przyjmę ze zwierzętami:" value={isAcceptedAnimal ? 'TAK' : 'NIE'}/>
          <Item label="Dostęp do pralki:" value={hasWashingMachine ? 'TAK' : 'NIE'}/>
          <Item label="Zapewniam wyżywienie:" value={isCatering ? 'TAK' : 'NIE'}/>
          <Item label="Zapewniam transport:" value={isDelivery ? 'TAK' : 'NIE'}/>
        </div>
      </div>
      <Link to={route['notices.view'](id)} className="text-blue-500 hover:text-blue-300 mt-5 inline-block">Zobacz szczegóły</Link>
    </div>
  )
}

const NoticesDataTable = () => {
  const { data } = useQueryContext()
  const navigate = useNavigate()
  const pagination = usePagination()

  return (
    <Datatable
      columns={columns}
      data={data}
      pointerOnHover
      highlightOnHover
      pagination={pagination}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
    />
  )
}

export default NoticesDataTable
