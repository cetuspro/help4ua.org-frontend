import { FaRegHandshake } from 'react-icons/fa'
import { InputSelect } from '@/components/form/Input_Select'
import { useTranslation } from 'react-i18next'
import { noticeTypesEnum } from '@/app/config/enum/noticeTypesEnum'

export const NoticeTypeSelect = () => {
  const { t } = useTranslation()

  return (
    (
      <InputSelect
        key="noticeType"
        options={noticeTypesEnum(t)}
        name="NoticeType"
        icon={FaRegHandshake}
        label={t('common.noticeType')}
        isLabelVisible={false}
      />
    )
  )
}