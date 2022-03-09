import { useTranslation } from 'react-i18next'
import { FaComment } from 'react-icons/fa'
import { InputTextarea } from '@/components/form/Input_Textarea'
import { FormSectionHeader } from './FormSectionHeader'

export const AdditionalInfoBlock = () => {
  const { t } = useTranslation()
  return (
    <>
      <FormSectionHeader sectionTitle={t('form.extraInfo')} />
      <div>
        <InputTextarea name="description" label={t('form.description')} icon={FaComment} />
      </div>
    </>
  )
}
