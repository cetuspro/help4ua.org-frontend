import { memo } from 'react'

import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const SingleNoticeMap = ({ marker }) => {
  return (
    <MapContainer
      center={marker}
      zoom={13}
      scrollWheelZoom
      className={`bg-white dark:bg-gray-900 relative z-0 threat-map h-full max-h-screen`}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={marker} />
    </MapContainer>
  )
}

export default memo(SingleNoticeMap)
