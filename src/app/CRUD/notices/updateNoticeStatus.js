import { API_URL } from "@/app/config/env";
import axios from "axios";

export const updateNoticeStatus = (noticeId, urlToken) => ({smsToken, data}) => {
  return axios({
    method: 'PUT',
    url: `${API_URL}/notices/${noticeId}/update-status`,
    params: {smsToken, urlToken},
    data: data,
  });
}