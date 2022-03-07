import { route } from '@/app/router/urls/routes'
import UserLayout from '@/layouts/UserLayout'
import {
  helpOfferColumnsColumns,
  HelpOfferExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/helpOffer'
import { ShelterOfferExpandedComponent } from '@/views/notices/View_Notices/dataTable/shelterOffer'
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
import { lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, Route } from 'react-router-dom'
import { noticeListStyles, noticeListConfig } from '@/app/config/noticeList'
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
import { TransportFilter, BasicFilter, ShelterFilter } from '@/views/notices/View_Notices/filters'
import {
  medicalAssistanceSearch,
  MedicalAssistanceSearchExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/medicalAssistanceSearch'
import { personalDataColumnConfig } from '../View_Notices/columnConfigs/personalDataColumnConfig'
import { PersonalInfoDataTable } from '../View_Notices/dataTable/personalInfoDataTable'
import FormAddVolunteerOffer from '../components/forms/Form_AddVolunteerOffer'
import {
  workSearchAndOffer,
  WorkSearchAndOfferExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/workSearhAndOffer'
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={shelterSearchColumns()}
            expandableRowsComponent={ShelterSearchExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            expandableRowsComponent={ShelterOfferExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={transportOfferColumns()}
            expandableRowsComponent={TransportOfferExpandedComponent}
            // itemComponent={TransportOfferItem}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={transportSearchColumns()}
            expandableRowsComponent={TransportSearchExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={translationOfferColumns()}
            expandableRowsComponent={TranslationOfferExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={translationOfferColumns()}
            expandableRowsComponent={TranslationOfferExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
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
            y
            styles={noticeListStyles}
            config={noticeListConfig}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={medicalAssistanceSearch()}
            expandableRowsComponent={MedicalAssistanceSearchExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={medicalAssistanceSearch()}
            expandableRowsComponent={MedicalAssistanceSearchExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={personalDataColumnConfig()}
            expandableRowsComponent={PersonalInfoDataTable}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={personalDataColumnConfig()}
            expandableRowsComponent={PersonalInfoDataTable}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={workSearchAndOffer()}
            expandableRowsComponent={WorkSearchAndOfferExpandedComponent}
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
            styles={noticeListStyles}
            config={noticeListConfig}
            columns={workSearchAndOffer()}
            expandableRowsComponent={WorkSearchAndOfferExpandedComponent}
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
