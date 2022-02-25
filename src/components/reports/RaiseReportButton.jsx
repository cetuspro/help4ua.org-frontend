import { AiOutlineLike } from 'react-icons/ai'
import { usePureMutation } from '../../app/hooks/usePureMutation'
import { raiseReport } from '../../app/CRUD/reports/raiseReport'
import toast from 'react-hot-toast'
import { useQueryContext } from '@/app/context/queries/QueryProvider'

const RaiseReportButton = ({ reportId, raisesAmount, isRaised }) => {
  const { refetch } = useQueryContext()

  const onError = () => {
    toast.error('Wystąpił błąd')
  }

  const onSuccess = () => {
    refetch()
  }

  const mutation = usePureMutation(raiseReport(reportId), { onError, onSuccess })

  const handleRaise = () => {
    mutation.mutate()
  }

  return (
    <button
      disabled={mutation.isLoading}
      onClick={handleRaise}
      className={`appearance-none p-1 inline-flex gap-1 items-center hover:bg-gray-200 rounded-xl ${
        isRaised ? 'text-primary-dark' : ''
      }`}>
      <AiOutlineLike size={18} /> {raisesAmount}
    </button>
  )
}

export default RaiseReportButton
