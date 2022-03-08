import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import usePagination from '@/app/hooks/usePagination'
import DataTableList from '@/components/common/Datatable'

const NoticesDataTable = ({ styles = {}, config = {}, columns, expandableRowsComponent }) => {
  const { data } = useQueryContext()
  const pagination = usePagination()
  const [searchParams] = useSearchParams()

  return (
    <DataTableList
      columns={columns}
      data={data}
      pointerOnHover={!!expandableRowsComponent}
      highlightOnHover
      pagination={pagination}
      paginationPerPage={searchParams.get('pageSize') || '50'}
      paginationComponentOptions={{
        noRowsPerPage: true,
      }}
      expandableRows={!!expandableRowsComponent}
      expandableRowsComponent={expandableRowsComponent}
      expandOnRowClicked={!!expandableRowsComponent}
      styles={styles}
      {...config}
    />
  )
}

export default memo(NoticesDataTable)
