import Button from '@/components/common/Button'
import { AiOutlinePlus } from 'react-icons/ai'
import { useMapContext } from '@/app/context/MapContext'
import { useMapEvent } from 'react-leaflet'
import Modal from '@/components/common/Modal'
import { useState } from 'react'
import UserReportsForm from '@/views/user/myReports/form/UserReportsForm'
import { createUserReport } from '../../../app/CRUD/reports/createUserReport'
import { useNavigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import toast from 'react-hot-toast'
import { InputSubmit } from '@/components/form/Input_Submit'
import { useMap } from 'react-leaflet'

const AddReport = () => {
  const map = useMap()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const { isAddMode, exitAddMode, reportPosition, setReportPosition, enterAddMode } =
    useMapContext()

  const handleSuccess = (e) => {
    navigate(route['userReports.view'](e.data))
    toast.success('Pomyślnie dodano zgłoszenie.')
  }

  const handleError = (e) => {
    console.log(e)
    toast.error('Wystąpił błąd przy dodawaniu zgłoszenia')
  }

  const handleCancel = () => {
    map.dragging.enable()
    map.touchZoom.enable()
    map.doubleClickZoom.enable()
    map.scrollWheelZoom.enable()
    map.boxZoom.enable()
    map.keyboard.enable()

    exitAddMode()
    setOpen(false)
  }

  useMapEvent('click', (e) => {
    if (!isAddMode) return
    if(e.originalEvent.target === e.originalEvent.currentTarget) {
      setReportPosition({ localization: e.latlng })
      setOpen(true)
      exitAddMode()
    }
  })

  return (
    <>
      {!isAddMode && (
        <Button
          onClick={enterAddMode}
          color="primary"
          className="flex items-center gap-2 justify-center shadow">
          <AiOutlinePlus size={20} />
          Dodaj zgłoszenie
        </Button>
      )}
      {isAddMode && (
        <Button
          onClick={() => {
            exitAddMode()
          }}
          color="secondary"
          className="flex items-center gap-2 justify-center shadow">
          Anuluj
        </Button>
      )}
      <Modal title="Dodaj zgłoszenie" setOpen={setOpen} open={open}>
        <UserReportsForm
          query={createUserReport}
          onError={handleError}
          onSuccess={handleSuccess}
          initial={reportPosition}>
          <Button type="button" color="secondary" onClick={handleCancel}>
            Anuluj
          </Button>
          <InputSubmit />
        </UserReportsForm>
      </Modal>
    </>
  )
}

export default AddReport
