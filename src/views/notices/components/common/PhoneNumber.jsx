import { useState, memo } from 'react'
import { useTranslation } from 'react-i18next'
import ActionDetailsItem from './ActionDetailsItem'
import Icon from '@/assets/img/icons'
import getHiddenFields, { FieldType } from '@/app/CRUD/notices/getHiddenFields'

const PhoneNumber = ({ id, phoneNumber }) => {
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
      icon={<Icon.MdPhone />}
      value={
        <a
          onClick={(e) => !showField && e.preventDefault()}
          href={showField ? `tel:${realPhoneNumber}` : '#'}
          className="font-bold text-blue-700 hover:text-blue-500">
          {showField ? realPhoneNumber : phoneNumber}
        </a>
      }
    />
  )
}

export default memo(PhoneNumber)
