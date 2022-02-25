import { useQueryContext } from '@/app/context/queries/QueryProvider'
import Card from '@/components/common/Card'
import Table from '@/components/common/Table'
import SingleReportImage from '@/views/ThreatMap/components/SingleReportImage'
import UserFullName from '@/components/user/UserFullName'
import dayjs from 'dayjs'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserAvatar from '@/components/common/UserAvatar'
import { route } from '@/app/router/urls/routes'

const badgeColors = {
  0: 'badge',
  10: 'badge',
  20: 'badge-success',
  30: 'badge-warning',
  40: 'badge-danger',
}

const ReportInfo = () => {
  const {data: report}= useQueryContext()
  
  console.log(report);

  const reportInfo = [
    [
      'Typ:',
      report?.reportType?.name,
    ],
    [
      'Status:',
      <span className={report?.reportStatus?.id in badgeColors ? badgeColors[report?.reportStatus?.id] : "badge"}>{report?.reportStatus?.name}</span>,
    ],
    [
      'Priorytet:',
      report?.reportPriority?.name,
    ],
  ]

  return (
    <Card>
      <div className="text-2xl font-bold break-words2">{report?.title}</div>
      <div className="flex my-4 gap-2 items-center text-sm text-gray-400">
        <Link to={route['admin.user'](report?.user?.id)}>
          <UserAvatar user={report?.user} />
        </Link>
        <Link to={route['admin.user'](report?.user?.id)} className="text-slate-500 hover:text-gray-400">
          <UserFullName user={report?.user} />
        </Link>
        <span className="border-l border-gray-400 pl-2">{dayjs(report?.reportDate).format('DD.MM.YYYY, HH:mm')}</span>
      </div>
      <div className="py-2">{report?.description}</div>
      {!!report?.photoUrlList?.length && (
        <div className="flex flex-wrap gap-4 my-4">
          {report?.photoUrlList.map(image => (
            <div className="w-16 h-16 hover:brightness-75 transition-[filter] duration-200" key={image?.id}>
              <SingleReportImage src={image?.url} />
            </div>
          ))}
        </div>
      )}
      <Table
        data={reportInfo}
        firstColumnStyles="text-gray-400"
        conditionColumn={1}
      />

      {!!report?.adminFeedback?.feedback && <>
        <div className="text-gray-500 text-xs mt-6 mb-2">{report?.adminFeedback?.firstName || report?.adminFeedback?.lastName ? `${report?.adminFeedback?.firstName} ${report?.adminFeedback?.lastName}` : `Użytkownik#${report?.adminFeedback?.adminId}`} ({dayjs(report?.adminFeedback?.createDate).format('DD.MM.YYYY')}):</div>
        <div className="px-6 py-4 text-sm border border-primary bg-primary/5 border-solid rounded-md mb-6">
          {report?.adminFeedback?.feedback}
        </div>
      </>}
      <div className="border-t border-gray-300 border-solid mt-4 pt-4 px-1 flex gap-4">
        <span className="inline-flex gap-1 select-none">
          <FaRegCommentDots size={18} /> {report?.commentsAmount}
        </span>
        <span className="inline-flex gap-1 select-none">
          <AiOutlineLike size={18} /> {report?.raisesAmount}
        </span>
      </div>
    </Card>
  )
}

export default ReportInfo