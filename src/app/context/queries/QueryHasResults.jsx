import { useQueryContext } from './QueryProvider'

export const QueryHasResults = ({ children = null }) => {
  const { data, status } = useQueryContext()

  return status === 'success' && data && data?.length != null && data?.length > 0
    ? typeof children === 'function'
      ? children(data)
      : children
    : null
}
