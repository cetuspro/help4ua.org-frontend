import { memo } from 'react'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'

const CreatedAt = ({ createdAt }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.data')}
      value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}
    />
  )
}

export default memo(CreatedAt)
