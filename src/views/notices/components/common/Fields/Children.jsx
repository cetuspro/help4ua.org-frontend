import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getValue } from '../../../View_Notices/models/tableList'

const Children = ({ isAcceptedChild }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.dzieci')}
      icon={<Icon.MdChildFriendly />}
      value={getValue(isAcceptedChild)}
    />
  )
}

export default memo(Children)
