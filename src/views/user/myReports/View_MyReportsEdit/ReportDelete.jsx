import { useState } from 'react'
import { InputDelete } from '@/components/form/Input_Delete'
import Button from '@/components/common/Button'
import ConfirmModal from '@/components/common/ConfirmModal'
import { CgDanger } from 'react-icons/cg'
import { usePureMutation } from '../../../../app/hooks/usePureMutation'
import { deleteUserReport } from '../../../../app/CRUD/reports/deleteUserReport'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

const ReportDelete = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const { reportId } = useParams()

  const handleDelete = () => {
    queryClient.invalidateQueries('app.userReports')
    toast.success('Pomyślnie usunięto zgłoszenie')
    navigate(route['userReports.list'])
  }

  const handleError = () => {
    toast.error('Wystąpił błąd przy usuwaniu zgłoszenia')
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  const mutation = usePureMutation(deleteUserReport(reportId), {
    onError: handleError,
    onSuccess: handleDelete,
  })
  return (
    <>
      <InputDelete onClick={() => setIsOpen(true)} />
      <ConfirmModal
        setOpen={setIsOpen}
        open={isOpen}
        title="Usuń zgłoszenie"
        description="Czy na pewno usunąć zgłoszenie?"
        Icon={CgDanger}>
        <Button onClick={handleCancel} color="secondary">
          Anuluj
        </Button>
        <Button onClick={mutation.mutate}>Usuń zgłoszenie</Button>
      </ConfirmModal>
    </>
  )
}

export default ReportDelete
