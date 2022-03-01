import { API_URL } from '@/app/config/env';
import { route } from '@/app/router/urls/routes';
import axios from 'axios';
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router';

const query = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/create`,
    data,
  });
}

const ViewAddNotice = ({title, description, formComponent: FormComponent}) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  
  const onSuccess = () => {
    navigate(route['notices.success']);
  }
    
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold mb-2 ml-2 text-2xl">{title}</h2>
      <p className="mb-4 ml-2 text-gray-500">{description}</p>
      <div className="bg-white rounded-2xl flex flex-col justify-between leading-normal p-5">
        <div className="justify-start content-start text-left">
          <div>
            <div className=" bg-blue-500 text-white text-sm font-bold px-4 py-3 mb-5 border-4 border-blue-600" role="alert">
              <p className="font-bold text-2xl">UWAGA</p>
              <p className="text-sm">
                Przypominamy, że obowiązkiem każdego obywatela Ukrainy jest zalegalizowanie swojego pobytu ciągu 15 dni od przekroczenia granicy!
              </p>
            </div>
          </div>
            {!!FormComponent && <FormComponent
              query={query}
              onSuccess={onSuccess}
            />}
        </div>
      </div>
    </div>
  );
};

export default ViewAddNotice;