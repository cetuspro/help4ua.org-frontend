import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getTransportLabelAndValue } from '../../../View_Notices/models/tableList'

const Transport = ({ isDelivery, transportFromStr, transportToStr }) => {
  const { t } = useTranslation()
  const { label, value } = getTransportLabelAndValue({
    isDelivery,
    transportFromStr,
    transportToStr,
  })

  return (
    <NoticeDetailsItem
      label={t(label)}
      icon={<Icon.MdEmojiTransportation {...iconConfig} />}
      value={value}
    />
  )
}

export default memo(Transport)
