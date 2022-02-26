import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { useAuth } from '@/app/hooks/useAuth'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import { dropdownNavigationConfig } from '@/app/config/navigationConfig'
import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'

const UserDropdown = () => {
  const { email, roles, isAuthenticated } = useAuth()
  const {t} = useTranslation();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="bg-gray-200 hover:bg-gray-300 text-gray-500 active:text-gray-700 flex items-center gap-4 ring-offset-4 focus:ring ring-primary-dark text-sm font-semibold text-center rounded-lg outline-none transition-all duration-200 px-4 py-2">
          <div className="hidden lg:flex items-center gap-4">
            <AiOutlineUser size={24} />
            <HiChevronDown size={22} aria-hidden="true" />
          </div>
          <div className="block lg:hidden">
            <AiOutlineUser size={24} />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {!isAuthenticated && (
              <>
                <Link
                  to={route['auth.login']}
                  className={`group flex rounded-md items-center w-full px-2 py-2 text-sm gap-4 transition-colors text-gray-600 hover:bg-gray-300 hover:text-gray-700`}>
                  Logowanie
                </Link>
                <Link
                  to={route['auth.register']}
                  className={`group flex rounded-md items-center w-full px-2 py-2 text-sm gap-4 transition-colors text-gray-600 hover:bg-gray-300 hover:text-gray-700`}>
                  Rejestracja
                </Link>
              </>
            )}
            {dropdownNavigationConfig
              .filter(
                (item) =>
                  item?.permissions === undefined ||
                  item?.permissions.some((permission) => roles.includes(permission)),
              )
              .map(({ route, icon: Icon, id, label }) => (
                <Link
                  key={id}
                  to={route}
                  className={`group flex rounded-md items-center w-full px-2 py-2 text-sm gap-4 transition-colors text-gray-600 hover:bg-gray-300 hover:text-gray-700`}>
                  {Icon && <Icon size={20} aria-hidden="true" />}
                  {label}
                </Link>
              ))}
          </div>
          {isAuthenticated && (
            <div className="px-1 py-1 ">
              <Menu.Item>
                <LogoutButton />
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserDropdown
