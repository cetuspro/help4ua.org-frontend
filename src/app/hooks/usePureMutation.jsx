import useObjectState from './useObjectState'
import { useMutation } from 'react-query'
import { useEffect, useRef } from 'react'

export const usePureMutation = (promise, { onError, onSuccess, ...config } = {}) => {
  const isMounted = useRef(true)
  const [{ errorStatus, errors }, setState] = useObjectState({
    errorStatus: null,
    errors: null,
  })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  const handleInnerError = (error) => {
    if (!isMounted.current) return
    const errorCode = error?.response?.status
    const errorMessage = error?.response?.statusText
    const errorData = error?.response?.data
    let errorStatus = null
    if (errorData?.message || errorMessage) {
      errorStatus = errorData.message || errorMessage || `Error, code #${errorCode}`
    }
    let errors = {}
    let hasErrors = false
    if (errorData?.errors && errorData.errors?.length) {
      for (let i = 0; i < errorData.errors.length; i++) {
        const err = errorData.errors[i]
        if (err?.code && err?.message) {
          hasErrors = true
          errors[err.code] = err.message
        }
      }
    }
    setState({
      errors: hasErrors ? errors : null,
      errorStatus,
    })
  }

  const handleInnerSuccess = () => {
    if (!isMounted.current) return
    setState({ status: null, errors: null })
  }

  const mutation = useMutation(promise, {
    ...config,
    onSuccess: (...props) => {
      handleInnerSuccess()
      if (typeof onSuccess === 'function') {
        onSuccess(...props)
      }
    },
    onError: (...props) => {
      handleInnerError(...props)
      if (typeof onError === 'function') {
        onError(...props)
      }
    },
  })

  const mutate = (...data) => {
    if (!mutation.isLoading) {
      mutation.mutate(...data)
    }
  }

  return {
    ...mutation,
    mutate,
    errors,
    errorStatus,
  }
}
