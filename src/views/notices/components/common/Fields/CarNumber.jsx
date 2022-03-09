import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'

const CarNumber = ({ carRegoNo }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('form.carRegoNo')}
      icon={<Icon.MdDirectionsCar {...iconConfig} />}
      value={carRegoNo}
    />
  )
}

export default memo(CarNumber)
