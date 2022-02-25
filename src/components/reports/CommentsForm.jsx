import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHookFormMutation } from '../../app/hooks/useHookFormMutation'
import { useForm, FormProvider } from 'react-hook-form'
import { InputTextarea } from '@/components/form/Input_Textarea'
import { HookFormError } from '@/components/form/HookFormError'
import { validChars } from '@/app/utils/validCharsRegex'

const schema = yup.object().shape({
  reportId: yup.number().required('Nieznane zgłoszenie'),
  content: yup
    .string()
    .required('Treść jest wymagana')
    .max(500, 'Komentarz może zawierać max. 500 znaków')
    .matches(validChars, 'Treść zawiera niedozwolone znaki')
    .trim(),
})

const CommentsForm = ({ query, reportId, onSuccess, onError, children }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...schema.default(), reportId },
  })

  const mutation = useHookFormMutation(methods, query, { onSuccess, onError })

  return (
    <FormProvider {...methods}>
      <form onSubmit={mutation.mutate} className="flex flex-col gap-1 mb-6">
        <InputTextarea name="content" placeholder="Dodaj komentarz" maxContent={500} rows={1} />
        <HookFormError />
        <div className="flex justify-end gap-8 mt-2">{children}</div>
      </form>
    </FormProvider>
  )
}

export default CommentsForm
