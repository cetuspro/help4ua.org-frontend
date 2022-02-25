import { RiAdminLine } from "react-icons/ri"

const UserFullName = ({user, className, showUserRole = true}) => {``
  return (
    <span title={showUserRole && user?.roles?.includes('Admin') ? 'Administrator' : ''}>
      <span className={`${(user?.roles && user.roles?.includes('Admin')) ? 'text-red-400' : ''} ${className}`}>{user?.firstName|| user?.lastName ? `${user?.firstName} ${user?.lastName}` : `Użytkownik#${user.id}`}</span>
      {!!(showUserRole && user?.roles?.includes('Admin')) && <RiAdminLine className="inline-block ml-1"/>}
    </span>
  )
}

export default UserFullName