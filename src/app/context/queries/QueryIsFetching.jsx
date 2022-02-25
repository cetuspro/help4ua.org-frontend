import { useQueryContext } from "./QueryProvider";

export const QueryIsFetching = ({ children }) => {
  const { isFetching } = useQueryContext();

  return isFetching ? children : null;
};
