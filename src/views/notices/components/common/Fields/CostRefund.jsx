import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getValue } from '../../../View_Notices/models/tableList'

const CostRefund = ({ shouldRefund }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      icon={<Icon.MdPriceChange {...iconConfig} />}
      label={t('form.constRefund')}
      value={getValue(shouldRefund)}
    />
  )
}

export default memo(CostRefund)
