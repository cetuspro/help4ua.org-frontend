import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon from '@/assets/img/icons'

const FreePrice = () => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.price')}
      value={t('common.priceFree')}
      icon={<Icon.MdPriceChange />}
    />
  )
}

export default memo(FreePrice)
