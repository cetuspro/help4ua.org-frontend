import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

const Transport = ({ isDelivery }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.transport')}
      icon={<Icon.MdEmojiTransportation />}
      value={getValue(isDelivery)}
    />
  )
}

export default memo(Transport)
