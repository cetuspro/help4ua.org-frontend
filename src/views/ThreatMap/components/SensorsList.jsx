import CustomSensorMarker from '../../../components/map/CustomSensorMarker'
import { useQueryContext } from '../../../app/context/queries/QueryProvider'
import { LayersControl, LayerGroup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { useMemo } from 'react'

const SensorsList = () => {
  const { data } = useQueryContext()

  const sensorData = useMemo(
    () =>
      data?.map((item) => ({
        ...item,
        position: {
          lat: item.localization.latitude,
          lng: item.localization.longitude,
        },
      })),
    [data],
  )

  return (
    <LayersControl.Overlay name="Sensory">
      <LayerGroup>
        <MarkerClusterGroup>
          {sensorData.map(({ position, id }) => (
            <CustomSensorMarker key={id} position={position} id={id} />
          ))}
        </MarkerClusterGroup>
      </LayerGroup>
    </LayersControl.Overlay>
  )
}

export default SensorsList
