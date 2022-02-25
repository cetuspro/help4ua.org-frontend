import { userSidebarNavigationConfig } from '@/app/config/navigationConfig'
import { useAuth } from '../../../app/hooks/useAuth'
import { Link } from 'react-router-dom'

const UserSidebarMenu = () => {
  const { roles } = useAuth()

  return (
    <ul className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col justify-between text-sm lg:text-base bg-white rounded-xl px-4 py-4 lg:min-w-max">
      {userSidebarNavigationConfig
        .filter(
          (item) =>
            item?.permissions === undefined ||
            item?.permissions.some((permission) => roles.includes(permission)),
        )
        .map(({ id, route, icon: Icon, label }) => (
          <li key={id}>
            <Link
              to={route}
              className="flex items-center gap-4 py-3 px-4 hover:bg-gray-200 rounded-md lg:justify-start">
              {Icon && <Icon size={20} aria-hidden="true" />}
              {label}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default UserSidebarMenu
