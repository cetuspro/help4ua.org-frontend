import { useRef, useState, useContext, createContext } from 'react'
import useClickOutside from '@/app/hooks/useClickOutside'

const INITIAL_CONFIG = { hideOnOutsideClick: true }

export const PopupContext = createContext({
  isVisible: false,
  show() {
    throw new Error('PopupContextProvider method [show] needs implementation ')
  },
  hide() {
    throw new Error('PopupContextProvider method [hide] needs implementation ')
  },
})

export const PopupContextProvider = ({ children }) => {
  const [isVisible, setPopupVisibility] = useState(false)
  const [render, setRender] = useState(null)
  const values = {
    isVisible,
    render,
    show(Component) {
      setRender(Component)
      setPopupVisibility(true)
    },
    hide() {
      setRender(null)
      setPopupVisibility(false)
    },
  }
  return <PopupContext.Provider value={values}>{children}</PopupContext.Provider>
}

export const Popup = ({ config = INITIAL_CONFIG }) => {
  const ref = useRef(null)
  const { isVisible, hide, render } = useContext(PopupContext)
  const handleOutsideClick = () => {
    if (config.hideOnOutsideClick && isVisible) {
      hide()
    }
  }
  useClickOutside(ref, handleOutsideClick)

  return (
    isVisible && (
      <div
        ref={ref}
        className="popup fixed z-10 text-sm text-center bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded shadow mb-4 pt-7 pb-3 px-7 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        {render}
      </div>
    )
  )
}

const usePopup = () => useContext(PopupContext)

export default usePopup
