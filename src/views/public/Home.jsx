import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useGetNoticesStats } from '../../app/CRUD/notices/getNoticesStats'
import heroImg from '../../assets/img/hero.png'
import NoticeCard from '../notices/Notice_Card/Notice_Card'
import NoticeCardsWrapper from '../notices/Notice_CardsWrapper/Notice_CardsWrapper'
import { getNoticeVerifiedAmount } from '@/app/models/notice'
import { FiHome, FiEdit, FiTruck, FiGift, FiBriefcase } from 'react-icons/fi'
import { FaMapMarkerAlt, FaPaw, FaBriefcaseMedical } from 'react-icons/fa'
import { MdOutlineVolunteerActivism } from 'react-icons/md'

export default function Home() {
  const { t } = useTranslation()
  const { data, isFetching } = useGetNoticesStats()
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12 my-10">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* HERO SECTION */}
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div className="lg:w-4/12 flex flex-col justify-center">
              <div className="sm:text-center lg:text-left lg:py-12 xl:py-24">
                <p className="text-yellow-400 text-xl xl:text-xl font-semibold mb-4 md:mb-6">
                  {t('frontpage.help')}
                </p>

                <h1 className="text-black-800 dark:text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
                  {t('frontpage.title')}
                </h1>

                <p className='text-xs sm:text-sm'>
                  {t('frontpage.briefInfo')}
                </p>

                <div className="flex flex-col mt-8 sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                  <a
                    href="#rodzaje-ogloszen"
                    className="inline-block bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    {t('header.notices')}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 h-48 h-auto bg-gray-100 flex items-center overflow-hidden">
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

      {/* 2 BOXES */}
      {/* <section>
        <div className='max-w-screen-xl mb-32 m-auto'>
          <div className='flex flex-col items-center gap-8 gap-x-12 sm:flex-row sm:justify-center my-20 lg:my-12'>
            <div className='w-7/12 max-w-[425px] sm:w-5/12 bg-white p-7 rounded-xl'>
              {t('frontpage.info-3')}
            </div>

            <div className='w-7/12 max-w-[425px] sm:w-5/12 bg-white p-7 rounded-xl'>
              {t('frontpage.info-4')}
            </div>
          </div>
        </div>
      </section> */}

      {/* TYPES OF NOTICES GRID */}
      <section>
        <div id={'rodzaje-ogloszen'} className="max-w-screen-xl px-4 md:px-8 mx-auto mt-4 mb-40 scroll-mt-10">
          <h2 className='text-xl font-semibold'>{t('frontpage.noticesTypesQuestion')}</h2>
          {/* <div className='flex flex-wrap justify-between w-fit gap-x-6'> */}
          <div className="grid w-11/12 max-w-[300px] m-auto sm:max-w-none sm:w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 sm:px-10 md:px-0 lg:px-10 py-2"> {/*max-w-[300px] m-auto sm:max-w-none*/}
          
          
            <Button3
              icon={FiHome}
              label={t('frontpage.shelter')}
              hashLink={'#schronienie'}
            />

            <Button3
              icon={FiTruck}
              label={t('frontpage.transport')}
              hashLink={'#transport'}
            />

            <Button3
              icon={FiGift}
              label={t('frontpage.otherHelp')}
              hashLink={'#inna-pomoc'}
            />

            <Button3
              icon={FiBriefcase}
              label={t('frontpage.legalHelp')}
              hashLink={'#pomoc-prawna'}
            />

            <Button3
              icon={FiEdit}
              label={t('frontpage.translations')}
              hashLink={'#tlumaczenia'}
            />

            <Button3
              icon={FaPaw}
              label={t('frontpage.animalHome')}
              hashLink={'#dom-dla-zwierzat'}
            />

            <Button3
              icon={FaBriefcaseMedical}
              label={t('frontpage.medicalAssistance')}
              hashLink={'#pomoc-medyczna'}
            />

            <Button3
              icon={MdOutlineVolunteerActivism}
              label={t('frontpage.volunteering')}
              hashLink={'#wolontariat'}
            />

            <Button3
              icon={FaMapMarkerAlt}
              label={t('frontpage.helpPointss')}
              hashLink={'#punkty-pomocy'}
            />

          </div>
        </div>
      </section>

      {/* NOTICES CARDS */}
      <div className="bg-gray-100 dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">

          <NoticeCardsWrapper icon={FiHome} title={t('frontpage.shelter')} hashId={'schronienie'}>
              <NoticeCard
                icon={FiHome}
                title={"tiles.shelter"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "OfferAccommodation")}
                description={'formDescription.offerShelter'}
                toAdd={route['notices.addShelterOffer']}
                toView={route['notices.list3']}
              />
              <NoticeCard
                icon={FiHome}
                title={"tiles.lfShelter"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "SearchAccommodation")}
                description={'formDescription.findShelter'}
                toAdd={route['notices.addFindShelter']}
                toView={route['notices.list2']}
              />
            </NoticeCardsWrapper>

            <NoticeCardsWrapper icon={FiTruck} title={t('frontpage.transport')} hashId={'transport'}>
              <NoticeCard
                icon={FiTruck}
                title={"tiles.transport"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "OfferTransportHelp")}
                description={'formDescription.offerTransport'}
                toAdd={route['notices.addTransportOffer']}
                toView={route['notices.list4']}
              />
              <NoticeCard
                icon={FiTruck}
                title={"tiles.lfTransport"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "SearchTransportHelp")}
                description={'formDescription.findTransport'}
                toAdd={route['notices.addFindTransportOffer']}
                toView={route['notices.list6']}
              />
            </NoticeCardsWrapper>

            <NoticeCardsWrapper icon={FiGift} title={t('frontpage.otherHelp')} hashId={'inna-pomoc'}>
              <NoticeCard
                icon={FiGift}
                title={"tiles.help"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "OfferHelp")}
                description={'formDescription.offerHelp'}
                toAdd={route['notices.addHelpOffer']}
                toView={route['notices.list5']}
              />
              <NoticeCard
                icon={FiGift}
                title={"tiles.lfHelp"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "SearchHelp")}
                description={'formDescription.findHelp'}
                toAdd={route['notices.addFindHelp']}
                toView={route['notices.list8']}
              />
            </NoticeCardsWrapper>

            <NoticeCardsWrapper icon={FiBriefcase} title={t('frontpage.legalHelp')} hashId={'pomoc-prawna'}>
              <NoticeCard
                icon={FiBriefcase}
                title={"tiles.legalHelp"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "OfferLegalAssistance")}
                description={'formDescription.offerLegalHelp'}
                toAdd={route['notices.addlegalHelpOffer']}
                toView={route['notices.list13']}
              />            
              <NoticeCard
                icon={FiBriefcase}
                title={"tiles.lfLegalHelp"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "SearchLegalAssistance")}
                description={'formDescription.findLegalHelp'}
                toAdd={route['notices.addfindLegalHelp']}
                toView={route['notices.list14']}
              />   
            </NoticeCardsWrapper>

            <NoticeCardsWrapper icon={FiEdit} title={t('frontpage.translations')} hashId={'tlumaczenia'}>
              <NoticeCard
                icon={FiEdit}
                title={"tiles.translations"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "OfferTranslationHelp")}
                description={'formDescription.translations'}
                toAdd={route['notices.addTranslationOffer']}
                toView={route['notices.list7']}
              />  
              <NoticeCard
                icon={FiEdit}
                title={"tiles.lfTranslations"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "SearchTranslationHelp")}
                description={'formDescription.lfTranslations'}
                toAdd={route['notices.addFindTranslationOffer']}
                toView={route['notices.list9']}
              />  
            </NoticeCardsWrapper>

            <NoticeCardsWrapper icon={FaPaw} title={t('frontpage.animalHome')} hashId={'dom-dla-zwierzat'}>
              <NoticeCard
                icon={FaPaw}
                title={"tiles.temporaryAnimalHome"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "OfferHelpForAnimal")}
                description={'formDescription.temporaryAnimalHome'}
                toAdd={route['notices.addTemporaryAnimalHome']}
                toView={route['notices.list10']}
              /> 
              <NoticeCard
                icon={FaPaw}
                title={"tiles.lfTemporaryAnimalHome"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "SearchHelpForAnimal")}
                description={'formDescription.lfTemporaryAnimalHome'}
                toAdd={route['notices.addFindTemporaryAnimalHome']}
                toView={route['notices.list11']}
              /> 
            </NoticeCardsWrapper>

            <NoticeCardsWrapper icon={FaBriefcaseMedical} title={t('frontpage.medicalAssistance')} hashId={'pomoc-medyczna'}>
              <NoticeCard
                icon={FaBriefcaseMedical}
                title={"tiles.offerMedicalAssistance"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "OfferMedicalHelp")}
                description={'formDescription.offerMedicalAssistance'}
                toAdd={route['notices.addOfferMedicalAssistance']}
                toView={route['notices.list15']}
              /> 
              <NoticeCard
                icon={FaBriefcaseMedical}
                title={"tiles.lfMedicalAssistance"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "SearchMedicalHelp")}
                description={'formDescription.medicalAssistance'}
                toAdd={route['notices.addFindMedicalAssistance']}
                toView={route['notices.list12']}
              /> 
            </NoticeCardsWrapper>


            <NoticeCardsWrapper icon={MdOutlineVolunteerActivism} title={t('frontpage.volunteering')} hashId={'wolontariat'}>
              <NoticeCard
                icon={MdOutlineVolunteerActivism}
                title={"tiles.offerVolunteerHelp"}
                isFetching={isFetching}
                verifiedAmount={getNoticeVerifiedAmount(data, "OfferVolunteerHelp")}
                description={'formDescription.offerVolunteerHelp'}
                toAdd={route['notices.addVolunteersOfferingHelp']}
                toView={route['notices.list16']}
              /> 
            </NoticeCardsWrapper>


            <NoticeCardsWrapper icon={FaMapMarkerAlt} title={t('tiles.helpPoints')}>
              <div id={'punkty-pomocy'} className="flex flex-col items-center justify-center py-4">
                
                <div className="flex flex-col flex-wrap lg:flex-nowrap sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                  <Button1 to={route['helpPoints.add']} label={t('frontpage.addHelpPoint')} />
                  <Button2 to={route['helpPoints']} label={t('frontpage.helpPoints')} />
                  <Button2 to={route['helpPoints.map']} label={t('tiles.seeMap')} />
                </div>
                <p className="max-w-screen-md text-gray-600 mb-2 text-sm mt-6 text-center mx-auto">
                  {t('formDescription.helpPoints')}
                </p>
              </div>
            </NoticeCardsWrapper>
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

const Button3 = ({icon: Icon, label, hashLink }) => (

  <div className="flex flex-col mt-6 sm:justify-center lg:justify-start gap-2.5 ">
    <a
      href={hashLink}
      className="flex flex-wrap items-end gap-x-2 gap-y-4 text-center bg-white hover:bg-gray-50 focus-visible:ring ring-yellow-300 text-gray-600 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
      <Icon className='text-primary min-h-[30px] min-w-[30px]' />
      {label}
    </a>
  </div>
)

