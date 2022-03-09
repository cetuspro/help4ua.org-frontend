import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import { getRegion } from '../../../View_Notices/models/tableList'

const Address = ({ cityName, region, address, location }) => {
  const { t } = useTranslation()

  const href =
    location?.lat && location?.long
      ? `http://www.google.com/maps/place/${location?.lat},${location?.long}`
      : `https://www.google.com/maps/search/${cityName ?? ''}+${getRegion(region) ?? ''}+${
          address ?? ''
        }`

  return (
    <NoticeDetailsItem
      label={t('common.adres')}
      icon={<Icon.MdHouse {...iconConfig} />}
      value={
        <a
          href={href}
          target={'_blank'}
          rel={'noreferrer'}
          title="Zobacz na mapie"
          className="flex flex-col text-blue-700 hover:text-blue-500 items-start">
          {cityName || getRegion(region) ? (
            <span>
              {cityName}, {getRegion(region)}
            </span>
          ) : (
            ''
          )}
          <span>{address}</span>
        </a>
      }
    />
  )
}

export default memo(Address)
