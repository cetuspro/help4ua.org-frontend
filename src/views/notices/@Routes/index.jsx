import { lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import UserLayout from '@/layouts/UserLayout'
import ShelterNotice from '@/views/notices/components/common/ShelterNotice'
import TransportNotice from '@/views/notices/components/common/TransportNotice'
import DefaultNotice from '@/views/notices/components/common/DefaultNotice'
import AnimalNotice from '@/views/notices/components/common/AnimalNotice'
import FormAddFindShelter from '../components/forms/Form_AddFindShelter'
import FormAddFindTransportOffer from '../components/forms/Form_AddFindTransportOffer'
import FormAddShelterOffer from '../components/forms/Form_AddShelterOffer'
import FormAddTranslationOffer from '../components/forms/Form_AddTranslationOffer'
import FormAddTransportOffer from '../components/forms/Form_AddTransportOffer'
import AnimalOffersFilter from '../View_Notices/filters/Filters_AnimalsOffer'
import MedicalAssistanceFilter from '../View_Notices/filters/Filters_MedicalAssistance'
import { TransportFilter, BasicFilter, ShelterFilter } from '@/views/notices/View_Notices/filters'
import FormAddVolunteerOffer from '../components/forms/Form_AddVolunteerOffer'
import { withPriceFree } from '@/views/notices/View_Notices/hoc/withPriceFree'
const LazyNotices = lazy(() => import('@/views/notices/View_Notices/View_Notices'))
const LazyNotice = lazy(() => import('@/views/notices/View_Notice/View_Notice'))
const LazyAddNotice = lazy(() => import('../View_AddNotice/View_AddNotice'))
const LazyAddHelpOffer = lazy(() => import('../../../ua/Form_AddHelpOffer'))
const LazyAddFindHelp = lazy(() => import('../../../ua/Form_AddFindHelp'))
const LazyAddSuccess = lazy(() => import('../../../ua/NoticeCreateSuccess'))
const LazyAddFindTranslationOffer = lazy(() => import('../../../ua/Form_AddFindTranslationOffer'))
const LazyEditNotice = lazy(() => import('../../../views/notices/View_EditNotice/View_EditNotice'))
const LazyAddTemporaryAnimalHome = lazy(() => import('../../../ua/Form_AddTemporaryAnimalHome'))
const LazyAddFindTemporaryAnimalHome = lazy(() =>
  import('../../../ua/Form_AddFindTemporaryAnimalHome'),
)
const LazyAddlegalHelpOffer = lazy(() => import('../../../ua/Form_AddLegalHelpOffer'))
const LazyAddfindLegalHelp = lazy(() => import('../../../ua/Form_AddFindLegalHelp'))
const LazyAddFindMedicalAssistance = lazy(() => import('../../../ua/Form_AddFindMedicalAssistance'))
const LazyFormAddOfferWork = lazy(() => import('../../../ua/Form_AddFindAndOfferWork'))

const NoticeRoutes = () => {
  const { t } = useTranslation()
  return [
    <Route key={route['notices.list']} path={route['notices.list']} element={<UserLayout />}>
      <Route index element={<Navigate to={route['index']} />} />
      <Route
        path={route['notices.list2']}
        element={
          <LazyNotices
            title={t('tiles.shelter2')}
            expandableRowsComponent={ShelterNotice}
            noticeType={10}
            filters={ShelterFilter}
          />
        }
      />
      <Route
        path={route['notices.list3']}
        element={
          <LazyNotices
            title={t('tiles.shelter3')}
            expandableRowsComponent={withPriceFree(ShelterNotice)}
            noticeType={1}
            filters={ShelterFilter}
          />
        }
      />
      <Route
        path={route['notices.list4']}
        element={
          <LazyNotices
            title={t('tiles.transport2')}
            expandableRowsComponent={withPriceFree(TransportNotice)}
            noticeType={20}
            filters={TransportFilter}
          />
        }
      />
      <Route
        path={route['notices.list5']}
        element={
          <LazyNotices
            title={t('tiles.help2')}
            expandableRowsComponent={withPriceFree(TransportNotice)}
            noticeType={50}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list6']}
        element={
          <LazyNotices
            title={t('tiles.transport3')}
            expandableRowsComponent={TransportNotice}
            noticeType={22}
            filters={TransportFilter}
          />
        }
      />
      <Route
        path={route['notices.list7']}
        element={
          <LazyNotices
            title={t('tiles.translations2')}
            expandableRowsComponent={withPriceFree(DefaultNotice)}
            noticeType={30}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list8']}
        element={
          <LazyNotices
            title={t('tiles.lfHelp2')}
            expandableRowsComponent={DefaultNotice}
            noticeType={52}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list9']}
        element={
          <LazyNotices
            title={t('tiles.lfTranslations2')}
            expandableRowsComponent={DefaultNotice}
            noticeType={32}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list10']}
        element={
          <LazyNotices
            title={t('form.temporaryAnimalHome')}
            expandableRowsComponent={withPriceFree(AnimalNotice)}
            noticeType={60}
            filters={AnimalOffersFilter}
          />
        }
      />
      <Route
        path={route['notices.list11']}
        element={
          <LazyNotices
            title={t('form.lfTemporaryAnimalHome')}
            expandableRowsComponent={AnimalNotice}
            noticeType={62}
            filters={AnimalOffersFilter}
          />
        }
      />
      <Route
        path={route['notices.list12']}
        element={
          <LazyNotices
            title={t('form.lfMedicalAssistance')}
            expandableRowsComponent={DefaultNotice}
            noticeType={72}
            filters={MedicalAssistanceFilter}
          />
        }
      />
      <Route
        path={route['notices.list15']}
        element={
          <LazyNotices
            title={t('form.offerMedicalAssistance')}
            expandableRowsComponent={withPriceFree(DefaultNotice)}
            noticeType={70}
            filters={MedicalAssistanceFilter}
          />
        }
      />
      <Route
        path={route['notices.list13']}
        element={
          <LazyNotices
            title={t('tiles.legalHelp2')}
            expandableRowsComponent={withPriceFree(DefaultNotice)}
            noticeType={80}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list14']}
        element={
          <LazyNotices
            title={t('tiles.lfLegalHelp2')}
            expandableRowsComponent={DefaultNotice}
            noticeType={82}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list16']}
        element={
          <LazyNotices
            title={t('form.offerVolunteerHelp')}
            expandableRowsComponent={withPriceFree(DefaultNotice)}
            noticeType={100}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list17']}
        element={
          <LazyNotices
            title={t('form.lfVolunteerHelp')}
            expandableRowsComponent={DefaultNotice}
            noticeType={102}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list110']}
        element={
          <LazyNotices
            title={t('form.offerWork')}
            expandableRowsComponent={withPriceFree(DefaultNotice)}
            noticeType={110}
            filters={BasicFilter}
          />
        }
      />
      <Route
        path={route['notices.list112']}
        element={
          <LazyNotices
            title={t('form.lfWork')}
            expandableRowsComponent={DefaultNotice}
            noticeType={112}
            filters={BasicFilter}
          />
        }
      />
      <Route path={route['notices.view']()} element={<LazyNotice />} />
    </Route>,
    <Route key={route['notices.add']} path={route['notices.add']} element={<UserLayout />}>
      <Route index element={<LazyAddNotice />} />
      <Route
        path={route['notices.addShelterOffer']}
        element={
          <LazyAddNotice // done language props
            title={t('form.offerShelter')}
            description={t('formDescription.offerShelter')}
            formComponent={FormAddShelterOffer}
          />
        }
      />
      <Route
        path={route['notices.addFindShelter']}
        element={
          <LazyAddNotice // done language props
            title={t('form.findShelter')}
            description={t('formDescription.findShelter')}
            formComponent={FormAddFindShelter}
          />
        }
      />
      <Route
        path={route['notices.addTranslationOffer']}
        element={
          <LazyAddNotice // done language props
            title={t('form.offerTranslations')}
            description={t('formDescription.translations')}
            formComponent={FormAddTranslationOffer}
          />
        }
      />
      <Route
        path={route['notices.addFindTransportOffer']}
        element={
          <LazyAddNotice // done language props
            title={t('form.findTransport')}
            description={t('formDescription.findTransport')}
            formComponent={FormAddFindTransportOffer}
          />
        }
      />
      <Route
        path={route['notices.addTransportOffer']}
        element={
          <LazyAddNotice // done language props
            title={t('form.offerTransport')}
            description={t('formDescription.offerTransport')}
            formComponent={FormAddTransportOffer}
          />
        }
      />

      <Route path={route['notices.addHelpOffer']} element={<LazyAddHelpOffer />} />
      <Route path={route['notices.addFindHelp']} element={<LazyAddFindHelp />} />
      <Route
        path={route['notices.addFindTranslationOffer']}
        element={<LazyAddFindTranslationOffer />}
      />
      <Route path={route['notices.success']} element={<LazyAddSuccess />} />

      <Route
        path={route['notices.addTemporaryAnimalHome']}
        element={<LazyAddTemporaryAnimalHome />}
      />
      <Route
        path={route['notices.addFindTemporaryAnimalHome']}
        element={<LazyAddFindTemporaryAnimalHome />}
      />
      <Route path={route['notices.addlegalHelpOffer']} element={<LazyAddlegalHelpOffer />} />
      <Route path={route['notices.addfindLegalHelp']} element={<LazyAddfindLegalHelp />} />
      <Route
        path={route['notices.addFindMedicalAssistance']}
        element={
          <LazyAddFindMedicalAssistance
            type={72}
            title={t('form.lfMedicalAssistance')}
            description={t('formDescription.medicalAssistance')}
          />
        }
      />
      <Route
        path={route['notices.addOfferWork']}
        element={
          <LazyFormAddOfferWork
            type={110}
            title={t('form.offerWork')}
            description={t('formDescription.offerWork')}
          />
        }
      />
      <Route
        path={route['notices.addFindWork']}
        element={
          <LazyFormAddOfferWork
            type={112}
            title={t('form.lfWork')}
            description={t('formDescription.lfWork')}
          />
        }
      />
      <Route
        path={route['notices.addOfferMedicalAssistance']}
        element={
          <LazyAddFindMedicalAssistance
            type={70}
            title={t('form.offerMedicalAssistance')}
            description={t('formDescription.offerMedicalAssistance')}
          />
        }
      />
      <Route
        path={route['notices.addVolunteersOfferingHelp']}
        element={
          <LazyAddNotice
            title={t('form.offerVolunteerHelp')}
            description={t('formDescription.offerVolunteerHelp')}
            formComponent={FormAddVolunteerOffer}
            type={100}
          />
        }
      />
      <Route
        path={route['notices.addFindVolunteersHelp']}
        element={
          <LazyAddNotice
            title={t('form.lfVolunteerHelp')}
            description={t('formDescription.lfVolunteerHelp')}
            formComponent={FormAddVolunteerOffer}
            type={102}
          />
        }
      />
    </Route>,
    <Route key={route['index']} path={route['index']} element={<UserLayout />}>
      <Route path={route['notices.edit']()} element={<LazyEditNotice />} />
      <Route path={route['notices.edit2']()} element={<LazyEditNotice />} />
    </Route>,
  ]
}

export default NoticeRoutes
