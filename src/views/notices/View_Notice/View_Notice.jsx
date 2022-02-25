import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useParams } from 'react-router-dom'
import { useGetNotice } from '../../../app/CRUD/notices/getNotice'
import NoticeCard from './cards/Card_Notice'

const breadcrumbItems = (title) => [
  {
    url: route['notices.list'],
    label: 'Ogłoszenia',
  },
  {
    label: title,
  },
]

const ViewNotice = () => {
  const { noticeId } = useParams()
  const query = useGetNotice(noticeId)

  return (
    <>
      <QueryProvider {...query}>
        <QueryIsSuccess>
          {(data) => (
            <>
              <Breadcrumb items={breadcrumbItems(query?.data?.address)}/>
              <div className="grid gap-8">
                <NoticeCard/>
              </div>
            </>
          )}
        </QueryIsSuccess>
      </QueryProvider>
    </>
  )
}

export default ViewNotice
