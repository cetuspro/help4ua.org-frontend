import { Breadcrumb } from '@/components/common/Breadcrumb'
import { route } from '@/app/router/urls/routes'
import IconButton from '@/components/common/IconButton'
import { AiOutlinePlus } from 'react-icons/ai'
import { useGetUserReports } from '../../../../app/CRUD/reports/getUserReports'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults'
import UserReportsDatatable from './components/UserReportsDatatable'
import Button from '@/components/common/Button'
import UserSidebarMenu from '../../components/UserSidebarMenu'

const breadcrumbItems = [
  {
    url: route['index'],
    label: 'Strona główna',
  },
  {
    label: 'Moje zgłoszenia',
  },
]

const ViewMyReports = () => {
  const queryData = useGetUserReports()
  // console.log(queryData)

  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <IconButton
          icon={AiOutlinePlus}
          url={route['map.addReport']}
          tooltip={'Dodaj zgłoszenie'}
        />
      </Breadcrumb>
      <div className="flex flex-col lg:flex-row gap-6 mt-4 items-start">
        <UserSidebarMenu />
        <QueryProvider {...queryData}>
          <QueryHasNoResults>
            <div className="bg-white p-8 rounded-xl grow">
              <p className="text-lg text-gray-500 text-center mb-4">
                Nie dodałeś jeszcze żadnego zgłoszenia
              </p>
              <Button color="secondary" to={route['map.addReport']}>
                <AiOutlinePlus size={24} />
                Dodaj zgłoszenie
              </Button>
            </div>
          </QueryHasNoResults>
          <QueryHasResults>
            <div className="bg-white p-4 rounded-lg overflow-x-auto max-w-full">
              <UserReportsDatatable />
            </div>
          </QueryHasResults>
        </QueryProvider>
      </div>
    </>
  )
}

export default ViewMyReports
