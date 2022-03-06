import axios from "axios";
import { API_URL } from "@/app/config/env";

export const addNotice = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/create`,
    data,
  })
}