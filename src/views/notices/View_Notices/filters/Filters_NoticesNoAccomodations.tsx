import { useFilterForm } from '@/app/hooks/useFilterForm'
import Card from '@/components/common/Card'
import { AutoSubmit } from '@/components/form/AutoSubmit'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { InputText } from '@/components/form/Input_Text'
import { FormProvider } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import * as yup from 'yup'
import { getRegionsHelper } from '../../../../app/CRUD/region/getRegions'
import { BiMapPin } from 'react-icons/bi'

import { useTranslation } from 'react-i18next'

const schema = yup.object().shape({
  searchPhrase: yup.string().nullable(),
  city: yup.string().nullable(),
  region: yup.string().nullable(),
})

const NoticesFilterNoAccomodations = () => {
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

          <InputAsyncSelect
            {...getRegionsHelper}
            name="Region"
            icon={BiMapPin}
            label={t('common.wojewodztwo')}
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

export default NoticesFilterNoAccomodations
