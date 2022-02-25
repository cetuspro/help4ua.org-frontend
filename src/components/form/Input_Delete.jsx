import Spinner from '../common/Spinner'
import { useFormContext } from 'react-hook-form'
import Button from '@/components/common/Button'

export const InputDelete = ({ icon = null, value = 'Usuń', onClick, ...props }) => {
  const { formState } = useFormContext()
  const { isSubmitting } = formState

  return (
    <button
      type="button"
      color="secondary"
      className="hover:bg-gray-300 active:text-gray-700 text-red-700 inline-block ring-offset-4 focus:ring ring-primary-dark text-sm md:text-base font-semibold text-center rounded-lg outline-none transition-all duration-200 px-8 py-3"
      disabled={isSubmitting}
      onClick={onClick}
      {...props}>
      {isSubmitting ? <Spinner color="white" size="sm" /> : icon}
      {value}
    </button>
  )
}
