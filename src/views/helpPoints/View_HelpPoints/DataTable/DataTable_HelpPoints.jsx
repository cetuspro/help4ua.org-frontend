import { useQueryContext } from '@/app/context/queries/QueryProvider'
import Datatable from '@/components/common/Datatable'
import usePagination from '../../../../app/hooks/usePagination'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const columns = () => {
  const { t } = useTranslation()
  return [
    {
      name: t('common.nazwa'),
      selector: ({ name }) => name,
    },
    {
      name: t('common.opis'),
      selector: ({ description }) => description,
      wrap: true,
    },
    {
      name: t('common.lokalizacja'),
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
      name: t('common.telefon'),
      selector: ({ phoneNumber }) => <a href={`tel:${phoneNumber}`} className="font-bold text-blue-700 hover:text-blue-500">{phoneNumber}</a>,
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
}

const Item = ({ label, value }) => {
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

export const getValue = (val) => (isBool(val) ? (val ? 'TAK' : 'NIE') : 'Brak danych')

const HelpPointsDataTable = () => {
  const { data } = useQueryContext()
  const pagination = usePagination()
  const [searchParams] = useSearchParams()

  return (
    <Datatable
      columns={columns()}
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
