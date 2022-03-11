import { FaRegHandshake } from 'react-icons/fa'
import { InputSelect } from '@/components/form/Input_Select'
import { useGetNoticesStats } from '../../../../app/CRUD/notices/getNoticesStats'
import { useTranslation } from 'react-i18next'

export const NoticeTypeSelect = () => {
  const { t } = useTranslation()
  const { data } = useGetNoticesStats()
  const noticeTypeOptions = data && Object.values(data).map((noticeTypeData) => ({ label: noticeTypeData.noticeTypeLabel, value: noticeTypeData.noticeTypeId}))

  return (
    (
      <InputSelect
        key="noticeType"
        options={noticeTypeOptions}
        name="NoticeType"
        icon={FaRegHandshake}
        label={t('common.noticeType')}
        isLabelVisible={false}
      />
    )
  )
}