import LoadingImage from '@/components/common/LoadingImage'
import PhotoModal from '@/components/common/PhotoModal'
import { useState } from 'react'

const SingleReportImage = ({ src }) => {
  const [openLightbox, setOpenLightbox] = useState(false)

  return (
    <>
      <LoadingImage
        src={src}
        className="rounded-lg w-16 h-16 cursor-pointer"
        onClick={() => setOpenLightbox(true)}
      />
      <PhotoModal src={src} open={openLightbox} setOpen={setOpenLightbox} />
    </>
  )
}

export default SingleReportImage
