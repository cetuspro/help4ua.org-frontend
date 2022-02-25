import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Modal from '../../../components/common/Modal'
import { useModal } from './../../../app/hooks/useModal'
import { AiOutlineCheck } from 'react-icons/ai'
import { useMemo, useState } from 'react'
import ConfirmModal from '@/components/common/ConfirmModal'
import { useQueryContext } from '../../../app/context/queries/QueryProvider'
import { usePureMutation } from '../../../app/hooks/usePureMutation'
import { editAdminReport } from '../../../app/CRUD/reports/editAdminReport'
import toast from 'react-hot-toast'
import { InputTextPure } from '@/components/form/Input_Text.pure'
import { FaBan } from 'react-icons/fa'
import { InputSelectPure } from '@/components/form/Input_Select.pure'
import { useGetReportPriorities } from '../../../app/CRUD/reports/getReportPriorities'
import { optionsFromEnum } from '../../../app/utils/optionsFromEnum'
import { useNavigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

const ReportActions = () => {
  const {data: report, refetch} = useQueryContext()
  const {data: reportPriorities} = useGetReportPriorities()
  const reportPrioritiesOptions = useMemo(() => optionsFromEnum(reportPriorities), [reportPriorities])
  const acceptReportModal = useModal();
  const rejectReportModal = useModal();
  const [rejectionReason, setRejectionReason] = useState('')
  const changePriorityModal = useModal();
  const [priority, setPriority] = useState(report?.reportPriority?.id);
  const defaultPUTData = useMemo(() => ({
    title: report?.title,
    description: report?.description,
    reportType: report?.reportType?.id,
    reportStatus: report?.reportStatus?.id,
    reportPriority: report?.reportPriority?.id,
    adminFeedback: report?.adminFeedback?.feedback,
    reportId: report?.id,
  }), [report])
  const navigate = useNavigate()

  const handleError = () => {
    toast.error('Wystąpił błąd przy zmianie statusu zgłoszenia')
  }

  const handleAcceptSuccess = () => {
    toast.success(`Zaakceptowano zgłoszenie`)
    refetch()
    acceptReportModal.close()
  }

  const acceptReportMutation = usePureMutation(editAdminReport(report?.id, {...defaultPUTData, reportStatus: 20}), {
    onError: handleError,
    onSuccess: handleAcceptSuccess,
  })

  const handleRejectSuccess = () => {
    toast.success(`Odrzucono zgłoszenie`)
    refetch()
    rejectReportModal.close()
  }

  const rejectReportMutation = usePureMutation(editAdminReport(report?.id, {...defaultPUTData, reportStatus: 30}), {
    onError: handleError,
    onSuccess: handleRejectSuccess,
  })

  const handleChangePrioritySuccess = () => {
    toast.success(`Zmieniono priorytet zgłoszenia`)
    refetch()
    changePriorityModal.close()
  }

  const changePriorityMutation = usePureMutation(editAdminReport(report?.id, {...defaultPUTData, reportPriority: priority}), {
    onError: handleError,
    onSuccess: handleChangePrioritySuccess,
  })

  return (
    <Card className="flex flex-col gap-4 w-full grow-0 shrink-0">
      <Button onClick={() => navigate(route['admin.map'], {state: {reportId: report?.id}})}>Zobacz na mapie</Button>
      {report?.reportStatus?.id !== 20 && (
        <Button color="success" onClick={acceptReportModal.open}>Zaakceptuj</Button>
      )}
      {report?.reportStatus?.id !== 30 && (
        <Button color="danger" onClick={rejectReportModal.open}>{report?.reportStatus?.id === 10 ? 'Odrzuć' : 'Ukryj zgłoszenie'}</Button>
      )}
      <Button color="outline" onClick={changePriorityModal.open}>Zmień priorytet</Button>

      <ConfirmModal
        setOpen={acceptReportModal.close}
        open={acceptReportModal.isOpen}
        title="Zakceptuj zgłoszenie"
        description="Czy na pewno chcesz zaakceptować zgłoszenie?"
        Icon={AiOutlineCheck}>
        <Button onClick={acceptReportModal.close} color="secondary">
          Anuluj
        </Button>
        <Button color="success" onClick={acceptReportMutation.mutate}>Zaakceptuj</Button>
      </ConfirmModal>

      <Modal
        setOpen={rejectReportModal.close}
        open={rejectReportModal.isOpen}
        title="Odrzuć zgłoszenie">
        <InputTextPure
          value={rejectionReason}
          onChange={setRejectionReason}
          icon={FaBan}
          label="Powód odrzucenia"/>
        <div className="flex gap-6 justify-end mt-6">
          <Button onClick={rejectReportModal.close} color="secondary">Anuluj</Button>
          <Button color="danger" onClick={rejectReportMutation.mutate}>Odrzuć</Button>
        </div>
      </Modal>

      <Modal
        setOpen={changePriorityModal.close}
        open={changePriorityModal.isOpen}
        title="Zmień priorytet złoszenia">
        <div className="py-4">
          <InputSelectPure
            value={priority}
            onChange={({value}) => setPriority(value)}
            label="Priorytet zgłoszenia"
            options={reportPrioritiesOptions}/>
        </div>
        <div className="flex gap-6 justify-end mt-6">
          <Button onClick={changePriorityModal.close} color="secondary">Anuluj</Button>
          <Button onClick={changePriorityMutation.mutate}>Zapisz</Button>
        </div>
      </Modal>
    </Card>
  )
}

export default ReportActions