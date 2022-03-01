import { Marker } from 'react-leaflet'
import L from 'leaflet'

import lookForAnimalHelp from '../../assets/markers/lookForAnimalHelp.svg'
import offerForAnimalHelp from '../../assets/markers/offerAnimalHelp.svg'
import lookForShelter from '../../assets/markers/lookForShelter.svg'
import offerForShelter from '../../assets/markers/offerShelter.svg'
import lookForTransport from '../../assets/markers/lookForTransport.svg'
import offerForTransport from '../../assets/markers/offerTransport.svg'
import lookForHelp from '../../assets/markers/lookForHelp.svg'
import offerHelp from '../../assets/markers/offerHelp.svg'
import lookForTranslation from '../../assets/markers/lookForTranslation.svg'
import offerTranslation from '../../assets/markers/offerTranslation.svg'

const lookForAnimalHelpIcon = L.icon({
  iconUrl: lookForAnimalHelp,
  iconRetinalUrl: lookForAnimalHelp,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const offerForAnimalHelpIcon = L.icon({
  iconUrl: offerForAnimalHelp,
  iconRetinalUrl: offerForAnimalHelp,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const lookForShelterIcon = L.icon({
  iconUrl: lookForShelter,
  iconRetinalUrl: lookForShelter,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const offerForShelterIcon = L.icon({
  iconUrl: offerForShelter,
  iconRetinalUrl: offerForShelter,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const lookForTransportIcon = L.icon({
  iconUrl: lookForTransport,
  iconRetinalUrl: lookForTransport,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const offerForTransportIcon = L.icon({
  iconUrl: offerForTransport,
  iconRetinalUrl: offerForTransport,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const lookForHelpIcon = L.icon({
  iconUrl: lookForHelp,
  iconRetinalUrl: lookForHelp,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const offerHelpIcon = L.icon({
  iconUrl: offerHelp,
  iconRetinalUrl: offerHelp,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const lookForTranslationIcon = L.icon({
  iconUrl: lookForTranslation,
  iconRetinalUrl: lookForTranslation,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})
const offerTranslationIcon = L.icon({
  iconUrl: offerTranslation,
  iconRetinalUrl: offerTranslation,
  iconSize: [30, 39],
  iconAnchor: [15, 15],
})

const GetNoticeMarker = (props) => {
  switch (props.type) {
    case 1:
      // OFERUJE ZAKWATEROWANIE
      return (
        <Marker icon={offerForShelterIcon} {...props}>
          {props.children}
        </Marker>
      )

    case 10:
      // SZUKAM ZAKWATEROWANIA
      return (
        <Marker icon={lookForShelterIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 20:
      // OFERUJE TRANSPORT
      return (
        <Marker icon={offerForTransportIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 22:
      // SZUKAM TRANSPORTU
      return (
        <Marker icon={lookForTransportIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 30:
      // SZUKAM TRANSPORTU
      return (
        <Marker icon={offerTranslationIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 50:
      //OFERUJE POMOC
      return (
        <Marker icon={offerHelpIcon} {...props}>
          {props.children}
        </Marker>
      )
    case 60:
      // OFERUJE POMOC DLA ZWIERZĄT
      return (
        <Marker icon={offerForAnimalHelpIcon} {...props}>
          {props.children}
        </Marker>
      )
    default:
      return <Marker {...props}>{props.children}</Marker>
  }
}

export default GetNoticeMarker
