import { useQueryContext } from './QueryProvider'

export const QueryIsSuccess = ({ children }) => {
  const { data, status } = useQueryContext()

  return status === 'success' ? (typeof children === 'function' ? children(data) : children) : null
}
