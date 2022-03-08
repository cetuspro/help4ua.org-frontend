import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getPeriod } from '../../../View_Notices/models/tableList'

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
