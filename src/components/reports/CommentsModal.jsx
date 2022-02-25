import { useState } from 'react'
import Modal from '@/components/common/Modal'
import { FaRegCommentDots } from 'react-icons/fa'
import CommentsView from './CommentsView'

const CommentsModal = ({ commentsAmount, reportId }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
        className="appearance-none inline-flex gap-1 items-center p-1 hover:bg-gray-200 rounded-xl">
        <FaRegCommentDots size={18} /> {commentsAmount}
      </button>
      <Modal setOpen={setIsOpen} open={isOpen}>
        <CommentsView reportId={reportId} />
      </Modal>
    </>
  )
}

export default CommentsModal
