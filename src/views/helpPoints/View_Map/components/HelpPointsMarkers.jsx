import { useQueryContext } from '@/app/context/queries/QueryProvider'
import GetHelpPointMarker from '@/app/utils/GetHelpPointMarker'
import { useMemo } from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

const HelpPointsMarkers = () => {
  const { data, isSuccess } = useQueryContext()

  const markers = useMemo(
    () =>
      data && isSuccess
        ? data.map((item) => ({
            ...item,
            position: { lat: item?.localization?.latitude, lng: item?.localization?.longitude },
          }))
        : [],
    [isSuccess],
  )
  return (
    <MarkerClusterGroup>
      {markers.map((marker) => (
        <GetHelpPointMarker key={marker.name} {...marker}>
          <Popup className="custom-popup">
            <div className="flex gap-8 justify-between">
              <span className="text-bold text-gray-600">{marker?.type?.name}</span>
              <span className="text-bold text-gray-600">{marker.city}</span>
            </div>
            <h2 className="text-bold text-lg">{marker?.name}</h2>
            {marker?.phoneNumber && (
              <div className="flex gap-2 text-base items-center mb-2">
                <BiPhoneCall color="currentColor" size={'1.1em'} />
                <a href={`tel:${marker?.phoneNumber}`}>{marker?.phoneNumber}</a>
              </div>
            )}
            <p className="my-1">{marker?.description}</p>
          </Popup>
        </GetHelpPointMarker>
      ))}
    </MarkerClusterGroup>
  )
}

export default HelpPointsMarkers
