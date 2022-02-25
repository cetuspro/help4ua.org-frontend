import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from './useWindowSize'
import { route } from '../router/urls/routes'
import toast from 'react-hot-toast'
import { useParams, useMatch } from 'react-router-dom'
import { MENU_REPORT_LIST, MENU_SINGLE_REPORT, MENU_SINGLE_SENSOR } from '../config/sidebarMenus'

export const useSidebar = () => {
  const navigate = useNavigate()
  const matchAddReport = useMatch(route['map.addReport'])
  const { reportId, sensorId } = useParams()
  const { width } = useWindowSize()

  const initialMenu = useMemo(() => {
    if (reportId) return MENU_SINGLE_REPORT
    if (sensorId) return MENU_SINGLE_SENSOR
    else return MENU_REPORT_LIST
  }, [reportId, sensorId])

  const [isAddMode, setIsAddMode] = useState(!!matchAddReport)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [reportPosition, setReportPosition] = useState(null)
  const [currentMenu, setCurrentMenu] = useState(initialMenu)

  const enterAddMode = () => {
    navigate(route['map.addReport'])
    setIsAddMode(true)
    if (width < 768) setIsSidebarOpen(false)
    toast('Wskaż punkt na mapie')
  }

  const exitAddMode = () => {
    navigate(route['map'])
    setIsAddMode(false)
  }

  return {
    isAddMode,
    enterAddMode,
    exitAddMode,
    isSidebarOpen,
    setIsSidebarOpen,
    reportPosition,
    setReportPosition,
    currentMenu,
    setCurrentMenu,
  }
}
