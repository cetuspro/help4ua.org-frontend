import * as yup from 'yup'
import { route } from '@/app/router/urls/routes'
import { HookFormError } from '@/components/form/HookFormError'
import { InputSubmit } from '@/components/form/Input_Submit'
import { InputText } from '@/components/form/Input_Text'
import { useHookFormMutation } from '@/app/hooks/useHookFormMutation'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { RiLockPasswordLine } from 'react-icons/ri'
import { resetPassword } from '@/app/CRUD/auth/resetPassword'
import { useSearchParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const schema = yup.object().shape({
  userId: yup.number().required(),
  token: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null]),
})

const PasswordReset = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const userId = searchParams.get('userId')
  const token = searchParams.get('token')

  const handleSuccess = () => {
    toast.success('Hasło zostało zmienione pomyślnie.')
    navigate(route['auth.login'])
  }
  const handleError = () => {
    toast.error('Wystąpił błąd przy próbie resetu hasła. Spróbuj ponownie później.')
  }

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...schema.default(), userId, token },
  })

  const mutation = useHookFormMutation(methods, resetPassword, { handleSuccess, handleError })

  if (!token || !userId) return <Navigate to={route['auth.login']} />

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-6 sm:py-8 lg:py-12 mt-10">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 dark:text-gray-100 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Ustaw nowe hasło
        </h2>
        <FormProvider {...methods}>
          <form
            onSubmit={mutation.mutate}
            className="max-w-lg bg-gray-100 dark:bg-primary-dark rounded mx-auto border dark:border-none">
            <div className="flex flex-col gap-4 p-4 md:p-8 text-gray-800 dark:text-gray-100">
              <div>
                <InputText
                  required
                  label="Hasło"
                  placeholder="Wprowadź hasło"
                  name="password"
                  type="password"
                  icon={RiLockPasswordLine}
                />
              </div>
              <div className="mb-5">
                <InputText
                  required
                  label="Powtórz hasło"
                  placeholder="Powtórz hasło"
                  name="confirmPassword"
                  type="password"
                  icon={RiLockPasswordLine}
                />
              </div>

              <HookFormError />

              <InputSubmit value="Zresetuj hasło" />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default PasswordReset
