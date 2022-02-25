import { QueryHasNoResults } from "@/app/context/queries/QueryHasNoResults";
import { QueryHasResults } from "@/app/context/queries/QueryHasResults";
import { QueryIsSuccess } from "@/app/context/queries/QueryIsSuccess";
import { QueryProvider } from "@/app/context/queries/QueryProvider";
import { InputTextPure } from "@/components/form/Input_Text.pure";
import Card from "@/components/common/Card";
import { useGetAdminPendingReports } from "../../../app/CRUD/reports/getAdminPendingReports";
import PendingReportList from "../components/PendingReportList";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { QueryErrorsDefault } from "@/app/context/queries/defaults/QueryErrorsDefault";

const ViewPendingReports = () => {
  const [searchString, setSearchString] = useState('')
  const [debouncedSearchString] = useDebounce(searchString, 1000)
  const reportData = useGetAdminPendingReports(debouncedSearchString);

  return (
    <QueryProvider {...reportData}>
      <Card className="p-0">
      <div className="p-5 flex justify-end items-center gap-4">
        <InputTextPure
          value={searchString}
          onChange={setSearchString}
          icon={BiSearch}
          placeholder="Szukaj zgłoszenia"
        />
      </div>
        <QueryIsSuccess>
          <QueryHasResults>
            <PendingReportList/>
          </QueryHasResults>
          <QueryHasNoResults>
          <div className="text-center py-10 px-4">Brak oczekujących zgłoszeń</div>
          </QueryHasNoResults>
        </QueryIsSuccess>
      </Card>
      <QueryErrorsDefault/>
    </QueryProvider>
  )
}

export default ViewPendingReports