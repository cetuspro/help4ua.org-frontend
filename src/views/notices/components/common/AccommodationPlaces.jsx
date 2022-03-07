import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'

const AccommodationPlaces = ({ accommodationPlacesCount }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.miejsca')}
      icon={<Icon.MdPeopleAlt />}
      value={accommodationPlacesCount}
    />
  )
}

export default memo(AccommodationPlaces)
