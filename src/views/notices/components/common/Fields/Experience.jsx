import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getValue } from '../../../View_Notices/models/tableList'

const Experience = ({ hasExperience }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('form.hasExperienceWithAnimals')}
      value={getValue(hasExperience)}
      icon={<Icon.MdAccessibilityNew {...iconConfig} />}
    />
  )
}

export default memo(Experience)
