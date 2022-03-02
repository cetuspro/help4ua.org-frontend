import { Link } from 'react-router-dom'
import logo from '../../assets/img/UAPOMOC.png'
import HorizontalNavigation from './HorizontalNavigation'
import { route } from '@/app/router/urls/routes'

const Header = () => {
  return (
    <div className="relative">
      <div className="px-4 mx-auto">
        <header className="flex items-center py-2 md:py-4">
          <Link
            to={route['index']}
            className="inline-flex items-center h-8 lg:h-12 ring-offset-4 ring-primary-dark focus:ring transition duration-100"
            aria-label="Strona główna">
            <img src={logo} alt="UA Pomoc" className="w-auto h-full" />
          </Link>

          <HorizontalNavigation />
        </header>
      </div>
    </div>
  )
}

export default Header
