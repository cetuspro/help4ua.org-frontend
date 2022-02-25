import { Breadcrumb } from '@/components/common/Breadcrumb'
import { route } from '@/app/router/urls/routes'
import UserSidebarMenu from '@/views/user/components/UserSidebarMenu'
import MyAccountInfo from '../components/MyAccountInfo'
import CardChangePassword from '../components/Card_ChangePassword'

const breadcrumbItems = [
  {
    url: route['index'],
    label: 'Strona główna',
  },
  {
    label: 'Moje konto',
  },
]

const ViewMyAccount = () => {

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="flex flex-col lg:flex-row gap-6 mt-4 items-stretch lg:items-start">
        <UserSidebarMenu/>
        <MyAccountInfo/>
        <CardChangePassword/>
      </div>
      {/* <QueryProvider {...queryData}>
        <QueryHasNoResults>
          <div className="mt-4 bg-white p-8 rounded-xl">
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
          <div className="bg-white p-4 mt-4 rounded-lg">
            <UserReportsDatatable />
          </div>
        </QueryHasResults>
      </QueryProvider> */}
    </>
  )
}

export default ViewMyAccount
