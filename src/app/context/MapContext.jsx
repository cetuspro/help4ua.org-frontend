import { createContext, useContext } from 'react'

const MapContext = createContext({})

export const useMapContext = () => useContext(MapContext)

export const MapProvider = ({ children, ...props }) => (
  <MapContext.Provider value={props}>{children}</MapContext.Provider>
)
