import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getAnimal } from '../../../View_Notices/models/tableList'

const AnimalType = ({ animalType }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      icon={<Icon.MdPets {...iconConfig} />}
      label={t('form.whatAnimalType')}
      value={getAnimal(t, Number(animalType))}
    />
  )
}

export default memo(AnimalType)
