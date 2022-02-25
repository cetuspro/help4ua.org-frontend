import { changeCommentStatus } from '../../../app/CRUD/reports/changeCommentStatus'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import dayjs from 'dayjs'
import { AiOutlineLike } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { usePureMutation } from '../../../app/hooks/usePureMutation'
import UserFullName from '@/components/user/UserFullName'
import UserAvatar from '@/components/common/UserAvatar'

const Comment = ({comment, refreshComments, reportId, className, ...rest}) => {

  const handleSuccess = () => {
    toast.success(`${comment?.commentStatus?.id === 0 ? 'Ukryto komentarz' : 'Przywrócono komentarz'} 
    ${comment?.user?.firstName || comment?.user?.lastName ?'użytkownika '+(comment?.user?.firstName || '')+' '+(comment?.user?.lastName || '') : ''}`)
    refreshComments()
  }

  const handleError = () => {
    toast.error('Wystąpił błąd przy zmianie statusu komentarza')
  }

  const mutation = usePureMutation(changeCommentStatus(reportId, comment.id), {
    onError: handleError,
    onSuccess: handleSuccess,
  })

  return (
    <article
    {...rest}
      className={`p-4 border-t border-gray-300 border-solid first:border-0 flex gap-2 items-start${comment?.commentStatus?.id !== 0 ? ' bg-gray-100' : ''} ${className}`}
    >
      <UserAvatar user={comment?.user} className={`!w-10 !h-10 ${comment?.commentStatus?.id !== 0 ? ' opacity-60' : ''}`} />
      <div className={`grow${comment?.commentStatus?.id !== 0 ? ' opacity-60' : ''}`}>
        <UserFullName user={comment?.user} className='font-semibold' />
        <div className="text-xs text-gray-400">{dayjs(comment?.commentDate).format('DD.MM.YYYY, HH:mm')}</div>
        <div className="my-2 break-words2">{comment.content}</div>
        {!!comment?.raisesAmount && (
          <span className="inline-flex gap-1">
            <AiOutlineLike size={18} /> {comment.raisesAmount}
          </span>
        )}
      </div>
      <Menu onClick={e => {e.stopPropagation()}}
        menuClassName="rounded text-sm shadow-sm opacity-100"
        menuButton={<MenuButton onClick={e => {e.stopPropagation()}}>
          <HiDotsVertical size={20} className="text-gray-400 hover:text-gray-600"/>
        </MenuButton>}>
        <MenuItem className="px-2 py-1" onClick={mutation.mutate}>
          {comment?.commentStatus?.id !== 0 ? 'Przywróć komentarz' : 'Ukryj komentarz'}
        </MenuItem>
      </Menu>
    </article>
  )
}

export default Comment
