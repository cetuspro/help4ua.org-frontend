import { useFormContext } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'

export const AutoSubmit = ({ time = 500 }) => {
  const { watch } = useFormContext()
  const timeoutRef = useRef()
  const submitRef = useRef()
  // const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const subscription = watch(() => {
      // console.log('watch')
      clearTimeout(timeoutRef.current)
      // setIsWaiting(true)

      timeoutRef.current = setTimeout(() => {
        // console.log('send')
        submitRef?.current?.click()
        // mutation.mutate()
        // setIsWaiting(false)
      }, time)
    })
    return () => {
      clearTimeout(timeoutRef?.current)
      subscription.unsubscribe()
    }
  }, [watch])

  return (
    <>
      {/*{!hideSpinner && mutation.isLoading && (*/}
      {/*  <div className="position-absolute top-0 right-0 m-50 d-flex">*/}
      {/*    <CgSpinner size={ICON_SIZE_SM} className="spinner" />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*<Prompt message={mt('masz niezapisane zmiany!')} when={isWaiting} />*/}
      <button type="submit" hidden ref={submitRef} />
    </>
  )
}
