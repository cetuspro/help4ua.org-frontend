import Spinner from '../common/Spinner'
import { useFormContext } from 'react-hook-form'
import Button from '@/components/common/Button'
import { CgSpinner } from 'react-icons/cg'

export const InputSubmit = ({ icon = null, value = 'Zapisz', ...props }) => {
  const { formState } = useFormContext()

  const { isSubmitting } = formState
  // console.log(isSubmitting)

  return (
    <Button
      type="submit"
      // className="block bg-primary hover:primary-dark active:bg-primary-dark focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
      disabled={isSubmitting}
      {...props}>
      {isSubmitting ? <CgSpinner className="animate-spin" size={24} color="currentColor" /> : icon}
      {value}
    </Button>
  )
}
