import axios from "axios";
import { API_URL } from "../../config/env";
import { useInfiniteQuery } from "react-query";

const getAdminComments = (page, perPage) => axios({
    method: "GET",
    url: `${API_URL}/admin/comments`,
    params: {
      PageNumber: page,
      PageSize: perPage || 10,
    }
  }).then(({ data }) => data);

export const useGetAdminComments = ({perPage}) =>
  useInfiniteQuery(
    "app.adminComments",
    ({ pageParam = 1 }) => getAdminComments(pageParam, perPage),
    {
      getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.pageIndex+1 : undefined,
    }
  );
