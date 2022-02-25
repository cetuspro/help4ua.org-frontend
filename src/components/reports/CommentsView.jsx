import { commentUserReport } from '../../app/CRUD/reports/commentReport'
import CommentsForm from './CommentsForm'
import CommentsList from './CommentsList'
import { useGetReportComments } from '../../app/CRUD/reports/getReportComments'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults'
import toast from 'react-hot-toast'
import { InputSubmit } from '../../components/form/Input_Submit'
import { useAuth } from '@/app/hooks/useAuth'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'

const CommentsView = ({ reportId }) => {
  const queryData = useGetReportComments(reportId)
  const { isAuthenticated } = useAuth()

  const onSuccess = () => {
    toast.success('Pomyślnie dodano komentarz')
    queryData.refetch()
  }

  const onError = () => {
    toast.error('Wystąpił błąd przy dodawaniu komentarza')
  }

  return (
    <>
      {isAuthenticated && (
        <CommentsForm
          query={commentUserReport(reportId)}
          reportId={reportId}
          onSuccess={onSuccess}
          onError={onError}>
          <InputSubmit size="small" value="Dodaj komentarz" />
        </CommentsForm>
      )}
      {!isAuthenticated && (
        <p className="my-2">
          <Link className="font-bold" to={route['auth.login']}>
            <span className="text-gray-500 hover:text-primary-dark transition-colors">
              Zaloguj się
            </span>
          </Link>
          , aby dodać komentarz
        </p>
      )}
      <QueryProvider {...queryData}>
        <QueryHasResults>
          <CommentsList />
        </QueryHasResults>
        <QueryHasNoResults>
          <p className="m-0 text-gray-600">Brak komentarzy</p>
        </QueryHasNoResults>
      </QueryProvider>
    </>
  )
}

export default CommentsView
