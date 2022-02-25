import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import { useGetReport } from '@/app/CRUD/reports/getReport'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import IconButton from '@/components/common/IconButton'
import CommentsView from '@/components/reports/CommentsView'
import { IoLocateSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import ReportCard from './ReportCard'

const breadcrumbItems = (title) => [
  {
    url: route['map'],
    label: 'Mapa',
  },
  {
    url: route['reports.list'],
    label: 'Zgłoszenia',
  },
  {
    label: title,
  },
]

const ViewReport = () => {
  const { reportId } = useParams()
  const reportData = useGetReport(reportId)

  return (
    <>
      <QueryProvider {...reportData}>
        <QueryIsSuccess>
          {(data) => (
            <>
              <Breadcrumb items={breadcrumbItems(reportData?.data?.title)}>
                {data?.reportStatus?.id === 20 && (
                  <IconButton
                    tooltip="Zobacz na głównej mapie"
                    icon={IoLocateSharp}
                    url={route['map.viewReport'](reportId)}
                  />
                )}
              </Breadcrumb>
              <div className="grid gap-8">
                <ReportCard />
                <CommentsView reportId={reportId} />
              </div>
            </>
          )}
        </QueryIsSuccess>
      </QueryProvider>
    </>
  )
}

export default ViewReport
