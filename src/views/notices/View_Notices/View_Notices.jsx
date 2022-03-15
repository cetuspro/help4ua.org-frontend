import { useTranslation } from 'react-i18next'
import { MdArrowBackIosNew } from 'react-icons/md'
import { withFilters } from '@/app/context/queries/Filters'
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useGetNotices } from '../../../app/CRUD/notices/getNotices'
import NoticesDataTable from './DataTable_Notices'
import Button from '@/components/common/Button'
import { route } from '@/app/router/urls/routes'
import { listConfig, listStyles } from '@/app/config/noticeList'
import { NOTICE_COMPONENT, NOTICE_FILTER, NOTICE_TITLE } from '@/views/notices/config'

const ViewNotices = ({ styles = listStyles, config = listConfig, noticeType }) => {
  const query = useGetNotices({ noticeType: noticeType === 'all' ? null : noticeType })
  const { t } = useTranslation()
  const breadcrumbItems = [{ label: t('common.ogloszenia') }]
  const FiltersComponent = NOTICE_FILTER[noticeType]
  const noticeComponent = NOTICE_COMPONENT[noticeType]
  const title = t(NOTICE_TITLE[noticeType])

  return (
    <>
      <Button size="small" className="gap-2 mb-2 inline-flex" to={route['homepage.notices']}>
        <MdArrowBackIosNew />
        {t('common.back')}
      </Button>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-black-800 dark:text-gray-100 text-2xl sm:text-5xl md:text-4xl font-bold mb-8 md:mb-12">
        {title}
      </h1>
      <FiltersComponent />
      <div>
        <QueryProvider {...query}>
          <QueryHasNoResults>
            <div className="bg-white p-8 rounded-xl grow">
              <p className="text-lg text-gray-500 text-center mb-4">{t('common.noData')}</p>
            </div>
          </QueryHasNoResults>
          <QueryHasResults>
            <div className="flex flex-col lg:flex-row gap-6 mt-4 items-start max-w-full">
              <div className="overflow-x-auto w-full">
                <NoticesDataTable
                  styles={styles}
                  config={config}
                  expandableRowsComponent={noticeComponent}
                />
              </div>
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
