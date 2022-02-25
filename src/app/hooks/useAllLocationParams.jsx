import { useLocation } from 'react-router-dom'
import qs from 'qs'

const useAllLocationParams = () => {
  const { search } = useLocation()
  return qs.parse(search, { ignoreQueryPrefix: true })
}

export default useAllLocationParams
