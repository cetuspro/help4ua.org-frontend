import Card from '@/components/common/Card'
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { truncateText } from '@/app/utils/truncateText'
import { useMap } from 'react-leaflet'
import { useMapContext } from '@/app/context/MapContext'
import { useNavigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { MENU_SINGLE_REPORT } from '@/app/config/sidebarMenus'

const ThreatListItem = ({
  title,
  description,
  raisesAmount,
  commentsAmount,
  id,
  localization,
  isRaised,
}) => {
  const navigate = useNavigate()
  const map = useMap()
  const { setCurrentMenu } = useMapContext()

  const handleClick = () => {
    map.flyTo(localization, 16)
    setCurrentMenu(MENU_SINGLE_REPORT)
    navigate(route['map.viewReport'](id))
  }

  return (
    <Card
      onClick={handleClick}
      className="report-card cursor-pointer hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-sm text-gray-700 mb-1">{title}</h3>
      {description && (
        <p className="max-w-prose break-words text-xs">{truncateText(description, 50)}</p>
      )}
      <div className="border-t border-gray-300 border-solid mt-2 pt-2 px-1 flex gap-4 items-center text-gray-700">
        <div className="inline-flex gap-1 items-center p-1">
          <FaRegCommentDots size={18} /> {commentsAmount}
        </div>
        <div
          className={`p-1 inline-flex gap-1 items-center rounded-xl ${
            isRaised ? 'text-primary-dark' : ''
          }`}>
          <AiOutlineLike size={18} /> {raisesAmount}
        </div>
      </div>
    </Card>
  )
}

export default ThreatListItem
