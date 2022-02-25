import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { Suspense } from 'react'
import Spinner from '@/components/common/Spinner'

const UserLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-10 px-4">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default UserLayout
