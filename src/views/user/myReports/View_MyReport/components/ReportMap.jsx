import { MapContainer, TileLayer } from 'react-leaflet'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import GetCustomThreatMarker from '@/components/map/GetCustomThreatPin'

const ReportMap = () => {
  const { data } = useQueryContext()

  if (data?.localization.lat && data?.localization.lng)
    return (
      <div className="bg-white rounded-lg h-64 md:h-full">
        <MapContainer
          minZoom={12}
          center={data?.localization}
          zoom={14}
          scrollWheelZoom={true}
          className="bg-white dark:bg-gray-900 relative z-0"
          style={{ height: '100%', borderRadius: '.5rem' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GetCustomThreatMarker type={data?.reportType?.id} position={data?.localization} />
        </MapContainer>
      </div>
    )
  else return null
}

export default ReportMap
