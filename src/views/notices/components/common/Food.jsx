import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

const Food = ({ isCatering }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.jedzenie')}
      icon={<Icon.MdFoodBank />}
      value={getValue(isCatering)}
    />
  )
}

export default memo(Food)
