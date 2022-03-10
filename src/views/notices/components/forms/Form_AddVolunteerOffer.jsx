import * as yup from 'yup'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from 'react-hook-form'
import { FaUser, FaComment, FaEnvelope, FaMapPin, FaCheck, FaFlag } from 'react-icons/fa'
import { InputText } from '@/components/form/Input_Text'
import { InputTextarea } from '@/components/form/Input_Textarea'
import { useHookFormMutation } from '../../../../app/hooks/useHookFormMutation'
import { InputSubmit } from '@/components/form/Input_Submit'
import { HookFormError } from '@/components/form/HookFormError'
import { useTranslation } from 'react-i18next'
import { InputRodo } from '@/components/form/Input_RODO'
import { useEffect, useMemo, useState } from 'react'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { InputSelect } from '@/components/form/Input_Select'
import { getCountriesHelper } from '@/app/CRUD/region/getCountries'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { DEFAULT_COUNTRY } from '@/app/config/countryConfig'
import InputLocationAutocomplete from '@/components/form/InputLocationAutocomplete'
import InputPhoneNumber from '@/components/form/Input_PhoneNumber'

const FormAddVolunteerOffer = ({ defaultValues, query, onSuccess, editMode = false }) => {
  const [showRegion, setShowRegion] = useState(false)
  const schema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(),
        description: yup.string().nullable(),
        cityId: yup.number().nullable(),
        cityName: yup.string(),
        postalCodeId: yup.number().nullable(),
        latitude: yup.number(),
        longitude: yup.number(),
        location: yup.object().required(),
        countryId: yup.number().required(),
        region: showRegion ? yup.number().required() : yup.string().nullable(),
        phoneNumber: yup.string().required(),
        email: yup.string().email().nullable(),
        type: yup.number().default(100),
        acceptTerms: editMode ? yup.string() : yup.string().required(),
        language: yup.string().nullable(),
      }),
    [editMode, showRegion],
  )

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  })

  const watched = useWatch({
    control: methods.control,
    name: 'countryId',
  })

  useEffect(() => {
    const countryId = methods.getValues()?.countryId
    setShowRegion(countryId === DEFAULT_COUNTRY)
  }, [watched])

  useEffect(() => {
    methods.reset(defaultValues)
  }, [defaultValues])

  const { t } = useTranslation()
  const mutation = useHookFormMutation(methods, query, { onSuccess })

  return (
    <FormProvider {...methods}>
      <form onSubmit={mutation.mutate}>
        <HookFormError />
        <h4 className="font-bold">{t('form.personalInfo')}</h4>
        <div className="flex-grow border-t border-gray-300 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
          <div>
            <InputText
              name="name"
              label={t('form.nameLabel')}
              placeholder={t('form.name')}
              icon={FaUser}
              required
            />
          </div>
          <div>
            <InputPhoneNumber label={t('form.phoneNumber')} name="phoneNumber" required={true} />
          </div>
          <InputAsyncSelect
            {...getCountriesHelper}
            name="countryId"
            icon={FaFlag}
            label={t('form.country')}
            isLabelVisible
            transform={({ name, value }) => ({
              value: value,
              label: name,
            })}
            required
          />
          <div>
            <InputText
              name="email"
              label={
                <span className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                  {t('form.email')}
                </span>
              }
              placeholder={t('form.email')}
              icon={FaEnvelope}
            />
          </div>
          <div>
            <InputLocationAutocomplete
              name="location"
              label={t('form.locationLabel')}
              placeholder={t('form.location')}
              required
              icon={FaMapPin}
              components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            />
          </div>
          <InputSelect
            name="region"
            label={t('form.voivodeship')}
            options={voivodeshipsEnum((a) => a)}
            hidden={!showRegion}
            disabled={!showRegion}
            required={!showRegion}
          />
        </div>
        <div>
          <InputTextarea name="description" label={t('form.description')} icon={FaComment} />
        </div>
        {!editMode && (
          <div className="flex ">
            <div className="w-full md:w-1/1 lg:w-1/1 xl:w-1/1 mt-8">
              <InputRodo />
            </div>
          </div>
        )}
        <div className="flex justify-end pt-5">
          <InputSubmit icon={<FaCheck />} value={t(editMode ? 'form.save' : 'form.send')} />
        </div>
      </form>
    </FormProvider>
  )
}

export default FormAddVolunteerOffer
