import { useSidebar } from '@/app/hooks/useSidebar'
import { createContext, useContext } from 'react'

const MapContext = createContext({})

export const useMapContext = () => useContext(MapContext)

export const MapProvider = ({ children, ...props }) => {
  const sidebar = useSidebar()

  return (
    <MapContext.Provider
      value={{
        ...sidebar,
        ...props,
      }}>
      {children}
    </MapContext.Provider>
  )
}
