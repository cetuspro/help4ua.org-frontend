import * as yup from 'yup'
import { route } from '@/app/router/urls/routes'
import { HookFormError } from '@/components/form/HookFormError'
import { InputSubmit } from '@/components/form/Input_Submit'
import { InputText } from '@/components/form/Input_Text'
import { useHookFormMutation } from '@/app/hooks/useHookFormMutation'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { MdAlternateEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '@/app/CRUD/auth/forgotPassword'
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
})

const PasswordForgot = () => {
  const navigate = useNavigate()
  const handleSuccess = () => {
    toast.success('Na podany email zostały wysłane dalsze instrukcje.')
    navigate(route['auth.login'])
  }
  const handleError = () => {
    toast.error('Wystąpił błąd przy próbie resetu hasła. Spróbuj ponownie później.')
  }

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.default(),
  })

  const mutation = useHookFormMutation(methods, forgotPassword, { handleSuccess, handleError })

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-6 sm:py-8 lg:py-12 mt-10">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 dark:text-gray-100 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Zapomniałem hasło
        </h2>
        <FormProvider {...methods}>
          <form
            onSubmit={mutation.mutate}
            className="max-w-lg bg-gray-100 dark:bg-primary-dark rounded mx-auto border dark:border-none">
            <div className="flex flex-col gap-4 p-4 md:p-8 text-gray-800 dark:text-gray-100">
              <div>
                <InputText
                  label="Email"
                  required
                  placeholder="Email"
                  name="email"
                  type="email"
                  icon={MdAlternateEmail}
                />
              </div>

              <HookFormError />

              <InputSubmit value="Zresetuj hasło" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center bg-gray-200 dark:bg-gray-800 p-4">
              <p className="text-gray-500 text-sm text-center">
                Nie masz konta?{' '}
                <Link
                  to={route['auth.register']}
                  className="text-gray-800 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-200 dark:active:text-gray-200 transition duration-100">
                  Zarejestruj się
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default PasswordForgot
