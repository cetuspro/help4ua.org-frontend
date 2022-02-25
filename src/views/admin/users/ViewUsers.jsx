import { QueryHasNoResults } from "@/app/context/queries/QueryHasNoResults";
import { QueryHasResults } from "@/app/context/queries/QueryHasResults";
import { QueryIsSuccess } from "@/app/context/queries/QueryIsSuccess";
import { QueryProvider } from "@/app/context/queries/QueryProvider";
import Card from "@/components/common/Card";
import { useGetUserRoles } from "../../../app/CRUD/users/getUserRoles";
import { useGetUserStatuses } from "../../../app/CRUD/users/getUserStatuses";
import { useGetUsers } from "../../../app/CRUD/users/getUsers_Admin";
import UserList from "../components/UserList";
import { InputSelectPure } from "@/components/form/Input_Select.pure";
import { useDebounce } from "use-debounce";
import { useMemo, useState } from "react";
import { optionsFromEnum } from "@/app/utils/optionsFromEnum";
import { BiSearch } from "react-icons/bi";
import { InputTextPure } from "@/components/form/Input_Text.pure";

const ViewUsers = () => {
  const [searchString, setSearchString] = useState('')
  const [debouncedSearchString] = useDebounce(searchString, 1000)
  const [statusFilter, setStatusFilter] = useState(0)
  const [typeFilter, setTypeFilter] = useState(3)
  const usersData = useGetUsers(debouncedSearchString, statusFilter, typeFilter);
  console.log(usersData.data);

  const {data: userRoles} = useGetUserRoles();
  const {data: userStatuses} = useGetUserStatuses();

  const userStatusesOptions = useMemo(() => optionsFromEnum(userStatuses, "Wybierz status"), [userStatuses])
  const userRolesOptions = useMemo(() => optionsFromEnum(userRoles), [userRoles])

  return (
    <QueryProvider {...usersData}>
      <Card>
      <div className="p-5 flex flex-col md:flex-row justify-end md:items-center gap-4">
          <InputTextPure
            value={searchString}
            onChange={setSearchString}
            icon={BiSearch}
            placeholder="Szukaj użytkownika"
          />
          <InputSelectPure
            options={userRolesOptions}
            value={typeFilter}
            onChange={({value}) => setTypeFilter(value)}
            className="w-full md:w-48"
          />
          <InputSelectPure
            options={userStatusesOptions}
            value={statusFilter}
            onChange={({value}) => setStatusFilter(value)}
            className="w-full md:w-48"
          />
        </div>
        <QueryIsSuccess>
          <QueryHasResults>
            <UserList/>
          </QueryHasResults>
          <QueryHasNoResults>Brak użytkowników</QueryHasNoResults>
        </QueryIsSuccess>
      </Card>
    </QueryProvider>
  )
}

export default ViewUsers