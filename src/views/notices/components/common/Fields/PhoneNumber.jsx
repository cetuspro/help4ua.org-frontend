import { useState, memo } from 'react'
import { useTranslation } from 'react-i18next'
import ActionDetailsItem from '../ActionDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'
import getHiddenFields, { FieldType } from '@/app/CRUD/notices/getHiddenFields'

const PhoneNumber = ({ id, phoneNumber, showIcon = true }) => {
  const { t } = useTranslation()
  const [showField, setShowField] = useState(false)
  const [realPhoneNumber, setRealPhoneNumber] = useState('XXX-XXX-XXX')

  const handleAction = async () => {
    try {
      if (showField) return
      const field = await getHiddenFields({
        noticeId: id,
        type: FieldType.PHONE,
      })
      setRealPhoneNumber(field)
      setShowField(true)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <ActionDetailsItem
      onAction={handleAction}
      label={t('common.telefon')}
      icon={showIcon ? <Icon.MdPhone {...iconConfig}/> : null}
      valueClassName={showField && 'text-blue-700'}
      value={
        <a
          onClick={(e) => !showField && e.preventDefault()}
          href={showField ? `tel:${realPhoneNumber}` : '#'}
          className="text-blue-700 hover:text-blue-500">
          {showField ? realPhoneNumber : phoneNumber}
        </a>
      }
    />
  )
}

export default memo(PhoneNumber)
