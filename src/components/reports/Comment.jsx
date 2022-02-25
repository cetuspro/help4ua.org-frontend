import UserFullName from '@/components/user/UserFullName'
import UserAvatar from '@/components/common/UserAvatar'
import dayjs from 'dayjs'
import CommentDelete from './CommentDelete'
import { useQueryContext } from '@/app/context/queries/QueryProvider'

const Comment = ({ comment, ...rest }) => {
  const { refetch } = useQueryContext()

  return (
    <article
      {...rest}
      className={`p-4 border-t border-gray-300 border-solid first:border-0 flex gap-2 items-start bg-white break-all break-words2`}>
      <UserAvatar user={comment?.user} className="!w-10 !h-10" />
      <div className={`grow`}>
        <div className="flex justify-between gap-2">
          <UserFullName user={comment?.user} className="font-bold" />
          {comment.isMine && (
            <div>
              <CommentDelete comment={comment} refetch={refetch} />
            </div>
          )}
        </div>
        <div className="text-xs text-gray-400">
          {dayjs(comment?.commentDate).format('DD.MM.YYYY, HH:mm')}
        </div>
        <div className="my-2">{comment.content}</div>
      </div>
    </article>
  )
}

export default Comment
