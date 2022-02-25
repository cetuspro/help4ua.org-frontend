import { useQueryContext } from "./QueryProvider";

export const QueryIsLoading = ({ children, acceptIsFetching }) => {
  const { isLoading, isFetching } = useQueryContext();

  return isLoading || (acceptIsFetching && isFetching) ? children : null;
};
