import { API_URL } from '@/app/config/env';
import { route } from '@/app/router/urls/routes';
import axios from 'axios';
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router';
import FormAddShelterOffer from '../components/forms/Form_AddShelterOffer';

const query = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/create`,
    data,
  });
}

const ViewAddShelterOffer = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  
  const onSuccess = () => {
    navigate(route['notices.success']);
  }
    
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold mb-2 ml-2 text-2xl">{t("form.offerShelter")}</h2>
      <p className="mb-4 ml-2 text-gray-500">{t("formDescription.offerShelter")}</p>
      <div className="bg-white rounded-2xl p-4 flex flex-col justify-between leading-normal p-5">
        <div className="justify-start content-start text-left">
          <div>
            <div className=" bg-blue-500 text-white text-sm font-bold px-4 py-3 mb-5 border-4 border-blue-600" role="alert">
              <p className="font-bold text-2xl">UWAGA</p>
              <p className="text-sm">
                Przypominamy, że obowiązkiem każdego obywatela Ukrainy jest zalegalizowanie swojego pobytu ciągu 15 dni od przekroczenia granicy!
              </p>
            </div>
          </div>
            <FormAddShelterOffer
              query={query}
              onSuccess={onSuccess}
            />
        </div>
      </div>
    </div>
  );
};

export default ViewAddShelterOffer;