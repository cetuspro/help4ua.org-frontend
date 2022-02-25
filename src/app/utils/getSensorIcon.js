import { WiBarometer, WiHumidity } from 'react-icons/wi'
import { RiTempHotFill } from 'react-icons/ri'

export const getSensorIcon = (name) => {
  switch (name) {
    case 'PRESSURE':
      return WiBarometer
    case 'HUMIDITY':
      return WiHumidity
    case 'TEMPERATURE':
      return RiTempHotFill
    default:
      return null
  }
}

export const getSensorName = (name) => {
  switch (name) {
    case 'PRESSURE':
      return 'Ciśnienie'
    case 'HUMIDITY':
      return 'Wilgotność'
    case 'TEMPERATURE':
      return 'Temperatura'
    default:
      return name
  }
}
