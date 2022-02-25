import axios from "axios";
import { API_URL } from "../../config/env";
import useQuery2 from "../../hooks/useQuery2";

const getSensors = () =>
  axios({
    method: "GET",
    url: `${API_URL}/sensors`,
  }).then(({ data }) => data.items);

export const useGetSensors = () =>
  useQuery2({
    queryKey: ["app.sensors"],
    queryFn: getSensors,
  });
