import axios from "axios";
import { API_URL } from "@/app/config/env";

export const register = (data) => {
  return axios({
    method: "POST",
    url: `${API_URL}/account/sign-up`,
    data,
  });
};
