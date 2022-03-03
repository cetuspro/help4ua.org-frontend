import { useFilterForm } from '@/app/hooks/useFilterForm'
import Card from '@/components/common/Card'
import { AutoSubmit } from '@/components/form/AutoSubmit'
import { InputText } from '@/components/form/Input_Text'
import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FaSearch } from 'react-icons/fa'
import * as yup from 'yup'


const schema = yup.object().shape({
  searchPhrase: yup.string().nullable(),
})

const MedicalAssistanceFilter = () => {
  const { methods, handleSubmit } = useFilterForm({ schema })
  const { t } = useTranslation()
  return (
    <Card className="p-3">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:items-center">
          <InputText
            name="searchPhrase"
            label={t('common.szukaj')}
            icon={FaSearch}
            isLabelVisible={false}
          />
          <AutoSubmit />
        </form>
      </FormProvider>
    </Card>
  )
}

export default MedicalAssistanceFilter
