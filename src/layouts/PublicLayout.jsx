import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Spinner from '@/components/common/Spinner'
import { Suspense } from 'react'

const PublicLayout = () => {
  return (
    <>
      <Helmet>
        <title>Strona główna |  UA Pomoc</title>
      </Helmet>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default PublicLayout
