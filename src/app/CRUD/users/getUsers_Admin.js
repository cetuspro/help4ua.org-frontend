import { usePaginatedQuery2 } from "../../hooks/usePaginatedQuery2";
import axios from "axios";
import { API_URL } from "../../config/env";

const getUsers = ([search, status, role], pagination) => 
  axios({
    method: "GET",
    url: `${API_URL}/admin/users`,
    params: {
      ...pagination,
      SearchPhrase: search,
      ...(status ? {UserStatus: status} : {}),
      ...(role ? {RoleId: role} : {}),
    }
  }).then(({ data }) => data);

export const useGetUsers = (search = '', status, role) =>
  usePaginatedQuery2({
    queryKey: ["app.users", search, status, role],
    queryFn: getUsers,
    defaultPageSize: 25,
  });
