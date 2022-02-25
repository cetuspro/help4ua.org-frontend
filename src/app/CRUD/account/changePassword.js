import axios from "axios";
import { API_URL } from "@/app/config/env";

export const changePassword = (data) => axios({
  method: "POST",
  url: `${API_URL}/account/change-password`,
  data,
});
