import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getValue } from '../../../View_Notices/models/tableList'

const Animal = ({ isAcceptedAnimal }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.zwierzaki')}
      icon={<Icon.MdPets {...iconConfig} />}
      value={getValue(isAcceptedAnimal)}
    />
  )
}

export default memo(Animal)
