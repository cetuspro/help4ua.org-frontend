import { withFilters } from '@/app/context/queries/Filters';
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults';
import { QueryHasResults } from '@/app/context/queries/QueryHasResults';
import { QueryProvider } from '@/app/context/queries/QueryProvider';
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useGetNotices } from '../../../app/CRUD/notices/getNotices';
import NoticesDataTable, { NoticesDataTable2 } from './dataTable/DataTable_Notices'
import NoticesFilter from './filters/Filters_Notices';

const breadcrumbItems = [
  {
    label: 'Ogłoszenia',
  },
]

const ViewNotices = ({columns, expandableRowsComponent, title}) => {
  const query = useGetNotices()

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-black-800 dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
        {title}
      </h1>
      <NoticesFilter />
      <div className="flex flex-col lg:flex-row gap-6 mt-4 items-start">
        <QueryProvider {...query}>
          <QueryHasNoResults>
            <div className="bg-white p-8 rounded-xl grow">
              <p className="text-lg text-gray-500 text-center mb-4">Brak ogłoszeń</p>
            </div>
          </QueryHasNoResults>
          <QueryHasResults>
            <div className="bg-white p-4 rounded-lg overflow-x-auto w-full">
              {columns && expandableRowsComponent ? (
                <NoticesDataTable2
                  columns={columns}
                  expandableRowsComponent={expandableRowsComponent}
                />
              ) : (
                <NoticesDataTable />
              )}
            </div>
          </QueryHasResults>
        </QueryProvider>
      </div>
    </>
  )
}

export default withFilters(ViewNotices, {
  params: ['SearchPhrase, PageNumber, PageSize, region, City, accommodationPlacesCount'],
})
