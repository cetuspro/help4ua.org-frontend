import { withFilters } from '@/app/context/queries/Filters';
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults';
import { QueryHasResults } from '@/app/context/queries/QueryHasResults';
import { QueryProvider } from '@/app/context/queries/QueryProvider';
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useGetNotices } from '../../../app/CRUD/notices/getNotices';
import NoticesDataTable, { NoticesDataTable2 } from './dataTable/DataTable_Notices'
import { useTranslation } from 'react-i18next'
import usePagination from '@/app/hooks/usePagination'



const ViewNotices = ({
  columns,
  expandableRowsComponent,
  title,
  noticeType,
  filters:Filters,
  itemComponent:ItemComponent,
}) => {
  const query = useGetNotices(noticeType)
  const {t} = useTranslation()
  const breadcrumbItems = [
    {
      label: t('common.ogloszenia'),
    },
  ]
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-black-800 dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
        {title}
      </h1>
      <Filters />
      <div className="flex flex-col lg:flex-row gap-6 mt-4 items-start">
        <QueryProvider {...query}>
          <QueryHasNoResults>
            <div className="bg-white p-8 rounded-xl grow">
              <p className="text-lg text-gray-500 text-center mb-4">Brak ogłoszeń</p>
            </div>
          </QueryHasNoResults>
          <QueryHasResults>
            <div className="flex flex-col lg:flex-row gap-6 mt-4 items-start max-w-full">
              {!ItemComponent && (
                <div className="bg-white p-4 rounded-lg overflow-x-auto w-full">
                  {columns?.map && typeof expandableRowsComponent !== 'undefined' ? (
                    <NoticesDataTable2
                      columns={columns}
                      expandableRowsComponent={expandableRowsComponent}
                    />
                  ) : (
                    <NoticesDataTable />
                  )}
                </div>
              )}
              <div className="p-5">
                {ItemComponent && (
                  <>
                    {query.data?.map && query.data.map(item => (
                      <ItemComponent
                        key={item.id}
                        {...item}
                      />
                    ))}
                    <ItemComponentPagination/>
                  </>
                )}
              </div>
            </div>
          </QueryHasResults>
        </QueryProvider>
      </div>
    </>
  );
};

const ItemComponentPagination = () => {
  const pagination = usePagination()
  return (
    <div>
      
    </div>
  );
};

export default withFilters(ViewNotices, {
  params: ['SearchPhrase, PageNumber, PageSize, region, City, accommodationPlacesCount'],
})
