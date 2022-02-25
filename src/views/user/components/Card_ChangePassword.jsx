import Card from "@/components/common/Card"
import { InputText } from "@/components/form/Input_Text"
import { useHookFormMutation } from "../../../app/hooks/useHookFormMutation"
import { yupResolver } from "@hookform/resolvers/yup"
import { InputSubmit } from "@/components/form/Input_Submit"
import { FormProvider, useForm } from "react-hook-form"
import { RiLockPasswordLine } from "react-icons/ri"
import * as yup from 'yup'
import { changePassword } from "../../../app/CRUD/account/changePassword"
import toast from "react-hot-toast"

const schema = yup.object().shape({
  currentPassword: yup.string().required('To pole jest wymagane').min(8, 'Hasło musi mieć min 8 znaków'),
  newPassword: yup.string().required('To pole jest wymagane').min(8, 'Hasło musi mieć min 8 znaków'),
  confirmPassword: yup.string().required('To pole jest wymagane').min(8, 'Hasło musi mieć min 8 znaków'),
})

const CardChangePassword = () => {
  const onSuccess = () => {
    toast.success('Pomyślnie zmieniono hasło')
  }

  const onError = () => {
    toast.error('Wystąpił błąd przy zmianie hasła')
  }

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.default(),
  })

  const mutation = useHookFormMutation(methods, changePassword, { onSuccess, onError })

  const handleSubmit = (e) => {
    mutation.mutate(e)
    methods.reset()
  }

  return (
    <Card className="rounded-md grow">
      <h2 className="text-xl">Zmiana hasła</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <InputText
            label="Aktualne hasło"
            required
            placeholder="Podaj aktualne hasło"
            name="currentPassword"
            type="password"
            icon={RiLockPasswordLine}
            className="flex-1"
          />
          <InputText
            label="Nowe hasło"
            required
            placeholder="Podaj nowe hasło"
            name="newPassword"
            type="password"
            icon={RiLockPasswordLine}
            className="flex-1"
          />
          <InputText
            label="Powtórz nowe hasło"
            required
            placeholder="Podaj ponownie nowe hasło"
            name="confirmPassword"
            type="password"
            icon={RiLockPasswordLine}
            className="flex-1"
          />
          <div className="flex justify-end gap-8 mt-4 self-start">
            <InputSubmit value="Zmień hasło" />
          </div>
        </form>
      </FormProvider>
    </Card>
  )
}

export default CardChangePassword