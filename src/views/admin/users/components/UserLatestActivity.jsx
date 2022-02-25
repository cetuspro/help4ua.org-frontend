import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Card from '@/components/common/Card'
import UserFullName from '@/components/user/UserFullName'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link } from 'react-router-dom'

dayjs.extend(relativeTime)

const activityColor = {
  0: "bg-purple-700 shadow-purple-700/[0.5]",
  1: "bg-purple-700 shadow-purple-700/[0.5]",
  2: "bg-orange-500 shadow-orange-500/[0.5]",
}

const UserLatestActivity = () => {
  const {data: user}= useQueryContext()

  return (
    <Card className="px-6">
      <h2 className="mb-8 text-lg">Ostatnia aktywność</h2>
      {(!user?.latestActivity || !user.latestActivity?.length) && (
        <div className="text-center text-gray-400 text-sm">Brak ostatnich aktywności</div>
      )}
      {user?.latestActivity?.map(activity => (
        <div key={activity?.date} className="pl-6 pb-10 border-l relative text-sm">
          <div className="flex items-center">
            <div className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
              <UserFullName user={user} className="font-bold text-gray-700"/>
              <Link to={route['admin.report'](activity.reportId)} className="hover:text-blue-500"> {activity?.type?.name} "{activity?.title}"</Link>
            </div>
            <div className="ml-auto text-xs text-gray-400 pl-2">{dayjs(activity?.date).fromNow()}</div>
          </div>
          <div className={`rounded-full w-3 h-3 absolute top-0 -left-1.5 shadow-[0_0_6px_1px_rgba(0,0,0,0.3)] ${activity?.type?.id in activityColor ? activityColor[activity.type?.id] : activityColor[0]}`}></div>
          <div className="text-gray-600 text-sm mt-2 ml-2">{activity?.content}</div>
        </div>
      ))}
    </Card>
  )
}

export default UserLatestActivity