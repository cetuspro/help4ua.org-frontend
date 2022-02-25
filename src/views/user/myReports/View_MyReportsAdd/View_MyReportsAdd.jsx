import { Breadcrumb } from '@/components/common/Breadcrumb'
import { route } from '@/app/router/urls/routes'
import UserReportsForm from '../form/UserReportsForm'
import { createUserReport } from '@/app/CRUD/reports/createUserReport'
import { InputSubmit } from '@/components/form/Input_Submit'
import Button from '@/components/common/Button'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const breadcrumbItems = [
  {
    url: route['index'],
    label: 'Strona główna',
  },
  {
    url: route['userReports.list'],
    label: 'Moje zgłoszenia',
  },
  {
    label: 'Dodaj zgłoszenie',
  },
]

const ViewMyReportsAdd = () => {
  const navigate = useNavigate()
  const handleSuccess = (e) => {
    console.log(e)
    navigate(route['userReports.list'])
    toast.success('Pomyślnie dodano zgłoszenie.')
  }

  const handleError = (e) => {
    console.log(e)
    toast.error('Wystąpił błąd przy dodawaniu zgłoszenia')
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <UserReportsForm query={createUserReport} onError={handleError} onSuccess={handleSuccess}>
        <Button color="secondary" onClick={() => navigate(route['userReports.list'])}>
          Anuluj
        </Button>
        <InputSubmit />
      </UserReportsForm>
    </>
  )
}

export default ViewMyReportsAdd
