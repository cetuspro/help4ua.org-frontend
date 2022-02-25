import { useQueryContext } from '@/app/context/queries/QueryProvider'
import Card from '@/components/common/Card'
import UserFullName from '@/components/user/UserFullName';
import Button from '@/components/common/Button';
import { useMemo } from 'react';
import { FaBan, FaRegCommentDots } from 'react-icons/fa';
import { GoReport } from 'react-icons/go';
import UserAvatar from '@/components/common/UserAvatar';
import dayjs from 'dayjs';
import Modal from '@/components/common/Modal';
import { useModal } from '../../../../app/hooks/useModal';
import { InputTextPure } from '@/components/form/Input_Text.pure';
import { useState } from 'react';
import { usePureMutation } from '../../../../app/hooks/usePureMutation';
import { editAdminUser } from '../../../../app/CRUD/users/editUser_Admin';
import toast from 'react-hot-toast';
import ConfirmModal from '@/components/common/ConfirmModal';
import { AiOutlineCheck } from 'react-icons/ai';

const badgeColors = {
  0: 'badge',
  1: 'badge-success',
  2: 'badge-danger',
  3: 'badge',
}

const UserInfo = () => {
  const {data: user, refetch}= useQueryContext()
  const userBanModal = useModal();
  const userUnbanModal = useModal();
  const acceptUserModal = useModal();
  const [banReason, setBanReason] = useState('');
  const tableData = useMemo(() => ([
    ["Status:", <>
      <span className={badgeColors[user?.userStatus?.id in badgeColors ? user?.userStatus?.id : 0]+' bg-transparent p-0'}>{user?.userStatus?.name}</span>
      <span className="text-xs font-normal">{!!user?.banReason && ` (Powód: ${user.banReason})`}</span>
    </>],
    ["Rola:", user?.roles?.join(', ')],
    ["Email:", user?.email],
    ["Telefon:", user?.phoneNumber],
    ["Data rejestracji:", dayjs(user?.registerDate).format('DD.MM.YYYY, HH:mm')],
  ]), [user])
  
  const handleError = () => {
    toast.error('Wystąpił błąd przy zmianie statusu użytkownika')
  }

  const handleAcceptSuccess = () => {
    toast.success(`Zweryfikowano użytkownika ${user?.firstName} ${user?.lastName}`)
    refetch()
    acceptUserModal.close()
  }
  const acceptUserMutation = usePureMutation(editAdminUser(user?.id, {status: 1}), {
    onError: handleError,
    onSuccess: handleAcceptSuccess,
  });

  const handleBanSuccess = () => {
    toast.success(`Zablokowano użytkownika ${user?.firstName} ${user?.lastName}`)
    refetch()
    userBanModal.close()
    setBanReason(null);
  }
  const banUserMutation = usePureMutation(editAdminUser(user?.id, {status: 2, banReason: banReason}), {
    onError: handleError,
    onSuccess: handleBanSuccess,
  })

  const handleUnbanSuccess = () => {
    toast.success(`Odblokowano użytkownika ${user?.firstName} ${user?.lastName}`)
    refetch()
    userUnbanModal.close()
  }
  const unbanUserMutation = usePureMutation(editAdminUser(user?.id, {status: 1}), {
    onError: handleError,
    onSuccess: handleUnbanSuccess,
  })

  return (
    <Card className="p-6 min-w-[30%]">
      <div className="">
        <div className="flex flex-col items-center mb-10">
          <UserAvatar user={user} className="!w-24 !h-24 !rounded mb-2" />
          <UserFullName user={user}/>
          <div className="text-slate-400 text-sm">{user?.email}</div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center xl:justify-evenly mb-10">
          <div className="flex items-center gap-3">
            <div className="rounded bg-primary/25 p-3 inline-block">
              <GoReport className="text-amber-600 text-lg"/>
            </div>
            <div>
              <div>{user?.reportsCount}</div>
              <div className="text-sm text-gray-400">zgłoszenia</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded bg-primary/25 p-3 inline-block">
              <FaRegCommentDots className="text-amber-600 text-lg"/>
            </div>
            <div>
              <div>{user?.commentsCount}</div>
              <div className="text-sm text-gray-400">komentarze</div>
            </div>
          </div>
        </div>
        <div className="mb-10 text-sm">
          {tableData.map((item, index) => (
            item[1] != null && <div className="py-1" key={index}>
              {item[0]}<strong className="pl-2 text-gray-700 break-words2">{item[1]}</strong>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-3 justify-center">
          {user?.userStatus?.id === 3 ? (
            <Button className="py-2 px-3 md:text-sm" onClick={acceptUserModal.open}>Zweryfikuj</Button>
          ) : user?.userStatus?.id === 1 ? (
            <Button className="py-2 px-3 md:text-sm" onClick={userBanModal.open}>Zablokuj</Button>
          ) : user?.userStatus?.id === 2 ? (
            <Button className="py-2 px-3 md:text-sm" onClick={userUnbanModal.open}>Odblokuj</Button>
          ) : null}
        </div>
      </div>
      <Modal
        setOpen={userBanModal.close}
        open={userBanModal.isOpen}
        title='Zablokuj użytkownika'>
        <InputTextPure
          value={banReason}
          onChange={setBanReason}
          icon={FaBan}
          label="Powód blokady"/>
        <div className="flex gap-6 justify-end mt-6">
          <Button onClick={userBanModal.close} color="secondary">Anuluj</Button>
          <Button color="danger" onClick={banUserMutation.mutate}>Zablokuj</Button>
        </div>
      </Modal>
      <ConfirmModal
        setOpen={userUnbanModal.close}
        open={userUnbanModal.isOpen}
        title="Odblokuj użytkownika"
        description={`Czy na pewno chcesz odblokować konto użytkownika ${user?.firstName} ${user?.lastName}?`}
        Icon={AiOutlineCheck}>
        <Button onClick={userUnbanModal.close} color="secondary">
          Anuluj
        </Button>
        <Button color="success" onClick={unbanUserMutation.mutate}>Odblokuj</Button>
      </ConfirmModal>
      <ConfirmModal
        setOpen={acceptUserModal.close}
        open={acceptUserModal.isOpen}
        title="Zweryfikuj użytkownika"
        description={`Czy na pewno chcesz zatwierdzić konto użytkownika ${user?.firstName} ${user?.lastName}?`}
        Icon={AiOutlineCheck}>
        <Button onClick={acceptUserModal.close} color="secondary">
          Anuluj
        </Button>
        <Button color="success" onClick={acceptUserMutation.mutate}>Zweryfikuj</Button>
      </ConfirmModal>
    </Card>
  )
}

export default UserInfo