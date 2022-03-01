import { animalsEnum } from '@/app/config/enum/animals'
import { periodsEnum } from '@/app/config/enum/periods'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { API_URL } from '@/app/config/env'
import { route } from '@/app/router/urls/routes'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaMapPin,
  FaPaw,
  FaPhone,
  FaUser,
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

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  region: yup.number().required(),
  cityName: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().email().nullable(),

  animalType: yup.string().required(),
  isDelivery: yup.string(),
  arrivalDate: yup.string().required(),

  type: yup.number().default(62),
  acceptTerms: yup.string().required(),
  period: yup.string().required(),
})

const query = (data) => {
  console.log(data)
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/create`,
    data,
  })
}
const mt = (a) => a

const FormAddFindTemporaryAnimalHome = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  })
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
                  <p className="font-bold text-2xl">UWAGA</p>
                  <p className="text-sm">
                    Przypominamy, że obowiązkiem każdego obywatela Ukrainy jest zalegalizowanie
                    swojego pobytu ciągu 15 dni od przekroczenia granicy!
                  </p>
                </div>
              </div>
              <HookFormError />
              <h4 className="font-bold">{t('form.personalInfo')}</h4>
              <div className="flex-grow border-t border-gray-300 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                <div>
                  <InputText name="name" label={t('form.name')} icon={FaUser} required />
                </div>
                <div>
                  <InputText
                    name="phoneNumber"
                    label={t('form.phoneNumber')}
                    icon={FaPhone}
                    required
                  />
                </div>
                <div>
                  <InputText name="email" label={t('form.email')} icon={FaEnvelope} />
                </div>
                <div>
                  <InputSelect
                    name="region"
                    label={t('form.voivodeship')}
                    options={voivodeshipsEnum(mt)}
                    required
                  />
                </div>
                <div>
                  <InputText name="cityName" label={t('form.cityName')} icon={FaMapPin} required />
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
                    name="arrivalDate"
                    label={t('form.arrival')}
                    icon={FaCalendarAlt}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mt-8">
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
