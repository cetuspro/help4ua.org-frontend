import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'

const ArrivedDate = ({ arrivalDateStr }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      icon={<Icon.MdOutlineDateRange {...iconConfig} />}
      label={t('common.arrival')}
      value={arrivalDateStr}
    />
  )
}

export default memo(ArrivedDate)
