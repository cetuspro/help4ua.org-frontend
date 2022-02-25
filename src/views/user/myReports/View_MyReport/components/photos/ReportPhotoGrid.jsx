import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import Card from '@/components/common/Card'
import { FiUploadCloud } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import ReportPhotoTile from './ReportPhotoTile'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { usePureMutation } from '@/app/hooks/usePureMutation'
import { addReportPhoto } from '@/app/CRUD/reports/addReportPhoto'
import { useParams } from 'react-router-dom'
import { CgSpinner } from 'react-icons/cg'

const ReportPhotoGrid = () => {
  const { reportId } = useParams()

  const {
    data: { photoUrlList },
    refetch,
  } = useQueryContext()

  const onSuccess = () => {
    toast.success('Pomyślnie dodano zdjęcie')
    refetch()
  }

  const onError = () => {
    toast.error('Wystąpił błąd przy przesyłaniu zdjęcia')
  }

  const mutation = usePureMutation(addReportPhoto(reportId), { onError, onSuccess })

  const onDropAccepted = (files) => {
    if (!files?.[0]?.size) return
    const formData = new FormData()
    formData.append('photo', files[0])
    mutation.mutate(formData)
  }
  const onDropRejected = () => {
    toast.error('Zdjęcie powinno być mniejsze niż 10MB oraz być w formacie .jpg lub .png.')
  }

  const { getRootProps, getInputProps, isDragAccept, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    // disabled: fileMessage,
    onDropAccepted,
    onDropRejected,
    maxSize: 10 * 1048576, // 10 * 1MB
    accept: 'image/png, image/jpeg, image/jpg',
  })

  return (
    <div className="grid grid-cols-autofill gap-2 my-4" {...getRootProps()}>
      <input {...getInputProps()} />

      <div
        className={`${
          isDragAccept ? 'opacity-100' : 'opacity-0'
        } pointer-events-none transition-opacity fixed left-0 top-0 w-full h-full bg-black bg-opacity-75 backdrop-blur-lg z-50 flex justify-center items-center`}>
        <Card className="p-16 rounded-lg shadow-lg flex flex-col items-center justify-center text-center m-4 text-gray-500 font-bold">
          <h2>Upuść zdjęcie aby przesłać</h2>
          <FiUploadCloud color="currentColor" size="3em" className="mt-1" />
        </Card>
      </div>

      {photoUrlList.length < 6 && (
        <div
          onClick={() => {
            if (mutation.isLoading) return
            open()
          }}
          className="aspect-square rounded-lg flex items-center justify-center p-8 cursor-pointer text-gray-600 border-2 border-dashed border-gray-600 hover:text-gray-700 hover:border-gray-700 hover:bg-black hover:bg-opacity-5 transition-all">
          {!mutation.isLoading && <FaPlus />}
          {mutation.isLoading && (
            <CgSpinner
              size={22}
              className="animate-spin pointer-events-none text-gray-500"
              color="currentColor"
            />
          )}
        </div>
      )}

      {photoUrlList.map(({ id, url }) => (
        <ReportPhotoTile key={id} src={url} id={id} />
      ))}
    </div>
  )
}

export default ReportPhotoGrid
