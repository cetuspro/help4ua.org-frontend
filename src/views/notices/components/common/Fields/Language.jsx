import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getLanguagesValue } from '../../../View_Notices/models/tableList'

const Language = ({ ukraineLang, englishLang, germanyLang, polishLang }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      icon={<Icon.MdLanguage {...iconConfig} />}
      label={t('form.language')}
      value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
    />
  )
}

export default memo(Language)
