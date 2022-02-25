import { LayersControl, LayerGroup, Tooltip, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { Marker } from 'react-leaflet'
import SingleAdminReportDetails from './SingleAdminReportDetails'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { useState } from 'react'
import Card from '@/components/common/Card'

const AdminReportMarkers = ({selectedPin}) => {
  const { data } = useQueryContext()
  const [isTooltipHidden, setIsTooltipHidden] = useState(false)

  const handleMarkerClick = () => {
    if(!isTooltipHidden) {
      setIsTooltipHidden(true)
    }
  }

  return (
    <LayersControl.Overlay checked name="Zgłoszenia">
      <LayerGroup>
        <MarkerClusterGroup>
          {data?.map((item) => !!(item?.localization && item?.localization.lat && item?.localization.lng) && (
            <Marker key={item.id} position={item?.localization} eventHandlers={{click: handleMarkerClick}}>
              {item?.id === selectedPin?.id && !isTooltipHidden ? (
                <Tooltip permanent direction="top" opacity={1} offset={[-15, -15]} className="p-4 pointer-events-auto">
                  <SingleAdminReportDetails {...item} />
                </Tooltip>
              ) : (
                <Popup className="report-popup min-w-fit">
                  <Card><SingleAdminReportDetails {...item} /></Card>
                </Popup>
              )}
            </Marker>
          ))}
        </MarkerClusterGroup>
      </LayerGroup>
    </LayersControl.Overlay>
  )
}

export default AdminReportMarkers
