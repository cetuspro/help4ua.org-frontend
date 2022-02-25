import { createContext, useContext } from "react";
import { QueryPaginationDefault } from "./defaults/QueryPaginationDefault";
import { QueryErrorsDefault } from "./defaults/QueryErrorsDefault";
import { QuerySpinnerDefaults } from "./defaults/QuerySpinnerDefaults";

const QueryContext = createContext(null);
const QueryRefetchContext = createContext(() => {});

export const QueryProvider = ({
  data,
  isFetching,
  isLoading,
  error,
  status,
  children,
  isFetched,
  refetch,
  pagination,
  setPage,
  disableDefaults,
  alwaysRenderChild,
  withDefaultPagination,
  withParentQueryRefetch,
  ...rest
}) => {
  const parentRefetch = useQueryRefetch();

  const handleRefetch = () => {
    // console.log(withParentQueryRefetch, 'eloooo', parentRefetch)
    refetch();
    if (withParentQueryRefetch && typeof parentRefetch === "function") {
      parentRefetch();
    }
  };

  return (
    <QueryRefetchContext.Provider value={handleRefetch}>
      <QueryContext.Provider
        value={{
          data,
          isFetching,
          error,
          status,
          refetch: handleRefetch,
          isLoading,
          isFetched,
          pagination,
          setPage,
        }}
      >
        {!disableDefaults &&
          status !== "success" &&
          (isFetching ? <QuerySpinnerDefaults /> : <QueryErrorsDefault />)}
        {(disableDefaults || alwaysRenderChild || status === "success") && (
          <>
            {typeof children === "function"
              ? children(data, {
                  isFetching,
                  status,
                  error,
                  refetch,
                  isLoading,
                  ...rest,
                })
              : children}
            {withDefaultPagination && pagination && <QueryPaginationDefault />}
          </>
        )}
      </QueryContext.Provider>
    </QueryRefetchContext.Provider>
  );
};

export const useQueryContext = () => {
  const context = useContext(QueryContext);
  if (!context || !context.status) {
    throw new Error("Missing QueryProvider");
  }
  return {
    data: context?.data,
    isFetched: context?.isFetched,
    isFetching: context?.isFetching,
    isLoading: context?.isLoading,
    error: context?.error,
    status: context?.status,
    refetch: context?.refetch,
    pagination: context?.pagination,
    setPage: context?.setPage,
  };
};

export const useQueryRefetch = () => {
  return useContext(QueryRefetchContext);
};
