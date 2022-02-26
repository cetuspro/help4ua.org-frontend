import Datatable from '@/components/common/Datatable'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { useNavigate } from 'react-router-dom'
import usePagination from '@/app/hooks/usePagination'
import dayjs from 'dayjs'
import { route } from '@/app/router/urls/routes'
import { Link } from 'react-router-dom'
import { isBool } from '@/app/utils/isBool'
import { periodsEnum } from '@/app/config/enum/periods'

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
    selector: ({ name }) => name,
  },
  {
    name: 'Adres',
    cell: ({ address, location }) => <a
      href={`http://www.google.com/maps/place/${location?.lat},${location?.long}`}
      className="text-blue-400 hover:text-blue-600"
      target="_blank"
      rel="noreferrer"
      title="Zobacz na mapie"
    >{address}</a>,
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

const getValue = val => isBool(val) ? (
  val ? 'TAK' : 'NIE'
) : (
  "Brak danych"
)

const getPeriod = val => periodsEnum.find(item => item.value === val)?.label ?? "Brak danych";

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
  id,
  name,
  accommodationPlacesCount,
  phoneNumber,
  createdAt,
}}) => {
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${region??''}+${address??''}`
  return (
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          <Item label="Adres:" value={
            <a
              href={href}
              target={'_blank'}
              rel={'noreferrer'}
              title="Zobacz na mapie"
              className="flex flex-col text-blue-700 hover:text-blue-500 items-start"
            >
              <span>{cityName}, {region}</span>
              <span>{address}</span>
            </a>}
          />
          {!!name && <Item label="Imię i nazwisko:" value={name}/>}
          {!! phoneNumber &&<Item label="Telefon:" value={phoneNumber}/>}
          {!! period &&<Item label="Na okres:" value={getPeriod(parseInt(period))}/>}
          {!! createdAt &&<Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label="Identyfikator:" value={id}/>}
        </div>
        <div className="flex-1">
          {!!accommodationPlacesCount && <Item label="Liczba miejsc:" value={accommodationPlacesCount}/>}
          {!!bedCount && <Item label="Liczba łóżek:" value={bedCount}/>}
          <Item label="Przyjmę z małym dzieckiem:" value={getValue(isAcceptedChild)}/>
          <Item label="Przyjmę ze zwierzętami:" value={getValue(isAcceptedAnimal)}/>
          <Item label="Dostęp do pralki:" value={getValue(hasWashingMachine)}/>
          <Item label="Zapewniam wyżywienie:" value={getValue(isCatering)}/>
          <Item label="Zapewniam transport:" value={getValue(isDelivery)}/>
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
      expandOnRowClicked
    />
  )
}

export default NoticesDataTable
