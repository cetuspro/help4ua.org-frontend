import { API_URL } from "@/app/config/env";
import axios from "axios";

export const FieldType = {
  PHONE: "phone"
}

const getHiddenFields = ({noticeId, type})  => {
  return axios({
    method: 'POST',
    url: `${API_URL}/notices/${noticeId}/raise-show`,
    params: {type},
    headers: {
      'Content-Type': "application/json"
    }
  }).then(({data}) => data)
}

export default getHiddenFields