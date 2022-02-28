import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import Button from '@/components/common/Button'
import { useTranslation } from 'react-i18next'
import { useGetHelpPoints } from '../../../app/CRUD/helpPoints/getHelpPoints'
import HelpPointsDataTable from './DataTable/DataTable_HelpPoints'

const breadcrumbItems = [
  {
    url: route['index'],
    label: 'Strona główna',
  },
  {
    label: 'Punkty pomocy',
  },
]

const ViewHelpPoints = () => {
  const query = useGetHelpPoints()
  console.log(query.data)
  const { t } = useTranslation()

  return (
    <div className="container mx-auto py-8">
      <Breadcrumb items={breadcrumbItems}>
        <Button to={route['helpPoints.map']}>{t('tiles.seeMap')}</Button>
      </Breadcrumb>
      <h1 className="text-black-800 dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
        Punkty pomocy
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 mt-4 items-start">
        <QueryProvider {...query}>
          <QueryHasNoResults>
            <div className="bg-white p-8 rounded-xl grow">
              <p className="text-lg text-gray-500 text-center mb-4">Brak punktów pomocy</p>
            </div>
          </QueryHasNoResults>
          <QueryHasResults>
            <div className="bg-white p-4 rounded-lg overflow-x-auto w-full">
              <HelpPointsDataTable />
            </div>
          </QueryHasResults>
        </QueryProvider>
      </div>
    </div>
  )
}

export default ViewHelpPoints
