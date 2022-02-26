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


const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  cityName: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().email().required(),
  accommodationPlacesCount: yup.string().required(),
  isAcceptedChild: yup.string(),
  isAcceptedAnimal: yup.string(),
  hasWashingMachine: yup.string(),
  isCatering: yup.string(),
  isDelivery: yup.string(),
  type: yup.number().default(10),
  
  // address: yup.string().required(),
  period: yup.string().required(), //
});

const query = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/create`,
    data,
  });
}
const mt = (a) => a;

const FormAddFindShelter = () => {
  
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  let navigate = useNavigate();

  // console.log(methods.formState.errors)
  const handleSuccess = ({ data }) => {
    // data = id
    navigate(route['notices.success']);
  }
  
  const mutation = useHookFormMutation(methods, query, {handleSuccess});
  
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold mb-4 ml-2 text-2xl">Szukam schronienia</h2>
      <div className="bg-white rounded-2xl p-4 flex flex-col justify-between leading-normal p-5">
        <div className="justify-start content-start text-left">
          <FormProvider {...methods}>
            <form onSubmit={mutation.mutate}>
              <HookFormError/>
              <h4 className="font-bold">Dane osobowe</h4>
              <div className="flex-grow border-t border-gray-300 mb-4"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                <div>
                  <InputText
                    name="name"
                    label={mt('Imię i Nazwisko')}
                    icon={FaUser}
                    required
                  />
                </div>
                <div>
                  <InputText
                    name="phoneNumber"
                    label={mt('Numer telefonu')}
                    icon={FaPhone}
                    required
                  />
                </div>
                <div>
                  <InputText
                    name="email"
                    label={mt('Adres email')}
                    icon={FaEnvelope}
                    required
                  />
                </div>
                <div>
                  <InputText
                    name="cityName"
                    label={mt('Miejscowość')}
                    icon={FaMapPin}
                    required
                  />
                </div>
              </div>
              <h4 className="font-bold mt-8">Zakwaterowanie</h4>
              <div className="flex-grow border-t border-gray-300 mb-4"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                <div>
                  <InputText
                    name="accommodationPlacesCount"
                    type="number"
                    label={mt('Liczba osób')}
                    icon={FaUsers}
                    required
                  />
                </div>
                <div>
                  <InputSelect
                    name="period"
                    label={mt('Na jak długo')}
                    icon={FaClock}
                    options={[
                      {value: 1, label: 'Do ustalenia'},
                      {value: 10, label: '1 tydzień'},
                      {value: 11, label: '2 tygodnie'},
                      {value: 12, label: '3 tygodnie'},
                      {value: 13, label: '1 miesiąc'},
                      {value: 14, label: '2 miesiące'},
                      {value: 15, label: '3 miesiące'},
                      {value: 60, label: 'Dłużej niż 3 miesiące'},
                    ]}
                    required
                  />
                </div>
              </div>
              <h4 className="font-bold mt-8">Szczegóły</h4>
              <div className="flex-grow border-t border-gray-300 mb-4"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                <div>
                  <InputCheckbox
                    name="isAcceptedChild"
                    label={mt('Jestem z małym dzieckiem')}
                  />
                </div>
                <div>
                  <InputCheckbox
                    name="isAcceptedAnimal"
                    label={mt('Jestem ze zwierzakiem')}
                  />
                </div>
                <div>
                  <InputCheckbox
                    name="isCatering"
                    label={mt('Potrzebuję wyżywienia')}
                  />
                </div>
                <div>
                  <InputCheckbox
                    name="isDelivery"
                    label={mt('Potrzebuję transportu')}
                  />
                </div>
              </div>
              <h4 className="font-bold mt-8">Dodatkowe informacje</h4>
              <div className="flex-grow border-t border-gray-300 mb-4"/>
              <div>
                <InputTextarea
                  name="description"
                  label={mt('Opis')}
                  icon={FaComment}
                />
              </div>
              <div className="flex justify-end pt-5">
                <InputSubmit
                  icon={<FaCheck/>}
                  value={mt('Wyślij')}
                />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default FormAddFindShelter;