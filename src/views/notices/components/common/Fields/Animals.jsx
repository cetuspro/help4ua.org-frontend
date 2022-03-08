import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getValue } from '../../../View_Notices/models/tableList'

const Animals = ({ isAcceptedAnimal }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.zwierzaki')}
      icon={<Icon.MdPets />}
      value={getValue(isAcceptedAnimal)}
    />
  )
}

export default memo(Animals)
