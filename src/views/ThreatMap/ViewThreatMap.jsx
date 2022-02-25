import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import Sidebar from './components/Sidebar'
import { useGetReportsMap } from '@/CRUD/reports/getReports'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import Helmet from 'react-helmet'
import ReportMarkers from './components/ReportMarkers'
import { MapProvider } from '@/app/context/MapContext'
import { Suspense, useEffect } from 'react'
import { useSidebar } from '@/app/hooks/useSidebar'
import { withFilters } from '@/app/context/queries/Filters'
import Header from '@/components/common/Header'
import Spinner from '@/components/common/Spinner'

const ViewThreatMap = () => {
  const reportsData = useGetReportsMap()
  const sidebarControl = useSidebar()

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        sidebarControl.exitAddMode()
      }
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>Mapa zagrożeń | Connected City</title>
      </Helmet>
      <Header />
      <Suspense fallback={<Spinner />}>
        <MapProvider {...sidebarControl}>
          <Helmet>
            <title>Mapa zagrożeń | Connected City</title>
            {sidebarControl.isAddMode && <body className="is-edit-mode" />}
          </Helmet>
          <MapContainer
            minZoom={12}
            center={[50.04132, 21.99901]}
            zoom={14}
            maxZoom={18}
            scrollWheelZoom={true}
            className={`bg-white dark:bg-gray-900 relative z-0 threat-map`}
            style={{ height: '100vh' }}>
            <Sidebar />
            <LayersControl position="topleft">
              <QueryProvider {...reportsData}>
                <ReportMarkers />
              </QueryProvider>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl>
          </MapContainer>
        </MapProvider>
      </Suspense>
    </>
  )
}

export default withFilters(ViewThreatMap, { params: ['searchPhrase', 'reportType'] })
