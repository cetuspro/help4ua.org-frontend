import { QueryHasResults } from "@/app/context/queries/QueryHasResults"
import { QueryIsSuccess } from "@/app/context/queries/QueryIsSuccess"
import { QueryProvider } from "@/app/context/queries/QueryProvider"
import { useGetAdminReports } from "../../../app/CRUD/reports/getAdminReports"
import { LayersControl, MapContainer, TileLayer } from "react-leaflet"
import AdminReportMarkers from "./components/AdminReportMarkers"
import { useLocation } from "react-router-dom"
import { useEffect, useMemo, useRef, useState } from "react"

const ViewReportMap = () => {
  const reportsData = useGetAdminReports()
  const {state} = useLocation()
  const selectedPin = useMemo(() => reportsData.data.find(report => report?.id === state?.reportId), [reportsData, state])
  const [map, setMap] = useState()

  useEffect(() => {
    if(map && selectedPin && selectedPin.localization && selectedPin.localization.lat && selectedPin.localization.lng) {
      map.setView(selectedPin.localization, 14)
    }
  }, [map])

  return (
    <MapContainer
      center={[50.04132, 21.99901]}
      zoom={14}
      maxZoom={18}
      scrollWheelZoom={true}
      className="bg-white dark:bg-gray-900 relative z-0 threat-map"
      whenCreated={setMap}
      style={{ height: 'calc(100vh - 112px)' }}>
      <LayersControl position="topleft">
        <QueryProvider {...reportsData}>
          <QueryIsSuccess>
            <QueryHasResults>
              <AdminReportMarkers selectedPin={selectedPin}/>
            </QueryHasResults>
          </QueryIsSuccess>
        </QueryProvider>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl>
    </MapContainer>
  )
}

export default ViewReportMap