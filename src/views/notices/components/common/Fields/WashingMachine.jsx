import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getValue } from '../../../View_Notices/models/tableList'

const WashingMachine = ({ hasWashingMachine }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.pralka')}
      icon={<Icon.GiWashingMachine {...iconConfig} />}
      value={getValue(hasWashingMachine)}
    />
  )
}

export default memo(WashingMachine)
