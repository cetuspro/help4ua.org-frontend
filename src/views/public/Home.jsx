import heroImg from '../../assets/img/hero.jpg'
import { Link } from 'react-router-dom'
import { FiMap, FiHome, FiEdit, FiTruck, FiGift } from 'react-icons/fi'
import { MdOutlinePeopleAlt, MdSensors } from 'react-icons/md'
import { BiBrain } from 'react-icons/bi'
import { AiOutlineTrophy } from 'react-icons/ai'
import { CgInfinity } from 'react-icons/cg'
import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const {t} = useTranslation();
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12 my-10">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div className="xl:w-4/12 flex flex-col justify-center">
              <div className="sm:text-center lg:text-left lg:py-12 xl:py-24">
                <p className="text-yellow-400 text-xl xl:text-xl font-semibold mb-4 md:mb-6">
                  {t("frontpage.help")}
                </p>

                <h1 className="text-black-800 dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                  {t("frontpage.title")}
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                  <a
                    href="#features"
                    className="inline-block bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    {t("header.notices")}
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:w-7/12 h-48 h-auto bg-gray-100 flex items-center overflow-hidden">
              <img
                src={heroImg}
                loading="lazy"
                alt="Frontpage image"
                className="w-full h-auto resize object-center"
              />
            </div>
          </section>
        </div>
      </div>

      <div id="features" className="bg-gray-100 dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto ">
              {t("frontpage.info-1")}
            </p>
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto">
              {t("frontpage.info-2")}
            </p>
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto">
              {t("frontpage.info-3")}
            </p>
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto">
              {t("frontpage.info-4")}
            </p>
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto">
              {t("frontpage.info-5")}
            </p>
          </div>
          {/* FEATURES */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 xl:gap-16 md:px-10 py-2">
            <div className="flex flex-col items-center justify-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <FiHome size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{t("tiles.shelter")}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link
                  to={route['notices.addShelterOffer']}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.addNotice")}
                </Link>
                <Link
                  to={route['notices.list3']}
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.seeNotices")}
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <FiHome size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{t("tiles.lfShelter")}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link
                  to={route['notices.addFindShelter']}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.addNotice")}
                </Link>
                <Link
                  to={route['notices.list2']}
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.seeNotices")}
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <FiTruck size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{t("tiles.transport")}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link
                  to={route['notices.addTransportOffer']}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.addNotice")}
                </Link>
                <Link
                  to={route['notices.list4']}
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.seeNotices")}
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <FiTruck size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{t("tiles.lfTransport")}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link
                  to={route['notices.addFindTransportOffer']}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.addNotice")}
                </Link>
                <Link
                  to={route['notices.list6']}
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.seeNotices")}
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <FiEdit size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{t("tiles.translations")}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link
                  to={route['notices.addHelpOffer']}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.addNotice")}
                </Link>
                <Link
                  to={route['notices.list5']}
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.seeNotices")}
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <FiGift size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{t("tiles.help")}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link
                  to={route['notices.addHelpOffer']}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.addNotice")}
                </Link>
                <Link
                  to={route['notices.list5']}
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  {t("frontpage.seeNotices")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
