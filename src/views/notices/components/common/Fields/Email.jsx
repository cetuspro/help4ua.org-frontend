import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'

const Email = ({ email }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.email')}
      value={email}
      icon={<Icon.MdEmail {...iconConfig} />}
    />
  )
}

export default memo(Email)
