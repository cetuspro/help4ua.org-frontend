import { useFilterForm } from '@/app/hooks/useFilterForm'
import Card from '@/components/common/Card'
import { AutoSubmit } from '@/components/form/AutoSubmit'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { InputText } from '@/components/form/Input_Text'
import { getReportTypesHelper } from '@/app/CRUD/reports/getReportTypes'
import { FormProvider } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import { GiHazardSign } from 'react-icons/gi'
import * as yup from 'yup'

const schema = yup.object().shape({
  searchPhrase: yup.string().nullable(),
  reportType: yup.number().nullable(),
})

const UserReportsFilter = () => {
  const { methods, handleSubmit } = useFilterForm({ schema })

  return (
    <Card className="p-3">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:items-center">
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
    </Card>
  )
}

export default UserReportsFilter
