import { useMap } from 'react-leaflet'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useMapContext } from '@/app/context/MapContext'
import { useWindowSize } from '@/app/hooks/useWindowSize'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  const { width } = useWindowSize()
  const map = useMap()
  const { isSidebarOpen, setIsSidebarOpen } = useMapContext()

  const disableControls = () => {
    if (width > 768) {
      map.dragging.disable()
      map.touchZoom.disable()
      map.doubleClickZoom.disable()
      map.scrollWheelZoom.disable()
      map.boxZoom.disable()
      map.keyboard.disable()
    }
  }

  const enableControls = () => {
    map.dragging.enable()
    map.touchZoom.enable()
    map.doubleClickZoom.enable()
    map.scrollWheelZoom.enable()
    map.boxZoom.enable()
    map.keyboard.enable()
  }

  return (
    <>
      <aside
        className={`z-[1001] bg-gray-100 dark:bg-gray-100 w-screen md:w-96 max-w-full absolute inset-y-0 right-0 main-sidebar overflow-hidden transform transition-transform ${
          isSidebarOpen ? '' : 'translate-y-full md:translate-x-full md:translate-y-0'
        }`}
        onMouseEnter={disableControls}
        onMouseLeave={enableControls}>
        <Outlet />
      </aside>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="appearance-none absolute right-2 top-2 p-2 rounded-lg bg-white z-[998] hover:bg-gray-200 text-gray-400 transition-colors">
        <HiOutlineMenuAlt3 size={26} color="currentColor" />
      </button>
    </>
  )
}

export default Sidebar
