import { Link } from 'react-router-dom'

const NavItem = ({ to, label, icon: Icon }) => {
  return (
    <Link
      to={to}
      className="nav-link hover:bg-gray-300 text-gray-500 active:text-gray-700 flex items-center justify-center gap-3 ring-offset-4 focus:ring ring-primary-dark text-xs md:text-sm font-semibold text-center rounded-lg outline-none transition-all duration-200 px-4 py-2">
      {Icon && <Icon size={22} color="currentColor" />}
      <span className={`${Icon ? 'hidden md:block' : ''}`}>{label}</span>
    </Link>
  )
}

export default NavItem
