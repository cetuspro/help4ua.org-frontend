import { useParams } from 'react-router-dom'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { route } from '@/app/router/urls/routes'
import { BiEditAlt } from 'react-icons/bi'
import { useGetUserReport } from '../../../../app/CRUD/reports/getUserReport'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import IconButton from '@/components/common/IconButton'
import ReportCard from './components/ReportCard'
import ReportMap from './components/ReportMap'
import CommentsView from '@/components/reports/CommentsView'
import { IoLocateSharp } from 'react-icons/io5'

const breadcrumbItems = (name) => [
  {
    url: route['index'],
    label: 'Strona główna',
  },
  {
    label: 'Moje zgłoszenia',
    url: route['userReports.list'],
  },
  {
    label: name,
  },
]

const View_MyReport = () => {
  const { reportId } = useParams()
  const reportData = useGetUserReport(reportId)

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
                <IconButton
                  tooltip="Edytuj zgłoszenie"
                  icon={BiEditAlt}
                  url={route['userReports.edit'](reportId)}
                />
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

export default View_MyReport
