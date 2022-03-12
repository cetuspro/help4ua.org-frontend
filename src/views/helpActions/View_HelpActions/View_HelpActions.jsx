import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { MdArrowBackIosNew } from 'react-icons/md'
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useGetHelpActions } from '@/app/CRUD/helpActions/getHelpActions'
import Button from '@/components/common/Button'
import DefaultNotice from '@/views/notices/components/common/DefaultNotice'
import { listConfig, listStyles } from '@/app/config/noticeList'
import NoticesDataTable from '@/views/notices/View_Notices/DataTable_Notices'

const ViewHelpActions = () => {
  const query = useGetHelpActions()
  const { t } = useTranslation()
  const breadcrumbItems = [
    { url: route['index'], label: t('common.stronaglowna') },
    { label: t('tiles.helpActions') },
  ]

  return (
    <>
      <Button size="small" className="gap-2 mb-2 inline-flex" to={route['homepage.notices']}>
        <MdArrowBackIosNew />
        {t('common.back')}
      </Button>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-black-800 dark:text-gray-100 text-2xl sm:text-5xl md:text-4xl font-bold mb-8 md:mb-12">
        {t('tiles.helpActions')}
      </h1>

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
                  styles={listStyles}
                  config={listConfig}
                  expandableRowsComponent={DefaultNotice}
                />
              </div>
            </div>
          </QueryHasResults>
        </QueryProvider>
      </div>
    </>
  )
}

export default memo(ViewHelpActions)
