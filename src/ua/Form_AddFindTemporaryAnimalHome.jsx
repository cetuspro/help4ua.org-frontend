import { useState, useMemo, useEffect } from 'react'
import { animalsEnum } from '@/app/config/enum/animals'
import { periodsEnum } from '@/app/config/enum/periods'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { route } from '@/app/router/urls/routes'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaMapPin,
  FaPaw,
  FaUser,
  FaFlag,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useHookFormMutation } from '../app/hooks/useHookFormMutation'
import { HookFormError } from '../components/form/HookFormError'
import { InputCheckbox } from '../components/form/Input_Checkbox'
import { InputRodo } from '../components/form/Input_RODO'
import { InputSelect } from '../components/form/Input_Select'
import { InputSubmit } from '../components/form/Input_Submit'
import { InputText } from '../components/form/Input_Text'
import { InputTextarea } from '../components/form/Input_Textarea'
import { LanguageBlock } from './LanguageBlock'
import { InputVoluntary } from '../components/form/Input_Voluntary'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { getCountriesHelper } from '@/app/CRUD/region/getCountries'
import { DEFAULT_COUNTRY } from '@/app/config/countryCofig'
import InputLocationAutocomplete from '@/components/form/InputLocationAutocomplete'
import { addNotice } from '@/app/CRUD/notices/addNotice'
import InputPhoneNumber from '@/components/form/Input_PhoneNumber'

const FormAddFindTemporaryAnimalHome = () => {
  const [showRegion, setShowRegion] = useState(false)
  const schema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(),
        description: yup.string(),
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
        animalType: yup.string().required(),
        isDelivery: yup.string(),
        arrivalDateStr: yup.string().required(),
        type: yup.number().default(62),
        acceptTerms: yup.string().required(),
        period: yup.string().required(),
        isOfferFreeFlag: yup
          .bool()
          .oneOf([true], 'voluntaryHelpCheckbox is a required field')
          .required(),
      }),
    [showRegion],
  )
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      countryId: DEFAULT_COUNTRY,
    },
  })

  const watched = useWatch({
    control: methods.control,
    name: 'countryId',
  })

  useEffect(() => {
    const countryId = methods.getValues()?.countryId
    setShowRegion(countryId === DEFAULT_COUNTRY)
  }, [watched])

  let navigate = useNavigate()

  const handleSuccess = () => {
    navigate(route['notices.success'])
  }

  const { t } = useTranslation()
  const mutation = useHookFormMutation(methods, addNotice, { handleSuccess })

  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold mb-2 ml-2 text-2xl">{t('form.lfTemporaryAnimalHome')}</h2>
      <p className="mb-4 ml-2 text-gray-500">{t('formDescription.lfTemporaryAnimalHome')}</p>
      <div className="bg-white rounded-2xl p-4 flex flex-col justify-between leading-normal p-5">
        <div className="justify-start content-start text-left">
          <FormProvider {...methods}>
            <form onSubmit={mutation.mutate}>
              <div>
                <div
                  className=" bg-blue-500 text-white text-sm font-bold px-4 py-3 mb-5 border-4 border-blue-600"
                  role="alert">
                  <p className="font-bold text-2xl">{t('form.alertTitle')}</p>
                  <p className="text-sm">{t('form.alertContent')}</p>
                </div>
              </div>
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
                  <InputPhoneNumber
                    label={t('form.phoneNumber')}
                    name="phoneNumber"
                    required={true}
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
                  <InputText
                    name="email"
                    label={<span className="md:block md:mb-4 xl:mb-0">{t('form.email')}</span>}
                    placeholder={t('form.email')}
                    icon={FaEnvelope}
                  />
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
                  <InputSelect
                    name="animalType"
                    label={t('form.whatAnimalType')}
                    icon={FaPaw}
                    options={animalsEnum(t)}
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
              <h4 className="font-bold mt-8">{t('form.details')}</h4>
              <div className="flex-grow border-t border-gray-300 mb-4" />

              <div>
                <InputTextarea name="description" label={t('form.animalDetails')} required />
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                <div>
                  <InputCheckbox name="isDelivery" label={t('form.animalsTransportNeed')} />
                </div>

                <div>
                  <InputText
                    name="arrivalDateStr"
                    label={t('form.arrival')}
                    icon={FaCalendarAlt}
                    required
                  />
                </div>
              </div>
              <LanguageBlock />
              <div className="flex justify-end">
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mt-8">
                  <InputVoluntary />
                  <InputRodo />
                </div>
              </div>
              <div className="flex justify-end pt-5">
                <InputSubmit icon={<FaCheck />} value={t('form.send')} />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default FormAddFindTemporaryAnimalHome
