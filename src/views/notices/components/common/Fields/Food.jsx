import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getValue } from '../../../View_Notices/models/tableList'

const Food = ({ isCatering }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.jedzenie')}
      icon={<Icon.MdFoodBank {...iconConfig} />}
      value={getValue(isCatering)}
    />
  )
}

export default memo(Food)
