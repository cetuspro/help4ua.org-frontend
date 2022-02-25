import { Breadcrumb } from '@/components/common/Breadcrumb'
import { route } from '@/app/router/urls/routes'
import UserReportsFormEdit from '../form/UserReportsFormEdit'
import { editUserReport } from '../../../../app/CRUD/reports/editUserReport'
import { InputSubmit } from '../../../../components/form/Input_Submit'
import Button from '@/components/common/Button'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { useGetUserReport } from '../../../../app/CRUD/reports/getUserReport'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import ReportDelete from './ReportDelete'
import { QueryHasError } from '@/app/context/queries/QueryHasError'
import { Navigate } from 'react-router-dom'

const breadcrumbItems = ({ title }, reportId) => [
  {
    url: route['index'],
    label: 'Strona główna',
  },
  {
    label: 'Moje zgłoszenia',
    url: route['userReports.list'],
  },
  {
    label: title,
    url: route['userReports.view'](reportId),
  },
  {
    label: 'Edytuj ogłoszenie',
  },
]

const ViewMyReportsEdit = () => {
  const { reportId } = useParams()
  const queryData = useGetUserReport(reportId)
  const navigate = useNavigate()
  const handleSuccess = () => {
    navigate(route['userReports.view'](reportId))
    toast.success('Pomyślnie edytowano zgłoszenie.')
  }

  const handleError = () => {
    toast.error('Wystąpił błąd przy edycji zgłoszenia')
  }

  return (
    <>
      <QueryProvider {...queryData}>
        <QueryIsSuccess>
          <Breadcrumb items={breadcrumbItems(queryData?.data, reportId)} />
          <div className="max-w-xl mx-auto bg-white rounded-xl p-8 mt-10">
            <UserReportsFormEdit
              query={editUserReport(reportId)}
              onError={handleError}
              onSuccess={handleSuccess}
              initial={queryData?.data}>
              <ReportDelete />
              <div className="ml-auto flex gap-4">
                <Button
                  color="secondary"
                  onClick={() => navigate(route['userReports.view'](reportId))}>
                  Anuluj
                </Button>
                <InputSubmit />
              </div>
            </UserReportsFormEdit>
          </div>
        </QueryIsSuccess>
        <QueryHasError>
          <Navigate to={route['userReports.list']} />
        </QueryHasError>
      </QueryProvider>
    </>
  )
}

export default ViewMyReportsEdit
