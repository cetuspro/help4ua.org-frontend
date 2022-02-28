import { Marker } from 'react-leaflet'
import L from 'leaflet'

import bed from '../../assets/markers/Bed.svg'
import reception from '../../assets/markers/reception.svg'
import zbiorka from '../../assets/markers/zbiorka.svg'

const receptionIcon = L.icon({
  iconUrl: reception,
  iconRetinalUrl: reception,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})

const bedIcon = L.icon({
  iconUrl: bed,
  iconRetinalUrl: bed,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})

const zbiorkaIcon = L.icon({
  iconUrl: zbiorka,
  iconRetinalUrl: zbiorka,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})

const GetHelpPointMarker = (props) => {
  switch (props.type.id) {
    case 10:
      // PUNKT RECEPCYJNY
      return (
        <Marker icon={receptionIcon} {...props}>
          {props.children}
        </Marker>
      )

    case 20:
      // PUNKT ZBIÓRKI
      return (
        <Marker icon={zbiorkaIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 30:
      // PUNKT NOCLEGOWY
      return (
        <Marker icon={bedIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 0:
    default:
      return <Marker {...props}>{props.children}</Marker>
  }
}

export default GetHelpPointMarker
