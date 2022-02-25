import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { FaRegCommentDots } from 'react-icons/fa'
import Table from '@/components/common/Table'
import Card from '@/components/common/Card'
import RaiseReportButton from '@/components/reports/RaiseReportButton'
import dayjs from 'dayjs'
import ReportPhotos from './ReportPhotos'
import ReportFeedback from '@/components/reports/ReportFeedback'
import { getStatusBadge } from '@/app/utils/getStatusBadge'
import UserFullName from '@/components/user/UserFullName'
import UserAvatar from '@/components/common/UserAvatar'
import { BiDirections } from 'react-icons/bi'
import ReportMap from './ReportMap'

const ReportCard = () => {
  const { data } = useQueryContext()
  const reportInfo = [
    ['Typ:', data?.reportType?.name],
    [
      'Status:',
      <span key={data?.reportStatus?.id} className={getStatusBadge(data?.reportStatus?.id)}>
        {data?.reportStatus?.name}
      </span>,
    ],
  ]

  return (
    <div className="grid grid-cols-none md:grid-cols-9 gap-8 mt-4">
      <Card className="col-span-9 md:col-span-6">
        <div className="flex gap-4 items-center">
          <span key={data?.reportStatus?.id} className={getStatusBadge(data?.reportStatus?.id)}>
            {data?.reportStatus?.name}
          </span>
          <small className="text-xs text-gray-500">{data?.reportType?.name}</small>
        </div>
        <div className="text-2xl font-bold">{data?.title}</div>
        <div className="flex my-4 gap-2 items-center text-sm text-gray-400">
          <span>
            <UserAvatar user={data?.user} />
          </span>
          <UserFullName user={data?.user} className="text-slate-500" />
          <span className="border-l border-gray-400 pl-2">
            {dayjs(data?.reportDate).format('DD.MM.YYYY, HH:mm')}
          </span>
        </div>
        {data?.address?.street && (
          <div className="flex mt-4 gap-2 items-center text-sm text-gray-500">
            <BiDirections size={'1.2em'} color="currentColor" />
            ul. {data?.address?.street} {data?.address?.houseNumber}
          </div>
        )}
        <div className="py-2">
          <p className="break-words">{data?.description}</p>
        </div>
        {data?.adminFeedback?.feedback && <ReportFeedback adminFeedback={data.adminFeedback} />}
        <ReportPhotos />
        <div className="border-t border-gray-300 border-solid mt-4 pt-4 px-1 flex gap-4">
          <span className="inline-flex gap-1 items-center">
            <FaRegCommentDots size={18} /> {data?.commentsAmount}
          </span>
          <RaiseReportButton
            reportId={data?.id}
            raisesAmount={data?.raisesAmount}
            isRaised={data?.isRaised}
          />
        </div>
      </Card>
      <div className="col-span-9 md:col-span-3 flex flex-col gap-4">
        <ReportMap />
      </div>
    </div>
  )
}

export default ReportCard
