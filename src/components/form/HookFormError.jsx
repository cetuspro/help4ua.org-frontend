import { useFormContext } from 'react-hook-form'
import Alert from '@/components/common/Alert'

export const HookFormError = () => {
  const { formState } = useFormContext()
  const { errors } = formState

  return (
    <>
      {Object.values(errors).length > 0 &&
        Object.values(errors).map((error) => {
          if (error.message) return <Alert key={error.message}>{error.message}</Alert>
        })}
    </>
  )
}
