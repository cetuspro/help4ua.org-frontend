import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { useGetReports } from '@/app/CRUD/reports/getReports'
import { route } from '@/app/router/urls/routes'
import UserSidebarMenu from '@/views/user/components/UserSidebarMenu'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import UserReportsDatatable from './UserReportsDatatable'
import { withFilters } from '@/app/context/queries/Filters'
import UserReportsFilter from './UserReportsFilter'

const breadcrumbItems = [
  {
    url: route['map'],
    label: 'Mapa',
  },
  {
    label: 'Zgłoszenia',
  },
]

const ViewReportList = () => {
  const queryData = useGetReports()

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <UserReportsFilter />
      <div className="flex flex-col lg:flex-row gap-6 mt-4 items-start">
        {/* <UserSidebarMenu /> */}
        <QueryProvider {...queryData}>
          <QueryHasNoResults>
            <div className="bg-white p-8 rounded-xl grow">
              <p className="text-lg text-gray-500 text-center mb-4">Brak zgłoszeń</p>
            </div>
          </QueryHasNoResults>
          <QueryHasResults>
            <div className="bg-white p-4 rounded-lg overflow-x-auto w-full">
              <UserReportsDatatable path={route['reports.view']} />
            </div>
          </QueryHasResults>
        </QueryProvider>
      </div>
    </>
  )
}

export default withFilters(ViewReportList, {
  params: ['SearchPhrase, PageNumber, PageSize, ReportType'],
})
