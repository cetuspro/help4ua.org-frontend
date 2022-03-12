import { useFilterForm } from '@/app/hooks/useFilterForm'
import Card from '@/components/common/Card'
import { AutoSubmit } from '@/components/form/AutoSubmit'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { InputText } from '@/components/form/Input_Text'
import { FormProvider } from 'react-hook-form'
import { FaCity, FaSearch } from 'react-icons/fa'
import * as yup from 'yup'
import { getCitiesHelper } from '../../../../app/CRUD/region/getCities'
import { getRegionsHelper } from '../../../../app/CRUD/region/getRegions'
import { BiMapPin } from 'react-icons/bi'
import { ImSortNumbericDesc } from 'react-icons/im'
import { InputSelect } from '@/components/form/Input_Select'
import { mt } from '../../../../ua/mt'
import { useTranslation } from 'react-i18next'

const schema = yup.object().shape({
  searchPhrase: yup.string().nullable(),
  city: yup.string().nullable(),
  accommodationPlacesCount: yup.string().nullable(),
})

const accommodationPlacesCountOptions = [1,2,3,4,5,6,7,8,9,10].map(x => ({label: x.toString(), value: x}))

const NoticesFilter = () => {
  const { methods, handleSubmit } = useFilterForm({ schema })
  const { t } = useTranslation()
  return (
    <Card className="p-3">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:items-center">
          <InputText name="searchPhrase" label={t('common.szukaj')} icon={FaSearch} isLabelVisible={false} />
          {/*<InputAsyncSelect*/}
          {/*  {...getCitiesHelper}*/}
          {/*  name="City"*/}
          {/*  icon={FaCity}*/}
          {/*  label={'Wybierz miasto'}*/}
          {/*  isLabelVisible={false}*/}
          {/*  transform={({ id, name }) => ({*/}
          {/*    value: id,*/}
          {/*    label: name,*/}
          {/*  })}*/}
          {/*/>*/}
         
          <InputSelect
            options={accommodationPlacesCountOptions}
            name="AccommodationPlacesCount"
            icon={ImSortNumbericDesc}
            label={t('common.wybierzLiczbeOsob')}
            isLabelVisible={false}
          />
          <AutoSubmit />
        </form>
      </FormProvider>
    </Card>
  )
}

export default NoticesFilter
