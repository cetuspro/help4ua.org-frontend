import axios from "axios";
import { API_URL } from "../../config/env";
import useQuery2 from "../../hooks/useQuery2";

const getAdminReportComments = ([reportId]) =>
  axios({
    method: "GET",
    url: `${API_URL}/admin/reports/${reportId}/comments`,
  }).then(({ data }) => data.items);

export const useGetAdminReportComments = (reportId) =>
  useQuery2({
    queryKey: ["app.adminReportComments", reportId],
    queryFn: getAdminReportComments,
    isArray: true,
  });
