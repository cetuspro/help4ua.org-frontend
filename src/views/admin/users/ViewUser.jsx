import { QueryIsSuccess } from "@/app/context/queries/QueryIsSuccess"
import { QueryProvider } from "@/app/context/queries/QueryProvider"
import { useGetAdminUser } from "../../../app/CRUD/users/getUser_Admin";
import { useParams } from "react-router-dom";
import UserInfo from "./components/UserInfo";
import UserLatestActivity from "./components/UserLatestActivity";
import UserPermissions from "./components/UserPermissions";

const ViewUser = () => {
  const {userId} = useParams();
  const userData = useGetAdminUser(userId);
  console.log(userData.data);

  return (
    <QueryProvider {...userData}>
      <QueryIsSuccess>
        <div className="flex flex-col lg:flex-row flex-1 gap-6 lg:items-start items-stretch">
          <UserInfo/>
          <div className="flex flex-col gap-6 grow">
            <UserLatestActivity/>
            <UserPermissions/>
          </div>
        </div>
        
      </QueryIsSuccess>
    </QueryProvider>
  )
}

export default ViewUser