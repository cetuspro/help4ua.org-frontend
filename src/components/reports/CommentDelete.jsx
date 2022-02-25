import { deleteUserComment } from '@/app/CRUD/reports/deleteUserComment'
import { usePureMutation } from '@/app/hooks/usePureMutation'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import toast from 'react-hot-toast'
import { HiDotsVertical } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

const CommentDelete = ({ comment, refetch }) => {
  const { reportId } = useParams()
  const handleSuccess = () => {
    toast.success(`Usunięto komentarz`)
    refetch()
  }

  const handleError = () => {
    toast.error('Wystąpił błąd przy usuwaniu komentarza')
  }

  const mutation = usePureMutation(deleteUserComment(reportId, comment?.id), {
    onError: handleError,
    onSuccess: handleSuccess,
  })

  return (
    <Menu
      menuClassName="rounded text-sm shadow-sm opacity-100 relative"
      menuButton={
        <MenuButton>
          <HiDotsVertical size={20} className="text-gray-400 hover:text-gray-600" />
        </MenuButton>
      }>
      <MenuItem
        className="p-3 rounded cursor-pointer absolute top-full right-0 min-w-max"
        onClick={mutation.mutate}>
        Usuń komentarz
      </MenuItem>
    </Menu>
  )
}

export default CommentDelete
