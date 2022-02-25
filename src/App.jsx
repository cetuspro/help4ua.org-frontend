import { useEffect, useState } from 'react'
import AppRouter from './views/Router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import { me } from './app/CRUD/auth/me'
import { refreshUserToken } from './app/CRUD/auth/refreshUserToken'
import { useDispatch } from 'react-redux'
import { actionMe, actionLogout } from './store/auth/authActions'
import Spinner from './components/common/Spinner'
import { useAuth } from '@/app/hooks/useAuth'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: false,
      cacheTime: 0,
    },
  },
})

export default function App() {
  const dispatch = useDispatch()
  const { accessToken, refreshToken } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!accessToken) return

    me()
      .then(({ data }) => dispatch(actionMe(data)))
      .catch((e) => {
        if (e?.response?.status !== 401) {
          dispatch(actionLogout())
          setIsLoading(false)
          return
        }
        // refresh token
        refreshUserToken(refreshToken)
          .catch(() => {
            dispatch(actionLogout())
          })
          .finally(() => setIsLoading(false))
      })
      .finally(() => setIsLoading(false))
  }, [accessToken])

  if (isLoading && accessToken) return <Spinner />

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster />
    </QueryClientProvider>
  )
}
