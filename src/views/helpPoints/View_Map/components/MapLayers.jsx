import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { useGetHelpPoints } from '@/app/CRUD/helpPoints/getHelpPoints'
import { useGetNotices } from '@/app/CRUD/notices/getNotices'
import { LayersControl } from 'react-leaflet'
import HelpPointsMarkers from './markers/HelpPointsMarkers'
import NoticesMarkers from './markers/NoticesMarkers'

const MapLayers = () => {
  const helpPointsData = useGetHelpPoints()
  const noticesData = useGetNotices({isForMap: true})

  return (
    <LayersControl position="topleft">
      <QueryProvider {...helpPointsData}>
        <HelpPointsMarkers />
      </QueryProvider>
      <QueryProvider {...noticesData}>
        <NoticesMarkers />
      </QueryProvider>
    </LayersControl>
  )
}

export default MapLayers
