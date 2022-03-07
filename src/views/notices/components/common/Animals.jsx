import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

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
