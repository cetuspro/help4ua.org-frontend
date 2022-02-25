import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Datatable from '@/components/common/Datatable'
import UserAvatar from '@/components/common/UserAvatar'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBuildingHouse, BiCodeAlt, BiServer } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import usePagination from '../../../app/hooks/usePagination'
import UserFullName from '../../../components/user/UserFullName'

const badgeColors = {
  0: 'badge',
  1: 'badge-success',
  2: 'badge-danger',
  3: 'badge',
}

const roleIcons = {
  'User': <AiOutlineUser size={18} color="green"/>,
  'Admin': <BiServer size={18} color="firebrick"/>,
  'CityAdmin': <BiBuildingHouse size={18} color="darkorange"/>,
  'Dev': <BiCodeAlt size={18} color="blue"/>,
}

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
  {
    name: 'Rola',
    cell: row =>
      <div>{row.roles?.slice(row.roles?.length > 1 ? 1 : 0).map(role => 
        <div className="flex gap-1 items-center" key={role}>
          {role in roleIcons ? roleIcons[role] : roleIcons['User']}{role}
        </div>
      )}</div>
  },
  {
    name: 'Status',
    cell: row => <span className={row?.userStatus?.id in badgeColors ? badgeColors[row?.userStatus?.id] : "badge"}>{row.userStatus?.name}</span>,
  },
];

const UserList = () => {
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

export default UserList
