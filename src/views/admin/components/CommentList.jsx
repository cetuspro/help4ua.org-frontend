import '@szhsin/react-menu/dist/core.css';
import Card from '@/components/common/Card'
import Comment from './Comment';
import { useQueryContext } from '@/app/context/queries/QueryProvider';
import { useGetAdminReportComments } from '../../../app/CRUD/reports/getAdminReportComments';
import { useMemo } from 'react';
import AddComment from './AddComment';

const CommentList = () => {
  const {data: {id: reportId}} = useQueryContext()
  const {data: comments, refetch} = useGetAdminReportComments(reportId)
  const sortedComments = useMemo(() => comments.sort((a, b) => {
    if (a?.commentDate < b?.commentDate)
      return 1
    if (a?.commentDate > b?.commentDate)
      return -1
    return 0
  }), [comments])

  return (
    <div>
      {!!(comments && comments.length) && <>
        <div className="uppercase text-sm text-gray-400 mb-2">Komentarze</div>
        <Card className="p-0">
          {sortedComments.map(comment => (
            <Comment comment={comment} key={comment.id} refreshComments={refetch} reportId={reportId}/>
          ))}
        </Card>
      </>}
      <AddComment
        className="mt-6"
        refreshComments={refetch}
      />
    </div>
  )
}

export default CommentList