import Card from '@/components/common/Card'
import UserFullName from '@/components/user/UserFullName';
import Button from '@/components/common/Button';
import { useMemo } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { GoReport } from 'react-icons/go';
import UserAvatar from '@/components/common/UserAvatar';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import Modal from '@/components/common/Modal';
import { useModal } from '../../../app/hooks/useModal';

const MyAccountInfo = () => {
  const user = useSelector((state) => state.auth)
  const userEditModal = useModal()

  const tableData = useMemo(() => ([
    ["Rola:", user?.roles?.join(', ')],
    ["Email:", user?.email],
    ["Telefon:", user?.phoneNumber],
    ["Data rejestracji:", dayjs(user?.registerDate).format('DD.MM.YYYY, HH:mm')],
  ]), [user])

  return (
    <Card className="p-6 min-w-[30%] rounded-md">
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
          <Button className="py-2 px-3 md:text-sm" color="outline" onClick={userEditModal.open}>Edytuj</Button>
        </div>
      </div>
      <Modal
        setOpen={userEditModal.close}
        open={userEditModal.isOpen}
        title='Edytuj informacje'>
        TODO
        <div className="flex gap-6 justify-end mt-6">
          <Button onClick={userEditModal.close} color="secondary">Anuluj</Button>
          <Button color="primary" onClick={userEditModal.close}>Zapisz</Button>
        </div>
      </Modal>
    </Card>
  )
}

export default MyAccountInfo