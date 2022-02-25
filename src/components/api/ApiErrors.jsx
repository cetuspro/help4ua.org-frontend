const getErrorMsg = (error) => {
  if (!error) return null;

  if (typeof error === "string") return error;

  if (error?.response?.data?.errors && error?.response?.data?.errors?.length) {
    return Object.keys(error?.response?.data?.errors)
      .map((key) => error?.response?.data?.errors?.[key]?.message)
      ?.join(", ");
  }

  if (error?.response?.status) {
    switch (error?.response?.status) {
      case 404:
        return (
          <span>
            Strona nie istnieje {"("}StatusCode: {error?.response?.status})
          </span>
        ); //TODO: redirect to Err404
      case 403:
        return (
          <span>
            Brak dostępu {"("}StatusCode: {error?.response?.status})
          </span>
        ); //TODO: redirect to Err403
      default:
        return "Wystąpił nieoczekiwany błąd"; // TODO! add error reporting || more switch-cases
    }
  }

  if (error?.response?.data?.message) return error?.response?.data?.message;
  // DEFAULT:
  return error?.toString();
};

export const ApiErrors = ({ error }) => {
  if (!error) return null;
  return (
    <div
      className="bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700 dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium">Wystąpił błąd!</span> {getErrorMsg(error)}
    </div>
  );
};
