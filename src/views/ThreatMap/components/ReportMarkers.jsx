import { useQueryContext } from '../../../app/context/queries/QueryProvider'
import { LayersControl, LayerGroup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
// import GetCustomThreatMarker from '@/components/map/GetCustomThreatPin'
import { Marker } from 'react-leaflet'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import { MENU_SINGLE_REPORT } from '@/app/config/sidebarMenus'
import { useMapContext } from '@/app/context/MapContext'
import { useNavigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import GetCustomThreatMarker from '@/components/map/GetCustomThreatPin'

const ReportMarkers = () => {
  const { data } = useQueryContext()
  const navigate = useNavigate()
  const { setCurrentMenu, setIsSidebarOpen } = useMapContext()

  return (
    <QueryHasResults>
      <LayersControl.Overlay checked name="Zgłoszenia">
        <LayerGroup>
          <MarkerClusterGroup>
            {data?.map(
              (item) =>
                !!(item?.localization && item?.localization.lat && item?.localization.lng) && (
                  <GetCustomThreatMarker
                    type={item?.reportType?.id}
                    key={item.id}
                    position={item?.localization}
                    eventHandlers={{
                      click: () => {
                        navigate(route['map.viewReport'](item.id))
                        setCurrentMenu(MENU_SINGLE_REPORT)
                        setIsSidebarOpen(true)
                      },
                    }}></GetCustomThreatMarker>
                ),
            )}
          </MarkerClusterGroup>
        </LayerGroup>
      </LayersControl.Overlay>
    </QueryHasResults>
  )
}

export default ReportMarkers
