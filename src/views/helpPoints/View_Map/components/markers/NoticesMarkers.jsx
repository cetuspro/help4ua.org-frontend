import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { useMemo } from 'react'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { LayersControl } from 'react-leaflet'

import NoticePopup from '../popups/NoticePopup'
import GetNoticeMarker from '@/app/utils/getNoticeMarker'

const NoticesMarkers = () => {
  const { data, isSuccess } = useQueryContext()

  const markers = useMemo(
    () =>
      data && isSuccess
        ? data.map((item) => {
            return {
              ...item,
              position: { lat: item?.localization?.latitude, lng: item?.localization?.longitude },
            }
          })
        : [],
    [isSuccess],
  )

  return (
    <LayersControl.Overlay name="Ogłoszenia">
      <MarkerClusterGroup>
        {markers.map((marker) => (
          <GetNoticeMarker key={marker.id} {...marker}>
            <NoticePopup {...marker} />
          </GetNoticeMarker>
        ))}
      </MarkerClusterGroup>
    </LayersControl.Overlay>
  )
}

export default NoticesMarkers
