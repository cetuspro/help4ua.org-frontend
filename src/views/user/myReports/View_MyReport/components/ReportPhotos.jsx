import { useMemo } from 'react'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { useParams } from 'react-router-dom'
import { API_URL } from '@/app/config/env'
import ReportPhotoGrid from './photos/ReportPhotoGrid'

const ReportPhotos = () => {
  const { data } = useQueryContext()
  const { reportId } = useParams()

  const photoList = useMemo(() => {
    if (!data?.photosIdList) return []
    return data?.photosIdList.map((id) => ({
      id,
      src: `${API_URL}/user/reports/${reportId}/photo/${id}`,
    }))
  }, [data])

  return (
    <>
      <ReportPhotoGrid photos={photoList} />
    </>
  )
}

export default ReportPhotos
