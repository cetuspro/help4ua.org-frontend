import { useQueryContext } from '@/app/context/queries/QueryProvider'
import Comment from '@/components/reports/Comment.jsx'

const CommentsList = () => {
  const { data } = useQueryContext()

  return (
    <div className="flex flex-col max-w-full">
      {data?.map((comment) => (
        <Comment key={comment.commentDate} comment={comment} />
      ))}
    </div>
  )
}

export default CommentsList
