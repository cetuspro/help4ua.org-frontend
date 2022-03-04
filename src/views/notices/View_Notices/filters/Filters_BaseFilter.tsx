import { useState, useEffect } from 'react'
import { useFilterForm } from '@/app/hooks/useFilterForm'
import * as yup from 'yup'
import Card from '@/components/common/Card'
import { AutoSubmit } from '@/components/form/AutoSubmit'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { InputText } from '@/components/form/Input_Text'
import { InputSelect } from '@/components/form/Input_Select'
import { ImSortNumbericDesc } from 'react-icons/im'
import { FormProvider } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import { getRegionsHelper } from '@/app/CRUD/region/getRegions'
import { BiMapPin } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

const ACCOMODATION_COUNT = 10

const pluck = (prop, obj) =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: obj[key]?.[prop] }), {})

const accommodationOptions = Array.from(
  { length: ACCOMODATION_COUNT },
  (_, index) => index + 1,
).map((x) => ({ label: `${x}`, value: x }))

const BaseFilter = ({ types = [], config }) => {
  const [filters, setFilters] = useState(null)
  const { methods, handleSubmit } = useFilterForm({
    schema: yup.object().shape(pluck('validator', config)),
  })
  const { t } = useTranslation()

  useEffect(() => {
    const hasFilters = (type) => types.includes(type)
    const filtered = Object.keys(config)
      .filter(hasFilters)
      .reduce((acc, key) => ({ ...acc, [key]: config[key] }), {})

    setFilters(filtered)
  }, [types])

  return types.length ? (
    <Card className="p-3">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:items-center">
          {filters && Object.values(filters).map(({ render }) => (render ? render({ t }) : null))}
          <AutoSubmit />
        </form>
      </FormProvider>
    </Card>
  ) : null
}

export default BaseFilter

export const FilterType = {
  SEARCH_PHRASE: 'searchPhrase',
  CITY: 'city',
  REGION: 'region',
  ACCOMODATION: 'accommodationPlacesCount',
} as const

export const config = {
  [FilterType.SEARCH_PHRASE]: {
    validator: yup.string().nullable(),
    render: ({ t }) => (
      <InputText
        key="searchPhrase"
        name="searchPhrase"
        label={t('common.szukaj')}
        icon={FaSearch}
        isLabelVisible={false}
      />
    ),
  },
  [FilterType.REGION]: {
    validator: yup.string().nullable(),
    render: ({ t }) => (
      <InputAsyncSelect
        {...getRegionsHelper}
        key="region"
        name="Region"
        icon={BiMapPin}
        label={t('common.wojewodztwo')}
        isLabelVisible={false}
        transform={({ id, name }) => ({
          value: id,
          label: name,
        })}
      />
    ),
  },
  [FilterType.CITY]: {
    validator: yup.string().nullable(),
  },
  [FilterType.ACCOMODATION]: {
    validator: yup.string().nullable(),
    render: ({ t }) => (
      <InputSelect
        key="accommodationPlacesCount"
        options={accommodationOptions}
        name="AccommodationPlacesCount"
        icon={ImSortNumbericDesc}
        label={t('common.wybierzLiczbeOsob')}
        isLabelVisible={false}
      />
    ),
  },
} as const
