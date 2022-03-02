import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { FaCheckCircle } from 'react-icons/all'
import { useTranslation } from 'react-i18next'

const HelpPointCreateSuccess = () => {
  const {t} = useTranslation();
  
  return (
    <div>
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <FaCheckCircle className="text-9xl mx-auto text-green-400"/>
            <h1 className="text-6xl font-medium py-8">{t("success.title")}</h1>
            <p className="text-2xl px-12 font-medium mb-5">
              {t("success.helpPoint")}
              </p>
            <Link
              to={route['index']}
              className="inline-block bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              {t("success.home")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpPointCreateSuccess