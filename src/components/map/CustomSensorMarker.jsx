import { Marker } from 'react-leaflet'
import L from 'leaflet'
import icon from '../../assets/img/map/sensorIcon.svg'
import { useNavigate } from 'react-router-dom'
import { MENU_SINGLE_SENSOR } from '@/app/config/sidebarMenus'
import { useMapContext } from '@/app/context/MapContext'
import { route } from '@/app/router/urls/routes'

const markerIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

const CustomSensorMarker = ({ position, id }) => {
  const { setCurrentMenu, setIsSidebarOpen } = useMapContext()
  const navigate = useNavigate()
  return (
    <Marker
      icon={markerIcon}
      position={position}
      eventHandlers={{
        click: () => {
          navigate(route['map.viewSensor'](id))
          setCurrentMenu(MENU_SINGLE_SENSOR)
          setIsSidebarOpen(true)
        },
      }}
    />
  )
}

export default CustomSensorMarker
