import L from 'leaflet'
import { useMap } from 'react-leaflet'
import { useCallback, useMemo, useState } from 'react'
import 'leaflet.heat'
import { useQueryContext } from '../../../app/context/queries/QueryProvider'
import IconButton from '@/components/common/IconButton'
import { IoIosPeople } from 'react-icons/io'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'

const HeatMap = ({ defaultEnabled = true }) => {
  const map = useMap()
  const { data } = useQueryContext()
  const [isEnabled, setIsEnabled] = useState(defaultEnabled)

  const heatLayer = useMemo(() => L.heatLayer(data, { radius: 10 }), [data])

  const toggleLayer = useCallback(() => {
    setIsEnabled((prev) => !prev)
    if (isEnabled) map.addLayer(heatLayer)
    else map.removeLayer(heatLayer)
  }, [isEnabled])

  return (
    <QueryHasResults>
      <IconButton
        tooltip="Pokaż zaludnienie"
        onClick={toggleLayer}
        icon={IoIosPeople}
        size={30}
        className="z-[1001] absolute top-36 left-2"
      />
    </QueryHasResults>
  )
}

export default HeatMap
