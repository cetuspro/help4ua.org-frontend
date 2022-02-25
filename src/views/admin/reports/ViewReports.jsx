import { useGetAdminReports } from "../../../app/CRUD/reports/getAdminReports"
import Card from '@/components/common/Card'
import { useMemo, useState } from 'react'
import { InputTextPure } from '@/components/form/Input_Text.pure'
import { BiSearch } from 'react-icons/bi'
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults'
import { QueryHasResults } from '@/app/context/queries/QueryHasResults'
import { InputSelectPure } from '@/components/form/Input_Select.pure'
import { useGetReportStatuses } from '../../../app/CRUD/reports/getReportStatuses'
import { useGetReportTypes } from '../../../app/CRUD/reports/getReportTypes'
import { optionsFromEnum } from '@/app/utils/optionsFromEnum'
import { useDebounce } from "use-debounce"
import { QueryProvider } from "@/app/context/queries/QueryProvider"
import ReportList from "../components/ReportList"
import { QueryIsSuccess } from "@/app/context/queries/QueryIsSuccess"
import { QueryErrorsDefault } from "@/app/context/queries/defaults/QueryErrorsDefault"

const ViewReports = () => {
  const [searchString, setSearchString] = useState('')
  const [debouncedSearchString] = useDebounce(searchString, 1000)
  const [statusFilter, setStatusFilter] = useState(0)
  const [typeFilter, setTypeFilter] = useState(0)
  const reportsData = useGetAdminReports(debouncedSearchString, statusFilter, typeFilter)

  const {data: reportStatuses} = useGetReportStatuses();
  const {data: reportTypes} =  useGetReportTypes();

  const reportStatusesOptions = useMemo(() => optionsFromEnum(reportStatuses, "Wybierz status"), [reportStatuses])
  const reportTypesOptions = useMemo(() => optionsFromEnum(reportTypes, "Wybierz typ"), [reportTypes])

  return (
    <QueryProvider {...reportsData}>
      <Card className="p-0">
        <div className="p-5 flex flex-col md:flex-row justify-end md:items-center gap-4">
          <InputTextPure
            value={searchString}
            onChange={setSearchString}
            icon={BiSearch}
            placeholder="Szukaj zgłoszenia"
          />
          <InputSelectPure
            options={reportTypesOptions}
            value={typeFilter}
            onChange={({value}) => setTypeFilter(value)}
            className="w-full md:w-48"
          />
          <InputSelectPure
            options={reportStatusesOptions}
            value={statusFilter}
            onChange={({value}) => setStatusFilter(value)}
            className="w-full md:w-48"
          />
        </div>
        <QueryIsSuccess>
          <QueryHasResults>
            <ReportList/>
          </QueryHasResults>
          <QueryHasNoResults>
            <div className="text-center py-10 px-4">Brak zgłoszeń</div>
          </QueryHasNoResults>
        </QueryIsSuccess>
        <QueryErrorsDefault/>
      </Card>
    </QueryProvider>
  )
}

export default ViewReports