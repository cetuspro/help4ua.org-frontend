import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineLogout } from 'react-icons/ai'
import { FiLogOut, FiMenu } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { actionLogout } from '../../store/auth/authActions'
import Card from './Card'
import Button from './Button'
import { route } from '@/app/router/urls/routes'
import ConfirmModal from './ConfirmModal'

const AdminHeader = ({toggleNav}) => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.auth.email)
  const navigate = useNavigate()
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false)
  const params = useParams();

  const handleLogout = () => {
    dispatch(actionLogout())
    navigate(route['index'])
    setIsLogoutModalVisible(false)
  }

  return <>
    <Card className="flex justify-end items-center sticky top-0 z-10">
      <div className="mr-auto">
        <button className="lg:hidden" onClick={toggleNav}>
          <FiMenu className="text-xl"/>
        </button>
        {!!params?.reportId && <button className="hidden lg:block" onClick={() => navigate(route['admin.reports'])}>
          <AiOutlineArrowLeft className="text-xl"/>
        </button>}
        {!!params?.userId && <button className="hidden lg:block" onClick={() => navigate(route['admin.users'])}>
          <AiOutlineArrowLeft className="text-xl"/>
        </button>}
      </div>
      <span>{email}</span>
      <button onClick={() => setIsLogoutModalVisible(true)}>
        <AiOutlineLogout className="ml-2 hover:text-gray-500 text-xl"/>
      </button>
    </Card>
    <ConfirmModal
      setOpen={setIsLogoutModalVisible}
      open={isLogoutModalVisible}
      title="Wyloguj"
      description="Czy na pewno chcesz się wylogować?"
      Icon={FiLogOut}>
      <Button onClick={() => setIsLogoutModalVisible(false)} color="secondary">
        Anuluj
      </Button>
      <Button onClick={handleLogout}>Wyloguj</Button>
    </ConfirmModal>
  </>
}

export default AdminHeader