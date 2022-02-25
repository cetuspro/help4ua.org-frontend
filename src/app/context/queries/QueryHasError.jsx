import { useQueryContext } from "./QueryProvider";

export const QueryHasError = ({ children }) => {
  const { error } = useQueryContext();

  return error ? children : null;
};
