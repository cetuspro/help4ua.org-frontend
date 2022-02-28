import { useQueryContext } from '@/app/context/queries/QueryProvider'
import Datatable from '@/components/common/Datatable'
import usePagination from '../../../../app/hooks/usePagination'
import { useSearchParams } from 'react-router-dom'

const columns = [
  {
    name: 'Nazwa',
    selector: ({ name }) => name,
  },
  {
    name: 'Opis',
    selector: ({ description }) => description,
    wrap: true,
  },
  {
    name: 'Lokalizacja',
    cell: ({ region, city, localization }) => (
      <a
        href={
          localization?.latitude && localization?.longitude
            ? `http://www.google.com/maps/place/${localization?.latitude},${localization?.longitude}`
            : `https://www.google.com/maps/search/${cityName ?? ''}+${getRegion(region) ?? ''}`
        }
        className="text-blue-400 hover:text-blue-600"
        target="_blank"
        rel="noreferrer"
        title="Zobacz na mapie">
        {city}, {region?.value}{' '}
      </a>
    ),
    grow: 0,
    minWidth: '250px',
  },
  {
    name: 'Telefon',
    selector: ({ phoneNumber }) => phoneNumber,
    grow: 0,
  },
  {
    name: 'Typ punktu',
    selector: ({ type }) => type?.name,
    grow: 0,
    minWidth: '200px',
    wrap: true,
  },
]

const Item = ({ label, value }) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

export const getValue = (val) => (isBool(val) ? (val ? 'TAK' : 'NIE') : 'Brak danych')

const HelpPointsDataTable = () => {
  const { data } = useQueryContext()
  const pagination = usePagination()
  const [searchParams] = useSearchParams()

  return (
    <Datatable
      columns={columns}
      data={data}
      pagination={pagination}
      paginationPerPage={searchParams.get('pageSize') || '50'}
      paginationComponentOptions={{
        noRowsPerPage: true,
      }}
    />
  )
}

export default HelpPointsDataTable
