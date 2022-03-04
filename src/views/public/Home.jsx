import { FiHome, FiEdit, FiTruck, FiGift, FiBriefcase } from 'react-icons/fi'
import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'
import { FaMapMarkerAlt, FaPaw, FaBriefcaseMedical } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGetNoticesStats } from '../../app/CRUD/notices/getNoticesStats'
import heroImg from '../../assets/img/hero.png'
import NoticeCard from '../notices/Notice_Card/Notice_Card'
import { getNoticeVerifiedAmount } from '@/app/models/notice'
import { MdOutlineVolunteerActivism } from 'react-icons/md'

export default function Home() {
  const { t } = useTranslation()
  const { data, isFetching } = useGetNoticesStats()
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12 my-10">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div className="xl:w-4/12 flex flex-col justify-center">
              <div className="sm:text-center lg:text-left lg:py-12 xl:py-24">
                <p className="text-yellow-400 text-xl xl:text-xl font-semibold mb-4 md:mb-6">
                  {t('frontpage.help')}
                </p>

                <h1 className="text-black-800 dark:text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
                  {t('frontpage.title')}
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                  <a
                    href="#zgloszenia"
                    className="inline-block bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    {t('header.notices')}
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

      <div className="bg-gray-100 dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto ">
              {t('frontpage.info-1')}
            </p>
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto">
              {t('frontpage.info-2')}
            </p>
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto">
              {t('frontpage.info-3')}
            </p>
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto">
              {t('frontpage.info-4')}
            </p>
            <p className="max-w-screen-md text-gray-600 mb-2 text-xl text-center mx-auto">
              {t('frontpage.info-5')}
            </p>
          </div>
          {/* FEATURES */}
          <div
            id="zgloszenia"
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 xl:gap-16 md:px-10 py-2">
            <NoticeCard
              icon={FiHome}
              title={"tiles.shelter"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "OfferAccommodation")}
              description={'formDescription.offerShelter'}
              toAdd={route['notices.addShelterOffer']}
              toView={route['notices.list3']}
            />
            <NoticeCard
              icon={FiHome}
              title={"tiles.lfShelter"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "SearchAccommodation")}
              description={'formDescription.findShelter'}
              toAdd={route['notices.addFindShelter']}
              toView={route['notices.list2']}
            />
            <NoticeCard
              icon={FiTruck}
              title={"tiles.transport"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "OfferTransportHelp")}
              description={'formDescription.offerTransport'}
              toAdd={route['notices.addTransportOffer']}
              toView={route['notices.list4']}
            />
            <NoticeCard
              icon={FiTruck}
              title={"tiles.lfTransport"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "SearchTransportHelp")}
              description={'formDescription.findTransport'}
              toAdd={route['notices.addFindTransportOffer']}
              toView={route['notices.list6']}
            />
            <NoticeCard
              icon={FiGift}
              title={"tiles.help"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "OfferHelp")}
              description={'formDescription.offerHelp'}
              toAdd={route['notices.addHelpOffer']}
              toView={route['notices.list5']}
            />
            <NoticeCard
              icon={FiGift}
              title={"tiles.lfHelp"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "SearchHelp")}
              description={'formDescription.findHelp'}
              toAdd={route['notices.addFindHelp']}
              toView={route['notices.list8']}
            />
            <NoticeCard
              icon={FiBriefcase}
              title={"tiles.legalHelp"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "OfferLegalAssistance")}
              description={'formDescription.offerLegalHelp'}
              toAdd={route['notices.addlegalHelpOffer']}
              toView={route['notices.list13']}
            />            
            <NoticeCard
              icon={FiBriefcase}
              title={"tiles.lfLegalHelp"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "SearchLegalAssistance")}
              description={'formDescription.findLegalHelp'}
              toAdd={route['notices.addfindLegalHelp']}
              toView={route['notices.list14']}
            />   
            <NoticeCard
              icon={FiEdit}
              title={"tiles.translations"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "OfferTranslationHelp")}
              description={'formDescription.translations'}
              toAdd={route['notices.addTranslationOffer']}
              toView={route['notices.list7']}
            />  
            <NoticeCard
              icon={FiEdit}
              title={"tiles.lfTranslations"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "SearchTranslationHelp")}
              description={'formDescription.lfTranslations'}
              toAdd={route['notices.addFindTranslationOffer']}
              toView={route['notices.list9']}
            />  
            <NoticeCard
              icon={FaPaw}
              title={"tiles.temporaryAnimalHome"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "OfferHelpForAnimal")}
              description={'formDescription.temporaryAnimalHome'}
              toAdd={route['notices.addTemporaryAnimalHome']}
              toView={route['notices.list10']}
            /> 
            <NoticeCard
              icon={FaPaw}
              title={"tiles.lfTemporaryAnimalHome"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "SearchHelpForAnimal")}
              description={'formDescription.lfTemporaryAnimalHome'}
              toAdd={route['notices.addFindTemporaryAnimalHome']}
              toView={route['notices.list11']}
            /> 
            <NoticeCard
              icon={FaBriefcaseMedical}
              title={"tiles.offerMedicalAssistance"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "OfferMedicalHelp")}
              description={'formDescription.offerMedicalAssistance'}
              toAdd={route['notices.addOfferMedicalAssistance']}
              toView={route['notices.list15']}
            /> 
            <NoticeCard
              icon={FaBriefcaseMedical}
              title={"tiles.lfMedicalAssistance"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "SearchMedicalHelp")}
              description={'formDescription.medicalAssistance'}
              toAdd={route['notices.addFindMedicalAssistance']}
              toView={route['notices.list12']}
            /> 
            <NoticeCard
              icon={MdOutlineVolunteerActivism}
              title={"tiles.offerVolunteerHelp"}
              isFetching
              verifiedAmount={getNoticeVerifiedAmount(data, "OfferVolunteerHelp")}
              description={'formDescription.offerVolunteerHelp'}
              toAdd={route['notices.addVolunteersOfferingHelp']}
              toView={route['notices.list16']}
            /> 

            <div className="flex flex-col items-center justify-center p-8 shadow-md rounded-3xl">
              <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
                <FaMapMarkerAlt size={100} color="currentColor" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                {t('tiles.helpPoints')}
              </h3>

              <div className="flex flex-col flex-wrap lg:flex-nowrap sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Button1 to={route['helpPoints.add']} label={t('frontpage.addHelpPoint')} />
                <Button2 to={route['helpPoints']} label={t('frontpage.helpPoints')} />
                <Button2 to={route['helpPoints.map']} label={t('tiles.seeMap')} />
              </div>
              <p className="max-w-screen-md text-gray-600 mb-2 text-sm mt-6 text-center mx-auto">
                {t('formDescription.helpPoints')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Button1 = ({ to, label }) => (
  <Link
    to={to}
    className="inline-block bg-blue-600 hover:bg-blue-800 focus-visible:ring ring-yellow-300 text-white active:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
    {label}
  </Link>
)

const Button2 = ({ to, label }) => (
  <Link
    to={to}
    className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
    {label}
  </Link>
)
