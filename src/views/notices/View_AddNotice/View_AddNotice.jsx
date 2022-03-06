import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { DEFAULT_COUNTRY } from '@/app/config/countryCofig'
import { addNotice } from '@/app/CRUD/notices/addNotice'

const ViewAddNotice = ({ title, description, formComponent: FormComponent, type }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const { language } = useSelector((state) => state?.language)
  const onSuccess = () => {
    navigate(route['notices.success'])
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold mb-2 ml-2 text-2xl">{title}</h2>
      <p className="mb-4 ml-2 text-gray-500">{description}</p>
      <div className="bg-white rounded-2xl flex flex-col justify-between leading-normal p-5">
        <div className="justify-start content-start text-left">
          <div>
            <div
              className=" bg-blue-500 text-white text-sm font-bold px-4 py-3 mb-5 border-4 border-blue-600"
              role="alert">
              <p className="font-bold text-2xl">{t('form.alertTitle')}</p>
              <p className="text-sm">{t('form.alertContent')}</p>
            </div>
          </div>
          {!!FormComponent && (
            <FormComponent
              query={addNotice}
              onSuccess={onSuccess}
              defaultValues={
                type
                  ? { language, countryId: DEFAULT_COUNTRY, type }
                  : { language, countryId: DEFAULT_COUNTRY }
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewAddNotice
