import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'

const Description = ({ description }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.opis')}
      className="flex-col"
      icon={<Icon.MdOutlineTextSnippet />}
      value={description}
      valueClassName="text-gray-800 font-normal"
    />
  )
}

export default memo(Description)
