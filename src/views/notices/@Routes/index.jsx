import { lazy } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import UserLayout from '@/layouts/UserLayout'
import { shelterOfferColumns, ShelterOfferExpandedComponent } from '@/views/notices/View_Notices/dataTable/shelterOffer'
import { helpOfferColumnsColumns, HelpOfferExpandedComponent } from '@/views/notices/View_Notices/dataTable/helpOffer'
import {
  transportOfferColumns,
  TransportOfferExpandedComponent, TransportOfferItem,
} from '@/views/notices/View_Notices/dataTable/transportOffer'
import {
  shelterSearchColumns,
  ShelterSearchExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/shelterSearch'
import {
  transportSearchColumns,
  TransportSearchExpandedComponent,
} from '@/views/notices/View_Notices/dataTable/transportSearch'
import NoticesFilter from '@/views/notices/View_Notices/filters/Filters_Notices'
import { translationOfferColumns, TranslationOfferExpandedComponent } from '../View_Notices/dataTable/translationOffer'
import { useTranslation } from 'react-i18next'
import FormAddShelterOffer from '../components/forms/Form_AddShelterOffer'
import FormAddFindShelter from '../components/forms/Form_AddFindShelter'
import FormAddTranslationOffer from '../components/forms/Form_AddTranslationOffer'
import FormAddTransportOffer from '../components/forms/Form_AddTransportOffer'
import FormAddFindTransportOffer from '../components/forms/Form_AddFindTransportOffer'
const LazyNotices = lazy(() => import('@/views/notices/View_Notices/View_Notices'))
const LazyNotice = lazy(() => import('@/views/notices/View_Notice/View_Notice'))
const LazyAddNotice = lazy(() => import('../View_AddNotice/View_AddNotice'))
const LazyAddHelpOffer = lazy(() => import('../../../ua/Form_AddHelpOffer'))
const LazyAddFindHelp = lazy(() => import('../../../ua/Form_AddFindHelp'))
const LazyAddSuccess = lazy(() => import('../../../ua/NoticeCreateSuccess'))
const LazyAddFindTranslationOffer = lazy(() => import('../../../ua/Form_AddFindTranslationOffer'))
const LazyEditNotice = lazy(() => import('../../../views/notices/View_EditNotice/View_EditNotice'))

const NoticeRoutes = () => {
  const { t } = useTranslation();
  return (
    [
      <Route key={route['notices.list']} path={route['notices.list']} element={<UserLayout />}>
        <Route index element={<Navigate to={route['index']} />}/>
        <Route
          path={route['notices.list2']}
          element={<LazyNotices
            title={t('tiles.shelter2')}
            columns={shelterSearchColumns()}
            expandableRowsComponent={ShelterSearchExpandedComponent}
            noticeType={10}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list3']}
          element={<LazyNotices
            title={t('tiles.shelter3')}
            columns={shelterOfferColumns()}
            expandableRowsComponent={ShelterOfferExpandedComponent}
            noticeType={1}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list4']}
          element={<LazyNotices
            title={t('tiles.transport2')}
            columns={transportOfferColumns()}
            expandableRowsComponent={TransportOfferExpandedComponent}
            // itemComponent={TransportOfferItem}
            noticeType={20}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list5']}
          element={<LazyNotices
            title={t('tiles.help2')}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
            noticeType={50}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list6']}
          element={<LazyNotices
            title={t('tiles.transport3')}
            columns={transportSearchColumns()}
            expandableRowsComponent={TransportSearchExpandedComponent}
            noticeType={22}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list7']}
          element={<LazyNotices
            title={t('tiles.translations2')}
            columns={translationOfferColumns()}
            expandableRowsComponent={TranslationOfferExpandedComponent}
            noticeType={30}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list8']}
          element={<LazyNotices
            title={t('tiles.lfHelp2')}
            columns={helpOfferColumnsColumns()}
            expandableRowsComponent={HelpOfferExpandedComponent}
            noticeType={52}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list9']}
          element={<LazyNotices
            title={t('tiles.lfTranslations2')}
            columns={translationOfferColumns()}
            expandableRowsComponent={TranslationOfferExpandedComponent}
            noticeType={32}
            filters={NoticesFilter}
          />}
        />
        <Route path={route['notices.view']()} element={<LazyNotice/>} />
      </Route>,
      <Route key={route['notices.add']} path={route['notices.add']} element={<UserLayout />}>
        <Route index element={<LazyAddNotice />} />
        <Route
          path={route['notices.addShelterOffer']}
          element={<LazyAddNotice
            title={t("form.offerShelter")}
            description={t("formDescription.offerShelter")}
            formComponent={FormAddShelterOffer}
          />}
          />
          <Route
            path={route['notices.addFindShelter']}
            element={<LazyAddNotice
              title={t("form.findShelter")}
              description={t("formDescription.findShelter")}
              formComponent={FormAddFindShelter}
            />}
          />
          <Route
            path={route['notices.addTranslationOffer']}
            element={<LazyAddNotice
              title={t("form.offerTranslations")}
              description={t("formDescription.translations")}
              formComponent={FormAddTranslationOffer}
            />}
          />
          <Route
            path={route['notices.addFindTransportOffer']}
            element={<LazyAddNotice
              title={t("form.findTransport")}
              description={t("formDescription.findTransport")}
              formComponent={FormAddFindTransportOffer}
            />}
          />
          <Route
            path={route['notices.addTransportOffer']}
            element={<LazyAddNotice
              title={t("form.offerTransport")}
              description={t("formDescription.offerTransport")}
              formComponent={FormAddTransportOffer}
            />}
          />
        <Route path={route['notices.addHelpOffer']} element={<LazyAddHelpOffer />} />
        <Route path={route['notices.addFindHelp']} element={<LazyAddFindHelp />} />
        <Route path={route['notices.addFindTranslationOffer']} element={<LazyAddFindTranslationOffer />} />
        <Route path={route['notices.success']} element={<LazyAddSuccess />} />
      </Route>,
      <Route key={route['index']} path={route['index']} element={<UserLayout />}>
        <Route path={route['notices.edit']()} element={<LazyEditNotice />} />
      </Route>
    ]
  )
} 

export default NoticeRoutes