import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getPeriod } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

const Period = ({ period }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.okres')}
      icon={<Icon.MdCalendarToday />}
      value={getPeriod(t, parseInt(period))}
    />
  )
}

export default memo(Period)
