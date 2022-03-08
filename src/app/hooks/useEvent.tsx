import { useEffect } from 'react'

const useEvent = (event, callback, deps) => {
  useEffect(() => {
    document.addEventListener(event, callback)
    return () => document.removeEventListener(event, callback)
  }, [...deps])
}
export default useEvent
