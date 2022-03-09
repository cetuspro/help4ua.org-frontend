import { useState, useEffect } from 'react'
import { useFilterForm } from '@/app/hooks/useFilterForm'
import * as yup from 'yup'
import Card from '@/components/common/Card'
import { AutoSubmit } from '@/components/form/AutoSubmit'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { InputCheckbox } from '@/components/form/Input_Checkbox'
import { InputText } from '@/components/form/Input_Text'
import { InputSelect } from '@/components/form/Input_Select'
import { ImSortNumbericDesc } from 'react-icons/im'
import { FormProvider, useWatch } from 'react-hook-form'
import { FaSearch, FaFlag } from 'react-icons/fa'
import { getRegionsHelper } from '@/app/CRUD/region/getRegions'
import { getCountriesHelper } from '@/app/CRUD/region/getCountries'
import { BiMapPin } from 'react-icons/bi'
import { useTranslation, Trans } from 'react-i18next'

const ACCOMODATION_COUNT = 10
const POLAND_COUNTRY_ID = 1
export const ALL_COUNTRIES_ITEM = {
  value: null,
  label: <Trans i18nKey={"common.allCountries"} />
}

const pluck = (prop, obj) =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: obj[key]?.[prop] }), {})

const accommodationOptions = Array.from(
  { length: ACCOMODATION_COUNT },
  (_, index) => index + 1,
).map((x) => ({ label: `${x}`, value: x }))

const BaseFilter = ({ types = [], config }) => {
  const [filters, setFilters] = useState(null)
  const { methods, handleSubmit } = useFilterForm({
    schema: yup.object().shape(pluck('validator', config)).default(pluck('default', config)),
  })
  const { t } = useTranslation()

  const watchedCountryId = useWatch({
    control: methods.control,
    name: 'CountryId',
  })

  useEffect(() => {
    const hasFilters = (type) => types.includes(type)
    const filtered = Object.keys(config)
      .filter(hasFilters)
      .filter((filterItem) => {
        if (watchedCountryId !== POLAND_COUNTRY_ID && filterItem === FilterType.REGION) {
          methods.setValue('Region', null)
          return undefined
        }
        return filterItem
      })
      .reduce((acc, key) => ({ ...acc, [key]: config[key] }), {})

    setFilters(filtered)
  }, [types, watchedCountryId])

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
  COUNTRY: 'CountryId',
  ACCEPT_SMALL_CHILDREN: 'acceptSmallChildren',
  ACCEPT_PETS: 'acceptPets'
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
  [FilterType.COUNTRY]: {
    validator: yup.string().nullable(),
    default: ALL_COUNTRIES_ITEM.value,
    render: ({ t }) => (
      <InputAsyncSelect
        {...getCountriesHelper}
        key="country"
        name="CountryId"
        icon={FaFlag}
        label={t('form.country')}
        isLabelVisible={false}
        additionalOptions={[ALL_COUNTRIES_ITEM]}
        transform={({ value, name }) => ({
          value: value,
          label: name,
        })}
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
  [FilterType.ACCEPT_SMALL_CHILDREN]: {
    validator: yup.bool(),
    render: ({ t }) => (
      <InputCheckbox
        key="hasAcceptedChild"
        name="hasAcceptedChild"
        label={t("form.hasAcceptedChild")}
      />
    ),
  },
  [FilterType.ACCEPT_PETS]: {
    validator: yup.bool(),
    render: ({ t }) => (
      <InputCheckbox
        key="hasAcceptedAnimal"
        name="hasAcceptedAnimal"
        label={t("form.hasAcceptedAnimal")}
      />
    ),
  },
} as const
