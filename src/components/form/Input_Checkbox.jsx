import { useFormContext, Controller } from 'react-hook-form'

export const InputCheckbox = ({ label, name, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState
        return <Checkbox label={label} error={error} innerRef={ref} {...props} {...field} />
      }}
    />
  )
}

const Checkbox = ({ name, value, label, onChange, error, required }) => {
  return (
    <div className="relative">
      <div className="flex items-center cursor-pointer p-2" onClick={() => onChange(!value)}>
        <input
          name={name}
          onChange={onChange}
          type="checkbox"
          style={{ minWidth: '30px' }}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={!!value}
        />
        <label className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 text-justify">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      </div>
      {error && (
        <div className="text-sm absolute top-full left-0 text-red-800">{error?.message}</div>
      )}
    </div>
  )
}
