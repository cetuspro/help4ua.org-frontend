import axios from "axios";
import { API_URL } from "../../config/env";
import { usePaginatedQuery2 } from "../../hooks/usePaginatedQuery2";

const getAdminPendingReports = ([search], pagination) =>
  axios({
    method: "GET",
    url: `${API_URL}/admin/reports`,
    params: {
      ...pagination,
      reportStatus: 10,
      SearchPhrase: search,
    },
  }).then(({ data }) => data);

export const useGetAdminPendingReports = (search = '') =>
  usePaginatedQuery2({
    queryKey: ["app.adminPendingReports", search],
    queryFn: getAdminPendingReports,
    defaultPageSize: 25,
  });
