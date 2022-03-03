import { useState, useMemo, useEffect } from 'react'
import * as yup from 'yup'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from 'react-hook-form'
import {
  FaUser,
  FaPhone,
  FaBed,
  FaSquare,
  FaClock,
  FaComment,
  FaUsers,
  FaEnvelope,
  FaMapPin,
  FaDoorClosed,
  FaCheck,
  FaFlag,
} from 'react-icons/fa'
import { InputText } from '../components/form/Input_Text'
import { InputCheckbox } from '../components/form/Input_Checkbox'
import { InputSelect } from '../components/form/Input_Select'
import { InputTextarea } from '../components/form/Input_Textarea'
import { useHookFormMutation } from '../app/hooks/useHookFormMutation'
import axios from 'axios'
import { API_URL } from '@/app/config/env'
import { InputSubmit } from '../components/form/Input_Submit'
import { HookFormError } from '../components/form/HookFormError'
import { useNavigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'
import { InputRodo } from '../components/form/Input_RODO'
import { useSelector } from 'react-redux'
import { InputVoluntary } from '../components/form/Input_Voluntary'
import { LanguageBlock } from './LanguageBlock'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import { getCountriesHelper } from '@/app/CRUD/region/getCountries'
import { DEFAULT_COUNTRY } from '@/app/config/countryCofig'

const query = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/create`,
    data,
  })
}
const mt = (a) => a

const FormAddFindTranslationOffer = () => {
  const { language } = useSelector((state) => state?.language)
  const [showRegion, setShowRegion] = useState(false)
  const schema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(),
        description: yup.string(),
        cityName: yup.string().required(),
        countryId: yup.number().required(),
        region: showRegion ? yup.number().required() : yup.string().nullable(),
        phoneNumber: yup.string().required(),
        email: yup.string().email().nullable(),
        type: yup.number().default(32),
        acceptTerms: yup.string().required(),
        language: yup.string().nullable(),
        isOfferFreeFlag: yup.bool().oneOf([true], 'isOfferFreeFlag is a required field').required(),
        ukraineLang: yup.bool(),
        englishLang: yup.bool(),
        germanyLang: yup.bool(),
        polishLang: yup.bool(),
      }),
    [showRegion],
  )
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      language,
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

  // console.log(methods.formState.errors)
  const handleSuccess = ({ data }) => {
    // data = id
    navigate(route['notices.success'])
  }

  const { t } = useTranslation()

  const mutation = useHookFormMutation(methods, query, { handleSuccess })

  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold mb-2 ml-2 text-2xl">{t('form.offerFindTranslations')}</h2>
      <p className="mb-4 ml-2 text-gray-500">{t('formDescription.lfTranslations')}</p>
      <div className="bg-white rounded-2xl flex flex-col justify-between leading-normal p-5">
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
                  <InputText name="name" label={t('form.name')} icon={FaUser} />
                </div>
                <div>
                  <InputText name="phoneNumber" label={t('form.phoneNumber')} icon={FaPhone} />
                </div>
                <div>
                  <InputText name="email" label={t('form.email')} icon={FaEnvelope} />
                </div>
                <div>
                  <InputText name="cityName" label={t('form.cityName')} icon={FaMapPin} />
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
              <LanguageBlock />
              <div>
                <InputTextarea name="description" label={t('form.description')} icon={FaComment} />
              </div>
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

export default FormAddFindTranslationOffer
