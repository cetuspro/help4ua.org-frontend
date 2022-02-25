export const FormFieldError = ({ error }) => {
  if (!error?.message) return null
  const message = error.message

  return <div className="text-xs text-red-600">{message}</div>
}
