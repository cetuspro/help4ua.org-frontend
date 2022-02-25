import heroImg from '../../assets/img/hero_2.png'
import rzeszow from '../../assets/img/rzeszów.jpg'
import wroclaw from '../../assets/img/wrocław.jpg'
import gniezno from '../../assets/img/gniezno.jpg'
import rybnik from '../../assets/img/rybnik.jpg'
import { Link } from 'react-router-dom'
import { FiMap } from 'react-icons/fi'
import { MdOutlinePeopleAlt, MdSensors } from 'react-icons/md'
import { BiBrain } from 'react-icons/bi'
import { AiOutlineTrophy } from 'react-icons/ai'
import { CgInfinity } from 'react-icons/cg'
import { route } from '@/app/router/urls/routes'

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12 my-10">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div className="xl:w-4/12 flex flex-col justify-center">
              <div className="sm:text-center lg:text-left lg:py-12 xl:py-24">
                <p className="text-yellow-400 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                  Connected City
                </p>

                <h1 className="text-black-800 dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                  Razem budujemy lepsze miasto
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                  <Link
                    to={route['auth.register']}
                    className="inline-block bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Rejestracja
                  </Link>

                  <a
                    href="#features"
                    className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Zobacz więcej
                  </a>
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
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Miasto jako jeden ekosystem
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Connected City to jeden ekosystem miejski, dzięki któremu współpraca mieszkańców i
              technologii pozwala miastu stać się bezpiecznym i przyjaznym miejscem do życia.
            </p>
          </div>
          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
            <div className="flex flex-col items-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <FiMap size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Mapa zagrożeń</h3>
              <p className="text-gray-500 text-center mb-2">
                Jedna mapa, na której widoczne są wszystkie zagrożenia/problemy/zgłoszenia.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <MdOutlinePeopleAlt size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Zgłaszanie zagrożeń
              </h3>
              <p className="text-gray-500 text-center mb-2">
                Mieszkańcy za pomocą intuicyjnej aplikacji mogą raportować zagrożenia w mieście.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <MdSensors size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Dane z sensorów</h3>
              <p className="text-gray-500 text-center mb-2">
                Dzięki zebraniu danych ze wszystkich sensorów możliwa jest ich zaawansowana analiza.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <BiBrain size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Prognozowanie zagrożeń
              </h3>
              <p className="text-gray-500 text-center mb-2">
                Dzięki dużej ilości danych na podstawie danych historycznych prognozowane są
                zagrożenia.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <AiOutlineTrophy color="currentColor" size={100} />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">System nagród</h3>
              <p className="text-gray-500 text-center mb-2">
                System nagradzania aktywnych mieszkańców miasta w postaci biletów i voucherów.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <CgInfinity color="currentColor" size={100} />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Kompletna platforma
              </h3>
              <p className="text-gray-500 text-center mb-2">
                Zapewniamy możliwość integracji platformy ConnectedCity z innymi zewnętrznymi
                systemami, danymi lub rozwiązaniami IoT.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center md:mb-6 mb-4">
            Miasta
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto mb-8 md:mb-14">
            Miasta w których został został wdrożony system Connected City.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            <div>
              <Link
                to={route['map']}
                className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                <img
                  src={rzeszow}
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                  <span className="text-gray-500">Aktywne</span>
                  <span className="text-gray-800 text-lg lg:text-xl font-bold">Rzeszów</span>
                </div>
              </Link>
            </div>

            <div>
              <div className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4 grayscale">
                <img
                  src={rybnik}
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                  <span className="text-gray-500">W trakcie wdrażania</span>
                  <span className="text-gray-800 text-lg lg:text-xl font-bold">Rybnik</span>
                </div>
              </div>
            </div>

            <div>
              <div className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4 grayscale">
                <img
                  src={gniezno}
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                  <span className="text-gray-500">W trakcie wdrażania</span>
                  <span className="text-gray-800 text-lg lg:text-xl font-bold">Gniezno</span>
                </div>
              </div>
            </div>

            <div>
              <div className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4 grayscale">
                <img
                  src={wroclaw}
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                  <span className="text-gray-500">W trakcie wdrażania</span>
                  <span className="text-gray-800 text-lg lg:text-xl font-bold">Wrocław</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
