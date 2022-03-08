import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon from '@/assets/img/icons'

const Name = ({ name }) => {
  const { t } = useTranslation()

  return <NoticeDetailsItem label={t('common.imie')} value={name} icon={<Icon.FaUser />} />
}

export default memo(Name)
