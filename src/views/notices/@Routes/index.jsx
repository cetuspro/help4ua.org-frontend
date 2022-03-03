import { route } from '@/app/router/urls/routes'
import UserLayout from '@/layouts/UserLayout'
import {
  helpOfferColumnsColumns,
  HelpOfferExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/helpOffer'
import {
  shelterOfferColumns,
  ShelterOfferExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/shelterOffer'
import {
  shelterSearchColumns,
  ShelterSearchExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/shelterSearch'
import {
  transportOfferColumns,
  TransportOfferExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/transportOffer'
import {
  transportSearchColumns,
  TransportSearchExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/transportSearch'
import NoticesFilter from '@/views/notices/View_Notices/filters/Filters_Notices'
import NoticesNoAcommodationsFilter from '@/views/notices/View_Notices/filters/Filters_NoticesNoAccomodations'
import { lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, Route } from 'react-router-dom'
import FormAddFindShelter from '../components/forms/Form_AddFindShelter'
import FormAddFindTransportOffer from '../components/forms/Form_AddFindTransportOffer'
import FormAddShelterOffer from '../components/forms/Form_AddShelterOffer'
import FormAddTranslationOffer from '../components/forms/Form_AddTranslationOffer'
import FormAddTransportOffer from '../components/forms/Form_AddTransportOffer'
import {
  temporaryAnimalHomeOfferColumns,
  TemporaryAnimalHomeOfferExpandedComponent,
} from '../View_Notices/dataTable/temporaryAnimalHomeOffer'
import {
  temporaryAnimalHomeSearch,
  TemporaryAnimalHomeSearchExpandedComponent,
} from '../View_Notices/dataTable/temporaryAnimalHomeSearch'
import {
  translationOfferColumns,
  TranslationOfferExpandedComponent,
} from '../View_Notices/dataTable/translationOffer'
import AnimalOffersFilter from '../View_Notices/filters/Filters_AnimalsOffer'
import MedicalAssistanceFilter from '../View_Notices/filters/Filters_MedicalAssistance'
import {
  medicalAssistanceSearch,
  MedicalAssistanceSearchExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/medicalAssistanceSearch'
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
const LazyAddFindMedicalAssistance= lazy(() => import('../../../ua/Form_AddFindMedicalAssistance'))

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
            columns={shelterSearchColumns()}
            expandableRowsComponent={ShelterSearchExpandedComponent}
            noticeType={10}
            filters={NoticesFilter}
          />
        }
      />
      <Route
        path={route['notices.list3']}
        element={
          <LazyNotices
            title={t('tiles.shelter3')}
            columns={shelterOfferColumns()}
            expandableRowsComponent={ShelterOfferExpandedComponent}
            noticeType={1}
            filters={NoticesFilter}
          />
        }
      />
      <Route
        path={route['notices.list4']}
        element={
          <LazyNotices
            title={t('tiles.transport2')}
            columns={transportOfferColumns()}
            expandableRowsComponent={TransportOfferExpandedComponent}
            // itemComponent={TransportOfferItem}
            noticeType={20}
            filters={NoticesFilter}
          />
        }
      />
      <Route
        path={route['notices.list5']}
        element={
          <LazyNotices
            title={t('tiles.help2')}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
            noticeType={50}
            filters={NoticesNoAcommodationsFilter}
          />
        }
      />
      <Route
        path={route['notices.list6']}
        element={
          <LazyNotices
            title={t('tiles.transport3')}
            columns={transportSearchColumns()}
            expandableRowsComponent={TransportSearchExpandedComponent}
            noticeType={22}
            filters={NoticesFilter}
          />
        }
      />
      <Route
        path={route['notices.list7']}
        element={
          <LazyNotices
            title={t('tiles.translations2')}
            columns={translationOfferColumns()}
            expandableRowsComponent={TranslationOfferExpandedComponent}
            noticeType={30}
            filters={NoticesNoAcommodationsFilter}
          />
        }
      />
      <Route
        path={route['notices.list8']}
        element={
          <LazyNotices
            title={t('tiles.lfHelp2')}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
            noticeType={52}
            filters={NoticesNoAcommodationsFilter}
          />
        }
      />
      <Route
        path={route['notices.list9']}
        element={
          <LazyNotices
            title={t('tiles.lfTranslations2')}
            columns={translationOfferColumns()}
            expandableRowsComponent={TranslationOfferExpandedComponent}
            noticeType={32}
            filters={NoticesNoAcommodationsFilter}
          />
        }
      />
      <Route
        path={route['notices.list10']}
        element={
          <LazyNotices
            title={t('form.temporaryAnimalHome')}
            columns={temporaryAnimalHomeOfferColumns()}
            expandableRowsComponent={TemporaryAnimalHomeOfferExpandedComponent}
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
            columns={temporaryAnimalHomeSearch()}
            expandableRowsComponent={TemporaryAnimalHomeSearchExpandedComponent}
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
            columns={medicalAssistanceSearch()}
            expandableRowsComponent={MedicalAssistanceSearchExpandedComponent}
            noticeType={72}
            filters={MedicalAssistanceFilter}
          />
        }
      />
      <Route
          path={route['notices.list13']}
          element={<LazyNotices
            title={t('tiles.legalHelp2')}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
            noticeType={80}
            filters={NoticesNoAcommodationsFilter}
          />}
        />
        <Route
          path={route['notices.list14']}
          element={<LazyNotices
            title={t('tiles.lfLegalHelp2')}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
            noticeType={82}
            filters={NoticesNoAcommodationsFilter}
          />}
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
        element={<LazyAddFindMedicalAssistance />}
      />
    </Route>,
    <Route key={route['index']} path={route['index']} element={<UserLayout />}>
      <Route path={route['notices.edit']()} element={<LazyEditNotice />} />
      <Route path={route['notices.edit2']()} element={<LazyEditNotice />} />
    </Route>,
  ]
}

export default NoticeRoutes
