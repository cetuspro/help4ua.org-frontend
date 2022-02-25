import ReactDOM from 'react-dom'
import { Suspense, lazy } from 'react'
import { store, persistor } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { setupAxios } from './app/config/setupAxios'
import Spinner from './components/common/Spinner'
import '@/styles/globals.css'
import { setupMocks } from './app/config/setupMocks'

const LazyApp = lazy(() => import('./App'))

setupAxios(store)
setupMocks()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <Suspense fallback={<Spinner />}>
        <LazyApp />
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
  undefined,
)
