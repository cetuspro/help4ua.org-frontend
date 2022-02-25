import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import SideNavigation from '@/components/common/SideNavigation'
import AdminHeader from '@/components/common/AdminHeader'
import { useState } from 'react'
import { Suspense } from 'react'
import Spinner from '@/components/common/Spinner'

const AdminLayout = () => {
  const [isNavHidden, setIsNavHidden] = useState(false)

  const toggleNav = () => setIsNavHidden((state) => !state)

  return (
    <>
      <Helmet>
        <title>Panel miasta |  UA Pomoc</title>
      </Helmet>
      <div className="flex flex-1 h-screen dark:bg-gray-800">
        <SideNavigation hidden={isNavHidden} toggleNav={toggleNav} />
        <div className="flex flex-1 flex-col mt-4 pb-4 px-6 bg-gray-100 dark:bg-gray-800 overflow-auto relative gap-6" id="adminLayout">
          <AdminHeader toggleNav={toggleNav} />
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default AdminLayout
