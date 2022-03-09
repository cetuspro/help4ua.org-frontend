import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'

const FreePrice = () => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.price')}
      value={t('common.priceFree')}
      icon={<Icon.MdPriceChange {...iconConfig} />}
    />
  )
}

export default memo(FreePrice)
