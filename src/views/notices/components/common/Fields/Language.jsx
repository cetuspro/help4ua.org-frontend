import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getLanguagesValue } from '../../../View_Notices/models/tableList'

const Language = ({ ukraineLang, englishLang, germanyLang, polishLang }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('form.language')}
      value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
      icon={<Icon.MdLanguage />}
    />
  )
}

export default memo(Language)
