import '@szhsin/react-menu/dist/core.css';
import Card from '@/components/common/Card'
import Comment from '../components/Comment';
import { route } from '@/app/router/urls/routes';
import { useNavigate } from 'react-router-dom';
import { useGetAdminComments } from '../../../app/CRUD/reports/getAdminComments';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className="flex justify-center items-center gap-2 py-2">
      <AiOutlineLoading3Quarters className="block animate-spin text-black" color="black"/>
      <span>Ładowanie...</span>
    </div>
  )
}

const ViewComments = () => {
  const {data, refetch, fetchNextPage, hasNextPage, isFetchedAfterMount} = useGetAdminComments({
    perPage: Math.ceil((window.innerHeight-100)/112)+1
  })
  const navigate = useNavigate()

  return (
    <Card className="p-0">
      {isFetchedAfterMount ? (
        <InfiniteScroll
          dataLength={data?.pages?.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          endMessage={<p className="text-center text-sm text-gray-400 py-2">To już wszystkie komentarze</p>}
          scrollableTarget={"adminLayout"}
          loader={<Loader/>}
        >
          {data?.pages?.map(page => page?.items?.map(comment => (
            <Comment
              comment={comment}
              key={comment.id}
              refreshComments={refetch}
              reportId={comment?.reportId}
              onClick={() => navigate(route['admin.report'](comment?.reportId))}
              className="cursor-pointer hover:bg-neutral-100"
            />
          )))}
        </InfiniteScroll>
      ) : (
        <Loader/>
      )}
    </Card>
  )
}

export default ViewComments