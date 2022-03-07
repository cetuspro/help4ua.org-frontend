import * as yup from 'yup'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from 'react-hook-form'
import {
  FaUser,
  FaBed,
  FaClock,
  FaComment,
  FaUsers,
  FaEnvelope,
  FaMapPin,
  FaDoorClosed,
  FaCheck,
  FaFlag,
} from 'react-icons/fa'
import { InputText } from '@/components/form/Input_Text'
import { InputCheckbox } from '@/components/form/Input_Checkbox'
import { InputSelect } from '@/components/form/Input_Select'
import { InputTextarea } from '@/components/form/Input_Textarea'
import { useHookFormMutation } from '../../../../app/hooks/useHookFormMutation'
import { InputSubmit } from '@/components/form/Input_Submit'
import { HookFormError } from '@/components/form/HookFormError'
import { periodsEnum } from '@/app/config/enum/periods'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { useTranslation } from 'react-i18next'
import { InputRodo } from '@/components/form/Input_RODO'
import { useEffect, useMemo, useState } from 'react'
import { InputVoluntary } from '../../../../components/form/Input_Voluntary'
import { LanguageBlock } from '../../../../ua/LanguageBlock'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { getCountriesHelper } from '@/app/CRUD/region/getCountries'
import { DEFAULT_COUNTRY } from '@/app/config/countryCofig'
import InputLocationAutocomplete from '@/components/form/InputLocationAutocomplete'
import InputPhoneNumber from '@/components/form/Input_PhoneNumber'

const FormAddShelterOffer = ({ defaultValues, query, onSuccess, editMode = false }) => {
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
        roomCount: yup.string().nullable(),
        bedCount: yup.string().nullable(),
        accommodationPlacesCount: yup.string().required(),
        isAcceptedChild: yup.string().nullable(),
        isAcceptedAnimal: yup.string().nullable(),
        hasWashingMachine: yup.string().nullable(),
        isCatering: yup.string().nullable(),
        isDelivery: yup.string().nullable(),
        type: yup.number().default(1),
        acceptTerms: editMode ? yup.string() : yup.string().required(),
        period: yup.string().required(),
        language: yup.string().nullable(),
        isOfferFreeFlag: editMode
          ? yup.string()
          : yup.bool().oneOf([true], 'isOfferFreeFlag is a required field').required(),
        ukraineLang: yup.bool(),
        englishLang: yup.bool(),
        germanyLang: yup.bool(),
        polishLang: yup.bool(),
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
    phoneNumber: '+48',
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
            <InputPhoneNumber label={t('form.phoneNumber')} name="phoneNumber" required={true} />{' '}
          </div>
          <div>
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
          </div>
          <div>
            <InputText
              name="email"
              label={<span className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm ">{t('form.email')}</span>}
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
          <div>
            <InputSelect
              name="region"
              label={t('form.voivodeship')}
              options={voivodeshipsEnum((a) => a)}
              hidden={!showRegion}
              disabled={!showRegion}
              required={showRegion}
            />
          </div>
        </div>
        <h4 className="font-bold mt-8">{t('form.accommodation')}</h4>
        <div className="flex-grow border-t border-gray-300 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
          <div>
            <InputText
              name="roomCount"
              type="number"
              min={0}
              label={t('form.roomCount')}
              icon={FaDoorClosed}
            />
          </div>
          <div>
            <InputText
              name="bedCount"
              type="number"
              min={0}
              label={t('form.bedCount')}
              icon={FaBed}
            />
          </div>
          <div>
            <InputText
              name="accommodationPlacesCount"
              type="number"
              min={0}
              label={t('form.accommodationPlacesCount')}
              icon={FaUsers}
              required
            />
          </div>
          <div>
            <InputSelect
              name="period"
              label={t('form.period')}
              icon={FaClock}
              options={periodsEnum(t)}
              required
            />
          </div>
        </div>
        <h4 className="font-bold mt-8">Szczegóły</h4>
        <div className="flex-grow border-t border-gray-300 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
          <div>
            <InputCheckbox name="isAcceptedChild" label={t('form.hasAcceptedChild')} />
          </div>
          <div>
            <InputCheckbox name="isAcceptedAnimal" label={t('form.hasAcceptedAnimal')} />
          </div>
          <div>
            <InputCheckbox name="isCatering" label={t('form.hasCatering')} />
          </div>
          <div>
            <InputCheckbox name="isDelivery" label={t('form.hasDelivery')} />
          </div>
          <div>
            <InputCheckbox name="hasWashingMachine" label={t('form.hasWashingMachine')} />
          </div>
        </div>
        <LanguageBlock />
        <h4 className="font-bold mt-8">{t('form.extraInfo')}</h4>
        <div className="flex-grow border-t border-gray-300 mb-4" />
        <div>
          <InputTextarea name="description" label={t('form.description')} icon={FaComment} />
        </div>
        {!editMode && (
          <div className="flex ">
            <div className="w-full md:w-1/1 lg:w-1/1 xl:w-1/1 mt-8">
              <InputVoluntary />
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

export default FormAddShelterOffer
