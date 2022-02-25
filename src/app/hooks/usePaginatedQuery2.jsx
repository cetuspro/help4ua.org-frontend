import { useQuery } from 'react-query'
import useAllLocationParams from './useAllLocationParams'
import { useFilters } from '@/app/context/queries/Filters'

export const usePaginatedQuery2 = ({
  queryKey: _queryKey,
  queryFn,
  defaultPageSize = 10,
  defaultPage = 1,
  config,
  page: passedPage,
  perPage: passedPerPage,
}) => {
  const [{ page: filterPage, perPage: filterPerPage, ...filters }] = useFilters()
  const params = useAllLocationParams()
  // console.log(params)

  const page = passedPage ?? filterPage ?? params?.pageNumber ?? defaultPage
  const perPage = passedPerPage ?? filterPerPage ?? params?.pageSize ?? defaultPageSize

  const [, ...queryKey] = _queryKey

  const {
    data: queryData,
    error,
    isFetching,
    status,
    latestData,
    refetch,
    resolvedData,
    isError,
    isSuccess,
    isLoading,
    isIdle,
  } = useQuery(
    [..._queryKey, { page, perPage, filters }],
    () => queryFn(queryKey, { PageNumber: page, PageSize: perPage, ...filters }),
    {
      ...config,
      keepPreviousData: true,
    },
  )

  // console.log(queryData)

  return {
    data: queryData?.items ?? [],
    pagination: {
      pageIndex: queryData?.pageIndex,
      totalPages: queryData?.totalPages,
      totalCount: queryData?.totalCount,
      hasPreviousPage: queryData?.hasPreviousPage,
      hasNextPage: queryData?.hasNextPage,
    },
    latestData,
    resolvedData,
    error,
    status,
    refetch,
    isError,
    isFetching,
    isSuccess,
    isLoading,
    isIdle,
  }
}
