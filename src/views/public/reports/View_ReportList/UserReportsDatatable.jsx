import Datatable from '@/components/common/Datatable'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import { useNavigate } from 'react-router-dom'
import { truncateText } from '@/app/utils/textTransform'
import usePagination from '@/app/hooks/usePagination'
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'

const columns = [
  {
    name: 'Tytuł',
    cell: ({ title }) => title,
  },
  {
    name: 'Opis',
    selector: (row) => truncateText(row.description, 80),
  },
  {
    name: 'Data zgłoszenia',
    selector: (row) => new Date(row.reportDate).toLocaleString(),
    sortable: true,
  },
  {
    name: 'Typ zgłoszenia',
    cell: ({ reportType }) => reportType?.name,
  },
  {
    name: <FaRegCommentDots size={18} />,
    selector: ({ commentsAmount }) => commentsAmount,
    grow: 0,
  },
  {
    name: <AiOutlineLike size={18} />,
    selector: ({ raisesAmount }) => raisesAmount,
    grow: 0,
  },
]

const UserReportsDatatable = ({ path = route['userReports.view'] }) => {
  const { data } = useQueryContext()
  const navigate = useNavigate()
  const pagination = usePagination()

  return (
    <Datatable
      columns={columns}
      data={data}
      pointerOnHover
      highlightOnHover
      onRowClicked={(row) => navigate(path(row?.id))}
      pagination={pagination}
    />
  )
}

export default UserReportsDatatable
