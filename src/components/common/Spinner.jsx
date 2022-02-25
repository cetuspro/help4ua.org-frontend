import { CgSpinner } from 'react-icons/cg'

const Spinner = () => {
  return (
    <div className="w-full h-full grid place-items-center py-10">
      <CgSpinner className="animate-spin text-gray-400 dark:text-gray-800" size={48} />
    </div>
  )
}

export default Spinner
