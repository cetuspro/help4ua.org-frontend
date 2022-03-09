import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'

const Name = ({ name }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.imie')}
      value={name}
      icon={<Icon.FaUser {...iconConfig} />}
    />
  )
}

export default memo(Name)
