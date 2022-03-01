import { API_URL } from "@/app/config/env";
import axios from "axios";

export const getNoticeToEdit = (noticeId, urlToken) => ({smsToken}) => {
  return axios({
    method: 'GET',
    url: `${API_URL}/notices/${noticeId}/update`,
    params: {smsToken, urlToken}
  });
}