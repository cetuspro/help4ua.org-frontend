import * as yup from 'yup'
import { useForm } from 'react-hook-form'
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
  FaDoorClosed, FaCheck,
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
import { useNavigate } from "react-router-dom";
import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'


const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  // cityName: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().email().nullable(),
  type: yup.number().default(20),
});

const query = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/create`,
    data,
  });
}
const mt = (a) => a;

const FormAddFindTransportOffer = () => {
  
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  let navigate = useNavigate();

  // console.log(methods.formState.errors)
  const handleSuccess = ({ data }) => {
    // data = id
    navigate(route['notices.success']);
  }

  const {t} = useTranslation();

  const mutation = useHookFormMutation(methods, query, {handleSuccess});
  
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold mb-4 ml-2 text-2xl">{t('form.offerTransport')}</h2>
      <p className="mb-4 ml-2 text-gray-500">{t("formDescription.offerShelter")}</p>
      <div className="bg-white rounded-2xl p-4 flex flex-col justify-between leading-normal p-5">
        <div className="justify-start content-start text-left">
          <FormProvider {...methods}>
            <form onSubmit={mutation.mutate}>
              <HookFormError/>
              <h4 className="font-bold">{t('form.personalInfo')}</h4>
              <div className="flex-grow border-t border-gray-300 mb-4"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                <div>
                  <InputText
                    name="name"
                    label={t('form.name')}
                    icon={FaUser}
                    required
                  />
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
                  <InputText
                    name="email"
                    label={t('form.email')}
                    icon={FaEnvelope}
                  />
                </div>
                {/*<div>*/}
                {/*  <InputText*/}
                {/*    name="cityName"*/}
                {/*    label={mt('Miejscowość')}*/}
                {/*    icon={FaMapPin}*/}
                {/*  />*/}
                {/*</div>*/}
              </div>
              <div>
                <InputTextarea
                  name="description"
                  label={t('form.description')}
                  icon={FaComment}
                />
              </div>
              <div className="flex justify-end pt-5">
                <InputSubmit
                  icon={<FaCheck/>}
                  value={t('form.send')}
                />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default FormAddFindTransportOffer;