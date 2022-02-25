import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHookFormMutation } from '../../../../app/hooks/useHookFormMutation'
import { useForm, FormProvider } from 'react-hook-form'
import { InputText } from '@/components/form/Input_Text'
import { InputTextarea } from '@/components/form/Input_Textarea'
import { InputPostCode } from '@/components/form/InputPostCode'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { getReportTypesHelper } from '../../../../app/CRUD/reports/getReportTypes'
import { GiHazardSign } from 'react-icons/gi'
import { HookFormError } from '@/components/form/HookFormError'
import { validChars } from '@/app/utils/validCharsRegex'

const postCodeTransform = (val) => val.replace(/[_]/g, '')

const schema = yup.object().shape({
  title: yup
    .string()
    .required('Tytuł jest wymagany')
    .trim()
    .matches(validChars, 'Tytuł zawiera niedozwolone znaki'),
  description: yup
    .string()
    .nullable()
    .required('Opis zgłoszenia jest wymagany')
    .max(1000, 'Maksymalna długość opisu nie może przekraczać 1000 znaków')
    .matches(validChars, 'Opis zawiera niedozwolone znaki')
    .trim(),
  type: yup.number().required('Typ zgłoszenia jest wymagany'),
  localization: yup
    .object()
    .required('Lokalizacja jest wymagana')
    .shape({
      lat: yup.number().required().min(-90).max(90),
      lng: yup.number().required().min(-180).max(80),
    }),
  address: yup
    .object()
    .required('Adres jest wymagany')
    .shape({
      street: yup
        .string()
        .nullable()
        .trim()
        .matches(validChars, 'Ulica zawiera niedozwolone znaki'),
      postalCode: yup
        .string()
        .nullable()
        .transform(postCodeTransform)
        .length(6, 'Nieprawidłowy format kodu pocztowego')
        .trim(),
      city: yup
        .string()
        .required('Miasto jest wymagane')
        .default('Rzeszów')
        .matches(validChars, 'Nazwa miasta zawiera niedozwolone znaki')
        .trim(),
      houseNumber: yup.string().nullable().trim(),
    }),
})

const UserReportsForm = ({ query, initial, onSuccess, onError, children }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...schema.default(), ...initial },
  })

  const mutation = useHookFormMutation(methods, query, { onSuccess, onError })

  return (
    <FormProvider {...methods}>
      <form onSubmit={mutation.mutate} className="flex flex-col gap-4">
        <div>
          <InputText
            label="Tytuł"
            placeholder="Wprowadź tytuł"
            required
            name="title"
            type="text"
            icon={MdDriveFileRenameOutline}
          />
        </div>
        <div>
          <InputTextarea required label="Opis" name="description" maxContent={1000} />
        </div>
        <div>
          <div className="flex gap-2 items-center justify-between">
            <InputText label="Ulica" name="address.street" type="text" className="basis-5/6" />
            <InputText label="Nr budynku" name="address.houseNumber" type="text" />
          </div>
          <div className="flex gap-2 items-center justify-between">
            <InputText
              required
              label="Miasto"
              name="address.city"
              type="text"
              className="basis-5/6"
            />
            <InputPostCode label="Kod pocztowy" name="address.postalCode" type="text" />
          </div>
        </div>
        <div>
          <InputAsyncSelect
            {...getReportTypesHelper}
            name="type"
            required
            icon={GiHazardSign}
            label={'Wybierz typ zgłoszenia'}
            transform={({ id, name }) => ({
              value: id,
              label: name,
            })}
          />
        </div>
        <HookFormError />
        <div className="flex justify-end gap-8 mt-4">{children}</div>
      </form>
    </FormProvider>
  )
}

export default UserReportsForm
