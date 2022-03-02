import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'
import { FaHeart } from 'react-icons/all'

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer id="main-footer" className="max-w-screen-2xl px-4 md:px-8 mx-auto w-full mb-2">
      <div className="container mx-auto">
        <div className="text-gray-500 border-t text-center py-2">
          <Link
            className="mx-2"
            to={route['contact']}>
            {t("header.contact")}
          </Link>
          <Link
            className="mx-2"
            to={route['rodo']}>
            {t("header.rodo")}
          </Link>
          
        </div>
        <div className="text-gray-400 text-sm text-center flex flex-col sm:flex-row justify-center py-2">
          <div>© 2022 - UAPomoc.pl</div>
          <div className='mx-2 flex justify-center content-center'>
            <span>Made with</span>
            <FaHeart className="mx-1 mt-0.5 text-sm"/>
            <span>by</span>
            <a className="mx-1" target="_blank" href="https://cetuspro.com">cetuspro.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
