import { useQuery } from "react-query";

const useQuery2 = ({
  queryKey: _queryKey,
  queryFn,
  config,
  isArray = false,
}) => {
  const [, ...queryKey] = _queryKey;

  const {
    data: queryData,
    error,
    status,
    refetch,
    isError,
    isSuccess,
    isLoading,
    isFetching,
    isPreviousData,
    ...rest
  } = useQuery(_queryKey, () => queryFn(queryKey), config);

  const data = status === "success" ? queryData : isArray ? [] : {};

  return {
    data,
    error,
    status,
    refetch,
    isError,
    isSuccess,
    isLoading,
    isFetching,
    isPreviousData,
    ...rest,
  };
};

export default useQuery2;
