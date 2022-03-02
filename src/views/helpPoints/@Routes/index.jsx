import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import MapLayout from '@/layouts/MapLayout'
import UserLayout from '@/layouts/UserLayout'
import { useTranslation } from 'react-i18next'
import FormAddHelpPoint from '../View_AddHelpPoint/forms/Form_AddHelpPoint'
const LazyHelpPoints = lazy(() => import('../View_HelpPoints/View_HelpPoints'))
const LazyAddHelpPoint = lazy(() => import('../../helpPoints/View_AddHelpPoint/View_AddHelpPoint'))
const LazyHelpPointCreateSuccess = lazy(() => import('../../helpPoints/View_HelpPointCreateSuccess/HelpPointCreateSuccess'))

const Map = lazy(() => import('../View_Map/ViewMap'))

const HelpPointsRoutes = () => {
  const { t } = useTranslation();
  return [
    <Route key={route['helpPoints.map']} path={route['helpPoints.map']} element={<Map />}>
      <Route index element={<div>siema</div>} />
    </Route>,
    <Route key={route['helpPoints']} path={route['helpPoints']} element={<UserLayout />}>
      <Route index element={<LazyHelpPoints />}/>
      <Route
        path={route['helpPoints.add']}
        element={<LazyAddHelpPoint
          title={t("form.offerTranslations")}
          description={t("formDescription.translations")}
          formComponent={FormAddHelpPoint}
        />}
      />
      <Route
        path={route['helpPoints.success']}
        element={<LazyHelpPointCreateSuccess/>}
      />
    </Route>,
  ]
}

export default HelpPointsRoutes
