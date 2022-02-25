import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import { useMemo } from 'react'
import Datatable from '@/components/common/Datatable'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import usePagination from '../../../app/hooks/usePagination'
import UserFullName from '@/components/user/UserFullName'

const columns = [
  {
    name: 'Tytuł',
    selector: row => row.title?.length > 40 ? row.title.slice(0, 40)+'...' : row.title,
  },
  {
    name: 'Zgłaszający',
    cell: ({user}) => <Link to={`/admin/users/${user?.id}`} className="text-blue-600 hover:text-blue-400">
      <UserFullName user={user} showUserRole={false} />
    </Link>,
    ignoreRowClick: true,
  },
  {
    name: 'Data zgłoszenia',
    cell: ({reportDate}) => (new Date(reportDate)).toLocaleString(),
    sortable: true,
  },
  {
    name: 'Typ zgłoszenia',
    selector: row => row?.reportType?.name,
  },
];

const PendingReportList = () => {
  const navigate = useNavigate();
  const {data: reports} = useQueryContext();
  const sortedReports = useMemo(() => reports.sort((a, b) => {
    if (a?.reportDate < b?.reportDate)
      return 1
    if (a?.reportDate > b?.reportDate)
      return -1
    return 0
  }), [reports])
  const pagination = usePagination()

  return (
    <Datatable
      columns={columns}
      data={sortedReports}
      onRowClicked={({id}) => navigate(route['admin.report'](id))}
      highlightOnHover={true}
      pointerOnHover={true}
      pagination={pagination}
    />
  )
}

export default PendingReportList
