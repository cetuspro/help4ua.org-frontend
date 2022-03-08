import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'

const Description = ({ description, descriptionUA }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={description ? t('common.opis') : t('common.opisUA')}
      className="flex-col"
      icon={<Icon.MdOutlineTextSnippet {...iconConfig} />}
      value={description || descriptionUA}
      valueClassName="text-gray-800 font-normal"
    />
  )
}

export default memo(Description)
