import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const ExpandableContent = ({ text, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="flex flex-col gap-2">
      <div className={`${isExpanded ? '' : 'max-h-9 clamped-ellipsis'} `}>{text}</div>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        type="button"
        className="appearance-none font-bold text-gray-400 hover:text-gray-500 transition-colors mr-auto flex gap-1 items-center">
        Pokaż więcej{' '}
        <BiChevronDown size="1.5em" className={`${isExpanded ? 'transform rotate-180' : ''}`} />
      </button>
    </div>
  )
}

export default ExpandableContent
