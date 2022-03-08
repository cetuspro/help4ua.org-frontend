import { useEffect, useState } from 'react'
import AppRouter from './views/Router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import { me } from './app/CRUD/auth/me'
import { refreshUserToken } from './app/CRUD/auth/refreshUserToken'
import { useDispatch, useSelector } from 'react-redux'
import { actionMe, actionLogout } from './store/auth/authActions'
import Spinner from './components/common/Spinner'
import { useAuth } from '@/app/hooks/useAuth'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { i18nInit } from './i18nInit'
import { Popup, PopupContextProvider } from '@/app/hooks/usePopup'

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
  const [translationLoaded, setTranslationLoaded] = useState(false)
  const { i18n } = useTranslation()
  const { language } = useSelector((state) => state?.language)
  useEffect(() => {
    i18nInit(language).then(() => setTranslationLoaded(true))
  }, [])

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
  if (!translationLoaded) return <Spinner />
  return (
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <PopupContextProvider>
          <AppRouter />
          <Toaster />
          <Popup />
        </PopupContextProvider>
      </QueryClientProvider>
    </I18nextProvider>
  )
}
