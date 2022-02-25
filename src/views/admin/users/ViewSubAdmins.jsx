import { QueryHasNoResults } from "@/app/context/queries/QueryHasNoResults";
import { QueryHasResults } from "@/app/context/queries/QueryHasResults";
import { QueryIsSuccess } from "@/app/context/queries/QueryIsSuccess";
import { QueryProvider } from "@/app/context/queries/QueryProvider";
import Card from "@/components/common/Card";
import { useGetUsers } from "../../../app/CRUD/users/getUsers_Admin";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { InputTextPure } from "@/components/form/Input_Text.pure";
import SubAdminList from "../components/SubAdminList";
import FormAddSubAdmin from "./components/FormAddSubAdmin";

const ViewSubAdmins = () => {
  const [searchString, setSearchString] = useState('')
  const [debouncedSearchString] = useDebounce(searchString, 1000)
  const usersData = useGetUsers(debouncedSearchString, null, 2);

  return (
    <div className="flex flex-col xl:flex-row gap-6 items-start">
      <QueryProvider {...usersData}>
        <Card className="flex-1">
        <div className="p-5 flex flex-col md:flex-row justify-end md:items-center gap-4">
            <InputTextPure
              value={searchString}
              onChange={setSearchString}
              icon={BiSearch}
              placeholder="Szukaj użytkownika"
            />
          </div>
          <QueryIsSuccess>
            <QueryHasResults>
              <SubAdminList/>
            </QueryHasResults>
            <QueryHasNoResults>Brak użytkowników</QueryHasNoResults>
          </QueryIsSuccess>
        </Card>
        <Card className="flex-1">
          <h2 className="mb-2">Utwórz konto administratora miasta</h2>
          <FormAddSubAdmin/>
        </Card>
      </QueryProvider>
    </div>
  )
}

export default ViewSubAdmins