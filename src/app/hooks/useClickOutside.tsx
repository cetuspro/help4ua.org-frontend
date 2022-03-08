import { useEffect, useRef } from 'react'

const useClickOutside = (ref, callback) => {
  const refCallback = useRef(callback)
  const handleClick = (e) => {
    e.stopImmediatePropagation()
    if (ref.current && !ref.current.contains(e.target)) {
      refCallback.current()
    }
  }

  useEffect(() => {
    refCallback.current = callback
  }, [callback])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
}

export default useClickOutside
