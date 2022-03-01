import { API_URL } from "@/app/config/env";
import axios from "axios";

export const editNotice = (noticeId, urlToken, smsToken) => (data) => {
  return axios({
    method: 'PUT',
    url: `${API_URL}/notices/${noticeId}/update`,
    params: {smsToken, urlToken},
    data: data,
  });
}