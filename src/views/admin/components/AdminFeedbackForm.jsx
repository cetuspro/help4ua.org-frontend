import { useQueryContext } from '@/app/context/queries/QueryProvider'
import Card from '@/components/common/Card'
import toast from 'react-hot-toast'
import { InputSubmit } from '@/components/form/Input_Submit'
import { HookFormError } from '@/components/form/HookFormError'
import * as yup from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHookFormMutation } from '../../../app/hooks/useHookFormMutation'
import { InputTextarea } from '@/components/form/Input_Textarea'
import Button from '@/components/common/Button'
import { useEffect, useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { editAdminReport } from '../../../app/CRUD/reports/editAdminReport'

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  reportType: yup.number().required(),
  reportStatus: yup.number().required(),
  reportPriority: yup.number().required(),
  adminFeedback: yup.string().nullable(),
  reportId: yup.number().required(),
})

const AdminFeedback = ({refreshComments, ...props}) => {
  const {data, refetch} = useQueryContext()
  const {
    id: reportId,
    adminFeedback,
    title,
    description,
    reportType: {id: reportTypeId},
    reportStatus: {id: reportStatusId},
    reportPriority: {id: reportPriorityId},
  } = data;

  const defaultFormData = useMemo(() => ({
    reportId,
    title,
    description,
    reportType: reportTypeId,
    reportStatus: reportStatusId,
    reportPriority: reportPriorityId,
    adminFeedback: adminFeedback?.feedback,
  }), [data])
  const [isEditFormVisible, setIsEditFormVisible] = useState(false)

  const onSuccess = () => {
    refetch()
    setIsEditFormVisible(false)
  }

  const onError = () => {
    toast.error('Wystąpił błąd przy dodawaniu stanowiska')
  }

  const methods = useForm({resolver: yupResolver(schema), defaultValues: defaultFormData})

  useEffect(() => {
    methods.reset(defaultFormData)
  }, [data])

  const mutation = useHookFormMutation(methods, e => editAdminReport(reportId)(e), { onSuccess, onError })

  const handleSubmit = (e) => {
    mutation.mutate(e)
  }

  const handleCancel = () => {
    setIsEditFormVisible(false)
    methods.setValue('adminFeedback', adminFeedback?.feedback)
  }

  return (
    <div>
      <div className="uppercase text-sm text-gray-400 mb-2">Stanowisko miasta</div>
      <Card {...props}>
      {!!isEditFormVisible ? (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <InputTextarea name="adminFeedback" placeholder="Komentarz miasta" rows="4"/>
            <HookFormError />
            <div className="flex justify-end gap-6 mt-2 flex-wrap">
              <Button color="outline" onClick={handleCancel}>Anuluj</Button>
              <InputSubmit value="Zapisz" />
            </div>
          </form>
        </FormProvider>
      ) : (
        <div className="flex flex-col text-sm">
          {!!adminFeedback?.feedback ? <>
            <div className="flex text-gray-400 mb-4">
              <div>{adminFeedback?.firstName || adminFeedback?.lastName ? `${adminFeedback?.firstName} ${adminFeedback?.lastName}` : `Administrator#${adminFeedback?.adminId}`}</div>
              <div className="ml-auto">{dayjs(adminFeedback?.createDate).format('DD.MM.YYYY')}</div>
            </div>
            <div>{adminFeedback?.feedback}</div>
          </> : (
            <div className="text-gray-400">Nie dodano jeszcze stanowiska miasta w sprawie tego zgłoszenia</div>
          )}
          <Button color="outline" className="mt-6 self-end" onClick={() => setIsEditFormVisible(true)}>{adminFeedback?.feedback ? 'Zmień' : 'Dodaj'}</Button>
        </div>
      )}
      </Card>
    </div>
  )
}

export default AdminFeedback