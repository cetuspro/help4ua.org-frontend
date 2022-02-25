import axios from "axios";
import { API_URL } from "../../config/env";
import useQuery2 from "../../hooks/useQuery2";

const getInstitutions = () =>
  axios({
    method: "GET",
    url: `${API_URL}/institutions`,
  }).then(({ data }) => data.items);

export const useGetInstitutions = () =>
  useQuery2({
    queryKey: ["app.institutions"],
    queryFn: getInstitutions,
  });
