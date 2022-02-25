import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import { useMemo } from 'react'
import Datatable from '@/components/common/Datatable'
import { useNavigate } from 'react-router-dom'
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import usePagination from '../../../app/hooks/usePagination'

const badgeColors = {
  0: 'badge',
  10: 'badge',
  20: 'badge-success',
  30: 'badge-warning',
  40: 'badge-danger',
}

const columns = [
  {
    name: 'Tytuł',
    selector: row => row.title?.length > 40 ? row.title.slice(0, 40)+'...' : row.title,
  },
  {
    name: 'Data zgłoszenia',
    selector: row => (new Date(row.reportDate)).toLocaleString(),
    sortable: true,
  },
  {
    name: 'Typ zgłoszenia',
    selector: row => row?.reportType?.name,
  },
  {
    name: 'Status',
    cell: ({reportStatus}) => (
      <span className={reportStatus?.id in badgeColors ? badgeColors[reportStatus?.id] : "badge"}>{reportStatus?.name}</span>
    ),
  },
  {
    name: <FaRegCommentDots size={18} />,
    selector: row => row?.commentsAmount,
    grow: 0,
  },
  {
    name: <AiOutlineLike size={18} />,
    selector: row => row?.raisesAmount,
    grow: 0,
  }
];

const ReportList = () => {
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

export default ReportList
