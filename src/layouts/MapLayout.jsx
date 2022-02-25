import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from '@/components/common/Header'
import { Suspense } from 'react'
import Spinner from '@/components/common/Spinner'

const MapLayout = () => {
  return (
    <>
      <Helmet>
        <title>Mapa zagrożeń |  UA Pomoc</title>
      </Helmet>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MapLayout
