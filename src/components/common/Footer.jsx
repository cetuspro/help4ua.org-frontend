import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer id="main-footer" className="max-w-screen-2xl px-4 md:px-8 mx-auto w-full mb-2">
      <div className="container mx-auto">
        <div className="text-gray-500 border-t text-center py-2">
          <Link
            to={route['contact']}>
            {t("header.contact")}
          </Link>
        </div>
        <div className="text-gray-400 text-sm text-center">
          © 2021 - UAPomoc.pl
        </div>
      </div>
    </footer>
  )
}

export default Footer
