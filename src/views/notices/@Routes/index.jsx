import { lazy } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import UserLayout from '@/layouts/UserLayout'
import { shelterOfferColumns, ShelterOfferExpandedComponent } from '@/views/notices/View_Notices/dataTable/shelterOffer'
import { helpOfferColumnsColumns, HelpOfferExpandedComponent } from '@/views/notices/View_Notices/dataTable/helpOffer'
import {
  transportOfferColumns,
  TransportOfferExpandedComponent,
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
const LazyNotices = lazy(() => import('@/views/notices/View_Notices/View_Notices'))
const LazyNotice = lazy(() => import('@/views/notices/View_Notice/View_Notice'))
const LazyAddFindShelter = lazy(() => import('../../../ua/Form_AddFindShelter'))
const LazyAddShelterOffer = lazy(() => import('../../../ua/Form_AddShelterOffer'))
const LazyAddTransportOffer = lazy(() => import('../../../ua/Form_AddTransportOffer'))
const LazyAddFindTransportOffer = lazy(() => import('../../../ua/Form_AddFindTransportOffer'))
const LazyAddHelpOffer = lazy(() => import('../../../ua/Form_AddHelpOffer'))
const LazyAddSuccess = lazy(() => import('../../../ua/NoticeCreateSuccess'))
const LazyAddTranslationOffer = lazy(() => import('../../../ua/Form_AddTranslationOffer'))

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
            columns={shelterSearchColumns}
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
            columns={transportOfferColumns}
            expandableRowsComponent={TransportOfferExpandedComponent}
            noticeType={20}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list5']}
          element={<LazyNotices
            title={t('tiles.help2')}
            columns={helpOfferColumnsColumns}
            expandableRowsComponent={HelpOfferExpandedComponent}
            noticeType={50}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list6']}
          element={<LazyNotices
            title={t('tiles.transport3')}
            columns={transportSearchColumns}
            expandableRowsComponent={TransportSearchExpandedComponent}
            noticeType={22}
            filters={NoticesFilter}
          />}
        />
        <Route
          path={route['notices.list7']}
          element={<LazyNotices
            title={t('tiles.translations2')}
            columns={translationOfferColumns}
            expandableRowsComponent={TranslationOfferExpandedComponent}
            noticeType={30}
            filters={NoticesFilter}
          />}
        />
        <Route path={route['notices.view']()} element={<LazyNotice/>} />
      </Route>,
      <Route key={route['notices.add']} path={route['notices.add']} element={<UserLayout />}>
        <Route index element={<LazyAddShelterOffer />} />
        <Route path={route['notices.addShelterOffer']} element={<LazyAddShelterOffer />} />
        <Route path={route['notices.addFindShelter']} element={<LazyAddFindShelter />} />
        <Route path={route['notices.addTransportOffer']} element={<LazyAddTransportOffer />} />
        <Route path={route['notices.addHelpOffer']} element={<LazyAddHelpOffer />} />
        <Route path={route['notices.addFindTransportOffer']} element={<LazyAddFindTransportOffer />} />
        <Route path={route['notices.addTranslationOffer']} element={<LazyAddTranslationOffer />} />
        <Route path={route['notices.success']} element={<LazyAddSuccess />} />
      </Route>
    ]
  )
} 

export default NoticeRoutes