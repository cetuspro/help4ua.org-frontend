import { useMemo } from 'react'
import DataTable from 'react-data-table-component'

const defaultStyles = {
  headCells: {
    style: {
      textTransform: 'uppercase',
      paddingLeft: '15px',
      paddingRight: '15px',
      fontWeight: 'bold',
      color: '#4b5563',
    },
  },
  headRow: {
    style: {
      borderTop: '1px solid #e5e7eb',
    },
  },
}

const DataTableList = ({pagination, styles, ...rest}) => {
  const customStyles = useMemo(() => ({ ...defaultStyles, ...styles }), [styles])
  const paginationProps = useMemo(() => pagination ? {
    pagination: true,
    paginationServer: true,
    paginationRowsPerPageOptions: [25, 50, 100],
    onChangeRowsPerPage: pagination.setPageSize,
    paginationTotalRows: pagination.totalCount,
    onChangePage: pagination.setPage,
    paginationDefaultPage: pagination.pageIndex,
  } : {}, [pagination]) 

  return (
    <DataTable
      customStyles={customStyles}
      paginationComponentOptions={{ rowsPerPageText: 'Ilość na stronę:', rangeSeparatorText: 'na' }}
      {...paginationProps}
      {...rest}
    />
  )
}

export default DataTableList
