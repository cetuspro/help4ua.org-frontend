import { lazy } from 'react'
import { Route } from 'react-router-dom'
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
const LazyNotices = lazy(() => import('@/views/notices/View_Notices/View_Notices'))
const LazyNotice = lazy(() => import('@/views/notices/View_Notice/View_Notice'))
const LazyAddFindShelter = lazy(() => import('../../../ua/Form_AddFindShelter'))
const LazyAddShelterOffer = lazy(() => import('../../../ua/Form_AddShelterOffer'))
const LazyAddTransportOffer = lazy(() => import('../../../ua/Form_AddTransportOffer'))
const LazyAddHelpOffer = lazy(() => import('../../../ua/Form_AddHelpOffer'))
const LazyAddSuccess = lazy(() => import('../../../ua/NoticeCreateSuccess'))

const NoticeRoutes = [
  <Route key={route['notices.list']} path={route['notices.list']} element={<UserLayout />}>
    <Route index element={<LazyNotices />} />
    <Route
      path={route['notices.list2']}
      element={<LazyNotices
        title="Schronienie - osoby potrzebujące"
        columns={shelterSearchColumns}
        expandableRowsComponent={ShelterSearchExpandedComponent}
      />}
    />
    <Route
      path={route['notices.list3']}
      element={<LazyNotices
        title="Schronienie - oferty pomocy"
        columns={shelterOfferColumns}
        expandableRowsComponent={ShelterOfferExpandedComponent}
      />}
    />
    <Route
      path={route['notices.list4']}
      element={<LazyNotices
        title="Transport - oferty pomocy"
        columns={transportOfferColumns}
        expandableRowsComponent={TransportOfferExpandedComponent}
      />}
    />
    <Route
      path={route['notices.list5']}
      element={<LazyNotices
        title="Inne oferty pomocy"
        columns={helpOfferColumnsColumns}
        expandableRowsComponent={HelpOfferExpandedComponent}
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
    <Route path={route['notices.success']} element={<LazyAddSuccess />} />
  </Route>
]

export default NoticeRoutes