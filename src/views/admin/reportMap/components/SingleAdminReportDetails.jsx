import dayjs from 'dayjs'
import RaiseReportButton from '@/components/reports/RaiseReportButton'
import CommentsModal from '@/components/reports/CommentsModal'
import { truncateText } from '@/app/utils/truncateText'
import { route } from '@/app/router/urls/routes'
import { Link } from 'react-router-dom'
import UserFullName from '@/components/user/UserFullName'
import UserAvatar from '@/components/common/UserAvatar'

const SingleAdminReportDetails = ({
  title,
  user,
  reportDate,
  description,
  commentsAmount,
  raisesAmount,
  id,
  isRaised,
}) => {
  return <>
    <Link to={route['admin.report'](id)}>
      <h3 className="font-bold text-base text-gray-700 mb-4">{title}</h3>
    </Link>
    <div className="flex my-4 gap-2 items-center text-sm text-gray-400">
      <Link to={route['admin.user'](user?.id)}>
        <UserAvatar user={user} />
      </Link>
      <Link to={route['admin.user'](user?.id)} className="!text-slate-500 hover:!text-gray-400">
        <UserFullName user={user} />
      </Link>
      <span className="border-l border-gray-400 pl-2">
        {dayjs(reportDate).format('DD.MM.YYYY')}
      </span>
    </div>
    {description && <p className="break-words">{truncateText(description, 250)}</p>}
    <div className="border-t border-gray-300 border-solid mt-4 pt-4 px-1 flex gap-4 items-center">
      <CommentsModal commentsAmount={commentsAmount} reportId={id} />
      <RaiseReportButton raisesAmount={raisesAmount} reportId={id} isRaised={isRaised} />
    </div>
  </>
}

export default SingleAdminReportDetails
