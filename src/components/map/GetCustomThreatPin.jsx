import L from 'leaflet'
import { Marker } from 'react-leaflet'
import yellowDot from '../../assets/img/map/yellowDot.svg'
import redDot from '../../assets/img/map/redDot.svg'
import greenDot from '../../assets/img/map/greenDot.svg'
import blueDot from '../../assets/img/map/blueDot.svg'
import grayDot from '../../assets/img/map/grayDot.svg'
import orangeDot from '../../assets/img/map/orangeDot.svg'

const yellowIcon = L.icon({
  iconUrl: yellowDot,
  iconRetinaUrl: yellowDot,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
})
const redIcon = L.icon({
  iconUrl: redDot,
  iconRetinaUrl: redDot,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
})
const greenIcon = L.icon({
  iconUrl: greenDot,
  iconRetinaUrl: greenDot,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
})
const blueIcon = L.icon({
  iconUrl: blueDot,
  iconRetinaUrl: blueDot,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
})
const grayIcon = L.icon({
  iconUrl: grayDot,
  iconRetinaUrl: grayDot,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
})
// const orangeIcon = L.icon({
//   iconUrl: orangeDot,
//   iconRetinaUrl: orangeDot,
//   iconSize: [16, 16],
//   iconAnchor: [8, 8],
// })

const GetCustomThreatMarker = (props) => {
  switch (props.type) {
    case 2:
      return (
        <Marker icon={blueIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 4:
      return (
        <Marker icon={greenIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 6:
      return (
        <Marker icon={redIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 8:
      return (
        <Marker icon={yellowIcon} {...props}>
          {props.children}
        </Marker>
      )
    default:
      return (
        <Marker icon={grayIcon} {...props}>
          {props.children}
        </Marker>
      )
  }
}

export default GetCustomThreatMarker
