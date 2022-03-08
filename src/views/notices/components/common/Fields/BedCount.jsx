import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon from '@/assets/img/icons'

const BedCount = ({ bedCount }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem label={t('common.lozka')} icon={<Icon.MdOutlineBed />} value={bedCount} />
  )
}

export default memo(BedCount)
