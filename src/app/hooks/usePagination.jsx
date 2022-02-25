import { useSearchParams } from 'react-router-dom'
import { useQueryContext } from '../context/queries/QueryProvider'
import useAllLocationParams from './useAllLocationParams'

const usePagination = () => {
  const { pagination } = useQueryContext()
  let [searchParams, setSearchParams] = useSearchParams()
  const params = useAllLocationParams()

  const setPage = (pageNumber) => {
    setSearchParams({ ...params, pageNumber })
  }

  const setPageSize = (pageSize) => {
    setSearchParams({ ...params, pageSize })
  }

  return { ...pagination, setPage, setPageSize }
}

export default usePagination
