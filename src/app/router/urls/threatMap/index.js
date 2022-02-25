import { BASE_URL } from '../../../config/env'

export const threatMapRoutes = {
  map: `${BASE_URL}/map`,
  'map.addReport': `${BASE_URL}/map/create-report`,
  'map.viewReport': (reportId = ':reportId') => `${BASE_URL}/map/report/${reportId}`,
  'map.viewSensor': (sensorId = ':sensorId') => `${BASE_URL}/map/sensor/${sensorId}`,
}
