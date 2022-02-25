import axios from "axios";
import { API_URL } from "@/app/config/env";

export const createSubAdminAccount = (data) => axios({
  method: "POST",
  url: `${API_URL}/admin/users/create-subadmin`,
  data,
});
