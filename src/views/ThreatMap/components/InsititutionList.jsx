import { useQueryContext } from '../../../app/context/queries/QueryProvider'
import { LayersControl, LayerGroup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import GetCustomPin from '../../../components/map/GetCustomPin'

const InsititutionList = () => {
  const { data } = useQueryContext()

  return (
    <LayersControl.Overlay checked name="Instytucje">
      <LayerGroup>
        <MarkerClusterGroup>
          {data.map((props, i) => (
            <GetCustomPin key={i} position={props?.location} {...props} />
          ))}
        </MarkerClusterGroup>
      </LayerGroup>
    </LayersControl.Overlay>
  )
}

export default InsititutionList
