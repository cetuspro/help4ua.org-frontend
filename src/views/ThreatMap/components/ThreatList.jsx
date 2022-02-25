import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import ThreatListItem from './ThreatListItem'
import { useAuth } from '@/app/hooks/useAuth'
import AddReport from './AddReport'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { useMapContext } from '@/app/context/MapContext'
import { IoClose } from 'react-icons/io5'
import { useRef } from 'react'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults'
import Card from '@/components/common/Card'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import ReportsFilterForm from './ReportsFilterForm'
import { useGetReports } from '@/app/CRUD/reports/getReports'

const ThreatList = () => {
  const reportsData = useGetReports()
  const { isAuthenticated } = useAuth()
  const { setIsSidebarOpen } = useMapContext()
  const ref = useRef()

  return (
    <div className="h-full flex flex-col gap-1 w-full p-4 pt-0">
      <div className="flex flex-col gap-1" ref={ref}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-sm text-gray-400">Mapa zagrożeń</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="appearance-none cursor-pointer text-gray-400 hover:bg-gray-300 rounded-lg transition-colors">
            <IoClose size={26} color="currentColor" />
          </button>
        </div>
        {isAuthenticated && <AddReport />}
        <ReportsFilterForm />
      </div>
      <QueryProvider {...reportsData}>
        <QueryHasResults>
          {(data) => (
            <SimpleBar
              style={{ maxHeight: `calc(100% - ${ref.current?.offsetHeight}px)` }}
              forceVisible="y">
              {data.map((item) => (
                <ThreatListItem key={item.id} {...item} />
              ))}
            </SimpleBar>
          )}
        </QueryHasResults>
        <QueryHasNoResults>
          <Card className="mt-4">
            <p className="text-gray-600">Brak zgłoszeń.</p>
            {!isAuthenticated && (
              <p className="text-gray-600">
                <Link className="text-primary font-bold" to={route['auth.login']}>
                  Zaloguj się
                </Link>
                , aby dodać zgłoszenie
              </p>
            )}
          </Card>
        </QueryHasNoResults>
      </QueryProvider>
    </div>
  )
}

export default ThreatList
