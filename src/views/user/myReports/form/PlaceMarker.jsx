import { useMapEvent, Marker } from 'react-leaflet'
import { useFormContext } from 'react-hook-form'
import { useRef, useMemo, useState } from 'react'

const PlaceMarker = () => {
  const methods = useFormContext()
  const [position, setPosition] = useState(methods.getValues('localization'))
  const map = useMapEvent('click', (e) => {
    methods.setValue('localization', e.latlng)
    setPosition(methods.getValues('localization'))
  })
  const markerRef = useRef()
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          methods.setValue('localization', marker.getLatLng())
          setPosition(methods.getValues('localization'))
        }
      },
    }),
    [],
  )

  if ((methods.getValues('localization.lat') && methods.getValues('localization.lng')) || position)
    return <Marker draggable eventHandlers={eventHandlers} ref={markerRef} position={position} />
  else return null
}

export default PlaceMarker
