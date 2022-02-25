import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Datatable from '@/components/common/Datatable'
import UserAvatar from '@/components/common/UserAvatar'
import { useNavigate } from 'react-router-dom'
import usePagination from '../../../app/hooks/usePagination'
import UserFullName from '../../../components/user/UserFullName'

const columns = [
  {
    name: 'Użytkownik',
    cell: row => (
      <div className="flex gap-2">
        <UserAvatar user={row} />
        <UserFullName user={row} showUserRole={false} />
      </div>
    )
  },
  {
    name: 'Numer telefonu',
    selector: row => row.phoneNr,
  },
];

const SubAdminList = () => {
  const navigate = useNavigate();
  const {data: users} = useQueryContext();
  const pagination = usePagination()

  return (
    <Datatable
      columns={columns}
      data={users}
      onRowClicked={({id}) => navigate(route['admin.user'](id))}
      highlightOnHover={true}
      pointerOnHover={true}
      pagination={pagination}
    />
  )
}

export default SubAdminList
