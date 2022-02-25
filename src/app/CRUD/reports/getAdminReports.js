import { usePaginatedQuery2 } from "../../hooks/usePaginatedQuery2";
import axios from "axios";
import { API_URL } from "../../config/env";

const getAdminReports = ([search, status, type], pagination) => 
  axios({
    method: "GET",
    url: `${API_URL}/admin/reports`,
    params: {
      ...pagination,
      SearchPhrase: search,
      ...(status ? {ReportStatus: status} : {}),
      ...(type ? {ReportType: type} : {}),
    }
  }).then(({ data }) => data);

export const useGetAdminReports = (search = '', status, type) =>
  usePaginatedQuery2({
    queryKey: ["app.adminReports", search, status, type],
    queryFn: getAdminReports,
    defaultPageSize: 25,
  });
