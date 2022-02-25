import { useQueryContext } from '@/app/context/queries/QueryProvider'
import Card from '@/components/common/Card'
import { useGetUserRoles } from '../../../../app/CRUD/users/getUserRoles'
import cityAdminRole from '../../../../assets/img/icons/city.svg'
import adminRole from '../../../../assets/img/icons/admin.svg'
import devRole from '../../../../assets/img/icons/developer.svg'
import userRole from '../../../../assets/img/icons/user.svg'
import moderatorRole from '../../../../assets/img/icons/moderator.svg'
import S from "react-switch";
const Switch = S.default? S.default: S
import ConfirmModal from '@/components/common/ConfirmModal'
import { MdSecurity } from 'react-icons/md'
import Button from '@/components/common/Button'
import { useModal } from '../../../../app/hooks/useModal'
import { usePureMutation } from '../../../../app/hooks/usePureMutation'
import { editAdminUser } from '../../../../app/CRUD/users/editUser_Admin'
import useObjectState from '../../../../app/hooks/useObjectState'
import toast from 'react-hot-toast'

const roleImages = {
  'Admin': adminRole,
  'CityAdmin': cityAdminRole,
  'Moderator': moderatorRole,
  'Dev': devRole,
  'User': userRole,
};

const UserPermissions = () => {
  const {data: user, refetch} = useQueryContext()
  const {data: roles} = useGetUserRoles();
  const changePermissionModal = useModal();
  const [permissionModalState, setPermissionModalState] = useObjectState({
    role: null,
    type: 0,
  });

  const handleError = () => {
    toast.error('Wystąpił błąd przy zmianie statusu użytkownika')
  }

  const handleChangeSuccess = () => {
    toast.success(`Zmieniono uprawnienia użytkownika ${user?.firstName} ${user?.lastName}`)
    refetch()
    changePermissionModal.close()
  }
  const changePermissionMutation = usePureMutation(editAdminUser(user?.id, {
    status: user?.userStatus?.id,
    roles: permissionModalState?.type ? [...user?.roles, permissionModalState.role] : user?.roles.filter(role => role !== permissionModalState.role),
  }), {
    onError: handleError,
    onSuccess: handleChangeSuccess,
  });

  const openPermissionModal = (role) => {
    setPermissionModalState({role, type: !user?.roles?.includes(role)});
    changePermissionModal.open();
  }

  return (
    <Card className="text-sm">
      <h2 className="mb-2 text-lg">Role i uprawnienia</h2>
      {roles.map((role, index) => (
        <div className={`flex gap-4 ${index < roles?.length-1 && 'border-b'} py-4 items-center`} key={role?.id}>
          <img src={roleImages[role?.name in roleImages ? role?.name : 'User']} alt="" width="40" height="40" />
          <div>
            <div>{role?.name}</div>
            <div className="text-gray-400 text-xs">{role.description}</div>
          </div>
          <Switch onChange={() => openPermissionModal(role?.name)} checked={user?.roles?.includes(role?.name)} className="ml-auto" />
        </div>
      ))}
      <ConfirmModal
        setOpen={changePermissionModal.close}
        open={changePermissionModal.isOpen}
        title="Zmiana uprawnień"
        description={`Czy na pewno chcesz ${permissionModalState.type ? 'przyznać' : 'odebrać'} użytkownikowi ${user?.firstName} ${user?.lastName} rolę ${permissionModalState.role}?`}
        Icon={MdSecurity}>
        <Button onClick={changePermissionModal.close} color="secondary">
          Anuluj
        </Button>
        <Button color="success" onClick={changePermissionMutation.mutate}>Potwierdź</Button>
      </ConfirmModal>
    </Card>
  )
}

export default UserPermissions