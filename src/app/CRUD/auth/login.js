import axios from "axios";
import { API_URL } from "@/app/config/env";

export const login = (data) => {
  return axios({
    method: "POST",
    url: `${API_URL}/account/sign-in`,
    data,
  });
};
