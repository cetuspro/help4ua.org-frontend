import * as yup from 'yup'
import { useFilterForm } from '@/app/hooks/useFilterForm'
import { FormProvider } from 'react-hook-form'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { InputText } from '@/components/form/Input_Text'
import { getReportTypesHelper } from '@/app/CRUD/reports/getReportTypes'
import { FaSearch } from 'react-icons/fa'
import { AutoSubmit } from '@/components/form/AutoSubmit'
import { GiHazardSign } from 'react-icons/gi'

const schema = yup.object().shape({
  searchPhrase: yup.string().nullable(),
  reportType: yup.number().nullable(),
})

const ReportsFilterForm = () => {
  const { methods, handleSubmit } = useFilterForm({ schema })

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <InputText name="searchPhrase" label="Wyszukaj" icon={FaSearch} isLabelVisible={false} />
        <InputAsyncSelect
          {...getReportTypesHelper}
          name="reportType"
          icon={GiHazardSign}
          label={'Wybierz typ zgłoszenia'}
          isLabelVisible={false}
          transform={({ id, name }) => ({
            value: id,
            label: name,
          })}
        />
        <AutoSubmit />
      </form>
    </FormProvider>
  )
}

export default ReportsFilterForm
