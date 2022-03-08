import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { route } from '@/app/router/urls/routes'

const UniqueLink = ({ id }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.uniqueLink')}
      icon={<Icon.MdLink />}
      value={
        <Link
          to={route['notices.view'](id)}
          className="text-blue-700 hover:text-blue-500 inline-block font-bold">
          Link
        </Link>
      }
    />
  )
}

export default memo(UniqueLink)
