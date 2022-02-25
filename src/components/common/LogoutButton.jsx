import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { actionLogout } from '@/store/auth/authActions'
import Button from './Button'
import ConfirmModal from './ConfirmModal'
import { FiLogOut } from 'react-icons/fi'

const LogoutButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    dispatch(actionLogout())
    navigate(route['auth.login'])
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`hover:bg-gray-300 hover:text-gray-700 text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-sm gap-4 transition-colors`}>
        <FiLogOut size={20} aria-hidden="true" />
        Wyloguj się
      </button>
      <ConfirmModal
        setOpen={setIsOpen}
        open={isOpen}
        title="Wyloguj"
        description="Czy na pewno chcesz się wylogować?"
        Icon={FiLogOut}>
        <Button onClick={handleCancel} color="secondary">
          Anuluj
        </Button>
        <Button onClick={handleLogout}>Wyloguj</Button>
      </ConfirmModal>
    </>
  )
}

export default LogoutButton
