import { ApiErrors } from "@/components/api/ApiErrors";
import { useQueryContext } from "../QueryProvider";

export const QueryErrorsDefault = () => {
  const { error } = useQueryContext();

  return <ApiErrors error={error} />;
};
