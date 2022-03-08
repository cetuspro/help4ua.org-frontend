import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'

const NoticeId = ({ id }) => {
  const { t } = useTranslation()

  return <NoticeDetailsItem label={t('common.id')} value={id} />
}

export default memo(NoticeId)
