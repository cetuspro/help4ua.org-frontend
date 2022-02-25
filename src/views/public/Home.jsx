import heroImg from '../../assets/img/hero_2.png'
import { Link } from 'react-router-dom'
import { FiMap } from 'react-icons/fi'
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
                <p className="text-yellow-400 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                  {t("frontpage.help")}
                </p>

                <h1 className="text-black-800 dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                  {t("frontpage.title")}
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                  <Link
                    to={route['auth.register']}
                    className="inline-block bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    {t("frontpage.addNotice")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="xl:w-8/12 h-48 lg:h-auto bg-gray-100 overflow-hidden">
              <img
                src={heroImg}
                loading="lazy"
                alt="Laptop z otworzoną aplikacja"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>

      <div id="features" className="bg-gray-100 dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              {t("frontpage.info")}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
