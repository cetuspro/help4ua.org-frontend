import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getLanguagesValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

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
