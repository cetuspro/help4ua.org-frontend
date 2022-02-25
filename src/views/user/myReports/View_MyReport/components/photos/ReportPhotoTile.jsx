import LoadingImage from '@/components/common/LoadingImage'
import { FiTrash2 } from 'react-icons/fi'
import PhotoModal from '@/components/common/PhotoModal'
import { useState } from 'react'
import { usePureMutation } from '@/app/hooks/usePureMutation'
import toast from 'react-hot-toast'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { deleteReportPhoto } from '@/app/CRUD/reports/deleteReportPhoto'
import { useParams } from 'react-router-dom'
import ConfirmModal from '@/components/common/ConfirmModal'
import Button from '@/components/common/Button'

const ReportPhotoTile = ({ src, id }) => {
  const [openLightbox, setOpenLightbox] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const { reportId } = useParams()
  const { refetch } = useQueryContext()

  const onSuccess = () => {
    toast.success('Pomyślnie usunięto zdjęcie')
    refetch()
  }

  const onError = () => {
    toast.error('Wystąpił błąd przy usuwaniu zdjęcia')
  }

  const mutation = usePureMutation(deleteReportPhoto(reportId), { onError, onSuccess })

  return (
    <>
      <div
        className="relative aspect-square rounded-lg cursor-pointer group"
        onClick={() => setOpenLightbox(true)}>
        <LoadingImage src={src} className="rounded-lg" />
        <button
          onClick={(e) => {
            e.stopPropagation()
            setOpenDelete(true)
          }}
          className="appearance-none p-2 absolute top-0 right-0 opacity-0 group-hover:opacity-100 text-red-600 bg-white rounded-lg transition-all hover:bg-gray-100">
          <FiTrash2 size={16} color="currentColor" />
        </button>
      </div>
      <PhotoModal src={src} open={openLightbox} setOpen={setOpenLightbox} />
      <ConfirmModal
        open={openDelete}
        setOpen={setOpenDelete}
        title="Usuń zdjęcie"
        description="Czy na pewno chcesz usunąć zdjęcie?"
        Icon={FiTrash2}>
        <Button onClick={() => setOpenDelete(false)} color="secondary">
          Anuluj
        </Button>
        <Button onClick={() => mutation.mutate(id)}>Usuń zdjęcie</Button>
      </ConfirmModal>
    </>
  )
}

export default ReportPhotoTile
