import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

const WashingMachine = ({ hasWashingMachine }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.pralka')}
      icon={<Icon.GiWashingMachine />}
      value={getValue(hasWashingMachine)}
    />
  )
}

export default memo(WashingMachine)
