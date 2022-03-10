import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useGetHelpPoints } from '@/app/CRUD/helpPoints/getHelpPoints'
import HelpPointsMarkers from './components/markers/HelpPointsMarkers'
import { Suspense } from 'react'
import Spinner from '@/components/common/Spinner'
import { MapProvider } from '@/app/context/MapContext'
import Sidebar from '@/views/ThreatMap/components/Sidebar'
import Helmet from 'react-helmet'
import Header from '@/components/common/Header'
import MapLayers from './components/MapLayers'

const ViewMap = () => {
  return (
    <>
      <Helmet>
        <title>Mapa punktów pomocy | UA Pomoc</title>
      </Helmet>
      <Header />
      <Suspense fallback={<Spinner />}>
        <MapProvider>
          <MapContainer
            center={[50.04132, 21.99901]}
            zoom={14}
            maxZoom={18}
            scrollWheelZoom={true}
            className={`bg-white dark:bg-gray-900 relative z-0 threat-map h-full`}>
            {/* <Sidebar /> */}
            <MapLayers />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </MapProvider>
      </Suspense>
    </>
  )
}

export default ViewMap
