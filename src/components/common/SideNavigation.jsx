import { sideNavigationConfig } from '@/app/config/navigationConfig'
import { route } from '@/app/router/urls/routes'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/city-200.png'

const SideNavigation = ({hidden = false, toggleNav}) => {

  return <>
    <div
      className={`lg:hidden fixed w-full h-full z-20 fade-transition duration-300 bg-[rgba(0,0,0,.5)] ${hidden ? "opacity-0 invisible" : "opacity-1 visible"}`}
      onClick={toggleNav}
    ></div>
    <div className={`side-nav text-black bg-white dark:text-gray-400 dark:bg-gray-900 body-font p-5 z-30 shadow-lg ${hidden ? "-translate-x-full" : "translate-x-0"} lg:translate-x-0 transition-transform duration-300`}>
      <Link
        to={route['index']}
        className="flex title-font font-medium items-center text-white mb-4 lg:mb-0 w-60">
        <img src={logo} alt="Conected City" className="mb-4" />
      </Link>
      <nav>
        <ul>
          {sideNavigationConfig.map(({Icon, ...item}) => (
            item?.route ? (
              <li
                key={item?.label}
                className="text-gray-600 dark:text-gray-400 transition-transform ease-in-out hover:translate-x-1 duration-300 my-1">
                <NavLink
                  end
                  to={item.route}
                  className={({isActive}) => (isActive ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-800")+" flex p-2 items-center rounded"}>
                  <span className="w-8 font-bold text-xl">{!!Icon && <Icon/>}</span>
                  <span>{item?.label}</span>
                </NavLink>
              </li>
              
            ) : (
              <li
                key={item?.label}
                className="uppercase text-gray-400 dark:text-gray-500 text-sm my-3">
                {item?.label}
              </li>
            )
          ))}
        </ul>
      </nav>
    </div>
  </>
}

export default SideNavigation