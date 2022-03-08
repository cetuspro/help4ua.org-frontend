import { useEffect, useRef } from 'react'

const useSkipMountEffect = (callback, deps) => {
  const isMounted = useRef(false)
  useEffect(() => {
    if (isMounted.current) {
      callback()
    }
    isMounted.current = true
  }, [...deps])
}

export default useSkipMountEffect
