import { useQueryContext } from '@/app/context/queries/QueryProvider'
import Card from '@/components/common/Card'
import { commentUserReport } from '../../../app/CRUD/reports/commentReport'
import toast from 'react-hot-toast'
import { InputSubmit } from '@/components/form/Input_Submit'
import { HookFormError } from '@/components/form/HookFormError'
import * as yup from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHookFormMutation } from '../../../app/hooks/useHookFormMutation'
import { InputTextarea } from '@/components/form/Input_Textarea'

const schema = yup.object().shape({
  reportId: yup.number().required(),
  content: yup.string().required(),
})

const AddComment = ({refreshComments, ...props}) => {
  const {data: {id: reportId}} = useQueryContext()

  const onSuccess = () => {
    toast.success('Pomyślnie dodano komentarz')
    refreshComments()
  }

  const onError = () => {
    toast.error('Wystąpił błąd przy dodawaniu komentarza')
  }

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...schema.default(), reportId },
  })

  const mutation = useHookFormMutation(methods, e => commentUserReport(reportId)(e), { onSuccess, onError })

  const handleSubmit = (e) => {
    mutation.mutate(e)
    methods.reset()
  }

  return (
    <div {...props}>
      <div className="uppercase text-sm text-gray-400 mb-2">Dodaj komentarz</div>
      <Card className="">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <InputTextarea name="content" placeholder="Twój komentarz" rows="4"/>
          <HookFormError />
          <div className="flex justify-end gap-8 mt-2">
            <InputSubmit value="Dodaj" />
          </div>
        </form>
        </FormProvider>
      </Card>
    </div>
  )
}

export default AddComment