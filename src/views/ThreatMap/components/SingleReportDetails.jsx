import { Popup } from 'react-leaflet'
import Card from '@/components/common/Card'
import dayjs from 'dayjs'
import RaiseReportButton from '@/components/reports/RaiseReportButton'
import CommentsModal from '@/components/reports/CommentsModal'
import { truncateText } from '@/app/utils/textTransform'
import SingleReportImage from './SingleReportImage'
import UserFullName from '@/components/user/UserFullName'
import UserAvatar from '@/components/common/UserAvatar'

const SingleReportDetails = ({
  title,
  user,
  reportDate,
  description,
  photoUrlList,
  commentsAmount,
  raisesAmount,
  id,
  isRaised,
}) => {
  return (
    <Popup className="report-popup min-w-fit">
      <Card>
        <h3 className="font-bold text-base text-gray-700 mb-4">{title}</h3>
        <div className="flex my-4 gap-2 items-center text-sm text-gray-400">
          <span>
            <UserAvatar user={user} />
          </span>
          <UserFullName user={user} className="text-slate-500" />
          <span className="border-l border-gray-400 pl-2">
            {dayjs(reportDate).format('DD.MM.YYYY')}
          </span>
        </div>
        {description && <p className="max-w-prose break-words">{truncateText(description, 250)}</p>}
        {photoUrlList && (
          <div className="grid grid-cols-6 gap-2 my-4">
            {photoUrlList.map(({ id, url }) => (
              <SingleReportImage key={id} src={url} />
            ))}
          </div>
        )}
        <div className="border-t border-gray-300 border-solid mt-4 pt-4 px-1 flex gap-4 items-center">
          <CommentsModal commentsAmount={commentsAmount} reportId={id} />
          <RaiseReportButton raisesAmount={raisesAmount} reportId={id} isRaised={isRaised} />
        </div>
      </Card>
    </Popup>
  )
}

export default SingleReportDetails
